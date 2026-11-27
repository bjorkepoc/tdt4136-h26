#!/usr/bin/env -S uv run --script
# /// script
# dependencies = ["markdown-it-py"]
# ///
"""Lager arbeid/nettside.html: videoene, notatene, Øv selv med svarfelt, seeplan, feillogg og eksamenslista på ett sted.

Kjør på nytt etter endringer i notatene, SEEPLAN.md eller FEILLOGG.md:  uv run arbeid/lag-nettside.py
Siden åpnes rett fra disken. Videoene hentes fra videoer/eNN-*/out/, så den må ligge i arbeid/."""
import html
import json
import os
import re
import sys
from datetime import date
from pathlib import Path
from urllib.parse import quote

from markdown_it import MarkdownIt

A = Path(__file__).resolve().parent
V = A / "videoer"
EX = A.parent / "materiale/Files/Previous exams"
_md = MarkdownIt("commonmark", {"html": True}).enable("table")
EP = re.compile(r"(?<![\w#/-])E(0[1-9]|1\d|2[01])(?!\w)")


def md(text):
    """Markdown til HTML, med E01–E21 i tekst lenket til episodene."""
    out = _md.render(text).replace("<br />\n", "<br />")  # hardt linjeskift gir ellers dobbelt linjeskift i sitatene (pre-line)
    return re.sub(r">([^<]+)", lambda m: ">" + EP.sub(r'<a href="#e\1">E\1</a>', m.group(1)), out)


def section(text, name):
    m = re.search(rf"^## {name}\n(.*?)(?=^## |\Z)", text, re.S | re.M)
    return m.group(1).strip() if m else ""


def quizfasit(s):
    # Oppgavene i nettside-oppgaver/ har fasit per oppgave; notatets Øv selv-fasit gjelder en annen liste.
    return "".join(b for b in re.split(r"(?m)^(?=\*\*)", s) if b.startswith(("**Quizene", "**Faglige")))


def drop(text, *names):
    for n in names:
        text = re.sub(rf"^## {n}\n.*?(?=^## |\Z)", "", text, flags=re.S | re.M)
    return text


PAPIR = {"e11", "e12", "e13", "e14", "e15", "e16", "a4"}  # logikken: kan besvares på papir, som oppgave 9 og 10 på eksamen 2025


def klargjor(tasks, papir=False):
    """Oppgaver fra JSON: markdown til HTML (tekst og fasit), figurene for seg, svarfelt hvis ingen er gitt."""
    for x in tasks:
        if papir or "handwritten sheets" in x.get("d", ""):
            x["papir"] = 1
        for s in x.get("img", []):
            assert (A / s).exists(), s
        alt = html.escape(f'Figur til oppgaven «{x.get("t", "")}»', quote=True)
        x["d"] = md(x.get("d", ""))
        if x.get("img"):  # plasseres av siden: før første delspørsmål, eller øverst når teksten sier «above»
            x["fig"] = "".join(f'<img class="fig" src="{quote(s)}" alt="{alt}">' for s in x.pop("img"))
        x.setdefault("f", [] if x.get("tf") or x.get("grid") else [["Svar", "area"]])
        if x.get("fasit"):
            x["fasit"] = md(x["fasit"])
    return tasks


def kapitler(p):
    out = []
    for blk in p.read_text().split("[CHAPTER]")[1:]:
        start = int(re.search(r"START=(\d+)", blk).group(1)) / 1000
        out.append([round(start, 2), re.search(r"title=(.*)", blk).group(1).strip()])
    return out


def tekst(p):
    t = lambda s: sum(float(x) * k for x, k in zip(s.replace(",", ".").split(":"), (3600, 60, 1)))
    out = []
    for blk in p.read_text().strip().split("\n\n"):
        lines = blk.strip().splitlines()
        if len(lines) >= 3 and "-->" in lines[1]:
            a, b = lines[1].split(" --> ")
            out.append([round(t(a), 2), round(t(b), 2), "\n".join(lines[2:])])
    return out


