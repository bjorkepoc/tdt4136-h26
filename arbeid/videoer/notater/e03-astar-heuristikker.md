# E03 – A* og kunsten å gjette godt

> Pensum: Global 3.5–3.6 (US samme) · Forelesning: L2, L3, AL1 · Øving: Ø1 · Eksamensvekt: ~22 % (søk samlet, deles med E02)
> Video: `videoer/e03-astar-heuristikker/out/tdt4136-e03-astar-heuristikker.mp4` (16:05)

## Kapitler i videoen

- 0:00 – Intro
- 0:32 – Grådig best-first
- 2:16 – A*: f = g + h
- 4:08 – Admissible og consistent
- 7:02 – Hvorfor A* er optimal
- 8:44 – Mindre minne, raskere svar
- 10:19 – Gode heuristikker
- 12:52 – Eksamen 2023, oppgave 2.2
- 14:58 – Koblinger og oppsummering

## Kjerneideer

**Heuristikk.** En *heuristic function* h(n) anslår kostnaden for den billigste stien fra n til et mål. Den bruker bare tilstanden i n, og h(mål) = 0. Alle algoritmene her er BEST-FIRST-SEARCH fra E02 (Fig. 3.7) med en annen *evaluation function* f.

**Greedy best-first search: f(n) = h(n) (3.5.1).** Grådig søk tar alltid noden som *ser* nærmest målet ut, og glemmer hva veien dit har kostet. To ting går galt:
- Tree-like (uten reached) kan den gå i løkke. På løkkegrafen fra eksamen 2023 tar den A, A, A … for alltid, fordi selvløkka gir en ny A med samme h.
- Med graph search velger den lett en dyr vei. På samme graf svarer den S, B, G med kost 17, mens den billigste koster 12. I Romania-eksempelet (Fig. 3.17–3.18) finner den 450 der beste rute er 418.

Greedy med graph search er komplett i endelige tilstandsrom, men ikke i uendelige, og aldri garantert optimal.

**A\*: f(n) = g(n) + h(n) (3.5.2).** g(n) er kostnaden du har betalt fra start til n, h(n) er gjetningen på resten. Da er f(n) et anslag for hele den billigste løsningen *gjennom* n, omtrent som en GPS som teller både kjørte kilometer og luftlinje til målet. Med h = 0 blir A* uniform-cost search.

**Målet testes når det tas ut, ikke når det legges inn.** At G ligger i frontier med f = 17, betyr ikke at du er ferdig. C ligger der med f = 11, så det kan finnes en billigere vei gjennom C, og det gjør det (12). Kurset følger Fig. 3.7: BFS tester ved generering (Fig. 3.9), UCS og A* ved ekspansjon.

**Admissible: h(n) ≤ h\*(n) for alle n.** h\* er den ekte billigste restkostnaden. En admissible heuristikk overestimerer aldri, den er optimistisk. Eksempel fra L3: hvis h(B) = 1000 mens h\*(B) = 2, svarer A* med kost 1000 i stedet for 3.

**Consistent (monotone): h(n) ≤ c(n, a, n′) + h(n′) for hver kant.** Det er trekantulikheten (*triangle inequality*, Fig. 3.19): gjetningen rett fra n kan ikke være lengre enn ett steg pluss gjetningen derfra. Du sjekker den kant for kant.

**Consistent ⇒ admissible, men ikke omvendt.** Følg den billigste stien n → n₁ → … → mål og bruk ulikheten på hver kant: h(n) ≤ c₁ + h(n₁) ≤ c₁ + c₂ + h(n₂) ≤ … ≤ summen av kantene + h(mål) = h\*(n). Moteksempel på det omvendte (eksamen 2018, problem 5): S→A 2, A→G 3, S→G 6, h(S) = 4, h(A) = 1. Den er admissible (4 ≤ 5, 1 ≤ 3), men ikke consistent (4 > 2 + 1).

