# E13 – SAT: DPLL og WalkSAT

> Pensum: Global 7.6–7.6.3 (US samme nummer) · Forelesning: ingen (kun bok) · Øving: – · Eksamensvekt: ~23 % (logikk samlet, PL + FOL, deles med E11, E12 og E14–E16). DPLL og WalkSAT er aldri spurt om på eksamenene 2015–2025.
> Video: `videoer/e13-dpll-walksat/out/tdt4136-e13-dpll-walksat.mp4` (11:04)

## Kapitler i videoen

- 0:00 – Intro
- 0:49 – Hvorfor SAT?
- 1:23 – DPLL
- 5:15 – Triksene i ekte løsere
- 5:56 – WalkSAT
- 7:22 – Hvor er de vanskelige problemene?
- 8:32 – Eksamensoppgave
- 9:50 – Koblinger og oppsummering

## Kjerneideer

- **SAT-problemet:** finn en modell for en setning i CNF, eller avgjør at ingen finnes. En SAT-løser er en model checker som slipper å ramse opp alle modellene.
- **Entailment som SAT:** KB ⊨ α hvis og bare hvis KB ∧ ¬α er unsatisfiable (7.5, refutation, se E12). Tilsvarende er α valid hvis og bare hvis ¬α er unsatisfiable. Den samme løseren *finner løsninger* når den svarer ja, og *beviser entailment* når den svarer nei.
- **Hvorfor ikke sannhetstabell:** TT-ENTAILS (7.4.4, E11) sjekker alle 2ⁿ modellene. Med 50 symboler er det 2⁵⁰ = 1 125 899 906 842 624 rader, altså omtrent 13 døgn ved 10⁹ rader i sekundet.
- **To familier:**
  - DPLL er **complete** backtracking over *delvise* modeller. Den kan svare både ja og nei.
  - WalkSAT er **incomplete** local search over *hele* modeller. Den kan bare svare ja.
  - Kort sagt: DPLL kan si nei, WalkSAT kan bare si ja.
- **DPLL har tre forbedringer over TT-ENTAILS:**
  - **Early termination:** en klausul er sann så snart én literal er sann, og usann når alle literalene er usanne. Da kan et helt deltre kuttes før alle symbolene er satt.
  - **Pure symbol heuristic:** et symbol er pure hvis det står med samme fortegn i alle klausulene som *ikke allerede er sanne*. Gjør det sant, eller usant ved negativt fortegn. Det kan aldri gjøre en klausul usann.
  - **Unit clause heuristic:** en unit clause er en klausul der alle literalene unntatt én er usanne. Den siste literalen *må* bli sann. Én tvungen verdi kan skape den neste, og den kjedereaksjonen heter **unit propagation**.
- **Unit propagation og forward chaining:** boka påpeker at unit propagation ligner forward chaining. Består CNF-en bare av definite clauses, gjør DPLL i praksis det samme som forward chaining (E12).
- **Fem triks i ekte løsere (7.6.1, på bokas nivå):**
  - **Component analysis:** klausuler uten felles symboler løses hver for seg (boka viser til Tasmania fra CSP).
  - **Variable and value ordering:** velg for eksempel symbolet med flest forekomster (degree heuristic) i stedet for alfabetisk rekkefølge.
  - **Intelligent backtracking:** hopp rett tilbake til valget som skapte konflikten, og lagre konflikten som en ny, lært klausul.
  - **Random restarts:** start på nytt med andre tilfeldige valg, men behold de lærte klausulene.
  - **Clever indexing:** finn raskt hvilke klausuler et symbol står i, med hvilket fortegn.
- **WalkSAT (7.6.2):**
  1. Start med en tilfeldig modell.
  2. Velg en tilfeldig usann klausul.
  3. Med sannsynlighet p flipper du et tilfeldig symbol i klausulen (random walk). Ellers flipper du symbolet som gir flest sanne klausuler (det grådige steget, som min-conflicts).
  4. Gjenta til alle klausulene er sanne, eller du har brukt max_flips.

  Svaret *failure* er tvetydig: kanskje finnes ingen modell, kanskje trengte søket mer tid. Uten grense stopper WalkSAT aldri på en setning som er unsatisfiable.
