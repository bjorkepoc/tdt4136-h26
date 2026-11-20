# E10 – Spillteori: Nash, dominans og gjentatte spill

> Pensum: Global 17.2.1–17.2.3 (US 18.2.1–18.2.3) · Forelesning: L10, L13 (repetisjon) · Øving: – · Eksamensvekt: ~9 %
> Video: `videoer/e10-spillteori/out/tdt4136-e10-spillteori.mp4` (14:33)

## Kapitler i videoen

- 0:00 – Intro
- 0:42 – Normal form og dominans
- 2:05 – IESDS
- 4:10 – Nash-likevekt
- 6:04 – Blandet likevekt og maximin
- 9:23 – Gjentatte spill
- 12:10 – Eksamen 2023, oppgave 5
- 13:37 – Koblinger og oppsummering

## Kjerneideer

**Normal form game (17.2.1, L10).** Et spill der alle velger samtidig har tre deler: *players*, *actions* (rene strategier) og en *payoff function* som gir hver spiller en nytte for hver kombinasjon av handlinger. Alt står i en *payoff matrix*. P1 velger rad og får tallet til venstre, P2 velger kolonne og får tallet til høyre. I videoen er P1 cyan og P2 violet. L10-slidene skriver P1 nede til venstre (blått) og P2 oppe til høyre (rødt) i cellen.

Gjennomgangseksempelet er *prisoner's dilemma* (L10, boka). Tallene er minus antall år i fengsel:

| P1 \ P2 | Testify | Refuse |
|---|---|---|
| **Testify** | −5, −5 | 0, −10 |
| **Refuse** | −10, 0 | −1, −1 |

**Dominans.** Strategi *s* **strictly dominates** *s′* hvis *s* gir strengt mer enn *s′* mot alle motstanderens handlinger. *s* **weakly dominates** *s′* hvis den gir minst like mye overalt og strengt mer minst én gang. En *dominant strategy* dominerer alle andre strategier for spilleren. Spiller alle en dominant strategi, er utfallet en *dominant strategy equilibrium*. L10 brukte bare strict. Weak står i boka (17.2.1) og kommer på eksamen (2018, 2020 kont., 2023).

**IESDS (L10, ikke i boka med dette navnet).** *Iterated elimination of strictly dominated strategies*: stryk én strictly dominert strategi om gangen, og se på nytt i det mindre spillet. En strategi som ikke er dominert i starten, kan bli dominert når motstanderen har mistet en strategi. Derfor «iterated». Med strict ender alle rekkefølger likt: en strategi som er dårligere enn en annen i alle kolonner, er fortsatt dårligere når noen kolonner forsvinner. Med weak kan rekkefølgen endre svaret, fordi likheter kan bli til full likhet når kolonnen der én var bedre, forsvinner. Boka sier kort at dominerte strategier kan fjernes gjentatte ganger (17.2.2).

**Nash equilibrium (17.2.1, L10).** Et strategiprofil der ingen tjener på å bytte *alene*, så lenge de andre holder fast. Alle spiller da en *best response* til de andre. Metoden for rene likevekter: ring inn P1s beste tall i hver kolonne og P2s beste tall i hver rad. Like gode tall ringes inn begge to. Celler med to ringer er rene Nash-likevekter. Et spill kan ha null, én eller flere rene likevekter.

**Nash's theorem (L10, boka).** Alle endelige spill har minst én Nash-likevekt, men den kan være blandet. Beviset er ikke pensum (L10: «Proof at live.lean-lang.org (not curriculum)»).

**Pareto optimality og social welfare (17.2.2, kun bok).** Et utfall er *Pareto optimal* hvis du ikke kan gjøre én spiller bedre uten å gjøre en annen dårligere. Det er *Pareto dominated* hvis et annet utfall er minst like godt for alle og bedre for minst én. *Utilitarian social welfare* er summen av nyttene. Boka nevner også *egalitarian social welfare* og Gini-koeffisienten. Hovedpoenget: (testify, testify) er Nash-likevekten, men det eneste utfallet i PD som ikke er Pareto optimal. Forelesningen tok ikke dette, men eksamen spør om det (2019, 2020 v2, 2023).