**Hvorfor consistency betyr noe i graph search.** Med consistent h synker f aldri langs en sti, og første gang en tilstand tas ut av frontier, er stien dit den billigste. Med en h som bare er admissible kan en tilstand bli tatt ut før den billigste veien dit er funnet. Bokas Fig. 3.7 håndterer det: finner den en billigere vei til en tilstand i reached, legges tilstanden inn i frontier igjen og ekspanderes på nytt. Da blir svaret optimalt. En variant som aldri åpner en ferdig (*closed*) node igjen, kan svare suboptimalt. Fasiten for 2021 sier det samme: admissible h holder for graph search som oppdaterer lukkede noder, ellers trengs consistent h.

**Negative heuristikker (L3 s. 19–20).** En h som gir målet −999, ligger under h\*, men målet får da f = 10 − 999 = −989, tas ut straks og koster 10 i stedet for 2. Beviset krever h(mål) = 0. Trekker du samme konstant fra alle h, endres ikke rekkefølgen, så negative verdier gir ingen ny informasjon.

**Optimalitetsbeviset.** Anta at A* returnerer et mål med kost C > C\*. Da ligger en node n på en optimal sti uekspandert i frontier. Med admissible h er f(n) = g\*(n) + h(n) ≤ g\*(n) + h\*(n) = C\* < C, så n ville blitt tatt ut før det dårlige målet. Selvmotsigelse. På løkkegrafen: når G ligger med 17, ligger C med f = 8 + 3 = 11 ≤ 8 + 4 = 12 = C\*.

**Contours, surely expanded og optimally efficient (3.5.3).** Boka tegner søket som høydekurver (*search contours*, Fig. 3.20): UCS sprer seg i sirkler rundt start, A* i bånd med økende f som strekkes mot målet. Alle noder som nås fra start langs en sti der hver node har f(n) < C\*, blir ekspandert (*surely expanded*), noen med f(n) = C\* kan bli det, og ingen med f(n) > C\*. Stikravet trengs: en node med lav f som bare nås via en forgjenger med f > C\*, blir aldri nådd. Å kutte bort slike deltrær uten å se på dem heter *pruning*. Med consistent h er A* *optimally efficient*: enhver algoritme som utvider stier fra start med samme h, må ekspandere minst de nodene A* sikkert ekspanderer. Selve contours står bare i boka; monotone f og optimally efficient ble nevnt i L3.

**Satisficing search (3.5.4).** Godtar du en litt dårligere løsning for å spare tid, kan du bruke en inadmissible h eller *weighted A\**: f(n) = g(n) + W·h(n). W = 0 gir UCS, W = 1 gir A*, og W → ∞ gir greedy. Med W ≥ 1 og admissible h blir kostnaden mellom C\* og W·C\*. Grensen gjelder ikke for W < 1: W = 0 er UCS, som finner C\*, mens W·C\* = 0.

**Memory-bounded search (3.5.5).**
- *Beam search* beholder bare de k beste nodene i frontier. Rask, men verken komplett eller optimal.
- *IDA\** er iterative deepening med grense på f i stedet for dybde. Neste grense er den minste f som falt utenfor forrige runde. Mellom rundene husker den bare ett tall.
- *RBFS* går i dybden, men husker f for beste alternativ (*f_limit*). Blir stien dyrere enn det, rygger den og lagrer beste f-verdi i forelderen (*backed-up value*). Minnet er lineært i dybden.
- *SMA\** bruker alt minnet den har. Når minnet er fullt, kaster den bladet med høyest f og lagrer verdien i forelderen. (Kun bok.)
- IDA*, RBFS og SMA* kan alle bruke mye tid på å gjenskape det de har glemt (*thrashing*).
- *Reference count* (L3): tell hvor mange ganger en tilstand er nådd, og fjern den fra reached når ingen flere veier kan føre dit. I et rutenett der hver rute bare kan nås fra fire naboer, kan ruta fjernes etter fjerde gang.

**Bidirectional heuristic search (3.5.6, kun bok).** Ett søk går fra start med h_F, ett baklengs fra målet med h_B. Begge velger noden med lavest f₂(n) = max(2g(n), g(n) + h(n)). Da ekspanderes ingen node med g(n) > C\*/2, og søkene møtes på midten. Boka antar admissible heuristikker. Ingen bidirectional algoritme kan garanteres å være optimally efficient, fordi den kan ekspandere opptil dobbelt så mange noder som nødvendig.

