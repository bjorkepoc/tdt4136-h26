// Spill: E08 (minimax, alpha-beta), E09 (expectiminimax, MCTS) og E10 (dominans, IESDS, rene Nash-likevekter). Se KONTRAKT.md.
// Alpha-beta følger Fig. 6.7 og E08-notatet: barn fra venstre mot høyre, α/β oppdateres før testen,
// MAX kutter når v ≥ β og MIN når v ≤ α (valget «likhet» slår av likhet), og kuttede noder får bare en grense.
(() => {
  const A = window.ALGO;
  const INF = Infinity;
  const tall = (x, d = 3) => (x === INF ? "∞" : x === -INF ? "−∞" : String(+(+x).toFixed(d)).replace("-", "−").replace(".", ","));
  const sv = x => String(+(+x).toFixed(4)); // svar: punktum som desimaltegn, som i de engelske fasitene
  const tab = (tittel, kol, rader, marker = []) => ({ tittel, kol, rader, marker });
  const TYPE = { max: "MAX", min: "MIN", sjanse: "sjanse", blad: "blad" };

  // ---------- Treet fra tegneverktøyet: typer, navn, verdier og sannsynligheter gjøres trygge ----------
  function lagTre(rot) {
    if (!rot || typeof rot !== "object" || (!(rot.barn && rot.barn.length) && (rot.verdi == null || rot.verdi === ""))) return null;
    const brukt = new Set(), adv = [];
    let k = 0;
    const ga = (n, sist, far) => {
      const barn = Array.isArray(n.barn) ? n.barn.filter(b => b && typeof b === "object") : [];
      let id = n.id != null && n.id !== "" ? String(n.id) : "";
      while (!id || brukt.has(id)) id = "n" + ++k;
      brukt.add(id);
      const type = !barn.length ? "blad" : ["max", "min", "sjanse"].includes(n.type) ? n.type : sist === "max" ? "min" : "max";
      const navn = n.tekst != null && String(n.tekst).trim() ? String(n.tekst).trim() : id;
      const m = { id, navn, type, far, p: n.p, barn: [] };
      if (type === "blad") {
        m.verdi = Number(n.verdi);
        if (n.verdi == null || n.verdi === "" || !isFinite(m.verdi)) { m.verdi = 0; adv.push(`Bladet ${navn} mangler verdi, så det regnes som 0.`); }
      }
      m.barn = barn.map(b => ga(b, type === "sjanse" ? sist : type, m));
      if (type === "sjanse") {
        const ps = m.barn.map(b => { const x = Number(b.p); return b.p != null && b.p !== "" && isFinite(x) && x >= 0 ? x : null; });
        const kjent = ps.filter(x => x != null).reduce((a, b) => a + b, 0), mangler = ps.filter(x => x == null).length;
        let eff = ps.map(x => (x == null ? Math.max(0, 1 - kjent) / mangler : x));
        const sum = eff.reduce((a, b) => a + b, 0);
        if (mangler) adv.push(`Under ${navn} mangler p på ${mangler} kant${mangler > 1 ? "er" : ""}; de deler resten, ${tall(Math.max(0, 1 - kjent))}.`);
        if (sum <= 0) { eff = eff.map(() => 1 / eff.length); adv.push(`Sannsynlighetene under ${navn} er 0, så alle utfall regnes som like sannsynlige.`); }
        else if (Math.abs(sum - 1) > 1e-9) { eff = eff.map(x => x / sum); adv.push(`Sannsynlighetene under ${navn} summerer til ${tall(sum)}, ikke 1, så hver deles på ${tall(sum)}.`); }
        m.barn.forEach((b, i) => (b.pe = eff[i]));
      }
      return m;
    };
    const T = ga(rot, undefined, null);
    const alle = [];
    const kø = [T];
    while (kø.length) { const n = kø.shift(); alle.push(n); kø.push(...n.barn); } // BFS-rekkefølge
    const inn = n => ({ id: n.id, type: n.type, tekst: n.navn, verdi: n.type === "blad" ? n.verdi : undefined, barn: n.barn.map(inn) });
    const lay = A.tre(inn(T));
    const per = {};
    alle.forEach(n => (per[n.id] = n));
    lay.noder.forEach(x => { x.tekst = per[x.id].navn; if (per[x.id].type === "blad") x.under = tall(per[x.id].verdi); else delete x.under; });
    lay.kanter.forEach(e => { const c = per[e.til]; e.tekst = c.far && c.far.type === "sjanse" ? tall(c.pe) : ""; });
    return { T, alle, per, lay, adv };
  }

  // Ett bilde av treet. st: id → {tilstand, over, under}. Kanten inn til en node arver nodens tilstand.
  const bilde = (G, st, tekst, ekstra = {}) => ({
    tekst,
    graf: {
      retning: false,
      noder: G.lay.noder.map(x => Object.assign({}, x, st[x.id])),
      kanter: G.lay.kanter.map(e => ({ ...e, tilstand: (st[e.til] && st[e.til].tilstand) || "ny" }))
    },
    ...ekstra
  });
  const settSt = (st, id, o) => (st[id] = Object.assign({}, st[id], o));
  const underTre = n => [n, ...n.barn.flatMap(underTre)];

  // ---------- Minimax og expectiminimax: verdier nedenfra, én scene per indre node ----------
  function verdier(G) {
    const v = {};
    const rek = n => {
      if (n.type === "blad") return (v[n.id] = n.verdi);
      const vs = n.barn.map(rek);
      return (v[n.id] = n.type === "max" ? Math.max(...vs) : n.type === "min" ? Math.min(...vs) : n.barn.reduce((s, b, i) => s + b.pe * vs[i], 0));
    };
    rek(G.T);
    return v;
  }
  // Like verdier med avrundingsstøy ((0,2 + 0,4)/2 mot 0,3) regnes som like; første barn vinner da.
  const lik = (x, y) => x === y || Math.abs(x - y) < 1e-9;
  const valgtBarn = (n, v) => {
    if (n.type !== "max" && n.type !== "min") return null;
    let b = n.barn[0];
    for (const c of n.barn) if (!lik(v(c), v(b)) && (n.type === "max" ? v(c) > v(b) : v(c) < v(b))) b = c;
    return b;
  };
  // Alle barn av roten med samme minimax-verdi som det valgte er like gode trekk.
  const likeTrekk = (G, b, v = verdier(G)) => G.T.barn.filter(c => c !== b && lik(v[c.id], v[b.id])).map(c => c.navn);

  function verdiScener(G, ekspekt) {
    const sc = [], st = {}, v = {};
    const har = G.alle.some(n => n.type === "sjanse");
    const start = `Startpunkt: ${G.alle.filter(n => n.type === "blad").length} blader. Verdiene fylles inn nedenfra, barn fra venstre mot høyre.` +
      (har && !ekspekt ? " Treet har sjansenoder; de regnes som forventning (expectiminimax)." : "") + (G.adv.length ? " " + G.adv.join(" ") : "");
    sc.push(bilde(G, st, start));
    if (G.T.type === "blad") {
      settSt(st, G.T.id, { tilstand: "sti" });
      sc.push(bilde(G, st, `Treet er bare ett blad, så verdien er ${tall(G.T.verdi)}.`));
      return sc;
    }
    const rek = n => {
      if (n.type === "blad") return (v[n.id] = n.verdi);
      const vs = n.barn.map(rek);
      let x, regn;
      if (n.type === "sjanse") {
        x = n.barn.reduce((s, b, i) => s + b.pe * vs[i], 0);
        regn = n.barn.map((b, i) => `${tall(b.pe)}·${tall(vs[i])}`).join(" + ");
      } else {
        x = n.type === "max" ? Math.max(...vs) : Math.min(...vs);
        const ts = vs.map(y => tall(y));
        regn = `${n.type}(${ts.join(ts.some(t => t.includes(",")) ? "; " : ", ")})`; // «max(4; 6,5)» når desimalkomma
      }
      v[n.id] = x;
      n.barn.forEach(b => settSt(st, b.id, { tilstand: "grense" }));
      settSt(st, n.id, { tilstand: "aktiv", under: tall(x) });
      sc.push(bilde(G, st, `${n.navn} (${TYPE[n.type]}) = ${regn} = <b>${tall(x)}</b>.`));
      n.barn.forEach(b => settSt(st, b.id, { tilstand: "utvidet" }));
      settSt(st, n.id, { tilstand: "utvidet" });
      return x;
    };
    rek(G.T);
    const sti = [G.T];
    for (let n = G.T, b; (b = valgtBarn(n, c => v[c.id])); n = b) sti.push(b);
    sti.forEach(n => settSt(st, n.id, { tilstand: "sti" }));
    const b = sti[1];
    sc.push(bilde(G, st, `Rotverdien er <b>${tall(v[G.T.id])}</b>.` + (b ? ` Beste trekk for ${TYPE[G.T.type]} er mot ${b.navn}${likeTrekk(G, b, v).length ? " (første av like gode)" : ""}. Markert sti: ${sti.map(n => n.navn).join(" → ")}.` : "")));
    return sc;
  }
  function verdiSvar(G) {
    if (!G) return [];
    const v = verdier(G), b = valgtBarn(G.T, c => v[c.id]);
    return [{ id: "rot", navn: "Rotverdi", verdi: sv(v[G.T.id]) }]
      .concat(b ? [{ id: "trekk", navn: "Beste trekk (barnet av roten)", verdi: b.navn, godta: likeTrekk(G, b, v) }] : [])
      .concat(G.alle.some(n => n.type !== "blad") ? [{ id: "verdier", navn: "Verdier i de indre nodene", verdi: G.alle.filter(n => n.type !== "blad").map(n => `${n.navn}=${sv(v[n.id])}`).join(", ") }] : []);
  }
  const tomt = [{ tekst: "Treet er tomt. Tegn et tre med en rot og minst ett blad." }];

  // ---------- Eksempeltrær ----------
  const blad = (id, verdi, p) => ({ id, type: "blad", verdi, ...(p != null ? { p } : {}) });
  const node = (id, type, barn, p) => ({ id, type, barn, ...(p != null ? { p } : {}) });
  // alt("A", "max", {B: {b1: 3, …}, …}): MAX og MIN veksler nedover, tall er blader.
  const alt = (id, type, spec) => node(id, type, Object.entries(spec).map(([k, x]) => (typeof x === "object" ? alt(k, type === "max" ? "min" : "max", x) : blad(k, x))));
  // Bokas Fig. 6.2.
  const FIG62 = alt("A", "max", { B: { b1: 3, b2: 12, b3: 8 }, C: { c1: 2, c2: 4, c3: 6 }, D: { d1: 14, d2: 5, d3: 2 } });
  // Eksamen 2021, oppgave 5.
  const X21 = alt("A", "max", { B: { E: { L1: 2, L2: 3 }, F: { L3: 5, L4: 10 } }, C: { G: { L5: 0 }, H: { L6: 3, L7: 6 } }, D: { I: { L8: 2, L9: 1 }, J: { L10: 7, L11: 3 } } });
  // Eksamen 2020 kontinuasjon, Problem 4 (bladet under o som figuren kaller x5 er x15).
  const X20K = alt("a", "max", {
    b: { d: { h: { x1: 7, x2: 9 }, i: { x3: 6, x4: 9 } }, e: { j: { x5: 11, x6: 12 }, k: { x7: 13, x8: 10 } } },
    c: { f: { l: { x9: 5, x10: 4 }, m: { x11: 4, x12: 3 } }, g: { n: { x13: 1, x14: 2 }, o: { x15: 2, x16: 3 } } }
  });
  // Eksamen 2018, Problem 2 (bladene heter A–Z2 i oppgaveteksten, rekkefølgen U W X V er oppgavens).
  const X18 = alt("s", "max", {
    j: { a: { A: 2, B: 6 }, b: { C: 1, D: 6, E: 8 }, c: { F: 4, G: 9, H: 2, I: 5 } },
    k: { d: { J: 8, K: 4 }, e: { L: 2, M: 10, N: 5 }, f: { O: 3, P: 9, Q: 6, R: 3 } },
    l: { g: { S: 4, T: 3 }, h: { U: 5, W: 6, X: 9, V: 4 }, i: { Y: 9, Z1: 8, Z2: 9 } }
  });
  // Eksamen 2025, oppgave 8.
  const X25 = node("A", "max", [blad("B", 10), node("C", "min", [blad("D", 18), node("E", "max", [blad("F", 1), node("G", "min", [blad("H", 5), blad("I", 2)])])]),
    node("J", "min", [blad("K", 15), node("L", "max", [blad("M", 20), node("N", "min", [blad("O", 2), blad("P", 5)])])]), blad("Q", 12)]);
  // Dypere tre fra E08-videoen (ILLUSTRASJON).
  const T2 = alt("A", "max", { B: { D: { d1: 3, d2: 5 }, E: { e1: 6, e2: 9 } }, C: { F: { f1: 1, f2: 2 }, G: { g1: 0, g2: -1 } } });
  // Bøttespillet fra L8 og eksamen 2024 Q10–Q11.
  const BOTTE = alt("S", "max", { A: { a1: -50, a2: 50 }, B: { b1: 3, b2: 1 }, C: { c1: -5, c2: 15 } });
  const B24 = alt("S", "max", { A: { a1: 2, a2: 3 }, B: { b1: 1, b2: 6 }, C: { c1: -2, c2: -1 } });

  A.legg({
    id: "minimax",
    navn: "Minimax",
    familie: "Spill",
    ep: "E08",
    kort: "Minimax regner ut verdien når begge spiller perfekt. Verdiene fylles inn nedenfra: MAX-noder (△) tar største verdi blant barna, MIN-noder (▽) tar minste. Beste trekk er kanten til barnet som gir rotverdien. Minimax-verdien er en garanti: tabber MIN seg ut, får MAX bare mer.",
    punkter: [
      "Dybde først gjennom hele treet: tid O(b<sup>m</sup>), plass O(bm). Sjakk: b ≈ 35, m ≈ 80.",
      "Barn tas fra venstre mot høyre (alfabetisk); ved like verdier velges det første.",
      "Mot en tilfeldig motstander regnes gjennomsnitt i stedet (expectimax, E09). I bøttespillet gir minimax B og expectimax C.",
      "Flere spillere: hver node får en nyttevektor, og spilleren i trekket maksimerer sin egen plass."
    ],
    data: "tre",
    eksempler: [
      { navn: "Bokas Fig. 6.2", data: FIG62 },
      { navn: "Eksamen 2021, oppgave 5", data: X21 },
      { navn: "Eksamen 2025, oppgave 8 a", data: X25 },
      { navn: "Eksamen 2020 kontinuasjon, Problem 4", data: X20K },
      { navn: "Eksamen 2018, Problem 2", data: X18 },
      { navn: "Bøttespillet (L8)", data: BOTTE }
    ],
    kjor(data) { const G = lagTre(data); return G ? verdiScener(G, false) : tomt; },
    svar(data) { return verdiSvar(lagTre(data)); }
  });

  // ---------- Alpha-beta ----------
  function alfaBeta(G, likhet) {
    const sc = [], st = {}, iv = {}, kutt = [], sett = [];
    const ab = (a, b) => `α=${tall(a)} β=${tall(b)}`;
    const vis = ([lo, hi]) => (lo === hi ? tall(lo) : hi < INF ? "≤" + tall(hi) : lo > -INF ? "≥" + tall(lo) : "?");
    const ut = (n, tekst) => sc.push(bilde(G, st, tekst));
    if (G.adv.length) ut(null, "Merk: " + G.adv.join(" "));
    const rek = (n, a, as, b, bs) => {
      if (n.type === "blad") { sett.push(n); iv[n.id] = [n.verdi, n.verdi]; return n.verdi; }
      if (n.far) settSt(st, n.far.id, { tilstand: "utvidet" });
      settSt(st, n.id, { tilstand: "aktiv", over: ab(a, b) });
      ut(n, n === G.T ? `Starter i roten ${n.navn} (${TYPE[n.type]}) med α = −∞, β = ∞.` : `Går ned i ${n.navn} (${TYPE[n.type]}). Vinduet arves ovenfra: α = ${tall(a)}, β = ${tall(b)}.`);
      if (n.type === "sjanse") {
        let s = 0;
        const deler = n.barn.map(c => { const r = rek(c, -INF, null, INF, null); s += c.pe * r; settSt(st, c.id, { tilstand: "utvidet", under: c.type === "blad" ? tall(c.verdi) : vis(iv[c.id]) }); return `${tall(c.pe)}·${tall(r)}`; });
        iv[n.id] = [s, s];
        settSt(st, n.id, { tilstand: "utvidet", under: tall(s) });
        ut(n, `${n.navn} er en sjansenode: alpha-beta kutter ikke her, barna får fullt vindu. ${n.navn} = ${deler.join(" + ")} = ${tall(s)}.`);
        return s;
      }
      const maks = n.type === "max";
      let v = maks ? -INF : INF;
      for (let i = 0; i < n.barn.length; i++) {
        const c = n.barn[i], r = rek(c, a, as, b, bs), gml = v;
        let endret = false;
        if (maks) { v = Math.max(v, r); if (v > a) { a = v; as = n; endret = true; } }
        else { v = Math.min(v, r); if (v < b) { b = v; bs = n; endret = true; } }
        settSt(st, c.id, { tilstand: c.type === "blad" ? "aktiv" : "utvidet", under: c.type === "blad" ? tall(c.verdi) : vis(iv[c.id]) });
        settSt(st, n.id, { tilstand: "aktiv", over: ab(a, b), under: "v=" + tall(v) });
        const grense = maks ? (likhet ? v >= b : v > b) : (likhet ? v <= a : v < a);
        const rest = n.barn.slice(i + 1);
        let tekst = `${n.navn} (${TYPE[n.type]}) ${c.type === "blad" ? `ser ${c.navn} = ${tall(r)}` : `får ${vis(iv[c.id])} fra ${c.navn}`}: v = ${maks ? "max" : "min"}(${tall(gml)}, ${tall(r)}) = ${tall(v)}, ` +
          (maks ? `α ${endret ? "=" : "forblir"} ${tall(a)}.` : `β ${endret ? "=" : "forblir"} ${tall(b)}.`);
        if (grense && !rest.length) tekst += ` v ${maks ? "≥ β" : "≤ α"}, men det er ingen flere barn å kutte.`;
        ut(n, tekst);
        if (c.type === "blad") settSt(st, c.id, { tilstand: "utvidet" });
        if (grense && rest.length) {
          rest.forEach(x => underTre(x).forEach(y => settSt(st, y.id, { tilstand: "beskaret" })));
          kutt.push(...rest);
          const kilde = maks ? bs : as;
          ut(n, `<b>Kutt ${rest.map(x => x.navn).join(" og ")}</b>: v = ${tall(v)} ${maks ? (likhet ? "≥" : ">") + " β" : (likhet ? "≤" : "<") + " α"} = ${tall(maks ? b : a)}` +
            `${kilde && kilde !== n ? ` (${maks ? "β" : "α"} kommer fra ${kilde.navn})` : ""}. ${maks ? "MIN over vil aldri la MAX få så mye." : "MAX over har allerede noe bedre."}` +
            (v === (maks ? b : a) ? " Her er v lik grensen: boka kutter ved likhet (eksamen 2018 godtok begge svar)." : ""));
          break;
        }
      }
      const kids = n.barn.map(c => iv[c.id] || [-INF, INF]), f = maks ? Math.max : Math.min;
      iv[n.id] = [f(...kids.map(x => x[0])), f(...kids.map(x => x[1]))];
      settSt(st, n.id, { tilstand: "utvidet", over: ab(a, b), under: vis(iv[n.id]) });
      return v;
    };
    if (G.T.type === "blad") {
      settSt(st, G.T.id, { tilstand: "sti" });
      ut(G.T, `Treet er bare ett blad, så verdien er ${tall(G.T.verdi)} og ingenting kan kuttes.`);
      return { sc, v: G.T.verdi, kutt, sett, iv: { [G.T.id]: [G.T.verdi, G.T.verdi] }, sti: [G.T] };
    }
    const v = rek(G.T, -INF, null, INF, null);
    const sti = [G.T];
    // Beste trekk: MAX tar barnet med høyest nedre grense, MIN barnet med lavest øvre grense (første ved likhet).
    for (let n = G.T, b; (b = valgtBarn(n, c => (iv[c.id] || [-INF, INF])[n.type === "max" ? 0 : 1])); n = b) sti.push(b);
    sti.forEach(n => settSt(st, n.id, { tilstand: "sti" }));
    const blader = G.alle.filter(n => n.type === "blad").length;
    ut(G.T, `Ferdig: ${G.T.navn} = <b>${tall(v)}</b>${sti[1] ? ` via ${sti.slice(1).map(n => n.navn).join(" → ")}` : ""}, samme som minimax. Kuttet: ${kutt.length ? kutt.map(x => x.navn).join(", ") : "ingenting"}. ${sett.length} av ${blader} blader ble sett.`);
    return { sc, v, kutt, sett, iv, sti };
  }

  A.legg({
    id: "alfa-beta",
    navn: "Alpha-beta pruning",
    familie: "Spill",
    ep: "E08",
    kort: "Alpha-beta gir samme rotverdi og samme trekk som minimax, men hopper over grener som ikke kan endre valget. α er det beste MAX har funnet på stien ned hit (tenk «minst»), β det beste MIN har funnet (tenk «høyst»). α og β arves nedover, verdiene går oppover. En MAX-node løfter α og kutter når v ≥ β; en MIN-node senker β og kutter når v ≤ α.",
    punkter: [
      "MAX sammenligner v med β, MIN sammenligner v med α. α/β oppdateres før testen.",
      "Et kutt fjerner bare resten av barna til noden som kutter, med hele undertrærne deres.",
      "Kuttede noder får bare en grense: ≤ v i MIN, ≥ v i MAX (fasiten 2020 kont.: i ≤ 6, e ≥ 11).",
      "Likhet: boka kutter ved v ≥ β og v ≤ α. Eksamen 2018 godtok E både som kuttet og ikke kuttet ved v = 6 ≥ β = 6. Begrunn hvert kutt med tall.",
      "Rekkefølgen avgjør hvor mye som kuttes: beste rekkefølge O(b<sup>m/2</sup>), tilfeldig ≈ O(b<sup>3m/4</sup>), verste O(b<sup>m</sup>)."
    ],
    data: "tre",
    valg: [{ id: "likhet", navn: "Kutt ved likhet (v ≥ β, v ≤ α)", type: "bool", std: true }],
    eksempler: [
      { navn: "Eksamen 2025, oppgave 8 b", data: X25 },
      { navn: "Eksamen 2021, oppgave 5", data: X21 },
      { navn: "Eksamen 2020 kontinuasjon, Problem 4", data: X20K },
      { navn: "Eksamen 2018, Problem 2", data: X18 },
      { navn: "Bokas Fig. 6.2", data: FIG62 },
      { navn: "Dypere tre fra E08-videoen (illustrasjon)", data: T2 },
      { navn: "Bøttespillet (L8)", data: BOTTE },
      { navn: "Eksamen 2024, Q11 (bøtter)", data: B24 }
    ],
    kjor(data, valg = {}) { const G = lagTre(data); return G ? alfaBeta(G, valg.likhet !== false).sc : tomt; },
    svar(data, valg = {}) {
      const G = lagTre(data);
      if (!G) return [];
      const r = alfaBeta(G, valg.likhet !== false);
      const vis = ([lo, hi]) => (lo === hi ? sv(lo) : hi < INF ? "≤" + sv(hi) : "≥" + sv(lo));
      return [{ id: "rot", navn: "Rotverdi", verdi: sv(r.v) }]
        .concat(r.sti[1] ? [{ id: "trekk", navn: "Beste trekk (barnet av roten)", verdi: r.sti[1].navn, godta: likeTrekk(G, r.sti[1]) }] : [])
        .concat([{ id: "kuttet", navn: "Kuttede noder (øverste i hvert kuttede deltre)", verdi: r.kutt.length ? r.kutt.map(n => n.navn).join(", ") : "ingen" }])
        .concat(G.alle.some(n => n.type !== "blad") ? [{ id: "verdier", navn: "Verdier/grenser i de indre nodene som ble besøkt", verdi: G.alle.filter(n => n.type !== "blad" && r.iv[n.id] && (isFinite(r.iv[n.id][0]) || isFinite(r.iv[n.id][1]))).map(n => `${n.navn}${vis(r.iv[n.id]).match(/^[≤≥]/) ? "" : "="}${vis(r.iv[n.id])}`).join(", ") }] : []);
    }
  });

  // ---------- Expectiminimax ----------
  // Eksamen 2023, oppgave 6 (tallene fra oppgaveteksten).
  const X23 = node("A", "max", [
    node("B", "sjanse", [node("D", "min", [blad("d1", 3), blad("d2", 4)], 0.5), node("E", "min", [blad("e1", 5), blad("e2", 6)], 0.5)]),
    node("C", "sjanse", [node("F", "min", [blad("f1", 2), blad("f2", 4)], 0.25), node("G", "min", [blad("g1", 8), blad("g2", 10)], 0.75)])
  ]);
  // L8: bøttespillet mot en tilfeldig motstander (expectimax).
  const BOTTE_E = node("S", "max", [["A", -50, 50], ["B", 3, 1], ["C", -5, 15]].map(([k, x, y]) => node(k, "sjanse", [blad(k.toLowerCase() + "1", x, 0.5), blad(k.toLowerCase() + "2", y, 0.5)])));
  // L8 s. 29–31: myntkast etter valget. Kron flytter én bøtte til venstre (A rundt til C), mynt lar den stå.
  const BK = { A: [-50, 50], B: [3, 1], C: [-5, 15] }, VENSTRE = { A: "C", B: "A", C: "B" };
  const MYNT = node("S", "max", ["A", "B", "C"].map(k => node(k, "sjanse", [[VENSTRE[k], "K"], [k, "M"]].map(([b, m]) => node(k + m, "min", BK[b].map((x, i) => blad(`${k}${m}${i + 1}`, x)), 0.5)))));
  // Bokas Fig. 6.14 (to varianter av bladverdiene).
  const fig614 = ([a, b, c, d]) => node("A", "max", [
    node("C1", "sjanse", [node("M1", "min", [blad("l1", a), blad("l2", a)], 0.9), node("M2", "min", [blad("l3", b), blad("l4", b)], 0.1)]),
    node("C2", "sjanse", [node("M3", "min", [blad("l5", c), blad("l6", c)], 0.9), node("M4", "min", [blad("l7", d), blad("l8", d)], 0.1)])
  ]);

  A.legg({
    id: "expectiminimax",
    navn: "Expectiminimax (og expectimax)",
    familie: "Spill",
    ep: "E09",
    kort: "Expectiminimax legger til sjansenoder (○) for terning, mynt eller en motstander som velger tilfeldig. En sjansenode tar forventningen Σ P(r)·verdi over barna, MAX tar største og MIN minste. Regn nedenfra: MIN før sjanse før MAX. Uten MIN-noder kalles det expectimax.",
    punkter: [
      "Ikke hopp over MIN-laget: snitt av bladene direkte gir feil mellomverdier (eksamen 2023: B = 0,5·3 + 0,5·5 = 4, ikke 4,5).",
      "Med sjansenoder betyr størrelsen på verdiene noe: eval må være en positiv lineær transformasjon av vinnersjansen (Fig. 6.14).",
      "Tid O(b<sup>m</sup>n<sup>m</sup>), der n er antall utfall per sjansenode. Backgammon (n = 21) rekker ca. 3 ply.",
      "Expectimax: MAX og sjanse. Expectiminimax: MAX, MIN og sjanse. Expectimax passer ikke bedre enn minimax i deterministiske spill.",
      "Mangler p eller summerer de ikke til 1, sier animasjonen fra og normaliserer."
    ],
    data: "tre",
    eksempler: [
      { navn: "Eksamen 2023, oppgave 6 (fagforeningen)", data: X23 },
      { navn: "Bøttespillet mot tilfeldig motstander (L8, expectimax)", data: BOTTE_E },
      { navn: "Bøttespillet med myntkast (L8)", data: MYNT },
      { navn: "Fig. 6.14: bladene 1, 2, 3, 4", data: fig614([2, 3, 1, 4]) },
      { navn: "Fig. 6.14: bladene 1, 20, 30, 400", data: fig614([20, 30, 1, 400]) }
    ],
    kjor(data) { const G = lagTre(data); return G ? verdiScener(G, true) : tomt; },
    svar(data) { return verdiSvar(lagTre(data)); }
  });

  // ---------- Monte Carlo tree search ----------
  function mcts(d, C) {
    const tre = A.kopi(d.rot), dyp = {}, alle = {};
    (function g(n, k) { n.barn = n.barn || []; dyp[n.id] = k; alle[n.id] = n; n.barn.forEach(b => g(b, k + 1)); })(tre, 0);
    const annen = d.rotSpiller === "hvit" ? "svart" : "hvit";
    const spiller = id => (dyp[id] % 2 ? annen : d.rotSpiller);
    const UN = n => `${n.u}/${n.n}`;
    const synlig = new Set(Object.keys(alle)), hend = [];
    const push = (tekst, o = {}) => {
      const stat = {};
      Object.values(alle).forEach(n => (stat[n.id] = UN(n)));
      hend.push({ tekst, stat, synlig: new Set(synlig), ...o });
    };
    const forste = [];
    let ny = 0;
    push(`Startpunkt. Hver node viser U/N: U er seire for spilleren som gjorde trekket inn til noden (navnet står under noden), N er antall playouts gjennom noden. C = ${tall(C)}.`);
    (d.utfall || []).forEach((vinner, it) => {
      let n = tre;
      const sti = [n];
      while (n.barn.length) {
        const lnN = Math.log(n.n);
        const rad = n.barn.map(c => {
          const ut = c.n ? c.u / c.n : 0, ex = c.n && n.n > 0 ? C * Math.sqrt(lnN / c.n) : INF;
          return { c, ut, ex, ucb: c.n ? ut + ex : INF };
        });
        let best = rad[0];
        for (const r of rad) if (r.ucb > best.ucb) best = r;
        const velger = spiller(best.c.id);
        push(`Iterasjon ${it + 1}, selection i ${UN(n)}: ${velger} velger barnet med høyest UCB1 = U/N + C·√(ln ${n.n} / N). ${best.c.n ? `Det er ${UN(best.c)} (${tall(best.ucb)}).` : `${UN(best.c)} er ikke prøvd (UCB1 = ∞).`}`,
          { aktiv: n.id, kandidat: rad.map(r => r.c.id), over: Object.fromEntries(rad.map(r => [r.c.id, "UCB1 " + tall(r.ucb)])), sti: sti.map(x => x.id),
            tabell: tab(`UCB1 under ${UN(n)} (N = ${n.n}, ln N = ${tall(lnN)})`, ["Barn", "Spiller", "U/N", "C·√(ln N / n)", "UCB1"], rad.map(r => [UN(r.c), spiller(r.c.id), r.c.n ? tall(r.ut) : "–", tall(r.ex), tall(r.ucb)]), [rad.indexOf(best)]) });
        n = best.c;
        sti.push(n);
      }
      if (!it) forste.push(...sti.map(UN));
      const b = { id: "ny" + ++ny, u: 0, n: 0, barn: [] };
      dyp[b.id] = dyp[n.id] + 1; alle[b.id] = b; n.barn.push(b); synlig.add(b.id); sti.push(b);
      push(`Expansion: ${UN(n)} er et blad i treet. Legger til ett nytt barn, 0/0 (teller seire for ${spiller(b.id)}).`, { aktiv: b.id, sti: sti.map(x => x.id) });
      push(`Simulation: én playout fra den nye noden til spillet er slutt. <b>${vinner[0].toUpperCase() + vinner.slice(1)} vinner.</b>`, { aktiv: b.id, sti: sti.map(x => x.id) });
      const endr = sti.map(x => { const f = UN(x); x.n++; if (spiller(x.id) === vinner) x.u++; return `${f} → ${UN(x)}`; });
      push(`Back-propagation: alle noder på stien får +1 playout, og nodene som teller seire for ${vinner}, får også +1 seier: ${endr.join(", ")}.`, { tilbake: sti.map(x => x.id) });
    });
    let best = tre.barn[0];
    tre.barn.forEach(c => { if (c.n > best.n) best = c; });
    if (best) push(`Når tiden er ute, returneres trekket med <b>flest playouts</b>, ikke høyest vinnerandel: ${UN(best)}.`, { slutt: best.id });
    return { tre, hend, forste, best, alle };
  }

  // Bokas Fig. 6.10 (sidegrenene under 1/10 og 2/11 er utelatt fordi tellingene i figuren ikke går opp). Roten teller hvite seire.
  const FIG610 = { id: "r", u: 37, n: 100, barn: [{ id: "a", u: 60, n: 79, barn: [{ id: "aa", u: 3, n: 26 }, { id: "ab", u: 16, n: 53, barn: [{ id: "aba", u: 27, n: 35 }, { id: "abb", u: 10, n: 18 }] }] }, { id: "b", u: 1, n: 10 }, { id: "c", u: 2, n: 11 }] };
  // ILLUSTRASJON: lite tre der tellingene går opp (roten teller hvite seire, barna svarte osv.).
  const LITE = { id: "r", u: 3, n: 6, barn: [{ id: "a", u: 2, n: 4, barn: [{ id: "aa", u: 1, n: 2 }, { id: "ab", u: 1, n: 2 }] }, { id: "b", u: 1, n: 2 }] };

  A.legg({
    id: "mcts",
    navn: "Monte Carlo tree search (MCTS) med UCB1",
    familie: "Spill",
    ep: "E09",
    kort: "Monte Carlo tree search vurderer trekk med snittet av mange tilfeldige playouts i stedet for en evalueringsfunksjon. Hver node lagrer U/N: U er seire for spilleren som gjorde trekket inn til noden, N er antall playouts gjennom noden. En iterasjon har fire faser: <i>selection</i> (følg UCB1 ned til et blad), <i>expansion</i> (legg til ett barn), <i>simulation</i> (én playout) og <i>back-propagation</i> (oppdater alle noder på stien). Her regnes en node uten barn i treet som et blad.",
    punkter: [
      "UCB1(n) = U(n)/N(n) + C·√(ln N(forelder) / N(n)). Første ledd er exploitation, andre exploration. L8: «Usually C = √2 is used».",
      "Når tiden er ute, returneres trekket med <b>flest playouts</b>, ikke høyest vinnerandel (65/100 slår 2/3).",
      "Back-propagation: nodene til vinneren får +1 seier og +1 playout, de andre bare +1 playout.",
      "MCTS slår alpha-beta når forgreningen er stor eller eval er dårlig, men kan overse et enkelt avgjørende trekk.",
      "Fig. 6.10 med C = 1,5: roten velger 2/11 (1,152) i stedet for 60/79 (1,122)."
    ],
    data: null,
    valg: [{ id: "C", navn: "C i UCB1", type: "tall", std: Math.SQRT2 }],
    eksempler: [
      { navn: "Bokas Fig. 6.10, én iterasjon (svart vinner)", data: { rot: FIG610, rotSpiller: "hvit", utfall: ["svart"] } },
      { navn: "Lite tre (illustrasjon), tre iterasjoner", data: { rot: LITE, rotSpiller: "hvit", utfall: ["svart", "hvit", "svart"] } }
    ],
    kjor(d, valg = {}) {
      const C = isFinite(+valg.C) && valg.C !== "" && valg.C != null ? +valg.C : Math.SQRT2;
      const { tre, hend } = mcts(d, C);
      const tilTre = n => ({ id: n.id, tekst: "", barn: n.barn.map(tilTre) });
      const lay = A.tre(tilTre(tre));
      const annen = d.rotSpiller === "hvit" ? "svart" : "hvit";
      const dyp = {};
      (function g(n, k) { dyp[n.id] = k; n.barn.forEach(b => g(b, k + 1)); })(tre, 0);
      lay.noder.forEach(x => { x.x *= 1.5; x.form = "boks"; });
      return hend.map(h => {
        const tilst = id => (h.slutt === id ? "sti" : h.tilbake && h.tilbake.includes(id) ? "sti" : h.aktiv === id ? "aktiv" : h.kandidat && h.kandidat.includes(id) ? "grense" : h.sti && h.sti.includes(id) ? "utvidet" : "ny");
        return {
          tekst: h.tekst,
          graf: {
            retning: false,
            noder: lay.noder.filter(x => h.synlig.has(x.id)).map(x => ({ ...x, tekst: h.stat[x.id], under: dyp[x.id] % 2 ? annen : d.rotSpiller, over: h.over && h.over[x.id], tilstand: tilst(x.id) })),
            kanter: lay.kanter.filter(e => h.synlig.has(e.til)).map(e => ({ ...e, tilstand: ["aktiv", "sti"].includes(tilst(e.til)) ? tilst(e.til) : tilst(e.til) === "utvidet" ? "utvidet" : "ny" }))
          },
          tabeller: h.tabell ? [h.tabell] : undefined
        };
      });
    },
    svar(d, valg = {}) {
      const C = isFinite(+valg.C) && valg.C !== "" && valg.C != null ? +valg.C : Math.SQRT2;
      const r = mcts(d, C);
      return [
        { id: "sti", navn: "Stien selection velger i første iterasjon (U/N før)", verdi: r.forste.join(" → ") },
        { id: "trekk", navn: "Trekket som returneres (U/N etter)", verdi: r.best ? `${r.best.u}/${r.best.n}` : "–" }
      ];
    }
  });

  // ---------- Spillteori: dominans, IESDS og rene Nash-likevekter ----------
  function spillteori(d, svak) {
    const u = d.u, p1 = d.p1 || "P1", p2 = d.p2 || "P2", sc = [];
    const R = d.rader.map((_, i) => i), K = d.kol.map((_, j) => j);
    const ord = svak ? "weakly" : "strictly";
    const dom = (x, y, mot, rad) => { // dominerer x y for spilleren (rad = P1)?
      const a = mot.map(m => (rad ? u[x][m][0] : u[m][x][1])), b = mot.map(m => (rad ? u[y][m][0] : u[m][y][1]));
      return a.every((v, i) => v >= b[i]) && (svak ? a.some((v, i) => v > b[i]) : a.every((v, i) => v > b[i]));
    };
    const celle = (i, j, m) => `${tall(u[i][j][0])}${m && m[0][i][j] ? "*" : ""}, ${tall(u[i][j][1])}${m && m[1][i][j] ? "*" : ""}`;
    const matrise = (rad, kol, tittel, o = {}) => tab(tittel, [`${p1} \\ ${p2}`, ...kol.map(j => d.kol[j] + (o.k === j ? " ✗" : ""))],
      rad.map(i => [d.rader[i] + (o.r === i ? " ✗" : ""), ...kol.map(j => celle(i, j, o.m))]), o.marker || (o.r != null ? [rad.indexOf(o.r)] : []));
    const prof = (i, j) => `(${d.rader[i]}, ${d.kol[j]})`;
    const liste = (xs, f) => xs.map(f).join(", ");
    sc.push({ tekst: `${p1} velger rad og får tallet til venstre, ${p2} velger kolonne og får tallet til høyre. Dominans her: ${ord}.`, tabeller: [matrise(R, K, "Payoff matrix")] });

    // Dominant strategi i hele spillet
    const dominant = (mine, mot, rad) => mine.find(x => mine.every(y => y === x || dom(x, y, mot, rad)));
    const d1 = dominant(R, K, true), d2 = dominant(K, R, false);
    sc.push({ tekst: `Dominant strategi (${ord} bedre enn alle andre)? ${p1}: ${d1 != null ? d.rader[d1] : "ingen"}. ${p2}: ${d2 != null ? d.kol[d2] : "ingen"}.` +
      (d1 != null && d2 != null ? ` Da er ${prof(d1, d2)} en ${svak ? "weakly " : ""}dominant strategy equilibrium.` : ""), tabeller: [matrise(R, K, "Payoff matrix", { marker: d1 != null ? [d1] : [] })] });

    // IESDS / IEWDS: én strategi per tur, annenhver spiller (P1 først), ovenfra og fra venstre.
    let rad = [...R], kol = [...K], tur = 0, tomme = 0;
    const strøk = [];
    while (tomme < 2 && rad.length + kol.length > 2) {
      const er1 = tur % 2 === 0, mine = er1 ? rad : kol, mot = er1 ? kol : rad;
      let funn = null;
      if (mine.length > 1) for (const y of mine) { const x = mine.find(x => x !== y && dom(x, y, mot, er1)); if (x != null) { funn = [x, y]; break; } }
      if (funn) {
        const [x, y] = funn, nv = er1 ? d.rader : d.kol, tall1 = z => "(" + mot.map(m => tall(er1 ? u[z][m][0] : u[m][z][1])).join(", ") + ")";
        sc.push({ tekst: `${er1 ? p1 : p2}: ${nv[y]} er ${ord} dominert av ${nv[x]}: ${nv[x]} gir ${tall1(x)} mot ${tall1(y)} for ${nv[y]}. <b>${nv[y]} strykes.</b>`,
          tabeller: [matrise(rad, kol, "Spillet nå", er1 ? { r: y } : { k: y })] });
        strøk.push(nv[y]);
        if (er1) rad = rad.filter(z => z !== y); else kol = kol.filter(z => z !== y);
        tomme = 0;
      } else tomme++;
      tur++;
    }
    const overlever = rad.flatMap(i => kol.map(j => prof(i, j)));
    sc.push({ tekst: `Ingen flere ${ord} dominerte strategier. ${strøk.length ? `Strøket i rekkefølge: ${strøk.join(", ")}.` : "Ingenting ble strøket."} Igjen står ${overlever.join(", ")}.`, tabeller: [matrise(rad, kol, "Spillet etter eliminasjonen")] });

    // Rene Nash-likevekter: markér beste svar (*) i hele spillet.
    const m1 = R.map(i => K.map(j => u[i][j][0] === Math.max(...R.map(x => u[x][j][0]))));
    const m2 = R.map(i => K.map(j => u[i][j][1] === Math.max(...K.map(y => u[i][y][1]))));
    const tomM = R.map(() => K.map(() => false));
    sc.push({ tekst: `Rene Nash-likevekter i hele spillet: først ${p1}s beste svar i hver kolonne (*). Like gode beste svar markeres begge.`, tabeller: [matrise(R, K, "Beste svar", { m: [m1, tomM] })] });
    const ne = [];
    R.forEach(i => K.forEach(j => { if (m1[i][j] && m2[i][j]) ne.push([i, j]); }));
    sc.push({ tekst: `Så ${p2}s beste svar i hver rad (*). ${ne.length ? `Celler med to stjerner er rene Nash-likevekter: <b>${liste(ne, ([i, j]) => prof(i, j))}</b>.` : "Ingen celle har to stjerner, så spillet har ingen ren Nash-likevekt (bare en blandet)."}`,
      tabeller: [matrise(R, K, "Beste svar", { m: [m1, m2], marker: [...new Set(ne.map(x => x[0]))] })] });
    const tapt = ne.filter(([i, j]) => !rad.includes(i) || !kol.includes(j));
    if (tapt.length) sc[sc.length - 1].tekst += ` Merk: ${liste(tapt, ([i, j]) => prof(i, j))} ble strøket av ${ord} eliminasjon.`;

    // Pareto og social welfare
    const celler = R.flatMap(i => K.map(j => [i, j]));
    const pareto = ([i, j]) => !celler.some(([a, b]) => u[a][b][0] >= u[i][j][0] && u[a][b][1] >= u[i][j][1] && (u[a][b][0] > u[i][j][0] || u[a][b][1] > u[i][j][1]));
    const sum = ([i, j]) => u[i][j][0] + u[i][j][1], maxSum = Math.max(...celler.map(sum));
    sc.push({ tekst: `Oppsummert. Pareto optimal: ${liste(celler.filter(pareto), ([i, j]) => prof(i, j))}. Høyest social welfare (sum): ${liste(celler.filter(c => sum(c) === maxSum), ([i, j]) => prof(i, j))} med ${tall(maxSum)}.` +
      (ne.some(c => !pareto(c)) ? ` Likevekten ${liste(ne.filter(c => !pareto(c)), ([i, j]) => prof(i, j))} er ikke Pareto optimal.` : ""),
      tabeller: [tab("Utfall", ["Profil", "Nytte", "Sum", "Pareto optimal", "Nash"], celler.map(c => [prof(...c), `(${tall(u[c[0]][c[1]][0])}, ${tall(u[c[0]][c[1]][1])})`, tall(sum(c)), pareto(c) ? "ja" : "", ne.some(x => x[0] === c[0] && x[1] === c[1]) ? "ja" : ""]),
        celler.map((c, k) => (ne.some(x => x[0] === c[0] && x[1] === c[1]) ? k : -1)).filter(k => k >= 0))] });
    return { sc, overlever, ne: ne.map(([i, j]) => prof(i, j)), d1, d2 };
  }

  const spill = (p1, p2, rader, kol, celler) => ({ p1, p2, rader, kol, u: rader.map((_, i) => kol.map((_, j) => celler[i * kol.length + j])) });
  A.legg({
    id: "dominans-nash",
    navn: "Dominans, IESDS og rene Nash-likevekter",
    familie: "Spill",
    ep: "E10",
    kort: "En payoff matrix viser nytten for begge spillerne: radspilleren får tallet til venstre, kolonnespilleren tallet til høyre. IESDS stryker én strictly dominert strategi om gangen og ser på nytt i det mindre spillet, for noe som ikke er dominert i starten, kan bli det senere. Rene Nash-likevekter finnes ved å markere hver spillers beste svar: celler der begge tallene er markert, er likevekter.",
    punkter: [
      "Strictly: strengt bedre mot alle motstanderens handlinger. Weakly: minst like god overalt og strengt bedre minst én gang.",
      "Med strict ender alle rekkefølger likt. Med weak kan rekkefølgen endre svaret, og en Nash-likevekt kan forsvinne (eksamen 2025, oppgave 4).",
      "Like gode beste svar markeres begge, ellers mister du likevekter.",
      "Nash-likevekt er ikke det samme som et godt utfall: (Testify, Testify) i fangens dilemma er det eneste utfallet som ikke er Pareto optimal.",
      "Her strykes én strategi per tur, annenhver spiller (radspilleren først), ovenfra og fra venstre."
    ],
    data: null,
    valg: [{ id: "svak", navn: "Weak dominance (ellers strict)", type: "bool", std: false }],
    eksempler: [
      { navn: "L10, slide 3 (IESDS)", data: spill("P1", "P2", ["Up", "Middle", "Down"], ["Left", "Middle", "Right"], [[13, 3], [1, 4], [7, 3], [4, 1], [3, 3], [6, 2], [-1, 9], [2, 8], [8, -1]]) },
      { navn: "Eksamen 2023, oppgave 5 (US og China)", data: spill("US", "China", ["Accelerate", "Maintain", "Hinder"], ["Accelerate", "Maintain", "Hinder"], [[6, 6], [8, 4], [9, 2], [4, 8], [7, 7], [10, 2], [2, 9], [2, 10], [5, 5]]) },
      { navn: "Prisoner's dilemma", data: spill("P1", "P2", ["Testify", "Refuse"], ["Testify", "Refuse"], [[-5, -5], [0, -10], [-10, 0], [-1, -1]]) },
      { navn: "Battle of the Sexes (L10)", data: spill("P1", "P2", ["Movie", "Opera"], ["Movie", "Opera"], [[2, 1], [0, 0], [0, 0], [1, 2]]) },
      { navn: "Eksamen 2025, oppgave 4 (weak)", data: spill("P1", "P2", ["Up", "Down"], ["Left", "Right"], [[1, 1], [0, 0], [0, 0], [0, 0]]), valg: { svak: true } },
      { navn: "Weak: T strykes først (illustrasjon)", data: spill("P1", "P2", ["T", "M", "B"], ["L", "R"], [[1, 1], [0, 0], [1, 1], [2, 1], [0, 0], [2, 1]]), valg: { svak: true } },
      { navn: "Weak: B strykes først (samme spill, radene snudd)", data: spill("P1", "P2", ["B", "M", "T"], ["L", "R"], [[0, 0], [2, 1], [1, 1], [2, 1], [1, 1], [0, 0]]), valg: { svak: true } },
      { navn: "Eksamen 2024, Q12 (hjortejakt)", data: spill("P1", "P2", ["Stag", "Hare"], ["Stag", "Hare"], [[5, 5], [0, 2], [2, 0], [1, 1]]) },
      { navn: "Eksamen 2024, Q13 (stage game)", data: spill("P1", "P2", ["Up", "Down"], ["Left", "Right"], [[2, 2], [0, 3], [3, 0], [1, 1]]) },
      { navn: "Two-finger Morra (ingen ren likevekt)", data: spill("P1", "P2", ["1", "2"], ["1", "2"], [[2, -2], [-3, 3], [-3, 3], [4, -4]]) }
    ],
    kjor(d, valg = {}) { return spillteori(d, !!valg.svak).sc; },
    svar(d, valg = {}) {
      const r = spillteori(d, !!valg.svak);
      return [
        { id: "iesds", navn: valg.svak ? "Overlever weak eliminasjon" : "Overlever IESDS", verdi: r.overlever.join(", ") },
        { id: "nash", navn: "Rene Nash-likevekter", verdi: r.ne.length ? r.ne.join(", ") : "ingen" }
      ];
    }
  });

  if (typeof module !== "undefined") module.exports = { lagTre, alfaBeta, verdier, mcts, spillteori, X21, X20K, X18, X25, X23, FIG62, T2, BOTTE, B24, BOTTE_E, MYNT, fig614, FIG610, LITE };
})();
