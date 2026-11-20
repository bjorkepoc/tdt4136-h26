# E05 – Når verden ikke adlyder: AND-OR, belief states og online søk

> Pensum: Global 4.3–4.5 (US samme) · Forelesning: L3 · Øving: – · Eksamensvekt: ~4 % (hele kap. 4, deles med E04)
> Video: `videoer/e05-usikre-miljoer/out/tdt4136-e05-usikre-miljoer.mp4` (13:01)

## Kapitler i videoen

- 0:00 – Intro
- 0:37 – Flere utfall
- 1:46 – AND-OR-søk
- 4:07 – Blind agent: belief states
- 5:58 – Agent som ser litt
- 7:43 – Online søk
- 10:44 – Eksamen 2023, oppgave 7
- 12:04 – Koblinger og oppsummering

## Kjerneideer

**Støvsugerverdenen (Fig. 4.9).** Åtte tilstander: roboten står til venstre (L) eller høyre (R), og hver rute er skitten eller ren. Nummereringen brukt her og i boka:

| Tilstand | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Robot | L | R | L | R | L | R | L | R |
| Venstre rute | skitten | skitten | skitten | skitten | ren | ren | ren | ren |
| Høyre rute | skitten | skitten | ren | ren | skitten | skitten | ren | ren |

Mål: 7 og 8 (begge rene).

**Ikke-deterministiske handlinger (4.3.1).** I *erratic vacuum world* renser Suck på en skitten rute den ruta og noen ganger naboruta også. Suck på en ren rute kan legge igjen skitt. Da holder ikke RESULT(s, a), som gir én tilstand. Vi bruker RESULTS(s, a), som gir en *mengde* mulige tilstander, for eksempel RESULTS(1, Suck) = {5, 7}. Ingen fast sekvens virker alltid. Løsningen er en *conditional plan* (= *contingency plan*), et tre med if-setninger: `[Suck, if State = 5 then [Right, Suck] else []]`.

**AND-OR-søketre (4.3.2).** To slags noder:
- *OR-node*: en tilstand der agenten velger handling. Én handling som virker, holder.
- *AND-node*: utfallene av en handling, valgt av miljøet. Alle utfall må løses. Boka tegner den som en sirkel med bue over kantene.

En løsning er et deltre med mål i hvert blad, én handling i hver OR-node og alle grener i hver AND-node. Planen leses ovenfra: OR-noden gir en handling, AND-noden gir en if-then-else.

**Sykler (4.3.2).** OR-SEARCH returnerer *failure* hvis tilstanden allerede står på stien fra roten. Det betyr ikke at tilstanden er uløselig: finnes en løsning, finnes den fra første besøk, så gjentakelsen er overflødig. Kapitlet bruker dybde først, men AND-OR-grafer kan også søkes med BFS eller best-first (AO\*, kun nevnt i boka).

**Slippery vacuum world og cyclic plans (4.3.3).** Her kan Right glippe, så RESULTS(5, Right) = {5, 6}. Utfallet 5 står på stien, så AND-OR-SEARCH finner ingen asyklisk plan. En *cyclic plan* prøver igjen: `[Suck, while State = 5 do Right, Suck]` eller med label `[Suck, L1: Right, if State = 5 then L1 else Suck]`. Den virker hvis hvert utfall før eller senere skjer (tilfeldig glipp), ikke hvis drivreima er røket. Da må problemet modelleres annerledes. (L3 viser figuren som henvisning.)

