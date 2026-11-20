# E19 – Planlegging 2: hierarkier og en usikker verden

> Pensum: Global 11.4–11.5 og 11.7 (US samme nummer), uten 11.4.3 · Forelesning: L11 · Øving: – · Eksamensvekt: ~5 % (delt med E18)
> Video: `videoer/e19-planlegging-2/out/tdt4136-e19-planlegging-2.mp4` (11:56)

## Kapitler i videoen

- 0:00 – Intro
- 0:39 – Planlegging i lag
- 2:29 – Hierarkisk søk
- 4:16 – Uten sensorer
- 6:29 – Med sensorer
- 7:25 – Underveis
- 9:15 – Analyse av planlegging
- 9:50 – Eksamen 2025, oppgave 11
- 10:54 – Koblinger og oppsummering

## Kjerneideer

**Hvorfor planlegge i lag?** Boka bruker en ferie på Hawaii som eksempel. På nivået «fly fra San Francisco til Honolulu» trenger planen bare noen tusen handlinger. På nivået «bøy venstre kne fem grader» trenger den millioner eller milliarder. Et menneske planlegger derfor ovenfra: til flyplassen, HA 11 til Honolulu, ferie i to uker, HA 12 tilbake, hjem. Så brytes «til flyplassen» ned i velg tjeneste, bestill bil og kjør, og slik videre ned til knappetrykk. Dette heter **hierarchical decomposition**. Det samme mønsteret finnes i subrutiner og organisasjonskart. Gevinsten er at hvert nivå bare har noen få valg, så hvert søk blir lite.

**High-level action (HLA).** En HLA er en abstrakt handling som må brytes ned før den kan utføres, for eksempel `Go(Home, SFO)`. En **refinement** er én måte å bryte den ned på: en sekvens av handlinger, som selv kan være HLA-er eller primitive. Boka gir to:

```
Refinement(Go(Home, SFO), STEPS: [Drive(Home, SFOLongTermParking), Shuttle(SFOLongTermParking, SFO)])
Refinement(Go(Home, SFO), STEPS: [Taxi(Home, SFO)])
```

En **primitive action** har PRECOND og EFFECT som i E18 og kan utføres direkte. En refinement kan være rekursiv: `Navigate([a, b], [x, y])` tar ett steg og kaller seg selv, og når a = x og b = y er refinementen tom. Fra [1, 3] til [3, 2] gir dette for eksempel [Right, Right, Down] eller [Down, Right, Right].

**Implementation.** En refinement med bare primitive handlinger er en *implementation* av HLA-en. En høynivåplan [HLA₁, HLA₂, …] implementeres ved å sette en implementasjon av hver HLA etter hverandre. Refinements er kunnskap fra den som lager biblioteket. Planleggeren vurderer aldri «kjøp melk» når den skal til flyplassen, fordi ingen refinement nevner det. Planleggere bygd slik kalles HTN-planleggere (hierarchical task network).

**Minst én eller alle?** En høynivåplan når målet fra en tilstand hvis *minst én* av implementasjonene gjør det. Det er agenten selv som velger refinement. Ved ikke-deterministiske handlinger i kap. 4 velger naturen utfallet, og da må planen virke for *alle* utfall. Den forskjellen er videoens viktigste huskeregel.

**Hvorfor hjelper hierarkiet?** Anta at løsningen har d primitive handlinger. Et flatt søk med b valg per tilstand koster O(bᵈ). Anta så en helt regelmessig struktur der hver HLA har r refinements, hver med k handlinger på nivået under. Da er det log_k d nivåer under roten og 1 + k + … + k^(log_k d − 1) = (d − 1)/(k − 1) indre noder. Hver av dem har r valg, så det finnes r^((d−1)/(k−1)) mulige nedbrytingstrær. Liten r og stor k gir stor gevinst. Boka advarer selv: lange, gjenbrukbare handlingssekvenser er sjeldne i praksis.

**Planlegging når verden ikke adlyder (11.5).** Klassisk planlegging antar at miljøet er diskret, deterministisk, statisk og fullt observerbart. Boka gir tre svar når noe av dette ikke holder:

- **Sensorless** (conformant) planning: ingen observasjoner, én plan som virker i alle mulige tilstander.
- **Contingent** planning: delvis observerbart eller ikke-deterministisk, en plan med if–then-grener på percepts.
- **Online** planning: ukjent eller feil modell, agenten overvåker utførelsen og planlegger på nytt.