**Hvor god er en heuristikk? (3.6.1)** På 8-puzzle teller h₁ brikker på feil plass, og h₂ summerer Manhattan distance. For startbrettet i Fig. 3.25 er h₁ = 8, h₂ = 18 og h\* = 26. Hvis h₂(n) ≥ h₁(n) for alle n, *dominerer* h₂ h₁, og med consistent h ekspanderer A* med h₂ aldri flere noder. Unntaket er noder med f = C\*, der tie-break avgjør. *Effective branching factor* b\* er forgreningen et jevnt tre med dybde d må ha for å inneholde N + 1 noder, der N er antall genererte noder. Nær 1 er bra. (b\* står bare i boka. Dominans og tabellen ble forelest i L3.)

**Relaxed problems (3.6.2).** En brikke kan flytte fra X til Y hvis X er nabo til Y og Y er tom. Fjerner du «Y er tom», løser h₂ det nye problemet eksakt. Fjerner du begge kravene, gjør h₁ det. Et *relaxed problem* har bare flere kanter enn originalen, så den optimale løsningen der kan ikke være dyrere. Derfor er h admissible. Den er også consistent, fordi den er en ekte stikostnad i det avslappede problemet. Har du flere admissible heuristikker, er h(n) = max(h_a(n), h_b(n), …) admissible og dominerer alle.

**Andre kilder til h.**
- *Pattern databases* (3.6.3) lagrer eksakt kost for et delproblem, for eksempel brikkene 1–4 pluss tom rute, for alle 9·8·7·6·5 = 15 120 mønstre. Under søket slår du opp. L3 foreleste ideen uten navnet.
- *Landmarks* (3.6.4, kun bok): regn ut ekte avstander til noen faste punkter på forhånd, slik kartapper gjør. Den direkte landmark-heuristikken kan overestimere. *Differential heuristic* h_DH(n) = max_L |C\*(n, L) − C\*(mål, L)| er admissible.
- *Learning to search better* (3.6.5, kun bok): *metalevel learning* lærer seg hvilke deler av søketreet som lønner seg å utvide.
- *Learning heuristics from experience* (3.6.6, kun bok): lær h fra løste eksempler, for eksempel som en lineær kombinasjon h(n) = c₁x₁(n) + c₂x₂(n) av egenskaper som «brikker på feil plass». Den kan overestimere.

## Algoritmer og håndsporing

**Kortform (Fig. 3.7) for greedy og A\*:**

```
frontier ← prioritetskø etter f, med start;  reached[start] ← start
while frontier ikke er tom:
    n ← POP(frontier)                      # lavest f, likt: alfabetisk
    if IS-GOAL(n): return n                # målet testes her
    for barn s i EXPAND(n), alfabetisk:
        if s ikke i reached eller g(s) < reached[s].g:
            reached[s] ← s; legg s i frontier (en billigere sti erstatter den gamle)
```

Greedy: f = h. A*: f = g + h. Weighted A*: f = g + W·h. Tree-like search dropper reached og legger inn alle barn.

**Egenskaper:**

| Algoritme | Velger etter | Komplett | Optimal | Minne |
|---|---|---|---|---|
| Greedy best-first | h | graph search i endelig rom: ja; ellers nei | nei | hele frontier |
| A* | g + h | ja (kanter ≥ ε > 0) | ja med admissible h (Fig. 3.7 åpner noder igjen); consistent h gir optimalt uten gjenåpning | hele frontier, eksponentielt |
| Weighted A* | g + W·h | ja | nei, kost ≤ W·C\* (W ≥ 1, admissible h) | mindre enn A* i praksis |
| Beam search | de k beste | nei | nei | k noder |
| IDA* | f-grense, DFS | ja | ja med admissible h | lineært |
| RBFS | f_limit, backed-up values | ja | ja med admissible h | lineært |
| SMA* | fullt minne, kast høyest f | ja hvis grunneste løsning får plass i minnet | ja hvis en optimal løsning får plass | alt tilgjengelig |
| Bidirectional heuristic | f₂ = max(2g, g + h) | ja | ja med admissible h (se usikkerhet under Eksamensfeller) | to frontiers |

**Løkkegrafen** (L2 og eksamen 2023 oppg. 2.1): S→A 4, S→B 7, A→A 13, A→C 4, B→G 10, C→G 4. h(A) = h(B) = h(C) = 3, h(G) = 0. h(S) er ikke oppgitt, og ingenting under avhenger av den så lenge h(S) ≤ 7.

