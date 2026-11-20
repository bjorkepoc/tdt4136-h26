# E12 – Logikk 2: inferensregler, CNF og resolution

> Pensum: Global 7.5–7.5.4 (US samme nummer) · Forelesning: L5, L13 · Øving: Ø4 (A4 del 1–2) · Eksamensvekt: ~23 % (logikk samlet, PL + FOL, deles med E11, E13, E15 og E16)
> Video: `videoer/e12-resolusjon-pl/out/tdt4136-e12-resolusjon-pl.mp4` (15:22)

## Kapitler i videoen

- 0:00 – Intro
- 0:35 – Omskrivningsregler
- 1:46 – Gyldig, oppfyllbar og ⊨
- 3:32 – Bevis med navngitte regler
- 5:39 – Resolution
- 7:35 – CNF og PL-RESOLUTION
- 10:27 – Horn og chaining
- 12:52 – Eksamen 2018 P6
- 14:24 – Koblinger

## Kjerneideer

**Utgangspunktet (bokas wumpus-KB, 7.4.3).** Agenten står i [1,1], kjenner ingen breeze der, men kjenner breeze i [2,1]. Er det en pit i [1,2]? E11 svarte ved å sjekke 2⁷ = 128 modeller. Denne episoden svarer med et bevis på fem linjer, og deretter med én regel (resolution) som en maskin kan kjøre på alt.

| | Setning |
|---|---|
| R1 | ¬P₁,₁ |
| R2 | B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁) |
| R3 | B₂,₁ ⇔ (P₁,₁ ∨ P₂,₂ ∨ P₃,₁) |
| R4 | ¬B₁,₁ |
| R5 | B₂,₁ |

**Logisk ekvivalens (7.5, Fig. 7.11).** α ≡ β betyr at α og β er sanne i nøyaktig de samme modellene, altså at α ⊨ β og β ⊨ α. De tolv reglene brukes som omskrivningsregler: du kan bytte ut en delsetning med en ekvivalent setning hvor som helst.

| Navn | Regel |
|---|---|
| Kommutativitet | α ∧ β ≡ β ∧ α · α ∨ β ≡ β ∨ α |
| Assosiativitet | (α ∧ β) ∧ γ ≡ α ∧ (β ∧ γ) · samme for ∨ |
| Double-negation elimination | ¬(¬α) ≡ α |
| Contraposition | α ⇒ β ≡ ¬β ⇒ ¬α |
| Implication elimination | α ⇒ β ≡ ¬α ∨ β |
| Biconditional elimination | α ⇔ β ≡ (α ⇒ β) ∧ (β ⇒ α) |
| De Morgan | ¬(α ∧ β) ≡ ¬α ∨ ¬β · ¬(α ∨ β) ≡ ¬α ∧ ¬β |
| Distributivitet | α ∧ (β ∨ γ) ≡ (α ∧ β) ∨ (α ∧ γ) · α ∨ (β ∧ γ) ≡ (α ∨ β) ∧ (α ∨ γ) |

Eksempelet i videoen (laget for videoen): ¬(P ∧ ¬Q) blir ¬P ∨ ¬¬Q ved De Morgan, så ¬P ∨ Q ved double-negation elimination, så P ⇒ Q ved implication elimination baklengs. Den omvendte implikasjonen Q ⇒ P er *ikke* ekvivalent med P ⇒ Q (modellen P = T, Q = F skiller dem).

**Validity og satisfiability (7.5).**
- *Valid* (tautologi): sann i alle modeller. Eksempel: P ∨ ¬P.
- *Satisfiable*: sann i minst én modell. Eksempel: P ∧ Q.
- *Unsatisfiable*: sann i ingen modell. Eksempel: P ∧ ¬P.
- α er valid hvis og bare hvis ¬α er unsatisfiable.