Eksempelet er malingsproblemet: en stol og et bord skal få samme farge, og det finnes to malingsbokser med ukjent farge.

```
Init(Object(Table) ∧ Object(Chair) ∧ Can(C1) ∧ Can(C2) ∧ InView(Table))
Goal(Color(Chair, c) ∧ Color(Table, c))
Action(RemoveLid(can), PRECOND: Can(can), EFFECT: Open(can))
Action(Paint(x, can), PRECOND: Object(x) ∧ Can(can) ∧ Color(can, c) ∧ Open(can), EFFECT: Color(x, c))
```

Variabelen c står ikke i parameterlista til Paint, fordi agenten kanskje ikke vet fargen. Det er et bevisst unntak fra E18-regelen.

**Sensorless planning.** Uten sensorer gjelder **open world**: et fluent som ikke står i belief staten, er *ukjent*, ikke usant. Klassisk planlegging bruker closed world, der det som ikke står, er usant. Agenten vet bare at alt har en farge, ∀x ∃c Color(x, c). Med en Skolem-funksjon blir det b₀ = Color(x, C(x)). En belief state er en formel, ikke en liste med tilstander. RESULT fra E18 gjelder nesten uendret:

  b′ = RESULT(b, a) = (b − DEL(a)) ∪ ADD(a)

Atomer i DEL blir usanne, atomer i ADD blir sanne, og resten står. Et ukjent literal som handlingen ikke rører, forblir ukjent og står ikke i b′. To ting skiller seg fra mengdeversjonen: b′ kan ikke inneholde både ℓ og ¬ℓ, og atomer kan inneholde variabler. Hele håndsporingen står under «Algoritmer og håndsporing».

**1-CNF er lukket under oppdatering.** Starter belief staten som en konjunksjon av literaler (1-CNF), gir hver PDDL-oppdatering igjen en konjunksjon av literaler. Med n fluents er formelen høyst O(n) lang, mens verden har 2ⁿ tilstander. Det er grunnen til at formler slår mengdene fra kap. 4.

**Conditional effects bryter 1-CNF.** Suck i støvsugerverdenen gjør rent der roboten står: `Action(Suck, EFFECT: when AtL: CleanL ∧ when AtR: CleanR)`. Brukt på True gir den (AtL ∧ CleanL) ∨ (AtR ∧ CleanR), som ikke er 1-CNF. I verste fall vokser formlene eksponentielt. To regler skal sitte:

- En usann **precondition** gjør handlingen inapplicable, og resultatet er udefinert.
- En **conditional effect** der betingelsen ikke holder, endrer ingenting.

For sensorless planning er en conditional effect bedre enn en handling som ikke kan brukes. Alternativet er å dele Suck i SuckL (PRECOND AtL) og SuckR (PRECOND AtR). Da holder 1-CNF seg, men agenten kan ikke vite om de er applicable i True. Boka foreslår en konservativ 1-CNF-tilnærming. Den er sound (gir aldri en gal plan), men incomplete.

**Contingent planning.** Med sensorer trenger PDDL **percept schemas**:

```
Percept(Color(x, c), PRECOND: Object(x) ∧ InView(x))
Percept(Color(can, c), PRECOND: Can(can) ∧ InView(can) ∧ Open(can))
Action(LookAt(x), PRECOND: InView(y) ∧ (x ≠ y), EFFECT: InView(x) ∧ ¬InView(y))
```

Et fullt observerbart miljø har et percept schema uten precondition for hvert fluent. Et sensorless miljø har ingen. Belief staten oppdateres i to steg. Først b̂ = (b − DEL(a)) ∪ ADD(a). Så legges percepten til, og har den bare ett percept schema, legges også dets PRECOND til. Har percepten flere mulige schemas, må disjunksjonen av preconditions legges til, og 1-CNF ryker igjen. Planene finnes med AND–OR-søk over belief states fra kap. 4. Agenten velger handling (OR-node), og percepten velger gren (AND-node). Variablene i grenbetingelsene er eksistensielt kvantifiserte.

