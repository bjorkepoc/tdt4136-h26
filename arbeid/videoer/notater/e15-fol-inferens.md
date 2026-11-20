# E15 – FOL-inferens 1: unification, GMP og chaining

> Pensum: Global 9.1–9.4.1 (US 9.1–9.4.1, samme nummer) · Forelesning: L7, L13 · Øving: Ø4 (A4 oppgave 3–4) · Eksamensvekt: ~23 % (logikk samlet, kap. 7–9, deles med E11, E12, E14 og E16)
> Video: `videoer/e15-fol-inferens/out/tdt4136-e15-fol-inferens.mp4` (15:00)

## Kapitler i videoen

- 0:00 – Intro
- 0:42 – Fra ∀ og ∃ til konkrete setninger
- 2:21 – Propositionalisering
- 4:03 – Unification
- 6:54 – Generalized Modus Ponens
- 8:26 – Forward chaining
- 10:52 – Backward chaining
- 12:27 – Eksamen
- 13:58 – Koblinger og oppsummering

## Kjerneideer

**Løpende eksempel: crime-KB-en fra boka (9.3.1).** Tallene er bokas setningsnumre.

| Nr. | Setning |
|---|---|
| 9.3 | American(x) ∧ Weapon(y) ∧ Sells(x, y, z) ∧ Hostile(z) ⇒ Criminal(x) |
| (EI) | ∃x Owns(Nono, x) ∧ Missile(x) blir Owns(Nono, M1), Missile(M1) |
| 9.6 | Missile(x) ∧ Owns(Nono, x) ⇒ Sells(West, x, Nono) |
| 9.7 | Missile(x) ⇒ Weapon(x) |
| 9.8 | Enemy(x, America) ⇒ Hostile(x) |
| fakta | American(West), Enemy(Nono, America) |

Spørsmålet er Criminal(West). Ingen setning sier det direkte. Svaret avhenger av hva x, y og z i loven må være, og det er det unification finner.

**Fra kvantorer til konkrete setninger (9.1)**

- **Universal Instantiation (UI):** fra ∀v α kan du slutte SUBST({v/g}, α) for enhver *ground term* g, altså et uttrykk uten variabler. Eksempel: ∀x King(x) ∧ Greedy(x) ⇒ Evil(x) gir kopier med {x/John}, {x/Richard} og {x/Father(John)}. UI kan brukes så mange ganger du vil, fordi ∀-setningen blir stående.
- **Existential Instantiation (EI):** fra ∃v α kan du slutte SUBST({v/k}, α), der k er en konstant som *ikke finnes i KB fra før*. k kalles en **Skolem constant**. Eksempel: ∃x Owns(Nono, x) ∧ Missile(x) gir Owns(Nono, M1) ∧ Missile(M1). Velger du et gammelt navn som West, påstår du Missile(West), og det følger ikke.
- EI brukes **én gang**, og så kan ∃-setningen strykes. Den lover bare ett objekt, og det har nå fått navn. Den nye KB-en er ikke logisk ekvivalent med den gamle, men den er *inferentially equivalent*: den er satisfiable nøyaktig når den gamle er det.
- **Merknad fra L7, sl. 20 (ikke i boka):** gjør KB allerede ∃-setningen sann, trenger du ikke noe nytt navn.
- **Felle:** står ∃ inne i en ∀, som i ∀x ∃y Loves(x, y), holder ikke en konstant. Da trengs en **Skolem function**, Loves(x, F(x)). Det hører til CNF-konverteringen i E16.

**Propositionalization (9.1.1)**

