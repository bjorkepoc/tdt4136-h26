# E17 – Kunnskapsrepresentasjon: ontologier, hendelser og semantiske nett

> Pensum: Global 10.1–10.3 og 10.5 (US samme nummer); 10.3.2 kun bok; 10.2.3 ute etter Canvas · Forelesning: L12 · Øving: – · Eksamensvekt: ~2–5 %
> Video: `videoer/e17-kunnskapsrepresentasjon/out/tdt4136-e17-kunnskapsrepresentasjon.mp4` (13:57)

## Kapitler i videoen

- 0:00 – Intro
- 0:38 – Ontologi og kategorier
- 3:19 – Deler, mål og stoff
- 4:59 – Hendelser
- 7:01 – Tid og fluents
- 8:38 – Semantiske nett
- 10:28 – Description logics
- 12:13 – Eksamen
- 12:58 – Koblinger og oppsummering

## Kjerneideer

**Kroken.** `∀x x ∈ Persons ⇒ Legs(x, 2)`, `John ∈ Persons` og `Legs(John, 1)` gir `Legs(John, 2) ∧ Legs(John, 1)`. I ren logikk blir det en selvmotsigelse så snart basen også sier at en person har ett beinantall (`Legs(x, n) ∧ Legs(x, m) ⇒ n = m`). Et semantisk nett (fig. 10.4) svarer likevel «John: 1, Mary: 2». Nettet slår opp nedenfra og stopper ved første verdi, så den spesifikke verdien vinner over defaulten. I FOL må unntaket skrives inn: `∀x x ∈ Persons ∧ x ≠ John ⇒ Legs(x, 2)`.

**Hva, ikke hvordan.** Kap. 9 (E15–E16) handler om *hvordan* en agent slutter. Kap. 10 handler om *hva* kunnskapsbasen skal inneholde. Den røde tråden er **reification**: det du vil si noe om, gjør du til et objekt. Det gjelder kategorier (Basketballs), hendelser (E₁), fluents (At(Shankar, DC)), intervaller (ReignOf(GeorgeVI)) og n-ære fakta (Fly17).

**Ontological engineering (10.1, L12).**
- Wumpus klarte seg med noen få predikater. Generelle domener krever generelle begreper: hendelser, tid, fysiske objekter og tro. Å representere dem heter *ontological engineering*.
- **Upper ontology** (fig. 10.1) er det generelle rammeverket med de generelle begrepene øverst. Domenespesifikke begreper henger seg på under, for eksempel Wumpus under Animals. Hver lenke betyr at det nederste begrepet er en spesialisering av det øverste.
- Treet:
  - Anything → AbstractObjects, GeneralizedEvents.
  - AbstractObjects → Sets (→ Categories), Numbers, RepresentationalObjects (→ Sentences, Measurements → Times, Weights).
  - GeneralizedEvents → Intervals (→ Moments), Places, PhysicalObjects, Processes.
  - PhysicalObjects → Things (→ Animals, Agents), Stuff (→ Solid, Liquid, Gas).
  - Humans ligger under både Animals og Agents. Treet er altså ikke disjunkt, og et menneske arver fra to foreldre.
- To krav til en **general-purpose ontology**:
  1. Den må kunne brukes i mer eller mindre ethvert spesialdomene, med domenespesifikke aksiomer lagt til.
  2. Den må forene ulike kunnskapsområder i samme kunnskapsbase. Tid skal for eksempel virke både for nanosekunder og for minutter, og lengde både for ångstrøm og meter.
- Fire veier til store ontologier:
  - Eksperter skriver aksiomer (CYC).
  - Kategorier og fakta importeres fra databaser (DBpedia fra Wikipedia).
  - Tekst leses og tolkes (TextRunner).
  - Frivillige legger inn kunnskap (OpenMind).
- Google Knowledge Graph har over 70 milliarder fakta. Suksessen for generelle ontologier er så langt begrenset. Gruber: «Every ontology is a treaty». Ontologien er en avtale mellom dem som bruker den.