**Online planning og execution monitoring.** Modellen kan være feil på seks måter: missing precondition (lokket krever skrutrekker), missing effect (maling på gulvet), missing fluent (hvor mye maling som er igjen), exogenous event (noen velter boksen), endret mål (stol og bord skal ikke være svarte) og en plan som bare sier REPLAN der den ikke dekker et tilfelle. Uten overvåking blir agenten skjør. Boka gir tre typer:

- **Action monitoring:** sjekk at preconditions for neste handling holder.
- **Plan monitoring:** sjekk at resten av planen fortsatt vil lykkes. Det vil si preconditions for hvert gjenværende steg, unntatt de som et annet gjenværende steg sørger for.
- **Goal monitoring:** sjekk om det finnes et bedre sett med mål.

**Replanning og plan repair (Fig. 11.12).** Agenten venter tilstand E, men observerer O. Den finner et punkt P på den opprinnelige planen og minimerer kostnaden av *repair* (O → P) pluss *continuation* (P → G). P kan være G. I malingseksempelet ser agenten at bordet og boks 1 er hvite og stolen svart. Den maler stolen, men stolen blir flekkete grå. Stolen har endret farge, men Paints preconditions holder fortsatt, så P er punktet før Paint, repair er tom og agenten maler igjen. Løkken kommer fra plan–execute–replan, ikke fra en løkke i planen.

**Action eller plan monitoring?** Boka bruker rød maling som bare rekker til stolen. Med action monitoring maler agenten stolen rød, oppdager ved bordet at boksen er tom, og planlegger på nytt, for eksempel begge grønne. Plan monitoring ser før første strøk at resten av planen ikke kan lykkes, og sparer det røde strøket. Plan monitoring fanger også **serendipity**: maler noen bordet rødt samtidig, er målet nådd og agenten kan gå hjem tidlig.

**Virker replanning?** Ikke alltid. En **dead end**, som et tomt batteri, kan ikke repareres. Uten blindveier, og når miljøet er *virkelig* ikke-deterministisk, slik at planen har en viss sjanse til å lykkes hver gang den prøves, når agenten målet til slutt. Med fast sjanse p > 0 per forsøk er sannsynligheten for bare feil etter k forsøk (1 − p)ᵏ → 0. Er feilen en **skjult precondition**, som en tom boks, hjelper det ikke å prøve det samme igjen. Velg en annen repair tilfeldig, for eksempel en annen boks, eller lær en bedre modell.

**Analyse av planlegging (11.7, kun bok, ikke forelest).** Planlegging forener søk og logikk: en planlegger søker etter en plan, eller beviser konstruktivt at den finnes. Kjernen er å kontrollere kombinatorisk eksplosjon, for n proposisjoner gir 2ⁿ tilstander. Uavhengige delproblemer gir i beste fall eksponentiell gevinst. **Negative interactions** mellom handlinger ødelegger den oppdelingen. Ingen metode vinner på alle problemer, så nyere systemer bruker **portfolio planning**: velg én algoritme per problem, kjør flere parallelt, eller flett dem etter en tidsplan.

## Algoritmer og håndsporing

**HIERARCHICAL-SEARCH (Fig. 11.8), kortform**

```
frontier ← FIFO-kø med [Act]
loop
  if frontier er tom: return failure
  plan ← POP(frontier)                      # den grunneste planen
  hla ← første HLA i plan, eller null
  prefix, suffix ← handlingene før og etter hla
  outcome ← RESULT(INITIAL, prefix)
  if hla = null:                            # planen er primitiv
    if IS-GOAL(outcome): return plan
  else for hver refinement i REFINEMENTS(hla, outcome):
    legg prefix + refinement + suffix bakerst i frontier
```

Søket er breddeførst over *refinements*, ikke over antall primitive steg.

**Håndsporing fra videoen.** Hierarkiet er laget for videoen etter bokas Hawaii-eksempel, og er *ILLUSTRASJON*. Act har én refinement, [Go(Home, SFO), Fly(SFO, HNL)]. Go har to refinements: [Drive, Shuttle] og [Taxi]. Drive krever bil. Start: At(Home), ingen bil. Mål: At(HNL). Sjekket i `verifiser.py`.

