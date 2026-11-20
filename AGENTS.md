# TDT4136 Introduction to Artificial Intelligence, H26

Studieside for eksamen i TDT4136 ved NTNU. Les [README.md](README.md) for hva som finnes og hvordan siden startes.

## Slik hjelper du

- Svar på norsk, men behold de engelske fagbegrepene. Bruk konkrete forklaringer og små eksempler som er sporet for hånd.
- Kilder: `materiale/` (slides, øvingstekster, tidligere eksamener) og læreboka *Artificial Intelligence: A Modern Approach*, 4. utgave (Global Edition). Slides og oppgavetekster går foran eldre eksamener. Står det ikke i kildene, skal du ikke finne det på. Det gjelder pensum, krav og eksamensformat.
- Pensumavgrensningen står i `arbeid/PENSUMOVERSIKT.md`. GraphPlan er ute av pensum.
- Kursets konvensjoner går foran boka der de skiller seg:
  - BFS tester målet når noden genereres. DFS, UCS, greedy og A\* er best-first og tester målet når noden tas ut.
  - Utvidelsesrekkefølgen er nodene som velges for utvidelse, med målet i parentes til slutt.
  - Alpha-beta kutter ved v ≥ β i en MAX-node og ved v ≤ α i en MIN-node.
  - AC-3 følger Fig. 5.3 i boka.
- Er oppgaven obligatorisk og ikke levert, gir du forklaring, hint og tilbakemelding på studentens eget arbeid, ikke ferdige løsninger.

## Retting av svar fra siden

1. Start serveren i bakgrunnen hvis den ikke svarer på http://localhost:8765/: `python3 arbeid/server.py`.
2. Vent på innleveringer i bakgrunnen. Kommandoen avslutter når noe er sendt, og skriver det ut:

   ```bash
   cd arbeid/svar; until [ -s ko.jsonl ]; do sleep 2; done; sleep 2; mv ko.jsonl ko.tmp; cat ko.tmp >> levert.jsonl; cat ko.tmp; rm ko.tmp
   ```

   På Windows uten bash lager du en tilsvarende løkke i PowerShell.
3. Hver linje er JSON: `{"eid": "e02", "ep": "E02", "j": 0, "oppgave": "…", "svar": {"feltnavn": "svaret"}, "sendt": "…"}`. `j` er oppgavens nummer i lista, talt fra 0.
4. Finn oppgaven i `tasks[j]` i `arbeid/nettside-oppgaver/<eid>.json`, `arbeid/nettside-ovinger/<eid>.json` eller `arbeid/nettside-prover/<eid>.json`. Rett mot feltet `sjekk`, fasiten i fila (`fasit`) og notatet `arbeid/videoer/notater/<eid>-*.md` for episodene. Regn selv når oppgaven er en utregning.
5. Skriv tilbakemeldingen inn i `arbeid/svar/tilbakemelding.json` uten å fjerne det som står der fra før:

   ```json
   {"e02": {"0": {"tekst": "…", "tid": "ÅÅÅÅ-MM-DD TT:MM:SS"}}}
   ```

   Teksten vises som ren tekst under oppgaven. Si hva som er riktig, hva som mangler eller er feil, og vis den riktige løsningen kort. Gi den samme tilbakemeldingen i chatten.
6. Start ventingen på nytt.

## Når du endrer innholdet

- Bygg siden på nytt etter endringer i notater, oppgavefiler eller malen: `uv run arbeid/lag-nettside.py`.
- Algoritmene og tegneverktøyet i `arbeid/nettside-algo/` følger `KONTRAKT.md` der. Prøveeksamenene følger `arbeid/nettside-prover/LES-MEG.md`.
- Tidligere eksamener står ordrett med alle figurer. Figurene ligger i `arbeid/nettside-figurer/`.
