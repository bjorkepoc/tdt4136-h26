// Motor for algoritmeanimasjonene og tegneverktøyet. Se KONTRAKT.md.
// Skjelett: registeret og hjelperne under er en del av kontrakten og skal beholde signaturene.
window.ALGO = window.ALGO || {
  alle: [],
  legg(a) { this.alle.push(a); },
  kopi: x => JSON.parse(JSON.stringify(x)),
  // Tegner et tre med bladene jevnt fordelt og hver forelder midt over barna sine.
  tre(rot) {
    const noder = [], kanter = [];
    let x = 0;
    const form = { max: "max", min: "min", sjanse: "sjanse", blad: "blad" };
    const ga = (n, d, far) => {
      const barn = n.barn || [];
      const me = { id: n.id, y: d * 110, tekst: n.tekst ?? "", form: form[n.type] || (barn.length ? "sirkel" : "blad") };
      if (barn.length) {
        const xs = barn.map(b => ga(b, d + 1, n).x);
        me.x = (xs[0] + xs[xs.length - 1]) / 2;
      } else {
        me.x = x; x += 80;
        if (n.verdi != null) me.under = String(n.verdi);
      }
      noder.push(me);
      if (far) kanter.push({ fra: far.id, til: n.id, tekst: n.p != null ? String(n.p) : "" });
      return me;
    };
    ga(rot, 0, null);
    return { retning: false, noder, kanter };
  }
};