| Steg | POP | Første HLA | prefix | Hva skjer | Frontier etterpå |
|---|---|---|---|---|---|
| 0 | – | – | – | start | [Act] |
| 1 | [Act] | Act | [ ] | én refinement | [Go, Fly] |
| 2 | [Go, Fly] | Go | [ ] | to refinements, suffix = [Fly] | [Drive, Shuttle, Fly], [Taxi, Fly] |
| 3 | [Drive, Shuttle, Fly] | null | hele planen | primitiv, men Drive kan ikke utføres uten bil: forkastes | [Taxi, Fly] |
| 4 | [Taxi, Fly] | null | hele planen | outcome At(HNL), IS-GOAL sann: **return** | tom |

Med bil returneres [Drive, Shuttle, Fly] i steg 3, selv om taxiplanen har færre steg. Begge planene har to refinements bak seg, og Drive-planen står først i køen.

**Regnestykket for hierarkiet** (ILLUSTRASJON, d = 16, k = 4, b = r = 10, sjekket i `verifiser.py`)

| Størrelse | Verdi |
|---|---|
| nivåer under roten, log₄ 16 | 2 |
| indre noder, 1 + 4 | 5 = (16 − 1)/(4 − 1) |
| flatt søk, bᵈ | 10¹⁶ |
| HTN, r^((d−1)/(k−1)) | 10⁵ |

**Sensorless maling** (formlene er bokas. Antall verdener gjelder en illustrasjon med to farger, hvit og svart, for boks 1, boks 2, stol og bord. Sjekket i `verifiser.py`.)

| Steg | Handling | Belief state | Verdener | Målet sant i |
|---|---|---|---|---|
| b₀ | – | Color(x, C(x)) | 16 | 8 |
| b₁ | RemoveLid(Can1) | b₀ ∧ Open(Can1) | 16 | 8 |
| b₂ | Paint(Chair, Can1), θ = {x/Can1, c/C(Can1)} | b₁ ∧ Color(Chair, C(Can1)) | 8 | 4 |
| b₃ | Paint(Table, Can1) | b₂ ∧ Color(Table, C(Can1)) | 4 | 4 |

I b₃ er målet oppfylt med c = C(Can1). Agenten vet ikke hvilken farge det blir, bare at den er lik.

**Støvsugeren uten sensorer: mengde mot formel** (kap. 4, Fig. 4.9: 1 = (L, skitt, skitt), 2 = (R, skitt, skitt), 3 = (L, skitt, rent), 4 = (R, skitt, rent), 5 = (L, rent, skitt), 6 = (R, rent, skitt), 7 = (L, rent, rent), 8 = (R, rent, rent). Suck er her den gamle Suck som rengjør ruta roboten står i. Sjekket i `verifiser.py`.)

| Handling | Kap. 4: mengde | Kap. 11: formel (1-CNF) |
|---|---|---|
| – | {1, 2, 3, 4, 5, 6, 7, 8} | True |
| Right | {2, 4, 6, 8} | AtR |
| Suck | {4, 8} | AtR ∧ CleanR |
| Left | {3, 7} | AtL ∧ CleanR |
| Suck | {7} | AtL ∧ CleanR ∧ CleanL |

Formelen holder seg i 1-CNF fordi plasseringen er kjent hver gang Suck brukes. Suck rett på True gir {4, 5, 7, 8} = (AtL ∧ CleanL) ∨ (AtR ∧ CleanR), som ikke er 1-CNF.

**Betinget plan fra boka (11.5.2)**

```
[LookAt(Table), LookAt(Chair),
 if Color(Table, c) ∧ Color(Chair, c) then NoOp
 else [RemoveLid(Can1), LookAt(Can1), RemoveLid(Can2), LookAt(Can2),
       if Color(Table, c) ∧ Color(can, c) then Paint(Chair, can)
       else if Color(Chair, c) ∧ Color(can, c) then Paint(Table, can)
       else [Paint(Chair, Can1), Paint(Table, Can1)]]]
```

**Monitoring med rød maling** (bokas eksempel. Antallet strøk er ILLUSTRASJON, sjekket i `verifiser.py`.)

| Monitoring | Hva skjer | Strøk |
|---|---|---|
| Action monitoring | stol rød → ved bordet: boksen er tom → REPLAN → stol grønn, bord grønn | 3, det røde er bortkastet |
| Plan monitoring | ser før start: trenger rød til 2, har til 1 → REPLAN → stol grønn, bord grønn | 2 |

**Seks grunner til å planlegge på nytt**