**⊨ er ikke ⇒.** ⇒ er en konnektiv *inne i* en setning og er sann eller usann i én modell. ⊨ er en relasjon *mellom* setninger og handler om alle modeller: α ⊨ β betyr M(α) ⊆ M(β). L5 bruker Rain ⊨ Rain ∨ Wind som eksempel. Koblingen mellom dem er:
- *Deduction theorem*: α ⊨ β hvis og bare hvis (α ⇒ β) er valid.
- *Refutation* (proof by contradiction, reductio ad absurdum): α ⊨ β hvis og bare hvis α ∧ ¬β er unsatisfiable. Det er dette resolution bygger på.

**Inferensregler (7.5.1).** En regel tar premisser og gir en konklusjon. Den er sound hvis konklusjonen er sann i alle modeller der premissene er sanne.
- *Modus Ponens*: fra α ⇒ β og α får du β.
- *And-elimination*: fra α ∧ β får du α (og β).
- Alle ekvivalensene i Fig. 7.11 kan brukes begge veier som regler. MP og and-elimination går bare én vei.

**Bevis for ¬P₁,₂ (bokas bevis i 7.5.1).** Hver linje har regelnavn og hvilke linjer den bruker:

| Linje | Setning | Regel | Fra |
|---|---|---|---|
| R6 | (B₁,₁ ⇒ (P₁,₂ ∨ P₂,₁)) ∧ ((P₁,₂ ∨ P₂,₁) ⇒ B₁,₁) | Biconditional elimination | R2 |
| R7 | (P₁,₂ ∨ P₂,₁) ⇒ B₁,₁ | And-elimination | R6 |
| R8 | ¬B₁,₁ ⇒ ¬(P₁,₂ ∨ P₂,₁) | Contraposition | R7 |
| R9 | ¬(P₁,₂ ∨ P₂,₁) | Modus Ponens | R8, R4 |
| R10 | ¬P₁,₂ ∧ ¬P₂,₁ | De Morgan | R9 |
| mål | ¬P₁,₂ | And-elimination | R10 |

R1, R3 og R5 brukes aldri. Et bevis hopper over det irrelevante, mens en sannhetstabell må gå gjennom alle 128 radene.

**Modus tollens (ikke navngitt i boka eller L5).** Fra α ⇒ β og ¬β får du ¬α. I videoen går R7 og R4 rett til R9 med Modus tollens. Det tilsvarer contraposition fulgt av Modus Ponens (R8 + R9 over). Eksamen 2023 3.1 krever regelen eksplisitt: «Constraint: Your solution must use Modus tollens.» Fasiten bruker også *Disjunctive syllogism* (fra α ∨ β og ¬α får du β), som heller ikke er navngitt i boka eller i L5. Her følger notatet fasiten.

**Monotonicity (7.5.1, kun bok, ikke forelest).** Hvis KB ⊨ α, så er KB ∧ β ⊨ α for alle β. Å legge til kunnskap kan bare fjerne modeller, så M(KB ∧ β) ⊆ M(KB) ⊆ M(α). Bokas eksempel er at agenten lærer at det er nøyaktig åtte pits. Konklusjonen ¬P₁,₂ står fortsatt. Derfor kan en regel brukes så snart premissene finnes i KB, uansett hva ellers som står der.

**Resolution (7.5.2).**
- *Literal*: et atom eller et negert atom. *Clause* (klausul): en disjunksjon av literaler. To literaler er *komplementære* hvis den ene er negasjonen av den andre.
- *Unit resolution*: fra l₁ ∨ … ∨ lₖ og m, der m er komplementær med lᵢ, får du klausulen uten lᵢ. Bokas eksempel: P₁,₁ ∨ P₃,₁ ∨ P₂,₂ (R15) og ¬P₂,₂ (R13) gir P₁,₁ ∨ P₃,₁ (R16), og sammen med ¬P₁,₁ (R1) blir det P₃,₁ (R17).
- *Full resolution*: to klausuler med ett komplementært par gir en klausul med alle de andre literalene fra begge.
- *Factoring* (kun bok): resultatet skal bare ha én kopi av hver literal. A ∨ B ∨ C mot ¬B ∨ C gir A ∨ C, ikke A ∨ C ∨ C.
- *Hvorfor er resolventen sann (soundness)?* Se på literalen det kuttes på, for eksempel P. Er P sann, er ¬P usann, og resten av klausulen med ¬P må holde. Er P usann, må resten av klausulen med P holde. Én av restene holder i hver modell, og resolventen er nettopp disjunksjonen av de to restene.
- *Modus Ponens er et spesialtilfelle*: Rain og ¬Rain ∨ Wet gir Wet.

