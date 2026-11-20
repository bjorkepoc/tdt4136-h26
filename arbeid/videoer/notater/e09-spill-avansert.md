# E09 – Spill 2: evalueringsfunksjoner, MCTS, sjanse og skjult info

> Pensum: Global 6.3–6.7 (US 5.3–5.7) · Forelesning: L8, L13 · Øving: – (Ø3 dekker bare 6.2, se E08) · Eksamensvekt: ~9 % (adversarial search samlet, deles med E08)
> Video: `videoer/e09-spill-avansert/out/tdt4136-e09-spill-avansert.mp4` (14:30)

## Kapitler i videoen

- 0:00 – Intro
- 0:46 – For dypt: eval og cutoff
- 4:00 – For bredt: MCTS
- 7:17 – Sjanse: expectiminimax
- 9:39 – Skjult informasjon
- 12:24 – Eksamen 2023, oppgave 6
- 13:30 – Koblinger og oppsummering

## Kjerneideer

**Hvorfor dette trengs.** Minimax fra E08 må nå bladene. I sjakk med b ≈ 35 er fem halvtrekk (*ply*) 35⁵ = 52 521 875 stillinger, altså ca. 52,5 s med en million stillinger i sekundet. Kapitlet har fire svar: stopp og gjett (6.3), spill tilfeldige partier (6.4), regn forventning (6.5) og tenk i mulige brett (6.6).

**H-MINIMAX (6.3).** Boka endrer to ting i minimax: IS-TERMINAL blir IS-CUTOFF(s, d), og UTILITY blir EVAL(s). L8 s. 18 kaller den hMinimax. Dybden velges med *iterative deepening*: søk d = 1, 2, 3, … til tiden er ute, og spill trekket fra det dypeste fullførte søket. Iterative deepening hjelper også *move ordering* (E08).

**Evalueringsfunksjon (6.3.1).** EVAL(s) anslår *expected utility* fra s. En god eval
- gir ekte UTILITY på terminale stillinger, og ellers et tall mellom tap og seier,
- er rask, fordi poenget er å søke dypere,
- henger sterkt sammen med sjansen for å vinne. Boka: hvis 82 % av stillingene i en kategori vinnes (1), 2 % tapes (0) og 16 % blir remis (½), er forventet verdi 0,82·1 + 0,02·0 + 0,16·½ = 0,90.

Den vanligste formen er en *weighted linear function*: EVAL(s) = w₁f₁(s) + … + wₙfₙ(s). Med bokas materialverdier (bonde 1, springer og løper 3, tårn 5, dronning 9) og fᵢ = hvite minus svarte brikker av type i. L8 s. 18 bruker andre vekter: material = 16Q + 8R + 5(B + N) + P, og eval = W₁·material + W₂·mobility + W₃·kingSafety + W₄·centerControl. Begge er eksempler, ikke fasit. Lineær vekting antar at featurene er uavhengige. Boka nevner at to løpere er verdt mer enn dobbelt så mye som én, og at ikke-lineære kombinasjoner er mulige. Samme idé som h(n) i A* (E03).

**Quiescence search (6.3.2, kun bok).** Eval passer bare på rolige (*quiescent*) stillinger. Står et slag for tur, søker du videre bare med slagtrekk til stillingen er rolig. Bokas Fig. 6.8 (b): svart er en springer og to bønder foran (materialeval −5 for hvit, egen utregning med vektene over), men hvit slår dronningen i neste trekk og står da +4.

**Horizon effect (6.3.2, kun bok).** Et uunngåelig tap kan skyves bak søkedybden med trekk som forsinker det. Fig. 6.9: svart søker 8 ply. Svarts løper er dømt, og hvitt tårn slår den på ply 6 (♖h1, ♖a1, ♖×a2), så søket ser −3. Svart kan sette inn to bondeofre med sjakk. Hvert koster to ply, så slaget flyttes til ply 10, bak horisonten. Søket ser bare −2 (to bønder) og tror løperen er reddet. Egentlig taper svart −5. Ply-tallene og −3/−2/−5 er egen utregning ut fra figuren og vektene. Bokas avhjelp er *singular extensions*: et trekk som er klart bedre enn alle andre, får søke videre selv forbi grensen.