**Kategorier og objekter (10.2, L12).**
- Vi handler med objekter (BB₉), men resonnerer med kategorier (en basketball). En kategori kan skrives som predikat, `Basketball(b)`. Den kan også reifiseres til objektet `Basketballs`, og da skriver vi `b ∈ Basketballs`.
- **Member** og **Subset**:
  - `BB₉ ∈ Basketballs` er member, mens `Basketballs ⊂ Balls` er subset.
  - En kategori kan selv være element: `Dogs ∈ DomesticatedSpecies`.
  - Alle medlemmer har en egenskap: `(x ∈ Basketballs) ⇒ Spherical(x)`.
  - Medlemmer kjennes igjen på egenskaper: `Orange(x) ∧ Round(x) ∧ Diameter(x) = 9.5″ ∧ x ∈ Balls ⇒ x ∈ Basketballs`.
- **Arv (inheritance):** `∀x x ∈ Food ⇒ Edible(x)`, `Fruit ⊂ Food` og `Apples ⊂ Fruit` gir `Edible(Apple₁)`. Subset-lenkene danner en **taxonomy**.
- **Disjoint, ExhaustiveDecomposition, Partition** (bokas definisjoner, L12):
  - `Disjoint(s) ⇔ (∀c₁, c₂ c₁ ∈ s ∧ c₂ ∈ s ∧ c₁ ≠ c₂ ⇒ Intersection(c₁, c₂) = { })`
  - `ExhaustiveDecomposition(s, c) ⇔ (∀i i ∈ c ⇔ ∃c₂ c₂ ∈ s ∧ i ∈ c₂)`
  - `Partition(s, c) ⇔ Disjoint(s) ∧ ExhaustiveDecomposition(s, c)`
  - Bokas eksempler:
    - `Disjoint({Animals, Vegetables})`.
    - `ExhaustiveDecomposition({Americans, Canadians, Mexicans}, NorthAmericans)`. Dette er ikke en Partition, fordi noen har dobbelt statsborgerskap.
    - `Partition({Animals, Plants, Fungi, Protista, Monera}, LivingThings)`.
  - Subset alene sier ikke noe om overlapp. At Undergraduates og GraduateStudents er subset av Students, utelukker ikke at noen er begge.
- **Natural kinds** (sidebar i 10.2, L12): de fleste virkelige kategorier har ingen skarp definisjon. Boka skiller derfor ut de typiske medlemmene:
  - `Typical(c) ⊆ c`
  - `x ∈ Typical(Tomatoes) ⇒ Red(x) ∧ Round(x)`

**Physical composition (10.2.1).**
- `PartOf` er **transitiv** og **refleksiv**: `PartOf(Bucharest, Romania)`, …, `PartOf(Europe, Earth)` gir `PartOf(Bucharest, Earth)`, og `PartOf(x, x)` gjelder alltid.
- Biped:
  `Biped(a) ⇒ ∃l₁, l₂, b Leg(l₁) ∧ Leg(l₂) ∧ Body(b) ∧ PartOf(l₁, a) ∧ PartOf(l₂, a) ∧ PartOf(b, a) ∧ Attached(l₁, b) ∧ Attached(l₂, b) ∧ l₁ ≠ l₂ ∧ [∀l₃ Leg(l₃) ∧ PartOf(l₃, a) ⇒ (l₃ = l₁ ∨ l₃ = l₂)]`
  «Nøyaktig to» er klønete i FOL. L12 peker på at description logics sier det direkte.
- **BunchOf:** mengden {Apple₁, Apple₂, Apple₃} er abstrakt og veier ingenting. `BunchOf(s)` er ett fysisk objekt som har eplene som *deler*, og `Weight(BunchOf({Apple₁, Apple₂, Apple₃})) = Pounds(2)`.
  - `∀x x ∈ s ⇒ PartOf(x, BunchOf(s))`: hvert element er en del.
  - `∀y [∀x x ∈ s ⇒ PartOf(x, y)] ⇒ PartOf(BunchOf(s), y)`: bunten er det *minste* slike objektet. Det heter **logical minimization**.
  - `BunchOf({x}) = x`.

**Measurements (10.2.2).**
- Et mål er et objekt med flere navn: `Length(L₁) = Inches(1.5) = Centimeters(3.81)`. Inches og Centimeters er *units functions*.
- Omregning: `Centimeters(2.54 × d) = Inches(d)`. Med d = 1,5 gir det 3,81.
- Flere eksempler:
  - `Diameter(Basketball₁₂) = Inches(9.5)`
  - `ListPrice(Basketball₁₂) = $(19)`, der $(1) er en pris, ikke en seddel.
  - `d ∈ Days ⇒ Duration(d) = Hours(24)`
