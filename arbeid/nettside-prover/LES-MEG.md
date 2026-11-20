# Prøveeksamener (P1–P4, B1–B2)

Egne øvingseksamener for TDT4136 H26, laget i formatet fra eksamen 2025 og med innhold tilpasset det som er forelest i 2026. De er **ikke** ekte eksamener og skal ikke se ut som det: forsiden sier tydelig at settet er laget for øving.

`uv run arbeid/lag-nettside.py` leser `arbeid/nettside-prover/*.json` og viser dem under «Prøveeksamener» i menyen, med samme visning som øvingene (forside til venstre, oppgaver til høyre, fasit nederst i en lukket boks).

## Kilder, i prioritert rekkefølge

1. Canvas-kunngjøringen 17.11.2026: «same format as the last year»: 20 % flervalg, samme logikk-formelark som vedlegg, håndskrift og skanning er lov. Ved uklarhet: lærebok og slides.
2. Eksamen 2025 (`materiale/Files/Previous exams/2025QA.pdf`, uten fasit: `arbeid/eksamener/2025-oppgaver-uten-fasit.pdf`): oppgavestil, lengde, ordbruk, poeng.
3. Årets forelesninger i `materiale/Files/` (L1–L13, AL1–AL3, Assignment 1–4). L13 er Eidheims oppsummering av CSP, adversarial search, spillteori og logikk.
4. Episodenotatene `arbeid/videoer/notater/eNN-*.md`: kursets konvensjoner og eksamensfeller. De går foran din egen hukommelse.
5. `arbeid/PENSUMOVERSIKT.md` og `arbeid/EKSAMENSPLAN.md`: hva som er pensum, forelest og ute.
6. Emnerapporten for 2025 på Innsida (studentenes tilbakemelding): eksamen 2025 ble opplevd som klart vanskeligere enn før, og flere flervalg testet detaljer som bare står i boka. La derfor noen flervalgsalternativer bygge på presise bokformuleringer (egenskaper, definisjoner, unntak), ikke bare på slidene.

**Ikke bruk eksamen 2019 eller ordinær 2020 (`2019Q*.docx`, `2020Qv2.docx`, `2020Av2.docx`).** De er spart til fullprøver 01.12 og 03.12. Ikke åpne dem, og ikke lag oppgaver som ligner dem. Ikke kopier andre eksamensoppgaver heller: lag nye grafer, trær, tall og domener i samme stil.

## Format (likt for alle settene)

13 oppgaver, 100 poeng, 4 timer, spørsmål på engelsk:

| Nr. | Type | Poeng |
|---|---|---|
| 1–4 | Flervalg, ett riktig alternativ av 4–5 («Select one alternative»). Én kan være «Which statement is false?» | 5 hver |
| 5 | Uninformed search, regning | 8 |
| 6 | Informed search, regning | 12 |
| 7 | CSP, regning (erstatter tree-structured CSP, som er ute av pensum i 2026) | 10 |
| 8 | Adversarial search, regning | 10 |
| 9 | FOL-inferens: GMP, unifikasjon eller forward chaining | 5 |
| 10 | Resolusjon (CNF og bevis) | 20 |
| 11 | Planlegging, kort tekst: a) 2 p, b) 3 p | 5 |
| 12 | NLP, kort tekst eller liten regning: a) 2 p, b) 3 p | 5 |
| 13 | Kunnskapsrepresentasjon og etikk/filosofi, kort tekst: a) 2 p, b) 3 p | 5 |

Skriv oppgavene som 2025: kort, presis engelsk, poeng i deloppgavene («(2 pts.)»), «Tie breaking: …» og «tree-like search» eller «graph search» sagt eksplisitt der det betyr noe. Oppgave 9 og 10 får «You can answer this question on handwritten sheets.» som i 2025.

## Temafordeling

Hvert sett får sine temaer, så settene til sammen dekker pensum uten å gjenta seg. P1–P4 er «sannsynlig eksamen». B1–B2 er breddesett: det som er forelest i år, men ikke kom i 2025.