- Bruk UI med alle ground terms, og bytt hvert ground-atom med et proposisjonssymbol. Da kan PL-algoritmene fra kap. 7 brukes. Med King(John), Greedy(John) og Brother(Richard, John) gir det JohnIsKing ∧ JohnIsGreedy ⇒ JohnIsEvil og RichardIsKing ∧ … ⇒ RichardIsEvil. Forward chaining fra kap. 7 gir så JohnIsEvil.
- **Problem:** med én funksjon, for eksempel Father, finnes det uendelig mange ground terms: Father(John), Father(Father(John)) og så videre.
- **Herbrand:** følger en setning av en FOL-KB, så følger den av en *endelig* del av den propositionaliserte KB-en. Derfor kan du generere kopier dybde for dybde, med term-dybde 0, 1, 2 og så videre, til beviset dukker opp.
- **Semidecidable:** følger setningen, finner du alltid beviset. Følger den ikke, kan søket gå for alltid. Peano-eksemplet fra L7 er NatNum(0) og ∀n NatNum(n) ⇒ NatNum(S(n)). Da kommer NatNum(S(S(0))) på dybde 1, mens et spørsmål som ikke følger, bare gir nye termer uten ende. Spørsmålet i videoen, NatNum(John), er en illustrasjon.
- Propositionalisering er komplett, men blind. Den lager alle kopiene, også de du ikke trenger. *Lifting* betyr å la variablene stå og bare binde det som trengs. Det er det unification gjør.

**Unification (9.2.1)**

- UNIFY(p, q) = θ der SUBST(θ, p) = SUBST(θ, q). θ kalles en **unifier**. Finnes ingen, er svaret *failure*.
- **Most general unifier (MGU):** den unifieren som binder minst. Alle andre unifiers er MGU-en pluss flere bindinger. UNIFY returnerer MGU-en, som er unik opp til navnebytte av variabler. Eksempel: Knows(John, x) og Knows(y, z) har MGU {y/John, x/z}, som gir Knows(John, z). {y/John, x/John, z/John} er også en unifier, men den er MGU + {z/John} og binder mer enn nødvendig.
- **Standardizing apart:** gi variablene i hver setning egne navn før du unifiserer. Knows(John, x) og Knows(x, Elizabeth) feiler, men Knows(x, Elizabeth) betyr «alle kjenner Elizabeth». Med Knows(x17, Elizabeth) blir svaret {x17/John, x/Elizabeth}.
- **Occur check:** en variabel kan ikke bindes til en term som inneholder variabelen selv. S(x) og S(S(x)) gir *failure*. Sjekken gjør UNIFY kvadratisk i størrelsen på uttrykkene. Occur check står bare i boka, og foreleser gikk ikke gjennom den.

**Generalized Modus Ponens (9.2)**

- For atomer pᵢ′, pᵢ og q, der SUBST(θ, pᵢ′) = SUBST(θ, pᵢ) for alle i:
  p₁′, …, pₙ′, (p₁ ∧ … ∧ pₙ ⇒ q) ⊢ SUBST(θ, q)
- GMP er Modus Ponens løftet til FOL. Den er **sound**, fordi den er det samme som UI fulgt av vanlig Modus Ponens.
- **Definite clause:** et atom, eller en implikasjon der premissen er en konjunksjon av positive atomer og konklusjonen er ett positivt atom. ∀ er underforstått, og ∃ er ikke lov. Derfor må ∃ fjernes med EI, slik M1 kommer fra.
- **Datalog** er definite clauses uten funksjonssymboler. Crime-KB-en er Datalog.
- L7, sl. 37: for en KB med bare definite clauses gjelder KB ⊨ q ⇔ KB ⊢_GMP q for enhver fakta q. Gjentatt GMP er altså sound og complete for definite clauses når spørsmålet er atomært. Fra {P(A)} følger P(A) ∨ Q(A), men GMP kan ikke utlede den.

**Storage and retrieval (9.2.2).** Dette avsnittet står bare i boka, og foreleser gikk ikke gjennom det.

