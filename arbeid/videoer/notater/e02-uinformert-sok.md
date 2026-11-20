# E02 – Søk uten kart: BFS, UCS, DFS og IDS

> Pensum: Global 3.1–3.4 (US samme nummer) · Forelesning: L2, AL1, L3 (sammenligningstabellen) · Øving: Ø1 · Eksamensvekt: ~22 % (søk samlet, deles med E03)
> Video: `videoer/e02-uinformert-sok/out/tdt4136-e02-uinformert-sok.mp4` (15:40)

## Kapitler i videoen

- 0:00 – Intro
- 0:35 – Fra problem til søk
- 2:34 – Ett rammeverk for alle
- 4:44 – BFS og UCS
- 7:24 – DFS, DLS, IDS og toveis
- 10:25 – Sammenligningstabellen
- 12:41 – Eksamen 2025, oppgave 5
- 14:39 – Koblinger og oppsummering

## Kjerneideer

**Et søkeproblem har seks deler (3.1.1, L2).** Eksempelet er Romania-kartet fra boka: du står i Arad og skal til Bucharest. Eldre utgaver av boka (3e) teller fem og lar *state space* ligge implisitt i de andre.

| Del | Engelsk | Romania |
|---|---|---|
| Tilstandsrom | state space (mengden av alle states) | alle byene på kartet |
| Starttilstand | initial state | Arad |
| Handlinger | actions, `ACTIONS(s)` | `ACTIONS(Arad) = {ToSibiu, ToTimisoara, ToZerind}` |
| Overgangsmodell | transition model, `RESULT(s, a)` | `RESULT(Arad, ToZerind) = Zerind` |
| Måltest | goal test, `IS-GOAL(s)` | er vi i Bucharest? |
| Handlingskostnad | action cost, `c(s, a, s′)` | veiens lengde i km |

En *path* er en sekvens av handlinger. En *solution* er en sti fra start til en måltilstand. Den *optimale* løsningen har lavest sum av handlingskostnader. I utsnittet i videoen er det Arad–Sibiu–Rimnicu Vilcea–Pitesti–Bucharest = 140 + 80 + 97 + 101 = 418. Fagaras-veien koster 450. Tilstandene og overgangene danner til sammen *state space*, en graf.

**Abstraction (3.1.2, kun bok, ikke forelest).** Modellen dropper alt som ikke betyr noe for oppgaven, som vær, radio, trafikk og fotbevegelser. Med handlinger som «flytt foten én centimeter» kommer du aldri ut av parkeringsplassen. Boka gir to krav:
- *Gyldig* (valid): hver abstrakt løsning kan utdypes til en løsning i den detaljerte verden. For eksempel finnes det fra hver detaljert tilstand «i Arad» en vei til en tilstand «i Sibiu».
- *Nyttig* (useful): hver handling i løsningen er lettere å utføre enn det opprinnelige problemet. «Kjør fra Arad til Sibiu» krever ikke mer søk.

God abstraksjon fjerner så mye detalj som mulig, men beholder gyldigheten.

**Eksempelproblemer (3.2, L2).** Det finnes *standardized problems* som vacuum world (2 ruter × skitt eller ikke i hver = 8 states) og 8-puzzle, og *real-world problems* som ruteplanlegging. Formuleringen avgjør hvor stort tilstandsrommet blir.

**State space er ikke search tree (3.3).** Kartet har 20 byer. Søket bygger et tre med rot i Arad, og der kan Arad dukke opp igjen (Arad → Sibiu → Arad → …). Treet kan altså være uendelig selv når tilstandsrommet er endelig. Derfor skilles det mellom
- *state*: en konfigurasjon av verden (en by), og
- *node*: en datastruktur i treet med `STATE`, `PARENT`, `ACTION` og `PATH-COST`. En node står for én bestemt sti til tilstanden.

**Frontier, reached og ekspansjon (3.3.1–3.3.2).**
- *Frontier*: noder som er generert, men ikke ekspandert. Det er huskelista over hva søket skal gjøre.
- *Expand*: ta en node ut og generer barna med `ACTIONS` og `RESULT`.
- *Reached*: alle tilstander søket har sett (frontier pluss ekspandert), med beste node til hver.
- Alle algoritmene her er samme løkke: ta ut, test, ekspander, gjenta. Bare regelen for hvilken node som tas ut, varierer. Best-first search tar alltid ut noden med lavest *f(n)*.

