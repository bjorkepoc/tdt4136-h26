# E08 – Spill 1: minimax og alpha-beta

> Pensum: Global 6.1–6.2 (US 5.1–5.2) · Forelesning: L8, AL3, L13 · Øving: Ø3 · Eksamensvekt: ~9 % (adversarial search samlet, deles med E09)
> Video: `videoer/e08-minimax-alfabeta/out/tdt4136-e08-minimax-alfabeta.mp4` (14:46)

## Kapitler i videoen

- 0:00 – Intro
- 0:46 – Spill som søkeproblem
- 2:40 – Minimax
- 5:39 – Alpha-beta pruning
- 9:17 – Move ordering
- 11:29 – Eksamen 2025, oppgave 8
- 13:34 – Koblinger og oppsummering

## Kjerneideer

**Kroken: bøttespillet fra L8.** Tre bøtter: A = {−50, 50}, B = {3, 1}, C = {−5, 15}. Du velger bøtte, motstanderen velger tallet du får. A frister med 50, og C har best snitt (5). Men en motstander som vil deg vondt, gir deg −50 i A og −5 i C. I B får du minst 1. Velg det beste av de verste utfallene. Det er hele ideen bak minimax.

**Et spill som søkeproblem (6.1.1).** Et spill defineres med:

| Søk (kap. 3, E02) | Spill | Bøttespillet |
|---|---|---|
| initial state | S₀ | velg bøtte |
| ACTIONS(s) | ACTIONS(s) | {A, B, C} |
| RESULT(s, a) | RESULT(s, a) | etter B velger motstanderen |
| – | TO-MOVE(s): hvem har turen | MAX, så MIN |
| IS-GOAL(s) | IS-TERMINAL(s) | et tall er valgt |
| action cost | UTILITY(s, p): poeng til spiller p i en sluttilstand | tallet du får |

**Hvilke spill (6.1).** Kapittelet handler om spill som er *deterministic* (ingen terning), har *perfect information* (du ser hele stillingen, som i sjakk og Go), har to spillere og er *zero-sum*: det som er bra for den ene, er like ille for den andre. Sjakk gir 1, 0 eller ½ til hver, så summen er alltid 1. Boka sier selv at *constant-sum* hadde vært et riktigere navn. Terning og skjulte kort tas i E09.

**Game tree.** Treet over alle trekkfølger fram til slutten. Tic-tac-toe har færre enn 9! = 362 880 sluttstillinger. Sjakk har over 10⁴⁰ noder. Vanlig søk holder ikke, fordi du bare styrer annenhver kant. En sti er ikke nok. Du trenger en *strategy*: et svar på hvert trekk motstanderen kan gjøre.

**Minimax value.** Verdien når begge spiller perfekt. MAX-noder (△) tar største verdi blant barna, MIN-noder (▽) tar minste. Verdiene fylles inn nedenfra. Beste trekk er kanten til barnet som gir rotverdien.

**Hvorfor anta at MIN spiller optimalt?** Da er minimax-verdien en *garanti*: MAX får minst så mye uansett hva MIN gjør. Tabber MIN seg ut, får MAX bare mer. I Fig. 6.2 har B verdi 3, og hvis MIN velger 12 i stedet for 3, er 12 ≥ 3. Mot en svak motstander kan et risikabelt trekk lønne seg. Boka bruker et trekk som vinner 9 av 10 ganger mot sikker remis som eksempel. Er motstanderen tilfeldig, regner du gjennomsnitt i stedet. I bøttespillet gir det C (snitt 5 > 2 i B). Det er expectimax, og det tas i E09.

**Kostnad.** Minimax er dybde-først-søk gjennom hele treet. Tid O(bᵐ), plass O(bm). Sjakk har b ≈ 35 og m ≈ 80, så 35⁸⁰ ≈ 10¹²³ noder.

**Flere spillere (6.2.2, bare i boka).** Ett tall holder ikke lenger. Hver node får en vektor med utility for hver spiller, ⟨v_A, v_B, v_C⟩. Spilleren i trekket velger vektoren med størst verdi på *sin egen* plass. I Fig. 6.4 blir roten (1, 2, 6). Med flere spillere kan det oppstå allianser: A og B samarbeider mot en sterk C, og alliansen ryker når C er svekket. To spillere i et spill som ikke er zero-sum kan også samarbeide. Hvis begge får 1000 i samme utfall, jobber begge mot det. Eksamen 2022 1.6 spurte nettopp hvordan minimax brukes med tre spillere. Svaret er nyttevektorer.

