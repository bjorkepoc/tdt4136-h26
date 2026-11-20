# E04 – Lokalt søk: å klatre uten kart

> Pensum: Global 4.1–4.2 (samme nummer i US) · Forelesning: L3 · Øving: – · Eksamensvekt: ~4 % (kap. 4 samlet, deles med E05)
> Video: `videoer/e04-lokalt-sok/out/tdt4136-e04-lokalt-sok.mp4` (11:52)

## Kapitler i videoen

- 0:00 – Intro
- 0:43 – Landskapet og hill climbing
- 2:47 – Varianter: sideways og restart
- 4:13 – Simulated annealing
- 5:59 – Beam og genetiske algoritmer
- 7:58 – Kontinuerlige rom
- 9:39 – Eksamensoppgave
- 10:50 – Koblinger og oppsummering

## Kjerneideer

**Kroken.** Bokas figur 4.3(b) er et 8-dronningbrett der 17 par angriper hverandre. Flytt alltid den dronningen som fjerner flest angrep, og h går 17 → 12 → 7 → 4 → 3 → 1. Der stopper det: brettet i figur 4.3(a) har ett angripende par, men alle 56 trekk gjør det verre. Fra et tilfeldig brett skjer dette i 86 % av forsøkene.

**Hvorfor lokalt søk (4.1).** Søket i kapittel 3 husker frontier, alt det har nådd og stien tilbake. I mange problemer teller bare sluttilstanden, for eksempel åtte dronninger eller et optimeringsproblem med en objective function. Lokalt søk husker én tilstand og flytter til en nabo. Det bruker nesten ikke minne og fungerer i store eller uendelige tilstandsrom. Prisen er at søket ikke er systematisk og kan gå glipp av løsningen. Forelesning 3 kaller familien «stochastic local search» og «metaheuristics».

**State-space landscape.** Gi hver tilstand en høyde. Er høyden en objective function, leter du etter høyeste topp, *global maximum*. Er høyden en kostnad, leter du etter dypeste dal, *global minimum*, og klatringen heter gradient descent. En *local maximum* er høyere enn alle naboene, men lavere enn den globale. Et *plateau* er et flatt område. Er det flatt og går opp videre på den ene siden, er det en *shoulder*. En *ridge* er en rekke lokale topper som ikke ligger langs noen enkeltakse, så hvert enkelttrekk går nedover (bare i boka, ikke forelest).

**Hill climbing (steepest ascent).** Gå til den beste naboen. Stopp når ingen nabo er *strengt* bedre. Algoritmen ser bare ett steg fram, så den stopper på lokale topper, platåer og shoulders.

**8-dronninger som lokalt søk.** *Complete-state formulation*: alle åtte dronningene står på brettet, én per kolonne. Et trekk flytter én dronning i kolonnen sin, så hver tilstand har 8 · 7 = 56 naboer. h er antall par som angriper hverandre, også når en annen dronning står imellom. Målet er h = 0. Det finnes 8⁸ = 16 777 216 tilstander. Bokas tall fra tilfeldige startbrett: steepest ascent løser 14 % og setter seg fast i 86 %. Det tar i snitt 4 steg når den lykkes og 3 når den setter seg fast.

**Varianter (4.1.1).** Disse står i boka, men ble ikke forelest.
- *Sideways moves*: tillat like gode trekk, slik at søket kommer over en shoulder. På en flat topp går det i ring, så det trengs en grense, for eksempel 100 sidesteg på rad. Da løses 94 % av brettene. Det koster 21 steg ved treff og 64 ved bom.
- *Stochastic hill climbing*: velg tilfeldig blant trekkene oppover, gjerne vektet etter hvor bratte de er.
- *First-choice hill climbing*: lag tilfeldige naboer til du finner en som er bedre. Det passer når en tilstand har mange tusen naboer.
- *Random-restart hill climbing*: kjør hill climbing fra tilfeldige startbrett til en lykkes. Den er *complete med sannsynlighet 1*, fordi startbrettet til slutt er en løsning. Lykkes hver klatring med sannsynlighet p, trenger du i snitt 1/p forsøk.