| Kø | Algoritme | Regel |
|---|---|---|
| FIFO-kø («kø i kantina») | BFS | eldste node først |
| prioritetskø på *f = g* | UCS / Dijkstra | billigste sti hittil først |
| LIFO-stabel («tallerkenstabel»), *f = −dybde* | DFS | dypeste node først |
| prioritetskø på *f = g + h* | A\* (E03) | — |

Kurset bryter likhet *alfabetisk*: B før C.

**Redundant paths, tree-like og graph search (3.3.3).** Til Sibiu kan du kjøre direkte (140) eller via Zerind og Oradea (75 + 71 + 151 = 297). Den lange er en *redundant path*: en dårligere vei til en tilstand du allerede har nådd. En *cycle* (Arad → Sibiu → Arad) er et spesialtilfelle.
- *Graph search* husker alt i `reached` og legger bare inn et barn hvis tilstanden er ny eller veien er billigere.
- *Tree-like search* husker ingenting og sparer minne, men kan gå i ring. I eksamen 2023 (2.1) har grafen en løkke A → A, og tree-like DFS ekspanderer S, A, A, A, … uten å bli ferdig.
- Mellomløsningen er å sjekke bare sykler, altså om tilstanden finnes i egen foreldrekjede (`IS-CYCLE`). Det gjør DLS i Fig. 3.12.

**Ytelsesmål (3.3.4).**
- *Completeness*: finner algoritmen en løsning når det finnes en (og rapporterer feil når det ikke finnes)?
- *Cost optimality*: er løsningen den billigste?
- *Time* og *space complexity* måles med *b* (branching factor, største antall barn per node), *d* (dybden til den grunneste løsningen), *m* (største dybde, kan være ∞), *C\** (kostnaden til optimal løsning) og *ε* (minste handlingskostnad). For eksplisitte grafer brukes ofte |V| + |E|.

**Når målet testes (3.4.1–3.4.2).** Dette er det viktigste skillet i episoden.
- *BFS* bruker *early goal test*: målet sjekkes når en node genereres. Det er trygt fordi BFS går lag for lag. Når målet dukker opp på dybde d, er hele dybde d − 1 sjekket, så ingen kortere sti finnes.
- *UCS* (og A\*) bruker *late goal test*: målet sjekkes når noden tas ut av frontier. UCS brer seg som en bølge i kostnad g. En node tas ut først når bølgen når den, og da er alle billigere stier allerede tatt ut. A\* sorterer på f = g + h, så der går bølgen i f, ikke i g: Sibiu (g = 140, f = 393) tas ut før Zerind (g = 75, f = 449). At målet er optimalt når A\* tar det ut, følger av at h er admissible (E03). Testes målet ved generering, kan en billigere vei fortsatt ligge og vente i frontier.

**Hvorfor IDS ikke er sløsing (3.4.4).** Toppen av treet lages på nytt for hver grense. Men nesten alle nodene ligger i bunnen: N(IDS) = (d)b + (d − 1)b² + … + (1)b^d. For b = 10 og d = 5 blir det 123 450 noder mot 111 110 for BFS, rundt 11 % mer tid. Til gjengjeld vokser minnet lineært, O(bd).

**Toveis søk (3.4.5, kun bok, ikke forelest).** Søket går forover fra start og bakover fra målet til frontene møtes. Det er som to lag som graver en tunnel fra hver side. Gevinsten er b^(d/2) + b^(d/2), som er langt mindre enn b^d (50 000 ganger færre noder for b = d = 10). Prisen:
- Du må kunne gå baklengs (kjenne forgjengerne) og kjenne målet.
- Med kostnader er første møte ikke nødvendigvis billigst. Figurteksten til Fig. 3.14 sier dette, og grafen i videoen viser det: første møte gir 25, mens den beste veien koster 23. Bidirectional best-first (Fig. 3.14) leter videre til `TERMINATED` sier at ingen bedre løsning finnes.
- Brødteksten i 3.4.5 sier at første løsning er optimal når f er path cost. Det stemmer ikke med figurteksten eller med eksempelet: toveis UCS på L2-grafen møtes først via E med 25. Følg figurteksten.

## Algoritmer og håndsporing

### Pseudokode i kortform