| Grunn | Eksempel fra boka |
|---|---|
| missing precondition | lokket krever skrutrekker |
| missing effect | maling havner på gulvet |
| missing fluent | mengden maling i boksen |
| exogenous event | noen velter boksen |
| endret mål | stol og bord skal ikke være svarte |
| ufullstendig plan | grenen sier REPLAN |

## Eksamensfeller

- **«Minst én» mot «alle».** En høynivåplan når målet hvis minst én implementasjon gjør det, fordi agenten velger. En plan i en ikke-deterministisk verden må virke for alle utfall, fordi naturen velger.
- **Refinement er ikke det samme som implementation.** En refinement kan inneholde HLA-er. En implementation inneholder bare primitive handlinger. Fasiten til 2025 oppg. 11a vil ha akkurat det skillet.
- **HIERARCHICAL-SEARCH finner ikke korteste plan.** Den er breddeførst over refinements, så planen med færrest nedbrytninger kommer først, ikke planen med færrest steg.
- **Sensorless er open world.** «Ikke nevnt» betyr ukjent. Svarer du «usann», bruker du closed world, som er klassisk planlegging.
- **Forskjellene i 2025 oppg. 11b** er tre: observerbarhet (full mot ingen), verdensmodell (closed mot open world) og søkerom (tilstander mot belief states).
- **Precondition og conditional effect blandes.** En usann precondition gjør handlingen ubrukelig. En betingelse som ikke slår til, gir bare ingen endring.
- **1-CNF holder ikke alltid.** Den er lukket under vanlige PDDL-skjemaer, men conditional effects og percepts med flere percept schemas gir disjunksjoner.
- **«Adversarial plans»** er feil navn. AND–OR-søk i ikke-deterministiske miljøer gir *contingency plans* (2024 Q2).
- **Action monitoring er ikke det samme som plan monitoring.** Action monitoring sjekker bare neste steg. Plan monitoring sjekker hele resten og stopper en dømt plan tidligst mulig.
- **Løkken i reparasjonen** står ikke i planen. Den kommer fra plan–execute–replan.
- **Replanning garanterer ikke målet.** Det krever at det ikke finnes blindveier og at miljøet virkelig er tilfeldig, med en viss sjanse til å lykkes hver gang. Ved en skjult precondition hjelper det ikke å prøve igjen.
- **«kth root».** Boka sier at hierarkiet tar «kth root» av kostnaden. Eksponenten er (d − 1)/(k − 1), altså nærmere roten av grad k − 1. Skriv formelen, ikke slagordet.

## Koblinger til andre kapitler

- → kap. 4 / E05: belief states, sensorless search i støvsugerverdenen, AND–OR-søk og online search. Kap. 11 skriver de samme belief statene som formler i stedet for mengder. Fig. 4.14 viser overgangen som bryter 1-CNF.
- → kap. 11 / E18: PDDL, action schemas, RESULT = (s − DEL) ∪ ADD og closed world. Primitive handlinger i en HTN er vanlige PDDL-handlinger.
- → kap. 9 / E15–E16: Skolem-funksjonen C(x) og unification med θ = {x/Can1, c/C(Can1)}.
- → kap. 3 / E02: HIERARCHICAL-SEARCH er bredde-først søk med FIFO-kø, og bᵈ er kostnaden fra kap. 3.
- → kap. 2 / E01: en planleggende agent er goal-based. Goal monitoring, som spør etter bedre mål, peker mot en utility-based agent.

## Ikke pensum her

- 11.4.3 Searching for abstract solutions (angelic semantics, reachable sets): Canvas-eksklusjon, L11 s. 45.
- 11.6 Time, schedules, and resources: Canvas-eksklusjon, L11 s. 45.
- 11.2.4 GraphPlan og partial-order planning: Canvas, L11 s. 45, Canvas-FAQ («GraphPlan … no longer in the current syllabus»).
- Kun bok, ikke forelest, men pensum: 11.7 Analysis of planning approaches (PENSUMOVERSIKT).
- L11 lover «backup slides» som selvstudium, men PDF-en har ingen. Innholdet er ukjent (PENSUMOVERSIKT, avsnitt 4).

## Øv selv

