# Tidligere eksamener (2015–2025)

Hver eksamen ligger ordrett i én fil her og vises under «Tidligere eksamener» i menyen, i samme eksamensvisning som prøveeksamenene: forside, én oppgave om gangen, nedtelling, og sjekk, fasit og «Rett denne» først etter «Lever». `uv run arbeid/lag-nettside.py` leser filene. Alle oppgavene kan besvares på papir (bilde).

Eksamen 2019 og ordinær 2020 (`2019Q*`, `2020Qv2`, `2020Av2`) er spart til fullprøvene 01.12 og 03.12 og ligger ikke her.

## Filene

| Fil | `id` | `ep` | `tittel` | Kilde |
|---|---|---|---|---|
| `2015.json` | `ek2015` | `2015` | `Ordinær eksamen` | `2015Q&A.docx` |
| `2016.json` | `ek2016` | `2016` | `Ordinær eksamen` | `2016Q&A.docx` |
| `2017.json` | `ek2017` | `2017` | `Ordinær eksamen` | `2017Q&A.docx` |
| `2018.json` | `ek2018` | `2018` | `Ordinær eksamen` | `2018Q&A.docx` |
| `2020k.json` | `ek2020k` | `2020 K` | `Kontinuasjon (aug. 2021)` | `2020ResitQ.docx`, `2020ResitA.docx` |
| `2021.json` | `ek2021` | `2021` | `Ordinær eksamen` | `2021Q.docx`, `2021A.docx` |
| `2022.json` | `ek2022` | `2022` | `Ordinær eksamen` | `2022Q&A.pdf` |
| `2023.json` | `ek2023` | `2023` | `Ordinær eksamen` | `2023Q&A.pdf` |
| `2024.json` | `ek2024` | `2024` | `Ordinær eksamen` | `2024Q&A.docx` |
| `2025.json` | `ek2025` | `2025` | `Ordinær eksamen` | `2025QA.pdf` |

Originalene ligger i `materiale/Files/Previous exams/`, og som tekst i `arbeid/videoer/_kilder/eksamener/`.

## Format

```json
{"id": "ek2018", "ep": "2018", "tittel": "Ordinær eksamen", "kilde": "../materiale/Files/Previous%20exams/2018Q.docx",
 "om": "forsiden ordrett (markdown): emne, tid, hjelpemidler, poeng, instruksjoner",
 "intro": "valgfritt, én kort norsk setning om hva som kan sjekkes etter «Lever»",
 "vedlegg": "valgfritt: vedlegg ordrett (markdown, figurer som <img class=\"fig\" src=\"nettside-figurer/…\">)",
 "fasit": "valgfritt: samlet sensorveiledning eller poengfordeling fra løsningsforslaget",
 "tasks": [ … ]}
```

Én oppgave per hovedoppgave på eksamen («Problem 3», «Oppgave 3», «Q3»), i samme rekkefølge:

- `t`: `Oppgave N (P p): Tittel`, der N er nummeret på eksamen og P poengene (summen av deloppgavene). Visningen bruker formen til overskrift og «Maximum marks». Mangler poengene i kilden, skriv `Oppgave N (poeng ikke oppgitt): Tittel` eller `Oppgave N: Tittel`; da står det «Maximum marks: ikke oppgitt». Finn aldri på poeng. Tittelen er eksamenens egen («Search», «CSP»), eller et kort tema når den mangler.
- `d`: oppgaveteksten **ordrett** på engelsk (eller norsk der eksamen var på norsk), som markdown. Behold deloppgavenummer, poeng og formuleringer. Ingen forklaringer, hint eller rettelser i teksten; en kort `*Merknad:*` på norsk er lov bare når originalen har en åpenbar feil eller noe mangler.
- `img`: figurene, stier relativt til `arbeid/` (`nettside-figurer/ekNNNN-qN.png` eller `.svg`). Siden setter dem før første delspørsmål, eller øverst når teksten sier «above».
- `f`: ett svarfelt per deloppgave, `[["a) Kort etikett", "area"]]` (eller `"text"` for korte svar). Etiketten starter med deloppgavemerket slik det står i teksten («a)», «2.1», «(b)»), så feltet havner rett under delspørsmålet.
- Flervalg: alternativene som en liste `- A. …` i `d`, og ett felt `["Alternativ", "text", "A, B, C, D eller E"]`. Visningen gjør dem til radioknapper.
- Sant/usant: påstandene i `tf` (liste), ingen `f`.
- `sjekk` (valgfritt): det som har ett objektivt svar, i samme form som i `arbeid/nettside-oppgaver/*.json` og `arbeid/nettside-prover/*.json`, for eksempel `{"f": {"Alternativ": ["B"]}}` eller `{"tf": ["sant", "usant"]}`.
- `g`, `tre` eller `tegn` (valgfritt): grafen eller treet til tegneverktøyet, som i episodeoppgavene.
- `fasit`: etter `arbeid/nettside-oppgaver/FASIT-REGLER.md`, med kildelinjen `*Kilde: løsningsforslaget til eksamen ÅÅÅÅ, oppgave N.*`

Oppgaver som allerede står ordrett i `arbeid/nettside-oppgaver/*.json` (tittel «Eksamen ÅÅÅÅ, …»), kan gjenbrukes: tekst, figurer, `g`/`tre`, `sjekk` og `fasit`. Der er mange av dem utdrag («del 1–4», «utvalg»), så kontroller mot originalen og ta med alt.