**Sensorless (conformant) problem (4.4.1).** Verden er deterministisk, men agenten ser ingenting. Den vet bare hvilken *mengde* tilstander den kan være i: en *belief state*.
- Med N fysiske tilstander finnes 2^N belief states. I støvsugerverdenen er det 2^8 = 256, men bare 12 kan nås fra {1, …, 8} (Fig. 4.14).
- *Prediction*: b′ = PREDICT(b, a) = {s′ : s′ = RESULT(s, a) og s ∈ b}. Med ikke-deterministiske handlinger tar du unionen av alle RESULTS, og da kan mengden vokse.
- Mål: alle tilstander i b må være mål.
- Løsningen er en *sekvens*, ikke en betinget plan, for det kommer ingen percept å velge etter. [Right, Suck, Left, Suck] fører {1, …, 8} til {7}. Å tvinge verden til én tilstand uten å se heter å *coerce* den.
- *Pruning*: [Left] gir {1, 3, 5, 7}, en supermengde av {5, 7}, som [Suck, Left, Suck] og [Right, Left, Suck] også gir. En løsning for den store mengden må virke for den lille, så supermengden kan kuttes. Omvendt: er en mengde funnet løsbar, er alle delmengder løsbare.
- *Incremental belief-state search* (4.4.1, L3 kort): løs én fysisk tilstand om gangen og sjekk at løsningen virker for de neste. Oppdager raskt at et problem er uløselig.

**Partial observability med local sensing (4.4.2).** Agenten ser hvilken rute den står i og om den er skitten, for eksempel [L, Dirty]. Overgangen går i tre trinn (Fig. 4.15):
1. *Prediction*: b̂ = PREDICT(b, a).
2. *Possible percepts*: POSSIBLE-PERCEPTS(b̂) = {o : o = PERCEPT(s) og s ∈ b̂}.
3. *Update*: b_o = UPDATE(b̂, o) = {s : o = PERCEPT(s) og s ∈ b̂}.

Hver mulig percept gir sin egen belief state, og du vet ikke på forhånd hvilken du får. Det er derfor en AND-node. Update kan bare fjerne tilstander (b_o ⊆ b̂). Det er prediction som kan vokse.

**AND-OR-søk over belief states (4.4.3).** Samme AND-OR-SEARCH, med belief states som noder. Planen tester belief state, ikke den sanne tilstanden: `[Suck, Right, if Bstate = {6} then Suck else []]`.

**State estimation (4.4.4).** Mens planen kjøres, oppdaterer agenten b ← UPDATE(PREDICT(b, a), o). Dette heter *monitoring*, *filtering* eller *state estimation*. Bokas eksempel er en robot med fire sonarer i en labyrint (Fig. 4.18, *localization*). Percepten er fire biter i rekkefølgen N, Ø, S, V, der 1 betyr vegg. 1011 passer i fire ruter. Right flytter roboten til en tilfeldig nabo, og etter 1010 er bare én rute igjen. (Kun bok, ikke forelest.)

**Online search (4.5.1).** *Offline* søk lager hele planen før første steg. En *online* agent veksler mellom å handle, observere og tenke. Den kjenner bare ACTIONS(s), kostnaden c(s, a, s′) (når s′ er kjent) og IS-GOAL(s). Hva en handling gjør, vet den først etter at den har prøvd. *Competitive ratio* = faktisk kostnad / beste kostnad med kjent kart. (Kun bok.)

**Dead ends og safely explorable (4.5.1).** En *dead end* er en tilstand der ingen mål kan nås, typisk etter *irreversible actions* (trapper, et stup). *Adversary argument* (Fig. 4.20): to rom ser like ut etter S og A, men har blindveien på hver sin side. En motstander kan bygge rommet mens du leter, så ingen algoritme unngår blindveier i alle rom. Competitive ratio kan da bli uendelig. Derfor antar vi at rommet er *safely explorable*: fra hver nåbar tilstand kan et mål nås. (Kun bok.)

**ONLINE-DFS-AGENT (4.5.2, Fig. 4.21).** Dybde først passer online, fordi neste node alltid er nabo til den forrige. Agenten lagrer `result[s, a]`, `untried[s]` (handlinger ikke prøvd) og `unbacktracked[s]` (hvor den kom fra). Er alt prøvd, går den fysisk tilbake. Krever reversible handlinger. (Kun bok.)