**Alpha-beta pruning (6.2.3).** Samme svar som minimax, men grener som ikke kan endre valget lenger opp, hoppes over.
- **α** = det beste MAX har funnet på stien ned hit. Tenk «minst».
- **β** = det beste MIN har funnet på stien ned hit. Tenk «høyst».
- Bare verdier inni vinduet (α, β) kan endre valget over. Kuttet kommer når vinduet lukker seg.
- En MAX-node løfter α og kutter når v ≥ β. En MIN-node senker β og kutter når v ≤ α.
- α og β arves *nedover* langs stien. Verdiene går *oppover*.

**Hvorfor samme svar.** I Fig. 6.2 er C ≤ 2 etter første blad, og MAX har allerede 3 i B. Uansett hva x og y er: max(3, min(2, x, y), 2) = 3. I videoen settes ville tall inn i de kuttede bladene i det dypere treet (håndsporing 3), og rotverdien og trekket står stille. Verdiene i kuttede noder er bare grenser: E er ≥ 6 (egentlig 9), C er ≤ 2 (egentlig 0).

**Move ordering (6.2.4, bare i boka).** Hvor mye som kuttes, avhenger av rekkefølgen barna undersøkes i:
- Beste trekk først: O(b^(m/2)). Effektiv forgreningsfaktor √b, i sjakk 35 → ≈ 6. Samme tid gir dobbel dybde.
- Tilfeldig rekkefølge: omtrent O(b^(3m/4)), i sjakk 35 → ≈ 14 (egen utregning: 35^0,75 ≈ 14,4). Samme tid gir 4/3 av dybden.
- Dårligst mulig: ingen kutt, O(bᵐ).
- Gode rekkefølger: en enkel rekkefølge for sjakk er slag, trusler, trekk fremover, så bakover. Med *iterative deepening* søker du dybde 1, rangerer trekkene, og søker dybde 2 med den rangeringen. *Killer move heuristic*: prøv trekk som var best før, først.
- *Transposition*: samme stilling nås via ulike trekkfølger (w1 b1 w2 b2 = w2 b2 w1 b1). En *transposition table* lagrer verdien og slår den opp neste gang. Det er reached-tabellen fra kapittel 3. Boka sier at den kan doble søkedybden i sjakk.

## Algoritmer og håndsporing

**Minimax (Fig. 6.3, kortform):**

```
MINIMAX(s) = UTILITY(s, MAX)                   hvis IS-TERMINAL(s)
             max_a MINIMAX(RESULT(s, a))       hvis TO-MOVE(s) = MAX
             min_a MINIMAX(RESULT(s, a))       hvis TO-MOVE(s) = MIN
```

**Alpha-beta (Fig. 6.7, L8, kortform):** start med α = −∞, β = +∞ i roten.

```
MAX-VALUE(s, α, β):  v ← −∞
  for hvert barn c:  v ← max(v, MIN-VALUE(c, α, β));  α ← max(α, v)
                     if v ≥ β: return v        # kutt resten av barna
  return v

MIN-VALUE(s, α, β):  v ← +∞
  for hvert barn c:  v ← min(v, MAX-VALUE(c, α, β));  β ← min(β, v)
                     if v ≤ α: return v        # kutt resten av barna
  return v
```

**Egenskaper:**

| | Minimax | Alpha-beta |
|---|---|---|
| Svar | minimax-verdien | samme verdi og samme trekk |
| Tid | O(bᵐ) | O(b^(m/2)) beste rekkefølge, ≈ O(b^(3m/4)) tilfeldig, O(bᵐ) verste |
| Plass | O(bm), dybde-først | O(bm) |
| Kuttede noder | – | får bare grense: ≤ v i MIN, ≥ v i MAX |

### Håndsporing 1: minimax på Fig. 6.2

Blader: B = (3, 12, 8), C = (2, 4, 6), D = (14, 5, 2).

| Node | Type | Regning | Verdi |
|---|---|---|---|
| B | MIN | min(3, 12, 8) | 3 |
| C | MIN | min(2, 4, 6) | 2 |
| D | MIN | min(14, 5, 2) | 2 |
| A | MAX | max(3, 2, 2) | **3**, beste trekk a1 → B |