**Focal points (17.2.1, kun bok).** Når et spill har flere likevekter, kan ett utfall peke seg ut, for eksempel fordi det gir begge mye mer. I bokas eksempel gir den ene likevekten (10, 10) og den andre (1, 1).

**Mixed strategy (17.2.1, L10).** En sannsynlighetsfordeling over handlingene. L10 skriver π₁ og π₂ for sannsynligheten for spillerens *første* handling. I en likevekt i 2×2 der begge blander, må hver spiller blande slik at **motstanderen** blir likegyldig mellom sine to handlinger. Ellers ville motstanderen bare valgt den beste handlingen, og da er det ingen likevekt. Generelt krever Nash bare at ingen tjener på et ensidig avvik, og at alle handlinger en spiller gir positiv sannsynlighet, gir samme forventede payoff. En handling som aldri spilles, kan være strengt dårligere.

**Zero-sum og maximin (17.2.2, L10).** I et *zero-sum game* er u₂ = −u₁. Von Neumann viste i 1928 at alle tomanns zero-sum-spill har en *maximin equilibrium* i blandede strategier og en veldefinert verdi. Ideen er å gjøre spillet tur-basert: den som avslører strategien sin først, velger det beste blant de verste utfallene. Det er minimax fra kapittel 6 brukt på blandede strategier. L10: «For zero-sum games, this is the same as the maximin equilibrium in the book».

**Repeated games (17.2.3, L10).** Samme spill (*stage game*) spilles flere ganger, og strategien kan avhenge av historien.
- *Fast, endelig og kjent antall runder*: backward induction gir den dominante handlingen (testify) i alle runder.
- *Uendelig eller ukjent antall runder*: det finnes ingen siste runde å regne bakover fra, og trusler om straff kan holde samarbeid oppe.
- L10 diskonterer: total nytte er Σₜ δᵗ · Uₚ, med 0 < δ < 1. Boka bruker i stedet *limit of means*, gjennomsnittet i det lange løp (kun bok).
- *Grim trigger*: tie til motstanderen har vitnet én gang, deretter vitne for alltid. *Tit-for-tat (TFT)*: tie først, deretter kopiere motstanderens forrige trekk. TFT vant Axelrods turnering (L10).
- *Nash folk theorem* (kun bok, omtrentlig formulert): ethvert utfall der hver spiller får minst sin *security value* (det spilleren kan sikre seg selv, −5 i PD), kan holdes oppe som en likevekt i det uendelig gjentatte spillet.

## Algoritmer og håndsporing

### Håndsporing 1: dominans i fangens dilemma

1. P1, hvis P2 vitner: testify gir −5, refuse gir −10. −5 > −10.
2. P1, hvis P2 tier: testify gir 0, refuse gir −1. 0 > −1.
3. Testify er bedre i begge kolonner, så testify strictly dominates refuse. Testify er en dominant strategy for P1.
4. P2 er symmetrisk: −5 > −10 og 0 > −1. Testify er dominant for P2.
5. (Testify, Testify) er en dominant strategy equilibrium, med (−5, −5).

### Håndsporing 2: IESDS på L10, slide 3

| P1 \ P2 | Left | Middle | Right |
|---|---|---|---|
| **Up** | 13, 3 | 1, 4 | 7, 3 |
| **Middle** | 4, 1 | 3, 3 | 6, 2 |
| **Down** | −1, 9 | 2, 8 | 8, −1 |

I starten er ingen rad dominert, for Up har 13 og Down har 8 i Right. Rekkefølgen er tvunget:

1. P2: Middle (4, 3, 8) mot Right (3, 2, −1). Middle er større overalt, så **Right** strykes.
2. P1 i kolonnene Left og Middle: Middle (4, 3) mot Down (−1, 2). **Down** strykes. Up (13, 1) og Middle (4, 3) dominerer ikke hverandre ennå.
3. P2 i radene Up og Middle: Middle (4, 3) mot Left (3, 1). **Left** strykes.
4. P1 i kolonnen Middle: Middle 3 mot Up 1. **Up** strykes.
5. Igjen står (Middle, Middle) med (3, 3). Det er også den eneste rene Nash-likevekten.