**Random walk (4.5.3).** Velg en tilfeldig handling, helst en lite prøvd. I et endelig, safely explorable rom når den målet til slutt, men i rom der det er lettere å gå bakover enn fremover, kan det ta eksponentielt mange steg (Fig. 4.22). Hill climbing er allerede online, men blir stående på en topp og kan ikke hoppe til en tilfeldig ny start. (Kun bok.)

**LRTA\* (4.5.3–4.5.4, Fig. 4.23–4.24).** *Learning real-time A\**: gi hill climbing hukommelse. Agenten lagrer et estimat H(s), som starter lik heuristikken h(s). Før den går, oppdaterer den H for staten den forlater:

H(s) ← min over b av [c(s, b, s′) + H(s′)]

og går dit summen er minst. En uprøvd handling antas å føre rett til mål med kostnad h(s) (*optimism under uncertainty*), som lokker agenten til å utforske. I et endelig, safely explorable rom finner LRTA\* alltid målet, og H blir en bedre heuristikk underveis (kobling til E03). L3 viste bare figuren.

## Algoritmer og håndsporing

**AND-OR-SEARCH (Fig. 4.11), kortform:**

```
function AND-OR-SEARCH(problem) returns plan eller failure
    return OR-SEARCH(problem, problem.INITIAL, [])

function OR-SEARCH(problem, state, path)
    if IS-GOAL(state) then return []
    if IS-CYCLE(path) then return failure       # state står allerede på path
    for each action in ACTIONS(state) do
        plan ← AND-SEARCH(problem, RESULTS(state, action), [state] + path)
        if plan ≠ failure then return [action] + plan
    return failure

function AND-SEARCH(problem, states, path)
    for each sᵢ in states do
        planᵢ ← OR-SEARCH(problem, sᵢ, path)
        if planᵢ = failure then return failure
    return [if s₁ then plan₁ else if s₂ then plan₂ else … planₙ]
```

**Erratic Suck, alle RESULTS:**

| s | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| RESULTS(s, Suck) | {5, 7} | {4, 8} | {7} | {2, 4} | {1, 5} | {8} | {3, 7} | {6, 8} |

Right og Left er deterministiske i erratic-verdenen.

**AND-OR-SEARCH fra 1 (Fig. 4.10), handlingsrekkefølge Suck, Right, Left:**

| Steg | Hva skjer |
|---|---|
| OR(1) | prøver Suck → AND {5, 7} |
| OR(5), sti [1] | prøver Suck → AND {1, 5} |
| OR(1), sti [5, 1] | 1 står på stien → failure, så Suck fra 5 feiler |
| OR(5) | prøver Right → AND {6} |
| OR(6), sti [5, 1] | prøver Suck → AND {8} |
| OR(8) | mål → [] |
| OR(7) | mål → [] |

Plan: `[Suck, if State = 5 then [Right, Suck] else []]`. Right-grenen fra roten blir aldri utforsket.

**Sensorless, deterministisk støvsuger:**

| Handling | Belief state |
|---|---|
| start | {1, 2, 3, 4, 5, 6, 7, 8} |
| Right | {2, 4, 6, 8} |
| Suck | {4, 8} |
| Left | {3, 7} |
| Suck | {7} |

Med erratic Suck vokser mengden: PREDICT({5, 7}, Suck) = {1, 5} ∪ {3, 7} = {1, 3, 5, 7}.

**Local sensing (Fig. 4.15 og 4.16):**
- Deterministisk Right fra {1, 3} (percept [L, Dirty]): prediction {2, 4}, percepts [R, Dirty] og [R, Clean], update {2} og {4}.
- Slippery Right fra {1, 3}: prediction {1, 2, 3, 4}, percepts [L, Dirty], [R, Dirty], [R, Clean], update {1, 3}, {2} og {4}.
- Plan fra {1, 3} (deterministisk): Suck gir {5, 7} med percept [L, Clean]. Right gir {6, 8}, som percepten deler i {6} og {8}. Plan: `[Suck, Right, if Bstate = {6} then Suck else []]`.