```
BEST-FIRST-SEARCH(problem, f)                          # Fig. 3.7
  frontier ← prioritetskø etter f, med startnoden
  reached  ← {start: startnoden}
  while frontier ikke er tom:
    node ← POP(frontier)                                # lavest f
    if IS-GOAL(node.state): return node                 # sen måltest
    for child in EXPAND(node):
      s ← child.state
      if s ∉ reached or child.g < reached[s].g:
        reached[s] ← child; legg child i frontier       # billigere vei erstatter
  return failure

BREADTH-FIRST-SEARCH(problem)                          # Fig. 3.9
  if IS-GOAL(start): return startnoden
  frontier ← FIFO-kø med start;  reached ← {start}
  while frontier ikke er tom:
    node ← POP(frontier)
    for child in EXPAND(node):
      if IS-GOAL(child.state): return child             # tidlig måltest
      if child.state ∉ reached: legg til i reached og bakerst i frontier
  return failure

UCS = BEST-FIRST-SEARCH med f = g (path cost)
DFS = BEST-FIRST-SEARCH med f = −dybde (i praksis tree-like med LIFO-stabel)

DEPTH-LIMITED-SEARCH(problem, ℓ)                       # Fig. 3.12
  frontier ← LIFO-stabel med start;  result ← failure
  while frontier ikke er tom:
    node ← POP(frontier)
    if IS-GOAL(node.state): return node
    if DEPTH(node) ≥ ℓ: result ← cutoff                 # node på grensen ekspanderes ikke
    else if ikke IS-CYCLE(node): legg barna på stabelen
  return result                                         # failure eller cutoff

ITERATIVE-DEEPENING-SEARCH(problem)
  for ℓ = 0, 1, 2, …:
    result ← DEPTH-LIMITED-SEARCH(problem, ℓ)
    if result ≠ cutoff: return result
```

Pseudokoden i Fig. 3.12 skriver `DEPTH(node) > ℓ`. Teksten i 3.4.4 og figur 3.13 behandler derimot noder *på* dybde ℓ som om de ikke har barn, og det gjør også L2-slidene og fasiten for eksamen 2022. Videoen og notatet følger teksten: noder på dybde ℓ testes, men ekspanderes ikke. Med `>` ville søket i eksempelet under funnet G allerede ved ℓ = 2.

### Grafen fra forelesning 2

Grafen er rettet, med start A og mål G: A→B 5, A→C 7, B→D 8, B→E 3, D→F 4, E→G 17, F→G 6. C har ingen barn. Alle sporinger under er kontrollert med `videoer/e02-uinformert-sok/verifiser.py`.

**BFS** (FIFO, tidlig måltest):

| Steg | Ekspanderer | Genererer | Frontier etterpå |
|---|---|---|---|
| 0 | – | – | A |
| 1 | A | B, C | B, C |
| 2 | B | D, E | C, D, E |
| 3 | C | – | D, E |
| 4 | D | F | E, F |
| 5 | E | **G = mål** (testes ved generering) | F |

Svar: Order of expansion A, B, C, D, E, (G). Found path A–B–E–G. Path cost 5 + 3 + 17 = 25. Det er færrest steg, men ikke billigst.

**UCS** (prioritetskø på g, sen måltest):

| Steg | Tas ut (g) | Nye/oppdaterte i frontier | Frontier etterpå |
|---|---|---|---|
| 0 | – | A0 | A0 |
| 1 | A (0) | B5, C7 | B5, C7 |
| 2 | B (5) | E8, D13 | C7, E8, D13 |
| 3 | C (7) | – | E8, D13 |
| 4 | E (8) | G25 (**ikke testet ennå**) | D13, G25 |
| 5 | D (13) | F17 | F17, G25 |
| 6 | F (17) | G23 erstatter G25 | G23 |
| 7 | G (23) | tas ut, testes: mål | – |

Svar: A, B, C, E, D, F, (G). Sti A–B–D–F–G. Kostnad 5 + 8 + 4 + 6 = 23. Med måltest ved generering ville UCS stoppet i steg 4 med 25, og det er feil svar.

**DFS** (f = −dybde, alfabetisk ved lik dybde, med reached):

| Steg | Tas ut | Frontier etterpå (dypest først) |
|---|---|---|
| 0 | – | A |
| 1 | A | B, C |
| 2 | B | D, E, C |
| 3 | D | F, E, C |
| 4 | F | G, E, C |
| 5 | G: mål | E, C |

Svar: A, B, D, F, (G). Kostnad 23. Her ble det billigst ved flaks. DFS tar den første løsningen den finner.

**DLS og IDS** (søketreet til grafen: G ligger på dybde 3 under E og på dybde 4 under F):

