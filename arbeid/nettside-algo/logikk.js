// Logikk (E11–E16): sannhetstabell, CNF, PL-resolusjon, forward/backward chaining, DPLL, WalkSAT,
// unifikasjon, FOL forward chaining og FOL-resolusjon. Se KONTRAKT.md.
(() => {
  const ALGO = window.ALGO;
  const nat = (a, b) => String(a).localeCompare(String(b), "nb", { numeric: true });
  const liste = a => (a.length < 2 ? a.join("") : a.slice(0, -1).join(", ") + " og " + a[a.length - 1]);
  const TF = b => (b ? "T" : "F");
  const tall = x => String(x).replace(".", ",");

  // ---------- Proposisjonslogikk: parser, utskrift, evaluering ----------
  const OPS = { "<=>": "⇔", "<->": "⇔", "=>": "⇒", "->": "⇒", "~": "¬", "!": "¬", "&": "∧", "|": "∨" };
  function lesPL(s) {
    const tok = (s.match(/<=>|<->|=>|->|[⇔⇒¬~!∧&∨|()]|[A-Za-z][A-Za-z0-9_]*(?:[₀-₉]+(?:,[₀-₉]+)*)?/g) || []).map(t => OPS[t] || t);
    let i = 0;
    const feil = () => { throw new Error(`Kan ikke lese «${s}»`); };
    const iff = () => { let a = imp(); while (tok[i] === "⇔") { i++; a = { o: "⇔", a, b: imp() }; } return a; };
    const imp = () => { const a = or(); if (tok[i] === "⇒") { i++; return { o: "⇒", a, b: imp() }; } return a; };
    const or = () => { let a = and(); while (tok[i] === "∨") { i++; a = { o: "∨", a, b: and() }; } return a; };
    const and = () => { let a = un(); while (tok[i] === "∧") { i++; a = { o: "∧", a, b: un() }; } return a; };
    const un = () => {
      const t = tok[i];
      if (t === "¬") { i++; return { o: "¬", a: un() }; }
      if (t === "(") { i++; const a = iff(); if (tok[i++] !== ")") feil(); return a; }
      if (t && /^[A-Za-z]/.test(t)) { i++; return { o: "s", n: t }; }
      return feil();
    };
    const f = iff();
    if (i < tok.length) feil();
    return f;
  }
  function vis(f) {
    if (f.o === "s") return f.n;
    if (f.o === "¬") return "¬" + (f.a.o === "s" || f.a.o === "¬" ? vis(f.a) : "(" + vis(f.a) + ")");
    const side = g => (g.o === "s" || g.o === "¬" || (g.o === f.o && (f.o === "∧" || f.o === "∨")) ? vis(g) : "(" + vis(g) + ")");
    return side(f.a) + " " + f.o + " " + side(f.b);
  }
  function ev(f, m) {
    switch (f.o) {
      case "s": return !!m[f.n];
      case "¬": return !ev(f.a, m);
      case "∧": return ev(f.a, m) && ev(f.b, m);
      case "∨": return ev(f.a, m) || ev(f.b, m);
      case "⇒": return !ev(f.a, m) || ev(f.b, m);
      default: return ev(f.a, m) === ev(f.b, m);
    }
  }
  const symboler = (f, m = new Set()) => { if (f.o === "s") m.add(f.n); else { symboler(f.a, m); if (f.b) symboler(f.b, m); } return m; };

  // ---------- CNF ----------
  const FASER = [
    ["⇔ ut", f => f.o === "⇔" && ["biconditional elimination", { o: "∧", a: { o: "⇒", a: f.a, b: f.b }, b: { o: "⇒", a: f.b, b: f.a } }]],
    ["⇒ ut", f => f.o === "⇒" && ["implication elimination", { o: "∨", a: { o: "¬", a: f.a }, b: f.b }]],
    ["¬ inn", f => f.o === "¬" && (f.a.o === "¬" ? ["double-negation elimination", f.a.a]
      : f.a.o === "∧" ? ["De Morgan", { o: "∨", a: { o: "¬", a: f.a.a }, b: { o: "¬", a: f.a.b } }]
        : f.a.o === "∨" ? ["De Morgan", { o: "∧", a: { o: "¬", a: f.a.a }, b: { o: "¬", a: f.a.b } }] : null)],
    ["∨ over ∧", f => f.o === "∨" && (f.a.o === "∧" ? ["distributivitet", { o: "∧", a: { o: "∨", a: f.a.a, b: f.b }, b: { o: "∨", a: f.a.b, b: f.b } }]
      : f.b.o === "∧" ? ["distributivitet", { o: "∧", a: { o: "∨", a: f.a, b: f.b.a }, b: { o: "∨", a: f.a, b: f.b.b } }] : null)]
  ];
  // Første node i preorden der regelen passer, skrives om. sti = veien fra roten (0 = venstre, 1 = høyre).
  function omskriv(f, regel, sti = "") {
    const r = regel(f);
    if (r) return { f: r[1], navn: r[0], sti };
    if (f.o === "s") return null;
    if (f.o === "¬") { const u = omskriv(f.a, regel, sti + "0"); return u && { ...u, f: { o: "¬", a: u.f } }; }
    let u = omskriv(f.a, regel, sti + "0");
    if (u) return { ...u, f: { o: f.o, a: u.f, b: f.b } };
    u = omskriv(f.b, regel, sti + "1");
    return u && { ...u, f: { o: f.o, a: f.a, b: u.f } };
  }
  function tilCNF(f) {
    const steg = [];
    for (const [fase, regel] of FASER) {
      let n = 0, u;
      while ((u = omskriv(f, regel)) && n < 200) { f = u.f; n++; steg.push({ fase, navn: u.navn, f, sti: u.sti }); }
      if (!n) steg.push({ fase, navn: null, f, sti: null });
    }
    return { steg, f };
  }
  const konj = f => (f.o === "∧" ? konj(f.a).concat(konj(f.b)) : [f]);
  const disj = f => (f.o === "∨" ? disj(f.a).concat(disj(f.b)) : [f]);
  const litTekst = f => (f.o === "s" ? f.n : "¬" + f.a.n);
  const symb = l => l.replace(/^¬/, "");
  const motsatt = l => (l.startsWith("¬") ? l.slice(1) : "¬" + l);
  const taut = k => k.some(l => k.includes("¬" + l));
  function klausuler(f) {
    const ut = [], tautologier = [];
    konj(f).forEach(k => { const l = [...new Set(disj(k).map(litTekst))]; (taut(l) ? tautologier : ut).push(l); });
    return { ut, tautologier };
  }
  const sorterK = k => k.slice().sort((a, b) => nat(symb(a), symb(b)) || (a.length - b.length));
  const kTekst = k => (k.length ? k.join(" ∨ ") : "□");
  const cnfTekst = ks => ks.map(k => (k.length > 1 ? "(" + kTekst(k) + ")" : kTekst(k))).join(" ∧ ");

  function treForm(f, id = "r") {
    if (f.o === "s") return { id, tekst: f.n };
    if (f.o === "¬") return { id, tekst: "¬", barn: [treForm(f.a, id + "0")] };
    return { id, tekst: f.o, barn: [treForm(f.a, id + "0"), treForm(f.b, id + "1")] };
  }
  function formGraf(f, sti) {
    const g = ALGO.tre(treForm(f));
    if (sti != null) {
      g.noder.forEach(n => { if (n.id.startsWith("r" + sti)) n.tilstand = "aktiv"; });
      g.kanter.forEach(k => { if (k.til.startsWith("r" + sti) && k.fra.startsWith("r" + sti)) k.tilstand = "aktiv"; });
    }
    return g;
  }

  function cnf(data) {
    const scener = [], linjer = [], alle = [];
    const tab = () => ({ tittel: "Omskriving", kol: ["#", "Setning", "Steg", "Regel", "Resultat"], rader: linjer.slice(), marker: linjer.length ? [linjer.length - 1] : [] });
    data.setninger.forEach((s, nr) => {
      const f0 = lesPL(s), sn = data.setninger.length > 1 ? `Setning ${nr + 1}` : "Setningen";
      linjer.push([String(linjer.length + 1), String(nr + 1), "start", "–", vis(f0)]);
      scener.push({ tekst: `${sn}: <b>${vis(f0)}</b>. Stegene er ⇔ ut, ⇒ ut, ¬ inn og ∨ over ∧, i den rekkefølgen.${nr === 0 && data.tekst ? " " + data.tekst : ""}`, graf: formGraf(f0), tabeller: [tab()] });
      const { steg, f } = tilCNF(f0);
      steg.forEach(st => {
        if (!st.navn) { linjer.push([String(linjer.length + 1), String(nr + 1), st.fase, "ingen endring", vis(st.f)]); return; }
        linjer.push([String(linjer.length + 1), String(nr + 1), st.fase, st.navn, vis(st.f)]);
        scener.push({ tekst: `${st.fase}: ${st.navn} på den markerte delen gir <b>${vis(st.f)}</b>.`, graf: formGraf(st.f, st.sti), tabeller: [tab()] });
      });
      const { ut, tautologier } = klausuler(f);
      alle.push(...ut);
      scener.push({
        tekst: `${sn} er i CNF. Den gir ${ut.length} klausul${ut.length === 1 ? "" : "er"}: ${ut.map(kTekst).join(" · ") || "ingen"}.${tautologier.length ? ` Strøk ${tautologier.length} tautologi${tautologier.length === 1 ? "" : "er"} (${tautologier.map(kTekst).join(" · ")}), som alltid er sanne.` : ""}`,
        graf: formGraf(f), tabeller: [tab(), { tittel: "Klausuler", kol: ["Nr", "Klausul"], rader: alle.map((k, i) => [String(i + 1), kTekst(k)]), marker: ut.map((_, i) => alle.length - ut.length + i) }]
      });
    });
    const unike = [];
    alle.map(sorterK).forEach(k => { if (!unike.some(u => u.join() === k.join())) unike.push(k); });
    return { scener, cnf: unike.length ? cnfTekst(unike) : "ingen klausuler (tautologi)", antall: unike.length };
  }

  ALGO.legg({
    id: "cnf",
    navn: "CNF-konvertering (proposisjonslogikk)",
    familie: "Logikk",
    ep: "E12",
    kort: "Enhver setning i proposisjonslogikk kan skrives om til conjunctive normal form: en konjunksjon av klausuler, der hver klausul er en disjunksjon av literaler. Rekkefølgen er fast: ⇔ ut, ⇒ ut, ¬ inn (De Morgan og double negation), og til slutt ∨ distribuert over ∧. Den markerte delen av treet er det som nettopp ble skrevet om.",
    punkter: [
      "Følg rekkefølgen. Distribuerer du før ¬ er flyttet inn, blir det feil.",
      "De Morgan bytter konnektiv: ¬(α ∨ β) blir ¬α ∧ ¬β, ikke ¬α ∨ ¬β.",
      "Klausuler med både P og ¬P er tautologier og kan strykes. Like literaler slås sammen (factoring).",
      "«Nøyaktig én er brun» er XOR, ikke ∨ (2018 P6).",
      "I FOL kommer standardisering, Skolemisering og ∀ ut i tillegg (E16)."
    ],
    data: null,
    eksempler: [
      { navn: "Boka: B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)", data: { setninger: ["B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)"] } },
      { navn: "Eksamen 2018 P6: «nøyaktig én av kanin 2 og 3 er brun»", data: { setninger: ["(B2 ∧ ¬B3) ∨ (¬B2 ∧ B3)"], tekst: "Bi betyr at kanin i er brun." } },
      { navn: "Eksamen 2024 Q15: tre setninger", data: { setninger: ["¬(P ∧ ¬Q) ∨ ¬(¬S ∧ ¬T)", "¬(T ∨ Q)", "U ⇒ (¬T ⇒ (¬S ∧ P))"] } },
      { navn: "Eksamen 2015 Problem 3: A ⇒ (B ∨ C), ¬A ⇒ (B ∨ C), ¬C, (B ∨ D) ⇒ E", data: { setninger: ["A ⇒ (B ∨ C)", "¬A ⇒ (B ∨ C)", "¬C", "(B ∨ D) ⇒ E"] } },
      { navn: "Øving 4, 2.1 e): A ⇔ (B ⇒ ¬C)", data: { setninger: ["A ⇔ (B ⇒ ¬C)"] } }
    ],
    kjor: data => cnf(data).scener,
    svar(data) {
      const r = cnf(data);
      return [{ id: "cnf", navn: "CNF (literalene sortert)", verdi: r.cnf }, { id: "antall", navn: "Antall klausuler", verdi: String(r.antall) }];
    }
  });

  // ---------- TT-ENTAILS ----------
  function tt(data) {
    const kb = data.kb.map(lesPL), α = lesPL(data.alfa);
    const navn = data.navn || kb.map(vis);
    const S = [...kb.reduce((m, f) => symboler(f, m), symboler(α))].sort(nat);
    const n = S.length, N = 2 ** n;
    const rader = [];
    for (let i = 0; i < N; i++) {
      const m = {};
      S.forEach((s, k) => { m[s] = !((i >> (n - 1 - k)) & 1); });
      const v = kb.map(f => ev(f, m)), K = v.every(Boolean), a = ev(α, m);
      rader.push({ nr: i + 1, m, v, K, a, sti: S.map(s => (m[s] ? "1" : "0")).join("") });
    }
    const kol = ["Rad"].concat(S, navn, ["KB", "α"]);
    const radTekst = r => [String(r.nr)].concat(S.map(s => TF(r.m[s])), r.v.map(TF), [TF(r.K), TF(r.a)]);
    const liten = n <= 4, blokk = liten ? 1 : 2 ** (n - 4);
    const rot = (d, sti) => (d === n ? { id: "t" + sti, type: "blad", tekst: "" }
      : { id: "t" + sti, tekst: S[d], barn: [{ ...rot(d + 1, sti + "1"), p: "T" }, { ...rot(d + 1, sti + "0"), p: "F" }] });
    const tre = liten && n ? ALGO.tre(rot(0, "")) : null;
    const merke = r => (!r.K ? ["–", "beskaret"] : r.a ? ["✓", "mal"] : ["✗", "feil"]);
    const scener = [];
    const intro = `${data.tekst ? data.tekst + " " : ""}KB = ${navn.map((x, k) => (data.navn ? `${x}: ${vis(kb[k])}` : x)).join(" · ") || "{}"}, α = ${vis(α)}. ${n} symboler gir 2<sup>${n}</sup> = ${N} rader; true prøves før false.`;
    const graf = (til, aktiv) => {
      if (!tre) return undefined;
      const g = ALGO.kopi(tre), sett = rader.slice(0, til);
      const besøkt = id => sett.some(r => ("t" + r.sti).startsWith(id));
      g.noder.forEach(nd => {
        const r = rader.find(x => "t" + x.sti === nd.id);
        if (r) {
          if (r.nr <= til) { const [u, t] = merke(r); nd.under = u; nd.tilstand = t; } else nd.under = "";
          if (aktiv && r === aktiv) nd.tilstand = "aktiv";
        } else if (besøkt(nd.id)) nd.tilstand = aktiv && ("t" + aktiv.sti).startsWith(nd.id) ? "aktiv" : "utvidet";
      });
      g.kanter.forEach(k => { if (aktiv && ("t" + aktiv.sti).startsWith(k.til)) k.tilstand = "aktiv"; });
      return g;
    };
    scener.push({ tekst: intro, graf: graf(0), tabeller: [{ tittel: "Sannhetstabell", kol, rader: [], marker: [] }] });
    for (let fra = 0; fra < N; fra += blokk) {
      const del = rader.slice(fra, fra + blokk), vist = rader.slice(0, fra + blokk).filter(r => liten || r.K);
      let t;
      if (liten) {
        const r = del[0];
        t = `Rad ${r.nr}: ${S.map(s => `${s} = ${TF(r.m[s])}`).join(", ")}. ` + (!r.K ? "KB er usann, så raden teller ikke." : r.a ? "KB er sann, og α er sann." : "KB er sann, men α er usann: <b>motmodell</b>.");
      } else {
        const faste = S.slice(0, 4).map(s => `${s} = ${TF(del[0].m[s])}`).join(", ");
        const k = del.filter(r => r.K);
        t = `Rad ${del[0].nr}–${del[del.length - 1].nr} (${faste}): KB er sann i ${k.length} av ${del.length} rader${k.some(r => !r.a) ? ", og i minst én av dem er α usann" : ""}. Tabellen viser bare radene der KB er sann.`;
      }
      scener.push({
        tekst: t,
        graf: graf(fra + del.length, liten ? del[0] : null),
        tabeller: [{ tittel: "Sannhetstabell", kol, rader: vist.map(radTekst), marker: vist.map((r, i) => (r.K ? i : -1)).filter(i => i >= 0) }]
      });
    }
    const kbRader = rader.filter(r => r.K), mot = kbRader.find(r => !r.a);
    const følger = !mot;
    scener.push({
      tekst: !kbRader.length ? "KB er usann i alle rader (unsatisfiable), så KB ⊨ α for enhver α."
        : følger ? `KB er sann i ${kbRader.length} rad${kbRader.length === 1 ? "" : "er"} (${kbRader.map(r => r.nr).join(", ")}), og α er sann i alle: <b>KB ⊨ α</b>.`
          : `I rad ${mot.nr} er KB sann og α usann (${S.map(s => `${s} = ${TF(mot.m[s])}`).join(", ")}): <b>KB ⊭ α</b>.`,
      graf: graf(N, null),
      tabeller: [{ tittel: "Radene der KB er sann", kol, rader: kbRader.map(radTekst), marker: kbRader.map((r, i) => (r.a ? -1 : i)).filter(i => i >= 0) }]
    });
    return { scener, følger, modeller: kbRader.length };
  }

  ALGO.legg({
    id: "tt-entails",
    navn: "Model checking med sannhetstabell (TT-ENTAILS)",
    familie: "Logikk",
    ep: "E11",
    kort: "TT-ENTAILS sjekker om KB ⊨ α ved å gå gjennom alle 2<sup>n</sup> modellene dybde først, med true før false. I hver rad der KB er sann, må α også være sann. Rader der KB er usann, teller ikke. Treet viser rekursjonen i TT-CHECK-ALL: ✓ betyr KB og α sanne, ✗ en motmodell og – at KB er usann.",
    punkter: [
      "Sound og complete, men O(2<sup>n</sup>) tid og O(n) minne.",
      "Tell symbolene, ikke setningene: wumpus-KB-en har 5 setninger, men 7 symboler og 128 rader.",
      "For α ⊨ β sjekker du bare radene der α er sann. Like kolonner i alle rader er ekvivalens, ikke entailment.",
      "KB ⊭ α betyr ikke KB ⊨ ¬α: agenten kan svare «vet ikke».",
      "Fig. 7.9 lister F før T, 2022-fasiten T før F. Utfallet er det samme."
    ],
    data: null,
    eksempler: [
      { navn: "Figur 7.5: tre groper, α₁ = ¬P₁,₂", data: { kb: ["¬P₁,₂", "P₂,₂ ∨ P₃,₁"], navn: ["¬B₁,₁", "B₂,₁"], alfa: "¬P₁,₂", tekst: "Ingen breeze i [1,1] gir ¬P₁,₂, og breeze i [2,1] gir P₂,₂ ∨ P₃,₁ (P₁,₁ er kjent usann)." } },
      { navn: "Figur 7.5: samme KB, α₂ = ¬P₂,₂", data: { kb: ["¬P₁,₂", "P₂,₂ ∨ P₃,₁"], navn: ["¬B₁,₁", "B₂,₁"], alfa: "¬P₂,₂", tekst: "Ingen breeze i [1,1] gir ¬P₁,₂, og breeze i [2,1] gir P₂,₂ ∨ P₃,₁ (P₁,₁ er kjent usann)." } },
      { navn: "Figur 7.9: hele wumpus-KB-en R₁–R₅, α = ¬P₁,₂", data: { kb: ["¬P₁,₁", "B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)", "B₂,₁ ⇔ (P₁,₁ ∨ P₂,₂ ∨ P₃,₁)", "¬B₁,₁", "B₂,₁"], navn: ["R₁", "R₂", "R₃", "R₄", "R₅"], alfa: "¬P₁,₂" } },
      { navn: "Eksamen 2022 oppgave 5: gullet i boksene", data: {
        kb: ["(B₁ ∧ ¬B₂ ∧ ¬B₃) ∨ (¬B₁ ∧ B₂ ∧ ¬B₃) ∨ (¬B₁ ∧ ¬B₂ ∧ B₃)", "(¬B₁ ∧ ¬¬B₂ ∧ ¬B₂) ∨ (¬¬B₁ ∧ ¬B₂ ∧ ¬B₂) ∨ (¬¬B₁ ∧ ¬¬B₂ ∧ B₂)"],
        navn: ["S₁", "S₂"], alfa: "B₁",
        tekst: "Bᵢ: gullet er i boks i. S₁: gull i nøyaktig én boks. S₂: nøyaktig én beskjed er sann, med M₁ = ¬B₁, M₂ = ¬B₂ og M₃ = B₂ satt inn."
      } },
      { navn: "Øving 4, 1.1 b): ¬A ∨ ¬B ⊨ ¬B?", data: { kb: ["¬A ∨ ¬B"], alfa: "¬B" } }
    ],
    kjor: data => tt(data).scener,
    svar(data) {
      const r = tt(data);
      return [{ id: "folger", navn: "KB ⊨ α? (ja/nei)", verdi: r.følger ? "ja" : "nei" }, { id: "modeller", navn: "Antall rader der KB er sann", verdi: String(r.modeller) }];
    }
  });

  // ---------- Klausulbokser: felles oppsett for resolusjonsgrafer ----------
  // K: [{tekst, rad, fra: [indekser] | null}] med foreldre før barn. Gir x/y slik at boksene i en rad ikke overlapper.
  function plasser(K) {
    const b = k => Math.max(60, 8 * k.tekst.length + 30), x = [], rader = {};
    K.forEach((k, i) => (rader[k.rad] = rader[k.rad] || []).push(i));
    Object.keys(rader).map(Number).sort((a, c) => a - c).forEach(r => {
      const ids = rader[r].map(i => ({ i, ø: K[i].fra ? K[i].fra.reduce((s, f) => s + x[f], 0) / K[i].fra.length : null }));
      if (ids.some(o => o.ø != null)) ids.sort((p, q) => (p.ø ?? 0) - (q.ø ?? 0));
      let forrige = null;
      ids.forEach(o => {
        const min = forrige == null ? -Infinity : x[forrige] + (b(K[forrige]) + b(K[o.i])) / 2 + 30;
        x[o.i] = o.ø == null ? (forrige == null ? b(K[o.i]) / 2 : min) : Math.max(o.ø, min);
        forrige = o.i;
      });
    });
    return K.map((k, i) => ({ x: Math.round(x[i]), y: k.rad * 120 }));
  }
  function bokser(K, pos, synlige, tilstand, kantTekst) {
    const noder = [], kanter = [];
    for (let i = 0; i < synlige; i++) {
      noder.push({ id: "k" + i, x: pos[i].x, y: pos[i].y, tekst: K[i].tekst, over: K[i].nr, form: "boks", tilstand: tilstand(i) });
      (K[i].fra || []).forEach(f => kanter.push({ fra: "k" + f, til: "k" + i, tekst: kantTekst ? kantTekst(i) : "", tilstand: tilstand(i) === "sti" && tilstand(f) === "sti" ? "sti" : "ny" }));
    }
    return { retning: true, noder, kanter };
  }
  function bevisSett(K, slutt) {
    const s = new Set(), gå = i => { if (s.has(i)) return; s.add(i); (K[i].fra || []).forEach(gå); };
    gå(slutt);
    return s;
  }

  // ---------- PL-resolusjon ----------
  function plRes(data) {
    const K = [], nøkkel = l => sorterK(l).join("|"), finnes = new Set(), strøk = [];
    const legg = (lits, kilde) => {
      const key = nøkkel(lits);
      if (finnes.has(key)) return;
      finnes.add(key);
      K.push({ lits, tekst: kTekst(lits), rad: 0, fra: null, kilde });
    };
    data.kb.forEach(s => { const r = klausuler(tilCNF(lesPL(s)).f); strøk.push(...r.tautologier); r.ut.forEach(l => legg(l, "KB")); });
    const negert = { o: "¬", a: lesPL(data.alfa) };
    const rn = klausuler(tilCNF(negert).f);
    strøk.push(...rn.tautologier);
    rn.ut.forEach(l => legg(l, "¬α"));
    K.forEach((k, i) => { k.nr = "C" + (i + 1); });
    const hendelser = [{ synlige: K.length, tekst: `${data.tekst ? data.tekst + " " : ""}KB ∧ ¬α i CNF gir ${K.length} klausuler. Negert mål: ${vis(negert)}.${strøk.length ? ` Strøk ${strøk.length} tautologi${strøk.length === 1 ? "" : "er"} fra CNF-en.` : ""}` }];
    let runde = 0, tom = null;
    while (!tom) {
      runde++;
      const N = K.length, ny = [];
      for (let j = 1; j < N && !tom; j++) for (let i = 0; i < j && !tom; i++) {
        for (const l of K[i].lits) {
          const m = motsatt(l);
          if (!K[j].lits.includes(m)) continue;
          const r = [...new Set(K[i].lits.filter(x => x !== l).concat(K[j].lits.filter(x => x !== m)))];
          if (taut(r) || finnes.has(nøkkel(r))) continue;
          finnes.add(nøkkel(r));
          const k = { lits: r, tekst: kTekst(r), rad: runde, fra: [i, j], sym: symb(l), nr: "C" + (N + ny.length + 1) };
          ny.push(k);
          K.push(k);
          hendelser.push({
            synlige: K.length, ny: K.length - 1,
            tekst: `Runde ${runde}: ${K[i].nr} og ${K[j].nr} har ${symb(l)} med motsatt fortegn. ${r.length ? `Resolventen er ${k.nr}: <b>${k.tekst}</b>.` : "Resolventen er den tomme klausulen <b>□</b>."}`
          });
          if (!r.length) { tom = K.length - 1; break; }
        }
      }
      if (!ny.length) break;
    }
    const pos = plasser(K), scener = [];
    const bevis = tom != null ? bevisSett(K, tom) : null;
    const tab = (synlige, ny) => ({
      tittel: "Klausuler", kol: ["Nr", "Klausul", "Fra"],
      rader: K.slice(0, synlige).map(k => [k.nr, k.tekst, k.fra ? `${K[k.fra[0]].nr}, ${K[k.fra[1]].nr} (runde ${k.rad})` : k.kilde]),
      marker: ny != null ? [ny] : []
    });
    hendelser.forEach(h => scener.push({
      tekst: h.tekst,
      graf: bokser(K, pos, h.synlige, i => (i === h.ny ? (K[i].lits.length ? "aktiv" : "mal") : K[i].fra && h.ny != null && K[h.ny].fra.includes(i) ? "grense" : K[i].kilde === "¬α" ? "grense" : "ny"), i => K[i].sym),
      tabeller: [tab(h.synlige, h.ny)]
    }));
    scener.push({
      tekst: tom != null ? `□ er utledet: KB ∧ ¬α er unsatisfiable, så <b>KB ⊨ α</b>. Det markerte beviset bruker ${bevis.size - 1} av ${K.length - 1} klausuler; resten var bortkastet arbeid.`
        : `Runde ${runde} gir ingen nye klausuler (metning) uten □: <b>KB ⊭ α</b>.`,
      graf: bokser(K, pos, K.length, i => (bevis ? (i === tom ? "mal" : bevis.has(i) ? "sti" : "ny") : "ny"), i => K[i].sym),
      tabeller: [tab(K.length, null)]
    });
    return { scener, følger: tom != null };
  }

  ALGO.legg({
    id: "pl-resolusjon",
    navn: "Resolution refutation (proposisjonslogikk)",
    familie: "Logikk",
    ep: "E12",
    kort: "PL-RESOLUTION viser KB ⊨ α ved å vise at KB ∧ ¬α er unsatisfiable. Alt gjøres om til CNF, og par av klausuler med et komplementært par literaler gir en resolvent. Kommer den tomme klausulen □, følger α. Gir en runde ingen nye klausuler, følger α ikke.",
    punkter: [
      "Negér målet før CNF. Legger du til målet selv, beviser du ingenting.",
      "Kutt ett komplementært par om gangen. To par gir bare tautologier, som strykes.",
      "Metning uten □ betyr KB ⊭ α, ikke KB ⊨ ¬α.",
      "Sound og refutation-complete, men eksponentiell i verste fall. Fasitene viser bare de stegene beviset trenger.",
      "Her prøves alle par (Fig. 7.13): nye klausuler brukes først i neste runde, og bare par som gir noe nytt, vises."
    ],
    data: null,
    eksempler: [
      { navn: "Figur 7.14: KB = R₂ ∧ R₄, α = ¬P₁,₂", data: { kb: ["B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)", "¬B₁,₁"], alfa: "¬P₁,₂" } },
      { navn: "Eksamen 2018 P6: er kanin 1 hvit?", data: { kb: ["(B2 ∧ ¬B3) ∨ (¬B2 ∧ B3)", "(B3 ∧ ¬B4) ∨ (¬B3 ∧ B4)", "B4", "¬(B1 ∧ B4)"], alfa: "¬B1", tekst: "Bi betyr at kanin i er brun." } },
      { navn: "Eksamen 2024 Q14: KB = (P ∨ Q) ∧ (S ∧ P), α = P ⇒ Q ∨ (S ∧ P)", data: { kb: ["(P ∨ Q) ∧ (S ∧ P)"], alfa: "P ⇒ Q ∨ (S ∧ P)" } },
      { navn: "Eksamen 2024 Q14: samme KB, α = Q (følger ikke)", data: { kb: ["(P ∨ Q) ∧ (S ∧ P)"], alfa: "Q" } },
      { navn: "Eksamen 2015 Problem 3 (ekstra): følger E?", data: { kb: ["A ⇒ (B ∨ C)", "¬A ⇒ (B ∨ C)", "¬C", "(B ∨ D) ⇒ E"], alfa: "E" } },
      { navn: "Rain ⊨ Rain ∨ Wind: □ med en gang", data: { kb: ["Rain"], alfa: "Rain ∨ Wind" } }
    ],
    kjor: data => plRes(data).scener,
    svar: data => [{ id: "folger", navn: "KB ⊨ α? (ja/nei)", verdi: plRes(data).følger ? "ja" : "nei" }]
  });

  // ---------- Forward og backward chaining (Horn, proposisjonslogikk) ----------
  const lesHorn = kb => kb.map(s => {
    const [v, h] = s.split("⇒").map(x => x.trim()), prem = h == null ? [] : v.split("∧").map(x => x.trim());
    return h == null ? { prem, konkl: v, tekst: v } : { prem, konkl: h, tekst: prem.join("∧") + "⇒" + h };
  });
  function hornOppsett(kb, fast) {
    const regler = kb.filter(r => r.prem.length), symb = [];
    kb.forEach(r => r.prem.concat(r.konkl).forEach(s => { if (!symb.includes(s)) symb.push(s); }));
    const pos = Object.fromEntries(Object.entries(fast).map(([s, [x, y]]) => [s, { x, y }]));
    regler.forEach(r => {
      const søsken = regler.filter(q => q.konkl === r.konkl), k = søsken.indexOf(r);
      pos["r" + regler.indexOf(r)] = { x: pos[r.konkl].x + (k - (søsken.length - 1) / 2) * 110, y: pos[r.konkl].y + 85 };
    });
    return { regler, symb, pos };
  }

  function fc(data) {
    const kb = lesHorn(data.kb), q = data.q, { regler, symb, pos } = hornOppsett(kb, data.pos);
    const count = regler.map(r => r.prem.length), inferred = {}, agenda = kb.filter(r => !r.prem.length).map(r => r.konkl);
    const hist = [["start", "–", count.join(", "), agenda.join(", ") || "–", agenda.join(", ") || "–"]], tatt = [], scener = [];
    const graf = (aktiv, nedtalt = []) => ({
      retning: true,
      noder: symb.map(s => ({ id: s, x: pos[s].x, y: pos[s].y, tekst: s, over: s === q ? "q" : "", under: kb.some(r => !r.prem.length && r.konkl === s) ? "fakta" : "",
        tilstand: s === aktiv ? (s === q ? "mal" : "aktiv") : inferred[s] ? "utvidet" : agenda.includes(s) ? "grense" : "ny" }))
        .concat(regler.map((r, k) => ({ id: "r" + k, x: pos["r" + k].x, y: pos["r" + k].y, tekst: r.prem.join("∧"), under: "count " + count[k], form: "boks",
          tilstand: nedtalt.includes(k) ? "aktiv" : count[k] === 0 ? "utvidet" : "ny" }))),
      kanter: regler.flatMap((r, k) => r.prem.map(p => ({ fra: p, til: "r" + k, tilstand: inferred[p] ? "utvidet" : "ny" }))
        .concat([{ fra: "r" + k, til: r.konkl, tilstand: count[k] === 0 ? "utvidet" : "ny" }]))
    });
    const tabs = nedtalt => [
      { tittel: "Forward chaining", kol: ["Tas ut", "Teller ned", "count etterpå", "Ny i agenda", "Agenda"], rader: hist.slice(), marker: [hist.length - 1] },
      { tittel: "count", kol: ["Regel", "count"], rader: regler.map((r, k) => [r.tekst, String(count[k])]), marker: nedtalt }
    ];
    scener.push({ tekst: `Start: count = antall premisser i hver regel, og agendaen har faktaene ${liste(agenda) || "(ingen)"}. Spørsmål: ${q}.`, graf: graf(null), tabeller: tabs([]) });
    let følger = false;
    while (agenda.length) {
      const p = agenda.shift();
      tatt.push(p);
      if (p === q) {
        følger = true;
        hist.push([p, "–", "–", "–", "return true"]);
        scener.push({ tekst: `Tar ut ${p}. Det er spørsmålet: <b>return true</b>, altså KB ⊨ ${q}.`, graf: graf(p), tabeller: tabs([]) });
        break;
      }
      if (inferred[p]) {
        hist.push([p, "allerede inferred", count.join(", "), "–", agenda.join(", ") || "–"]);
        scener.push({ tekst: `Tar ut ${p}, men den er allerede inferred og hoppes over.`, graf: graf(p), tabeller: tabs([]) });
        continue;
      }
      inferred[p] = true;
      const nedtalt = [], nye = [];
      regler.forEach((r, k) => {
        r.prem.forEach(x => {
          if (x !== p) return;
          count[k]--;
          if (!nedtalt.includes(k)) nedtalt.push(k);
          if (count[k] === 0) { agenda.push(r.konkl); nye.push(r.konkl); }
        });
      });
      hist.push([p, nedtalt.map(k => regler[k].tekst + (count[k] === 0 ? " (0)" : "")).join(", ") || "–", count.join(", "), nye.join(", ") || "–", agenda.join(", ") || "–"]);
      scener.push({
        tekst: `Tar ut ${p} og markerer den som inferred. ${nedtalt.length ? `Teller ned ${liste(nedtalt.map(k => regler[k].tekst))}.` : `${p} er ikke premiss i noen regel.`}${nye.length ? ` count = 0 gir ${liste(nye)} i agendaen.` : ""}`,
        graf: graf(p, nedtalt), tabeller: tabs(nedtalt)
      });
    }
    if (!følger) scener.push({ tekst: `Agendaen er tom uten at ${q} er tatt ut: <b>return false</b>, KB ⊭ ${q}.`, graf: graf(null), tabeller: tabs([]) });
    return { scener, følger, rekkefølge: tatt };
  }

  const fig716 = ["P ⇒ Q", "L ∧ M ⇒ P", "B ∧ L ⇒ M", "A ∧ P ⇒ L", "A ∧ B ⇒ L", "A", "B"];
  const fig716pos = { Q: [0, 0], P: [0, 170], L: [-130, 340], M: [130, 340], A: [-130, 510], B: [130, 510] };
  ALGO.legg({
    id: "forward-chaining",
    navn: "Forward chaining (PL-FC-ENTAILS)",
    familie: "Logikk",
    ep: "E12",
    kort: "Forward chaining er datadrevet: den starter i faktaene og fyrer hver Horn-regel når alle premissene er kjent. count teller premissene som ennå mangler, og agendaen er køen av symboler som er vist sanne, men ikke behandlet. Grafen er AND-OR-grafen fra fig. 7.16: boksene er regler (AND), og flere regler inn i samme symbol er OR.",
    punkter: [
      "Bare for definite clauses. Sound (Modus Ponens) og complete.",
      "Lineær tid: hvert symbol behandles høyst én gang, og hver count telles ned én gang per premiss.",
      "Spørsmålet sjekkes når symbolet tas ut av agendaen.",
      "Utleder også fakta som er irrelevante for spørsmålet. Backward chaining gjør ikke det."
    ],
    data: null,
    eksempler: [
      { navn: "Figur 7.16: spørsmål Q", data: { kb: fig716, q: "Q", pos: fig716pos } },
      { navn: "Samme KB uten fakta B: Q følger ikke", data: { kb: fig716.filter(s => s !== "B"), q: "Q", pos: fig716pos } }
    ],
    kjor: data => fc(data).scener,
    svar(data) {
      const r = fc(data);
      return [{ id: "folger", navn: "KB ⊨ q? (ja/nei)", verdi: r.følger ? "ja" : "nei" }, { id: "rekkefolge", navn: "Symbolene i den rekkefølgen de tas ut av agendaen", verdi: r.rekkefølge.join(" ") }];
    }
  });

  function bc(data) {
    const kb = lesHorn(data.kb), q = data.q, snaps = [], tilst = {}, under = {}, vist = new Set();
    let nr = 0;
    // Hver hendelse endrer tilstanden til noen noder og lagrer et øyeblikksbilde; fokus er noden hendelsen gjelder.
    const hend = (tekst, endr, fokus) => {
      endr.forEach(([id, t, u]) => { vist.add(id); tilst[id] = t; if (u != null) under[id] = u; });
      snaps.push({ tekst, vist: new Set(vist), tilst: { ...tilst }, under: { ...under }, fokus });
    };
    function bevis(mål, stakk, far) {
      const node = { id: "g" + nr++, tekst: mål, barn: [], form: "sirkel" };
      far.barn.push(node);
      if (stakk.includes(mål)) {
        hend(`Mål ${mål}: ligger allerede på stakken (${stakk.join(", ")}). Løkke, så grenen droppes.`, [[node.id, "feil", "løkke"]], node.id);
        return false;
      }
      for (const c of kb.filter(r => r.konkl === mål)) {
        if (!c.prem.length) {
          hend(`Mål ${mål}: står som fakta i KB. Bevist.`, [[node.id, "utvidet", "fakta"]], node.id);
          return true;
        }
        const rn = { id: "r" + nr++, tekst: c.tekst, barn: [], form: "boks", ok: false };
        node.barn.push(rn);
        hend(`Mål ${mål}: prøver regelen ${c.tekst} (OR). Alle premissene ${liste(c.prem)} må bevises (AND).`, [[node.id, "grense"], [rn.id, "grense"]], rn.id);
        let ok = true;
        for (const p of c.prem) if (!bevis(p, stakk.concat(mål), rn)) { ok = false; break; }
        if (ok) {
          rn.ok = true;
          hend(`Alle premissene i ${c.tekst} er bevist, så ${mål} er bevist.`, [[rn.id, "utvidet"], [node.id, "utvidet"]], node.id);
          return true;
        }
        hend(`Regelen ${c.tekst} feiler for ${mål}.`, [[rn.id, "beskaret"]], rn.id);
      }
      hend(`Ingen regel for ${mål} lyktes: ${mål} kan ikke bevises her.`, [[node.id, "feil"]], node.id);
      return false;
    }
    const rot = { barn: [] }, følger = bevis(q, [], rot), topp = rot.barn[0];
    const g = ALGO.tre(topp), form = {};
    const gå = n => { form[n.id] = n.form; n.barn.forEach(gå); };
    gå(topp);
    const scener = snaps.map(s => ({
      tekst: s.tekst,
      graf: {
        retning: false,
        noder: g.noder.filter(n => s.vist.has(n.id)).map(n => ({ ...n, form: form[n.id], under: s.under[n.id] || "",
          tilstand: n.id === s.fokus && s.tilst[n.id] !== "feil" && s.tilst[n.id] !== "beskaret" ? "aktiv" : s.tilst[n.id] })),
        kanter: g.kanter.filter(e => s.vist.has(e.til))
      }
    }));
    const sti = new Set();
    const merk = n => { sti.add(n.id); if (n.form === "sirkel") { const r = n.barn.find(b => b.ok); if (r) merk(r); } else n.barn.forEach(merk); };
    if (følger) merk(topp);
    const slutt = snaps[snaps.length - 1];
    scener.push({
      tekst: følger ? `${q} er bevist: <b>KB ⊨ ${q}</b>. Det markerte AND-OR-treet er beviset.` : `Ingen regel for ${q} lyktes: backward chaining svarer <b>false</b>.`,
      graf: {
        retning: false,
        noder: g.noder.map(n => ({ ...n, form: form[n.id], under: slutt.under[n.id] || "", tilstand: sti.has(n.id) ? "sti" : ["feil", "beskaret"].includes(slutt.tilst[n.id]) ? slutt.tilst[n.id] : "ny" })),
        kanter: g.kanter.map(e => ({ ...e, tilstand: sti.has(e.fra) && sti.has(e.til) ? "sti" : "ny" }))
      }
    });
    return { scener, følger };
  }

  ALGO.legg({
    id: "backward-chaining",
    navn: "Backward chaining (AND-OR-tre)",
    familie: "Logikk",
    ep: "E12",
    kort: "Backward chaining er måldrevet: den starter i spørsmålet q og leter etter regler med q som konklusjon. Én regel som lykkes, holder (OR), men alle premissene i regelen må bevises (AND). Et mål som allerede ligger på stakken, er en løkke og droppes. Sirklene er mål, boksene regler.",
    punkter: [
      "Rører bare det som er relevant for målet, ofte mye mindre enn lineært i KB.",
      "Bokas enkle BC husker ikke tidligere resultater: samme delmål kan bevises flere ganger (L under M).",
      "Uten løkkesjekk går den i ring: A ∧ P ⇒ L når P allerede er et mål.",
      "Reglene prøves i KB-rekkefølge, og premissene fra venstre til høyre (dybde først)."
    ],
    data: null,
    eksempler: [
      { navn: "Figur 7.16: spørsmål Q", data: { kb: fig716, q: "Q" } },
      { navn: "Samme KB uten fakta B: Q kan ikke bevises", data: { kb: fig716.filter(s => s !== "B"), q: "Q" } }
    ],
    kjor: data => bc(data).scener,
    svar: data => [{ id: "folger", navn: "KB ⊨ q? (ja/nei)", verdi: bc(data).følger ? "ja" : "nei" }]
  });

  // ---------- DPLL og WalkSAT ----------
  const lesKlausuler = ks => ks.map(s => disj(lesPL(s)).map(f => (f.o === "s" ? { s: f.n, neg: false } : { s: f.a.n, neg: true })));
  const litT = l => (l.neg ? "¬" : "") + l.s;
  const verdi = (l, m) => (l.s in m ? m[l.s] !== l.neg : undefined);
  const status = (c, m) => (c.some(l => verdi(l, m) === true) ? "T" : c.every(l => verdi(l, m) === false) ? "F" : "?");
  const modellTekst = (S, m) => S.filter(s => s in m).map(s => `${s} = ${m[s]}`).join(", ") || "{}";
  function klausulGraf(S, C, m, ekstra = {}) {
    const b = c => Math.max(70, 8 * c.map(litT).join(" ∨ ").length + 30);
    const bredde = C.reduce((s, c) => s + b(c) + 30, -30), sb = (S.length - 1) * 110;
    let x = sb / 2 - bredde / 2;
    const noder = S.map((s, k) => ({ id: "s:" + s, x: k * 110, y: 0, tekst: s, under: s in m ? TF(m[s]) : "",
      tilstand: (ekstra.sym || {})[s] || (s in m ? "utvidet" : "ny") }));
    C.forEach((c, k) => {
      x += b(c) / 2;
      const st = status(c, m);
      noder.push({ id: "c" + k, x: Math.round(x), y: 200, tekst: c.map(litT).join(" ∨ "), over: "C" + (k + 1), form: "boks",
        tilstand: (ekstra.kl || {})[k] || (st === "T" ? "mal" : st === "F" ? "feil" : "ny") });
      x += b(c) / 2 + 30;
    });
    const kanter = C.flatMap((c, k) => c.map(l => ({ fra: "s:" + l.s, til: "c" + k, tekst: l.neg ? "¬" : "",
      tilstand: verdi(l, m) === true ? "sti" : verdi(l, m) === false ? "beskaret" : "ny" })));
    return { retning: false, noder, kanter };
  }

  function dpll(data) {
    const C = lesKlausuler(data.klausuler), S = [...new Set(C.flat().map(l => l.s))].sort(nat);
    const scener = [], hist = [];
    const st = m => C.map(c => status(c, m));
    const scene = (tekst, m, ekstra) => scener.push({
      tekst, graf: klausulGraf(S, C, m, ekstra),
      tabeller: [{ tittel: "DPLL", kol: ["Steg", "Regel", "Modell", "C1–C" + C.length], rader: hist.slice(), marker: hist.length ? [hist.length - 1] : [] }]
    });
    const rad = (regel, m) => hist.push([String(hist.length + 1), regel, modellTekst(S, m), st(m).join(" ")]);
    function kall(symbols, m, steg) {
      if (steg) { rad(steg.regel, m); scene(steg.tekst, m, steg.ekstra); }
      const s = st(m);
      if (s.every(x => x === "T")) { rad("alle sanne", m); scene(`Alle klausulene er sanne: <b>return true</b>. Modellen er ${modellTekst(S, m)}.`, m); return m; }
      const f = s.indexOf("F");
      if (f >= 0) { rad(`C${f + 1} usann`, m); scene(`C${f + 1} er usann (alle literalene er usanne): <b>return false</b>, gå tilbake.`, m, { kl: { [f]: "feil" } }); return null; }
      for (const P of symbols) {
        const fortegn = new Set(), hvor = [];
        C.forEach((c, k) => { if (s[k] === "?" && c.some(l => l.s === P)) { hvor.push("C" + (k + 1)); c.forEach(l => { if (l.s === P) fortegn.add(l.neg); }); } });
        if (fortegn.size === 1) {
          const v = !fortegn.has(true);
          return kall(symbols.filter(x => x !== P), { ...m, [P]: v }, {
            regel: "pure", ekstra: { sym: { [P]: "aktiv" } },
            tekst: `${P} står bare ${v ? "positivt" : "negativt"} i de åpne klausulene (${liste(hvor)}): pure symbol, <b>${P} = ${v}</b>.`
          });
        }
      }
      for (let k = 0; k < C.length; k++) {
        if (s[k] !== "?") continue;
        const åpne = C[k].filter(l => verdi(l, m) === undefined);
        if (åpne.length !== 1) continue;
        const l = åpne[0], andre = C[k].filter(x => x !== l).map(litT);
        return kall(symbols.filter(x => x !== l.s), { ...m, [l.s]: !l.neg }, {
          regel: `unit C${k + 1}`, ekstra: { sym: { [l.s]: "aktiv" }, kl: { [k]: "aktiv" } },
          tekst: `Ingen pure symboler. C${k + 1} er en unit clause${andre.length ? ` (${liste(andre)} er usann${andre.length > 1 ? "e" : ""})` : ""}, så ${litT(l)} må være sann: <b>${l.s} = ${!l.neg}</b>.`
        });
      }
      const P = symbols[0], rest = symbols.slice(1);
      return kall(rest, { ...m, [P]: true }, { regel: "gjett", ekstra: { sym: { [P]: "aktiv" } }, tekst: `Ingen pure symboler og ingen unit clause: gjetter <b>${P} = true</b> (første symbol, true før false).` })
        || kall(rest, { ...m, [P]: false }, { regel: "gjett", ekstra: { sym: { [P]: "aktiv" } }, tekst: `Grenen ${P} = true feilet: prøver <b>${P} = false</b>.` });
    }
    scene(`${data.tekst ? data.tekst + " " : ""}Start med tom modell. Symbolene tas alfabetisk (${S.join(", ")}). Hvert kall sjekker: alle sanne → én usann → pure → unit → gjett.`, {});
    const m = kall(S, {}, null);
    if (!m) scene("DPLL returnerer <b>false</b>: ingen modell gjør alle klausulene sanne, så setningen er unsatisfiable.", {});
    return { scener, sat: !!m, modell: m ? modellTekst(S, m) : "–" };
  }

  const kaniner = ["B2 ∨ B3", "¬B2 ∨ ¬B3", "B3 ∨ B4", "¬B3 ∨ ¬B4", "B4", "¬B1 ∨ ¬B4", "B1"];
  ALGO.legg({
    id: "dpll",
    navn: "DPLL",
    familie: "Logikk",
    ep: "E13",
    kort: "DPLL er backtracking for SAT. Hvert kall sjekker først om alle klausulene er sanne eller én er usann (early termination), så pure symbol, så unit clause. Bare når ingen regel gir en tvungen verdi, gjetter den. DPLL er complete og kan derfor svare både ja og nei.",
    punkter: [
      "Rekkefølgen er sann → usann → pure → unit → gjett. Unit før pure gir feil forløp, selv om modellen kan bli lik.",
      "Pure telles bare i klausuler som ikke allerede er sanne. Et symbol som bare står i sanne klausuler, er ikke pure.",
      "Unit propagation på definite clauses gjør det samme som forward chaining.",
      "Konvensjon her: symbolene alfabetisk, true før false, første unit clause i listerekkefølge.",
      "Kantene er grønne når literalen er sann og grå når den er usann."
    ],
    data: null,
    eksempler: [
      { navn: "Notatets gjennomgangseksempel", data: { klausuler: ["¬A ∨ B", "¬A ∨ ¬B", "A ∨ C", "A ∨ ¬C ∨ B"] } },
      { navn: "«Din tur»: (A ∨ B) ∧ (¬A ∨ B) ∧ (¬B ∨ C) ∧ (¬C ∨ ¬A)", data: { klausuler: ["A ∨ B", "¬A ∨ B", "¬B ∨ C", "¬C ∨ ¬A"] } },
      { navn: "Eksamen 2018 P6 som SAT: KB ∧ B1 er unsatisfiable", data: { klausuler: kaniner, tekst: "Bi: kanin i er brun. C7 = B1 er det negerte målet." } },
      { navn: "Øv selv 1: fem klausuler over A–D", data: { klausuler: ["A ∨ B", "¬A ∨ C", "¬B ∨ ¬C", "¬A ∨ ¬C ∨ D", "¬D ∨ B"] } }
    ],
    kjor: data => dpll(data).scener,
    svar(data) {
      const r = dpll(data);
      return [{ id: "resultat", navn: "DPLL returnerer (true/false)", verdi: String(r.sat) }, { id: "modell", navn: "Modellen (bare symbolene som settes)", verdi: r.sat ? r.modell : "ingen" }];
    }
  });

  function walksat(data) {
    const C = lesKlausuler(data.klausuler), S = [...new Set(C.flat().map(l => l.s))].sort(nat);
    const m = { ...data.start }, p = data.p ?? 0.5, maks = 10, trekk = data.tilfeldig.slice();
    const rnd = () => trekk.shift();
    const sanne = mm => C.filter(c => status(c, mm) === "T").length;
    const scener = [], hist = [];
    const tab = ekstra => [{ tittel: "WalkSAT", kol: ["Flip", "Usann klausul", "Steg", "Flipper", "Modell etter", "Sanne"], rader: hist.slice(), marker: hist.length ? [hist.length - 1] : [] }].concat(ekstra || []);
    scener.push({ tekst: `Startmodell ${modellTekst(S, m)}, p = ${tall(p)}, max_flips = ${maks}. ${sanne(m)} av ${C.length} klausuler er sanne.`, graf: klausulGraf(S, C, m), tabeller: tab() });
    let flip = 0;
    while (sanne(m) < C.length && flip < maks) {
      flip++;
      const falske = C.map((c, k) => k).filter(k => status(C[k], m) !== "T");
      const r1 = rnd(), k = falske[Math.floor(r1 * falske.length)], kl = C[k];
      const kandidater = [...new Set(kl.map(l => l.s))];
      const r2 = rnd(), tilfeldig = r2 < p;
      let valgt, grunn, ekstra = null;
      if (tilfeldig) {
        const r3 = rnd();
        valgt = kandidater[Math.floor(r3 * kandidater.length)];
        grunn = `${tall(r2.toFixed(2))} &lt; p: random walk, tallet ${tall(r3.toFixed(2))} velger ${valgt}`;
      } else {
        const tellinger = kandidater.map(s => sanne({ ...m, [s]: !m[s] }));
        const best = Math.max(...tellinger);
        valgt = kandidater[tellinger.indexOf(best)];
        grunn = `${tall(r2.toFixed(2))} ≥ p: grådig steg, flip ${kandidater.map((s, i) => `${s} gir ${tellinger[i]}`).join(", ")} sanne klausuler${tellinger.filter(t => t === best).length > 1 ? " (likhet → første i klausulen)" : ""}`;
        ekstra = { tittel: `Grådig steg for C${k + 1}`, kol: ["Flip", "Sanne klausuler etterpå"], rader: kandidater.map((s, i) => [s, String(tellinger[i])]), marker: [tellinger.indexOf(best)] };
      }
      scener.push({
        tekst: `Flip ${flip}: usanne klausuler ${liste(falske.map(x => "C" + (x + 1)))}. Tallet ${tall(r1.toFixed(2))} velger C${k + 1}. ${grunn}.`,
        graf: klausulGraf(S, C, m, { kl: { [k]: "aktiv" }, sym: { [valgt]: "grense" } }), tabeller: tab(ekstra)
      });
      m[valgt] = !m[valgt];
      hist.push([String(flip), "C" + (k + 1), tilfeldig ? "random walk" : "grådig", valgt, modellTekst(S, m), `${sanne(m)}/${C.length}`]);
      scener.push({ tekst: `Flipper ${valgt} til ${m[valgt]}. Nå er ${sanne(m)} av ${C.length} klausuler sanne.`, graf: klausulGraf(S, C, m, { sym: { [valgt]: "aktiv" } }), tabeller: tab() });
    }
    const ok = sanne(m) === C.length;
    scener.push({
      tekst: ok ? `Alle klausulene er sanne: WalkSAT returnerer <b>${modellTekst(S, m)}</b> etter ${flip} flip${flip === 1 ? "" : "s"}.` : `max_flips = ${maks} er brukt opp: WalkSAT returnerer <b>failure</b>. Det beviser ikke at setningen er unsatisfiable.`,
      graf: klausulGraf(S, C, m), tabeller: tab()
    });
    return { scener, modell: ok ? modellTekst(S, m) : "failure", flips: flip };
  }

  ALGO.legg({
    id: "walksat",
    navn: "WalkSAT",
    familie: "Logikk",
    ep: "E13",
    kort: "WalkSAT er lokalt søk over hele modeller. Den velger en tilfeldig usann klausul og flipper ett symbol i den: med sannsynlighet p et tilfeldig symbol (random walk), ellers symbolet som gir flest sanne klausuler. De «tilfeldige» tallene er faste her, så kjøringen kan følges.",
    punkter: [
      "Incomplete: failure kan bety at ingen modell finnes, eller at søket trengte flere flips.",
      "Kan derfor ikke bevise unsatisfiability eller entailment. Det krever DPLL eller resolution.",
      "Det grådige steget er min-conflicts. Random walk hjelper ut av lokale minima og platåer.",
      "Likhet i det grådige steget brytes her med første symbol i klausulen."
    ],
    data: null,
    eksempler: [
      { navn: "Notatets eksempel fra A = B = C = true", data: { klausuler: ["¬A ∨ B", "¬A ∨ ¬B", "A ∨ C", "A ∨ ¬C ∨ B"], start: { A: true, B: true, C: true }, p: 0.5, tilfeldig: [0.1, 0.7] } },
      { navn: "Øv selv 3: fra A = F, B = T, C = T, D = T", data: { klausuler: ["A ∨ B", "¬A ∨ C", "¬B ∨ ¬C", "¬A ∨ ¬C ∨ D", "¬D ∨ B"], start: { A: false, B: true, C: true, D: true }, p: 0.5, tilfeldig: [0.4, 0.9] } },
      { navn: "«Din tur» fra alt usant: grådig vingling og random walk", data: { klausuler: ["A ∨ B", "¬A ∨ B", "¬B ∨ C", "¬C ∨ ¬A"], start: { A: false, B: false, C: false }, p: 0.5, tilfeldig: [0.4, 0.8, 0.2, 0.3, 0.7, 0.5, 0.1, 0.9, 0.3, 0.6] } }
    ],
    kjor: data => walksat(data).scener,
    svar(data) {
      const r = walksat(data);
      return [{ id: "modell", navn: "Modellen WalkSAT returnerer (eller failure)", verdi: r.modell }, { id: "flips", navn: "Antall flips", verdi: String(r.flips) }];
    }
  });

  // ---------- Førsteordens termer og unifikasjon ----------
  function lesTerm(s) {
    const t = s.replace(/\s+/g, "");
    let i = 0;
    const term = () => {
      const m = /^[A-Za-z][A-Za-z0-9_]*/.exec(t.slice(i));
      if (!m) throw new Error(`Kan ikke lese «${s}»`);
      i += m[0].length;
      if (t[i] !== "(") return { n: m[0] };
      i++;
      const a = [term()];
      while (t[i] === ",") { i++; a.push(term()); }
      if (t[i++] !== ")") throw new Error(`Mangler ) i «${s}»`);
      return { n: m[0], a };
    };
    const r = term();
    if (i !== t.length) throw new Error(`Kan ikke lese «${s}»`);
    return r;
  }
  const erVar = t => !t.a && /^[a-z]/.test(t.n);
  const visT = t => (t.a ? `${t.n}(${t.a.map(visT).join(", ")})` : t.n);
  const likT = (x, y) => x.n === y.n && !!x.a === !!y.a && (!x.a || (x.a.length === y.a.length && x.a.every((b, k) => likT(b, y.a[k]))));
  const subst = (θ, t) => (erVar(t) ? (θ.has(t.n) ? subst(θ, θ.get(t.n)) : t) : t.a ? { n: t.n, a: t.a.map(b => subst(θ, b)) } : t);
  const forekommer = (v, x, θ) => (erVar(x) ? x.n === v.n || (θ.has(x.n) && forekommer(v, θ.get(x.n), θ)) : !!x.a && x.a.some(b => forekommer(v, b, θ)));
  const θTekst = θ => "{" + [...θ].map(([v, t]) => `${v}/${visT(t)}`).join(", ") + "}";
  const θHelt = θ => "{" + [...θ].map(([v]) => `${v}/${visT(subst(θ, { n: v }))}`).join(", ") + "}";
  const variabler = (t, s = new Set()) => { if (erVar(t)) s.add(t.n); else (t.a || []).forEach(b => variabler(b, s)); return s; };

  // UNIFY (Fig. 9.1). log samler stegene; px/py er node-id-ene i term-trærne (null for verdier hentet fra θ).
  function unify(x, y, θ, log, px = null, py = null) {
    if (!θ) return null;
    const par = `${visT(x)} ~ ${visT(y)}`;
    const L = (res, ny) => { if (log) log.push({ px, py, par, res, θ: ny }); return ny; };
    if (likT(x, y)) return L("like", θ);
    if (erVar(x)) return uVar(x, y, θ, log, px, py, par);
    if (erVar(y)) return uVar(y, x, θ, log, py, px, par);
    if (x.a && y.a) {
      if (x.n !== y.n || x.a.length !== y.a.length) return L(`${x.n} og ${y.n} er ulike symboler: failure`, null);
      L(`samme symbol ${x.n} med ${x.a.length} argument${x.a.length === 1 ? "" : "er"}, de sammenlignes parvis`, θ);
      for (let k = 0; k < x.a.length && θ; k++) θ = unify(x.a[k], y.a[k], θ, log, px && px + "." + k, py && py + "." + k);
      return θ;
    }
    return L(`${visT(x)} og ${visT(y)} kan ikke bli like: failure`, null);
  }
  function uVar(v, x, θ, log, pv, px, par) {
    const L = (res, ny) => { if (log) log.push({ px: pv, py: px, par, res, θ: ny }); return ny; };
    if (θ.has(v.n)) { L(`${v.n} er alt bundet til ${visT(θ.get(v.n))}`, θ); return unify(θ.get(v.n), x, θ, log, null, px); }
    if (erVar(x) && θ.has(x.n)) { L(`${x.n} er alt bundet til ${visT(θ.get(x.n))}`, θ); return unify(v, θ.get(x.n), θ, log, pv, null); }
    if (forekommer(v, x, θ)) return L(`occur check: ${v.n} finnes i ${visT(subst(θ, x))}, failure`, null);
    const ny = new Map(θ);
    ny.set(v.n, x);
    return L(`${v.n}/${visT(x)}`, ny);
  }

  function termTre(t, id) { return { id, tekst: t.n, barn: (t.a || []).map((b, k) => termTre(b, id + "." + k)) }; }
  function unifikasjon(data) {
    const p = lesTerm(data.p), q = lesTerm(data.q), log = [];
    const θ = unify(p, q, new Map(), log, "a", "b");
    const g1 = ALGO.tre(termTre(p, "a")), g2 = ALGO.tre(termTre(q, "b"));
    const maks1 = Math.max(...g1.noder.map(n => n.x)), min2 = Math.min(...g2.noder.map(n => n.x));
    g2.noder.forEach(n => { n.x += maks1 - min2 + 140; });
    const noder = g1.noder.concat(g2.noder).map(n => ({ ...n, form: "boks" }));
    noder.find(n => n.id === "a").over = "p";
    noder.find(n => n.id === "b").over = "q";
    const finn = (t, id) => id.split(".").slice(1).reduce((u, k) => u.a[+k], t);
    const graf = (aktive, bind, slutt) => ({
      retning: false,
      noder: noder.map(n => {
        const t = finn(n.id[0] === "a" ? p : q, n.id);
        return { ...n, under: erVar(t) && bind && bind.has(t.n) ? "= " + visT(subst(bind, t)) : "", tilstand: slutt || (aktive.includes(n.id) ? "aktiv" : "ny") };
      }),
      kanter: g1.kanter.concat(g2.kanter)
    });
    const steg = [];
    const tabs = (θn, merk) => [
      { tittel: "Steg", kol: ["#", "Par", "Resultat"], rader: steg.slice(), marker: merk ? [steg.length - 1] : [] },
      { tittel: "θ", kol: ["Variabel", "Binding", "Helt ut"], rader: θn ? [...θn].map(([v, t]) => [v, visT(t), visT(subst(θn, t))]) : [], marker: [] }
    ];
    const scener = [{ tekst: `UNIFY(p, q) med p = ${visT(p)} og q = ${visT(q)}, og θ = {} ved start.`, graf: graf([], null), tabeller: tabs(new Map(), false) }];
    let siste = new Map();
    log.forEach(h => {
      steg.push([String(steg.length + 1), h.par, h.res]);
      if (h.θ) siste = h.θ;
      scener.push({
        tekst: `${h.par}: ${h.res}.${h.θ ? ` θ = ${θTekst(h.θ)}.` : ""}`,
        graf: graf([h.px, h.py].filter(Boolean), siste),
        tabeller: tabs(siste, true)
      });
      if (!h.θ) scener[scener.length - 1].graf.noder.forEach(n => { if ([h.px, h.py].includes(n.id)) n.tilstand = "feil"; });
    });
    scener.push(θ
      ? { tekst: `Ferdig: MGU θ = <b>${θTekst(θ)}</b>, helt ut ${θHelt(θ)}. Begge blir ${visT(subst(θ, p))}.`, graf: graf([], θ, "sti"), tabeller: tabs(θ, false) }
      : { tekst: "UNIFY returnerer <b>failure</b>: det finnes ingen θ som gjør p og q like.", graf: graf([], siste, null), tabeller: tabs(siste, false) });
    return { scener, θ };
  }

  ALGO.legg({
    id: "unifikasjon",
    navn: "Unification (UNIFY med occur check)",
    familie: "Logikk",
    ep: "E15",
    kort: "UNIFY(p, q) finner den mest generelle substitusjonen θ som gjør p og q like, eller failure. Den går argument for argument fra venstre, slår opp variabler som allerede er bundet, og binder en variabel bare når den må. Variabler har liten forbokstav, konstanter, funksjoner og predikater stor, som i boka.",
    punkter: [
      "MGU binder minst mulig: Knows(John, x) og Knows(y, z) gir {y/John, x/z}, ikke {y/John, x/John, z/John}.",
      "Occur check: x kan ikke bindes til en term som inneholder x (S(x) mot S(S(x))).",
      "Standardize apart: Knows(John, x) mot Knows(x, Elizabeth) feiler, men med x17 lykkes det.",
      "θ kan skrives uten å sette inn (x/F(y, A), y/B) eller helt ut (x/F(B, A)). Fasitene bruker begge."
    ],
    data: null,
    eksempler: [
      { navn: "Eksamen 2024 Q17", data: { p: "F(x, F(u, x))", q: "F(F(y, A), F(z, F(B, z)))" } },
      { navn: "Boka: Knows(John, x) og Knows(y, Mother(y))", data: { p: "Knows(John, x)", q: "Knows(y, Mother(y))" } },
      { navn: "Boka: Knows(John, x) og Knows(x, Elizabeth) (failure)", data: { p: "Knows(John, x)", q: "Knows(x, Elizabeth)" } },
      { navn: "Boka: standardisert, Knows(x17, Elizabeth)", data: { p: "Knows(John, x)", q: "Knows(x17, Elizabeth)" } },
      { navn: "MGU: Knows(John, x) og Knows(y, z)", data: { p: "Knows(John, x)", q: "Knows(y, z)" } },
      { navn: "Eksamen 2015 Problem 6: Loves(Per, x) og Loves(y, z)", data: { p: "Loves(Per, x)", q: "Loves(y, z)" } },
      { navn: "Occur check: S(x) og S(S(x))", data: { p: "S(x)", q: "S(S(x))" } },
      { navn: "Occur check via binding: Knows(Father(y), y) og Knows(x, x)", data: { p: "Knows(Father(y), y)", q: "Knows(x, x)" } },
      { navn: "Øv selv a): Older(Father(y), y) og Older(Father(x), John)", data: { p: "Older(Father(y), y)", q: "Older(Father(x), John)" } }
    ],
    kjor: data => unifikasjon(data).scener,
    svar(data) {
      const { θ } = unifikasjon(data);
      return [{ id: "theta", navn: "θ (MGU) eller failure", verdi: θ ? θTekst(θ) : "failure" }, { id: "helt", navn: "θ satt helt inn", verdi: θ ? θHelt(θ) : "failure" }];
    }
  });

  // ---------- FOL forward chaining ----------
  // Standardizing apart: variabler i en fakta får nytt navn per premiss, så de ikke kolliderer med regelens.
  const omdøp = (t, suf) => (erVar(t) ? { n: t.n + suf } : t.a ? { n: t.n, a: t.a.map(b => omdøp(b, suf)) } : t);
  function alleθ(prem, fakta, θ = new Map(), k = 0, brukt = [], ut = []) {
    if (k === prem.length) { ut.push({ θ, brukt }); return ut; }
    fakta.forEach((f, i) => { const ny = unify(prem[k], variabler(f.a).size ? omdøp(f.a, "′" + (k + 1)) : f.a, θ, null); if (ny) alleθ(prem, fakta, ny, k + 1, brukt.concat(i), ut); });
    return ut;
  }
  // Regler som ikke fyrer, gruppert etter grunn.
  const forklar = v => {
    const g = {};
    v.forEach(([n, gr]) => (g[gr] = g[gr] || []).push(n));
    return Object.entries(g).map(([gr, ns]) => (gr === "gir bare kjente fakta" ? `${liste(ns)} gir bare kjente fakta` : `${liste(ns)} fyrer ikke (${gr})`)).join("; ");
  };
  // Kanonisk form: variablene får navn etter rekkefølge, så P(x′1) og P(x) er samme fakta (en omdøping er ikke ny).
  const kanon = t => { const m = new Map(), g = t => (erVar(t) ? { n: m.get(t.n) || (m.set(t.n, "v" + m.size), m.get(t.n)) } : t.a ? { n: t.n, a: t.a.map(g) } : t); return visT(g(t)); };
  function folFC(data) {
    const regler = data.regler.map(([navn, s]) => {
      const [v, h] = s.split("⇒");
      return { navn, prem: v.split("∧").map(x => lesTerm(x)), konkl: lesTerm(h) };
    });
    const α = data.sporsmal ? lesTerm(data.sporsmal) : null;
    const F = data.fakta.map(s => ({ a: lesTerm(s), tekst: visT(lesTerm(s)), rad: 0, fra: null, nr: "" }));
    const kjent = new Set(F.map(f => kanon(f.a)));
    // Svar på spørsmålet: faktaens variabler standardiseres apart (får ′), og θ projiseres på spørsmålets variabler.
    const svarθ = f => { const φ = α && unify(α, omdøp(f, "′"), new Map(), null); return φ && new Map([...variabler(α)].map(v => [v, subst(φ, { n: v })]).filter(([v, t]) => !(erVar(t) && t.n === v))); };
    const hend = [{ synlige: F.length, aktive: [], tekst: `${data.tekst ? data.tekst + " " : ""}Start med ${F.length} fakta. ${α ? `Spørsmål: ${visT(α)}.` : "Ingen spørsmål: kjører til fixed point."}`, rader: [] }];
    let runde = 0, svar = null, ferdig = false;
    const logg = [];
    const start = α && F.find(f => svarθ(f.a));
    if (start) { svar = svarθ(start.a); ferdig = true; hend[0].tekst += ` ${start.tekst} står alt blant faktaene: ${svar.size ? `svaret er θ = ${θTekst(svar)}` : "spørsmålet er besvart uten å bruke noen regel"}.`; }
    while (!ferdig) {
      runde++;
      const N = F.length, nye = [], rader = [], ventende = [];
      for (const r of regler) {
        const treff = alleθ(r.prem, F.slice(0, N));
        const før = F.length;
        let grunn = "", funnet = null;
        treff.forEach(({ θ, brukt }) => {
          if (svar) return;
          const q = subst(θ, r.konkl), t = visT(q);
          if (kjent.has(kanon(q))) return;
          kjent.add(kanon(q));
          F.push({ a: q, tekst: t, rad: runde, fra: brukt, θ: θHelt(θ), regel: r.navn });
          nye.push(t);
          rader.push([String(runde), r.navn, θHelt(θ), t]);
          if (α) { const φ = svarθ(q); if (φ) { svar = φ; funnet = t; } }
        });
        if (F.length === før) {
          const mangler = r.prem.find(p => !F.slice(0, N).some(f => unify(p, omdøp(f.a, "′"), new Map(), null)));
          grunn = mangler ? `${visT(mangler)} finnes ikke ennå` : treff.length ? "gir bare kjente fakta" : "ingen felles θ";
          ventende.push([r.navn, grunn]);
          continue;
        }
        const ny = F.slice(før);
        hend.push({
          synlige: F.length, aktive: ny.map((_, k) => før + k), rader: logg.concat(rader),
          tekst: `Runde ${runde}: ${ventende.length ? forklar(ventende) + ". " : ""}Regel ${r.navn} med ${ny.map(f => `θ = ${f.θ} gir <b>${f.tekst}</b>`).join(", ")}.${funnet ? ` ${funnet} unifiserer med spørsmålet${svar.size ? `: svaret er θ = ${θTekst(svar)}` : ", som dermed er bevist"}.` : ""}`
        });
        ventende.length = 0;
        if (svar) break;
      }
      if (svar) break;
      if (!nye.length) {
        hend.push({ synlige: F.length, aktive: [], rader: logg.concat(rader), tekst: `Runde ${runde}: ${ventende.length ? forklar(ventende) + ". " : ""}Ingen nye fakta: <b>fixed point</b>.${α ? ` ${visT(α)} følger ikke.` : ""}` });
        ferdig = true;
      } else if (ventende.length) {
        hend.push({ synlige: F.length, aktive: [], rader: logg.concat(rader), tekst: `Runde ${runde}: ${forklar(ventende)}. Nye fakta fra runden (${liste(nye)}) kan brukes først i neste runde.` });
      }
      logg.push(...rader);
    }
    const R = Math.max(...F.map(f => f.rad));
    // Fakta nederst og nye fakta over: plasser foreldrene først, og snu y etterpå.
    const pos = plasser(F).map(p => ({ x: p.x, y: R * 120 - p.y }));
    const scener = hend.map(h => ({
      tekst: h.tekst,
      graf: bokser(F, pos, h.synlige, i => (h.aktive.includes(i) ? (svar && svarθ(F[i].a) ? "mal" : "aktiv") : F[i].rad ? "utvidet" : "ny"), i => F[i].regel || ""),
      tabeller: [{ tittel: "Utledet", kol: ["Runde", "Regel", "θ", "Ny fakta"], rader: h.rader, marker: h.aktive.length ? [h.rader.length - 1] : [] }]
    }));
    const avledet = F.filter(f => f.rad).map(f => f.tekst);
    return { scener, svar: α ? (svar ? θTekst(svar) : "false") : "fixed point", avledet, runder: runde };
  }

  const krim = {
    fakta: ["Owns(Nono, M1)", "Missile(M1)", "American(West)", "Enemy(Nono, America)"],
    regler: [["9.3", "American(x) ∧ Weapon(y) ∧ Sells(x, y, z) ∧ Hostile(z) ⇒ Criminal(x)"], ["9.6", "Missile(x) ∧ Owns(Nono, x) ⇒ Sells(West, x, Nono)"], ["9.7", "Missile(x) ⇒ Weapon(x)"], ["9.8", "Enemy(x, America) ⇒ Hostile(x)"]],
    sporsmal: "Criminal(West)",
    tekst: "∃x Owns(Nono, x) ∧ Missile(x) er instansiert med Skolem-konstanten M1."
  };
  const kpop = [["GG→Sone", "GG(x) ⇒ Sone(x)"], ["Sone→GG", "Sone(x) ⇒ GG(x)"], ["RV→Reveluv", "RV(x) ⇒ Reveluv(x)"], ["Reveluv→RV", "Reveluv(x) ⇒ RV(x)"],
    ["BP→Blink", "BP(x) ⇒ Blink(x)"], ["Blink→BP", "Blink(x) ⇒ BP(x)"], ["Ballads", "Reveluv(x) ⇒ Ballads(x)"], ["Dance", "Blink(x) ⇒ Dance(x)"],
    ["CH", "Dance(x) ∧ Ballads(x) ⇒ CH(x)"], ["HE", "Drama(x) ∧ Ballads(x) ⇒ HE(x)"], ["DJH", "Sone(x) ∧ Electro(x) ⇒ DJH(x)"], ["SEO", "Sone(x) ∧ Drama(x) ⇒ SEO(x)"], ["TAE", "Sone(x) ∧ Ballads(x) ⇒ TAE(x)"]];
  ALGO.legg({
    id: "fol-forward-chaining",
    navn: "Forward chaining i FOL (FOL-FC-ASK)",
    familie: "Logikk",
    ep: "E15",
    kort: "FOL forward chaining bruker Generalized Modus Ponens runde for runde. Hver runde prøver alle regler mot faktaene KB kjente ved rundestart, og nye fakta legges inn først når runden er ferdig. Den stopper når spørsmålet unifiserer med en ny fakta, eller ved fixed point. Treet vokser nedenfra, som i fig. 9.4.",
    punkter: [
      "Sound og complete for definite clauses. Terminerer for Datalog (høyst p · n<sup>k</sup> fakta).",
      "Nye fakta brukes først i neste runde: 9.3 kan ikke fyre i runde 1.",
      "Samme fakta kan matche flere premisser: i 2025 Q9 følger også Jealous(Alice, Alice).",
      "Utleder også fakta som er irrelevante for målet. Incremental FC sjekker bare regler med et premiss som passer en ny fakta."
    ],
    data: null,
    eksempler: [
      { navn: "Boka 9.3: crime-KB-en, Criminal(West)", data: krim },
      { navn: "Eksamen 2023 oppgave 3.2: er noen eldre enn Snowy?", data: {
        fakta: ["Father(Fido, Snowy)", "Alive(Fido)"],
        regler: [["Father→Parent", "Father(x, y) ⇒ Parent(x, y)"], ["Parent→Father", "Parent(x, y) ⇒ Father(x, y)"], ["Older", "Parent(x, y) ∧ Alive(x) ⇒ Older(x, y)"]],
        sporsmal: "Older(w, Snowy)", tekst: "Parent(x, y) ⇔ Father(x, y) er delt i to definite clauses."
      } },
      { navn: "Eksamen 2025 Q9: Jealous, kjørt til fixed point", data: { fakta: ["Loves(Alice, Bob)", "Loves(Carrie, Bob)"], regler: [["Jealous", "Loves(x, z) ∧ Loves(y, z) ⇒ Jealous(x, y)"]] } },
      { navn: "Øving 4 oppgave 4d: anbefalinger for U2 (egen modellering)", data: { fakta: ["Sone(U2)", "Reveluv(U2)", "Blink(U2)", "Drama(U2)"], regler: kpop, tekst: "Hver ⇔ er delt i to definite clauses, som i notatet." } }
    ],
    kjor: data => folFC(data).scener,
    svar(data) {
      const r = folFC(data);
      return [{ id: "svar", navn: "Svar (θ), false eller fixed point", verdi: r.svar }, { id: "nye", navn: "Nye fakta i rekkefølge", verdi: r.avledet.join(", ") }, { id: "runder", navn: "Antall runder", verdi: String(r.runder) }];
    }
  });

  // ---------- FOL-resolusjon (parene velges som i fasiten) ----------
  const lesLit = s => { const t = s.trim(), neg = /^¬/.test(t); return { neg, a: lesTerm(neg ? t.slice(1) : t) }; };
  const visL = l => (l.neg ? "¬" : "") + visT(l.a);
  const visK = ls => ls.map(visL).join(" ∨ ") || "□";
  function folRes(data) {
    const K = data.klausuler.map(([nr, s, kilde, mål]) => ({ nr, lits: s.split("∨").map(lesLit), kilde, rad: 0, fra: null, ans: mål && data.svarvar ? data.svarvar.map(v => ({ n: v })) : null }));
    K.forEach(k => { k.tekst = visK(k.lits); });
    const idx = nr => K.findIndex(k => k.nr === String(nr));
    const rader = () => K.map(k => [k.nr, k.tekst, k.kilde]);
    const scener = [];
    const graf = (aktiv, foreldre) => {
      const pos = plasser(K);
      return bokser(K, pos, K.length, i => (i === aktiv ? (K[i].lits.length ? "aktiv" : "mal") : foreldre.includes(i) ? "grense" : K[i].fra ? "utvidet" : "ny"));
    };
    const tabs = merk => [{ tittel: "Bevis", kol: ["Nr", "Klausul", "Begrunnelse"], rader: rader(), marker: merk }]
      .concat(data.setninger && !merk.length ? [{ tittel: "Setninger", kol: ["Nr", "Setning", "Begrunnelse"], rader: data.setninger, marker: [] }] : []);
    scener.push({ tekst: `${data.tekst ? data.tekst + " " : ""}Klausulene etter CNF, med det negerte målet. Hvert steg resolverer to klausuler der to komplementære literaler unifiserer.`, graf: graf(-1, []), tabeller: tabs([]) });
    let tom = false, svar = null;
    for (const [a, b, nr, navn] of data.steg) {
      const i = idx(a), j = idx(b);
      if (i < 0 || j < 0) throw new Error(`Ukjent klausul ${a} eller ${b}`);
      const Ci = K[i], vi = new Set(), vj = new Set();
      Ci.lits.forEach(l => variabler(l.a, vi));
      K[j].lits.forEach(l => variabler(l.a, vj));
      const omd = new Map();
      if (navn) Object.entries(navn).forEach(([v, n]) => omd.set(v, { n }));
      else [...vj].filter(v => vi.has(v)).forEach(v => { let k = 1; while (vi.has(v + k) || vj.has(v + k)) k++; omd.set(v, { n: v + k }); });
      const Cj = { lits: K[j].lits.map(l => ({ neg: l.neg, a: subst(omd, l.a) })), ans: K[j].ans && K[j].ans.map(t => subst(omd, t)) };
      let funnet = null;
      for (const [ii, li] of Ci.lits.entries()) {
        for (const [jj, lj] of Cj.lits.entries()) {
          if (li.neg === lj.neg || li.a.n !== lj.a.n) continue;
          const θ = unify(li.a, lj.a, new Map(), null);
          if (θ) { funnet = { ii, jj, θ }; break; }
        }
        if (funnet) break;
      }
      if (!funnet) throw new Error(`Klausul ${a} og ${b} kan ikke resolveres`);
      const { ii, jj, θ } = funnet;
      const rå = Ci.lits.filter((_, k) => k !== ii).concat(Cj.lits.filter((_, k) => k !== jj)).map(l => ({ neg: l.neg, a: subst(θ, l.a) }));
      const lits = [];
      rå.forEach(l => { if (!lits.some(x => visL(x) === visL(l))) lits.push(l); });
      const ans = (Ci.ans || Cj.ans) && (Ci.ans || Cj.ans).map(t => subst(θ, t));
      const ny = { nr: String(nr), lits, tekst: visK(lits), rad: Math.max(K[i].rad, K[j].rad) + 1, fra: [i, j], kilde: `Resolve ${a}, ${b}, θ = ${θHelt(θ)}`, ans };
      K.push(ny);
      if (!lits.length) { tom = true; svar = ans; }
      scener.push({
        tekst: `Resolverer ${a} og ${b}${omd.size ? ` (standardiserer ${[...omd].map(([v, t]) => `${v} → ${t.n}`).join(", ")} i ${b})` : ""}: ${visL(Ci.lits[ii])} mot ${visL(Cj.lits[jj])} med θ = ${θHelt(θ)}. `
          + (lits.length ? `Resolvent ${nr}: <b>${ny.tekst}</b>.${rå.length > lits.length ? " Factoring slår sammen like literaler." : ""}` : "Resolventen er den tomme klausulen <b>□</b>."),
        graf: graf(K.length - 1, [i, j]), tabeller: tabs([K.length - 1])
      });
    }
    const svarTekst = svar ? data.svarvar.map((v, k) => `${v} = ${visT(svar[k])}`).join(", ") : "";
    scener.push({
      tekst: tom ? `□ er utledet, så KB ∧ ¬mål er unsatisfiable og <b>målet følger</b>.${svarTekst ? ` Bindingene fra det negerte målet gir svaret <b>${svarTekst}</b>.` : ""}` : "Stegene ga ikke □.",
      graf: graf(-1, []), tabeller: tabs([])
    });
    return { scener, tom, svar: svarTekst, K };
  }

  ALGO.legg({
    id: "fol-resolusjon",
    navn: "Resolution i førsteordens logikk",
    familie: "Logikk",
    ep: "E16",
    kort: "Resolution i FOL: legg til det negerte målet, gjør alt om til CNF med Skolem-konstanter og -funksjoner, og resolver par av klausuler der to komplementære literaler unifiserer. Resolventen er SUBST(θ, resten av begge klausulene). Den tomme klausulen □ betyr at målet følger. Parene velges som i fasiten; unifikasjonen og resolventene regnes ut.",
    punkter: [
      "Standardize apart: gi den ene klausulen nye variabelnavn før du unifiserer (katten, steg 3).",
      "Skolem-funksjon når ∃ står inne i ∀: blomsten i 2025 Q10 er F(x), ikke en konstant.",
      "Factoring slår sammen like literaler etter θ (katten, steg 6).",
      "Negér hele målet før du dropper ∀. Skriv par, θ og resultat for hvert steg, slik fasitene gjør.",
      "Unit preference: de fleste stegene bruker en klausul med én literal, så resolventen krymper."
    ],
    data: null,
    eksempler: [
      { navn: "Eksamen 2025 Q10: blomsten på kjøkkenbordet", data: {
        setninger: [["1", "∃x Vase(x) ∧ IsOn(x, KitchenTable)", "Assumption"], ["2", "∀x Vase(x) ⇒ [∃y Flower(y) ∧ IsIn(y, x)]", "Assumption"], ["3", "∀x,y,z IsOn(y, x) ∧ IsIn(z, y) ⇒ IsOn(z, x)", "Assumption"], ["4", "¬[∃x Flower(x) ∧ IsOn(x, KitchenTable)]", "Negated goal"]],
        klausuler: [["5", "Vase(C1)", "CNF of 1"], ["6", "IsOn(C1, KitchenTable)", "CNF of 1"], ["7", "¬Vase(x) ∨ Flower(F(x))", "CNF of 2"], ["8", "¬Vase(x) ∨ IsIn(F(x), x)", "CNF of 2"], ["9", "¬IsOn(y, x) ∨ ¬IsIn(z, y) ∨ IsOn(z, x)", "CNF of 3"], ["10", "¬Flower(x) ∨ ¬IsOn(x, KitchenTable)", "CNF of 4"]],
        steg: [["5", "7", "11"], ["5", "8", "12"], ["6", "9", "13"], ["10", "13", "14"], ["12", "14", "15"], ["11", "15", "16"]]
      } },
      { navn: "Boka fig. 9.11: drepte Curiosity katten?", data: {
        setninger: [["A", "∀x [∀y Animal(y) ⇒ Loves(x, y)] ⇒ [∃y Loves(y, x)]", "KB"], ["B", "∀x [∃z Animal(z) ∧ Kills(x, z)] ⇒ [∀y ¬Loves(y, x)]", "KB"], ["C", "∀x Animal(x) ⇒ Loves(Jack, x)", "KB"], ["D", "Kills(Jack, Tuna) ∨ Kills(Curiosity, Tuna)", "KB"], ["E", "Cat(Tuna)", "KB"], ["F", "∀x Cat(x) ⇒ Animal(x)", "bakgrunnskunnskap"], ["¬G", "¬Kills(Curiosity, Tuna)", "negert mål"]],
        klausuler: [["A1", "Animal(F(x)) ∨ Loves(G(x), x)", "CNF av A"], ["A2", "¬Loves(x, F(x)) ∨ Loves(G(x), x)", "CNF av A"], ["B", "¬Loves(y, x) ∨ ¬Animal(z) ∨ ¬Kills(x, z)", "CNF av B"], ["C", "¬Animal(x) ∨ Loves(Jack, x)", "CNF av C"], ["D", "Kills(Jack, Tuna) ∨ Kills(Curiosity, Tuna)", "D"], ["E", "Cat(Tuna)", "E"], ["F", "¬Cat(x) ∨ Animal(x)", "CNF av F"], ["¬G", "¬Kills(Curiosity, Tuna)", "negert mål"]],
        steg: [["F", "E", "1"], ["D", "¬G", "2"], ["A2", "C", "3", { x: "u" }], ["B", "1", "4"], ["4", "2", "5"], ["A1", "3", "6"], ["5", "6", "7"]]
      } },
      { navn: "L13: hestehodet", data: {
        setninger: [["1", "∀x Horse(x) ⇒ Animal(x)", "Assumption"], ["2", "¬(∀x [∃y HeadOf(x, y) ∧ Horse(y)] ⇒ [∃z HeadOf(x, z) ∧ Animal(z)])", "Negated goal"]],
        klausuler: [["3", "¬Horse(x) ∨ Animal(x)", "CNF of 1"], ["4", "HeadOf(C1, C2)", "CNF of 2"], ["5", "Horse(C2)", "CNF of 2"], ["6", "¬HeadOf(C1, z) ∨ ¬Animal(z)", "CNF of 2"]],
        steg: [["3", "5", "7"], ["6", "7", "8"], ["4", "8", "9"]]
      } },
      { navn: "Eksamen 2023 oppgave 3.2: hvem er eldre enn Snowy?", data: {
        klausuler: [["1", "Father(Fido, Snowy)", "Assumption"], ["2", "Alive(Fido)", "Assumption"], ["3a", "¬Parent(x, y) ∨ Father(x, y)", "CNF av ⇔"], ["3b", "¬Father(x, y) ∨ Parent(x, y)", "CNF av ⇔"], ["4", "¬Parent(x, y) ∨ ¬Alive(x) ∨ Older(x, y)", "CNF"], ["5", "¬Older(w, Snowy)", "Negated goal", true]],
        svarvar: ["w"], steg: [["5", "4", "6"], ["6", "2", "7"], ["7", "3b", "8"], ["8", "1", "9"]],
        tekst: "Spørsmålet ∃w Older(w, Snowy) er negert til ¬Older(w, Snowy)."
      } },
      { navn: "Eksamen 2021 oppgave 1.5: ¬Father(Sophie, Edgar)", data: {
        klausuler: [["1", "¬Father(x, y) ∨ ¬Woman(x)", "CNF av ∀x,y Father(x, y) ⇒ ¬Woman(x)"], ["2", "¬Mother(a, b) ∨ Woman(a)", "CNF av ∀x,y Mother(x, y) ⇒ Woman(x), standardisert"], ["3", "Mother(Sophie, April)", "Assumption"], ["4", "Father(Sophie, Edgar)", "Negated goal"]],
        steg: [["1", "2", "5"], ["5", "3", "6"], ["6", "4", "7"]]
      } },
      { navn: "Eksamen 2022 oppgave 6: ∀x ¬R(x) ⇒ ¬P(x)", data: {
        klausuler: [["1", "¬P(x) ∨ Q(x)", "CNF av ∀x P(x) ⇒ Q(x)"], ["2", "R(x) ∨ ¬Q(x)", "CNF av ∀x ¬R(x) ⇒ ¬Q(x)"], ["3", "¬R(C1)", "Negated goal (Skolem C1)"], ["4", "P(C1)", "Negated goal (Skolem C1)"]],
        steg: [["3", "2", "5"], ["5", "1", "6"], ["6", "4", "7"]],
        tekst: "Målet negeres før ∀ droppes: ¬∀x (R(x) ∨ ¬P(x)) gir ¬R(C1) og P(C1)."
      } }
    ],
    kjor: data => folRes(data).scener,
    svar(data) {
      const r = folRes(data);
      return [{ id: "folger", navn: "Følger målet? (ja/nei)", verdi: r.tom ? "ja" : "nei" }].concat(r.svar ? [{ id: "svar", navn: "Svar fra bindingene", verdi: r.svar }] : []);
    }
  });
})();