// Resten: scenetegner, avspiller, algoritmesidene, tegneverktøyet og sjekken. Alt ligger i en funksjon,
// så ingen navn kolliderer med sidens egne globale (const $, svar, esc …).
(A => {
  "use strict";
  const FAM = ["Søk", "Lokalt søk", "Spill", "CSP", "Logikk", "Planlegging", "Språk"];
  const TILST = { ny: "ikke sett", grense: "frontier", utvidet: "utvidet (expanded)", aktiv: "nå", sti: "løsningssti", mal: "mål nådd", beskaret: "pruned / cutoff", feil: "konflikt / feil" };
  const FORMER = new Set(["sirkel", "max", "min", "sjanse", "blad", "boks"]);
  const R = 17;
  const esc = s => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  // Tekstfeltene er HTML, men bare <b> <i> <code> <sub> <sup> (og entiteter) slipper gjennom. Alt annet vises som tekst.
  const html = s => esc(s).replace(/&lt;(\/?)(b|i|code|sub|sup)&gt;/g, "<$1$2>").replace(/&amp;(#?\w+);/g, "&$1;");
  const fin = x => typeof x === "number" && Number.isFinite(x);
  const fmt = x => (Number.isInteger(x) ? String(x) : String(+(+x).toFixed(3)));
  const r1 = x => Math.round(x * 10) / 10;
  const kl = t => (TILST[t] ? t : "ny");
  let uidN = 0;
  const uid = () => "algo" + ++uidN;

  // ---------- Geometri for grafer ----------
  function maal(n) {
    if (n.form === "boks") {
      const l = String(n.tekst ?? "").split("\n");
      return { hw: Math.max(R, Math.max(...l.map(x => x.length)) * 3.9 + 10), hh: Math.max(15, l.length * 8 + 7), boks: 1 };
    }
    if (n.form === "blad") return { hw: 15, hh: 15, boks: 1 };
    if (n.form === "max" || n.form === "min") return { hw: R + 3, hh: R + 1 };
    return { hw: R, hh: R };
  }
  const grenseAv = (p, ux, uy) => (p.m.boks ? Math.min(ux ? p.m.hw / Math.abs(ux) : 1e9, uy ? p.m.hh / Math.abs(uy) : 1e9) : p.m.hw) + (p.n.mal ? 4 : 0);
  const KAND = [Math.PI, 0, -3 * Math.PI / 4, -Math.PI / 4, 3 * Math.PI / 4, Math.PI / 4, -Math.PI / 2, Math.PI / 2];
  const vdiff = (a, b) => { const d = Math.abs(a - b) % (2 * Math.PI); return d > Math.PI ? 2 * Math.PI - d : d; };
  const pol = (p, r, a) => [p.x + r * Math.cos(a), p.y + r * Math.sin(a)];
  const spiss = (x, y, ux, uy) => `M${r1(x)} ${r1(y)}L${r1(x - ux * 10 - uy * 4.6)} ${r1(y - uy * 10 + ux * 4.6)}L${r1(x - ux * 10 + uy * 4.6)} ${r1(y - uy * 10 - ux * 4.6)}Z`;

  // Regner ut posisjonene til alt som tegnes, og en ramme rundt det hele.
  function geometri(g) {
    const P = new Map();
    (g.noder || []).forEach(n => { if (n && n.id != null && !P.has(String(n.id))) P.set(String(n.id), { n, id: String(n.id), x: +n.x || 0, y: +n.y || 0, m: maal(n) }); });
    const ramme = [Infinity, Infinity, -Infinity, -Infinity];
    const ta = (x, y, hw = 0, hh = 0) => { ramme[0] = Math.min(ramme[0], x - hw); ramme[1] = Math.min(ramme[1], y - hh); ramme[2] = Math.max(ramme[2], x + hw); ramme[3] = Math.max(ramme[3], y + hh); };
    const kanter = [], grp = new Map(), vinkler = new Map([...P.keys()].map(id => [id, []]));
    (g.kanter || []).forEach((k, i) => {
      if (!k || !P.has(String(k.fra)) || !P.has(String(k.til))) return;
      const e = { k, i, a: String(k.fra), b: String(k.til) };
      kanter.push(e);
      const key = e.a === e.b ? "\u0001" + e.a : [e.a, e.b].sort().join("\u0000");
      if (!grp.has(key)) grp.set(key, []);
      grp.get(key).push(e);
      if (e.a !== e.b) {
        const p = P.get(e.a), q = P.get(e.b);
        vinkler.get(e.a).push(Math.atan2(q.y - p.y, q.x - p.x));
        vinkler.get(e.b).push(Math.atan2(p.y - q.y, p.x - q.x));
      }
    });
    const ledig = (id, ekstra = []) => {
      const v = vinkler.get(id).concat(ekstra);
      let best = KAND[0], bs = -1;
      for (const c of KAND) { const s = v.length ? Math.min(...v.map(a => vdiff(a, c))) : 9; if (s > bs + 1e-6) { bs = s; best = c; } }
      return best;
    };
    const pil = !!g.retning, loopV = new Map();
    grp.forEach(list => list.forEach((e, j) => {
      const p = P.get(e.a), q = P.get(e.b), tekstB = String(e.k.tekst ?? "").length * 3.6;
      const etikett = (x, y, sx, sy) => { const o = 6 + Math.abs(sx) * tekstB + Math.abs(sy) * 7; e.lx = x + sx * o; e.ly = y + sy * o; ta(e.lx, e.ly, tekstB + 2, 8); };
      if (e.a === e.b) {
        if (!loopV.has(e.a)) loopV.set(e.a, ledig(e.a, [-Math.PI / 2, Math.PI / 2])); // ikke rett opp/ned, der står over/under
        const th = loopV.get(e.a), b = grenseAv(p, Math.cos(th), Math.sin(th)), s = 34 + j * 15;
        const [x0, y0] = pol(p, b, th - 0.45), [cx1, cy1] = pol(p, b + s, th - 0.8), [cx2, cy2] = pol(p, b + s, th + 0.8), [x3, y3] = pol(p, b, th + 0.45);
        const L = Math.hypot(x3 - cx2, y3 - cy2) || 1, ux = (x3 - cx2) / L, uy = (y3 - cy2) / L;
        const ex = pil ? x3 - ux * 8 : x3, ey = pil ? y3 - uy * 8 : y3;
        e.d = `M${r1(x0)} ${r1(y0)}C${r1(cx1)} ${r1(cy1)} ${r1(cx2)} ${r1(cy2)} ${r1(ex)} ${r1(ey)}`;
        e.ah = pil ? spiss(x3, y3, ux, uy) : "";
        const far = 0.225 * b + 0.55 * (b + s);
        ta(...pol(p, far + 2, th), 6, 6);
        const [lx, ly] = pol(p, far, th);
        etikett(lx, ly, Math.cos(th), Math.sin(th));
        return;
      }
      const [c1, c2] = e.a < e.b ? [p, q] : [q, p];
      const L0 = Math.hypot(c2.x - c1.x, c2.y - c1.y) || 1, nx = -(c2.y - c1.y) / L0, ny = (c2.x - c1.x) / L0;
      const o = (j - (list.length - 1) / 2) * 30;
      let side = ny < -1e-6 || (Math.abs(ny) <= 1e-6 && nx > 0) ? 1 : -1;
      if (!o) {
        const L = Math.hypot(q.x - p.x, q.y - p.y) || 1, ux = (q.x - p.x) / L, uy = (q.y - p.y) / L;
        const b1 = grenseAv(p, ux, uy), b2 = grenseAv(q, ux, uy);
        const x1 = p.x + ux * b1, y1 = p.y + uy * b1, x2 = q.x - ux * b2, y2 = q.y - uy * b2;
        e.d = `M${r1(x1)} ${r1(y1)}L${r1(pil ? x2 - ux * 8 : x2)} ${r1(pil ? y2 - uy * 8 : y2)}`;
        e.ah = pil ? spiss(x2, y2, ux, uy) : "";
        etikett((x1 + x2) / 2, (y1 + y2) / 2, nx * side, ny * side);
        return;
      }
      side = o > 0 ? 1 : -1;
      const mx = (p.x + q.x) / 2 + nx * 2 * o, my = (p.y + q.y) / 2 + ny * 2 * o;
      const unit = (x, y) => { const l = Math.hypot(x, y) || 1; return [x / l, y / l]; };
      const [a1x, a1y] = unit(mx - p.x, my - p.y), [a2x, a2y] = unit(mx - q.x, my - q.y);
      const x1 = p.x + a1x * grenseAv(p, a1x, a1y), y1 = p.y + a1y * grenseAv(p, a1x, a1y);
      const x2 = q.x + a2x * grenseAv(q, a2x, a2y), y2 = q.y + a2y * grenseAv(q, a2x, a2y);
      e.d = `M${r1(x1)} ${r1(y1)}Q${r1(mx)} ${r1(my)} ${r1(pil ? x2 + a2x * 8 : x2)} ${r1(pil ? y2 + a2y * 8 : y2)}`;
      e.ah = pil ? spiss(x2, y2, -a2x, -a2y) : "";
      etikett(0.25 * x1 + 0.5 * mx + 0.25 * x2, 0.25 * y1 + 0.5 * my + 0.25 * y2, nx * side, ny * side);
    }));
    const start = [];
    P.forEach(p => {
      const ring = p.n.mal ? 4 : 0, ob = String(p.n.over ?? "").length * 3.4, ub = String(p.n.under ?? "").length * 3.4;
      ta(p.x, p.y, p.m.hw + ring + 3, p.m.hh + ring + 3);
      if (p.n.over) ta(p.x, p.y - p.m.hh - ring - 10, ob + 2, 9);
      if (p.n.under) ta(p.x, p.y + p.m.hh + ring + 13, ub + 2, 9);
      if (p.n.start) {
        const th = ledig(p.id, [...(loopV.has(p.id) ? [loopV.get(p.id)] : []), ...(p.n.over ? [-Math.PI / 2] : []), ...(p.n.under ? [Math.PI / 2] : [])]), b = grenseAv(p, Math.cos(th), Math.sin(th));
        const [x0, y0] = pol(p, b + 30, th), [x1, y1] = pol(p, b + 9, th), [x2, y2] = pol(p, b + 1, th);
        start.push(`<path class="l" d="M${r1(x0)} ${r1(y0)}L${r1(x1)} ${r1(y1)}"/><path class="ah" d="${spiss(x2, y2, -Math.cos(th), -Math.sin(th))}"/>`);
        ta(x0, y0, 3, 3);
      }
    });
    return { P, kanter, start, ramme: ramme[0] === Infinity ? [0, 0, 100, 60] : ramme };
  }

  // SVG-innholdet for en graf. o.valgt markerer et element i tegneverktøyet, o.hand viser koblingshåndtaket.
  function grafInnhold(g, o = {}) {
    const G = o.G || geometri(g);
    let s = "";
    for (const e of G.kanter) {
      s += `<g class="e t-${kl(e.k.tilstand)}${o.valgt === "e" + e.i ? " valgt" : ""}" data-k="e${e.i}"><path class="hit" d="${e.d}"/><path class="l" d="${e.d}"/>${e.ah ? `<path class="ah" d="${e.ah}"/>` : ""}<text class="el" x="${r1(e.lx)}" y="${r1(e.ly)}">${esc(e.k.tekst ?? "")}</text></g>`;
    }
    if (G.start.length) s += `<g class="st">${G.start.join("")}</g>`;
    G.P.forEach(p => {
      const n = p.n, f = FORMER.has(n.form) ? n.form : "sirkel", ring = n.mal ? 4 : 0;
      const form = (e, cls) => {
        if (f === "blad" || f === "boks") return `<rect class="${cls}" x="${r1(p.x - p.m.hw - e)}" y="${r1(p.y - p.m.hh - e)}" width="${r1(2 * (p.m.hw + e))}" height="${r1(2 * (p.m.hh + e))}" rx="${f === "boks" ? 8 : 2}"/>`;
        if (f === "max" || f === "min") {
          const k = R + 4 + e, v = f === "max" ? 1 : -1;
          return `<path class="${cls}" d="M${r1(p.x)} ${r1(p.y - v * k)}L${r1(p.x + k * 0.95)} ${r1(p.y + v * k * 0.62)}L${r1(p.x - k * 0.95)} ${r1(p.y + v * k * 0.62)}Z"/>`;
        }
        return `<circle class="${cls}" cx="${r1(p.x)}" cy="${r1(p.y)}" r="${R + e}"/>`;
      };
      const linjer = String(n.tekst ?? "").split("\n"), lang = f !== "boks" && linjer[0].length > 3 ? (linjer[0].length > 5 ? " xl" : " l") : "";
      const ty = p.y + (f === "max" ? 4 : f === "min" ? -4 : 0) - (linjer.length - 1) * 8;
      const tekst = linjer.length > 1 ? linjer.map((l, i) => `<tspan x="${r1(p.x)}" y="${r1(ty + i * 16)}">${esc(l)}</tspan>`).join("") : esc(linjer[0]);
      s += `<g class="n t-${kl(n.tilstand)} f-${f}${o.valgt === "n" + p.id ? " valgt" : ""}" data-k="n${esc(p.id)}">${ring ? form(4, "ring") : ""}${form(0, "s")}` +
        `<text class="nt${lang}${f === "boks" ? " b" : ""}" x="${r1(p.x)}" y="${r1(ty)}">${tekst}</text>` +
        `<text class="no" x="${r1(p.x)}" y="${r1(p.y - p.m.hh - ring - 10)}">${esc(n.over ?? "")}</text>` +
        `<text class="nu" x="${r1(p.x)}" y="${r1(p.y + p.m.hh + ring + 13)}">${esc(n.under ?? "")}</text></g>`;
    });
    if (o.hand && G.P.has(o.hand)) {
      const p = G.P.get(o.hand), x = p.x + p.m.hw * 0.75 + 11, y = p.y - p.m.hh * 0.75 - 11;
      s += `<g class="hand" data-hand="${esc(p.id)}"><circle cx="${r1(x)}" cy="${r1(y)}" r="11"/><path d="M${r1(x - 5)} ${r1(y)}h10M${r1(x)} ${r1(y - 5)}v10"/><title>Dra til en annen node for å lage en kant</title></g>`;
    }
    return s;
  }
  const signatur = g => JSON.stringify([!!g.retning, (g.noder || []).map(n => [n.id, n.x, n.y, n.form || "", !!n.mal, !!n.start, String(n.tekst ?? "")]), (g.kanter || []).map(k => [k.fra, k.til])]);

  // Oppdaterer en tegnet graf på stedet (så fargeovergangene animeres), eller tegner den på nytt.
  function tegnGraf(svg, g) {
    const sig = signatur(g);
    if (svg._sig === sig) {
      (g.noder || []).forEach(n => {
        const el = svg._k.get("n" + n.id); if (!el) return;
        el.setAttribute("class", `n t-${kl(n.tilstand)} f-${FORMER.has(n.form) ? n.form : "sirkel"}`);
        el.querySelector(".no").textContent = n.over ?? "";
        el.querySelector(".nu").textContent = n.under ?? "";
      });
      (g.kanter || []).forEach((k, i) => {
        const el = svg._k.get("e" + i); if (!el) return;
        el.setAttribute("class", `e t-${kl(k.tilstand)}`);
        el.querySelector(".el").textContent = k.tekst ?? "";
      });
      return;
    }
    svg.innerHTML = grafInnhold(g);
    svg._sig = sig;
    svg._k = new Map([...svg.querySelectorAll("[data-k]")].map(el => [el.getAttribute("data-k"), el]));
  }

  function legende(scener) {
    const brukt = new Set();
    let mal = false, start = false;
    scener.forEach(s => {
      if (!s || !s.graf) return;
      (s.graf.noder || []).forEach(n => { brukt.add(kl(n.tilstand)); mal = mal || !!n.mal; start = start || !!n.start; });
      (s.graf.kanter || []).forEach(k => brukt.add(kl(k.tilstand)));
    });
    if (brukt.size < 2 && !mal && !start) return "";
    return `<div class="algo-leg">${Object.keys(TILST).filter(t => brukt.has(t)).map(t => `<span><i class="sw t-${t}"></i>${TILST[t]}</span>`).join("")}` +
      (mal ? `<span><i class="sw ring"></i>måltilstand</span>` : "") + (start ? `<span><i class="sw pil">→</i>start</span>` : "") + "</div>";
  }

  const tabell = t => {
    const kol = Array.isArray(t.kol) ? t.kol : [], rader = Array.isArray(t.rader) ? t.rader : [], mk = new Set(t.marker || []);
    return `<div class="algo-tab">${t.tittel ? `<div class="algo-tt">${esc(t.tittel)}</div>` : ""}<table>${kol.some(k => String(k ?? "").trim()) ? `<thead><tr>${kol.map(k => `<th>${esc(k)}</th>`).join("")}</tr></thead>` : ""}<tbody>` +
      (rader.length ? rader.map((r, i) => `<tr${mk.has(i) ? ' class="mk"' : ""}>${(Array.isArray(r) ? r : [r]).map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("") : `<tr><td class="tom" colspan="${Math.max(1, kol.length)}">(tom)</td></tr>`) + "</tbody></table></div>";
  };

  function kurve(k) {
    const ys = (k.y || []).map(Number), xs = (k.x || ys.map((_, i) => i)).map(Number), n = Math.min(xs.length, ys.length);
    if (!n) return "";
    const W = 300, H = 150, l = 36, r = 10, t = 22, b = 22;
    let y0 = Math.min(...ys.slice(0, n)), y1 = Math.max(...ys.slice(0, n)), x0 = Math.min(...xs.slice(0, n)), x1 = Math.max(...xs.slice(0, n));
    if (y0 === y1) { y0 -= 1; y1 += 1; }
    if (x0 === x1) x1 = x0 + 1;
    const X = x => l + (x - x0) / (x1 - x0) * (W - l - r), Y = y => H - b - (y - y0) / (y1 - y0) * (H - t - b);
    const pts = xs.slice(0, n).map((x, i) => `${r1(X(x))},${r1(Y(ys[i]))}`).join(" ");
    const m = Number.isInteger(k.marker) && k.marker >= 0 && k.marker < n ? k.marker : -1;
    return `<div class="algo-tab"><svg class="algo-kurve" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(k.tittel || "Kurve")}">` +
      `<text class="kt" x="${l}" y="13">${esc(k.tittel || "")}</text><path class="ax" d="M${l} ${t}V${H - b}H${W - r}"/>` +
      `<text class="kv" x="${l - 4}" y="${t + 4}" text-anchor="end">${fmt(y1)}</text><text class="kv" x="${l - 4}" y="${H - b}" text-anchor="end">${fmt(y0)}</text>` +
      `<text class="kv" x="${l}" y="${H - 6}">${fmt(x0)}</text><text class="kv" x="${W - r}" y="${H - 6}" text-anchor="end">${fmt(x1)}</text>` +
      `<polyline points="${pts}"/>${m >= 0 ? `<circle cx="${r1(X(xs[m]))}" cy="${r1(Y(ys[m]))}" r="4.5"/>` : ""}</svg></div>`;
  }

  // ---------- Avspilleren ----------
  const IKON = {
    forst: "M2 3h2v10H2zM14 3v10L5 8z", forrige: "M12 3v10L4 8z", spill: "M4 2.5v11l9.5-5.5z", pause: "M3.5 3h3v10h-3zM9.5 3h3v10h-3z",
    neste: "M4 3v10l8-5z", sist: "M2 3v10l9-5zM12 3h2v10h-2z"
  };
  const ikon = k => `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="${IKON[k]}"/></svg>`;

  function spiller(el, scener) {
    scener = (Array.isArray(scener) ? scener : []).filter(s => s && typeof s === "object");
    if (!scener.length) { el.innerHTML = `<p class="mut">Algoritmen ga ingen steg å vise.</p>`; return; }
    const n = scener.length, harGraf = scener.some(s => s.graf), harSide = scener.some(s => (s.tabeller && s.tabeller.length) || s.kurve);
    const bred = scener.some(s => (s.tabeller || []).some(t => (t.kol || []).length > 6));
    let vb = null;
    if (harGraf) {
      const r = [Infinity, Infinity, -Infinity, -Infinity];
      scener.forEach(s => { if (s.graf) { const q = geometri(s.graf).ramme; r[0] = Math.min(r[0], q[0]); r[1] = Math.min(r[1], q[1]); r[2] = Math.max(r[2], q[2]); r[3] = Math.max(r[3], q[3]); } });
      vb = [r[0] - 8, r[1] - 8, r[2] - r[0] + 16, r[3] - r[1] + 16].map(r1);
    }
    el.innerHTML = `<div class="algo-spiller" tabindex="0" role="group" aria-label="Animasjon: piltastene blar, mellomrom spiller av og pauser">` +
      `<div class="algo-vis${harGraf ? "" : " ug"}${harSide ? "" : " us"}${bred ? " stablet" : ""}">` +
      (harGraf ? `<div class="algo-graf"><svg class="algo-g" viewBox="${vb.join(" ")}" style="max-width:${Math.round(vb[2] * 1.6)}px;min-width:${Math.min(Math.round(vb[2] * 0.6), 900)}px" role="img" aria-label="Grafen i dette steget"></svg>${legende(scener)}</div>` : "") +
      `<div class="algo-tekst" aria-live="polite"></div>` +
      `<div class="algo-kontroll"><span class="algo-knapper"><button type="button" data-a="forst" title="Til start" aria-label="Til start">${ikon("forst")}</button><button type="button" data-a="forrige" title="Forrige steg (←)" aria-label="Forrige steg">${ikon("forrige")}</button><button type="button" class="pri" data-a="spill" title="Spill av (mellomrom)" aria-label="Spill av">${ikon("spill")}</button><button type="button" data-a="neste" title="Neste steg (→)" aria-label="Neste steg">${ikon("neste")}</button><button type="button" data-a="sist" title="Til slutt" aria-label="Til slutt">${ikon("sist")}</button></span>` +
      `<input type="range" min="0" max="${n - 1}" value="0" aria-label="Velg steg"><span class="algo-nr"></span>` +
      `<label class="algo-fart">Fart <select><option value="0.5">0,5×</option><option value="1" selected>1×</option><option value="2">2×</option><option value="4">4×</option></select></label><label class="algo-fart" title="Start på nytt fra steg 1 når avspillingen er ferdig"><input type="checkbox" class="algo-gjenta"> Gjenta</label></div>` +
      (harSide ? `<div class="algo-side"></div>` : "") + "</div></div>";
    const rot = el.querySelector(".algo-spiller"), svg = rot.querySelector("svg.algo-g"), tekst = rot.querySelector(".algo-tekst"), side = rot.querySelector(".algo-side");
    const slider = rot.querySelector("input[type=range]"), nr = rot.querySelector(".algo-nr"), spillK = rot.querySelector("[data-a=spill]"), fart = rot.querySelector("select"), gjenta = rot.querySelector(".algo-gjenta");
    // «Gjenta» huskes mellom algoritmene i denne nettleseren.
    try { gjenta.checked = localStorage.getItem("tdt4136-algo-gjenta") === "1"; } catch (e) { }
    gjenta.addEventListener("change", () => { try { localStorage.setItem("tdt4136-algo-gjenta", gjenta.checked ? "1" : ""); } catch (e) { } });
    let i = -1, timer = null;
    const vis = k => {
      k = Math.max(0, Math.min(n - 1, k));
      if (k === i) return;
      i = k;
      const s = scener[i];
      if (svg) { if (s.graf) tegnGraf(svg, s.graf); else { svg.innerHTML = ""; svg._sig = null; } }
      tekst.innerHTML = html(s.tekst ?? "");
      if (side) side.innerHTML = (s.kurve ? kurve(s.kurve) : "") + (Array.isArray(s.tabeller) ? s.tabeller.filter(Boolean).map(tabell).join("") : "");
      slider.value = i;
      nr.textContent = `Steg ${i + 1} av ${n}`;
    };
    const stopp = () => { clearTimeout(timer); timer = null; spillK.innerHTML = ikon("spill"); spillK.setAttribute("aria-label", "Spill av"); spillK.title = "Spill av (mellomrom)"; };
    // Med «Gjenta» står siste steg dobbelt så lenge før avspillingen starter fra steg 1 igjen.
    const tikk = () => {
      if (!rot.isConnected || (i >= n - 1 && !gjenta.checked)) return stopp();
      vis(i >= n - 1 ? 0 : i + 1);
      timer = setTimeout(tikk, (i >= n - 1 ? 2600 : 1300) / +fart.value);
    };
    const spill = () => {
      if (timer) return stopp();
      if (i >= n - 1) vis(0);
      spillK.innerHTML = ikon("pause"); spillK.setAttribute("aria-label", "Pause"); spillK.title = "Pause (mellomrom)";
      timer = setTimeout(tikk, 1300 / +fart.value);
    };
    rot.addEventListener("click", e => {
      const b = e.target.closest("[data-a]"); if (!b) return;
      const a = b.dataset.a;
      if (a === "spill") return spill();
      stopp();
      vis(a === "forst" ? 0 : a === "sist" ? n - 1 : a === "forrige" ? i - 1 : i + 1);
    });
    slider.addEventListener("input", () => { stopp(); vis(+slider.value); });
    rot.addEventListener("keydown", e => {
      const t = e.target, tag = t.tagName, rekke = tag === "INPUT" && t.type === "range";
      if (tag === "SELECT" || tag === "TEXTAREA" || (tag === "INPUT" && !rekke)) return;
      if (rekke && e.key !== " ") return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); stopp(); vis(i + (e.key === "ArrowRight" ? 1 : -1)); }
      else if (e.key === "Home" || e.key === "End") { e.preventDefault(); stopp(); vis(e.key === "Home" ? 0 : n - 1); }
      else if (e.key === " " && tag !== "BUTTON") { e.preventDefault(); spill(); }
    });
    vis(0);
  }

  // ---------- Valg ----------
  const stdValg = a => Object.fromEntries((a.valg || []).map(v => [v.id, v.std ?? (v.type === "bool" ? false : Array.isArray(v.type) ? v.type[0] : v.type === "tall" ? 0 : "")]));
  function valgSkjema(el, a, verdier, endret) {
    el.innerHTML = (a.valg || []).map((v, k) => {
      const x = verdier[v.id], id = uid();
      if (v.type === "bool") return `<label class="algo-v"><input type="checkbox" data-v="${k}"${x ? " checked" : ""}> ${esc(v.navn)}</label>`;
      if (Array.isArray(v.type)) return `<label class="algo-v" for="${id}">${esc(v.navn)} <select id="${id}" data-v="${k}">${v.type.map(o => `<option${String(o) === String(x) ? " selected" : ""}>${esc(o)}</option>`).join("")}</select></label>`;
      return `<label class="algo-v" for="${id}">${esc(v.navn)} <input class="in${v.type === "tall" ? " kort" : ""}" id="${id}" data-v="${k}" type="${v.type === "tall" ? "number" : "text"}"${v.type === "tall" ? ' step="any"' : ""} value="${esc(fin(x) ? fmt(x) : x ?? "")}"></label>`;
    }).join("");
    el.onchange = e => {
      const k = e.target.dataset.v; if (k == null) return;
      const v = a.valg[+k], t = e.target;
      if (v.type === "bool") verdier[v.id] = t.checked;
      else if (v.type === "tall") { const x = parseFloat(String(t.value).replace(",", ".")); if (!fin(x)) { t.value = verdier[v.id]; return; } verdier[v.id] = x; }
      else verdier[v.id] = t.value;
      endret();
    };
  }

  const prov = (f, ...x) => { try { return { v: f(...x) }; } catch (e) { console.error(e); return { feil: e }; } };
  const feilTekst = e => `<p class="algo-feil">Algoritmen feilet på denne inputen: ${esc(e && e.message || e)}</p>`;

  // ---------- #algoritmer ----------
  const forste = s => { const t = String(s || "").replace(/<[^>]+>/g, ""); const m = /^.*?[.!?](\s|$)/.exec(t); return (m ? m[0] : t).trim(); };
  let ventende = null;
  // Prioritet etter pensumlista og eksamenene 2019–2025 (EKSAMENSPLAN.md). Ukjent id gir ingen merkelapp.
  const PRI = { 1: "bfs dfs ucs dls ids greedy astar ac-3 backtracking minimax alfa-beta expectiminimax dominans-nash tt-entails cnf pl-resolusjon unifikasjon fol-resolusjon fol-forward-chaining",
    2: "wastar hill-climbing simulated-annealing genetisk and-or belief-state min-conflicts mcts forward-chaining backward-chaining progresjon regresjon relaksert-h htn sensorless bigram viterbi cyk",
    3: "local-beam dpll walksat" };
  const PRIT = { 1: ["Kjerne", "ofte på eksamen, spor den for hånd"], 2: ["Mindre", "forelest, men sjelden mer enn små oppgaver; kunn idéen og ett eksempel"], 3: ["Bare bok", "pensum, men aldri forelest; lavest prioritet"] };
  // Varianter av samme algoritme vises som én gruppe: ett kort i oversikten og en variantvelger på siden.
  const GRUPPER = [
    ["Uninformed search", "bfs:BFS|dfs:DFS|dls:DLS|ids:IDS", "Samme søk, bare frontieren endres: kø (BFS), stakk (DFS), stakk med dybdegrense (DLS), og DLS med grense 0, 1, 2, … (IDS)."],
    ["Best-first search", "ucs:UCS|greedy:Greedy best-first|astar:A*|wastar:Weighted A*", "Samme BEST-FIRST-SEARCH, bare f(n) endres: g (UCS), h (greedy), g + h (A*) og g + w·h (weighted A*)."],
    ["Hill climbing og varianter", "hill-climbing:Hill climbing|simulated-annealing:Simulated annealing|local-beam:Local beam", "Samme klatring: simulated annealing godtar også skritt nedover med sannsynlighet e<sup>ΔE/T</sup>, local beam klatrer med k tilstander samtidig."],
    ["Minimax og varianter", "minimax:Minimax|alfa-beta:Alpha-beta|expectiminimax:Expectiminimax", "Alpha-beta gir samme svar som minimax, men kutter grener som ikke kan endre valget. Expectiminimax legger til sjansenoder med forventningsverdi."],
    ["Forward og backward chaining", "forward-chaining:Forward (PL)|backward-chaining:Backward (PL)|fol-forward-chaining:Forward (FOL)", "Forward går fra fakta mot målet, backward fra målet bakover mot fakta. FOL-utgaven er forward chaining med unifikasjon."],
    ["Resolusjon", "pl-resolusjon:PL-resolusjon|fol-resolusjon:FOL-resolusjon", "Samme resolusjonsregel og motsigelsesbevis. FOL-utgaven trenger CNF med Skolemisering og unifikasjon."],
    ["Model checking", "tt-entails:Sannhetstabell|dpll:DPLL|walksat:WalkSAT", "Alle leter etter modeller: sannhetstabellen prøver alle, DPLL beskjærer med early termination, pure og unit, WalkSAT flipper tilfeldig."],
    ["Forward og backward planlegging", "progresjon:Progression (forward)|regresjon:Regression (backward)", "Samme state-space-søk i hver sin retning: progression fra starttilstanden, regression fra målet via relevante handlinger."]
  ].map(([navn, v, tekst]) => { const par = v.split("|").map(x => x.split(":")); return { navn, ids: par.map(x => x[0]), kort: Object.fromEntries(par), tekst }; });
  const gruppe = x => GRUPPER.find(g => g.ids.includes(x.id));
  // Søketeksten til et kort: navn, id, familie, episode og første setning, med små bokstaver.
  const sokTekst = (xs, ...ekstra) => esc(xs.flatMap(x => [x.navn, x.id, x.familie, x.ep, forste(x.kort)]).concat(ekstra).join(" ").replace(/<[^>]+>/g, "").toLowerCase());
  let sisteSok = "";
  const pri = (x, lang) => { const n = Object.keys(PRI).find(k => PRI[k].split(" ").includes(x.id)); return n ? ` <span class="algo-pri p${n}" title="${PRIT[n][1]}">${PRIT[n][0]}${lang ? ": " + PRIT[n][1] : ""}</span>` : ""; };

  A.side = (el, id) => {
    const a = id ? A.alle.find(x => x.id === id) : null;
    if (!a) {
      const fams = FAM.concat([...new Set(A.alle.map(x => x.familie))].filter(f => !FAM.includes(f)));
      el.innerHTML = `<div class="algo"><h1>Algoritmer animert</h1>` +
        (id ? `<p class="algo-feil">Fant ingen algoritme med id «${esc(id)}».</p>` : "") +
        `<p>Velg en algoritme og se den steg for steg, med en kort forklaring under hvert steg. Vil du tegne en graf eller et tre fra en oppgave selv og få svaret ditt sjekket, bruk <a href="#verksted">Tegn og sjekk</a>.</p>` +
        `<p class="mut">Merkelappene sier hvor viktig algoritmen er, etter pensumlista og eksamenene 2019–2025:${[1, 2, 3].map(n => ` <span class="algo-pri p${n}">${PRIT[n][0]}</span> ${PRIT[n][1]}.`).join("")}</p>` +
        `<input type="search" class="in algo-sok" placeholder="Søk: A*, resolusjon, Nash, E07 …" aria-label="Søk etter algoritme"><p class="mut algo-ingen" hidden>Ingen treff.</p>` +
        (A.alle.length ? "" : `<p class="mut">Ingen algoritmer er lastet ennå.</p>`) +
        fams.map(f => {
          const l = A.alle.filter(x => x.familie === f), vist = new Set();
          const kort = x => { const g = gruppe(x); if (!g) return enkelt(x); if (vist.has(g)) return ""; vist.add(g);
            const v = g.ids.map(id => A.alle.find(y => y.id === id)).filter(Boolean);
            const eps = [...new Set(v.map(y => y.ep).filter(Boolean))].join(" · ");
            return `<div class="algo-kort" data-sok="${sokTekst(v, g.navn, g.tekst, ...Object.values(g.kort))}"><b>${esc(g.navn)}</b><span class="algo-ep">${esc(eps)} · ${v.length} varianter</span><ul class="algo-vliste">${v.map(y => `<li data-sok="${sokTekst([y], g.kort[y.id])}"><a href="#algoritmer/${encodeURIComponent(y.id)}">${esc(g.kort[y.id])}</a>${pri(y)}</li>`).join("")}</ul></div>`; };
          const enkelt = x => `<a class="algo-kort" data-sok="${sokTekst([x])}" href="#algoritmer/${encodeURIComponent(x.id)}"><b>${esc(x.navn)}</b><span class="algo-ep">${esc(x.ep || "")}${pri(x)}</span><span class="mut">${esc(forste(x.kort))}</span></a>`;
          return l.length ? `<section class="algo-fam"><h2>${esc(f)}</h2><div class="algo-kortliste">${l.map(kort).join("")}</div></section>` : "";
        }).join("") + "</div>";
      // Søk: alle ordene må finnes; Enter åpner første treff, Escape tømmer feltet.
      const sok = el.querySelector(".algo-sok"), ingen = el.querySelector(".algo-ingen");
      const filtrer = () => {
        sisteSok = sok.value;
        const q = sok.value.toLowerCase().split(/\s+/).filter(Boolean);
        let n = 0;
        el.querySelectorAll(".algo-fam").forEach(sec => {
          let m = 0;
          sec.querySelectorAll(".algo-kort").forEach(k => { const ok = q.every(w => k.dataset.sok.includes(w)); k.hidden = !ok; m += ok; });
          sec.querySelectorAll(".algo-vliste li").forEach(li => li.classList.toggle("treff", q.length > 0 && q.every(w => li.dataset.sok.includes(w))));
          sec.hidden = !m; n += m;
        });
        ingen.hidden = n > 0;
      };
      sok.oninput = filtrer;
      sok.onkeydown = e => {
        if (e.key === "Escape") { sok.value = ""; filtrer(); }
        if (e.key !== "Enter") return;
        const k = [...el.querySelectorAll(".algo-kort")].find(k => !k.hidden), lenke = k && (k.matches("a") ? k : (k.querySelector(".treff a") || k.querySelector("a")));
        if (lenke) location.hash = lenke.getAttribute("href").slice(1);
      };
      if (sisteSok) { sok.value = sisteSok; filtrer(); }
      return;
    }
    const ex = Array.isArray(a.eksempler) && a.eksempler.length ? a.eksempler : [{ navn: "Eksempel", data: null }];
    const ep = /^E\d\d$/.test(a.ep || "") ? `<a href="#${a.ep.toLowerCase()}">${a.ep}</a>` : esc(a.ep || "");
    const tegnbar = a.data === "graf" || a.data === "tre";
    el.innerHTML = `<div class="algo"><p class="mut algo-sti"><a href="#algoritmer">← Alle algoritmer</a> · ${esc(a.familie || "")} · ${ep}${pri(a, 1)}</p><h1>${esc(a.navn)}</h1>` + (g => g ? `<div class="algo-faner" role="group" aria-label="${esc(g.navn)}">${g.ids.map(id => A.alle.find(y => y.id === id)).filter(Boolean).map(y => y === a ? `<span class="pa" aria-current="page">${esc(g.kort[y.id])}</span>` : `<a href="#algoritmer/${encodeURIComponent(y.id)}">${esc(g.kort[y.id])}</a>`).join("")}</div><p class="mut algo-fnote">${html(g.tekst)}</p>` : "")(gruppe(a)) +
      `<div class="algo-valg">${ex.length > 1 ? `<label class="algo-v">Eksempel <select data-ex>${ex.map((e, i) => `<option value="${i}">${esc(e.navn)}</option>`).join("")}</select></label>` : `<span class="mut">${esc(ex[0].navn)}</span>`}<span class="algo-vv"></span>` +
      (tegnbar ? `<button type="button" data-tegn>Tegn din egen</button><button type="button" data-tegn data-samm>Sammenlign med andre algoritmer</button>` : "") + `</div><div class="algo-anim"></div>` +
      `<div class="algo-om"><p>${html(a.kort)}</p>${Array.isArray(a.punkter) && a.punkter.length ? `<ul>${a.punkter.map(p => `<li>${html(p)}</li>`).join("")}</ul>` : ""}</div></div>`;
    const anim = el.querySelector(".algo-anim"), vv = el.querySelector(".algo-vv");
    let e = 0, verdier;
    const kjor = () => {
      const r = prov(() => a.kjor(A.kopi(ex[e].data ?? null), { ...verdier }));
      if (r.feil) anim.innerHTML = feilTekst(r.feil); else spiller(anim, r.v);
    };
    const velg = i => { e = i; verdier = { ...stdValg(a), ...(ex[e].valg || {}) }; valgSkjema(vv, a, verdier, kjor); kjor(); };
    const sel = el.querySelector("[data-ex]");
    if (sel) sel.onchange = () => velg(+sel.value);
    el.querySelectorAll("[data-tegn]").forEach(tb => { tb.onclick = () => { ventende = { type: a.data, data: A.kopi(ex[e].data), algo: a.id, valg: { ...verdier }, samm: tb.hasAttribute("data-samm") }; location.hash = "verksted"; }; });
    velg(0);
  };

  // ---------- Sjekk ----------
  const SYN = new Map([["none", "∅"], ["ingen", "∅"], ["failure", "∅"], ["fail", "∅"], ["null", "∅"], ["inf", "∞"], ["infinity", "∞"], ["uendelig", "∞"],
    ["yes", "ja"], ["true", "ja"], ["sant", "ja"], ["no", "nei"], ["false", "nei"], ["usant", "nei"], ["osv", "…"], ["etc", "…"]]);
  // Har fasit et kall (P(A, B)), beholdes parentes rett etter et navn som ledd («p(» … «)»), så P(A, D) ≠ P(A, B) og ariteten teller.
  // Andre parenteser, og alle når fasit ikke har kall, er gruppering og faller bort («S A (G)»).
  const KALL = /\p{L}[\p{L}\p{N}_′']*\(/u;
  const kall = s => { const st = []; return s.replace(/[()]/g, (p, i) => (p === "(" ? (st.push(/\p{L}[\p{L}\p{N}_′']*$/u.test(s.slice(0, i))), st.at(-1) ? "( " : " ") : st.pop() ? " ) " : " ")); };
  // Etter et innledende ∅ («ingen sti») er bare slike ord lov; «ingen S A G» er ikke ∅.
  const FYLL = new Set(["∅", "sti", "path", "løsning", "solution"]);
  function tokens(x, desimal, k) {
    let s = String(x ?? "").normalize("NFKC").toLowerCase().replace(/−/g, "-").replace(/[–—]/g, " ")
      .replace(/<-|←/g, " ← ").replace(/->|=>|[→⟶⇒]/g, " ").replace(/>=/g, "≥").replace(/<=/g, "≤").replace(/[=<>≤≥]/g, " $& ").replace(/\{\s*\}/g, " ∅ ").replace(/\.\.\.|…/g, " … ");
    if (desimal) s = s.replace(/(?<=\d),(?=\d)/g, ".");
    if (k) s = kall(s);
    s = s.replace(/-(?!\d)/g, " ").replace(/(?<=\S)-(?=\d)/g, " ").replace(k ? /[{}[\],;|:]/g : /[{}()[\],;|:]/g, " ").replace(/\.(?!\d)/g, " ");
    const t = s.split(/\s+/).filter(Boolean).map(w => SYN.get(w) || w);
    return t[0] === "∅" && t.every(w => FYLL.has(w)) ? ["∅"] : t;
  }
  // Mengdeelementer: et kall med argumentene er ett element. Tall skrives om («02» = «2») før sortering.
  const elementer = t => { const u = []; let d = 0; for (const x of t) { if (d) u[u.length - 1] += " " + x; else u.push(tall(x) ? String(+x) : x); d += x.endsWith("(") - (x === ")"); } return u.sort(); };
  const tall = w => /^-?\d+(\.\d+)?$/.test(w);
  // Hvert ord i svaret er nabonoder fra fasiten skrevet sammen («SADBCE G2»), uten å dele en node («SA B CG» ≠ «S A BC G»).
  const skjot = (s, f) => { let j = 0; for (const w of s) { let acc = ""; while (j < f.length && acc.length < w.length) acc += f[j++]; if (acc !== w) return false; } return j === f.length; };
  const likT = (a, b) => a === b || (tall(a) && tall(b) && Math.abs(+a - +b) < 1e-9);
  // Sammenligner et svar med fasiten (og ev. andre godtatte former). Gir {ok} eller {ok: false, melding} med første avvik.
  // Statisk figur til en oppgavetekst. Bare "tre" (samme format som ALGO.tre) støttes; grafer tegnes av siden selv.
  A.figur = (type, data) => {
    if (type !== "tre" || !data) return "";
    const g = A.tre(A.kopi(data)), q = geometri(g).ramme, vb = [q[0] - 8, q[1] - 8, q[2] - q[0] + 16, q[3] - q[1] + 16].map(r1);
    return `<div class="algo algo-fig"><svg class="algo-g" viewBox="${vb.join(" ")}" style="max-width:${Math.round(vb[2] * 1.2)}px" role="img" aria-label="Spilltreet i oppgaven">${grafInnhold(g)}</svg></div>`;
  };

  A.sammenlign = (fasit, svar, godta = []) => {
    if (!tokens(svar).length) return { ok: false, tom: true, melding: "Ikke besvart." };
    const mengde = f => /^\s*\{.*\}\s*$/.test(String(f)) && !/^\s*\{\s*\}\s*$/.test(String(f));
    const kand = [fasit, ...(godta || [])];
    for (const f0 of kand) {
      // Desimalkomma ("6,5") godtas bare når fasiten er ett enkelt tall, så lister som {5,7} ikke blandes sammen.
      const enTall = !mengde(f0) && tokens(f0, true).length === 1 && tall(tokens(f0, true)[0]);
      for (const d of enTall ? [false, true] : [false]) {
        const k = KALL.test(f0), s = tokens(svar, d, k);
        let f = tokens(f0, d, k);
        if (mengde(f0)) { const a = elementer(f), b = elementer(s); if (a.length === b.length && a.every((x, i) => likT(x, b[i]))) return { ok: true }; continue; }
        // Fasit som slutter med «…» (søket stopper aldri): svaret må også markere at det fortsetter.
        if (f[f.length - 1] === "…") { f = f.slice(0, -1); const t = s.slice(0, -1); if (s[s.length - 1] === "…" && t.length >= f.length && f.every((x, i) => likT(x, t[i]))) return { ok: true }; continue; }
        if (f.length === s.length && f.every((x, i) => likT(x, s[i]))) return { ok: true };
        // «SADBCE G2» = «S A D B C E G2», men aldri for tall («1 2» er ikke «12»).
        if (!f.some(tall) && !s.some(tall) && s.length < f.length && skjot(s, f)) return { ok: true };
      }
    }
    const s = tokens(svar);
    if (mengde(fasit)) {
      const k = KALL.test(fasit), f = elementer(tokens(fasit, false, k)), s = elementer(tokens(svar, false, k)), mangler = f.filter(x => !s.some(y => likT(x, y))).length, feil = s.filter(y => !f.some(x => likT(x, y)));
      return { ok: false, melding: feil.length ? `«${feil[0]}» hører ikke med i mengden.` : mangler ? `Det mangler ${mangler === 1 ? "ett element" : mangler + " elementer"}.` : "Mengden stemmer ikke (sjekk antallet)." };
    }
    let best = null;
    for (const f0 of kand) {
      const f = tokens(f0).filter(x => x !== "…");
      let i = 0; while (i < f.length && i < s.length && likT(f[i], s[i])) i++;
      if (!best || i > best.i) best = { i, f };
    }
    const { i, f } = best;
    let melding;
    if (i === s.length) melding = `${i === 1 ? "Det første elementet stemmer" : `De ${i} første elementene stemmer`}, men svaret ditt slutter for tidlig.`;
    else if (i >= f.length) melding = `Alt stemmer til og med «${s[i - 1]}», men du har med mer: «${s[i]}».`;
    else melding = i ? `Riktig til og med «${s[i - 1]}». Element ${i + 1}, «${s[i]}», stemmer ikke.` : `Allerede det første elementet, «${s[0]}», stemmer ikke.`;
    return { ok: false, melding };
  };

  // ---------- Data fra tegneverktøyet ----------
  const tallFra = v => { const t = String(v ?? "").trim().replace(",", ".").replace("−", "-"); if (!t) return undefined; const x = Number(t); return fin(x) ? x : NaN; };
  function rensGraf(d) {
    d = d && typeof d === "object" ? d : {};
    // navn: id slik grafen skriver den → renset id («New York» → «New_York»), så start, mål og kanter følger med.
    const sett = new Set(), navn = new Map(), noder = [];
    (Array.isArray(d.noder) ? d.noder : []).forEach((n, i) => {
      if (!n || typeof n !== "object") return;
      const id = String(n.id ?? "").trim().replace(/\s+/g, "_").slice(0, 12);
      if (!id || sett.has(id)) return;
      sett.add(id);
      navn.set(String(n.id), id);
      const o = { id, x: fin(+n.x) && n.x !== "" ? +n.x : 60 + (i % 6) * 90, y: fin(+n.y) && n.y !== "" ? +n.y : 60 + Math.floor(i / 6) * 90 };
      if (fin(n.h)) o.h = n.h;
      if (Array.isArray(n.domene)) o.domene = n.domene.slice(0, 40).map(v => (fin(v) ? v : String(v)));
      noder.push(o);
    });
    const kanter = (Array.isArray(d.kanter) ? d.kanter : []).filter(k => k && navn.has(String(k.fra)) && navn.has(String(k.til)))
      .map(k => ({ fra: navn.get(String(k.fra)), til: navn.get(String(k.til)), ...(fin(k.kost) && { kost: k.kost }), ...(typeof k.rel === "string" && k.rel && k.rel !== "≠" && { rel: k.rel.slice(0, 20) }) }));
    const o = { retning: !!d.retning, noder, kanter, mal: [...new Set((Array.isArray(d.mal) ? d.mal : []).map(String).filter(id => navn.has(id)).map(id => navn.get(id)))] };
    if (d.start != null && navn.has(String(d.start))) o.start = navn.get(String(d.start));
    return o;
  }
  function rensTre(d) {
    const sett = new Set();
    let antall = 0;
    const ga = (n, dybde) => {
      if (!n || typeof n !== "object" || dybde > 14 || antall >= 400) return null;
      antall++;
      let id = String(n.id ?? "").trim().replace(/\s+/g, "_").slice(0, 12) || "N";
      while (sett.has(id)) id += "′";
      sett.add(id);
      const barn = (Array.isArray(n.barn) ? n.barn : []).map(b => ga(b, dybde + 1)).filter(Boolean);
      const o = { id, type: ["max", "min", "sjanse", "blad"].includes(n.type) ? n.type : barn.length ? "max" : "blad" };
      if (barn.length && o.type === "blad") o.type = "max";
      if (fin(n.verdi)) o.verdi = n.verdi;
      if (fin(n.p)) o.p = n.p;
      if (typeof n.tekst === "string" && n.tekst) o.tekst = n.tekst.slice(0, 20);
      o.barn = barn;
      return o;
    };
    return ga(d, 0) || { id: "A", type: "max", barn: [] };
  }
  const tom = type => (type === "tre" ? { id: "A", type: "max", barn: [] } : { retning: true, noder: [], kanter: [], mal: [] });
  const rens = (type, d) => (type === "tre" ? rensTre(d) : rensGraf(d));
  const typeAv = d => (d && Array.isArray(d.noder) ? "graf" : d && (Array.isArray(d.barn) || d.type) ? "tre" : null);
  const nesteId = brukt => { for (let k = 0; ; k++) for (let c = 0; c < 26; c++) { const id = String.fromCharCode(65 + c) + (k || ""); if (!brukt.has(id)) return id; } };
  const treNoder = (n, ut = [], far = null) => { ut.push({ n, far }); (n.barn || []).forEach(b => treNoder(b, ut, n)); return ut; };

  // ---------- Tegneverktøyet ----------
  const NOKKEL = "tdt4136-verksted";
  A.verksted = (el, opts) => {
    const inline = !!opts;
    const S = { type: "graf", data: null, algo: null, valg: {}, valgt: null, vb: null, angre: [], igjen: [], svar: {}, visFasit: false };
    let velgType = !inline;
    if (inline) {
      S.type = opts.type === "tre" || opts.type === "graf" ? opts.type : typeAv(opts.data) || "graf";
      velgType = !(opts.type === "tre" || opts.type === "graf");
      S.data = opts.data ? rens(S.type, A.kopi(opts.data)) : tom(S.type);
      S.algo = opts.algo || null;
      S.valg = opts.valg && typeof opts.valg === "object" ? { ...opts.valg } : {};
    } else {
      let lagret = ventende;
      S.sammStart = !!(lagret && lagret.samm);
      ventende = null;
      if (!lagret) try { lagret = JSON.parse(localStorage.getItem(NOKKEL)); } catch (e) { lagret = null; }
      if (lagret && (lagret.type === "graf" || lagret.type === "tre")) { S.type = lagret.type; S.data = rens(S.type, lagret.data); S.algo = lagret.algo || null; S.valg = lagret.valg && typeof lagret.valg === "object" ? lagret.valg : {}; }
      else S.data = tom("graf");
    }
    const algos = () => A.alle.filter(a => a.data === S.type && typeof a.kjor === "function");
    const alg = () => algos().find(a => a.id === S.algo);
    const sikreAlgo = () => {
      if (!alg()) { const a = algos()[0]; S.algo = a ? a.id : null; S.valg = a ? stdValg(a) : {}; }
      else S.valg = { ...stdValg(alg()), ...S.valg };
    };
    sikreAlgo();
    const csp = () => (alg() || {}).familie === "CSP";
    const eksempelValg = inline ? "" : `<label class="algo-v">Last inn eksempel <select data-f="eksempel"><option value="">Velg …</option>${A.alle.filter(a => (a.data === "graf" || a.data === "tre") && Array.isArray(a.eksempler)).map(a => `<optgroup label="${esc(a.navn)}">${a.eksempler.map((e, i) => `<option value="${esc(a.id)}|${i}">${esc(e.navn)}</option>`).join("")}</optgroup>`).join("")}</select></label>`;

    el.innerHTML = `<div class="algo algo-verk${inline ? " inline" : ""}">` +
      (inline ? "" : `<h1>Tegn og sjekk</h1><p>Tegn grafen eller treet fra en oppgave, løs oppgaven for hånd, og skriv svaret ditt under. Motoren regner ut fasiten med kursets konvensjoner og sier hvor du første gang går feil. Tegningen huskes i denne nettleseren.</p>`) +
      `<div class="algo-verktoy">${velgType ? `<span class="algo-gruppe" role="group" aria-label="Hva vil du tegne?"><button type="button" class="tg" data-a="type" data-v="graf">Graf</button><button type="button" class="tg" data-a="type" data-v="tre">Tre</button></span>` : ""}` +
      `${eksempelValg}<span class="algo-grafv"><button type="button" data-a="nynode">Ny node</button><label class="algo-v"><input type="checkbox" data-f="retning"> Rettet (piler)</label></span>` +
      `<button type="button" data-a="angre" title="Angre (Ctrl/Cmd+Z)">Angre</button><button type="button" data-a="igjen" title="Gjør om (Ctrl/Cmd+Shift+Z)">Gjør om</button><button type="button" data-a="tom">Tøm</button></div>` +
      `<div class="algo-lerret" tabindex="0" aria-label="Tegneflate. N velger neste node og K neste kant. Delete sletter det som er valgt, Escape fjerner valget, piltastene flytter en valgt node."><svg class="algo-g algo-red"></svg></div>` +
      `<div class="algo-insp"></div>` +
      `<div class="algo-velg"><label class="algo-v">Algoritme <select data-f="algo"></select></label><span class="algo-vv"></span></div>` +
      `<div class="algo-sjekk"></div><div class="algo-anim"></div>` +
      `<details class="algo-json"><summary>Del tegningen som JSON</summary><textarea class="in" rows="4" spellcheck="false" aria-label="Tegningen som JSON"></textarea><div class="algo-rad"><button type="button" data-a="kopier">Kopier</button><button type="button" data-a="last">Last inn fra teksten</button><span class="mut" data-m="json" aria-live="polite"></span></div></details></div>`;
    const rot = el.querySelector(".algo-verk"), svg = rot.querySelector("svg.algo-red"), lerret = rot.querySelector(".algo-lerret");
    const insp = rot.querySelector(".algo-insp"), sjekk = rot.querySelector(".algo-sjekk"), anim = rot.querySelector(".algo-anim");
    const algoSel = rot.querySelector("[data-f=algo]"), vv = rot.querySelector(".algo-vv"), json = rot.querySelector(".algo-json");

    // --- tilstand og endringer
    const lagre = () => {
      if (inline) { if (typeof opts.endret === "function") opts.endret({ type: S.type, data: A.kopi(S.data) }); }
      else try { localStorage.setItem(NOKKEL, JSON.stringify({ type: S.type, data: S.data, algo: S.algo, valg: S.valg })); } catch (e) { /* privat modus o.l. */ }
    };
    let samle = null, samleTid = 0;
    const husk = () => { S.angre.push(JSON.stringify({ type: S.type, data: S.data })); if (S.angre.length > 80) S.angre.shift(); S.igjen = []; };
    // Én endring: lagrer angre-punkt (samlet for raske tastetrykk i samme felt), endrer, tegner og varsler.
    const endre = (fn, o = {}) => {
      const t = Date.now();
      if (!(o.samle && o.samle === samle && t - samleTid < 2500)) husk();
      samle = o.samle || null; samleTid = t;
      fn();
      etter(o);
    };
    const etter = (o = {}) => { tegn(); if (!o.beholdInsp) inspektor(); sjekkFelt(); anim.innerHTML = ""; lagre(); visJson(); };
    const tilbake = (fra, til) => {
      if (!fra.length) return;
      til.push(JSON.stringify({ type: S.type, data: S.data }));
      const x = JSON.parse(fra.pop());
      if (x.type !== S.type) { S.type = x.type; sikreAlgo(); algoListe(); }
      S.data = x.data; S.valgt = null; S.vb = null;
      etter();
    };

    // --- hjelpere for grafen og treet
    const gn = id => S.data.noder.find(n => n.id === id);
    const tn = id => treNoder(S.data).find(x => x.n.id === id);
    const brukteId = () => new Set(S.type === "tre" ? treNoder(S.data).map(x => x.n.id) : S.data.noder.map(n => n.id));
    const punkt = e => { const m = svg.getScreenCTM(); if (!m) return { x: 0, y: 0 }; const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return { x: p.x, y: p.y }; };
    const snap = v => Math.round(v / 10) * 10;
    const visGraf = () => {
      if (S.type === "tre") {
        const k = A.kopi(S.data);
        treNoder(k).forEach(({ n }) => { n.tekst = n.tekst || n.id; });
        return A.tre(k);
      }
      const c = csp(), d = S.data, mal = new Set(d.mal);
      return {
        retning: d.retning,
        noder: d.noder.map(n => ({ id: n.id, x: n.x, y: n.y, tekst: n.id, over: !c && fin(n.h) ? "h=" + fmt(n.h) : "", under: c && n.domene ? "{" + n.domene.join(",") + "}" : "", mal: !c && mal.has(n.id), start: !c && n.id === d.start })),
        kanter: d.kanter.map(k => ({ fra: k.fra, til: k.til, tekst: c ? k.rel || "" : fin(k.kost) ? fmt(k.kost) : "" }))
      };
    };
    let drag = null;
    function tegn(fryst) {
      const g = visGraf(), G = geometri(g);
      const W = lerret.clientWidth || 480, minH = inline ? 220 : 320, maksH = inline ? 420 : 560;
      const [x0, y0, x1, y1] = G.ramme;
      // Visningen utvides bare når noe havner utenfor, så nodene ikke hopper mens du tegner. Trær ordnes på nytt og tilpasses hver gang.
      // Aldri mindre enn 65 % (ellers blir teksten uleselig); da blir tegneflaten bredere og kan rulles sidelengs.
      const pass = (a0, b0, a1, b1) => {
        const bw = a1 - a0, bh = b1 - b0, s1 = Math.max(0.65, Math.min(1, W / bw)), H = Math.max(minH, Math.min(maksH, bh * s1)), s2 = Math.max(Math.min(s1, H / bh), Math.min(0.65, H / bh));
        const B = Math.max(W, Math.round(bw * s2));
        S.vb = [(a0 + a1) / 2 - B / s2 / 2, (b0 + b1) / 2 - H / s2 / 2, B / s2, H / s2].map(r1);
        svg.style.height = Math.round(H) + "px";
        svg.style.width = B > W ? B + "px" : "";
      };
      if (!fryst) {
        if (!g.noder.length) { if (!S.vb) { S.vb = [0, 0, Math.round(W), minH]; svg.style.height = minH + "px"; svg.style.width = ""; } }
        else if (!S.vb || S.type === "tre") pass(x0 - 30, y0 - 30, x1 + 30, y1 + 30);
        else if (x0 < S.vb[0] || y0 < S.vb[1] || x1 > S.vb[0] + S.vb[2] || y1 > S.vb[1] + S.vb[3]) pass(Math.min(S.vb[0], x0 - 30), Math.min(S.vb[1], y0 - 30), Math.max(S.vb[0] + S.vb[2], x1 + 30), Math.max(S.vb[1] + S.vb[3], y1 + 30));
      }
      svg.setAttribute("viewBox", S.vb.join(" "));
      const hand = S.type === "graf" && S.valgt && S.valgt[0] === "n" ? S.valgt.slice(1) : null;
      let s = grafInnhold(g, { G, valgt: S.valgt, hand });
      if (drag && drag.hand && drag.til && G.P.has(drag.hand)) { const p = G.P.get(drag.hand); s += `<line class="gummi" x1="${r1(p.x)}" y1="${r1(p.y)}" x2="${r1(drag.til.x)}" y2="${r1(drag.til.y)}"/>`; }
      if (!g.noder.length) s += `<text class="tomt" x="${S.vb[0] + S.vb[2] / 2}" y="${S.vb[1] + S.vb[3] / 2}">Klikk her for å lage den første noden</text>`;
      svg.innerHTML = s;
      rot.querySelectorAll("[data-a=type]").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === S.type));
      rot.querySelector(".algo-grafv").hidden = S.type !== "graf";
      rot.querySelector("[data-f=retning]").checked = S.type === "graf" && !!S.data.retning;
      rot.querySelector("[data-a=angre]").disabled = !S.angre.length;
      rot.querySelector("[data-a=igjen]").disabled = !S.igjen.length;
    }

    // --- handlinger
    const leggNode = (x, y) => {
      const id = nesteId(brukteId());
      endre(() => {
        S.data.noder.push({ id, x: snap(x), y: snap(y) });
        if (S.data.start == null && !csp()) S.data.start = id;
        S.valgt = "n" + id;
      });
    };
    const ledigPlass = () => {
      const [vx, vy, vw, vh] = S.vb || [0, 0, 480, 320];
      for (let y = vy + 60; y < vy + vh - 30; y += 90) for (let x = vx + 60; x < vx + vw - 30; x += 90) if (!S.data.noder.some(n => Math.hypot(n.x - x, n.y - y) < 70)) return { x, y };
      return { x: vx + vw / 2 + 20, y: vy + vh / 2 + 20 };
    };
    const leggKant = (fra, til) => {
      if (!gn(fra) || !gn(til)) return;
      if (csp() && (fra === til || S.data.kanter.some(k => (k.fra === fra && k.til === til) || (k.fra === til && k.til === fra)))) return;
      endre(() => { S.data.kanter.push({ fra, til }); S.valgt = "e" + (S.data.kanter.length - 1); });
      const f = insp.querySelector("[data-f=kost]");
      if (f && matchMedia("(pointer: fine)").matches) f.focus();
    };
    const slett = () => {
      if (!S.valgt) return;
      const k = S.valgt[0], id = S.valgt.slice(1);
      if (S.type === "tre") {
        const x = tn(id); if (!x || !x.far) return;
        endre(() => { x.far.barn = x.far.barn.filter(b => b !== x.n); S.valgt = null; });
        return;
      }
      if (k === "n") endre(() => {
        S.data.noder = S.data.noder.filter(n => n.id !== id);
        S.data.kanter = S.data.kanter.filter(e => e.fra !== id && e.til !== id);
        S.data.mal = S.data.mal.filter(m => m !== id);
        if (S.data.start === id) delete S.data.start;
        S.valgt = null;
      });
      else endre(() => { S.data.kanter.splice(+id, 1); S.valgt = null; });
    };
    const motsatt = t => (t === "max" ? "min" : "max");
    const leggBarn = () => {
      const x = S.valgt && tn(S.valgt.slice(1)); if (!x) return;
      const id = nesteId(brukteId());
      endre(() => {
        const n = x.n;
        if (n.type === "blad") n.type = x.far ? (x.far.type === "sjanse" ? "max" : motsatt(x.far.type)) : "max";
        delete n.verdi;
        const b = { id, type: "blad", verdi: 0, barn: [] };
        if (n.type === "sjanse") {
          const ps = n.barn.map(c => c.p);
          if (ps.every(p => p == null || p === ps[0])) { const p = +(1 / (n.barn.length + 1)).toFixed(3); n.barn.forEach(c => { c.p = p; }); b.p = p; }
        }
        n.barn.push(b);
        S.valgt = "n" + id;
      });
    };
    const omdop = (gammel, ny) => {
      if (S.type === "tre") { tn(gammel).n.id = ny; }
      else {
        gn(gammel).id = ny;
        S.data.kanter.forEach(k => { if (k.fra === gammel) k.fra = ny; if (k.til === gammel) k.til = ny; });
        S.data.mal = S.data.mal.map(m => (m === gammel ? ny : m));
        if (S.data.start === gammel) S.data.start = ny;
      }
      S.valgt = "n" + ny;
    };

    // --- inspektøren under tegneflaten
    function inspektor() {
      const v = S.valgt;
      if (v && S.type === "graf" && v[0] === "n" && gn(v.slice(1))) {
        const n = gn(v.slice(1)), c = csp(), andre = S.data.noder.filter(m => m.id !== n.id).concat(S.data.retning ? [n] : []);
        insp.innerHTML = `<div class="algo-rad"><b>Node ${esc(n.id)}</b><label class="algo-v">Navn <input class="in kort" data-f="navn" value="${esc(n.id)}" maxlength="12" autocomplete="off"></label>` +
          (c ? `<label class="algo-v">Domene <input class="in" data-f="domene" value="${esc((n.domene || []).join(", "))}" placeholder="1, 2, 3"></label>`
            : `<label class="algo-v">h <input class="in kort" data-f="h" inputmode="decimal" value="${fin(n.h) ? fmt(n.h) : ""}" placeholder="–"></label><label class="algo-v"><input type="checkbox" data-f="start"${S.data.start === n.id ? " checked" : ""}> Start</label><label class="algo-v"><input type="checkbox" data-f="mal"${S.data.mal.includes(n.id) ? " checked" : ""}> Mål</label>`) +
          (andre.length ? `<label class="algo-v">Ny kant til <select data-f="kobletil">${andre.map(m => `<option>${esc(m.id)}</option>`).join("")}</select></label><button type="button" data-a="kant">Legg til</button>` : "") +
          `<button type="button" data-a="slett">Slett node</button><button type="button" data-a="lukk" aria-label="Fjern markeringen" title="Fjern markeringen (Escape)">×</button></div><p class="mut algo-hint" data-m="insp" aria-live="polite"></p>`;
      } else if (v && S.type === "graf" && v[0] === "e" && S.data.kanter[+v.slice(1)]) {
        const k = S.data.kanter[+v.slice(1)], c = csp();
        insp.innerHTML = `<div class="algo-rad"><b>${c ? `Begrensning ${esc(k.fra)} ${esc(k.rel || "≠")} ${esc(k.til)}` : `Kant ${esc(k.fra)} ${S.data.retning ? "→" : "–"} ${esc(k.til)}`}</b>` +
          (c ? "" : `<label class="algo-v">Kost <input class="in kort" data-f="kost" inputmode="decimal" value="${fin(k.kost) ? fmt(k.kost) : ""}" placeholder="1"></label>`) +
          (S.data.retning && k.fra !== k.til ? `<button type="button" data-a="snu">Snu retningen</button>` : "") +
          `<button type="button" data-a="slett">Slett kant</button><button type="button" data-a="lukk" aria-label="Fjern markeringen" title="Fjern markeringen (Escape)">×</button></div><p class="mut algo-hint" data-m="insp" aria-live="polite"></p>`;
      } else if (v && S.type === "tre" && tn(v.slice(1))) {
        const { n, far } = tn(v.slice(1));
        insp.innerHTML = `<div class="algo-rad"><b>Node ${esc(n.id)}</b><label class="algo-v">Navn <input class="in kort" data-f="navn" value="${esc(n.id)}" maxlength="12" autocomplete="off"></label>` +
          `<label class="algo-v">Type <select data-f="ttype">${["max", "min", "sjanse", "blad"].map(t => `<option${t === n.type ? " selected" : ""}${t === "blad" && n.barn.length ? " disabled" : ""}>${t}</option>`).join("")}</select></label>` +
          (n.type === "blad" ? `<label class="algo-v">Verdi <input class="in kort" data-f="verdi" inputmode="decimal" value="${fin(n.verdi) ? fmt(n.verdi) : ""}"></label>` : "") +
          (far && far.type === "sjanse" ? `<label class="algo-v">p <input class="in kort" data-f="p" inputmode="decimal" value="${fin(n.p) ? fmt(n.p) : ""}"></label>` : "") +
          `<button type="button" data-a="barn">+ Barn</button>${far ? `<button type="button" data-a="slett">Slett deltre</button>` : ""}<button type="button" data-a="lukk" aria-label="Fjern markeringen" title="Fjern markeringen (Escape)">×</button></div><p class="mut algo-hint" data-m="insp" aria-live="polite"></p>`;
      } else {
        S.valgt = null;
        insp.innerHTML = `<p class="mut algo-hint">${S.type === "tre" ? "Klikk på en node for å endre type og verdi, legge til barn eller slette deltreet. Treet ordnes automatisk." :
          "Klikk på et tomt sted for å lage en node. Dra i ⊕ på en valgt node for å lage en kant (slipp på et tomt sted for å lage en ny node samtidig). Dra en node for å flytte den. Klikk på en node eller kant for å endre den."} Med tastaturet: gå til tegneflaten og trykk N for neste node${S.type === "tre" ? "" : " og K for neste kant"}.</p>`;
      }
    }
    const inspMelding = t => { const m = insp.querySelector("[data-m=insp]"); if (m) m.textContent = t; };
    insp.addEventListener("input", e => {
      const f = e.target.dataset.f, v = S.valgt, t = e.target; if (!f || !v) return;
      const id = v.slice(1);
      const tallFelt = (sett) => { const x = tallFra(t.value); t.setAttribute("aria-invalid", Number.isNaN(x)); if (Number.isNaN(x)) return inspMelding("Skriv et tall, f.eks. 3 eller 2,5."); inspMelding(""); endre(() => sett(x), { samle: f + v, beholdInsp: true }); };
      const sett = (o, k) => x => { if (x === undefined) delete o[k]; else o[k] = x; };
      if (f === "h") tallFelt(sett(gn(id), "h"));
      else if (f === "kost") tallFelt(sett(S.data.kanter[+id], "kost"));
      else if (f === "verdi") tallFelt(sett(tn(id).n, "verdi"));
      else if (f === "p") tallFelt(sett(tn(id).n, "p"));
      else if (f === "domene") endre(() => { const l = t.value.split(/[,;\s]+/).filter(Boolean).map(x => (fin(tallFra(x)) ? tallFra(x) : x)); if (l.length) gn(id).domene = l; else delete gn(id).domene; }, { samle: f + v, beholdInsp: true });
    });
    insp.addEventListener("change", e => {
      const f = e.target.dataset.f, v = S.valgt, t = e.target; if (!f || !v) return;
      const id = v.slice(1);
      if (f === "navn") {
        const ny = t.value.trim();
        if (ny === id) return;
        if (!ny || /\s/.test(ny) || brukteId().has(ny)) { t.setAttribute("aria-invalid", "true"); inspMelding(!ny ? "Navnet kan ikke være tomt." : /\s/.test(ny) ? "Navnet kan ikke ha mellomrom." : `${ny} finnes allerede.`); return; }
        endre(() => omdop(id, ny));
      } else if (f === "start") endre(() => { if (t.checked) S.data.start = id; else if (S.data.start === id) delete S.data.start; });
      else if (f === "mal") endre(() => { S.data.mal = t.checked ? [...new Set([...S.data.mal, id])] : S.data.mal.filter(m => m !== id); });
      else if (f === "ttype") endre(() => { const n = tn(id).n; n.type = t.value; if (t.value !== "blad") delete n.verdi; else if (!fin(n.verdi)) n.verdi = 0; });
    });

    // --- sjekken og animasjonen
    function sjekkFelt() {
      const a = alg();
      if (!a) { sjekk.innerHTML = `<p class="mut">Ingen algoritme som bruker ${S.type === "tre" ? "trær" : "grafer"}, er lastet ennå.</p>`; return; }
      const r = typeof a.svar === "function" ? prov(() => a.svar(A.kopi(S.data), { ...S.valg })) : { v: [] };
      const ting = r.feil || !Array.isArray(r.v) ? [] : r.v.filter(x => x && x.id != null);
      S.ting = ting;
      sjekk.innerHTML = `<h3>Sjekk svaret ditt</h3>` + (r.feil ? feilTekst(r.feil) : !ting.length ? `<p class="mut">${typeof a.svar === "function" ? "Ingenting å sjekke for denne tegningen ennå (mangler start eller mål?)." : "Denne algoritmen har ingen automatisk sjekk."}</p>` :
        `<p class="mut">Løs for hånd først. Store og små bokstaver, komma, mellomrom, parenteser og piler spiller ingen rolle.</p>` +
        ting.map((x, i) => `<div class="algo-felt"><label class="lab" for="${rot.dataset.u}s${i}">${esc(x.navn || x.id)}</label><input class="in" id="${rot.dataset.u}s${i}" data-s="${i}" autocomplete="off" spellcheck="false" value="${esc(S.svar[x.id] || "")}"><div class="algo-res" aria-live="polite"></div>${S.visFasit ? `<div class="algo-fasit">Fasit: <b>${esc(x.verdi)}</b></div>` : ""}</div>`).join("")) +
        `<div class="algo-rad">${ting.length ? `<button type="button" class="pri" data-a="sjekk">Sjekk</button><button type="button" data-a="fasit">${S.visFasit ? "Skjul fasit" : "Vis fasit"}</button>` : ""}<button type="button" data-a="kjor">Kjør animasjonen</button><button type="button" data-a="samm">Sammenlign algoritmer</button></div>`;
    }
    rot.dataset.u = uid();
    sjekk.addEventListener("input", e => { const i = e.target.dataset.s; if (i != null && S.ting[+i]) { S.svar[S.ting[+i].id] = e.target.value; e.target.parentNode.querySelector(".algo-res").textContent = ""; } });
    sjekk.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.dataset.s != null) { e.preventDefault(); sjekkAlle(); } });
    const sjekkAlle = () => {
      sjekk.querySelectorAll("[data-s]").forEach(inp => {
        const x = S.ting[+inp.dataset.s], r = A.sammenlign(x.verdi, inp.value, x.godta), res = inp.parentNode.querySelector(".algo-res");
        res.className = "algo-res " + (r.ok ? "ok" : r.tom ? "" : "nei");
        res.textContent = r.ok ? "✓ Riktig" : r.tom ? r.melding : "✗ " + r.melding;
      });
    };
    const kjorAnim = () => {
      const a = alg(); if (!a) return;
      const r = prov(() => a.kjor(A.kopi(S.data), { ...S.valg }));
      if (r.feil) anim.innerHTML = feilTekst(r.feil); else spiller(anim, r.v);
      const sp = anim.querySelector(".algo-spiller"); if (sp) sp.focus({ preventScroll: true });
    };
    function algoListe() {
      const l = algos();
      algoSel.innerHTML = l.length ? FAM.concat([...new Set(l.map(a => a.familie))].filter(f => !FAM.includes(f))).map(f => {
        const g = l.filter(a => a.familie === f);
        return g.length ? `<optgroup label="${esc(f)}">${g.map(a => `<option value="${esc(a.id)}"${a.id === S.algo ? " selected" : ""}>${esc(a.navn)}</option>`).join("")}</optgroup>` : "";
      }).join("") : `<option value="">(ingen lastet)</option>`;
      const a = alg();
      if (a) valgSkjema(vv, a, S.valg, () => { sjekkFelt(); anim.innerHTML = ""; lagre(); });
      else vv.innerHTML = "";
    }

    // --- sammenligning: samme tegning gjennom flere algoritmer fra samme familie, side om side
    let sammValgt = null;
    const kortNavn = b => (gruppe(b) && gruppe(b).kort[b.id]) || b.navn;
    function sammenlign() {
      const a = alg(); if (!a) return;
      const fam = algos().filter(b => b.familie === a.familie);
      if (!sammValgt || !sammValgt.includes(a.id)) sammValgt = [a.id, ...fam.filter(b => b !== a).slice(0, 2).map(b => b.id)];
      // Valg med samme id (f.eks. graph search) følger med fra den valgte algoritmen; resten får standardverdien.
      const kj = fam.filter(b => sammValgt.includes(b.id)).map(b => {
        const v = b === a ? { ...S.valg } : { ...stdValg(b), ...Object.fromEntries(Object.entries(S.valg).filter(([k]) => (b.valg || []).some(x => x.id === k))) };
        return { b, s: typeof b.svar === "function" ? prov(() => b.svar(A.kopi(S.data), v)) : { v: [] }, sc: prov(() => b.kjor(A.kopi(S.data), v)) };
      });
      const navn = x => x.navn || x.id, svarAv = k => (Array.isArray(k.s.v) ? k.s.v.filter(Boolean) : []);
      const kol = [...new Set(kj.flatMap(k => svarAv(k).map(navn)))];
      anim.innerHTML = `<div class="algo-samm"><h3>Sammenlign på samme ${S.type === "tre" ? "tre" : "graf"}</h3>` +
        `<div class="algo-rad" role="group" aria-label="Algoritmer å sammenligne">${fam.map(b => `<label class="algo-v"><input type="checkbox" data-samm="${esc(b.id)}"${sammValgt.includes(b.id) ? " checked" : ""}${b === a ? " disabled" : ""}> ${esc(kortNavn(b))}</label>`).join("")}</div>` +
        (kol.length ? tabell({ kol: ["Algoritme", ...kol], rader: kj.map(k => [kortNavn(k.b), ...kol.map(c => { const x = svarAv(k).find(y => navn(y) === c); return k.s.feil ? "feil" : x ? x.verdi : "–"; })]) }) : "") +
        `<div class="algo-rad"><button type="button" class="pri" data-a="sammspill">Spill alle fra start</button></div>` +
        `<div class="algo-sgrid">${kj.map((k, i) => `<section><h4>${esc(k.b.navn)}</h4><div data-sp="${i}"></div></section>`).join("")}</div></div>`;
      kj.forEach((k, i) => { const el = anim.querySelector(`[data-sp="${i}"]`); if (k.sc.feil) el.innerHTML = feilTekst(k.sc.feil); else spiller(el, k.sc.v); });
    }
    anim.addEventListener("change", e => {
      const id = e.target.dataset.samm; if (!id) return;
      sammValgt = e.target.checked ? [...sammValgt, id] : sammValgt.filter(x => x !== id);
      sammenlign();
    });

    // --- JSON
    const visJson = () => { if (json.open) json.querySelector("textarea").value = JSON.stringify({ type: S.type, data: S.data }); };
    json.addEventListener("toggle", visJson);
    const jsonMelding = t => { json.querySelector("[data-m=json]").textContent = t; };

    // --- klikk på knapper
    rot.addEventListener("click", e => {
      const b = e.target.closest("[data-a]"); if (!b || !rot.contains(b) || b.closest(".algo-spiller")) return;
      const a = b.dataset.a;
      if (a === "type" && b.dataset.v !== S.type) endre(() => { S.type = b.dataset.v; S.data = tom(S.type); S.valgt = null; S.vb = null; sikreAlgo(); algoListe(); });
      else if (a === "nynode") { const p = ledigPlass(); leggNode(p.x, p.y); }
      else if (a === "angre") tilbake(S.angre, S.igjen);
      else if (a === "igjen") tilbake(S.igjen, S.angre);
      else if (a === "tom") endre(() => { S.data = tom(S.type); S.valgt = null; S.vb = null; });
      else if (a === "lukk") { S.valgt = null; tegn(); inspektor(); lerret.focus({ preventScroll: true }); }
      else if (a === "slett") slett();
      else if (a === "kant") leggKant(S.valgt.slice(1), insp.querySelector("[data-f=kobletil]").value);
      else if (a === "snu") endre(() => { const k = S.data.kanter[+S.valgt.slice(1)]; [k.fra, k.til] = [k.til, k.fra]; });
      else if (a === "barn") leggBarn();
      else if (a === "sjekk") sjekkAlle();
      else if (a === "fasit") { S.visFasit = !S.visFasit; sjekkFelt(); }
      else if (a === "kjor") kjorAnim();
      else if (a === "samm") sammenlign();
      else if (a === "sammspill") anim.querySelectorAll(".algo-spiller").forEach(sp => { sp.querySelector("[data-a=forst]").click(); sp.querySelector("[data-a=spill]").click(); });
      else if (a === "kopier") {
        const t = json.querySelector("textarea");
        t.value = JSON.stringify({ type: S.type, data: S.data });
        (navigator.clipboard ? navigator.clipboard.writeText(t.value) : Promise.reject()).then(() => jsonMelding("Kopiert."), () => { t.select(); jsonMelding("Merket. Kopier med Ctrl/Cmd+C."); });
      } else if (a === "last") {
        let x;
        try { x = JSON.parse(json.querySelector("textarea").value); } catch (z) { return jsonMelding("Teksten er ikke gyldig JSON."); }
        const type = x && (x.type === "graf" || x.type === "tre") && x.data ? x.type : typeAv(x);
        const data = x && x.data && (x.type === "graf" || x.type === "tre") ? x.data : x;
        if (!type || !velgType && type !== S.type) return jsonMelding(type ? `Her kan du bare laste inn ${S.type === "tre" ? "et tre" : "en graf"}.` : "Fant ingen graf (noder, kanter) eller tre (barn) i teksten.");
        endre(() => { S.type = type; S.data = rens(type, data); S.valgt = null; S.vb = null; sikreAlgo(); algoListe(); });
        jsonMelding("Lastet inn.");
      }
    });
    rot.addEventListener("change", e => {
      const f = e.target.dataset.f;
      if (f === "retning") endre(() => { S.data.retning = e.target.checked; });
      else if (f === "algo") { S.algo = e.target.value; S.valg = stdValg(alg()); S.visFasit = false; algoListe(); sjekkFelt(); anim.innerHTML = ""; lagre(); inspektor(); tegn(); }
      else if (f === "eksempel" && e.target.value) {
        const [aid, i] = e.target.value.split("|"), a = A.alle.find(x => x.id === aid), ex = a && a.eksempler[+i];
        e.target.value = "";
        if (!ex) return;
        endre(() => { S.type = a.data; S.data = rens(a.data, A.kopi(ex.data)); S.algo = a.id; S.valg = { ...stdValg(a), ...(ex.valg || {}) }; S.valgt = null; S.vb = null; S.visFasit = false; algoListe(); });
      }
    });

    // --- peker: klikk, dra, koble (mus, styreflate og berøring via pointer events)
    svg.addEventListener("pointerdown", e => {
      if (e.button > 0) return;
      const h = e.target.closest("[data-hand]"), k = e.target.closest("[data-k]");
      drag = { id: e.pointerId, x0: e.clientX, y0: e.clientY, hand: h ? h.getAttribute("data-hand") : null, k: k ? k.getAttribute("data-k") : null, flyttet: false };
      try { svg.setPointerCapture(e.pointerId); } catch (z) { /* ikke støttet */ }
      if (drag.hand || (drag.k && drag.k[0] === "n")) e.preventDefault();
    });
    svg.addEventListener("pointermove", e => {
      if (!drag || e.pointerId !== drag.id) return;
      if (!drag.flyttet && Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) < 5) return;
      const p = punkt(e);
      if (drag.hand) { drag.flyttet = true; drag.til = p; tegn(true); }
      else if (S.type === "graf" && drag.k && drag.k[0] === "n" && gn(drag.k.slice(1))) {
        if (!drag.flyttet) { husk(); samle = null; }
        drag.flyttet = true;
        const n = gn(drag.k.slice(1)); n.x = r1(p.x); n.y = r1(p.y);
        tegn(true);
      }
    });
    const slipp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      const d = drag; drag = null;
      if (e.type === "pointercancel") return tegn();
      if (d.hand) {
        if (!d.flyttet) return tegn();
        const t = document.elementFromPoint(e.clientX, e.clientY), k = t && t.closest ? t.closest("[data-k]") : null;
        const til = k && svg.contains(k) && k.getAttribute("data-k")[0] === "n" ? k.getAttribute("data-k").slice(1) : null;
        if (til) leggKant(d.hand, til);
        else {
          const p = punkt(e), id = nesteId(brukteId());
          endre(() => { S.data.noder.push({ id, x: snap(p.x), y: snap(p.y) }); S.data.kanter.push({ fra: d.hand, til: id }); S.valgt = "n" + id; });
        }
        return;
      }
      if (d.flyttet && d.k && d.k[0] === "n") {
        const n = gn(d.k.slice(1));
        if (n) { n.x = snap(n.x); n.y = snap(n.y); }
        etter({ beholdInsp: true });
        return;
      }
      if (d.flyttet) return;
      if (d.k) { S.valgt = d.k; tegn(); inspektor(); }
      else if (S.type === "graf") { const p = punkt(e); leggNode(p.x, p.y); }
      else { S.valgt = null; tegn(); inspektor(); }
      lerret.focus({ preventScroll: true });
    };
    svg.addEventListener("pointerup", slipp);
    svg.addEventListener("pointercancel", slipp);
    rot.addEventListener("keydown", e => {
      const tag = e.target.tagName, skriv = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
      if (skriv || e.target.closest(".algo-spiller")) return;
      if ((e.metaKey || e.ctrlKey) && (e.key === "z" || e.key === "Z" || e.key === "y")) { e.preventDefault(); if (e.shiftKey || e.key === "y") tilbake(S.igjen, S.angre); else tilbake(S.angre, S.igjen); return; }
      if (e.target !== lerret) return;
      if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); slett(); }
      else if (e.key === "Escape") { S.valgt = null; tegn(); inspektor(); }
      else if ((e.key === "n" || e.key === "k") && !e.metaKey && !e.ctrlKey && !e.altKey) {
        // Tastaturvalg: n går til neste node, k til neste kant.
        const ids = e.key === "n" ? (S.type === "tre" ? treNoder(S.data).map(x => "n" + x.n.id) : S.data.noder.map(n => "n" + n.id)) : S.type === "graf" ? S.data.kanter.map((_, i) => "e" + i) : [];
        if (!ids.length) return;
        e.preventDefault();
        S.valgt = ids[(ids.indexOf(S.valgt) + 1) % ids.length]; tegn(); inspektor();
      }
      else if (e.key.startsWith("Arrow") && S.type === "graf" && S.valgt && S.valgt[0] === "n") {
        e.preventDefault();
        const n = gn(S.valgt.slice(1)), d = { ArrowLeft: [-10, 0], ArrowRight: [10, 0], ArrowUp: [0, -10], ArrowDown: [0, 10] }[e.key];
        if (n && d) endre(() => { n.x = snap(n.x + d[0]); n.y = snap(n.y + d[1]); }, { samle: "flytt" + n.id, beholdInsp: true });
      }
    });

    algoListe();
    tegn();
    inspektor();
    sjekkFelt();
    if (S.sammStart) sammenlign();
  };

  if (typeof module !== "undefined") module.exports = { tokens, geometri, rensGraf, rensTre };
})(window.ALGO);