| | P1 | P2 | P3 | P4 | B1 | B2 |
|---|---|---|---|---|---|---|
| 1 | Miljøegenskaper for en oppgitt oppgave | Agenttyper: hvilken passer beskrivelsen | PEAS for en ny oppgave | Rasjonalitet vs. allvitenhet, læring | Turing-test, historie og grunnlag (L1) | Agentstruktur, tabelldrevet agent |
| 2 | Simulated annealing (påstander) | Genetisk algoritme: seleksjon/crossover | Hill climbing-varianter, platå, lokale maks | SA: akseptsannsynlighet e^(ΔE/T) regnet ut | AND-OR-søk og betingede planer | Belief states, sensorless prediction |
| 3 | CSP-modellering: variabler og domener | MRV/degree/LCV-valg i en delvis tilordning | Konsistensbegreper (node, arc, path) | Min-conflicts: neste trekk | Globale constraints (Alldiff, Atmost) | Lokalt søk for CSP vs. backtracking |
| 4 | Antall rene Nash-likevekter | IESDS på 3×3 | Blandet Nash med indifferens | Pareto, social welfare, maximin | Regret matching (L8/L13) | Gjentatte spill, grim trigger og δ |
| 5 | BFS, DFS og UCS, graph search | DLS og IDS, iterasjon for iterasjon | UCS tree-like vs. BFS early goal test | IDS og antall noder, minne/tid | Problemformulering + BFS | BFS vs. UCS der de gir ulike svar |
| 6 | Greedy og A*, admissible/consistent | A* med inkonsistent h, weighted A* | Dominans, relakserte problemer, A* | A* med Manhattan-h og bevis for konsistens | h1/h2 for 8-puzzle, relaksering | Beam/IDA*/RBFS-egenskaper + A* |
| 7 | AC-3, full sporing | Backtracking med MRV, degree, LCV og forward checking | Modellering (planlegging av møter e.l.) + AC-3 | Forward checking vs. MAC | Sudoku-utsnitt med Alldiff og AC-3 | Kryptaritmetikk-modell + forward checking |
| 8 | Minimax + alpha-beta | Expectiminimax + alpha-beta på et annet tre | Alpha-beta og best mulig barnerekkefølge | Fire nivåer alpha-beta | MCTS: UCB1-valg og backpropagation | Expectiminimax og pruning med sjansenoder |
| 9 | GMP med θ | Unifikasjon: MGU eller failure (occur check) | To GMP-steg på rad | GMP med konjunksjon i premisset | PL forward chaining (count og agenda) | PL backward chaining |
| 10 | Engelsk → FOL → CNF → resolusjon | PL → CNF med formelarket + PL-resolusjon | FOL-resolusjon med Skolem-funksjoner | Engelsk → FOL → CNF → resolusjon | Oversetting til FOL + resolusjon | Sannhetstabell/entailment + PL-resolusjon |
| 11 | HLA og implementasjon; forward vs. backward | PDDL-skjema + én progresjon/regresjon | Sensorless planning; ignore preconditions vs. delete lists | HTN-raffinering; ikke-deterministiske domener | Regresjon g' = (g − ADD) ∪ PRECOND | Contingent planning og overvåking |
| 12 | Bigram MLE vs. add-one (tall) + HMM/Viterbi-idé | PCFG: sannsynlighet for et parsetre + top-down/bottom-up | Naive Bayes (bag-of-words) + tvetydighet | Over-/undergenerering + CYK-kompleksitet | CYK med PCFG | Viterbi med to tagger og tre ord |
| 13 | Ontologi, kategorier, arv + Chinese room | Disjoint/exhaustive/partition + skjevhet og rettferdighet | Semantiske nett vs. description logics + weak/strong AI | Hendelser/fluents + autonome våpen eller AI safety | Kategorier og målinger + informality/mathematical objection | Description logics + personvern/overvåking |

Avvik fra tabellen er greit når et tema viser seg å være ute av pensum eller for tynt til poengene. Skriv da hvorfor i rapporten.