Down kan ikke strykes først, fordi Down gir 8 og Middle 6 i Right-kolonnen. Sliden har ingen fasit. Svaret er regnet ut og sjekket i `verifiser.py`.

### Håndsporing 3: weak, der rekkefølgen betyr noe (ILLUSTRASJON)

| P1 \ P2 | L | R |
|---|---|---|
| **T** | 1, 1 | 0, 0 |
| **M** | 1, 1 | 2, 1 |
| **B** | 0, 0 | 2, 1 |

M dominerer både T (1 = 1, 2 > 0) og B (1 > 0, 2 = 2) weakly. L og R dominerer ikke hverandre for P2 i starten.
- **T først:** igjen står M og B. P2: R (1, 1) mot L (1, 0), så R dominerer L weakly. Stryk L. M og B gir begge 2 i R, så ingen flere strykes. Utfallet er (2, 1).
- **B først:** igjen står T og M. P2: L (1, 1) mot R (0, 1), så L dominerer R weakly. Stryk R. T og M gir begge 1 i L. Utfallet er (1, 1).

Fasiten til 2020 kont. P5 sier det samme om et auksjonsspill: «there are other orders of elimination which lead to different outcomes». Regel for eksamen: stryk bare strictly dominerte strategier, med mindre oppgaven ber om weak.

### Håndsporing 4: rene likevekter med ringer

- **PD:** P1 ringer −5 (kolonne Testify) og 0 (kolonne Refuse), begge i rad Testify. P2 ringer −5 og 0 i kolonne Testify. Bare (Testify, Testify) får to ringer.
- **Battle of the Sexes (L10):** (movie, movie) = (2, 1), (opera, opera) = (1, 2), ellers (0, 0). To celler får to ringer, så det er to rene likevekter.
- **Eksamen 2025, oppgave 4:** (Up, Left) = (1, 1), ellers (0, 0). I kolonne Right er P1s tall 0 og 0, så begge ringes. Det samme gjelder P2 i rad Down. To likevekter: (Up, Left) og (Down, Right), altså π₁ = π₂ = 1 og π₁ = π₂ = 0. Down er bare weakly dominert, og stryker du den, mister du (Down, Right).

### Håndsporing 5: blandet likevekt i Two-finger Morra

P1 vinner på partall. Tallene er u₁, og u₂ = −u₁.

| P1 \ P2 | 1 | 2 |
|---|---|---|
| **1** | 2, −2 | −3, 3 |
| **2** | −3, 3 | 4, −4 |

Ingen celle er stabil: i hver celle vil taperen bytte. Hvis P2 blander ½–½, gir én finger P1 ½·2 + ½·(−3) = −½, og to fingre ½·(−3) + ½·4 = +½. Da viser P1 alltid to fingre.

**π₂ (P2s sannsynlighet for én finger) gjør P1 likegyldig:**
- én finger: 2π₂ − 3(1 − π₂) = 5π₂ − 3
- to fingre: −3π₂ + 4(1 − π₂) = 4 − 7π₂
- 5π₂ − 3 = 4 − 7π₂ ⇒ 12π₂ = 7 ⇒ **π₂ = 7/12**

**π₁ gjør P2 likegyldig (P2s tall):**
- P2 viser én: −2π₁ + 3(1 − π₁) = 3 − 5π₁
- P2 viser to: 3π₁ − 4(1 − π₁) = 7π₁ − 4
- ⇒ 12π₁ = 7 ⇒ **π₁ = 7/12**

Verdien for P1 er 5 · 7/12 − 3 = −1/12, og P2 får +1/12. Forventningen regnes som i en sjansenode i expectimax.

### Håndsporing 6: Battle of the Sexes og den klassiske feilen

**Riktig:** π₁ = P(P1 velger movie) skal gjøre P2 likegyldig. P2s tall: movie gir 1 · π₁, opera gir 2 · (1 − π₁).
π₁ = 2(1 − π₁) ⇒ **π₁ = 2/3**.
Tilsvarende skal π₂ gjøre P1 likegyldig: 2π₂ = 1 · (1 − π₂) ⇒ **π₂ = 1/3**.
Begge får forventet 2/3.

