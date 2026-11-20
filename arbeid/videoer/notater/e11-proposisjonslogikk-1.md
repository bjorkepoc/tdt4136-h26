# E11 – Logikk 1: modeller, entailment og sannhetstabeller

> Pensum: Global 7.1–7.4 (US 7.1–7.4, samme nummer) · Forelesning: L5 (repetisjon i L13) · Øving: Ø4 (A4 del 1, oppgave 1.1) · Eksamensvekt: ~23 % (logikk samlet, kap. 7–9)
> Video: `videoer/e11-proposisjonslogikk-1/out/tdt4136-e11-proposisjonslogikk-1.mp4` (15:25)

## Kapitler i videoen

- 0:00 – Intro
- 0:46 – Kunnskapsbasert agent
- 2:15 – Wumpus-hula
- 4:08 – Modeller og entailment
- 7:47 – Proposisjonslogikk
- 10:23 – Sannhetstabellen som algoritme
- 12:37 – Eksamen 2022, oppgave 5
- 14:23 – Koblinger og oppsummering

## Kjerneideer

**Knowledge base (KB) og TELL/ASK (7.1, L5).** En KB er en mengde setninger i et *knowledge representation language*. Agenten regner dem som sanne. TELL legger til en setning. ASK spør om en setning følger av KB. Svaret fra ASK er bare det som følger, ingenting gjettes:

| KB = {Rain} | ASK svarer | fordi |
|---|---|---|
| Rain ∨ Wind | ja | følger i alle modeller der Rain er sann |
| ¬Rain | nei | er usann i alle KB-modellene |
| Wind | vet ikke | sann i én KB-modell, usann i den andre |

«Vet ikke» betyr KB ⊭ α og KB ⊭ ¬α. Det er ikke det samme som «nei».

**KB-AGENT og deklarativ vs. prosedyral (7.1).** Agenten gjør tre ting per tidssteg: TELL hva den sanser, ASK hva den bør gjøre, og TELL hvilken handling den valgte. All resonnering skjer inne i ASK. *Declarative*: du forteller agenten hvordan verden er og lar inferensen finne handlingen. *Procedural*: du koder oppførselen direkte. Boka sier at gode agenter blander begge.

**Wumpus world (7.2, bare i boka, men pensum).** PEAS:
- **P:** +1000 for å klatre ut med gullet, −1000 for å falle i en grop eller bli spist, −1 per handling, −10 for å bruke pila.
- **E:** 4×4 ruter. Start i [1,1] med retning øst. Gull og wumpus ligger tilfeldig utenom start, og hver rute utenom start har grop med sannsynlighet 0,2.
- **A:** Forward, TurnLeft, TurnRight, Grab, Shoot (én pil), Climb (bare fra [1,1]).
- **S:** fem bit: Stench (naborute til wumpus), Breeze (naborute til grop), Glitter (gullruta), Bump, Scream.

Miljøet er deterministic, discrete, static, single-agent og sequential, men *partially observable*. Derfor må agenten resonnere.

**Syntax og semantics (7.3).** Syntaks sier hvilke setninger som er velformede: «x + y = 4» er en setning, «x4y+ =» er det ikke. Semantikk gir hver setning en sannhetsverdi i hver mulig verden. I standard logikk er en setning enten sann eller usann i hver verden.

**Model, satisfies og M(α) (7.3, L5).** En *model* er en mulig verden. I proposisjonslogikk er den en tilordning av T eller F til hvert symbol, så n symboler gir 2ⁿ modeller. Er α sann i m, sier vi at *m satisfies α* (m er en modell av α). M(α) er mengden av alle modeller av α. Med Rain og Wind er M(Rain) to modeller og M(Rain ∨ Wind) tre.

**Entailment (7.3).** α ⊨ β (α *entails* β) betyr at β er sann i hver modell der α er sann:

  α ⊨ β  hvis og bare hvis  M(α) ⊆ M(β).

- En sterkere setning sier mer og har *færre* modeller. Derfor står den på venstre side: den lille mengden entails den store.
- Bokas eksempel: x = 0 ⊨ xy = 0.
- ⊨ er ikke en del av språket. Det er en påstand *om* to setninger, ikke en setning.