**Ute av pensum (lag ingen oppgaver om dette):** tree-structured CSP og cutset (5.5), intelligent backtracking og constraint learning (5.3.3–5.3.4), 7.7, 9.4.2–9.4.5, 9.5.4, 10.2.3, 10.4, 10.6 (default reasoning), 11.1.2, 11.1.3, SATPlan (11.2.3), GraphPlan og partial-order planning (11.2.4), 11.3.1, 11.3.2, 11.4.3, 11.6, 24.2.1, dependency parsing og alt i 24.3.1–24.3.2, 24.4, 24.5, 28.3.5, 28.3.6, og alt merket «not curriculum» (Lean, Z3, Prolog, SMT). DPLL, WalkSAT og local beam er pensum, men aldri forelest: bare i flervalg eller som liten del.

## Kursets konvensjoner (fasiten må følge dem)

- **BFS:** Fig. 3.9, målet testes når noden genereres (early goal test). **DFS, UCS, greedy, A\*:** BEST-FIRST-SEARCH (Fig. 3.7) med f = −dybde, g, h og g + h, og målet testes når noden tas ut (late goal test).
- **Graph search** har `reached`, og en node legges inn igjen bare når en billigere vei finnes. **Tree-like search** husker ingenting.
- **Expansion order** er rekkefølgen nodene velges for ekspansjon. Målet står i parentes til slutt fordi det ikke ekspanderes (Jekic, Canvas 07.09). Startnoden står med.
- **DLS** tester noder på dybde ℓ, men ekspanderer dem ikke. Sykelsjekken hopper over barn som allerede er på stien.
- **Alpha-beta:** Fig. 6.7, barna fra venstre mot høyre, kutt når v ≥ β (MAX) eller v ≤ α (MIN).
- **AC-3:** Fig. 5.3. Når D(Xi) endres, legges (Xk, Xi) inn for alle naboer Xk ≠ Xj. Oppgi startkøen eksplisitt i oppgaven.
- **Backtracking:** Fig. 5.5. Si i oppgaven hvordan likhet brytes (alfabetisk variabel, minste verdi).
- **FOL til CNF:** de åtte stegene i 9.5.1, med Skolem-konstanter og Skolem-funksjoner. Resolusjon er motsigelsesbevis med negert mål.
- **Spillteori** følger L10: dominans (strict/weak), IESDS, rene og blandede Nash-likevekter, Pareto, maximin, gjentatte spill med δ.
- Sjekk alltid mot `arbeid/videoer/notater/eNN-*.md` og avsnittet «Eksamensfeller» der.

## JSON-format

Én fil per sett: `arbeid/nettside-prover/p1.json` … `p4.json`, `b1.json`, `b2.json`.

```json
{
  "id": "p1", "ep": "P1", "tittel": "Prøveeksamen 1",
  "om": "Markdown til venstre: forside som 2025 (på engelsk), pluss en norsk linje om at settet er laget for øving i 2025-formatet og hvilke temaer det dekker. Ta med formelarket nederst: <details><summary>Formula sheet (appendix)</summary><img class=\"fig\" src=\"nettside-figurer/e14-2025-formelark.svg\" alt=\"Formelark\"></details>",
  "intro": "Markdown til høyre over oppgavene: én til to setninger, f.eks. hvordan flervalg sjekkes.",
  "tasks": [ … 13 oppgaver … ],
  "fasit": "Markdown: fullstendig løsning for alle 13, med poengfordeling som en sensorveiledning og vanlige feil."
}
```

Feltene i en oppgave:

- `t`: tittel, f.eks. `"Oppgave 5 (8 p): Uninformed Search"`.
- `d`: oppgaveteksten i markdown (engelsk). Tabeller som HTML eller markdown. Alternativene i flervalg som liste: `- A. …`.
- `f`: svarfelt `[[etikett, "text"|"area", plassholder]]`. Flervalg: `[["Alternativ", "text", "A, B, C, D eller E"]]`. Tekstoppgaver: ett `area` per deloppgave.
- `sjekk`: `{"f": {etikett: [godkjente svar …]}, "merk": "kort norsk forklaring som vises etter sjekk", "kilde": "hvordan svaret er kontrollert"}`. Bruk den for alt med ett objektivt svar: flervalg, rekkefølger, stier, kostnader, rotverdier, MGU, domener, antall likevekter. Sammenligningen ignorerer store/små bokstaver, komma, mellomrom, piler og parenteser, men rekkefølgen teller. Unntak: har fasiten et kall som `At(P1, Lab)`, teller parentesene og argumentene i kallet, så legg inn vanlige skrivemåter som egne godkjente svar (`"S, A, B, (G)"` og `"S A B G"`). Et svar som begynner med `{` sammenlignes som mengde. Ingen `sjekk` på tekstoppgaver.
- `g`: graf som figur og som startdata i «Tegn og sjekk», i samme format som `GR` i `arbeid/nettside-mal.html`:
  `{"w": 400, "h": 260, "dir": 1, "al": "Graf til oppgave 5", "n": {"S": [40, 130, "h=6", 0, -24], "G": [360, 130, "h=0", 0, -24, 1]}, "e": [["S", "G", 7, 1]]}`.
  `n`: `[x, y, h-tekst eller "", dx og dy for h-teksten, 1 hvis målnode]`. `e`: `[fra, til, kostnad, side]`. Side 1 eller −1 flytter kostnaden til den ene eller andre siden av kanten. Uten kostnad: bruk `""`, ellers står det «undefined». `dir: 1` gir piler. `start: "X"` setter startnoden i tegneverktøyet når den ikke heter S. Hold nodene minst 70 enheter fra hverandre, og plasser kostnadene så de ikke kolliderer.
- `tre`: spilltre som figur og som startdata, i formatet til `ALGO.tre`: `{"id": "A", "type": "max", "tekst": "A", "barn": [{"id": "B", "type": "min", "tekst": "B", "barn": [{"id": "B1", "type": "blad", "tekst": "", "verdi": 3}, …]}]}`. Typene er `max`, `min`, `sjanse` og `blad`. `p` på et barn av en sjansenode er sannsynligheten. Gi bladene unike id-er, og gi dem en `tekst` (bokstav) når oppgaven spør om hvilke blader som kuttes.
- `tegn`: bare når `g` eller `tre` ikke passer, f.eks. en CSP-graf med domener: `{"type": "graf", "data": {"retning": false, "noder": [{"id": "A", "x": 0, "y": 0, "domene": ["R", "G", "B"]}], "kanter": [{"fra": "A", "til": "B"}]}}`. Kantene er ≠-constraints.
- `fasit`: full løsning på akkurat denne oppgaven i markdown, vist bak «Vis fasit» etter «Lever». Reglene står i `arbeid/nettside-oppgaver/FASIT-REGLER.md`.
- `img`: unngå. Alt som trengs, skal kunne tegnes med `g` eller `tre` eller skrives som tabell.

## Kontroll før du leverer

1. **Regn ut hvert svar to ganger, på to forskjellige måter.** Søk, alpha-beta, expectiminimax, MCTS, AC-3, backtracking, unifikasjon, resolusjon, forward/backward chaining, CYK, Viterbi og bigram finnes i `arbeid/nettside-algo/`. Kjør dem i Node (`vm`, slik testene i `KONTRAKT.md` beskriver), med valg som matcher oppgaveteksten, og sammenlign med din egen utregning. Spillteori: regn ut likevektene med et lite skript. Sannsynligheter og tall: regn dem med et skript.
2. **Flervalg:** nøyaktig ett riktig alternativ, og hvert av de gale må være entydig galt etter boka og slidene. Begrunn alle alternativene i fasiten.
3. **JSON:** `python3 -m json.tool` på fila, og `uv run arbeid/lag-nettside.py` må gå gjennom. Feiler bygget på grunn av en annens fil, prøv igjen litt senere.
4. **Visuelt:** ta et skjermbilde med headless Chrome av `file://<prosjektmappa>/arbeid/nettside.html#<id>` (ikke `localhost`, og ikke nettleserpanelet i appen) og se at grafer og trær er leselige, uten kolliderende tekst.
5. Ingen AI-navn i filene, og ingen personopplysninger.

Endre bare din egen JSON-fil. Trenger du noe nytt i siden eller motoren, skriv det i rapporten.