- Mål uten skala kan ordnes: `Difficulty(e₁) > Difficulty(e₂) ⇒ ExpectedScore(e₁) < ExpectedScore(e₂)`.

**Things og stuff (10.2.3, ute av pensum etter Canvas; bare bakgrunn).**
- Deler du et jordsvin (*aardvark*, en *thing*, count noun), får du ikke to jordsvin. Deler du smør (*stuff*, mass noun), får du smør.
- *Intrinsic* egenskaper overlever delingen: tetthet, kokepunkt, smak, farge og eierskap. *Extrinsic* egenskaper gjør det ikke: vekt, lengde og form.
- `PoundOfButter` er ikke stuff, fordi et halvt pund ikke er et pund. Vekt er extrinsic.

**Event calculus (10.3, L12).**
- Situasjonene i wumpus var diskrete og øyeblikkelige (`HaveArrowₜ₊₁ ⇔ HaveArrowₜ ∧ ¬Shootₜ`). Det passer ikke når hendelser tar tid og overlapper, som å fylle badekaret mens du pusser tennene.
- Event calculus gjør hendelser, fluents og tidspunkter til objekter.
  - Hendelser: `E₁ ∈ Flyings ∧ Flyer(E₁, Shankar) ∧ Origin(E₁, SF) ∧ Destination(E₁, DC)`. Siden E₁ er et objekt, kan du legge til `Bumpy(E₁)`.
  - Fluents er tilstander som endrer seg, som `At(Shankar, Berkeley)`.
- Predikatene i 4e og L12:
  - `T(f, t₁, t₂)`: fluent f er sann hele veien fra t₁ til t₂.
  - `Happens(e, t₁, t₂)`: hendelsen e starter ved t₁ og slutter ved t₂.
  - `Initiates(e, f, t)`: e gjør f sann ved t.
  - `Terminates(e, f, t)`: e gjør f usann ved t.
  - `Initiated(f, t₁, t₂)` og `Terminated(f, t₁, t₂)`: en hendelse initierer eller terminerer f et sted mellom t₁ og t₂.
  - `t₁ < t₂`: rekkefølge.
  - Clipped og Restored finnes ikke i 4e eller L12.
- Flyaksiomet:
  `E = Flyings(a, here, there) ∧ Happens(E, t₁, t₂) ⇒ Terminates(E, At(a, here), t₁) ∧ Initiates(E, At(a, there), t₂)`
- **Persistens:**
  `Happens(e, t₁, t₃) ∧ Initiates(e, f, t₂) ∧ ¬Terminated(f, t₂, t₄) ∧ t₁ ≤ t₂ ≤ t₃ ≤ t₄ ⇒ T(f, t₂, t₄)`
  Speilregelen har `Terminates` og `¬Initiated` og gir `¬T`. `Terminated(f, t₁, t₅) ⇔ ∃e, t₂, t₃, t₄ Happens(e, t₂, t₄) ∧ Terminates(e, f, t₃) ∧ t₁ ≤ t₂ ≤ t₃ ≤ t₄ ≤ t₅`.
- En særskilt hendelse, *Start*, setter starttilstanden. En fluent er som en lampe: den står på til en hendelse slår den av.

**Tid (10.3.1, L12).**
- `Partition({Moments, ExtendedIntervals}, Intervals)` og `i ∈ Moments ⇔ Duration(i) = Seconds(0)`.
- `Begin(i)` og `End(i)` gir endepunktene. `Time` gir et punkt på tidsskalaen, og `Duration(i) = Time(End(i)) − Time(Begin(i))`.
- Allens relasjoner (bokas definisjoner):

| Relasjon | Definisjon |
|---|---|
| `Meet(i, j)` | `End(i) = Begin(j)` |
| `Before(i, j)` | `End(i) < Begin(j)` |
| `After(j, i)` | `Before(i, j)` |
| `During(i, j)` | `Begin(j) < Begin(i) < End(i) < End(j)` |
| `Overlap(i, j)` | `Begin(i) < Begin(j) < End(i) < End(j)` |
| `Starts(i, j)` | `Begin(i) = Begin(j)` |
| `Finishes(i, j)` | `End(i) = End(j)` |
| `Equals(i, j)` | `Begin(i) = Begin(j) ∧ End(i) = End(j)` |

