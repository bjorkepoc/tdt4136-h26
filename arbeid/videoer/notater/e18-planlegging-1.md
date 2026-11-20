# E18 – Planlegging 1: PDDL, forward og backward search

> Pensum: Global 11.1–11.3 (US samme nummer), uten 11.1.2, 11.1.3, 11.2.3, 11.2.4, 11.3.1, 11.3.2 · Forelesning: L11 · Øving: – · Eksamensvekt: ~5 %
> Video: `videoer/e18-planlegging-1/out/tdt4136-e18-planlegging-1.mp4` (13:13)

## Kapitler i videoen

- 0:00 – Intro
- 0:39 – Fra svart boks til fakta
- 2:07 – Handlinger og RESULT
- 3:42 – Air cargo steg for steg
- 4:58 – Søk forover
- 5:45 – Søk bakover
- 7:45 – Heuristikker
- 10:06 – Eksamen 2023 oppg. 8
- 12:00 – Koblinger og oppsummering

## Kjerneideer

**Hvorfor klassisk planlegging?** I kap. 3 var en tilstand *atomic*: søket kjente bare navnet s₁₇, og du måtte lage h selv for hvert problem. Planlegging bruker en *factored representation*: en tilstand er et sett med fakta. Da ser planleggeren selv hvilke mållitteraler som mangler, og kan lage en domeneuavhengig heuristikk. Klassisk planlegging antar at miljøet er **discrete** (ett steg om gangen), **deterministic** (ett kjent utfall), **static** (bare agenten endrer verden) og **fully observable**. Ryker en av antagelsene, er du i kap. 11.5 (E19).

**Tilstand i PDDL.** En tilstand er en konjunksjon av *fluents*, fakta som kan endre seg. Hvert fluent er *ground* og *atomic*: ett predikat med bare konstanter som argumenter, for eksempel `At(P1, SFO)`. To regler følger av dette:

- *Closed world assumption* (database semantics, E14): alt som ikke står i tilstanden, er usant. Derfor trengs aldri negasjon i en tilstand.
- *Unique names assumption*: P1 og P2 er to ulike fly.

I en tilstand er derfor **variabler, negasjon og funksjoner forbudt**: `At(x, y)`, `¬Poor` og `At(Spouse(Ali), Sydney)` er ikke tilstander.

**Mål.** Et mål er som en precondition: en konjunksjon av literaler der *variabler og negative literaler er lov*. En tilstand s oppfyller målet når hvert positivt literal står i s og ingen av de negerte gjør det.

**Action schema.** En handling skrives som et skjema med navn og parameterliste, `PRECOND` (hva som må være sant før) og `EFFECT` (hva som endrer seg). Setter du inn konstanter for alle variablene, får du en *ground action*. Krav: hver variabel i EFFECT må også stå i PRECOND og i parameterlista. PDDL har verken ∀ eller ∨, bare konjunksjoner av literaler.

**Applicable.** En ground action a er applicable i s når alle positive literaler i PRECOND(a) står i s og ingen negerte gjør det.

**RESULT.** EFFECT deles i *delete list* DEL(a) (de negative literalene) og *add list* ADD(a) (de positive):

  RESULT(s, a) = (s − DEL(a)) ∪ ADD(a)

Alt annet i s blir stående. Derfor skriver en handling aldri «ikke» inn i tilstanden: den sletter.

**Air cargo (Fig. 11.1).** Last i et fly står *ikke* på noen flyplass: `Load` sletter `At(c, a)` og legger til `In(c, p)`. PDDL har ingen regel om at lasten følger flyet, så `At` betyr «klar til bruk her».

| Skjema | PRECOND | EFFECT |
|---|---|---|
| Load(c, p, a) | At(c, a) ∧ At(p, a) ∧ Cargo(c) ∧ Plane(p) ∧ Airport(a) | ¬At(c, a) ∧ In(c, p) |
| Unload(c, p, a) | In(c, p) ∧ At(p, a) ∧ Cargo(c) ∧ Plane(p) ∧ Airport(a) | At(c, a) ∧ ¬In(c, p) |
| Fly(p, from, to) | At(p, from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to) | ¬At(p, from) ∧ At(p, to) |