**Simulated annealing (4.1.2).** Boka bruker et bilde med en pingpongball: rister du en humpete flate hardt, spretter ballen ut av små groper. Rister du gradvis mildere, blir den liggende i den dypeste. Algoritmen velger en *tilfeldig* nabo. Er naboen bedre, går den dit. Er naboen verre, går den dit med sannsynlighet e^(−forverring/T). Sannsynligheten synker jo verre trekket er og jo lavere temperaturen T er. T følger en *schedule* og synker over tid. Når T = 0, returneres nåværende tilstand. Synker T sakte nok, finner søket globalt optimum med sannsynlighet som går mot 1. Høy T gir utforskning (nesten alt godtas). Lav T gir vanlig klatring.

**Fortegnet i SA.** Kildene skriver formelen ulikt:

| Kilde | Formel | ΔE betyr | ΔE for et dårlig trekk |
|---|---|---|---|
| Fasit 2020 (og 2019) | P = e^(ΔE/T) | Eval(neste) − Eval(nå) | negativ |
| Forelesning 3 | P = e^(−ΔE/T) | økning i kostnad | positiv |
| Global, figur 4.5 | ΔE ← VALUE(current) − VALUE(next), P = e^(ΔE/T) | stemmer når VALUE er en kostnad | negativ |

Regelen som alltid holder: eksponenten er ≤ 0, så P ≤ 1. Får du P > 1 for et dårlig trekk, har du snudd fortegnet. Er trekket like godt (ΔE = 0), blir P = e⁰ = 1.

**Local beam search (4.1.3).** Dette står i boka, men ble ikke forelest. Søket holder k tilstander. I hvert steg lager det alle naboene til alle k og beholder de k beste av alle sammen. Det er *ikke* det samme som k uavhengige restarter. Restartene klatrer hver for seg, men beam search flytter innsatsen dit det går best. Faren er at alle k klumper seg på samme topp. *Stochastic beam search* velger derfor de k etterfølgerne tilfeldig, med sannsynlighet proporsjonal med verdien. Beam search i A\*-sammenheng (E03) er en annen ting: der begrenses frontier til k noder.

**Evolutionary algorithms og GA (4.1.4).** Dette er en variant av stochastic beam search der flere foreldre lager barn. Boka lister hva variantene varierer i:
- størrelsen på populasjonen
- representasjonen: i GA en streng over et endelig alfabet, i evolution strategies reelle tall, i genetic programming et program
- *mixing number* ρ, antall foreldre per barn: ρ = 2 er vanligst, og ρ = 1 er stochastic beam search
- seleksjon: proporsjonal med fitness, eller turnering
- recombination, vanligvis med et tilfeldig crossover-punkt
- *mutation rate*
- sammensetningen av neste generasjon: bare barna, eller noen av de beste foreldrene i tillegg (*elitism*)

*Culling* betyr å kaste alle under en terskel. For 8-dronninger er hvert individ åtte sifre. Siffer c er raden til dronningen i kolonne c, og rad 1 er nederst. Fitness er antall par som *ikke* angriper hverandre, høyst 28. Mutation ble hoppet over i slidene, men står i boka og i figur 4.8.

**Schema.** Et schema som 246\*\*\*\*\* er en streng der noen plasser er åpne. Strenger som passer, for eksempel 24613578, er *instances*. Er snittfitness for instansene over populasjonens snitt, blir det flere av dem for hver generasjon. Crossover hjelper bare når nabosifre danner nyttige blokker. Stokkes posisjonene tilfeldig, gir crossover ingen fordel.

**Kontinuerlige rom (4.2).** Bokas eksempel er tre nye flyplasser i Romania. Tilstanden er seks tall, (x₁, y₁, x₂, y₂, x₃, y₃). Målet er å minimere f = Σᵢ Σ_{c∈Cᵢ} (xᵢ − x_c)² + (yᵢ − y_c)², der Cᵢ er byene som har flyplass i som nærmeste. Tiltakene under er bare i boka, unntatt selve gradient-ideen, som ble forelest.
- *Diskretisering*: flytt én koordinat ±δ, og du får 6 · 2 = 12 naboer. Steepest ascent i det rommet heter *empirical gradient*: du måler endringen mellom nære punkter.
- *Gradient*: kan du derivere, peker ∇f dit f stiger brattest. Oppdateringen er x ← x + α∇f(x) for maksimering, eller minus for minimering. α er *step size*. Er α for liten, kryper søket. Er den for stor, hopper det over toppen.
- *Line search*: følg gradientretningen og doble α til f begynner å synke.
- *Newton–Raphson*: x ← x − H_f⁻¹(x)∇f(x), der *Hessian* H_f er matrisen av andrederiverte. Metoden tilpasser en parabel og hopper til toppen av den. For flyplassene flytter ett steg hver flyplass til *centroiden* av byene sine. Det holder bare så lenge Cᵢ ikke endrer seg.
- *Lokale optima*: lokale maksima, ridges og platåer finnes i kontinuerlige rom også. Random restart og SA hjelper der også.
- *Constrained optimization*: løsningene må oppfylle harde krav, for eksempel at flyplassene ligger på tørt land i Romania. *Linear programming* har lineære ulikheter (en konveks region) og et lineært mål. Det kan løses i polynomisk tid i antall variabler. LP er et spesialtilfelle av *convex optimization*.

