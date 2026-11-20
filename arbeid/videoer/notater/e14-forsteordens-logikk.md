# E14 – Førsteordens logikk: å si «alle» og «noen»

> Pensum: Global 8.1–8.4 (US samme nummer) · Forelesning: L6 · Øving: Ø4 (A4 oppgave 3) · Eksamensvekt: ~23 % (logikk samlet, kap. 7–9)
> Video: `videoer/e14-forsteordens-logikk/out/tdt4136-e14-forsteordens-logikk.mp4` (15:52)

## Kapitler i videoen

- 0:00 – Intro
- 0:43 – Hvorfor holder ikke PL?
- 2:02 – Objekter, relasjoner og funksjoner
- 3:41 – Kvantorer: alle og noen
- 6:19 – Likhet og database semantics
- 7:56 – Bruke FOL: spørsmål og domener
- 9:50 – Knowledge engineering
- 10:42 – Oversettelse
- 12:21 – Eksamen: ekte oversettelser
- 14:59 – Koblinger og oppsummering

## Kjerneideer

**Kroken.** «Alle konger er personer» skrevet som `∀x King(x) ∧ Person(x)` påstår at *alt* i verden er både konge og person, også kronen. Riktig er `∀x King(x) ⇒ Person(x)`. Én feil konnektiv er den vanligste FOL-feilen på eksamen (2015, 2017 og 2021 tester den).

**Hvorfor PL ikke holder (8.1, L6).** Proposisjonslogikk er *declarative* og *compositional*, men har bare fakta. I wumpus-verdenen trengs én setning per rute: `B1,1 ⇔ (P1,2 ∨ P2,1)`, `B2,1 ⇔ (P1,1 ∨ P2,2 ∨ P3,1)` og så videre. Det blir 16 setninger på 4 × 4 (n² på n × n), og enda flere når tid kommer inn. FOL sier det én gang:
`∀s Breezy(s) ⇔ ∃r Adjacent(r, s) ∧ Pit(r)`.
L6-eksempelet: i PL trengs `AliceIsStudent ⇒ AliceKnowsArithmetic`, `BobIsStudent ⇒ BobKnowsArithmetic`, … I FOL holder `∀x Student(x) ⇒ Knows(x, Arithmetic)`.
Naturlig språk har substantiv (objekter) og verb/adjektiv (relasjoner), men er tvetydig og kontekstavhengig. FOL tar objektene og relasjonene fra språket og beholder den presise semantikken fra logikken.

**Ontological og epistemological commitment (8.1.2, fig. 8.1, kun bok).** *Ontological* commitment er det språket antar at verden består av. *Epistemological* commitment er det en agent kan tro om et faktum.

| Språk | Ontological commitment | Epistemological commitment |
|---|---|---|
| Propositional logic | facts | true / false / unknown |
| First-order logic | facts, objects, relations | true / false / unknown |
| Temporal logic | facts, objects, relations, times | true / false / unknown |
| Probability theory | facts | degree of belief ∈ [0, 1] |
| Fuzzy logic | facts with degree of truth ∈ [0, 1] | known interval value |

**Modell (8.2.1, fig. 8.2).** En modell har et *domain* av objekter, og relasjoner og funksjoner på dem. Bokas eksempel har fem objekter: Richard Løvehjerte, kong John, deres to venstre bein og en krone.
- En **relasjon** er en mengde tupler: `Brother = {⟨R, J⟩, ⟨J, R⟩}`, `OnHead = {⟨krone, J⟩}`.
- Unære relasjoner er egenskaper: `Person = {R, J}`, `King = {J}`, `Crown = {krone}`. Richard er ikke konge i boka, fordi han antas død.
- En **funksjon** gir nøyaktig ett objekt for hvert argument: `LeftLeg(R) = bein R`. Funksjoner i FOL er *total functions*, så også kronen og de to beina må ha et venstre bein. Boka løser det med et ekstra «invisible» objekt i domenet, som er venstre bein for alt som ikke har et, også seg selv. Strengt tatt har modellen da seks objekter, selv om figuren viser fem. Så lenge du ikke påstår noe om slike bein, spiller det ingen rolle.