**Forward pruning (6.3.3, kun bok).** Alpha-beta kutter bare deltrær som beviselig ikke kan endre svaret. Forward pruning kutter også trekk som bare *ser* dårlige ut, og kan derfor gi et annet trekk enn minimax.
- *Beam search*: behold bare de n beste trekkene etter eval i hver node.
- *ProbCut* (Buro): et grunt søk gir en verdi v, og erfaring fra tidligere partier sier hvor sannsynlig det er at et dypt søk havner utenfor (α, β). Er det sannsynlig, kuttes noden. Logistello med ProbCut slo vanlig Logistello 64 % av gangene, selv når den vanlige fikk dobbelt så mye tid.
- *Late move reduction*: trekk sent i rekkefølgen søkes grunnere, og søkes fullt bare hvis verdien overrasker.

**Search vs lookup (6.3.4).** L8 s. 19 spør: «Should we perform search on the first chess move in a new game?» Nei. *Opening book* for de første ca. 10–15 trekkene, *endgame tables* på slutten. Sluttspill løses med *retrograde analysis*: start i stillinger som er vunnet, og gå baklengs med reglene i revers (*retrograde minimax search*). Alle sluttspill med høyst sju brikker er løst, ca. 400 billioner (400·10¹²) stillinger.

**Monte Carlo tree search (6.4).** I Go er b ≈ 361 i starten, alpha-beta når bare 4–5 ply, og en god eval er vanskelig å lage. MCTS bruker i stedet snittet av mange *playouts*: partier spilt helt til slutt med en *playout policy*. Hver node lagrer U/N: seire for spilleren som valgte trekket inn til noden, over antall playouts gjennom noden. En iterasjon har fire faser:
1. *Selection*: gå fra roten ned til et blad med en *selection policy*.
2. *Expansion*: legg til ett nytt barn.
3. *Simulation*: spill én playout fra barnet.
4. *Back-propagation*: oppdater alle noder på stien. Vinnerens noder får +1 seier og +1 playout, de andre bare +1 playout.

Når tiden er ute, returneres trekket med **flest playouts** (L8 s. 23), ikke høyest vinnerandel.

**UCB1 (6.4, L8 s. 24).** UCB1(n) = U(n)/N(n) + C·√(ln N(parent(n)) / N(n)). Første ledd er *exploitation* (snittet), andre er *exploration* (stort når noden er lite prøvd). Høy C gir mer exploration. L8: «Usually C = √2 is used».

**Playout policy.** Helt tilfeldige playouts svarer på hvem som er best hvis begge spiller tilfeldig. Gode policies læres ved *self-play* (Go) eller er tommelfingerregler som «vurder slagtrekk» (sjakk) og «ta hjørnet» (Othello). En playout koster tid lineært i dybden. Boka: b = 32, 100 ply og 10⁹ stillinger per trekk gir minimax 6 ply, alpha-beta 12 ply eller MCTS 10 millioner playouts.

**Når slår MCTS alpha-beta? (6.4, 6.7).** Når forgreningen er stor, eller evalueringen er dårlig. Alpha-beta stoler på hvert blad, så én feil eval kan styre valget. MCTS tar snitt av mange playouts. Svakheten: et enkelt avgjørende trekk kan bli oversett hvis playouts sjelden finner det. Eksamen 2022 1.7 spør nettopp om dette.

**Grenser for spillsøk (6.7, kun bok).**
- Feil i eval: Fig. 6.16. Minimax velger høyre (100 mot 99). Har hver eval en uavhengig normalfordelt feil, er venstre egentlig bedre i ca. 71 % av tilfellene med σ = 5 og 58 % med σ = 2 (bokas tall, kontrollert med simulering: 0,715 og 0,581).
- Søket bruker tid på trekk der valget er opplagt. *Metareasoning* spør hva som lønner seg å regne på.
- Søket tenker i enkelttrekk, ikke i mål og delmål.
- Ideen om å lære i stedet for å håndlage eval og policy.

