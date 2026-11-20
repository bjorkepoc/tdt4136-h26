#!/usr/bin/env -S uv run --script
# /// script
# dependencies = ["markdown-it-py"]
# ///
"""Lager arbeid/nettside.html: videoene, notatene, Øv selv med svarfelt, seeplan, feillogg og eksamenslista på ett sted.

Kjør på nytt etter endringer i notatene, SEEPLAN.md eller FEILLOGG.md:  uv run arbeid/lag-nettside.py
Siden åpnes rett fra disken. Videoene hentes fra videoer/eNN-*/out/, så den må ligge i arbeid/."""
import html
import json
import re
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
    out = _md.render(text)
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


def oppgaver(sec):
    """Deler «Øv selv» i nummererte oppgaver. Tekst før første punkt og løse avsnitt etter blir intro og outro."""
    intro, items, outro = [], [], []
    for line in sec.splitlines():
        m = re.match(r"(\d+)\. (.*)", line)
        if m and not outro:
            items.append([m.group(2)])
        elif not items:
            intro.append(line)
        elif outro or (line and not line.startswith(" ")):
            outro.append(line)
        else:
            items[-1].append(line[3:] if line.startswith("   ") else line)
    tasks = []
    for n, it in enumerate(items, 1):
        first = re.sub(r"[*`]", "", it[0])
        tasks.append({"t": f"Oppgave {n}", "s": first[:70] + ("…" if len(first) > 70 else ""),
                      "d": md("\n".join(it)), "f": [["Svar", "area"]]})
    return md("\n".join(intro)), tasks, md("\n".join(outro))


PAPIR = {"e11", "e12", "e13", "e14", "e15", "e16", "a4"}  # logikken: kan besvares på papir, som oppgave 9 og 10 på eksamen 2025


def klargjor(tasks, papir=False):
    """Oppgaver fra JSON: markdown til HTML (tekst og fasit), figurene etter teksten, svarfelt hvis ingen er gitt."""
    for x in tasks:
        if papir or "handwritten sheets" in x.get("d", ""):
            x["papir"] = 1
        for s in x.get("img", []):
            assert (A / s).exists(), s
        alt = html.escape(f'Figur til oppgaven «{x.get("t", "")}»', quote=True)
        x["d"] = md(x.get("d", "")) + "".join(f'<img class="fig" src="{quote(s)}" alt="{alt}">' for s in x.pop("img", []))
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
    intro, tasks, outro = oppgaver(section(t, "Øv selv"))
    egen = A / "nettside-oppgaver" / f"{eid}.json"
    if egen.exists():  # utskrevne eksamensoppgaver med figurer, se nettside-oppgaver/
        data = json.loads(egen.read_text())
        intro, tasks, outro = md(data.get("intro", "")), klargjor(data["tasks"], eid in PAPIR), ""
    body = drop(t, "Kapitler i videoen", "Øv selv", "Fasit")
    body = re.sub(r"\A# .*\n|^> (Pensum|Video): .*\n", "", body, flags=re.M)
    eps.append({"id": eid, "ep": ep, "title": html.escape(title), "pensum": html.escape(pensum), "video": "videoer/" + quote(video),
                "len": length, "chap": kapitler(out / "chapters.txt"), "subs": tekst(out / "undertekster.srt"),
                "note": md(body), "intro": intro, "tasks": tasks, "outro": outro, "fasit": md(quizfasit(section(t, "Fasit")) if egen.exists() else section(t, "Fasit"))})
    feller.append(f'<h2><a href="#{eid}">{ep}</a> {html.escape(title)}</h2>' + md(section(t, "Eksamensfeller")))
assert len(eps) == 21, len(eps)

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
for f, grp, art in filer:
    o = json.loads(f.read_text())
    if o.get("vis_fra", "") > date.today().isoformat():  # AL3 bygger på 2020Qv2, spart til fullprøven 03.12
        continue
    ovinger.append({"id": o["id"], "ep": o["ep"], "title": html.escape(o["tittel"]), "kilde": o.get("kilde", ""),
                    "note": md(o.get("om", "")), "intro": md(o.get("intro", "")), "tasks": klargjor(o["tasks"], o["id"] in PAPIR), "outro": "",
                    "fasit": md(o.get("fasit", "")), "grp": grp, "art": art})

valgfri = lambda p: md(p.read_text()) if p.exists() else ""  # seeplan og feillogg er personlige og finnes ikke i den offentlige kopien
intro, _, rest = (A / "LEKSIKON.md").read_text().partition("\n## ")
D = {"eps": eps, "ov": ovinger, "leks": {"intro": md(re.sub(r"^# .*\n", "", intro)), "body": md("## " + rest)}, "plan": valgfri(V / "SEEPLAN.md"), "feil": valgfri(A / "FEILLOGG.md"),
     "feller": "<h1>Alle eksamensfeller</h1><p>Sjekklista for den siste uka, samlet fra alle episodene.</p>" + "".join(feller), "exams": eksamener}
page = (A / "nettside-mal.html").read_text().replace("__DATA__", json.dumps(D, ensure_ascii=False).replace("</", "<\\/"))
(A / "nettside.html").write_text(page)
print(f"nettside.html: {len(page) // 1024} kB, {len(eps)} episoder, {sum(len(e['tasks']) for e in eps)} oppgaver, "
      f"{len(ovinger)} øvinger med {sum(len(o['tasks']) for o in ovinger)} oppgaver")