**Symboler og tolkning (8.2.2).** Det finnes tre slags symboler: *constant symbols* (Richard, John) står for objekter, *predicate symbols* (Brother, King) for relasjoner, og *function symbols* (LeftLeg) for funksjoner. En **interpretation** sier hvilket objekt, hvilken relasjon og hvilken funksjon hvert symbol peker på. Den er et valg: John kunne pekt på kronen. To konstanter og fem objekter gir 5 × 5 = 25 tolkninger av konstantene alene. Et objekt kan mangle navn (kronen), og et objekt kan ha flere navn. **Modell = objekter + tolkning.** Standard semantikk tillater begge deler.

**Termer og setninger (8.2.3–8.2.5).**
- Et **term** peker på et objekt: `John`, `LeftLeg(John)`. Et funksjonsterm er et sammensatt *navn*, ikke et kall som regner noe ut.
- En **atomic sentence** er et predikat med termer: `Brother(Richard, John)`. Den er sann hvis tuppelet av objektene termene peker på, ligger i relasjonen.
- En **complex sentence** bygges med ¬, ∧, ∨, ⇒ og ⇔: `¬King(Richard) ⇒ King(John)` er sann i fig. 8.2.
- Bindingsstyrke (fig. 8.3): ¬ og = sterkest, så ∧, ∨, ⇒ og ⇔. En kvantor rekker så langt til høyre som mulig.

**Kvantorer (8.2.6, L6, Ø4).**
- `∀x P` er sann hvis P er sann for *hvert* objekt x kan peke på (*extended interpretation*). Den fungerer som en stor ∧ over alle objekter.
- `∃x P` er sann hvis P er sann for *minst ett* objekt. Den fungerer som en stor ∨.
- **∀ hører sammen med ⇒.** `∀x King(x) ⇒ Person(x)` sier bare noe om kongene. For alle andre objekter er implikasjonen sann fordi betingelsen er usann.
- **∃ hører sammen med ∧.** `∃x Crown(x) ⇒ OnHead(x, John)` er sann så snart ett objekt *ikke* er en krone, uansett hvor kronen er. Den sier nesten ingenting.
- **Nesting.** `∀x ∃y Loves(x, y)` betyr «alle elsker noen». `∃y ∀x Loves(x, y)` betyr «det finnes én som alle elsker». Ulike kvantorer kan ikke byttes om. Like kvantorer kan: `∀x ∀y` = `∀y ∀x` = `∀x,y`. ∃∀ medfører ∀∃, men ikke omvendt.
- **De Morgan for kvantorer.** `¬∀x P ≡ ∃x ¬P` og `¬∃x P ≡ ∀x ¬P`. Dermed også `∀x P ≡ ¬∃x ¬P` og `∃x P ≡ ¬∀x ¬P`. Flytt ¬ forbi kvantoren og bytt kvantor. Det er samme regel som for ∧ og ∨.
- **Fordeling (L6/L7).** `∀x (P ∧ Q) ≡ ∀x P ∧ ∀x Q`, men ∀ fordeler seg ikke over ∨. På samme måte gjelder `∃x (P ∨ Q) ≡ ∃x P ∨ ∃x Q`, men ∃ fordeler seg ikke over ∧. Selve «by hand»-beviset i L6 er ikke pensum. Regelen brukes i CNF (E16).

**Likhet (8.2.7).** `t₁ = t₂` er sann når begge termene peker på samme objekt. Ulikhet trengs for å telle:
`∃x,y Brother(x, Richard) ∧ Brother(y, Richard) ∧ ¬(x = y)` betyr «Richard har minst to brødre». Uten `¬(x = y)` kan x og y begge peke på John, og da er setningen sann med én bror.

**Database semantics (8.2.8).** Med standard semantikk gir `Brother(John, Richard) ∧ Brother(Geoffrey, Richard)` bare *minst én* bror: navnene kan peke på samme objekt, og ukjente brødre kan finnes. Database semantics gjør tre antakelser:
- **Unique-names assumption:** ulike konstanter peker på ulike objekter.
- **Closed-world assumption:** atomære setninger som ikke er kjent sanne, er usanne.
- **Domain closure:** det finnes ingen objekter utover dem konstantene navngir.