- **Landskapet av random SAT (7.6.3):** CNF_k(m, n) er en setning med m klausuler på k literaler over n symboler.
  - **Underconstrained:** få klausuler per symbol, nesten alle setninger har modeller og løsningene er lette å finne.
  - **Overconstrained:** mange klausuler per symbol, og nesten ingen setning har en modell.
  - **Terskelen:** for 3-SAT stuper P(satisfiable) rundt m/n ≈ 4,3 (bokteksten og fig. 7.19). Litteraturnotene oppgir 4,26.
  - **Satisfiability threshold conjecture:** formodningen om at det for hver k ≥ 3 finnes et fast forhold r_k der P(satisfiable) går mot 1 under r_k og mot 0 over når n → ∞. Boka sier at den ikke er bevist, heller ikke for k = 3.
- **De vanskelige problemene ligger ved terskelen:** der er setningene nesten løsbare, så søket må dypt før svaret er klart. Til venstre er en løsning lett å gjette, og til høyre kommer motsigelsen fort. Boka sier at problemene ved 4,3 er omtrent 20 ganger vanskeligere enn ved 3,3. Flere klausuler betyr altså ikke vanskeligere.

## Algoritmer og håndsporing

**DPLL (fig. 7.17, kortform).** Rekkefølgen sann → usann → pure → unit → gjett er hele poenget.

```
DPLL-SATISFIABLE?(s): clauses ← CNF(s); symbols ← symbolene i s; return DPLL(clauses, symbols, {})

DPLL(clauses, symbols, model):
  if alle klausulene er sanne i model then return true            # early termination
  if en klausul er usann i model then return false
  P, value ← FIND-PURE-SYMBOL(symbols, clauses, model)
  if P then return DPLL(clauses, symbols − P, model ∪ {P = value})
  P, value ← FIND-UNIT-CLAUSE(clauses, model)
  if P then return DPLL(clauses, symbols − P, model ∪ {P = value})
  P ← FIRST(symbols); rest ← REST(symbols)
  return DPLL(clauses, rest, model ∪ {P = true}) or DPLL(clauses, rest, model ∪ {P = false})
```

**WALKSAT (fig. 7.18, kortform).**

```
WALKSAT(clauses, p, max_flips):
  model ← tilfeldig true/false for hvert symbol
  for i = 1 to max_flips:
    if model gjør alle klausulene sanne then return model
    clause ← tilfeldig klausul som er usann i model
    med sannsynlighet p: flip et tilfeldig symbol i clause
    ellers: flip symbolet i clause som gir flest sanne klausuler
  return failure
```

| | DPLL | WalkSAT |
|---|---|---|
| Søker i | delvise modeller, dybde-først | hele modeller, lokalt |
| Complete? | ja | nei |
| Kan vise unsatisfiable / bevise KB ⊨ α? | ja | nei |
| Svar | true/false (og en modell ved true) | modell eller failure |
| Passer når | du trenger et sikkert ja/nei | du venter at en modell finnes |

**Konvensjoner i håndsporingene.** De samme konvensjonene brukes i videoen og i `verifiser.py`:

- Symbolene tas alfabetisk, både når DPLL leter etter pure symbols og når den må gjette, og true prøves før false.
- Pure telles bare i klausuler som ikke allerede er sanne. Et symbol som ikke står i noen slik klausul, regnes *ikke* som pure (som i aima-python).
- Finnes flere unit clauses, tas den første i listerekkefølgen.

**Bokas pure-eksempel:** (A ∨ ¬B), (¬B ∨ ¬C), (C ∨ A).

- Fra start står A bare positivt og B bare negativt, så begge er pure. C står med begge fortegn.
- Med B = false er (¬B ∨ ¬C) sann og teller ikke lenger. Da står C bare positivt og er også pure.

**Bokas unit-eksempel:** klausul 2 og 3 over.