Greedy, tree-like (frontier som h):

| Ekspanderer | Frontier etterpå |
|---|---|
| S | A 3, B 3 |
| A | A 3, B 3, C 3 |
| A | A 3, B 3, C 3, C 3 |
| A | … for alltid, ingen løsning |

Greedy, graph search:

| Ekspanderer | Frontier etterpå (h) |
|---|---|
| S | A 3, B 3 |
| A | B 3, C 3 (løkka: g = 17 > 4, forkastes) |
| B | G 0, C 3 |
| (G) | sti S B G, kost 17 |

A*, graph search (frontier som f = g + h):

| Ekspanderer | Frontier etterpå (f) |
|---|---|
| S | A 7, B 10 |
| A | B 10, C 11 (løkka: g = 17 > 4, forkastes) |
| B | C 11, G 17 |
| C | G 12 (erstatter G 17) |
| (G) | sti S A C G, kost 12 |

Rekkefølge S, A, B, C, (G). Tree-like A* (eksamen 2023) har i tillegg løkke-A med f = 17 + 3 = 20 i frontier etter A, men rekkefølgen og svaret blir de samme. Tester du målet ved generering, svarer du S B G med kost 17.

**L3, h(B) = 1000:** A→B 1, B→C 1, C→G 1, A→C 999; h(A) = 3, h(C) = 1. Etter A: C 1000 (999 + 1), B 1001 (1 + 1000). C tas ut, G får 1000, og A* svarer A C G med kost 1000. Optimalt er A B C G med kost 3.

**Inkonsistent, men admissible h i graph search** (ILLUSTRASJON, egen graf): S→A 1, S→B 1, A→C 1, B→C 2, C→G 3; h(S) = 2, h(A) = 4, h(B) = 1, h(C) = 1, h(G) = 0. Kanten A→C bryter consistency (4 > 1 + 1).

| Ekspanderer | Frontier etterpå (f) |
|---|---|
| S | B 2, A 5 |
| B | C 4, A 5 |
| C | A 5, G 6 |
| A | C 3 (billigere vei, legges inn igjen), G 6 |
| C | G 5 (erstatter G 6) |
| (G) | sti S A C G, kost 5, optimalt |

En variant som aldri åpner en ferdig node igjen, hopper over C når A ekspanderes, og svarer S B C G med kost 6.

**Negativ h (L3):** s→g 10, s→n 1, n→g 1; h(n) = 1, h(g) = −999. Etter s: g −989, n 2. g tas ut, kost 10. Optimalt er 2.

**Weighted A\*, W = 4, på løkkegrafen:**

| Ekspanderer | Frontier etterpå (g + 4h) |
|---|---|
| S | A 16, B 19 |
| A | B 19, C 20 |
| B | G 17, C 20 |
| (G) | sti S B G, kost 17 ≤ 4 · 12 = 48 |

Med W = 2 blir svaret fortsatt 12.

**IDA\* på løkkegrafen:** første grense er f(S) = h(S). Deretter blir grensene 7, 10, 11 og 12, og i siste runde finnes S A C G med kost 12.

**8-puzzle (Fig. 3.25):** startbrettet 7 2 4 / 5 _ 6 / 8 3 1. Alle åtte brikker står feil, så h₁ = 8. Manhattan-avstand for brikke 1–8: 3, 1, 2, 2, 2, 3, 3, 2, som gir h₂ = 18. Optimal løsning: 26 trekk.

**Fig. 3.26, d = 12, noder generert:** BFS 2672, A*(h₁) 279, A*(h₂) 84. b\* = 1,80, 1,45 og 1,28.

**b\* regnet ut:** N = 52 og d = 5 gir 53 = 1 + b\* + (b\*)² + … + (b\*)⁵. Prøv b = 2: 1 + 2 + 4 + 8 + 16 + 32 = 63, for mye. b = 1,92 gir ≈ 53,4, så b\* ≈ 1,92.