Init: At(C1, SFO) ∧ At(C2, JFK) ∧ At(P1, SFO) ∧ At(P2, JFK) ∧ Cargo(C1) ∧ Cargo(C2) ∧ Plane(P1) ∧ Plane(P2) ∧ Airport(JFK) ∧ Airport(SFO). Goal: At(C1, JFK) ∧ At(C2, SFO).

**Forward search (progression, 11.2.1)** starter i initialtilstanden, ser på alle *applicable* ground actions og bruker RESULT. Tilstandene er ground. Alt fra kap. 3 virker (BFS, greedy, A*), men forgreningen er enorm.

**Backward search (regression, 11.2.2)** starter i målet og ser bare på *relevante* handlinger. En handling er relevant for g når

1. en effekt gir en del av målet (unifiserer med et mållitteral), og
2. ingen effekt opphever en annen del av målet: a sletter ikke et positivt mållitteral og legger ikke til et negativt. Eldre utgaver og noen fasiter kaller dette kravet *consistent*.

Forelesningens eksempel (L11 s. 17): mål ¬Poor ∧ Famous. Effekten `Famous` er relevant. Effekten `Poor ∧ Famous` er ikke relevant: var den siste steg, ville Poor vært sant til slutt.

Regresjonen gir målet g′ som må ha holdt før a:

  POS(g′) = (POS(g) − ADD(a)) ∪ POS(PRECOND(a))
  NEG(g′) = (NEG(g) − DEL(a)) ∪ NEG(PRECOND(a))

Det a gir, trenger ikke være sant før, så du trekker ADD fra de positive målene og DEL fra de negative. Preconditions må ha holdt, så du legger dem til. Kortformen g′ = (g − ADD(a)) ∪ PRECOND(a) gjelder bare når målet og preconditions er positive. Bakover kan målet få variabler: regresjon av At(C2, SFO) over Unload gir et fly p′ som ikke er bundet. Navnet p′ er *standardizing apart* (E15). Bakover blir forgreningen ofte lav, men det er vanskeligere å lage gode heuristikker for mål med variabler. Derfor søker de fleste planleggere forover (L11 s. 19).

**Heuristikker (11.3).** Fra E03: en *relaxed problem* fjerner regler, så grafen får flere kanter. Alt som var lov, er fortsatt lov, så den optimale løsningen kan bare bli kortere. Eksakt optimal kost i det relakserte problemet er derfor **admissible**. I PDDL kan planleggeren fjerne regler rett i skjemaet:

- **Ignore preconditions:** hver handling kan brukes i hver tilstand. Da nås hvert mållitteral med ett steg, og tallet på manglende mål er et anslag. Det er bare nesten riktig: én handling kan gi to mål, og da teller du for høyt, og én handling kan oppheve en annens effekt. Boka tar hensyn til det første og ser bort fra det andre: fjern også alle effekter unntatt mållitteralene, og tell minste antall handlinger som til sammen dekker målet. Det er *set cover* (kun bok, ikke forelest): NP-hard. Greedy (største først) kommer innenfor en faktor log n av optimum, men mister admissibility.
- **Ignore delete lists:** anta at mål og preconditions bare har positive literaler (L11 s. 23), og fjern alle negative effekter. Ingen handling kan da ødelegge fremgang, og flyet står etter Fly på begge flyplassene. Optimal lengde er fortsatt NP-hard, men hill climbing finner en god relaksert plan i polynomisk tid. Landskapet har ingen lokale minima og ingen blindveier (Fig. 11.6, L11 s. 24). Bare den *optimale* relakserte planen gir admissible h; en tilnærming kan bli for lang.
- Kun bok (11.3): fjerner du `Blank(s2)` fra Slide i 8-puzzle, får du Manhattan-distansen.