| Grense ℓ | Tatt ut og testet | Resultat |
|---|---|---|
| 0 | A | cutoff |
| 1 | A, B, C | cutoff |
| 2 | A, B, D, E, C | cutoff (G ligger på dybde 3) |
| 3 | A, B, D, F, E, G | mål: A–B–E–G, 25 |

IDS finner samme sti som BFS fordi den også går lag for lag. Hadde DLS brukt fast grense 2, ville svaret blitt cutoff. Med grense 4 finner DLS A–B–D–F–G, den første løsningen i dybde-først-rekkefølge.

**Toveis BFS** (bakover langs kantene baklengs):

| Steg | Side | Ekspanderer | Forover-frontier | Bakover-frontier |
|---|---|---|---|---|
| 0 | – | – | A | G |
| 1 | forover | A | B, C | G |
| 2 | bakover | G | B, C | E, F |
| 3 | forover | B | C, D, E | E, F → **E møtes** |

Løsning A–B–E–G, 25. Den beste løsningen koster 23, så første møte var ikke optimalt.

### Sammenligningstabellen (Fig. 3.15, tree-like versjoner)

| Kriterium | BFS | UCS | DFS | DLS | IDS | Toveis |
|---|---|---|---|---|---|---|
| Complete? | Ja¹ | Ja¹˒² | Nei | Nei | Ja¹ | Ja¹˒⁴ |
| Optimal cost? | Ja³ | Ja | Nei | Nei | Ja³ | Ja³˒⁴ |
| Time | O(b^d) | O(b^(1+⌊C\*/ε⌋)) | O(b^m) | O(b^ℓ) | O(b^d) | O(b^(d/2)) |
| Space | O(b^d) | O(b^(1+⌊C\*/ε⌋)) | O(bm) | O(bℓ) | O(bd) | O(b^(d/2)) |

¹ complete hvis b er endelig, og tilstandsrommet enten har en løsning eller er endelig. ² complete hvis alle handlingskostnader er ≥ ε > 0. ³ optimal hvis alle handlingskostnader er like. ⁴ hvis begge retninger er BFS eller UCS. L3 viser tabellen uten toveis-kolonnen.

**Hvorfor hver rute er som den er:**
- *BFS complete*: den går lag for lag og når dybde d etter endelig tid når b er endelig. *Optimal bare med like kostnader*: den finner færrest steg, ikke lavest kostnad. *Tid og plass O(b^d)*: 1 + b + b² + … + b^d noder, og hele siste lag ligger i minnet samtidig.
- *UCS optimal*: noder tas ut i kostnadsrekkefølge, så første gang målet tas ut, finnes ingen billigere sti. *Complete med ε > 0*: ellers kan den gå uendelig på gratis steg. *O(b^(1+⌊C\*/ε⌋))*: en sti med kostnad ≤ C\* kan ha høyst ⌊C\*/ε⌋ steg, og den sene testen gir ett lag til. Med like kostnader blir det b^(d+1).
- *DFS ikke complete*: den kan forsvinne ned en uendelig gren eller gå i ring. *Ikke optimal*: den tar første løsning. *Tid O(b^m)*: den kan måtte gå gjennom hele treet, og m kan være mye større enn d (eller ∞). *Plass O(bm)*: bare én sti med søsknene langs den. Varianten *backtracking search* lager ett barn om gangen og trenger bare O(m).
- *DLS*: det samme som DFS med ℓ i stedet for m. Ikke complete hvis ℓ < d. En god grense kan komme fra problemet. Romania-kartet har 20 byer, så ℓ = 19 holder, men *diameteren* er 9, så ℓ = 9 er bedre.
- *IDS*: complete og optimal som BFS (lag for lag), tid O(b^d) fordi bunnlaget dominerer, plass O(bd) som DFS.
- *Toveis*: to BFS-er til halv dybde.
- *Felle*: tabellen gjelder tree-like søk. Graph-search DFS er complete i endelige tilstandsrom, og tid og plass er da begrenset av |V| + |E|, men da er plassfordelen borte.

### Eksamen 2025, oppgave 5 (8 poeng)

Grafen er urettet med start s og mål g: s–a 4, s–b 1, s–k 6, b–c 2, c–d 2, d–e 2, e–g 4, g–f 5, g–k 3, k–j 3, j–i 1, i–h 1, h–f 1. Bruk BFS, DFS med minne og UCS med alfabetisk tie-break. a) Hvem finner billigste vei? (2 p) b) Hvem ekspanderer færrest noder? (2 p) c) Hvilke noder må hver algoritme ekspandere? (4 p)