**Eksamen 2023 oppg. 2.2** (graf: A→B 1, A→C 4, B→C 2, B→D 3, C→E 5, D→F 2, D→G 4, E→G 3, F→G 1; h(A) = 5, h(C) = 4, h(D) = 3, h(E) = 3, h(F) = 1, h(G) = 0). Optimal sti: A B D F G med kost 7.

1. Consistent: A→B gir 5 ≤ 1 + h(B), altså h(B) ≥ 4. B→C gir h(B) ≤ 2 + 4 = 6. B→D gir h(B) ≤ 3 + 3 = 6. De andre kantene holder. Svar: **4 ≤ h(B) ≤ 6**. (Admissible krever bare h(B) ≤ h\*(B) = 6.)
2. Ekspansjon A, C, B uten tie-break: etter A ligger B med 1 + h(B) og C med 8. C først krever 1 + h(B) > 8. Etter C ligger E med 9 + 3 = 12. B før E krever 1 + h(B) < 12. Svar: **7 < h(B) < 11**. Ved 7 eller 11 avgjør tie-break.
3. Suboptimal sti: **h(B) > 11**.

h(B) = 12 (suboptimal):

| Ekspanderer | Frontier etterpå (f) |
|---|---|
| A | C 8, B 13 |
| C | E 12, B 13 |
| E | G 12, B 13 |
| (G) | sti A C E G, kost 12 |

h(B) = 11 (grensen, alfabetisk tie-break):

| Ekspanderer | Frontier etterpå (f) |
|---|---|
| A | C 8, B 12 |
| C | B 12, E 12 (likt: B før E) |
| B | C 7 (billigere vei, C åpnes igjen), D 7, E 12 (likt: C før D) |
| C | D 7, E 11 |
| D | F 7, G 8, E 11 |
| F | G 7, E 11 |
| (G) | sti A B D F G, kost 7 |

h(B) = 9 er inadmissible (9 > 6), men gir likevel optimal sti.

## Eksamensfeller

- **Stopper når målet genereres.** I A* og UCS testes målet når noden tas ut av frontier. På løkkegrafen gir tidlig test S B G = 17 i stedet for 12. Bare BFS tester ved generering.
- **Glemmer alfabetisk tie-break.** Fasitene bruker alfabetisk rekkefølge, eller venstre til høyre, både ved generering og ved like f-verdier. Skriv f-verdiene i frontier for hvert steg.
- **Blander tree-like og graph search.** Eksamen 2023 oppg. 2.1 ba om tree-like search. Da står løkke-A med f = 20 i frontier, og greedy går i evig løkke. Med graph search (Fig. 3.7, som Ø1 bruker) forkastes løkka.
- **Tror admissible ⇒ consistent.** Det er omvendt. Sjekk consistency kant for kant med h(n) ≤ c + h(n′).
- **Tror inadmissible h alltid gir suboptimal sti.** Admissible h *garanterer* optimalitet, men en inadmissible h kan godt treffe optimalt. Eksempler: h(B) = 9 i 2023 2.2 og h(R) = 227 i 2021. Fasiten for 2021 kaller admissibility «necessary» for optimalitet. Det som menes, er at den er nødvendig for *garantien*.
- **Glemmer gjenåpning.** Med inkonsistent h kan en tilstand få en billigere vei etter at den er ekspandert. Fig. 3.7 legger den inn igjen. Si hvilken variant du bruker.
- **Glemmer h(mål) = 0.** Optimalitetsbeviset trenger det, se L3s negative eksempel.
- **Intervallgrenser.** «Uten tie-break» betyr strenge ulikheter (7 < h(B) < 11). Likhet betyr at tie-break avgjør.

## Koblinger til andre kapitler

- → kap. 3.4 / E02: A* med h = 0 er uniform-cost search, og IDA* bygger på iterative deepening. Samme Fig. 3.7, samme reached-regel.
- → kap. 6.3 (US 5.3) / E09: evalueringsfunksjonen EVAL(s) i spill er samme idé som h(n), et raskt anslag på hvor god en tilstand er.
- → kap. 11.3 / E18: planleggingsheuristikker lages med relaxed problems: *ignore preconditions* og *ignore delete lists*. Tenk på 8-puzzle uten «Y er tom».
- → kap. 4 (L3, samme forelesning): local search bruker også en evalueringsfunksjon, men uten g og uten frontier.

## Ikke pensum her