**Wumpus som modellmengder (fig. 7.5).** Agenten har vært i [1,1] (ingen breeze) og [2,1] (breeze). Den lurer på grop i [1,2], [2,2] og [3,1], som gir 2³ = 8 modeller.
- ¬B₁,₁ fjerner alle modeller med grop i [1,2], og fire står igjen.
- B₂,₁ fjerner modellen uten groper, og tre står igjen. Det er M(KB).
- α₁ = ¬P₁,₂ har 4 modeller, og alle 3 KB-modellene ligger inni. Altså KB ⊨ α₁.
- α₂ = ¬P₂,₂ har også 4 modeller, men 2 KB-modeller ligger utenfor. Altså KB ⊭ α₂. Agenten vet ikke om det er grop i [2,2].

**Model checking, sound og complete (7.3, L5).** *Model checking* er å telle opp alle modeller og sjekke at α er sann i hver modell der KB er sann. KB ⊢ᵢ α betyr at algoritmen i utleder α. Boka bruker en høystakk og en nål: alle konsekvensene av KB er høystakken, og α er nåla. Entailment er at nåla ligger i høystakken. Inferens er å finne den.
- *Sound* (truth-preserving): algoritmen utleder bare setninger som er entailed. Den dikter ikke opp nåler.
- *Complete*: algoritmen kan utlede hver setning som er entailed. Den finner hver nål.
- Model checking er både sound og complete når modellrommet er endelig.

**Grounding (7.3).** Hvordan vet vi at KB stemmer med verden? Sensorene lager setninger. Kjenner agenten lukt, lagrer den en setning om lukt. Generelle regler, som «trekk ved siden av groper», kommer fra læring, og læring kan ta feil.

**Proposisjonslogikk, syntaks (7.4.1, L5).**
- En *atomic sentence* er ett symbol, som P₁,₂ («grop i [1,2]»), eller True eller False. Indeksene er en del av navnet.
- *Complex sentences* bygges med fem konnektiver: ¬ (not), ∧ (and), ∨ (or), ⇒ (implies), ⇔ (if and only if).
- Grammatikken står i BNF (fig. 7.7).
- Presedens, sterkest først: ¬, ∧, ∨, ⇒, ⇔. Så ¬A ∧ B betyr (¬A) ∧ B, ikke ¬(A ∧ B).

**Semantikk (7.4.2, fig. 7.8).** Sannhetstabellen for de fem konnektivene:

| P | Q | ¬P | P ∧ Q | P ∨ Q | P ⇒ Q | P ⇔ Q |
|---|---|---|---|---|---|---|
| F | F | T | F | F | **T** | T |
| F | T | T | F | T | **T** | F |
| T | F | F | F | T | **F** | F |
| T | T | F | T | T | T | T |

- **⇒** er usann i bare én rad: P sann og Q usann. Er premisset usant, er hele setningen sann («5 er et partall ⇒ Sam er smart» er sann uansett Sam). ⇒ krever ingen årsakssammenheng.
- Videoen bruker et løfte som bilde (egen illustrasjon, ikke fra boka): «Hvis det regner, tar jeg paraply.» Løftet brytes bare hvis det regner og jeg ikke har paraply. Uten regn er det ikke brutt.
- **⇔** er sann når begge sider har samme verdi, og P ⇔ Q ≡ (P ⇒ Q) ∧ (Q ⇒ P). Wumpus-eksempelet B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁) betyr at grop gir trekk, og at trekk krever grop.

**⊨ og ⇒ henger sammen (L5, A4-hintet; detaljer i 7.5 og E12).** α ⇒ β er en setning og er sann eller usann i én modell. α ⊨ β er en påstand om alle modeller. Koblingen er at α ⊨ β nøyaktig når α ⇒ β er sann i hver modell. Derfor sier A4: bytt ⊨ med ⇒ og sjekk at kolonnen er T i hver rad. Like kolonner i alle rader betyr *logical equivalence*, altså entailment begge veier.

## Algoritmer og håndsporing

### KB-AGENT (fig. 7.1)

```
function KB-AGENT(percept) returns an action
  persistent: KB, t ← 0
  TELL(KB, MAKE-PERCEPT-SENTENCE(percept, t))
  action ← ASK(KB, MAKE-ACTION-QUERY(t))
  TELL(KB, MAKE-ACTION-SENTENCE(action, t))
  t ← t + 1
  return action
```