- STORE(s) legger setningen inn, og FETCH(q) returnerer alle θ der q unifiserer med noe i KB.
- **Predicate indexing:** én bøtte per predikat. Da prøver du bare Knows-fakta mot et Knows-spørsmål.
- **Subsumption lattice:** en fakta kan lagres under alle spørsmål den svarer på. Employs(IBM, Richard) svarer på Employs(x, y), Employs(x, Richard), Employs(IBM, y) og Employs(IBM, Richard). Den høyeste felles etterkommeren til to noder er det MGU-en deres gir. Employs(x, Richard) og Employs(IBM, y) gir {x/IBM, y/Richard} og dermed Employs(IBM, Richard). For et predikat med n argumenter har gitteret O(2ⁿ) noder.

**Forward chaining (9.3).** 9.3.2–9.3.3 står bare i boka, og foreleser gikk ikke gjennom algoritmen. L7 foreleste bare 9.3.1. Algoritmen er likevel pensum.

- Start i faktaene. Hver runde prøver alle regler mot alt KB vet. Nye fakta legges inn **først når runden er ferdig**, og runden etter kan bruke dem.
- En fakta som bare er en navneendring av en kjent fakta, regnes ikke som ny.
- **Fixed point:** en runde som ikke gir noe nytt. Da er alt som følger, utledet.
- FC er sound, fordi hvert steg er GMP, og complete for definite clauses: hver atomær fakta som følger, blir utledet.
- For Datalog må FC stoppe. Det finnes høyst p · nᵏ ulike fakta, med p predikater, n konstanter og høyst k argumenter. For crime-KB-en blir det 8 · 4³ = 512.
- Med funksjoner kan FC gå for alltid. Peano-regelen gir én ny fakta hver runde, og entailment er da semidecidable igjen.

**Efficient forward chaining (9.3.3)**

1. **Matching er et CSP.** Hvert premiss er en constraint på variablene sine. Kartfargingen av Australia kan skrives som én definite clause (Fig. 9.5), så matching er NP-hard i verste fall. Konjunktrekkefølgen er MRV fra kap. 5, som er kap. 6 i US: prøv det premisset som har færrest kandidater, først. Eier Nono tusen ting, men har ett missil, sjekker du Missile(x) før Owns(Nono, x). Tallene er en illustrasjon.
2. **Incremental forward chaining:** i runde t sjekkes bare regler med et premiss som unifiserer med en fakta fra runde t − 1. I crime-KB-en betyr det at bare 9.3 sjekkes i runde 2. **Rete** husker i tillegg delvise treff mellom rundene.
3. **Irrelevante fakta:** FC utleder alt som følger, også det som ikke har noe med målet å gjøre. Det kan løses med backward chaining, eller med *magic sets* i deductive databases.

**Backward chaining (9.4.1).** Avsnittet står bare i boka, og foreleser gikk ikke gjennom det.

- Start i spørsmålet. Finn regler med en konklusjon som unifiserer med målet. Det er **OR**: én regel som passer, holder. Alle premissene i den regelen må bevises, og det er **AND**. θ samles opp og føres videre til neste delmål.
- FOL-BC-ASK er en *generator* som gir én θ om gangen, og den søker dybde først fra venstre.
- Søket bruker lite minne, men har problemene fra dybde-først-søk: **gjentatte tilstander og ufullstendighet**. Beviset kan finnes uten at BC finner det.

## Algoritmer og håndsporing

**UNIFY (Fig. 9.1), kortform**

```
UNIFY(x, y, θ):
  θ = failure          → failure
  x = y                → θ
  x er variabel        → UNIFY-VAR(x, y, θ)
  y er variabel        → UNIFY-VAR(y, x, θ)
  begge sammensatte    → UNIFY(argumentene, UNIFY(operatorene, θ))
  begge lister         → UNIFY(resten, UNIFY(første, θ))
  ellers               → failure

UNIFY-VAR(var, x, θ):
  {var/val} ∈ θ        → UNIFY(val, x, θ)
  {x/val} ∈ θ          → UNIFY(var, val, θ)
  OCCUR-CHECK(var, x)  → failure
  ellers               → θ + {var/x}
```

**Håndsporing 1: bokas tabell, UNIFY(Knows(John, x), q)**