**AlphaZero (L8 s. 26).** MCTS der et *value network* erstatter playouts (en lært eval), og et *policy network* styrer selection mot gode trekk. Begge trenes ved self-play.

**Stochastic games (6.5).** Backgammon: to terninger gir 21 ulike kast. De seks parene har sannsynlighet 1/36, de 15 andre 1/18. Spilltreet får *chance nodes* mellom MAX- og MIN-lagene.

**Expectimax (L8 s. 4–7, L13).** Når motstanderen velger tilfeldig, blir MIN-nodene chance nodes som tar vektet snitt. Navnet expectimax står ikke i kapittel 6, men er forelest og derfor pensum.

**Expectiminimax (6.5, L8 s. 29–31).**
EXPECTIMINIMAX(s) = UTILITY(s) hvis terminal; max over a hvis MAX; min over a hvis MIN; Σᵣ P(r)·EXPECTIMINIMAX(RESULT(s, r)) hvis CHANCE.
Tidskostnaden blir O(bᵐnᵐ), der n er antall ulike utfall. Med n = 21 og b ≈ 20 rekker backgammon ca. 3 ply. Chance nodes kan prunes hvis utility er begrenset (boka). L8 s. 32 foreslår MCTS der hver playout kaster terningene.

**Eval i sjansespill må være lineær (6.5.1, kun bok).** Med chance nodes betyr størrelsen på verdiene noe, ikke bare rekkefølgen. Fig. 6.14: en rekkefølgebevarende transformasjon av bladene snur valget. Eval må være en positiv lineær transformasjon av vinnersjansen (eller av forventet utility).

**Partially observable games (6.6).** *Kriegspiel*: du ser bare dine egne brikker. En dommer ser alt og melder «illegal», slag og sjakk. Alle brett som passer med det du har hørt, er din *belief state* (kap. 4, E05). Etter ett trekk hver er det 20 mulige brett. En strategi må ha et trekk for hver mulig sekvens av meldinger.
- *Guaranteed checkmate*: virker for alle brett i belief state, uansett motstanderens trekk. Finnes med AND-OR-søk. Fig. 6.15: KRK på 4×4-brett, hvit konge d2, tårn d3, svart konge på a4, b4 eller c4. «Kc3?» gir «OK» (a4) eller «Illegal» (b4/c4). «Rc3?» gir så «OK» (b4) eller «Check» (c4).
- *Probabilistic checkmate*: virker også for alle brett, men hvit trekker tilfeldig selv. KBNK vinnes med sannsynlighet 1, KBBK med 1 − ε. Optimal spill med skjult info krever litt tilfeldighet.

**Card games og averaging over clairvoyance (6.6.2, kun bok).** Utdelingen er én chance node i roten, deretter et fullt observerbart spill. Fristende metode: løs hver utdeling som om du ser alle kort, og ta snittet. Bokas moteksempel: vei A gir én gullkrukke, vei B et veiskille. Dag 1 gir venstre to krukker og høyre en buss, dag 2 omvendt. Dag 3 vet du ikke hvilken som er hvilken, men metoden sier B, fordi den tror du vet svaret ved veiskillet. Den samler derfor aldri informasjon, skjuler aldri informasjon og bløffer aldri. Bridge har 10 400 600 mulige fordelinger av de skjulte kortene, så du sampler 100–1000.

**Regret minimization (L8 s. 34–40).** Ikke i kapittel 6, men forelest. I stein, saks, papir velger begge samtidig. *Regret* for et trekk = det trekket ville gitt − det du fikk. Regrets summeres over rundene. *Regret matching*: sett negative summerte regrets til 0 og del på summen, så får du neste blandede strategi. L8 s. 40: «The average probabilities of each player's actions converge to the Nash equilibrium as the number of iterations approaches infinity». Pluribus (poker, 2019) brukte regret minimization, MCTS og self-play.

## Algoritmer og håndsporing

**H-MINIMAX (kortform):**
```
H-MINIMAX(s, d) = EVAL(s)                                  hvis IS-CUTOFF(s, d)
                = max_a H-MINIMAX(RESULT(s, a), d + 1)      hvis MAX
                = min_a H-MINIMAX(RESULT(s, a), d + 1)      hvis MIN
```