## Algoritmer og håndsporing

**HILL-CLIMBING (figur 4.2), kortform.**

```
current ← problem.INITIAL
while true:
  neighbor ← etterfølgeren til current med høyest VALUE
  hvis VALUE(neighbor) ≤ VALUE(current): returner current
  current ← neighbor
```

**SIMULATED-ANNEALING (figur 4.5), kortform med «forverring».**

```
current ← problem.INITIAL
for t = 1, 2, …:
  T ← schedule(t)
  hvis T = 0: returner current
  next ← en tilfeldig etterfølger av current
  hvis next er bedre: current ← next
  ellers: current ← next med sannsynlighet e^(−forverring/T)
```

**GENETIC-ALGORITHM (figur 4.8), kortform.**

```
gjenta:
  weights ← fitness for hvert individ i population
  population2 ← tom
  for i = 1 til SIZE(population):
    parent1, parent2 ← to tilfeldige valg vektet med weights
    child ← REPRODUCE(parent1, parent2)    (tilfeldig kutt c: parent1[1..c] + parent2[c+1..n])
    med liten sannsynlighet: child ← MUTATE(child)
    legg child i population2
  population ← population2
til et individ er godt nok eller tiden er ute
returner det beste individet
```

Figur 4.8 lager *ett* barn per par. Figur 4.6 viser to barn per par. Begge er vanlige.

**Figur 4.3(b): h etter hvert mulige trekk** (rad 8 øverst, D = dronning, h = 17 nå). Dette er bokas tall, regnet ut på nytt i `verifiser.py`.

| rad | k1 | k2 | k3 | k4 | k5 | k6 | k7 | k8 |
|---|---|---|---|---|---|---|---|---|
| 8 | 18 | **12** | 14 | 13 | 13 | **12** | 14 | 14 |
| 7 | 14 | 16 | 13 | 15 | **12** | 14 | **12** | 16 |
| 6 | 14 | **12** | 18 | 13 | 15 | **12** | 14 | 14 |
| 5 | 15 | 14 | 14 | D | 13 | 16 | 13 | 16 |
| 4 | D | 14 | 17 | 15 | D | 14 | 16 | 16 |
| 3 | 17 | D | 16 | 18 | 15 | D | 15 | D |
| 2 | 18 | 14 | D | 15 | 15 | 14 | D | 16 |
| 1 | 14 | 14 | 13 | 17 | **12** | 14 | **12** | 18 |

Lavest er 12, og åtte trekk står likt. Rad 3 har dronninger i kolonne 2, 6 og 8, og alle tre parene telles, også (2, 8) med dronning 6 imellom.

**Klatringen i videoen** (én av fire like bratte ruter på fem steg fra 4.3(b) til 4.3(a), likhet brytes tilfeldig).

| Steg | Streng | Trekk | h |
|---|---|---|---|
| 0 | 43254323 | start, figur 4.3(b) | 17 |
| 1 | 46254323 | kolonne 2: rad 3 → 6 | 12 |
| 2 | 46257323 | kolonne 5: rad 4 → 7 | 7 |
| 3 | 46257383 | kolonne 7: rad 2 → 8 | 4 |
| 4 | 16257383 | kolonne 1: rad 4 → 1 | 3 |
| 5 | 16257483 | kolonne 6: rad 3 → 4 | 1 |