- Eksempler: `Meet(ReignOf(GeorgeVI), ReignOf(ElizabethII))` (boka skriver Meets akkurat her) og `Overlap(Fifties, ReignOf(ElizabethII))` fra L12. Boka bruker `Overlap(Fifties, ReignOf(Elvis))`.

**Fluents og objekter (10.3.2, kun bok).**
- Et fysisk objekt kan sees som en generalisert hendelse, en bit av rom og tid. USA begynte i 1776 med 13 stater og har i dag 50.
- `President(USA)` er *ett* objekt, laget av ulike personer til ulike tider: Washington 1789–1797, Adams 1797–1801, og så videre. Grunnen er at en term peker på ett objekt i en modell.
- `T(Equals(President(USA), GeorgeWashington), Begin(AD1790), End(AD1790))` bruker funksjonen Equals, ikke predikatet =. Et predikat kan ikke stå som argument til T, og logisk identitet endrer seg ikke over tid.

**Semantiske nett (10.5.1, L12).**
- Noder er objekter og kategorier, og lenker er binære relasjoner: MemberOf, SubsetOf, SisterOf.
- Fig. 10.4: Persons SubsetOf Mammals. FemalePersons og MalePersons SubsetOf Persons. Mary MemberOf FemalePersons, John MemberOf MalePersons og SisterOf(Mary, John).
- Ramme rundt lenkenavnet:
  - **Dobbel ramme** sier noe om hvert medlem av kategorien: `∀x x ∈ Persons ⇒ [∀y HasMother(x, y) ⇒ y ∈ FemalePersons]`. Kategorien Persons har ingen mor.
  - **Enkel ramme** gir en verdi til hvert medlem: `∀x x ∈ Persons ⇒ Legs(x, 2)`.
- **Arv:** følg MemberOf og deretter SubsetOf oppover til første kategori med verdien. Oppslaget er raskt og forutsigbart.
- **Default og override:** `Legs(John, 1)` står direkte på John og overstyrer default-verdien 2. Det er ingen selvmotsigelse, fordi oppslaget stopper ved første treff.
- **Reifikasjon av n-ære fakta** (fig. 10.5): `Fly(Shankar, NewYork, NewDelhi, Yesterday)` blir noden Fly17 ∈ FlyEvents med lenkene Agent, Origin, Destination og During. Med reifikasjon kan nettet uttrykke alle grunne, funksjonsfrie atomære fakta.
- **Grenser:** negasjon, disjunksjon, nøstede funksjonssymboler og eksistenskvantifisering mangler. Full FOL har alt dette, men teorembevis er bare semidecidable.
- Andre trekk:
  - **Procedural attachment**: et spørsmål om en relasjon kan kalle en egen prosedyre, så nettet kan fylle hullene.
  - **Multiple inheritance**: to foreldre kan gi to motstridende verdier. Det er et problem for nettet, ikke for logikken.

**Description logics (10.5.2, L12).**
- Description logics vokste ut av semantiske nett, med presis mening og taksonomien som organiserende prinsipp. FOL gjør det lett å si ting om *objekter*, mens DL gjør det lett å *definere kategorier*.
- CLASSIC:
  - `Bachelor = And(Unmarried, Adult, Male)` tilsvarer `Bachelor(x) ⇔ Unmarried(x) ∧ Adult(x) ∧ Male(x)`.
  - Syntaksen (fig. 10.6): Thing, ConceptName, And, All, AtLeast, AtMost, Fills, SameAs og OneOf.
  - Bokas eksempel er menn med minst tre sønner som alle er arbeidsløse og gift med leger, og høyst to døtre som alle er professorer i fysikk eller matematikk:
    `And(Man, AtLeast(3, Son), AtMost(2, Daughter), All(Son, And(Unemployed, Married, All(Spouse, Doctor))), All(Daughter, And(Professor, Fills(Department, Physics, Math))))`
- Hovedoppgavene:
  - **Subsumption**: er én kategori en delmengde av en annen, ut fra definisjonene alene?
  - **Classification**: hører et objekt til en kategori?
  - **Consistency**: kan noe i det hele tatt oppfylle definisjonen?