Dominance (E03): ligger en consistent h₂ minst like høyt som h₁ i *alle* tilstander, ekspanderer A* med h₂ ikke flere noder enn med h₁, bortsett fra tie-break ved f = C*. Ett tall i starttilstanden avgjør ikke dette.

## Algoritmer og håndsporing

**Kortform**

```
RESULT(s, a)   = (s − DEL(a)) ∪ ADD(a)          krever: a applicable i s
FORWARD(s0, g): søk fra s0; barn = RESULT(s, a) for alle applicable a; stopp når s ⊨ g
RELEVANT(g, a): ADD(a) ∩ POS(g) ≠ ∅ (eller DEL(a) ∩ NEG(g) ≠ ∅)
                og DEL(a) ∩ POS(g) = ∅ og ADD(a) ∩ NEG(g) = ∅
REGRESS(g, a): POS(g′) = (POS(g) − ADD(a)) ∪ POS(PRECOND(a))
               NEG(g′) = (NEG(g) − DEL(a)) ∪ NEG(PRECOND(a))   (kortform (g − ADD(a)) ∪ PRECOND(a) bare for positive mål)
BACKWARD(g, s0): søk fra g; barn = REGRESS(g, a) for relevante a; stopp når g ⊆ s0
```

| | forover | bakover |
|---|---|---|
| ser på | applicable actions | relevant actions |
| tilstander | ground | kan ha variabler |
| forgrening | høy | ofte lav |
| gode heuristikker | lettere | vanskeligere |

**Air cargo, planen steg for steg** (bare de dynamiske fluents; Cargo, Plane og Airport endres aldri)

| steg | handling | DEL | ADD | s etterpå |
|---|---|---|---|---|
| 0 | – | – | – | At(C1, SFO), At(C2, JFK), At(P1, SFO), At(P2, JFK) |
| 1 | Load(C1, P1, SFO) | At(C1, SFO) | In(C1, P1) | In(C1, P1), At(C2, JFK), At(P1, SFO), At(P2, JFK) |
| 2 | Fly(P1, SFO, JFK) | At(P1, SFO) | At(P1, JFK) | In(C1, P1), At(C2, JFK), At(P1, JFK), At(P2, JFK) |
| 3 | Unload(C1, P1, JFK) | In(C1, P1) | At(C1, JFK) | At(C1, JFK), At(C2, JFK), At(P1, JFK), At(P2, JFK) |
| 4 | Load(C2, P2, JFK) | At(C2, JFK) | In(C2, P2) | At(C1, JFK), In(C2, P2), At(P1, JFK), At(P2, JFK) |
| 5 | Fly(P2, JFK, SFO) | At(P2, JFK) | At(P2, SFO) | At(C1, JFK), In(C2, P2), At(P1, JFK), At(P2, SFO) |
| 6 | Unload(C2, P2, SFO) | In(C2, P2) | At(C2, SFO) | At(C1, JFK), At(C2, SFO), At(P1, JFK), At(P2, SFO) |

Begge mållitteralene holder etter steg 6; flyene kan stå hvor som helst. Korteste plan har 6 steg (sjekket med BFS i `verifiser.py`). Etter steg 3 er også Load(C2, P1, JFK) applicable, så P1 kan ta C2 med tilbake: Load(C2, P1, JFK), Fly(P1, JFK, SFO), Unload(C2, P1, SFO), også 6 steg.

**Forward search, størrelse (11.2.1, L11 s. 16)**: 10 flyplasser med 5 fly og 20 laster på hver.

| størrelse | verdi | hvorfor |
|---|---|---|
| handlinger, minst | 450 | bare Fly: 50 fly × 9 andre flyplasser |
| handlinger, mest | 10 450 | alt på én flyplass: + 200 laster × 50 fly å laste i |
| snitt (bokas anslag) | ≈ 2 000 | |
| planlengde | 41 | 20 Load + 1 Fly + 20 Unload (bokas tall) |
| noder i treet | 2000⁴¹ ≈ 2 × 10¹³⁵ | et tall med 136 sifre |

**Regresjon, Fig. 11.5b (L11 s. 18)**: g = At(P1, B) ∧ At(P2, B), a = Fly(P1, A, B).