eps, feller = [], []
for p in sorted((V / "notater").glob("e[0-9][0-9]-*.md")):
    t = p.read_text()
    ep, title = re.match(r"# (E\d\d) – (.+)", t).groups()
    pensum = re.search(r"^> Pensum: (.+)$", t, re.M).group(1)
    video, length = re.search(r"^> Video: `videoer/(.+?)` \((.+?)\)", t, re.M).groups()
    out = (V / video).parent
    assert (V / video).exists(), video
    eid = ep.lower()
    data = json.loads((A / "nettside-oppgaver" / f"{eid}.json").read_text())  # utskrevne eksamensoppgaver med figurer
    body = drop(t, "Kapitler i videoen", "Øv selv", "Fasit")
    body = re.sub(r"\A# .*\n|^> (Pensum|Video): .*\n", "", body, flags=re.M)
    eps.append({"id": eid, "ep": ep, "title": html.escape(title), "pensum": html.escape(pensum), "video": "videoer/" + quote(video),
                "len": length, "chap": kapitler(out / "chapters.txt"), "subs": tekst(out / "undertekster.srt"),
                "note": md(body), "intro": md(data.get("intro", "")), "tasks": klargjor(data["tasks"], eid in PAPIR), "fasit": md(quizfasit(section(t, "Fasit")))})
    feller.append(f'<section><h2><a href="#{eid}">{ep}</a> {html.escape(title)}</h2>' + md(section(t, "Eksamensfeller")) + "</section>")
assert len(eps) == 21, len(eps)
# «resten»: "e02/8" peker på de andre deloppgavene i samme eksamensoppgave. Siden viser feltene og fasiten deres bak en knapp.
ved = {e["id"]: e for e in eps}
for e in eps:
    for x in e["tasks"]:
        if r := x.pop("resten", None):
            o, k = r.split("/")
            y, har = ved[o]["tasks"][int(k)], {f[0] for f in x["f"]}
            x["rest"] = {"ep": ved[o]["ep"], "tittel": ved[o]["title"], "f": [f for f in y["f"] if f[0] not in har], "fasit": y.get("fasit", "")}

rader = []
for f in sorted(EX.iterdir()):
    if f.name.startswith("."):
        continue
    n = f.stem
    kind = "oppgaver med fasit rett under" if ("Q&A" in n or "QA" in n) else "bare fasit" if n.endswith(("A", "Av2")) else "bare oppgaver"
    note = "Spart til fullprøve 01.12" if n.startswith("2019") else "Spart til fullprøve 03.12" if n in ("2020Qv2", "2020Av2") else \
        "Kontinuasjon (aug. 2021), fri til bruk" if n.startswith("2020Resit") else ""
    rader.append(f'<tr><td><a href="../materiale/Files/Previous%20exams/{quote(f.name)}">{html.escape(f.name)}</a></td><td>{kind}</td><td>{note}</td></tr>')
eksamener = ("<h1>Eksamener 2015–2025</h1><p>Filene ligger i <code>materiale/Files/Previous exams/</code>. PDF-ene åpnes her i nettleseren. "
             "Word-filene lastes ned når du klikker, og åpnes derfra. For 2022–2025 finnes bare filer der fasiten står rett under hver oppgave, så dekk til før du leser videre.</p>"
             "<table><thead><tr><th>Fil</th><th>Innhold</th><th>Merknad</th></tr></thead><tbody>" + "".join(rader) + "</tbody></table>")

# Øvingene (Assignment 1–4 og oppgaveforelesningene) vises som episoder uten video.
# Prøveeksamenene (nettside-prover/) er laget av oss i 2025-formatet og vises i en egen gruppe etter øvingene.
ovinger = []
filer = [(f, "Øvinger", "øving") for f in sorted((A / "nettside-ovinger").glob("*.json"), key=lambda f: (f.stem.startswith("al"), f.stem))]
filer += [(f, "Prøveeksamener", "prøveeksamen") for f in sorted((A / "nettside-prover").glob("*.json"), key=lambda f: (f.stem.startswith("b"), f.stem))]
# Tidligere eksamener ordrett (nettside-eksamener/), nyeste først, i samme eksamensvisning. 2019 og 2020 ordinær er spart til fullprøvene.
filer += [(f, "Tidligere eksamener", "eksamen") for f in sorted((A / "nettside-eksamener").glob("*.json"), reverse=True)]
for f, grp, art in filer:
    o = json.loads(f.read_text())
    if o.get("vis_fra", "") > date.today().isoformat():  # AL3 bygger på 2020Qv2, spart til fullprøven 03.12
        continue
    ovinger.append({"id": o["id"], "ep": o["ep"], "title": html.escape(o["tittel"]), "kilde": o.get("kilde", ""),
                    "note": md(o.get("om", "")), "intro": md(o.get("intro", "")), "tasks": klargjor(o["tasks"], o["id"] in PAPIR or art == "eksamen"), "vedlegg": md(o.get("vedlegg", "")),
                    "fasit": md(o.get("fasit", "")), "grp": grp, "art": art})