- Med B = true er ¬B usann, så (¬B ∨ ¬C) er unit, og C = false.
- Da står A alene igjen i (C ∨ A), så A = true.
- Videoen viser bare klausul 2 og 3. Med B = true er også (A ∨ ¬B) unit.

**Gjennomgangseksempelet:** C1 ¬A ∨ B, C2 ¬A ∨ ¬B, C3 A ∨ C, C4 A ∨ ¬C ∨ B.

Statusene står i rekkefølgen C1–C4: T = sann, F = usann og ? = uavgjort.

| Steg | Regel | Modell etter steget | C1–C4 | Merknad |
|---|---|---|---|---|
| 0 | start | {} | ? ? ? ? | Alle symbolene står med begge fortegn, og ingen klausul er unit. |
| 1 | gjett | A = true | ? ? T T | B står fortsatt med begge fortegn, og C står ikke i noen åpen klausul. Ingen av dem er pure. |
| 2 | unit C1 | A = true, B = true | T F T T | |
| 3 | C2 usann | – | | Konflikt, gå tilbake. C ble aldri satt. |
| 4 | gjett | A = false | T T ? ? | C3 er unit, men pure sjekkes først. |
| 5 | pure | A = false, B = true | T T ? T | B står bare positivt, i C4 (C3 har ingen B). |
| 6 | pure | A = false, B = true, C = true | T T T T | C står bare positivt, i C3. |
| 7 | alle sanne | **A = false, B = true, C = true** | T T T T | Bare ett av valgene var en gjetning. |

DPLL bruker 6 kall og har 1 forgreningspunkt. Sannhetstabellen har 8 komplette modeller. Til sammenligning:

- **Degree** (antall klausuler symbolet står i) er A 4, B 3 og C 2, så degree heuristic hadde også valgt A først.
- Modellen over er den eneste modellen.

**«Din tur» (s10–s11):** (A ∨ B) ∧ (¬A ∨ B) ∧ (¬B ∨ C) ∧ (¬C ∨ ¬A), kalt C1–C4.

| Steg | Regel | Modell | Merknad |
|---|---|---|---|
| 1 | gjett | A = true | |
| 2 | unit C2 | B = true | |
| 3 | unit C3 | C = true | |
| 4 | C4 usann | – | Gå tilbake. |
| 5 | gjett | A = false | B er *ikke* pure, fordi ¬B står i C3. |
| 6 | pure | C = true | C4 er sann, så C står bare positivt, i C3. |
| 7 | pure | B = true | Alle er sanne. **Modellen er A = false, B = true, C = true.** |

Den feile svarvarianten «A = false: unit B, unit C» gir samme modell, men tar unit før pure.

**WalkSAT fra A = B = C = true** på gjennomgangseksempelet:

- Bare C2 er usann, så C2 velges.
- Velger løkka det grådige steget:

  | Flip | C1–C4 | Sanne |
  |---|---|---|
  | A | T T T T | 4 |
  | B | F T T T | 3 |

  Det grådige steget flipper A og er ferdig etter ett flipp, med samme modell som DPLL.
- Med p = 0,5 blir A flippet med sannsynlighet (1 − p) + p · ½ = 0,75.

**Random 3-SAT, egen kjøring:** n = 50, 100 tilfeldige setninger per punkt, DPLL fra `verifiser.py` med fast seed. Tallene er illustrasjon, ikke bokas data.

| m/n | 3 | 3,4 | 3,8 | 4,0 | 4,2 | 4,4 | 4,6 | 4,8 | 5 | 6 | 8 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P(sat) | 1 | 1 | 0,98 | 0,92 | 0,70 | 0,43 | 0,21 | 0,12 | 0,05 | 0,01 | 0 |
| median DPLL-kall | 80 | 178 | 888 | 1 972 | 3 877 | 4 180 | 4 238 | 4 024 | 2 990 | 1 397 | 555 |