### Agentens første trekk i hula (fig. 7.3–7.4)

| Steg | Rute | Persept | Slutning |
|---|---|---|---|
| 1 | [1,1] | ingenting | [1,2] og [2,1] er OK |
| 2 | [2,1] | Breeze | grop i [2,2] eller [3,1], eller begge. Eneste trygge ubesøkte rute er [1,2]. |
| 3 | [1,2] | Stench, ingen Breeze | Wumpus ikke i [2,2] (da hadde det luktet i [2,1]) og ikke i [1,1], altså i [1,3]. Ingen breeze gir ¬P₂,₂, så gropa er i [3,1]. |
| 4 | [2,2] → [2,3] | Glitter i [2,3] | [2,2] er OK, og gullet ligger i [2,3] |

### Fig. 7.5: åtte modeller for (P₁,₂, P₂,₂, P₃,₁)

| P₁,₂ | P₂,₂ | P₃,₁ | ¬B₁,₁ | B₂,₁ | KB | α₁ = ¬P₁,₂ | α₂ = ¬P₂,₂ |
|---|---|---|---|---|---|---|---|
| F | F | F | T | F | F | T | T |
| F | F | T | T | T | **T** | T | T |
| F | T | F | T | T | **T** | T | F |
| F | T | T | T | T | **T** | T | F |
| T | F | F | F | F | F | F | T |
| T | F | T | F | T | F | F | T |
| T | T | F | F | T | F | F | F |
| T | T | T | F | T | F | F | F |

Antall modeller går 8 → 4 → 3. Alle KB-radene har α₁ = T, så KB ⊨ α₁. To KB-rader har α₂ = F, så KB ⊭ α₂.

### Wumpus-KB i proposisjonslogikk (7.4.3, bare i boka)

- R₁: ¬P₁,₁
- R₂: B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)
- R₃: B₂,₁ ⇔ (P₁,₁ ∨ P₂,₂ ∨ P₃,₁)
- R₄: ¬B₁,₁
- R₅: B₂,₁

Sju symboler (B₁,₁, B₂,₁, P₁,₁, P₁,₂, P₂,₁, P₂,₂, P₃,₁) gir 2⁷ = 128 rader. Fem R-er gir ikke 2⁵.

### TT-ENTAILS (fig. 7.10, 7.4.4, bare i boka)

```
function TT-ENTAILS?(KB, α)
  symbols ← proposition symbols in KB and α
  return TT-CHECK-ALL(KB, α, symbols, { })

function TT-CHECK-ALL(KB, α, symbols, model)
  if EMPTY?(symbols) then
    if PL-TRUE?(KB, model) then return PL-TRUE?(α, model)
    else return true            // KB usann: raden teller ikke
  P ← FIRST(symbols); rest ← REST(symbols)
  return TT-CHECK-ALL(KB, α, rest, model ∪ {P = true})
     and TT-CHECK-ALL(KB, α, rest, model ∪ {P = false})
```

Algoritmen er en rekursiv opptelling dybde først, som backtracking i CSP.

| Egenskap | TT-ENTAILS |
|---|---|
| Sound | ja, følger definisjonen av ⊨ direkte |
| Complete | ja, den sjekker alle modellene, og de er endelig mange, så den blir alltid ferdig (7.4.4) |
| Tid | O(2ⁿ) for n symboler (20 symboler gir 1 048 576 rader, 100 symboler gir et tall med 31 sifre) |
| Minne | O(n), fordi den går dybde først |

### Fig. 7.9: KB ⊨ ¬P₁,₂ rad for rad

Tabellen er listet i fig. 7.9-rekkefølge (F før T, P₃,₁ varierer raskest). Algoritmen prøver true før false, men utfallet er det samme. I 125 av 128 rader er minst én av R₁–R₅ usann. KB er sann i bare tre rader:

| Rad | B₁,₁ | B₂,₁ | P₁,₁ | P₁,₂ | P₂,₁ | P₂,₂ | P₃,₁ | R₁–R₅ | KB | α₁ = ¬P₁,₂ |
|---|---|---|---|---|---|---|---|---|---|---|
| 34 | F | T | F | F | F | F | T | alle T | **T** | **T** |
| 35 | F | T | F | F | F | T | F | alle T | **T** | **T** |
| 36 | F | T | F | F | F | T | T | alle T | **T** | **T** |

