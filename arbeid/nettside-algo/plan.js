// Planlegging, E18–E19: forward (progression) og backward (regression) search, relakserte heuristikker,
// HIERARCHICAL-SEARCH og sensorless planning. Se KONTRAKT.md. Alle tall er kontrollert mot
// videoer/notater/e18-planlegging-1.md og e19-planlegging-2.md (og verifiser.py der).
(() => {
  const A = window.ALGO;
  const SUB = "₀₁₂₃₄₅₆₇₈₉", sub = n => String(n).split("").map(c => SUB[c]).join("");
  // Boksmål som i motoren: halv bredde = 3,9 per tegn + 10, halv høyde = 8 per linje + 7.
  const W = t => Math.max(...String(t).split("\n").map(l => l.length)) * 7.8 + 30;
  const H = t => String(t).split("\n").length * 16 + 14;
  // Bryter en liste med literaler i linjer på høyst maks tegn: "At(A), At(B),\nAt(C)".
  const bryt = (xs, sep, maks, tom) => {
    const linjer = [];
    let cur = "";
    xs.forEach((x, i) => {
      const bit = x + (i < xs.length - 1 ? sep.trimEnd() : "");
      if (cur && (cur + " " + bit).length > maks) { linjer.push(cur); cur = bit; } else cur = cur ? cur + " " + bit : bit;
    });
    if (cur) linjer.push(cur);
    return linjer.join("\n") || tom;
  };

  // ---------- PDDL: literaler som strenger, "¬At(P1, SFO)" ----------
  const lit = s => {
    const m = String(s).trim().match(/^(¬?)\s*([A-Za-z]\w*)(?:\((.*)\))?$/);
    if (!m) throw new Error("Kan ikke lese literal " + s);
    return { neg: !!m[1], p: m[2], args: m[3] ? m[3].split(",").map(x => x.trim()) : [] };
  };
  const atom = l => l.p + (l.args.length ? "(" + l.args.join(", ") + ")" : "");
  const og = xs => (xs.length ? xs.join(" ∧ ") : "True");
  const komma = xs => (xs.length ? xs.join(", ") : "–");
  const nokkel = s => [...s].sort().join("|");
  const potens = (xs, n) => (n === 0 ? [[]] : potens(xs, n - 1).flatMap(r => xs.map(x => [...r, x])));

  const skjema = d => {
    const h = lit(d.navn);
    return { navn: h.p, param: h.args, pre: d.pre.map(lit), eff: d.eff.map(lit) };
  };
  function grunn(sk, verdier) {
    const th = Object.fromEntries(sk.param.map((v, i) => [v, verdier[i]]));
    const sett = l => ({ neg: l.neg, p: l.p, args: l.args.map(a => th[a] ?? a) });
    const pre = sk.pre.map(sett), eff = sk.eff.map(sett);
    return {
      navn: sk.navn + (verdier.length ? "(" + verdier.join(", ") + ")" : ""),
      pre: pre.map(l => (l.neg ? "¬" : "") + atom(l)),
      pos: pre.filter(l => !l.neg).map(atom), negp: pre.filter(l => l.neg).map(atom),
      add: eff.filter(l => !l.neg).map(atom), del: eff.filter(l => l.neg).map(atom)
    };
  }
  const handling = (sks, navn) => {
    const l = lit(navn), sk = sks.find(s => s.navn === l.p);
    if (!sk) throw new Error("Ukjent handling " + navn);
    return grunn(sk, l.args);
  };
  const kanBrukes = (s, a) => a.pos.every(f => s.includes(f)) && !a.negp.some(f => s.includes(f));
  // RESULT(s, a) = (s − DEL(a)) ∪ ADD(a). Rekkefølgen er bare for visning: i-te ADD tar plassen til i-te DEL.
  function resultat(s, a) {
    const add = a.add.filter(x => !s.includes(x) || a.del.includes(x));
    const ut = [];
    let k = 0;
    for (const x of s) {
      if (!a.del.includes(x)) ut.push(x);
      else if (k < add.length) ut.push(add[k++]);
    }
    for (; k < add.length; k++) if (!ut.includes(add[k])) ut.push(add[k]);
    return ut;
  }
  const oppfyller = (s, mal) => mal.every(m => { const l = lit(m); return l.neg !== s.includes(atom(l)); });

  function pddl(d) {
    const sks = d.skjema.map(skjema);
    const dyn = new Set(sks.flatMap(s => s.eff.map(l => l.p)));
    const init = d.init || [];
    const konst = [...new Set(init.flatMap(f => lit(f).args))];
    const akts = [];
    for (const sk of sks) for (const v of potens(konst, sk.param.length)) {
      const a = grunn(sk, v);
      // statiske preconditions (predikater ingen effekt endrer) må holde i Init, ellers er handlingen aldri applicable
      if (a.pos.every(f => dyn.has(lit(f).p) || init.includes(f))) akts.push(a);
    }
    akts.sort((x, y) => (x.navn < y.navn ? -1 : x.navn > y.navn ? 1 : 0));
    const vis = s => s.filter(f => dyn.has(lit(f).p));
    // Handlinger som ikke endrer tilstanden (Fly(P1, SFO, SFO)) er applicable etter Fig. 11.1, men hoppes over i søket (11.1.1 foreslår from ≠ to).
    const alleApp = s => akts.filter(a => kanBrukes(s, a)), app = s => alleApp(s).filter(a => nokkel(resultat(s, a)) !== nokkel(s));
    return { dyn, akts, vis, app, alleApp };
  }
  const skjemaTabell = d => ({
    tittel: "Action schemas",
    kol: ["Handling", "PRECOND", "EFFECT"],
    rader: d.skjema.map(s => [s.navn, og(s.pre), og(s.eff)])
  });

  // Plasserer bokser på en rad slik at boks nr. midt havner på x = 0.
  function rad(tekster, midt) {
    const xs = [];
    let x = 0;
    tekster.forEach((t, i) => { if (i) x += (W(tekster[i - 1]) + W(t)) / 2 + 30; xs.push(x); });
    const skift = xs[midt] ?? 0;
    return xs.map(v => v - skift);
  }
  // Trær med bokser: ALGO.tre gir koordinatene, x strekkes så de bredeste boksene ikke overlapper.
  function boksTre(rot) {
    const t = A.tre(rot);
    const maks = Math.max(...t.noder.map(n => W(n.tekst)));
    const f = Math.max(1, (maks + 30) / 80);
    t.noder.forEach(n => { n.x *= f; n.form = "boks"; delete n.under; });
    t.retning = true;
    return t;
  }
  // Delen av treet T som er synlig nå: tilstand (og ev. under) per node, kanter inn i sti eller mål blir sti.
  const delTre = (T, synlig, tilst, under) => ({
    retning: T.retning,
    noder: T.noder.filter(n => synlig.has(n.id)).map(n => ({ ...n, tilstand: tilst[n.id] || "ny", ...(under && { under: under[n.id] || "" }) })),
    kanter: T.kanter.filter(k => synlig.has(k.til)).map(k => ({ ...k, tilstand: ["sti", "mal"].includes(tilst[k.til]) ? "sti" : "ny" }))
  });
  const ferdigAktiv = tilst => Object.keys(tilst).forEach(k => { if (tilst[k] === "aktiv") tilst[k] = "utvidet"; });
  // Kjede av bokser ovenfra og ned: siste node får tilstanden siste; alle overstyrer alle noder og kanter.
  const kjedeGraf = (kjede, kanter, siste, alle) => ({ retning: true, noder: kjede.map((n, i) => ({ ...n, form: "boks", tilstand: alle || (i === kjede.length - 1 ? siste : "utvidet") })), kanter: kanter.map(k => (alle ? { ...k, tilstand: alle } : { ...k })) });

  // ================= Forward search (progression) =================
  function fremover(d) {
    const P = pddl(d);
    return d.plan ? fremoverPlan(d, P) : fremoverBFS(d, P);
  }

  function fremoverBFS(d, P) {
    const s0 = d.init.slice();
    const N = [{ id: "n0", s: s0, far: null, a: null }];
    const nadd = new Map([[nokkel(s0), "n0"]]);
    const H = [];
    let funnet = oppfyller(s0, d.mal) ? "n0" : null;
    const fr = funnet ? [] : ["n0"];
    while (fr.length && !funnet && N.length < 60) {
      const id = fr.shift(), n = N.find(x => x.id === id);
      const barn = [], gamle = [], app = P.app(n.s), alle = P.alleApp(n.s);
      for (const a of app) {
        const s2 = resultat(n.s, a), k = nokkel(s2);
        if (nadd.has(k)) { gamle.push({ a: a.navn, til: nadd.get(k) }); continue; }
        const b = { id: "n" + N.length, s: s2, far: id, a: a.navn };
        N.push(b); nadd.set(k, b.id); barn.push(b.id);
        if (oppfyller(s2, d.mal)) { funnet = b.id; break; }
        fr.push(b.id);
      }
      H.push({ id, app, alle, barn, gamle, fr: fr.slice() });
    }
    const navn = id => "s" + sub(id.slice(1));
    const lag = id => ({ id, tekst: komma(P.vis(N.find(x => x.id === id).s)), p: N.find(x => x.id === id).a, barn: N.filter(x => x.far === id).map(x => lag(x.id)) });
    const T = boksTre(lag("n0"));
    T.noder.forEach(n => { n.over = navn(n.id); });
    const sti = [];
    for (let id = funnet; id; id = N.find(x => x.id === id).far) sti.unshift(id);
    const plan = sti.slice(1).map(id => N.find(x => x.id === id).a);

    const synlig = new Set(["n0"]), tilst = { n0: "grense" }, ekstra = [];
    const scener = [];
    const scene = (tekst, tabeller) => {
      const g = delTre(T, synlig, tilst);
      g.kanter.push(...ekstra.map(k => ({ ...k })));
      scener.push({ tekst, graf: g, tabeller });
    };
    const frTab = f => ({ tittel: "Frontier (FIFO)", kol: ["Tilstand", "Fluents"], rader: f.map(id => [navn(id), komma(P.vis(N.find(x => x.id === id).s))]) });
    scene(`Starttilstanden s₀ = {${komma(P.vis(s0))}}. Mål: ${og(d.mal)}. Statiske fakta (${[...new Set(s0.filter(f => !P.dyn.has(lit(f).p)).map(f => lit(f).p))].join(", ")}) endres aldri og vises ikke. BFS med reached og tidlig måltest.`,
      [skjemaTabell(d), frTab(funnet ? [] : ["n0"])]);
    if (funnet === "n0") {
      tilst.n0 = "mal";
      scene("s₀ oppfyller allerede målet. Planen er tom.", [skjemaTabell(d)]);
    }
    for (const h of H) {
      ferdigAktiv(tilst);
      tilst[h.id] = "aktiv";
      h.barn.forEach(id => { synlig.add(id); tilst[id] = "grense"; });
      h.gamle.forEach(g => ekstra.push({ fra: h.id, til: g.til, tekst: g.a, tilstand: "beskaret" }));
      const noop = h.alle.filter(a => !h.app.includes(a)).map(a => a.navn);
      let t = `Utvider ${navn(h.id)}. Applicable: ${h.alle.map(a => a.navn).join(", ") || "ingen"}.${noop.length ? ` ${noop.join(", ")} endrer ikke tilstanden og hoppes over.` : ""}`;
      if (h.gamle.length) t += ` ${h.gamle.map(g => `${g.a} gir ${navn(g.til)}, som er nådd før`).join("; ")}.`;
      if (h.barn.length) t += ` Nye i frontier: ${h.barn.map(navn).join(", ")}.`;
      const tab = {
        tittel: `Applicable i ${navn(h.id)}`, kol: ["Handling", "DEL", "ADD", "RESULT"],
        rader: h.alle.map(a => [a.navn, komma(a.del), komma(a.add), komma(P.vis(resultat(N.find(x => x.id === h.id).s, a)))])
      };
      if (h.barn.includes(funnet)) {
        sti.forEach(id => { tilst[id] = "sti"; });
        tilst[funnet] = "mal";
        t += ` Måltest ved generering: ${navn(funnet)} oppfyller ${og(d.mal)}. Plan: ${plan.join(", ")}.`;
      }
      scene(t, [tab, frTab(h.fr)]);
    }
    if (!funnet) scene("Frontier er tom: ingen plan finnes.", []);
    return { scener, plan, funnet: !!funnet };
  }

  // Hvert steg: s_k til venstre, alle etterfølgerne i en kolonne til høyre. Hele stien vises til slutt.
  function fremoverPlan(d, P) {
    let s = d.init.slice();
    const boks = s => bryt(P.vis(s), ", ", 26, "–");
    const stier = [s];
    const spor = [["0", "–", komma(P.vis(s))]];
    const sporTab = m => ({ tittel: "Planen så langt", kol: ["Steg", "Handling", "s etterpå"], rader: spor.map(r => r.slice()), marker: m });
    const scener = [];
    const venstre = (k, tilstand) => ({ id: "s" + k, tekst: boks(stier[k]), x: 0, y: 0, over: "s" + sub(k), tilstand });
    const graf = (k, barn, tilstand) => ({
      retning: true,
      noder: [venstre(k, tilstand), ...(barn || [])].map(b => ({ ...b, form: "boks" })),
      kanter: (barn || []).map(b => ({ fra: "s" + k, til: b.id, tekst: b.a, tilstand: b.tilstand === "aktiv" ? "aktiv" : "ny" }))
    });
    scener.push({ tekst: `Starttilstanden s₀. Mål: ${og(d.mal)}. Cargo, Plane og Airport endres aldri og vises ikke. Vi følger planen fra notatet og ser på alle applicable handlinger underveis.`, graf: graf(0, null, "aktiv"), tabeller: [skjemaTabell(d), sporTab()] });
    let applicable0 = null;
    for (let k = 0; k < d.plan.length; k++) {
      const app = P.alleApp(s), endrer = P.app(s), noop = app.filter(a => !endrer.includes(a)).map(a => a.navn);
      if (k === 0) applicable0 = { endrer: endrer.map(a => a.navn), alle: app.map(a => a.navn) };
      const valgt = app.findIndex(a => a.navn === d.plan[k]);
      const tekster = app.map(a => boks(resultat(s, a)));
      const x = W(boks(s)) / 2 + Math.max(...tekster.map(W)) / 2 + 190, dy = Math.max(...tekster.map(H)) + 26;
      const barn = app.map((a, i) => ({ id: `b${k}_${i}`, tekst: tekster[i], x, y: (i - (app.length - 1) / 2) * dy, a: a.navn, tilstand: "grense" }));
      const appTab = { tittel: `Applicable i s${sub(k)}`, kol: ["Handling", "DEL", "ADD"], rader: app.map(a => [a.navn, komma(a.del), komma(a.add)]) };
      scener.push({ tekst: `${app.length} handlinger er applicable i s${sub(k)}: ${app.map(a => a.navn).join(", ")}. Hver gir en etterfølger RESULT(s${sub(k)}, a)${noop.length ? `; ${noop.join(" og ")} endrer ikke tilstanden` : ""}.`, graf: graf(k, barn, "aktiv"), tabeller: [appTab, sporTab()] });
      if (valgt < 0) {
        scener.push({ tekst: `${d.plan[k]} er ikke applicable i s${sub(k)}. Planen feiler.`, graf: graf(k, null, "feil"), tabeller: [appTab, sporTab()] });
        return { scener, applicable0, slutt: P.vis(s), ok: false };
      }
      const a = app[valgt];
      barn[valgt].tilstand = "aktiv";
      barn[valgt].over = "s" + sub(k + 1);
      const s2 = resultat(s, a);
      spor.push([String(k + 1), a.navn, komma(P.vis(s2))]);
      scener.push({ tekst: `Planen tar ${a.navn}: DEL ${komma(a.del)}, ADD ${komma(a.add)}. s${sub(k + 1)} = (s${sub(k)} − DEL) ∪ ADD; resten står.`, graf: graf(k, barn, "utvidet"), tabeller: [appTab, sporTab([spor.length - 1])] });
      stier.push(s2);
      s = s2;
    }
    const ok = oppfyller(s, d.mal);
    const dy = Math.max(...stier.map(x => H(boks(x)))) + 34;
    const g = {
      retning: true,
      noder: stier.map((x, k) => ({ id: "s" + k, form: "boks", tekst: boks(x), x: 0, y: k * dy, over: k ? "" : "s₀", under: "", tilstand: k === stier.length - 1 ? (ok ? "mal" : "feil") : ok ? "sti" : "utvidet" })),
      kanter: d.plan.map((a, k) => ({ fra: "s" + k, til: "s" + (k + 1), tekst: a, tilstand: ok ? "sti" : "ny" }))
    };
    scener.push({ tekst: ok ? `s${sub(d.plan.length)} oppfyller målet: ${og(d.mal)} står i tilstanden. Hele stien fra s₀; planen har ${d.plan.length} steg, og flyene kan stå hvor som helst.` : `Målet holder ikke etter planen.`, graf: g, tabeller: [sporTab()] });
    return { scener, applicable0, slutt: P.vis(s), ok };
  }

  // ================= Backward search (regression) =================
  function relevans(g, a) {
    const pos = g.filter(m => !lit(m).neg), neg = g.filter(m => lit(m).neg).map(m => atom(lit(m)));
    const gir = [...a.add.filter(x => pos.includes(x)), ...a.del.filter(x => neg.includes(x)).map(x => "¬" + x)];
    const sletter = a.del.filter(x => pos.includes(x)), sann = a.add.filter(x => neg.includes(x));
    const hvorfor = [...(gir.length ? [] : ["gir ingenting i målet"]), ...(sletter.length ? [`sletter ${komma(sletter)}`] : []), ...(sann.length ? [`gjør ${komma(sann)} sann`] : [])].join(" og ");
    return { ok: gir.length > 0 && !sletter.length && !sann.length, gir, hvorfor };
  }
  // POS(g′) = (POS(g) − ADD(a)) ∪ POS(PRECOND(a)),  NEG(g′) = (NEG(g) − DEL(a)) ∪ NEG(PRECOND(a)).
  // Rekkefølge som i notatet: det som blir igjen av g, så PRECOND i skjemaets rekkefølge.
  function regresser(g, a) {
    const rest = g.filter(m => { const l = lit(m); return l.neg ? !a.del.includes(atom(l)) : !a.add.includes(atom(l)); }), g2 = rest.slice();
    for (const p of a.pre) if (!g2.includes(p)) g2.push(p);
    return { rest, g2 };
  }

  function bakover(d) {
    const sks = d.skjema.map(skjema);
    let g = d.mal.slice();
    const gb = g => bryt(g, " ∧ ", 40, "True");
    const kjede = [{ id: "g0", tekst: gb(g), x: 0, y: 0, over: "g₀" }];
    const kanter = [], spor = [["g₀", "–", og(g)]];
    const scener = [], valgte = [];
    const sporTab = m => ({ tittel: "Regresjonen så langt", kol: ["", "Handling (siste først)", "g før handlingen"], rader: spor.map(r => r.slice()), marker: m });
    const initTab = d.init ? [{ tittel: "Init", kol: ["Fakta"], rader: [[og(d.init)]] }] : [];
    const graf = (alt, sisteTilstand) => ({
      retning: true,
      noder: [...kjede.map((n, i) => ({ ...n, tilstand: i === kjede.length - 1 ? sisteTilstand : "utvidet" })), ...(alt || [])].map(b => ({ ...b, form: "boks" })),
      kanter: [...kanter.map(k => ({ ...k })), ...(alt || []).map(b => ({ fra: kjede[kjede.length - 1].id, til: b.id, tekst: b.a, tilstand: b.tilstand === "feil" ? "feil" : b.tilstand === "aktiv" ? "aktiv" : "ny" }))]
    });
    scener.push({ tekst: `Backward search starter i målet g₀ = ${og(g)}${d.init ? " og stopper når g ⊆ Init" : ""}. I hvert steg ser vi bare på relevante handlinger.`, graf: graf(null, "aktiv"), tabeller: [skjemaTabell(d), ...initTab] });
    let ferdig = d.init && oppfyller(d.init, g);
    for (let k = 0; k < d.steg.length && !ferdig; k++) {
      const kand = d.steg[k].map(n => {
        const a = handling(sks, n), r = relevans(g, a);
        return { a, r, ...(r.ok && regresser(g, a)) };
      });
      const valgt = kand.findIndex(c => c.r.ok);
      const tekster = kand.map(c => (c.r.ok ? gb(c.g2) : "ikke relevant"));
      const forrige = kjede[kjede.length - 1], y = forrige.y + H(forrige.tekst) / 2 + Math.max(...tekster.map(H)) / 2 + 60;
      const xs = rad(tekster, Math.max(valgt, 0));
      const alt = kand.map((c, i) => ({
        id: `k${k}_${i}`, tekst: tekster[i], x: xs[i], y, a: c.a.navn, tilstand: c.r.ok ? "grense" : "feil",
        under: c.r.ok ? `gir ${c.r.gir.join(", ")}` : c.r.hvorfor
      }));
      const relTab = {
        tittel: `Kandidater for g${sub(k)}`, kol: ["Handling", "EFFECT", "Relevant?"],
        rader: kand.map(c => [c.a.navn, og([...c.a.add, ...c.a.del.map(x => "¬" + x)]),
          c.r.ok ? `ja, gir ${c.r.gir.join(", ")}` : `nei, ${c.r.hvorfor}`])
      };
      const rel = kand.filter(c => c.r.ok).map(c => c.a.navn), irr = kand.filter(c => !c.r.ok).map(c => c.a.navn);
      scener.push({
        tekst: `Kandidater for g${sub(k)}. Relevant: ${rel.join(", ") || "ingen"}.${irr.length ? ` Ikke relevant: ${irr.join(", ")}.` : ""} Relevant betyr at en effekt gir en del av målet og ingen effekt sletter en annen del.`,
        graf: graf(alt, "aktiv"), tabeller: [relTab, sporTab()]
      });
      if (valgt < 0) {
        scener.push({ tekst: `Ingen relevante handlinger for g${sub(k)}: grenen stopper.`, graf: graf(alt, "feil"), tabeller: [relTab, sporTab()] });
        return { scener, plan: null };
      }
      const c = kand[valgt];
      alt[valgt].tilstand = "aktiv";
      const regTab = {
        tittel: `Regresjon over ${c.a.navn}`, kol: ["", ""],
        rader: [["g − ADD(a)", og(c.rest)], ["∪ PRECOND(a)", og(c.a.pre)], [`g${sub(k + 1)}`, og(c.g2)]]
      };
      spor.push([`g${sub(k + 1)}`, c.a.navn, og(c.g2)]);
      g = c.g2;
      valgte.push(c.a.navn);
      ferdig = d.init && oppfyller(d.init, g);
      const mangler = d.init ? g.filter(m => !oppfyller(d.init, [m])) : [];
      let t = `Regresserer over ${c.a.navn}: trekk fra ADD (${komma(c.a.add)}), behold resten av målet og legg til PRECOND. `;
      t += !d.init ? `g${sub(k + 1)} = ${og(g)}.` : ferdig ? `g${sub(k + 1)} ⊆ Init, så søket stopper.` : `g${sub(k + 1)} ⊆ Init? Nei, ${komma(mangler)} står ikke i Init.`;
      scener.push({ tekst: t, graf: graf(alt, "aktiv"), tabeller: [regTab, sporTab([spor.length - 1])] });
      kanter.push({ fra: kjede[kjede.length - 1].id, til: "g" + (k + 1), tekst: c.a.navn });
      kjede.push({ id: "g" + (k + 1), tekst: gb(g), x: 0, y, over: "g" + sub(k + 1) });
    }
    const plan = ferdig ? valgte.slice().reverse() : null;
    const gr = graf(null, ferdig ? "mal" : "utvidet");
    if (ferdig) { gr.noder.forEach((n, i) => { n.tilstand = i === gr.noder.length - 1 ? "mal" : "sti"; }); gr.kanter.forEach(k => { k.tilstand = "sti"; }); }
    scener.push({
      tekst: ferdig ? `Ferdig. Planen er handlingene i omvendt rekkefølge: ${plan.join(", ")}.` : d.init ? "Stegene i eksempelet er brukt opp uten at g ⊆ Init." : "Notatet gir ingen Init her, så eksempelet stopper etter regresjonen.",
      graf: gr, tabeller: [sporTab()]
    });
    return { scener, plan };
  }

  // ================= Relaxed-problem heuristikker (11.3) =================
  function bfsLengde(d, P, slapp) {
    const start = d.init.slice(), sett = new Set([nokkel(start)]);
    let lag = [start];
    for (let dybde = 0; lag.length; dybde++) {
      if (lag.some(s => oppfyller(s, d.mal))) return dybde;
      const neste = [];
      for (const s of lag) for (const a of P.akts) {
        if (!kanBrukes(s, a)) continue;
        const s2 = slapp ? [...new Set([...s, ...a.add])] : resultat(s, a), k = nokkel(s2);
        if (!sett.has(k)) { sett.add(k); neste.push(s2); }
      }
      lag = neste;
    }
    return null;
  }

  function heuristikk(d) {
    const P = pddl(d);
    const hStjerne = bfsLengde(d, P, false), hPluss = bfsLengde(d, P, true);
    const mangler = d.mal.filter(m => !oppfyller(d.init, [m]));
    const hPre = mangler.length;
    const scener = [];
    const tall = (a, b, c) => ({ tittel: "Heuristikker fra s₀", kol: ["Heuristikk", "h"], rader: [["ignore preconditions (tell manglende mål)", a], ["ignore delete lists, optimal", b], ["ekte kost h*", c]] });
    const sb = s => bryt(P.vis(s), ", ", 38, "–");
    const s0 = { id: "r0", form: "boks", tekst: sb(d.init), x: 0, y: 0, over: "s₀" };
    const malTab = { tittel: "Mållitteraler i s₀", kol: ["Literal", "I s₀?"], rader: d.mal.map(m => [m, oppfyller(d.init, [m]) ? "ja" : "mangler"]) };
    scener.push({ tekst: `Starttilstanden s₀ og målet ${og(d.mal)}. BFS i det ekte problemet gir h* = ${hStjerne}. En relaxed problem fjerner regler, så den optimale relakserte planen kan bare bli kortere.`, graf: { retning: true, noder: [{ ...s0, tilstand: "aktiv" }], kanter: [] }, tabeller: [skjemaTabell(d), tall("?", "?", String(hStjerne))] });
    scener.push({ tekst: `<b>Ignore preconditions:</b> hver handling kan brukes i hver tilstand, så hvert manglende mållitteral nås med ett steg. ${hPre} mangler (${mangler.join(", ")}), og ingen handling gir mer enn ett av dem, så h = ${hPre}.`, graf: { retning: true, noder: [{ ...s0, tilstand: "aktiv" }], kanter: [] }, tabeller: [{ ...malTab, marker: d.mal.map((m, i) => (mangler.includes(m) ? i : -1)).filter(i => i >= 0) }, tall(String(hPre), "?", String(hStjerne))] });
    // ignore delete lists: kjør notatets relakserte plan steg for steg
    let s = d.init.slice();
    const kjede = [{ ...s0 }], kanter = [], spor = [];
    const sporTab = m => ({ tittel: "Relaksert plan (DEL ignoreres)", kol: ["Steg", "Handling", "ADD", "DEL (ignoreres)"], rader: spor.map(r => r.slice()), marker: m });
    for (let k = 0; k < d.avslappet.length; k++) {
      const a = P.akts.find(x => x.navn === d.avslappet[k]);
      if (!a || !kanBrukes(s, a)) throw new Error("Relaksert plan feiler ved " + d.avslappet[k]);
      const s2 = [...s, ...a.add.filter(x => !s.includes(x))];
      const beholdt = a.del.filter(x => s.includes(x));
      spor.push([String(k + 1), a.navn, komma(a.add), komma(a.del)]);
      kanter.push({ fra: kjede[kjede.length - 1].id, til: "r" + (k + 1), tekst: a.navn, tilstand: "ny" });
      const forrige = kjede[kjede.length - 1];
      kjede.push({ id: "r" + (k + 1), tekst: sb(s2), x: 0, y: forrige.y + H(forrige.tekst) / 2 + H(sb(s2)) / 2 + 44, over: "s" + sub(k + 1) + "⁺" });
      s = s2;
      let t = `<b>Ignore delete lists</b>, steg ${k + 1}: ${a.navn} legger til ${komma(a.add)}.`;
      if (beholdt.length) t += ` ${komma(beholdt)} blir stående, fordi DEL ignoreres.`;
      if (k === d.avslappet.length - 1) t += ` Nå holder målet: h = ${k + 1}.`;
      scener.push({ tekst: t, graf: kjedeGraf(kjede, kanter, k === d.avslappet.length - 1 ? "mal" : "aktiv"), tabeller: [sporTab([k]), tall(String(hPre), k === d.avslappet.length - 1 ? String(k + 1) : "?", String(hStjerne))] });
    }
    // i det ekte problemet feiler den relakserte planen
    let ekte = d.init.slice(), feil = null;
    for (const n of d.avslappet) {
      const a = P.akts.find(x => x.navn === n);
      if (!kanBrukes(ekte, a)) { feil = { n, mangler: a.pos.filter(f => !ekte.includes(f)) }; break; }
      ekte = resultat(ekte, a);
    }
    scener.push({
      tekst: `BFS i det relakserte problemet bekrefter at korteste relakserte plan har ${hPluss} steg.${feil ? ` I det ekte problemet feiler den ved ${feil.n}: ${komma(feil.mangler)} ble slettet tidligere.` : ""} ${hPre} ≤ ${hPluss} ≤ ${hStjerne}: begge er admissible, og ignore delete lists ligger nærmest h*.`,
      graf: kjedeGraf(kjede, kanter, null, "sti"), tabeller: [sporTab(), tall(String(hPre), String(hPluss), String(hStjerne))]
    });
    return { scener, hPre, hPluss, hStjerne };
  }

  // ================= HIERARCHICAL-SEARCH (Fig. 11.8) =================
  function kjorPlan(init, plan, prim) {
    let s = init.slice();
    for (const n of plan) {
      const a = prim[n], mangler = a.pre.filter(f => !s.includes(f));
      if (mangler.length) return { feil: n, mangler };
      s = resultat(s, a);
    }
    return { s };
  }

  function hierarkisk(d, v) {
    const init = d.init.concat(v.bil ? [d.bil] : []);
    const ref = A.kopi(d.ref);
    if (v.snu) ref[d.snu] = ref[d.snu].slice().reverse();
    const N = [{ id: "p0", plan: [d.rot], far: null, hla: null }];
    const fr = ["p0"], H = [];
    let svar = null;
    while (fr.length && N.length < 60) {
      const id = fr.shift(), n = N.find(x => x.id === id);
      const i = n.plan.findIndex(x => ref[x]);
      if (i < 0) {
        const r = kjorPlan(init, n.plan, d.prim);
        const mal = !r.feil && oppfyller(r.s, d.mal);
        H.push({ id, hla: null, r, mal, fr: fr.slice() });
        if (mal) { svar = id; break; }
        continue;
      }
      const prefix = n.plan.slice(0, i), suffix = n.plan.slice(i + 1);
      const barn = ref[n.plan[i]].map(r => {
        const b = { id: "p" + N.length, plan: [...prefix, ...r, ...suffix], far: id, hla: n.plan[i] };
        N.push(b); fr.push(b.id);
        return b.id;
      });
      H.push({ id, hla: n.plan[i], prefix, suffix, barn, fr: fr.slice() });
    }
    const vis = p => "[" + p.join(", ") + "]";
    const lag = id => ({ id, tekst: vis(N.find(x => x.id === id).plan), p: N.find(x => x.id === id).hla, barn: N.filter(x => x.far === id).map(x => lag(x.id)) });
    const T = boksTre(lag("p0"));
    const bib = {
      tittel: "Bibliotek (ILLUSTRASJON fra videoen)", kol: ["Handling", "Refinements / PRECOND → EFFECT"],
      rader: [...Object.entries(ref).map(([h, rs]) => [`${d.fullt[h] || h} (HLA)`, rs.map(vis).join(" eller ")]),
        ...Object.entries(d.prim).map(([p, a]) => [d.fullt[p] || p, `${og(a.pre)} → ${og([...a.add, ...a.del.map(x => "¬" + x)])}`])]
    };
    const spor = [["–", "–", "start", vis([vis([d.rot])])]];
    const sporTab = m => ({ tittel: "Sporing", kol: ["POP", "Første HLA", "Hva skjer", "Frontier etterpå"], rader: spor.map(r => r.slice()), marker: m });
    const synlig = new Set(["p0"]), tilst = { p0: "grense" }, under = {};
    const scener = [];
    const scene = (tekst, tab) => scener.push({ tekst, graf: delTre(T, synlig, tilst, under), tabeller: tab });
    scene(`Start: ${og(init)}. Mål: ${og(d.mal)}. Frontier er en FIFO-kø med planen ${vis([d.rot])}.`, [bib, sporTab()]);
    H.forEach((h, k) => {
      ferdigAktiv(tilst);
      const n = N.find(x => x.id === h.id), frTxt = h.fr.map(x => vis(N.find(y => y.id === x).plan)).join(", ") || "tom";
      tilst[h.id] = "aktiv";
      let t;
      if (h.hla) {
        h.barn.forEach(id => { synlig.add(id); tilst[id] = "grense"; });
        const rs = ref[h.hla];
        t = `POP ${vis(n.plan)}. Første HLA er ${h.hla}, prefix = ${vis(h.prefix)}${h.suffix.length ? `, suffix = ${vis(h.suffix)}` : ""}. ${rs.length === 1 ? "Én refinement" : rs.length + " refinements"}: ${h.barn.map(id => vis(N.find(x => x.id === id).plan)).join(" og ")} legges bakerst i køen.`;
        spor.push([vis(n.plan), h.hla, rs.length === 1 ? "én refinement" : `${rs.length} refinements`, frTxt]);
      } else if (h.r.feil) {
        tilst[h.id] = "feil"; under[h.id] = `${h.r.feil} kan ikke utføres`;
        t = `POP ${vis(n.plan)}. Ingen HLA igjen, så planen er primitiv. RESULT fra start er udefinert: ${h.r.feil} krever ${komma(h.r.mangler)}. Planen forkastes.`;
        spor.push([vis(n.plan), "null", `${h.r.feil} kan ikke utføres: forkastes`, frTxt]);
      } else if (h.mal) {
        let id = h.id;
        while (id) { tilst[id] = "sti"; id = N.find(x => x.id === id).far; }
        tilst[h.id] = "mal"; under[h.id] = komma(h.r.s);
        t = `POP ${vis(n.plan)}. Planen er primitiv (en implementation). Outcome = ${komma(h.r.s)}, og IS-GOAL er sann: <b>return ${vis(n.plan)}</b>.`;
        spor.push([vis(n.plan), "null", `outcome ${komma(h.r.s)}, IS-GOAL sann: return`, frTxt]);
      } else {
        tilst[h.id] = "utvidet"; under[h.id] = komma(h.r.s);
        t = `POP ${vis(n.plan)}. Primitiv, men outcome ${komma(h.r.s)} oppfyller ikke målet.`;
        spor.push([vis(n.plan), "null", "ikke mål", frTxt]);
      }
      scene(t, [sporTab([spor.length - 1]), bib]);
    });
    const plan = svar ? N.find(x => x.id === svar).plan : null;
    if (!svar) scene("Frontier er tom: failure.", [sporTab(), bib]);
    else {
      const andre = N.filter(x => x.id !== svar && !x.plan.some(p => ref[p]) && x.plan.length < plan.length);
      scene(`Svaret er ${vis(plan)}.${andre.length ? ` Merk: ${andre.map(x => vis(x.plan)).join(", ")} har færre steg, men lå bak i køen. Søket er bredde-først over refinements, ikke over antall primitive steg.` : " Minst én implementasjon av Go når målet, og det holder fordi agenten selv velger refinement."}`, [sporTab(), bib]);
    }
    return { scener, plan };
  }

  // ================= Sensorless planning (11.5.1) =================
  // Støvsugeren, Fig. 4.9: verden = (plass, venstre rent?, høyre rent?), nummerert 1–8 som i boka.
  const VERDENER = [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({ n, pos: n % 2 ? "L" : "R", l: n >= 5, r: [3, 4, 7, 8].includes(n) }));
  const mengde = ws => "{" + ws.map(w => w.n).sort((a, b) => a - b).join(", ") + "}";
  const nr = w => VERDENER.find(v => v.pos === w.pos && v.l === w.l && v.r === w.r);
  const sann = (w, f) => ({ AtL: w.pos === "L", AtR: w.pos === "R", CleanL: w.l, CleanR: w.r })[f];
  // Formelen lest av mengden når den ikke lenger er 1-CNF: grupper etter plass.
  function disjunksjon(ws) {
    const deler = ["L", "R"].map(p => ws.filter(w => w.pos === p)).filter(g => g.length).map(g => {
      const felles = ["AtL", "AtR", "CleanL", "CleanR"].filter(f => g.every(w => sann(w, f)));
      return felles.length > 1 ? "(" + felles.join(" ∧ ") + ")" : felles[0];
    });
    return deler.join(" ∨ ");
  }

  function sensorless(d) {
    return d.domene === "maling" ? maling(d) : stovsuger(d);
  }

  function stovsuger(d) {
    let ws = VERDENER.slice(), b = [];
    const kjede = [{ id: "b0", tekst: "True", under: mengde(ws), x: 0, y: 0, over: "b₀" }], kanter = [];
    const rader = [["–", mengde(ws), "True"]];
    const tab = m => ({ tittel: "Mengde (kap. 4) mot formel (kap. 11)", kol: ["Handling", "Kap. 4: mengde", "Kap. 11: formel"], rader: rader.map(r => r.slice()), marker: m });
    const verdTab = { tittel: "Verdenene (Fig. 4.9)", kol: ["Nr.", "Plass", "Venstre", "Høyre"], rader: VERDENER.map(w => [String(w.n), w.pos, w.l ? "rent" : "skitt", w.r ? "rent" : "skitt"]) };
    const scener = [{ tekst: "Uten sensorer vet agenten ingenting: b₀ = True, alle åtte verdenene. Open world: et fluent som ikke står i b, er ukjent.", graf: kjedeGraf(kjede, kanter, "aktiv"), tabeller: [verdTab, tab()] }];
    let enCNF = true;
    d.plan.forEach((h, k) => {
      let t;
      if (h === "Right" || h === "Left") {
        const til = h === "Right" ? "AtR" : "AtL", fra = h === "Right" ? "AtL" : "AtR";
        ws = ws.map(w => nr({ ...w, pos: til === "AtR" ? "R" : "L" }));
        if (enCNF) b = resultat(b, { add: [til], del: [fra] });
        t = `${h}: ADD ${til}, DEL ${fra}. b′ = (b − DEL) ∪ ADD. ¬${fra} følger av ${til} og skrives ikke, som i notatet.`;
      } else {
        const kjent = b.includes("AtL") ? "L" : b.includes("AtR") ? "R" : null;
        ws = ws.map(w => nr({ ...w, l: w.l || w.pos === "L", r: w.r || w.pos === "R" }));
        if (enCNF && kjent) {
          b = resultat(b, { add: [kjent === "L" ? "CleanL" : "CleanR"], del: [] });
          t = `Suck har conditional effects: when AtL: CleanL ∧ when AtR: CleanR. ${kjent === "L" ? "AtL" : "AtR"} står i b, så bare én betingelse slår til og formelen holder seg i 1-CNF.`;
        } else {
          enCNF = false;
          t = "Suck med ukjent plass: begge betingelsene kan slå til, så resultatet blir en disjunksjon. Det er ikke lenger 1-CNF; i verste fall vokser formlene eksponentielt.";
        }
      }
      // unike verdener, sortert
      ws = [...new Map(ws.map(w => [w.n, w])).values()].sort((a, c) => a.n - c.n);
      const f = enCNF ? og(b) : disjunksjon(ws);
      rader.push([h, mengde(ws), f]);
      kanter.push({ fra: kjede[kjede.length - 1].id, til: "b" + (k + 1), tekst: h });
      kjede.push({ id: "b" + (k + 1), tekst: f, under: mengde(ws), x: 0, y: (k + 1) * 110, over: "b" + sub(k + 1) });
      scener.push({ tekst: t, graf: kjedeGraf(kjede, kanter, enCNF ? "aktiv" : "feil"), tabeller: [tab([rader.length - 1])] });
    });
    const slutt = enCNF ? og(b) : disjunksjon(ws);
    const rent = ws.every(w => w.l && w.r);
    scener.push({ tekst: `Til slutt: ${slutt} = ${mengde(ws)}.${rent ? " Begge rutene er rene i alle mulige verdener, så planen virker uten sensorer." : ""}${enCNF ? " Formelen er kort (O(n) for n fluents), mens mengden kan ha 2ⁿ verdener." : " Alternativet er å dele Suck i SuckL og SuckR med preconditions; da holder 1-CNF seg, men agenten vet ikke om de er applicable i True."}`, graf: kjedeGraf(kjede, kanter, rent ? "mal" : enCNF ? "utvidet" : "feil"), tabeller: [tab()] });
    return { scener, mengde: mengde(ws), formel: slutt, enCNF };
  }

  // Malingsproblemet: verden = farger på (Chair, Table, Can1, Can2), to farger H (hvit) og S (svart) som illustrasjon.
  function maling(d) {
    const OBJ = ["Chair", "Table", "Can1", "Can2"];
    let ws = potens(["H", "S"], 4);
    let b = ["Color(x, C(x))"];
    const mal = ws => ws.filter(w => w[0] === w[1]).length;
    const unike = ws => [...new Map(ws.map(w => [w.join(""), w])).values()];
    const mb = b => bryt(b, " ∧ ", 30, "True");
    const kjede = [{ id: "m0", tekst: mb(b), under: `${ws.length} verdener, mål i ${mal(ws)}`, x: 0, y: 0, over: "b₀" }], kanter = [];
    const rader = [["b₀", "–", String(ws.length), String(mal(ws))]];
    const tab = m => ({ tittel: "Sensorless maling (verdener: ILLUSTRASJON med to farger)", kol: ["Steg", "Handling", "Verdener", "Målet sant i"], rader: rader.map(r => r.slice()), marker: m });
    const skj = { tittel: "Skjemaene (11.5)", kol: ["", ""], rader: [["Init", "Object(Table) ∧ Object(Chair) ∧ Can(C1) ∧ Can(C2) ∧ InView(Table)"], ["Goal", "Color(Chair, c) ∧ Color(Table, c)"], ["RemoveLid(can)", "PRECOND Can(can), EFFECT Open(can)"], ["Paint(x, can)", "PRECOND Object(x) ∧ Can(can) ∧ Color(can, c) ∧ Open(can), EFFECT Color(x, c)"]] };
    const scener = [{ tekst: "Agenten vet bare at alt har en farge, ∀x ∃c Color(x, c). Med Skolem-funksjonen C(x) blir det b₀ = Color(x, C(x)). Fargene er ukjente: open world.", graf: kjedeGraf(kjede, kanter, "aktiv"), tabeller: [skj, tab()] }];
    for (let k = 0; k < d.plan.length; k++) {
      const l = lit(d.plan[k]);
      let t;
      if (l.p === "RemoveLid") {
        b = resultat(b, { add: [`Open(${l.args[0]})`], del: [] });
        t = `RemoveLid(${l.args[0]}): ADD Open(${l.args[0]}). Fargene endres ikke, så verdenene er de samme.`;
      } else {
        const [x, can] = l.args;
        if (!b.includes(`Open(${can})`)) {
          scener.push({ tekst: `${d.plan[k]} er ikke applicable: Open(${can}) står ikke i b. En usann precondition gjør handlingen inapplicable.`, graf: kjedeGraf(kjede, kanter, "feil"), tabeller: [tab()] });
          return { scener };
        }
        const i = OBJ.indexOf(x), j = OBJ.indexOf(can);
        ws = unike(ws.map(w => w.map((c, m) => (m === i ? w[j] : c))));
        b = resultat(b, { add: [`Color(${x}, C(${can}))`], del: [] });
        t = `Paint(${x}, ${can}): Color(${can}, c) unifiserer med Color(x, C(x)), θ = {x/${can}, c/C(${can})}. ADD Color(${x}, C(${can})).`;
      }
      rader.push([`b${sub(k + 1)}`, d.plan[k], String(ws.length), String(mal(ws))]);
      kanter.push({ fra: kjede[kjede.length - 1].id, til: "m" + (k + 1), tekst: d.plan[k] });
      const forrige = kjede[kjede.length - 1];
      kjede.push({ id: "m" + (k + 1), tekst: mb(b), under: `${ws.length} verdener, mål i ${mal(ws)}`, x: 0, y: forrige.y + H(forrige.tekst) / 2 + H(mb(b)) / 2 + 70, over: "b" + sub(k + 1) });
      scener.push({ tekst: t + ` Med to farger: ${ws.length} mulige verdener, målet sant i ${mal(ws)}.`, graf: kjedeGraf(kjede, kanter, "aktiv"), tabeller: [tab([rader.length - 1])] });
    }
    const ok = mal(ws) === ws.length;
    scener.push({ tekst: ok ? "Målet holder i alle verdenene: c = C(Can1). Agenten vet ikke hvilken farge det blir, bare at den er lik." : "Målet holder ikke i alle verdenene ennå.", graf: kjedeGraf(kjede, kanter, ok ? "mal" : "utvidet"), tabeller: [tab()] });
    return { scener, verdener: ws.length, mal: mal(ws) };
  }

  // ================= Eksempeldata =================
  const CARGO = {
    skjema: [
      { navn: "Load(c, p, a)", pre: ["At(c, a)", "At(p, a)", "Cargo(c)", "Plane(p)", "Airport(a)"], eff: ["¬At(c, a)", "In(c, p)"] },
      { navn: "Unload(c, p, a)", pre: ["In(c, p)", "At(p, a)", "Cargo(c)", "Plane(p)", "Airport(a)"], eff: ["At(c, a)", "¬In(c, p)"] },
      { navn: "Fly(p, from, to)", pre: ["At(p, from)", "Plane(p)", "Airport(from)", "Airport(to)"], eff: ["¬At(p, from)", "At(p, to)"] }
    ],
    init: ["At(C1, SFO)", "At(C2, JFK)", "At(P1, SFO)", "At(P2, JFK)", "Cargo(C1)", "Cargo(C2)", "Plane(P1)", "Plane(P2)", "Airport(JFK)", "Airport(SFO)"],
    mal: ["At(C1, JFK)", "At(C2, SFO)"]
  };
  const TO_FLY = {
    skjema: [CARGO.skjema[2]],
    init: ["At(P1, A)", "At(P2, A)", "Plane(P1)", "Plane(P2)", "Airport(A)", "Airport(B)"],
    mal: ["At(P1, B)", "At(P2, B)"]
  };
  const LEKE = {
    skjema: [
      { navn: "TakeBus(from, to)", pre: ["At(User, from)", "Place(to)"], eff: ["¬At(User, from)", "At(User, to)"] },
      { navn: "DriveCar(from, to, car)", pre: ["Owns(User, car)", "At(User, from)", "At(car, from)", "Place(to)"], eff: ["¬At(User, from)", "¬At(car, from)", "At(User, to)", "At(car, to)"] },
      { navn: "Buy(gift, store)", pre: ["At(User, store)", "At(gift, store)"], eff: ["Owns(User, gift)"] }
    ],
    init: ["At(User, Home)", "Owns(User, Car)", "At(Car, Home)", "At(Toy, ToyStore)", "Place(Home)", "Place(ToyStore)"],
    mal: ["At(User, Home)", "Owns(User, Toy)"],
    steg: [["DriveCar(ToyStore, Home, Car)", "TakeBus(ToyStore, Home)"], ["Buy(Toy, ToyStore)"], ["DriveCar(Home, ToyStore, Car)"]]
  };
  const APE = {
    skjema: [
      { navn: "Go(x, y)", pre: ["At(Monkey, x)", "Height(Monkey, Low)", "Place(y)"], eff: ["¬At(Monkey, x)", "At(Monkey, y)"] },
      { navn: "Push(b, x, y)", pre: ["At(Monkey, x)", "At(b, x)", "Pushable(b)", "Height(Monkey, Low)", "Place(y)"], eff: ["¬At(b, x)", "At(b, y)", "¬At(Monkey, x)", "At(Monkey, y)"] },
      { navn: "ClimbUp(b, x)", pre: ["At(Monkey, x)", "At(b, x)", "Climbable(b)", "Height(Monkey, Low)"], eff: ["¬Height(Monkey, Low)", "Height(Monkey, High)", "On(Monkey, b)"] },
      { navn: "ClimbDown(b)", pre: ["On(Monkey, b)", "Height(Monkey, High)"], eff: ["¬On(Monkey, b)", "¬Height(Monkey, High)", "Height(Monkey, Low)"] },
      { navn: "Grasp(o, x, h)", pre: ["At(Monkey, x)", "At(o, x)", "Height(Monkey, h)", "Height(o, h)"], eff: ["Have(Monkey, o)"] },
      { navn: "Ungrasp(o)", pre: ["Have(Monkey, o)"], eff: ["¬Have(Monkey, o)"] }
    ],
    init: ["At(Monkey, A)", "At(Bananas, B)", "At(Box, C)", "Height(Monkey, Low)", "Height(Box, Low)", "Height(Bananas, High)", "Pushable(Box)", "Climbable(Box)", "Place(A)", "Place(B)", "Place(C)"],
    mal: ["Have(Monkey, Bananas)"],
    steg: [["Grasp(Bananas, B, High)"], ["ClimbUp(Box, B)"], ["Push(Box, C, B)"], ["Go(A, C)"]]
  };

  A.legg({
    id: "progresjon",
    navn: "Forward state-space search (progression)",
    familie: "Planlegging", ep: "E18",
    kort: "Forward search starter i initialtilstanden og bruker bare <i>applicable</i> ground actions: alle positive literaler i PRECOND står i s, og ingen negerte gjør det. Hver etterfølger er RESULT(s, a) = (s − DEL(a)) ∪ ADD(a). En tilstand er et sett med ground fluents med closed world, så alle søkealgoritmene fra kap. 3 virker uendret.",
    punkter: [
      "Forgreningen er enorm: med 10 flyplasser, 5 fly og 20 laster på hver er det 450–10 450 applicable handlinger per tilstand (L11 s. 16).",
      "Felle: glemt delete list. Uten ¬At(p, from) står flyet to steder etter Fly.",
      "Felle: last i et fly står ikke på flyplassen. Load sletter At(c, a) og legger til In(c, p).",
      "Felle: aldri negasjon i en tilstand. «P1 er ikke i SFO» betyr bare at At(P1, SFO) mangler (closed world).",
      "Forover er tilstandene ground og heuristikkene lettere å lage; derfor søker de fleste planleggere forover."
    ],
    data: null,
    eksempler: [
      { navn: "Air cargo (Fig. 11.1), planen fra notatet", data: { ...CARGO, plan: ["Load(C1, P1, SFO)", "Fly(P1, SFO, JFK)", "Unload(C1, P1, JFK)", "Load(C2, P2, JFK)", "Fly(P2, JFK, SFO)", "Unload(C2, P2, SFO)"] } },
      { navn: "Fig. 11.5a: to fly fra A til B, BFS", data: TO_FLY }
    ],
    kjor: d => fremover(d).scener,
    svar(d) {
      const r = fremover(d);
      if (d.plan) return [
        { id: "app0", navn: "Applicable handlinger i s₀ som endrer tilstanden (alfabetisk)", verdi: r.applicable0.endrer.join(", "), godta: [r.applicable0.alle.join(", ")] },
        { id: "slutt", navn: "Dynamiske fluents etter planen (alfabetisk)", verdi: r.slutt.slice().sort().join(", ") }
      ];
      return r.funnet ? [{ id: "plan", navn: "Planen BFS finner", verdi: r.plan.join(", ") }] : [];
    }
  });

  A.legg({
    id: "regresjon",
    navn: "Backward state-space search (regression)",
    familie: "Planlegging", ep: "E18",
    kort: "Backward search starter i målet og ser bare på <i>relevante</i> handlinger: en effekt gir en del av målet, og ingen effekt sletter en annen del. Regresjonen g′ = (g − ADD(a)) ∪ PRECOND(a) er det som må ha holdt før a. Søket stopper når g′ ⊆ Init, og planen er handlingene i omvendt rekkefølge.",
    punkter: [
      "Med negative literaler: NEG(g′) = (NEG(g) − DEL(a)) ∪ NEG(PRECOND(a)).",
      "Felle: glem ikke å trekke fra ADD, behold resten av målet, og legg til PRECOND, ikke EFFECT.",
      "Felle: en handling som gir en del av målet, men sletter en annen del, er ikke relevant (Poor ∧ Famous for målet ¬Poor ∧ Famous). Eldre fasiter kaller kravet <i>consistent</i>.",
      "Forgreningen blir ofte lav, men målene kan få variabler (Unload(C2, p′, SFO)), og gode heuristikker er vanskeligere.",
      "Eksamen vil ha målet før og etter hvert steg (2022 oppg. 7.2, 2023 oppg. 8): skriv kjeden g₀, g₁, …"
    ],
    data: null,
    eksempler: [
      { navn: "Eksamen 2023 oppg. 8: leke fra lekebutikken", data: LEKE },
      { navn: "Eksamen 2022 oppg. 7: ape og bananer (notatets skjemaer)", data: APE },
      { navn: "Fig. 11.5b: to fly fra A til B", data: { ...TO_FLY, steg: [["Fly(P1, A, B)", "Fly(P2, A, B)"], ["Fly(P2, A, B)", "Fly(P1, A, B)"]] } },
      { navn: "Øv selv 6: air cargo, g = At(P1, JFK) ∧ At(P2, SFO)", data: { ...CARGO, mal: ["At(P1, JFK)", "At(P2, SFO)"], steg: [["Fly(P2, SFO, JFK)", "Fly(P1, SFO, JFK)"], ["Fly(P2, JFK, SFO)"]] } },
      { navn: "L11 s. 17: relevans for målet ¬Poor ∧ Famous", data: { skjema: [{ navn: "A1", pre: [], eff: ["Famous"] }, { navn: "A2", pre: [], eff: ["Poor", "Famous"] }], init: null, mal: ["¬Poor", "Famous"], steg: [["A2", "A1"]] } }
    ],
    kjor: d => bakover(d).scener,
    svar(d) {
      const r = bakover(d);
      return r.plan ? [{ id: "plan", navn: "Planen (i utførelsesrekkefølge)", verdi: r.plan.join(", ") }] : [];
    }
  });

  A.legg({
    id: "relaksert-h",
    navn: "Relaxed-problem heuristics (ignore preconditions, ignore delete lists)",
    familie: "Planlegging", ep: "E18",
    kort: "En relaxed problem fjerner regler, så alt som var lov, er fortsatt lov, og den optimale løsningen kan bare bli kortere. Optimal kost i det relakserte problemet er derfor admissible. I PDDL kan planleggeren fjerne regler rett i skjemaene: dropp alle preconditions eller alle negative effekter.",
    punkter: [
      "Ignore preconditions: hvert mållitteral nås med ett steg, så tell manglende mål. Det kan telle for høyt når én handling gir flere mål. Ser du i tillegg bort fra delete effects, blir det set cover over add lists (NP-hard), og greedy set cover er ikke admissible.",
      "Ignore delete lists: ingen handling ødelegger fremgang. Argumentet krever positive mål og positive preconditions. Bare den <i>optimale</i> relakserte planen gir admissible h; hill climbing gir en tilnærming som kan bli for lang.",
      "Hvorfor admissible (2022 oppg. 1.8): hver ekte plan er også en gyldig relaksert plan, så den korteste relakserte er aldri lengre.",
      "Jo nærmere h ligger h*, jo færre noder ekspanderer A* (dominance)."
    ],
    data: null,
    eksempler: [
      { navn: "Air cargo fra starttilstanden", data: { ...CARGO, avslappet: ["Load(C1, P1, SFO)", "Fly(P1, SFO, JFK)", "Unload(C1, P1, JFK)", "Load(C2, P1, JFK)", "Unload(C2, P1, SFO)"] } }
    ],
    kjor: d => heuristikk(d).scener,
    svar(d) {
      const r = heuristikk(d);
      return [
        { id: "hpre", navn: "h, ignore preconditions (tell manglende mål)", verdi: String(r.hPre) },
        { id: "hplus", navn: "h, ignore delete lists (optimal)", verdi: String(r.hPluss) },
        { id: "hstar", navn: "Ekte kost h*", verdi: String(r.hStjerne) }
      ];
    }
  });

  const HAWAII = {
    rot: "Act", bil: "Have(Car)", snu: "Go",
    ref: { Act: [["Go", "Fly"]], Go: [["Drive", "Shuttle"], ["Taxi"]] },
    prim: {
      Drive: { pre: ["At(Home)", "Have(Car)"], add: ["At(LTP)"], del: ["At(Home)"] },
      Shuttle: { pre: ["At(LTP)"], add: ["At(SFO)"], del: ["At(LTP)"] },
      Taxi: { pre: ["At(Home)"], add: ["At(SFO)"], del: ["At(Home)"] },
      Fly: { pre: ["At(SFO)"], add: ["At(HNL)"], del: ["At(SFO)"] }
    },
    fullt: { Go: "Go(Home, SFO)", Fly: "Fly(SFO, HNL)", Drive: "Drive(Home, LTP)", Shuttle: "Shuttle(LTP, SFO)", Taxi: "Taxi(Home, SFO)" },
    init: ["At(Home)"], mal: ["At(HNL)"]
  };
  A.legg({
    id: "htn",
    navn: "Hierarchical search (HTN, Fig. 11.8)",
    familie: "Planlegging", ep: "E19",
    kort: "HIERARCHICAL-SEARCH er bredde-først søk over planer. Den tar ut den grunneste planen, finner første high-level action (HLA) og legger inn én ny plan per refinement. En plan uten HLA-er er en implementation; den returneres hvis RESULT fra starttilstanden oppfyller målet, og forkastes hvis en precondition ikke holder.",
    punkter: [
      "En refinement kan inneholde HLA-er; en implementation har bare primitive handlinger (2025 oppg. 11a).",
      "Minst én: en høynivåplan når målet hvis minst én implementasjon gjør det, fordi agenten velger refinement. I en ikke-deterministisk verden må planen virke for alle utfall.",
      "Felle: søket finner ikke korteste plan. Det er bredde-først over refinements, så med bil vinner [Drive, Shuttle, Fly] over [Taxi, Fly].",
      "Gevinst: r^((d−1)/(k−1)) nedbrytingstrær mot bᵈ for flatt søk. Skriv formelen, ikke slagordet «kth root».",
      "Hierarkiet er laget for videoen etter bokas Hawaii-eksempel (ILLUSTRASJON). LTP = SFOLongTermParking."
    ],
    data: null,
    valg: [
      { id: "bil", navn: "Agenten har bil (Have(Car))", type: "bool", std: false },
      { id: "snu", navn: "[Taxi] før [Drive, Shuttle]", type: "bool", std: false }
    ],
    eksempler: [
      { navn: "Hawaii uten bil (notatets håndsporing)", data: HAWAII, valg: { bil: false, snu: false } },
      { navn: "Hawaii med bil (quiz kap. 2)", data: HAWAII, valg: { bil: true, snu: false } },
      { navn: "Med bil og [Taxi] først (Øv selv 4)", data: HAWAII, valg: { bil: true, snu: true } }
    ],
    kjor: (d, v) => hierarkisk(d, v).scener,
    svar(d, v) {
      const r = hierarkisk(d, v);
      return r.plan ? [{ id: "plan", navn: "Planen som returneres", verdi: r.plan.join(", ") }] : [];
    }
  });

  A.legg({
    id: "sensorless",
    navn: "Sensorless planning (belief state som formel)",
    familie: "Planlegging", ep: "E19",
    kort: "Uten sensorer er belief staten en formel, ikke en liste med tilstander. RESULT fra E18 gjelder nesten uendret: b′ = (b − DEL(a)) ∪ ADD(a). Starter b som en konjunksjon av literaler (1-CNF), er den fortsatt det etter vanlige PDDL-handlinger, så formelen er O(n) lang mens mengden kan ha 2ⁿ verdener.",
    punkter: [
      "Open world: et fluent som ikke står i b, er ukjent, ikke usant. Klassisk planlegging bruker closed world.",
      "Conditional effect med ukjent betingelse gir disjunksjon: Suck på True gir (AtL ∧ CleanL) ∨ (AtR ∧ CleanR), som ikke er 1-CNF.",
      "En usann precondition gjør handlingen inapplicable; en conditional effect som ikke slår til, endrer ingenting.",
      "Klassisk mot sensorless (2025 oppg. 11b): full mot ingen observerbarhet, closed mot open world, tilstander mot belief states."
    ],
    data: null,
    eksempler: [
      { navn: "Støvsugeren: [Right, Suck, Left, Suck]", data: { domene: "stovsuger", plan: ["Right", "Suck", "Left", "Suck"] } },
      { navn: "Støvsugeren: Suck rett på True", data: { domene: "stovsuger", plan: ["Suck"] } },
      { navn: "Øv selv 5: [Left, Suck, Right, Suck]", data: { domene: "stovsuger", plan: ["Left", "Suck", "Right", "Suck"] } },
      { navn: "Malingsproblemet (11.5.1)", data: { domene: "maling", plan: ["RemoveLid(Can1)", "Paint(Chair, Can1)", "Paint(Table, Can1)"] } }
    ],
    kjor: d => sensorless(d).scener,
    svar(d) {
      if (d.domene === "maling") return [];
      const r = sensorless(d);
      return [
        { id: "mengde", navn: "Mengden til slutt (kap. 4)", verdi: r.mengde },
        { id: "formel", navn: "Formelen til slutt (kap. 11)", verdi: r.formel, godta: [r.formel.replace(/∧/g, "^").replace(/∨/g, "v"), r.formel.replace(/∧/g, "and").replace(/∨/g, "or")] }
      ];
    }
  });

  if (typeof module !== "undefined") module.exports = { fremover, bakover, heuristikk, hierarkisk, sensorless, CARGO, LEKE, APE, TO_FLY, HAWAII };
})();