- **Tractability:**
  - Målet er subsumption i polynomisk tid i størrelsen på beskrivelsene.
  - Prisen er at vanskelige problemer enten ikke kan uttrykkes eller krever eksponentielt store beskrivelser.
  - DL mangler derfor vanligvis negasjon og disjunksjon, som krever eksponentiell kasusanalyse. CLASSIC tillater bare «eller» over navngitte individer, i Fills og OneOf.

## Algoritmer og håndsporing

**1. Disjoint, ExhaustiveDecomposition og Partition på små mengder.** Medlemmene er mine (ILLUSTRASJON i videoen), og kategoriene er bokas. Med c = NorthAmericans = {ann, bob, cai, dan}:

| Kategori | Medlemmer |
|---|---|
| Americans | ann, bob |
| Canadians | bob, cai |
| Mexicans | dan |

- *Disjoint?* Sjekk alle par. Americans ∩ Canadians = {bob} ≠ { }, så svaret er **nei**.
- *Exhaustive?* Unionen er {ann, bob, cai, dan} = c, og ingen utenfor c er med. Svaret er **ja**.
- *Partition?* Disjoint ∧ Exhaustive = nei ∧ ja = **nei**.
- Animals {katt, hund} og Vegetables {gulrot} har tomt snitt, så de er Disjoint.
- LivingThings med ett medlem i hver av de fem kategoriene gir Partition.

**2. Arveoppslag i fig. 10.4.**
```
lookup(x, egenskap):
  hvis x har egenskapen direkte: returner den
  node ← kategorien x er MemberOf
  så lenge node mangler egenskapen: node ← kategorien node er SubsetOf
  returner verdien på node   (første treff vinner)
```

| Spørsmål | Sti | Svar |
|---|---|---|
| Legs(Mary) | Mary → FemalePersons → Persons | 2 (arvet) |
| Legs(John) | John | 1 (egen verdi, overstyrer default 2) |
| Legs(Ola), Ola ∈ MalePersons | Ola → MalePersons → Persons | 2 (arvet) |

**3. Event calculus-tidslinjen fra videoen.** Tidspunktene er mine (ILLUSTRASJON), og aksiomene er bokas.
- Hendelser:
  - Start ved 0 initierer At(S, SF).
  - E₁ = flytur SF → DC med `Happens(E₁, 2, 4)`. Den terminerer SF ved 2 og initierer DC ved 4.
  - E₂ = DC → SF med `Happens(E₂, 8, 10)`. Den terminerer DC ved 8 og initierer SF ved 10.
- Resultat: SF er sann på [0, 2] og [10, 12], DC på [4, 8].
- `T(At(S, DC), 4, 7)`: `Happens(E₁, 2, 4)`, `Initiates(E₁, At(S, DC), 4)`, 2 ≤ 4 ≤ 4 ≤ 7. `Terminated(At(S, DC), 4, 7)` krever en terminerende hendelse helt inne i [4, 7]. E₂ varer fra 8 til 10, så den teller ikke. Er tidslinjen hele hendelsesloggen, holder `¬Terminated(At(S, DC), 4, 7)`, og da følger **T(At(S, DC), 4, 7)**. Uten den forutsetningen kan en ukjent hendelse ha terminert fluenten.
- `T(At(S, DC), 4, 11)`: `Terminated(At(S, DC), 4, 11)` er sann via E₂, siden 4 ≤ 8 ≤ 8 ≤ 10 ≤ 11. Persistensregelen kan derfor ikke brukes.

**4. Allen-klassifisering.** Sammenlign de fire endepunktene og les av tabellen over. I videoen er j = [4, 10]:

| i | Relasjon(er) som holder |
|---|---|
| [1, 4] | Meet |
| [0,5; 2,5] | Before (og After(j, i)) |
| [5, 8] | During |
| [2, 7] | Overlap(i, j), men ikke Overlap(j, i) |
| [4, 7] | Starts |
| [7, 10] | Finishes |
| [4, 10] | Equals, og dermed også Starts og Finishes |