Da betyr de to faktaene nøyaktig to brødre. Prisen er at du må vite alt på forhånd. Med to konstanter og én binær relasjon finnes da bare 2⁴ = 16 modeller (fig. 8.5), mens standard semantikk har uendelig mange. L6 skriver modellene som tilordninger, for eksempel `{Student = {Alice = true, else = false}}`, der «else = false» er closed world i praksis. Uten antakelsene må du skrive alt ut:
`Brother(John, Richard) ∧ Brother(Geoffrey, Richard) ∧ ¬(John = Geoffrey) ∧ ∀x Brother(x, Richard) ⇒ (x = John ∨ x = Geoffrey)`.
PDDL (kap. 11, E18) bruker database semantics.

**TELL, ASK og ASKVARS (8.3.1, L6).** Setninger som legges inn med TELL, heter *assertions*: `TELL(KB, King(John))`, `TELL(KB, ∀x King(x) ⇒ Person(x))`. `ASK(KB, Person(John))` gir *true*. `ASK(KB, ∃x Person(x))` gir også bare *true*, som å svare «ja» på «vet du hva klokka er?». `ASKVARS(KB, Person(x))` gir en strøm av svar som *substitutions* eller *binding lists*: `{x/John}` og `{x/Richard}`. L6 spør på samme måte om `Knows(x, Arithmetic)` og får Alice og Bob. Grensen: står det bare `King(John) ∨ King(Richard)` i KB, er `∃x King(x)` sann, men ingen enkelt binding følger. ASKVARS passer derfor best for Horn-KB-er.

**Kinship (8.3.2, kun bok).** Aksiomene i boka:
- `∀m,c Mother(c) = m ⇔ Female(m) ∧ Parent(m, c)`
- `∀w,h Husband(h, w) ⇔ Male(h) ∧ Spouse(h, w)`
- `∀p,c Parent(p, c) ⇔ Child(c, p)`
- `∀g,c Grandparent(g, c) ⇔ ∃p Parent(g, p) ∧ Parent(p, c)`
- `∀x,y Sibling(x, y) ⇔ x ≠ y ∧ ∃p Parent(p, x) ∧ Parent(p, y)`

Begreper:
- **Axioms** er det KB-en tar for gitt.
- **Definitions** er aksiomer på formen `∀x,y P(x, y) ⇔ …`.
- **Theorems** følger av aksiomene, for eksempel at `∀x,y Sibling(x, y) ⇔ Sibling(y, x)`. De gjør ikke KB-en mer kunnskapsrik, men sparer inferens.
- Rene fakta som `Male(Jim)` og `Spouse(Jim, Laura)` er også aksiomer.

Uten `x ≠ y` blir alle sitt eget søsken.

**Tall, mengder og lister (8.3.3, Peano i L6, resten kun bok).** Peano-aksiomene er `NatNum(0)` og `∀n NatNum(n) ⇒ NatNum(S(n))`. Addisjon defineres ved `∀m NatNum(m) ⇒ +(0, m) = m` og `∀m,n NatNum(m) ∧ NatNum(n) ⇒ +(S(m), n) = S(+(m, n))`. Mengder bygges fra `{}` med `Add(x, s)`. Lister bygges fra `Nil` med `Cons(x, l)`, slik at `[A, B, C] = Cons(A, Cons(B, Cons(C, Nil)))`.

**Wumpus i FOL (8.3.4, kun bok).**
- Persepter lagres med tidspunkt: `Percept([Stench, Breeze, Glitter, None, None], 5)`.
- Én regel dekker alle tidspunkt: `∀t Glitter(t) ⇒ BestAction(Grab, t)`.
- `ASKVARS(KB, BestAction(a, 5))` gir `{a/Grab}`.
- Ruter er lister `[x, y]`, så `Adjacent` defineres én gang for alle ruter, og brisen er én setning.

**Knowledge engineering (8.4, kun bok).** Prosessen har sju steg:
1. Identify the questions.
2. Assemble the relevant knowledge (*knowledge acquisition*).
3. Decide on a vocabulary of predicates, functions and constants (domenets *ontology*).
4. Encode general knowledge about the domain.
5. Encode a description of the problem instance.
6. Pose queries.
7. Debug and evaluate the knowledge base.