- α₁ er sann i alle tre KB-radene, så KB ⊨ ¬P₁,₂.
- P₂,₂ er sann i to av de tre, så verken KB ⊨ P₂,₂ eller KB ⊨ ¬P₂,₂.

### A4 1.1 a) med ⇒-kolonnen (som i videoen)

Påstanden er ¬A ∧ ¬B ⊨ ¬B.

| A | B | ¬A ∧ ¬B | ¬B | (¬A ∧ ¬B) ⇒ ¬B |
|---|---|---|---|---|
| F | F | T | T | T |
| F | T | F | F | T |
| T | F | F | T | T |
| T | T | F | F | T |

Kolonnen er T i hver rad, så påstanden er sann. Bare rad 1 har venstresiden sann, og der er ¬B også sann.

### Eksamen 2022 oppgave 5 i fasitformat (5.1–5.2; poeng står ikke i kilden)

Oppgaven: Tre bokser, og gull i nøyaktig én. Boks 1 sier «gullet er ikke her», boks 2 sier «gullet er ikke her», og boks 3 sier «gullet er i boks 2». Bare én beskjed er sann.

1. **Symboler.** Bᵢ betyr at gullet er i boks i. Mᵢ er beskjed i: M₁ = ¬B₁, M₂ = ¬B₂, M₃ = B₂.
2. **S₁, nøyaktig én boks har gull:** (B₁ ∧ ¬B₂ ∧ ¬B₃) ∨ (¬B₁ ∧ B₂ ∧ ¬B₃) ∨ (¬B₁ ∧ ¬B₂ ∧ B₃).
3. **S₂, nøyaktig én beskjed er sann:** (M₁ ∧ ¬M₂ ∧ ¬M₃) ∨ (¬M₁ ∧ M₂ ∧ ¬M₃) ∨ (¬M₁ ∧ ¬M₂ ∧ M₃). Sett inn beskjedene: (¬B₁ ∧ B₂ ∧ ¬B₂) ∨ (B₁ ∧ ¬B₂) ∨ (B₁ ∧ B₂). Det forenkles til B₁, fordi første ledd er en motsigelse.
4. **Tabell, i fasitens rekkefølge (T først):**

| B₁ | B₂ | B₃ | S₁ | S₂ | KB = S₁ ∧ S₂ |
|---|---|---|---|---|---|
| T | T | T | F | T | F |
| T | T | F | F | T | F |
| T | F | T | F | T | F |
| **T** | **F** | **F** | **T** | **T** | **T** |
| F | T | T | F | F | F |
| F | T | F | T | F | F |
| F | F | T | T | F | F |
| F | F | F | F | F | F |

5. **Konklusjon.** KB er sann i én rad, og der er B₁ sann. Altså KB ⊨ B₁: gullet er i boks 1. Kontroll: M₁ = F, M₂ = T, M₃ = F, så bare beskjed 2 er sann.

Fasiten forklarer symbolene, skriver setningene, viser hele tabellen og peker på raden. Gjør de samme fire tingene i ditt eget svar.

## Eksamensfeller

