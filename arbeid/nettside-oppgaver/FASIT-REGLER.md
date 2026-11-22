# Fasit per oppgave

Hver oppgave i `arbeid/nettside-oppgaver/*.json`, `arbeid/nettside-ovinger/*.json` og `arbeid/nettside-prover/*.json` kan ha feltet `fasit`. Det er markdown, og siden viser det bak knappen «Vis fasit» under oppgaven. I prøveeksamenene vises det først etter «Lever».

## Innhold

- Fasiten er et fullstendig svar slik en god besvarelse på eksamen ville sett ut, ikke bare sluttsvaret.
- Begynn med svaret på hvert svarfelt (`f`) eller hver deloppgave, i fet skrift. Vis så stegene: håndsporing som tabell eller liste der oppgaven er en utregning (frontier og reached per steg, α og β per node, domener per steg, resolusjonssteg osv.).
- Tekstoppgaver: et modellsvar i den lengden oppgaven og poengene tilsier, ofte 2–5 setninger per deloppgave. Ta med fagbegrepene sensor ser etter.
- Sant/usant-lister (`tf`): hver påstand med **Sant** eller **Usant** og én setning om hvorfor.
- Én linje med den vanligste feilen er lov når den finnes i notatet (avsnittet «Eksamensfeller») eller er åpenbar.
- Skriv på norsk med de engelske fagbegrepene. Kort og konkret. Ingen innledning som «Her er fasiten».
- Løsningsforslaget siteres ordrett. Oppgaver fra en eksamen har rett før kildelinja blokken `**Løsningsforslaget ordrett** (eksamen 2023, oppgave 1):` med svaret fra løsningsforslaget som sitat (linjer som starter med `> `), ord for ord som i kildeteksten: samme stavemåte, store og små bokstaver, tegnsetting og skrivefeil. Bare linjeskift og orddeling fra PDF-en kan rettes. Ta med bare det som svarer på denne oppgaven. Mangler et svar, skriv det under blokken («Løsningsforslaget har ikke noe svar på 3.1.»). Står det noe annet sted i fasiten hva løsningsforslaget sier, er det et ordrett sitat i «…» eller en henvisning til blokken, aldri en omskriving. `python3 arbeid/verktoy/sjekk-sitater.py [filer]` sjekker at sitatene står ordrett.
- Oppgaver som er hentet fra en eksamen, slutter med en kildelinje i kursiv, for eksempel `*Kilde: løsningsforslaget til eksamen 2023, oppgave 4.*` Andre oppgaver kan ha `*Kilde: notatet til E05, Fasit Øv selv 3.*`

## Kilder og kontroll

1. Notatet `arbeid/videoer/notater/eNN-*.md`: avsnittene «Fasit» (Øv selv og quizene), «Algoritmer og håndsporing» og «Eksamensfeller».
2. Løsningsforslagene som tekst: `arbeid/videoer/_kilder/eksamener/*Q&A.txt`, `*A.txt`, `2025QA.txt`. Originalene ligger i `materiale/Files/Previous exams/`.
3. Slides og øvingstekster som tekst: `arbeid/videoer/_kilder/forelesninger/*.txt`.
4. Kursets konvensjoner står i `AGENTS.md` (prosjektroten), notatene og `arbeid/nettside-algo/KONTRAKT.md`. BFS tester målet ved generering, og DFS, UCS, greedy og A\* når noden tas ut. Utvidelsesrekkefølgen er nodene som velges for utvidelse, med målet i parentes. Alpha-beta kutter ved v ≥ β i MAX og v ≤ α i MIN. AC-3 følger Fig. 5.3.

Regn hver utregning på to måter. Den ene kan være algoritmene i `arbeid/nettside-algo/`, kjørt i Node med `vm` slik KONTRAKT.md beskriver, med valg som matcher oppgaveteksten. Fasiten skal stemme med `sjekk` i samme oppgave. Gjør den ikke det, endrer du ikke `sjekk`: du skriver det du mener er riktig i fasiten og melder avviket i rapporten med begrunnelse.

Avviker løsningsforslaget fra kursets konvensjoner i år, gjelder oppgaveteksten først. Gi det svaret oppgaven ber om, og nevn den andre konvensjonen i én setning.

## Regler

- Endre bare feltet `fasit` i oppgavene i dine egne filer. `t`, `d`, `f`, `sjekk`, `g`, `tre` og alt annet står urørt.
- Les og skriv JSON med Python: `json.load`, sett `fasit`, og skriv tilbake med `json.dump(o, f, ensure_ascii=False, indent=1)` hvis fila var innrykket med én mellomrom (de fleste er det). Sjekk med `python3 -m json.tool fil > /dev/null`.
- Bygg siden etterpå med `uv run arbeid/lag-nettside.py` fra prosjektroten for å se at alt går gjennom.
- Eksamenene 2019 og 2020 ordinær (`2019Q*`, `2020Qv2`, `2020Av2`) er spart til fullprøver. Bruk dem bare til `al3.json`, som er skjult til 04.12.
- Ingen navn på AI-verktøy eller -selskaper i noe du skriver.
- Ikke bruk nettleserpanelet i appen. Andre jobber i samme mappe samtidig.