**CNF i fire steg (7.5.2, L5).** Conjunctive normal form er en konjunksjon av klausuler. Alle PL-setninger kan gjøres om til CNF, og rekkefølgen er fast:
1. ⇔ ut: α ⇔ β blir (α ⇒ β) ∧ (β ⇒ α).
2. ⇒ ut: α ⇒ β blir ¬α ∨ β.
3. ¬ inn: med De Morgan og double-negation, til negasjonen bare står foran atomer.
4. ∨ over ∧: distribuer.

Bokas eksempel B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁):
1. (B₁,₁ ⇒ (P₁,₂ ∨ P₂,₁)) ∧ ((P₁,₂ ∨ P₂,₁) ⇒ B₁,₁)
2. (¬B₁,₁ ∨ P₁,₂ ∨ P₂,₁) ∧ (¬(P₁,₂ ∨ P₂,₁) ∨ B₁,₁)
3. (¬B₁,₁ ∨ P₁,₂ ∨ P₂,₁) ∧ ((¬P₁,₂ ∧ ¬P₂,₁) ∨ B₁,₁)
4. (¬B₁,₁ ∨ P₁,₂ ∨ P₂,₁) ∧ (¬P₁,₂ ∨ B₁,₁) ∧ (¬P₂,₁ ∨ B₁,₁)

**PL-RESOLUTION (Fig. 7.13).** For å vise KB ⊨ α gjør du KB ∧ ¬α om til CNF. Deretter resolverer du alle par om og om igjen. Kommer den tomme klausulen □, er KB ∧ ¬α unsatisfiable, så KB ⊨ α. Kommer det ingen nye klausuler (metning) uten □, er KB ⊭ α.

**Completeness (7.5.2, idénivå).** Med factoring finnes det bare endelig mange klausuler over symbolene, så algoritmen stopper. *Ground resolution theorem*: er en klausulmengde unsatisfiable, inneholder resolution closure den tomme klausulen. Resolution er *refutation-complete*, men ikke complete for å generere alle konsekvenser: fra Rain lager resolution aldri Rain ∨ Wind. Legger du til negasjonen ¬(Rain ∨ Wind), kommer □ straks. Selve beviset (9.5.4) er ikke pensum. I verste fall tar algoritmen eksponentiell tid.

**Horn og definite clauses (7.5.3).**
- *Definite clause*: nøyaktig én positiv literal. ¬L₁,₁ ∨ ¬Breeze ∨ B₁,₁ ≡ (L₁,₁ ∧ Breeze) ⇒ B₁,₁, med body og head.
- *Horn clause*: høyst én positiv literal.
- *Goal clause*: ingen positive literaler.
- Resolution av to Horn-klausuler gir en Horn-klausul.
- R2 i CNF gir ¬B₁,₁ ∨ P₁,₂ ∨ P₂,₁ med to positive literaler, så den er ikke Horn.
- For en KB av definite clauses er Modus Ponens alene sound og complete (L5), og forward og backward chaining går i lineær tid i størrelsen på KB.

**Forward chaining (7.5.4) er data-driven.** Du starter i fakta og fyrer hver regel der alle premissene er kjent. Hvert symbol behandles høyst én gang, og hver count telles ned én gang per premiss. Derfor er arbeidet lineært i størrelsen på KB. Algoritmen er sound fordi hvert steg er Modus Ponens. Den er complete fordi inferred-tabellen ved fixed point er en modell av KB.

**Backward chaining (7.5.4) er goal-directed.** Du starter i spørsmålet q og jobber bakover gjennom regler med q som konklusjon. Et mål som allerede ligger på stakken, er en løkke og droppes. Algoritmen rører bare det som er relevant for målet, og arbeidet er ofte mye mindre enn lineært i KB.

## Algoritmer og håndsporing

### PL-RESOLUTION på wumpus-eksempelet (Fig. 7.14)