**Materialeval i videoen (ILLUSTRASJON, egen stilling):**

| | ♛ | ♜ | ♝ | ♞ | ♟ | |
|---|---|---|---|---|---|---|
| wᵢ (boka) | 9 | 5 | 3 | 3 | 1 | |
| fᵢ = hvit − svart | 0 | +1 | −1 | 0 | +1 | |
| wᵢ·fᵢ | 0 | +5 | −3 | 0 | +1 | = +3 |

**Cutoff-treet i videoen (ILLUSTRASJON):** MAX-rot, tre MIN-noder, eval ved dybde 2: (3, 7), (2, 9), (5, 4). MIN gir 3, 2, 4. Roten tar max = 4 og velger høyre gren.

**MCTS, én iterasjon på Fig. 6.10.** Roten teller hvite seire, barna svarte, barnebarna hvite og så videre. Tellingene på stien er konsistente: 37 = 100 − (60 + 1 + 2), 79 = 26 + 53, 53 = 35 + 18.

UCB1 på roten (N = 100, ln 100 ≈ 4,605, C = √2):

| Barn | U/N | C·√(ln 100 / N) | UCB1 |
|---|---|---|---|
| 60/79 | 0,759 | 0,341 | **1,101** |
| 1/10 | 0,100 | 0,960 | 1,060 |
| 2/11 | 0,182 | 0,915 | 1,097 |

Med C = 1,5 blir det 1,122, 1,118 og **1,152**, så 2/11 velges.
Nivå 2 (N = 79, hvit velger): 16/53 → **0,708**, 3/26 → 0,695. Nivå 3 (N = 53, svart velger): 27/35 → **1,248**, 10/18 → 1,220. Stien 37/100 → 60/79 → 16/53 → 27/35 er bokas.

| Fase | Hva skjer |
|---|---|
| Expansion | nytt barn under 27/35, 0/0 |
| Simulation | playout, svart vinner |
| Back-propagation | 0/0 → 0/1, 27/35 → 28/36, 16/53 → 16/54, 60/79 → 61/80, 37/100 → 37/101 |

(Bokteksten skriver «28/26», figuren har 28/36. Sidegrenene under 1/10 og 2/11 i figuren har tellinger som ikke går opp, og videoen viser dem dempet.)

**Bøttespillet (L8 s. 4–7).** Bøtter A {−50, 50}, B {3, 1}, C {−5, 15}. Du velger bøtte, motstanderen et tall.

| Bøtte | Minimax (MIN) | Expectimax (snitt, p = 0,5) |
|---|---|---|
| A | −50 | 0 |
| B | **1** | 2 |
| C | −5 | **5** |

Minimax velger B, expectimax C.

**Modifisert bøttespill (L8 s. 29–31).** Etter valget kastes en mynt. Kron flytter én bøtte til venstre (A rundt til C), mynt lar bøtta stå. Så velger MIN.

| Valg | Kron/mynt gir | MIN-verdier | Chance |
|---|---|---|---|
| A | A, C | −50, −5 | 0,5·(−50) + 0,5·(−5) = −27,5 |
| B | B, A | 1, −50 | 0,5·1 + 0,5·(−50) = −24,5 |
| C | C, B | −5, 1 | 0,5·(−5) + 0,5·1 = **−2** |

Roten: max = −2, velg C.

**Fig. 6.14.** MAX → a1, a2 → chance (0,9 / 0,1) → MIN → to like blader.

| Blader | a1 | a2 | Valg |
|---|---|---|---|
| 1, 2, 3, 4 (MIN: 2, 3 \| 1, 4) | 0,9·2 + 0,1·3 = 2,1 | 0,9·1 + 0,1·4 = 1,3 | a1 |
| 1, 20, 30, 400 (MIN: 20, 30 \| 1, 400) | 0,9·20 + 0,1·30 = 21 | 0,9·1 + 0,1·400 = 40,9 | a2 |
| 2x + 10 på 1–4 | 2·2,1 + 10 = 14,2 | 2·1,3 + 10 = 12,6 | a1 |