**BFS:**

| Ekspanderer | Frontier etterpå |
|---|---|
| s | a, b, k |
| a | b, k |
| b | k, c |
| k | g genereres: mål |

Sti s–k–g, kostnad 9.

Fasiten skriver «Add G and J to frontier – G is goal» ved k. Etter Fig. 3.9 genereres g før j og testes straks, men svaret blir det samme.

**DFS med minne:**

| Ekspanderer | Frontier etterpå (dypest først) |
|---|---|
| s | a, b, k |
| a | b, k |
| b | c, k |
| c | d, k |
| d | e, k |
| e | g, k |
| g: mål | k |

Sti s–b–c–d–e–g, kostnad 11.

**UCS:**

| Tas ut (g) | Frontier etterpå |
|---|---|
| s (0) | b1, a4, k6 |
| b (1) | c3, a4, k6 |
| c (3) | a4, d5, k6 |
| a (4) | d5, k6 |
| d (5) | k6, e7 |
| k (6) | e7, g9, j9 |
| e (7) | g9, j9 (g via e = 11 forkastes) |
| g (9): mål | j9 |

Sti s–k–g, kostnad 9.

**Svar:**
- a) BFS og UCS.
- b) BFS.
- c) BFS {a, b, k}, DFS {a, b, c, d, e}, UCS {b, c, a, d, k, e}. Fasiten teller ikke s.
- BFS fant billigste vei her bare fordi den korteste stien også var den billigste.

## Eksamensfeller

- **Stoppe UCS (eller A\*) når målet dukker opp i frontier.** Målet er først funnet når det tas ut. Med L2-grafen gir feil test 25 i stedet for 23.
- **«BFS finner billigste vei».** Det gjelder bare når alle steg koster likt (2025: riktig svar bare ved flaks).
- **Glemme at en billigere vei erstatter en node i frontier og reached.** Lærestoffet viser G 25 → 23. Ikke behold begge, og ikke ignorer den nye.
- **Tie-break.** Kurset bruker alfabetisk rekkefølge. Ved DFS betyr det at B tas før C blant like dype noder, så B må ligge øverst i stabelen.
- **Tree-like eller graph search?** Les oppgaven. I eksamen 2023 (2.1, tree-like) går DFS i løkka A → A og finner ingen løsning («Found path ∅»), mens BFS gir S, A, B, (G) og UCS gir S, A, B, C, (G).
- **Svarformat.** Skriv ekspansjonsrekkefølgen med målet i parentes, stien og kostnaden. Si om startnoden er med: fasiten for 2025 c) teller ikke s, mens fasiten for 2023 tar med S.
- **«Kompleksiteten til BFS er bm» er usant** (2019, oppgave 1). BFS er O(b^d). O(bm) er plassen til DFS.
- **«IDS er optimal når stegkostnadene er like, b er endelig og en løsning finnes» er sant** (2015). Uten like kostnader er IDS ikke optimal.
- **UCS er bare complete når alle kostnader er ≥ ε > 0.** En sløyfe med kostnad 0 kan holde UCS i gang for alltid.
- **DLS skiller cutoff fra failure.** Cutoff betyr «ingen løsning innenfor grensen». Noder på dybde ℓ testes, men ekspanderes ikke (se merknaden om Fig. 3.12).
- **Tabellen gjelder tree-like.** Graph-search DFS er complete i endelige rom.
- **Toveis med kostnader:** første møte er ikke bevis for optimal løsning.

## Koblinger til andre kapitler

- → kap. 3 / E03: Greedy best-first (f = h) og A\* (f = g + h) bruker samme BEST-FIRST-SEARCH og sen måltest som UCS. Når h = 0, er A\* lik UCS.
- → kap. 5 / E07: Backtracking search for CSP er dybde-først søk over delvise tilordninger.
- → kap. 6 / E08: Minimax gjør en fullstendig dybde-først gjennomgang av spilltreet, med O(bm) minne.
- → kap. 11 / E18: Planlegging søker forover (progression) eller bakover (regression) gjennom tilstander. Bakoversøk krever, som toveis søk, at du kan regne ut forgjengere.

## Ikke pensum her