KB = R2 ∧ R4, α = ¬P₁,₂. KB ∧ ¬α i CNF gir fem klausuler:

| | Klausul |
|---|---|
| C1 | ¬B₁,₁ ∨ P₁,₂ ∨ P₂,₁ |
| C2 | ¬P₁,₂ ∨ B₁,₁ |
| C3 | ¬P₂,₁ ∨ B₁,₁ |
| C4 | ¬B₁,₁ (R4) |
| C5 | P₁,₂ (negert mål) |

Runde 1, alle par:

| Par | Resolvent |
|---|---|
| C1, C2 | to komplementære par (B₁,₁ og P₁,₂): hvert kutt gir en tautologi |
| C1, C3 | to komplementære par: to tautologier |
| C2, C4 | ¬P₁,₂ |
| C2, C5 | B₁,₁ |
| C3, C4 | ¬P₂,₁ |
| resten | ingen komplementære par |

Runde 2: ¬P₁,₂ mot C5 = P₁,₂ gir □. Altså er KB ⊨ ¬P₁,₂.

### Forward chaining på Fig. 7.16 (KB: P ⇒ Q, L ∧ M ⇒ P, B ∧ L ⇒ M, A ∧ P ⇒ L, A ∧ B ⇒ L, fakta A og B, spørsmål Q)

count = antall premisser som ennå ikke er kjent. Agenda er en kø (4e kaller den queue). Rekkefølgen på count er P⇒Q, L∧M⇒P, B∧L⇒M, A∧P⇒L, A∧B⇒L.

| Tas ut | Teller ned | count etterpå | Ny i agenda | Agenda |
|---|---|---|---|---|
| start | – | 1, 2, 2, 2, 2 | A, B | A, B |
| A | A∧P⇒L, A∧B⇒L | 1, 2, 2, 1, 1 | – | B |
| B | B∧L⇒M, A∧B⇒L (0) | 1, 2, 1, 1, 0 | L | L |
| L | L∧M⇒P, B∧L⇒M (0) | 1, 1, 0, 1, 0 | M | M |
| M | L∧M⇒P (0) | 1, 0, 0, 1, 0 | P | P |
| P | P⇒Q (0), A∧P⇒L (0) | 0, 0, 0, 0, 0 | Q, L | Q, L |
| Q | Q er spørsmålet | – | – | return true |

Hadde vi fortsatt, ville L blitt hoppet over, fordi den allerede er inferred. Til sammen er det 9 premisser og 9 nedtellinger. Count-tabellen, agendaen og AND-OR-grafen i Fig. 7.15–7.16 står i boka, men L5 viser ikke denne pseudokoden. Den sporingen er altså kun bok.

### Backward chaining på samme KB

1. Q krever P (P ⇒ Q).
2. P krever L og M (L ∧ M ⇒ P).
3. L via A ∧ P ⇒ L: A er fakta, men P ligger allerede på stakken. Det er en løkke, så regelen droppes.
4. L via A ∧ B ⇒ L: begge er fakta, så L er bevist.
5. M via B ∧ L ⇒ M: B er fakta. L bevises på nytt på samme måte (løkke via P, så A ∧ B), siden bokas enkle BC ikke husker tidligere resultater. M er bevist.
6. Dermed holder P, og så Q.

### Eksamen 2018 P6, «bunnies» (10 p)

Fire kaniner er brune eller hvite. Bi betyr «kanin i er brun».
1. Kanin 1: «En av kanin 2 og 3 er brun og den andre hvit» blir (B2 ∧ ¬B3) ∨ (¬B2 ∧ B3).
2. Kanin 2: (B3 ∧ ¬B4) ∨ (¬B3 ∧ B4).
3. Kanin 3: B4.
4. Kanin 4: ¬(B1 ∧ B4).

Spørsmålet er om kanin 1 er hvit, altså ¬B1. Med refutation legger du til det negerte målet B1.