| q | Steg | θ |
|---|---|---|
| Knows(John, Jane) | John ~ John likt · x ~ Jane → x/Jane | {x/Jane} |
| Knows(y, Bill) | John ~ y → y/John · x ~ Bill → x/Bill | {y/John, x/Bill} |
| Knows(y, Mother(y)) | John ~ y → y/John · x ~ Mother(y) → x/Mother(y) | {y/John, x/Mother(y)}, helt ut {y/John, x/Mother(John)} |
| Knows(x, Elizabeth) | John ~ x → x/John · x ~ Elizabeth, men x er John · John ~ Elizabeth | failure |
| Knows(x17, Elizabeth) | John ~ x17 → x17/John · x ~ Elizabeth → x/Elizabeth | {x17/John, x/Elizabeth} |

**Håndsporing 2: MGU og occur check**

| Par | Resultat |
|---|---|
| Knows(John, x) ~ Knows(y, z) | MGU {y/John, x/z} → Knows(John, z). {y/John, x/John, z/John} er MGU + {z/John}. |
| S(x) ~ S(S(x)) | S ~ S likt · x ~ S(x): x finnes i S(x) → failure (occur check) |
| Knows(Father(y), y) ~ Knows(x, x) | x/Father(y) · y ~ x, men x er Father(y) · y ~ Father(y) → failure (occur check) |

**Håndsporing 3: GMP**

| Fakta p′ | Premiss p | Binding |
|---|---|---|
| King(John) | King(x) | x/John |
| Greedy(y) | Greedy(x) | x er John, så y/John |

θ = {x/John, y/John}, og SUBST(θ, Evil(x)) = **Evil(John)**.

**FOL-FC-ASK (Fig. 9.3), kortform**

```
repeat until new = {}:
  new ← {}
  for hver regel p₁ ∧ … ∧ pₙ ⇒ q (standardisert):
    for hver θ der SUBST(θ, p₁ ∧ … ∧ pₙ) = SUBST(θ, p₁′ ∧ … ∧ pₙ′) for p′ i KB:
      q′ ← SUBST(θ, q)
      hvis q′ ikke er en navneendring av noe i KB eller new:
        legg q′ i new
        φ ← UNIFY(q′, α); hvis φ ≠ failure: return φ
  legg new i KB
return false
```

**Håndsporing 4: FC på crime-KB-en (Fig. 9.4).** Treet vokser nedenfra.

| Runde | Regel | θ | Ny fakta |
|---|---|---|---|
| 1 | 9.3 | Weapon(y) finnes ikke ennå | – |
| 1 | 9.6 | {x/M1} | Sells(West, M1, Nono) |
| 1 | 9.7 | {x/M1} | Weapon(M1) |
| 1 | 9.8 | {x/Nono} | Hostile(Nono) |
| 2 | 9.3 | {x/West, y/M1, z/Nono} | Criminal(West). Den unifiserer med spørsmålet, så svaret er {} |
| 3 (uten spørsmål) | alle | bare kjente fakta | ∅ → fixed point |

Incremental FC sjekker bare 9.3 i runde 2, fordi bare den har et premiss som passer med Weapon, Sells eller Hostile.

**FOL-BC-ASK (Fig. 9.6), kortform**

```
FOL-BC-OR(KB, goal, θ):
  for hver regel (lhs ⇒ rhs) i FETCH-RULES-FOR-GOAL(KB, goal):
    (lhs, rhs) ← STANDARDIZE-VARIABLES(lhs, rhs)
    for hver θ′ i FOL-BC-AND(KB, lhs, UNIFY(rhs, goal, θ)): yield θ′
FOL-BC-AND(KB, goals, θ):
  θ = failure → ingenting;  goals tom → yield θ
  ellers: first, rest ← FIRST(goals), REST(goals)
    for θ′ i FOL-BC-OR(KB, SUBST(θ, first), θ):
      for θ″ i FOL-BC-AND(KB, rest, θ′): yield θ″
```