valgfri = lambda p: md(p.read_text()) if p.exists() else ""  # seeplan og feillogg er personlige og finnes ikke i den offentlige kopien
intro, _, rest = (A / "LEKSIKON.md").read_text().partition("\n## ")
# Pseudokoden: hele fila som én side, og hver ###-blokk under algoritme-id-ene i <!-- algo: … -->.
pseudo = {"side": "", "per": {}}
if (A / "PSEUDOKODE.md").exists():
    pk = (A / "PSEUDOKODE.md").read_text()
    pseudo["side"] = re.sub(r"<!-- algo: (.*?) -->", lambda m: f'<p class="algo-pl" data-algo="{m[1].replace(",", "")}"></p>', md(pk))
    for blokk in pk.split("\n### ")[1:]:
        m = re.search(r"<!-- algo: (.*?) -->", blokk)
        for i in (m[1].replace(",", " ").split() if m else []):
            pseudo["per"][i] = pseudo["per"].get(i, "") + md("### " + blokk.split("\n## ")[0])
# «Bare i boka»: pensum som ikke ble forelest. Hver «## 3.4.5 Tittel»-blokk har <!-- prio: A | ep: E02 | … -->, en forklaring
# og pugge-kort som «- spørsmål :: svar». Kortene puggs med spaced repetition på siden (#boka).
boka = {"intro": "", "s": []}
if (A / "BARE-I-BOKA.md").exists():
    intro_b, *blokker = re.split(r"(?m)^## ", (A / "BARE-I-BOKA.md").read_text())
    boka["intro"] = md(re.sub(r"^# .*\n", "", intro_b))
    for b in blokker:
        tittel, _, kropp = b.partition("\n")
        meta = dict(x.split(":", 1) for x in re.search(r"<!--(.*?)-->", kropp)[1].split("|") if ":" in x)
        meta = {k.strip(): v.strip() for k, v in meta.items()}
        kort = [[x.strip() for x in l[2:].split(" :: ", 1)] for l in kropp.splitlines() if l.startswith("- ") and " :: " in l]
        tekst = "\n".join(l for l in kropp.splitlines() if not (l.startswith("- ") and " :: " in l))
        n, _, t = tittel.strip().partition(" ")
        boka["s"].append({"n": n, "t": t, "p": meta.get("prio", "C"), "ep": meta.get("ep", ""), "fo": meta.get("forelest", ""),
                          "ex": meta.get("eksamen", ""), "merk": meta.get("merk", ""), "h": md(re.sub(r"<!--.*?-->", "", tekst, count=1)).replace("<p><strong>Husk:", '<p class="husk"><strong>Husk:'), "k": kort})