CNF av setning 1: distribusjon gir (B2 ∨ ¬B2) ∧ (B2 ∨ B3) ∧ (¬B3 ∨ ¬B2) ∧ (¬B3 ∨ B3). Når tautologiene strykes, står B2 ∨ B3 og ¬B2 ∨ ¬B3 igjen. Setning 2 gir på samme måte B3 ∨ B4 og ¬B3 ∨ ¬B4, og setning 4 gir ¬B1 ∨ ¬B4 ved De Morgan.

| Nr | Klausul |
|---|---|
| 1 | B2 ∨ B3 |
| 2 | ¬B2 ∨ ¬B3 |
| 3 | B3 ∨ B4 |
| 4 | ¬B3 ∨ ¬B4 |
| 5 | B4 |
| 6 | ¬B1 ∨ ¬B4 |
| 7 | B1 (negert mål) |

5 og 6 gir 8: ¬B1. 8 og 7 gir □. Altså er KB ⊨ ¬B1, og kanin 1 er hvit. Klausul 1–4 trengs ikke, og fasiten sier det samme: «you reach a contradiction immediately». Den eneste modellen av KB er B1 = F, B2 = T, B3 = F, B4 = T.

## Eksamensfeller

- **XOR oversatt som ∨.** 2018 P6-fasiten trekker poeng hvis «one is brown and one is white» blir B2 ∨ B3. Setningen sier at nøyaktig én er brun.
- **⇒ og ⊨ blandes.** ⇒ står inne i en setning (én modell). ⊨ er en påstand om alle modeller.
- **To komplementære par kuttes samtidig.** P ∨ Q ∨ R mot ¬P ∨ ¬Q gir *ikke* R. Kutt ett par om gangen. Da får du Q ∨ ¬Q ∨ R eller P ∨ ¬P ∨ R, som er tautologier og ikke hjelper.
- **De Morgan uten å bytte konnektiv.** ¬(α ∨ β) blir ¬α ∧ ¬β, ikke ¬α ∨ ¬β.
- **Distribusjon før negasjonen er flyttet inn.** Følg rekkefølgen ⇔, ⇒, ¬, distribusjon.
- **Glemt å negere målet** i resolution refutation, eller å legge til målet selv i stedet for negasjonen.
- **Bevis uten regelnavn og linjenumre.** 2023 3.1 krever begge i hvert steg, og at Modus tollens brukes.
- **Feil om metning.** Metning uten □ betyr KB ⊭ α. Det betyr ikke KB ⊨ ¬α.
- **Horn-telling.** En klausul med to positive literaler (som ¬A ∨ B ∨ C) er ikke Horn. En goal clause (¬A ∨ ¬B) er Horn, men ikke definite.

## Koblinger til andre kapitler

- **E11 (7.1–7.4):** modeller, entailment og model checking med sannhetstabell. E12 erstatter de 128 radene med bevis.
- **E13 (7.6):** refutation gjør KB ⊨ α om til spørsmålet «er KB ∧ ¬α satisfiable?», som DPLL og WalkSAT svarer på.
- **E15 (9.3–9.4):** forward og backward chaining i FOL, med unification og GMP.
- **E16 (9.5):** resolution i FOL. CNF får flere steg der (standardisering, Skolemisering, ∀ ut).
- **E18 (11.2):** backward search (regresjon) i planlegging går bakover fra målet, slik backward chaining gjør.

## Ikke pensum her

- 7.7 Agents based on propositional logic. Den er unntatt i Canvas Syllabus og nevnes ikke i videoen.
- 9.5.4 Completeness of resolution (Herbrand-beviset). Videoen tar bare idéen (ground resolution theorem). Kilde: Syllabus-unntakene.
- 11.2.3 Planning as Boolean satisfiability (SATPlan). Kilde: Syllabus og L11 s. 14.
- Det som er merket «not curriculum» i L5: Lean, Z3, Prolog og NL-demoene. Kilde: PENSUMOVERSIKT.

Kun bok, men pensum (ikke forelest): monotonicity, factoring og count/agenda-pseudokoden i Fig. 7.15–7.16.

Formelark: i 2025 lå de 12 ekvivalensreglene bakerst i oppgavesettet. Canvas sier «Examination aids: D. None.», og om du får formelark i 2026 er ikke bekreftet (EKSAMENSPLAN). Pugg reglene.