**Håndsporing 5: BC på crime-KB-en (Fig. 9.7).** Treet bygges ovenfra, dybde først og fra venstre. Kolonnen θ viser bindingen målet får.

| Rekkefølge | Mål | Løst med | Ny binding | θ etterpå |
|---|---|---|---|---|
| 1 | Criminal(West) | 9.3 | x/West | {x/West} |
| 2 | American(West) | fakta | – | {x/West} |
| 3 | Weapon(y) | 9.7 | – | {x/West} |
| 4 | Missile(y) | fakta Missile(M1) | y/M1 | {x/West, y/M1} |
| 5 | Sells(West, M1, z) | 9.6 | z/Nono | {x/West, y/M1, z/Nono} |
| 6 | Missile(M1) | fakta | – | uendret |
| 7 | Owns(Nono, M1) | fakta | – | uendret |
| 8 | Hostile(Nono) | 9.8 | – | uendret |
| 9 | Enemy(Nono, America) | fakta | – | uendret |

Legg merke til at y/M1 fra steg 4 gjør neste delmål til Sells(West, M1, z), og at z/Nono gjør det siste til Hostile(Nono). Bindingene føres videre.

**Håndsporing 6: løkke i BC.** Eksemplet er en illustrasjon. Legg til regelen Enemy(x, y) ⇒ Enemy(y, x) og prøv den før faktaen. Da blir Hostile(Nono) → Enemy(Nono, America) → Enemy(America, Nono) → Enemy(Nono, America) → … Samme mål gjentas, og beviset blir aldri funnet, selv om det finnes. FC legger i stedet til Enemy(America, Nono) i runde 1, får ingenting nytt i runde 2 og stopper.

**Egenskaper**

| | Forward chaining | Backward chaining |
|---|---|---|
| Retning | fra fakta mot mål (datadrevet) | fra mål mot fakta (måldrevet) |
| Sound | ja (GMP) | ja |
| Complete for definite clauses (atomære spørsmål) | ja | nei: løkker og gjentatte tilstander |
| Terminerer for Datalog | ja (høyst p · nᵏ fakta) | ikke garantert |
| Utleder irrelevante fakta | ja | nei |
| Minne | hele KB vokser | lineært i dybden |

**Håndsporing 7: Eksamen 2024 Q17 (5 p).** UNIFY(F(x, F(u, x)), F(F(y, A), F(z, F(B, z))))

| Steg | Par | Resultat |
|---|---|---|
| 1 | F ~ F | likt |
| 2 | x ~ F(y, A) | x/F(y, A) |
| 3 | F ~ F | likt |
| 4 | u ~ z | u/z |
| 5 | x ~ F(B, z) | x er F(y, A), så F(y, A) ~ F(B, z) |
| 6 | F ~ F | likt |
| 7 | y ~ B | y/B |
| 8 | A ~ z | z/A |

θ = {x/F(y, A), u/z, y/B, z/A}, som er svar A og fasitens form. Satt helt inn blir det {x/F(B, A), u/A, y/B, z/A}, og begge uttrykkene blir F(F(B, A), F(A, F(B, A))). B, x/F(x, A), bryter occur check. D gir x = A, men x må unifisere med F(y, A).

**Håndsporing 8: Øving 4 oppgave 4d med FC.** Modelleringen er min egen etter hintet, og kurset har ingen fasit. Hver ⇔ blir to definite clauses:

- GG ⇔ Sone, RV ⇔ Reveluv og BP ⇔ Blink
- Reveluv ⇒ Ballads, Blink ⇒ Dance, Dance ∧ Ballads ⇒ CH og Drama ∧ Ballads ⇒ HE
- Sone ∧ Electro ⇒ DJH, Sone ∧ Drama ⇒ SEO og Sone ∧ Ballads ⇒ TAE

Alle atomene har argumentet (x). Faktaene er Sone(U2), Reveluv(U2), Blink(U2) og Drama(U2).