**Lokalisering (Fig. 4.18, rad 0 øverst, kolonne 0 til venstre, 42 frie ruter):**
- UPDATE(b, 1011) = {(0, 0), (0, 11), (3, 0), (3, 7)}. Alle fire har bare øst åpent.
- PREDICT(…, Right) = {(0, 1), (0, 12), (3, 1), (3, 8)}. Right går til en tilfeldig nabo, men her finnes bare én nabo hver.
- UPDATE(…, 1010) = {(0, 1)}. De tre andre har åpent i sør eller nord.

**ONLINE-DFS-AGENT på Fig. 4.19** (3×3, S = (1, 1), G = (3, 3), koordinater (x, y)). Rekkefølgen opp, høyre, ned, venstre er valgt her. Boka oppgir ingen rekkefølge.

Vei: (1,1) → (1,2) → (1,1) → (2,1) → (2,2) → (2,3) → (2,2) → (2,1) → (3,1) → (3,2) → (3,3). Det er 10 steg mot 4 på beste vei: competitive ratio 10 / 4 = 2,5. Fra (2,3) prøver agenten Down, som er en uprøvd handling, selv om den fører tilbake til (2,2). Agenten vet ikke hvor Down fører før den har prøvd.

**Random walk, ILLUSTRASJON** (forenklet kjede, ikke Fig. 4.22): n + 1 tilstander på rad, altså n overganger fra start til mål. Fra start går agenten alltid fremover, ellers med sannsynlighet 1/3 fremover og 2/3 bakover. Forventet antall steg til første målbesøk: 4(2^n − 1) − 3n. n = 5 overganger gir 109, n = 10 (11 tilstander) gir 4062, n = 20 (21 tilstander) gir 4 194 240.

**LRTA\* på Fig. 4.23** (seks tilstander på rad, alle kanter koster 1, start i tredje tilstand). Tallene er H. Agenten står i den markerte.

| Bilde | H | Agent i | Valg (venstre, høyre) | Oppdatering |
|---|---|---|---|---|
| (a) | 8 9 **2** 2 4 3 | 3. | 1 + 9 = 10, 1 + 2 = 3 | H(3.) ← min(10, 3) = 3, går høyre |
| (b) | 8 9 3 **2** 4 3 | 4. | 1 + 3 = 4, 1 + 4 = 5 | H(4.) ← min(4, 5) = 4, går venstre |
| (c) | 8 9 **3** 4 4 3 | 3. | 1 + 9 = 10, 1 + 4 = 5 | H(3.) ← 5, går høyre |
| (d) | 8 9 5 **4** 4 3 | 4. | 1 + 5 = 6, 1 + 4 = 5 | H(4.) ← 5, går høyre |
| (e) | 8 9 5 5 **4** 3 | 5. | 1 + 5 = 6, 1 + 3 = 4 | H(5.) ← min(6, 4) = 4, går høyre |

Agenten kommer seg ut av «dalen» ved at H i dalen løftes til den ikke lenger er billigst. Siste rad er quizen i videoen. Fig. 4.23 viser H for naboene, og sporingen bruker dem. Etter pseudokoden teller en handling som ikke er prøvd, som h(s) (optimisme). Da kan valgene i (a) bli annerledes, så følg figuren når oppgaven gir den.

```
function LRTA*-AGENT(s′) returns en handling
    if IS-GOAL(s′) then return stop
    if s′ er ny then H[s′] ← h(s′)
    if s ≠ null then
        result[s, a] ← s′
        H[s] ← min over b i ACTIONS(s) av LRTA*-COST(s, b, result[s, b], H)
    a ← handlingen b i ACTIONS(s′) som minimerer LRTA*-COST(s′, b, result[s′, b], H)
    s ← s′;  return a

function LRTA*-COST(s, a, s′, H)
    if s′ er ukjent then return h(s)
    else return c(s, a, s′) + H[s′]
```