| | |
|---|---|
| ADD(a) ∩ g | {At(P1, B)}: gir en del av målet |
| DEL(a) ∩ g | ∅: sletter ingenting i målet → relevant |
| g − ADD(a) | At(P2, B) |
| ∪ PRECOND(a) | At(P1, A) ∧ Plane(P1) ∧ Airport(A) ∧ Airport(B) |
| g′ | At(P2, B) ∧ At(P1, A) ∧ Plane(P1) ∧ Airport(A) ∧ Airport(B) |

**Regresjon med variabel**: g = At(C2, SFO), a = Unload(C2, p′, SFO) gir g′ = In(C2, p′) ∧ At(p′, SFO) ∧ Cargo(C2) ∧ Plane(p′) ∧ Airport(SFO).

**Heuristikkene på air cargo fra starttilstanden**

| heuristikk | h | merknad |
|---|---|---|
| ignore preconditions (tell manglende mål) | 2 | At(C1, JFK) og At(C2, SFO) mangler |
| ignore delete lists, optimal | 5 | Load(C1, P1, SFO), Fly(P1, SFO, JFK), Unload(C1, P1, JFK), Load(C2, P1, JFK), Unload(C2, P1, SFO) |
| ekte kost h* | 6 | |

Den relakserte planen virker bare fordi At(P1, SFO) aldri ble slettet; i det ekte problemet feiler Unload(C2, P1, SFO). Begge h ≤ h*, og ignore delete lists ligger nærmest.

**Set cover (ILLUSTRASJON, tall laget for eksempelet)**: mål g1–g6; a1 gir {g1, g2, g4, g5}, a2 gir {g1, g2, g3}, a3 gir {g4, g5, g6}. Optimalt: a2 + a3 = 2. Greedy tar største først: a1, og trenger så a2 og a3 = 3 > 2. Greedy er ikke admissible.

**Eksamen 2023 oppg. 8, regresjon steg for steg** (skjemaene står under Fasit)

| | handling (siste først) | ADD | g før handlingen |
|---|---|---|---|
| g₀ | – | – | At(User, Home) ∧ Owns(User, Toy) |
| g₁ | DriveCar(ToyStore, Home, Car) | At(User, Home), At(Car, Home) | Owns(User, Toy) ∧ Owns(User, Car) ∧ At(User, ToyStore) ∧ At(Car, ToyStore) ∧ Place(Home) |
| g₂ | Buy(Toy, ToyStore) | Owns(User, Toy) | Owns(User, Car) ∧ At(User, ToyStore) ∧ At(Car, ToyStore) ∧ Place(Home) ∧ At(Toy, ToyStore) |
| g₃ | DriveCar(Home, ToyStore, Car) | At(User, ToyStore), At(Car, ToyStore) | Owns(User, Car) ∧ Place(Home) ∧ At(Toy, ToyStore) ∧ At(User, Home) ∧ At(Car, Home) ∧ Place(ToyStore) |

g₃ ⊆ Init, så søket stopper. Planen er rekkefølgen snudd: DriveCar(Home, ToyStore, Car), Buy(Toy, ToyStore), DriveCar(ToyStore, Home, Car). TakeBus(ToyStore, Home) er også relevant i første steg (gir At(User, Home)) og gir en annen gren.

## Eksamensfeller