# Forelesningsslidene vises i nettleserens PDF-visning på #slides. Oppgaveforelesning 1 finnes bare som pptx, så arbeid/slides/ har en PDF eksportert fra den.
# Oppgaveforelesning 3 bruker alien-oppgaven fra eksamen 2020 (spart til fullprøven 03.12) og vises først fra 04.12, som AL3.
slides = []
for f, n, t in [("Lecture1-Fall2026_Part1_Pinar.pdf", "L1a", "Introduksjon: hva er AI"), ("Lecture1-Fall2026_Part2_Espen.pdf", "L1b", "Praktisk info og agenter"),
                ("Lecture1-Fall2026_Part3_Massimiliano.pdf", "L1c", "Intelligent agents"), ("Lecture2-Fall2026.pdf", "L2", "Solving problems by searching"),
                ("Lecture3-Fall2026.pdf", "L3", "A* og search in complex environments"), ("Lecture4-CSP-Fall2026.pdf", "L4", "Constraint satisfaction problems"),
                ("Lecture5-PL-Fall2026.pdf", "L5", "Propositional logic"), ("Lecture6-FOL-Fall2026.pdf", "L6", "First-order logic"),
                ("Lecture7-FOL-Inference-Fall2026.pdf", "L7", "Inference in first-order logic"), ("Lecture8-AS-Fall2026.pdf", "L8", "Adversarial search and games"),
                ("Lecture9-NLP-Fall2026.pdf", "L9", "Natural language processing"), ("Lecture10-GT-Fall2026.pdf", "L10", "Game theory"),
                ("Lecture11-PLANNING-Fall2026.pdf", "L11", "Automated planning"), ("Lecture12-KR-ETHICS-Fall2026.pdf", "L12", "Knowledge representation og etikk"),
                ("Lecture13-Summary-CSP-AG-GT-Logic-Fall2026.pdf", "L13", "Oppsummering: CSP, spill, spillteori, logikk"),
                ("AssignmentLecture1-Fall2026.pdf", "AL1", "Oppgaveforelesning: search"), ("AssignmentLecture2-Fall2026.pdf", "AL2", "Oppgaveforelesning: CSP"),
                ("AssignmentLecture3-Fall2026.pdf", "AL3", "Oppgaveforelesning: adversarial search")]:
    if n == "AL3" and date.today().isoformat() < "2026-12-04":
        continue
    sti = A / "slides" / f if n == "AL1" else EX.parent / f
    assert sti.exists(), sti
    slides.append({"n": n, "t": t, "f": ("slides/" if n == "AL1" else "../materiale/Files/") + quote(f)})
D = {"boka": boka, "slides": slides, "pseudo": pseudo, "eps": eps, "ov": ovinger, "leks": {"intro": md(re.sub(r"^# .*\n", "", intro)), "body": md("## " + rest)}, "plan": valgfri(V / "SEEPLAN.md"), "feil": valgfri(A / "FEILLOGG.md"),
     "feller": "<h1>Alle eksamensfeller</h1><p>Sjekklista for den siste uka, samlet fra alle episodene.</p>" + "".join(feller), "exams": eksamener}
page = (A / "nettside-mal.html").read_text().replace("__DATA__", json.dumps(D, ensure_ascii=False).replace("</", "<\\/"))
# Svarene lagres under oppgavens nummer i settet. Skyves en oppgave inn foran en besvart oppgave, havner svaret under feil oppgave,
# så byggingen stopper. Titlene fra forrige bygg ligger i svar/oppgavetitler.json (bare der svarene finnes).
SV = A / "svar"
titler = {e["id"]: [t["t"] for t in e["tasks"]] for e in eps + ovinger}
if (SV / "svar.json").exists():
    gml = json.loads((SV / "oppgavetitler.json").read_text()) if (SV / "oppgavetitler.json").exists() else {}
    flyttet = [f"{i} oppgave {int(j) + 1}: «{gml[i][int(j)]}» er nå «{titler[i][int(j)] if int(j) < len(titler[i]) else 'borte'}»"
               for i, d in json.loads((SV / "svar.json").read_text()).items() if i in titler and i in gml and isinstance(d, dict)
               for j, a in d.items() if j.isdigit() and int(j) < len(gml[i]) and isinstance(a, dict)
               and any(not k.startswith("_") and str(v).strip() for k, v in a.items())
               and (int(j) >= len(titler[i]) or titler[i][int(j)] != gml[i][int(j)])]
    if flyttet and "--godta" not in sys.argv:
        sys.exit("Lagrede svar ville havnet under en annen oppgave:\n  " + "\n  ".join(flyttet) +
                 "\nLegg nye oppgaver til slutt i settet. Er det bare tittelen som er rettet, kjør med --godta.")
    gml.update(titler)  # sett som er skjult nå (vis_fra), beholder titlene sine
    (SV / "oppgavetitler.json").write_text(json.dumps(gml, ensure_ascii=False, indent=1))
# Skrives ferdig til en midlertidig fil først, så en side som lastes under byggingen aldri blir halv.
tmp = A / f"nettside.html.{os.getpid()}.tmp"
tmp.write_text(page)
tmp.replace(A / "nettside.html")
print(f"nettside.html: {len(page) // 1024} kB, {len(eps)} episoder, {sum(len(e['tasks']) for e in eps)} oppgaver, "
      f"{len(ovinger)} øvinger med {sum(len(o['tasks']) for o in ovinger)} oppgaver")