## Øv selv

1. **A4 2.1:** gjør om til CNF.
   - a) A ∨ (B ∧ C ∧ ¬D)
   - b) ¬(A ⇒ ¬B) ∧ ¬(C ⇒ ¬D)
   - c) ¬((A ⇒ B) ∧ (C ⇒ D))
   - d) (A ∧ B) ∨ (C ⇒ D)
   - e) A ⇔ (B ⇒ ¬C)
2. **A4 2.2:** «If the weather is both Sunny and Warm, then I Enjoy. If the weather is both Warm and Nice (not Raining), then I pick up Berries. If it is Raining, then I won't pick up Berries. If it is Raining, then I will get wet. It is Warm. It is Raining. It is Sunny.» Bygg KB, og bevis eller motbevis med resolution: (Q1) I won't pick up Berries, (Q2) I will Enjoy, (Q3) I will get wet.
3. **Eksamen 2021 1.1:** vis med sannhetstabell at ¬A ⇒ (B ⇒ C) og B ⇒ (A ∨ C) er ekvivalente. Er ¬A ⇒ (B ⇒ C) valid eller satisfiable?
4. **Eksamen 2021 1.2:** bevis med ekvivalensregler (ikke sannhetstabell) at A ⇔ B ≡ A ∨ B ⇒ A ∧ B.
5. **Eksamen 2023 3.1 (10 p):** boka er gjemt. Hintene er:
   1. Er huset rødt, er boka ikke på kjøkkenet.
   2. Står det et epletre i forhagen, er boka på kjøkkenet.
   3. Huset er rødt.
   4. Treet i forhagen er et epletre, eller boka er under blomsterpotta.
   5. Er treet i bakhagen et plommetre, er boka i garasjen.

   Oversett til PL og finn boka med navngitte regler. Løsningen *må* bruke Modus tollens.
6. **Eksamen 2015 Problem 3, del 3–4 (2 + 2 p):** KB er A ⇒ (B ∨ C), ¬A ⇒ (B ∨ C), ¬C og (B ∨ D) ⇒ E.
   - Kan setningene skrives som Horn-klausuler?
   - Gjør dem om til CNF som en mengde klausuler.
   - Ekstra (ikke i oppgaven): følger B? Følger E?
7. **Eksamen 2024 Q14 (6 marks):** KB = (P ∨ Q) ∧ (S ∧ P). Hvilken er sann? Q ∧ (P ⇒ S) · S ∧ P ∧ Q · P ⇒ Q ∨ (S ∧ P) · P ⇒ S ∧ Q.

## Fasit

**Quizene i videoen.**
- Hvilken er ikke ekvivalent med P ⇒ Q? **C: Q ⇒ P** (den omvendte). ¬P ∨ Q er implication elimination, ¬Q ⇒ ¬P er contraposition, og ¬(P ∧ ¬Q) er De Morgan pluss double negation.
- Eksamen 2021 1.1: ¬A ⇒ (B ⇒ C) er **B: satisfiable, men ikke valid**. Moteksempelet er A = F, B = T, C = F, som gir T ⇒ F = F.
- Eksamen 2023 3.1, A ⇒ K og ¬K: **B: Modus tollens gir ¬A.**
- A ∨ B ∨ C mot ¬B ∨ C: **A ∨ C** (factoring fjerner den doble C).
- Eksamen 2024 Q15: **A: (¬U ∨ T ∨ ¬S); (¬U ∨ T ∨ P); ¬T; ¬Q; (¬P ∨ Q ∨ S ∨ T)**, som i fasiten.
- Hvilken er en definite clause? **A: ¬A ∨ ¬B ∨ C** ≡ A ∧ B ⇒ C. ¬A ∨ ¬B er en goal clause, mens A ∨ B og ¬B₁,₁ ∨ P₁,₂ ∨ P₂,₁ ikke er Horn.