| Runde | Nye fakta |
|---|---|
| 1 | GG, RV, BP, Ballads, Dance, SEO (Sone ∧ Drama) |
| 2 | CH (Dance ∧ Ballads), HE (Drama ∧ Ballads), TAE (Sone ∧ Ballads) |
| 3 | ∅ → fixed point |

DJH kommer aldri, fordi ingen setning sier Electro(U2).

## Eksamensfeller

- **EI med et gammelt navn.** Crown(John) fra ∃z Crown(z) er feil. Bruk en ny konstant. Står ∃ inne i ∀, må du bruke en Skolem-funksjon, ikke en konstant.
- **«UI bygger på skolemisering» er usant** (2016, Task 2 T/F). UI bare setter inn ground terms. Skolem-navn hører til EI.
- **Ikke standardize apart.** Fasitene vil se at variablene får nye navn før hver unifisering, og 2021 1.5 sier det rett ut: «Show every operation… standardizing apart, substitution/unification».
- **En unifier som ikke er MGU.** 2015 Problem 6: (y/Per, x/Per, z/Per) og (y/Per, x/z, z/Siri) unifiserer også, men fasiten krever A, (y/Per, x/z), fordi «most general is chosen».
- **Glemt occur check.** x kan ikke bli F(x, …). Dette er alternativ B i 2024 Q17.
- **To skrivemåter for θ.** Fasitene skriver ofte θ uten å sette inn: 2024 Q17 har x/F(y, A) med y/B, og 2019 har {x/Sofie, z/F(x)}. Det er riktig, fordi bindingene leses i rekkefølge. Kjenn igjen begge formene, og sett helt inn når du bruker θ på en konklusjon.
- **FC bruker nye fakta for tidlig.** 9.3 kan ikke slå til i runde 1. Weapon(M1) og Hostile(Nono) kommer i samme runde og blir med først i neste.
- **Semidecidable betyr ikke «undecidable» eller «FOL stopper aldri».** 2018 P8, fasit: det finnes algoritmer som sier ja til hver setning som følger, men ingen som også sier nei til hver setning som ikke følger.
- **FC og BC krever definite clauses eller Horn clauses og (Generalized) Modus Ponens** (2023 oppgave 1). Disjunksjoner og negasjoner krever resolution (E16).
- **BC er ikke complete i FOL** fordi søket er dybde først. FC er complete for definite clauses.
- **GMP-bevis på eksamen** (2025 Q9): skriv faktaene p′, regelen, θ = UNIFY(…) og SUBST(θ, q). Fasiten godtar også UI med {x/…} først og så Modus Ponens.

## Koblinger til andre kapitler

- → kap. 7 / E12: forward og backward chaining for Horn clauses i PL. Her er det samme, løftet med θ.
- → kap. 9.5 / E16: resolution bruker samme UNIFY, MGU og standardizing apart. Skolem-funksjoner og CNF hører hjemme der. BC er et spesialtilfelle av resolution med en bestemt kontrollstrategi.
- → kap. 5 / E06–E07 (US kap. 6): matching av premisser er et CSP, og konjunktrekkefølgen er MRV.
- → kap. 3 / E02: BC er dybde-først-søk, med lineært minne, gjentatte tilstander og manglende completeness.
- → kap. 8 / E14: FOL-syntaks og oversetting. Bruk ∀ med ⇒ og ∃ med ∧. A4 oppgave 3 hører hjemme der.

## Ikke pensum her

- 9.4.2 Logic programming (Prolog): UT (Canvas-pensumlisten, PENSUMOVERSIKT tabell 3). Prolog er også merket «not curriculum» i L5 og L6.
- 9.4.3 Redundant inference and infinite loops (tabling og memoization): UT (Canvas, PENSUMOVERSIKT).
- 9.4.4 Database semantics of Prolog: UT (Canvas, PENSUMOVERSIKT).
- 9.4.5 Constraint logic programming: UT (Canvas, PENSUMOVERSIKT).
- 9.5.4 hører til E16 og er også UT.