**Feil:** bruker du P1s egne tall, 2π₁ = 1 − π₁, får du π₁ = 1/3. Det er P2s π₂ speilvendt, ikke P1s likevektsstrategi.

**Hvorfor:** når P2 spiller π₂ = 1/3, er P1s gevinst 2/3 uansett hva P1 gjør. Linjen er flat. P1s egen gevinst kan derfor ikke bestemme π₁. Det eneste som bestemmer π₁, er kravet om at P2 ikke skal ha noe å tjene på å bytte.

Mot en P2 som blander 50/50, bør P1 velge movie, for movie gir 2 · ½ = 1 og opera 1 · ½ = ½ (L10).

### Håndsporing 7: ingen blandet likevekt i PD

P1 likegyldig: testify gir −5π₂ + 0 · (1 − π₂) = −5π₂, og refuse gir −10π₂ − 1 · (1 − π₂) = −1 − 9π₂. Likningen gir 4π₂ = −1, altså π₂ = −1/4, som ikke er en sannsynlighet. Linjene krysser aldri i [0, 1], fordi testify er strictly dominant. L10: «No mixed strategy Nash equilibrium. Why? No solutions».

### Håndsporing 8: maximin på Morra (boka 17.2.2)

P1 avslører p = P(én finger) først. P2 svarer med den rene handlingen som er verst for P1. P1s gevinst blir min(5p − 3, 4 − 7p), den nedre kanten av to linjer. Toppen av kanten er der linjene krysser: p = 7/12, U = −1/12. Går P2 først, blir verdien også −1/12. Med rene strategier ligger verdien mellom −3 og 2.

### Håndsporing 9: hjortejakt (eksamen 2024, Q12, 4 poeng)

(Stag, Stag) = (5, 5), (Stag, Hare) = (0, 2), (Hare, Stag) = (2, 0), (Hare, Hare) = (1, 1). π = P(Stag).
P2 likegyldig: 5π₁ = 2π₁ + 1 · (1 − π₁) ⇒ 4π₁ = 1 ⇒ **π₁ = 1/4**. Spillet er symmetrisk, så π₂ = 1/4.

### Håndsporing 10: backward induction og to runder

- **Ti kjente runder av PD:** i runde 10 finnes ingen framtid, så det er et engangsspill og begge vitner. Da er runde 10 låst uansett, og runde 9 blir et engangsspill. Slik fortsetter det bakover til runde 1. Begge vitner i alle runder. Boka bruker 100 runder, L10 bruker 10.
- **Eksamen 2024, Q13:** (2, 2), (0, 3) / (3, 0), (1, 1), spilt to runder. Down og Right er dominante. Runde 2 er et engangsspill, og da blir runde 1 det også. Svar: π₁ = 0 og π₂ = 0 i begge runder, altså (Down, Right) to ganger.

### Håndsporing 11: grim trigger og δ ≥ 1/5 (L10)

Motstanderen spiller grim trigger. Du sammenligner å samarbeide for alltid med å svike i runde 0.
- Samarbeid: −1 − δ − δ² − … = −1/(1 − δ)
- Svik: 0 nå, deretter −5 i hver runde: −5δ − 5δ² − … = −5δ/(1 − δ). L10 skriver dette som 5 − 5/(1 − δ), som er det samme.
- Samarbeid lønner seg når −1/(1 − δ) ≥ −5δ/(1 − δ) ⇔ −1 ≥ −5δ ⇔ **δ ≥ 1/5**.

Som en handel: svik gir +1 nå (0 mot −1), men koster 4 i hver senere runde (−5 mot −1), diskontert til 4δ/(1 − δ). Svik lønner seg ikke når 4δ/(1 − δ) ≥ 1 ⇔ δ ≥ 1/5.

| δ | samarbeid | svik |
|---|---|---|
| 1/10 | −10/9 | −5/9 (svik er bedre) |
| 1/5 | −5/4 | −5/4 (likt) |
| 1/2 | −2 | −5 (samarbeid er bedre) |

Når δ ≥ 1/5, er grim trigger mot grim trigger en Nash-likevekt.

**TFT mot grim (ILLUSTRASJON).** Motstanderen spiller R T R R R. TFT svarer R R T R R: den straffer én gang og tilgir. Grim svarer R R T T T: den straffer for alltid.