**Øv selv.** Svarene på 1 og 2 er egne løsninger, kontrollert i `verifiser.py`, siden A4 ikke har publisert fasit. Svarene på 3–7 følger eksamensfasitene.
1. CNF:
   - a) (A ∨ B) ∧ (A ∨ C) ∧ (A ∨ ¬D)
   - b) A ∧ B ∧ C ∧ D
   - c) (A ∨ C) ∧ (A ∨ ¬D) ∧ (¬B ∨ C) ∧ (¬B ∨ ¬D)
   - d) (A ∨ ¬C ∨ D) ∧ (B ∨ ¬C ∨ D)
   - e) (¬A ∨ ¬B ∨ ¬C) ∧ (A ∨ B) ∧ (A ∨ C)
2. KB i CNF er ¬Sunny ∨ ¬Warm ∨ Enjoy, ¬Warm ∨ Raining ∨ Berries, ¬Raining ∨ ¬Berries, ¬Raining ∨ Wet, Warm, Raining og Sunny. Alle tre påstandene kan bevises.
   - Q1: Berries (negert mål) mot ¬Raining ∨ ¬Berries gir ¬Raining. Mot Raining gir det □.
   - Q2: ¬Enjoy mot ¬Sunny ∨ ¬Warm ∨ Enjoy gir ¬Sunny ∨ ¬Warm. Mot Sunny gir det ¬Warm, og mot Warm □.
   - Q3: ¬Wet mot ¬Raining ∨ Wet gir ¬Raining. Mot Raining gir det □.
3. Kolonnene er like i alle åtte radene, så setningene er ekvivalente. ¬A ⇒ (B ⇒ C) er satisfiable, men ikke valid (moteksempelet over). Fasiten: «Logical equivalence: truth table. Satisfiable.»
4. Fasitens rekke:
   1. A ⇔ B blir (A ⇒ B) ∧ (B ⇒ A) ved biconditional elimination.
   2. Det blir (¬A ∨ B) ∧ (¬B ∨ A) ved implication elimination.
   3. Distribusjon gir (¬A ∧ (¬B ∨ A)) ∨ (B ∧ (¬B ∨ A)).
   4. Distribusjon igjen gir (¬A ∧ ¬B) ∨ (¬A ∧ A) ∨ (B ∧ ¬B) ∨ (B ∧ A).
   5. De to midterste leddene er alltid usanne og kan strykes. Da står (¬A ∧ ¬B) ∨ (B ∧ A).
   6. De Morgan gir ¬(A ∨ B) ∨ (B ∧ A).
   7. Implication elimination baklengs gir (A ∨ B) ⇒ (B ∧ A).

   Fasiten skriver «(¬A ∨ A)» i det andre leddet i steg 4. Det skal være (¬A ∧ A), ellers kunne leddet ikke strykes.
5. Symbolene er R (huset er rødt), K (kjøkkenet), A (epletre i forhagen), F (blomsterpotta), P (plommetre i bakhagen) og G (garasjen). Hintene blir 1: R ⇒ ¬K, 2: A ⇒ K, 3: R, 4: A ∨ F, 5: P ⇒ G.
   - Modus Ponens på 1 og 3 gir 6: ¬K.
   - Modus tollens på 2 og 6 gir 7: ¬A.
   - Disjunctive syllogism på 4 og 7 gir 8: F.

   Boka er under blomsterpotta. Hint 5 brukes ikke, og verken G eller ¬G følger.
6. Si begge deler. Setning for setning: nei, som i fasiten. Første setning har to literaler på høyresiden, så CNF-en får to positive literaler. CNF: ¬A ∨ B ∨ C, A ∨ B ∨ C, ¬C, ¬B ∨ E, ¬D ∨ E. Hele KB: ja, den er ekvivalent med Horn-mengden {B, ¬C, E}. De to første resolveres på A til B ∨ C, og med ¬C gir det B. B mot ¬B ∨ E gir E, og da er ¬D ∨ E overflødig. Begge har de samme fire modellene (A og D fri). Ekstra: både B og E følger.
7. **P ⇒ Q ∨ (S ∧ P)**, som i fasiten. KB gir S og P i alle sine modeller, så S ∧ P er sann og hele implikasjonen holder. De tre andre krever Q, og Q er usann i en av KB-modellene (P = T, S = T, Q = F).