- P(sat) krysser 0,5 mellom 4,2 og 4,4, som passer med bokas ≈ 4,3.
- Toppen i median kall er flat fra 4,2 til 4,8, med høyeste punkt ved 4,6. Ved n = 50 er stupet ennå ikke skarpt.

**Eksamensoppgaven i videoen** er i eksamensstil, ikke fra en ekte eksamen. KB er kaninene fra eksamen 2018 Problem 6, i CNF slik fasiten skrev den, pluss det negerte målet B1. Bᵢ betyr «kanin i er brun».

Klausulene:
- C1 B2 ∨ B3
- C2 ¬B2 ∨ ¬B3
- C3 B3 ∨ B4
- C4 ¬B3 ∨ ¬B4
- C5 B4
- C6 ¬B1 ∨ ¬B4
- C7 B1 (det negerte målet)

| Steg | Regel | Verdi | Hvorfor |
|---|---|---|---|
| 1 | unit C5 | B4 = true | Ingen symboler er pure ved start. C5 er den første unit clause. |
| 2 | unit C4 | B3 = false | |
| 3 | pure | B2 = true | C2 er sann, så B2 står bare positivt, i C1. |
| 4 | unit C6 | B1 = false | |
| 5 | C7 usann | → false | |

- **a)** KB ∧ B1 er unsatisfiable uten en eneste gjetning. Da gjelder KB ⊨ ¬B1, så kanin 1 er hvit. Det er samme svar som resolution gir i E12. KB alene har bare modellen B1 = F, B2 = T, B3 = F, B4 = T.
- **b)** WalkSAT kunne ikke ha vist dette. Det finnes ingen modell å finne, og failure beviser ingenting.

## Eksamensfeller

- **Unit før pure:** fig. 7.17 sjekker pure før unit. Begge rekkefølgene kan gi samme modell, men forløpet blir feil, og det er forløpet som etterspørres. Skriv rekkefølgen sann → usann → pure → unit → gjett.
- **Telle fortegn i sanne klausuler:** pure avgjøres bare over klausuler som ikke allerede er sanne. I gjennomgangseksempelet er C pure etter A = false bare fordi C4 er sann.
- **Kalle et symbol pure fordi det ikke står noe sted:** et symbol som bare står i sanne klausuler, er ikke pure etter konvensjonen her. Det trengs heller ikke.
- **Glemme early termination:** en klausul er usann så snart *alle* literalene er usanne. Du trenger ikke vente til alle symbolene er satt.
- **Tro at WalkSAT failure betyr unsatisfiable:** det betyr bare at modellen ikke ble funnet innen max_flips. Til å bevise entailment trengs en complete metode som DPLL eller resolution.
- **Tro at flere klausuler gjør problemet vanskeligere:** de vanskeligste setningene ligger ved terskelen. Overconstrained setninger avvises fort.
- **Si 4,26 eller 4,3 uten kilde:** bokteksten og fig. 7.19 sier ≈ 4,3, mens litteraturnotene sier 4,26. Oppgi begge eller «rundt 4,3».
- **Uten navn på stegene:** skriv for hvert steg om det er pure, unit (med klausul), gjett eller konflikt. Uten navn kan sensor ikke se at du følger algoritmen.

## Koblinger til andre kapitler

- **→ kap. 5 / E07:** DPLL er BACKTRACKING-SEARCH (5.3) med domenet {true, false}.
  - En unit clause er en variabel med én lovlig verdi igjen, og MRV ville tatt den først.
  - Unit propagation ligner forward checking. Sammenligningen er videoens, ikke bokas ordlyd.
  - Degree heuristic er den samme ideen i begge kapitlene.
- **→ kap. 5 / E07 og kap. 4 / E04:** WalkSAT er min-conflicts (5.4) med tilfeldige steg. Det grådige steget er hill climbing, og random walk og random restarts er måtene å komme ut av lokale minima på (4.1).
- **→ kap. 5 / E06:** component analysis er samme idé som at Tasmania i kartfargingen kan løses for seg. Boka viser selv til Tasmania i 7.6.1.
- **→ 7.4.4 / E11:** TT-ENTAILS er utgangspunktet som DPLL forbedrer: samme dybde-først oppramsing, men med early termination, pure og unit.
- **→ 7.5 / E12:**
  - Refutation (KB ∧ ¬α unsat) er grunnen til at en SAT-løser kan bevise entailment.
  - CNF er inputformatet.
  - På definite clauses gjør unit propagation det samme som forward chaining.
  - Resolution og DPLL er begge complete for PL, men resolution utleder nye klausuler, mens DPLL søker i modeller.