**Limit of means (boka):** GRIM–GRIM gir −1 hver, HAWK–HAWK −5 hver, HAWK–DOVE (0, −10). Mot GRIM tjener ingen på å avvike i det lange løp.

### Håndsporing 12: Eksamen 2023, oppgave 5 (10 poeng)

US velger rad, China velger kolonne.

| US \ China | Accelerate | Maintain | Hinder |
|---|---|---|---|
| **Accelerate** | 6, 6 | 8, 4 | 9, 2 |
| **Maintain** | 4, 8 | 7, 7 | 10, 2 |
| **Hinder** | 2, 9 | 2, 10 | 5, 5 |

1. **Dominant strategi?** Nei, verken strong eller weak. Accelerate er best for US mot Accelerate (6) og Maintain (8), men mot Hinder gir Maintain 10 og Accelerate 9. Det samme gjelder China.
2. **IESDS:** Hinder er strictly dominert av Accelerate for US (2, 2, 5 < 6, 8, 9). Det samme gjelder China. Stryk Hinder for begge. Nå er Maintain dominert av Accelerate (4 < 6 og 7 < 8) for begge. Igjen står **(Accelerate, Accelerate)**. Fasiten stryker begge Hinder i samme steg. Det er lov, for med strict spiller rekkefølgen ingen rolle. `verifiser.py` sjekker alle 6 rekkefølger.
3. **Nash-likevekt:** ringene gir to ringer bare i (Accelerate, Accelerate).
4. **Social welfare:** summene er 12, 12, 11 / 12, 14, 12 / 11, 12, 10. Størst er **(Maintain, Maintain)** med 14.
5. **Fellen:** likevekten (6, 6) er ikke Pareto optimal, for (7, 7) er bedre for begge. Strukturen er den samme som i PD.

## Eksamensfeller

- **π₁ med feil spillers tall.** π₁ skal gjøre P2 likegyldig, så du bruker P2s tall. Med egne tall blir BoS-svaret 1/3 i stedet for 2/3.
- **Weak behandlet som strict.** Én likhet (5 = 5) er nok til at det ikke er strict. Med weak kan rekkefølgen endre svaret, og du kan stryke en Nash-likevekt (eksamen 2025, oppgave 4).
- **Stoppe etter første runde i IESDS.** Noe som ikke er dominert i starten, kan bli dominert senere.
- **Nash-likevekt er ikke det samme som et godt utfall.** Spør oppgaven om Pareto eller social welfare, er svaret ofte et annet utfall enn likevekten (PD, 2019, 2023).
- **Glemme like tall når du ringer inn.** Like beste svar ringes inn begge to. Ellers mister du likevekter.
- **Blandet likevekt som ikke finnes.** Gir likningen π utenfor [0, 1], har spillet ingen helt blandet likevekt (PD: π₂ = −1/4).
- **Gjentakelse er ikke nok.** Med fast, endelig og kjent antall runder gir backward induction svik i alle runder (eksamen 2024, Q13). Samarbeid krever uendelig eller ukjent antall runder og stor nok δ.
- **Grim-utledningen.** Svik gir 0 i runde 0, ikke −1, og straffen starter i runde 1. Derfor står δ i telleren: −5δ/(1 − δ).

## Koblinger til andre kapitler

- **Kap. 2 (E01):** multiagent-miljøer, cooperative og competitive. «In some competitive environments, randomized behavior is rational because it avoids the pitfalls of predictability» (kap. 2.3). Eksamen 2018, Problem 8 spør om akkurat dette.
- **Kap. 6 (E08):** zero-sum og minimax. Maximin i 17.2.2 er minimax brukt på blandede strategier.
- **E09:** expectimax regner forventning over sjansenoder, som de forventede gevinstene her. Regret matching (L8, s. 40): snittet av strategiene går mot en Nash-likevekt når antall iterasjoner går mot uendelig.

## Ikke pensum her