**Figur 4.3(a): h etter hvert mulige trekk** (16257483, h = 1). Eneste angripende par er kolonne 4 og 7 på skrå. Lavest blant naboene er 2, så dette er en local minimum for h.

| rad | k1 | k2 | k3 | k4 | k5 | k6 | k7 | k8 |
|---|---|---|---|---|---|---|---|---|
| 8 | 3 | 3 | 3 | 3 | 2 | 3 | D | 3 |
| 7 | 3 | 3 | 4 | 2 | D | 4 | 2 | 4 |
| 6 | 2 | D | 3 | 3 | 5 | 4 | 2 | 3 |
| 5 | 3 | 2 | 4 | D | 4 | 4 | 3 | 2 |
| 4 | 3 | 3 | 4 | 3 | 4 | D | 2 | 3 |
| 3 | 3 | 5 | 3 | 2 | 4 | 3 | 2 | D |
| 2 | 4 | 3 | D | 2 | 2 | 3 | 3 | 3 |
| 1 | D | 3 | 3 | 2 | 2 | 3 | 2 | 3 |

**Random restart regnet ut.**

| | Uten sideways | Med sideways (≤ 100 på rad) |
|---|---|---|
| Andel som lykkes, p | 0,14 | 0,94 |
| Steg ved treff / bom | 4 / 3 | 21 / 64 |
| Forventede forsøk, 1/p | 1/0,14 ≈ 7,1 | 1/0,94 ≈ 1,06 |
| Forventede steg, treff + ((1 − p)/p) · bom | 4 + (0,86/0,14) · 3 ≈ 22 | 21 + (0,06/0,94) · 64 ≈ 25 |

**SA-sannsynligheter, e^(−forverring/T).**

| Forverring | T = 10 | T = 4 | T = 1 |
|---|---|---|---|
| 1 | 0,90 | 0,78 | 0,37 |
| 4 | 0,67 | 0,37 | 0,02 |
| 0 (platå) | 1 | 1 | 1 |

e^(−1/1) = e^(−4/4) = e^(−1) ≈ 0,37: det er forholdet forverring/T som teller.

**GA på bokas figur 4.6.** Fitness = 28 − h. Andelen er fitness delt på summen, 78.

| Individ | h | Fitness | Andel |
|---|---|---|---|
| 24748552 | 4 | 24 | 24/78 ≈ 31 % |
| 32752411 | 5 | 23 | 29 % |
| 24415124 | 8 | 20 | 26 % |
| 32543213 | 17 | 11 | 14 % |

Vanlig feil: å dele på 28 gir 86 %, 82 %, 71 % og 39 %, og det summerer ikke til 100.

| Par | Forelder 1 × forelder 2 | Kutt etter | Barn | Etter mutation | Fitness før → etter |
|---|---|---|---|---|---|
| 1 | 32752411 × 24748552 | 3. siffer | 32748552 | 32748152 (siffer 6: 5 → 1) | 23 → 24 |
| 1 | | | 24752411 | uendret | 22 → 22 |
| 2 | 32752411 × 24415124 | 5. siffer | 32752124 | 32252124 (siffer 3: 7 → 2) | 21 → 18 |
| 2 | | | 24415411 | 24415417 (siffer 8: 1 → 7) | 20 → 22 |

32752411 (nest best) ble trukket to ganger og 32543213 (svakest) aldri. Mutation kan også gjøre et barn dårligere (21 → 18).

**Gradient på f(x) = 6x − x² (illustrasjon).** f′(x) = 6 − 2x, f″(x) = −2, toppen er x = 3 med f = 9. Start i x = 0.

| Metode | x-verdier | Kommentar |
|---|---|---|
| α = 0,25 | 0 → 1,5 → 2,25 → 2,625 → 2,8125 | kryper mot 3 |
| α = 1 | 0 → 6 → 0 → 6 | hopper fram og tilbake over toppen |
| Line search, α = 0,25 / 0,5 / 1 | x = 1,5 / 3 / 6, f = 6,75 / 9 / 0 | f synker ved α = 1, stopp i x = 3 |
| Newton | 0 − 6/(−2) = 3 | ett steg, fordi f er en parabel |

**Eksamen 2020 (v2), kortspørsmål om lokalt søk.** Posisjonene er (kolonne, rad ovenfra), lest av figur 11. a: (1,2), (2,5), (3,3), (4,4), (5,5), (6,1). I b er dronningen i rad 2 flyttet fra kolonne 1 til kolonne 2.