## Øv selv

1. **Unifisering** (egen oppgave). Finn MGU eller forklar hvorfor det feiler. Vis hvert steg.
   - (a) Older(Father(y), y) og Older(Father(x), John)
   - (b) Knows(x, Mother(x)) og Knows(Mother(y), y)
   - (c) P(A, x, F(x)) og P(y, B, F(B))
   - (d) Loves(x, F(x)) og Loves(Sofie, z). Paret er fra 2019 oppgave 2c (5 p av 15).
2. **2015 Problem 6 (2 p)** og **2024 Q17 (5 p).**
   - 2015: hva er UNIFY(Loves(Per, x), Loves(y, z))? Velg mellom (y/Per, x/z), (y/Per, x/Per, z/Per), (y/Per, x/z, z/Siri) og «none of the above», og forklar.
   - 2024: unifiser F(x, F(u, x)) og F(F(y, A), F(z, F(B, z))). Løs den uten å se videoen.
3. **2025 Q9 (GMP).** Q9 og Q10 gir 25 p til sammen. Gitt Loves(Alice, Bob), Loves(Carrie, Bob) og ∀x, y, z Loves(x, z) ∧ Loves(y, z) ⇒ Jealous(x, y). Vis Jealous(Alice, Carrie) med Generalized Modus Ponens, med unification og substitution.
4. **2023 oppgave 3.2 (10 p) med chaining.** KB-en er father(fido, snowy), alive(fido), parent(X, Y) ⇔ father(X, Y) og parent(X, Y) ∧ alive(X) ⇒ older(X, Y). Er det noen som er eldre enn Snowy?
   - Oppgaven ber om resolution (se E16). Skriv KB-en som definite clauses og svar med forward chaining.
   - Gjør det samme med backward chaining, og skriv θ for hvert delmål.
5. **Øving 4 oppgave 4b–4d med chaining.** Bruk K-pop-reglene fra håndsporing 8.
   - (b) Bruker U1 liker GG og identifiserer seg som Reveluv. Følger TAE(U1)?
   - (c) Følger HE(U1)?
   - (d) Hva anbefales for U2? Øvingen ber om resolution i b og c. Bruk FC eller BC som kontroll.
   - Kjør også BC for TAE(U1) med regelen GG ⇒ Sone *før* faktaen GG(U1). Hva skjer?
6. **Korte spørsmål.**
   - (a) 2018 Problem 8: «Entailment for first-order logic is semidecidable. What does this mean?»
   - (b) 2016 Task 2, sant/usant (3 p): «Universal Instantiation is built on Skolemization.» og påstanden om at backward chaining stiller spørsmålet som mål, finner hver klausul der høyresiden unifiserer med målet, og beviser hvert konjunkt på venstresiden mens substitusjonene samles opp (gjengitt fritt).
   - (c) 2023 oppgave 1: hvilken representasjon og hvilken slutningsregel bruker forward og backward chaining?

## Fasit

**Øv selv**

1. Unifisering:
   - (a) Father ~ Father gir y/x. Deretter y ~ John, og y er x, så x/John. θ = {y/x, x/John}, satt helt inn {x/John, y/John}. Begge blir Older(Father(John), John).
   - (b) x/Mother(y). Deretter Mother(x) ~ y, så y skal bindes til Mother(Mother(y)), som inneholder y. Svaret er failure (occur check).
   - (c) y/A og x/B. Deretter F(x) ~ F(B), og x er B, så de er like. θ = {y/A, x/B}.
   - (d) {x/Sofie, z/F(x)}, satt helt inn {x/Sofie, z/F(Sofie)}. Fasiten i 2019 skriver den første formen.
2. 2015 og 2024:
   - 2015: A, (y/Per, x/z). B og C unifiserer også, men binder mer enn nødvendig, og fasiten sier «most general is chosen».
   - 2024: A, x/F(y, A); u/z; y/B; z/A. Hele sporingen står i håndsporing 7.