- **Negasjon i tilstanden.** «P1 er i JFK og ikke i SFO» skrives `At(P1, JFK)`. Closed world gjør resten.
- **Glemt delete list.** Uten `¬At(p, from)` står flyet to steder etter Fly.
- **Effektvariabel som ikke står i PRECOND.** Hver variabel i EFFECT må stå i PRECOND og i parameterlista. Fasiten til 2023 oppg. 8 bryter regelen selv: `TakeBus(from, to)` bruker `user`, som ikke er parameter, og `to` står bare i EFFECT. Bruk konstanten `User` og legg til `Place(to)` i PRECOND. Det samme gjelder `Go(from, to)` i fasiten til 2022 oppg. 7.
- **∀ og ∨.** PDDL har bare konjunksjoner av literaler.
- **Mål og tilstand blandes.** I et mål er variabler og negasjon lov; i en tilstand er de forbudt.
- **Regresjon:** glem ikke å trekke fra ADD, behold resten av målet, og legg til PRECOND, ikke EFFECT.
- **Relevant, men sletter et mållitteral** (`Poor ∧ Famous` for målet ¬Poor ∧ Famous): ikke relevant.
- **Last i fly står ikke på flyplassen.** In(c, p) erstatter At(c, a).
- **«Ignore delete lists er admissible»** gjelder bare den *optimale* relakserte planen. Hill climbing gir en tilnærming som kan bli for lang.
- **Å telle manglende mål** kan bli for høyt når én handling gir flere mål. Set cover over mållitteralene retter det, men ser bort fra at handlinger kan oppheve hverandre. Greedy set cover er ikke admissible.
- **Fasiten vil ha tilstanden før og etter hvert steg** når oppgaven ber om det (2022 oppg. 7.2, 2023 oppg. 8). Skriv kjeden g₀, g₁, … som tabellen over.
- 2024 Q18 (flervalg om planlegging): bare fasiten finnes i kildene, ikke spørsmålsteksten. Den nevner `Move(Disk1, TowerA, TowerC)` og setningen «We cannot have negated literals nor instantiations in PDDL». Uten spørsmålet er det uklart hva fasiten mener, så ikke lær setningen som regel: negative literaler er lov i mål, PRECOND og EFFECT, bare ikke i en tilstand, og en ground action er nettopp et instansiert skjema.

## Koblinger til andre kapitler

- → kap. 2 / E01: factored representation og miljøtypene bak de fire antagelsene.
- → kap. 3 / E02, E03: forward search er vanlig tilstandsromsøk; relaxed problems gir admissible h; dominance avgjør hvilken h som er best.
- → kap. 8 / E14: fluents ligner førsteordens atomer, men med closed world og unique names (database semantics).
- → kap. 9 / E15: unification finner applicable og relevante handlinger; p′ er standardizing apart.
- → kap. 4 / E05 → E19: belief states. Sensorless planning bruker samme RESULT på mengder: b′ = (b − DEL) ∪ ADD. E19 tar HLA, hierarkisk, sensorless, contingent og online planning.

## Ikke pensum her

- 11.1.2 spare tire: Canvas-eksklusjon, L11 s. 45.
- 11.1.3 blocks world: Canvas-eksklusjon, L11 s. 45.
- 11.2.3 SATPlan (planning as Boolean satisfiability): Canvas, L11 s. 14 («not in the exam»).
- 11.2.4 GraphPlan og partial-order planning: Canvas, L11 s. 45, Canvas-FAQ («GraphPlan … no longer in the current syllabus»).
- 11.3.1 domain-independent pruning: Canvas, L11 s. 45.
- 11.3.2 state abstraction: Canvas, L11 s. 21 («not in the exam»).
- Kun bok, ikke forelest, men pensum: set cover og greedy-tilnærmingen, Manhattan fra Slide-skjemaet (begge i 11.3).

## Øv selv

1. Eksamen 2023 oppg. 8 (5 p): En bruker er hjemme, eier en bil og vil ha en leke fra lekebutikken. Handlinger: ta buss, kjøre egen bil, kjøpe. a) Skriv Init, Goal og action schemas i PDDL (2 %). b) Løs med backward search: vis tre steg og tilstanden før og etter hvert steg (3 %).
2. Eksamen 2022 oppg. 7.1–7.2: Ape og bananer. Apen er i A, bananene i B (høyt), kassen i C. Handlinger: Go, Push, ClimbUp, ClimbDown, Grasp, Ungrasp. a) Skriv problemet i PDDL. b) Løs med regresjon fra Have(Monkey, Bananas) og vis planen og målet etter hvert steg.
3. Eksamen 2022 oppg. 1.8: Hvorfor er ignore-delete-lists-heuristikken admissible?
4. Eksamen 2021 oppg. 4b (bare første kulepunkt, resten er POP og ute): Du skal ta på to ringer og så to hansker. Skriv action schemas for RightRing, LeftRing, RightGlove og LeftGlove i PDDL.
5. Eksamen 2025 oppg. 11b, klassisk del (resten er E19): Hvilke antagelser gjør klassisk planlegging om miljøet?
6. Air cargo: g = At(P1, JFK) ∧ At(P2, SFO). Er Fly(P1, SFO, JFK) relevant? Er Fly(P2, SFO, JFK) relevant? Regresser over den som er relevant.