### Håndsporing 2: alpha-beta på Fig. 6.2

| Steg | Node | α | β | v | Hva skjer |
|---|---|---|---|---|---|
| 1 | A | −∞ | ∞ | | roten |
| 2 | B ser 3, 12, 8 | −∞ | 3 | 3 | B = 3 |
| 3 | A | 3 | ∞ | 3 | MAX er sikret minst 3 |
| 4 | C ser 2 | 3 | 2 | 2 | **kutt 4 og 6: v = 2 ≤ α = 3**. C ≤ 2 |
| 5 | D ser 14, 5, 2 | 3 | 2 | 2 | 2 er siste blad, så det er ingenting igjen å kutte |
| 6 | A | 3 | ∞ | 3 | **A = 3** via B. 7 av 9 blader sett |

### Håndsporing 3: alpha-beta på et dypere tre (ILLUSTRASJON)

Selvlaget tre fra videoen: A (MAX) → B, C (MIN) → D, E, F, G (MAX) → blader. D = (3, 5), E = (6, 9), F = (1, 2), G = (0, −1). Minimax-verdi: A = 5. Barn tas fra venstre mot høyre.

| Steg | Node | α | β | v | Hva skjer |
|---|---|---|---|---|---|
| 1 | A | −∞ | ∞ | | roten |
| 2 | B | −∞ | ∞ | | arver vinduet |
| 3 | D ser 3, så 5 | 5 | ∞ | 5 | D er MAX og løfter α. D = 5 |
| 4 | B | −∞ | 5 | 5 | B er MIN og får β = 5 |
| 5 | E | −∞ | 5 | | arver vinduet fra B |
| 6 | E ser 6 | 6 | 5 | 6 | **kutt bladet 9: v = 6 ≥ β = 5** (β kommer fra B). E ≥ 6 |
| 7 | B | −∞ | 5 | 5 | B = 5 |
| 8 | A | 5 | ∞ | 5 | MAX er sikret minst 5 |
| 9 | C, F | 5 | ∞ | | arver α = 5 |
| 10 | F ser 1, så 2 | 5 | ∞ | 2 | F er MAX og sammenligner med β = ∞. Ingen kutt. F = 2 |
| 11 | C | 5 | 2 | 2 | **kutt hele G: v = 2 ≤ α = 5** (α kommer fra A). C ≤ 2 |
| 12 | A | 5 | ∞ | 5 | **A = 5** via B → D. 5 av 8 blader sett |

Siste α/β per node: A (5, ∞), B (−∞, 5), D (5, ∞), E (6, 5), C (5, 2), F (5, ∞).

### Håndsporing 4: samme tre, god og dårlig rekkefølge

Fig. 6.2 med barna i to rekkefølger:

| Rekkefølge | Barn | Blader sett | Kutt |
|---|---|---|---|
| Dårlig | A: C, D, B. C = (6, 4, 2), D = (14, 5, 2), B = (12, 8, 3) | 9 | ingen |
| God | A: B, C, D. B = (3, 12, 8), C = (2, 4, 6), D = (2, 5, 14) | 5 | 4 og 6 under C, 5 og 14 under D. Begge fordi v = 2 ≤ α = 3 |

Begge gir A = 3 via B.

### Håndsporing 5: Eksamen 2025, oppgave 8 (10 p: a 4 p, b 6 p)

Tre: A (MAX) → B = 10, C (MIN), J (MIN), Q = 12. C → D = 18, E (MAX). E → F = 1, G (MIN). G → H = 5, I = 2. J → K = 15, L (MAX). L → M = 20, N (MIN). N → O = 2, P = 5. Barn i alfabetisk rekkefølge.

**a) Minimax:** G = min(5, 2) = 2, E = max(1, 2) = 2, C = min(18, 2) = 2, N = min(2, 5) = 2, L = max(20, 2) = 20, J = min(15, 20) = 15, A = max(10, 2, 15, 12) = **15**, via A → J → K.

**b) Alpha-beta:**