1. **⊨ er ikke ⇒.** ⇒ er en konnektiv inne i en setning og er sann eller usann i én modell. ⊨ er en påstand om alle modeller. Spør oppgaven om entailment, er det ikke nok å regne ut α ⇒ β i én rad. Kolonnen må være T i *hver* rad. 2016 oppgave 2 ba om nettopp denne forskjellen.
2. **Retningen.** KB ⊨ α betyr M(KB) ⊆ M(α). Den lille mengden står til venstre. Har α flere modeller enn KB og de dekker KB-modellene, gjelder KB ⊨ α, ikke α ⊨ KB.
3. **«Usant premiss gir usann implikasjon».** Feil: F ⇒ hva som helst er T. P ⇒ Q er usann bare i raden P = T, Q = F. ⇒ krever heller ingen årsakssammenheng.
4. **Ekvivalenstabell vs. entailmenttabell.** For α ⊨ β sjekker du bare radene der α er T, og der må β også være T. For α ≡ β må kolonnene være like i *alle* rader. Ikke krev like kolonner når oppgaven spør om ⊨.
5. **Presedens.** ¬A ∧ B er (¬A) ∧ B. Sett parenteser når du er i tvil.
6. **«Vet ikke» er ikke «nei».** KB ⊭ P₂,₂ betyr ikke at KB ⊨ ¬P₂,₂. I fig. 7.5 holder ingen av dem.
7. **Feil antall rader.** Tell symbolene, ikke setningene. Wumpus-KB-en har 5 setninger, men 7 symboler og 128 rader.
8. **2022-fasitens 5.3 tar feil om beskjedene.** Den sier at M₁ er den eneste sanne beskjeden. I KB-modellen (B₁ = T, B₂ = B₃ = F) er M₁ = ¬B₁ = F og M₂ = ¬B₂ = T. Den sanne beskjeden er M₂. Ikke kopier den setningen.
9. **Halv tabell.** Fasitene viser hele tabellen med kolonner for delsetningene og peker eksplisitt på KB-radene. Gjør det samme, ikke skriv bare konklusjonen.

## Koblinger til andre kapitler

- → kap. 7.5 / E12: inference rules, validity og satisfiability, deduction theorem (α ⊨ β hvis og bare hvis α ⇒ β er valid), CNF, resolution og forward/backward chaining. Refutation i 2022 5.3 hører hjemme der.
- → kap. 7.6 / E13: DPLL og WalkSAT er raskere model checking enn TT-ENTAILS sine 2ⁿ rader.
- → kap. 8 / E14: førsteordens logikk. PL må lage ett symbol per rute (P₁,₂, P₂,₂, …), mens FOL kan si «alle ruter ved siden av en grop har trekk» med én setning.
- → kap. 2 / E01: PEAS og miljøegenskapene som wumpus-beskrivelsen bruker.
- → kap. 4 / E05: M(KB), alle verdenene agenten fortsatt kan være i, minner om en belief state.
- → kap. 5 (US kap. 6) / E07: TT-CHECK-ALL tilordner ett symbol om gangen og går dybde først, som backtracking i CSP.

## Ikke pensum her

- 7.7 Agents Based on Propositional Logic (7.7.1–7.7.4): UT (PENSUMOVERSIKT, Canvas-unntak).
- Lean-bevisene i L5 (s. 17 og 20): merket «not curriculum» i slidene.
- z3-sjekken for unsatisfiability i L5 (s. 21): merket «not curriculum».
- «Natural language demo» og agentkoden i L5 (s. 6): merket «not curriculum».
- Horn clauses' betydning og Prolog i L5 (s. 41): merket «not curriculum», og Horn-klausuler hører uansett til E12.
- Fuzzy logic (grader av sannhet): bare en fotnote i 7.3 som peker til kap. 13. Ikke forelest (PENSUMOVERSIKT-forelesninger).

## Øv selv

1. Avgjør med full sannhetstabell om påstanden holder. Bruk A4-hintet og legg til en kolonne der ⊨ er byttet med ⇒. Gi en motmodell hvis påstanden ikke holder. (A4 oppgave 1.1 b, d, e)
   - (b) ¬A ∨ ¬B ⊨ ¬B
   - (d) A ⇒ B ⊨ A ⇔ B
   - (e) (A ⇒ B) ⇔ C ⊨ A ∨ ¬B ∨ C
2. Er setningen satisfiable? Svar med sannhetstabell. (A4 oppgave 1.1 f og g)
   - (f) (¬A ⇒ ¬B) ∧ (A ∧ ¬B)
   - (g) (¬A ⇔ ¬B) ∧ (A ∧ ¬B)