**5. Strukturell subsumption i DL.** Skriv begge beskrivelsene som en mengde krav.
- D subsumerer C hvis alle krav i D følger av kravene i C.
- Et navn i D må finnes i C. `AtLeast(n, R)` i D krever `AtLeast(m, R)` i C med m ≥ n. `AtMost(n, R)` i D krever `AtMost(m, R)` i C med m ≤ n.
- Eksempel: Bachelor = {Unmarried, Adult, Male} ⊇ {Adult, Male}, så `And(Adult, Male)` subsumerer Bachelor. Flere krav gir en mindre kategori.
- Consistency: `And(AtLeast(3, Son), AtMost(2, Son))` krever 3 ≤ antall sønner ≤ 2. Det er umulig, så beskrivelsen er inkonsistent.

`verifiser.py` i episodemappen sjekker alle eksemplene over.

## Eksamensfeller

- **Member og Subset blandes.** «Fifi er en katt» er `Fifi ∈ Cats`, mens «en katt er et pattedyr» er `Cats ⊂ Mammals`. IsA brukt om begge er tvetydig.
- **ExhaustiveDecomposition er ikke Partition.** Overlapp ødelegger disjunktheten. NorthAmericans er standardeksempelet. 2019: {mammal, non-mammal} *er* en Partition av animal (sant).
- **PartOf er ikke Subset.** Bucharest er en *del* av Romania, ikke en delmengde. PartOf er transitiv og refleksiv, Member er det ikke.
- **Egenskap på kategorien i stedet for medlemmene.** `HasMother(Persons, FemalePersons)` er feil, fordi kategorier ikke har mødre. Bruk den dobbelt innrammede lenken eller ∀-formen.
- **Default i nettet er ikke en selvmotsigelse.** Den blir det først når du skriver den som ubetinget FOL-regel og basen sier at beinantallet er entydig. Da trengs unntaket `x ≠ John`.
- **Multiple inheritance er et problem i semantiske nett, ikke i FOL.** 2017-fasiten: «not in logic but semantic networks». 2018: semantiske nett tillater multiple inheritance basert på spesifisitet (sant).
- **Frames har ingen resolution-mekanisme** (2018, usant).
- **Overlap er ikke symmetrisk.** `Overlap(Fifties, ReignOf(ElizabethII))` er sann, men den motsatte rekkefølgen er usann.
- **Starts og Finishes sjekker bare ett endepunkt.** Etter bokas definisjoner tilfredsstiller et Equals-par også Starts og Finishes.
- **T(f, t₁, t₂) er ikke T(f, t).** 4e og L12 bruker intervallformen. Clipped og Restored er ikke i pensumkildene.
- **Equals i stedet for =** inni T. Et predikat kan ikke være argument til T.
- **DL med ¬ og ∨.** CLASSIC har ikke full negasjon eller disjunksjon. Det er nettopp det som gjør det tractable.
- **Pund smør.** `PoundOfButter` er ikke stuff, fordi vekt er extrinsic.

## Koblinger til andre kapitler

- ← kap. 8 / E14: kategorier, hendelser og intervaller er bare objekter og predikater i FOL. Vokabularsteget i knowledge engineering er en ontologi.
- → kap. 9 / E15, E16: arv og persistens er slutninger (GMP, forward chaining, resolution). Semantiske nett bruker arv som hovedmekanisme (2015 MC).
- → kap. 11 / E18: PDDL bruker også fluents, men tiden ligger implisitt i rekkefølgen av tilstander, og action schemas løser frame-problemet. Event calculus gjør tid og hendelser til eksplisitte objekter og tåler hendelser som tar tid og overlapper.
- → kap. 24 / E20 (Global 24.1.5, US 23.1.5): WordNet er en taksonomi av ord, for eksempel «kitten IS A: young_mammal».
- ← kap. 2 / E01 (2.4.7): atomic, factored og structured representation. Kap. 10 er structured: objekter med relasjoner.

## Ikke pensum her

- 10.4 Mental objects and modal logic: UT (Canvas og L12-leselisten, «Not in the exam»).
- 10.6 Reasoning with default information (circumscription, default logic, truth maintenance): UT etter samme kilder. Defaults i semantiske nett (10.5.1) er likevel pensum.
- 10.2.3 Things og stuff: **UT** (Canvas). L12-leselisten sier bare «§10.2», og delen ble ikke forelest. Den er tatt kort med i videoen og notatet som bakgrunn.
- 10.3.2 Fluents og objekter er pensum, men kun bok (ikke forelest).