1. Eksamen 2025 oppg. 11 (5 p). a) What is a High-Level Action (HLA) in hierarchical planning, and what does it mean for a refinement to be an implementation of an HLA? (2 p) b) Describe briefly classical planning and sensorless planning and highlight the main differences between them. (3 p)
2. Eksamen 2024 Q2 (flervalg, bare fasiten finnes i kildene): Hva er galt med utsagnet «In nondeterministic environments agent can apply AND-OR search to generate adversive plans»?
3. Egenlaget: Hver HLA har r = 5 refinements med k = 3 handlinger hver, og løsningen har d = 27 primitive handlinger. Hvor mange indre noder har nedbrytingstreet? Sammenlign antall nedbrytingstrær med et flatt søk der b = 5.
4. Egenlaget: Bytt rekkefølgen på refinementene til Go(Home, SFO), slik at [Taxi] kommer før [Drive, Shuttle]. Agenten har bil. Hvilken plan returnerer HIERARCHICAL-SEARCH, og hvorfor?
5. Egenlaget: En sensorless støvsuger med `Action(Suck, EFFECT: when AtL: CleanL ∧ when AtR: CleanR)` starter i True og utfører [Left, Suck, Right, Suck]. Skriv belief staten som formel etter hvert steg. Hvorfor holder den seg i 1-CNF, selv om Suck har conditional effects?
6. Egenlaget: Planen er [RemoveLid(Can1), Paint(Chair, Can1), Paint(Table, Can1)]. Mens agenten maler stolen, maler noen andre bordet i samme farge. Hva gjør en agent med action monitoring, og hva gjør en med plan monitoring?

## Fasit

**Quizene i videoen**

- Kap. 1 (uten bil: når Go(Home, SFO) målet?): **A, ja**. Taxi-implementasjonen virker, og det holder at minst én virker, fordi agenten velger refinement.
- Kap. 2 (med bil: hvilken plan returneres?): **B, [Drive, Shuttle, Fly]**. Begge planene ligger to refinements ned, og Drive-planen står først i FIFO-køen.
- Kap. 3 (Open(Can2) etter RemoveLid(Can1)): **C, ukjent**. Sensorless planning bruker open world. «Usann» ville vært closed world.
- Kap. 5 (agenten maler fra en tom boks igjen og igjen): **C, annen reparasjon eller lære modellen**. Å prøve det samme igjen hjelper bare når feilen er ekte tilfeldighet. Her mangler en precondition.

**1. Eksamen 2025 oppg. 11** (etter fasiten)

a) En HLA er en abstrakt handling for en større oppgave på et høyere abstraksjonsnivå. Den har én eller flere refinements, som er sekvenser av handlinger (HLA-er eller primitive) som utfører den. En refinement er en implementation hvis den bare består av primitive handlinger, slik at agenten kan utføre den direkte.

b) Klassisk planlegging antar et diskret, deterministisk, statisk og fullt observerbart miljø. Sensorless (conformant) planning antar at agenten ikke får observasjoner under utførelsen. Forskjeller:

| | Klassisk | Sensorless |
|---|---|---|
| observerbarhet | full | ingen |
| verdensmodell | closed world | open world |
| søkerom | tilstander | belief states |

**2. Eksamen 2024 Q2.** Det heter *contingency plans*, ikke adversive eller adversarial plans. Fasiten godtok også et annet alternativ fordi oppgaveteksten var tvetydig.

**3.** log₃ 27 = 3 nivåer under roten, så 1 + 3 + 9 = 13 = (27 − 1)/(3 − 1) indre noder. Det gir 5¹³ ≈ 1,2 · 10⁹ nedbrytingstrær, mot 5²⁷ ≈ 7,5 · 10¹⁸ for flatt søk.

**4.** [Taxi, Fly]. Etter Go ligger [Taxi, Fly] først og [Drive, Shuttle, Fly] bak i FIFO-køen. Begge er primitive på samme dybde, og Taxi-planen tas ut først og består måltesten.

**5.** Left: AtL. Suck: AtL ∧ CleanL. Right: AtR ∧ CleanL. Suck: AtR ∧ CleanL ∧ CleanR. Plasseringen er kjent hver gang Suck brukes. Bare én betingelse kan da slå til, og effekten blir den samme i alle tilstandene i belief staten, så ingen disjunksjon oppstår.

**6.** Action monitoring sjekker bare preconditions for Paint(Table, Can1). De holder, så agenten maler bordet en gang til. Det er unødvendig, men skader ikke her. Plan monitoring ser at preconditions for resten av planen, inkludert målet, allerede holder. Målet er nådd, og agenten kan stoppe. Det er serendipity.