Eksempelet er en one-bit full adder med X1, X2 (XOR), A1, A2 (AND) og O1 (OR):
- Typen er en funksjon: `Type(X1) = XOR`.
- Ledningene er relasjonen `Connected(Out(1, X1), In(1, X2))`.
- Det holder med ett aksiom per porttype, for eksempel `∀g Type(g) = XOR ⇒ (Signal(Out(1, g)) = 1 ⇔ Signal(In(1, g)) ≠ Signal(In(2, g)))`.
- Spørsmålet «hvilke innganger gir sum 0 og carry 1?» gir tre bindinger: (1, 1, 0), (1, 0, 1) og (0, 1, 1).
- Glemmer du aksiomet `1 ≠ 0`, klarer systemet nesten ingen bevis. Uten unique names vet det ikke at signalene er forskjellige.

## Algoritmer og håndsporing

**Sannhet i en modell (rekursiv definisjon).**
```
sann(P(t1..tn), m, env)  = ⟨verdi(t1), …, verdi(tn)⟩ ∈ relasjonen P peker på
sann(t1 = t2)            = verdi(t1) og verdi(t2) er samme objekt
sann(¬α), sann(α ∧ β) …  = som i PL
sann(∀x α, m, env)       = sann(α, m, env[x ↦ o]) for HVERT objekt o i domenet
sann(∃x α, m, env)       = sann(α, m, env[x ↦ o]) for MINST ETT objekt o
verdi(c) = tolkningen av c;  verdi(x) = env[x];  verdi(f(t)) = funksjonen f peker på, brukt på verdi(t)
```

**∀ med ⇒ og med ∧ i fig. 8.2.** x peker på hvert objekt etter tur.

| x | King(x) | Person(x) | King(x) ⇒ Person(x) | King(x) ∧ Person(x) |
|---|---|---|---|---|
| Richard | F | T | T | F |
| John | T | T | T | T |
| bein R | F | F | T | F |
| bein J | F | F | T | F |
| krone | F | F | T | F |
| **∀x** | | | **sann** | **usann** |

**∃ med ∧ og med ⇒, før og etter at kronen faller av.**

| x | Crown(x) ∧ OnHead(x, John) | Crown(x) ⇒ OnHead(x, John) | samme ∧, kronen av | samme ⇒, kronen av |
|---|---|---|---|---|
| Richard | F | T | F | T |
| John | F | T | F | T |
| bein R | F | T | F | T |
| bein J | F | T | F | T |
| krone | T | T | F | F |
| **∃x** | **sann** | **sann** | **usann** | **sann** |

⇒-versjonen er sann i begge modellene. Den skiller ikke mellom dem og sier derfor nesten ingenting.

**Nestede kvantorer** (ILLUSTRASJON med tre objekter):

| Modell | Loves | ∀x ∃y Loves(x, y) | ∃y ∀x Loves(x, y) |
|---|---|---|---|
| Ring | A→B, B→C, C→A | sann | usann |
| Alle elsker B | A→B, B→B, C→B | sann | sann |

**Hvor mange brødre?** KB = {Brother(John, Richard), Brother(Geoffrey, Richard)}.

| Modell | Hva navnene peker på | Brødre | Lov i standard semantics? | Lov i database semantics? |
|---|---|---|---|---|
| 1 | John og Geoffrey er samme objekt | 1 | ja | nei (unique names) |
| 2 | i tillegg en ukjent bror | 3 | ja | nei (closed world, domain closure) |
| 3 | to ulike objekter, ingen flere | 2 | ja | ja |

**Peano: 2 + 1.** `+(S(S(0)), S(0))` → `S(+(S(0), S(0)))` → `S(S(+(0, S(0))))` → `S(S(S(0)))` = 3.

**Adderen.** For innganger (1, 1, 0) er X1 = 0, A1 = 1, A2 = 0, sum = 0 og carry = 1.

| i1 | i2 | i3 | sum | carry |
|---|---|---|---|---|
| 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 |