## Fasit

**Quizene i videoen**

- Kap. 2 (gyldig PDDL): **C**. Det er et mål, og i et mål er variabler og negasjon lov. A har en variabel, B en negasjon og D en funksjon, og alle tre står som tilstander.
- Kap. 3 (Load(C2, P1, JFK) etter steg 3): **A, ja**. C2 og P1 står begge i JFK, og typene stemmer.
- Kap. 5 (regresjon over Unload(C1, P1, JFK)): **B**, At(C2, SFO) ∧ In(C1, P1) ∧ At(P1, JFK) ∧ Cargo(C1) ∧ Plane(P1) ∧ Airport(JFK). A glemmer å trekke fra ADD, C mister At(C2, SFO), D bruker effekten i stedet for PRECOND.
- Kap. 6 (hvorfor ignore delete lists er admissible): **B**. Med positive mål og preconditions virker hver ekte plan også uten slettinger, så den beste relakserte planen er aldri lengre enn den beste ekte.

**1. Eksamen 2023 oppg. 8**

```
Init(At(User, Home) ∧ Owns(User, Car) ∧ At(Car, Home) ∧ At(Toy, ToyStore) ∧ Place(Home) ∧ Place(ToyStore))
Goal(At(User, Home) ∧ Owns(User, Toy))
Action(TakeBus(from, to),
  PRECOND: At(User, from) ∧ Place(to)
  EFFECT:  ¬At(User, from) ∧ At(User, to))
Action(DriveCar(from, to, car),
  PRECOND: Owns(User, car) ∧ At(User, from) ∧ At(car, from) ∧ Place(to)
  EFFECT:  ¬At(User, from) ∧ ¬At(car, from) ∧ At(User, to) ∧ At(car, to))
Action(Buy(gift, store),
  PRECOND: At(User, store) ∧ At(gift, store)
  EFFECT:  Owns(User, gift))
```

Fasiten tar også med At(Car, Home) i målet; det gir de samme tre stegene. Regresjonen står i tabellen under «Algoritmer og håndsporing». Plan: DriveCar(Home, ToyStore, Car), Buy(Toy, ToyStore), DriveCar(ToyStore, Home, Car).

**2. Eksamen 2022 oppg. 7, ape og bananer** (skjemaene er sjekket i `verifiser.py`)

```
Init(At(Monkey, A) ∧ At(Bananas, B) ∧ At(Box, C) ∧ Height(Monkey, Low) ∧ Height(Box, Low) ∧ Height(Bananas, High)
     ∧ Pushable(Box) ∧ Climbable(Box) ∧ Place(A) ∧ Place(B) ∧ Place(C))
Goal(Have(Monkey, Bananas))
Action(Go(x, y),       PRECOND: At(Monkey, x) ∧ Height(Monkey, Low) ∧ Place(y)
                       EFFECT:  ¬At(Monkey, x) ∧ At(Monkey, y))
Action(Push(b, x, y),  PRECOND: At(Monkey, x) ∧ At(b, x) ∧ Pushable(b) ∧ Height(Monkey, Low) ∧ Place(y)
                       EFFECT:  ¬At(b, x) ∧ At(b, y) ∧ ¬At(Monkey, x) ∧ At(Monkey, y))
Action(ClimbUp(b, x),  PRECOND: At(Monkey, x) ∧ At(b, x) ∧ Climbable(b) ∧ Height(Monkey, Low)
                       EFFECT:  ¬Height(Monkey, Low) ∧ Height(Monkey, High) ∧ On(Monkey, b))
Action(ClimbDown(b),   PRECOND: On(Monkey, b) ∧ Height(Monkey, High)
                       EFFECT:  ¬On(Monkey, b) ∧ ¬Height(Monkey, High) ∧ Height(Monkey, Low))
Action(Grasp(o, x, h), PRECOND: At(Monkey, x) ∧ At(o, x) ∧ Height(Monkey, h) ∧ Height(o, h)
                       EFFECT:  Have(Monkey, o))
Action(Ungrasp(o),     PRECOND: Have(Monkey, o)
                       EFFECT:  ¬Have(Monkey, o))
```