**Eksamen 2023, oppgave 7** (figur 4: 4 × 12, r0 nederst, c0 til venstre, robot i (r2, c3); samme labyrint som de 12 første kolonnene i Fig. 4.18).
1. P1 = {N, S, W, ¬E}: bare update. S1 = {(r0, c0), (r3, c0), (r0, c7)}.
2. Right: predict flytter alle ett steg øst til {(r0, c1), (r3, c1), (r0, c8)}. P2 = {N, S, ¬W, ¬E}: (r0, c1) og (r0, c8) har åpent i nord. S2 = {(r3, c1)}.
3. Right går mot vest. Fasiten har to tolkninger:
   - 1a, start i S1: alle tre har vegg i vest, roboten blir stående (fasiten antar det), og S = S1.
   - 1b, start i ruta i figuren (r2, c3): roboten havner i (r2, c2), percepten blir {¬N, ¬S, W, ¬E}, og S = {(r1, c8), (r2, c2)}.

## Eksamensfeller

- **«Adversive plans».** Eksamen 2024 Q2: AND-OR-søk gir *contingency plans* (conditional plans), ikke «adversive plans». Det var det gale utsagnet.
- **OR og AND forveksles.** OR = agentens valg (én handling holder). AND = miljøets utfall eller percepter (alle må løses). L3 s. 102 omtaler handlingene som OR-nodene. I boka er tilstandene OR-noder og utfallene AND-noder. Bruk bokas variant og si hva du mener.
- **Failure ved løkke = uløselig.** Feil. Failure på en sykel betyr bare at denne grenen ikke trengs.
- **Sensorless-svaret skrevet som betinget plan.** Uten percepter kan du ikke velge. Svaret er en sekvens.
- **Update gjør mengden større.** Nei, update fjerner bare. Prediction kan vokse med ikke-deterministiske handlinger.
- **Glemmer predict i 2023 7.2.** Flytt alle kandidatene først, og fjern så dem som ikke passer P2. Bare update på hele labyrinten gir for mange svar.
- **Uklar oppgave uten antakelse.** I 2023 7.3 godtok fasiten begge tolkningene. Skriv hvilken du bruker, og hva som skjer når roboten går i en vegg.
- **LRTA\*: oppdaterer feil tilstand.** H oppdateres for staten agenten *forlater*, med minimum over alle handlinger, før den går. Den går dit c + H er minst.
- **Online-agenten kjenner RESULT.** Nei, den lærer `result[s, a]` først etter å ha prøvd.
- **Bytter rad og kolonne.** Eksamensfiguren har r0 nederst. Bokas Fig. 4.18 nummereres ofte ovenfra. Les aksene.

## Koblinger til andre kapitler

- **E02 (kap. 3):** AND-OR-SEARCH er rekursiv dybde først-søk med syklussjekk på stien. Sensorless-problemet kan løses med vanlige søkealgoritmer i belief-state-rommet.
- **E03 (kap. 3):** LRTA\* starter med en heuristikk h og lærer en bedre H. Optimism under uncertainty ligner admissible heuristikker.
- **E04 (kap. 4.1–4.2):** hill climbing er et online søk uten hukommelse. LRTA\* og random walk er svarene på at den setter seg fast.
- **E09 (kap. 6):** Kriegspiel er sjakk med belief states over brettet.
- **E11 (kap. 7):** en belief state er en mengde mulige verdener, slik modellene til en logisk setning er det. Wumpus-agenten gjør state estimation.
- **E19 (kap. 11):** sensorless (conformant), contingent og online planning bruker de samme ideene med planleggingsspråk (eksamen 2025 oppg. 11b).

## Ikke pensum her