| Steg | Node | α | β | v | Hva skjer |
|---|---|---|---|---|---|
| 1 | A ser B = 10 | 10 | ∞ | 10 | |
| 2 | C ser D = 18 | 10 | 18 | 18 | C arver α = 10 |
| 3 | E ser F = 1 | 10 | 18 | 1 | 1 endrer ikke α |
| 4 | G ser H = 5 | 10 | 5 | 5 | **kutt I: v = 5 ≤ α = 10**. α = 10 kom helt fra A, tre nivåer opp. G ≤ 5 |
| 5 | E, C | | | ≤ 5 | E ≤ 5 og C ≤ 5. A beholder 10 |
| 6 | J ser K = 15 | 10 | 15 | 15 | |
| 7 | L ser M = 20 | 20 | 15 | 20 | **kutt N (og dermed O og P): v = 20 ≥ β = 15**. L ≥ 20 |
| 8 | J = 15, A | 15 | ∞ | 15 | Q = 12 endrer ingenting. **A = 15** |

Siste α/β: A (15, ∞), C (10, 5), E (10, 18), G (10, 5), J (10, 15), L (20, 15).

Fasitens form: *I* besøkes ikke fordi utility til H (5) er mindre enn α = 10. *N* (og O, P) besøkes ikke fordi utility til M (20) er større enn β = 15.

### Håndsporing 6: Eksamen 2024 Q10–Q11

Bøtter A = {2, 3}, B = {1, 6}, C = {−2, −1}, minste tall ses først.
- Q10: snittene er 2,5, 3,5 og −1,5, så en tilfeldig motstander gir B. Minimax tar minste i hver bøtte: 2, 1 og −2. Da blir svaret A = 2.
- Q11: A gir α = 2. I B er 1 ≤ α = 2, så 6 kuttes. I C er −2 ≤ α = 2, så −1 kuttes. α er −∞ i A, 2 i B og 2 i C.

### Håndsporing 7: tre spillere (Fig. 6.4)

| Nivå | Velger | Kandidater → valg |
|---|---|---|
| C (plass 3) | størst tredje tall | (1,2,6)/(4,2,3) → (1,2,6) · (6,1,2)/(7,4,1) → (6,1,2) · (5,1,1)/(0,5,2) → (0,5,2) · (7,7,1)/(5,4,5) → (5,4,5) |
| B (plass 2) | størst andre tall | (1,2,6)/(6,1,2) → (1,2,6) · (0,5,2)/(5,4,5) → (0,5,2) |
| A (plass 1) | størst første tall | (1,2,6)/(0,5,2) → **(1, 2, 6)** |

Alle trær og sporinger over er regnet ut på nytt av `videoer/e08-minimax-alfabeta/verifiser.py`, som også sjekker at videoen viser de samme tallene.

## Eksamensfeller

- **α og β byttet om.** MAX sammenligner v med β, og MIN sammenligner v med α. I håndsporing 3 har F sett 1 mens α = 5, og mange kutter da. F er MAX, og det neste bladet kunne vært 1000.
- **Kutt på feil nivå.** Et kutt fjerner bare resten av barna til noden som kutter. Det er C som kutter i håndsporing 3, så bare G forsvinner, ikke F.
- **Likhet.** Boka kutter ved likhet (v ≥ β, v ≤ α). Eksamen 2018 godtok E som kuttet og som ikke kuttet ved V = 6 ≥ β = 6. Fasiten for 2019 godtok svar både med og uten K eller L, siden de er like. Skriv derfor ≥ og ≤.
- **Eksakt verdi i kuttede noder.** Skriv grensen, for eksempel «i ≤ 6» og «e ≥ 11» som i fasiten for 2020 kontinuasjon, eller C ≤ 2.
- **α eller β som kommer langt ovenfra.** I 2025-oppgaven kom α = 10 fra roten, tre nivåer over G.
- **Begrunn hvert kutt med tall.** Fasitene vil ha formen «Prune I because v = 5 ≤ α = 10» (2025) eller «Prune H and I because V = 9 > Beta = 6» (2018).
- **Ta med hele undertreet.** Når N kuttes, besøkes heller ikke O og P.
- **Rekkefølgen.** Barn tas fra venstre mot høyre (alfabetisk) hvis oppgaven ikke sier noe annet. En annen rekkefølge gir andre kutt, men samme rotverdi.
- **Minimax er en garanti, ikke et best mulig svar mot alle.** Mot en svak eller tilfeldig motstander kan andre valg gi mer (expectimax, E09).

## Koblinger til andre kapitler