## Øv selv

1. (2025 Q13a, 2 p) Define briefly what an ontology is in AI and describe how categories support reasoning by inheritance. Give one example where inheritance allows an agent to infer a property of an individual object. Skriv hele svaret selv før du ser fasiten.
2. (2021 oppg. 6, Knowledge Representation)
   - (a) What are the three ways to represent states and transitions between them? Describe each very briefly, and say what kinds of tasks we used each of them in.
   - (b) What are semantic networks capable of representing? What kind of reasoning mechanism do they rely on?
3. (2019, sant/usant) «The set consisting of "mammal" and "non-mammal" categories is both a disjunctive and an exhaustive decomposition of the category "animal".»
4. (2018, sant/usant)
   - (a) «Semantic networks allow multiple inheritance on the basis of specificity in the hierarchy.»
   - (b) «"Frames" as knowledge representation language combines declarative and procedural knowledge through their resolution mechanism.»
5. (2017, sant/usant) «"Multiple inheritance" is one of the reasons that leads to undecidability problem in first order logic.»
6. (2015)
   - (a) Sant/usant: «Procedural attachment is used in semantic networks.»
   - (b) Sant/usant: «Ontology is not a key component in simple-reflex agents.»
   - (c) Flervalg: the main inference mechanism in semantic networks is A resolution refutation, B generalized modus ponens, C inheritance, D Skolemization eller E De Morgan's law?
7. (I stil med 2020 v2, «Translation from Semantic Networks to Logic». Figuren finnes ikke lokalt.) Oversett alle lenkene i fig. 10.4 til FOL, også de to innrammede.
8. Er {Primes, EvenNumbers} Disjoint, Exhaustive eller en Partition av Integers? Og {EvenNumbers, OddNumbers}?
9. Klassifiser i mot j = [4, 10]: (a) i = [3, 5], (b) i = [10, 12], (c) i = [6, 10]. (d) Hvilken relasjon har j til i = [2, 12]?
10. Med tidslinjen i videoen som hele hendelsesloggen: følger (a) `T(At(S, SF), 0, 1)` og (b) `T(At(S, SF), 0, 5)`?
11. Skriv i CLASSIC: «menn med minst to sønner, som alle er leger». Subsumerer `And(Man, AtLeast(2, Son))` beskrivelsen din?

## Fasit

**Quizene i videoen**
- Kapittel 1, eksamen 2019 (Mammals/NonMammals): **C, Partition**. Ingen dyr er begge, og alle er ett av dem.
- Kapittel 2, er et pund smør stuff? **Nei.** Et halvt pund er ikke et pund, fordi vekt er extrinsic.
- Kapittel 3, `T(At(Shankar, DC), 4, 11)`? **B, nei.** E₂ terminerer DC ved 8, så `Terminated(At(S, DC), 4, 11)` er sann.
- Kapittel 4, femtitallet og ReignOf(ElizabethII): **B, Overlap(Fifties, Reign)**, fordi 1950 < 1952 < 1960 < 2022. D har feil rekkefølge. During krever at femtitallet begynner etter 1952, og Starts krever samme start. I tillegg gjelder Meet(ReignOf(GeorgeVI), ReignOf(ElizabethII)).
- Kapittel 5, Legs(Ola): **B, 2, arvet fra Persons**, via Ola → MalePersons → Persons. Johns verdi arves ikke sidelengs.
- Kapittel 6: **B, And(Adult, Male) subsumerer Bachelor.**
  - A har feil retning.
  - C er inkonsistent.
  - D er usann, fordi CLASSIC ikke har full negasjon.

**Øv selv**
1. Fasitens kjerne:
   - En ontologi er en strukturert representasjon av hvilke slags entiteter som finnes i et domene og relasjonene mellom dem (objekter, kategorier, egenskaper). Den gir et felles rammeverk for å organisere kunnskap.
   - Kategorier er koblet med subclass-relasjoner, og arv lar agenten utlede et objekts egenskaper fra kategoriene det tilhører.
   - Fasiten gir ikke noe eksempel. Bruk bokas: `Mary ∈ FemalePersons`, `FemalePersons ⊂ Persons` og `∀x x ∈ Persons ⇒ Legs(x, 2)` gir `Legs(Mary, 2)`. Food → Fruit → Apples → Edible(Apple₁) går også.
