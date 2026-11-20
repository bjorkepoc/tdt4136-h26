// Lokalt søk og usikre miljøer: E04 (hill climbing, simulated annealing, local beam, GA) og E05 (AND-OR-søk, belief states).
// Se KONTRAKT.md. Alle «tilfeldige» valg ligger fast i eksempeldataene, så animasjonene er deterministiske.
(() => {
  const A = window.ALGO;
  const tall = (x, d = 3) => (x === Infinity ? "∞" : x === -Infinity ? "−∞" : String(+(+x).toFixed(d)).replace("-", "−").replace(".", ","));
  const tab = (tittel, kol, rader, marker = []) => ({ tittel, kol, rader, marker });
  const mengde = b => "{" + b.join(", ") + "}";

  // ---------- Landskapet (ILLUSTRASJON): x = tilstand, verdien er høyden. Naboene er x − 1 og x + 1. ----------
  // Lokal topp med flatt platå i x = 3–4, shoulder i x = 6–7, global maximum i x = 11.
  const LANDSKAP = [1, 3, 5, 6, 6, 3, 5, 5, 7, 9, 10, 12, 11, 8, 6, 4];
  const landskap = (y, st) => ({
    retning: false,
    noder: y.map((v, i) => ({ id: "x" + i, x: i * 90, y: -v * 40, tekst: String(v), under: "x=" + i, tilstand: st[i] || (v === Math.max(...y) ? "mal" : "ny") })),
    kanter: y.slice(1).map((_, i) => ({ fra: "x" + i, til: "x" + (i + 1) }))
  });
  const landskapP = y => ({
    verdi: s => y[s],
    naboer: s => [s - 1, s + 1].filter(t => t >= 0 && t < y.length).map(t => ({ s: t, v: y[t] })),
    mal: s => y[s] === Math.max(...y),
    navn: s => `x = ${s} (verdi ${y[s]})`
  });

  // ---------- 8-dronninger: streng med ett siffer per kolonne, sifferet er raden (rad 1 nederst). ----------
  const hQ = q => {
    let h = 0;
    for (let i = 0; i < q.length; i++) for (let j = i + 1; j < q.length; j++) if (q[i] === q[j] || Math.abs(q[i] - q[j]) === j - i) h++;
    return h;
  };
  const hS = s => hQ([...s].map(Number));
  // Naboer i rekkefølgen kolonne 1–8, rad 1–8. Steepest ascent tar første beste, altså lavest kolonne og så lavest rad.
  const dronningP = {
    verdi: s => -hS(s),
    naboer: s => {
      const ut = [];
      for (let c = 0; c < s.length; c++) for (let r = 1; r <= s.length; r++) if (r !== +s[c]) {
        const t = s.slice(0, c) + r + s.slice(c + 1);
        ut.push({ s: t, v: -hS(t), c: c + 1, r });
      }
      return ut;
    },
    mal: s => hS(s) === 0,
    navn: s => `${s} (h = ${hS(s)})`
  };
  const brett = (s, nb, valgt, beste) => {
    const n = s.length, noder = [];
    const hv = {};
    (nb || []).forEach(x => (hv[`${x.c},${x.r}`] = -x.v));
    for (let c = 1; c <= n; c++) for (let r = n; r >= 1; r--) {
      const d = +s[c - 1] === r, k = `${c},${r}`;
      noder.push({
        id: `k${c}r${r}`, x: (c - 1) * 90, y: (n - r) * 90, tekst: d ? "D" : hv[k] != null ? String(hv[k]) : "",
        form: d ? "blad" : "sirkel", under: r === 1 ? "k" + c : undefined,
        tilstand: d ? "utvidet" : valgt === k ? "aktiv" : beste && beste.has(k) ? "grense" : "ny"
      });
    }
    return { retning: false, noder, kanter: [] };
  };

  // Steepest-ascent hill climbing på et problem {verdi, naboer}. Like gode naboer: tie[steg] velger blant dem
  // (fast «tilfeldig» valg), ellers den første i naboer-rekkefølgen.
  function klatr(p, s, side, maks, tie = []) {
    const steg = [{ s, v: p.verdi(s) }];
    let n = 0;
    const tak = Math.min(5000, Math.max(500, maks + 50)); // nok til at sidestegsgrensen rekker å slå inn
    // Høyst tak trekk; tilstanden etter det siste trekket sjekkes også, så en grense som nås nøyaktig der, gjelder.
    for (let i = 0; i <= tak; i++) {
      const cur = steg[steg.length - 1], nb = p.naboer(cur.s);
      cur.nb = nb;
      if (!nb.length) return (cur.slutt = "ingen naboer"), steg;
      const bv = Math.max(...nb.map(x => x.v));
      cur.like = nb.filter(x => x.v === bv);
      const best = (cur.best = cur.like[Math.min(tie[i] || 0, cur.like.length - 1)]);
      const opp = best.v > cur.v, sidelengs = side && best.v === cur.v && n < maks;
      if (!opp && !sidelengs) return (cur.slutt = best.v < cur.v ? "topp" : side ? "grense" : "flat"), steg;
      if (i === tak) break;
      if (opp) { n = 0; steg.push({ s: best.s, v: best.v, trekk: "opp", fra: best }); }
      else { n++; steg.push({ s: best.s, v: best.v, trekk: "side", fra: best, n }); }
    }
    steg[steg.length - 1].slutt = "avbrutt"; // søket ville gått videre: animasjonen stopper her uten svar
    return steg;
  }

  A.legg({
    id: "hill-climbing",
    navn: "Hill climbing (steepest ascent), sideways moves og random restart",
    familie: "Lokalt søk",
    ep: "E04",
    kort: "Steepest-ascent hill climbing ser på alle naboene og går til den beste, men bare hvis den er <i>strengt</i> bedre enn tilstanden søket står i. Søket husker bare én tilstand og bruker nesten ikke minne, men det stopper på en local maximum, et platå eller en shoulder. <i>Sideways moves</i> tillater like gode trekk (med en grense på antall sidesteg på rad), og <i>random restart</i> starter på nytt fra en ny tilstand til et mål er funnet.",
    punkter: [
      "Stopper når ingen nabo er strengt bedre. På en shoulder stopper den selv om det går oppover lenger borte.",
      "8-dronninger: h = antall par som angriper hverandre, også når en annen dronning står imellom. 8 · 7 = 56 naboer.",
      "Bokas tall fra tilfeldige brett: 14 % løses, 86 % setter seg fast. Med inntil 100 sidesteg på rad løses 94 %.",
      "Random restart er complete med sannsynlighet 1. Lykkes hver klatring med sannsynlighet p, trengs i snitt 1/p forsøk (p = 0,14 gir ≈ 7,1).",
      "Med h som kostnad leter du etter global <i>minimum</i>. Figur 4.3(a) har h = 1 og alle naboer ≥ 2: en local minimum."
    ],
    data: null,
    valg: [
      { id: "sideways", navn: "Sideways moves", type: "bool", std: false },
      { id: "maks", navn: "Maks sidesteg på rad", type: "tall", std: 4 },
      { id: "restart", navn: "Random restart (neste start i lista)", type: "bool", std: false }
    ],
    eksempler: [
      { navn: "Landskap (illustrasjon): start i x = 0", data: { type: "landskap", y: LANDSKAP, start: [0, 6, 13] } },
      { navn: "Landskap: shoulder i x = 6–7, med sideways moves", data: { type: "landskap", y: LANDSKAP, start: [6] }, valg: { sideways: true, maks: 4 } },
      { navn: "Landskap: random restart", data: { type: "landskap", y: LANDSKAP, start: [0, 6, 13] }, valg: { restart: true } },
      // likhet: fast valg blant like gode trekk, slik at klatringen følger videoen (E04) fra figur 4.3(b) til 4.3(a).
      { navn: "8-dronninger, bokas figur 4.3(b) → 4.3(a)", data: { type: "dronninger", start: ["43254323", "34153323"], likhet: [[0, 1, 2, 0, 0]] } },
      { navn: "8-dronninger med random restart", data: { type: "dronninger", start: ["43254323", "34153323"], likhet: [[0, 1, 2, 0, 0]] }, valg: { restart: true } }
    ],
    kjor(data, valg = {}) {
      const q = data.type === "dronninger", p = q ? dronningP : landskapP(data.y);
      const side = !!valg.sideways, maks = Math.max(0, Math.floor(+valg.maks || 0));
      const starter = valg.restart ? data.start : data.start.slice(0, 1);
      const sc = [], hist = [];
      const histTab = () => tab("Klatringen", ["Forsøk", "Steg", q ? "Brett" : "x", q ? "h" : "Verdi", "Trekk"], hist.map(r => r.slice()), [hist.length - 1]);
      const kurve = () => (q ? { tittel: "h underveis", x: hist.map((_, i) => i), y: hist.map(r => +r[3]), marker: hist.length - 1 } : undefined);
      let besokt = new Set();
      for (let f = 0; f < starter.length; f++) {
        const tie = (data.likhet || [])[f] || [];
        const steg = klatr(p, starter[f], side, maks, tie);
        steg.forEach((s, i) => {
          const trekk = !i ? (f ? "restart" : "start") : s.trekk === "side" ? `sidesteg ${s.n}` : q ? `kolonne ${s.fra.c}: rad ${steg[i - 1].s[s.fra.c - 1]} → ${s.fra.r}` : "opp";
          hist.push([String(f + 1), String(i), q ? s.s : String(s.s), q ? String(-s.v) : String(s.v), trekk]);
          let tekst;
          if (s.slutt) {
            const grunn = { topp: "Alle naboene er dårligere", flat: "Ingen nabo er strengt bedre (de beste er like gode)", grense: `Grensen på ${maks} sidesteg på rad er nådd`, "ingen naboer": "Tilstanden har ingen naboer", avbrutt: `Animasjonen stopper etter ${i} trekk` }[s.slutt];
            tekst = p.mal(s.s)
              ? `${p.navn(s.s)}: dette er et mål${q ? " (h = 0)" : ", global maximum"}. ${grunn}, så søket stopper med en løsning.`
              : s.slutt === "avbrutt" ? `${p.navn(s.s)}. ${grunn}. Søket ville gått videre, så animasjonen viser ikke hvor det stopper.` : `${p.navn(s.s)}. ${grunn}, så hill climbing stopper ${s.slutt === "topp" ? (q ? "i en local minimum for h" : "i en local maximum") : "på et platå (en flat topp eller en shoulder)"}, ikke i et mål.`;
            if (!i) tekst = (f ? "Ny «tilfeldig» start (fast i eksempelet): " : "Start: ") + tekst;
          } else {
            const nesteS = steg[i + 1];
            const besteTekst = q ? `Beste nabo har h = ${-s.best.v}${s.like.length > 1 ? ` (${s.like.length} like gode, markert)` : ""}` : `Naboene: ${s.nb.map(x => `x = ${x.s} (${x.v})`).join(", ")}`;
            tekst = `${i ? "" : f ? "Ny «tilfeldig» start (fast i eksempelet): " : "Start: "}${p.navn(s.s)}. ${besteTekst}. ` +
              (nesteS.trekk === "side"
                ? `Ingen er strengt bedre, men sideways moves tillater et like godt trekk til ${q ? nesteS.s : "x = " + nesteS.s} (sidesteg ${nesteS.n} av maks ${maks}).`
                : q ? `Flytter dronningen i kolonne ${nesteS.fra.c} fra rad ${s.s[nesteS.fra.c - 1]} til rad ${nesteS.fra.r}${s.like.length > 1 ? ` (${tie.length ? "fast «tilfeldig» valg" : "lavest kolonne, så lavest rad"} blant de like gode)` : ""}.`
                    : `Går til den beste, x = ${nesteS.s} (verdi ${nesteS.v} > ${s.v}).`);
          }
          if (q) {
            const best = new Set((s.like || []).map(x => `${x.c},${x.r}`));
            const nesteS = steg[i + 1];
            sc.push({ tekst, graf: brett(s.s, s.nb, nesteS && nesteS.fra ? `${nesteS.fra.c},${nesteS.fra.r}` : null, best), tabeller: [histTab()], kurve: kurve() });
          } else {
            const st = {};
            besokt.forEach(x => (st[x] = "utvidet"));
            (s.nb || []).forEach(x => (st[x.s] = "grense"));
            st[s.s] = s.slutt && p.mal(s.s) ? "sti" : s.slutt ? "feil" : "aktiv";
            besokt.add(s.s);
            sc.push({ tekst, graf: landskap(data.y, st), tabeller: [histTab()] });
          }
        });
        const slutt = steg[steg.length - 1];
        if (p.mal(slutt.s)) break;
        if (f === starter.length - 1 && valg.restart) sc[sc.length - 1].tekst += " Ingen flere starter i lista.";
        else if (valg.restart) sc[sc.length - 1].tekst += " Random restart: prøver fra en ny start.";
        else if (!valg.restart) sc[sc.length - 1].tekst += " Slå på random restart for å prøve fra en ny start.";
        besokt = new Set();
      }
      return sc;
    },
    svar(data, valg = {}) {
      const q = data.type === "dronninger", p = q ? dronningP : landskapP(data.y);
      const starter = valg.restart ? data.start : data.start.slice(0, 1);
      let s;
      for (const [f, s0] of starter.entries()) {
        const st = klatr(p, s0, !!valg.sideways, Math.max(0, Math.floor(+valg.maks || 0)), (data.likhet || [])[f] || []);
        s = st[st.length - 1].s;
        if (st[st.length - 1].slutt === "avbrutt") return [];
        if (p.mal(s)) break;
      }
      return [{ id: "slutt", navn: q ? "Brettet søket stopper i" : "Tilstanden søket stopper i (x)", verdi: String(s) }, { id: "verdi", navn: q ? "h der" : "Verdi der", verdi: String(q ? hS(s) : data.y[s]) }];
    }
  });

  // ---------- Simulated annealing ----------
  function sa(d) {
    const y = d.y, steg = [];
    let s = d.start;
    for (let t = 1; ; t++) {
      const T = t <= d.T.length ? d.T[t - 1] : 0;
      if (T <= 0 || t > d.nabo.length + 1) { steg.push({ t, T: 0, s }); return steg; }
      let n = s + d.nabo[t - 1];
      if (n < 0 || n >= y.length) n = s - d.nabo[t - 1];
      const dE = y[n] - y[s], P = dE >= 0 ? 1 : Math.exp(dE / T), r = d.r[t - 1];
      const ok = dE > 0 || r < P;
      steg.push({ t, T, s, n, dE, P, r, ok });
      if (ok) s = n;
    }
  }

  A.legg({
    id: "simulated-annealing",
    navn: "Simulated annealing",
    familie: "Lokalt søk",
    ep: "E04",
    kort: "Simulated annealing velger en <i>tilfeldig</i> nabo. Er den bedre, går søket dit. Er den verre, går søket dit med sannsynlighet P = e<sup>ΔE/T</sup>, der ΔE = verdi(neste) − verdi(nå) er negativ. Temperaturen T synker etter en schedule: høy T gir utforskning, lav T gir vanlig klatring, og T = 0 avslutter. Her ligger nabovalgene og tallene r fast, og trekket godtas når r &lt; P.",
    punkter: [
      "Fortegnet: med ΔE = verdi(neste) − verdi(nå) er P = e<sup>ΔE/T</sup>. Forelesning 3 skriver e<sup>−ΔE/T</sup> med ΔE = økning i kostnad. Eksponenten skal alltid være ≤ 0, så P ≤ 1. Skriv hvilken konvensjon du bruker.",
      "Like godt trekk: ΔE = 0 gir P = e<sup>0</sup> = 1, så trekket tas alltid.",
      "Det er forholdet forverring/T som teller: e<sup>−1/1</sup> = e<sup>−4/4</sup> ≈ 0,37.",
      "SA velger en tilfeldig nabo, ikke den beste. Synker T sakte nok, finner søket globalt optimum med sannsynlighet som går mot 1."
    ],
    data: null,
    eksempler: [
      {
        navn: "Landskap (illustrasjon): ut av den lokale toppen i x = 3",
        data: { y: LANDSKAP, start: 3, T: [10, 10, 4, 4, 4, 2, 2, 1, 1, 1, 1, 0], nabo: [1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1], r: [0.9, 0.52, 0.3, 0.83, 0.1, 0.2, 0.6, 0.4, 0.7, 0.05, 0.66] }
      },
      {
        navn: "Samme start, kald fra begynnelsen (T = 1)",
        data: { y: LANDSKAP, start: 3, T: [1, 1, 1, 1, 1, 1, 0], nabo: [1, 1, -1, -1, 1, 1], r: [0.5, 0.52, 0.3, 0.83, 0.1, 0.2] }
      }
    ],
    kjor(d) {
      const y = d.y, steg = sa(d), sc = [], rader = [];
      const besokt = new Set([d.start]);
      const graf = (s, n, ok) => {
        const st = {};
        besokt.forEach(x => (st[x] = "utvidet"));
        if (n != null) st[n] = ok ? "grense" : "feil";
        st[s] = "aktiv";
        return landskap(y, st);
      };
      const kurve = () => ({ tittel: "Verdi underveis", x: [0, ...rader.map((_, i) => i + 1)], y: [y[d.start], ...rader.map(r => +r[7])], marker: rader.length });
      const topp = [d.start - 1, d.start + 1].every(t => y[t] == null || y[t] <= y[d.start]);
      sc.push({ tekst: `Start i x = ${d.start} (verdi ${y[d.start]})${topp ? ", en lokal topp" : ""}. Schedule: T = ${d.T.map(t => tall(t)).join(", ")}.`, graf: graf(d.start), tabeller: [tab("Steg", ["t", "T", "Nabo", "ΔE", "P = e^(ΔE/T)", "r", "Resultat", "Verdi"], [])], kurve: kurve() });
      for (const s of steg) {
        if (s.T === 0) {
          sc.push({ tekst: `t = ${s.t}: T = 0, så søket returnerer x = ${s.s} (verdi ${y[s.s]})${y[s.s] === Math.max(...y) ? ", global maximum" : ""}.`, graf: graf(s.s), tabeller: [tab("Steg", ["t", "T", "Nabo", "ΔE", "P = e^(ΔE/T)", "r", "Resultat", "Verdi"], rader.map(r => r.slice()), [])], kurve: kurve() });
          break;
        }
        const ny = s.ok ? s.n : s.s;
        rader.push([String(s.t), tall(s.T), `${s.s} → ${s.n}`, tall(s.dE), s.dE > 0 ? "bedre" : tall(s.P), tall(s.r), s.ok ? "godtar" : "avviser", String(y[ny])]);
        const dEt = `ΔE = ${y[s.n]} − ${y[s.s]} = ${tall(s.dE)}`;
        const tekst = `t = ${s.t}, T = ${tall(s.T)}: tilfeldig nabo x = ${s.n}. ${dEt}. ` +
          (s.dE > 0 ? "Bedre, så søket går dit."
            : s.dE === 0 ? `Like godt: P = e<sup>0</sup> = 1, så trekket tas.`
            : `Verre: P = e<sup>${tall(s.dE)}/${tall(s.T)}</sup> = ${tall(s.P, 2)}. r = ${tall(s.r)} ${s.ok ? "&lt;" : "≥"} ${tall(s.P, 2)}, så trekket ${s.ok ? "godtas" : "avvises og søket blir stående"}.`);
        sc.push({ tekst, graf: graf(ny, s.n, s.ok), tabeller: [tab("Steg", ["t", "T", "Nabo", "ΔE", "P = e^(ΔE/T)", "r", "Resultat", "Verdi"], rader.map(r => r.slice()), [rader.length - 1])], kurve: kurve() });
        besokt.add(ny);
      }
      return sc;
    },
    svar(d) {
      const st = sa(d), s = st[st.length - 1].s;
      return [{ id: "slutt", navn: "Tilstanden som returneres (x)", verdi: String(s) }, { id: "godtatt", navn: "Verre trekk som ble godtatt (t)", verdi: st.filter(x => x.dE < 0 && x.ok).map(x => x.t).join(", ") || "ingen" }];
    }
  });

  // ---------- Local beam search ----------
  function beam(y, start) {
    const k = start.length, mal = Math.max(...y), steg = [];
    let cur = [...new Set(start)];
    if (cur.some(s => y[s] === mal)) return [{ cur, funnet: cur.find(s => y[s] === mal) }];
    for (let i = 0; i < 30; i++) {
      const etter = [...new Set(cur.flatMap(s => [s - 1, s + 1]).filter(t => t >= 0 && t < y.length))].sort((a, b) => y[b] - y[a] || a - b);
      const funnet = etter.find(s => y[s] === mal);
      const valgt = etter.slice(0, k);
      steg.push({ cur, etter, valgt, funnet });
      if (funnet != null || !etter.length) return steg;
      cur = valgt;
    }
    return steg;
  }

  A.legg({
    id: "local-beam",
    navn: "Local beam search",
    familie: "Lokalt søk",
    ep: "E04",
    kort: "Local beam search holder k tilstander i stedet for én. I hvert steg lages alle etterfølgerne til alle k tilstandene. Er én av dem et mål, stopper søket. Ellers beholdes de k beste av hele lista. Innsatsen flyttes dermed dit det går best, så det er ikke det samme som k uavhengige hill climbing-søk. Her er k antall starttilstander, og målet er den globale toppen.",
    punkter: [
      "Ikke k parallelle restarter: de k beste velges blant <i>alle</i> etterfølgerne samlet.",
      "Faren er at alle k klumper seg på samme topp. <i>Stochastic beam search</i> velger etterfølgerne tilfeldig, vektet med verdien.",
      "Ikke det samme som beam search i A*-sammenheng (E03), der frontier begrenses til k noder.",
      "Står i boka (4.1.3), men ble ikke forelest."
    ],
    data: null,
    eksempler: [
      { navn: "Landskap (illustrasjon), k = 2: start i x = 0 og x = 5", data: { y: LANDSKAP, start: [0, 5] } },
      { navn: "Landskap, k = 3: start i x = 0, 5 og 15", data: { y: LANDSKAP, start: [0, 5, 15] } }
    ],
    kjor(d) {
      const y = d.y, steg = beam(y, d.start), sc = [], k = d.start.length;
      const g = (cur, etter = [], valgt = [], funnet) => {
        const st = {};
        etter.forEach(s => (st[s] = "grense"));
        cur.forEach(s => (st[s] = "utvidet"));
        valgt.forEach(s => (st[s] = "aktiv"));
        if (funnet != null) st[funnet] = "sti";
        return landskap(y, st);
      };
      sc.push({ tekst: `Start med k = ${k} tilstander: ${d.start.map(s => `x = ${s} (${y[s]})`).join(", ")}.`, graf: g([], [], d.start) });
      if (steg.length && steg[0].funnet != null && !steg[0].etter) {
        sc.push({ tekst: `x = ${steg[0].funnet} er allerede målet.`, graf: g([], [], [], steg[0].funnet) });
        return sc;
      }
      steg.forEach((s, i) => {
        const liste = tab(`Etterfølgere i steg ${i + 1}, sortert`, ["x", "Verdi", "Beholdes"], s.etter.map(x => [String(x), String(y[x]), s.valgt.includes(x) ? "ja" : ""]), s.etter.map((x, j) => (s.valgt.includes(x) ? j : -1)).filter(j => j >= 0));
        const tekst = `Steg ${i + 1}: etterfølgerne til {${s.cur.join(", ")}} er ${s.etter.map(x => `${x} (${y[x]})`).join(", ")}. ` +
          (s.funnet != null ? `x = ${s.funnet} har verdi ${y[s.funnet]}, den globale toppen, så søket stopper.` : `De ${k} beste beholdes: {${s.valgt.join(", ")}}.`);
        sc.push({ tekst, graf: g(s.cur, s.etter, s.funnet != null ? [] : s.valgt, s.funnet), tabeller: [liste] });
      });
      const slutt = steg[steg.length - 1];
      if (slutt && slutt.funnet == null) sc[sc.length - 1].tekst += " Stopper uten å finne toppen.";
      const p = landskapP(y);
      const hc = d.start.map(s0 => { const st = klatr(p, s0, false, 0); return `fra x = ${s0} stopper i x = ${st[st.length - 1].s} (${y[st[st.length - 1].s]})`; });
      sc.push({ tekst: `Til sammenligning: hill climbing hver for seg ${hc.join(", ")}. Beam search flytter innsatsen dit det går best.`, graf: g([], [], [], slutt && slutt.funnet) });
      return sc;
    },
    svar(d) {
      const steg = beam(d.y, d.start), s = steg[steg.length - 1];
      return [{ id: "steg", navn: "Antall steg til toppen", verdi: s.funnet != null ? String(s.etter ? steg.length : 0) : "ikke funnet" }];
    }
  });

  // ---------- Genetisk algoritme (bokas figur 4.6, 8-dronninger) ----------
  const fit = s => 28 - hS(s);
  function ga(d) {
    const f = d.pop.map(fit), sum = f.reduce((a, b) => a + b, 0);
    const kum = f.map((_, i) => f.slice(0, i + 1).reduce((a, b) => a + b, 0) / sum);
    const trekk = r => kum.findIndex(c => r < c);
    const par = d.kutt.map((c, i) => {
      const a = trekk(d.r[2 * i]), b = trekk(d.r[2 * i + 1]);
      const p1 = d.pop[a], p2 = d.pop[b];
      const barn = [p1.slice(0, c) + p2.slice(c), p2.slice(0, c) + p1.slice(c)];
      return { a, b, c, p1, p2, barn };
    });
    const barn = par.flatMap(p => p.barn);
    const mut = barn.map((s, i) => {
      const m = d.mut[i];
      return m ? s.slice(0, m[0] - 1) + m[1] + s.slice(m[0]) : s;
    });
    return { f, sum, kum, par, barn, mut };
  }

  A.legg({
    id: "genetisk",
    navn: "Genetic algorithm (GA)",
    familie: "Lokalt søk",
    ep: "E04",
    kort: "En genetisk algoritme holder en populasjon av individer, her 8-dronningbrett skrevet som åtte sifre (siffer c er raden til dronningen i kolonne c). Foreldre trekkes med sannsynlighet proporsjonal med fitness, krysses ved et crossover-punkt, og barna muteres av og til. De tilfeldige valgene ligger fast, som i bokas figur 4.6.",
    punkter: [
      "Fitness = antall par som <i>ikke</i> angriper hverandre = 28 − h. En løsning har fitness 28.",
      "Seleksjonsandelen er fitness delt på <b>summen</b> av fitness (her 78), ikke på 28.",
      "Crossover etter siffer c: barn 1 = forelder 1 før kuttet + forelder 2 etter, barn 2 omvendt. Figur 4.8 lager ett barn per par, figur 4.6 to.",
      "Mutation kan gjøre et barn dårligere (21 → 18). Mutation gjør små steg, crossover store.",
      "Mixing number ρ = antall foreldre per barn. ρ = 1 er stochastic beam search."
    ],
    data: null,
    eksempler: [
      { navn: "Bokas figur 4.6", data: { pop: ["24748552", "32752411", "24415124", "32543213"], r: [0.45, 0.12, 0.55, 0.7], kutt: [3, 5], mut: [[6, 1], null, [3, 2], [8, 7]] } },
      { navn: "Øv selv E04 nr. 2: 24748552 × 32543213 etter fjerde siffer", data: { pop: ["24748552", "32543213"], r: [0.3, 0.9], kutt: [4], mut: [null, null] } }
    ],
    kjor(d) {
      const g = ga(d), sc = [], n = d.pop.length;
      const X = [0, 260, 520, 780];
      const pst = g.f.map(f => `${Math.round((100 * f) / g.sum)} %`);
      const noder = [], kanter = [];
      const vis = (kol, st = {}) => ({
        retning: true,
        noder: noder.filter(x => x.kol <= kol).map(x => ({ id: x.id, x: x.x, y: x.y, form: "boks", tekst: x.tekst, under: x.under, tilstand: st[x.id] || "ny" })),
        kanter: kanter.filter(k => k.kol <= kol).map(k => ({ fra: k.fra, til: k.til, tilstand: st[k.til] === "aktiv" ? "aktiv" : "ny" }))
      });
      const popTab = (medAndel, marker = []) => tab("Populasjon", ["Individ", "h", "Fitness"].concat(medAndel ? ["Andel", "Intervall for r"] : []),
        d.pop.map((s, i) => [s, String(hS(s)), String(g.f[i])].concat(medAndel ? [`${g.f[i]}/${g.sum} = ${pst[i]}`, `[${tall(i ? g.kum[i - 1] : 0, 3)}, ${tall(g.kum[i], 3)})`] : [])), marker);
      d.pop.forEach((s, i) => noder.push({ id: "a" + i, kol: 0, x: X[0], y: i * 90, tekst: s, under: "" }));
      sc.push({ tekst: `Startpopulasjon med ${n} individer. Hvert siffer er raden til dronningen i sin kolonne (rad 1 nederst).`, graf: vis(0), tabeller: [popTab(false)] });
      noder.forEach(x => (x.under = `fitness ${g.f[+x.id.slice(1)]}`));
      sc.push({ tekst: `Fitness = 28 − h, antall par som ikke angriper hverandre. ${d.pop.map((s, i) => `${s}: h = ${hS(s)}, fitness ${g.f[i]}`).join("; ")}.`, graf: vis(0), tabeller: [popTab(false)] });
      noder.forEach((x, i) => (x.under = `${g.f[i]} · ${pst[i]}`));
      sc.push({ tekst: `Seleksjonsandel = fitness / summen ${g.sum}. ${d.pop.map((s, i) => `${g.f[i]}/${g.sum} ≈ ${pst[i]}`).join(", ")}. Hvert individ får et intervall av [0, 1), og et tilfeldig tall r velger den som eier intervallet.`, graf: vis(0), tabeller: [popTab(true)] });
      g.par.forEach((p, i) => {
        [p.a, p.b].forEach((k, j) => {
          const id = `c${2 * i + j}`;
          noder.push({ id, kol: 1, x: X[1], y: (2 * i + j) * 90, tekst: d.pop[k], under: `r = ${tall(d.r[2 * i + j])}` });
          kanter.push({ fra: "a" + k, til: id, kol: 1 });
        });
        sc.push({ tekst: `Seleksjon, par ${i + 1}: r = ${tall(d.r[2 * i])} gir ${p.p1}, og r = ${tall(d.r[2 * i + 1])} gir ${p.p2}.`, graf: vis(1, { ["c" + 2 * i]: "aktiv", ["c" + (2 * i + 1)]: "aktiv" }), tabeller: [popTab(true, [p.a, p.b])] });
      });
      const ubrukt = d.pop.filter((_, i) => !g.par.some(p => p.a === i || p.b === i));
      if (ubrukt.length) sc[sc.length - 1].tekst += ` ${ubrukt.join(" og ")} ble ikke trukket.`;
      g.par.forEach((p, i) => {
        p.barn.forEach((b, j) => {
          const id = `d${2 * i + j}`;
          noder.push({ id, kol: 2, x: X[2], y: (2 * i + j) * 90, tekst: b.slice(0, p.c) + "|" + b.slice(p.c), under: `fitness ${fit(b)}` });
          kanter.push({ fra: `c${2 * i + j}`, til: id, kol: 2 });
        });
        sc.push({ tekst: `Crossover, par ${i + 1}, kutt etter siffer ${p.c}: ${p.p1.slice(0, p.c)}|${p.p1.slice(p.c)} × ${p.p2.slice(0, p.c)}|${p.p2.slice(p.c)} gir ${p.barn[0]} (fitness ${fit(p.barn[0])}) og ${p.barn[1]} (fitness ${fit(p.barn[1])}).`,
          graf: vis(2, { ["d" + 2 * i]: "aktiv", ["d" + (2 * i + 1)]: "aktiv" }),
          tabeller: [tab("Barn", ["Forelder 1", "Forelder 2", "Kutt", "Barn", "Fitness"], g.par.slice(0, i + 1).flatMap(q => q.barn.map((b, j) => [j ? q.p2 : q.p1, j ? q.p1 : q.p2, String(q.c), b, String(fit(b))])))] });
      });
      const mtekst = g.barn.map((b, i) => (d.mut[i] ? `${b} → ${g.mut[i]} (siffer ${d.mut[i][0]}: ${b[d.mut[i][0] - 1]} → ${d.mut[i][1]}, fitness ${fit(b)} → ${fit(g.mut[i])})` : `${b} uendret`));
      g.mut.forEach((m, i) => {
        noder.push({ id: "e" + i, kol: 3, x: X[3], y: i * 90, tekst: m, under: `fitness ${fit(m)}` });
        kanter.push({ fra: "d" + i, til: "e" + i, kol: 3 });
      });
      const mst = {};
      g.mut.forEach((m, i) => (mst["e" + i] = d.mut[i] ? "aktiv" : "ny"));
      const mutTab = tab("Ny populasjon", ["Barn", "Etter mutation", "Fitness før → etter"], g.barn.map((b, i) => [b, g.mut[i], `${fit(b)} → ${fit(g.mut[i])}`]));
      sc.push({ tekst: d.mut.some(Boolean) ? `Mutation med liten sannsynlighet: ${mtekst.join("; ")}.` : "Ingen mutation i dette eksempelet.", graf: vis(3, mst), tabeller: [mutTab] });
      const best = g.mut.reduce((b, m) => (fit(m) > fit(b) ? m : b), g.mut[0]);
      const bst = {};
      g.mut.forEach((m, i) => (bst["e" + i] = m === best ? "sti" : "utvidet"));
      sc.push({ tekst: `Neste generasjon er ${g.mut.join(", ")}. Beste individ: ${best} med fitness ${fit(best)}${fit(best) === 28 ? " (en løsning)" : ` (h = ${hS(best)}, ikke en løsning ennå)`}.`, graf: vis(3, bst), tabeller: [mutTab] });
      return sc;
    },
    svar(d) {
      const g = ga(d);
      return [
        { id: "fitness", navn: "Fitness i startpopulasjonen", verdi: g.f.join(", ") },
        { id: "barn", navn: "Barn etter crossover", verdi: g.barn.join(", ") },
        { id: "ny", navn: "Ny populasjon etter mutation", verdi: g.mut.join(", ") }
      ];
    }
  });

  // ---------- Støvsugerverdenen (Fig. 4.9) ----------
  // s = 1 + robot til høyre + 2·(høyre ren) + 4·(venstre ren). Mål: 7 og 8.
  const dek = s => ({ pos: (s - 1) & 1, rc: ((s - 1) >> 1) & 1, lc: ((s - 1) >> 2) & 1 });
  const enk = (pos, lc, rc) => 1 + pos + 2 * rc + 4 * lc;
  const MAL = s => s === 7 || s === 8;
  function results(s, a, verden) {
    const { pos, lc, rc } = dek(s);
    let ut;
    if (a === "Right" || a === "Left") {
      const p = a === "Right" ? 1 : 0;
      ut = verden === "slippery" && pos !== p ? [s, enk(p, lc, rc)] : [enk(p, lc, rc)];
    } else {
      const ren = enk(pos, pos ? lc : 1, pos ? 1 : rc);
      const skitten = pos ? !rc : !lc;
      if (verden !== "erratic") ut = [ren];
      else ut = skitten ? [ren, enk(pos, 1, 1)] : [s, enk(pos, pos ? lc : 0, pos ? 0 : rc)];
    }
    return [...new Set(ut)].sort((x, y) => x - y);
  }
  const percept = s => { const { pos, lc, rc } = dek(s); return `[${pos ? "R" : "L"}, ${(pos ? rc : lc) ? "Clean" : "Dirty"}]`; };
  const VERDEN = { det: "deterministisk", erratic: "erratic (Suck kan rense eller skitne til mer)", slippery: "slippery (Right/Left kan glippe)" };
  const tilstandTab = verden => tab("Tilstandene (Fig. 4.9)", ["s", "Robot", "Venstre", "Høyre", "Percept", "RESULTS(s, Suck)", "RESULTS(s, Right)"],
    [1, 2, 3, 4, 5, 6, 7, 8].map(s => { const { pos, lc, rc } = dek(s); return [String(s), pos ? "R" : "L", lc ? "ren" : "skitten", rc ? "ren" : "skitten", percept(s), mengde(results(s, "Suck", verden)), mengde(results(s, "Right", verden))]; }));
  const planTekst = (p, ord) => "[" + p.map(x => (typeof x === "string" ? x : x.hvis.map(([s, q], i) => (i < x.hvis.length - 1 ? `if ${ord} = ${s} then ${q.length === 1 && typeof q[0] === "string" ? q[0] : planTekst(q, ord)} else ` : planTekst(q, ord))).join(""))).join(", ") + "]";

  // AND-OR-SEARCH (Fig. 4.11). Bygger hele det utforskede treet og en hendelsesliste.
  function andOr(d) {
    let k = 0;
    const ev = [], rot = { id: "o0", or: true, s: d.start, barn: [] };
    const orS = (n, sti) => {
      ev.push({ t: "or", n, sti });
      if (MAL(n.s)) return (n.st = "mal"), ev.push({ t: "mal", n }), [];
      if (sti.includes(n.s)) return (n.st = "feil"), ev.push({ t: "sykel", n, sti }), null;
      for (const a of d.handlinger) {
        const and = { id: "a" + ++k, or: false, a, res: results(n.s, a, d.verden), barn: [] };
        n.barn.push(and);
        ev.push({ t: "prov", n, and });
        const plan = andS(and, [n.s, ...sti]);
        if (plan) return (n.st = "ok"), (n.valgt = and), (n.plan = [a, ...plan]), ev.push({ t: "ok", n }), n.plan;
        and.st = "feil";
      }
      return (n.st = "feil"), ev.push({ t: "fail", n }), null;
    };
    const andS = (and, sti) => {
      const planer = [];
      for (const s of and.res) {
        const c = { id: "o" + ++k, or: true, s, barn: [] };
        and.barn.push(c);
        const p = orS(c, sti);
        if (!p) return ev.push({ t: "andfail", and, c }), null;
        planer.push([s, p]);
      }
      and.st = "ok";
      return planer.length === 1 ? planer[0][1] : [{ hvis: planer }];
    };
    const plan = orS(rot, []);
    return { rot, ev, plan };
  }

  A.legg({
    id: "and-or",
    navn: "AND-OR search (ikke-deterministiske handlinger)",
    familie: "Lokalt søk",
    ep: "E05",
    kort: "AND-OR-søk lager en <i>conditional plan</i> når handlingene kan ha flere utfall. I en OR-node (sirkel, en tilstand) velger agenten én handling, og én som virker holder. En AND-node (boks, mengden RESULTS(s, a)) er utfallene miljøet velger, og <i>alle</i> må løses. Søket går dybde først, og OR-SEARCH gir failure hvis tilstanden allerede står på stien fra roten.",
    punkter: [
      "Failure på en sykel betyr ikke at tilstanden er uløselig: finnes en plan, finnes den fra første besøk.",
      "Planen leses ovenfra: OR-noden gir en handling, AND-noden gir if-then-else.",
      "Erratic Suck: på en skitten rute renses ruta og noen ganger naboruta også; på en ren rute kan det komme skitt.",
      "Slippery vacuum world har ingen asyklisk plan fra 1. Da trengs en cyclic plan: [Suck, while State = 5 do Right, Suck].",
      "Eksamen 2024: AND-OR-søk gir contingency (conditional) plans, ikke «adversive plans»."
    ],
    data: null,
    eksempler: [
      { navn: "Erratic vacuum world fra 1 (Fig. 4.10)", data: { verden: "erratic", start: 1, handlinger: ["Suck", "Right", "Left"] } },
      { navn: "Slippery vacuum world fra 1 (ingen asyklisk plan)", data: { verden: "slippery", start: 1, handlinger: ["Suck", "Right", "Left"] } }
    ],
    kjor(d) {
      const { rot, ev, plan } = andOr(d);
      const tilTre = n => ({ id: n.id, tekst: n.or ? String(n.s) : mengde(n.res), barn: n.barn.map(tilTre) });
      const lay = A.tre(tilTre(rot));
      const alle = {};
      (function g(n) { alle[n.id] = n; n.barn.forEach(g); })(rot);
      lay.noder.forEach(x => { x.x *= 1.3; x.form = alle[x.id].or ? "sirkel" : "boks"; delete x.under; });
      lay.kanter.forEach(k => { const t = alle[k.til]; k.tekst = t.or ? "" : t.a; });
      const synlig = new Set(), st = {}, sc = [];
      const tilstTab = tilstandTab(d.verden);
      const bilde = (tekst, aktiv) => {
        const vis = new Set(synlig);
        sc.push({
          tekst,
          graf: {
            retning: true,
            noder: lay.noder.filter(x => vis.has(x.id)).map(x => ({ ...x, tilstand: x.id === aktiv ? "aktiv" : st[x.id] || "ny", under: st[x.id] === "mal" ? "mål" : st[x.id] === "feil" && alle[x.id].or && alle[x.id].sykel ? "sykel" : undefined })),
            kanter: lay.kanter.filter(k => vis.has(k.til)).map(k => ({ ...k, tilstand: k.til === aktiv ? "aktiv" : st[k.til] === "feil" ? "feil" : st[k.til] === "sti" ? "sti" : "ny" }))
          },
          tabeller: [tilstTab]
        });
      };
      for (const e of ev) {
        if (e.t === "or") {
          synlig.add(e.n.id);
          if (MAL(e.n.s) || e.sti.includes(e.n.s)) continue;
          bilde(`OR(${e.n.s}), sti [${e.sti.join(", ")}]: agenten velger en handling. Prøver i rekkefølgen ${d.handlinger.join(", ")}.`, e.n.id);
        } else if (e.t === "mal") { st[e.n.id] = "mal"; bilde(`${e.n.s} er en måltilstand (begge rutene rene), så planen herfra er [].`, null); }
        else if (e.t === "sykel") { st[e.n.id] = "feil"; e.n.sykel = true; bilde(`${e.n.s} står allerede på stien [${e.sti.join(", ")}], så OR-SEARCH gir failure. Det betyr ikke at ${e.n.s} er uløselig, bare at grenen ikke trengs.`, null); }
        else if (e.t === "prov") { synlig.add(e.and.id); st[e.n.id] = "utvidet"; bilde(`Prøver ${e.and.a} i ${e.n.s}: RESULTS(${e.n.s}, ${e.and.a}) = ${mengde(e.and.res)}. AND-node: ${e.and.res.length > 1 ? "alle utfallene må løses" : "ett utfall"}.`, e.and.id); }
        else if (e.t === "andfail") { st[e.and.id] = "feil"; bilde(`Utfallet ${e.c.s} feilet, så hele AND-noden ${mengde(e.and.res)} feiler: ${e.and.a} virker ikke herfra.`, null); }
        else if (e.t === "ok") { st[e.n.id] = "utvidet"; if (e.n.valgt) st[e.n.valgt.id] = "utvidet"; bilde(`Fra ${e.n.s} virker ${e.n.valgt.a}: delplan ${planTekst(e.n.plan, "State")}.`, e.n.id); }
        else if (e.t === "fail") { st[e.n.id] = "feil"; bilde(`Ingen handling virker fra ${e.n.s}, så OR(${e.n.s}) gir failure.`, null); }
      }
      if (plan) {
        (function m(n) { if (n.or) { if (st[n.id] !== "mal") st[n.id] = "sti"; else st[n.id] = "mal"; if (n.valgt) { st[n.valgt.id] = "sti"; n.valgt.barn.forEach(m); } } })(rot);
        const ikke = rot.barn.length < d.handlinger.length ? ` ${d.handlinger.slice(rot.barn.length).join(" og ")} fra roten ble aldri prøvd.` : "";
        bilde(`Løsning (markert deltre): ${planTekst(plan, "State")}.${ikke}`, null);
      } else bilde(`AND-OR-SEARCH gir failure: det finnes ingen asyklisk plan fra ${d.start}. ${d.verden === "slippery" ? "En cyclic plan prøver på nytt: [Suck, L1: Right, if State = 5 then L1 else Suck]." : ""}`, null);
      return sc;
    },
    svar(d) {
      const { plan } = andOr(d);
      return [{ id: "plan", navn: "Conditional plan", verdi: plan ? planTekst(plan, "State") : "failure" }];
    }
  });

  // ---------- Belief states: sensorless og local sensing (4.4) ----------
  const predict = (b, a, verden) => [...new Set(b.flatMap(s => results(s, a, verden)))].sort((x, y) => x - y);
  const percepter = b => { const m = new Map(); b.forEach(s => { const o = percept(s); m.set(o, [...(m.get(o) || []), s]); }); return [...m]; };
  const malB = b => b.length > 0 && b.every(MAL);

  function lokal(d) {
    let k = 0;
    const rot = { id: "b0", b: d.start.slice().sort((x, y) => x - y), barn: [] }, ev = [];
    let apne = [rot];
    for (const a of d.handlinger) {
      const nye = [];
      for (const n of apne) {
        if (malB(n.b)) continue;
        const pr = { id: "b" + ++k, b: predict(n.b, a, d.verden), a, pred: true, barn: [] };
        n.barn.push(pr);
        ev.push({ t: "pred", n, pr });
        for (const [o, sub] of percepter(pr.b)) { const c = { id: "b" + ++k, b: sub, o, barn: [] }; pr.barn.push(c); nye.push(c); }
        ev.push({ t: "upd", pr });
      }
      apne = nye;
    }
    return { rot, ev };
  }
  const planB = n => {
    if (malB(n.b)) return [];
    if (!n.barn.length) return null;
    const pr = n.barn[0], del = pr.barn.map(c => [mengde(c.b), planB(c)]);
    if (del.some(x => !x[1])) return null;
    return [pr.a, ...(del.length === 1 ? del[0][1] : [{ hvis: del }])];
  };

  A.legg({
    id: "belief-state",
    navn: "Belief states: sensorless og local sensing",
    familie: "Lokalt søk",
    ep: "E05",
    kort: "Ser agenten ingenting, vet den bare hvilken mengde tilstander den kan være i: en <i>belief state</i>. <i>Prediction</i> gir b′ = PREDICT(b, a), alle RESULT(s, a) for s i b (unionen av RESULTS når handlingen er ikke-deterministisk). Med <i>local sensing</i> kommer det så en percept: hver mulig percept gir sin egen belief state (<i>update</i>), og i søket blir det en AND-node.",
    punkter: [
      "Sensorless: løsningen er en <i>sekvens</i>, ikke en betinget plan, for det kommer ingen percept å velge etter. [Right, Suck, Left, Suck] fører {1, …, 8} til {7}.",
      "Prediction kan gjøre mengden større (ikke-deterministiske handlinger). Update kan bare fjerne tilstander.",
      "Mål: <i>alle</i> tilstandene i belief state må være mål.",
      "N fysiske tilstander gir 2<sup>N</sup> belief states. I støvsugerverdenen 2<sup>8</sup> = 256, men bare 12 nås fra {1, …, 8}.",
      "Planen med local sensing tester belief state: [Suck, Right, if Bstate = {6} then Suck else []]."
    ],
    data: null,
    eksempler: [
      { navn: "Sensorless, deterministisk: {1, …, 8} → {7}", data: { modus: "sensorless", verden: "det", start: [1, 2, 3, 4, 5, 6, 7, 8], handlinger: ["Right", "Suck", "Left", "Suck"] } },
      { navn: "Sensorless, erratic Suck fra {1, 3} (Øv selv E05 nr. 5)", data: { modus: "sensorless", verden: "erratic", start: [1, 3], handlinger: ["Suck", "Right"] } },
      { navn: "Sensorless, erratic Suck: mengden vokser", data: { modus: "sensorless", verden: "erratic", start: [5, 7], handlinger: ["Suck"] } },
      { navn: "Local sensing, deterministisk Right fra {1, 3} (Fig. 4.15a)", data: { modus: "lokal", verden: "det", start: [1, 3], handlinger: ["Right"] } },
      { navn: "Local sensing, slippery Right fra {1, 3} (Fig. 4.15b)", data: { modus: "lokal", verden: "slippery", start: [1, 3], handlinger: ["Right"] } },
      { navn: "Local sensing, planen fra {1, 3} (Fig. 4.16)", data: { modus: "lokal", verden: "det", start: [1, 3], handlinger: ["Suck", "Right", "Suck"] } }
    ],
    kjor(d) {
      const sc = [], tt = tilstandTab(d.verden);
      if (d.modus === "sensorless") {
        const kjede = [d.start.slice().sort((x, y) => x - y)];
        d.handlinger.forEach(a => kjede.push(predict(kjede[kjede.length - 1], a, d.verden)));
        const graf = i => ({
          retning: true,
          noder: kjede.slice(0, i + 1).map((b, j) => ({ id: "b" + j, x: j * 300, y: 0, form: "boks", tekst: mengde(b), tilstand: j === i ? (malB(b) ? "mal" : "aktiv") : "utvidet" })),
          kanter: kjede.slice(1, i + 1).map((_, j) => ({ fra: "b" + j, til: "b" + (j + 1), tekst: d.handlinger[j], tilstand: j === i - 1 ? "aktiv" : "ny" }))
        });
        sc.push({ tekst: `Start: agenten vet bare at den er i en av ${mengde(kjede[0])}. Verden: ${VERDEN[d.verden]}.`, graf: graf(0), tabeller: [tt] });
        d.handlinger.forEach((a, i) => {
          const b = kjede[i], b2 = kjede[i + 1];
          const rad = b.map(s => [String(s), mengde(results(s, a, d.verden))]);
          const vekst = b2.length > b.length ? ` Mengden vokste fra ${b.length} til ${b2.length} tilstander.` : "";
          sc.push({
            tekst: `PREDICT(${mengde(b)}, ${a}) = ${b2.length < b.length || b.some(s => results(s, a, d.verden).length > 1) ? "∪ RESULTS(s, " + a + ") = " : ""}${mengde(b2)}.${vekst}${malB(b2) ? " Alle tilstandene er mål, så sekvensen [" + d.handlinger.slice(0, i + 1).join(", ") + "] er en løsning." : ""}`,
            graf: graf(i + 1),
            tabeller: [tab(`RESULTS(s, ${a}) for s i b`, ["s", `RESULTS(s, ${a})`], rad), tt]
          });
        });
        return sc;
      }
      const { rot, ev } = lokal(d);
      const alle = {};
      (function g(n) { alle[n.id] = n; n.barn.forEach(g); })(rot);
      const tilTre = n => ({ id: n.id, tekst: mengde(n.b), barn: n.barn.map(tilTre) });
      const lay = A.tre(tilTre(rot));
      lay.noder.forEach(x => { x.x *= 2.4; x.form = "boks"; delete x.under; });
      lay.kanter.forEach(k => { const t = alle[k.til]; k.tekst = t.pred ? t.a : t.o; });
      const synlig = new Set([rot.id]), st = {};
      const bilde = (tekst, aktiv) => sc.push({
        tekst,
        graf: {
          retning: true,
          noder: lay.noder.filter(x => synlig.has(x.id)).map(x => ({ ...x, tilstand: aktiv.includes(x.id) ? "aktiv" : malB(alle[x.id].b) && !alle[x.id].pred ? "mal" : st[x.id] || "ny", under: alle[x.id].pred ? "predikert" : undefined })),
          kanter: lay.kanter.filter(k => synlig.has(k.til)).map(k => ({ ...k, tilstand: aktiv.includes(k.til) ? "aktiv" : "ny" }))
        },
        tabeller: [tt]
      });
      bilde(`Start: belief state ${mengde(rot.b)}${rot.b.length && percepter(rot.b).length === 1 ? ` (agenten har sett ${percept(rot.b[0])})` : ""}. Verden: ${VERDEN[d.verden]}.`, [rot.id]);
      for (const e of ev) {
        if (e.t === "pred") {
          synlig.add(e.pr.id); st[e.n.id] = "utvidet";
          bilde(`Prediction: b̂ = PREDICT(${mengde(e.n.b)}, ${e.pr.a}) = ${mengde(e.pr.b)}.`, [e.pr.id]);
        } else {
          e.pr.barn.forEach(c => synlig.add(c.id)); st[e.pr.id] = "grense";
          const ps = e.pr.barn.map(c => `${c.o} gir ${mengde(c.b)}`).join(", ");
          bilde(`Mulige percepts i ${mengde(e.pr.b)}: ${e.pr.barn.map(c => c.o).join(", ")}. Update: ${ps}.${e.pr.barn.length > 1 ? " Hver percept er en gren i en AND-node: planen må virke for alle." : ""}`, e.pr.barn.map(c => c.id));
        }
      }
      const p = planB(rot);
      if (p && d.handlinger.length > 1) bilde(`Alle grenene ender i mål. Planen tester belief state: ${planTekst(p, "Bstate")}.`, []);
      return sc;
    },
    svar(d) {
      if (d.modus === "sensorless") {
        let b = d.start.slice().sort((x, y) => x - y);
        d.handlinger.forEach(a => (b = predict(b, a, d.verden)));
        return [{ id: "b", navn: "Belief state til slutt", verdi: mengde(b) }];
      }
      const { rot } = lokal(d), blad = [];
      (function g(n) { if (!n.barn.length) blad.push(mengde(n.b)); n.barn.forEach(g); })(rot);
      const p = planB(rot);
      return [{ id: "blad", navn: "Belief states etter update", verdi: blad.join(", ") }].concat(p && d.handlinger.length > 1 ? [{ id: "plan", navn: "Plan", verdi: planTekst(p, "Bstate") }] : []);
    }
  });

  if (typeof module !== "undefined") module.exports = { hS, klatr, dronningP, landskapP, results, andOr, ga, sa, beam, LANDSKAP, planTekst, predict, lokal, planB };
})();
