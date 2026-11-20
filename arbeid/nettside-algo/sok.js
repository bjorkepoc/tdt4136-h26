// Søk, E02/E03: BFS, DFS, UCS, DLS, IDS, greedy best-first, A* og weighted A*. Se KONTRAKT.md.
// Konvensjonene følger videoer/notater/e02-uinformert-sok.md og e03-astar-heuristikker.md:
// BEST-FIRST-SEARCH (Fig. 3.7) med reached der en billigere vei erstatter den gamle, BFS etter Fig. 3.9 (måltest ved
// generering), UCS/greedy/A* tester målet når noden tas ut, DLS etter teksten i 3.4.4 (noder på dybde ℓ testes, men
// utvides ikke) med cycle check, og alfabetisk tie-break (eller venstre til høyre når oppgaven sier det).
(() => {
  const A = window.ALGO;
  const GRAF = "graph search (reached)", TRE = "tree-like search", LUKKET = "tree search, utvid aldri to ganger";
  const ALFA = "alfabetisk", VH = "venstre til høyre";
  const MAKS = 3000, MAKS_SCENER = 150, MAKS_FRONTIER = 30000, VIS_RADER = 30;

  const fmt = x => Number.isInteger(x) ? String(x) : String(+x.toFixed(3));
  const alfa = (a, b) => a.localeCompare(b, "nb", { numeric: true, sensitivity: "base" }) || (a < b ? -1 : a > b ? 1 : 0);
  const fin = x => typeof x === "number" && Number.isFinite(x);

  // Grafen som oppslag: naboer i tie-break-rekkefølge, rang for likhet, h, mål og start.
  function problem(data, valg) {
    const noder = data.noder;
    const pos = new Map(noder.map(n => [String(n.id), n]));
    const nab = new Map([...pos.keys()].map(id => [id, []]));
    const vh = valg.tie === VH;
    const tie = vh ? (a, b) => ((+pos.get(a).x || 0) - (+pos.get(b).x || 0)) || ((+pos.get(a).y || 0) - (+pos.get(b).y || 0)) || alfa(a, b) : alfa;
    data.kanter.forEach((k, i) => {
      const a = String(k.fra), b = String(k.til), c = fin(k.kost) ? k.kost : 1;
      nab.get(a).push({ s: b, c, i });
      if (!data.retning && a !== b) nab.get(b).push({ s: a, c, i });
    });
    nab.forEach(l => l.sort((x, y) => tie(x.s, y.s) || x.c - y.c));
    const rang = new Map([...nab.keys()].sort(tie).map((id, i) => [id, i]));
    const h = id => (fin(pos.get(id).h) ? pos.get(id).h : 0);
    const start = data.start != null ? String(data.start) : null;
    const mal = new Set(data.mal.map(String));
    return { data, noder, nab, rang, h, start, mal, vh };
  }

  const stien = n => { const s = []; for (; n; n = n.far) s.unshift(n.s); return s; };
  const kantene = n => { const s = []; for (; n && n.far; n = n.far) s.push(n.i); return s; };
  const paSti = (n, s) => { for (; n; n = n.far) if (n.s === s) return true; return false; };

  // Liten binærhaug. Erstattede noder merkes død og hoppes over når de kommer opp.
  function haug(cmp) {
    const a = [];
    const opp = i => { while (i) { const p = (i - 1) >> 1; if (cmp(a[i], a[p]) >= 0) break; [a[i], a[p]] = [a[p], a[i]]; i = p; } };
    const ned = i => { for (;;) { let m = i; const l = 2 * i + 1, r = l + 1; if (l < a.length && cmp(a[l], a[m]) < 0) m = l; if (r < a.length && cmp(a[r], a[m]) < 0) m = r; if (m === i) return; [a[i], a[m]] = [a[m], a[i]]; i = m; } };
    const rydd = () => { while (a.length && a[0].dod) { const x = a.pop(); if (a.length) { a[0] = x; ned(0); } } };
    return {
      push(x) { a.push(x); opp(a.length - 1); },
      pop() { rydd(); const t = a[0]; const x = a.pop(); if (a.length) { a[0] = x; ned(0); } rydd(); return t; },
      topp() { rydd(); return a[0]; },
      levende() { return a.filter(x => !x.dod).sort(cmp); },
      get n() { rydd(); return a.length; }
    };
  }

  // Hva hver algoritme sorterer på, og hva som vises.
  function oppsett(id, P, valg) {
    const h = n => P.h(n.s);
    const W = fin(+valg.W) ? +valg.W : 2;
    const sti = n => stien(n).join(" ");
    return {
      bfs: { navn: "BFS", under: n => "d=" + n.d, kol: ["Node", "Sti", "d"], rad: n => [n.s, sti(n), String(n.d)] },
      dfs: { f: n => -n.d, pri: n => "dybde " + n.d, fNavn: "dybde", under: n => "d=" + n.d, kol: ["Node", "Sti", "d"], rad: n => [n.s, sti(n), String(n.d)] },
      ucs: { f: n => n.g, pri: n => "g = " + fmt(n.g), fNavn: "g", under: n => "g=" + fmt(n.g), kol: ["Node", "Sti", "g"], rad: n => [n.s, sti(n), fmt(n.g)] },
      greedy: { f: h, pri: n => "h = " + fmt(h(n)), fNavn: "h", visH: true, under: n => "g=" + fmt(n.g), kol: ["Node", "Sti", "h", "g"], rad: n => [n.s, sti(n), fmt(h(n)), fmt(n.g)] },
      astar: { f: n => n.g + h(n), pri: n => `f = ${fmt(n.g)} + ${fmt(h(n))} = ${fmt(n.f)}`, fNavn: "f", visH: true, under: n => "f=" + fmt(n.f), kol: ["Node", "Sti", "g", "h", "f"], rad: n => [n.s, sti(n), fmt(n.g), fmt(h(n)), fmt(n.f)] },
      wastar: { f: n => n.g + W * h(n), pri: n => `f = ${fmt(n.g)} + ${fmt(W)}·${fmt(h(n))} = ${fmt(n.f)}`, fNavn: "f", visH: true, under: n => "f=" + fmt(n.f), kol: ["Node", "Sti", "g", "h", "f"], rad: n => [n.s, sti(n), fmt(n.g), fmt(h(n)), fmt(n.f)] }
    }[id];
  }

  // Lager én scene: grafen med tilstander, frontier-tabellen og minnet.
  function scene(P, C, o) {
    const fr = o.frontier || [];
    const frS = new Map();
    fr.forEach(n => { if (!frS.has(n.s)) frS.set(n.s, []); frS.get(n.s).push(n); });
    const stiS = new Set(o.sti ? stien(o.sti) : []);
    const kt = new Map();
    (o.tre || []).forEach(n => n.i >= 0 && kt.set(n.i, "utvidet"));
    fr.forEach(n => n.i >= 0 && kt.set(n.i, "grense"));
    if (o.aktiv && o.aktiv.i >= 0) kt.set(o.aktiv.i, "aktiv");
    if (o.sti) kantene(o.sti).forEach(i => kt.set(i, "sti"));
    const graf = {
      retning: !!P.data.retning,
      noder: P.noder.map(n => {
        const id = String(n.id);
        let t = "ny";
        if (o.cut && o.cut.has(id)) t = "beskaret";
        if (o.utvidet.has(id)) t = "utvidet";
        if (frS.has(id)) t = "grense";
        if (o.aktiv && o.aktiv.s === id) t = "aktiv";
        if (stiS.has(id)) t = "sti";
        let under = "";
        if (frS.has(id)) under = [...new Set(frS.get(id).map(C.under))].slice(0, 3).join(" / ");
        else if (o.sist && o.sist.has(id)) under = C.under(o.sist.get(id));
        return { id, x: +n.x || 0, y: +n.y || 0, tekst: id, over: C.visH ? "h=" + fmt(P.h(id)) : "", under, tilstand: t, mal: P.mal.has(id), start: id === P.start };
      }),
      kanter: (P.data.kanter || []).map((k, i) => ({ fra: String(k.fra), til: String(k.til), tekst: fin(k.kost) ? fmt(k.kost) : "", tilstand: kt.get(i) || "ny" }))
    };
    const rader = fr.slice(0, VIS_RADER).map(C.rad);
    if (fr.length > VIS_RADER) rader.push(["…", `${fr.length - VIS_RADER} til`, ...C.kol.slice(2).map(() => "")]);
    const marker = fr.map((n, i) => (o.nye && o.nye.includes(n) ? i : -1)).filter(i => i >= 0 && i < VIS_RADER);
    const minne = [[o.utNavn || "Utvidet", o.utListe || "–"]];
    if (o.reached) minne.push(["Reached", o.reached.join(" ") || "–"]);
    if (o.ekstra) minne.push(...o.ekstra);
    return {
      tekst: o.tekst,
      graf,
      tabeller: [{ tittel: o.frTittel || "Frontier (neste tas ut øverst)", kol: C.kol, rader, marker }, { tittel: "Minne", kol: ["", ""], rader: minne }]
    };
  }

  const ingenStart = P => [{ tekst: P.noder.length ? "Grafen har ingen startnode. Velg en node og huk av for «Start»." : "Grafen er tom. Tegn noder og kanter først.", graf: { retning: !!P.data.retning, noder: P.noder.map(n => ({ id: String(n.id), x: +n.x || 0, y: +n.y || 0, tekst: String(n.id), mal: P.mal.has(String(n.id)) })), kanter: (P.data.kanter || []).map(k => ({ fra: String(k.fra), til: String(k.til), tekst: fin(k.kost) ? fmt(k.kost) : "" })) } }];
  const ingenMal = P => (P.mal.size ? "" : " Ingen måltilstand er valgt, så søket kan ikke lykkes.");
  const tieOrd = P => (P.vh ? "fordi den står lengst til venstre" : "alfabetisk");
  const pil = n => stien(n).join(" → ");

  // BFS etter Fig. 3.9: FIFO-kø, måltest når barnet genereres.
  function bfs(P, valg, medScener) {
    const C = oppsett("bfs", P, valg), minne = valg.minne || GRAF, sc = [];
    let nr = 0;
    const lag = (s, far, c, i) => ({ s, g: far ? far.g + c : 0, d: far ? far.d + 1 : 0, far, i, nr: nr++ });
    const n0 = lag(P.start, null, 0, -1);
    const ut = [], utvidet = new Set(), tre = [], sist = new Map([[P.start, n0]]);
    const reached = new Set([P.start]);
    let q = [n0];
    const vis = medScener ? (tekst, ekstra = {}) => sc.push(scene(P, C, { frontier: q, utvidet, tre, sist, utListe: ut.join(" "), reached: minne === GRAF ? [...reached] : null, tekst, frTittel: "Frontier, FIFO-kø (neste tas ut øverst)", ...ekstra })) : () => {};
    if (P.mal.has(P.start)) {
      vis(`${P.start} er selv et mål. BFS tester startnoden før søket begynner, så svaret er stien ${P.start} med kostnad 0.`, { frontier: [], sti: n0 });
      return { status: "funnet", node: n0, ut, sc };
    }
    vis(`Start: ${P.start} legges i frontier (FIFO-kø)${minne === GRAF ? ` og i reached` : ""}.${ingenMal(P)}`);
    while (q.length) {
      if (ut.length >= MAKS || q.length > MAKS_FRONTIER) return slutt("maks");
      const n = q.shift();
      if (minne === LUKKET && utvidet.has(n.s)) {
        if (sc.length <= MAKS_SCENER) vis(`Tar ut ${n.s}, men ${n.s} er allerede utvidet. Den hoppes over.`, { aktiv: n });
        continue;
      }
      ut.push(n.s); utvidet.add(n.s); tre.push(n); sist.set(n.s, n);
      const notat = [], nye = [];
      for (const { s, c, i } of P.nab.get(n.s)) {
        const b = lag(s, n, c, i);
        if (P.mal.has(s)) {
          sist.set(s, b);
          if (medScener) {
            const tekst = `Utvider <b>${n.s}</b>: ${notat.length ? notat.join("; ") + "; " : ""}genererer ${s}, og ${s} er mål. BFS tester målet når noden genereres (early goal test), så søket stopper her. Sti ${pil(b)}, kostnad ${fmt(b.g)}.`;
            vis(tekst, { aktiv: n, sti: b, utListe: [...ut, `(${s})`].join(" ") });
          }
          return { status: "funnet", node: b, ut, sc };
        }
        if (minne === GRAF && reached.has(s)) { notat.push(`${s} er allerede i reached`); continue; }
        if (minne === LUKKET && utvidet.has(s)) { notat.push(`${s} er allerede utvidet`); continue; }
        reached.add(s); q.push(b); nye.push(b); sist.set(s, b);
        notat.push(`${s} legges bakerst`);
      }
      if (medScener && sc.length <= MAKS_SCENER) vis(`Tar ut <b>${n.s}</b> (den eldste i køen). ${n.s} er ikke mål. ${P.nab.get(n.s).length ? "Genererer barna: " + notat.join("; ") + "." : `${n.s} har ingen barn.`}`, { aktiv: n, nye });
    }
    return slutt("failure");
    function slutt(status) {
      if (medScener) vis(status === "maks" ? `Stopper etter ${ut.length} utvidelser uten å ha nådd målet${minne === TRE ? ": tree-like search husker ikke hva den har sett, så den kan gå i ring" : " (grensen for animasjonen)"}. Søket er avbrutt, ikke ferdig, så det er ikke avgjort om en sti finnes.` : "Frontier er tom: ingen løsning (failure).", { frontier: status === "maks" ? q : [] });
      return { status, ut, sc };
    }
  }

  // BEST-FIRST-SEARCH (Fig. 3.7) for DFS, UCS, greedy, A* og weighted A*.
  function bestFirst(id, P, valg, medScener) {
    const C = oppsett(id, P, valg), minne = valg.minne || GRAF, sc = [];
    const cmp = (a, b) => a.f - b.f || P.rang.get(a.s) - P.rang.get(b.s) || a.nr - b.nr;
    let nr = 0;
    const lag = (s, far, c, i) => { const n = { s, g: far ? far.g + c : 0, d: far ? far.d + 1 : 0, far, i, nr: nr++ }; n.f = Math.round(C.f(n) * 1e12) / 1e12; return n; };
    const n0 = lag(P.start, null, 0, -1);
    const fr = haug(cmp); fr.push(n0);
    const reached = new Map([[P.start, n0]]), ut = [], utvidet = new Set(), tre = [], sist = new Map([[P.start, n0]]);
    const vis = medScener ? (tekst, ekstra = {}) => sc.push(scene(P, C, { frontier: fr.levende(), utvidet, tre, sist, utListe: ut.join(" "), reached: minne === GRAF ? [...reached.keys()] : null, tekst, ...ekstra })) : () => {};
    vis(`Start: frontier = [${P.start} (${C.pri(n0)})]${minne === GRAF ? `, reached = {${P.start}}` : ""}.${ingenMal(P)}`);
    while (fr.n) {
      if (ut.length >= MAKS || fr.n > MAKS_FRONTIER) return slutt("maks");
      const n = fr.pop();
      n.inF = false;
      const neste = fr.topp();
      const lik = neste && neste.f === n.f && neste.s !== n.s ? `Likt ${C.fNavn} med ${neste.s}, så ${n.s} velges ${tieOrd(P)}. ` : "";
      if (minne === LUKKET && utvidet.has(n.s)) {
        if (sc.length <= MAKS_SCENER) vis(`Tar ut ${n.s} (${C.pri(n)}), men ${n.s} er allerede utvidet. Den hoppes over.`, { aktiv: n });
        continue;
      }
      if (P.mal.has(n.s)) {
        if (medScener) vis(`Tar ut <b>${n.s}</b> (${C.pri(n)}). ${lik}${n.s} er mål, og målet testes når noden tas ut. Ferdig: sti ${pil(n)}, kostnad ${fmt(n.g)}.`, { aktiv: n, sti: n, utListe: [...ut, `(${n.s})`].join(" ") });
        return { status: "funnet", node: n, ut, sc };
      }
      ut.push(n.s); utvidet.add(n.s); tre.push(n); sist.set(n.s, n);
      const notat = [], nye = [];
      for (const { s, c, i } of P.nab.get(n.s)) {
        const b = lag(s, n, c, i);
        if (minne === GRAF) {
          const r = reached.get(s);
          if (!r) notat.push(`${s} ny (${C.pri(b)})`);
          else if (b.g < r.g) {
            if (r.inF) { r.dod = true; r.inF = false; notat.push(`${s}: billigere vei (g = ${fmt(b.g)} < ${fmt(r.g)}), erstatter den gamle`); }
            else notat.push(`${s}: billigere vei (g = ${fmt(b.g)} < ${fmt(r.g)}), legges inn igjen selv om ${s} er utvidet`);
          } else { notat.push(`${s}: g = ${fmt(b.g)} ≥ ${fmt(r.g)}, forkastes`); continue; }
          reached.set(s, b);
        } else if (minne === LUKKET && utvidet.has(s)) { notat.push(`${s} er allerede utvidet`); continue; }
        else notat.push(`${s} (${C.pri(b)})`);
        b.inF = true; fr.push(b); nye.push(b); sist.set(s, b);
      }
      if (medScener && sc.length <= MAKS_SCENER) vis(`Tar ut <b>${n.s}</b> (${C.pri(n)}). ${lik}${n.s} er ikke mål, så den utvides: ${notat.length ? notat.join("; ") : "ingen barn"}.`, { aktiv: n, nye });
    }
    return slutt("failure");
    function slutt(status) {
      if (medScener) vis(status === "maks" ? `Stopper etter ${ut.length} utvidelser uten å ha nådd målet${minne === TRE ? ": tree-like search husker ikke hva den har sett, så den kan gå i løkke" : " (grensen for animasjonen)"}. Søket er avbrutt, ikke ferdig, så det er ikke avgjort om en sti finnes.` : "Frontier er tom: ingen løsning (failure).");
      return { status, ut, sc };
    }
  }

  // DEPTH-LIMITED-SEARCH (Fig. 3.12, med teksten i 3.4.4): LIFO-stabel, noder på dybde ℓ testes men utvides ikke.
  function dls(P, valg, l, medScener, sc = [], forrige = []) {
    const C = oppsett("dfs", P, valg), syk = valg.syklus !== false;
    let nr = 0;
    const n0 = { s: P.start, g: 0, d: 0, far: null, i: -1, nr: nr++ };
    const stabel = [n0], ut = [], utvidet = new Set(), cut = new Set(), tre = [], sist = new Map([[P.start, n0]]);
    let res = "failure";
    const ekstra = () => forrige.map((r, k) => [`ℓ = ${k}`, r.join(" ")]);
    const vis = medScener ? (tekst, o = {}) => sc.push(scene(P, C, { frontier: stabel.slice().reverse(), utvidet, cut, tre, sist, utListe: ut.join(" "), utNavn: `Tatt ut (ℓ = ${l})`, tekst, frTittel: `Frontier, LIFO-stabel med ℓ = ${l} (neste tas ut øverst)`, ekstra: ekstra(), ...o })) : () => {};
    vis(`Dybdegrense ℓ = ${l}. ${P.start} legges på stabelen.${ingenMal(P)}`);
    while (stabel.length) {
      if (ut.length >= MAKS) { res = "maks"; break; }
      const n = stabel.pop();
      ut.push(n.s); sist.set(n.s, n);
      if (P.mal.has(n.s)) {
        if (medScener) vis(`Tar ut <b>${n.s}</b> (dybde ${n.d}). ${n.s} er mål. Ferdig: sti ${pil(n)}, kostnad ${fmt(n.g)}.`, { aktiv: n, sti: n });
        return { status: "funnet", node: n, ut, sc };
      }
      if (n.d >= l) {
        res = "cutoff"; cut.add(n.s);
        if (medScener && sc.length <= MAKS_SCENER) vis(`Tar ut <b>${n.s}</b> (dybde ${n.d}). Ikke mål. Dybden er ℓ = ${l}, så ${n.s} utvides ikke, og resultatet blir minst cutoff.`, { aktiv: n });
        continue;
      }
      utvidet.add(n.s); tre.push(n);
      const barn = [], hopp = [];
      for (const { s, c, i } of P.nab.get(n.s)) {
        if (syk && paSti(n, s)) { hopp.push(s); continue; }
        barn.push({ s, g: n.g + c, d: n.d + 1, far: n, i, nr: nr++ });
      }
      for (let k = barn.length - 1; k >= 0; k--) { stabel.push(barn[k]); sist.set(barn[k].s, barn[k]); }
      if (medScener && sc.length <= MAKS_SCENER) vis(`Tar ut <b>${n.s}</b> (dybde ${n.d}). Ikke mål. ${barn.length ? `Legger ${barn.map(b => b.s).join(", ")} på stabelen, ${barn[0].s} øverst.` : "Ingen nye barn."}${hopp.length ? ` ${hopp.join(", ")} ligger allerede på stien (cycle) og hoppes over.` : ""}`, { aktiv: n, nye: barn });
    }
    if (medScener) vis(res === "cutoff" ? `Stabelen er tom. Minst én node ble stoppet av grensen, så svaret er <b>cutoff</b> (ingen løsning innenfor ℓ = ${l}).` : res === "maks" ? `Stopper etter ${ut.length} uttak. Søket er avbrutt, så om svaret blir en sti, cutoff eller failure, er ikke avgjort.` : `Stabelen er tom og ingen node ble stoppet av grensen: <b>failure</b> (ingen løsning).`, { frontier: [] });
    return { status: res, ut, sc };
  }

  function ids(P, valg, medScener) {
    const sc = [], runder = [];
    const maksL = P.noder.length; // en grunneste løsning er en enkel sti, så ℓ ≤ n − 1 holder også uten cycle check
    let totalt = 0, l = 0, r;
    for (; l <= maksL; l++) {
      const vis = medScener && sc.length <= MAKS_SCENER;
      r = dls(P, valg, l, vis, sc, runder.slice());
      runder.push(r.ut);
      totalt += r.ut.length;
      if (r.status !== "cutoff" || totalt > MAKS) break;
    }
    l = Math.min(l, maksL);
    // For mange steg til å vise alt: ta med sluttscenen fra siste runde.
    if (medScener && sc.length > MAKS_SCENER + 1) { const s = dls(P, valg, l, true, [], runder.slice(0, -1)).sc; sc.push(s[s.length - 1]); }
    // Cutoff helt til ℓ = n: ingen sti finnes. Stopp på uttaksgrensen før det: avbrutt, uten fasit for stien.
    return { ...r, dls: r.status, status: r.status === "maks" || r.status === "cutoff" && l < maksL ? "avbrutt" : r.status === "cutoff" ? "failure" : r.status, runder, l, sc };
  }

  const uniq = a => [...new Set(a)];
  function svarSok(r) {
    const ut = r.ut;
    if (r.status === "funnet") {
      const m = `(${r.node.s})`, hoved = [...ut, m].join(" ");
      return [
        { id: "rekke", navn: "Utvidelsesrekkefølge (målet i parentes)", verdi: hoved, godta: uniq([ut.join(" "), [...ut.slice(1), m].join(" "), ut.slice(1).join(" ")]).filter(x => x && x !== hoved) },
        { id: "sti", navn: "Sti", verdi: pil(r.node) },
        { id: "kost", navn: "Kostnad", verdi: fmt(r.node.g) }
      ];
    }
    // Avbrutt ved grensen: bare starten av rekkefølgen er kjent, og om en sti finnes, er ikke avgjort.
    if (r.status === "maks") return [{ id: "rekke", navn: "Utvidelsesrekkefølge", verdi: ut.slice(0, 4).join(" ") + " …" }];
    return [
      { id: "rekke", navn: "Utvidelsesrekkefølge", verdi: ut.join(" ") },
      { id: "sti", navn: "Sti (∅ hvis ingen)", verdi: "∅" }
    ];
  }

  // Eksempelgrafene. Koordinater fra GR i nettside-mal.html (avtegnet fra eksamensfigurene), skalert så naboer står ~90 enheter fra hverandre.
  const G = (retning, start, mal, noder, kanter, k = 1) => ({
    retning, start, mal,
    noder: Object.entries(noder).map(([id, [x, y, h]]) => (h == null ? { id, x: Math.round(x * k), y: Math.round(y * k) } : { id, x: Math.round(x * k), y: Math.round(y * k), h })),
    kanter: kanter.map(([fra, til, kost]) => ({ fra, til, kost }))
  });
  const L2 = G(true, "A", ["G"], { A: [40, 110], B: [150, 50], C: [150, 180], D: [270, 30], E: [270, 140], F: [390, 30], G: [410, 150] },
    [["A", "B", 5], ["A", "C", 7], ["B", "D", 8], ["B", "E", 3], ["D", "F", 4], ["E", "G", 17], ["F", "G", 6]]);
  const p25 = hh => G(false, "s", ["g"], { i: [81, 40, hh && 6], j: [157, 52, hh && 5], h: [33, 82, hh && 6], f: [95, 98, hh && 5], k: [240, 130, hh && 3], g: [208, 252, hh && 0], a: [389, 275, hh && 5], e: [87, 310, hh && 4], d: [103, 405, hh && 5], s: [343, 398, hh && 5], b: [279, 435, hh && 4], c: [169, 475, hh && 5] },
    [["h", "i", 1], ["i", "j", 1], ["h", "f", 1], ["j", "k", 3], ["f", "g", 5], ["k", "g", 3], ["k", "s", 6], ["g", "e", 4], ["e", "d", 2], ["d", "c", 2], ["c", "b", 2], ["b", "s", 1], ["s", "a", 4]], 1.35);
  const P25 = p25(), P25H = p25(1);
  const L23 = G(true, "S", ["G"], { S: [200, 28], A: [110, 115, 3], B: [290, 115, 3], C: [130, 210, 3], G: [300, 212, 0] },
    [["S", "A", 4], ["S", "B", 7], ["A", "A", 13], ["A", "C", 4], ["B", "G", 10], ["C", "G", 4]], 1.1);
  const r20 = { S: [35, 135, 5], D: [150, 25, 6], E: [290, 25, 5], G3: [405, 25, 0], C: [150, 140, 4], F: [290, 108, 6], G2: [310, 205, 0], B: [150, 245, 3], A: [150, 332, 7], G1: [345, 332, 0] };
  const R20 = G(true, "S", ["G1", "G2", "G3"], r20,
    [["S", "D", 6], ["S", "B", 9], ["S", "A", 5], ["C", "S", 6], ["D", "E", 2], ["D", "C", 2], ["E", "G3", 7], ["F", "D", 20], ["C", "F", 7], ["F", "G3", 8], ["C", "G2", 5], ["B", "C", 1], ["A", "B", 3], ["A", "G1", 9]], 1.1);
  const r21 = h227 => G(true, "A", ["B"], { A: [130, 27, 366], Z: [207, 108, 374], O: [197, 218, 380], S: [121, 302, 253], F: [203, 384, 176], R: [45, 394, h227 ? 227 : 193], P: [88, 487, 100], B: [136, 574, 0] },
    [["A", "Z", 75], ["Z", "O", 71], ["O", "S", 151], ["A", "S", 140], ["S", "F", 99], ["S", "R", 80], ["R", "P", 97], ["P", "B", 101], ["F", "B", 211]]);
  const R21 = r21(false);
  const T18 = G(true, "S", ["D", "F", "G"], { S: [225, 28, 2], B: [80, 120, 1], C: [225, 120, 1], D: [370, 120, 0], E: [30, 222, 0], F: [120, 222, 0], G: [190, 222, 0], H: [265, 222, 0], I: [345, 222, 0], J: [420, 222, 0] },
    [["S", "B", 2], ["S", "C", 1], ["S", "D", 3], ["B", "E", 2], ["B", "F", 1], ["C", "G", 1], ["C", "H", 3], ["D", "I", 1], ["D", "J", 1]], 1.25);
  const TRI = G(true, "S", ["G"], { S: [40, 90, 4], A: [170, 28, 1], G: [300, 90, 0] }, [["S", "A", 2], ["A", "G", 3], ["S", "G", 6]]);
  const h23 = hB => G(true, "A", ["G"], { A: [40, 110, 5], B: [150, 40, hB], C: [150, 180, 4], D: [270, 40, 3], E: [270, 180, 3], F: [390, 40, 1], G: [390, 180, 0] },
    [["A", "B", 1], ["A", "C", 4], ["B", "C", 2], ["B", "D", 3], ["C", "E", 5], ["D", "F", 2], ["D", "G", 4], ["E", "G", 3], ["F", "G", 1]]);
  const INK = G(true, "S", ["G"], { S: [40, 110, 2], A: [160, 40, 4], B: [160, 180, 1], C: [280, 110, 1], G: [400, 110, 0] },
    [["S", "A", 1], ["S", "B", 1], ["A", "C", 1], ["B", "C", 2], ["C", "G", 3]]);
  const R20U = A.kopi(R20); R20U.noder.forEach(n => delete n.h);
  const R21U = A.kopi(R21); R21U.noder.forEach(n => delete n.h);
  const T18U = A.kopi(T18); T18U.noder.forEach(n => delete n.h);
  const L23U = A.kopi(L23); L23U.noder.forEach(n => delete n.h);

  const vMinne = { id: "minne", navn: "Minne", type: [GRAF, TRE, LUKKET], std: GRAF };
  const vTie = { id: "tie", navn: "Tie-break", type: [ALFA, VH], std: ALFA };
  const ex = (navn, data, valg = {}) => ({ navn, data, valg });
  const e25 = d => ex("Eksamen 2025, oppgave 5", d);
  const e21 = (d, n = "Eksamen 2021, oppgave 2") => ex(n + " (graph search, venstre til høyre)", d, { tie: VH });
  const e20k = d => ex("Eksamen 2020 kont, problem 2 (utvid aldri to ganger)", d, { minne: LUKKET });
  const e23 = d => ex("Eksamen 2023, oppgave 2.1 (tree-like)", d, { minne: TRE });
  const e18 = d => ex("Eksamen 2018, problem 4", d);

  const vanlig = id => ({
    data: "graf",
    kjor(data, valg = {}) { const P = problem(data, valg); if (!P.start) return ingenStart(P); return (id === "bfs" ? bfs(P, valg, true) : bestFirst(id, P, valg, true)).sc; },
    svar(data, valg = {}) { const P = problem(data, valg); if (!P.start) return []; return svarSok(id === "bfs" ? bfs(P, valg, false) : bestFirst(id, P, valg, false)); }
  });

  A.legg({
    id: "bfs", navn: "Breadth-first search (BFS)", familie: "Søk", ep: "E02",
    kort: "BFS utvider alltid den <b>eldste</b> noden i frontier (FIFO-kø), altså lag for lag. Målet testes når en node <b>genereres</b> (early goal test, Fig. 3.9), ikke når den tas ut. Med graph search legges hver tilstand i <code>reached</code> bare én gang.",
    punkter: ["Complete: ja, når b er endelig.", "Optimal: bare når alle steg koster likt. BFS finner færrest steg, ikke lavest kostnad.", "Tid og plass: O(b<sup>d</sup>). Hele det siste laget ligger i minnet.", "Felle: bare BFS tester målet ved generering. UCS og A* tester når noden tas ut.", "Svarformat: rekkefølgen med målet i parentes, stien og kostnaden."],
    valg: [vMinne, vTie],
    eksempler: [e25(P25), ex("Forelesning 2 (L2)", L2), e23(L23U), e21(R21U), e20k(R20U), e18(T18U)],
    ...vanlig("bfs")
  });

  A.legg({
    id: "dfs", navn: "Depth-first search (DFS)", familie: "Søk", ep: "E02",
    kort: "DFS utvider alltid den <b>dypeste</b> noden i frontier: BEST-FIRST-SEARCH med f = −dybde, i praksis en LIFO-stabel. Like dype noder tas alfabetisk. Målet testes når noden tas ut.",
    punkter: ["Complete: nei for tree-like search, som kan gå i ring (løkkegrafen 2023). Graph search er complete i endelige rom.", "Optimal: nei, den tar den første løsningen den finner.", "Plass: O(bm) for tree-like, bare én sti med søsknene langs den.", "Felle: B før C blant like dype noder, så B må ligge øverst i stabelen."],
    valg: [vMinne, vTie],
    eksempler: [ex("Eksamen 2025, oppgave 5 (DFS med minne)", P25), e23(L23U), e21(R21U), e20k(R20U), e18(T18U), ex("Forelesning 2 (L2)", L2)],
    ...vanlig("dfs")
  });

  A.legg({
    id: "ucs", navn: "Uniform-cost search (UCS)", familie: "Søk", ep: "E02",
    kort: "UCS (Dijkstra) er BEST-FIRST-SEARCH med f(n) = g(n): den tar alltid ut den <b>billigste</b> stien hittil. Målet testes når noden <b>tas ut</b> (late goal test). Finner søket en billigere vei til en tilstand i <code>reached</code>, erstatter den nye den gamle i frontier.",
    punkter: ["Complete: ja, hvis alle kostnader er ≥ ε > 0.", "Optimal: ja.", "Tid og plass: O(b<sup>1+⌊C*/ε⌋</sup>).", "Felle: stopper du når målet <i>genereres</i>, kan svaret bli feil. På L2-grafen gir det 25 i stedet for 23."],
    valg: [vMinne, vTie],
    eksempler: [ex("Forelesning 2 (L2)", L2), e25(P25), e23(L23U), e21(R21U), e20k(R20U), e18(T18U)],
    ...vanlig("ucs")
  });

  A.legg({
    id: "dls", navn: "Depth-limited search (DLS)", familie: "Søk", ep: "E02",
    kort: "DLS er DFS med en dybdegrense ℓ. Noder på dybde ℓ testes, men utvides ikke. Ble minst én node stoppet av grensen, blir svaret <b>cutoff</b> i stedet for failure. Med cycle check legges ikke en tilstand som allerede ligger på egen sti, inn igjen.",
    punkter: ["Complete: nei, ikke hvis ℓ < d.", "Optimal: nei.", "Tid O(b<sup>ℓ</sup>), plass O(bℓ).", "Felle: cutoff (ingen løsning innenfor grensen) er ikke det samme som failure.", "Fig. 3.12 skriver DEPTH > ℓ, men teksten, slidene og fasiten 2022 utvider ikke noder på dybde ℓ. Animasjonen følger det."],
    valg: [{ id: "grense", navn: "Dybdegrense ℓ", type: "tall", std: 3 }, { id: "syklus", navn: "Cycle check", type: "bool", std: true }, vTie],
    eksempler: [ex("Forelesning 2 (L2), ℓ = 3", L2, { grense: 3 }), ex("Forelesning 2 (L2), ℓ = 2: cutoff", L2, { grense: 2 }), ex("Forelesning 2 (L2), ℓ = 4", L2, { grense: 4 }), ex("Eksamen 2025, oppgave 5, ℓ = 2", P25, { grense: 2 })],
    data: "graf",
    kjor(data, valg = {}) { const P = problem(data, valg); if (!P.start) return ingenStart(P); return dls(P, valg, Math.max(0, Math.floor(+valg.grense || 0)), true).sc; },
    svar(data, valg = {}) {
      const P = problem(data, valg); if (!P.start) return [];
      const r = dls(P, valg, Math.max(0, Math.floor(+valg.grense || 0)), false);
      if (r.status === "maks") return [{ id: "rekke", navn: "Tatt ut og testet", verdi: r.ut.slice(0, 4).join(" ") + " …" }];
      return [{ id: "rekke", navn: "Tatt ut og testet", verdi: r.ut.join(" ") }, { id: "sti", navn: "Sti, eller cutoff/failure", verdi: r.status === "funnet" ? pil(r.node) : r.status }]
        .concat(r.status === "funnet" ? [{ id: "kost", navn: "Kostnad", verdi: fmt(r.node.g) }] : []);
    }
  });

  A.legg({
    id: "ids", navn: "Iterative deepening search (IDS)", familie: "Søk", ep: "E02",
    kort: "IDS kjører DLS med ℓ = 0, 1, 2, … til svaret ikke lenger er cutoff. Den går lag for lag som BFS, men bruker bare minnet til DFS. Hver runde starter på nytt fra startnoden.",
    punkter: ["Complete: ja, når b er endelig.", "Optimal: ja, når alle steg koster likt.", "Tid O(b<sup>d</sup>), plass O(bd). Toppen lages på nytt, men nesten alle nodene ligger i bunnen (rundt 11 % ekstra for b = 10, d = 5).", "Felle: skriv hvilke noder som tas ut for <i>hver</i> grense."],
    valg: [{ id: "syklus", navn: "Cycle check", type: "bool", std: true }, vTie],
    eksempler: [ex("Eksamen 2025, oppgave 5", P25), ex("Forelesning 2 (L2)", L2)],
    data: "graf",
    kjor(data, valg = {}) {
      const P = problem(data, valg); if (!P.start) return ingenStart(P);
      const r = ids(P, valg, true);
      if (r.status === "funnet") r.sc[r.sc.length - 1].tekst += ` IDS fant målet med ℓ = ${r.l}.`;
      else r.sc[r.sc.length - 1].tekst += r.status === "avbrutt" ? (r.dls === "maks" ? "" : ` Animasjonen stopper her (for mange uttak). Søket er ikke ferdig, så dette er ikke et svar.`) : r.dls === "failure" ? ` DLS ga failure, ikke cutoff, så IDS stopper med ℓ = ${r.l}: ingen sti.` : ` Cutoff helt til ℓ = ${r.l}, og en løsning ville ligget på dybde under antall noder. Altså finnes ingen sti: <b>failure</b>.`;
      return r.sc;
    },
    svar(data, valg = {}) {
      const P = problem(data, valg); if (!P.start) return [];
      const r = ids(P, valg, false);
      const s = r.runder.slice(0, r.dls === "maks" ? -1 : undefined).slice(0, 10).map((u, l) => ({ id: "l" + l, navn: `Tatt ut med ℓ = ${l}`, verdi: u.join(" ") }));
      return r.status === "funnet" ? s.concat([{ id: "grense", navn: "Grensen ℓ der målet finnes", verdi: String(r.l) }, { id: "sti", navn: "Sti", verdi: pil(r.node) }, { id: "kost", navn: "Kostnad", verdi: fmt(r.node.g) }])
        : r.status === "avbrutt" ? s : s.concat([{ id: "sti", navn: "Sti (∅ hvis ingen)", verdi: "∅" }]);
    }
  });

  A.legg({
    id: "greedy", navn: "Greedy best-first search", familie: "Søk", ep: "E03",
    kort: "Greedy best-first search tar alltid ut noden som <b>ser</b> nærmest målet ut: f(n) = h(n). Den glemmer hva veien dit har kostet. Målet testes når noden tas ut.",
    punkter: ["Complete: med graph search i endelige rom. Tree-like kan gå i løkke (løkkegrafen 2023).", "Optimal: nei. Løkkegrafen gir S B G med kostnad 17, mens den beste koster 12.", "Felle: like h-verdier avgjøres alfabetisk, eller venstre til høyre hvis oppgaven sier det."],
    valg: [vMinne, vTie],
    eksempler: [ex("Løkkegrafen 2023 (graph search)", L23), ex("Løkkegrafen 2023 (tree-like): går i løkke", L23, { minne: TRE }), ex("Eksamen 2025, grafen fra oppgave 6", P25H), e18(T18), e21(R21), e20k(R20)],
    ...vanlig("greedy")
  });

  A.legg({
    id: "astar", navn: "A* search", familie: "Søk", ep: "E03",
    kort: "A* tar ut noden med lavest f(n) = g(n) + h(n): det du har betalt, pluss anslaget for resten. Målet testes når noden <b>tas ut</b>. Finner søket en billigere vei til en tilstand i <code>reached</code>, legges den inn igjen (Fig. 3.7), også om den alt er utvidet.",
    punkter: ["Optimal: ja med admissible h (h ≤ h*). Med consistent h trengs aldri gjenåpning.", "Complete: ja, når alle kantkostnader er ≥ ε > 0.", "Med h = 0 er A* det samme som UCS.", "Felle: at målet ligger i frontier, betyr ikke at du er ferdig. Tidlig måltest gir 17 på løkkegrafen, men 12 er riktig.", "Felle: med «utvid aldri to ganger» kan en h som bare er admissible gi en dårligere sti (se eksempelet med inkonsistent h)."],
    valg: [vMinne, vTie],
    eksempler: [e21(R21), ex("Eksamen 2021, 4 d): h(R) = 227 (graph search, venstre til høyre)", r21(true), { tie: VH }), ex("Eksamen 2025, oppgave 6", P25H), ex("Eksamen 2023, oppgave 2.1 (tree-like)", L23, { minne: TRE }),
      ex("Eksamen 2023, oppgave 2.2 med h(B) = 11", h23(11)), ex("Eksamen 2023, oppgave 2.2 med h(B) = 12: suboptimal", h23(12)), ex("Inkonsistent, men admissible h (E03, egen graf)", INK),
      e20k(R20), e18(T18), ex("Eksamen 2018, problem 5 med H1", TRI)],
    ...vanlig("astar")
  });

  A.legg({
    id: "wastar", navn: "Weighted A*", familie: "Søk", ep: "E03",
    kort: "Weighted A* bruker f(n) = g(n) + W·h(n). W = 1 gir A*, W = 0 gir UCS, og stor W nærmer seg greedy. Den finner ofte en løsning raskere, men kanskje ikke den billigste (satisficing search).",
    punkter: ["Med W ≥ 1 og admissible h ligger kostnaden mellom C* og W·C*. W = 0 gir UCS, som er optimal.", "Ikke garantert optimal når W > 1.", "Felle: like f-verdier avgjøres alfabetisk. Med W = 3 på løkkegrafen er det bare tie-break som gir 12."],
    valg: [{ id: "W", navn: "Vekt W", type: "tall", std: 2 }, vMinne, vTie],
    eksempler: [ex("Løkkegrafen 2023, W = 4", L23, { W: 4 }), ex("Løkkegrafen 2023, W = 3", L23, { W: 3 }), ex("Løkkegrafen 2023, W = 2", L23, { W: 2 })],
    ...vanlig("wastar")
  });

  if (typeof module !== "undefined") module.exports = { problem, bfs, bestFirst, dls, ids, svarSok };
})();