| Angrep | a | b |
|---|---|---|
| Rad | (2,5)–(5,5): 1 | samme: 1 |
| Kolonne | 0 | (2,2)–(2,5): 1 |
| Diagonal ↘ | (3,3), (4,4), (5,5): 3 | (2,2), (3,3), (4,4), (5,5): 4 · 3/2 = 6 |
| Diagonal ↗ | (2,5)–(6,1): 1 | samme: 1 |
| Sum | 5 → Eval(a) = 1 − 5 = −4 | 9 → Eval(b) = 1 − 9 = −8 |

ΔE = Eval(b) − Eval(a) = −8 − (−4) = −4. P = e^(−4/4) = e^(−1) ≈ 0,37. Fasiten skriver «1/e».

## Eksamensfeller

- **h teller par, ikke dronninger, og blokkering teller ikke.** Tre dronninger på samme rad gir tre par, selv om den i midten står i veien.
- **Hill climbing krever et strengt bedre trekk.** På en shoulder eller et platå stopper den, selv om det går oppover lenger borte. Sideways moves er tillegget som lar den gå videre.
- **Topp eller dal avhenger av hva du måler.** Med en objective function leter du etter global maximum (fasit 2019). Med h som kostnad er figur 4.3(a) en local *minimum*.
- **SA-fortegnet.** P skal aldri bli over 1. Gode trekk tas alltid, og like gode trekk tas med P = e⁰ = 1 (eksamen 2019, bonus). Skriv hvilken konvensjon du bruker.
- **SA velger en tilfeldig nabo**, ikke den beste. Den tilfeldige naboen tas så med sannsynlighet P.
- **Admissible og consistent h hjelper ikke i lokalt søk** (eksamen 2024 Q6). Det hører til A\*. Det som hjelper ut av lokale optima, er restart, mutation/perturbasjon og å godta dårlige trekk av og til.
- **Gradient descent slipper ikke alltid ut av lokale optima** (eksamen 2025, oppgave 2). Det er hill climbing nedover med en annen nabodefinisjon.
- **Seleksjon deles på summen av fitness**, ikke på maks fitness 28.
- **Local beam search er ikke k parallelle restarter.** De k beste velges blant *alle* naboene samlet.
- **Forventet antall forsøk er 1/p**, ikke p eller 1 − p. Med p = 0,94 er svaret ≈ 1,06.
- **Eksamen 2020: teksten og figuren spriker.** Teksten sier «a queen in each column» og at en dronning flyttes i samme rad. Figuren flytter dronningen langs rad 2, så b får to dronninger i kolonne 2. Regn på figuren og skriv antagelsen din.

## Koblinger til andre kapitler

- → kap. 5.4 / E07: min-conflicts er hill climbing med antall brutte begrensninger som h, på det samme 8-dronningbrettet. Platåer og sideways moves går igjen.
- → kap. 7.6 / E13: WalkSAT velger en brutt klausul og flipper enten et tilfeldig symbol eller det som gir færrest brutte klausuler. Det er min-conflicts med tilfeldige steg, samme idé som i SA.
- → kap. 3 / E02, E03: systematisk søk husker frontier og stien. Beam search i 3.5 (E03) begrenser frontier til k noder og er ikke local beam search.
- → kap. 6.4 / E09: Monte Carlo tree search bruker tilfeldige playouts for å utforske, og UCB balanserer utforskning mot utnyttelse. Rollen ligner temperaturen i SA.
- → kap. 4.3–4.5 / E05: neste episode handler om nondeterministiske handlinger (AND-OR-søk), belief states og online søk.

## Ikke pensum her

- Ingenting i 4.1–4.2 er UT. PENSUMOVERSIKT markerer alle underseksjonene som IN, og SERIEPLAN har ingen «Ute» for E04.
- Følgende er pensum, men ble ikke forelest. Det må leses i boka (kilde: PENSUMOVERSIKT, kap. 4):
  - 4.1.1: ridges, sideways moves og random restart. Stochastic og first-choice hill climbing nevnes heller ikke ved navn i L3.
  - 4.1.3: local beam search i sin helhet.
  - 4.1.4: mutation (slidene utelater den).
  - 4.2: empirical gradient, line search, Newton–Raphson og constrained optimization.