- **→ L5 lysbilde 33 (PDF-s. 72–76):** grafargings-CSP der unit-literaler utledes med resolution. Det er det nærmeste forelesningene kommer unit propagation.

## Ikke pensum her

- 7.7 Agents Based on Propositional Logic, alle underseksjoner (Canvas, syllabus-unntakene).
- 7.7.4 og 11.2.3 planlegging som SAT (Canvas; L11 s. 14: «§11.2.3 — not in the exam»).
- 5.3.3 intelligent backtracking for CSP, med backjumping og conflict sets (Canvas). Trikset i 7.6.1 er pensum på bokas nivå.
- 5.5 strukturen til CSP-er, med uavhengige delproblemer (Canvas). Component analysis i 7.6.1 er pensum.

## Øv selv

1. Kjør DPLL (fig. 7.17) på C1 A ∨ B, C2 ¬A ∨ C, C3 ¬B ∨ ¬C, C4 ¬A ∨ ¬C ∨ D, C5 ¬D ∨ B, med symbolene alfabetisk (både ved pure symbols og ved gjett), true før false og den første unit clause i lista (C1, C2, …). Navngi hvert steg (pure, unit med klausul, gjett, konflikt), og oppgi modellen DPLL returnerer.
2. Klausulene er C1 A ∨ B, C2 ¬A ∨ C, C3 ¬C ∨ D ∨ ¬B og C4 A ∨ ¬D. Modellen så langt er A = true.
   - a) Hvilke klausuler er allerede sanne?
   - b) Hvilke symboler er pure, og med hvilket fortegn?
   - c) Er noen klausul unit?
   - d) Hvilken verdi setter DPLL i neste kall, og hvorfor? Pure symbols tas alfabetisk, og den første unit clause i lista tas først.
3. Bruk klausulene fra oppgave 1 og modellen A = false, B = true, C = true, D = true.
   - a) Hvilken klausul må WalkSAT velge?
   - b) Hvor mange klausuler er sanne etter hvert mulig flipp?
   - c) Hvilket symbol flipper det grådige steget?
   - d) Med p = 0,5: hvor sannsynlig er det at hvert av symbolene flippes?
4. Du lager tilfeldige 3-CNF-setninger med n = 100 symboler og m = 150, 430 og 800 klausuler.
   - a) Hvilken er nesten sikkert satisfiable, og hvilken nesten sikkert unsatisfiable?
   - b) Hvilken tar typisk lengst tid for DPLL, og hvorfor?
   - c) WalkSAT svarer failure på setningen med m = 800. Hva kan du konkludere?
5. **Eksamen 2018 Problem 8 (short questions), punkt 5:** «Fill in the blank so that the sentence becomes correct. A entails B if and only if ( … ) is unsatisfiable.» Forklar også hva DPLL må returnere for å vise at A ⊨ B, og hvorfor WalkSAT ikke kan brukes til det.
6. **Eksamen 2019 Oppgave 7 (short questions, 2 p):** er ((P ⇒ Q) ∧ Q) ⇒ P valid, unsatisfiable eller satisfiable? Begrunn svaret. Hvilket spørsmål kunne du stilt en SAT-løser for å avgjøre om setningen er valid?

## Fasit

**Quizene i videoen**

