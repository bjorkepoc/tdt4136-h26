// CSP (E06–E07): AC-3, backtracking search (MRV, degree, LCV, forward checking, MAC) og min-conflicts. Se KONTRAKT.md.
(() => {
  const ALGO = window.ALGO;
  const nat = (a, b) => String(a).localeCompare(String(b), "nb", { numeric: true });
  const mengde = v => "{" + v.join(", ") + "}";
  const hent = (valg, id, std) => (valg && valg[id] != null ? valg[id] : std);
  const liste = a => a.length < 2 ? a.join("") : a.slice(0, -1).join(", ") + " og " + a[a.length - 1];

  // Relasjonen på en kant leses som «fra REL til». Uten rel er kanten en ≠-constraint (kartfarging).
  const REL = {
    "≠": [(a, b) => a !== b, (f, t) => `${f} ≠ ${t}`],
    "=": [(a, b) => a === b, (f, t) => `${f} = ${t}`],
    "<": [(a, b) => +a < +b, (f, t) => `${f} < ${t}`],
    ">": [(a, b) => +a > +b, (f, t) => `${f} > ${t}`],
    "≤": [(a, b) => +a <= +b, (f, t) => `${f} ≤ ${t}`],
    "≥": [(a, b) => +a >= +b, (f, t) => `${f} ≥ ${t}`],
    "2x": [(a, b) => +b === 2 * +a, (f, t) => `${t} = 2${f}`],
    "dag<": [(a, b) => +a.slice(-1) < +b.slice(-1), (f, t) => `dag(${f}) < dag(${t})`]
  };
  function rel(r) {
    if (REL[r]) return REL[r];
    let m = /^dronning:(\d+)$/.exec(r || "");
    if (m) return [(a, b) => a !== b && Math.abs(a - b) !== +m[1], (f, t) => `${f}, ${t} slår ikke`];
    m = /^(\d+)=(\d+)$/.exec(r || "");
    if (m) return [(a, b) => a[m[1] - 1] === b[m[2] - 1], (f, t) => `${f}[${m[1]}] = ${t}[${m[2]}]`];
    return REL["≠"];
  }

  // Oppslag på variabelnavn uten arvede egenskaper, så en node kan hete «constructor» eller «__proto__».
  const tomt = (o = {}) => Object.assign(Object.create(null), o);

  // Graf fra tegneverktøyet → CSP. Variablene sorteres «alfabetisk» med tall i naturlig rekkefølge (V2 før V10).
  function lagCSP(data) {
    const noder = (data && data.noder) || [], pos = tomt(), dom = tomt(), test = tomt(), nb = tomt(), kanter = [];
    noder.forEach(n => { const id = String(n.id); pos[id] = n; dom[id] = (n.domene || []).map(String); test[id] = tomt(); });
    const vars = Object.keys(dom).sort(nat);
    ((data && data.kanter) || []).forEach(k => {
      const f = String(k.fra), t = String(k.til);
      if (f === t || !(f in dom) || !(t in dom)) return;
      const [fn, txt] = rel(k.rel);
      (test[f][t] = test[f][t] || []).push((x, y) => fn(x, y));
      (test[t][f] = test[t][f] || []).push((y, x) => fn(x, y));
      kanter.push({ fra: f, til: t, tekst: k.rel && k.rel !== "≠" ? txt(f, t) : "" });
    });
    vars.forEach(v => { nb[v] = Object.keys(test[v]).sort(nat); });
    const ok = (X, x, Y, y) => (test[X][Y] || []).every(fn => fn(x, y));
    return { vars, pos, dom, nb, ok, kanter };
  }

  function tegn(c, under, nt = {}, kt = {}) {
    nt = tomt(nt); kt = tomt(kt);
    return {
      retning: false,
      noder: c.vars.map(v => ({ id: v, x: +c.pos[v].x || 0, y: +c.pos[v].y || 0, tekst: v, under: under[v], tilstand: nt[v] || "ny" })),
      kanter: c.kanter.map(k => {
        const s = kt[k.fra + "|" + k.til] || kt[k.til + "|" + k.fra];
        return { fra: k.fra, til: k.til, tekst: s ? s.tekst : k.tekst, tilstand: s ? s.tilstand : "ny" };
      })
    };
  }

  // ---------- AC-3 ----------
  function ac3(data, valg) {
    const c = lagCSP(data), D = tomt(), scener = [], rader = [];
    c.vars.forEach(v => { D[v] = c.dom[v].slice(); });
    const kø = [];
    c.vars.forEach(i => c.nb[i].forEach(j => kø.push([i, j])));
    const iKø = new Set(kø.map(b => b.join("|")));
    const bue = ([i, j]) => `${i}→${j}`;
    const under = () => Object.fromEntries(c.vars.map(v => [v, mengde(D[v])]));
    const scene = (tekst, nt, kt, m) => scener.push({
      tekst, graf: tegn(c, under(), nt, kt),
      tabeller: [
        { tittel: "AC-3-tabell", kol: ["#", "Kø før pop", "Bue", "Stryk", "D etter", "Legg til"], rader: rader.slice(), marker: rader.length ? [rader.length - 1] : [] },
        { tittel: "Domener", kol: ["Variabel", "Domene"], rader: c.vars.map(v => [v, mengde(D[v])]), marker: m }
      ]
    });
    const fasit21 = !!hent(valg, "fasit2021", false);
    scene(c.vars.length
      ? `Startkøen har alle ${kø.length} buer, sortert. Hver binær constraint gir to buer, én i hver retning.${fasit21 ? " Variant: legger også tilbake X<sub>j</sub>→X<sub>i</sub>, som 2021-kontfasiten." : ""}`
      : "Grafen er tom: køen er tom, og AC-3 svarer true.", {}, {}, []);
    let svar = true;
    const tom = c.vars.find(v => !D[v].length);
    if (tom) { svar = false; kø.length = 0; scene(`D(${tom}) er tom fra start: AC-3 svarer <b>false</b> uten å ta ut noen bue.`, { [tom]: "feil" }, {}, [c.vars.indexOf(tom)]); }
    while (kø.length) {
      const før = kø.map(bue).join(" · ");
      const [i, j] = kø.shift();
      iKø.delete(i + "|" + j);
      const stryk = D[i].filter(x => !D[j].some(y => c.ok(i, x, j, y)));
      D[i] = D[i].filter(x => !stryk.includes(x));
      const lagt = [], fantes = [];
      if (stryk.length && D[i].length) {
        for (const k of c.nb[i]) {
          if (k === j && !fasit21) continue;
          if (iKø.has(k + "|" + i)) fantes.push(bue([k, i]));
          else { kø.push([k, i]); iKø.add(k + "|" + i); lagt.push(bue([k, i])); }
        }
      }
      rader.push([String(rader.length + 1), før, bue([i, j]), stryk.join(", ") || "–", `D(${i}) = ${mengde(D[i])}`, lagt.join(" · ") || "–"]);
      const nt = { [i]: D[i].length ? "aktiv" : "feil", [j]: "grense" };
      const kt = { [i + "|" + j]: { tilstand: D[i].length ? "aktiv" : "feil", tekst: bue([i, j]) } };
      const m = [c.vars.indexOf(i)];
      let t = `Tar ut ${bue([i, j])}. `;
      if (!stryk.length) t += `Hver verdi i D(${i}) har en partner i D(${j}), så ingenting strykes.`;
      else if (!D[i].length) {
        t += `${liste(stryk)} mangler partner i D(${j}). D(${i}) er tom: AC-3 svarer <b>false</b>, og det finnes ingen løsning.`;
        svar = false; scene(t, nt, kt, m); break;
      } else {
        t += `${liste(stryk)} har ingen partner i D(${j}) og strykes, så D(${i}) = ${mengde(D[i])}. `;
        if (lagt.length) t += `Legger ${liste(lagt)} bakerst i køen${fantes.length ? ` (${liste(fantes)} står der alt)` : ""}.`;
        else if (fantes.length) t += `${liste(fantes)} står alt i køen, så ingenting legges til.`;
        else t += "Ingen andre naboer å sjekke på nytt.";
      }
      scene(t, nt, kt, m);
    }
    if (svar && c.vars.length) {
      const løst = c.vars.every(v => D[v].length === 1);
      const nt = Object.fromEntries(c.vars.map(v => [v, D[v].length === 1 ? "sti" : D[v].length ? "ny" : "feil"]));
      scene(`Køen er tom etter ${rader.length} rader: AC-3 svarer <b>true</b>. ${løst ? "Alle domener har én verdi, så problemet er løst uten søk." : "Arc-consistent betyr ikke at en løsning finnes, og det kan finnes flere: søket må velge."}`, nt, {}, []);
    }
    return { scener, D, svar, rader: rader.length, vars: c.vars };
  }

  const kart = (dom, gitt = {}) => ({
    retning: false,
    noder: [["WA", 0, 150], ["NT", 130, 40], ["SA", 170, 190], ["Q", 300, 70], ["NSW", 320, 220], ["V", 250, 320], ["T", 290, 430]]
      .map(([id, x, y]) => ({ id, x, y, domene: gitt[id] || dom })),
    kanter: [["WA", "NT"], ["WA", "SA"], ["NT", "SA"], ["NT", "Q"], ["SA", "Q"], ["SA", "NSW"], ["SA", "V"], ["Q", "NSW"], ["NSW", "V"]].map(([fra, til]) => ({ fra, til }))
  });
  const rekke = (ids, doms, rels) => ({
    retning: false,
    noder: ids.map((id, k) => ({ id, x: k * 130, y: 0, domene: doms[k] })),
    kanter: rels.map(([fra, til, r]) => ({ fra, til, rel: r }))
  });
  function femkant(d) {
    const p = [[100, 0], [210, 80], [0, 80], [40, 210], [170, 210]];
    const kanter = [];
    for (let a = 1; a <= 5; a++) for (let b = a + 1; b <= 5; b++)
      kanter.push({ fra: "L" + a, til: "L" + b, rel: (a === 1 && b === 2) || (a === 3 && b === 5) ? "dag<" : "≠" });
    return { retning: false, noder: d.map((dom, k) => ({ id: "L" + (k + 1), x: p[k][0], y: p[k][1], domene: dom })), kanter };
  }
  const ord5 = ["astar", "happy", "hello", "hoses"], ord4 = ["live", "load", "loom", "peal", "peel", "save", "talk", "anon", "nerd", "tine"];

  ALGO.legg({
    id: "ac-3",
    navn: "AC-3 (arc consistency)",
    familie: "CSP",
    ep: "E06",
    kort: "AC-3 gjør en binær CSP arc-consistent. Den tar ut én bue (X<sub>i</sub>, X<sub>j</sub>) om gangen og stryker verdiene i D(X<sub>i</sub>) som ikke har noen partner i D(X<sub>j</sub>). Krymper D(X<sub>i</sub>), legges buene (X<sub>k</sub>, X<sub>i</sub>) fra de andre naboene bakerst i køen. Blir et domene tomt, svarer AC-3 false.",
    punkter: [
      "Buen (X, Y) rydder bare i D(X). Hver binær constraint gir to buer.",
      "Legg tilbake (X<sub>k</sub>, X<sub>i</sub>) for alle naboer unntatt X<sub>j</sub>, og bare hvis buen ikke står i køen. 2021-kontfasiten legger også tilbake (X<sub>j</sub>, X<sub>i</sub>): samme domener, flere rader.",
      "True betyr arc-consistent, ikke løsbar: Australia med to farger stryker ingenting, men har ingen løsning.",
      "Tomt domene: stopp med en gang og svar false.",
      "Tid O(cd³): en bue kan komme tilbake d ganger, og REVISE sjekker d² par."
    ],
    data: "graf",
    valg: [{ id: "fasit2021", navn: "Legg også tilbake Xj→Xi (2021-kontfasiten)", type: "bool", std: false }],
    eksempler: [
      { navn: "A < B < C (notatets håndsporing)", data: rekke(["A", "B", "C"], [["1", "2", "3"], ["1", "2", "3"], ["1", "2", "3"]], [["A", "B", "<"], ["B", "C", "<"]]) },
      { navn: "«Din tur»: D(C) = {1, 2} gir tomt domene", data: rekke(["A", "B", "C"], [["1", "2", "3"], ["1", "2", "3"], ["1", "2"]], [["A", "B", "<"], ["B", "C", "<"]]) },
      { navn: "Kont 2021 (2020ResitQ) problem 3: kryssordet", data: {
        retning: false,
        noder: [{ id: "V1", x: 0, y: 0, domene: ord5 }, { id: "V2", x: 260, y: 0, domene: ord4 }, { id: "V3", x: 0, y: 200, domene: ["ant", "oak", "old", "ten", "run"] }, { id: "V4", x: 260, y: 200, domene: ord4 }],
        kanter: [{ fra: "V1", til: "V2", rel: "3=1" }, { fra: "V1", til: "V3", rel: "5=1" }, { fra: "V4", til: "V2", rel: "2=3" }, { fra: "V4", til: "V3", rel: "4=3" }]
      } },
      { navn: "Eksamen 2018 problem 1 / 2023 oppgave 4: forelesere og dager", data: femkant([["A1", "A2", "B1", "B2"], ["A1", "A2", "B1", "B2", "C1", "C2"], ["A1", "A2"], ["C1", "C2"], ["B1", "B2", "C1", "C2"]]) },
      { navn: "Eksamen 2015: X ≥ Y og Y > Z", data: rekke(["X", "Y", "Z"], [["1", "2", "3"], ["1", "2", "3"], ["1", "2", "3"]], [["X", "Y", "≥"], ["Y", "Z", ">"]]) },
      { navn: "Eksamen 2015, del 2: samme med Z = 2", data: rekke(["X", "Y", "Z"], [["1", "2", "3"], ["1", "2", "3"], ["2"]], [["X", "Y", "≥"], ["Y", "Z", ">"]]) },
      { navn: "Øv selv: Y = 2X og Z > Y", data: rekke(["X", "Y", "Z"], [["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"]], [["X", "Y", "2x"], ["Y", "Z", "<"]]) },
      { navn: "Australia med WA = R og SA = B gitt", data: kart(["B", "G", "R"], { WA: ["R"], SA: ["B"] }) },
      { navn: "Australia med to farger: arc-consistent, men uløselig", data: kart(["B", "R"]) }
    ],
    kjor: (data, valg) => ac3(data, valg).scener,
    svar(data, valg) {
      const r = ac3(data, valg);
      return [{ id: "resultat", navn: "AC-3 svarer (true/false)", verdi: String(r.svar) }]
        .concat(r.vars.map(v => ({ id: "d-" + v, navn: `D(${v}) etter AC-3`, verdi: mengde(r.D[v]) })))
        .concat([{ id: "rader", navn: "Antall buer tatt ut av køen", verdi: String(r.rader) }]);
    }
  });

  // ---------- Backtracking ----------
  function backtracking(data, valg) {
    const c = lagCSP(data);
    const mrv = !!hent(valg, "mrv", true), deg = !!hent(valg, "degree", true), lcv = !!hent(valg, "lcv", true);
    const inf = String(hent(valg, "inferens", "forward checking")), infN = inf === "MAC" ? "MAC" : "Forward checking";
    const høy = String(hent(valg, "likhet", "først")).startsWith("sist");
    const orden = (a, b) => (høy ? nat(b, a) : nat(a, b));
    const D = tomt(), A = tomt(), scener = [], hist = [], rekkefølge = [];
    c.vars.forEach(v => { D[v] = c.dom[v].slice(); });
    const lovlige = X => D[X].filter(x => c.nb[X].every(Y => !(Y in A) || c.ok(X, x, Y, A[Y])));
    const utilordnet = () => c.vars.filter(v => !(v in A));
    const grad = X => c.nb[X].filter(Y => !(Y in A)).length;
    const MAKS = 300;
    let stopp = false, tilbake = 0, angret = "";

    const domTekst = v => (v in A ? "= " + A[v] : lovlige(v).join(" ") || "∅");
    const scene = (tekst, nt = {}, ekstra = null) => {
      const tilstand = tomt();
      nt = tomt(nt);
      c.vars.forEach(v => { tilstand[v] = nt[v] || (v in A ? "utvidet" : lovlige(v).length ? "ny" : "feil"); });
      const tabeller = [{ tittel: "Steg", kol: ["#", "Handling", "Fjernet"].concat(c.vars), rader: hist.slice(), marker: hist.length ? [hist.length - 1] : [] }];
      if (ekstra) tabeller.push(ekstra);
      scener.push({ tekst, graf: tegn(c, Object.fromEntries(c.vars.map(v => [v, v in A ? "= " + A[v] : mengde(lovlige(v))])), tilstand), tabeller });
    };
    const rad = (handling, fjernet) => hist.push([String(hist.length + 1), handling, fjernet].concat(c.vars.map(domTekst)));

    function velgVar() {
      let kand = utilordnet().sort(orden);
      const deler = [];
      if (mrv) {
        const m = Math.min(...kand.map(X => lovlige(X).length));
        kand = kand.filter(X => lovlige(X).length === m);
        deler.push(`MRV: ${liste(kand)} (${m} ${m === 1 ? "verdi" : "verdier"})`);
      }
      if (deg && kand.length > 1) {
        const g = Math.max(...kand.map(grad));
        deler.push(`degree: ${kand.map(X => X + " " + grad(X)).join(", ")}`);
        kand = kand.filter(X => grad(X) === g);
      }
      if (kand.length > 1) deler.push(`likhet → ${kand[0]} (${høy ? "høyeste" : "alfabetisk"})`);
      if (!mrv && !deg) deler.push(`fast rekkefølge → ${kand[0]}`);
      return { X: kand[0], info: deler.join("; ") };
    }

    function verdier(X) {
      if (!lcv) return { vs: D[X].slice().sort(orden), info: "" };
      const vs = lovlige(X).sort(orden);
      const tall = tomt();
      vs.forEach(v => { tall[v] = c.nb[X].filter(Y => !(Y in A)).reduce((s, Y) => s + lovlige(Y).filter(y => !c.ok(X, v, Y, y)).length, 0); });
      vs.sort((a, b) => tall[a] - tall[b]);
      return { vs, info: "LCV: " + vs.map(v => `${v} ${tall[v]}`).join(", ") };
    }

    function fc(X) {
      const rader = [];
      for (const Y of c.nb[X]) {
        if (Y in A) continue;
        const bort = D[Y].filter(y => !c.ok(Y, y, X, A[X]));
        D[Y] = D[Y].filter(y => !bort.includes(y));
        rader.push([`(${Y}, ${X})`, bort.join(", ") || "–", mengde(D[Y])]);
        if (!D[Y].length) return { ok: false, rader, tom: Y };
      }
      return { ok: true, rader };
    }

    function mac(X) {
      const kø = c.nb[X].filter(Y => !(Y in A)).map(Y => [Y, X]);
      const iKø = new Set(kø.map(b => b.join("|"))), rader = [];
      while (kø.length) {
        const [i, j] = kø.shift();
        iKø.delete(i + "|" + j);
        const dj = j in A ? [A[j]] : D[j];
        const bort = D[i].filter(x => !dj.some(y => c.ok(i, x, j, y)));
        D[i] = D[i].filter(x => !bort.includes(x));
        const lagt = [];
        if (bort.length && D[i].length) {
          for (const k of c.nb[i]) if (k !== j && !(k in A) && !iKø.has(k + "|" + i)) { kø.push([k, i]); iKø.add(k + "|" + i); lagt.push(`(${k}, ${i})`); }
        }
        rader.push([`(${i}, ${j})`, bort.join(", ") || "–", bort.length ? mengde(D[i]) : "uendret", lagt.join(", ") || "–"]);
        if (!D[i].length) return { ok: false, rader, tom: i, rest: kø.length };
      }
      return { ok: true, rader };
    }

    function søk() {
      if (stopp) return false;
      if (!utilordnet().length) return true;
      const { X, info } = velgVar();
      const { vs, info: lcvInfo } = verdier(X);
      let forkastet = [], først = true;
      for (const v of vs) {
        if (scener.length > MAKS) { stopp = true; return false; }
        if (!lcv && !lovlige(X).includes(v)) { forkastet.push(v); continue; }
        const lagret = ALGO.kopi(D), før = tomt();
        c.vars.forEach(Y => { før[Y] = lovlige(Y).length; });
        A[X] = v;
        rekkefølge.push(`${X} = ${v}`);
        const r = inf === "MAC" ? mac(X) : inf === "ingen" ? { ok: true, rader: [] } : fc(X);
        let t = angret;
        angret = "";
        if (først) t += `Velger ${X} (${info}). ${lcvInfo ? lcvInfo + ". " : ""}`;
        først = false;
        if (forkastet.length) t += `${liste(forkastet.map(f => X + " = " + f))} bryter en constraint mot tilordningen. `;
        forkastet = [];
        t += `Prøver <b>${X} = ${v}</b>. `;
        const fjern = tomt();
        c.vars.forEach(Y => { if (Y !== X && !(Y in A) && lovlige(Y).length < før[Y]) fjern[Y] = før[Y] - lovlige(Y).length; });
        const endret = Object.keys(fjern);
        if (inf === "ingen") t += "Ingen inferens: domenene krymper ikke, men naboene har færre lovlige verdier.";
        else if (r.ok) t += endret.length ? `${infN} krymper ${liste(endret)}.` : `${infN} fjerner ingenting.`;
        else t += `${infN} tømmer D(${r.tom})${r.rest ? ` (${r.rest} buer i køen blir aldri behandlet)` : ""}: angrer ${X} = ${v}.`;
        rad(`${X} = ${v}${r.ok ? "" : " ✗"}`, endret.map(Y => `${Y} −${fjern[Y]}`).join(", ") || "–");
        const nt = { [X]: r.ok ? "aktiv" : "feil" };
        endret.forEach(Y => { nt[Y] = "grense"; });
        if (!r.ok) nt[r.tom] = "feil";
        const ekstra = r.rader.length ? { tittel: `${infN} etter ${X} = ${v}`, kol: ["Bue", "Fjerner", "Nytt domene"].concat(inf === "MAC" ? ["Nye buer i køen"] : []), rader: r.rader, marker: r.ok ? [] : [r.rader.length - 1] } : null;
        scene(t, nt, ekstra);
        if (r.ok && søk()) return true;
        if (stopp) return false;
        delete A[X];
        Object.assign(D, lagret);
        tilbake++;
        if (r.ok) angret = `Angrer ${X} = ${v}. `;
      }
      let t = angret;
      if (først) t += `Velger ${X} (${info}). `;
      if (forkastet.length) t += `${liste(forkastet.map(f => X + " = " + f))} bryter en constraint. `;
      t += vs.length ? `${X} har ingen verdier igjen: <b>failure</b>, tilbake ett nivå.` : `${X} har ingen lovlige verdier (${info}): <b>failure</b>, tilbake ett nivå.`;
      angret = "";
      rad(`${X}: failure`, "–");
      scene(t, { [X]: "feil" });
      return false;
    }

    const navnInf = inf === "ingen" ? "ingen inferens" : inf;
    scene(`Start. Variabel: ${mrv ? "MRV" : "fast rekkefølge"}${deg ? " og degree" : ""}; verdi: ${lcv ? "LCV" : "domenets rekkefølge"}; ${navnInf}; likhet: ${høy ? "høyeste først" : "alfabetisk/lavest først"}.${inf === "ingen" ? " Uten inferens krymper ikke domenene: tabellen viser lovlige verdier mot tilordningen." : ""}`);
    const løst = søk();
    const løsning = løst ? c.vars.map(v => `${v} = ${A[v]}`).join(", ") : stopp ? "avbrutt" : "failure";
    if (stopp) scene(`Stopper etter ${MAKS} steg. Søket er ikke ferdig, så det er ikke vist om en løsning finnes.`);
    else if (løst) scene(c.vars.length ? `Alle variabler har en verdi: <b>${løsning}</b>. ${rekkefølge.length} tilordninger og ${tilbake} angret.` : "Ingen variabler: den tomme tilordningen er en løsning.",
      Object.fromEntries(c.vars.map(v => [v, "sti"])));
    else scene(`Alle verdier er prøvd på øverste nivå: søket returnerer <b>failure</b>, så CSP-en har ingen løsning.`);
    return { scener, rekkefølge, løsning };
  }

  const ordnet = () => {
    const ids = ["x1", "x2", "x3", "x4"], p = [[0, 0], [140, 0], [140, 140], [0, 140]], kanter = [];
    for (let a = 0; a < 4; a++) for (let b = a + 1; b < 4; b++) kanter.push({ fra: ids[a], til: ids[b], rel: "<" });
    return { retning: false, noder: ids.map((id, k) => ({ id, x: p[k][0], y: p[k][1], domene: k === 3 ? ["1", "3", "5"] : ["1", "2", "3", "4", "5"] })), kanter };
  };
  const fireDronninger = () => {
    const p = [[0, 0], [150, 0], [0, 150], [150, 150]], kanter = [];
    for (let a = 1; a <= 4; a++) for (let b = a + 1; b <= 4; b++) kanter.push({ fra: "Q" + a, til: "Q" + b, rel: "dronning:" + (b - a) });
    return { retning: false, noder: p.map(([x, y], k) => ({ id: "Q" + (k + 1), x, y, domene: ["1", "2", "3", "4"] })), kanter };
  };

  ALGO.legg({
    id: "backtracking",
    navn: "Backtracking search (MRV, degree, LCV, FC, MAC)",
    familie: "CSP",
    ep: "E07",
    kort: "Backtracking search er dybde-først-søk med én variabel per nivå. Den velger en variabel, prøver verdiene én etter én og går tilbake når en verdi bryter en constraint eller inferensen tømmer et domene. MRV og degree bestemmer variabelen, LCV verdien, og forward checking eller MAC hvor langt den ser fram.",
    punkter: [
      "MRV (fail-first) tar variabelen med færrest lovlige verdier. Degree bryter likhet og teller bare constraints mot <i>utilordnede</i> variabler.",
      "LCV (fail-last) prøver først verdien som fjerner færrest verdier hos utilordnede naboer. Fasitene 2022–2023 kaller den «min-conflicts».",
      "Uten forward checking krymper ikke domenene: tell lovlige verdier mot tilordningen før du bruker MRV og LCV.",
      "Forward checking reviderer bare buene inn mot variabelen du satte. MAC fortsetter med nye buer og finner blindveier tidligere.",
      "Følg tie-break-regelen i oppgaven: alfabetisk/numerisk (2018, 2023) eller høyeste verdi og indeks (2022)."
    ],
    data: "graf",
    valg: [
      { id: "mrv", navn: "MRV", type: "bool", std: true },
      { id: "degree", navn: "Degree heuristic", type: "bool", std: true },
      { id: "lcv", navn: "LCV", type: "bool", std: true },
      { id: "inferens", navn: "Inferens", type: ["ingen", "forward checking", "MAC"], std: "forward checking" },
      { id: "likhet", navn: "Likhet brytes", type: ["først (alfabetisk/lavest)", "sist (høyest)"], std: "først (alfabetisk/lavest)" }
    ],
    eksempler: [
      { navn: "Australia: MRV, degree, LCV og forward checking (notatets sporing)", data: kart(["B", "G", "R"]) },
      { navn: "Eksamen 2018 problem 1 / 2023 oppgave 4: MRV og LCV uten FC", data: femkant([["B1"], ["A2", "B2", "C2"], ["A1"], ["C1", "C2"], ["B2", "C2"]]), valg: { degree: false, inferens: "ingen" } },
      { navn: "Eksamen 2022 oppgave 4.2: firesifret oddetall (likhet → høyest)", data: ordnet(), valg: { degree: false, likhet: "sist (høyest)" } },
      { navn: "Øv selv: Australia med WA = R og Q = G gitt (forward checking)", data: kart(["B", "G", "R"], { WA: ["R"], Q: ["G"] }) },
      { navn: "Samme kart med MAC", data: kart(["B", "G", "R"], { WA: ["R"], Q: ["G"] }), valg: { inferens: "MAC" } },
      { navn: "4 dronninger: ren backtracking uten heuristikker", data: fireDronninger(), valg: { mrv: false, degree: false, lcv: false, inferens: "ingen" } }
    ],
    kjor: (data, valg) => backtracking(data, valg).scener,
    svar(data, valg) {
      const r = backtracking(data, valg);
      if (r.løsning === "avbrutt") return []; // for stort til å vise: ingen fasit å sjekke mot
      return [
        { id: "rekkefolge", navn: "Tilordninger i rekkefølge (også de som angres)", verdi: r.rekkefølge.join(", ") || "ingen" },
        { id: "losning", navn: "Løsning (variablene alfabetisk) eller failure", verdi: r.løsning }
      ];
    }
  });

  // ---------- Min-conflicts (n dronninger) ----------
  function minConflicts(data, valg) {
    const n = data.start.length, navn = data.navn || "Q", rad = data.start.slice(), maks = data.maks || 20;
    const V = k => navn + (k + 1);
    const slår = (c1, r1, c2, r2) => r1 === r2 || Math.abs(r1 - r2) === Math.abs(c1 - c2);
    const konf = (c, r) => rad.reduce((s, r2, c2) => s + (c2 !== c && slår(c, r, c2, r2) ? 1 : 0), 0);
    const iKonflikt = () => rad.map((r, c) => c).filter(c => konf(c, rad[c]) > 0);
    const trekk = String(hent(valg, "trekk", "")).split(/[\s,;]+/).filter(Boolean).map(t => parseInt(t.replace(/\D/g, ""), 10) - 1);
    const scener = [], brett = () => "(" + rad.join(", ") + ")";
    let første = null;

    const tegnBrett = (kol, tall, mål) => {
      const noder = [], kanter = [], konfl = new Set(iKonflikt());
      for (let c = 0; c < n; c++) for (let r = 1; r <= n; r++) {
        const dronning = rad[c] === r;
        let tekst = dronning ? "♛" : "", tilstand = dronning ? (konfl.has(c) ? "feil" : "utvidet") : "ny";
        if (c === kol) {
          tekst = (dronning ? "♛" : "") + tall[r - 1];
          tilstand = r === mål ? "aktiv" : dronning ? tilstand : "grense";
        }
        if (dronning && !konfl.size) tilstand = "mal";
        noder.push({ id: `${c + 1}-${r}`, x: c * 80, y: r * 80, tekst, over: r === 1 ? V(c) : "", form: "blad", tilstand });
      }
      for (let a = 0; a < n; a++) for (let b = a + 1; b < n; b++)
        if (slår(a, rad[a], b, rad[b])) kanter.push({ fra: `${a + 1}-${rad[a]}`, til: `${b + 1}-${rad[b]}`, tilstand: "feil" });
      return { retning: false, noder, kanter };
    };
    const tabBrett = () => ({ tittel: "Tilordning (rad per kolonne, rad 1 øverst)", kol: Array.from({ length: n }, (_, k) => V(k)), rader: [rad.map(String)], marker: [] });
    scener.push({ tekst: `Startbrett ${brett()}. ${iKonflikt().length ? `I konflikt: ${liste(iKonflikt().map(V))}.` : "Ingen konflikter."}`, graf: tegnBrett(-1), tabeller: [tabBrett()] });

    let steg = 0, frø = 1;
    const tilfeldig = () => (frø = (frø * 16807) % 2147483647) / 2147483647;
    while (iKonflikt().length && steg < maks) {
      steg++;
      const kand = iKonflikt();
      let c = null;
      while (trekk.length && c == null) { const t = trekk.shift(); if (kand.includes(t)) c = t; }
      const fritt = c == null;
      if (fritt) c = kand[Math.floor(tilfeldig() * kand.length)];
      const tall = Array.from({ length: n }, (_, k) => konf(c, k + 1));
      if (første == null) første = { v: V(c), tall: tall.join(", ") };
      const min = Math.min(...tall), beste = tall.map((t, k) => k + 1).filter(r => tall[r - 1] === min), mål = beste[0];
      const tab = { tittel: `Konflikter per rad for ${V(c)}`, kol: ["Rad"].concat(tall.map((_, k) => String(k + 1))), rader: [["Konflikter"].concat(tall.map(String))], marker: [0] };
      scener.push({ tekst: `Runde ${steg}: trekker ${V(c)} blant de konfliktfylte (${liste(kand.map(V))})${fritt ? ", tilfeldig med fast frø siden trekklista er brukt opp" : ""}. Tallet i hver rute er antall konflikter om ${V(c)} står der.`, graf: tegnBrett(c, tall, -1), tabeller: [tabBrett(), tab] });
      const gammel = rad[c], før = tall[gammel - 1];
      let t;
      if (mål === gammel) t = `Raden der ${V(c)} står (${gammel}) er ${beste.length > 1 ? "lavest blant de beste" : "den eneste beste"} med ${min} konflikt${min === 1 ? "" : "er"}: ${V(c)} blir stående, og runden er bortkastet.`;
      else {
        rad[c] = mål;
        t = `Lavest er ${min} i rad ${liste(beste.map(String))}${beste.length > 1 ? "; likhet → laveste rad" : ""}. ${V(c)} flyttes fra rad ${gammel} til rad ${mål}${før === min ? ` (sidelengs: ${før} konflikt${før === 1 ? "" : "er"} før og etter)` : ""}.`;
      }
      scener.push({ tekst: t, graf: tegnBrett(c, tall, mål), tabeller: [tabBrett(), tab] });
    }
    const løst = !iKonflikt().length;
    scener.push({
      tekst: løst ? `Ingen konflikter: <b>${brett()}</b> er en løsning etter ${steg} runde${steg === 1 ? "" : "r"}.` : `Fortsatt konflikter etter max_steps = ${maks} runde${maks === 1 ? "" : "r"}: min-conflicts returnerer failure.`,
      graf: tegnBrett(-1), tabeller: [tabBrett()]
    });
    return { scener, brett: brett(), steg, første, løst };
  }

  ALGO.legg({
    id: "min-conflicts",
    navn: "Min-conflicts (lokalt søk for CSP)",
    familie: "CSP",
    ep: "E07",
    kort: "Min-conflicts er lokalt søk på komplette tilordninger. Hver runde trekker den tilfeldig en variabel som er i konflikt, og gir den verdien med færrest konflikter. Det er hill climbing der målfunksjonen er antall brutte constraints. Her bestemmer feltet «trekk» hvilke variabler som trekkes.",
    punkter: [
      "Variabelen trekkes tilfeldig blant de konfliktfylte, ikke den med flest konflikter (fella i 2024 Q9). Det er verdien som velges grådig.",
      "Raden der dronningen står, teller også. Er den eneste beste, blir dronningen stående.",
      "Sideways moves (like mange konflikter før og etter) trengs på platåer.",
      "Likhet brytes her med laveste rad, som gir det samme trekket som boka i figur 5.8.",
      "Returnerer failure etter max_steps; det beviser ikke at ingen løsning finnes."
    ],
    data: null,
    valg: [{ id: "trekk", navn: "Variabler som trekkes, i rekkefølge (f.eks. Q8 Q6)", type: "tekst", std: "" }],
    eksempler: [
      { navn: "Boka figur 5.8: 8 dronninger", data: { navn: "Q", start: [2, 5, 7, 4, 1, 3, 6, 8] }, valg: { trekk: "Q8 Q6" } },
      { navn: "Eksamen 2024 Q9: 4 dronninger, X4 trekkes først", data: { navn: "X", start: [2, 4, 1, 2] }, valg: { trekk: "X4" } },
      { navn: "Eksamen 2024 Q9: samme brett, X1 trekkes først", data: { navn: "X", start: [2, 4, 1, 2], maks: 1 }, valg: { trekk: "X1" } },
      { navn: "Øv selv: figur 5.8 der Q4 trekkes først", data: { navn: "Q", start: [2, 5, 7, 4, 1, 3, 6, 8] }, valg: { trekk: "Q4 Q8 Q6" } }
    ],
    kjor: (data, valg) => minConflicts(data, valg).scener,
    svar(data, valg) {
      const r = minConflicts(data, valg);
      const ut = [];
      if (r.første) ut.push({ id: "konflikter", navn: `Konflikter per rad for ${r.første.v} i første runde`, verdi: r.første.tall });
      return ut.concat([
        { id: "brett", navn: "Brett til slutt", verdi: r.brett },
        { id: "runder", navn: "Antall runder", verdi: String(r.steg) }
      ]);
    }
  });
})();