**Regret matching (L8 s. 37–38).** Rekkefølge: stein, papir, saks.

| Steg | Stein | Papir | Saks |
|---|---|---|---|
| Runde 1: du stein, motstander papir, du fikk −1 | | | |
| ville gitt | −1 | 0 | +1 |
| regret (− (−1)) | 0 | 1 | 2 |
| strategi (0, 1, 2)/3 | 0 | ⅓ | ⅔ |
| Runde 2 (ILLUSTRASJON): du saks, motstander stein, du fikk −1 | | | |
| ville gitt | 0 | +1 | −1 |
| regret | 1 | 2 | 0 |
| summert | 1 | 3 | 2 |
| strategi (1, 3, 2)/6 | ⅙ | ½ | ⅓ |

Lysbildet viser (−1, 1, 2) → (0, 1, 2) → (0, ⅓, ⅔).

**Mot fast motstander (L8 s. 36–38):** stein 0,25, papir 0,5, saks 0,25. Forventet gevinst: EV(stein) = −0,25, EV(papir) = 0, EV(saks) = 0,25·(−1) + 0,5·(+1) + 0,25·0 = 0,25. Regret matching ender på ren saks (simulert: (0, 0, 1) etter 2000 runder). Lærer begge, går gjennomsnittet mot (⅓, ⅓, ⅓) (simulert: ca. 0,333 hver etter 100 000 runder).

**Eksamen 2023, oppgave 6 (5 p).** Fagforeningen (MAX, A) krever 6 % (B) eller 10 % (C). B: 0,5 for bud 3 eller 4 (MIN D), 0,5 for 5 eller 6 (MIN E). C: 0,25 for 2 eller 4 (MIN F), 0,75 for 8 eller 10 (MIN G).

| Node | Regning | Verdi |
|---|---|---|
| D | min(3, 4) | 3 |
| E | min(5, 6) | 5 |
| F | min(2, 4) | 2 |
| G | min(8, 10) | 8 |
| B | 0,5·3 + 0,5·5 | 4 |
| C | 0,25·2 + 0,75·8 | 6,5 |
| A | max(4; 6,5) | **6,5** → krev 10 % |

Alle tall over, og svarene på Øv selv 6–7, er regnet ut i `videoer/e09-spill-avansert/verifiser.py`.

## Eksamensfeller

- **Hopper over MIN-laget.** Tar du snittet av bladene direkte i 2023/6, blir B = 0,5·3,5 + 0,5·5,5 = 4,5 og C = 0,25·3 + 0,75·9 = 7,5. Valget blir riktig, men verdiene er feil og gir trekk. Regn nedenfra: MIN før sjanse før MAX, og skriv alle mellomverdiene slik fasiten gjør.
- **Tror forward pruning er trygt.** Bare alpha-beta garanterer samme svar som minimax. Beam og ProbCut kan kaste det beste trekket.
- **MCTS returnerer høyest vinnerandel.** Nei, flest playouts (65/100 slår 2/3).
- **Tror eval bare må rangere riktig.** I deterministiske spill holder rekkefølgen (monoton transformasjon gir samme minimax-valg). Med chance nodes må eval være positiv lineær, ellers kan valget snu (Fig. 6.14).
- **Blander expectimax og expectiminimax.** Expectimax: MAX og chance (motstanderen modelleres som tilfeldig). Expectiminimax: MAX, MIN og chance. 2018 T/F påstår at expectimax passer bedre enn minimax i deterministiske miljøer. Det er usant.
- **Feil symbol.** △ = MAX, ▽ = MIN, ○ = chance node (2015 flervalg).
- **Lover for mye om regret.** L8 sier bare at *gjennomsnittet* av sannsynlighetene går mot Nash når antall iterasjoner går mot uendelig. Siste strategi kan svinge.
- **Kurs mot bok.** L8 bruker andre sjakkvekter (16/8/5/1) enn boka (9/5/3/3/1), og skriver figurene med US-nummer (Fig. 5.10 = Global 6.10).

## Koblinger til andre kapitler