- 17.2.4 (Sequential games: The extensive form) og 17.2.5 (Uncertain payoffs and assistance games) er ikke listet i pensumoversikten (US 18.2.4–18.2.5).
- 17.3 (Cooperative game theory) og resten av kapittel 17 er ikke listet.
- Beviset for Nash's theorem: L10 sier «not curriculum».
- L13: «Not in this course: continuous state and action spaces».
- Linear programming for store zero-sum-spill (17.2.2) og bokas FSM-strategier utover HAWK, DOVE, GRIM og TFT er bare nevnt.

## Øv selv

1. **Eksamen 2019, oppgave 5 (10 p).** Radspilleren velger H eller NH, kolonnespilleren G eller NG. (H, G) = (8, 0), (H, NG) = (3, 1), (NH, G) = (4, 4), (NH, NG) = (2, 3). Finn dominante strategier, Nash-likevekten og alle Pareto-optimale utfall.
2. **Eksamen 2018, Problem 7 (10 p, 5–5).** To risbønder, oppstrøms og nedstrøms, vanner på tid A eller B. Vanner begge samtidig, mister nedstrøms x. Vanner de til ulik tid, mister begge y på skadedyr. Uten tap er nytten 1. Sett opp matrisen og finn når en strongly dominant strategy equilibrium oppstår.
3. **Eksamen 2020 kontinuasjon, Problem 5 (15 p).** Andreprisauksjon med bud 0–50. Finnes en strictly eller weakly dominant strategy equilibrium? Hva overlever eliminering av strictly dominerte handlinger, og hva skjer med weak?
4. **Matching pennies.** (1, −1), (−1, 1) / (−1, 1), (1, −1). Finn den blandede likevekten og verdien.
5. **BoS med andre tall (ILLUSTRASJON).** (3, 1), (0, 0) / (0, 0), (1, 3). Finn π₁ og π₂. Bruk riktig spillers tall.
6. **Grim trigger med andre tall (ILLUSTRASJON).** Begge tier: (3, 3). Én vitner: 5 til den som vitner, 0 til den andre. Begge vitner: (1, 1). For hvilke δ er grim mot grim en likevekt?

## Fasit

**Øv selv:**
1. H dominerer NH for radspilleren. Nash-likevekten er (H, NG) med (3, 1). Pareto optimal: (H, G) og (NH, G). (H, NG) er dominert av (NH, G) = (4, 4).
2. Matrisen (rad = oppstrøms, kolonne = nedstrøms): (A, A) = (1, 1 − x), (A, B) = (1 − y, 1 − y), (B, A) = (1 − y, 1 − y), (B, B) = (1, 1 − x). Fasiten: det finnes ingen strongly dominant strategy equilibrium for noen x, y > 0. (A, A) krever x < y for at A skal være best for nedstrøms mot A, men y < x for at A også skal være best mot B.
3. Fasiten: ingen strictly eller weakly dominant strategy equilibrium. For begge spillere dominerer 30 og 40 alle andre bud weakly, men ikke hverandre. Ingen handling er strictly dominert, så alle profiler overlever IESDA. Weak eliminering i fasitens rekkefølge gir {30, 40} × {20, 30, 40}, men andre rekkefølger gir andre utfall. Spillet er ikke dominance solvable.
4. π₁ = π₂ = 1/2, og verdien er 0.
5. P2 likegyldig: 1 · π₁ = 3(1 − π₁) ⇒ π₁ = 3/4. P1 likegyldig: 3π₂ = 1 − π₂ ⇒ π₂ = 1/4. Begge får 3/4.
6. 3/(1 − δ) ≥ 5 + δ/(1 − δ) ⇔ 3 ≥ 5 − 4δ ⇔ δ ≥ 1/2.

**Quizene i videoen:**
- Rad A (5, 2, 7) mot rad B (5, 1, 6): **A dominerer B weakly**. Første kolonne er lik, så det er ikke strict.
- «Kunne Down strykes helt først?» **Nei.** I Right gir Down 8 og Middle 6. Down blir dominert først når Right er strøket.
- Eksamen 2025, oppgave 4: **to** rene likevekter, (Up, Left) og (Down, Right).
- Eksamen 2024, Q12 (hjortejakt): **π₁ = 1/4**.
- Eksamen 2024, Q13: **(Down, Right) i begge runder**, π₁ = π₂ = 0.
- Eksamen 2023, oppgave 5: se håndsporing 12.