- → kap. 3 / E02: minimax er dybde-først-søk, derfor plass O(bm). Iterative deepening og reached-tabellen (transposition table) kommer også derfra.
- → kap. 6.3–6.5 / E09: når treet er for dypt, kuttes søket med en evalueringsfunksjon, eller du spiller tilfeldige partier med MCTS. Expectiminimax, quiescence, horizon effect og skjult informasjon står også der.
- → kap. 17.2 / E10: i zero-sum-spill er minimax det samme som *maximin* i spillteori, altså det beste av de verste utfallene. L10 sier det slik: «For zero-sum games, this is the same as the maximin equilibrium in the book». Global 17.2 = US 18.2.

## Ikke pensum her

- Kontinuerlige tilstands- og handlingsrom i spill (L13: «Not in this course: continuous state and action spaces»).
- Bonusdel 4.1 i Ø3 er frivillig (AL3: «non-mandatory»).
- 6.2.2 (flere spillere) og 6.2.4 (move ordering) *er* pensum, men ble ikke forelest. De står bare i boka (PENSUMOVERSIKT).

## Øv selv

1. Eksamen 2021, oppgave 5 (10 p): finn minimax-verdiene til A–J og nodene alpha-beta kutter.
2. Eksamen 2020 kontinuasjon (2020ResitQ), Problem 4 (10 p): minimax-verdier, rotverdi og noder som kan kuttes.
3. Eksamen 2018, Problem 2 (10 p, fordelt 3–7): minimax-verdier, og hvert kutt begrunnet med V og Alpha/Beta.
4. Eksamen 2019, oppgave 6 (10 p, fordelt 3–3–4): minimax-verdier for A–D, trekket MAX velger, og noder som kan kuttes.
5. Bøttespillet fra L8 (A = {−50, 50}, B = {3, 1}, C = {−5, 15}, barn fra venstre): kjør alpha-beta, skriv siste α og β i hver node, og begrunn kuttet.
6. Halveringsspillet fra L8 og Ø3: start på N = 5 med MAX i trekket. Hvert trekk er enten «trekk fra 1» (`--`) eller «halver og rund ned» (`/2`). Spilleren som sitter igjen med 0, vinner. Hvem vinner, og med hvilket første trekk? Hvor mange av de 27 nodene besøker alpha-beta når `--` prøves før `/2`?

## Fasit

**Øv selv:**
1. A = 3, B = 3, C = 0, D = 2, E = 3, F = 10, G = 0, H = 6, I = 2, J = 7. Kuttes: L4 (5 > 3), H (0 < 3) og J (2 < 3).
2. h = 7, i ≤ 6, d = 7, j = 11, e ≥ 11, b = 7, c ≤ 5, f ≤ 5, l ≤ 5, m ≤ 4. Rotverdien er 7. Kuttes: x4, k, x10, x12 og g.
3. Kutt H og I (V = 9 > β = 6). E (V = 6 ≥ β = 6) ble godtatt både som kuttet og som ikke kuttet. Kutt N (V = 10 > β = 8), Q og R (V = 9 > β = 8), og h (U, W, X, V) og i (Y, Z1, Z2) (V = 4 < α = 8). Minimax-verdiene står i fasiten (2018Q&A).
4. Beste trekk er det som gir utfallet D. K, L, M og N kan kuttes. Svar uten K eller uten L godtas også, fordi de to er like.
5. Roten = 1, MAX velger B. Bladet 15 i C kuttes, fordi v = −5 ≤ α = 1. Siste α/β: S (1, ∞), A (−∞, −50), B (−50, 1), C (1, −5).
6. MAX vinner (+1) ved å starte med `--`. Alpha-beta gir samme svar, besøker 20 av 27 noder og gjør 3 kutt.

**Quizene i videoen:**
- «Hvilket spill har perfect information, men er ikke deterministic?» **Backgammon**: du ser hele brettet, men terningen avgjør. Poker og Battleship skjuler noe, og sjakk har ingen tilfeldighet.
- Minimax-quizen (bladet 2 under D blir 4): D = min(14, 5, 4) = 4, og roten = max(3, 2, 4) = **4**. Beste trekk blir a3.
- Eksamen 2024 Q11: verdiene **6 og −1** besøkes aldri.
- Move ordering-quizen (minimax rekker dybde 6): alpha-beta med perfekt rekkefølge rekker **12**. Med tilfeldig rekkefølge rekker den 8.