- → 6.1–6.2 / E08: minimax, alpha-beta og move ordering. H-MINIMAX er alpha-beta med cutoff og eval, og iterative deepening gir bedre trekkrekkefølge.
- → 3.5–3.6 / E03: eval ≈ h(n). Beam search er samme idé som i 3.5.5, her brukt som forward pruning.
- → kap. 4 / E05: belief states og AND-OR-søk brukes direkte i Kriegspiel (guaranteed checkmate).
- → 17.2 (US 18.2) / E10: Nash-likevekt og blandede strategier. Regret matching er én måte å nærme seg dem på.

## Ikke pensum her

- Kontinuerlige tilstands- og handlingsrom: L13 s. 4 sier «Not in this course», med AlphaStar som eksempel. Videoen nevner det ikke.
- AlphaStar-detaljer (L8 s. 42: «top 0.2 percent»). Bokas kapittelnotater oppgir et annet tall. Ikke pugg tallet.
- Ellers er ingen delkapitler i 6.3–6.7 tatt ut. Quiescence, horizon effect, forward pruning, 6.5.1, 6.6.1, 6.6.2 og 6.7 står bare i boka, men er pensum.

## Øv selv

1. Eksamen 2023, oppgave 6 (5 p): fyll inn verdier, regn ExpectiMiniMax for alle ikke-terminale noder, og velg strategi.
2. Eksamen 2024, Q10: bøtter A {2, 3}, B {1, 6}, C {−2, −1}. Regn forventet verdi når motstanderen velger tilfeldig, og minimax-verdi når den velger lavest. Hva velger du i hvert tilfelle? (Q11 kjører alpha-beta på de samme bøttene, se E08.)
3. Eksamen 2022, 1.7: hvorfor er MCTS mindre følsom for feil i evalueringsfunksjonen enn alpha-beta?
4. Eksamen 2015, flervalg: hva betyr det tredje nodesymbolet (○) i en variant av minimax?
5. Eksamen 2018, sant/usant: «Expectimax is better suited for a deterministic environment than minimax.»
6. UCB1: regn UCB1 for barna under 60/79 i Fig. 6.10 med C = 1. Velges fortsatt 16/53?
7. Regret matching: fortsett tabellen med runde 3, der du spiller papir og motstanderen saks.

## Fasit

**Quizene i videoen:**
- Kap. 1: forward pruning (B). Alpha-beta kutter bare det som beviselig ikke endrer svaret.
- Kap. 2: 65/100 (A). MCTS returnerer trekket med flest playouts.
- Kap. 3: fortsatt a1 (A). 2·2,1 + 10 = 14,2 mot 2·1,3 + 10 = 12,6. Positiv lineær bevarer valget.
- Kap. 4: regret (1, 2, 0), summert (1, 3, 2), strategi (⅙, ½, ⅓).

**Øv selv:**
1. D = 3, E = 5, F = 2, G = 8, B = 4, C = 6,5, A = 6,5. Krev 10 %, fordi forventet verdi 6,5 > 4.
2. Fasiten: forventet verdi 2,5, 3,5 og −1,5, velg B (3,5). Minimax 2, 1 og −2, velg A (2).
3. Fasiten: alpha-beta virker når forgreningen ikke er for stor og verdien er et godt mål på hvem som leder. MCTS simulerer og bruker snittet av vinnerandelen, som er en bedre indikator i spill som Go. Sagt med videoens ord: én feil eval kan styre alpha-beta, mens MCTS jevner ut feil over mange playouts.
4. Fasiten: C, et element av tilfeldighet (chance node).
5. Fasiten: F (usant). Expectimax er laget for miljøer med tilfeldighet.
6. C = 1: 16/53 → 0,302 + √(ln 79 / 53) = 0,302 + 0,287 = 0,589. 3/26 → 0,115 + √(ln 79 / 26) = 0,115 + 0,410 = 0,525. Ja, 16/53 velges fortsatt.
7. Papir mot saks gir −1. Ville gitt (stein +1, papir −1, saks 0), regret (2, 0, 1), summert (1, 3, 2) + (2, 0, 1) = (3, 3, 3), strategi (⅓, ⅓, ⅓).