Ingen delkapitler i 4.3–4.5 er merket utenfor pensum (UT). Følgende står bare i boka og ble ikke forelest i L3. Videoen sier det når de dukker opp:
- 4.4.4 State estimation med robotlokalisering (Fig. 4.18).
- 4.5.1 Competitive ratio, dead ends, adversary argument og safely explorable.
- 4.5.2 ONLINE-DFS-AGENT (Fig. 4.19–4.21).
- 4.5.3 Random walk (Fig. 4.22).
- 4.5.4 LRTA\* er bare vist som figur i L3 (s. 117). Pseudokoden (Fig. 4.24) står bare i boka.
- AO\* og bokas utdypning av incremental belief-state search er bare nevnt.

## Øv selv

1. **Eksamen 2023, oppgave 7 (5 p).** Løs alle tre deler med labyrinten i figur 4. Skriv belief state i formatet S = {(r, c), …}, og skriv antakelsen din i del 3.
2. **Eksamen 2024, Q2 (flervalg, poeng ikke oppgitt i fasiten).** Hvilket utsagn er galt: «In nondeterministic environments agent can apply AND-OR search to generate adversive plans»? Begrunn med riktig fagbegrep.
3. **Eksamen 2023, kortspørsmål i oppgave 1 (poeng ikke oppgitt).** Hvordan må en agent i et partially observable miljø skille seg fra en simple reflex agent?
4. **Eksamen 2025, oppgave 11b (3 p).** Beskriv classical planning og sensorless planning kort, og forklar de viktigste forskjellene.
5. **Egen oppgave.** Bruk erratic Suck. Start i belief state {1, 3}, sensorless. Hva er PREDICT etter Suck, og hva etter Suck, Right?
6. **Egen oppgave.** Slippery vacuum world (Right og Left kan glippe, Suck er deterministisk). Hvorfor finner AND-OR-SEARCH ingen plan fra 1? Skriv en cyclic plan.

## Fasit

**Quizene i videoen:**
- Q1: RESULTS(2, Suck) = {4, 8}. Høyre rute renses, og noen ganger venstre også.
- Q2: contingency plans. «Adversive plans» var det gale utsagnet i 2024 Q2.
- Q3: {5, 7}. Left gir {1, 3, 5, 7}, og Suck gjør 1 til 5 og 3 til 7.
- Q4: nei. Update fjerner bare tilstander. Prediction er det som kan vokse.
- Q5: høyre, siden 1 + 3 = 4 < 1 + 5 = 6. H der den var blir min(6, 4) = 4, som før.

**Øv selv:**
1. S1 = {(r0, c0), (r3, c0), (r0, c7)}. S2 = {(r3, c1)}. Del 3: med start i S1 blir roboten stående, og S = S1. Med start i (r2, c3) blir S = {(r1, c8), (r2, c2)}. Se håndsporingen over.
2. Utsagnet er galt fordi AND-OR-søk i ikke-deterministiske miljøer gir *contingency plans* (conditional plans). Fasiten godtok også utsagnet om støvsugeren som ikke suger skikkelig, fordi noen leste «vår» støvsuger som agenten i Q1.
3. Den trenger hukommelse, og overgangsfunksjonen må virke på belief states, ikke enkelttilstander (fasiten 2023).
4. Classical planning: fullt observerbar, deterministisk, statisk verden, søk i tilstandsrommet. Sensorless (conformant) planning: ingen observasjoner under utførelsen, så planen søkes i belief-rommet og må virke fra alle mulige starttilstander (fasiten 2025).
5. Suck: RESULTS(1, Suck) ∪ RESULTS(3, Suck) = {5, 7} ∪ {7} = {5, 7}. Right: {6, 8}.
6. Suck fra 1 gir 5. RESULTS(5, Right) = {5, 6}, og 5 står allerede på stien, så AND-noden feiler. Left fra 5 gir bare 5 igjen, og Right fra 1 gir {1, 2} med 1 på stien. Alle grener feiler. Cyclic plan: `[Suck, L1: Right, if State = 5 then L1 else Suck]`, eller `[Suck, while State = 5 do Right, Suck]`.