**Oppskrift: norsk/engelsk → FOL.**
1. Finn kvantorordene. «Alle», «hver» og «enhver» gir ∀. «Noen», «en» og «minst én» gir ∃.
2. Gi hvert objekt sin variabel.
3. Under ∀ skriver du `betingelse ⇒ påstand`. Under ∃ binder du alt med ∧. Regelen gjelder på hvert nivå i en nestet setning.
4. «Minst to» krever to variabler og `¬(x = y)`. «Bare disse» krever `∀x … ⇒ (x = … ∨ …)`.
5. Test med et objekt som *ikke* oppfyller betingelsen, og med et der x og y er samme objekt.

Eksempel fra L6, «There is some course that every student takes»: `∃y Course(y) ∧ (∀x Student(x) ⇒ Takes(x, y))`. Ytterst står ∃ med ∧, inni ∀ med ⇒.

Eksempel fra L6, «If a student takes a course and the course covers a concept, then the student knows that concept»: `∀x,y,z Student(x) ∧ Course(y) ∧ Concept(z) ∧ Takes(x, y) ∧ Covers(y, z) ⇒ Knows(x, z)`.

**Eksamen 2021 oppgave 1.3, fasit** (fasiten sier «there may be alternative correct answers»):
- «A niece is a sibling's daughter»: `∀x,y [Niece(x, y) ⇔ ∃z (Sibling(y, z) ∧ Daughter(x, z))]`
- «Anette has at least two umbrellas»: `∃x ∃y (Has(Anette, x) ∧ IsUmbrella(x) ∧ Has(Anette, y) ∧ IsUmbrella(y) ∧ ¬(x = y))`
- «At least one professor teaches both EiT and an AI course»: `∃x Professor(x) ∧ Teaches(x, EiT) ∧ Teaches(x, AI)`

**Eksamen 2023 oppgave 3.2 a, fasit:** `father(fido, snowy)`, `alive(fido)`, `parent(X, Y) ↔ father(X, Y)`, `[parent(X, Y) ∧ alive(X)] ⇒ older(X, Y)`, og spørsmålet `∃X [older(X, snowy)]`. Fasiten bruker store bokstaver for variabler og små for konstanter, og den dropper ∀ foran regler der alle variablene er universelle. Svaret er X = fido. Beviset hører til E15 og E16.

**A4 oppgave 3.1 (ingen offisiell fasit, mitt forslag):**

| | Setning | FOL |
|---|---|---|
| a | Emily is either a surgeon or a lawyer | `Occupation(Emily, Surgeon) ∨ Occupation(Emily, Lawyer)` |
| b | Joe is an actor, but he also holds another job | `Occupation(Joe, Actor) ∧ ∃o Occupation(Joe, o) ∧ ¬(o = Actor)` |
| c | All surgeons are doctors | `∀p Occupation(p, Surgeon) ⇒ Occupation(p, Doctor)` |
| d | Joe does not have a lawyer | `¬∃p Customer(Joe, p) ∧ Occupation(p, Lawyer)` |
| e | Emily has a boss who is a lawyer | `∃p Boss(p, Emily) ∧ Occupation(p, Lawyer)` |
| f | There exists a lawyer all of whose customers are doctors | `∃p Occupation(p, Lawyer) ∧ ∀q Customer(q, p) ⇒ Occupation(q, Doctor)` |
| g | Every surgeon has a lawyer | `∀p Occupation(p, Surgeon) ⇒ ∃q Occupation(q, Lawyer) ∧ Customer(p, q)` |

d) kan like gjerne skrives `∀p Customer(Joe, p) ⇒ ¬Occupation(p, Lawyer)`. Det følger av De Morgan for kvantorer.

## Eksamensfeller