- Ingen seksjoner i 3.1–3.4 er UT (PENSUMOVERSIKT, kap. 3).
- 3.1.2 Formulating problems (abstraction) er pensum, men står bare i boka. Foreleser gikk ikke gjennom det (PENSUMOVERSIKT).
- 3.4.5 Bidirectional search er pensum, men står bare i boka. Foreleser gikk ikke gjennom det (PENSUMOVERSIKT). L3 viser sammenligningstabellen uten toveis-kolonnen.

## Øv selv

1. Formuler vacuum world med to ruter som søkeproblem: initial state, actions, transition model, goal test og action cost. Hvor mange states har det? Kan søketreet ha flere noder enn det?
2. Lag en graf med tre noder der UCS med måltest ved generering gir feil svar. Vis begge kjøringene.
3. Kjør IDS (DLS med cycle check, alfabetisk) på grafen fra eksamen 2025, oppgave 5. Skriv hvilke noder som tas ut for hver grense, og si for hvilken grense målet finnes og med hvilken sti.
4. Bruk grafen fra eksamen 2023, oppgave 2.1 (S→A 4, S→B 7, A→A 13, A→C 4, B→G 10, C→G 4). Kjør BFS, DFS og UCS som *tree-like search* med alfabetisk tie-break. Oppgi rekkefølgen, stien og kostnaden.
5. Sant eller usant? a) Graph-search DFS er complete i endelige tilstandsrom. b) IDS bruker O(b^d) minne. c) UCS med like handlingskostnader kan generere opptil b^(d+1) noder. d) Toveis UCS er optimal ved første møte.
6. Gamle eksamensoppgaver:
   - 2025, oppgave 5 «Uninformed Search» (8 p).
   - 2023, oppgave 2.1 tree-like search (10 p).
   - 2022, oppgave 3 ulv/geit/kål, graf og IDS med grense 3 (poeng ikke oppgitt i teksten).
   - 2021, oppgave 2 «Search», BFS/DFS/UCS med frontier i hvert steg (25 p).
   - 2020 (kontinuasjon), Problem 2 tree search (25 p).
   - 2020, «Question – Search», BFS graph search (25 p).
   - 2019, oppgave 1 sant/usant (2 p per påstand, −1 for feil).
   - 2018, Problem 4 «Search Algorithms» (10 p).
   - 2015, sant/usant om IDS og BFS med måltest.

## Fasit

**Quizene i videoen:**
- Kapittel 1: B. Ja, uendelig mange. Du kan gå venstre–høyre i det uendelige, for tilstandene er endelige, men stiene er det ikke.
- Kapittel 2: B. Den billigere veien erstatter den gamle i reached, og noden legges i frontier.
- Kapittel 3: A. A–B–E–G med kostnad 3, og den er billigst. Med like kostnader er færrest steg det samme som lavest kostnad.
- Kapittel 4: C. IDS gir svaret til BFS med minnet til DFS (O(bd)). Toveis BFS trenger fortsatt eksponentielt minne.
- Kapittel 5: B. Usant. BFS er O(b^d), og O(bm) er plassen til DFS.

**Øv selv:**
1. Tilstanden er robotens posisjon (venstre eller høyre) og om hver rute er skitten, så 2 · 2 · 2 = 8 states. Handlingene er Left, Right og Suck. RESULT flytter roboten eller fjerner skitten i ruta den står i. Måltesten er at begge rutene er rene. Hver handling koster 1. Søketreet kan bli uendelig (Left, Right, Left, …) uten reached eller cycle check.
2. S→G 10, S→A 1, A→G 1. Med måltest ved generering gir ekspansjon av S straks G med kostnad 10. Med sen måltest tas A (1) ut først, så kommer G via A med kostnad 2, og G (2) tas ut før G (10). Riktig svar er S–A–G = 2.
3. ℓ = 0: s, cutoff. ℓ = 1: s, a, b, k, cutoff. ℓ = 2: s, a, b, c, k, g, mål. Stien er s–k–g med kostnad 9. Etter a går søket ikke tilbake til s, fordi s er en sykel.
4. BFS: S, A, B, (G), sti S–B–G, kostnad 17. DFS: S, A, A, A, … går i løkke uten løsning (fasit: «Found path ∅»). UCS: S, A, B, C, (G), sti S–A–C–G, kostnad 12. Dette er fasiten for 2023.
5. a) Sant. b) Usant, IDS bruker O(bd). c) Sant: UCS bruker sen måltest, så med like kostnader er tiden b^(1+⌊C\*/ε⌋) = b^(d+1). d) Usant: første møte gir en løsning, men ikke nødvendigvis den billigste, så søket må fortsette til det er bevist.