| handling (siste først) | g før handlingen |
|---|---|
| Grasp(Bananas, B, High) | At(Monkey, B) ∧ At(Bananas, B) ∧ Height(Monkey, High) ∧ Height(Bananas, High) |
| ClimbUp(Box, B) | At(Monkey, B) ∧ At(Bananas, B) ∧ Height(Bananas, High) ∧ At(Box, B) ∧ Climbable(Box) ∧ Height(Monkey, Low) |
| Push(Box, C, B) | At(Bananas, B) ∧ Height(Bananas, High) ∧ Climbable(Box) ∧ Height(Monkey, Low) ∧ At(Monkey, C) ∧ At(Box, C) ∧ Pushable(Box) ∧ Place(B) |
| Go(A, C) | At(Bananas, B) ∧ Height(Bananas, High) ∧ Climbable(Box) ∧ Height(Monkey, Low) ∧ At(Box, C) ∧ Pushable(Box) ∧ Place(B) ∧ At(Monkey, A) ∧ Place(C) |

Siste mål ⊆ Init. Plan: Go(A, C), Push(Box, C, B), ClimbUp(Box, B), Grasp(Bananas, B, High). Den offisielle fasiten bruker Holding, Grab og Release, og lar apen slippe kassen før den klatrer. Den har to slurvefeil: Init mangler `At` foran (Box, C), og `to` i Go står bare i EFFECT. Følg reglene, ikke slurvet.

**3. Eksamen 2022 oppg. 1.8.** Med positive mål og preconditions (forutsetningen i L11 s. 23) kan ingen handling ødelegge fremgang uten delete lists, og hver ekte plan er fortsatt en gyldig plan i det relakserte problemet. Den korteste relakserte planen er derfor aldri lengre enn den korteste ekte, så den optimale lengden er admissible. Den optimale er NP-hard å finne; en tilnærming fra hill climbing er ikke garantert admissible.

**4. Eksamen 2021 oppg. 4b, skjemaene**

```
Action(RightRing,  PRECOND: –                          EFFECT: RightRingOn)
Action(LeftRing,   PRECOND: –                          EFFECT: LeftRingOn)
Action(RightGlove, PRECOND: RightRingOn ∧ LeftRingOn   EFFECT: RightGloveOn)
Action(LeftGlove,  PRECOND: RightRingOn ∧ LeftRingOn   EFFECT: LeftGloveOn)
Init(), Goal(RightRingOn ∧ LeftRingOn ∧ RightGloveOn ∧ LeftGloveOn)
```

Korteste plan har 4 steg: begge ringer, så begge hansker. Init er tom: ingen ring er på.

**5. Eksamen 2025 oppg. 11b, klassisk del.** Discrete, deterministic, static og fully observable. Tilstander er factored (sett med ground fluents) med closed world assumption. Sensorless-delen hører til E19.

**6. Air cargo.** Fly(P1, SFO, JFK) er relevant: den gir At(P1, JFK) og sletter At(P1, SFO), som ikke er i målet. Fly(P2, SFO, JFK) er ikke relevant: den gir ingenting i målet og sletter At(P2, SFO). g′ = At(P2, SFO) ∧ At(P1, SFO) ∧ Plane(P1) ∧ Airport(SFO) ∧ Airport(JFK).