- **∧ under ∀.** `∀x King(x) ∧ Person(x)` gjør alt til konger. 2017 problem 5: «Men and women are welcome to apply» som `∀x [(M(x) ∧ W(x)) ⇒ Apply(x)]` er *False*. Den sier noe om alt som er både mann og kvinne. Fasiten peker på ∨.
- **⇒ under ∃.** `∃x Professor(x) ⇒ Teaches(x, EiT) ∧ Teaches(x, AI)` er sann bare fordi noe ikke er en professor. 2017 problem 5, alternativ 1 (`∃x∀y[Person(x) ∧ Game(y) → Plays(x, y)]`), er feil av samme grunn. Riktig er alternativ 4: `∃x∀y[Person(x) ∧ [Game(y) → Plays(x, y)]]`.
- **x og y kan være samme objekt.** «Minst to» uten `¬(x = y)` gir poengtrekk (2021 1.3, 2019 oppgave 7). I 2025 Q9 gir regelen `∀x,y,z Loves(x, z) ∧ Loves(y, z) ⇒ Jealous(x, y)` også `Jealous(Alice, Alice)`. Fasiten ber bare om `Jealous(Alice, Carrie)` med θ = {x/Alice, y/Carrie, z/Bob}, men ved forward chaining til fixpunkt følger begge.
- **Kvantorrekkefølge.** `∀x ∃y` ≠ `∃y ∀x`. 2016: «Every Russian school boy knows a game» har to tolkninger. A er `∃y [G(y) ∧ (∀x R(x) ⇒ K(x, y))]`, B er `∀x [R(x) ⇒ ∃y (G(y) ∧ K(x, y))]`.
- **To fakta er ikke «nøyaktig to».** I standard semantikk er minimum én bror. Vil du ha nøyaktig to, må ulikheten og «bare disse» skrives ut.
- **Variabler og konstanter.** Hold én konvensjon. 2023-fasiten bruker store bokstaver for variabler (X, Y) og små for konstanter (fido). Boka gjør det omvendt.
- **Bakgrunnskunnskap.** 2019 oppgave 2 krevde at du selv la til `∀x Cat(x) ⇒ Animal(x)` før resolution kunne bruke at Kismet er en katt.
- **Les baklengs.** 2022 oppgave 6: `∀x ¬R(x) ⇒ ¬Q(x)` er kontraposisjonen av `∀x Q(x) ⇒ R(x)`, altså «alle Q er R». Da følger `∀x ¬R(x) ⇒ ¬P(x)` når også `∀x P(x) ⇒ Q(x)` gjelder.
- **Funksjonsterm er ikke en setning.** `LeftLeg(John)` er et objekt. Det kan ikke stå alene som en påstand, og det kan ikke stå under ∧.

## Koblinger til andre kapitler

- → kap. 7 / E11: syntaks, modeller, entailment og wumpus-aksiomene R2/R3 i PL. FOL utvider ontologien, ikke entailment-begrepet.
- → kap. 9 / E15: UI og EI fjerner kvantorene (Skolem-konstant), unification og GMP, forward og backward chaining. 2023 3.2 og 2025 Q9 løses der.
- → kap. 9.5 / E16: CNF, med «flytt ¬ innover» via De Morgan for kvantorer som eget steg, og resolution (2019 oppgave 2, 2025 Q10).
- → kap. 10 / E17: kategorier og ontologier er FOL-aksiomer i stor skala. Vokabularsteget i knowledge engineering er en ontologi.
- → kap. 11 / E18: PDDL bruker database semantics (unique names, closed world) og action schemas med variabler.

## Ikke pensum her

- Prolog-eksemplene i L6 (s. 5 og 49): «not curriculum» (PENSUMOVERSIKT avsnitt 7).
- Z3-eksemplene og anvendelsene i L6 (s. 50 og 52–59): «not curriculum» (PENSUMOVERSIKT avsnitt 7).
- «By hand»-beviset og motekesempelet i L6 (s. 41–45): «not curriculum». Selve fordelingsregelen bør du likevel kunne (PENSUMOVERSIKT avsnitt 8, punkt 7).
- Natural language-demoen i L6 (s. 7): «not curriculum» (PENSUMOVERSIKT avsnitt 7).

## Øv selv