- **s10 «Din tur» (DPLL):** svaret er A, «A = true: unit B, unit C, C4 ✗ │ A = false: pure C, pure B ✓». Hele forløpet står i tabellen over.
- **s15 (WalkSAT):** svaret er B, «Ingenting sikkert». WalkSAT er incomplete, så failure kan bety både at ingen modell finnes og at søket trengte mer tid.
- **s18–s19 (eksamensstil):**
  - a) Forløpet er unit C5 (B4 = true), unit C4 (B3 = false), pure B2 = true, unit C6 (B1 = false), og deretter er C7 usann. KB ∧ B1 er altså unsatisfiable, så KB ⊨ ¬B1 og kanin 1 er hvit.
  - b) Nei. Det finnes ingen modell for WalkSAT å finne.

**Øv selv.** Svarene på 1–4 er egne løsninger, kontrollert i `videoer/e13-dpll-walksat/verifiser.py`. Svarene på 5 og 6 følger boka og eksamensfasiten.

1. Forløpet:

   | Steg | Regel | Modell | C1–C5 |
   |---|---|---|---|
   | 1 | gjett | A = true | T ? ? ? ? |
   | 2 | unit C2 | C = true | T T ? ? ? |
   | 3 | unit C3 | B = false | T T T ? ? |
   | 4 | unit C4 | D = true | T T T T F |
   | 5 | C5 usann | → gå tilbake | |
   | 6 | gjett | A = false | ? T ? T ? |
   | 7 | pure | C = false | ? T T T ? |
   | 8 | pure | B = true | T T T T T |

   - Ved start er ingen symboler pure og ingen klausul unit, så DPLL må gjette A.
   - I steg 7 er C pure med negativt fortegn bare fordi C2 er sann og ikke teller. D er også pure (¬D i C5), men C kommer først alfabetisk. I steg 8 er både B og D pure, og B kommer først.
   - DPLL returnerer true med modellen **A = false, B = true, C = false**. D blir aldri satt og kan ha begge verdier.
2. Svarene:
   - a) C1 og C4 er sanne.
   - b) B er pure negativt, siden ¬B bare står i C3. D er pure positivt, fordi ¬D står i C4, som er sann og ikke teller. C er ikke pure, siden C står i C2 og ¬C i C3.
   - c) Ja, C2 er unit (C).
   - d) DPLL setter **B = false**. Pure sjekkes før unit, og B kommer først av de pure symbolene.
3. Svarene:
   - a) Bare C3 (¬B ∨ ¬C) er usann, så den velges.
   - b) Flip B gir 3 sanne, fordi C1 og C5 blir usanne. Flip C gir 5 sanne, altså alle.
   - c) Det grådige steget flipper C, og WalkSAT returnerer modellen A = F, B = T, C = F, D = T.
   - d) Med p = 0,5 er P(flip C) = 0,5 + 0,5 · ½ = 0,75 og P(flip B) = 0,25.
4. Forholdene m/n er 1,5, 4,3 og 8,0.
   - a) m = 150 er underconstrained og nesten sikkert satisfiable. m = 800 er overconstrained og nesten sikkert unsatisfiable.
   - b) m = 430 ligger ved terskelen, der setningene er nesten løsbare. DPLL må da dypt før den finner en modell eller en motsigelse.
   - c) Ingenting sikkert. Setningen er trolig unsatisfiable, men bare en complete metode som DPLL kan vise det.
5. Svaret er **A ∧ ¬B** (7.5, refutation), som i fasiten («4) A ∧ ¬B» under Problem 8, der nummereringen er forskjøvet).
   - DPLL(A ∧ ¬B i CNF) må returnere *false*. Fordi DPLL er complete, betyr det at ingen modell finnes.
   - WalkSAT kan bare finne modeller. Failure etter max_flips beviser ikke at ingen modell finnes.
6. Setningen er **satisfiable, men ikke valid.** Den er sann for P = T, Q = T og usann for P = F, Q = T. Fasiten sier: «Satisfiable. When P=T and Q=T the sentence is true, but when P=F and Q=T the sentence is false.»
   - α er valid hvis og bare hvis ¬α er unsatisfiable.
   - Spør SAT-løseren om ¬α = (P ⇒ Q) ∧ Q ∧ ¬P er satisfiable. Den finner modellen P = F, Q = T, og da er α ikke valid.