3. θ = UNIFY(Loves(Alice, Bob) ∧ Loves(Carrie, Bob), Loves(x, z) ∧ Loves(y, z)) = {x/Alice, y/Carrie, z/Bob}, og SUBST(θ, Jealous(x, y)) = Jealous(Alice, Carrie). Fasiten godtar også UI med {x/Alice}, {y/Carrie} og {z/Bob} først, og så Modus Ponens. Legg merke til at Loves(Alice, Bob) også kan matches mot begge premissene. Da blir θ = {x/Alice, y/Alice, z/Bob}, og det gir Jealous(Alice, Alice). Det følger også av KB-en, men det var ikke det oppgaven spurte om.
4. KB-en som definite clauses er Father(x, y) ⇒ Parent(x, y), Parent(x, y) ⇒ Father(x, y) og Parent(x, y) ∧ Alive(x) ⇒ Older(x, y).
   - FC, runde 1: Father(Fido, Snowy) med {x/Fido, y/Snowy} gir Parent(Fido, Snowy).
   - FC, runde 2: Parent(Fido, Snowy) ∧ Alive(Fido) med {x/Fido, y/Snowy} gir Older(Fido, Snowy). Den unifiserer med spørsmålet Older(w, Snowy) med {w/Fido}. Svaret er ja: Fido.
   - BC: Older(w, Snowy) gir {x/w, y/Snowy} og delmålene Parent(w, Snowy) og Alive(w). Parent(w, Snowy) løses med Father(w, Snowy), som gir {w/Fido}. Deretter er Alive(Fido) en fakta. Prøves regelen Parent ⇒ Father før faktaen, kan BC gå i løkke.
5. Øving 4 med chaining:
   - (b) FC med GG(U1) og Reveluv(U1): runde 1 gir Sone, RV og Ballads, og runde 2 gir TAE. TAE(U1) følger.
   - (c) HE(U1) krever Drama(U1), og ingen setning gir det. HE(U1) følger ikke, og FC når et fixed point uten HE.
   - (d) Se håndsporing 8: GG, RV, BP, Ballads, Dance, SEO, CH, HE og TAE, men ikke DJH.
   - BC med GG ⇒ Sone først: målet Sone(U1) gir GG(U1), og hvis Sone ⇒ GG prøves før faktaen, gir det Sone(U1) igjen. Søket går i løkke. Prøves faktaen først, lykkes det.
6. Korte spørsmål:
   - (a) Det finnes algoritmer som sier ja til hver setning som følger, men ingen algoritme som også sier nei til hver setning som ikke følger. Søket etter et bevis kan gå for alltid.
   - (b) Første påstand er usann. Andre påstand er sann.
   - (c) Horn clauses og Modus Ponens. I FOL er det definite clauses og Generalized Modus Ponens.

**Quizene i videoen**

- *Hvilken slutning er ikke lov?* C, Crown(John) ∧ OnHead(John, John). EI må bruke et nytt navn. A og D er UI med ground terms, og B bruker en ny Skolem constant.
- *Søket har gått i en time uten svar. Hva vet du?* B, ingenting sikkert ennå. Det følger av semidecidability.
- *Knows(Father(y), y) ~ Knows(x, x)?* C, failure. x/Father(y) gjør at y må bli Father(y), og det stopper occur check.
- *Kunne 9.3 slått til i runde 1?* Nei. Weapon(M1) og Hostile(Nono) kom i samme runde, og nye fakta er med først i neste runde.
- *Hva står i siste delmål i BC-treet?* Hostile(Nono). z/Nono fra salgsregelen ble ført videre.
- *Eksamen 2024 Q17:* A, x/F(y, A); u/z; y/B; z/A.
- *Øving 4 oppgave 4d:* runde 1 gir GG, RV, BP, Ballads, Dance og SEO. Runde 2 gir CH, HE og TAE. Runde 3 gir ingenting. DJH kommer aldri.