1. (2016, 2 p) «Every Russian school boy knows a game» har to tolkninger. A: «There exists a game such that every Russian school boy knows this game.» B: «For each Russian school boy, there exists a game so that the boy knows this game.» Skriv begge i FOL med R(x), G(y) og K(x, y). Hvilken medfører den andre?
2. (2019 oppgave 7, 2 + 2 p) Oversett «John has at least two daughters» og «Any person who has an umbrella is not wet».
3. (2017 problem 5) Er «Men and women are welcome to apply» ekvivalent med `∀x [(M(x) ∧ W(x)) ⇒ Apply(x)]`? Begrunn svaret og skriv en riktig versjon.
4. (A4 3.1 a–e) Oversett setningene a–e i A4 oppgave 3.1 med Occupation, Customer og Boss.
5. Avgjør om setningene er sanne i modellen i fig. 8.2: (a) `∀x Person(x) ⇒ ∃y Brother(x, y)`, (b) `∀x ∃y Brother(x, y)`, (c) `∃x Person(x) ∧ ¬King(x)`, (d) `∃x OnHead(x, LeftLeg(John))`.
6. Et språk har tre konstanter og ett unært predikat. Hvor mange modeller finnes med database semantics? Hvorfor er svaret uendelig med standard semantics?

## Fasit

**Quizene i videoen**
- Kapittel 2, «Hvilken er sann i modellen?»: **B**, `King(Richard) ∨ King(John)`. A er usann fordi John er konge. C og D er usanne fordi et bein verken er bror eller person.
- Kapittel 3, 2017 problem 5: **D**, `∃x∀y [Person(x) ∧ [Game(y) ⇒ Plays(x, y)]]`. A blir sann når x ikke er en person. B krever at alt er spill, C at alt er personer. Eksamen hadde i tillegg alternativet «None of the above».
- Kapittel 4, hvor mange brødre i standard semantics: **C, minst én**.
- Kapittel 7, `∀x,y Father(x, y) ⇒ ¬Woman(x)` (2021 1.5): **C, «ingen fedre er kvinner»**.
- Kapittel 7, L6-regelen: `∀x,y,z Student(x) ∧ Course(y) ∧ Concept(z) ∧ Takes(x, y) ∧ Covers(y, z) ⇒ Knows(x, z)`.
- Kapittel 8, 2021 1.3: se fasiten under «Algoritmer og håndsporing».

**Øv selv**
1. A: `∃y [G(y) ∧ (∀x R(x) ⇒ K(x, y))]`. B: `∀x [R(x) ⇒ ∃y (G(y) ∧ K(x, y))]`. A medfører B: finnes ett spill alle kan, kan hver gutt et spill. B medfører ikke A: hver gutt kan kunne sitt eget spill.
2. `∃x,y Daughter(x, John) ∧ Daughter(y, John) ∧ ¬(x = y)`, og `∀x IsPerson(x) ∧ (∃y Has(x, y) ∧ IsUmbrella(y)) ⇒ ¬IsWet(x)`. Fasiten fra 2019 skriver den andre som `(IsPerson(x) ⇒ ∃y (Has(x, y) ∧ IsUmbrella(y))) ⇒ ¬IsWet(x)`. Den versjonen sier også at alt som ikke er en person, er tørt. Se usikkerhet under.
3. Nei. Setningen gjelder bare det som er både mann og kvinne. Riktig er `∀x (M(x) ∨ W(x)) ⇒ Apply(x)`, eller `∀x M(x) ⇒ Apply(x)` ∧ `∀x W(x) ⇒ Apply(x)`.
4. Se tabellen for A4 3.1 over (mitt forslag, ingen offisiell fasit).
5. (a) sann (begge personene har en bror). (b) usann (kronen og beina har ingen bror). (c) sann (Richard). (d) usann (ingenting står på et bein).
6. Med database semantics peker konstantene på tre ulike objekter og ingen flere, så hvert objekt har predikatet eller ikke: 2³ = 8 modeller. Med standard semantics kan domenet ha vilkårlig mange objekter, og konstantene kan dele objekt.

**Faglige usikkerheter**
- 2019 oppgave 7: fasiten til «Any person who has an umbrella is not wet» er logisk feil, som forklart i svar 2. Bruk versjonen over.
- A4 3.1 har ingen offisiell fasit. Løsningene her er mine forslag.
- 2025 Q9-fasiten nevner bare `Jealous(Alice, Carrie)`. At `Jealous(Alice, Alice)` også følger, er min egen observasjon fra regelen.