3. Vis med sannhetstabell at ¬a ⇒ (b ⇒ c) og b ⇒ (a ∨ c) er logisk ekvivalente. Er ¬a ⇒ (b ⇒ c) valid eller satisfiable? (Eksamen 2021 oppgave 1.1, del av Logic 25 p)
4. Hva er forskjellen på implication og entailment i proposisjonslogikk? Svar på under en halv side. (Eksamen 2016 oppgave 2, del av en 4 p-deloppgave)
5. Agenten har vært i [1,1] (ingen breeze) og [2,1] (breeze). Bruk de åtte modellene fra fig. 7.5 og avgjør om KB ⊨ P₂,₂ ∨ P₃,₁, KB ⊨ P₃,₁ og KB ⊨ ¬P₃,₁. (Egen oppgave)
6. I gulloppgaven: Du vil bruke proof by refutation. Hvordan definerer du KB og spørringen, og hvilken setning skal være unsatisfiable? Sjekk svaret mot tabellen over. (Eksamen 2022 oppgave 5.3, poeng står ikke i kilden; metoden kommer i E12)

## Fasit

**Quizene i videoen.**
- q1, KB = {Rain}, ASK(KB, Rain ∧ Wind): **C, «I don't know».** Rain er kjent, men Wind er sann i én KB-modell og usann i den andre.
- q2, stench men ingen breeze i [1,1]: **A, [1,2] og [2,1].** Ingen breeze utelukker groper i begge naborutene. Lukten sier noe om wumpusen, ikke om groper.
- q3, M(KB) = {m₁, m₂} og M(α) = {m₁, m₂, m₃}: **A, KB ⊨ α.** α ⊭ KB, fordi m₃ gjør α sann og KB usann.
- q4, P = F og Q = T: **B, Q ⇒ P er usann.** Sant premiss og usann konklusjon er den eneste raden som bryter.
- q5, vis α ⊨ β med tabell: **A, radene der α er T.** Der må β også være T. Like kolonner i alle rader er ekvivalens.

**Øv selv 1** (A4 1.1, egen fasit kontrollert i `verifiser.py`).
- (a) fra videoen: **sann.**
- (b) **Usann.** Motmodell A = F, B = T: ¬A ∨ ¬B = T, men ¬B = F.
- (c) ¬A ∧ B ⊨ A ∨ B: **sann.** Eneste rad med venstresiden sann er A = F, B = T, og der er A ∨ B = T.
- (d) **Usann.** Motmodell A = F, B = T: A ⇒ B = T, men A ⇔ B = F.
- (e) **Sann.** Høyresiden er usann bare når A = F, B = T og C = F. Der er A ⇒ B = T og C = F, så venstresiden er F.

**Øv selv 2.**
- (f) **Satisfiable** med A = T, B = F: ¬A ⇒ ¬B = F ⇒ T = T, og A ∧ ¬B = T.
- (g) **Unsatisfiable.** A ∧ ¬B krever A = T og B = F, og da er ¬A ⇔ ¬B = F ⇔ T = F.

**Øv selv 3.** Kolonnene er like i alle 8 rader, så setningene er ekvivalente. Begge er usanne bare i a = F, b = T, c = F. ¬a ⇒ (b ⇒ c) er derfor **satisfiable, men ikke valid**, slik 2021-fasiten sier.

**Øv selv 4.**
- α ⇒ β er en setning i språket med en sannhetsverdi i hver modell.
- α ⊨ β er en påstand om setningene, ikke en del av språket. Den sier at β er sann i hver modell der α er sann, altså M(α) ⊆ M(β).
- Koblingen er at α ⊨ β holder nøyaktig når α ⇒ β er sann i alle modeller (valid).

**Øv selv 5.**
- **KB ⊨ P₂,₂ ∨ P₃,₁: ja.** Alle tre KB-modellene har grop i [2,2] eller [3,1], fordi B₂,₁ krever det.
- **KB ⊭ P₃,₁:** modellen (F, T, F) har ingen grop i [3,1].
- **KB ⊭ ¬P₃,₁:** to KB-modeller har grop der.

**Øv selv 6.** KB = S₁ ∧ S₂ (i CNF hvis du skal bruke resolution), og spørringen er α = B₁. Refutation viser at KB ∧ ¬B₁ er **unsatisfiable**. I tabellen er den eneste raden med KB = T også raden med B₁ = T, så ingen rad gjør KB ∧ ¬B₁ sann.

Fasiten for 2022 sier at spørringen må være M₁, fordi M₁ skal være «den eneste sanne beskjeden». Det er feil: M₂ er den sanne beskjeden. Både B₁ og M₂ (= ¬B₂) er entailed av KB og kan brukes som spørring.
