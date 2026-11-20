// Språk, E20: bigram med og uten add-one, Viterbi for POS-tagging og CYK-parsing. Se KONTRAKT.md.
// Alle tall er kontrollert mot videoer/notater/e20-nlp.md og videoer/e20-nlp/verifiser.py.
(() => {
  const A = window.ALGO;
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const W = t => 7 * String(t).length + 40;
  // Desimaltall med komma, uten flyttallsstøy: 0.06 * 0.9 vises som 0,054.
  const tall = x => {
    if (x === 0) return "0";
    let s = String(parseFloat(x.toPrecision(10)));
    if (s.includes("e")) s = x.toFixed(-Math.floor(Math.log10(Math.abs(x))) + 9).replace(/0+$/, "");
    return s.replace(".", ",");
  };

  // ---------- brøker ----------
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const red = b => (b.n === 0 ? { n: 0, d: 1 } : { n: b.n / gcd(b.n, b.d), d: b.d / gcd(b.n, b.d) });
  const vb = b => (b.n === 0 ? "0" : b.d === 1 ? String(b.n) : `${b.n}/${b.d}`);
  const gang = (a, b) => red({ n: a.n * b.n, d: a.d * b.d });

  // ================= Bigram med og uten add-one =================
  function bigram(d) {
    const setn = d.korpus.map(s => s.trim().split(/\s+/));
    const ord = [], hist = [];
    setn.forEach(s => s.forEach((w, j) => {
      if (w !== "<S>" && !ord.includes(w)) ord.push(w);
      if (j < s.length - 1 && !hist.includes(w)) hist.push(w);
    }));
    const V = ord.length;
    const c = {}, ch = {};
    hist.forEach(h => { ch[h] = 0; c[h] = Object.fromEntries(ord.map(w => [w, 0])); });
    const scener = [];
    const DX = 110, DY = 90;
    const korpusGraf = (aktiv, ferdig) => ({
      retning: true,
      noder: setn.flatMap((s, i) => s.map((w, j) => ({ id: `k${i}_${j}`, tekst: w, form: "boks", x: j * DX, y: i * DY, tilstand: i === aktiv ? "aktiv" : i < ferdig ? "utvidet" : "ny" }))),
      kanter: setn.flatMap((s, i) => s.slice(1).map((w, j) => ({ fra: `k${i}_${j}`, til: `k${i}_${j + 1}`, tilstand: i === aktiv ? "aktiv" : "ny" })))
    });
    const telleTab = m => ({ tittel: "Tellinger c(forrige neste)", kol: ["forrige ╲ neste", ...ord, "c(forrige)"], rader: hist.map(h => [h, ...ord.map(w => String(c[h][w])), String(ch[h])]), marker: m });
    scener.push({
      tekst: `Korpuset har ${setn.length} setninger. Vokabularet er V = ${V} ord: ${ord.map(esc).join(", ")}. ${esc("<S>")} står bare foran og telles ikke som neste ord; det er ikke noe sluttsymbol.`,
      graf: korpusGraf(-1, 0), tabeller: [telleTab()]
    });
    setn.forEach((s, i) => {
      const par = [];
      s.slice(1).forEach((w, j) => { c[s[j]][w]++; ch[s[j]]++; par.push(`${s[j]} ${w}`); });
      const m = [...new Set(s.slice(0, -1))].map(h => hist.indexOf(h));
      scener.push({ tekst: `Setning ${i + 1}: teller bigrammene ${par.map(p => esc(p)).join(", ")}. c(forrige) er hvor mange bigram som starter med ordet.`, graf: korpusGraf(i, i), tabeller: [telleTab(m)] });
    });
    const mle = (h, w) => ({ n: c[h]?.[w] ?? 0, d: ch[h] ?? 0 });
    const add1 = (h, w) => ({ n: (c[h]?.[w] ?? 0) + 1, d: (ch[h] ?? 0) + V });
    const vbr = b => (b.d === 0 ? "udefinert" : b.n === 0 ? "0" : `${b.n}/${b.d}`);
    const mleTab = m => ({ tittel: "MLE: P(neste | forrige) = c(forrige neste) / c(forrige)", kol: ["forrige ╲ neste", ...ord], rader: hist.map(h => [h, ...ord.map(w => vbr(mle(h, w)))]), marker: m });
    const addTab = m => ({ tittel: `Add-one: (c + 1) / (c(forrige) + ${V})`, kol: ["forrige ╲ neste", ...ord], rader: hist.map(h => [h, ...ord.map(w => vbr(add1(h, w)))]), marker: m });
    const nuller = hist.reduce((n, h) => n + ord.filter(w => !c[h][w]).length, 0);
    scener.push({ tekst: `MLE-tabellen: del hver telling på c(forrige). ${nuller} av ${hist.length * V} par er aldri sett og får P = 0.`, graf: korpusGraf(-1, setn.length), tabeller: [mleTab(), telleTab()] });
    scener.push({ tekst: `Add-one (Laplace): legg 1 til hver telling og V = ${V} under brøkstreken, så hver rad fortsatt summerer til 1. Ingen nuller igjen.`, graf: korpusGraf(-1, setn.length), tabeller: [addTab(), mleTab()] });

    // setningssannsynligheten
    const s = d.setning.trim().split(/\s+/);
    const ukjent = s.filter(w => w !== "<S>" && !ord.includes(w));
    const DXs = 140;
    const setnGraf = (k, ferdig) => ({
      retning: true,
      noder: s.map((w, j) => ({ id: `s${j}`, tekst: w, form: "boks", x: j * DXs, y: (setn.length - 1) * DY / 2, tilstand: ferdig === "feil" && j === k + 1 ? "feil" : j <= k ? (ferdig === "sti" ? "sti" : "utvidet") : j === k + 1 ? "aktiv" : "ny" })),
      kanter: s.slice(1).map((w, j) => ({
        fra: `s${j}`, til: `s${j + 1}`,
        tekst: j <= k ? `${vbr(mle(s[j], w))} | ${vbr(add1(s[j], w))}` : "",
        tilstand: j === k ? (mle(s[j], w).n === 0 ? "feil" : "aktiv") : j < k ? (ferdig === "sti" ? "sti" : mle(s[j], w).n === 0 ? "feil" : "utvidet") : "ny"
      }))
    });
    if (ukjent.length) {
      scener.push({ tekst: `«${ukjent.map(esc).join(", ")}» finnes ikke i vokabularet. Ukjente ord trenger <code>${esc("<UNK>")}</code> i treningen; det løser ikke smoothing.`, graf: setnGraf(-1), tabeller: [] });
      return { scener, mle: null, add1: null };
    }
    let pm = { n: 1, d: 1 }, pa = { n: 1, d: 1 }, udef = false;
    const rader = [];
    const setnTab = m => ({ tittel: `P(${s.join(" ")})`, kol: ["Bigram", "MLE", "Add-one"], rader: [...rader.map(r => r.slice()), ["produkt", udef ? "udefinert" : vb(pm), vb(pa)]], marker: m });
    scener.push({ tekst: `Setningen ${esc(s.join(" "))}: sannsynligheten er produktet av bigrammene. Kantene viser MLE | add-one.`, graf: setnGraf(-1), tabeller: [setnTab(), addTab()] });
    let fall = null;
    for (let j = 0; j < s.length - 1; j++) {
      const h = s[j], w = s[j + 1], a = mle(h, w), b = add1(h, w);
      if (a.d === 0) udef = true; else pm = gang(pm, a);
      pa = gang(pa, b);
      rader.push([`P(${w} | ${h})`, vbr(a), vbr(b)]);
      if (!fall && a.n && a.n * b.d > b.n * a.d) fall = { h, w, a, b };
      const hi = hist.indexOf(h);
      scener.push({
        tekst: `P(${esc(w)} | ${esc(h)}): MLE ${a.n}/${a.d}${a.d === 0 ? ` er <b>udefinert</b>, for ${esc(h)} står aldri foran et annet ord i korpuset` : a.n === 0 ? " = <b>0</b>, paret er aldri sett" : ""}; add-one (${a.n} + 1)/(${a.d} + ${V}) = ${b.n}/${b.d}.`,
        graf: setnGraf(j), tabeller: [setnTab([j]), { ...addTab(hi >= 0 ? [hi] : []) }]
      });
    }
    const mleT = udef ? "udefinert" : vb(pm);
    let t = `Uten smoothing: ${rader.map(r => r[1]).join(" · ")} = <b>${mleT}</b>. Med add-one: ${rader.map(r => r[2]).join(" · ")} = <b>${vb(pa)}</b>.`;
    if (udef) t += " MLE er udefinert når c(forrige) = 0. Add-one har alltid en verdi.";
    else if (pm.n === 0) t += " Ett usett par gjør hele setningen umulig.";
    if (fall) t += ` Prisen: P(${esc(fall.w)} | ${esc(fall.h)}), som er sett, faller fra ${vb(red(fall.a))} til ${fall.b.n}/${fall.b.d}.`;
    scener.push({ tekst: t, graf: setnGraf(s.length - 1, "sti"), tabeller: [setnTab([rader.length])] });
    return { scener, mle: mleT, add1: vb(pa), V, pm, pa, udef };
  }

  // ================= Viterbi =================
  function viterbi(d) {
    const T = d.ord.length, DX = 150, DY = 110;
    const delta = d.ord.map(() => ({})), bp = d.ord.map(() => ({}));
    Object.assign(delta[d.fra], d.start);
    const tr = (p, c) => d.trans[p]?.[c] ?? 0, em = (w, c) => d.emis[w]?.[c] ?? 0;
    const id = (t, c) => `v${t}_${c}`;
    const skjev = t => (t > 0 && d.tagger[t].length > 1 && d.tagger[t - 1].length > 1 && t % 2 ? 30 : 0);
    const noder = d.ord.flatMap((w, t) => d.tagger[t].map((c, r) => ({ id: id(t, c), tekst: c, x: t * DX, y: r * DY + (r ? 1 : -1) * skjev(t), over: r === 0 ? w : "" })));
    const kanter = [];
    for (let t = 1; t < T; t++) for (const p of d.tagger[t - 1]) for (const c of d.tagger[t]) kanter.push({ fra: id(t - 1, p), til: id(t, c), tekst: t > d.fra ? tall(tr(p, c)) : "" });
    const nt = {}, kt = {}, under = {};
    d.tagger[d.fra].forEach(c => { under[id(d.fra, c)] = "δ=" + tall(d.start[c]); nt[id(d.fra, c)] = "utvidet"; });
    for (let t = 0; t < d.fra; t++) d.tagger[t].forEach(c => { nt[id(t, c)] = "utvidet"; });
    const graf = () => ({ retning: true, noder: noder.map(n => ({ ...n, under: under[n.id] || "", tilstand: nt[n.id] || "ny" })), kanter: kanter.map(k => ({ ...k, tilstand: kt[k.fra + ">" + k.til] || "ny" })) });
    const alleTagger = [...new Set(d.tagger.slice(d.fra + 1).flat())];
    const transTab = { tittel: "Transition P(tagg | forrige tagg)", kol: ["forrige ╲ tagg", ...alleTagger], rader: Object.keys(d.trans).map(p => [p, ...alleTagger.map(c => (d.trans[p][c] != null ? tall(d.trans[p][c]) : "–"))]) };
    const emTab = { tittel: "Emission P(ord | tagg)", kol: ["ord ╲ tagg", ...alleTagger], rader: Object.keys(d.emis).map(w => [w, ...alleTagger.map(c => (d.emis[w][c] != null ? tall(d.emis[w][c]) : "–"))]) };
    const spor = [];
    const sporTab = m => ({ tittel: "Beregning", kol: ["Steg", "Kandidater inn", "δ", "Bakpeker"], rader: spor.map(r => r.slice()), marker: m });
    const scener = [{
      tekst: `Gitteret for «${d.ord.join(" ")}». ${d.ord.slice(0, d.fra + 1).map((w, t) => `${w}/${d.tagger[t].join("|")}`).join(" ")} er entydig, og δ(${d.ord[d.fra]}/${d.tagger[d.fra][0]}) settes til ${tall(d.start[d.tagger[d.fra][0]])}, siden bare forholdstall teller.`,
      graf: graf(), tabeller: [transTab, emTab]
    }];
    const ferdigAktiv = () => Object.keys(nt).forEach(k => { if (nt[k] === "aktiv") nt[k] = "utvidet"; });
    for (let t = d.fra + 1; t < T; t++) for (const c of d.tagger[t]) {
      ferdigAktiv();
      const w = d.ord[t], e = em(w, c);
      const kand = d.tagger[t - 1].map(p => ({ p, v: delta[t - 1][p] * tr(p, c) }));
      const best = kand.reduce((a, b) => (b.v > a.v ? b : a));
      delta[t][c] = best.v * e; bp[t][c] = best.p;
      nt[id(t, c)] = "aktiv"; under[id(t, c)] = "δ=" + tall(delta[t][c]);
      kand.forEach(k => { kt[id(t - 1, k.p) + ">" + id(t, c)] = k.p === best.p ? "utvidet" : "beskaret"; });
      const ledd = kand.map(k => `${tall(delta[t - 1][k.p])} · ${tall(tr(k.p, c))} = ${k === best ? "<b>" + tall(k.v) + "</b>" : tall(k.v)}`);
      const inn = kand.length > 1 ? `max(${ledd.join("; ")})` : `${tall(delta[t - 1][best.p])} · P(${c} | ${best.p}) ${tall(tr(best.p, c))}`;
      spor.push([`${w}/${c}`, kand.map(k => `${k.p}: ${tall(delta[t - 1][k.p])} · ${tall(tr(k.p, c))}`).join("; ") + ` · P(${w} | ${c}) ${tall(e)}`, tall(delta[t][c]), best.p]);
      scener.push({
        tekst: `δ(${w}/${c}) = ${inn} · P(${w} | ${c}) ${tall(e)} = <b>${tall(delta[t][c])}</b>. Bakpeker: ${best.p}${kand.length > 1 ? "; den andre kanten forkastes" : ""}.`,
        graf: graf(), tabeller: [sporTab([spor.length - 1]), transTab, emTab]
      });
    }
    ferdigAktiv();
    const sist = d.tagger[T - 1].reduce((a, b) => (delta[T - 1][b] > delta[T - 1][a] ? b : a));
    nt[id(T - 1, sist)] = "mal";
    scener.push({ tekst: `Beste sluttilstand: ${d.ord[T - 1]}/${sist} med δ = ${tall(delta[T - 1][sist])} (${d.tagger[T - 1].map(c => `${c} ${tall(delta[T - 1][c])}`).join(" mot ")}).`, graf: graf(), tabeller: [sporTab(), transTab, emTab] });
    // følg bakpekerne
    const sti = [sist];
    for (let t = T - 1; t > d.fra; t--) sti.unshift(bp[t][sti[0]]);
    for (let t = d.fra - 1; t >= 0; t--) sti.unshift(d.tagger[t][0]);
    sti.forEach((c, t) => { nt[id(t, c)] = t === T - 1 ? "mal" : "sti"; if (t) kt[id(t - 1, sti[t - 1]) + ">" + id(t, c)] = "sti"; });
    // grådig: beste tagg ord for ord
    const gr = d.tagger.slice(0, d.fra + 1).map(x => x[0]);
    let gv = d.start[gr[d.fra]];
    for (let t = d.fra + 1; t < T; t++) {
      const p = gr[t - 1];
      const c = d.tagger[t].reduce((a, b) => (gv * tr(p, b) * em(d.ord[t], b) > gv * tr(p, a) * em(d.ord[t], a) ? b : a));
      gv *= tr(p, c) * em(d.ord[t], c); gr.push(c);
    }
    const lik = gr.join(" ") === sti.join(" ");
    scener.push({
      tekst: `Følg bakpekerne fra ${sist}: <b>${sti.join(" ")}</b>. ${lik ? "Grådig tagging (beste tagg ved hvert ord) gir her samme sekvens." : `Grådig tagging tar beste tagg ved hvert ord og ender på ${gr.join(" ")} med ${tall(gv)}, som er dårligere: grådig er ikke Viterbi.`}`,
      graf: graf(), tabeller: [sporTab(), transTab, emTab]
    });
    return { scener, sti, delta: delta[T - 1][sist], gradig: gr, gv };
  }

  // ================= CYK =================
  function cyk(d) {
    const w = d.ord, n = w.length;
    const P = {}, B = {}; // P["i,k"][X] = sannsynlighet, B = bakpekere
    const key = (i, k) => i + "," + k;
    const DX = 160, DY = 100;
    const celleTekst = (c, sep = " · ") => (c && Object.keys(c).length ? Object.entries(c).map(([X, p]) => `${X} ${tall(p)}`).join(sep) : "–");
    const nt = {}, synligeKanter = [];
    const graf = () => {
      const noder = w.map((o, i) => ({ id: "o" + (i + 1), tekst: o, form: "boks", x: i * DX, y: n * DY, tilstand: "ny" }));
      for (let L = 1; L <= n; L++) for (let i = 1; i + L - 1 <= n; i++) {
        const k = i + L - 1, id = "c" + key(i, k);
        noder.push({ id, tekst: P[key(i, k)] ? celleTekst(P[key(i, k)], "\n") : "?", form: "boks", x: ((i + k) / 2 - 1) * DX, y: (n - L) * DY, over: `[${i},${k}]`, tilstand: nt[id] || "ny" });
      }
      return { retning: true, noder, kanter: synligeKanter.map(k => ({ ...k })) };
    };
    const regelTab = {
      tittel: "Grammatikken (E₀ på CNF)", kol: ["Regel", "p"],
      rader: [...d.regler.map(([X, Y, Z, p]) => [`${X} → ${Y} ${Z}`, tall(p)]),
        ...[...new Set(w)].flatMap(o => (d.leks[o] || []).map(([X, p]) => [`${X} → ${o}`, tall(p)])),
        ...d.enhet.map(([X, Y, p]) => [`${X} → ${Y} (slås sammen med ordregelen)`, tall(p)])]
    };
    const spor = [];
    const sporTab = m => ({ tittel: "Chartet", kol: ["Spenn [i,k]", "Ord", "Innhold"], rader: spor.map(r => r.slice()), marker: m });
    const scener = [{ tekst: `CYK fyller én celle per spenn [i,k], korteste spenn først. Cellen holder beste sannsynlighet for hver ikke-terminal over ordene i..k.`, graf: graf(), tabeller: [regelTab] }];
    const ferdig = () => Object.keys(nt).forEach(k => { if (nt[k] === "aktiv") nt[k] = "utvidet"; });
    for (let i = 1; i <= n; i++) {
      ferdig();
      const o = w[i - 1];
      if (!d.leks[o]) {
        scener.push({ tekst: `«${esc(o)}» finnes ikke i leksikonet. Parsingen stopper.`, graf: graf(), tabeller: [regelTab] });
        return { scener, s: null };
      }
      const c = {}, b = {};
      d.leks[o].forEach(([X, p]) => { c[X] = p; b[X] = { ord: o }; });
      const sammen = [];
      d.enhet.forEach(([X, Y, p]) => {
        if (c[Y] != null && c[Y] * p > (c[X] ?? 0)) { c[X] = c[Y] * p; b[X] = { ord: o, via: Y }; sammen.push(`${X} → ${o} = ${tall(p)} · ${tall(c[Y])} = ${tall(c[X])}`); }
      });
      P[key(i, i)] = c; B[key(i, i)] = b;
      nt["c" + key(i, i)] = "aktiv";
      synligeKanter.push({ fra: "c" + key(i, i), til: "o" + i });
      spor.push([`[${i},${i}]`, o, celleTekst(c)]);
      scener.push({
        tekst: `[${i},${i}] «${esc(o)}»: ${d.leks[o].map(([X, p]) => `${X} → ${o} (${tall(p)})`).join(", ")}.${sammen.length ? ` Enhetsregel slått sammen: ${sammen.join("; ")}.` : ""}`,
        graf: graf(), tabeller: [sporTab([spor.length - 1]), regelTab]
      });
    }
    for (let L = 2; L <= n; L++) for (let i = 1; i + L - 1 <= n; i++) {
      ferdig();
      const k = i + L - 1, c = {}, b = {}, funn = [];
      for (let j = i; j < k; j++) for (const [X, Y, Z, p] of d.regler) {
        const py = P[key(i, j)][Y], pz = P[key(j + 1, k)][Z];
        if (py == null || pz == null) continue;
        const v = py * pz * p;
        funn.push({ X, Y, Z, p, j, v, py, pz });
        nt["c" + key(i, j)] = "aktiv"; nt["c" + key(j + 1, k)] = "aktiv";
        if (v > (c[X] ?? 0)) { c[X] = v; b[X] = { j, Y, Z, p }; }
      }
      P[key(i, k)] = c; B[key(i, k)] = b;
      nt["c" + key(i, k)] = "aktiv";
      Object.values(b).forEach(x => { synligeKanter.push({ fra: "c" + key(i, k), til: "c" + key(i, x.j) }, { fra: "c" + key(i, k), til: "c" + key(x.j + 1, k) }); });
      const ordene = w.slice(i - 1, k).join(" ");
      spor.push([`[${i},${k}]`, ordene, celleTekst(c)]);
      let t = `[${i},${k}] «${esc(ordene)}»: ` + (funn.length
        ? funn.map(f => `j = ${f.j}: ${f.X} → ${f.Y} ${f.Z} = ${tall(f.p)} · ${tall(f.py)} · ${tall(f.pz)} = ${tall(f.v)}`).join("; ") + "."
        : `ingen regel X → Y Z passer for noen deling j, så cellen er tom.`);
      if (d.merknad?.[key(i, k)]) t += " " + d.merknad[key(i, k)];
      scener.push({ tekst: t, graf: graf(), tabeller: [sporTab([spor.length - 1]), regelTab] });
    }
    ferdig();
    const topp = P[key(1, n)].S;
    // bakpekerne gir treet; cellene i treet markeres som sti
    let nr = 0;
    const faktorer = [], iTre = new Set();
    const bygg = (X, i, k) => {
      iTre.add(key(i, k));
      const b = B[key(i, k)][X], me = { id: "t" + nr++, tekst: X, barn: [] };
      if (b.ord != null) {
        if (b.via) {
          faktorer.push([`${X} → ${b.via}`, d.enhet.find(e => e[0] === X && e[1] === b.via)[2]]);
          faktorer.push([`${b.via} → ${b.ord}`, d.leks[b.ord].find(e => e[0] === b.via)[1]]);
          me.barn.push({ id: "t" + nr++, tekst: b.via, barn: [{ id: "t" + nr++, tekst: b.ord, barn: [] }] });
        } else {
          faktorer.push([`${X} → ${b.ord}`, d.leks[b.ord].find(e => e[0] === X)[1]]);
          me.barn.push({ id: "t" + nr++, tekst: b.ord, barn: [] });
        }
      } else {
        faktorer.push([`${X} → ${b.Y} ${b.Z}`, b.p]);
        me.barn.push(bygg(b.Y, i, b.j), bygg(b.Z, b.j + 1, k));
      }
      return me;
    };
    if (topp == null) {
      scener.push({ tekst: `Ingen S i [1,${n}]: setningen kan ikke parses med denne grammatikken.`, graf: graf(), tabeller: [sporTab(), regelTab] });
      return { scener, s: null };
    }
    const rot = bygg("S", 1, n);
    Object.keys(P).forEach(k => { if (iTre.has(k)) nt["c" + k] = "sti"; });
    nt["c" + key(1, n)] = "mal";
    const blind = Object.keys(P).filter(k => !iTre.has(k) && Object.keys(P[k]).length && k.split(",")[0] !== k.split(",")[1]);
    scener.push({
      tekst: `S finnes i [1,${n}] med P = <b>${tall(topp)}</b>: setningen kan parses.${blind.length ? ` ${blind.map(k => `[${k}] (${Object.keys(P[k]).join(", ")})`).join(", ")} er ${blind.length > 1 ? "blindveier" : "en blindvei"} som aldri brukes i det beste treet. CYK bygger ${blind.length > 1 ? "dem" : "den"} likevel, fordi den er bottom-up.` : ""}`,
      graf: graf(), tabeller: [sporTab(), regelTab]
    });
    const T = A.tre(rot);
    const f = 1.3;
    T.noder.forEach(x => { x.x *= f; x.form = "boks"; delete x.under; x.tilstand = "sti"; });
    T.kanter.forEach(k => { k.tilstand = "sti"; });
    T.retning = true;
    const produkt = faktorer.reduce((p, x) => p * x[1], 1);
    scener.push({
      tekst: `Treet fra bakpekerne. P(treet) er produktet av alle ${faktorer.length} regler, også ordreglene: ${faktorer.map(x => tall(x[1])).join(" × ")} = <b>${tall(produkt)}</b>, det samme som S i [1,${n}].`,
      graf: T, tabeller: [{ tittel: "Reglene i treet", kol: ["Regel", "p"], rader: faktorer.map(x => [x[0], tall(x[1])]) }]
    });
    return { scener, s: topp, produkt, P };
  }

  // ================= Eksempeldata =================
  const KORPUS = ["<S> the wumpus smells", "<S> the wumpus is dead", "<S> the pit is breezy"];
  // E₀ (fig. 24.2) med de binære reglene; enhetsreglene slås sammen med ordreglene (CNF), som i notatet.
  const E0 = {
    regler: [["S", "NP", "VP", 0.90], ["NP", "Article", "Noun", 0.25], ["NP", "Digit", "Digit", 0.05], ["NP", "NP", "PP", 0.10],
      ["NP", "NP", "RelClause", 0.05], ["VP", "VP", "NP", 0.35], ["VP", "VP", "Adjective", 0.05], ["VP", "VP", "PP", 0.10],
      ["VP", "VP", "Adverb", 0.10], ["Adjs", "Adjective", "Adjs", 0.20], ["PP", "Prep", "NP", 1.00], ["RelClause", "RelPro", "VP", 1.00]],
    enhet: [["NP", "Pronoun", 0.25], ["NP", "Name", 0.10], ["NP", "Noun", 0.10], ["VP", "Verb", 0.40], ["Adjs", "Adjective", 0.80]],
    leks: { every: [["Article", 0.05]], the: [["Article", 0.40]], wumpus: [["Noun", 0.15]], smells: [["Verb", 0.10]], is: [["Verb", 0.10]], dead: [["Adjective", 0.05]] }
  };
  const DUCK = {
    ord: ["he", "saw", "her", "duck"], tagger: [["PRP"], ["VBD"], ["PRP$", "PRP"], ["NN", "VB"]],
    fra: 1, start: { VBD: 1 },
    trans: { VBD: { "PRP$": 0.3, PRP: 0.4 }, "PRP$": { NN: 0.9, VB: 0.01 }, PRP: { NN: 0.05, VB: 0.3 } },
    emis: { her: { "PRP$": 0.2, PRP: 0.2 }, duck: { NN: 0.02, VB: 0.01 } }
  };

  A.legg({
    id: "bigram",
    navn: "Bigram-modell med og uten add-one smoothing",
    familie: "Språk", ep: "E20",
    kort: "En bigram-modell antar at hvert ord bare avhenger av ordet før (Markov-antagelsen). MLE er en brøk av tellinger: P(w | forrige) = c(forrige w) / c(forrige). Ett usett par gir P = 0, og siden setningssannsynligheten er et produkt, blir hele setningen 0. Add-one (Laplace) gir (c + 1) / (c(forrige) + V).",
    punkter: [
      "Felle: +V under brøkstreken, ikke +1. P(dead | is) = (1 + 1)/(2 + 7) = 2/9, ikke 2/3.",
      "Prisen: add-one tar mye fra det du har sett. P(is | pit) faller fra 1 til 1/4.",
      `Ukjent ord og usett par er ulike problemer: ${esc("<UNK>")} løser ukjente ord; smoothing, backoff og interpolation løser usette n-gram av kjente ord.`,
      "Hvorfor smoothing (2025 Q12a): usette n-gram gir 0 for hele setningen, og smoothing flytter masse fra vanlige til sjeldne og usette n-gram.",
      "Korpuset er laget for videoen (ILLUSTRASJON); metoden er bokas (24.1.2 og 24.1.4)."
    ],
    data: null,
    eksempler: [
      { navn: "Notatets korpus: <S> the pit smells", data: { korpus: KORPUS, setning: "<S> the pit smells" } },
      { navn: "Øv selv 4: <S> the wumpus is breezy", data: { korpus: KORPUS, setning: "<S> the wumpus is breezy" } }
    ],
    kjor: d => bigram(d).scener,
    svar(d) {
      const r = bigram(d);
      // Eksakt desimal godtas også når nevneren bare har faktorene 2 og 5 (1/100 = 0,01).
      const desimal = b => { let n = b.d; while (n % 2 === 0) n /= 2; while (n % 5 === 0) n /= 5; return n === 1 && b.n ? [tall(b.n / b.d)] : []; };
      return r.mle == null ? [] : [
        { id: "mle", navn: "P(setningen) uten smoothing (brøk)", verdi: r.mle, godta: r.udef ? [] : desimal(r.pm) },
        { id: "add1", navn: "P(setningen) med add-one (brøk)", verdi: r.add1, godta: desimal(r.pa) }
      ];
    }
  });

  A.legg({
    id: "viterbi",
    navn: "Viterbi for POS-tagging (HMM)",
    familie: "Språk", ep: "E20",
    kort: "En HMM-tagger har taggene som skjulte tilstander og ordene som observasjoner. Viterbi finner den mest sannsynlige taggsekvensen: δ(ord, tagg) = max over forrige tagg av δ(forrige) · P(tagg | forrige tagg) · P(ord | tagg). Hver node husker bare den beste stien inn (bakpekeren), og til slutt følger du pilene bakover fra beste sluttilstand.",
    punkter: [
      "Felle: grådig tagging (beste tagg ved hvert ord) er ikke Viterbi. Her gir grådig PRP VBD PRP VB med under en fjerdedel av sannsynligheten.",
      "Transition model P(Cₜ | Cₜ₋₁) og sensor model P(Wₜ | Cₜ) telles i et tagget korpus, f.eks. P(VB | MD) = 10 471 / 13 124 ≈ 0,8.",
      "Viterbi er «most likely explanation» (14.2.3) brukt på tagging, med omtrent 97 % treff.",
      "Tallene er laget for videoen (ILLUSTRASJON). Bare forholdstall teller, så δ(saw/VBD) = 1."
    ],
    data: null,
    eksempler: [
      { navn: "«he saw her duck» (notatet)", data: DUCK },
      { navn: "Øv selv 5: P(duck | VB) = 0,1", data: { ...DUCK, emis: { ...DUCK.emis, duck: { NN: 0.02, VB: 0.1 } } } }
    ],
    kjor: d => viterbi(d).scener,
    svar(d) {
      const r = viterbi(d);
      return [
        { id: "sekvens", navn: "Beste taggsekvens", verdi: r.sti.join(" ") },
        { id: "delta", navn: "δ for beste sluttilstand", verdi: tall(r.delta) }
      ];
    }
  });

  A.legg({
    id: "cyk",
    navn: "CYK-parsing (PCFG på Chomsky Normal Form)",
    familie: "Språk", ep: "E20",
    kort: "CYK er en bottom-up chart parser for grammatikker på Chomsky Normal Form (X → ord eller X → Y Z). Den fyller et chart med beste sannsynlighet for hver ikke-terminal over hvert spenn, korteste spenn først, så hver frase lagres bare én gang. S over hele setningen gir den beste parsen, og bakpekerne gir treet.",
    punkter: [
      "Tid O(n³m), plass O(n²m) for n ord og m ikke-terminaler: dobbel setningslengde gir 8 ganger så lang tid.",
      "E₀ har enhetsregler (VP → Verb, NP → Noun), som CNF ikke tillater. Her er de slått sammen med ordreglene: VP → smells = 0,40 · 0,10 = 0,04.",
      "CYK bygger også blindveier: S over «wumpus smells» brukes aldri.",
      "P(treet) er produktet av alle regler, også ordreglene: «every wumpus smells» har seks faktorer, ikke tre.",
      "Top-down starter i S og utforsker utvidelser som aldri passer ordene; bottom-up bygger delstrukturer som aldri blir del av en hel parse (2025 Q12b)."
    ],
    data: null,
    eksempler: [
      { navn: "«every wumpus smells» (fig. 24.6)", data: { ...E0, ord: ["every", "wumpus", "smells"] } },
      { navn: "Øv selv 6: «the wumpus smells»", data: { ...E0, ord: ["the", "wumpus", "smells"] } },
      { navn: "«the wumpus is dead» (L9 s. 63)", data: { ...E0, ord: ["the", "wumpus", "is", "dead"], merknad: { "1,3": "Sliden (L9 s. 63) viser ingenting her. Men sliden har selv «Verb, VP» for «is», og da gir NP + VP en S for «the wumpus is». Sliden har bare utelatt den." } } }
    ],
    kjor: d => cyk(d).scener,
    svar(d) {
      const r = cyk(d);
      return [
        { id: "s", navn: "Dekker S hele setningen? (ja/nei)", verdi: r.s != null ? "ja" : "nei" },
        ...(r.s != null ? [{ id: "p", navn: "P(S over hele setningen)", verdi: tall(r.s) }] : [])
      ];
    }
  });

  if (typeof module !== "undefined") module.exports = { bigram, viterbi, cyk, tall, KORPUS, E0, DUCK };
})();