- 4.3–4.5 er pensum og dekkes i E05.

## Øv selv

1. Regn fitness (28 − h) for de fire barna i figur 4.6(d), 32748552, 24752411, 32752124 og 24415411, og for de muterte barna i 4.6(e). Ble alle bedre?
2. Kryss 24748552 med 32543213 etter fjerde siffer. Skriv begge barna og fitness for hvert.
3. Eksamen 2020-trekket (ΔE = −4) med T = 1 og T = 8. Hva blir P, og hva sier det om høy og lav temperatur?
4. Hver hill climbing-klatring lykkes med p = 0,25, bruker 4 steg ved treff og 3 ved bom. Hvor mange forsøk og hvor mange steg trenger random restart i snitt?
5. f(x) = 6x − x², start i x = 1. Kjør line search med α = 0,25, 0,5 og 1. Hvor stopper du? Hvor havner ett Newton-steg?
6. Eksamen 2023, oppgave 1 (short questions): en hill climbing-algoritme har funnet en tilstand der ingen nabo gir høyere verdi. Hva kan tilstanden være, om ikke global maximum? Hvilket triks kan legges til for å komme videre?
7. Eksamen 2019, oppgave 7 (short questions): tar hill climbing med en heuristisk objective function sikte på global minimum eller global maximum?
8. Eksamen 2022, oppgave 1.4–1.5: hva er forskjellen på inkrementelt og lokalt søk, og hvorfor har genetiske algoritmer mutation?
9. Eksamen 2015, problem 6 a): hva er den største svakheten ved hill climbing? A. lokale maksima, B. mye minne, C. kan sette seg fast i et globalt maksimum, D. avhenger sterkt av temperaturplanen.

## Fasit

**Quizene i videoen.**
- Shoulder der høyre nabo er like høy: hill climbing stopper, fordi koden krever en strengt bedre nabo.
- Med sideways moves (p = 0,94): 1/0,94 ≈ 1,06 forsøk og 21 + (0,06/0,94) · 64 ≈ 25 steg.
- Eksamen 2019, bonus: ja, SA flytter med sannsynlighet 1. ΔE = 0, så e^(0/T) = 1. Videoen gjør oppgaven om til flervalg, men på eksamen må svaret begrunnes med formelen.
- Par 2, 32752|411 × 24415|124: første barn er 32752124.
- Eksamen 2025, oppgave 2 (videoen viser fire av de fem alternativene): det usanne utsagnet er «Gradient descent, in contrast to hill-climbing algorithms, will always escape local optima».
- Eksamen 2020 (v2): Eval(a) = −4, Eval(b) = −8, ΔE = −4, P = e^(−1) ≈ 0,37.

**Øv selv.**
1. Før mutation: 23, 22, 21, 20. Etter mutation: 24, 22, 18, 22. Barn 3 ble dårligere (21 → 18). Mutation er tilfeldig og kan gjøre ting verre.
2. 24743213 (fitness 19) og 32548552 (fitness 20).
3. T = 1: e^(−4) ≈ 0,018. T = 8: e^(−0,5) ≈ 0,61. Høy T godtar dårlige trekk ofte (utforskning), og lav T nesten aldri (klatring).
4. 1/0,25 = 4 forsøk. Steg: 4 + (0,75/0,25) · 3 = 4 + 9 = 13.
5. f′(1) = 4. α = 0,25 gir x = 2 (f = 8), α = 0,5 gir x = 3 (f = 9), α = 1 gir x = 5 (f = 5). f synker ved α = 1, så line search stopper i x = 3. Newton: 1 − 4/(−2) = 3, rett på toppen.
6. Fasiten sier platå og random restart. Et fullt svar nevner også local maximum (og shoulder) og andre triks: sideways moves, simulated annealing og stochastic hill climbing.
7. Global maximum (fasit 2019). Med en kostnad i stedet blir det global minimum, og algoritmen heter da gradient descent.
8. Lokalt søk husker ikke stien eller hvor det har vært, og ser bare på naboene. Inkrementelt søk bygger løsningen steg for steg og kan oppdage feil tidlig. Mutation gjør små endringer for å utforske nær gode løsninger, mens crossover tar store steg (fasit 2022).
9. A. Hill climbing kan sette seg fast i en local maximum.