- Ingen delkapitler i 3.5–3.6 er tatt ut (PENSUMOVERSIKT, kap. 3). Contours, SMA\*, bidirectional heuristic search, b\*, landmarks og læring (3.6.4–3.6.6) står bare i boka, men er pensum.
- Bonusoppgaven i Assignment 1 er «not something you have to do» (AL1). Det gjelder øvingen, ikke pensum.

## Øv selv

1. Eksamen 2023, oppgave 2.1 (10 p): tree-like BFS, DFS, UCS, greedy og A* på løkkegrafen. Oppgi ekspansjonsrekkefølge, sti og kost.
2. Eksamen 2025, oppgave 6 (12 p): er heuristikken admissible? Er den consistent? Kjør A* med alfabetisk tie-break og vis frontier og sti.
3. Eksamen 2018, problem 5 (10 p): avgjør admissible og consistent for H1–H4 (S→A 2, A→G 3, S→G 6). H1 = (4, 1), H2 = (5, 4), H3 = (4, 3), H4 = (5, 2) for (h(S), h(A)). Hvilke dominerer hverandre?
4. Eksamen 2021, oppgave 2, A*-delen (av 25 p for hele oppgaven): betingelse for optimalitet, admissible?, A*-sporing, og hva skjer med h(R) = 227?
5. Løkkegrafen: hvilke verdier av h(S) gjør h consistent?
6. Løkkegrafen med weighted A\*, W = 3: hva blir frontier etter B, og hvilken sti returneres med alfabetisk tie-break?

## Fasit

**Quizene i videoen:**
- Kap. 1: greedy graph search i et endelig rom med løkker er komplett (A). Reached stopper løkkene, og rommet går tomt for nye tilstander.
- Kap. 2: A* med h = 0 er uniform-cost search (A).
- Kap. 3: h(S) = 5, h(A) = 2 er bare admissible (B): 5 ≤ 5 og 2 ≤ 3, men 5 > 2 + 2.
- Kap. 4: en node med f = 13 når C\* = 12 blir aldri ekspandert (C).
- Kap. 6: ½h₁ + ½h₂ er alltid admissible (A), fordi gjennomsnittet ≤ max(h₁, h₂) ≤ h\*. Maksimum er bedre, fordi det dominerer.
- Kap. 7: se håndsporingen over (4 ≤ h(B) ≤ 6; 7 < h(B) < 11; h(B) > 11).

**Øv selv:**
1. Fasiten: BFS S, A, B, (G), sti SBG, kost 17. DFS S, A, A, … ingen løsning. UCS S, A, B, C, (G), SACG, 12. Greedy S, A, A, … ingen løsning. A* S, A, B, C, (G), SACG, 12.
2. Fasiten: ja og ja (straight-line distance). A*: S gir B 5, A 9, K 9. B gir C 8. C gir D 10. A (9, alfabetisk før K) gir ingenting nytt. K gir G 9 og J 14. G tas ut: sti S K G, kost 9. Ekspandert: S, B, C, A, K.
3. H1: admissible, ikke consistent (4 > 2 + 1). H2: ikke admissible (h(A) = 4 > 3), ikke consistent. H3: begge. H4: admissible, ikke consistent (5 > 2 + 2). H4 dominerer H1. H3 og H4 har ingen dominans (4 < 5, men 3 > 2).
4. Fasiten: admissible h er nok for graph search som oppdaterer lukkede noder, ellers trengs consistent h. h er admissible, og A* gir A→S→R→P→B med kost 418, optimalt. Med h(R) = 227 er h ikke admissible lenger (h\*(R) = 97 + 101 = 198), men svaret er fortsatt 418, fordi f(R) = 220 + 227 = 447 < 450. Ingen motsigelse: admissibility er tilstrekkelig for garantien, ikke nødvendig for å treffe.
5. 0 ≤ h(S) ≤ 7. Kanten S→A gir h(S) ≤ 4 + 3 = 7, og S→B gir h(S) ≤ 7 + 3 = 10.
6. S gir A 13, B 16. A gir C 17 (løkka forkastes). B gir G 17, og frontier er C 17, G 17. Likt, så C tas ut først og gir G 12. Svar: S A C G, kost 12, men bare takket være tie-break.