2. (a) Fasiten sier bare «See R&N textbook». Fra 2.4.7:
   - **Atomic**: tilstanden er en udelelig boks. Brukt i søk og spill.
   - **Factored**: variabler med verdier. Brukt i CSP, proposisjonslogikk og planlegging.
   - **Structured**: objekter med relasjoner. Brukt i FOL og kunnskapsrepresentasjon.

   (b) Fasiten har ikke noe svar. Fra boka:
   - Nettene representerer objekter, kategorier og binære relasjoner, inkludert MemberOf og SubsetOf. Med reifikasjon kan de representere alle grunne, funksjonsfrie atomære fakta.
   - De kan ikke uttrykke negasjon, disjunksjon, eksistenskvantifisering eller nøstede funksjoner.
   - De resonnerer med **arv** langs MemberOf og SubsetOf, med default-verdier som kan overstyres. Procedural attachment kan fylle hull.
3. **Sant.**
4. (a) **Sant.** (b) **Usant.** Fasiten skriver: «Frame does not have resolution mechanism».
5. **Usant.** Fasiten skriver: «It is not in logic but semantic networks».
6. (a) **Sant.** (b) **Sant.** (c) **C, inheritance.**
7. Formlene:
   - `Persons ⊂ Mammals`, `FemalePersons ⊂ Persons` og `MalePersons ⊂ Persons`.
   - `Mary ∈ FemalePersons`, `John ∈ MalePersons` og `SisterOf(Mary, John)`.
   - `∀x x ∈ Persons ⇒ [∀y HasMother(x, y) ⇒ y ∈ FemalePersons]` og `∀x x ∈ Persons ⇒ Legs(x, 2)`.
   - `Legs(John, 1)`. Sier basen at beinantallet er entydig, må Legs-regelen få unntaket `x ≠ John` for at basen skal være konsistent.
   - 2020-fasiten godtok også formen `Isa(elephant, mammal), color(elephant, grey)` uten kvantorer.
8. {Primes, EvenNumbers}: ikke Disjoint (2 er i begge), ikke Exhaustive (9 er i ingen), altså ingen Partition. {EvenNumbers, OddNumbers} er en Partition av Integers.
9. (a) Overlap(i, j). (b) Meet(j, i), fordi End(j) = 10 = Begin(i). (c) Finishes(i, j). (d) During(j, i), fordi 2 < 4 < 10 < 12.
10. (a) **Ja, gitt at loggen er komplett.** Start initierer SF ved 0, og ingen hendelse i loggen terminerer SF helt inne i [0, 1], så `¬Terminated(At(S, SF), 0, 1)` holder. (b) **Nei.** `Terminated(At(S, SF), 0, 5)` er sann via E₁, fordi 0 ≤ 2 ≤ 2 ≤ 4 ≤ 5.
11. `And(Man, AtLeast(2, Son), All(Son, Doctor))`. Ja, den subsumeres av `And(Man, AtLeast(2, Son))`, fordi den har alle kravene og ett til.

**Faglige usikkerheter**
- **10.2.3** er ute av pensum etter Canvas (L12-leselisten sier bare «§10.2»). Den er tatt kort med som bakgrunn og merket.
- **Persistensaksiomet slik 4e skriver det** krever at den terminerende hendelsen ligger *helt* inne i intervallet (t₁ ≤ t₂ ≤ t₃ ≤ t₄ ≤ t₅). Bokstavelig lest gir det `T(At(S, SF), 0, 3)` på tidslinjen i videoen, selv om SF slås av ved 2, fordi E₁ først slutter ved 4. Videoen og oppgavene bruker bare spørringer der dette ikke spiller inn.
- **Starts og Finishes** er definert svakt i boka (ett likt endepunkt). Andre kilder krever i tillegg at det andre endepunktet er ulikt. Følg boka på eksamen.
- **Fasitene:** 2021 oppg. 6 har ikke svar på delen om semantiske nett, og 2025 Q13a har ikke noe eksempel. Svarene her er bokas, ikke offisielle.
- **Tidspunktene** i event calculus-tidslinjen og medlemmene i mengdediagrammene er mine illustrasjoner. Aksiomene, kategoriene og definisjonene er bokas.
