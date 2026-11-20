# TDT4136 H26: pensumkompendium

Dette er alle de 21 episodenotatene i én fil, i pensumrekkefølge. Den genereres av `lag-kompendium.py` fra `notater/`, så rett i notatet og kjør skriptet på nytt i stedet for å redigere her.

Eksamen er mandag 07.12.2026 kl. 15:00 i Inspera (4 timer, hjelpemiddelkode D). Seksjonsnumrene er Global; US-nummeret står i parentes der det er forskjellig. Hver episode slutter med «Øv selv» og så «Fasit», så prøv selv før du blar ned.

[Alle eksamensfeller samlet](#feller) står bakerst og kan brukes som sjekkliste den siste uka.

| Ep | Tema | Pensum | Video |
|---|---|---|---|
| [E01](#e01) | Hva er AI, og hva er en rasjonell agent? | Global 1.1–1.5, 2.1–2.4.7 (US samme nummer) | [13:59](e01-agenter/out/tdt4136-e01-agenter.mp4) |
| [E02](#e02) | Søk uten kart: BFS, UCS, DFS og IDS | Global 3.1–3.4 (US samme nummer) | [15:40](e02-uinformert-sok/out/tdt4136-e02-uinformert-sok.mp4) |
| [E03](#e03) | A* og kunsten å gjette godt | Global 3.5–3.6 (US samme) | [16:05](e03-astar-heuristikker/out/tdt4136-e03-astar-heuristikker.mp4) |
| [E04](#e04) | Lokalt søk: å klatre uten kart | Global 4.1–4.2 (samme nummer i US) | [11:52](e04-lokalt-sok/out/tdt4136-e04-lokalt-sok.mp4) |
| [E05](#e05) | Når verden ikke adlyder: AND-OR, belief states og online søk | Global 4.3–4.5 (US samme) | [13:01](e05-usikre-miljoer/out/tdt4136-e05-usikre-miljoer.mp4) |
| [E06](#e06) | CSP 1: modellering og constraint propagation | Global 5.1–5.2 (US 6.1–6.2) | [16:00](e06-csp-propagering/out/tdt4136-e06-csp-propagering.mp4) |
| [E07](#e07) | CSP 2: backtracking, heuristikker og min-conflicts | Global 5.3–5.4 (US 6.3–6.4), uten 5.3.3–5.3.4 | [15:58](e07-csp-sok/out/tdt4136-e07-csp-sok.mp4) |
| [E08](#e08) | Spill 1: minimax og alpha-beta | Global 6.1–6.2 (US 5.1–5.2) | [14:46](e08-minimax-alfabeta/out/tdt4136-e08-minimax-alfabeta.mp4) |
| [E09](#e09) | Spill 2: evalueringsfunksjoner, MCTS, sjanse og skjult info | Global 6.3–6.7 (US 5.3–5.7) | [14:30](e09-spill-avansert/out/tdt4136-e09-spill-avansert.mp4) |
| [E10](#e10) | Spillteori: Nash, dominans og gjentatte spill | Global 17.2.1–17.2.3 (US 18.2.1–18.2.3) | [14:33](e10-spillteori/out/tdt4136-e10-spillteori.mp4) |
| [E11](#e11) | Logikk 1: modeller, entailment og sannhetstabeller | Global 7.1–7.4 (US 7.1–7.4, samme nummer) | [15:25](e11-proposisjonslogikk-1/out/tdt4136-e11-proposisjonslogikk-1.mp4) |
| [E12](#e12) | Logikk 2: inferensregler, CNF og resolution | Global 7.5–7.5.4 (US samme nummer) | [15:22](e12-resolusjon-pl/out/tdt4136-e12-resolusjon-pl.mp4) |
| [E13](#e13) | SAT: DPLL og WalkSAT | Global 7.6–7.6.3 (US samme nummer) | [11:04](e13-dpll-walksat/out/tdt4136-e13-dpll-walksat.mp4) |
| [E14](#e14) | Førsteordens logikk: å si «alle» og «noen» | Global 8.1–8.4 (US samme nummer) | [15:52](e14-forsteordens-logikk/out/tdt4136-e14-forsteordens-logikk.mp4) |
| [E15](#e15) | FOL-inferens 1: unification, GMP og chaining | Global 9.1–9.4.1 (US 9.1–9.4.1, samme nummer) | [15:00](e15-fol-inferens/out/tdt4136-e15-fol-inferens.mp4) |
| [E16](#e16) | FOL-inferens 2: CNF og resolution steg for steg | Global 9.5 uten 9.5.4 (US 9.5, samme nummer) | [15:11](e16-fol-resolusjon/out/tdt4136-e16-fol-resolusjon.mp4) |
| [E17](#e17) | Kunnskapsrepresentasjon: ontologier, hendelser og semantiske nett | Global 10.1–10.3 og 10.5 (US samme nummer); 10.3.2 kun bok; 10.2.3 ute etter Canvas | [13:57](e17-kunnskapsrepresentasjon/out/tdt4136-e17-kunnskapsrepresentasjon.mp4) |
| [E18](#e18) | Planlegging 1: PDDL, forward og backward search | Global 11.1–11.3 (US samme nummer), uten 11.1.2, 11.1.3, 11.2.3, 11.2.4, 11.3.1, 11.3.2 | [13:13](e18-planlegging-1/out/tdt4136-e18-planlegging-1.mp4) |
| [E19](#e19) | Planlegging 2: hierarkier og en usikker verden | Global 11.4–11.5 og 11.7 (US samme nummer), uten 11.4.3 | [11:56](e19-planlegging-2/out/tdt4136-e19-planlegging-2.mp4) |
| [E20](#e20) | Språk: språkmodeller, tagging og parsing | Global 24.1–24.3 og 24.6 (US 23.1–23.3 og 23.6); kap. 25 (US 24) som oversikt, status uavklart | [14:03](e20-nlp/out/tdt4136-e20-nlp.mp4) |
| [E21](#e21) | Kan maskiner tenke, og hva bør de gjøre? | Global 28.1–28.3 (US 27.1–27.3) uten 28.3.5–28.3.6 (Canvas) + 1.5/1.1.5 | [13:53](e21-filosofi-etikk/out/tdt4136-e21-filosofi-etikk.mp4) |

---

<a id="e01"></a>

## E01 – Hva er AI, og hva er en rasjonell agent?

> Pensum: Global 1.1–1.5, 2.1–2.4.7 (US samme nummer) · Forelesning: L1 del 1 og 3 · Øving: – · Eksamensvekt: ~6 %
> Video: `videoer/e01-agenter/out/tdt4136-e01-agenter.mp4` (13:59)

### Kapitler i videoen

- 0:00 – Intro
- 0:26 – Fire svar på «hva er AI?»
- 2:18 – Røtter, historie og risiko
- 3:15 – Agent og miljø
- 4:13 – Rasjonalitet
- 5:57 – PEAS og miljøegenskaper
- 8:23 – Agentprogrammer
- 10:30 – Representasjoner
- 11:33 – Eksamen 2022, oppgave 2
- 13:04 – Kart over kurset

### Kjerneideer

Figurnumrene i notatet er fra US-teksten i `_kilder/`. Seksjonsnumrene er de samme i Global, men figurnumrene er ikke sjekket mot Global.

**Fire svar på «hva er AI?» (1.1).** Definisjonene deles langs to akser: skal maskinen *tenke* eller *handle*, og måles den mot *mennesker* eller mot et ideal, *rationality*?

| | Menneskelig | Rasjonelt |
|---|---|---|
| Tenke | Thinking humanly: cognitive modeling | Thinking rationally: «laws of thought» |
| Handle | Acting humanly: Turing test | **Acting rationally: rational agent** (boka og kurset) |

- **Acting humanly (1.1.1).** I *Turing test* (1950) skriver en utspørrer med et menneske og en maskin. Klarer hun ikke å skille dem, består maskinen. Det krever fire evner: natural language processing, knowledge representation, automated reasoning og machine learning. *Total Turing test* legger til fysisk interaksjon og to evner til: computer vision og speech recognition, og robotics. Til sammen seks. Testen måler oppførsel, ikke tanke.
- **Thinking humanly (1.1.2).** *Cognitive modeling* prøver å finne ut hvordan mennesker faktisk tenker, gjennom introspeksjon, psykologiske eksperimenter og hjerneavbildning. *Cognitive science* setter AI-modeller sammen med eksperimenter. Eksempel: GPS («General Problem Solver») fra Newell og Simon.
- **Thinking rationally (1.1.3).** *Laws of thought* bygger på Aristoteles' syllogismer: «Sokrates er et menneske, alle mennesker er dødelige, altså er Sokrates dødelig.» Det er logikkens tradisjon. Det har to problemer: verden er usikker, så vi trenger sannsynlighet, og riktige slutninger gir ingen handling i seg selv. L1 sier i tillegg at generell deduksjon er intractable.
- **Acting rationally (1.1.4).** En *rational agent* handler for å oppnå best utfall, eller best *forventet* utfall når det er usikkerhet. Korrekt slutning er bare én måte å være rasjonell på. En refleks, som å trekke hånda fra kokeplata, er rasjonell uten noen slutning. Tilnærmingen er mer generell enn laws of thought og lar seg definere matematisk. Boka kaller det *standard model*: vi gir maskinen et fast mål, og maskinen maksimerer.
- **Beneficial machines (1.1.5, kun bok).** Standardmodellen forutsetter at målet er riktig spesifisert, og det er vanskelig. En selvkjørende bil med «trygghet» som eneste mål blir stående i garasjen. Å få maskinens mål til å stemme med våre er *value alignment problem*. Kong Midas fikk ønsket sitt oppfylt bokstavelig: alt han rørte ble til gull, også maten. Boka vil ha maskiner som er *provably beneficial*. De vet at de ikke kjenner målet helt, så de handler forsiktig og spør.

**Grunnlaget (1.2).** AI bygger på åtte fag: filosofi, matematikk, økonomi, nevrovitenskap, psykologi, datateknikk, kontrollteori og kybernetikk, og lingvistikk.

**Historien (1.3).** Epokene står slik i boka. AI-vinteren er tatt fra L1-slidene.

| Periode | Stikkord |
|---|---|
| 1943–1956 inception | 1943: McCulloch og Pitts lager kunstige nevroner. 1950: Turing-testen. 1956: Dartmouth-møtet gir feltet navnet. |
| 1952–1969 early enthusiasm | GPS, *physical symbol system hypothesis* (Newell og Simon): «a physical symbol system has the necessary and sufficient means for general intelligent action» |
| 1966–1973 dose of reality | Kombinatorisk eksplosjon. Lighthill-rapporten 1973. |
| 1969–1986 expert systems | Domenekunnskap i regler. L1: «AI Winter» 1988–93, da ekspertsystembransjen kollapset. |
| 1986– neural networks return | Backpropagation tas i bruk igjen. |
| 1987– probabilistic reasoning and ML | Pearl 1988 |
| 2001– big data | Store datasett |
| 2011– deep learning | ImageNet 2012 |

Searle mente det motsatte av Newell og Simon: å manipulere symboler er ikke nok til å ha forståelse (Chinese room, 28.2). Det ble forelest i L1, og eksamen 2017 spurte om det.

**I dag og risiko (1.4–1.5, kun bok).** Boka viser blant annet robottaxier i trafikk, maskinoversettelse for over 100 språk, AlphaGo og diagnoser fra medisinske bilder. Den nevner seks risikoer: autonome våpen, overvåking og påvirkning, skjeve beslutninger (biased decision making), arbeidsplasser, sikkerhetskritiske systemer og cybersikkerhet. Etikken kommer i kap. 28 (E21).

**Agent og miljø (2.1).**
- En *agent* oppfatter miljøet (*environment*) gjennom *sensors* og påvirker det med *actuators*.
- *Percept* er det agenten oppfatter akkurat nå. *Percept sequence* er alt den har oppfattet. Agenten kan bygge på hele sekvensen, men aldri på noe den ikke har oppfattet.
- *Agent function* er en abstrakt, matematisk avbildning fra **hver mulig percept sequence** til en handling. Du kan tenke på den som en uendelig tabell.
- *Agent program* er koden som implementerer funksjonen og kjører på en fysisk *architecture*. Agent = architecture + program.

**Støvsugerverdenen.** Den har to ruter, A og B. Perceptet er `[location, status]`, for eksempel `[A, Dirty]`. Handlingene er Left, Right og Suck. Reglen: er det skittent, sug, ellers flytt til den andre ruta.

**Rasjonalitet (2.2).** Boka dømmer etter konsekvenser (*consequentialism*): handlingene fører miljøet gjennom en rekke tilstander, og *performance measure* gir poeng til hele rekka.
- **Mål det du vil ha i miljøet, ikke hvordan agenten skal oppføre seg.** Gir du poeng per klump skitt som suges opp, er det rasjonelt å suge, tømme ut og suge igjen. Bedre er ett poeng per ren rute per tidssteg.
- Hva som er rasjonelt avhenger av fire ting: performance measure, agentens forkunnskap om miljøet, handlingene den kan gjøre, og percept sequence så langt.
- **Definisjon:** For hver mulig percept sequence skal en rasjonell agent velge den handlingen som forventes å gi høyest performance measure, gitt det perceptene viser og det agenten vet fra før.
- Støvsugeren er rasjonell under bokas antakelser. Koster hvert flytt ett poeng, er det irrasjonelt å pendle fram og tilbake i et rent rom. Da er det bedre å gjøre ingenting når agenten vet at alt er rent.
- **Rasjonell er ikke perfekt.** Du ser deg for og går over gata, så faller en lastedør av et fly og treffer deg. Valget var likevel rasjonelt. En rasjonell agent maksimerer *forventet* ytelse. En perfekt agent maksimerer *faktisk* ytelse, og det krever *omniscience*.
- Å se seg for er en del av det å være rasjonell: *information gathering* og exploration.
- **Learning og autonomy.** Ta kula fra en gjødselbille underveis, og den tetter reiret likevel med en kule som ikke finnes. Den følger bare den innebygde planen. En *autonom* agent lærer av egne percepter og retter opp forkunnskap som er feil eller mangler.

**PEAS (2.3.1).** *Task environment* beskrives med Performance measure, Environment, Actuators og Sensors. Fig. 2.4 i boka gir disse verdiene for en automatisert taxi:

| | Taxi (Fig. 2.4) |
|---|---|
| P | safe, fast, legal, comfortable trip, maximize profits, minimize impact on other road users |
| E | roads, other traffic, police, pedestrians, customers, weather |
| A | steering, accelerator, brake, signal, horn, display, speech |
| S | cameras, radar, speedometer, GPS, engine sensors, accelerometer, microphones, touchscreen |

Målene står i konflikt med hverandre, for eksempel fart og trygghet, så det må gjøres avveininger.

**Sju miljøegenskaper (2.3.2).**

| Akse | Verdier | Test | Taxi |
|---|---|---|---|
| Observable | fully / partially / unobservable | Ser sensorene alt som er relevant for valget? | partially |
| Agents | single / multi (competitive, cooperative) | Er det andre agenter i miljøet? | multi |
| Deterministic | deterministic / nondeterministic / stochastic | Følger neste tilstand helt av tilstand og handling? | stochastic |
| Episodic | episodic / sequential | Står hver episode alene, eller påvirker valget nå framtiden? | sequential |
| Static | static / semidynamic / dynamic | Venter verden mens agenten tenker? Semi: bare klokka (poengene) endrer seg. | dynamic |
| Discrete | discrete / continuous | Gjelder for tilstander, tid, percepter og handlinger. | continuous |
| Known | known / unknown | Kjenner agenten (eller designeren) reglene, altså utfallet av handlingene? | (ikke i Fig. 2.6) |

- **Er B en agent?** Ja, hvis B best beskrives som en som maksimerer et performance measure som avhenger av det A gjør. Sjakk er *competitive*. Taxier er delvis *cooperative*, fordi alle vil unngå kollisjon, og delvis competitive, fordi de konkurrerer om parkeringsplasser.
- **Stochastic eller nondeterministic:** stochastic gir utfallene sannsynligheter, mens nondeterministic bare lister mulige utfall.
- **Known er ikke det samme som fully observable.** Kabal er known, men partially observable. Et nytt dataspill kan være fully observable, men unknown.

Bokas tabell (Fig. 2.6, sjekket mot boka av `verifiser.py`):

| Task environment | Observable | Agents | Deterministic | Episodic | Static | Discrete |
|---|---|---|---|---|---|---|
| Crossword puzzle | Fully | Single | Deterministic | Sequential | Static | Discrete |
| Chess with a clock | Fully | Multi | Deterministic | Sequential | Semi | Discrete |
| Poker | Partially | Multi | Stochastic | Sequential | Static | Discrete |
| Backgammon | Fully | Multi | Stochastic | Sequential | Static | Discrete |
| Taxi driving | Partially | Multi | Stochastic | Sequential | Dynamic | Continuous |
| Medical diagnosis | Partially | Single | Stochastic | Sequential | Dynamic | Continuous |
| Image analysis | Fully | Single | Deterministic | Episodic | Semi | Continuous |
| Part-picking robot | Partially | Single | Stochastic | Episodic | Dynamic | Continuous |
| Refinery controller | Partially | Single | Stochastic | Sequential | Dynamic | Continuous |
| English tutor | Partially | Multi | Stochastic | Sequential | Dynamic | Discrete |

Svarene er ikke alltid opplagte. Skriv derfor antakelsen din. Eksamensnotatet fra 2016 og fasitene for 2020 og 2021 sier rett ut at begrunnede alternativer godtas.

**Agentprogrammer (2.4).** Målet er rasjonell oppførsel fra et *lite* program, ikke fra en gigantisk tabell.

| Type | Hva den husker | Hvordan den velger handling | Merknad |
|---|---|---|---|
| Simple reflex | ingenting, bare perceptet nå | *condition-action rule* (rule matching) | Fungerer bare godt når miljøet er fully observable. |
| Model-based reflex | intern *state*, holdt oppdatert med *transition model* (hvordan verden endrer seg og hva handlingene gjør) og *sensor model* | fortsatt rule matching på state | State er bare en beste gjetning. |
| Goal-based | state og *goal* | ser framover: «hva skjer hvis jeg gjør A?», altså søk og planlegging | Ny destinasjon? Bare bytt målet. |
| Utility-based | state og *utility function* | høyest *expected utility* | Utility er performance measure inni agenten. Kan veie fart mot trygghet. |
| Learning | hvilken som helst av de fire over, som *performance element* | *critic* sammenligner med en fast *performance standard*, *learning element* forbedrer agenten, *problem generator* foreslår nye forsøk | Alle typene kan lære. |

**Representasjoner (2.4.7, kun bok).**
- *Atomic*: tilstanden er en svart boks uten indre struktur, som bynavnet «Arad».
- *Factored*: variabler med verdier, som bensin, GPS-posisjon og bompenger.
- *Structured*: objekter og relasjoner, som `Ku(k)`, `Lastebil(l)` og `Sperrer(k, l)`.
- Mot høyre øker uttrykkskraften, og prisen er tyngre resonnering og læring. Sjakkreglene tar «a page or two» i førsteordens logikk, «thousands of pages» i proposisjonslogikk og rundt 10^38 sider som atomisk automat.
- *Localist* representasjon lagrer ett begrep på ett sted. Noen feil bits kan da gjøre Truck til Truce, et helt urelatert begrep. *Distributed* representasjon gjør begrepet til et punkt i et rom, så støy gir et nabobegrep (Truck → Lorry). Den er altså mer robust.

### Algoritmer og håndsporing

**Pseudokode i kortform (2.4).**

```
TABLE-DRIVEN-AGENT(percept):
  legg percept til percepts            # hele sekvensen huskes
  return LOOKUP(percepts, table)

REFLEX-VACUUM-AGENT([location, status]):
  if status = Dirty: return Suck
  elif location = A: return Right
  elif location = B: return Left

SIMPLE-REFLEX-AGENT(percept):
  state  ← INTERPRET-INPUT(percept)
  rule   ← RULE-MATCH(state, rules)
  return rule.ACTION

MODEL-BASED-REFLEX-AGENT(percept):
  state  ← UPDATE-STATE(state, action, percept, transition_model, sensor_model)
  rule   ← RULE-MATCH(state, rules)
  action ← rule.ACTION
  return action
```

**Støvsugertabellen (Fig. 2.3, utsnitt).** Tabellen har én rad per percept sequence:

| Percept sequence | Action |
|---|---|
| [A, Clean] | Right |
| [A, Dirty] | Suck |
| [B, Clean] | Left |
| [B, Dirty] | Suck |
| [A, Clean], [A, Clean] | Right |
| [A, Clean], [A, Dirty] | Suck |
| [A, Clean], [A, Clean], [A, Clean] | Right |
| [A, Clean], [A, Clean], [A, Dirty] | Suck |

**Vakuumsporet fra videoen (ILLUSTRASJON).** Performance measure er ett poeng per ren rute per tidssteg. Starttilstanden telles med. Tilstanden skrives (robot, A, B).

| t | Tilstand | Handling (REFLEX-VACUUM-AGENT) | Rene ruter = poeng |
|---|---|---|---|
| 0 | (A, Dirty, Dirty) | Suck | 0 |
| 1 | (A, Clean, Dirty) | Right | 1 |
| 2 | (B, Clean, Dirty) | Suck | 1 |
| 3 | (B, Clean, Clean) | Left | 2 |
| 4 | (A, Clean, Clean) | – | 2 |
| | | **Sum** | **6** |

Med «poeng per skitt sugd opp» lønner det seg i stedet å suge, tømme ut og suge igjen, og summen har ingen øvre grense.

**Tabellstørrelse (2.4.1).** La P være mengden mulige percepter og T levetiden. Da har tabellen

  Σ_{t=1}^{T} |P|^t rader.

| Tilfelle | Størrelse (boka) |
|---|---|
| Atomer i det observerbare universet | færre enn 10^80 |
| Sjakk | minst 10^150 rader |
| Taxi, én time med kamerainput | over 10^600 000 000 000 rader |

Ingen fysisk agent kan lagre tabellen, ingen designer rekker å fylle den ut, og ingen agent kan lære alle radene. Derfor trenger vi et lite program.

**Simple reflex uten lokasjonssensor (2.4.2).** Perceptet er bare `[Dirty]` eller `[Clean]`. En deterministisk regel for `[Clean]`, for eksempel «alltid Left», går i evig løkke hvis agenten står i A, fordi Left fra A ikke flytter den. Med myntkast mellom Left og Right flytter agenten seg mot den andre ruta med sannsynlighet 1/2 i hvert steg. Forventet antall steg blir da Σ k·(1/2)^k = 2, som er bokas «an average of two steps».

**Agenttype for eksamen 2022, oppgave 2 (butikkroboten).** Løsningsforslaget gir PEAS:
- P: safe, fast, maximize scanned products, minimize collisions
- E: aisles, customers, employees, other robots, shelves, products
- A og S: camera, scanner, ultrasonic sensor, collision sensor, display, wheels. Wheels og display er aktuatorer, resten er sensorer.

Fasiten klassifiserer *ikke* miljøet, selv om oppgaven ber om det. Denne klassifiseringen er min, laget etter bokas definisjoner:

| Akse | Verdi | Begrunnelse |
|---|---|---|
| Observable | partially | Roboten ser noen meter, men ikke bak hyllene. |
| Agents | multi | Kunder, ansatte og andre roboter. |
| Deterministic | stochastic | Folk beveger seg uforutsigbart. |
| Episodic | sequential | Ruten nå avgjør hva som gjenstår. |
| Static | dynamic | Folk flytter seg mens roboten tenker. |
| Discrete | continuous | Posisjon, fart og styring. |
| Known | known* | *Antakelse: designeren kjenner utfallene av handlingene, med sannsynligheter siden miljøet er stochastic. Et kart over butikken handler om hva roboten vet om tilstanden, ikke om known. |

Agenttype (2.2): **model-based, goal-based agent**. Miljøet er partially observable, så roboten trenger en modell, og den har et mål: skanne alle varene. Tegn figuren «A model-based, goal-based agent» (Fig. 2.13 i US-teksten): sensors → «What the world is like now» (med state, «How the world evolves» og «What my actions do») → «What it will be like if I do action A» → sammen med goals → «What action I should do now» → actuators.

### Eksamensfeller

- **«Rasjonell = perfekt» er feil.** Rasjonell maksimerer forventet ytelse, gitt percept sequence og forkunnskap. Perfekt krever omniscience.
- **Agent function avbilder hele percept sequence**, ikke bare siste percept. 2024-fasiten måtte presisere dette, fordi et alternativ sa «map the percepts».
- **Agent function er ikke agent program.** Funksjonen er den abstrakte avbildningen. Programmet er koden som kjører på arkitekturen.
- **Transition model er ikke mengden handlinger.** Den sier hva som blir resultatet av en handling i en tilstand (2024 Q1).
- **«Bare» og «alltid» i påstander.** Støvsugeren uten lokasjonssensor *kan* bruke randomisering, men randomisering er ikke den eneste måten (2024 Q1, der to alternativer ble godtatt).
- **Model-based reflex velger fortsatt med regler.** Modellen gir bare bedre input til reglene. Goal-based krever søk og planlegging (2025 Q1: Rule matching; Rule matching; Search and Plan).
- **Performance measure skal handle om miljøet, ikke om oppførselen.** Ellers får du støvsugeren som tømmer ut skitt.
- **Known er ikke fully observable.** Kabal er known, men partially observable.
- **Backgammon er stochastic** (terninger), ikke deterministic (2017). Sjakk med klokke er *semi*(dynamic). Medical diagnosis er *single* agent. Image analysis er *episodic*.
- **Stochastic eller nondeterministic?** Med sannsynligheter er det stochastic. Er utfallene bare listet, er det nondeterministic.
- **«Strategic» står ikke i kap. 2 i 4e.** Begrepet dukket opp i fasiten for 2021, som også godtok deterministic, stochastic og strategic. Med 4e bør du si multiagent og så stochastic eller deterministic, med begrunnelse.
- **Turing-testen måler oppførsel** (acting humanly). Agenten trenger ikke tenke som et menneske (2015) og trenger ikke sound logical reasoning (2019, sant).
- **PSSH er Newell og Simon**, ikke Searle. Searle mente det motsatte (2017).
- **Begrunn og skriv antakelser.** Når oppgaven ber om «environment properties», vil sensor ha egenskapene (fully/partially osv.) med begrunnelse, ikke bare en liste over ting i miljøet. Løsningsforslaget for 2022 listet bare tingene, så gjør begge deler.

### Koblinger til andre kapitler

- → kap. 3–4 / E02–E05: Problem-solving agents er goal-based agenter med atomic tilstander. Søk er hvordan de ser framover.
- → kap. 4 / E05: Miljøer som er partially observable og nondeterministic gir belief states, AND-OR-søk og contingency plans (2023 oppg. 7, 2024 Q2).
- → kap. 5 / E06–E07: CSP bruker factored representasjon. Variablene gir generelle heuristikker (2022 1.1).
- → kap. 6 / E08–E09: Spill er multiagent og competitive miljøer, og adversarial search. Boka (2.4.7) plasserer game-playing under atomic. Kurskartet i videoen samler spill under «flere agenter».
- → 17.2 / E10: Spillteori. Randomisert oppførsel kan være rasjonell når andre agenter konkurrerer (2017, 2018).
- → kap. 7 / E11–E13: Proposisjonslogikk er factored. Knowledge-based agents er model-based agenter med en kunnskapsbase.
- → kap. 8–10 / E14–E17: Førsteordens logikk og kunnskapsrepresentasjon er structured.
- → kap. 11 / E18–E19: Planlegging bruker factored representasjon. Planleggeren er en goal-based agent.
- → kap. 24 / E20: NLP er den første av Turing-testens fire evner.
- → kap. 28 / E21: Searle og Chinese room, PSSH, ELIZA, value alignment og risikoene fra 1.5. Spørsmålet om P i PEAS og etikk kom i 2021.

### Ikke pensum her

- Ingen seksjoner i 1.1–1.5 eller 2.1–2.4.7 er UT (PENSUMOVERSIKT, kap. 1 og 2).
- 1.1.5 Beneficial machines er pensum, men står bare i boka. Det ble ikke forelest (PENSUMOVERSIKT).
- 1.4 The State of the Art er pensum, men står bare i boka (PENSUMOVERSIKT).
- 1.5 Risks and Benefits of AI er pensum, men står bare i boka (PENSUMOVERSIKT).
- 2.4.7 How the components of agent programs work (representasjonene) er pensum, men står bare i boka (PENSUMOVERSIKT).
- Forelest, men ikke i boka, og dermed pensum etter punkt 1 i Syllabus: kursmålet («not to learn Machine Learning, LLM, ANN»), definisjonene til McCarthy, Minsky og Charniak, epoker som ikke står i boka (for eksempel AI-vinteren 1988–93), og roboten Sofia (L1 del 1; PENSUMOVERSIKT avsnitt 6).
- ELIZA-dialogen ble forelest i L1. Boka nevner ELIZA bare i 28.1.4. Searle og PSSH ble også forelest i L1 (boka: 28.2.1).

### Øv selv

1. En robotgressklipper har kamera, GPS og støtsensor. Skriv PEAS, og klassifiser miljøet på alle sju aksene med én begrunnelse per akse. Si hvilken antakelse som avgjør hvert svar som kunne gått begge veier.
2. Performance measure er ett poeng per ren rute per tidssteg (starttilstanden telles med), minus ett poeng per Left eller Right. Start i (A, Clean, Dirty). Spor REFLEX-VACUUM-AGENT i fire handlinger og regn ut summen. Hva får en agent som vet at alt er rent og deretter står stille?
3. I støvsugerverdenen er |P| = 4 percepter. Hvor mange rader har TABLE-DRIVEN-AGENT med levetid T = 3? Og med T = 10?
4. Sant eller usant? a) Et miljø som er known, er også fully observable. b) En model-based reflex agent velger handling med søk. c) Agent function avbilder siste percept til en handling. d) Sjakk med klokke er semidynamic. e) En rasjonell agent må være omniscient. f) Image analysis er episodic i Fig. 2.6.
5. Er tilstanden atomic, factored eller structured? a) `In(Arad)` i ruteplanlegging der byen bare er et navn. b) En fargelegging av regioner i en CSP. c) `Ku(k) ∧ Lastebil(l) ∧ Sperrer(k, l)`.
6. Forklar med støvsugeren uten lokasjonssensor hvorfor en simple reflex agent kan gå i løkke, og vis at myntkast gir forventet 2 steg til den andre ruta.
7. Gamle eksamensoppgaver:
   - 2022, oppgave 2 «Intelligent Agents – Grocery Store Robot»: 2.1 PEAS og miljøegenskaper med begrunnelse, 2.2 agenttype med figur (poeng ikke oppgitt i teksten). Se også 1.1 (factored eller atomic) og 1.2 (hvorfor en modell).
   - 2025, oppgave 1 «Intelligent Agents» (5 p).
   - 2024, Q1 «Agents» og Q2 «Mixture of chapters» (flervalg, poeng ikke oppgitt i fasitteksten).
   - 2023, oppgave 1 «Short questions»: HR-systemet (episodic eller sequential?) og hva en agent i et partially observable miljø trenger utover simple reflex.
   - 2021, oppgave 6 «Short questions» (20 p totalt): de tre representasjonene, P i PEAS og etikk, og orkidémiljøet (deterministic, stochastic eller strategic?).
   - 2020, «PEAS and Characteristics of the Environment»: minebåten (del av Short questions).
   - 2019, oppgave 1 sant/usant (2 p, −1 for feil): Turing-testen og sound reasoning. Oppgave 7 (2 p per spørsmål): støvsugeren der Suck feiler 10 % av gangene.
   - 2018, Problem 3 sant/usant (2 p, −1 for feil): «Principle of rationality». Problem 8: når kan randomisert oppførsel være rasjonell?
   - 2017, Problem 6 sant/usant (2 p hver, −1 for feil): randomisert oppførsel, «every agent is rational», Searle og PSSH, backgammon.
   - 2016, Task 1 «Task Environment» (10 p): Deep Blue, Roomba, Tesla-lakkrobot, Stats Monkey.
   - 2015, Problem 1 sant/usant (2 p): «An agent must think like a human in order to pass the Turing test». Problem 6 c (2 p): hvem var ikke med på Dartmouth-møtet?

### Fasit

**Quizene i videoen:**
- Kapittel 1 (eksamen 2015): **Usant.** Turing-testen måler oppførsel (acting humanly). Agenten trenger ikke tenke som et menneske.
- Kapittel 2: **Newell og Simon.** Searle mente det motsatte. (Eksamen 2017: påstanden om Searle er usann.)
- Kapittel 3: **Hele percept sequence**, ikke bare siste percept (presisert i 2024-fasiten).
- Kapittel 4 (eksamen 2017): **Sant.** Gir alle handlinger, også å gjøre ingenting, samme belønning, er hvert valg optimalt.
- Kapittel 5 (PEAS for part-picking robot, Fig. 2.5): P = percentage of parts in correct bins. E = conveyor belt with parts, bins. A = jointed arm and hand. S = camera, tactile and joint angle sensors. Videoen nevner kamera og berøringssensorer, og boka har i tillegg leddvinkelsensorer.
- Kapittel 6 (eksamen 2025, oppgave 1): **Alternativ A**, Rule matching; Rule matching; Search and Plan.
- Kapittel 7 (eksamen 2022, 1.1): Factored gir variabler med verdier som agenten kan regne med, for eksempel i heuristikker. Atomic gir bare «er dette målet: ja eller nei».

**Øv selv:**
1. Ett mulig svar. P: klippet areal, jevn klipp, ingen kollisjoner, lavt strømforbruk. E: plen, kanter, hindringer, vær, mennesker og dyr. A: hjul, kniv. S: kamera, GPS, støtsensor. Partially observable (ser ikke bak hindringer), multi eller single (single hvis du ser på dyr og mennesker som en del av naturen), stochastic (vær, GPS-feil), sequential, dynamic, continuous, og known hvis designeren kjenner utfallene av handlingene, med sannsynligheter siden miljøet er stochastic. Et kart over plenen avgjør ikke det. Andre svar godtas med begrunnelse.
2. (A,C,D) 1 → Right (−1) → (B,C,D) 1 → Suck → (B,C,C) 2 → Left (−1) → (A,C,C) 2 → Right (−1) → (B,C,C) 2. Tilstandene gir 1 + 1 + 2 + 2 + 2 = 8 og flyttene −3, til sammen 5. En agent som vet at alt er rent og står stille etter t = 2, får 8 − 1 = 7. Refleksagenten er altså ikke rasjonell under dette målet.
3. T = 3: 4 + 16 + 64 = 84 rader. T = 10: 4(4^10 − 1)/3 = 1 398 100 rader.
4. a) Usant (kabal). b) Usant, den bruker rule matching. c) Usant, avbildningen gjelder hele percept sequence. d) Sant. e) Usant. f) Sant.
5. a) Atomic. b) Factored. c) Structured.
6. Uten lokasjon ser agenten bare `[Clean]` og må gjøre det samme hver gang. Står den i A og regelen er Left, flytter den seg aldri. Med myntkast går den riktig vei med sannsynlighet 1/2 per steg, så antall steg er geometrisk fordelt med forventning 1/(1/2) = 2.

---

<a id="e02"></a>

## E02 – Søk uten kart: BFS, UCS, DFS og IDS

> Pensum: Global 3.1–3.4 (US samme nummer) · Forelesning: L2, AL1, L3 (sammenligningstabellen) · Øving: Ø1 · Eksamensvekt: ~22 % (søk samlet, deles med E03)
> Video: `videoer/e02-uinformert-sok/out/tdt4136-e02-uinformert-sok.mp4` (15:40)

### Kapitler i videoen

- 0:00 – Intro
- 0:35 – Fra problem til søk
- 2:34 – Ett rammeverk for alle
- 4:44 – BFS og UCS
- 7:24 – DFS, DLS, IDS og toveis
- 10:25 – Sammenligningstabellen
- 12:41 – Eksamen 2025, oppgave 5
- 14:39 – Koblinger og oppsummering

### Kjerneideer

**Et søkeproblem har seks deler (3.1.1, L2).** Eksempelet er Romania-kartet fra boka: du står i Arad og skal til Bucharest. Eldre utgaver av boka (3e) teller fem og lar *state space* ligge implisitt i de andre.

| Del | Engelsk | Romania |
|---|---|---|
| Tilstandsrom | state space (mengden av alle states) | alle byene på kartet |
| Starttilstand | initial state | Arad |
| Handlinger | actions, `ACTIONS(s)` | `ACTIONS(Arad) = {ToSibiu, ToTimisoara, ToZerind}` |
| Overgangsmodell | transition model, `RESULT(s, a)` | `RESULT(Arad, ToZerind) = Zerind` |
| Måltest | goal test, `IS-GOAL(s)` | er vi i Bucharest? |
| Handlingskostnad | action cost, `c(s, a, s′)` | veiens lengde i km |

En *path* er en sekvens av handlinger. En *solution* er en sti fra start til en måltilstand. Den *optimale* løsningen har lavest sum av handlingskostnader. I utsnittet i videoen er det Arad–Sibiu–Rimnicu Vilcea–Pitesti–Bucharest = 140 + 80 + 97 + 101 = 418. Fagaras-veien koster 450. Tilstandene og overgangene danner til sammen *state space*, en graf.

**Abstraction (3.1.2, kun bok, ikke forelest).** Modellen dropper alt som ikke betyr noe for oppgaven, som vær, radio, trafikk og fotbevegelser. Med handlinger som «flytt foten én centimeter» kommer du aldri ut av parkeringsplassen. Boka gir to krav:
- *Gyldig* (valid): hver abstrakt løsning kan utdypes til en løsning i den detaljerte verden. For eksempel finnes det fra hver detaljert tilstand «i Arad» en vei til en tilstand «i Sibiu».
- *Nyttig* (useful): hver handling i løsningen er lettere å utføre enn det opprinnelige problemet. «Kjør fra Arad til Sibiu» krever ikke mer søk.

God abstraksjon fjerner så mye detalj som mulig, men beholder gyldigheten.

**Eksempelproblemer (3.2, L2).** Det finnes *standardized problems* som vacuum world (2 ruter × skitt eller ikke i hver = 8 states) og 8-puzzle, og *real-world problems* som ruteplanlegging. Formuleringen avgjør hvor stort tilstandsrommet blir.

**State space er ikke search tree (3.3).** Kartet har 20 byer. Søket bygger et tre med rot i Arad, og der kan Arad dukke opp igjen (Arad → Sibiu → Arad → …). Treet kan altså være uendelig selv når tilstandsrommet er endelig. Derfor skilles det mellom
- *state*: en konfigurasjon av verden (en by), og
- *node*: en datastruktur i treet med `STATE`, `PARENT`, `ACTION` og `PATH-COST`. En node står for én bestemt sti til tilstanden.

**Frontier, reached og ekspansjon (3.3.1–3.3.2).**
- *Frontier*: noder som er generert, men ikke ekspandert. Det er huskelista over hva søket skal gjøre.
- *Expand*: ta en node ut og generer barna med `ACTIONS` og `RESULT`.
- *Reached*: alle tilstander søket har sett (frontier pluss ekspandert), med beste node til hver.
- Alle algoritmene her er samme løkke: ta ut, test, ekspander, gjenta. Bare regelen for hvilken node som tas ut, varierer. Best-first search tar alltid ut noden med lavest *f(n)*.

| Kø | Algoritme | Regel |
|---|---|---|
| FIFO-kø («kø i kantina») | BFS | eldste node først |
| prioritetskø på *f = g* | UCS / Dijkstra | billigste sti hittil først |
| LIFO-stabel («tallerkenstabel»), *f = −dybde* | DFS | dypeste node først |
| prioritetskø på *f = g + h* | A\* (E03) | — |

Kurset bryter likhet *alfabetisk*: B før C.

**Redundant paths, tree-like og graph search (3.3.3).** Til Sibiu kan du kjøre direkte (140) eller via Zerind og Oradea (75 + 71 + 151 = 297). Den lange er en *redundant path*: en dårligere vei til en tilstand du allerede har nådd. En *cycle* (Arad → Sibiu → Arad) er et spesialtilfelle.
- *Graph search* husker alt i `reached` og legger bare inn et barn hvis tilstanden er ny eller veien er billigere.
- *Tree-like search* husker ingenting og sparer minne, men kan gå i ring. I eksamen 2023 (2.1) har grafen en løkke A → A, og tree-like DFS ekspanderer S, A, A, A, … uten å bli ferdig.
- Mellomløsningen er å sjekke bare sykler, altså om tilstanden finnes i egen foreldrekjede (`IS-CYCLE`). Det gjør DLS i Fig. 3.12.

**Ytelsesmål (3.3.4).**
- *Completeness*: finner algoritmen en løsning når det finnes en (og rapporterer feil når det ikke finnes)?
- *Cost optimality*: er løsningen den billigste?
- *Time* og *space complexity* måles med *b* (branching factor, største antall barn per node), *d* (dybden til den grunneste løsningen), *m* (største dybde, kan være ∞), *C\** (kostnaden til optimal løsning) og *ε* (minste handlingskostnad). For eksplisitte grafer brukes ofte |V| + |E|.

**Når målet testes (3.4.1–3.4.2).** Dette er det viktigste skillet i episoden.
- *BFS* bruker *early goal test*: målet sjekkes når en node genereres. Det er trygt fordi BFS går lag for lag. Når målet dukker opp på dybde d, er hele dybde d − 1 sjekket, så ingen kortere sti finnes.
- *UCS* (og A\*) bruker *late goal test*: målet sjekkes når noden tas ut av frontier. UCS brer seg som en bølge i kostnad g. En node tas ut først når bølgen når den, og da er alle billigere stier allerede tatt ut. A\* sorterer på f = g + h, så der går bølgen i f, ikke i g: Sibiu (g = 140, f = 393) tas ut før Zerind (g = 75, f = 449). At målet er optimalt når A\* tar det ut, følger av at h er admissible (E03). Testes målet ved generering, kan en billigere vei fortsatt ligge og vente i frontier.

**Hvorfor IDS ikke er sløsing (3.4.4).** Toppen av treet lages på nytt for hver grense. Men nesten alle nodene ligger i bunnen: N(IDS) = (d)b + (d − 1)b² + … + (1)b^d. For b = 10 og d = 5 blir det 123 450 noder mot 111 110 for BFS, rundt 11 % mer tid. Til gjengjeld vokser minnet lineært, O(bd).

**Toveis søk (3.4.5, kun bok, ikke forelest).** Søket går forover fra start og bakover fra målet til frontene møtes. Det er som to lag som graver en tunnel fra hver side. Gevinsten er b^(d/2) + b^(d/2), som er langt mindre enn b^d (50 000 ganger færre noder for b = d = 10). Prisen:
- Du må kunne gå baklengs (kjenne forgjengerne) og kjenne målet.
- Med kostnader er første møte ikke nødvendigvis billigst. Figurteksten til Fig. 3.14 sier dette, og grafen i videoen viser det: første møte gir 25, mens den beste veien koster 23. Bidirectional best-first (Fig. 3.14) leter videre til `TERMINATED` sier at ingen bedre løsning finnes.
- Brødteksten i 3.4.5 sier at første løsning er optimal når f er path cost. Det stemmer ikke med figurteksten eller med eksempelet: toveis UCS på L2-grafen møtes først via E med 25. Følg figurteksten.

### Algoritmer og håndsporing

#### Pseudokode i kortform

```
BEST-FIRST-SEARCH(problem, f)                          # Fig. 3.7
  frontier ← prioritetskø etter f, med startnoden
  reached  ← {start: startnoden}
  while frontier ikke er tom:
    node ← POP(frontier)                                # lavest f
    if IS-GOAL(node.state): return node                 # sen måltest
    for child in EXPAND(node):
      s ← child.state
      if s ∉ reached or child.g < reached[s].g:
        reached[s] ← child; legg child i frontier       # billigere vei erstatter
  return failure

BREADTH-FIRST-SEARCH(problem)                          # Fig. 3.9
  if IS-GOAL(start): return startnoden
  frontier ← FIFO-kø med start;  reached ← {start}
  while frontier ikke er tom:
    node ← POP(frontier)
    for child in EXPAND(node):
      if IS-GOAL(child.state): return child             # tidlig måltest
      if child.state ∉ reached: legg til i reached og bakerst i frontier
  return failure

UCS = BEST-FIRST-SEARCH med f = g (path cost)
DFS = BEST-FIRST-SEARCH med f = −dybde (i praksis tree-like med LIFO-stabel)

DEPTH-LIMITED-SEARCH(problem, ℓ)                       # Fig. 3.12
  frontier ← LIFO-stabel med start;  result ← failure
  while frontier ikke er tom:
    node ← POP(frontier)
    if IS-GOAL(node.state): return node
    if DEPTH(node) ≥ ℓ: result ← cutoff                 # node på grensen ekspanderes ikke
    else if ikke IS-CYCLE(node): legg barna på stabelen
  return result                                         # failure eller cutoff

ITERATIVE-DEEPENING-SEARCH(problem)
  for ℓ = 0, 1, 2, …:
    result ← DEPTH-LIMITED-SEARCH(problem, ℓ)
    if result ≠ cutoff: return result
```

Pseudokoden i Fig. 3.12 skriver `DEPTH(node) > ℓ`. Teksten i 3.4.4 og figur 3.13 behandler derimot noder *på* dybde ℓ som om de ikke har barn, og det gjør også L2-slidene og fasiten for eksamen 2022. Videoen og notatet følger teksten: noder på dybde ℓ testes, men ekspanderes ikke. Med `>` ville søket i eksempelet under funnet G allerede ved ℓ = 2.

#### Grafen fra forelesning 2

Grafen er rettet, med start A og mål G: A→B 5, A→C 7, B→D 8, B→E 3, D→F 4, E→G 17, F→G 6. C har ingen barn. Alle sporinger under er kontrollert med `videoer/e02-uinformert-sok/verifiser.py`.

**BFS** (FIFO, tidlig måltest):

| Steg | Ekspanderer | Genererer | Frontier etterpå |
|---|---|---|---|
| 0 | – | – | A |
| 1 | A | B, C | B, C |
| 2 | B | D, E | C, D, E |
| 3 | C | – | D, E |
| 4 | D | F | E, F |
| 5 | E | **G = mål** (testes ved generering) | F |

Svar: Order of expansion A, B, C, D, E, (G). Found path A–B–E–G. Path cost 5 + 3 + 17 = 25. Det er færrest steg, men ikke billigst.

**UCS** (prioritetskø på g, sen måltest):

| Steg | Tas ut (g) | Nye/oppdaterte i frontier | Frontier etterpå |
|---|---|---|---|
| 0 | – | A0 | A0 |
| 1 | A (0) | B5, C7 | B5, C7 |
| 2 | B (5) | E8, D13 | C7, E8, D13 |
| 3 | C (7) | – | E8, D13 |
| 4 | E (8) | G25 (**ikke testet ennå**) | D13, G25 |
| 5 | D (13) | F17 | F17, G25 |
| 6 | F (17) | G23 erstatter G25 | G23 |
| 7 | G (23) | tas ut, testes: mål | – |

Svar: A, B, C, E, D, F, (G). Sti A–B–D–F–G. Kostnad 5 + 8 + 4 + 6 = 23. Med måltest ved generering ville UCS stoppet i steg 4 med 25, og det er feil svar.

**DFS** (f = −dybde, alfabetisk ved lik dybde, med reached):

| Steg | Tas ut | Frontier etterpå (dypest først) |
|---|---|---|
| 0 | – | A |
| 1 | A | B, C |
| 2 | B | D, E, C |
| 3 | D | F, E, C |
| 4 | F | G, E, C |
| 5 | G: mål | E, C |

Svar: A, B, D, F, (G). Kostnad 23. Her ble det billigst ved flaks. DFS tar den første løsningen den finner.

**DLS og IDS** (søketreet til grafen: G ligger på dybde 3 under E og på dybde 4 under F):

| Grense ℓ | Tatt ut og testet | Resultat |
|---|---|---|
| 0 | A | cutoff |
| 1 | A, B, C | cutoff |
| 2 | A, B, D, E, C | cutoff (G ligger på dybde 3) |
| 3 | A, B, D, F, E, G | mål: A–B–E–G, 25 |

IDS finner samme sti som BFS fordi den også går lag for lag. Hadde DLS brukt fast grense 2, ville svaret blitt cutoff. Med grense 4 finner DLS A–B–D–F–G, den første løsningen i dybde-først-rekkefølge.

**Toveis BFS** (bakover langs kantene baklengs):

| Steg | Side | Ekspanderer | Forover-frontier | Bakover-frontier |
|---|---|---|---|---|
| 0 | – | – | A | G |
| 1 | forover | A | B, C | G |
| 2 | bakover | G | B, C | E, F |
| 3 | forover | B | C, D, E | E, F → **E møtes** |

Løsning A–B–E–G, 25. Den beste løsningen koster 23, så første møte var ikke optimalt.

#### Sammenligningstabellen (Fig. 3.15, tree-like versjoner)

| Kriterium | BFS | UCS | DFS | DLS | IDS | Toveis |
|---|---|---|---|---|---|---|
| Complete? | Ja¹ | Ja¹˒² | Nei | Nei | Ja¹ | Ja¹˒⁴ |
| Optimal cost? | Ja³ | Ja | Nei | Nei | Ja³ | Ja³˒⁴ |
| Time | O(b^d) | O(b^(1+⌊C\*/ε⌋)) | O(b^m) | O(b^ℓ) | O(b^d) | O(b^(d/2)) |
| Space | O(b^d) | O(b^(1+⌊C\*/ε⌋)) | O(bm) | O(bℓ) | O(bd) | O(b^(d/2)) |

¹ complete hvis b er endelig, og tilstandsrommet enten har en løsning eller er endelig. ² complete hvis alle handlingskostnader er ≥ ε > 0. ³ optimal hvis alle handlingskostnader er like. ⁴ hvis begge retninger er BFS eller UCS. L3 viser tabellen uten toveis-kolonnen.

**Hvorfor hver rute er som den er:**
- *BFS complete*: den går lag for lag og når dybde d etter endelig tid når b er endelig. *Optimal bare med like kostnader*: den finner færrest steg, ikke lavest kostnad. *Tid og plass O(b^d)*: 1 + b + b² + … + b^d noder, og hele siste lag ligger i minnet samtidig.
- *UCS optimal*: noder tas ut i kostnadsrekkefølge, så første gang målet tas ut, finnes ingen billigere sti. *Complete med ε > 0*: ellers kan den gå uendelig på gratis steg. *O(b^(1+⌊C\*/ε⌋))*: en sti med kostnad ≤ C\* kan ha høyst ⌊C\*/ε⌋ steg, og den sene testen gir ett lag til. Med like kostnader blir det b^(d+1).
- *DFS ikke complete*: den kan forsvinne ned en uendelig gren eller gå i ring. *Ikke optimal*: den tar første løsning. *Tid O(b^m)*: den kan måtte gå gjennom hele treet, og m kan være mye større enn d (eller ∞). *Plass O(bm)*: bare én sti med søsknene langs den. Varianten *backtracking search* lager ett barn om gangen og trenger bare O(m).
- *DLS*: det samme som DFS med ℓ i stedet for m. Ikke complete hvis ℓ < d. En god grense kan komme fra problemet. Romania-kartet har 20 byer, så ℓ = 19 holder, men *diameteren* er 9, så ℓ = 9 er bedre.
- *IDS*: complete og optimal som BFS (lag for lag), tid O(b^d) fordi bunnlaget dominerer, plass O(bd) som DFS.
- *Toveis*: to BFS-er til halv dybde.
- *Felle*: tabellen gjelder tree-like søk. Graph-search DFS er complete i endelige tilstandsrom, og tid og plass er da begrenset av |V| + |E|, men da er plassfordelen borte.

#### Eksamen 2025, oppgave 5 (8 poeng)

Grafen er urettet med start s og mål g: s–a 4, s–b 1, s–k 6, b–c 2, c–d 2, d–e 2, e–g 4, g–f 5, g–k 3, k–j 3, j–i 1, i–h 1, h–f 1. Bruk BFS, DFS med minne og UCS med alfabetisk tie-break. a) Hvem finner billigste vei? (2 p) b) Hvem ekspanderer færrest noder? (2 p) c) Hvilke noder må hver algoritme ekspandere? (4 p)

**BFS:**

| Ekspanderer | Frontier etterpå |
|---|---|
| s | a, b, k |
| a | b, k |
| b | k, c |
| k | g genereres: mål |

Sti s–k–g, kostnad 9.

Fasiten skriver «Add G and J to frontier – G is goal» ved k. Etter Fig. 3.9 genereres g før j og testes straks, men svaret blir det samme.

**DFS med minne:**

| Ekspanderer | Frontier etterpå (dypest først) |
|---|---|
| s | a, b, k |
| a | b, k |
| b | c, k |
| c | d, k |
| d | e, k |
| e | g, k |
| g: mål | k |

Sti s–b–c–d–e–g, kostnad 11.

**UCS:**

| Tas ut (g) | Frontier etterpå |
|---|---|
| s (0) | b1, a4, k6 |
| b (1) | c3, a4, k6 |
| c (3) | a4, d5, k6 |
| a (4) | d5, k6 |
| d (5) | k6, e7 |
| k (6) | e7, g9, j9 |
| e (7) | g9, j9 (g via e = 11 forkastes) |
| g (9): mål | j9 |

Sti s–k–g, kostnad 9.

**Svar:**
- a) BFS og UCS.
- b) BFS.
- c) BFS {a, b, k}, DFS {a, b, c, d, e}, UCS {b, c, a, d, k, e}. Fasiten teller ikke s.
- BFS fant billigste vei her bare fordi den korteste stien også var den billigste.

### Eksamensfeller

- **Stoppe UCS (eller A\*) når målet dukker opp i frontier.** Målet er først funnet når det tas ut. Med L2-grafen gir feil test 25 i stedet for 23.
- **«BFS finner billigste vei».** Det gjelder bare når alle steg koster likt (2025: riktig svar bare ved flaks).
- **Glemme at en billigere vei erstatter en node i frontier og reached.** Lærestoffet viser G 25 → 23. Ikke behold begge, og ikke ignorer den nye.
- **Tie-break.** Kurset bruker alfabetisk rekkefølge. Ved DFS betyr det at B tas før C blant like dype noder, så B må ligge øverst i stabelen.
- **Tree-like eller graph search?** Les oppgaven. I eksamen 2023 (2.1, tree-like) går DFS i løkka A → A og finner ingen løsning («Found path ∅»), mens BFS gir S, A, B, (G) og UCS gir S, A, B, C, (G).
- **Svarformat.** Skriv ekspansjonsrekkefølgen med målet i parentes, stien og kostnaden. Si om startnoden er med: fasiten for 2025 c) teller ikke s, mens fasiten for 2023 tar med S.
- **«Kompleksiteten til BFS er bm» er usant** (2019, oppgave 1). BFS er O(b^d). O(bm) er plassen til DFS.
- **«IDS er optimal når stegkostnadene er like, b er endelig og en løsning finnes» er sant** (2015). Uten like kostnader er IDS ikke optimal.
- **UCS er bare complete når alle kostnader er ≥ ε > 0.** En sløyfe med kostnad 0 kan holde UCS i gang for alltid.
- **DLS skiller cutoff fra failure.** Cutoff betyr «ingen løsning innenfor grensen». Noder på dybde ℓ testes, men ekspanderes ikke (se merknaden om Fig. 3.12).
- **Tabellen gjelder tree-like.** Graph-search DFS er complete i endelige rom.
- **Toveis med kostnader:** første møte er ikke bevis for optimal løsning.

### Koblinger til andre kapitler

- → kap. 3 / E03: Greedy best-first (f = h) og A\* (f = g + h) bruker samme BEST-FIRST-SEARCH og sen måltest som UCS. Når h = 0, er A\* lik UCS.
- → kap. 5 / E07: Backtracking search for CSP er dybde-først søk over delvise tilordninger.
- → kap. 6 / E08: Minimax gjør en fullstendig dybde-først gjennomgang av spilltreet, med O(bm) minne.
- → kap. 11 / E18: Planlegging søker forover (progression) eller bakover (regression) gjennom tilstander. Bakoversøk krever, som toveis søk, at du kan regne ut forgjengere.

### Ikke pensum her

- Ingen seksjoner i 3.1–3.4 er UT (PENSUMOVERSIKT, kap. 3).
- 3.1.2 Formulating problems (abstraction) er pensum, men står bare i boka. Foreleser gikk ikke gjennom det (PENSUMOVERSIKT).
- 3.4.5 Bidirectional search er pensum, men står bare i boka. Foreleser gikk ikke gjennom det (PENSUMOVERSIKT). L3 viser sammenligningstabellen uten toveis-kolonnen.

### Øv selv

1. Formuler vacuum world med to ruter som søkeproblem: initial state, actions, transition model, goal test og action cost. Hvor mange states har det? Kan søketreet ha flere noder enn det?
2. Lag en graf med tre noder der UCS med måltest ved generering gir feil svar. Vis begge kjøringene.
3. Kjør IDS (DLS med cycle check, alfabetisk) på grafen fra eksamen 2025, oppgave 5. Skriv hvilke noder som tas ut for hver grense, og si for hvilken grense målet finnes og med hvilken sti.
4. Bruk grafen fra eksamen 2023, oppgave 2.1 (S→A 4, S→B 7, A→A 13, A→C 4, B→G 10, C→G 4). Kjør BFS, DFS og UCS som *tree-like search* med alfabetisk tie-break. Oppgi rekkefølgen, stien og kostnaden.
5. Sant eller usant? a) Graph-search DFS er complete i endelige tilstandsrom. b) IDS bruker O(b^d) minne. c) UCS med like handlingskostnader kan generere opptil b^(d+1) noder. d) Toveis UCS er optimal ved første møte.
6. Gamle eksamensoppgaver:
   - 2025, oppgave 5 «Uninformed Search» (8 p).
   - 2023, oppgave 2.1 tree-like search (10 p).
   - 2022, oppgave 3 ulv/geit/kål, graf og IDS med grense 3 (poeng ikke oppgitt i teksten).
   - 2021, oppgave 2 «Search», BFS/DFS/UCS med frontier i hvert steg (25 p).
   - 2020 (kontinuasjon), Problem 2 tree search (25 p).
   - 2020, «Question – Search», BFS graph search (25 p).
   - 2019, oppgave 1 sant/usant (2 p per påstand, −1 for feil).
   - 2018, Problem 4 «Search Algorithms» (10 p).
   - 2015, sant/usant om IDS og BFS med måltest.

### Fasit

**Quizene i videoen:**
- Kapittel 1: B. Ja, uendelig mange. Du kan gå venstre–høyre i det uendelige, for tilstandene er endelige, men stiene er det ikke.
- Kapittel 2: B. Den billigere veien erstatter den gamle i reached, og noden legges i frontier.
- Kapittel 3: A. A–B–E–G med kostnad 3, og den er billigst. Med like kostnader er færrest steg det samme som lavest kostnad.
- Kapittel 4: C. IDS gir svaret til BFS med minnet til DFS (O(bd)). Toveis BFS trenger fortsatt eksponentielt minne.
- Kapittel 5: B. Usant. BFS er O(b^d), og O(bm) er plassen til DFS.

**Øv selv:**
1. Tilstanden er robotens posisjon (venstre eller høyre) og om hver rute er skitten, så 2 · 2 · 2 = 8 states. Handlingene er Left, Right og Suck. RESULT flytter roboten eller fjerner skitten i ruta den står i. Måltesten er at begge rutene er rene. Hver handling koster 1. Søketreet kan bli uendelig (Left, Right, Left, …) uten reached eller cycle check.
2. S→G 10, S→A 1, A→G 1. Med måltest ved generering gir ekspansjon av S straks G med kostnad 10. Med sen måltest tas A (1) ut først, så kommer G via A med kostnad 2, og G (2) tas ut før G (10). Riktig svar er S–A–G = 2.
3. ℓ = 0: s, cutoff. ℓ = 1: s, a, b, k, cutoff. ℓ = 2: s, a, b, c, k, g, mål. Stien er s–k–g med kostnad 9. Etter a går søket ikke tilbake til s, fordi s er en sykel.
4. BFS: S, A, B, (G), sti S–B–G, kostnad 17. DFS: S, A, A, A, … går i løkke uten løsning (fasit: «Found path ∅»). UCS: S, A, B, C, (G), sti S–A–C–G, kostnad 12. Dette er fasiten for 2023.
5. a) Sant. b) Usant, IDS bruker O(bd). c) Sant: UCS bruker sen måltest, så med like kostnader er tiden b^(1+⌊C\*/ε⌋) = b^(d+1). d) Usant: første møte gir en løsning, men ikke nødvendigvis den billigste, så søket må fortsette til det er bevist.

---

<a id="e03"></a>

## E03 – A* og kunsten å gjette godt

> Pensum: Global 3.5–3.6 (US samme) · Forelesning: L2, L3, AL1 · Øving: Ø1 · Eksamensvekt: ~22 % (søk samlet, deles med E02)
> Video: `videoer/e03-astar-heuristikker/out/tdt4136-e03-astar-heuristikker.mp4` (16:05)

### Kapitler i videoen

- 0:00 – Intro
- 0:32 – Grådig best-first
- 2:16 – A*: f = g + h
- 4:08 – Admissible og consistent
- 7:02 – Hvorfor A* er optimal
- 8:44 – Mindre minne, raskere svar
- 10:19 – Gode heuristikker
- 12:52 – Eksamen 2023, oppgave 2.2
- 14:58 – Koblinger og oppsummering

### Kjerneideer

**Heuristikk.** En *heuristic function* h(n) anslår kostnaden for den billigste stien fra n til et mål. Den bruker bare tilstanden i n, og h(mål) = 0. Alle algoritmene her er BEST-FIRST-SEARCH fra E02 (Fig. 3.7) med en annen *evaluation function* f.

**Greedy best-first search: f(n) = h(n) (3.5.1).** Grådig søk tar alltid noden som *ser* nærmest målet ut, og glemmer hva veien dit har kostet. To ting går galt:
- Tree-like (uten reached) kan den gå i løkke. På løkkegrafen fra eksamen 2023 tar den A, A, A … for alltid, fordi selvløkka gir en ny A med samme h.
- Med graph search velger den lett en dyr vei. På samme graf svarer den S, B, G med kost 17, mens den billigste koster 12. I Romania-eksempelet (Fig. 3.17–3.18) finner den 450 der beste rute er 418.

Greedy med graph search er komplett i endelige tilstandsrom, men ikke i uendelige, og aldri garantert optimal.

**A\*: f(n) = g(n) + h(n) (3.5.2).** g(n) er kostnaden du har betalt fra start til n, h(n) er gjetningen på resten. Da er f(n) et anslag for hele den billigste løsningen *gjennom* n, omtrent som en GPS som teller både kjørte kilometer og luftlinje til målet. Med h = 0 blir A* uniform-cost search.

**Målet testes når det tas ut, ikke når det legges inn.** At G ligger i frontier med f = 17, betyr ikke at du er ferdig. C ligger der med f = 11, så det kan finnes en billigere vei gjennom C, og det gjør det (12). Kurset følger Fig. 3.7: BFS tester ved generering (Fig. 3.9), UCS og A* ved ekspansjon.

**Admissible: h(n) ≤ h\*(n) for alle n.** h\* er den ekte billigste restkostnaden. En admissible heuristikk overestimerer aldri, den er optimistisk. Eksempel fra L3: hvis h(B) = 1000 mens h\*(B) = 2, svarer A* med kost 1000 i stedet for 3.

**Consistent (monotone): h(n) ≤ c(n, a, n′) + h(n′) for hver kant.** Det er trekantulikheten (*triangle inequality*, Fig. 3.19): gjetningen rett fra n kan ikke være lengre enn ett steg pluss gjetningen derfra. Du sjekker den kant for kant.

**Consistent ⇒ admissible, men ikke omvendt.** Følg den billigste stien n → n₁ → … → mål og bruk ulikheten på hver kant: h(n) ≤ c₁ + h(n₁) ≤ c₁ + c₂ + h(n₂) ≤ … ≤ summen av kantene + h(mål) = h\*(n). Moteksempel på det omvendte (eksamen 2018, problem 5): S→A 2, A→G 3, S→G 6, h(S) = 4, h(A) = 1. Den er admissible (4 ≤ 5, 1 ≤ 3), men ikke consistent (4 > 2 + 1).

**Hvorfor consistency betyr noe i graph search.** Med consistent h synker f aldri langs en sti, og første gang en tilstand tas ut av frontier, er stien dit den billigste. Med en h som bare er admissible kan en tilstand bli tatt ut før den billigste veien dit er funnet. Bokas Fig. 3.7 håndterer det: finner den en billigere vei til en tilstand i reached, legges tilstanden inn i frontier igjen og ekspanderes på nytt. Da blir svaret optimalt. En variant som aldri åpner en ferdig (*closed*) node igjen, kan svare suboptimalt. Fasiten for 2021 sier det samme: admissible h holder for graph search som oppdaterer lukkede noder, ellers trengs consistent h.

**Negative heuristikker (L3 s. 19–20).** En h som gir målet −999, ligger under h\*, men målet får da f = 10 − 999 = −989, tas ut straks og koster 10 i stedet for 2. Beviset krever h(mål) = 0. Trekker du samme konstant fra alle h, endres ikke rekkefølgen, så negative verdier gir ingen ny informasjon.

**Optimalitetsbeviset.** Anta at A* returnerer et mål med kost C > C\*. Da ligger en node n på en optimal sti uekspandert i frontier. Med admissible h er f(n) = g\*(n) + h(n) ≤ g\*(n) + h\*(n) = C\* < C, så n ville blitt tatt ut før det dårlige målet. Selvmotsigelse. På løkkegrafen: når G ligger med 17, ligger C med f = 8 + 3 = 11 ≤ 8 + 4 = 12 = C\*.

**Contours, surely expanded og optimally efficient (3.5.3).** Boka tegner søket som høydekurver (*search contours*, Fig. 3.20): UCS sprer seg i sirkler rundt start, A* i bånd med økende f som strekkes mot målet. Alle noder som nås fra start langs en sti der hver node har f(n) < C\*, blir ekspandert (*surely expanded*), noen med f(n) = C\* kan bli det, og ingen med f(n) > C\*. Stikravet trengs: en node med lav f som bare nås via en forgjenger med f > C\*, blir aldri nådd. Å kutte bort slike deltrær uten å se på dem heter *pruning*. Med consistent h er A* *optimally efficient*: enhver algoritme som utvider stier fra start med samme h, må ekspandere minst de nodene A* sikkert ekspanderer. Selve contours står bare i boka; monotone f og optimally efficient ble nevnt i L3.

**Satisficing search (3.5.4).** Godtar du en litt dårligere løsning for å spare tid, kan du bruke en inadmissible h eller *weighted A\**: f(n) = g(n) + W·h(n). W = 0 gir UCS, W = 1 gir A*, og W → ∞ gir greedy. Med W ≥ 1 og admissible h blir kostnaden mellom C\* og W·C\*. Grensen gjelder ikke for W < 1: W = 0 er UCS, som finner C\*, mens W·C\* = 0.

**Memory-bounded search (3.5.5).**
- *Beam search* beholder bare de k beste nodene i frontier. Rask, men verken komplett eller optimal.
- *IDA\** er iterative deepening med grense på f i stedet for dybde. Neste grense er den minste f som falt utenfor forrige runde. Mellom rundene husker den bare ett tall.
- *RBFS* går i dybden, men husker f for beste alternativ (*f_limit*). Blir stien dyrere enn det, rygger den og lagrer beste f-verdi i forelderen (*backed-up value*). Minnet er lineært i dybden.
- *SMA\** bruker alt minnet den har. Når minnet er fullt, kaster den bladet med høyest f og lagrer verdien i forelderen. (Kun bok.)
- IDA*, RBFS og SMA* kan alle bruke mye tid på å gjenskape det de har glemt (*thrashing*).
- *Reference count* (L3): tell hvor mange ganger en tilstand er nådd, og fjern den fra reached når ingen flere veier kan føre dit. I et rutenett der hver rute bare kan nås fra fire naboer, kan ruta fjernes etter fjerde gang.

**Bidirectional heuristic search (3.5.6, kun bok).** Ett søk går fra start med h_F, ett baklengs fra målet med h_B. Begge velger noden med lavest f₂(n) = max(2g(n), g(n) + h(n)). Da ekspanderes ingen node med g(n) > C\*/2, og søkene møtes på midten. Boka antar admissible heuristikker. Ingen bidirectional algoritme kan garanteres å være optimally efficient, fordi den kan ekspandere opptil dobbelt så mange noder som nødvendig.

**Hvor god er en heuristikk? (3.6.1)** På 8-puzzle teller h₁ brikker på feil plass, og h₂ summerer Manhattan distance. For startbrettet i Fig. 3.25 er h₁ = 8, h₂ = 18 og h\* = 26. Hvis h₂(n) ≥ h₁(n) for alle n, *dominerer* h₂ h₁, og med consistent h ekspanderer A* med h₂ aldri flere noder. Unntaket er noder med f = C\*, der tie-break avgjør. *Effective branching factor* b\* er forgreningen et jevnt tre med dybde d må ha for å inneholde N + 1 noder, der N er antall genererte noder. Nær 1 er bra. (b\* står bare i boka. Dominans og tabellen ble forelest i L3.)

**Relaxed problems (3.6.2).** En brikke kan flytte fra X til Y hvis X er nabo til Y og Y er tom. Fjerner du «Y er tom», løser h₂ det nye problemet eksakt. Fjerner du begge kravene, gjør h₁ det. Et *relaxed problem* har bare flere kanter enn originalen, så den optimale løsningen der kan ikke være dyrere. Derfor er h admissible. Den er også consistent, fordi den er en ekte stikostnad i det avslappede problemet. Har du flere admissible heuristikker, er h(n) = max(h_a(n), h_b(n), …) admissible og dominerer alle.

**Andre kilder til h.**
- *Pattern databases* (3.6.3) lagrer eksakt kost for et delproblem, for eksempel brikkene 1–4 pluss tom rute, for alle 9·8·7·6·5 = 15 120 mønstre. Under søket slår du opp. L3 foreleste ideen uten navnet.
- *Landmarks* (3.6.4, kun bok): regn ut ekte avstander til noen faste punkter på forhånd, slik kartapper gjør. Den direkte landmark-heuristikken kan overestimere. *Differential heuristic* h_DH(n) = max_L |C\*(n, L) − C\*(mål, L)| er admissible.
- *Learning to search better* (3.6.5, kun bok): *metalevel learning* lærer seg hvilke deler av søketreet som lønner seg å utvide.
- *Learning heuristics from experience* (3.6.6, kun bok): lær h fra løste eksempler, for eksempel som en lineær kombinasjon h(n) = c₁x₁(n) + c₂x₂(n) av egenskaper som «brikker på feil plass». Den kan overestimere.

### Algoritmer og håndsporing

**Kortform (Fig. 3.7) for greedy og A\*:**

```
frontier ← prioritetskø etter f, med start;  reached[start] ← start
while frontier ikke er tom:
    n ← POP(frontier)                      # lavest f, likt: alfabetisk
    if IS-GOAL(n): return n                # målet testes her
    for barn s i EXPAND(n), alfabetisk:
        if s ikke i reached eller g(s) < reached[s].g:
            reached[s] ← s; legg s i frontier (en billigere sti erstatter den gamle)
```

Greedy: f = h. A*: f = g + h. Weighted A*: f = g + W·h. Tree-like search dropper reached og legger inn alle barn.

**Egenskaper:**

| Algoritme | Velger etter | Komplett | Optimal | Minne |
|---|---|---|---|---|
| Greedy best-first | h | graph search i endelig rom: ja; ellers nei | nei | hele frontier |
| A* | g + h | ja (kanter ≥ ε > 0) | ja med admissible h (Fig. 3.7 åpner noder igjen); consistent h gir optimalt uten gjenåpning | hele frontier, eksponentielt |
| Weighted A* | g + W·h | ja | nei, kost ≤ W·C\* (W ≥ 1, admissible h) | mindre enn A* i praksis |
| Beam search | de k beste | nei | nei | k noder |
| IDA* | f-grense, DFS | ja | ja med admissible h | lineært |
| RBFS | f_limit, backed-up values | ja | ja med admissible h | lineært |
| SMA* | fullt minne, kast høyest f | ja hvis grunneste løsning får plass i minnet | ja hvis en optimal løsning får plass | alt tilgjengelig |
| Bidirectional heuristic | f₂ = max(2g, g + h) | ja | ja med admissible h (se usikkerhet under Eksamensfeller) | to frontiers |

**Løkkegrafen** (L2 og eksamen 2023 oppg. 2.1): S→A 4, S→B 7, A→A 13, A→C 4, B→G 10, C→G 4. h(A) = h(B) = h(C) = 3, h(G) = 0. h(S) er ikke oppgitt, og ingenting under avhenger av den så lenge h(S) ≤ 7.

Greedy, tree-like (frontier som h):

| Ekspanderer | Frontier etterpå |
|---|---|
| S | A 3, B 3 |
| A | A 3, B 3, C 3 |
| A | A 3, B 3, C 3, C 3 |
| A | … for alltid, ingen løsning |

Greedy, graph search:

| Ekspanderer | Frontier etterpå (h) |
|---|---|
| S | A 3, B 3 |
| A | B 3, C 3 (løkka: g = 17 > 4, forkastes) |
| B | G 0, C 3 |
| (G) | sti S B G, kost 17 |

A*, graph search (frontier som f = g + h):

| Ekspanderer | Frontier etterpå (f) |
|---|---|
| S | A 7, B 10 |
| A | B 10, C 11 (løkka: g = 17 > 4, forkastes) |
| B | C 11, G 17 |
| C | G 12 (erstatter G 17) |
| (G) | sti S A C G, kost 12 |

Rekkefølge S, A, B, C, (G). Tree-like A* (eksamen 2023) har i tillegg løkke-A med f = 17 + 3 = 20 i frontier etter A, men rekkefølgen og svaret blir de samme. Tester du målet ved generering, svarer du S B G med kost 17.

**L3, h(B) = 1000:** A→B 1, B→C 1, C→G 1, A→C 999; h(A) = 3, h(C) = 1. Etter A: C 1000 (999 + 1), B 1001 (1 + 1000). C tas ut, G får 1000, og A* svarer A C G med kost 1000. Optimalt er A B C G med kost 3.

**Inkonsistent, men admissible h i graph search** (ILLUSTRASJON, egen graf): S→A 1, S→B 1, A→C 1, B→C 2, C→G 3; h(S) = 2, h(A) = 4, h(B) = 1, h(C) = 1, h(G) = 0. Kanten A→C bryter consistency (4 > 1 + 1).

| Ekspanderer | Frontier etterpå (f) |
|---|---|
| S | B 2, A 5 |
| B | C 4, A 5 |
| C | A 5, G 6 |
| A | C 3 (billigere vei, legges inn igjen), G 6 |
| C | G 5 (erstatter G 6) |
| (G) | sti S A C G, kost 5, optimalt |

En variant som aldri åpner en ferdig node igjen, hopper over C når A ekspanderes, og svarer S B C G med kost 6.

**Negativ h (L3):** s→g 10, s→n 1, n→g 1; h(n) = 1, h(g) = −999. Etter s: g −989, n 2. g tas ut, kost 10. Optimalt er 2.

**Weighted A\*, W = 4, på løkkegrafen:**

| Ekspanderer | Frontier etterpå (g + 4h) |
|---|---|
| S | A 16, B 19 |
| A | B 19, C 20 |
| B | G 17, C 20 |
| (G) | sti S B G, kost 17 ≤ 4 · 12 = 48 |

Med W = 2 blir svaret fortsatt 12.

**IDA\* på løkkegrafen:** første grense er f(S) = h(S). Deretter blir grensene 7, 10, 11 og 12, og i siste runde finnes S A C G med kost 12.

**8-puzzle (Fig. 3.25):** startbrettet 7 2 4 / 5 _ 6 / 8 3 1. Alle åtte brikker står feil, så h₁ = 8. Manhattan-avstand for brikke 1–8: 3, 1, 2, 2, 2, 3, 3, 2, som gir h₂ = 18. Optimal løsning: 26 trekk.

**Fig. 3.26, d = 12, noder generert:** BFS 2672, A*(h₁) 279, A*(h₂) 84. b\* = 1,80, 1,45 og 1,28.

**b\* regnet ut:** N = 52 og d = 5 gir 53 = 1 + b\* + (b\*)² + … + (b\*)⁵. Prøv b = 2: 1 + 2 + 4 + 8 + 16 + 32 = 63, for mye. b = 1,92 gir ≈ 53,4, så b\* ≈ 1,92.

**Eksamen 2023 oppg. 2.2** (graf: A→B 1, A→C 4, B→C 2, B→D 3, C→E 5, D→F 2, D→G 4, E→G 3, F→G 1; h(A) = 5, h(C) = 4, h(D) = 3, h(E) = 3, h(F) = 1, h(G) = 0). Optimal sti: A B D F G med kost 7.

1. Consistent: A→B gir 5 ≤ 1 + h(B), altså h(B) ≥ 4. B→C gir h(B) ≤ 2 + 4 = 6. B→D gir h(B) ≤ 3 + 3 = 6. De andre kantene holder. Svar: **4 ≤ h(B) ≤ 6**. (Admissible krever bare h(B) ≤ h\*(B) = 6.)
2. Ekspansjon A, C, B uten tie-break: etter A ligger B med 1 + h(B) og C med 8. C først krever 1 + h(B) > 8. Etter C ligger E med 9 + 3 = 12. B før E krever 1 + h(B) < 12. Svar: **7 < h(B) < 11**. Ved 7 eller 11 avgjør tie-break.
3. Suboptimal sti: **h(B) > 11**.

h(B) = 12 (suboptimal):

| Ekspanderer | Frontier etterpå (f) |
|---|---|
| A | C 8, B 13 |
| C | E 12, B 13 |
| E | G 12, B 13 |
| (G) | sti A C E G, kost 12 |

h(B) = 11 (grensen, alfabetisk tie-break):

| Ekspanderer | Frontier etterpå (f) |
|---|---|
| A | C 8, B 12 |
| C | B 12, E 12 (likt: B før E) |
| B | C 7 (billigere vei, C åpnes igjen), D 7, E 12 (likt: C før D) |
| C | D 7, E 11 |
| D | F 7, G 8, E 11 |
| F | G 7, E 11 |
| (G) | sti A B D F G, kost 7 |

h(B) = 9 er inadmissible (9 > 6), men gir likevel optimal sti.

### Eksamensfeller

- **Stopper når målet genereres.** I A* og UCS testes målet når noden tas ut av frontier. På løkkegrafen gir tidlig test S B G = 17 i stedet for 12. Bare BFS tester ved generering.
- **Glemmer alfabetisk tie-break.** Fasitene bruker alfabetisk rekkefølge, eller venstre til høyre, både ved generering og ved like f-verdier. Skriv f-verdiene i frontier for hvert steg.
- **Blander tree-like og graph search.** Eksamen 2023 oppg. 2.1 ba om tree-like search. Da står løkke-A med f = 20 i frontier, og greedy går i evig løkke. Med graph search (Fig. 3.7, som Ø1 bruker) forkastes løkka.
- **Tror admissible ⇒ consistent.** Det er omvendt. Sjekk consistency kant for kant med h(n) ≤ c + h(n′).
- **Tror inadmissible h alltid gir suboptimal sti.** Admissible h *garanterer* optimalitet, men en inadmissible h kan godt treffe optimalt. Eksempler: h(B) = 9 i 2023 2.2 og h(R) = 227 i 2021. Fasiten for 2021 kaller admissibility «necessary» for optimalitet. Det som menes, er at den er nødvendig for *garantien*.
- **Glemmer gjenåpning.** Med inkonsistent h kan en tilstand få en billigere vei etter at den er ekspandert. Fig. 3.7 legger den inn igjen. Si hvilken variant du bruker.
- **Glemmer h(mål) = 0.** Optimalitetsbeviset trenger det, se L3s negative eksempel.
- **Intervallgrenser.** «Uten tie-break» betyr strenge ulikheter (7 < h(B) < 11). Likhet betyr at tie-break avgjør.

### Koblinger til andre kapitler

- → kap. 3.4 / E02: A* med h = 0 er uniform-cost search, og IDA* bygger på iterative deepening. Samme Fig. 3.7, samme reached-regel.
- → kap. 6.3 (US 5.3) / E09: evalueringsfunksjonen EVAL(s) i spill er samme idé som h(n), et raskt anslag på hvor god en tilstand er.
- → kap. 11.3 / E18: planleggingsheuristikker lages med relaxed problems: *ignore preconditions* og *ignore delete lists*. Tenk på 8-puzzle uten «Y er tom».
- → kap. 4 (L3, samme forelesning): local search bruker også en evalueringsfunksjon, men uten g og uten frontier.

### Ikke pensum her

- Ingen delkapitler i 3.5–3.6 er tatt ut (PENSUMOVERSIKT, kap. 3). Contours, SMA\*, bidirectional heuristic search, b\*, landmarks og læring (3.6.4–3.6.6) står bare i boka, men er pensum.
- Bonusoppgaven i Assignment 1 er «not something you have to do» (AL1). Det gjelder øvingen, ikke pensum.

### Øv selv

1. Eksamen 2023, oppgave 2.1 (10 p): tree-like BFS, DFS, UCS, greedy og A* på løkkegrafen. Oppgi ekspansjonsrekkefølge, sti og kost.
2. Eksamen 2025, oppgave 6 (12 p): er heuristikken admissible? Er den consistent? Kjør A* med alfabetisk tie-break og vis frontier og sti.
3. Eksamen 2018, problem 5 (10 p): avgjør admissible og consistent for H1–H4 (S→A 2, A→G 3, S→G 6). H1 = (4, 1), H2 = (5, 4), H3 = (4, 3), H4 = (5, 2) for (h(S), h(A)). Hvilke dominerer hverandre?
4. Eksamen 2021, oppgave 2, A*-delen (av 25 p for hele oppgaven): betingelse for optimalitet, admissible?, A*-sporing, og hva skjer med h(R) = 227?
5. Løkkegrafen: hvilke verdier av h(S) gjør h consistent?
6. Løkkegrafen med weighted A\*, W = 3: hva blir frontier etter B, og hvilken sti returneres med alfabetisk tie-break?

### Fasit

**Quizene i videoen:**
- Kap. 1: greedy graph search i et endelig rom med løkker er komplett (A). Reached stopper løkkene, og rommet går tomt for nye tilstander.
- Kap. 2: A* med h = 0 er uniform-cost search (A).
- Kap. 3: h(S) = 5, h(A) = 2 er bare admissible (B): 5 ≤ 5 og 2 ≤ 3, men 5 > 2 + 2.
- Kap. 4: en node med f = 13 når C\* = 12 blir aldri ekspandert (C).
- Kap. 6: ½h₁ + ½h₂ er alltid admissible (A), fordi gjennomsnittet ≤ max(h₁, h₂) ≤ h\*. Maksimum er bedre, fordi det dominerer.
- Kap. 7: se håndsporingen over (4 ≤ h(B) ≤ 6; 7 < h(B) < 11; h(B) > 11).

**Øv selv:**
1. Fasiten: BFS S, A, B, (G), sti SBG, kost 17. DFS S, A, A, … ingen løsning. UCS S, A, B, C, (G), SACG, 12. Greedy S, A, A, … ingen løsning. A* S, A, B, C, (G), SACG, 12.
2. Fasiten: ja og ja (straight-line distance). A*: S gir B 5, A 9, K 9. B gir C 8. C gir D 10. A (9, alfabetisk før K) gir ingenting nytt. K gir G 9 og J 14. G tas ut: sti S K G, kost 9. Ekspandert: S, B, C, A, K.
3. H1: admissible, ikke consistent (4 > 2 + 1). H2: ikke admissible (h(A) = 4 > 3), ikke consistent. H3: begge. H4: admissible, ikke consistent (5 > 2 + 2). H4 dominerer H1. H3 og H4 har ingen dominans (4 < 5, men 3 > 2).
4. Fasiten: admissible h er nok for graph search som oppdaterer lukkede noder, ellers trengs consistent h. h er admissible, og A* gir A→S→R→P→B med kost 418, optimalt. Med h(R) = 227 er h ikke admissible lenger (h\*(R) = 97 + 101 = 198), men svaret er fortsatt 418, fordi f(R) = 220 + 227 = 447 < 450. Ingen motsigelse: admissibility er tilstrekkelig for garantien, ikke nødvendig for å treffe.
5. 0 ≤ h(S) ≤ 7. Kanten S→A gir h(S) ≤ 4 + 3 = 7, og S→B gir h(S) ≤ 7 + 3 = 10.
6. S gir A 13, B 16. A gir C 17 (løkka forkastes). B gir G 17, og frontier er C 17, G 17. Likt, så C tas ut først og gir G 12. Svar: S A C G, kost 12, men bare takket være tie-break.

---

<a id="e04"></a>

## E04 – Lokalt søk: å klatre uten kart

> Pensum: Global 4.1–4.2 (samme nummer i US) · Forelesning: L3 · Øving: – · Eksamensvekt: ~4 % (kap. 4 samlet, deles med E05)
> Video: `videoer/e04-lokalt-sok/out/tdt4136-e04-lokalt-sok.mp4` (11:52)

### Kapitler i videoen

- 0:00 – Intro
- 0:43 – Landskapet og hill climbing
- 2:47 – Varianter: sideways og restart
- 4:13 – Simulated annealing
- 5:59 – Beam og genetiske algoritmer
- 7:58 – Kontinuerlige rom
- 9:39 – Eksamensoppgave
- 10:50 – Koblinger og oppsummering

### Kjerneideer

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

### Algoritmer og håndsporing

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

### Eksamensfeller

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

### Koblinger til andre kapitler

- → kap. 5.4 / E07: min-conflicts er hill climbing med antall brutte begrensninger som h, på det samme 8-dronningbrettet. Platåer og sideways moves går igjen.
- → kap. 7.6 / E13: WalkSAT velger en brutt klausul og flipper enten et tilfeldig symbol eller det som gir færrest brutte klausuler. Det er min-conflicts med tilfeldige steg, samme idé som i SA.
- → kap. 3 / E02, E03: systematisk søk husker frontier og stien. Beam search i 3.5 (E03) begrenser frontier til k noder og er ikke local beam search.
- → kap. 6.4 / E09: Monte Carlo tree search bruker tilfeldige playouts for å utforske, og UCB balanserer utforskning mot utnyttelse. Rollen ligner temperaturen i SA.
- → kap. 4.3–4.5 / E05: neste episode handler om nondeterministiske handlinger (AND-OR-søk), belief states og online søk.

### Ikke pensum her

- Ingenting i 4.1–4.2 er UT. PENSUMOVERSIKT markerer alle underseksjonene som IN, og SERIEPLAN har ingen «Ute» for E04.
- Følgende er pensum, men ble ikke forelest. Det må leses i boka (kilde: PENSUMOVERSIKT, kap. 4):
  - 4.1.1: ridges, sideways moves og random restart. Stochastic og first-choice hill climbing nevnes heller ikke ved navn i L3.
  - 4.1.3: local beam search i sin helhet.
  - 4.1.4: mutation (slidene utelater den).
  - 4.2: empirical gradient, line search, Newton–Raphson og constrained optimization.
- 4.3–4.5 er pensum og dekkes i E05.

### Øv selv

1. Regn fitness (28 − h) for de fire barna i figur 4.6(d), 32748552, 24752411, 32752124 og 24415411, og for de muterte barna i 4.6(e). Ble alle bedre?
2. Kryss 24748552 med 32543213 etter fjerde siffer. Skriv begge barna og fitness for hvert.
3. Eksamen 2020-trekket (ΔE = −4) med T = 1 og T = 8. Hva blir P, og hva sier det om høy og lav temperatur?
4. Hver hill climbing-klatring lykkes med p = 0,25, bruker 4 steg ved treff og 3 ved bom. Hvor mange forsøk og hvor mange steg trenger random restart i snitt?
5. f(x) = 6x − x², start i x = 1. Kjør line search med α = 0,25, 0,5 og 1. Hvor stopper du? Hvor havner ett Newton-steg?
6. Eksamen 2023, oppgave 1 (short questions): en hill climbing-algoritme har funnet en tilstand der ingen nabo gir høyere verdi. Hva kan tilstanden være, om ikke global maximum? Hvilket triks kan legges til for å komme videre?
7. Eksamen 2019, oppgave 7 (short questions): tar hill climbing med en heuristisk objective function sikte på global minimum eller global maximum?
8. Eksamen 2022, oppgave 1.4–1.5: hva er forskjellen på inkrementelt og lokalt søk, og hvorfor har genetiske algoritmer mutation?
9. Eksamen 2015, problem 6 a): hva er den største svakheten ved hill climbing? A. lokale maksima, B. mye minne, C. kan sette seg fast i et globalt maksimum, D. avhenger sterkt av temperaturplanen.

### Fasit

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

---

<a id="e05"></a>

## E05 – Når verden ikke adlyder: AND-OR, belief states og online søk

> Pensum: Global 4.3–4.5 (US samme) · Forelesning: L3 · Øving: – · Eksamensvekt: ~4 % (hele kap. 4, deles med E04)
> Video: `videoer/e05-usikre-miljoer/out/tdt4136-e05-usikre-miljoer.mp4` (13:01)

### Kapitler i videoen

- 0:00 – Intro
- 0:37 – Flere utfall
- 1:46 – AND-OR-søk
- 4:07 – Blind agent: belief states
- 5:58 – Agent som ser litt
- 7:43 – Online søk
- 10:44 – Eksamen 2023, oppgave 7
- 12:04 – Koblinger og oppsummering

### Kjerneideer

**Støvsugerverdenen (Fig. 4.9).** Åtte tilstander: roboten står til venstre (L) eller høyre (R), og hver rute er skitten eller ren. Nummereringen brukt her og i boka:

| Tilstand | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Robot | L | R | L | R | L | R | L | R |
| Venstre rute | skitten | skitten | skitten | skitten | ren | ren | ren | ren |
| Høyre rute | skitten | skitten | ren | ren | skitten | skitten | ren | ren |

Mål: 7 og 8 (begge rene).

**Ikke-deterministiske handlinger (4.3.1).** I *erratic vacuum world* renser Suck på en skitten rute den ruta og noen ganger naboruta også. Suck på en ren rute kan legge igjen skitt. Da holder ikke RESULT(s, a), som gir én tilstand. Vi bruker RESULTS(s, a), som gir en *mengde* mulige tilstander, for eksempel RESULTS(1, Suck) = {5, 7}. Ingen fast sekvens virker alltid. Løsningen er en *conditional plan* (= *contingency plan*), et tre med if-setninger: `[Suck, if State = 5 then [Right, Suck] else []]`.

**AND-OR-søketre (4.3.2).** To slags noder:
- *OR-node*: en tilstand der agenten velger handling. Én handling som virker, holder.
- *AND-node*: utfallene av en handling, valgt av miljøet. Alle utfall må løses. Boka tegner den som en sirkel med bue over kantene.

En løsning er et deltre med mål i hvert blad, én handling i hver OR-node og alle grener i hver AND-node. Planen leses ovenfra: OR-noden gir en handling, AND-noden gir en if-then-else.

**Sykler (4.3.2).** OR-SEARCH returnerer *failure* hvis tilstanden allerede står på stien fra roten. Det betyr ikke at tilstanden er uløselig: finnes en løsning, finnes den fra første besøk, så gjentakelsen er overflødig. Kapitlet bruker dybde først, men AND-OR-grafer kan også søkes med BFS eller best-first (AO\*, kun nevnt i boka).

**Slippery vacuum world og cyclic plans (4.3.3).** Her kan Right glippe, så RESULTS(5, Right) = {5, 6}. Utfallet 5 står på stien, så AND-OR-SEARCH finner ingen asyklisk plan. En *cyclic plan* prøver igjen: `[Suck, while State = 5 do Right, Suck]` eller med label `[Suck, L1: Right, if State = 5 then L1 else Suck]`. Den virker hvis hvert utfall før eller senere skjer (tilfeldig glipp), ikke hvis drivreima er røket. Da må problemet modelleres annerledes. (L3 viser figuren som henvisning.)

**Sensorless (conformant) problem (4.4.1).** Verden er deterministisk, men agenten ser ingenting. Den vet bare hvilken *mengde* tilstander den kan være i: en *belief state*.
- Med N fysiske tilstander finnes 2^N belief states. I støvsugerverdenen er det 2^8 = 256, men bare 12 kan nås fra {1, …, 8} (Fig. 4.14).
- *Prediction*: b′ = PREDICT(b, a) = {s′ : s′ = RESULT(s, a) og s ∈ b}. Med ikke-deterministiske handlinger tar du unionen av alle RESULTS, og da kan mengden vokse.
- Mål: alle tilstander i b må være mål.
- Løsningen er en *sekvens*, ikke en betinget plan, for det kommer ingen percept å velge etter. [Right, Suck, Left, Suck] fører {1, …, 8} til {7}. Å tvinge verden til én tilstand uten å se heter å *coerce* den.
- *Pruning*: [Left] gir {1, 3, 5, 7}, en supermengde av {5, 7}, som [Suck, Left, Suck] og [Right, Left, Suck] også gir. En løsning for den store mengden må virke for den lille, så supermengden kan kuttes. Omvendt: er en mengde funnet løsbar, er alle delmengder løsbare.
- *Incremental belief-state search* (4.4.1, L3 kort): løs én fysisk tilstand om gangen og sjekk at løsningen virker for de neste. Oppdager raskt at et problem er uløselig.

**Partial observability med local sensing (4.4.2).** Agenten ser hvilken rute den står i og om den er skitten, for eksempel [L, Dirty]. Overgangen går i tre trinn (Fig. 4.15):
1. *Prediction*: b̂ = PREDICT(b, a).
2. *Possible percepts*: POSSIBLE-PERCEPTS(b̂) = {o : o = PERCEPT(s) og s ∈ b̂}.
3. *Update*: b_o = UPDATE(b̂, o) = {s : o = PERCEPT(s) og s ∈ b̂}.

Hver mulig percept gir sin egen belief state, og du vet ikke på forhånd hvilken du får. Det er derfor en AND-node. Update kan bare fjerne tilstander (b_o ⊆ b̂). Det er prediction som kan vokse.

**AND-OR-søk over belief states (4.4.3).** Samme AND-OR-SEARCH, med belief states som noder. Planen tester belief state, ikke den sanne tilstanden: `[Suck, Right, if Bstate = {6} then Suck else []]`.

**State estimation (4.4.4).** Mens planen kjøres, oppdaterer agenten b ← UPDATE(PREDICT(b, a), o). Dette heter *monitoring*, *filtering* eller *state estimation*. Bokas eksempel er en robot med fire sonarer i en labyrint (Fig. 4.18, *localization*). Percepten er fire biter i rekkefølgen N, Ø, S, V, der 1 betyr vegg. 1011 passer i fire ruter. Right flytter roboten til en tilfeldig nabo, og etter 1010 er bare én rute igjen. (Kun bok, ikke forelest.)

**Online search (4.5.1).** *Offline* søk lager hele planen før første steg. En *online* agent veksler mellom å handle, observere og tenke. Den kjenner bare ACTIONS(s), kostnaden c(s, a, s′) (når s′ er kjent) og IS-GOAL(s). Hva en handling gjør, vet den først etter at den har prøvd. *Competitive ratio* = faktisk kostnad / beste kostnad med kjent kart. (Kun bok.)

**Dead ends og safely explorable (4.5.1).** En *dead end* er en tilstand der ingen mål kan nås, typisk etter *irreversible actions* (trapper, et stup). *Adversary argument* (Fig. 4.20): to rom ser like ut etter S og A, men har blindveien på hver sin side. En motstander kan bygge rommet mens du leter, så ingen algoritme unngår blindveier i alle rom. Competitive ratio kan da bli uendelig. Derfor antar vi at rommet er *safely explorable*: fra hver nåbar tilstand kan et mål nås. (Kun bok.)

**ONLINE-DFS-AGENT (4.5.2, Fig. 4.21).** Dybde først passer online, fordi neste node alltid er nabo til den forrige. Agenten lagrer `result[s, a]`, `untried[s]` (handlinger ikke prøvd) og `unbacktracked[s]` (hvor den kom fra). Er alt prøvd, går den fysisk tilbake. Krever reversible handlinger. (Kun bok.)

**Random walk (4.5.3).** Velg en tilfeldig handling, helst en lite prøvd. I et endelig, safely explorable rom når den målet til slutt, men i rom der det er lettere å gå bakover enn fremover, kan det ta eksponentielt mange steg (Fig. 4.22). Hill climbing er allerede online, men blir stående på en topp og kan ikke hoppe til en tilfeldig ny start. (Kun bok.)

**LRTA\* (4.5.3–4.5.4, Fig. 4.23–4.24).** *Learning real-time A\**: gi hill climbing hukommelse. Agenten lagrer et estimat H(s), som starter lik heuristikken h(s). Før den går, oppdaterer den H for staten den forlater:

H(s) ← min over b av [c(s, b, s′) + H(s′)]

og går dit summen er minst. En uprøvd handling antas å føre rett til mål med kostnad h(s) (*optimism under uncertainty*), som lokker agenten til å utforske. I et endelig, safely explorable rom finner LRTA\* alltid målet, og H blir en bedre heuristikk underveis (kobling til E03). L3 viste bare figuren.

### Algoritmer og håndsporing

**AND-OR-SEARCH (Fig. 4.11), kortform:**

```
function AND-OR-SEARCH(problem) returns plan eller failure
    return OR-SEARCH(problem, problem.INITIAL, [])

function OR-SEARCH(problem, state, path)
    if IS-GOAL(state) then return []
    if IS-CYCLE(path) then return failure       # state står allerede på path
    for each action in ACTIONS(state) do
        plan ← AND-SEARCH(problem, RESULTS(state, action), [state] + path)
        if plan ≠ failure then return [action] + plan
    return failure

function AND-SEARCH(problem, states, path)
    for each sᵢ in states do
        planᵢ ← OR-SEARCH(problem, sᵢ, path)
        if planᵢ = failure then return failure
    return [if s₁ then plan₁ else if s₂ then plan₂ else … planₙ]
```

**Erratic Suck, alle RESULTS:**

| s | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| RESULTS(s, Suck) | {5, 7} | {4, 8} | {7} | {2, 4} | {1, 5} | {8} | {3, 7} | {6, 8} |

Right og Left er deterministiske i erratic-verdenen.

**AND-OR-SEARCH fra 1 (Fig. 4.10), handlingsrekkefølge Suck, Right, Left:**

| Steg | Hva skjer |
|---|---|
| OR(1) | prøver Suck → AND {5, 7} |
| OR(5), sti [1] | prøver Suck → AND {1, 5} |
| OR(1), sti [5, 1] | 1 står på stien → failure, så Suck fra 5 feiler |
| OR(5) | prøver Right → AND {6} |
| OR(6), sti [5, 1] | prøver Suck → AND {8} |
| OR(8) | mål → [] |
| OR(7) | mål → [] |

Plan: `[Suck, if State = 5 then [Right, Suck] else []]`. Right-grenen fra roten blir aldri utforsket.

**Sensorless, deterministisk støvsuger:**

| Handling | Belief state |
|---|---|
| start | {1, 2, 3, 4, 5, 6, 7, 8} |
| Right | {2, 4, 6, 8} |
| Suck | {4, 8} |
| Left | {3, 7} |
| Suck | {7} |

Med erratic Suck vokser mengden: PREDICT({5, 7}, Suck) = {1, 5} ∪ {3, 7} = {1, 3, 5, 7}.

**Local sensing (Fig. 4.15 og 4.16):**
- Deterministisk Right fra {1, 3} (percept [L, Dirty]): prediction {2, 4}, percepts [R, Dirty] og [R, Clean], update {2} og {4}.
- Slippery Right fra {1, 3}: prediction {1, 2, 3, 4}, percepts [L, Dirty], [R, Dirty], [R, Clean], update {1, 3}, {2} og {4}.
- Plan fra {1, 3} (deterministisk): Suck gir {5, 7} med percept [L, Clean]. Right gir {6, 8}, som percepten deler i {6} og {8}. Plan: `[Suck, Right, if Bstate = {6} then Suck else []]`.

**Lokalisering (Fig. 4.18, rad 0 øverst, kolonne 0 til venstre, 42 frie ruter):**
- UPDATE(b, 1011) = {(0, 0), (0, 11), (3, 0), (3, 7)}. Alle fire har bare øst åpent.
- PREDICT(…, Right) = {(0, 1), (0, 12), (3, 1), (3, 8)}. Right går til en tilfeldig nabo, men her finnes bare én nabo hver.
- UPDATE(…, 1010) = {(0, 1)}. De tre andre har åpent i sør eller nord.

**ONLINE-DFS-AGENT på Fig. 4.19** (3×3, S = (1, 1), G = (3, 3), koordinater (x, y)). Rekkefølgen opp, høyre, ned, venstre er valgt her. Boka oppgir ingen rekkefølge.

Vei: (1,1) → (1,2) → (1,1) → (2,1) → (2,2) → (2,3) → (2,2) → (2,1) → (3,1) → (3,2) → (3,3). Det er 10 steg mot 4 på beste vei: competitive ratio 10 / 4 = 2,5. Fra (2,3) prøver agenten Down, som er en uprøvd handling, selv om den fører tilbake til (2,2). Agenten vet ikke hvor Down fører før den har prøvd.

**Random walk, ILLUSTRASJON** (forenklet kjede, ikke Fig. 4.22): n + 1 tilstander på rad, altså n overganger fra start til mål. Fra start går agenten alltid fremover, ellers med sannsynlighet 1/3 fremover og 2/3 bakover. Forventet antall steg til første målbesøk: 4(2^n − 1) − 3n. n = 5 overganger gir 109, n = 10 (11 tilstander) gir 4062, n = 20 (21 tilstander) gir 4 194 240.

**LRTA\* på Fig. 4.23** (seks tilstander på rad, alle kanter koster 1, start i tredje tilstand). Tallene er H. Agenten står i den markerte.

| Bilde | H | Agent i | Valg (venstre, høyre) | Oppdatering |
|---|---|---|---|---|
| (a) | 8 9 **2** 2 4 3 | 3. | 1 + 9 = 10, 1 + 2 = 3 | H(3.) ← min(10, 3) = 3, går høyre |
| (b) | 8 9 3 **2** 4 3 | 4. | 1 + 3 = 4, 1 + 4 = 5 | H(4.) ← min(4, 5) = 4, går venstre |
| (c) | 8 9 **3** 4 4 3 | 3. | 1 + 9 = 10, 1 + 4 = 5 | H(3.) ← 5, går høyre |
| (d) | 8 9 5 **4** 4 3 | 4. | 1 + 5 = 6, 1 + 4 = 5 | H(4.) ← 5, går høyre |
| (e) | 8 9 5 5 **4** 3 | 5. | 1 + 5 = 6, 1 + 3 = 4 | H(5.) ← min(6, 4) = 4, går høyre |

Agenten kommer seg ut av «dalen» ved at H i dalen løftes til den ikke lenger er billigst. Siste rad er quizen i videoen. Fig. 4.23 viser H for naboene, og sporingen bruker dem. Etter pseudokoden teller en handling som ikke er prøvd, som h(s) (optimisme). Da kan valgene i (a) bli annerledes, så følg figuren når oppgaven gir den.

```
function LRTA*-AGENT(s′) returns en handling
    if IS-GOAL(s′) then return stop
    if s′ er ny then H[s′] ← h(s′)
    if s ≠ null then
        result[s, a] ← s′
        H[s] ← min over b i ACTIONS(s) av LRTA*-COST(s, b, result[s, b], H)
    a ← handlingen b i ACTIONS(s′) som minimerer LRTA*-COST(s′, b, result[s′, b], H)
    s ← s′;  return a

function LRTA*-COST(s, a, s′, H)
    if s′ er ukjent then return h(s)
    else return c(s, a, s′) + H[s′]
```

**Eksamen 2023, oppgave 7** (figur 4: 4 × 12, r0 nederst, c0 til venstre, robot i (r2, c3); samme labyrint som de 12 første kolonnene i Fig. 4.18).
1. P1 = {N, S, W, ¬E}: bare update. S1 = {(r0, c0), (r3, c0), (r0, c7)}.
2. Right: predict flytter alle ett steg øst til {(r0, c1), (r3, c1), (r0, c8)}. P2 = {N, S, ¬W, ¬E}: (r0, c1) og (r0, c8) har åpent i nord. S2 = {(r3, c1)}.
3. Right går mot vest. Fasiten har to tolkninger:
   - 1a, start i S1: alle tre har vegg i vest, roboten blir stående (fasiten antar det), og S = S1.
   - 1b, start i ruta i figuren (r2, c3): roboten havner i (r2, c2), percepten blir {¬N, ¬S, W, ¬E}, og S = {(r1, c8), (r2, c2)}.

### Eksamensfeller

- **«Adversive plans».** Eksamen 2024 Q2: AND-OR-søk gir *contingency plans* (conditional plans), ikke «adversive plans». Det var det gale utsagnet.
- **OR og AND forveksles.** OR = agentens valg (én handling holder). AND = miljøets utfall eller percepter (alle må løses). L3 s. 102 omtaler handlingene som OR-nodene. I boka er tilstandene OR-noder og utfallene AND-noder. Bruk bokas variant og si hva du mener.
- **Failure ved løkke = uløselig.** Feil. Failure på en sykel betyr bare at denne grenen ikke trengs.
- **Sensorless-svaret skrevet som betinget plan.** Uten percepter kan du ikke velge. Svaret er en sekvens.
- **Update gjør mengden større.** Nei, update fjerner bare. Prediction kan vokse med ikke-deterministiske handlinger.
- **Glemmer predict i 2023 7.2.** Flytt alle kandidatene først, og fjern så dem som ikke passer P2. Bare update på hele labyrinten gir for mange svar.
- **Uklar oppgave uten antakelse.** I 2023 7.3 godtok fasiten begge tolkningene. Skriv hvilken du bruker, og hva som skjer når roboten går i en vegg.
- **LRTA\*: oppdaterer feil tilstand.** H oppdateres for staten agenten *forlater*, med minimum over alle handlinger, før den går. Den går dit c + H er minst.
- **Online-agenten kjenner RESULT.** Nei, den lærer `result[s, a]` først etter å ha prøvd.
- **Bytter rad og kolonne.** Eksamensfiguren har r0 nederst. Bokas Fig. 4.18 nummereres ofte ovenfra. Les aksene.

### Koblinger til andre kapitler

- **E02 (kap. 3):** AND-OR-SEARCH er rekursiv dybde først-søk med syklussjekk på stien. Sensorless-problemet kan løses med vanlige søkealgoritmer i belief-state-rommet.
- **E03 (kap. 3):** LRTA\* starter med en heuristikk h og lærer en bedre H. Optimism under uncertainty ligner admissible heuristikker.
- **E04 (kap. 4.1–4.2):** hill climbing er et online søk uten hukommelse. LRTA\* og random walk er svarene på at den setter seg fast.
- **E09 (kap. 6):** Kriegspiel er sjakk med belief states over brettet.
- **E11 (kap. 7):** en belief state er en mengde mulige verdener, slik modellene til en logisk setning er det. Wumpus-agenten gjør state estimation.
- **E19 (kap. 11):** sensorless (conformant), contingent og online planning bruker de samme ideene med planleggingsspråk (eksamen 2025 oppg. 11b).

### Ikke pensum her

Ingen delkapitler i 4.3–4.5 er merket utenfor pensum (UT). Følgende står bare i boka og ble ikke forelest i L3. Videoen sier det når de dukker opp:
- 4.4.4 State estimation med robotlokalisering (Fig. 4.18).
- 4.5.1 Competitive ratio, dead ends, adversary argument og safely explorable.
- 4.5.2 ONLINE-DFS-AGENT (Fig. 4.19–4.21).
- 4.5.3 Random walk (Fig. 4.22).
- 4.5.4 LRTA\* er bare vist som figur i L3 (s. 117). Pseudokoden (Fig. 4.24) står bare i boka.
- AO\* og bokas utdypning av incremental belief-state search er bare nevnt.

### Øv selv

1. **Eksamen 2023, oppgave 7 (5 p).** Løs alle tre deler med labyrinten i figur 4. Skriv belief state i formatet S = {(r, c), …}, og skriv antakelsen din i del 3.
2. **Eksamen 2024, Q2 (flervalg, poeng ikke oppgitt i fasiten).** Hvilket utsagn er galt: «In nondeterministic environments agent can apply AND-OR search to generate adversive plans»? Begrunn med riktig fagbegrep.
3. **Eksamen 2023, kortspørsmål i oppgave 1 (poeng ikke oppgitt).** Hvordan må en agent i et partially observable miljø skille seg fra en simple reflex agent?
4. **Eksamen 2025, oppgave 11b (3 p).** Beskriv classical planning og sensorless planning kort, og forklar de viktigste forskjellene.
5. **Egen oppgave.** Bruk erratic Suck. Start i belief state {1, 3}, sensorless. Hva er PREDICT etter Suck, og hva etter Suck, Right?
6. **Egen oppgave.** Slippery vacuum world (Right og Left kan glippe, Suck er deterministisk). Hvorfor finner AND-OR-SEARCH ingen plan fra 1? Skriv en cyclic plan.

### Fasit

**Quizene i videoen:**
- Q1: RESULTS(2, Suck) = {4, 8}. Høyre rute renses, og noen ganger venstre også.
- Q2: contingency plans. «Adversive plans» var det gale utsagnet i 2024 Q2.
- Q3: {5, 7}. Left gir {1, 3, 5, 7}, og Suck gjør 1 til 5 og 3 til 7.
- Q4: nei. Update fjerner bare tilstander. Prediction er det som kan vokse.
- Q5: høyre, siden 1 + 3 = 4 < 1 + 5 = 6. H der den var blir min(6, 4) = 4, som før.

**Øv selv:**
1. S1 = {(r0, c0), (r3, c0), (r0, c7)}. S2 = {(r3, c1)}. Del 3: med start i S1 blir roboten stående, og S = S1. Med start i (r2, c3) blir S = {(r1, c8), (r2, c2)}. Se håndsporingen over.
2. Utsagnet er galt fordi AND-OR-søk i ikke-deterministiske miljøer gir *contingency plans* (conditional plans). Fasiten godtok også utsagnet om støvsugeren som ikke suger skikkelig, fordi noen leste «vår» støvsuger som agenten i Q1.
3. Den trenger hukommelse, og overgangsfunksjonen må virke på belief states, ikke enkelttilstander (fasiten 2023).
4. Classical planning: fullt observerbar, deterministisk, statisk verden, søk i tilstandsrommet. Sensorless (conformant) planning: ingen observasjoner under utførelsen, så planen søkes i belief-rommet og må virke fra alle mulige starttilstander (fasiten 2025).
5. Suck: RESULTS(1, Suck) ∪ RESULTS(3, Suck) = {5, 7} ∪ {7} = {5, 7}. Right: {6, 8}.
6. Suck fra 1 gir 5. RESULTS(5, Right) = {5, 6}, og 5 står allerede på stien, så AND-noden feiler. Left fra 5 gir bare 5 igjen, og Right fra 1 gir {1, 2} med 1 på stien. Alle grener feiler. Cyclic plan: `[Suck, L1: Right, if State = 5 then L1 else Suck]`, eller `[Suck, while State = 5 do Right, Suck]`.

---

<a id="e06"></a>

## E06 – CSP 1: modellering og constraint propagation

> Pensum: Global 5.1–5.2 (US 6.1–6.2) · Forelesning: L4, AL2, L13 · Øving: Ø2 · Eksamensvekt: ~16 % (CSP samlet, delt med E07)
> Video: `videoer/e06-csp-propagering/out/tdt4136-e06-csp-propagering.mp4` (16:00)

### Kapitler i videoen

- 00:00 – Intro
- 00:44 – Hvorfor CSP?
- 02:16 – Hva kan en constraint være?
- 04:14 – Node og arc consistency
- 05:37 – AC-3 i tabellform
- 08:26 – Arc-konsistent er ikke nok
- 09:59 – Global constraints og Sudoku
- 11:46 – Modellering
- 12:49 – Eksamen: AC-3-tabell
- 15:01 – Koblinger og oppsummering

### Kjerneideer

#### Hvorfor CSP?

- I kapittel 3 er tilstanden en **atomic representation**, en svart boks. Søket kan bare spørre om tilstanden er målet.
- En CSP bruker en **factored representation**: tilstanden er variabler med verdier. Da ser algoritmen hvilken constraint som brytes. Den kan forkaste alle utvidelser av en ulovlig delløsning på én gang.
- Tallene fra kroken: Australia har 7 regioner og 3 farger, altså 3⁷ = 2187 fargelegginger.
  - Settes SA = blue, kan ingen av de fem naboene være blå.
  - For dem faller 3⁵ = 243 muligheter til 2⁵ = 32. Det er 87 % færre.

#### Definisjonen: X, D, C

- **X** er variablene, **D** er domenene (lovlige verdier per variabel), og **C** er constraints.
- En constraint er et par ⟨scope, rel⟩:
  - scope er variablene den gjelder
  - rel er relasjonen, som formel eller som liste over lovlige tupler
  - eksempel: ⟨(SA, WA), SA ≠ WA⟩, eller {(red, green), (red, blue), (green, red), (green, blue), (blue, red), (blue, green)}
- En tilordning (assignment) er **consistent** hvis ingen constraint brytes, og **complete** hvis alle variabler har en verdi. En **solution** er consistent og complete. En **partial solution** er en consistent tilordning til noen av variablene.
- **Australia, map coloring (5.1.1):**
  - X = {WA, NT, Q, NSW, V, SA, T}
  - Dᵢ = {red, green, blue}
  - én ≠-constraint per grense, 9 i alt. T har ingen naboer.
- **Constraint graph:** variablene er noder, og binære constraints er kanter. Hver kant gir to **arcs** (buer), én i hver retning. Australia har altså 18 buer.
- **Domenetyper (5.1.3):**
  - diskrete og endelige (som over)
  - diskrete og uendelige (for eksempel starttider uten frist)
  - kontinuerlige (for eksempel linear programming)

#### Job-shop scheduling (5.1.2, kun bok)

Foreleser tok det ikke, men det er pensum.

- Hver oppgave er en variabel. Verdien er starttiden.
- **Precedence constraint:** T₁ + d₁ ≤ T₂. Eksempel: akselen tar 10 minutter og må på før hjulet, altså AxleF + 10 ≤ WheelRF.
- **Disjunctive constraint:** to aksler deler ett verktøy, så de kan ikke overlappe: (AxleF + 10 ≤ AxleB) or (AxleB + 10 ≤ AxleF).
- **Frist:** hver oppgave må være ferdig innen 30 minutter: Tᵢ + dᵢ ≤ 30, altså Dᵢ = {0, 1, …, 30 − dᵢ}. Boka skriver bare Dᵢ = {0, 1, …, 30}, men da kan bokas sluttinspeksjon på 3 minutter starte på 30 og slutte på 33.

#### Typer constraints

- **Unary constraint:** én variabel, for eksempel ⟨(SA), SA ≠ green⟩.
- **Binary constraint:** to variabler, for eksempel SA ≠ NSW. En binary CSP kan tegnes som en vanlig constraint graph.
- **Ternary constraint:** tre variabler, for eksempel Between(X, Y, Z).
- **Global constraint:** vilkårlig mange variabler, men ikke nødvendigvis alle.
  - Den vanligste er **Alldiff**: alle verdiene er ulike.
  - L4 viser at Alldiff(X1, X2, X3) tilsvarer X1≠X2, X1≠X3 og X2≠X3.
- **Cryptarithmetic (L4):** TWO + TWO = FOUR.
  - Hver bokstav er et eget siffer, for eksempel 765 + 765 = 1530.
  - Alldiff(F, T, U, W, R, O).
  - Kolonnene gir:
    - O + O = R + 10·C1
    - C1 + W + W = U + 10·C2
    - C2 + T + T = O + 10·C3
    - C3 = F
- **Auxiliary variables (kun bok):** C1–C3 er mentene, hjelpevariabler med domene {0, 1}. Med hjelpevariabler kan enhver endelig constraint skrives om til binære constraints.
- **Constraint hypergraph (kun bok):** både variabler og constraints er noder. Constraints tegnes som firkanter.
- **Preference constraints og COP (kun bok):**
  - **Absolute constraint:** «ingen professor underviser to fag samtidig». Brytes den, er det ingen løsning.
  - **Preference constraint:** «prof. R vil helst ha morgen». Ønsket blir en kostnad, morgen 1 og ettermiddag 2.
  - Problemet blir da et **constrained optimization problem (COP)**: finn den billigste løsningen. Linear programming er én klasse COP.

#### Consistency

- **Node consistency (kun bok):** alle verdier i domenet oppfyller variabelens unary constraints. Eksamen bruker det for ordlengder i kryssord: «5 bokstaver» gir {astar, happy, hello, hoses}.
- **Arc consistency:**
  - Xᵢ er arc-consistent mot Xⱼ hvis hver verdi i Dᵢ har minst én partner i Dⱼ som oppfyller constrainten.
  - **Retningen teller:** buen (X, Y) rydder bare i D(X). Derfor har hver binær constraint to buer.
  - Eksempel: Y = X², med domene {0, …, 9} for begge.
    - (X, Y) gir D(X) = {0, 1, 2, 3}, fordi 4² = 16 ikke finnes i D(Y).
    - (Y, X) gir D(Y) = {0, 1, 4, 9}.
  - Eksempel fra L4: X3 = {blue} og X4 = {red, blue}.
    - (X3, X4) er arc-consistent.
    - (X4, X3) er ikke det: blue i X4 har ingen partner. L4 skriver D4 ← D4 \ {blue}.
- **AC-3 garanterer arc consistency, ikke en løsning.**
  - Australia med bare to farger er arc-consistent: alle verdier har partner, så AC-3 stryker ingenting.
  - Likevel finnes ingen løsning: WA, NT og SA er naboer parvis, og tre ulike verdier går ikke med to farger.
- **Path consistency (kun bok):**
  - {Xᵢ, Xⱼ} er path-consistent mot Xₘ hvis hver lovlige tilordning til de to kan utvides med en verdi for Xₘ.
  - Med to farger har {WA, SA} bare parene red-blue og blue-red. Begge gir NT ingen farge.
  - Begge parene strykes, og vi ser at det ikke finnes noen løsning.
- **k-consistency (kun bok):**
  - Enhver consistent tilordning til k − 1 variabler kan utvides med en consistent verdi for en k-te variabel.
  - 1 = node, 2 = arc, 3 = path.
  - **Strongly k-consistent** betyr k-consistent, (k−1)-consistent og så videre ned til 1.
  - En strongly n-consistent CSP med n variabler løses uten backtracking, i O(n²d).
  - Men å etablere n-consistency tar eksponentiell tid i verste fall. I praksis brukes 2-consistency, av og til 3.
  - 3-consistency alene garanterer *ikke* 2-consistency.

#### Global constraints

- **Alldiff-telling:** har en Alldiff m variabler og bare n mulige verdier til sammen, og m > n, kan den ikke oppfylles.
  - Algoritme: fjern variabler med ett element i domenet, og stryk verdien deres hos de andre. Gjenta.
  - Inkonsistent hvis et domene blir tomt, eller hvis det blir flere variabler enn verdier igjen.
  - Bokas eksempel: med WA = NSW = red gir AC-3 SA, NT, Q = {green, blue} uten feil. Men de tre er naboer parvis, og m = 3 > n = 2. Inkonsistent.
- **Bounds propagation (kun bok):** for store tallproblemer lagres bare [min, max].
  - To fly har F1 ∈ [0, 165] og F2 ∈ [0, 385], og F1 + F2 = 420.
  - Da blir F1 ∈ [35, 165] (420 − 385) og F2 ∈ [255, 385] (420 − 165).
  - Dette kalles **bounds-consistent**.
- **Sudoku (5.2.6):**
  - 9 × 9 har 81 variabler og 27 Alldiff (9 rader, 9 kolonner og 9 bokser), som tilsvarer 810 binære ≠-constraints.
  - L4 og L13 bruker 4 × 4 med 4 gitte tall. Det gir 12 Alldiff, 56 binære ≠-constraints og 112 buer.
  - AC-3 løser 4 × 4-brettet uten søk: 2431 / 3142 / 1324 / 4213.
  - Rute (1,1) mister 4 og 1 fra raden og 3 fra kolonnen. Igjen står {2}.
  - AC-3 alene klarer bare lette brett. Vanskelige brett krever sterkere inferens eller søk (E07). AL2 sier det samme: «AC-3 may immediately complete some of the simpler boards».

#### Modellering

Still fire spørsmål:

1. Hva skal bestemmes? Det gir variablene.
2. Hvilke verdier kan de ta? Det gir domenene, med unary constraints lagt rett inn.
3. Hvilke regler gjelder? Det gir constraints, gjerne Alldiff.
4. Gir hver løsning ett svar på spørsmålet?

Ofte er det lurt å bytte variabel og verdi. I zebra-gåten i L4 er personer, farger og dyr variabler, og husnummeret er verdien. Eksamen 2025 oppgave 3 er bygd på samme måte (se Fasit).

### Algoritmer og håndsporing

#### AC-3 (Global fig. 5.3, US fig. 6.3), kortform

```
function AC-3(csp) returns false hvis en inkonsistens finnes, ellers true
  queue ← alle buer (Xi, Xj) i csp, begge retninger
  while queue ikke er tom:
    (Xi, Xj) ← POP(queue)
    if REVISE(csp, Xi, Xj):              # Di krympet
      if Di er tom: return false
      for each Xk in NEIGHBORS(Xi) − {Xj}:
        add (Xk, Xi) to queue             # står buen alt der, legges den ikke inn igjen
  return true

function REVISE(csp, Xi, Xj) returns true hvis Di ble endret
  revised ← false
  for each x in Di:
    if ingen y i Dj gjør at (x, y) oppfyller constrainten mellom Xi og Xj:
      slett x fra Di; revised ← true
  return revised
```

- **Hvorfor ikke (Xj, Xi)?**
  - Verdiene som ble strøket fra Dᵢ, hadde ingen partner i Dⱼ, så ingen verdi i Dⱼ brukte dem som partner.
  - Andre naboer Xₖ kan ha brukt dem, og derfor må buene (Xₖ, Xᵢ) sjekkes på nytt.
  - Boka kaller køen en kø, men sier at rekkefølgen ikke betyr noe for resultatet, så den er egentlig en mengde. En bue ligger derfor bare én gang i køen.
- **Kompleksitet O(cd³):**
  - c buer og høyst d verdier per domene.
  - En bue (Xₖ, Xᵢ) legges bare inn igjen når Dᵢ krymper, altså høyst d ganger.
  - Hver REVISE sjekker opptil d · d par.
  - Til sammen blir det c · d · d² = O(cd³).
- **Resultat:**
  - false hvis et domene blir tomt; da finnes ingen løsning.
  - Ellers en arc-consistent CSP med de samme løsningene. Den kan fortsatt mangle løsning (to-farge-eksempelet) eller ha flere (kryssordet).
- **Bruk:** som forbehandling før søk, eller inne i søket etter hver tilordning (MAC, neste episode). L4 viser varianten der køen bare starter med (Xₖ, X2) etter X2 = green.

| Egenskap | AC-3 |
|---|---|
| Hva den sjekker | binære constraints, én bue om gangen |
| Garanti | arc consistency; tomt domene → ingen løsning |
| Ingen garanti | at en løsning finnes, eller at den er entydig |
| Tid | O(cd³) i verste fall |
| Resultat avhengig av køens rekkefølge? | Nei, bare antall rader og rekkefølgen strykingene skjer i |

#### Håndsporing 1: A < B < C (eget illustrasjonseksempel)

Eksempelet er laget for videoen og er ikke fra kildene.

- Tre oppgaver kan starte i time 1, 2 eller 3, og A må før B, B før C.
- Constraints: A < B og B < C. D = {1, 2, 3} for alle.
- Køen starter sortert.

| # | Kø før pop | Bue | Stryk | D etter | Legg til |
|---|---|---|---|---|---|
| 1 | A→B · B→A · B→C · C→B | A→B | 3 | D(A) = {1, 2} | – |
| 2 | B→A · B→C · C→B | B→A | 1 | D(B) = {2, 3} | – (C→B står alt i køen) |
| 3 | B→C · C→B | B→C | 3 | D(B) = {2} | A→B (ikke C→B: det var C vi ryddet mot) |
| 4 | C→B · A→B | C→B | 1, 2 | D(C) = {3} | – |
| 5 | A→B | A→B | 2 | D(A) = {1} | – |

Køen er tom, så AC-3 svarer true med A = 1, B = 2 og C = 3. Problemet er løst uten søk.

#### Håndsporing 2: «Din tur», D(C) = {1, 2}

| # | Kø før pop | Bue | Stryk | D etter |
|---|---|---|---|---|
| 1 | A→B · B→A · B→C · C→B | A→B | 3 | D(A) = {1, 2} |
| 2 | B→A · B→C · C→B | B→A | 1 | D(B) = {2, 3} |
| 3 | B→C · C→B | B→C | 2, 3 | D(B) = { } → **false** |

#### Håndsporing 3: eksamensoppgave, kryssord

Kilde: kont-eksamen august 2021, problem 3 (25 p). Filen heter `2020ResitQ`.

**Oppgaven:**

- Fire plasser: V1 vannrett (5 bokstaver), V2 loddrett (4), V3 loddrett (3) og V4 vannrett (4).
- Ordliste: astar, happy, hello, hoses, live, load, loom, peal, peel, save, talk, anon, nerd, tine, ant, oak, old, ten, run.
- Rutenettet er en figur som ikke kunne leses fra kildefila. Videoen tegner det ut fra fasitens constraints.

**Constraints (fasiten teller 8):**

- C1–C4: ordlengdene, som er unary constraints.
- C5: V1[3] = V2[1]
- C6: V1[5] = V3[1]
- C7: V4[2] = V2[3]
- C8: V4[4] = V3[3]

**Node consistency:**

- V1 = {astar, happy, hello, hoses}
- V2 = V4 = {live, load, loom, peal, peel, save, talk, anon, nerd, tine}
- V3 = {ant, oak, old, ten, run}

**AC-3** med FIFO-kø, sortert ved start, og bokas regel (unntatt Y→X):

| # | Kø før pop | Bue | Stryk | Legg til |
|---|---|---|---|---|
| 1 | V1V2 V1V3 V2V1 V2V4 V3V1 V3V4 V4V2 V4V3 | V1V2 | – | – |
| 2 | V1V3 V2V1 V2V4 V3V1 V3V4 V4V2 V4V3 | V1V3 | happy, hoses | – |
| 3 | V2V1 V2V4 V3V1 V3V4 V4V2 V4V3 | V2V1 | peal, peel, save, anon, nerd | – |
| 4 | V2V4 V3V1 V3V4 V4V2 V4V3 | V2V4 | live, talk | V1V2 |
| 5 | V3V1 V3V4 V4V2 V4V3 V1V2 | V3V1 | ant, ten | – |
| 6 | V3V4 V4V2 V4V3 V1V2 | V3V4 | – | – |
| 7 | V4V2 V4V3 V1V2 | V4V2 | live, peal, peel, nerd, tine | V3V4 |
| 8 | V4V3 V1V2 V3V4 | V4V3 | loom, save | V2V4 |
| 9 | V1V2 V3V4 V2V4 | V1V2 | – | – |
| 10 | V3V4 V2V4 | V3V4 | – | – |
| 11 | V2V4 | V2V4 | – | – |

Hvorfor radene gir det de gir:

- **Rad 2:** femte bokstav i V1 må starte et ord på tre bokstaver (a, o, t eller r). Det utelukker happy (y) og hoses (s).
- **Rad 3:** tredje bokstav i V1 er nå t eller l, så V2 må starte på t eller l.
- **Rad 4:** tredje bokstav i V2 må være andre bokstav i et V4-ord.
  - live gir v og talk gir l. Ingen V4-ord har v eller l som andre bokstav.
  - Fordi D(V2) endres, legges V1V2 tilbake. V4V2 står alt i køen.

Etter AC-3:

- V1 = {astar, hello}
- V2 = {load, loom, tine}
- V3 = {oak, old, run}
- V4 = {load, talk, anon}

AC-3 svarer true, men løser ikke oppgaven. Tre løsninger passer fortsatt, og søket må velge:

- (astar, tine, run, anon)
- (hello, load, oak, talk)
- (hello, loom, old, load)

**Fasiten avviker fra boka.** Etter at D(Xᵢ) er endret via (Xᵢ, Xⱼ), legger fasiten også tilbake (Xⱼ, Xᵢ):

- Etter rad 3 legger den inn V1V2 med en gang. Boka legger den inn først i rad 4.
- Etter rad 5 legger den til V1V3 i tillegg.
- Den får 12 rader i stedet for 11, men de samme sluttdomenene.

Følg boka, L4 og L13. Begge forelesningene viser til fig. 5.3, og EKSAMENSPLAN bruker regelen «alle Z→X unntatt Y→X». Skriv hvilken regel du bruker hvis du avviker. Kjøringene står i `videoer/e06-csp-propagering/verifiser.py`.

### Eksamensfeller

- **Feil retning i REVISE.** Buen (X, Y) stryker bare i D(X). Ikke rydd begge sider i samme rad.
- **Glemt å legge tilbake buer som alt er brukt.**
  - I A < B < C forsvinner rad 5 da, og A står igjen med {1, 2}. Det er feil svar: A = 2 har ingen B > 2.
  - Fasitene vil se buen bakerst i køen.
- **Lagt tilbake Y→X i tillegg.** Det gir samme domener, men flere rader. Bokas regel er «unntatt Y→X», og 2021-kontfasiten bruker den andre varianten. Skriv hvilken regel du følger.
- **Samme bue to ganger i køen.** Står buen alt i køen, legges den ikke inn igjen.
- **Uryddig tabell.** Bruk kolonnene kø før pop, bue, domener før og etter, og hva som legges til. Behold køen i FIFO-rekkefølge, slik oppgaven sier (ofte sortert ved start).
- **Fortsatt etter tomt domene.** Blir et domene tomt, svarer AC-3 false med en gang.
- **«AC-3 ga true, altså finnes en løsning».** Nei. Arc consistency alene garanterer ingen løsning: Australia med to farger er arc-consistent, men WA, NT og SA er naboer parvis. Og selv om AC-3 svarer true, kan det finnes flere løsninger (kryssordet).
- **Node consistency glemt.** Gjør unary constraints (ordlengder, «oddetall») før AC-3. Oppgavene spør ofte eksplisitt om det.
- **Telle constraints og buer.**
  - Antall buer er 2 × antall binære constraints.
  - Kryssordfasiten teller også de unary constraints (8 i alt).
  - Alldiff over k variabler tilsvarer k(k−1)/2 ulikheter.
- **Kompleksitet.** O(cd³), ikke O(cd²). Den ekstra d-en kommer av at hver bue kan komme tilbake d ganger.
- **3-consistent er ikke strongly 3-consistent.** Bare strongly k gir alle lavere nivåer.
- **Modellering.** Velg variabler slik at hver løsning gir ett svar. I husgåter er husnummeret verdien, ikke variabelen.

### Koblinger til andre kapitler

- → kap. 2.4.7 / E01: atomic, factored og structured representation. CSP er første factored-metode.
- → kap. 3 / E02: backtracking er dybde-først-søk over delvise tilordninger.
- → kap. 5.3 / E07: BACKTRACKING-SEARCH, MRV, degree, LCV og forward checking. MAC er AC-3 kjørt inne i søket etter hver tilordning.
- → kap. 4 / E04 og 5.4 / E07: min-conflicts er lokalt søk på komplette tilordninger.
- → kap. 7 / E12: L5 (s. 72–76) løser en graffargelegging med fire noder og tre farger med resolution. Det er SAT og CSP i samme problem.
- → kap. 11 / E18–E19: en plan med fast lengde k kan kodes som en CSP med én variabel Actionₜ per tidssteg. Detaljene står i 11.2.4, som ikke er pensum. Ideen nevnes i kapittelsammendraget.

### Ikke pensum her

- 5.5 The Structure of Problems: tree-structured CSP, topological sort, cutset conditioning, tree decomposition og value symmetry. Kilde: PENSUMOVERSIKT (UT) og EKSAMENSPLAN. 2025 Q7 er derfor utenfor pensum. AL2 nevner at forrige eksamen hadde topological sort, men seksjonen er ikke på pensumlista.
- 5.3.3–5.3.4 (backjumping og constraint learning). Kilde: L4 dekker 5.1–5.4 uten disse (PENSUMOVERSIKT).
- z3 og annen CSP-programvare. Kilde: L4 s. 45 «not curriculum», og z3-løsningen i L5 s. 72–76.
- 11.2.4 (planning som CSP i detalj) og 11.6 (scheduling). Kilde: PENSUMOVERSIKT (UT).
- Backtracking, MRV, degree, LCV, forward checking, MAC og min-conflicts *er* pensum, men står i E07.

### Øv selv

1. X, Y, Z ∈ {1, 2, 3, 4} med Y = 2X og Z > Y.
   - Kjør AC-3 med køen X→Y, Y→X, Y→Z, Z→Y. Vis tabellen.
   - Er problemet løst etter AC-3?
2. Australia med tre farger, der WA = red og SA = blue er gitt. Hva er domenene etter AC-3?
3. A, B, C ∈ {1, 2} med A ≠ B, B ≠ C og A ≠ C.
   - Hva gjør AC-3?
   - Finnes det en løsning?
   - Hvilken teknikk fra 5.2 avslører svaret?
4. X + Y = 10 med X ∈ [0, 4] og Y ∈ [0, 8]. Hva gir bounds propagation?
5. Modeller 4-queens som CSP: variabler, domener og constraints. Hvor mange binære constraints og buer får du?
6. Gamle eksamener:
   - 2023 oppg. 4 (15 p, AC-3-tabell)
   - kont aug. 2021 problem 3 (25 p, kryssordet over; `2020ResitQ`)
   - 2019 oppg. 4 (12 p)
   - 2018 problem 1 (10 p)
   - 2015 (AC-3 på X, Y, Z)
   - 2022 oppg. 4 (four-digit number, modellering og unary constraints)
   - 2024 Q7–Q8 (constraints og AC-3; poengene står ikke i kildefila)
   - 2025 oppg. 3 (5 p, modellering)

   Backtracking-delene av 2021 oppg. 3, 2023 oppg. 4 og 2024 Q9 hører til E07.

### Fasit

**Øv selv**

1. AC-3-tabell for oppgave 1:

   | # | Kø før pop | Bue | Stryk | D etter | Legg til |
   |---|---|---|---|---|---|
   | 1 | X→Y · Y→X · Y→Z · Z→Y | X→Y | 3, 4 | D(X) = {1, 2} | – |
   | 2 | Y→X · Y→Z · Z→Y | Y→X | 1, 3 | D(Y) = {2, 4} | – |
   | 3 | Y→Z · Z→Y | Y→Z | 4 | D(Y) = {2} | X→Y |
   | 4 | Z→Y · X→Y | Z→Y | 1, 2 | D(Z) = {3, 4} | – |
   | 5 | X→Y | X→Y | 2 | D(X) = {1} | – |

   AC-3 svarer true med X = 1, Y = 2 og Z = {3, 4}. Problemet er ikke løst: det finnes to løsninger, (1, 2, 3) og (1, 2, 4), og søket må velge.
2. NT = {green}, Q = {red}, NSW = {green}, V = {red} og T = {red, green, blue}. AC-3 svarer true.
3. Svar på oppgave 3:
   - AC-3 stryker ingenting og svarer true, fordi hver verdi har en partner.
   - Det finnes ingen løsning.
   - Alldiff-telling avslører det: m = 3 > n = 2. Path consistency gjør det også.
4. X ∈ [2, 4] og Y ∈ [6, 8].
5. Svar på oppgave 5:
   - Variablene er Q1–Q4, raden til dronningen i kolonne i. Domenet er {1, 2, 3, 4}.
   - For hvert par i < j: Qi ≠ Qj og |Qi − Qj| ≠ j − i.
   - Det gir 6 binære constraints og 12 buer.
   - Løsningene er (2, 4, 1, 3) og (3, 1, 4, 2).

**Quizene i videoen**

- Buer for Australia: **18** (9 constraints × 2).
- O + O = R + 10 · C1 er **ternary**: O, R og C1. Hjelpevariabelen teller med.
- L4: (X4, X3) er **ikke** arc-consistent. Blue i X4 mangler partner, så D4 = {red}. (X3, X4) er i orden.
- «Din tur» med D(C) = {1, 2}: **B blir tom i rad 3**, og AC-3 svarer false.
- En 3-consistent CSP er **ikke** garantert arc-consistent. Det krever strongly 3-consistent.
- 4 × 4-sudokuen har **12** Alldiff: 4 rader, 4 kolonner og 4 bokser.
- Eksamen 2025 oppg. 3:
  - Variablene er Alice, Bob, Carrie, Red, Green og Blue, alle med domene {1, 2, 3} (husnummer).
  - Constraints: Alice = Red + 1, Bob = Blue, Carrie = 2, Alldiff(Alice, Bob, Carrie) og Alldiff(Red, Green, Blue).
  - Eneste løsning: Alice = 3, Bob = 1, Carrie = 2, Red = 2, Green = 3, Blue = 1. Bob bor i det blå huset, Carrie i det røde og Alice i det grønne.
- Kryssordet: se tabellen under Håndsporing 3.

---

<a id="e07"></a>

## E07 – CSP 2: backtracking, heuristikker og min-conflicts

> Pensum: Global 5.3–5.4 (US 6.3–6.4), uten 5.3.3–5.3.4 · Forelesning: L4, AL2, L13 · Øving: Ø2 · Eksamensvekt: ~16 % (CSP samlet, deles med E06)
> Video: `videoer/e07-csp-sok/out/tdt4136-e07-csp-sok.mp4` (15:58)

### Kapitler i videoen

- 0:00 – Intro
- 0:51 – Hvorfor backtracking?
- 2:45 – Hvem først, og hvilken verdi?
- 5:06 – Håndsporing: Australia
- 7:17 – Forward checking mot MAC
- 9:28 – Lokalt søk: min-conflicts
- 12:51 – Eksamensoppgave
- 14:41 – Koblinger og oppsummering

### Kjerneideer

**Kroken.** Australia-kartet med tre farger: WA = rød, Q = grønn, V = blå gjør at South Australia ikke har noen farge igjen (bokas figur 5.7). Med en annen rekkefølge kommer du gjennom samme kart uten et eneste tilbakesteg. Hele episoden handler om rekkefølge: hvilken variabel først, hvilken verdi først, og hvor langt du ser fram.

**Hvorfor ikke vanlig søk (5.3).** Et vanlig søk ser en delvis tilordning som en tilstand og «gi én variabel en verdi» som en handling. På nivå ℓ kan du da velge blant (n − ℓ)·d grener, så treet får n!·dⁿ blader. For Australia (n = 7, d = 3) er det 7!·3⁷ = 5040·2187 = 11 022 480 blader, men det finnes bare 3⁷ = 2187 forskjellige fargelegginger.

**Commutativity.** Rekkefølgen tilordningene gjøres i, endrer ikke resultatet: WA = rød og så Q = grønn gir samme tilordning som omvendt. Derfor holder det å se på én variabel per nivå i treet. Da blir det d grener per nivå og dⁿ blader.

**Backtracking search** er dybde-først-søk (kapittel 3) med én variabel per nivå. Du velger en variabel, prøver verdiene én etter én, gjør eventuelt inferens, og går ett nivå dypere. Går det galt, angrer du verdien og prøver neste. Er alle verdier brukt opp, returnerer du failure, og nivået over prøver sin neste verdi.

**Variabelrekkefølge: minimum-remaining-values (MRV).** Velg variabelen med færrest lovlige verdier igjen. Forelesning 4 kaller den «most constrained variable». Boka kaller den også *fail-first*: du tar variabelen som mest sannsynlig feiler, så finner du blindveien høyt oppe i treet.

**Degree heuristic** (bare i boka, ikke forelest). Bryter likhet i MRV: velg variabelen med flest begrensninger mot *utilordnede* variabler. I starten har alle sju områdene tre farger, og degree gir South Australia (5 naboer).

**Verdirekkefølge: least-constraining-value (LCV).** For hver verdi teller du hvor mange verdier som forsvinner fra domenene til de utilordnede naboene. Prøv den med lavest tall først. Boka kaller dette *fail-last*.

**Hvorfor feil først for variabler, men feil sist for verdier?** Alle variablene må tilordnes uansett, så det lønner seg å ta de vanskelige mens treet er lite. Da kuttes blindveiene høyt oppe. Men du trenger bare én løsning, så prøv verdien som mest sannsynlig fører fram. Skal du finne *alle* løsninger, spiller verdirekkefølgen ingen rolle.

**Analogi fra AL2.** Assignment-forelesning 2 bruker bordplassering i et selskap som CSP-eksempel. Tenk at den mest kresne gjesten plasseres først (MRV), men får stolen som ødelegger minst for de andre (LCV). I AL2 er det setene som er variablene, så dette er bare et bilde, ikke modellen derfra.

**Forward checking (FC).** Når en variabel X får en verdi, fjerner du fra domenet til hver utilordnet nabo alle verdier som bryter en constraint med X. Ved kartfarging (≠) er det bare den tilordnede verdien. Med A < B, A = 2 og D(B) = {1, 2, 3} må både 1 og 2 ut. FC ser bare ett steg ut. I figur 5.7 har både NT og SA bare blå igjen etter Q = grønn. De er naboer og kan ikke begge bli blå, men FC oppdager det ikke før V = blå tømmer SA.

**Maintaining arc consistency (MAC).** Kjør AC-3 etter hver tilordning. Køen starter med buene (Xj, Xi) fra hver utilordnet nabo Xj inn mot variabelen Xi du satte. Krymper et domene, legger AC-3 til nye buer som vanlig. Forelesning 4 viser dette («run AC-3 after assigning a variable, with arcs from its neighboring unassigned variables to the variable in the initial queue») uten å bruke navnet MAC. FC gjør nøyaktig de samme startrevisjonene, men legger aldri til nye buer. Derfor er MAC strengt sterkere: FC sier fra til naboene, mens MAC lar naboene si fra videre.

**Lokalt søk: min-conflicts (5.4).** Start med en *komplett* tilordning, gjerne med konflikter. I hver runde velger du tilfeldig en variabel som er i konflikt, og gir den verdien med færrest konflikter. Uavgjort avgjøres tilfeldig. Dette er hill climbing (kapittel 4) der målfunksjonen er antall brutte begrensninger.

**Hvorfor det går så fort.** Ifølge boka løser min-conflicts en million dronninger på i snitt rundt 50 steg etter startplasseringen. Løsningene ligger tett i tilstandsrommet, så det finnes nesten alltid en løsning i nærheten.

**Platåer.** Et platå er et område der naboene er like gode. Fra bokas startbrett gir ikke ett eneste enkelttrekk null konflikter, og første trekk er sidelengs (1 konflikt før og etter). Boka sier at det kan finnes millioner av tilordninger som er én konflikt fra en løsning. Derfor tillater du *sideways moves*.

**Tabu search og constraint weighting** (bare i boka, ikke forelest). Tabu search husker de siste tilstandene og forbyr å gå tilbake dit, så du ikke vingler mellom de samme brettene. Constraint weighting gir hver begrensning en vekt, først 1, og øker vekten på alle begrensninger som er brutt etter hvert steg. Da får platået en helning, og de vanskelige begrensningene blir tyngst. Tallene i eksemplet nedenfor er laget for å illustrere.

### Algoritmer og håndsporing

**BACKTRACKING-SEARCH (figur 5.5), kortform.**

```
BACKTRACK(csp, assignment):
  hvis assignment er komplett: returner assignment
  var ← SELECT-UNASSIGNED-VARIABLE        (MRV, så degree)
  for hver value i ORDER-DOMAIN-VALUES:   (LCV)
    hvis value er konsistent med assignment:
      legg til {var = value}
      inferences ← INFERENCE               (FC eller MAC)
      hvis inferences ≠ failure:
        legg til inferences; result ← BACKTRACK(csp, assignment)
        hvis result ≠ failure: returner result
        fjern inferences
      fjern {var = value}
  returner failure
```

**MIN-CONFLICTS (figur 5.9), kortform.**

```
current ← en komplett tilordning
for i = 1 til max_steps:
  hvis current er en løsning: returner current
  var ← en tilfeldig variabel i konflikt
  value ← verdien som minimerer CONFLICTS(var, value, current)
  sett var = value i current
returner failure
```

**Antall blader.**

| | Vanlig søk | Backtracking |
|---|---|---|
| Formel | n!·dⁿ | dⁿ |
| Australia, n = 7, d = 3 | 5040·2187 = 11 022 480 | 2187 |
| Grener per nivå, vanlig søk | 21, 18, 15, 12, 9, 6, 3 | 3 på hvert nivå |
| Quiz: n = 3, d = 2 | 3!·2³ = 48 | 2³ = 8 |

**Eksempelet fra forelesning 4.** X1 = WA = rød, X2 = NT = grønn. Da har X3 = SA bare blå igjen, og X4 = Q har blå og rød. MRV velger SA (1 verdi). For Q gir LCV: blå fjerner én verdi (den siste fra SA), rød fjerner null. Rød prøves først.

**Hele Australia-sporingen.** Regler: MRV, så degree (bare utilordnede naboer), så alfabetisk. Verdier: LCV, så alfabetisk B < G < R (blå, grønn, rød). Forward checking etter hver tilordning. Domenene står etter FC.

| Steg | MRV-kandidater | Degree | Valg | LCV | FC fjerner | WA | NT | SA | Q | NSW | V | T |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | alle (3) | SA 5, NT/Q/NSW 3, WA/V 2, T 0 | SA | B 5 · G 5 · R 5 → B | B fra WA, NT, Q, NSW, V | GR | GR | **B** | GR | GR | GR | BGR |
| 2 | NSW, NT, Q, V, WA (2) | NSW 2, NT 2, Q 2, V 1, WA 1 → alfabetisk | NSW | G 2 · R 2 → G | G fra Q, V | GR | GR | B | R | **G** | R | BGR |
| 3 | Q, V (1) | Q 1, V 0 | Q | R | R fra NT | GR | G | B | **R** | G | R | BGR |
| 4 | NT, V (1) | NT 1, V 0 | NT | G | G fra WA | R | **G** | B | R | G | R | BGR |
| 5 | V, WA (1) | 0, 0 → alfabetisk | V | R | – | R | G | B | R | G | **R** | BGR |
| 6 | WA (1) | 0 | WA | R | – | **R** | G | B | R | G | R | BGR |
| 7 | T (3) | 0 | T | B 0 · G 0 · R 0 → B | – | R | G | B | R | G | R | **B** |

Sju tilordninger og null tilbakesteg. Løsning: WA = R, NT = G, SA = B, Q = R, NSW = G, V = R, T = B.

**Bokas figur 5.7: forward checking uten heuristikker.**

| Tilordning | FC fjerner fra | WA | NT | SA | Q | NSW | V | T |
|---|---|---|---|---|---|---|---|---|
| start | | BGR | BGR | BGR | BGR | BGR | BGR | BGR |
| WA = R | NT, SA | R | BG | BG | BGR | BGR | BGR | BGR |
| Q = G | NT, SA, NSW | R | B | B | G | BR | BGR | BGR |
| V = B | SA, NSW | R | B | **∅** | G | R | B | BGR |

Etter Q = G står NT = {B} og SA = {B}, og de er naboer. FC ser det ikke. Først når V = B tømmer SA, går søket tilbake.

**MAC etter Q = G** (WA = R er satt fra før, og NT = SA = {B, G} etter MAC på WA = R).

| Bue | Fjerner | Nytt domene | Nye buer i køen |
|---|---|---|---|
| (NSW, Q) | G | NSW = {B, R} | (SA, NSW), (V, NSW) |
| (NT, Q) | G | NT = {B} | (SA, NT) |
| (SA, Q) | G | SA = {B} | (NSW, SA), (NT, SA), (V, SA) |
| (SA, NSW) | – | uendret | – |
| (V, NSW) | – | uendret | – |
| (SA, NT) | B | **SA = ∅** → tilbake | – |

Køen i rekkefølge: (NSW,Q), (NT,Q), (SA,Q), (SA,NSW), (V,NSW), (SA,NT), (NSW,SA), (NT,SA), (V,SA). De tre siste blir aldri behandlet. MAC går tilbake allerede etter Q = G, ett steg før FC.

**Min-conflicts på bokas 8-dronningbrett (figur 5.8).** Kolonne = variabel, rad = verdi, rad 1 øverst. Start: (2, 5, 7, 4, 1, 3, 6, 8). Eneste konflikt er Q4–Q8 på skrå.

| Runde | Konfliktfylte | Valgt (boka) | Konflikter per rad 1–8 | Lavest | Trekk | Brett etterpå |
|---|---|---|---|---|---|---|
| 1 | Q4, Q8 | Q8 | 2, 2, 1, 2, 3, 1, 2, (1 der den står) | 1 i rad 3, 6, 8 → boka tar rad 3 | Q8 → rad 3 (sidelengs: 1 før, 1 etter) | (2, 5, 7, 4, 1, 3, 6, 3), konflikt Q6–Q8 |
| 2 | Q6, Q8 | Q6 | 3, 3, (1 der den står), 2, 3, 2, 3, 0 | 0 i rad 8 | Q6 → rad 8 | (2, 5, 7, 4, 1, 8, 6, 3), løst |

I `verifiser.py` brytes likhet med laveste rad, som gir det samme som boka. Algoritmen selv bryter likhet tilfeldig.

**Constraint weighting på samme brett (illustrasjon).** Har C(Q4, Q8) fått vekt 2 og C(Q6, Q8) vekt 1, koster startbrettet 2 og brettet etter første trekk 1. Trekket er ikke lenger sidelengs, men nedover.

### Eksamensfeller

- **Degree teller bare utilordnede naboer.** I steg 2 har WA grad 1, ikke 2, fordi SA allerede er tilordnet. Bruker du den statiske graden, får du feil kandidater.
- **Uten forward checking krymper ikke domenene av seg selv.** Står det «backtracking uten FC» (som i 2018 og 2023), må du selv sjekke hvilke verdier som fortsatt er lovlige mot det som er tilordnet, før du teller MRV og LCV.
- **LCV teller verdier som forsvinner hos de utilordnede naboene**, og du velger den med *lavest* tall. Den med flest fjernede verdier prøves sist.
- **Følg tie-break-regelen i oppgaven.** Alfabetisk (AL2), tallrekkefølge for variabler og alfanumerisk for verdier (2018/2023), eller høyeste verdi og høyeste indeks (2022). Skriv regelen du bruker i svaret.
- **Min-conflicts velger variabelen tilfeldig blant de konfliktfylte.** Fella i 2024 Q9 er å velge den med flest konflikter. Det er verdien som velges grådig, ikke variabelen.
- **Raden der dronningen står, teller også.** Er den nåværende raden like god som de beste, er trekket sidelengs. Er den eneste beste, blir dronningen stående.
- **FC er ikke arc consistency.** FC reviderer bare buene inn mot variabelen du nettopp satte. MAC fortsetter med nye buer.
- **Fail-first gjelder variabler, fail-last gjelder verdier.** Ikke bland dem.
- **n!·dⁿ mot dⁿ.** Faktoren n! forsvinner fordi tilordningene er kommutative, ikke fordi treet beskjæres.

**Bok mot kurs.** Fasiten for 2022 (oppgave 4.2) kaller MRV «Max-conflicts» og LCV «Min-conflicts». Fasiten for 2023 (oppgave 4) skriver «min_values (MRV) and min_conflicts» og merker hvert verdivalg med «min_conflicts». I boka er *min-conflicts* navnet på den lokale søkealgoritmen i 5.4, ikke en verdiheuristikk. Regnestykket i fasitene er vanlig LCV, så svaret blir det samme. Bruk bokas navn (MRV, LCV) i svaret ditt, men kjenn igjen fasitens ord om de dukker opp i en oppgavetekst. Forelesning 4 bruker «most constrained variable» om MRV og viser MAC uten å bruke navnet. Degree heuristic, tabu search og constraint weighting står bare i boka.

### Koblinger til andre kapitler

- → kap. 3 / E02: backtracking er dybde-først-søk med én variabel per nivå. Gå dypt, snu ved blindveier.
- → kap. 5.2 / E06: MAC er AC-3 etter hver tilordning, med startkø fra de utilordnede naboene. Modellering og AC-3 i detalj ligger i E06.
- → kap. 4 / E04: min-conflicts er hill climbing med antall konflikter som målfunksjon. Platåer og sideways moves er de samme begrepene.
- → kap. 7.6 / E13: DPLL er backtracking for SAT og bruker blant annet degree-heuristikken. WalkSAT tar min-conflicts-steg.
- → kap. 9.3 / E15: i efficient forward chaining foreslår boka MRV for å ordne konjunktene i en regel.

### Ikke pensum her

- 5.3.3 Intelligent backtracking: looking backward (backjumping, conflict-directed backjumping). Kilde: PENSUMOVERSIKT, L4 «5.1–5.4, uten 5.3.3–5.3.4».
- 5.3.4 Constraint learning (no-goods). Kilde: PENSUMOVERSIKT, L4.
- 5.5 The structure of problems, med topological sort, cutset conditioning, tree decomposition og value symmetry. Kilde: PENSUMOVERSIKT. Merk at AL2 advarte om at fjorårets eksamen hadde en oppgave om topological sort.
- MRV brukt som «minimum slack» i scheduling (11.6) og CSP-koding av planlegging (11.2.4). Begge er UT, så episoden kobler ikke MRV til planlegging (E18). Kilde: PENSUMOVERSIKT.

### Øv selv

1. Australia med tre farger og forward checking. Du har satt WA = rød og Q = grønn. Skriv domenene etter FC. Hvilken variabel velger MRV med degree som tie-breaker, og hva skjer når den får sin første verdi?
2. En CSP har n = 4 variabler med d = 3 verdier hver. Hvor mange blader har det vanlige søketreet, og hvor mange har backtracking-treet?
3. Bokas 8-dronningbrett (2, 5, 7, 4, 1, 3, 6, 8), rad 1 øverst. Anta at min-conflicts trekker Q4 i første runde i stedet for Q8. Hvor mange konflikter gir hver rad for Q4, og hva skjer?
4. Eksamen 2018, problem 1 del 5 (3 p), samme som 2023 oppgave 4: løs den på nytt, men nå *med* forward checking. Endrer svaret seg?
5. Eksamen 2022, oppgave 4.2: x1–x4 med domene 1–5, x2 > x1, x3 > x2, x4 > x3, og sammenstillingen x1x2x3x4 skal være et oddetall. Løs med MRV og LCV, og ved likhet høyeste verdi eller variabel med høyest indeks. Vis domenene etter hvert steg.
6. Eksamen 2019, oppgave 4 (12 p, 2-4-2-4), del 2 (4 p): ren backtracking på fargeleggingsgrafen i oppgaven, med variablene i tallrekkefølge og verdiene i rekkefølgen ved hver node.

### Fasit

**Quizene i videoen.**
- Hvor mange blader med n = 3, d = 2? Vanlig søk 3!·2³ = 48, backtracking 2³ = 8.
- LCV for Queensland i forelesningseksempelet: rød (fjerner 0 verdier). Blå ville tatt den siste verdien fra SA.
- Steg 2 i Australia-sporingen: NSW. Degree mot utilordnede naboer er NSW 2, NT 2, Q 2, V 1, WA 1, og NSW er først alfabetisk blant de tre.
- Hvilken del av MAC gjør forward checking? Bare startbuene inn mot variabelen du satte. FC legger aldri til nye buer.
- Eksamen 2024 Q9 (fire dronninger, X1 = 2, X2 = 4, X3 = 1, X4 = 2, alle i konflikt): a) en tilfeldig variabel blant de konfliktfylte. b) 1 iterasjon i beste fall: trekkes X4, gir rad 3 null konflikter (X4 per rad: 1, 3, 0, 1), og brettet er løst. X1, X2 eller X3 kan ikke løse det med ett trekk.
- Eksamensoppgaven 2018 P1 del 5 / 2023 oppgave 4: L1 = B1, L3 = A1, L4 = C1, L5 = B2, L2 = A2, som i fasiten.

**Øv selv.**
1. Etter FC: WA = R, NT = {B}, SA = {B}, Q = G, NSW = {B, R}, V = {B, G, R}, T = {B, G, R}. MRV gir likhet mellom NT og SA (1 verdi hver). Degree mot utilordnede: NT 1 (bare SA), SA 3 (NT, NSW, V), så SA velges. SA = B fjerner blå fra NT, NT blir tom, og søket går tilbake med en gang.
2. 4!·3⁴ = 24·81 = 1944 blader mot 3⁴ = 81.
3. Q4 per rad 1–8: 2, 2, 3, 1, 3, 2, 2, 2. Raden der Q4 står (rad 4) er den eneste med 1 konflikt, så Q4 blir stående. Runden er bortkastet, og neste runde trekker på nytt blant Q4 og Q8.
4. Samme svar: L1 = B1, L3 = A1, L4 = C1 (LCV 0 mot 2), L5 = B2 (LCV 1 mot 1, alfanumerisk), L2 = A2. Med FC står L2 = {A2, C2} etter L5 = B2, og det er det samme du finner ved å sjekke lovlige verdier for hånd.
5. Fasiten gir x4 = 5, x3 = 4, x2 = 3, x1 = 2, altså 2345, som er et oddetall. (Fasiten skriver «x3 = 5» i siste linje, men mener x4 = 5.)
6. Fasiten gir 1R, (2R), 2G, (3R), (3G), 3B, 4R, (5R), (5B), (4G), (4B), 2B, (3R), 3G, 4R, (5R), 5B, der verdiene i parentes er prøvd og forkastet. Kortformen 1R, 2G, 3B, 4R, 2B, 3G, 4R, 5B ga også full uttelling.

---

<a id="e08"></a>

## E08 – Spill 1: minimax og alpha-beta

> Pensum: Global 6.1–6.2 (US 5.1–5.2) · Forelesning: L8, AL3, L13 · Øving: Ø3 · Eksamensvekt: ~9 % (adversarial search samlet, deles med E09)
> Video: `videoer/e08-minimax-alfabeta/out/tdt4136-e08-minimax-alfabeta.mp4` (14:46)

### Kapitler i videoen

- 0:00 – Intro
- 0:46 – Spill som søkeproblem
- 2:40 – Minimax
- 5:39 – Alpha-beta pruning
- 9:17 – Move ordering
- 11:29 – Eksamen 2025, oppgave 8
- 13:34 – Koblinger og oppsummering

### Kjerneideer

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

### Algoritmer og håndsporing

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

#### Håndsporing 1: minimax på Fig. 6.2

Blader: B = (3, 12, 8), C = (2, 4, 6), D = (14, 5, 2).

| Node | Type | Regning | Verdi |
|---|---|---|---|
| B | MIN | min(3, 12, 8) | 3 |
| C | MIN | min(2, 4, 6) | 2 |
| D | MIN | min(14, 5, 2) | 2 |
| A | MAX | max(3, 2, 2) | **3**, beste trekk a1 → B |

#### Håndsporing 2: alpha-beta på Fig. 6.2

| Steg | Node | α | β | v | Hva skjer |
|---|---|---|---|---|---|
| 1 | A | −∞ | ∞ | | roten |
| 2 | B ser 3, 12, 8 | −∞ | 3 | 3 | B = 3 |
| 3 | A | 3 | ∞ | 3 | MAX er sikret minst 3 |
| 4 | C ser 2 | 3 | 2 | 2 | **kutt 4 og 6: v = 2 ≤ α = 3**. C ≤ 2 |
| 5 | D ser 14, 5, 2 | 3 | 2 | 2 | 2 er siste blad, så det er ingenting igjen å kutte |
| 6 | A | 3 | ∞ | 3 | **A = 3** via B. 7 av 9 blader sett |

#### Håndsporing 3: alpha-beta på et dypere tre (ILLUSTRASJON)

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

#### Håndsporing 4: samme tre, god og dårlig rekkefølge

Fig. 6.2 med barna i to rekkefølger:

| Rekkefølge | Barn | Blader sett | Kutt |
|---|---|---|---|
| Dårlig | A: C, D, B. C = (6, 4, 2), D = (14, 5, 2), B = (12, 8, 3) | 9 | ingen |
| God | A: B, C, D. B = (3, 12, 8), C = (2, 4, 6), D = (2, 5, 14) | 5 | 4 og 6 under C, 5 og 14 under D. Begge fordi v = 2 ≤ α = 3 |

Begge gir A = 3 via B.

#### Håndsporing 5: Eksamen 2025, oppgave 8 (10 p: a 4 p, b 6 p)

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

#### Håndsporing 6: Eksamen 2024 Q10–Q11

Bøtter A = {2, 3}, B = {1, 6}, C = {−2, −1}, minste tall ses først.
- Q10: snittene er 2,5, 3,5 og −1,5, så en tilfeldig motstander gir B. Minimax tar minste i hver bøtte: 2, 1 og −2. Da blir svaret A = 2.
- Q11: A gir α = 2. I B er 1 ≤ α = 2, så 6 kuttes. I C er −2 ≤ α = 2, så −1 kuttes. α er −∞ i A, 2 i B og 2 i C.

#### Håndsporing 7: tre spillere (Fig. 6.4)

| Nivå | Velger | Kandidater → valg |
|---|---|---|
| C (plass 3) | størst tredje tall | (1,2,6)/(4,2,3) → (1,2,6) · (6,1,2)/(7,4,1) → (6,1,2) · (5,1,1)/(0,5,2) → (0,5,2) · (7,7,1)/(5,4,5) → (5,4,5) |
| B (plass 2) | størst andre tall | (1,2,6)/(6,1,2) → (1,2,6) · (0,5,2)/(5,4,5) → (0,5,2) |
| A (plass 1) | størst første tall | (1,2,6)/(0,5,2) → **(1, 2, 6)** |

Alle trær og sporinger over er regnet ut på nytt av `videoer/e08-minimax-alfabeta/verifiser.py`, som også sjekker at videoen viser de samme tallene.

### Eksamensfeller

- **α og β byttet om.** MAX sammenligner v med β, og MIN sammenligner v med α. I håndsporing 3 har F sett 1 mens α = 5, og mange kutter da. F er MAX, og det neste bladet kunne vært 1000.
- **Kutt på feil nivå.** Et kutt fjerner bare resten av barna til noden som kutter. Det er C som kutter i håndsporing 3, så bare G forsvinner, ikke F.
- **Likhet.** Boka kutter ved likhet (v ≥ β, v ≤ α). Eksamen 2018 godtok E som kuttet og som ikke kuttet ved V = 6 ≥ β = 6. Fasiten for 2019 godtok svar både med og uten K eller L, siden de er like. Skriv derfor ≥ og ≤.
- **Eksakt verdi i kuttede noder.** Skriv grensen, for eksempel «i ≤ 6» og «e ≥ 11» som i fasiten for 2020 kontinuasjon, eller C ≤ 2.
- **α eller β som kommer langt ovenfra.** I 2025-oppgaven kom α = 10 fra roten, tre nivåer over G.
- **Begrunn hvert kutt med tall.** Fasitene vil ha formen «Prune I because v = 5 ≤ α = 10» (2025) eller «Prune H and I because V = 9 > Beta = 6» (2018).
- **Ta med hele undertreet.** Når N kuttes, besøkes heller ikke O og P.
- **Rekkefølgen.** Barn tas fra venstre mot høyre (alfabetisk) hvis oppgaven ikke sier noe annet. En annen rekkefølge gir andre kutt, men samme rotverdi.
- **Minimax er en garanti, ikke et best mulig svar mot alle.** Mot en svak eller tilfeldig motstander kan andre valg gi mer (expectimax, E09).

### Koblinger til andre kapitler

- → kap. 3 / E02: minimax er dybde-først-søk, derfor plass O(bm). Iterative deepening og reached-tabellen (transposition table) kommer også derfra.
- → kap. 6.3–6.5 / E09: når treet er for dypt, kuttes søket med en evalueringsfunksjon, eller du spiller tilfeldige partier med MCTS. Expectiminimax, quiescence, horizon effect og skjult informasjon står også der.
- → kap. 17.2 / E10: i zero-sum-spill er minimax det samme som *maximin* i spillteori, altså det beste av de verste utfallene. L10 sier det slik: «For zero-sum games, this is the same as the maximin equilibrium in the book». Global 17.2 = US 18.2.

### Ikke pensum her

- Kontinuerlige tilstands- og handlingsrom i spill (L13: «Not in this course: continuous state and action spaces»).
- Bonusdel 4.1 i Ø3 er frivillig (AL3: «non-mandatory»).
- 6.2.2 (flere spillere) og 6.2.4 (move ordering) *er* pensum, men ble ikke forelest. De står bare i boka (PENSUMOVERSIKT).

### Øv selv

1. Eksamen 2021, oppgave 5 (10 p): finn minimax-verdiene til A–J og nodene alpha-beta kutter.
2. Eksamen 2020 kontinuasjon (2020ResitQ), Problem 4 (10 p): minimax-verdier, rotverdi og noder som kan kuttes.
3. Eksamen 2018, Problem 2 (10 p, fordelt 3–7): minimax-verdier, og hvert kutt begrunnet med V og Alpha/Beta.
4. Eksamen 2019, oppgave 6 (10 p, fordelt 3–3–4): minimax-verdier for A–D, trekket MAX velger, og noder som kan kuttes.
5. Bøttespillet fra L8 (A = {−50, 50}, B = {3, 1}, C = {−5, 15}, barn fra venstre): kjør alpha-beta, skriv siste α og β i hver node, og begrunn kuttet.
6. Halveringsspillet fra L8 og Ø3: start på N = 5 med MAX i trekket. Hvert trekk er enten «trekk fra 1» (`--`) eller «halver og rund ned» (`/2`). Spilleren som sitter igjen med 0, vinner. Hvem vinner, og med hvilket første trekk? Hvor mange av de 27 nodene besøker alpha-beta når `--` prøves før `/2`?

### Fasit

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

---

<a id="e09"></a>

## E09 – Spill 2: evalueringsfunksjoner, MCTS, sjanse og skjult info

> Pensum: Global 6.3–6.7 (US 5.3–5.7) · Forelesning: L8, L13 · Øving: – (Ø3 dekker bare 6.2, se E08) · Eksamensvekt: ~9 % (adversarial search samlet, deles med E08)
> Video: `videoer/e09-spill-avansert/out/tdt4136-e09-spill-avansert.mp4` (14:30)

### Kapitler i videoen

- 0:00 – Intro
- 0:46 – For dypt: eval og cutoff
- 4:00 – For bredt: MCTS
- 7:17 – Sjanse: expectiminimax
- 9:39 – Skjult informasjon
- 12:24 – Eksamen 2023, oppgave 6
- 13:30 – Koblinger og oppsummering

### Kjerneideer

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

### Algoritmer og håndsporing

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

### Eksamensfeller

- **Hopper over MIN-laget.** Tar du snittet av bladene direkte i 2023/6, blir B = 0,5·3,5 + 0,5·5,5 = 4,5 og C = 0,25·3 + 0,75·9 = 7,5. Valget blir riktig, men verdiene er feil og gir trekk. Regn nedenfra: MIN før sjanse før MAX, og skriv alle mellomverdiene slik fasiten gjør.
- **Tror forward pruning er trygt.** Bare alpha-beta garanterer samme svar som minimax. Beam og ProbCut kan kaste det beste trekket.
- **MCTS returnerer høyest vinnerandel.** Nei, flest playouts (65/100 slår 2/3).
- **Tror eval bare må rangere riktig.** I deterministiske spill holder rekkefølgen (monoton transformasjon gir samme minimax-valg). Med chance nodes må eval være positiv lineær, ellers kan valget snu (Fig. 6.14).
- **Blander expectimax og expectiminimax.** Expectimax: MAX og chance (motstanderen modelleres som tilfeldig). Expectiminimax: MAX, MIN og chance. 2018 T/F påstår at expectimax passer bedre enn minimax i deterministiske miljøer. Det er usant.
- **Feil symbol.** △ = MAX, ▽ = MIN, ○ = chance node (2015 flervalg).
- **Lover for mye om regret.** L8 sier bare at *gjennomsnittet* av sannsynlighetene går mot Nash når antall iterasjoner går mot uendelig. Siste strategi kan svinge.
- **Kurs mot bok.** L8 bruker andre sjakkvekter (16/8/5/1) enn boka (9/5/3/3/1), og skriver figurene med US-nummer (Fig. 5.10 = Global 6.10).

### Koblinger til andre kapitler

- → 6.1–6.2 / E08: minimax, alpha-beta og move ordering. H-MINIMAX er alpha-beta med cutoff og eval, og iterative deepening gir bedre trekkrekkefølge.
- → 3.5–3.6 / E03: eval ≈ h(n). Beam search er samme idé som i 3.5.5, her brukt som forward pruning.
- → kap. 4 / E05: belief states og AND-OR-søk brukes direkte i Kriegspiel (guaranteed checkmate).
- → 17.2 (US 18.2) / E10: Nash-likevekt og blandede strategier. Regret matching er én måte å nærme seg dem på.

### Ikke pensum her

- Kontinuerlige tilstands- og handlingsrom: L13 s. 4 sier «Not in this course», med AlphaStar som eksempel. Videoen nevner det ikke.
- AlphaStar-detaljer (L8 s. 42: «top 0.2 percent»). Bokas kapittelnotater oppgir et annet tall. Ikke pugg tallet.
- Ellers er ingen delkapitler i 6.3–6.7 tatt ut. Quiescence, horizon effect, forward pruning, 6.5.1, 6.6.1, 6.6.2 og 6.7 står bare i boka, men er pensum.

### Øv selv

1. Eksamen 2023, oppgave 6 (5 p): fyll inn verdier, regn ExpectiMiniMax for alle ikke-terminale noder, og velg strategi.
2. Eksamen 2024, Q10: bøtter A {2, 3}, B {1, 6}, C {−2, −1}. Regn forventet verdi når motstanderen velger tilfeldig, og minimax-verdi når den velger lavest. Hva velger du i hvert tilfelle? (Q11 kjører alpha-beta på de samme bøttene, se E08.)
3. Eksamen 2022, 1.7: hvorfor er MCTS mindre følsom for feil i evalueringsfunksjonen enn alpha-beta?
4. Eksamen 2015, flervalg: hva betyr det tredje nodesymbolet (○) i en variant av minimax?
5. Eksamen 2018, sant/usant: «Expectimax is better suited for a deterministic environment than minimax.»
6. UCB1: regn UCB1 for barna under 60/79 i Fig. 6.10 med C = 1. Velges fortsatt 16/53?
7. Regret matching: fortsett tabellen med runde 3, der du spiller papir og motstanderen saks.

### Fasit

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

---

<a id="e10"></a>

## E10 – Spillteori: Nash, dominans og gjentatte spill

> Pensum: Global 17.2.1–17.2.3 (US 18.2.1–18.2.3) · Forelesning: L10, L13 (repetisjon) · Øving: – · Eksamensvekt: ~9 %
> Video: `videoer/e10-spillteori/out/tdt4136-e10-spillteori.mp4` (14:33)

### Kapitler i videoen

- 0:00 – Intro
- 0:42 – Normal form og dominans
- 2:05 – IESDS
- 4:10 – Nash-likevekt
- 6:04 – Blandet likevekt og maximin
- 9:23 – Gjentatte spill
- 12:10 – Eksamen 2023, oppgave 5
- 13:37 – Koblinger og oppsummering

### Kjerneideer

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

### Algoritmer og håndsporing

#### Håndsporing 1: dominans i fangens dilemma

1. P1, hvis P2 vitner: testify gir −5, refuse gir −10. −5 > −10.
2. P1, hvis P2 tier: testify gir 0, refuse gir −1. 0 > −1.
3. Testify er bedre i begge kolonner, så testify strictly dominates refuse. Testify er en dominant strategy for P1.
4. P2 er symmetrisk: −5 > −10 og 0 > −1. Testify er dominant for P2.
5. (Testify, Testify) er en dominant strategy equilibrium, med (−5, −5).

#### Håndsporing 2: IESDS på L10, slide 3

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

#### Håndsporing 3: weak, der rekkefølgen betyr noe (ILLUSTRASJON)

| P1 \ P2 | L | R |
|---|---|---|
| **T** | 1, 1 | 0, 0 |
| **M** | 1, 1 | 2, 1 |
| **B** | 0, 0 | 2, 1 |

M dominerer både T (1 = 1, 2 > 0) og B (1 > 0, 2 = 2) weakly. L og R dominerer ikke hverandre for P2 i starten.
- **T først:** igjen står M og B. P2: R (1, 1) mot L (1, 0), så R dominerer L weakly. Stryk L. M og B gir begge 2 i R, så ingen flere strykes. Utfallet er (2, 1).
- **B først:** igjen står T og M. P2: L (1, 1) mot R (0, 1), så L dominerer R weakly. Stryk R. T og M gir begge 1 i L. Utfallet er (1, 1).

Fasiten til 2020 kont. P5 sier det samme om et auksjonsspill: «there are other orders of elimination which lead to different outcomes». Regel for eksamen: stryk bare strictly dominerte strategier, med mindre oppgaven ber om weak.

#### Håndsporing 4: rene likevekter med ringer

- **PD:** P1 ringer −5 (kolonne Testify) og 0 (kolonne Refuse), begge i rad Testify. P2 ringer −5 og 0 i kolonne Testify. Bare (Testify, Testify) får to ringer.
- **Battle of the Sexes (L10):** (movie, movie) = (2, 1), (opera, opera) = (1, 2), ellers (0, 0). To celler får to ringer, så det er to rene likevekter.
- **Eksamen 2025, oppgave 4:** (Up, Left) = (1, 1), ellers (0, 0). I kolonne Right er P1s tall 0 og 0, så begge ringes. Det samme gjelder P2 i rad Down. To likevekter: (Up, Left) og (Down, Right), altså π₁ = π₂ = 1 og π₁ = π₂ = 0. Down er bare weakly dominert, og stryker du den, mister du (Down, Right).

#### Håndsporing 5: blandet likevekt i Two-finger Morra

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

#### Håndsporing 6: Battle of the Sexes og den klassiske feilen

**Riktig:** π₁ = P(P1 velger movie) skal gjøre P2 likegyldig. P2s tall: movie gir 1 · π₁, opera gir 2 · (1 − π₁).
π₁ = 2(1 − π₁) ⇒ **π₁ = 2/3**.
Tilsvarende skal π₂ gjøre P1 likegyldig: 2π₂ = 1 · (1 − π₂) ⇒ **π₂ = 1/3**.
Begge får forventet 2/3.

**Feil:** bruker du P1s egne tall, 2π₁ = 1 − π₁, får du π₁ = 1/3. Det er P2s π₂ speilvendt, ikke P1s likevektsstrategi.

**Hvorfor:** når P2 spiller π₂ = 1/3, er P1s gevinst 2/3 uansett hva P1 gjør. Linjen er flat. P1s egen gevinst kan derfor ikke bestemme π₁. Det eneste som bestemmer π₁, er kravet om at P2 ikke skal ha noe å tjene på å bytte.

Mot en P2 som blander 50/50, bør P1 velge movie, for movie gir 2 · ½ = 1 og opera 1 · ½ = ½ (L10).

#### Håndsporing 7: ingen blandet likevekt i PD

P1 likegyldig: testify gir −5π₂ + 0 · (1 − π₂) = −5π₂, og refuse gir −10π₂ − 1 · (1 − π₂) = −1 − 9π₂. Likningen gir 4π₂ = −1, altså π₂ = −1/4, som ikke er en sannsynlighet. Linjene krysser aldri i [0, 1], fordi testify er strictly dominant. L10: «No mixed strategy Nash equilibrium. Why? No solutions».

#### Håndsporing 8: maximin på Morra (boka 17.2.2)

P1 avslører p = P(én finger) først. P2 svarer med den rene handlingen som er verst for P1. P1s gevinst blir min(5p − 3, 4 − 7p), den nedre kanten av to linjer. Toppen av kanten er der linjene krysser: p = 7/12, U = −1/12. Går P2 først, blir verdien også −1/12. Med rene strategier ligger verdien mellom −3 og 2.

#### Håndsporing 9: hjortejakt (eksamen 2024, Q12, 4 poeng)

(Stag, Stag) = (5, 5), (Stag, Hare) = (0, 2), (Hare, Stag) = (2, 0), (Hare, Hare) = (1, 1). π = P(Stag).
P2 likegyldig: 5π₁ = 2π₁ + 1 · (1 − π₁) ⇒ 4π₁ = 1 ⇒ **π₁ = 1/4**. Spillet er symmetrisk, så π₂ = 1/4.

#### Håndsporing 10: backward induction og to runder

- **Ti kjente runder av PD:** i runde 10 finnes ingen framtid, så det er et engangsspill og begge vitner. Da er runde 10 låst uansett, og runde 9 blir et engangsspill. Slik fortsetter det bakover til runde 1. Begge vitner i alle runder. Boka bruker 100 runder, L10 bruker 10.
- **Eksamen 2024, Q13:** (2, 2), (0, 3) / (3, 0), (1, 1), spilt to runder. Down og Right er dominante. Runde 2 er et engangsspill, og da blir runde 1 det også. Svar: π₁ = 0 og π₂ = 0 i begge runder, altså (Down, Right) to ganger.

#### Håndsporing 11: grim trigger og δ ≥ 1/5 (L10)

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

#### Håndsporing 12: Eksamen 2023, oppgave 5 (10 poeng)

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

### Eksamensfeller

- **π₁ med feil spillers tall.** π₁ skal gjøre P2 likegyldig, så du bruker P2s tall. Med egne tall blir BoS-svaret 1/3 i stedet for 2/3.
- **Weak behandlet som strict.** Én likhet (5 = 5) er nok til at det ikke er strict. Med weak kan rekkefølgen endre svaret, og du kan stryke en Nash-likevekt (eksamen 2025, oppgave 4).
- **Stoppe etter første runde i IESDS.** Noe som ikke er dominert i starten, kan bli dominert senere.
- **Nash-likevekt er ikke det samme som et godt utfall.** Spør oppgaven om Pareto eller social welfare, er svaret ofte et annet utfall enn likevekten (PD, 2019, 2023).
- **Glemme like tall når du ringer inn.** Like beste svar ringes inn begge to. Ellers mister du likevekter.
- **Blandet likevekt som ikke finnes.** Gir likningen π utenfor [0, 1], har spillet ingen helt blandet likevekt (PD: π₂ = −1/4).
- **Gjentakelse er ikke nok.** Med fast, endelig og kjent antall runder gir backward induction svik i alle runder (eksamen 2024, Q13). Samarbeid krever uendelig eller ukjent antall runder og stor nok δ.
- **Grim-utledningen.** Svik gir 0 i runde 0, ikke −1, og straffen starter i runde 1. Derfor står δ i telleren: −5δ/(1 − δ).

### Koblinger til andre kapitler

- **Kap. 2 (E01):** multiagent-miljøer, cooperative og competitive. «In some competitive environments, randomized behavior is rational because it avoids the pitfalls of predictability» (kap. 2.3). Eksamen 2018, Problem 8 spør om akkurat dette.
- **Kap. 6 (E08):** zero-sum og minimax. Maximin i 17.2.2 er minimax brukt på blandede strategier.
- **E09:** expectimax regner forventning over sjansenoder, som de forventede gevinstene her. Regret matching (L8, s. 40): snittet av strategiene går mot en Nash-likevekt når antall iterasjoner går mot uendelig.

### Ikke pensum her

- 17.2.4 (Sequential games: The extensive form) og 17.2.5 (Uncertain payoffs and assistance games) er ikke listet i pensumoversikten (US 18.2.4–18.2.5).
- 17.3 (Cooperative game theory) og resten av kapittel 17 er ikke listet.
- Beviset for Nash's theorem: L10 sier «not curriculum».
- L13: «Not in this course: continuous state and action spaces».
- Linear programming for store zero-sum-spill (17.2.2) og bokas FSM-strategier utover HAWK, DOVE, GRIM og TFT er bare nevnt.

### Øv selv

1. **Eksamen 2019, oppgave 5 (10 p).** Radspilleren velger H eller NH, kolonnespilleren G eller NG. (H, G) = (8, 0), (H, NG) = (3, 1), (NH, G) = (4, 4), (NH, NG) = (2, 3). Finn dominante strategier, Nash-likevekten og alle Pareto-optimale utfall.
2. **Eksamen 2018, Problem 7 (10 p, 5–5).** To risbønder, oppstrøms og nedstrøms, vanner på tid A eller B. Vanner begge samtidig, mister nedstrøms x. Vanner de til ulik tid, mister begge y på skadedyr. Uten tap er nytten 1. Sett opp matrisen og finn når en strongly dominant strategy equilibrium oppstår.
3. **Eksamen 2020 kontinuasjon, Problem 5 (15 p).** Andreprisauksjon med bud 0–50. Finnes en strictly eller weakly dominant strategy equilibrium? Hva overlever eliminering av strictly dominerte handlinger, og hva skjer med weak?
4. **Matching pennies.** (1, −1), (−1, 1) / (−1, 1), (1, −1). Finn den blandede likevekten og verdien.
5. **BoS med andre tall (ILLUSTRASJON).** (3, 1), (0, 0) / (0, 0), (1, 3). Finn π₁ og π₂. Bruk riktig spillers tall.
6. **Grim trigger med andre tall (ILLUSTRASJON).** Begge tier: (3, 3). Én vitner: 5 til den som vitner, 0 til den andre. Begge vitner: (1, 1). For hvilke δ er grim mot grim en likevekt?

### Fasit

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

---

<a id="e11"></a>

## E11 – Logikk 1: modeller, entailment og sannhetstabeller

> Pensum: Global 7.1–7.4 (US 7.1–7.4, samme nummer) · Forelesning: L5 (repetisjon i L13) · Øving: Ø4 (A4 del 1, oppgave 1.1) · Eksamensvekt: ~23 % (logikk samlet, kap. 7–9)
> Video: `videoer/e11-proposisjonslogikk-1/out/tdt4136-e11-proposisjonslogikk-1.mp4` (15:25)

### Kapitler i videoen

- 0:00 – Intro
- 0:46 – Kunnskapsbasert agent
- 2:15 – Wumpus-hula
- 4:08 – Modeller og entailment
- 7:47 – Proposisjonslogikk
- 10:23 – Sannhetstabellen som algoritme
- 12:37 – Eksamen 2022, oppgave 5
- 14:23 – Koblinger og oppsummering

### Kjerneideer

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

### Algoritmer og håndsporing

#### KB-AGENT (fig. 7.1)

```
function KB-AGENT(percept) returns an action
  persistent: KB, t ← 0
  TELL(KB, MAKE-PERCEPT-SENTENCE(percept, t))
  action ← ASK(KB, MAKE-ACTION-QUERY(t))
  TELL(KB, MAKE-ACTION-SENTENCE(action, t))
  t ← t + 1
  return action
```

#### Agentens første trekk i hula (fig. 7.3–7.4)

| Steg | Rute | Persept | Slutning |
|---|---|---|---|
| 1 | [1,1] | ingenting | [1,2] og [2,1] er OK |
| 2 | [2,1] | Breeze | grop i [2,2] eller [3,1], eller begge. Eneste trygge ubesøkte rute er [1,2]. |
| 3 | [1,2] | Stench, ingen Breeze | Wumpus ikke i [2,2] (da hadde det luktet i [2,1]) og ikke i [1,1], altså i [1,3]. Ingen breeze gir ¬P₂,₂, så gropa er i [3,1]. |
| 4 | [2,2] → [2,3] | Glitter i [2,3] | [2,2] er OK, og gullet ligger i [2,3] |

#### Fig. 7.5: åtte modeller for (P₁,₂, P₂,₂, P₃,₁)

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

#### Wumpus-KB i proposisjonslogikk (7.4.3, bare i boka)

- R₁: ¬P₁,₁
- R₂: B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)
- R₃: B₂,₁ ⇔ (P₁,₁ ∨ P₂,₂ ∨ P₃,₁)
- R₄: ¬B₁,₁
- R₅: B₂,₁

Sju symboler (B₁,₁, B₂,₁, P₁,₁, P₁,₂, P₂,₁, P₂,₂, P₃,₁) gir 2⁷ = 128 rader. Fem R-er gir ikke 2⁵.

#### TT-ENTAILS (fig. 7.10, 7.4.4, bare i boka)

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

#### Fig. 7.9: KB ⊨ ¬P₁,₂ rad for rad

Tabellen er listet i fig. 7.9-rekkefølge (F før T, P₃,₁ varierer raskest). Algoritmen prøver true før false, men utfallet er det samme. I 125 av 128 rader er minst én av R₁–R₅ usann. KB er sann i bare tre rader:

| Rad | B₁,₁ | B₂,₁ | P₁,₁ | P₁,₂ | P₂,₁ | P₂,₂ | P₃,₁ | R₁–R₅ | KB | α₁ = ¬P₁,₂ |
|---|---|---|---|---|---|---|---|---|---|---|
| 34 | F | T | F | F | F | F | T | alle T | **T** | **T** |
| 35 | F | T | F | F | F | T | F | alle T | **T** | **T** |
| 36 | F | T | F | F | F | T | T | alle T | **T** | **T** |

- α₁ er sann i alle tre KB-radene, så KB ⊨ ¬P₁,₂.
- P₂,₂ er sann i to av de tre, så verken KB ⊨ P₂,₂ eller KB ⊨ ¬P₂,₂.

#### A4 1.1 a) med ⇒-kolonnen (som i videoen)

Påstanden er ¬A ∧ ¬B ⊨ ¬B.

| A | B | ¬A ∧ ¬B | ¬B | (¬A ∧ ¬B) ⇒ ¬B |
|---|---|---|---|---|
| F | F | T | T | T |
| F | T | F | F | T |
| T | F | F | T | T |
| T | T | F | F | T |

Kolonnen er T i hver rad, så påstanden er sann. Bare rad 1 har venstresiden sann, og der er ¬B også sann.

#### Eksamen 2022 oppgave 5 i fasitformat (5.1–5.2; poeng står ikke i kilden)

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

### Eksamensfeller

1. **⊨ er ikke ⇒.** ⇒ er en konnektiv inne i en setning og er sann eller usann i én modell. ⊨ er en påstand om alle modeller. Spør oppgaven om entailment, er det ikke nok å regne ut α ⇒ β i én rad. Kolonnen må være T i *hver* rad. 2016 oppgave 2 ba om nettopp denne forskjellen.
2. **Retningen.** KB ⊨ α betyr M(KB) ⊆ M(α). Den lille mengden står til venstre. Har α flere modeller enn KB og de dekker KB-modellene, gjelder KB ⊨ α, ikke α ⊨ KB.
3. **«Usant premiss gir usann implikasjon».** Feil: F ⇒ hva som helst er T. P ⇒ Q er usann bare i raden P = T, Q = F. ⇒ krever heller ingen årsakssammenheng.
4. **Ekvivalenstabell vs. entailmenttabell.** For α ⊨ β sjekker du bare radene der α er T, og der må β også være T. For α ≡ β må kolonnene være like i *alle* rader. Ikke krev like kolonner når oppgaven spør om ⊨.
5. **Presedens.** ¬A ∧ B er (¬A) ∧ B. Sett parenteser når du er i tvil.
6. **«Vet ikke» er ikke «nei».** KB ⊭ P₂,₂ betyr ikke at KB ⊨ ¬P₂,₂. I fig. 7.5 holder ingen av dem.
7. **Feil antall rader.** Tell symbolene, ikke setningene. Wumpus-KB-en har 5 setninger, men 7 symboler og 128 rader.
8. **2022-fasitens 5.3 tar feil om beskjedene.** Den sier at M₁ er den eneste sanne beskjeden. I KB-modellen (B₁ = T, B₂ = B₃ = F) er M₁ = ¬B₁ = F og M₂ = ¬B₂ = T. Den sanne beskjeden er M₂. Ikke kopier den setningen.
9. **Halv tabell.** Fasitene viser hele tabellen med kolonner for delsetningene og peker eksplisitt på KB-radene. Gjør det samme, ikke skriv bare konklusjonen.

### Koblinger til andre kapitler

- → kap. 7.5 / E12: inference rules, validity og satisfiability, deduction theorem (α ⊨ β hvis og bare hvis α ⇒ β er valid), CNF, resolution og forward/backward chaining. Refutation i 2022 5.3 hører hjemme der.
- → kap. 7.6 / E13: DPLL og WalkSAT er raskere model checking enn TT-ENTAILS sine 2ⁿ rader.
- → kap. 8 / E14: førsteordens logikk. PL må lage ett symbol per rute (P₁,₂, P₂,₂, …), mens FOL kan si «alle ruter ved siden av en grop har trekk» med én setning.
- → kap. 2 / E01: PEAS og miljøegenskapene som wumpus-beskrivelsen bruker.
- → kap. 4 / E05: M(KB), alle verdenene agenten fortsatt kan være i, minner om en belief state.
- → kap. 5 (US kap. 6) / E07: TT-CHECK-ALL tilordner ett symbol om gangen og går dybde først, som backtracking i CSP.

### Ikke pensum her

- 7.7 Agents Based on Propositional Logic (7.7.1–7.7.4): UT (PENSUMOVERSIKT, Canvas-unntak).
- Lean-bevisene i L5 (s. 17 og 20): merket «not curriculum» i slidene.
- z3-sjekken for unsatisfiability i L5 (s. 21): merket «not curriculum».
- «Natural language demo» og agentkoden i L5 (s. 6): merket «not curriculum».
- Horn clauses' betydning og Prolog i L5 (s. 41): merket «not curriculum», og Horn-klausuler hører uansett til E12.
- Fuzzy logic (grader av sannhet): bare en fotnote i 7.3 som peker til kap. 13. Ikke forelest (PENSUMOVERSIKT-forelesninger).

### Øv selv

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

### Fasit

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

---

<a id="e12"></a>

## E12 – Logikk 2: inferensregler, CNF og resolution

> Pensum: Global 7.5–7.5.4 (US samme nummer) · Forelesning: L5, L13 · Øving: Ø4 (A4 del 1–2) · Eksamensvekt: ~23 % (logikk samlet, PL + FOL, deles med E11, E13, E15 og E16)
> Video: `videoer/e12-resolusjon-pl/out/tdt4136-e12-resolusjon-pl.mp4` (15:22)

### Kapitler i videoen

- 0:00 – Intro
- 0:35 – Omskrivningsregler
- 1:46 – Gyldig, oppfyllbar og ⊨
- 3:32 – Bevis med navngitte regler
- 5:39 – Resolution
- 7:35 – CNF og PL-RESOLUTION
- 10:27 – Horn og chaining
- 12:52 – Eksamen 2018 P6
- 14:24 – Koblinger

### Kjerneideer

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

### Algoritmer og håndsporing

#### PL-RESOLUTION på wumpus-eksempelet (Fig. 7.14)

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

#### Forward chaining på Fig. 7.16 (KB: P ⇒ Q, L ∧ M ⇒ P, B ∧ L ⇒ M, A ∧ P ⇒ L, A ∧ B ⇒ L, fakta A og B, spørsmål Q)

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

#### Backward chaining på samme KB

1. Q krever P (P ⇒ Q).
2. P krever L og M (L ∧ M ⇒ P).
3. L via A ∧ P ⇒ L: A er fakta, men P ligger allerede på stakken. Det er en løkke, så regelen droppes.
4. L via A ∧ B ⇒ L: begge er fakta, så L er bevist.
5. M via B ∧ L ⇒ M: B er fakta. L bevises på nytt på samme måte (løkke via P, så A ∧ B), siden bokas enkle BC ikke husker tidligere resultater. M er bevist.
6. Dermed holder P, og så Q.

#### Eksamen 2018 P6, «bunnies» (10 p)

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

### Eksamensfeller

- **XOR oversatt som ∨.** 2018 P6-fasiten trekker poeng hvis «one is brown and one is white» blir B2 ∨ B3. Setningen sier at nøyaktig én er brun.
- **⇒ og ⊨ blandes.** ⇒ står inne i en setning (én modell). ⊨ er en påstand om alle modeller.
- **To komplementære par kuttes samtidig.** P ∨ Q ∨ R mot ¬P ∨ ¬Q gir *ikke* R. Kutt ett par om gangen. Da får du Q ∨ ¬Q ∨ R eller P ∨ ¬P ∨ R, som er tautologier og ikke hjelper.
- **De Morgan uten å bytte konnektiv.** ¬(α ∨ β) blir ¬α ∧ ¬β, ikke ¬α ∨ ¬β.
- **Distribusjon før negasjonen er flyttet inn.** Følg rekkefølgen ⇔, ⇒, ¬, distribusjon.
- **Glemt å negere målet** i resolution refutation, eller å legge til målet selv i stedet for negasjonen.
- **Bevis uten regelnavn og linjenumre.** 2023 3.1 krever begge i hvert steg, og at Modus tollens brukes.
- **Feil om metning.** Metning uten □ betyr KB ⊭ α. Det betyr ikke KB ⊨ ¬α.
- **Horn-telling.** En klausul med to positive literaler (som ¬A ∨ B ∨ C) er ikke Horn. En goal clause (¬A ∨ ¬B) er Horn, men ikke definite.

### Koblinger til andre kapitler

- **E11 (7.1–7.4):** modeller, entailment og model checking med sannhetstabell. E12 erstatter de 128 radene med bevis.
- **E13 (7.6):** refutation gjør KB ⊨ α om til spørsmålet «er KB ∧ ¬α satisfiable?», som DPLL og WalkSAT svarer på.
- **E15 (9.3–9.4):** forward og backward chaining i FOL, med unification og GMP.
- **E16 (9.5):** resolution i FOL. CNF får flere steg der (standardisering, Skolemisering, ∀ ut).
- **E18 (11.2):** backward search (regresjon) i planlegging går bakover fra målet, slik backward chaining gjør.

### Ikke pensum her

- 7.7 Agents based on propositional logic. Den er unntatt i Canvas Syllabus og nevnes ikke i videoen.
- 9.5.4 Completeness of resolution (Herbrand-beviset). Videoen tar bare idéen (ground resolution theorem). Kilde: Syllabus-unntakene.
- 11.2.3 Planning as Boolean satisfiability (SATPlan). Kilde: Syllabus og L11 s. 14.
- Det som er merket «not curriculum» i L5: Lean, Z3, Prolog og NL-demoene. Kilde: PENSUMOVERSIKT.

Kun bok, men pensum (ikke forelest): monotonicity, factoring og count/agenda-pseudokoden i Fig. 7.15–7.16.

Formelark: i 2025 lå de 12 ekvivalensreglene bakerst i oppgavesettet. Canvas sier «Examination aids: D. None.», og om du får formelark i 2026 er ikke bekreftet (EKSAMENSPLAN). Pugg reglene.

### Øv selv

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

### Fasit

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

---

<a id="e13"></a>

## E13 – SAT: DPLL og WalkSAT

> Pensum: Global 7.6–7.6.3 (US samme nummer) · Forelesning: ingen (kun bok) · Øving: – · Eksamensvekt: ~23 % (logikk samlet, PL + FOL, deles med E11, E12 og E14–E16). DPLL og WalkSAT er aldri spurt om på eksamenene 2015–2025.
> Video: `videoer/e13-dpll-walksat/out/tdt4136-e13-dpll-walksat.mp4` (11:04)

### Kapitler i videoen

- 0:00 – Intro
- 0:49 – Hvorfor SAT?
- 1:23 – DPLL
- 5:15 – Triksene i ekte løsere
- 5:56 – WalkSAT
- 7:22 – Hvor er de vanskelige problemene?
- 8:32 – Eksamensoppgave
- 9:50 – Koblinger og oppsummering

### Kjerneideer

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

### Algoritmer og håndsporing

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

### Eksamensfeller

- **Unit før pure:** fig. 7.17 sjekker pure før unit. Begge rekkefølgene kan gi samme modell, men forløpet blir feil, og det er forløpet som etterspørres. Skriv rekkefølgen sann → usann → pure → unit → gjett.
- **Telle fortegn i sanne klausuler:** pure avgjøres bare over klausuler som ikke allerede er sanne. I gjennomgangseksempelet er C pure etter A = false bare fordi C4 er sann.
- **Kalle et symbol pure fordi det ikke står noe sted:** et symbol som bare står i sanne klausuler, er ikke pure etter konvensjonen her. Det trengs heller ikke.
- **Glemme early termination:** en klausul er usann så snart *alle* literalene er usanne. Du trenger ikke vente til alle symbolene er satt.
- **Tro at WalkSAT failure betyr unsatisfiable:** det betyr bare at modellen ikke ble funnet innen max_flips. Til å bevise entailment trengs en complete metode som DPLL eller resolution.
- **Tro at flere klausuler gjør problemet vanskeligere:** de vanskeligste setningene ligger ved terskelen. Overconstrained setninger avvises fort.
- **Si 4,26 eller 4,3 uten kilde:** bokteksten og fig. 7.19 sier ≈ 4,3, mens litteraturnotene sier 4,26. Oppgi begge eller «rundt 4,3».
- **Uten navn på stegene:** skriv for hvert steg om det er pure, unit (med klausul), gjett eller konflikt. Uten navn kan sensor ikke se at du følger algoritmen.

### Koblinger til andre kapitler

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

### Ikke pensum her

- 7.7 Agents Based on Propositional Logic, alle underseksjoner (Canvas, syllabus-unntakene).
- 7.7.4 og 11.2.3 planlegging som SAT (Canvas; L11 s. 14: «§11.2.3 — not in the exam»).
- 5.3.3 intelligent backtracking for CSP, med backjumping og conflict sets (Canvas). Trikset i 7.6.1 er pensum på bokas nivå.
- 5.5 strukturen til CSP-er, med uavhengige delproblemer (Canvas). Component analysis i 7.6.1 er pensum.

### Øv selv

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

### Fasit

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

---

<a id="e14"></a>

## E14 – Førsteordens logikk: å si «alle» og «noen»

> Pensum: Global 8.1–8.4 (US samme nummer) · Forelesning: L6 · Øving: Ø4 (A4 oppgave 3) · Eksamensvekt: ~23 % (logikk samlet, kap. 7–9)
> Video: `videoer/e14-forsteordens-logikk/out/tdt4136-e14-forsteordens-logikk.mp4` (15:52)

### Kapitler i videoen

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

### Kjerneideer

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

### Algoritmer og håndsporing

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

### Eksamensfeller

- **∧ under ∀.** `∀x King(x) ∧ Person(x)` gjør alt til konger. 2017 problem 5: «Men and women are welcome to apply» som `∀x [(M(x) ∧ W(x)) ⇒ Apply(x)]` er *False*. Den sier noe om alt som er både mann og kvinne. Fasiten peker på ∨.
- **⇒ under ∃.** `∃x Professor(x) ⇒ Teaches(x, EiT) ∧ Teaches(x, AI)` er sann bare fordi noe ikke er en professor. 2017 problem 5, alternativ 1 (`∃x∀y[Person(x) ∧ Game(y) → Plays(x, y)]`), er feil av samme grunn. Riktig er alternativ 4: `∃x∀y[Person(x) ∧ [Game(y) → Plays(x, y)]]`.
- **x og y kan være samme objekt.** «Minst to» uten `¬(x = y)` gir poengtrekk (2021 1.3, 2019 oppgave 7). I 2025 Q9 gir regelen `∀x,y,z Loves(x, z) ∧ Loves(y, z) ⇒ Jealous(x, y)` også `Jealous(Alice, Alice)`. Fasiten ber bare om `Jealous(Alice, Carrie)` med θ = {x/Alice, y/Carrie, z/Bob}, men ved forward chaining til fixpunkt følger begge.
- **Kvantorrekkefølge.** `∀x ∃y` ≠ `∃y ∀x`. 2016: «Every Russian school boy knows a game» har to tolkninger. A er `∃y [G(y) ∧ (∀x R(x) ⇒ K(x, y))]`, B er `∀x [R(x) ⇒ ∃y (G(y) ∧ K(x, y))]`.
- **To fakta er ikke «nøyaktig to».** I standard semantikk er minimum én bror. Vil du ha nøyaktig to, må ulikheten og «bare disse» skrives ut.
- **Variabler og konstanter.** Hold én konvensjon. 2023-fasiten bruker store bokstaver for variabler (X, Y) og små for konstanter (fido). Boka gjør det omvendt.
- **Bakgrunnskunnskap.** 2019 oppgave 2 krevde at du selv la til `∀x Cat(x) ⇒ Animal(x)` før resolution kunne bruke at Kismet er en katt.
- **Les baklengs.** 2022 oppgave 6: `∀x ¬R(x) ⇒ ¬Q(x)` er kontraposisjonen av `∀x Q(x) ⇒ R(x)`, altså «alle Q er R». Da følger `∀x ¬R(x) ⇒ ¬P(x)` når også `∀x P(x) ⇒ Q(x)` gjelder.
- **Funksjonsterm er ikke en setning.** `LeftLeg(John)` er et objekt. Det kan ikke stå alene som en påstand, og det kan ikke stå under ∧.

### Koblinger til andre kapitler

- → kap. 7 / E11: syntaks, modeller, entailment og wumpus-aksiomene R2/R3 i PL. FOL utvider ontologien, ikke entailment-begrepet.
- → kap. 9 / E15: UI og EI fjerner kvantorene (Skolem-konstant), unification og GMP, forward og backward chaining. 2023 3.2 og 2025 Q9 løses der.
- → kap. 9.5 / E16: CNF, med «flytt ¬ innover» via De Morgan for kvantorer som eget steg, og resolution (2019 oppgave 2, 2025 Q10).
- → kap. 10 / E17: kategorier og ontologier er FOL-aksiomer i stor skala. Vokabularsteget i knowledge engineering er en ontologi.
- → kap. 11 / E18: PDDL bruker database semantics (unique names, closed world) og action schemas med variabler.

### Ikke pensum her

- Prolog-eksemplene i L6 (s. 5 og 49): «not curriculum» (PENSUMOVERSIKT avsnitt 7).
- Z3-eksemplene og anvendelsene i L6 (s. 50 og 52–59): «not curriculum» (PENSUMOVERSIKT avsnitt 7).
- «By hand»-beviset og motekesempelet i L6 (s. 41–45): «not curriculum». Selve fordelingsregelen bør du likevel kunne (PENSUMOVERSIKT avsnitt 8, punkt 7).
- Natural language-demoen i L6 (s. 7): «not curriculum» (PENSUMOVERSIKT avsnitt 7).

### Øv selv

1. (2016, 2 p) «Every Russian school boy knows a game» har to tolkninger. A: «There exists a game such that every Russian school boy knows this game.» B: «For each Russian school boy, there exists a game so that the boy knows this game.» Skriv begge i FOL med R(x), G(y) og K(x, y). Hvilken medfører den andre?
2. (2019 oppgave 7, 2 + 2 p) Oversett «John has at least two daughters» og «Any person who has an umbrella is not wet».
3. (2017 problem 5) Er «Men and women are welcome to apply» ekvivalent med `∀x [(M(x) ∧ W(x)) ⇒ Apply(x)]`? Begrunn svaret og skriv en riktig versjon.
4. (A4 3.1 a–e) Oversett setningene a–e i A4 oppgave 3.1 med Occupation, Customer og Boss.
5. Avgjør om setningene er sanne i modellen i fig. 8.2: (a) `∀x Person(x) ⇒ ∃y Brother(x, y)`, (b) `∀x ∃y Brother(x, y)`, (c) `∃x Person(x) ∧ ¬King(x)`, (d) `∃x OnHead(x, LeftLeg(John))`.
6. Et språk har tre konstanter og ett unært predikat. Hvor mange modeller finnes med database semantics? Hvorfor er svaret uendelig med standard semantics?

### Fasit

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

---

<a id="e15"></a>

## E15 – FOL-inferens 1: unification, GMP og chaining

> Pensum: Global 9.1–9.4.1 (US 9.1–9.4.1, samme nummer) · Forelesning: L7, L13 · Øving: Ø4 (A4 oppgave 3–4) · Eksamensvekt: ~23 % (logikk samlet, kap. 7–9, deles med E11, E12, E14 og E16)
> Video: `videoer/e15-fol-inferens/out/tdt4136-e15-fol-inferens.mp4` (15:00)

### Kapitler i videoen

- 0:00 – Intro
- 0:42 – Fra ∀ og ∃ til konkrete setninger
- 2:21 – Propositionalisering
- 4:03 – Unification
- 6:54 – Generalized Modus Ponens
- 8:26 – Forward chaining
- 10:52 – Backward chaining
- 12:27 – Eksamen
- 13:58 – Koblinger og oppsummering

### Kjerneideer

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

### Algoritmer og håndsporing

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

### Eksamensfeller

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

### Koblinger til andre kapitler

- → kap. 7 / E12: forward og backward chaining for Horn clauses i PL. Her er det samme, løftet med θ.
- → kap. 9.5 / E16: resolution bruker samme UNIFY, MGU og standardizing apart. Skolem-funksjoner og CNF hører hjemme der. BC er et spesialtilfelle av resolution med en bestemt kontrollstrategi.
- → kap. 5 / E06–E07 (US kap. 6): matching av premisser er et CSP, og konjunktrekkefølgen er MRV.
- → kap. 3 / E02: BC er dybde-først-søk, med lineært minne, gjentatte tilstander og manglende completeness.
- → kap. 8 / E14: FOL-syntaks og oversetting. Bruk ∀ med ⇒ og ∃ med ∧. A4 oppgave 3 hører hjemme der.

### Ikke pensum her

- 9.4.2 Logic programming (Prolog): UT (Canvas-pensumlisten, PENSUMOVERSIKT tabell 3). Prolog er også merket «not curriculum» i L5 og L6.
- 9.4.3 Redundant inference and infinite loops (tabling og memoization): UT (Canvas, PENSUMOVERSIKT).
- 9.4.4 Database semantics of Prolog: UT (Canvas, PENSUMOVERSIKT).
- 9.4.5 Constraint logic programming: UT (Canvas, PENSUMOVERSIKT).
- 9.5.4 hører til E16 og er også UT.

### Øv selv

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

### Fasit

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

---

<a id="e16"></a>

## E16 – FOL-inferens 2: CNF og resolution steg for steg

> Pensum: Global 9.5 uten 9.5.4 (US 9.5, samme nummer) · Forelesning: L7, L13 · Øving: Ø4 (A4 oppgave 3–4) · Eksamensvekt: ~23 % (logikk samlet, kap. 7–9; 2025 ga 25 p til Q9–Q10 alene)
> Video: `videoer/e16-fol-resolusjon/out/tdt4136-e16-fol-resolusjon.mp4` (15:11)

### Kapitler i videoen

- 0:00 – Intro
- 0:52 – Hvorfor motsigelse?
- 2:21 – CNF i sju steg
- 4:17 – Skolem: konstant eller funksjon
- 5:39 – Unification og regelen
- 7:35 – Hvem drepte katten?
- 9:20 – Hestehodet
- 10:44 – Likhet og strategier
- 11:52 – Eksamen 2025 Q9–Q10
- 14:12 – Koblinger og oppsummering

### Kjerneideer

**Kroken (AIMA 9.5.3, L7).** Alle som elsker alle dyr, blir elsket av noen. Alle som dreper et dyr, blir ikke elsket av noen. Jack elsker alle dyr. Enten Jack eller Curiosity drepte katten Tuna. Drepte Curiosity katten? Svaret kommer fra én regel, resolution, brukt sju ganger. Før det må setningene over på klausulform, og der går poengene tapt: én Skolem-konstant der det skulle stått en Skolem-funksjon, og beviset faller.

**Bevis ved motsigelse (proof by contradiction, refutation).** KB ⊨ α betyr at α er sann i alle modeller der KB er sann. Det er det samme som at KB ∧ ¬α er *unsatisfiable*: ingen modell gjør begge sanne (L5, AIMA 7.5.2). Resolution viser nettopp at et sett med klausuler er unsatisfiable, ved å utlede den tomme klausulen □. Derfor legger du alltid til det *negerte* målet. Legger du til selve målet, beviser du ingenting.

**Resolution refutation (L7).** 1) Legg ¬α til KB. 2) Gjør alt om til CNF. 3) Del opp i klausuler. 4) Resolver par til du får □ (da gjelder KB ⊨ α) eller ikke finner flere nye klausuler.

**Hvorfor CNF.** Resolution-regelen tar bare *klausuler*: literaler med ∨ mellom. En *literal* er en atomær setning eller en negert atomær setning. CNF er en konjunksjon av klausuler, så hver konjunkt blir en egen klausul i settet.

**Semidecidability (L7, AIMA 9.1).** Følger α av KB, finner resolution □ etter endelig mange steg. Følger α ikke, kan søket gå for alltid. Entailment i FOL er derfor *semidecidable*. Beviset for at resolution alltid finner □ når settet er unsatisfiable, står i 9.5.4 og er ikke pensum.

**FOL→CNF i sju steg (L7).** Forelesningen har sju steg. Boka (9.5.1) slår «eliminate ⇔» og «eliminate ⇒» sammen til ett steg og teller seks. Følg forelesningens nummerering på eksamen og skriv navnet på steget.

| L7 | Steg | Hva skjer | Bok 9.5.1 |
|---|---|---|---|
| 1 | Eliminate ⇔ | α ⇔ β blir (α ⇒ β) ∧ (β ⇒ α) | 1 (sammen med 2) |
| 2 | Eliminate ⇒ | α ⇒ β blir ¬α ∨ β | 1 |
| 3 | Move ¬ inwards | ¬∀x p ≡ ∃x ¬p, ¬∃x p ≡ ∀x ¬p, De Morgan, ¬¬α ≡ α | 2 |
| 4 | Standardize variables | kvantorer med samme variabelnavn får ulike navn | 3 |
| 5 | Skolemize | hver ∃ fjernes med en Skolem-konstant eller Skolem-funksjon | 4 |
| 6 | Drop universal quantifiers | alle gjenværende variabler er ∀, så kvantorene droppes | 5 |
| 7 | Distribute ∨ over ∧ | α ∨ (β ∧ γ) blir (α ∨ β) ∧ (α ∨ γ) | 6 |

Proposisjonslogikk (kap. 7, E12) har fire steg: 1, 2, 3 og 7. FOL legger til de tre stegene som handler om variabler og kvantorer.

**Skolemisering (Skolemization).** En ∃-variabel byttes med et nytt navn. Regelen: Skolem-funksjonens argumenter er *alle ∀-variablene som omslutter ∃-en*.
- ∃ utenfor alle ∀ → Skolem-konstant: ∃x Student(x) ∧ Knows(x,Norwegian) blir Student(C1) ∧ Knows(C1,Norwegian). Dette er existential instantiation (EI) fra E15.
- ∃ inne i ∀x → Skolem-funksjon: ∀x ∃y Loves(x,y) blir ∀x Loves(x,F(x)). Med konstant, ∀x Loves(x,C1), ville du påstå at alle elsker den samme. Det er en mye sterkere setning.
- Analogi: F er en oppslagstabell. For hver x slår den opp «den x elsker».
- Skolemiser først når ¬ står helt inne. ∃z foran en pil blir ∀z når pila fjernes, og trenger da ingen Skolem-funksjon (setning B i katteeksempelet).
- Skolemiseringen bevarer ikke ekvivalens, men den bevarer satisfiability. Det er det resolution trenger (AIMA 9.5.1).

**Standardizing apart.** Ordet brukes om to ting. I steg 4 får to kvantorer i samme setning ulike navn. Før hvert resolusjonssteg må de to klausulene heller ikke dele variabler. Klausulene i settet er hver for seg ∀-kvantifisert, så x i én klausul har ingenting med x i en annen å gjøre. Gi den ene nye navn før du unifiserer.

**Unification (AIMA 9.2.1, L7).** UNIFY(p, q) gir en substitusjon θ slik at SUBST(θ, p) = SUBST(θ, q), eller *failure*. Du går argument for argument og binder en variabel bare når du må. Resultatet er *most general unifier* (MGU): UNIFY(Knows(John,x), Knows(y,z)) = {y/John, x/z}, ikke {y/John, x/John, z/John}. *Occur check* stopper en binding der variabelen ville inneholdt seg selv, som S(x) mot S(S(x)). Den står bare i boka, foreleser tok den ikke.

**Resolution-regelen for FOL (L7, AIMA 9.5.2).** Fra a₁ ∨ … ∨ c′ og ¬c ∨ b₁ ∨ … med θ = UNIFY(c′, c) får du SUBST(θ, a₁ ∨ … ∨ b₁ ∨ …). Klausulene må være standardisert fra hverandre. Regelen heter *binary resolution* fordi den kansellerer nøyaktig to literaler.

**Factoring.** Får resolventen to like literaler (etter θ), slår du dem sammen til én. L7 bruker det uten å gi det navn (Loves ∨ Loves ≡ Loves). I FOL er factoring mer: to literaler med samme fortegn i samme klausul slås sammen hvis de **unifiserer**, og MGU-en brukes på hele klausulen. P(x) ∨ P(y) ∨ Q(y) blir P(x) ∨ Q(x) med {y/x}. Binary resolution og factoring er sammen komplett (9.5.2, beviset i 9.5.4 er ikke pensum).

**Likhet (equality, AIMA 9.5.5, L7).** Tre veier:
1. Aksiomer for = (refleksiv, symmetrisk, transitiv, substitusjon for hvert predikat og hver funksjon). Det virker, men gir mange unyttige slutninger.
2. *Demodulation*: fra x = y og en klausul der en del unifiserer med x, bytt den delen med y under θ. Bare venstre → høyre. *Paramodulation* gjør det samme når likheten står inne i en lengre klausul.
3. *Equational unification*: likhet bygges inn i unification, slik at Add(1,2) og Add(2,1) unifiserer.

**Strategier (AIMA 9.5.6, L7).**
- *Unit preference*: foretrekk steg der den ene klausulen er en enkelt literal, for da krymper resultatet. Fem av sju steg i kattebeviset bruker en enhetsklausul. L5 viser samme heuristikk for PL.
- *Set of support*: hvert steg bruker en klausul fra et lite sett, typisk det negerte målet, og resolventene legges i settet. Beviset blir målrettet.
- *Input resolution*: hvert steg bruker en av de opprinnelige klausulene (fra KB eller målet). Komplett for Horn-KB, ikke generelt.
- *Linear resolution*: tillater i tillegg en forfar i bevistreet, og er komplett. Står bare i boka.
- *Subsumption*: en klausul som er en spesialisering av en annen, kastes. P(x) subsumerer P(A), P(A) ∨ Q(B) og P(F(y)), men ikke Q(A).
- *Learning*: L7 nevner også at en bevissøker kan lære av tidligere bevis. Ikke vist i videoen.

### Algoritmer og håndsporing

```
RESOLUTION-REFUTATION(KB, α):
  clauses ← CNF(KB ∧ ¬α)            # 7 steg, Skolem, standardiser
  loop:
    new ← {}
    for hvert par Ci, Cj i clauses, standardisert fra hverandre:
      for hver literal li ∈ Ci, lj ∈ Cj med θ = UNIFY(li, ¬lj) ≠ failure:
        R ← SUBST(θ, (Ci − li) ∨ (Cj − lj)), med factoring (literaler som unifiserer)
        if R = □: return KB ⊨ α
        legg R til new
    if new ⊆ clauses: return KB ⊭ α   # alle par prøvd uten noe nytt; i FOL kan løkka også gå evig
    clauses ← clauses ∪ new
```

#### CNF av setning A (bok 9.5.1, L7)

«Everyone who loves all animals is loved by someone.»

| L7-steg | Linje |
|---|---|
| start | ∀x [∀y Animal(y) ⇒ Loves(x,y)] ⇒ [∃y Loves(y,x)] |
| 1 | ingen ⇔ |
| 2 | ∀x ¬[∀y Animal(y) ⇒ Loves(x,y)] ∨ [∃y Loves(y,x)] |
| 2 | ∀x ¬[∀y ¬Animal(y) ∨ Loves(x,y)] ∨ [∃y Loves(y,x)] |
| 3 | ∀x [∃y ¬(¬Animal(y) ∨ Loves(x,y))] ∨ [∃y Loves(y,x)] |
| 3 | ∀x [∃y ¬¬Animal(y) ∧ ¬Loves(x,y)] ∨ [∃y Loves(y,x)] |
| 3 | ∀x [∃y Animal(y) ∧ ¬Loves(x,y)] ∨ [∃y Loves(y,x)] |
| 4 | ∀x [∃y Animal(y) ∧ ¬Loves(x,y)] ∨ [∃z Loves(z,x)] |
| 5 | ∀x [Animal(F(x)) ∧ ¬Loves(x,F(x))] ∨ Loves(G(x),x) |
| 6 | [Animal(F(x)) ∧ ¬Loves(x,F(x))] ∨ Loves(G(x),x) |
| 7 | [Animal(F(x)) ∨ Loves(G(x),x)] ∧ [¬Loves(x,F(x)) ∨ Loves(G(x),x)] |

F(x) er dyret x ikke elsker, G(x) er den som elsker x. Begge står inne i ∀x og blir derfor funksjoner av x. Boka viser også den gale versjonen med konstanter: ∀x [Animal(A) ∧ ¬Loves(x,A)] ∨ Loves(B,x), som sier at alle mislikte det samme dyret A eller ble elsket av den samme B.

#### Klausulsettet for katten

| Navn | Setning | Klausul(er) |
|---|---|---|
| A1, A2 | Everyone who loves all animals is loved by someone | Animal(F(x)) ∨ Loves(G(x),x) · ¬Loves(x,F(x)) ∨ Loves(G(x),x) |
| B | ∀x [∃z Animal(z) ∧ Kills(x,z)] ⇒ [∀y ¬Loves(y,x)] | ¬Loves(y,x) ∨ ¬Animal(z) ∨ ¬Kills(x,z) |
| C | ∀x Animal(x) ⇒ Loves(Jack,x) | ¬Animal(x) ∨ Loves(Jack,x) |
| D | Kills(Jack,Tuna) ∨ Kills(Curiosity,Tuna) | samme |
| E | Cat(Tuna) | samme |
| F | ∀x Cat(x) ⇒ Animal(x) (bakgrunnskunnskap boka legger til) | ¬Cat(x) ∨ Animal(x) |
| ¬G | ¬Kills(Curiosity,Tuna) | samme |

B: steg 2 gir ∀x ¬[∃z Animal(z) ∧ Kills(x,z)] ∨ [∀y ¬Loves(y,x)], steg 3 gir ∀x [∀z ¬Animal(z) ∨ ¬Kills(x,z)] ∨ [∀y ¬Loves(y,x)]. Ingen ∃ igjen, altså ingen Skolem.

#### Resolusjonsbeviset (AIMA Fig. 9.11, L7)

| Steg | Par | Literaler som kanselleres | θ | Resolvent |
|---|---|---|---|---|
| 1 | F, E | ¬Cat(x) / Cat(Tuna) | {x/Tuna} | Animal(Tuna) |
| 2 | D, ¬G | Kills(Curiosity,Tuna) / ¬Kills(Curiosity,Tuna) | {} | Kills(Jack,Tuna) |
| 3 | A2, C (C med u for x) | ¬Loves(x,F(x)) / Loves(Jack,u) | {x/Jack, u/F(Jack)} | ¬Animal(F(Jack)) ∨ Loves(G(Jack),Jack) |
| 4 | B, 1 | ¬Animal(z) / Animal(Tuna) | {z/Tuna} | ¬Loves(y,x) ∨ ¬Kills(x,Tuna) |
| 5 | 4, 2 | ¬Kills(x,Tuna) / Kills(Jack,Tuna) | {x/Jack} | ¬Loves(y,Jack) |
| 6 | A1, 3 | Animal(F(x)) / ¬Animal(F(Jack)) | {x/Jack} | Loves(G(Jack),Jack) ∨ Loves(G(Jack),Jack) → factoring → Loves(G(Jack),Jack) |
| 7 | 5, 6 | ¬Loves(y,Jack) / Loves(G(Jack),Jack) | {y/G(Jack)} | □ |

Steg 3 viser hvorfor du standardiserer: uten nytt navn i C må x være både Jack og F(Jack), og UNIFY(Loves(x,F(x)), Loves(Jack,x)) feiler. Fem av sju steg (1, 2, 4, 5, 7) bruker en enhetsklausul.

På norsk: var det ikke Curiosity, var det Jack (2). Tuna er et dyr (1), så den som drepte Tuna, er ikke elsket av noen (4, 5). Men Jack elsker alle dyr, så noen elsker ham (3, 6). Motsigelse (7).

*Answer extraction (bare i boka, 9.5.3).* Spør du «hvem drepte katten?», negerer du ∃w Kills(w,Tuna) og får ¬Kills(w,Tuna). Steg 2 blir da D + ¬Kills(w,Tuna) med θ = {w/Curiosity}, og svaret står i bindingen. Boka advarer om at resolution kan gi ikke-konstruktive bevis: du vet at målet er sant, men variabelen har ingen entydig binding.

#### Hestehodet (L13)

KB: ∀x Horse(x) ⇒ Animal(x). Mål: ∀x [∃y HeadOf(x,y) ∧ Horse(y)] ⇒ [∃z HeadOf(x,z) ∧ Animal(z)].

| Steg | Linje |
|---|---|
| negér | ¬(∀x [∃y HeadOf(x,y) ∧ Horse(y)] ⇒ [∃z HeadOf(x,z) ∧ Animal(z)]) |
| 2 | ¬∀x (¬[∃y HeadOf(x,y) ∧ Horse(y)] ∨ [∃z HeadOf(x,z) ∧ Animal(z)]) |
| 3 | ∃x [∃y HeadOf(x,y) ∧ Horse(y)] ∧ [∀z ¬HeadOf(x,z) ∨ ¬Animal(z)] |
| 4 | ingen endring |
| 5 | HeadOf(C1,C2) ∧ Horse(C2) ∧ [∀z ¬HeadOf(C1,z) ∨ ¬Animal(z)] |
| 6 | HeadOf(C1,C2) ∧ Horse(C2) ∧ [¬HeadOf(C1,z) ∨ ¬Animal(z)] |

Etter negasjonen står x og y ytterst, så de blir konstanter C1 og C2. Bare z er ∀.

| Nr | Klausul | Begrunnelse |
|---|---|---|
| 1 | ∀x Horse(x) ⇒ Animal(x) | Assumption |
| 2 | ¬(mål) | Negated goal |
| 3 | ¬Horse(x) ∨ Animal(x) | CNF of 1 |
| 4 | HeadOf(C1,C2) | CNF of 2 |
| 5 | Horse(C2) | CNF of 2 |
| 6 | ¬HeadOf(C1,z) ∨ ¬Animal(z) | CNF of 2 |
| 7 | Animal(C2) | Resolve 3, 5, θ = {x/C2} |
| 8 | ¬HeadOf(C1,C2) | Resolve 6, 7, θ = {z/C2} |
| 9 | □ | Resolve 4, 8, θ = {} |

#### Fellen «negér før du dropper ∀» (illustrasjon, ikke fra kurset)

KB = {P(A)}, mål ∀x P(x). Målet følger ikke. Dropper du ∀ først og negerer etterpå, får du ¬P(x), og P(A) + ¬P(x) med θ = {x/A} gir □: et falskt bevis. Riktig: ¬∀x P(x) → ∃x ¬P(x) → ¬P(C1). UNIFY(P(A), P(C1)) = failure, og det finnes ingen motsigelse.

#### Eksamen 2025 Q9 (5 p): GMP

∀x,y,z Loves(x,z) ∧ Loves(y,z) ⇒ Jealous(x,y), Loves(Alice,Bob), Loves(Carrie,Bob). UNIFY gir θ = {x/Alice, z/Bob, y/Carrie}, og SUBST(θ, Jealous(x,y)) = Jealous(Alice,Carrie). Vis både unification og substitusjon.

#### Eksamen 2025 Q10 (20 p): fullt bevis i fasitformat

| Nr | Klausul | Begrunnelse |
|---|---|---|
| 1 | ∃x Vase(x) ∧ IsOn(x,KitchenTable) | Assumption |
| 2 | ∀x Vase(x) ⇒ [∃y Flower(y) ∧ IsIn(y,x)] | Assumption |
| 3 | ∀x,y,z IsOn(y,x) ∧ IsIn(z,y) ⇒ IsOn(z,x) | Assumption |
| 4 | ¬[∃x Flower(x) ∧ IsOn(x,KitchenTable)] | Negated goal |
| 5 | Vase(C1) | CNF of 1 |
| 6 | IsOn(C1,KitchenTable) | CNF of 1 |
| 7 | ¬Vase(x) ∨ Flower(F(x)) | CNF of 2 |
| 8 | ¬Vase(x) ∨ IsIn(F(x),x) | CNF of 2 |
| 9 | ¬IsOn(y,x) ∨ ¬IsIn(z,y) ∨ IsOn(z,x) | CNF of 3 |
| 10 | ¬Flower(x) ∨ ¬IsOn(x,KitchenTable) | CNF of 4 |
| 11 | Flower(F(C1)) | Resolve 5, 7, θ = {x/C1} |
| 12 | IsIn(F(C1),C1) | Resolve 5, 8, θ = {x/C1} |
| 13 | ¬IsIn(z,C1) ∨ IsOn(z,KitchenTable) | Resolve 6, 9, θ = {y/C1, x/KitchenTable} |
| 14 | ¬Flower(z) ∨ ¬IsIn(z,C1) | Resolve 10, 13, θ = {x/z} |
| 15 | ¬Flower(F(C1)) | Resolve 12, 14, θ = {z/F(C1)} |
| 16 | □ | Resolve 11, 15, θ = {} |

I setning 2 står ∃y inne i ∀x: blomsten avhenger av vasen, så y blir F(x), ikke en konstant. Fasiten gir variabelen i linje 13 navnet x og skriver θ = {} i linje 14. Det er det samme beviset med andre variabelnavn.

#### Unification-eksempler

| p | q | UNIFY |
|---|---|---|
| Knows(John,x) | Knows(y,Mother(y)) | {y/John, x/Mother(John)} |
| Knows(John,x) | Knows(y,z) | {y/John, x/z} (MGU) |
| Knows(John,x) | Knows(x,Elizabeth) | failure |
| Knows(John,x) | Knows(x17,Elizabeth) | {x/Elizabeth, x17/John} |
| S(x) | S(S(x)) | failure (occur check, bare i boka) |
| Loves(x,F(x)) | Loves(Jack,x) | failure |
| Loves(x,F(x)) | Loves(Jack,u) | {x/Jack, u/F(Jack)} |
| F(x, F(u,x)) | F(F(y,A), F(z,F(B,z))) | {x/F(y,A), u/z, y/B, z/A}, helt ut {x/F(B,A), u/A, y/B, z/A} (2024 Q17) |

#### Likhet

- Demodulation: Father(Father(x)) = PaternalGrandfather(x) og Birthdate(Father(Father(Bella)),1926). θ = {x/Bella} gir Birthdate(PaternalGrandfather(Bella),1926).
- Paramodulation: P(F(x,B),x) ∨ Q(x) og F(A,y) = y ∨ R(y). θ = {x/A, y/B} gir P(B,A) ∨ Q(A) ∨ R(B).

### Eksamensfeller

1. **∀ med ∧, ∃ med ⇒.** ∀x Cat(x) ∧ Animal(x) sier at alt er katter. Skriv ∀x Cat(x) ⇒ Animal(x) og ∃x Cat(x) ∧ … .
2. **Skolem-konstant der det skal være funksjon.** ∃ inne i ∀x gir F(x). Flower(C2) i 2025 Q10 er feil, Flower(F(x)) er riktig. Har ∃ flere omsluttende ∀, får funksjonen alle som argumenter: ∀x ∃y ∀z ∃w … gir F(x) og G(x,z).
3. **Skolemisering før ¬ er flyttet inn.** En ∃ foran en pil eller under en negasjon kan bli en ∀.
4. **Glemt standardisering.** Uten nye navn kan UNIFY feile (Loves(x,F(x)) mot Loves(Jack,x)) eller binde for mye.
5. **Glemt å negere målet, eller negert for sent.** Negér hele målet med kvantorene, flytt ¬ inn, og skolemiser til slutt. 2022-fasiten dropper ∀ før den negerer. Det gir riktig svar der, men metoden kan gi falske bevis (se fellen over).
6. **Steg uten θ.** Fasiten vil ha de to setningene, θ og resultatet for hvert steg (2025 Q10, 2019 «Show each and every unification»).
7. **Ufullstendig CNF.** Distribusjonen (steg 7) må med. 2021-fasiten stopper før steg 7, men oppgaven ber om CNF.
8. **Feil skolemisering ved gjenbruk av samme navn.** Samme ∃y får samme funksjon overalt. To ulike ∃ får ulike funksjoner (2024 Q16).

### Koblinger til andre kapitler

- → kap. 7 / E12: PL-resolution og CNF i fire steg. FOL legger til steg 4–6 og θ.
- → kap. 9.1–9.4 / E15: UI, EI (Skolem-konstant), unification og MGU, GMP (2025 Q9), semidecidability. Backward chaining er et spesialtilfelle av resolution med en bestemt kontrollstrategi (AIMA 9.5.3).
- → kap. 8 / E14: oversettelse fra norsk/engelsk til FOL, ∀ med ⇒ og ∃ med ∧. Uten riktig oversettelse hjelper ikke resolution.
- → kap. 5 og 7.5 (L5): CSP løst som satisfiability viser samme refutation-idé i PL.

### Ikke pensum her

- 9.5.4 Completeness of resolution (Herbrand-teoremet, completeness-beviset): på Canvas-listen over unntak (PENSUMOVERSIKT).
- 9.4.2–9.4.5 (logic programming og Prolog, redundant inference, constraint logic programming): unntatt i Canvas, hører til nabokapitlet.
- Bare i boka, ikke i forelesning (pensum gjennom boka, men lav prioritet): occur check (9.2.1), answer extraction (9.5.3), linear resolution (9.5.6) (PENSUMOVERSIKT-forelesninger, L7).

### Øv selv

1. Gjør om til CNF med L7s sju steg og skriv navnet på hvert steg: ∀x R(x) ⇒ [∀y R(y) ⇒ R(f(x,y))] ∧ ¬∀y [S(x,y) ⇒ P(y)]. (Eksamen 2021 oppgave 1.4, del av Logic 25 p.)
2. Skolemiser ∀x ∃y ∀z ∃w P(x,y,z,w). Hvilke argumenter får hver Skolem-funksjon, og hvorfor?
3. Finn MGU eller forklar hvorfor det feiler: (a) Loves(x,F(x)) og Loves(Jack,x), før og etter standardizing apart. (b) S(x) og S(S(x)). (c) F(x,F(u,x)) og F(F(y,A),F(z,F(B,z))). (Eksamen 2024 Q17, 5 p.)
4. Gitt ∀x,y Father(x,y) ⇒ ¬Woman(x), ∀x,y Mother(x,y) ⇒ Woman(x) og Mother(Sophie,April). Vis med resolution refutation at ¬Father(Sophie,Edgar). Første steg skal resolvere setning 1 og 2. (Eksamen 2021 oppgave 1.5.)
5. Fido er far til Snowy. Fido lever. Ens far er ens forelder og omvendt. Ens levende forelder er eldre enn en selv. Er noen eldre enn Snowy, og i så fall hvem? Nummerer CNF-setningene og bruk resolution refutation. (Eksamen 2023 oppgave 3.2, 10 p.)
6. Avgjør med resolution om {∀x P(x) ⇒ Q(x), ∀x ¬R(x) ⇒ ¬Q(x)} ⊨ ∀x ¬R(x) ⇒ ¬P(x). Gjør først alle tre om til CNF. (Eksamen 2022 oppgave 6.1–6.2.)

Flere gamle oppgaver:
- 2025 Q9 (5 p, GMP) og Q10 (20 p, FOL→CNF + resolution): løst i videoen.
- 2024 Q16 (5 p, skolemisering): quiz i videoen. Q17 (5 p, unification): quiz i videoen og oppgave 3c.
- 2019 oppgave 2 (15 p, 7-3-5): samme struktur som katteeksempelet med Sofie, CarAccident og Kismet. Krever CNF med alle steg, bakgrunnskunnskap (Cat ⇒ Animal) og hver unification.
- A4 oppgave 3 (FOL-oversettelse) og oppgave 4 (Resolution in FOL, K-pop-anbefaleren): Assignment 4, frivillig for arbeidskravet (A1–A3). Bruk samme fasitformat som Q10: nummererte klausuler, par, θ, resultat.

### Fasit

**Quizene i videoen.**
- Hva legger du til for å vise Kills(Curiosity,Tuna)? **B: ¬Kills(Curiosity,Tuna).** Du negerer målet.
- Trenger z i ∀x [∃z Animal(z) ∧ Kills(x,z)] ⇒ [∀y ¬Loves(y,x)] en Skolem-funksjon? **Nei.** Pila setter ¬ foran, og ¬∃z blir ∀z.
- 2024 Q16, riktig skolemisering av ∀x [∃y Animal(y) ∧ ¬Loves(x,y)] ∨ [∃z Loves(z,x)]: **D: ∀x Animal(F1(x)) ∧ ¬Loves(x,F1(x)) ∨ Loves(F2(x),x).** Samme y gir samme funksjon begge steder, og z får en ny. A bruker F1 også for z. B og C gir y to forskjellige funksjoner. (Skrivefeil i oppgaveteksten er rettet.)
- 2024 Q17: **A: x/F(y,A); u/z; y/B; z/A.**
- Katten, steg 5: par 4 og 2, **θ = {x/Jack}**, resultat ¬Loves(y,Jack).
- Hestehodet, linje 8: **linje 6 og 7, θ = {z/C2}**, resultat ¬HeadOf(C1,C2).
- 2025 Q10: se tabellen over.

**Øv selv 1** (2021 1.4).
- Steg 2: ∀x ¬R(x) ∨ [(∀y ¬R(y) ∨ R(f(x,y))) ∧ ¬∀y (¬S(x,y) ∨ P(y))].
- Steg 3: ∀x ¬R(x) ∨ [(∀y ¬R(y) ∨ R(f(x,y))) ∧ ∃y (S(x,y) ∧ ¬P(y))].
- Steg 4: den andre y-en får et nytt navn, for eksempel z: … ∃z (S(x,z) ∧ ¬P(z)).
- Steg 5: z står inne i ∀x, så z blir g(x): ∀x ¬R(x) ∨ [(∀y ¬R(y) ∨ R(f(x,y))) ∧ S(x,g(x)) ∧ ¬P(g(x))].
- Steg 6: ¬R(x) ∨ [(¬R(y) ∨ R(f(x,y))) ∧ S(x,g(x)) ∧ ¬P(g(x))].
- Steg 7: tre klausuler: **¬R(x) ∨ ¬R(y) ∨ R(f(x,y))**, **¬R(x) ∨ S(x,g(x))**, **¬R(x) ∨ ¬P(g(x))**.
- 2021-fasiten stopper før steg 7. Ta med distribusjonen.

**Øv selv 2.** **P(x, F(x), z, G(x,z)).** y står inne i ∀x og blir F(x). w står inne i både ∀x og ∀z og blir G(x,z).

**Øv selv 3.** (a) Uten nytt navn: failure, fordi x måtte vært både Jack og F(Jack). Med Loves(Jack,u): {x/Jack, u/F(Jack)}. (b) Failure, occur check: x kan ikke inneholde seg selv. (c) {x/F(y,A), u/z, y/B, z/A}, helt ut {x/F(B,A), u/A, y/B, z/A}.

**Øv selv 4** (2021 1.5). Klausuler: 1 ¬Father(x,y) ∨ ¬Woman(x), 2 ¬Mother(a,b) ∨ Woman(a) (standardisert), 3 Mother(Sophie,April), 4 Father(Sophie,Edgar) (negert mål).

| Nr | Resolvent | Begrunnelse |
|---|---|---|
| 5 | ¬Father(a,y) ∨ ¬Mother(a,b) | Resolve 1, 2, θ = {x/a} |
| 6 | ¬Father(Sophie,y) | Resolve 5, 3, θ = {a/Sophie, b/April} |
| 7 | □ | Resolve 6, 4, θ = {y/Edgar} |

Altså gjelder ¬Father(Sophie,Edgar).

**Øv selv 5** (2023 3.2). FOL: Father(Fido,Snowy), Alive(Fido), ∀x,y Parent(x,y) ⇔ Father(x,y), ∀x,y Parent(x,y) ∧ Alive(x) ⇒ Older(x,y). Spørsmål: ∃w Older(w,Snowy), negert ¬Older(w,Snowy).

| Nr | Klausul | Begrunnelse |
|---|---|---|
| 1 | Father(Fido,Snowy) | Assumption |
| 2 | Alive(Fido) | Assumption |
| 3a | ¬Parent(x,y) ∨ Father(x,y) | CNF av ⇔ (steg 1, 2) |
| 3b | ¬Father(x,y) ∨ Parent(x,y) | CNF av ⇔ |
| 4 | ¬Parent(x,y) ∨ ¬Alive(x) ∨ Older(x,y) | CNF |
| 5 | ¬Older(w,Snowy) | Negated goal |
| 6 | ¬Parent(x,Snowy) ∨ ¬Alive(x) | Resolve 5, 4, θ = {w/x, y/Snowy} |
| 7 | ¬Parent(Fido,Snowy) | Resolve 6, 2, θ = {x/Fido} |
| 8 | ¬Father(Fido,Snowy) | Resolve 7, 3b, θ = {x/Fido, y/Snowy} |
| 9 | □ | Resolve 8, 1, θ = {} |

Ja, noen er eldre enn Snowy. Følger du bindingene fra w, blir svaret **Fido**.

**Øv selv 6** (2022 6). CNF: 1 ¬P(x) ∨ Q(x), 2 R(x) ∨ ¬Q(x). Negert mål: ¬∀x [¬R(x) ⇒ ¬P(x)] → ∃x ¬(R(x) ∨ ¬P(x)) → ∃x ¬R(x) ∧ P(x) → 3 ¬R(C1), 4 P(C1).

| Nr | Resolvent | Begrunnelse |
|---|---|---|
| 5 | ¬Q(C1) | Resolve 3, 2, θ = {x/C1} |
| 6 | ¬P(C1) | Resolve 5, 1, θ = {x/C1} |
| 7 | □ | Resolve 6, 4, θ = {} |

Slutningen er gyldig. 2022-fasiten dropper ∀ før negasjonen og bruker ¬R(x), P(x). Svaret blir likt her, men negér først og skolemiser, slik det er gjort over.

---

<a id="e17"></a>

## E17 – Kunnskapsrepresentasjon: ontologier, hendelser og semantiske nett

> Pensum: Global 10.1–10.3 og 10.5 (US samme nummer); 10.3.2 kun bok; 10.2.3 ute etter Canvas · Forelesning: L12 · Øving: – · Eksamensvekt: ~2–5 %
> Video: `videoer/e17-kunnskapsrepresentasjon/out/tdt4136-e17-kunnskapsrepresentasjon.mp4` (13:57)

### Kapitler i videoen

- 0:00 – Intro
- 0:38 – Ontologi og kategorier
- 3:19 – Deler, mål og stoff
- 4:59 – Hendelser
- 7:01 – Tid og fluents
- 8:38 – Semantiske nett
- 10:28 – Description logics
- 12:13 – Eksamen
- 12:58 – Koblinger og oppsummering

### Kjerneideer

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

### Algoritmer og håndsporing

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

### Eksamensfeller

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

### Koblinger til andre kapitler

- ← kap. 8 / E14: kategorier, hendelser og intervaller er bare objekter og predikater i FOL. Vokabularsteget i knowledge engineering er en ontologi.
- → kap. 9 / E15, E16: arv og persistens er slutninger (GMP, forward chaining, resolution). Semantiske nett bruker arv som hovedmekanisme (2015 MC).
- → kap. 11 / E18: PDDL bruker også fluents, men tiden ligger implisitt i rekkefølgen av tilstander, og action schemas løser frame-problemet. Event calculus gjør tid og hendelser til eksplisitte objekter og tåler hendelser som tar tid og overlapper.
- → kap. 24 / E20 (Global 24.1.5, US 23.1.5): WordNet er en taksonomi av ord, for eksempel «kitten IS A: young_mammal».
- ← kap. 2 / E01 (2.4.7): atomic, factored og structured representation. Kap. 10 er structured: objekter med relasjoner.

### Ikke pensum her

- 10.4 Mental objects and modal logic: UT (Canvas og L12-leselisten, «Not in the exam»).
- 10.6 Reasoning with default information (circumscription, default logic, truth maintenance): UT etter samme kilder. Defaults i semantiske nett (10.5.1) er likevel pensum.
- 10.2.3 Things og stuff: **UT** (Canvas). L12-leselisten sier bare «§10.2», og delen ble ikke forelest. Den er tatt kort med i videoen og notatet som bakgrunn.
- 10.3.2 Fluents og objekter er pensum, men kun bok (ikke forelest).

### Øv selv

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

### Fasit

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

---

<a id="e18"></a>

## E18 – Planlegging 1: PDDL, forward og backward search

> Pensum: Global 11.1–11.3 (US samme nummer), uten 11.1.2, 11.1.3, 11.2.3, 11.2.4, 11.3.1, 11.3.2 · Forelesning: L11 · Øving: – · Eksamensvekt: ~5 %
> Video: `videoer/e18-planlegging-1/out/tdt4136-e18-planlegging-1.mp4` (13:13)

### Kapitler i videoen

- 0:00 – Intro
- 0:39 – Fra svart boks til fakta
- 2:07 – Handlinger og RESULT
- 3:42 – Air cargo steg for steg
- 4:58 – Søk forover
- 5:45 – Søk bakover
- 7:45 – Heuristikker
- 10:06 – Eksamen 2023 oppg. 8
- 12:00 – Koblinger og oppsummering

### Kjerneideer

**Hvorfor klassisk planlegging?** I kap. 3 var en tilstand *atomic*: søket kjente bare navnet s₁₇, og du måtte lage h selv for hvert problem. Planlegging bruker en *factored representation*: en tilstand er et sett med fakta. Da ser planleggeren selv hvilke mållitteraler som mangler, og kan lage en domeneuavhengig heuristikk. Klassisk planlegging antar at miljøet er **discrete** (ett steg om gangen), **deterministic** (ett kjent utfall), **static** (bare agenten endrer verden) og **fully observable**. Ryker en av antagelsene, er du i kap. 11.5 (E19).

**Tilstand i PDDL.** En tilstand er en konjunksjon av *fluents*, fakta som kan endre seg. Hvert fluent er *ground* og *atomic*: ett predikat med bare konstanter som argumenter, for eksempel `At(P1, SFO)`. To regler følger av dette:

- *Closed world assumption* (database semantics, E14): alt som ikke står i tilstanden, er usant. Derfor trengs aldri negasjon i en tilstand.
- *Unique names assumption*: P1 og P2 er to ulike fly.

I en tilstand er derfor **variabler, negasjon og funksjoner forbudt**: `At(x, y)`, `¬Poor` og `At(Spouse(Ali), Sydney)` er ikke tilstander.

**Mål.** Et mål er som en precondition: en konjunksjon av literaler der *variabler og negative literaler er lov*. En tilstand s oppfyller målet når hvert positivt literal står i s og ingen av de negerte gjør det.

**Action schema.** En handling skrives som et skjema med navn og parameterliste, `PRECOND` (hva som må være sant før) og `EFFECT` (hva som endrer seg). Setter du inn konstanter for alle variablene, får du en *ground action*. Krav: hver variabel i EFFECT må også stå i PRECOND og i parameterlista. PDDL har verken ∀ eller ∨, bare konjunksjoner av literaler.

**Applicable.** En ground action a er applicable i s når alle positive literaler i PRECOND(a) står i s og ingen negerte gjør det.

**RESULT.** EFFECT deles i *delete list* DEL(a) (de negative literalene) og *add list* ADD(a) (de positive):

  RESULT(s, a) = (s − DEL(a)) ∪ ADD(a)

Alt annet i s blir stående. Derfor skriver en handling aldri «ikke» inn i tilstanden: den sletter.

**Air cargo (Fig. 11.1).** Last i et fly står *ikke* på noen flyplass: `Load` sletter `At(c, a)` og legger til `In(c, p)`. PDDL har ingen regel om at lasten følger flyet, så `At` betyr «klar til bruk her».

| Skjema | PRECOND | EFFECT |
|---|---|---|
| Load(c, p, a) | At(c, a) ∧ At(p, a) ∧ Cargo(c) ∧ Plane(p) ∧ Airport(a) | ¬At(c, a) ∧ In(c, p) |
| Unload(c, p, a) | In(c, p) ∧ At(p, a) ∧ Cargo(c) ∧ Plane(p) ∧ Airport(a) | At(c, a) ∧ ¬In(c, p) |
| Fly(p, from, to) | At(p, from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to) | ¬At(p, from) ∧ At(p, to) |

Init: At(C1, SFO) ∧ At(C2, JFK) ∧ At(P1, SFO) ∧ At(P2, JFK) ∧ Cargo(C1) ∧ Cargo(C2) ∧ Plane(P1) ∧ Plane(P2) ∧ Airport(JFK) ∧ Airport(SFO). Goal: At(C1, JFK) ∧ At(C2, SFO).

**Forward search (progression, 11.2.1)** starter i initialtilstanden, ser på alle *applicable* ground actions og bruker RESULT. Tilstandene er ground. Alt fra kap. 3 virker (BFS, greedy, A*), men forgreningen er enorm.

**Backward search (regression, 11.2.2)** starter i målet og ser bare på *relevante* handlinger. En handling er relevant for g når

1. en effekt gir en del av målet (unifiserer med et mållitteral), og
2. ingen effekt opphever en annen del av målet: a sletter ikke et positivt mållitteral og legger ikke til et negativt. Eldre utgaver og noen fasiter kaller dette kravet *consistent*.

Forelesningens eksempel (L11 s. 17): mål ¬Poor ∧ Famous. Effekten `Famous` er relevant. Effekten `Poor ∧ Famous` er ikke relevant: var den siste steg, ville Poor vært sant til slutt.

Regresjonen gir målet g′ som må ha holdt før a:

  POS(g′) = (POS(g) − ADD(a)) ∪ POS(PRECOND(a))
  NEG(g′) = (NEG(g) − DEL(a)) ∪ NEG(PRECOND(a))

Det a gir, trenger ikke være sant før, så du trekker ADD fra de positive målene og DEL fra de negative. Preconditions må ha holdt, så du legger dem til. Kortformen g′ = (g − ADD(a)) ∪ PRECOND(a) gjelder bare når målet og preconditions er positive. Bakover kan målet få variabler: regresjon av At(C2, SFO) over Unload gir et fly p′ som ikke er bundet. Navnet p′ er *standardizing apart* (E15). Bakover blir forgreningen ofte lav, men det er vanskeligere å lage gode heuristikker for mål med variabler. Derfor søker de fleste planleggere forover (L11 s. 19).

**Heuristikker (11.3).** Fra E03: en *relaxed problem* fjerner regler, så grafen får flere kanter. Alt som var lov, er fortsatt lov, så den optimale løsningen kan bare bli kortere. Eksakt optimal kost i det relakserte problemet er derfor **admissible**. I PDDL kan planleggeren fjerne regler rett i skjemaet:

- **Ignore preconditions:** hver handling kan brukes i hver tilstand. Da nås hvert mållitteral med ett steg, og tallet på manglende mål er et anslag. Det er bare nesten riktig: én handling kan gi to mål, og da teller du for høyt, og én handling kan oppheve en annens effekt. Boka tar hensyn til det første og ser bort fra det andre: fjern også alle effekter unntatt mållitteralene, og tell minste antall handlinger som til sammen dekker målet. Det er *set cover* (kun bok, ikke forelest): NP-hard. Greedy (største først) kommer innenfor en faktor log n av optimum, men mister admissibility.
- **Ignore delete lists:** anta at mål og preconditions bare har positive literaler (L11 s. 23), og fjern alle negative effekter. Ingen handling kan da ødelegge fremgang, og flyet står etter Fly på begge flyplassene. Optimal lengde er fortsatt NP-hard, men hill climbing finner en god relaksert plan i polynomisk tid. Landskapet har ingen lokale minima og ingen blindveier (Fig. 11.6, L11 s. 24). Bare den *optimale* relakserte planen gir admissible h; en tilnærming kan bli for lang.
- Kun bok (11.3): fjerner du `Blank(s2)` fra Slide i 8-puzzle, får du Manhattan-distansen.

Dominance (E03): ligger en consistent h₂ minst like høyt som h₁ i *alle* tilstander, ekspanderer A* med h₂ ikke flere noder enn med h₁, bortsett fra tie-break ved f = C*. Ett tall i starttilstanden avgjør ikke dette.

### Algoritmer og håndsporing

**Kortform**

```
RESULT(s, a)   = (s − DEL(a)) ∪ ADD(a)          krever: a applicable i s
FORWARD(s0, g): søk fra s0; barn = RESULT(s, a) for alle applicable a; stopp når s ⊨ g
RELEVANT(g, a): ADD(a) ∩ POS(g) ≠ ∅ (eller DEL(a) ∩ NEG(g) ≠ ∅)
                og DEL(a) ∩ POS(g) = ∅ og ADD(a) ∩ NEG(g) = ∅
REGRESS(g, a): POS(g′) = (POS(g) − ADD(a)) ∪ POS(PRECOND(a))
               NEG(g′) = (NEG(g) − DEL(a)) ∪ NEG(PRECOND(a))   (kortform (g − ADD(a)) ∪ PRECOND(a) bare for positive mål)
BACKWARD(g, s0): søk fra g; barn = REGRESS(g, a) for relevante a; stopp når g ⊆ s0
```

| | forover | bakover |
|---|---|---|
| ser på | applicable actions | relevant actions |
| tilstander | ground | kan ha variabler |
| forgrening | høy | ofte lav |
| gode heuristikker | lettere | vanskeligere |

**Air cargo, planen steg for steg** (bare de dynamiske fluents; Cargo, Plane og Airport endres aldri)

| steg | handling | DEL | ADD | s etterpå |
|---|---|---|---|---|
| 0 | – | – | – | At(C1, SFO), At(C2, JFK), At(P1, SFO), At(P2, JFK) |
| 1 | Load(C1, P1, SFO) | At(C1, SFO) | In(C1, P1) | In(C1, P1), At(C2, JFK), At(P1, SFO), At(P2, JFK) |
| 2 | Fly(P1, SFO, JFK) | At(P1, SFO) | At(P1, JFK) | In(C1, P1), At(C2, JFK), At(P1, JFK), At(P2, JFK) |
| 3 | Unload(C1, P1, JFK) | In(C1, P1) | At(C1, JFK) | At(C1, JFK), At(C2, JFK), At(P1, JFK), At(P2, JFK) |
| 4 | Load(C2, P2, JFK) | At(C2, JFK) | In(C2, P2) | At(C1, JFK), In(C2, P2), At(P1, JFK), At(P2, JFK) |
| 5 | Fly(P2, JFK, SFO) | At(P2, JFK) | At(P2, SFO) | At(C1, JFK), In(C2, P2), At(P1, JFK), At(P2, SFO) |
| 6 | Unload(C2, P2, SFO) | In(C2, P2) | At(C2, SFO) | At(C1, JFK), At(C2, SFO), At(P1, JFK), At(P2, SFO) |

Begge mållitteralene holder etter steg 6; flyene kan stå hvor som helst. Korteste plan har 6 steg (sjekket med BFS i `verifiser.py`). Etter steg 3 er også Load(C2, P1, JFK) applicable, så P1 kan ta C2 med tilbake: Load(C2, P1, JFK), Fly(P1, JFK, SFO), Unload(C2, P1, SFO), også 6 steg.

**Forward search, størrelse (11.2.1, L11 s. 16)**: 10 flyplasser med 5 fly og 20 laster på hver.

| størrelse | verdi | hvorfor |
|---|---|---|
| handlinger, minst | 450 | bare Fly: 50 fly × 9 andre flyplasser |
| handlinger, mest | 10 450 | alt på én flyplass: + 200 laster × 50 fly å laste i |
| snitt (bokas anslag) | ≈ 2 000 | |
| planlengde | 41 | 20 Load + 1 Fly + 20 Unload (bokas tall) |
| noder i treet | 2000⁴¹ ≈ 2 × 10¹³⁵ | et tall med 136 sifre |

**Regresjon, Fig. 11.5b (L11 s. 18)**: g = At(P1, B) ∧ At(P2, B), a = Fly(P1, A, B).

| | |
|---|---|
| ADD(a) ∩ g | {At(P1, B)}: gir en del av målet |
| DEL(a) ∩ g | ∅: sletter ingenting i målet → relevant |
| g − ADD(a) | At(P2, B) |
| ∪ PRECOND(a) | At(P1, A) ∧ Plane(P1) ∧ Airport(A) ∧ Airport(B) |
| g′ | At(P2, B) ∧ At(P1, A) ∧ Plane(P1) ∧ Airport(A) ∧ Airport(B) |

**Regresjon med variabel**: g = At(C2, SFO), a = Unload(C2, p′, SFO) gir g′ = In(C2, p′) ∧ At(p′, SFO) ∧ Cargo(C2) ∧ Plane(p′) ∧ Airport(SFO).

**Heuristikkene på air cargo fra starttilstanden**

| heuristikk | h | merknad |
|---|---|---|
| ignore preconditions (tell manglende mål) | 2 | At(C1, JFK) og At(C2, SFO) mangler |
| ignore delete lists, optimal | 5 | Load(C1, P1, SFO), Fly(P1, SFO, JFK), Unload(C1, P1, JFK), Load(C2, P1, JFK), Unload(C2, P1, SFO) |
| ekte kost h* | 6 | |

Den relakserte planen virker bare fordi At(P1, SFO) aldri ble slettet; i det ekte problemet feiler Unload(C2, P1, SFO). Begge h ≤ h*, og ignore delete lists ligger nærmest.

**Set cover (ILLUSTRASJON, tall laget for eksempelet)**: mål g1–g6; a1 gir {g1, g2, g4, g5}, a2 gir {g1, g2, g3}, a3 gir {g4, g5, g6}. Optimalt: a2 + a3 = 2. Greedy tar største først: a1, og trenger så a2 og a3 = 3 > 2. Greedy er ikke admissible.

**Eksamen 2023 oppg. 8, regresjon steg for steg** (skjemaene står under Fasit)

| | handling (siste først) | ADD | g før handlingen |
|---|---|---|---|
| g₀ | – | – | At(User, Home) ∧ Owns(User, Toy) |
| g₁ | DriveCar(ToyStore, Home, Car) | At(User, Home), At(Car, Home) | Owns(User, Toy) ∧ Owns(User, Car) ∧ At(User, ToyStore) ∧ At(Car, ToyStore) ∧ Place(Home) |
| g₂ | Buy(Toy, ToyStore) | Owns(User, Toy) | Owns(User, Car) ∧ At(User, ToyStore) ∧ At(Car, ToyStore) ∧ Place(Home) ∧ At(Toy, ToyStore) |
| g₃ | DriveCar(Home, ToyStore, Car) | At(User, ToyStore), At(Car, ToyStore) | Owns(User, Car) ∧ Place(Home) ∧ At(Toy, ToyStore) ∧ At(User, Home) ∧ At(Car, Home) ∧ Place(ToyStore) |

g₃ ⊆ Init, så søket stopper. Planen er rekkefølgen snudd: DriveCar(Home, ToyStore, Car), Buy(Toy, ToyStore), DriveCar(ToyStore, Home, Car). TakeBus(ToyStore, Home) er også relevant i første steg (gir At(User, Home)) og gir en annen gren.

### Eksamensfeller

- **Negasjon i tilstanden.** «P1 er i JFK og ikke i SFO» skrives `At(P1, JFK)`. Closed world gjør resten.
- **Glemt delete list.** Uten `¬At(p, from)` står flyet to steder etter Fly.
- **Effektvariabel som ikke står i PRECOND.** Hver variabel i EFFECT må stå i PRECOND og i parameterlista. Fasiten til 2023 oppg. 8 bryter regelen selv: `TakeBus(from, to)` bruker `user`, som ikke er parameter, og `to` står bare i EFFECT. Bruk konstanten `User` og legg til `Place(to)` i PRECOND. Det samme gjelder `Go(from, to)` i fasiten til 2022 oppg. 7.
- **∀ og ∨.** PDDL har bare konjunksjoner av literaler.
- **Mål og tilstand blandes.** I et mål er variabler og negasjon lov; i en tilstand er de forbudt.
- **Regresjon:** glem ikke å trekke fra ADD, behold resten av målet, og legg til PRECOND, ikke EFFECT.
- **Relevant, men sletter et mållitteral** (`Poor ∧ Famous` for målet ¬Poor ∧ Famous): ikke relevant.
- **Last i fly står ikke på flyplassen.** In(c, p) erstatter At(c, a).
- **«Ignore delete lists er admissible»** gjelder bare den *optimale* relakserte planen. Hill climbing gir en tilnærming som kan bli for lang.
- **Å telle manglende mål** kan bli for høyt når én handling gir flere mål. Set cover over mållitteralene retter det, men ser bort fra at handlinger kan oppheve hverandre. Greedy set cover er ikke admissible.
- **Fasiten vil ha tilstanden før og etter hvert steg** når oppgaven ber om det (2022 oppg. 7.2, 2023 oppg. 8). Skriv kjeden g₀, g₁, … som tabellen over.
- 2024 Q18 (flervalg om planlegging): bare fasiten finnes i kildene, ikke spørsmålsteksten. Den nevner `Move(Disk1, TowerA, TowerC)` og setningen «We cannot have negated literals nor instantiations in PDDL». Uten spørsmålet er det uklart hva fasiten mener, så ikke lær setningen som regel: negative literaler er lov i mål, PRECOND og EFFECT, bare ikke i en tilstand, og en ground action er nettopp et instansiert skjema.

### Koblinger til andre kapitler

- → kap. 2 / E01: factored representation og miljøtypene bak de fire antagelsene.
- → kap. 3 / E02, E03: forward search er vanlig tilstandsromsøk; relaxed problems gir admissible h; dominance avgjør hvilken h som er best.
- → kap. 8 / E14: fluents ligner førsteordens atomer, men med closed world og unique names (database semantics).
- → kap. 9 / E15: unification finner applicable og relevante handlinger; p′ er standardizing apart.
- → kap. 4 / E05 → E19: belief states. Sensorless planning bruker samme RESULT på mengder: b′ = (b − DEL) ∪ ADD. E19 tar HLA, hierarkisk, sensorless, contingent og online planning.

### Ikke pensum her

- 11.1.2 spare tire: Canvas-eksklusjon, L11 s. 45.
- 11.1.3 blocks world: Canvas-eksklusjon, L11 s. 45.
- 11.2.3 SATPlan (planning as Boolean satisfiability): Canvas, L11 s. 14 («not in the exam»).
- 11.2.4 GraphPlan og partial-order planning: Canvas, L11 s. 45, Canvas-FAQ («GraphPlan … no longer in the current syllabus»).
- 11.3.1 domain-independent pruning: Canvas, L11 s. 45.
- 11.3.2 state abstraction: Canvas, L11 s. 21 («not in the exam»).
- Kun bok, ikke forelest, men pensum: set cover og greedy-tilnærmingen, Manhattan fra Slide-skjemaet (begge i 11.3).

### Øv selv

1. Eksamen 2023 oppg. 8 (5 p): En bruker er hjemme, eier en bil og vil ha en leke fra lekebutikken. Handlinger: ta buss, kjøre egen bil, kjøpe. a) Skriv Init, Goal og action schemas i PDDL (2 %). b) Løs med backward search: vis tre steg og tilstanden før og etter hvert steg (3 %).
2. Eksamen 2022 oppg. 7.1–7.2: Ape og bananer. Apen er i A, bananene i B (høyt), kassen i C. Handlinger: Go, Push, ClimbUp, ClimbDown, Grasp, Ungrasp. a) Skriv problemet i PDDL. b) Løs med regresjon fra Have(Monkey, Bananas) og vis planen og målet etter hvert steg.
3. Eksamen 2022 oppg. 1.8: Hvorfor er ignore-delete-lists-heuristikken admissible?
4. Eksamen 2021 oppg. 4b (bare første kulepunkt, resten er POP og ute): Du skal ta på to ringer og så to hansker. Skriv action schemas for RightRing, LeftRing, RightGlove og LeftGlove i PDDL.
5. Eksamen 2025 oppg. 11b, klassisk del (resten er E19): Hvilke antagelser gjør klassisk planlegging om miljøet?
6. Air cargo: g = At(P1, JFK) ∧ At(P2, SFO). Er Fly(P1, SFO, JFK) relevant? Er Fly(P2, SFO, JFK) relevant? Regresser over den som er relevant.

### Fasit

**Quizene i videoen**

- Kap. 2 (gyldig PDDL): **C**. Det er et mål, og i et mål er variabler og negasjon lov. A har en variabel, B en negasjon og D en funksjon, og alle tre står som tilstander.
- Kap. 3 (Load(C2, P1, JFK) etter steg 3): **A, ja**. C2 og P1 står begge i JFK, og typene stemmer.
- Kap. 5 (regresjon over Unload(C1, P1, JFK)): **B**, At(C2, SFO) ∧ In(C1, P1) ∧ At(P1, JFK) ∧ Cargo(C1) ∧ Plane(P1) ∧ Airport(JFK). A glemmer å trekke fra ADD, C mister At(C2, SFO), D bruker effekten i stedet for PRECOND.
- Kap. 6 (hvorfor ignore delete lists er admissible): **B**. Med positive mål og preconditions virker hver ekte plan også uten slettinger, så den beste relakserte planen er aldri lengre enn den beste ekte.

**1. Eksamen 2023 oppg. 8**

```
Init(At(User, Home) ∧ Owns(User, Car) ∧ At(Car, Home) ∧ At(Toy, ToyStore) ∧ Place(Home) ∧ Place(ToyStore))
Goal(At(User, Home) ∧ Owns(User, Toy))
Action(TakeBus(from, to),
  PRECOND: At(User, from) ∧ Place(to)
  EFFECT:  ¬At(User, from) ∧ At(User, to))
Action(DriveCar(from, to, car),
  PRECOND: Owns(User, car) ∧ At(User, from) ∧ At(car, from) ∧ Place(to)
  EFFECT:  ¬At(User, from) ∧ ¬At(car, from) ∧ At(User, to) ∧ At(car, to))
Action(Buy(gift, store),
  PRECOND: At(User, store) ∧ At(gift, store)
  EFFECT:  Owns(User, gift))
```

Fasiten tar også med At(Car, Home) i målet; det gir de samme tre stegene. Regresjonen står i tabellen under «Algoritmer og håndsporing». Plan: DriveCar(Home, ToyStore, Car), Buy(Toy, ToyStore), DriveCar(ToyStore, Home, Car).

**2. Eksamen 2022 oppg. 7, ape og bananer** (skjemaene er sjekket i `verifiser.py`)

```
Init(At(Monkey, A) ∧ At(Bananas, B) ∧ At(Box, C) ∧ Height(Monkey, Low) ∧ Height(Box, Low) ∧ Height(Bananas, High)
     ∧ Pushable(Box) ∧ Climbable(Box) ∧ Place(A) ∧ Place(B) ∧ Place(C))
Goal(Have(Monkey, Bananas))
Action(Go(x, y),       PRECOND: At(Monkey, x) ∧ Height(Monkey, Low) ∧ Place(y)
                       EFFECT:  ¬At(Monkey, x) ∧ At(Monkey, y))
Action(Push(b, x, y),  PRECOND: At(Monkey, x) ∧ At(b, x) ∧ Pushable(b) ∧ Height(Monkey, Low) ∧ Place(y)
                       EFFECT:  ¬At(b, x) ∧ At(b, y) ∧ ¬At(Monkey, x) ∧ At(Monkey, y))
Action(ClimbUp(b, x),  PRECOND: At(Monkey, x) ∧ At(b, x) ∧ Climbable(b) ∧ Height(Monkey, Low)
                       EFFECT:  ¬Height(Monkey, Low) ∧ Height(Monkey, High) ∧ On(Monkey, b))
Action(ClimbDown(b),   PRECOND: On(Monkey, b) ∧ Height(Monkey, High)
                       EFFECT:  ¬On(Monkey, b) ∧ ¬Height(Monkey, High) ∧ Height(Monkey, Low))
Action(Grasp(o, x, h), PRECOND: At(Monkey, x) ∧ At(o, x) ∧ Height(Monkey, h) ∧ Height(o, h)
                       EFFECT:  Have(Monkey, o))
Action(Ungrasp(o),     PRECOND: Have(Monkey, o)
                       EFFECT:  ¬Have(Monkey, o))
```

| handling (siste først) | g før handlingen |
|---|---|
| Grasp(Bananas, B, High) | At(Monkey, B) ∧ At(Bananas, B) ∧ Height(Monkey, High) ∧ Height(Bananas, High) |
| ClimbUp(Box, B) | At(Monkey, B) ∧ At(Bananas, B) ∧ Height(Bananas, High) ∧ At(Box, B) ∧ Climbable(Box) ∧ Height(Monkey, Low) |
| Push(Box, C, B) | At(Bananas, B) ∧ Height(Bananas, High) ∧ Climbable(Box) ∧ Height(Monkey, Low) ∧ At(Monkey, C) ∧ At(Box, C) ∧ Pushable(Box) ∧ Place(B) |
| Go(A, C) | At(Bananas, B) ∧ Height(Bananas, High) ∧ Climbable(Box) ∧ Height(Monkey, Low) ∧ At(Box, C) ∧ Pushable(Box) ∧ Place(B) ∧ At(Monkey, A) ∧ Place(C) |

Siste mål ⊆ Init. Plan: Go(A, C), Push(Box, C, B), ClimbUp(Box, B), Grasp(Bananas, B, High). Den offisielle fasiten bruker Holding, Grab og Release, og lar apen slippe kassen før den klatrer. Den har to slurvefeil: Init mangler `At` foran (Box, C), og `to` i Go står bare i EFFECT. Følg reglene, ikke slurvet.

**3. Eksamen 2022 oppg. 1.8.** Med positive mål og preconditions (forutsetningen i L11 s. 23) kan ingen handling ødelegge fremgang uten delete lists, og hver ekte plan er fortsatt en gyldig plan i det relakserte problemet. Den korteste relakserte planen er derfor aldri lengre enn den korteste ekte, så den optimale lengden er admissible. Den optimale er NP-hard å finne; en tilnærming fra hill climbing er ikke garantert admissible.

**4. Eksamen 2021 oppg. 4b, skjemaene**

```
Action(RightRing,  PRECOND: –                          EFFECT: RightRingOn)
Action(LeftRing,   PRECOND: –                          EFFECT: LeftRingOn)
Action(RightGlove, PRECOND: RightRingOn ∧ LeftRingOn   EFFECT: RightGloveOn)
Action(LeftGlove,  PRECOND: RightRingOn ∧ LeftRingOn   EFFECT: LeftGloveOn)
Init(), Goal(RightRingOn ∧ LeftRingOn ∧ RightGloveOn ∧ LeftGloveOn)
```

Korteste plan har 4 steg: begge ringer, så begge hansker. Init er tom: ingen ring er på.

**5. Eksamen 2025 oppg. 11b, klassisk del.** Discrete, deterministic, static og fully observable. Tilstander er factored (sett med ground fluents) med closed world assumption. Sensorless-delen hører til E19.

**6. Air cargo.** Fly(P1, SFO, JFK) er relevant: den gir At(P1, JFK) og sletter At(P1, SFO), som ikke er i målet. Fly(P2, SFO, JFK) er ikke relevant: den gir ingenting i målet og sletter At(P2, SFO). g′ = At(P2, SFO) ∧ At(P1, SFO) ∧ Plane(P1) ∧ Airport(SFO) ∧ Airport(JFK).

---

<a id="e19"></a>

## E19 – Planlegging 2: hierarkier og en usikker verden

> Pensum: Global 11.4–11.5 og 11.7 (US samme nummer), uten 11.4.3 · Forelesning: L11 · Øving: – · Eksamensvekt: ~5 % (delt med E18)
> Video: `videoer/e19-planlegging-2/out/tdt4136-e19-planlegging-2.mp4` (11:56)

### Kapitler i videoen

- 0:00 – Intro
- 0:39 – Planlegging i lag
- 2:29 – Hierarkisk søk
- 4:16 – Uten sensorer
- 6:29 – Med sensorer
- 7:25 – Underveis
- 9:15 – Analyse av planlegging
- 9:50 – Eksamen 2025, oppgave 11
- 10:54 – Koblinger og oppsummering

### Kjerneideer

**Hvorfor planlegge i lag?** Boka bruker en ferie på Hawaii som eksempel. På nivået «fly fra San Francisco til Honolulu» trenger planen bare noen tusen handlinger. På nivået «bøy venstre kne fem grader» trenger den millioner eller milliarder. Et menneske planlegger derfor ovenfra: til flyplassen, HA 11 til Honolulu, ferie i to uker, HA 12 tilbake, hjem. Så brytes «til flyplassen» ned i velg tjeneste, bestill bil og kjør, og slik videre ned til knappetrykk. Dette heter **hierarchical decomposition**. Det samme mønsteret finnes i subrutiner og organisasjonskart. Gevinsten er at hvert nivå bare har noen få valg, så hvert søk blir lite.

**High-level action (HLA).** En HLA er en abstrakt handling som må brytes ned før den kan utføres, for eksempel `Go(Home, SFO)`. En **refinement** er én måte å bryte den ned på: en sekvens av handlinger, som selv kan være HLA-er eller primitive. Boka gir to:

```
Refinement(Go(Home, SFO), STEPS: [Drive(Home, SFOLongTermParking), Shuttle(SFOLongTermParking, SFO)])
Refinement(Go(Home, SFO), STEPS: [Taxi(Home, SFO)])
```

En **primitive action** har PRECOND og EFFECT som i E18 og kan utføres direkte. En refinement kan være rekursiv: `Navigate([a, b], [x, y])` tar ett steg og kaller seg selv, og når a = x og b = y er refinementen tom. Fra [1, 3] til [3, 2] gir dette for eksempel [Right, Right, Down] eller [Down, Right, Right].

**Implementation.** En refinement med bare primitive handlinger er en *implementation* av HLA-en. En høynivåplan [HLA₁, HLA₂, …] implementeres ved å sette en implementasjon av hver HLA etter hverandre. Refinements er kunnskap fra den som lager biblioteket. Planleggeren vurderer aldri «kjøp melk» når den skal til flyplassen, fordi ingen refinement nevner det. Planleggere bygd slik kalles HTN-planleggere (hierarchical task network).

**Minst én eller alle?** En høynivåplan når målet fra en tilstand hvis *minst én* av implementasjonene gjør det. Det er agenten selv som velger refinement. Ved ikke-deterministiske handlinger i kap. 4 velger naturen utfallet, og da må planen virke for *alle* utfall. Den forskjellen er videoens viktigste huskeregel.

**Hvorfor hjelper hierarkiet?** Anta at løsningen har d primitive handlinger. Et flatt søk med b valg per tilstand koster O(bᵈ). Anta så en helt regelmessig struktur der hver HLA har r refinements, hver med k handlinger på nivået under. Da er det log_k d nivåer under roten og 1 + k + … + k^(log_k d − 1) = (d − 1)/(k − 1) indre noder. Hver av dem har r valg, så det finnes r^((d−1)/(k−1)) mulige nedbrytingstrær. Liten r og stor k gir stor gevinst. Boka advarer selv: lange, gjenbrukbare handlingssekvenser er sjeldne i praksis.

**Planlegging når verden ikke adlyder (11.5).** Klassisk planlegging antar at miljøet er diskret, deterministisk, statisk og fullt observerbart. Boka gir tre svar når noe av dette ikke holder:

- **Sensorless** (conformant) planning: ingen observasjoner, én plan som virker i alle mulige tilstander.
- **Contingent** planning: delvis observerbart eller ikke-deterministisk, en plan med if–then-grener på percepts.
- **Online** planning: ukjent eller feil modell, agenten overvåker utførelsen og planlegger på nytt.

Eksempelet er malingsproblemet: en stol og et bord skal få samme farge, og det finnes to malingsbokser med ukjent farge.

```
Init(Object(Table) ∧ Object(Chair) ∧ Can(C1) ∧ Can(C2) ∧ InView(Table))
Goal(Color(Chair, c) ∧ Color(Table, c))
Action(RemoveLid(can), PRECOND: Can(can), EFFECT: Open(can))
Action(Paint(x, can), PRECOND: Object(x) ∧ Can(can) ∧ Color(can, c) ∧ Open(can), EFFECT: Color(x, c))
```

Variabelen c står ikke i parameterlista til Paint, fordi agenten kanskje ikke vet fargen. Det er et bevisst unntak fra E18-regelen.

**Sensorless planning.** Uten sensorer gjelder **open world**: et fluent som ikke står i belief staten, er *ukjent*, ikke usant. Klassisk planlegging bruker closed world, der det som ikke står, er usant. Agenten vet bare at alt har en farge, ∀x ∃c Color(x, c). Med en Skolem-funksjon blir det b₀ = Color(x, C(x)). En belief state er en formel, ikke en liste med tilstander. RESULT fra E18 gjelder nesten uendret:

  b′ = RESULT(b, a) = (b − DEL(a)) ∪ ADD(a)

Atomer i DEL blir usanne, atomer i ADD blir sanne, og resten står. Et ukjent literal som handlingen ikke rører, forblir ukjent og står ikke i b′. To ting skiller seg fra mengdeversjonen: b′ kan ikke inneholde både ℓ og ¬ℓ, og atomer kan inneholde variabler. Hele håndsporingen står under «Algoritmer og håndsporing».

**1-CNF er lukket under oppdatering.** Starter belief staten som en konjunksjon av literaler (1-CNF), gir hver PDDL-oppdatering igjen en konjunksjon av literaler. Med n fluents er formelen høyst O(n) lang, mens verden har 2ⁿ tilstander. Det er grunnen til at formler slår mengdene fra kap. 4.

**Conditional effects bryter 1-CNF.** Suck i støvsugerverdenen gjør rent der roboten står: `Action(Suck, EFFECT: when AtL: CleanL ∧ when AtR: CleanR)`. Brukt på True gir den (AtL ∧ CleanL) ∨ (AtR ∧ CleanR), som ikke er 1-CNF. I verste fall vokser formlene eksponentielt. To regler skal sitte:

- En usann **precondition** gjør handlingen inapplicable, og resultatet er udefinert.
- En **conditional effect** der betingelsen ikke holder, endrer ingenting.

For sensorless planning er en conditional effect bedre enn en handling som ikke kan brukes. Alternativet er å dele Suck i SuckL (PRECOND AtL) og SuckR (PRECOND AtR). Da holder 1-CNF seg, men agenten kan ikke vite om de er applicable i True. Boka foreslår en konservativ 1-CNF-tilnærming. Den er sound (gir aldri en gal plan), men incomplete.

**Contingent planning.** Med sensorer trenger PDDL **percept schemas**:

```
Percept(Color(x, c), PRECOND: Object(x) ∧ InView(x))
Percept(Color(can, c), PRECOND: Can(can) ∧ InView(can) ∧ Open(can))
Action(LookAt(x), PRECOND: InView(y) ∧ (x ≠ y), EFFECT: InView(x) ∧ ¬InView(y))
```

Et fullt observerbart miljø har et percept schema uten precondition for hvert fluent. Et sensorless miljø har ingen. Belief staten oppdateres i to steg. Først b̂ = (b − DEL(a)) ∪ ADD(a). Så legges percepten til, og har den bare ett percept schema, legges også dets PRECOND til. Har percepten flere mulige schemas, må disjunksjonen av preconditions legges til, og 1-CNF ryker igjen. Planene finnes med AND–OR-søk over belief states fra kap. 4. Agenten velger handling (OR-node), og percepten velger gren (AND-node). Variablene i grenbetingelsene er eksistensielt kvantifiserte.

**Online planning og execution monitoring.** Modellen kan være feil på seks måter: missing precondition (lokket krever skrutrekker), missing effect (maling på gulvet), missing fluent (hvor mye maling som er igjen), exogenous event (noen velter boksen), endret mål (stol og bord skal ikke være svarte) og en plan som bare sier REPLAN der den ikke dekker et tilfelle. Uten overvåking blir agenten skjør. Boka gir tre typer:

- **Action monitoring:** sjekk at preconditions for neste handling holder.
- **Plan monitoring:** sjekk at resten av planen fortsatt vil lykkes. Det vil si preconditions for hvert gjenværende steg, unntatt de som et annet gjenværende steg sørger for.
- **Goal monitoring:** sjekk om det finnes et bedre sett med mål.

**Replanning og plan repair (Fig. 11.12).** Agenten venter tilstand E, men observerer O. Den finner et punkt P på den opprinnelige planen og minimerer kostnaden av *repair* (O → P) pluss *continuation* (P → G). P kan være G. I malingseksempelet ser agenten at bordet og boks 1 er hvite og stolen svart. Den maler stolen, men stolen blir flekkete grå. Stolen har endret farge, men Paints preconditions holder fortsatt, så P er punktet før Paint, repair er tom og agenten maler igjen. Løkken kommer fra plan–execute–replan, ikke fra en løkke i planen.

**Action eller plan monitoring?** Boka bruker rød maling som bare rekker til stolen. Med action monitoring maler agenten stolen rød, oppdager ved bordet at boksen er tom, og planlegger på nytt, for eksempel begge grønne. Plan monitoring ser før første strøk at resten av planen ikke kan lykkes, og sparer det røde strøket. Plan monitoring fanger også **serendipity**: maler noen bordet rødt samtidig, er målet nådd og agenten kan gå hjem tidlig.

**Virker replanning?** Ikke alltid. En **dead end**, som et tomt batteri, kan ikke repareres. Uten blindveier, og når miljøet er *virkelig* ikke-deterministisk, slik at planen har en viss sjanse til å lykkes hver gang den prøves, når agenten målet til slutt. Med fast sjanse p > 0 per forsøk er sannsynligheten for bare feil etter k forsøk (1 − p)ᵏ → 0. Er feilen en **skjult precondition**, som en tom boks, hjelper det ikke å prøve det samme igjen. Velg en annen repair tilfeldig, for eksempel en annen boks, eller lær en bedre modell.

**Analyse av planlegging (11.7, kun bok, ikke forelest).** Planlegging forener søk og logikk: en planlegger søker etter en plan, eller beviser konstruktivt at den finnes. Kjernen er å kontrollere kombinatorisk eksplosjon, for n proposisjoner gir 2ⁿ tilstander. Uavhengige delproblemer gir i beste fall eksponentiell gevinst. **Negative interactions** mellom handlinger ødelegger den oppdelingen. Ingen metode vinner på alle problemer, så nyere systemer bruker **portfolio planning**: velg én algoritme per problem, kjør flere parallelt, eller flett dem etter en tidsplan.

### Algoritmer og håndsporing

**HIERARCHICAL-SEARCH (Fig. 11.8), kortform**

```
frontier ← FIFO-kø med [Act]
loop
  if frontier er tom: return failure
  plan ← POP(frontier)                      # den grunneste planen
  hla ← første HLA i plan, eller null
  prefix, suffix ← handlingene før og etter hla
  outcome ← RESULT(INITIAL, prefix)
  if hla = null:                            # planen er primitiv
    if IS-GOAL(outcome): return plan
  else for hver refinement i REFINEMENTS(hla, outcome):
    legg prefix + refinement + suffix bakerst i frontier
```

Søket er breddeførst over *refinements*, ikke over antall primitive steg.

**Håndsporing fra videoen.** Hierarkiet er laget for videoen etter bokas Hawaii-eksempel, og er *ILLUSTRASJON*. Act har én refinement, [Go(Home, SFO), Fly(SFO, HNL)]. Go har to refinements: [Drive, Shuttle] og [Taxi]. Drive krever bil. Start: At(Home), ingen bil. Mål: At(HNL). Sjekket i `verifiser.py`.

| Steg | POP | Første HLA | prefix | Hva skjer | Frontier etterpå |
|---|---|---|---|---|---|
| 0 | – | – | – | start | [Act] |
| 1 | [Act] | Act | [ ] | én refinement | [Go, Fly] |
| 2 | [Go, Fly] | Go | [ ] | to refinements, suffix = [Fly] | [Drive, Shuttle, Fly], [Taxi, Fly] |
| 3 | [Drive, Shuttle, Fly] | null | hele planen | primitiv, men Drive kan ikke utføres uten bil: forkastes | [Taxi, Fly] |
| 4 | [Taxi, Fly] | null | hele planen | outcome At(HNL), IS-GOAL sann: **return** | tom |

Med bil returneres [Drive, Shuttle, Fly] i steg 3, selv om taxiplanen har færre steg. Begge planene har to refinements bak seg, og Drive-planen står først i køen.

**Regnestykket for hierarkiet** (ILLUSTRASJON, d = 16, k = 4, b = r = 10, sjekket i `verifiser.py`)

| Størrelse | Verdi |
|---|---|
| nivåer under roten, log₄ 16 | 2 |
| indre noder, 1 + 4 | 5 = (16 − 1)/(4 − 1) |
| flatt søk, bᵈ | 10¹⁶ |
| HTN, r^((d−1)/(k−1)) | 10⁵ |

**Sensorless maling** (formlene er bokas. Antall verdener gjelder en illustrasjon med to farger, hvit og svart, for boks 1, boks 2, stol og bord. Sjekket i `verifiser.py`.)

| Steg | Handling | Belief state | Verdener | Målet sant i |
|---|---|---|---|---|
| b₀ | – | Color(x, C(x)) | 16 | 8 |
| b₁ | RemoveLid(Can1) | b₀ ∧ Open(Can1) | 16 | 8 |
| b₂ | Paint(Chair, Can1), θ = {x/Can1, c/C(Can1)} | b₁ ∧ Color(Chair, C(Can1)) | 8 | 4 |
| b₃ | Paint(Table, Can1) | b₂ ∧ Color(Table, C(Can1)) | 4 | 4 |

I b₃ er målet oppfylt med c = C(Can1). Agenten vet ikke hvilken farge det blir, bare at den er lik.

**Støvsugeren uten sensorer: mengde mot formel** (kap. 4, Fig. 4.9: 1 = (L, skitt, skitt), 2 = (R, skitt, skitt), 3 = (L, skitt, rent), 4 = (R, skitt, rent), 5 = (L, rent, skitt), 6 = (R, rent, skitt), 7 = (L, rent, rent), 8 = (R, rent, rent). Suck er her den gamle Suck som rengjør ruta roboten står i. Sjekket i `verifiser.py`.)

| Handling | Kap. 4: mengde | Kap. 11: formel (1-CNF) |
|---|---|---|
| – | {1, 2, 3, 4, 5, 6, 7, 8} | True |
| Right | {2, 4, 6, 8} | AtR |
| Suck | {4, 8} | AtR ∧ CleanR |
| Left | {3, 7} | AtL ∧ CleanR |
| Suck | {7} | AtL ∧ CleanR ∧ CleanL |

Formelen holder seg i 1-CNF fordi plasseringen er kjent hver gang Suck brukes. Suck rett på True gir {4, 5, 7, 8} = (AtL ∧ CleanL) ∨ (AtR ∧ CleanR), som ikke er 1-CNF.

**Betinget plan fra boka (11.5.2)**

```
[LookAt(Table), LookAt(Chair),
 if Color(Table, c) ∧ Color(Chair, c) then NoOp
 else [RemoveLid(Can1), LookAt(Can1), RemoveLid(Can2), LookAt(Can2),
       if Color(Table, c) ∧ Color(can, c) then Paint(Chair, can)
       else if Color(Chair, c) ∧ Color(can, c) then Paint(Table, can)
       else [Paint(Chair, Can1), Paint(Table, Can1)]]]
```

**Monitoring med rød maling** (bokas eksempel. Antallet strøk er ILLUSTRASJON, sjekket i `verifiser.py`.)

| Monitoring | Hva skjer | Strøk |
|---|---|---|
| Action monitoring | stol rød → ved bordet: boksen er tom → REPLAN → stol grønn, bord grønn | 3, det røde er bortkastet |
| Plan monitoring | ser før start: trenger rød til 2, har til 1 → REPLAN → stol grønn, bord grønn | 2 |

**Seks grunner til å planlegge på nytt**

| Grunn | Eksempel fra boka |
|---|---|
| missing precondition | lokket krever skrutrekker |
| missing effect | maling havner på gulvet |
| missing fluent | mengden maling i boksen |
| exogenous event | noen velter boksen |
| endret mål | stol og bord skal ikke være svarte |
| ufullstendig plan | grenen sier REPLAN |

### Eksamensfeller

- **«Minst én» mot «alle».** En høynivåplan når målet hvis minst én implementasjon gjør det, fordi agenten velger. En plan i en ikke-deterministisk verden må virke for alle utfall, fordi naturen velger.
- **Refinement er ikke det samme som implementation.** En refinement kan inneholde HLA-er. En implementation inneholder bare primitive handlinger. Fasiten til 2025 oppg. 11a vil ha akkurat det skillet.
- **HIERARCHICAL-SEARCH finner ikke korteste plan.** Den er breddeførst over refinements, så planen med færrest nedbrytninger kommer først, ikke planen med færrest steg.
- **Sensorless er open world.** «Ikke nevnt» betyr ukjent. Svarer du «usann», bruker du closed world, som er klassisk planlegging.
- **Forskjellene i 2025 oppg. 11b** er tre: observerbarhet (full mot ingen), verdensmodell (closed mot open world) og søkerom (tilstander mot belief states).
- **Precondition og conditional effect blandes.** En usann precondition gjør handlingen ubrukelig. En betingelse som ikke slår til, gir bare ingen endring.
- **1-CNF holder ikke alltid.** Den er lukket under vanlige PDDL-skjemaer, men conditional effects og percepts med flere percept schemas gir disjunksjoner.
- **«Adversarial plans»** er feil navn. AND–OR-søk i ikke-deterministiske miljøer gir *contingency plans* (2024 Q2).
- **Action monitoring er ikke det samme som plan monitoring.** Action monitoring sjekker bare neste steg. Plan monitoring sjekker hele resten og stopper en dømt plan tidligst mulig.
- **Løkken i reparasjonen** står ikke i planen. Den kommer fra plan–execute–replan.
- **Replanning garanterer ikke målet.** Det krever at det ikke finnes blindveier og at miljøet virkelig er tilfeldig, med en viss sjanse til å lykkes hver gang. Ved en skjult precondition hjelper det ikke å prøve igjen.
- **«kth root».** Boka sier at hierarkiet tar «kth root» av kostnaden. Eksponenten er (d − 1)/(k − 1), altså nærmere roten av grad k − 1. Skriv formelen, ikke slagordet.

### Koblinger til andre kapitler

- → kap. 4 / E05: belief states, sensorless search i støvsugerverdenen, AND–OR-søk og online search. Kap. 11 skriver de samme belief statene som formler i stedet for mengder. Fig. 4.14 viser overgangen som bryter 1-CNF.
- → kap. 11 / E18: PDDL, action schemas, RESULT = (s − DEL) ∪ ADD og closed world. Primitive handlinger i en HTN er vanlige PDDL-handlinger.
- → kap. 9 / E15–E16: Skolem-funksjonen C(x) og unification med θ = {x/Can1, c/C(Can1)}.
- → kap. 3 / E02: HIERARCHICAL-SEARCH er bredde-først søk med FIFO-kø, og bᵈ er kostnaden fra kap. 3.
- → kap. 2 / E01: en planleggende agent er goal-based. Goal monitoring, som spør etter bedre mål, peker mot en utility-based agent.

### Ikke pensum her

- 11.4.3 Searching for abstract solutions (angelic semantics, reachable sets): Canvas-eksklusjon, L11 s. 45.
- 11.6 Time, schedules, and resources: Canvas-eksklusjon, L11 s. 45.
- 11.2.4 GraphPlan og partial-order planning: Canvas, L11 s. 45, Canvas-FAQ («GraphPlan … no longer in the current syllabus»).
- Kun bok, ikke forelest, men pensum: 11.7 Analysis of planning approaches (PENSUMOVERSIKT).
- L11 lover «backup slides» som selvstudium, men PDF-en har ingen. Innholdet er ukjent (PENSUMOVERSIKT, avsnitt 4).

### Øv selv

1. Eksamen 2025 oppg. 11 (5 p). a) What is a High-Level Action (HLA) in hierarchical planning, and what does it mean for a refinement to be an implementation of an HLA? (2 p) b) Describe briefly classical planning and sensorless planning and highlight the main differences between them. (3 p)
2. Eksamen 2024 Q2 (flervalg, bare fasiten finnes i kildene): Hva er galt med utsagnet «In nondeterministic environments agent can apply AND-OR search to generate adversive plans»?
3. Egenlaget: Hver HLA har r = 5 refinements med k = 3 handlinger hver, og løsningen har d = 27 primitive handlinger. Hvor mange indre noder har nedbrytingstreet? Sammenlign antall nedbrytingstrær med et flatt søk der b = 5.
4. Egenlaget: Bytt rekkefølgen på refinementene til Go(Home, SFO), slik at [Taxi] kommer før [Drive, Shuttle]. Agenten har bil. Hvilken plan returnerer HIERARCHICAL-SEARCH, og hvorfor?
5. Egenlaget: En sensorless støvsuger med `Action(Suck, EFFECT: when AtL: CleanL ∧ when AtR: CleanR)` starter i True og utfører [Left, Suck, Right, Suck]. Skriv belief staten som formel etter hvert steg. Hvorfor holder den seg i 1-CNF, selv om Suck har conditional effects?
6. Egenlaget: Planen er [RemoveLid(Can1), Paint(Chair, Can1), Paint(Table, Can1)]. Mens agenten maler stolen, maler noen andre bordet i samme farge. Hva gjør en agent med action monitoring, og hva gjør en med plan monitoring?

### Fasit

**Quizene i videoen**

- Kap. 1 (uten bil: når Go(Home, SFO) målet?): **A, ja**. Taxi-implementasjonen virker, og det holder at minst én virker, fordi agenten velger refinement.
- Kap. 2 (med bil: hvilken plan returneres?): **B, [Drive, Shuttle, Fly]**. Begge planene ligger to refinements ned, og Drive-planen står først i FIFO-køen.
- Kap. 3 (Open(Can2) etter RemoveLid(Can1)): **C, ukjent**. Sensorless planning bruker open world. «Usann» ville vært closed world.
- Kap. 5 (agenten maler fra en tom boks igjen og igjen): **C, annen reparasjon eller lære modellen**. Å prøve det samme igjen hjelper bare når feilen er ekte tilfeldighet. Her mangler en precondition.

**1. Eksamen 2025 oppg. 11** (etter fasiten)

a) En HLA er en abstrakt handling for en større oppgave på et høyere abstraksjonsnivå. Den har én eller flere refinements, som er sekvenser av handlinger (HLA-er eller primitive) som utfører den. En refinement er en implementation hvis den bare består av primitive handlinger, slik at agenten kan utføre den direkte.

b) Klassisk planlegging antar et diskret, deterministisk, statisk og fullt observerbart miljø. Sensorless (conformant) planning antar at agenten ikke får observasjoner under utførelsen. Forskjeller:

| | Klassisk | Sensorless |
|---|---|---|
| observerbarhet | full | ingen |
| verdensmodell | closed world | open world |
| søkerom | tilstander | belief states |

**2. Eksamen 2024 Q2.** Det heter *contingency plans*, ikke adversive eller adversarial plans. Fasiten godtok også et annet alternativ fordi oppgaveteksten var tvetydig.

**3.** log₃ 27 = 3 nivåer under roten, så 1 + 3 + 9 = 13 = (27 − 1)/(3 − 1) indre noder. Det gir 5¹³ ≈ 1,2 · 10⁹ nedbrytingstrær, mot 5²⁷ ≈ 7,5 · 10¹⁸ for flatt søk.

**4.** [Taxi, Fly]. Etter Go ligger [Taxi, Fly] først og [Drive, Shuttle, Fly] bak i FIFO-køen. Begge er primitive på samme dybde, og Taxi-planen tas ut først og består måltesten.

**5.** Left: AtL. Suck: AtL ∧ CleanL. Right: AtR ∧ CleanL. Suck: AtR ∧ CleanL ∧ CleanR. Plasseringen er kjent hver gang Suck brukes. Bare én betingelse kan da slå til, og effekten blir den samme i alle tilstandene i belief staten, så ingen disjunksjon oppstår.

**6.** Action monitoring sjekker bare preconditions for Paint(Table, Can1). De holder, så agenten maler bordet en gang til. Det er unødvendig, men skader ikke her. Plan monitoring ser at preconditions for resten av planen, inkludert målet, allerede holder. Målet er nådd, og agenten kan stoppe. Det er serendipity.

---

<a id="e20"></a>

## E20 – Språk: språkmodeller, tagging og parsing

> Pensum: Global 24.1–24.3 og 24.6 (US 23.1–23.3 og 23.6); kap. 25 (US 24) som oversikt, status uavklart · Forelesning: L9 · Øving: – · Eksamensvekt: ~2–5 % (NLP), men oppgavene kan være regning
> Video: `videoer/e20-nlp/out/tdt4136-e20-nlp.mp4` (14:03)

### Kapitler i videoen

- 0:00 – Intro
- 0:44 – Hva er en språkmodell?
- 2:08 – N-gram og nullene
- 4:14 – Bedre smoothing og andre modeller
- 5:27 – Ord og ordklasser
- 7:25 – Grammatikk og PCFG
- 8:51 – Parsing og CYK
- 10:39 – Oppgaver og dyp læring
- 11:54 – Eksamensoppgave
- 13:02 – Koblinger og oppsummering

### Kjerneideer

**Hvorfor sannsynligheter.** I logikk er en setning enten lovlig eller ulovlig. Naturlig språk er tvetydig («He saw her duck»: and eller dukker?), vagt og i stadig endring. Derfor gir vi strenger en sannsynlighet.

**Language model.** En sannsynlighetsfordeling over strenger: P(«Do I dare disturb the universe?») ≫ P(«Universe dare the I disturb do?»). Den brukes til å foreslå neste ord, rette stavefeil, velge beste oversettelse og som del av talegjenkjenning.

**Bag-of-words og naive Bayes (24.1.1).** Teksten behandles som ord trukket uavhengig fra en pose per klasse:

  P(Class | w₁:N) = α · P(Class) · ∏ⱼ P(wⱼ | Class).

- P(Class) er prioren.
- P(wⱼ | Class) telles i et merket korpus.
- α normaliserer.

Rekkefølgen forsvinner helt, så «the dog bites the man» og «the man bites the dog» har samme ord og får samme sannsynlighet. Boka (24.1.2) og L9 slide 12 motiverer n-gram med «quarter», som er vanlig i både business og sport: frasene «first quarter earnings report» og «fourth quarter touchdown passes» hører hver til sin kategori, men bag-of-words teller hvert ord for seg og ser ikke frasen.

**N-gram og Markov-antagelsen (24.1.2).**

- Uten forenkling avhenger hvert ord av alle ordene før. Med 100 000 ord og setninger på 40 ord blir det rundt 10²⁰⁰ parametere.
- Markov-antagelsen: bare de n − 1 siste ordene teller, P(wⱼ | w₁:ⱼ₋₁) ≈ P(wⱼ | wⱼ₋ₙ₊₁:ⱼ₋₁). n = 1 er unigram, 2 bigram, 3 trigram.
- Maximum likelihood-estimatet er en brøk av tellinger: P(w | forrige) = c(forrige w) / c(forrige).

**Sparse data.** Et korpus får aldri med alt som er sjeldent. Ett usett n-gram gir P = 0, og siden setningssannsynligheten er et produkt, blir hele setningen 0. Dette gjelder også når hvert ord er kjent. Det er paret som mangler.

**Smoothing (24.1.4).** Flytt litt sannsynlighetsmasse fra vanlige n-gram til sjeldne og usette.

- **Add-one (Laplace):** (c + 1) / (c(forrige) + V), der V er antall ulike ord. +V sørger for at fordelingen fortsatt summerer til 1. Nullene forsvinner, men den tar mye fra det du har sett.
- **Ukjente ord:** bytt sjeldne ord med `<UNK>` allerede i treningen. Beslektede symboler er `<NUM>`, `<EMAIL>`, `<URL>` og `<S>` for setningsstart.
- **Backoff:** for få tellinger på trigram? Gå ned til bigram, så unigram.
- **Linear interpolation:** P̂ = λ₃P(trigram) + λ₂P(bigram) + λ₁P(unigram) med Σλ = 1. λ kan være faste eller læres, for eksempel med EM.

**Andre n-gram (24.1.3).**

- **Character-level:** n-gram over bokstaver. Den gjenkjenner språket på et par ord med over 99 % treff, men svensk mot norsk bare rundt 95 % (L9 s. 16). Den håndterer også ukjente ord.
- **Skip-gram:** par med ord imellom («ne … pas» i «je ne comprends pas»).

**Sammenligning (24.1.7).** Boka trakk tilfeldige setninger fra n-gram-modeller av sin egen tekst. n = 1 gir ordsalat, n = 2 lokale par og n = 4 nesten setninger. Større n er mer flytende, men kopierer treningsteksten.

**Ordrepresentasjoner (24.1.5).**

- I en n-gram-modell er hvert ord et atom: «cat» og «kitten» har ingenting felles.
- **WordNet** er en håndlaget ordbok med relasjoner: kitten is-a young mammal is-a mammal is-a animal.
- **One-hot**-vektorer gjør alle ordpar like ulike.
- **Word embeddings** er korte, lærte vektorer der like ord havner nær hverandre. De hører til 25.1.

**Part-of-speech tagging (24.1.6).** Gi hvert ord en ordklasse. Penn Treebank har 45 tagger, for eksempel NN, VB, PRP, PRP$ og VBD.

- **HMM:** taggene er skjulte tilstander og ordene er observasjoner.
  - Transition model P(Cₜ | Cₜ₋₁).
  - Sensor model P(Wₜ | Cₜ).
  - Begge telles i et tagget korpus, for eksempel P(VB | MD) = 10 471 / 13 124 ≈ 0,8.
- **Viterbi** finner den mest sannsynlige taggsekvensen, med omtrent 97 % treff. For hver tagg i hvert ord lagres bare den beste stien inn, og så følger du pilene bakover fra beste sluttilstand.
- **Logistic regression:** én klassifikator per tagg, σ(w · x), med features som endelse (-ous), forrige ord og stor bokstav. Den er diskriminativ (lærer P(C | W)), mens HMM og naive Bayes er generative (P(W, C), kan lage setninger). Hele setningen tagges grådig eller med beam search.

**Grammatikk og PCFG (24.2).**

- En grammar er regler som bygger frasetrær.
- En probabilistic context-free grammar har én sannsynlighet per regel, og reglene for samme venstreside summerer til 1.
- E₀ (fig. 24.2) er et lite språk for wumpus-verdenen. Den **overgenererer** («Me go I.» er lov) og **undergenererer** («I think the wumpus is smelly.» er ikke lov).
- Sannsynligheten for et tre er produktet av alle regler i treet, **også ordreglene** (Article → every …).

**Parsing (24.3).** Parsing er søk etter et tre der bladene er ordene.

- **Top-down** starter i S og bruker regler nedover mot ordene.
- **Bottom-up** starter i ordene og slår dem sammen opp til S.
- Begge kan gjenta arbeid i blindveier. I bokas «Have the students in section 2 of Computer Science 101 take/taken the exam» avgjør først ord 11 om setningen er en ordre eller et spørsmål. Gjetter du feil, må NP-en parses på nytt.
- Løsningen er et **chart** (dynamic programming): lagre hver frase over hvert spenn én gang.
- **CYK** er en bottom-up chart parser for grammatikker på **Chomsky Normal Form**: X → ord [p] eller X → Y Z [p]. Den bruker O(n³m) tid og O(n²m) plass (n ord, m ikke-terminaler).
- Raskere parsere:
  - A*, med kostnad = 1 / sannsynlighet: første fullstendige parse er den beste.
  - Beam search, som beholder de b beste: nesten lineær tid og nesten alltid riktig.
  - Shift-reduce, som er beam search med b = 1.

**Oppgaver (24.6), kort.**

| Oppgave | Hva den gjør |
|---|---|
| Speech recognition | lyd → tekst, 3–5 % ordfeil |
| Text-to-speech | tekst → lyd; må vite om «record» er substantiv eller verb |
| Machine translation | lærer av parallelle tekster; n-gram → seq2seq → transformer |
| Information extraction | henter fakta, for eksempel adresser |
| Information retrieval | finner relevante dokumenter |
| Question answering | gir et svar, ikke en liste |

**Kapittel 25 som oversikt (status uavklart).** Canvas sier «Sections from Chapter 24-25*», og stjernen har ingen fotnote. L9 peker bare til 25.1 og transformers. Ta det på idénivå:

- **Embeddings gjør analogier til vektorregning:** Athens : Greece = Oslo : Norway, D = C + (B − A).
- **RNN** leser ett ord om gangen og bærer en skjult tilstand.
- **Seq2seq** koder en setning og dekoder en ny.
- **Attention** lar hvert nytt ord se på alle ordene i kilden.
- **Transformeren** bruker self-attention mellom ordene i samme setning.
- **Pretraining + transfer learning:** tren på mye tekst, finjuster etterpå.

### Algoritmer og håndsporing

Alle tallene under er regnet med brøker i `videoer/e20-nlp/verifiser.py`, som også sjekker at tallene i videoen er de samme.

**Naive Bayes (ILLUSTRASJON).** Tallene er valgt for videoen. Teksten er «stocks, rain».

| | prior | P(stocks \| c) | P(rain \| c) | produkt | normalisert |
|---|---|---|---|---|---|
| business | 3/10 | 5/100 | 1/100 | 15 · 10⁻⁵ | 3/17 ≈ 18 % |
| weather | 7/10 | 1/100 | 10/100 | 70 · 10⁻⁵ | 14/17 ≈ 82 % |

«rain, stocks» gir nøyaktig det samme.

**Bigram med og uten add-one (ILLUSTRASJON).**

- Korpus:
  - `<S> the wumpus smells`
  - `<S> the wumpus is dead`
  - `<S> the pit is breezy`
- V = 7: the, wumpus, smells, is, dead, pit, breezy. `<S>` står bare foran og telles ikke som neste ord.
- Ingen sluttsymbol.
- Tellinger: c(`<S>`) = 3, c(the) = 3, c(wumpus) = 2, c(is) = 2, c(pit) = 1.

| bigram | MLE | add-one (c + 1)/(c(forrige) + 7) |
|---|---|---|
| P(the \| `<S>`) | 3/3 = 1 | 4/10 |
| P(wumpus \| the) | 2/3 | 3/10 |
| P(pit \| the) | 1/3 | 2/10 |
| P(is \| pit) | 1/1 = 1 | 2/8 = 1/4 |
| P(smells \| pit) | 0/1 = **0** | 1/8 |
| P(dead \| is) | 1/2 | 2/9 |

P(`<S>` the pit smells):

- Uten smoothing: 1 · 1/3 · 0 = **0**.
- Med add-one: 4/10 · 2/10 · 1/8 = **1/100**.

Prisen for add-one: P(is | pit), som faktisk er sett, faller fra 1 til 1/4.

L9 s. 20 regner samme metode med V = 100 000 og «black» sett 50 ganger:

- «black cat» går fra 0 til 1/100 050 ≈ 0,00001.
- «black dog» går fra 10/50 = 0,2 til 11/100 050 ≈ 0,0001.

**Linear interpolation (L9 s. 21).** «a black cat» er aldri sett. 0,6 · 0 + 0,3 · 0,02 + 0,1 · 0,001 = **0,0061**.

**Viterbi på «he saw her duck» (ILLUSTRASJON).**

- Modellen er laget for videoen: «he/PRP saw/VBD» er entydig, og δ(saw/VBD) settes til 1, siden bare forholdstall teller.
- δ(ord, tagg) = max over forrige tagg av [δ(forrige) · P(tagg | forrige tagg)] · P(ord | tagg).

| steg | kandidater inn | δ | bakpeker |
|---|---|---|---|
| her/PRP$ | 1 · P(PRP$ \| VBD) 0,3 · P(her \| PRP$) 0,2 | 0,06 | VBD |
| her/PRP | 1 · P(PRP \| VBD) 0,4 · P(her \| PRP) 0,2 | 0,08 | VBD |
| duck/NN | max(0,06 · 0,9 = **0,054**; 0,08 · 0,05 = 0,004) · P(duck \| NN) 0,02 | **0,00108** | PRP$ |
| duck/VB | max(0,06 · 0,01 = 0,0006; 0,08 · 0,3 = **0,024**) · P(duck \| VB) 0,01 | 0,00024 | PRP |

- Beste slutt er NN (0,00108). Følger du pilene bakover, får du **PRP VBD PRP$ NN** («her» er eiendomsord, «duck» er en and).
- Grådig tagging tar PRP ved «her» (0,08 > 0,06) og ender på PRP VBD PRP VB med 0,00024. Det er 2/9 av Viterbis sannsynlighet, altså under en fjerdedel.

**Viterbi i kortform.**
```
for hvert ord t, for hver tagg c:
    δ[t][c] = max_{c'} δ[t−1][c'] · P(c | c') · P(w_t | c)
    bp[t][c] = argmax_{c'} (samme)
slutt: c* = argmax_c δ[N][c]; følg bp bakover
```

**Sannsynlighet for parsetre (fig. 24.6, L9 s. 65).** «every wumpus smells»:

- Regler i treet: S → NP VP (0,90), NP → Article Noun (0,25), VP → Verb (0,40).
- Ordregler: Article → every (0,05), Noun → wumpus (0,15), Verb → smells (0,10).
- P = 0,90 × 0,25 × 0,05 × 0,15 × 0,40 × 0,10 = **0,0000675**.

«the wumpus is dead» (fig. 24.4) har åtte faktorer:

- Fire regler: S → NP VP 0,9, NP → Article Noun 0,25, VP → VP Adjective 0,05, VP → Verb 0,40.
- Fire ordregler: the 0,40, wumpus 0,15, is 0,10, dead 0,05.
- Produktet er 0,00000135.

**CYK på «every wumpus smells».** E₀ har enhetsregler (VP → Verb, NP → Noun), som CNF ikke tillater. De er derfor slått sammen med ordreglene:

- VP → smells = 0,40 · 0,10 = 0,04.
- NP → wumpus = 0,10 · 0,15 = 0,015.

| spenn [i,k] | innhold |
|---|---|
| [1,1] every | Article 0,05 |
| [2,2] wumpus | Noun 0,15 · NP 0,015 |
| [3,3] smells | Verb 0,1 · VP 0,04 |
| [1,2] every wumpus | NP = 0,25 · 0,05 · 0,15 = 0,001875 |
| [2,3] wumpus smells | S = 0,9 · 0,015 · 0,04 = 0,00054 (blindvei, brukes aldri) |
| [1,3] hele | S = 0,9 · 0,001875 · 0,04 = **0,0000675** (samme som treet) |

**CYK i kortform (fig. 24.5).**
```
for hvert ord i, for hver regel X → ord_i [p]:  P[X,i,i] = p
for length = 2..N, for i = 1..N+1−length, k = i+length−1, for j = i..k−1:
    for hver regel X → Y Z [p]:
        P[X,i,k] = max(P[X,i,k], P[Y,i,j] · P[Z,j+1,k] · p)
```
De tre løkkene over spenn gir n³, og regelløkka gir m. Dobbel setningslengde gir 2³ = 8 ganger så lang tid.

### Eksamensfeller

- **Add-one: +V under brøkstreken, ikke +1.** P(dead | is) = (1 + 1)/(2 + 7) = 2/9. Med +1 under streken får du 2/3, og fordelingen summerer ikke lenger til 1.
- **«Hvorfor smoothing?»** Fasiten (2025 Q12a) vil ha to ting. For det første gir usette n-gram P = 0, og da blir hele setningen 0 fordi det er et produkt. For det andre flytter smoothing masse fra vanlige til sjeldne/usette n-gram. Beskriv én metode, for eksempel Laplace: legg 1 til alle tellinger.
- **Ukjent ord og usett par er forskjellige problemer.** `<UNK>` løser ukjente ord. Smoothing, backoff og interpolation løser usette n-gram av kjente ord.
- **Bag-of-words ser ikke rekkefølge.** Naive Bayes trenger prioren og må normaliseres før du sier «82 %».
- **Grådig tagging er ikke Viterbi.** Den beste taggen ved hvert ord gir ikke nødvendigvis beste sekvens.
- **Parsetre:** ta med ordreglene. «every wumpus smells» har seks faktorer, ikke tre.
- **Top-down mot bottom-up (2025 Q12b).** Fasiten vil ha både hvordan hver strategi bygger og én ulempe for hver:
  - Top-down starter i S og utvider mot ordene. Ulempe: den utforsker utvidelser som aldri passer ordene.
  - Bottom-up starter i ordene og kombinerer oppover. Ulempe: den bygger delstrukturer som aldri blir del av en hel parse.
  - Begge kan gjenta arbeid i blindveier.
- **CYK er bottom-up**, krever CNF og bygger også blindveier (S over «wumpus smells»). Tiden er O(n³m), ikke O(n²).
- **Information retrieval returnerer dokumenter, ikke svaret.** Det er question answering (2016 Task 6, usann påstand).
- **Over- og undergenerering** er to forskjellige feil: «Me go I» er tillatt (over), og «I think the wumpus is smelly» er ikke tillatt (under).

### Koblinger til andre kapitler

- → kap. 4.4.4 og 14.2 / E05: HMM-taggeren holder en fordeling over skjulte tilstander gitt observasjonene, akkurat som belief state-oppdatering (filtering). Viterbi er «most likely explanation» (14.2.3).
- → kap. 8 / E14: E₀ er skrevet på samme måte som BNF-grammatikken for førsteordens logikk (fig. 8.3), bare med sannsynligheter.
- → kap. 10 / E17: WordNet sin is-a-kjede er en taksonomi av kategorier.
- → kap. 3.5 / E03: A*-parsing er A* med kostnad 1/sannsynlighet. Beam search kjenner du fra lokal søk.
- → kap. 28.3.3 / E21: en språkmodell er tellinger fra et korpus, så skjevheter i korpuset blir med i modellen (fairness and bias). Se også 2024 Q20 om debiasing.
- → kap. 7.4 / E11: logikk har harde grenser for hva som er en lovlig setning. Språkmodeller erstatter det med sannsynligheter.

### Ikke pensum her

- 24.2.1 Lexicon (leksikonet til E₀ som eget tema): ute (Canvas, L9 slide 76, PDF-s. 58, PENSUMOVERSIKT). Ordreglene brukes likevel i regneeksemplene, siden de trengs for treets sannsynlighet.
- 24.3.1 Dependency parsing: ute (Canvas, L9 slide 76, PDF-s. 58).
- 24.3.2 Learning a parser from examples: ute (Canvas, L9 slide 76, PDF-s. 58).
- 24.4 Augmented grammars: ute (Canvas, L9 slide 76, PDF-s. 58).
- 24.5 Complications of real natural language: ute (Canvas, L9 slide 76, PDF-s. 58).
- 14.2.3 Viterbi-algoritmen som eget kapittel: ikke på kapittellista. Den er tatt med fordi 24.1.6 bruker den til tagging.
- Kap. 25: uavklart (stjerne uten fotnote i Canvas). Behandlet bare som oversikt.

### Øv selv

1. **Eksamen 2025, oppgave 12 (5 p).** a) Explain why smoothing is necessary in n-gram language models. Briefly describe a possible type of smoothing. (2 p) b) Explain the difference between top-down and bottom-up parsing strategies. Describe how each constructs a parse and one drawback of each. (3 p)
2. **Eksamen 2016, Task 6a (sant/usant, utvalg).** «The purpose of smoothing is to avoid dramatic effects of low-frequency counts.» «The bag of words model can be seen as a simple language model.» «The task of Information Retrieval is to return the answer to a user query.» «Information Extraction systems are often based on templates.» (Eldre eksamen etter 3. utgave.)
3. **Eksamen 2017, flervalg.** Hvilken påstand er *ikke* riktig? (1) The distributional hypothesis assumes that words with similar usage have similar meanings. (2) The bag of words model ignores the grammatical structure of the language. (3) An n-gram model is an example of a language model. (4) Grounding means that a speaker defines the basis for a dialogue.
4. **Regning.** Med korpuset fra videoen: finn P(wumpus | the) og P(breezy | is) med add-one, og sannsynligheten for `<S> the wumpus is breezy` med og uten add-one.
5. **Viterbi.** Endre gitteret fra videoen slik at P(duck | VB) = 0,1 (resten likt). Hvilken taggsekvens vinner nå, og med hvilken δ?
6. **CYK.** Fyll chartet for «the wumpus smells» med E₀ (the = 0,40). Hvilken verdi får S over hele setningen, og hvilke celler er blindveier?

Eksamen 2024 Q19 var et kort NLP-spørsmål. Fasiten er bare én linje («NLP enables computers to … interpret, and generate human language»), så den egner seg ikke som regneoppgave.

### Fasit

**Quizene i videoen**

- s05: «rain, stocks» gir **samme** sannsynlighet. En pose har ingen rekkefølge.
- s10: P(dead | is) med add-one = (1 + 1)/(2 + 7) = **2/9**. Fellen er 2/3.
- s20: «the wumpus is dead» har **8** faktorer (fire regler og fire ordregler), og P = 0,00000135.
- s23b: dobbel lengde gir **8 ganger** så lang tid (n³).
- s26/s27: se oppgave 1 under.

**Øv selv**

1. a) Usette n-gram i treningskorpuset gir sannsynlighet 0, og siden setningssannsynligheten er et produkt, blir hele setningen 0 selv om den er grei. Smoothing flytter litt masse fra vanlige n-gram til sjeldne og usette. Eksempel: Laplace (add-one), (c + 1)/(c(forrige) + V). Backoff og linear interpolation er også godkjente svar. b) Top-down starter i S og bruker regler for å utvide mot ordene; ulempen er at den utforsker utvidelser som aldri passer ordene. Bottom-up starter i ordene og kombinerer dem til større fraser opp mot S; ulempen er at den bygger delstrukturer som aldri blir del av en fullstendig parse. Begge kan gjenta arbeid i blindveier, og det løses med en chart parser (CYK).
2. Sant, sant, **usant** (IR returnerer relevante dokumenter, ikke svaret), sant.
3. **4** er feil.
4. Svarene på 4–6 er egne løsninger, regnet med samme metode som i `verifiser.py`.
   - P(wumpus | the) = (2 + 1)/(3 + 7) = 3/10. P(breezy | is) = (1 + 1)/(2 + 7) = 2/9.
   - Uten smoothing: 1 · 2/3 · P(is | wumpus) 1/2 · P(breezy | is) 1/2 = **1/6**.
   - Med add-one: 4/10 · 3/10 · (1 + 1)/(2 + 7) · 2/9 = 4/10 · 3/10 · 2/9 · 2/9 = **4/675** ≈ 0,0059.
5. duck/VB = max(0,0006; 0,024) · 0,1 = 0,0024 > duck/NN = 0,00108. Da vinner **PRP VBD PRP VB** («duck» er et verb) med δ = 0,0024.
6. [1,1] Article 0,40 · [2,2] Noun 0,15, NP 0,015 · [3,3] Verb 0,1, VP 0,04 · [1,2] NP = 0,25 · 0,40 · 0,15 = 0,015 · [2,3] S = 0,9 · 0,015 · 0,04 = 0,00054 (blindvei) · [1,3] S = 0,9 · 0,015 · 0,04 = **0,00054**.

**Faglige usikkerheter**

- **L9 slide 63 (PDF-s. 46) og CYK-chartet for «the wumpus is dead».** Slidet viser «–» i cellen for «the wumpus is», men viser selv NP over «the wumpus» og «Verb, VP» over «is». S → NP VP gir da S i cellen: 0,9 · 0,015 · 0,04 = 0,00054. Cellen er altså bare utelatt i slidet; CYK lagrer beste tre for hver kategori over hvert spenn, også spenn fullsetningen ikke bruker. For «wumpus is» avhenger det av om NP → Noun slås sammen med ordregelen; gjør du det, som her, får også den cellen S. Fullsetningens 0,00000135 står seg. Videoen bruker «every wumpus smells», der tallet stemmer med bokas 0,0000675.
- **Kap. 25.** Videoen og notatet tar kapitlet bare på idénivå. Om det kan gis detaljspørsmål om RNN eller transformers, er ikke avklart i Canvas.
- **Eksempler merket ILLUSTRASJON** (naive Bayes-tallene, bigram-korpuset og Viterbi-gitteret) er laget for videoen. Metodene følger boka, men tallene er ikke bokas.

---

<a id="e21"></a>

## E21 – Kan maskiner tenke, og hva bør de gjøre?

> Pensum: Global 28.1–28.3 (US 27.1–27.3) uten 28.3.5–28.3.6 (Canvas) + 1.5/1.1.5 · Forelesning: L12 del 2, L1 del 1 · Øving: – · Eksamensvekt: ~2–5 %
> Video: `videoer/e21-filosofi-etikk/out/tdt4136-e21-filosofi-etikk.mp4` (13:53)

### Kapitler i videoen

- 0:00 – Intro
- 0:39 – Grensene for AI
- 3:07 – Kan maskiner tenke?
- 4:52 – Våpen og personvern
- 7:10 – Fairness og COMPAS
- 9:45 – Tillit og AI safety
- 11:18 – Eksamen 2025, oppgave 13b
- 12:45 – Koblinger og oppsummering

### Kjerneideer

**Weak AI og strong AI (28.1, 28.2).** Searle (1980) skilte mellom to påstander.

- **Weak AI:** maskiner kan oppføre seg *som om* de er intelligente.
- **Strong AI:** maskiner som gjør det, *tenker faktisk*, bevisst.
- I dag brukes «strong AI» ofte om AI på menneskenivå (human-level eller general AI).

Kritikere har bommet før. I oktober 1903 skrev astronomen Simon Newcomb at mennesket ikke kan fly. I desember samme år fløy brødrene Wright.

**Tre innvendinger mot weak AI (28.1.1–28.1.3).** Til eksamen skal du kunne påstanden, svaret og hvorfor det fortsatt er uenighet.

| Innvending | Påstand | Svar | Hvorfor uenighet |
|---|---|---|---|
| **Informality of behavior** (Turing ga den navnet; Dreyfus er hovedkritikeren) | Menneskelig oppførsel er for kompleks for et formelt regelsett. Beskriv en hund med logikk, og unntakene tar aldri slutt. | Kritikken treffer *good old-fashioned AI* (GOFAI, logiske regler), ikke datamaskiner som sådan. Probabilistic reasoning og læring (deep learning) krever ikke komplette regler. | Dreyfus: forståelse krever kropp og omgivelser (*embodied cognition*). Boka leser det som et argument for agenter med kropp, ikke mot AI. |
| **Disability** | «En maskin kan aldri gjøre X» (Turings liste: være snill, ha humor, skille rett fra galt, gjøre feil, forelske seg, gjøre noe nytt …). | Mange X-er er gjort: maskiner gjør feil, tenker om egne beregninger (metareasoning) og har gjort ekte oppdagelser i matematikk, kjemi og biologi. | X-er som krever indre opplevelse (forelske seg) er omstridt. Maskiner kan ikke være *nøyaktig* menneskelige, men det er ikke det weak AI påstår. |
| **Mathematical objection** (Gödel; Lucas, Penrose) | Et formelt system F som kan aritmetikk, har en setning G(F) som er sann men ikke kan bevises i F. En maskin er et formelt system og kan ikke se at G(F) er sann. Mennesker kan, så mennesket er overlegent. | 1) Alle har grenser: «Lucas kan ikke konsistent påstå at denne setningen er sann» er sann, men Lucas kan ikke si den. 2) Gödel gjelder matematikk, ikke sinn. Ingen beviser det ubeviselige, og mennesker er langt fra konsistente (Kempes firefargebevis holdt i 11 år). 3) Datamaskiner er endelige, ikke uendelige Turing-maskiner, og kan beskrives i proposisjonslogikk, der Gödel ikke gjelder. | Har mennesker en innsikt som ingen formell regel fanger? Det kan verken bevises eller motbevises. |

**Turing-testen (28.1.4, L1).**

- Turing (1950) erstattet «kan maskiner tenke?» med en test av oppførsel: en utspørrer chatter i fem minutter med et menneske og en maskin. Maskinen består hvis den lurer utspørreren minst 30 % av gangene.
- ELIZA (Weizenbaum, 1966) speilet pasientens ord tilbake («Men are all alike.» – «In what way?»). Mange tok den på alvor.
- I 2014 lurte en chatbot som lot som den var en gutt fra Ukraina, 33 % av utrente dommere. Ingen trent dommer er lurt ennå.
- Poenget: å lure folk er ikke det samme som å være intelligent. Testen kan like gjerne måle hvor godtroende dommerne er. AI-forskere bruker heller konkrete benchmarks.

**Chinese room (28.2.1, L12, L1).**

- En mann som bare kan engelsk, sitter i et rom med en engelsk regelbok. Kinesiske lapper skyves inn, han følger reglene og skyver ut kinesiske svar. Utenfra ser det ut som flytende kinesisk.
- Searle: mannen forstår ingenting, og boka er papir. En datamaskin som kjører et program, er i samme situasjon. Å kjøre riktig program er altså ikke nok for forståelse. Searles eget syn heter *biological naturalism*: bevissthet kommer fra biologiske prosesser i hjernen.
- **Systems reply:** kanskje er det hele systemet (mann + bok + rom) som forstår, slik ingen enkelt nervecelle forstår norsk.
- **Searles svar:** la mannen pugge boka. Da er hele systemet i ham, og han forstår fortsatt ikke.
- **Bokas motsvar:** de enkelte cellene dine forstår heller ingenting. Betyr det at du ikke forstår? Spørsmålet er ikke avgjort.

**Consciousness og qualia (28.2.2).**

- *Consciousness*: å være bevisst verden, seg selv og egne opplevelser.
- *Qualia*: hvordan noe føles innenfra. Når HAL 9000 sier «I can feel it», føler den noe, eller er det bare output?
- *Inverted spectrum*: kanskje din opplevelse av rødt er min opplevelse av grønt. Begge sier «rød» om tomaten, så ingen test kan avsløre forskjellen.
- *The hard problem*: hvorfor noe føles som noe i det hele tatt.
- Boka: et mysterium som AI ikke trenger å løse for å bygge intelligente agenter.

**AI-etikk generelt (28.3, L12).** AI kan redde og forbedre liv, men kan også gi utilsiktede bivirkninger og ulikhet. L12 viser åtte av de tolv mest siterte prinsippene siden EPSRC (2010): ensure safety, establish accountability, ensure fairness, uphold human rights, respect privacy, reflect diversity, provide transparency, avoid concentration of power.

**Lethal autonomous weapons, LAWS (28.3.1).** FN: et våpen som finner, velger ut og angriper mennesker uten menneskelig tilsyn.

- **For:** blir ikke redd, trøtt eller hevngjerrig. Egne soldater spares.
- **Mot, juridisk:** krigens folkerett krever distinction, necessity og proportionality. Distinction går i noen tilfeller, men ingen maskin kan i dag vurdere necessity og proportionality.
- **Mot, etisk:** mange vil aldri la en maskin alene avgjøre liv og død (Tyskland sier det rett ut).
- **Mot, praktisk:** pålitelighet. I 1983 tvilte Petrov på et rakettvarsel, og varselet var falskt. Og skala: en million droner får plass i én container.
- **Boka (Russell og Norvig):** mindre sikkerhet for alle, så de anbefaler våpenkontroll.

**Personvern (28.3.2).**

- **De-identification ≠ anonymisering.** Fjern navn, personnummer og adresse, og fødselsdato, kjønn og postnummer står igjen. Sweeney (2000) viste at de tre peker ut 87 % av amerikanerne entydig. Hun fant helsejournalen til sin egen guvernør.
- **k-anonymity:** hver rad skal være lik minst k − 1 andre i kvasi-identifikatorene (her fødsel, kjønn og postnummer). Det sensitive feltet (diagnosen) teller ikke. k er størrelsen på den *minste* gruppen. Du oppnår det ved å generalisere felt (fødselsdato → år, færre sifre i postnummeret).
- **Spørringer er heller ikke trygge.** Bokas eksempel: snittlønn for alder 30–40 og for 30–41 avslører til sammen lønna til den ene 41-åringen.
- **Differential privacy:** legg støy på svarene, slik at én person mer eller mindre (D mot D + r) nesten ikke endrer sannsynligheten for noe svar: |log P(Q(D) = y) − log P(Q(D + r) = y)| ≤ ε. Mindre ε gir mer personvern og mer støy.
- **Federated learning:** dataene blir på telefonen, som trener lokalt og sender bare parametrene. Serveren tar snittet og sender ut en bedre modell. Med *secure aggregation* legges det på masker som summerer til null. Da får serveren riktig sum, men ser ikke enkeltverdiene.

**Fairness (28.3.3).** L12 bruker lån til menn og kvinner som gjennomgangseksempel.

- **Individual fairness:** like individer behandles likt, uansett gruppe.
- **Group fairness:** to grupper behandles likt, målt med en statistikk.
- **Fairness through unawareness** virker ikke: slett kjønn, og postnummer og yrke avslører det likevel.
- **Demographic parity** (L12: *equal outcome*): like stor andel får lån i begge grupper.
- **Equal opportunity:** blant dem som vil betale tilbake, får like stor andel lån. Det er lik true positive rate (TPR).
- **Equalized odds** (Hardt mfl. 2016, ikke navngitt i boka): lik TPR *og* lik false positive rate (FPR).
- **Equal impact:** lik forventet nytte, der kostnaden ved gale prediksjoner telles med.
- **Well calibrated:** samme score betyr samme faktiske risiko i alle grupper.

**COMPAS.** COMPAS er en kommersiell risikoscore for ny kriminalitet som dommere i USA bruker.

- Av dem med score 7 begikk 60 % av de hvite og 61 % av de svarte ny kriminalitet: godt kalibrert.
- Av dem som *ikke* begikk ny kriminalitet, fikk 45 % av de svarte og 23 % av de hvite høy risiko. Det er false positive rate (FPR), og den er nesten dobbelt så høy.
- Kleinberg mfl. (2016): når grunnratene er ulike, kan en kalibrert score ikke samtidig være balansert for *begge* faktiske klasser, altså ha like feilrater både blant dem som begår ny og blant dem som ikke gjør det (binært: lik TPR og lik FPR, equalized odds). Alle tre kan bare holde med en perfekt modell eller like grunnrater. Boka og L12 forenkler dette til «kalibrert eller equal opportunity»; lik TPR alene er et svakere krav som teoremet ikke utelukker. Vi må velge hvordan vi veier dem. Se håndsporingen under.

**Hvor bias kommer fra.**

- **Skjev fasit:** dataene viser hvem som ble *dømt*, ikke hvem som *gjorde* noe.
- **Sample size disparity:** grupper med få eksempler får dårligere modeller. Ansiktsgjenkjenning hadde 33 % feil for mørkhudede kvinner og var nesten perfekt for lyshudede menn.
- **Mål og team:** utviklere fikser lettest det som rammer dem selv.
- **Motmidler:** datablad for datasett (data sheets), oversampling av minoriteter, mangfoldige team med samfunnsvitere, mål per undergruppe og fairness inn i målfunksjonen.
- Debiasing reduserer skjevhet, men garanterer ikke høyere accuracy. Fairness og accuracy kan trekke mot hverandre.

**Tillit og åpenhet (28.3.4).**

- **Verification:** produktet oppfyller spesifikasjonen.
- **Validation:** spesifikasjonen dekker det brukere og berørte faktisk trenger.
- For ML må du også sjekke treningsdataene, accuracy og fairness under usikkerhet, og robusthet mot angrep.
- **Certification:** en tredjepart går god for produktet, for eksempel UL (siden 1894, elektriske apparater), ISO 26262 (bil) og IEEE P7001 (i boka og L12: etisk design av AI, under arbeid). Den er nå vedtatt som IEEE 7001-2021, Standard for Transparency of Autonomous Systems.
- **Explainable AI (XAI):** boka sier at du fortjener en forklaring når et AI-system avslår et lån, og at GDPR sikrer det i Europa. Retten gjelder automatiserte avgjørelser med rettslig eller tilsvarende betydelig virkning: du har krav på forståelig informasjon om prosedyren og prinsippene som faktisk ble brukt (EU-domstolen, C-203/22, om automatisert kredittvurdering). Men en forklaring er en historie om én avgjørelse og sier lite om andre saker. Skjevhet på tvers av grupper krever revisjon (audit) av tidligere avgjørelser.
- **Vit når du snakker med en maskin:** Walsh (2015) foreslo en «red flag»-lov om at et autonomt system skal si fra hvem det er. California gjorde det ulovlig i 2019 å bruke en bot til å villede noen om at den er kunstig.

**Future of work og robot rights (28.3.5–28.3.6), ute av pensum etter Canvas; bare bakgrunn.** Automatisering fjerner jobber, men økt velstand kan skape nye. Om roboter skal ha rettigheter, avhenger av om de har bevissthet eller qualia. Se «Ikke pensum her».

**AI safety (28.3.7) og standardmodellen (1.1.5, 1.5).**

- **Safety engineering (L12):** FMEA (hvordan kan hver del svikte, og hva følger?) og FTA (AND/OR-tre over feil, med sannsynligheter). Et trygt system svikter gradvis, det er ikke bare korrekt.
- **Unintended side effects:** be en robot hente kaffe, og den velter lamper på veien. Ingen kan liste alle bivirkninger på forhånd.
- **Low impact:** maksimer nytten minus en vektet sum av alle endringer i verden. Da går roboten rundt lampene.
- **Externalities:** kostnader utenfor målet (som klimagasser) må tas inn i målet.
- **Value alignment problem:** agenten får det vi ber om, ikke det vi mener. Simulerte skapninger som skulle bli raske, ble i stedet enormt høye og «beveget seg fort» ved å falle over ende. Det er *King Midas-problemet*: Midas ønsket at alt han rørte ble gull, også maten.
- **Svakheten i standardmodellen (E01):** vi gir agenten et fast mål, og den maksimerer det. Et feil mål blir da farlig.
- **Svarene L12 nevner:** imitation learning (kopier menneskers handlinger, også feilene), inverse reinforcement learning (lær nytten mennesker følger, og optimer den) og assistance games (agenten er usikker på hva vi foretrekker, så den er forsiktig og spør).
- **Beneficial machines (1.1.5, bare bok):** maskinen vet at den ikke kjenner målet vårt helt. Derfor er den forsiktig, spør og lar seg slå av.

### Algoritmer og håndsporing

**Drøftingsmal for etikk- og filosofioppgaver**

1. **Begrep:** navn og definisjon, med engelsk term.
2. **Eksempel:** konkret, helst fra boka.
3. **Motargument:** hvorfor påstanden ikke er avgjørende.
4. **Konklusjon:** et veid standpunkt i én setning.

Eksamen 2025 oppgave 13b løst med malen (fasiten krever påstand + én konkret grunn per argument):

| | 1 Begrep | 2 Eksempel | 3 Motargument | 4 Konklusjon |
|---|---|---|---|---|
| Informality | Dreyfus: oppførsel er for kompleks for formelle regler | hunden: Dog(x) ⇒ Mammal(x) … unntak uten ende | treffer GOFAI, ikke datamaskiner; probabilistic reasoning og læring takler det uformelle | en grense for én programmeringsstil, ikke for AI |
| Mathematical objection | Lucas, Penrose: maskinen ser ikke at G(F) er sann, mennesket gjør | Gödel-setningen G(F) | ingen beviser det ubeviselige, og mennesker er inkonsistente · *eller:* datamaskiner er endelige · *eller:* alle har grenser | Gödel begrenser all formell tenkning, ikke bare maskiner |

**k-anonymity (ILLUSTRASJON, sjekket i `verifiser.py`)**

| Rad | Rådata: fødsel · kjønn · postnr. | Steg 1: år, postnr. 703*/704* | Steg 2: år → 1985–87 | Diagnose (teller ikke) |
|---|---|---|---|---|
| 1 | 12.03.1985 · K · 7030 | 1985 · K · 703* | 1985–87 · K · 703* | influensa |
| 2 | 30.07.1985 · K · 7034 | 1985 · K · 703* | 1985–87 · K · 703* | astma |
| 3 | 05.11.1987 · M · 7041 | 1987 · M · 704* | 1985–87 · M · 704* | diabetes |
| 4 | 21.01.1986 · M · 7043 | 1986 · M · 704* | 1985–87 · M · 704* | influensa |
| 5 | 14.09.1985 · K · 7031 | 1985 · K · 703* | 1985–87 · K · 703* | migrene |
| 6 | 02.02.1987 · M · 7048 | 1987 · M · 704* | 1985–87 · M · 704* | astma |
| **Grupper** | seks unike rader | 3, 2, 1 | 3, 3 | |
| **k** | 1 | **1** (1986 · M · 704* er alene) | **3** | |

**Fairness fra forvirringsmatriser**

Fra én forvirringsmatrise per gruppe regner du ut fem rater:

- **PPV** (høy-boksen) = tp / (tp + fp): andelen i høy-boksen som begår ny.
- **Lav-boksen** = fn / (fn + tn): andelen i lav-boksen som begår ny.
- **TPR** = tp / (tp + fn).
- **FPR** = fp / (fp + tn).
- **Flagget andel** = (tp + fp) / n.

Ved binær score betyr calibration lik PPV og lik lav-boks-andel i begge grupper. Equal opportunity betyr lik TPR (bokas definisjon), og for COMPAS sammenligner boka FPR. Demographic parity betyr lik flagget andel.

Tallene er egne (ILLUSTRASJON) og sjekket i `verifiser.py`. tp betyr høy risiko og begår ny, fp høy risiko men begår ikke ny, fn lav risiko og begår ny, tn lav risiko og begår ikke ny.

| Gruppe | tp | fp | fn | tn | grunnrate | flagget | PPV | lav-boks | TPR | FPR |
|---|---|---|---|---|---|---|---|---|---|---|
| A | 42 | 18 | 8 | 32 | 50/100 | 60 | 42/60 = 70 % | 8/40 = 20 % | 42/50 = 84 % | 18/50 = **36 %** |
| B | 28 | 12 | 12 | 48 | 40/100 | 40 | 28/40 = 70 % | 12/60 = 20 % | 28/40 = 70 % | 12/60 = **20 %** |
| A, justert | 35 | 10 | 15 | 40 | 50/100 | 45 | 35/45 = **78 %** | 15/55 = 27 % | 35/50 = 70 % | 10/50 = 20 % |

- **A og B:** kalibrert (70 % og 20 % i begge), men FPR er 36 % mot 20 %, TPR er 84 % mot 70 %, og flagget andel er 60 mot 40. Calibration holder, equal opportunity og demographic parity brytes.
- **A justert:** samme TPR og FPR som B, men nå begår 78 % i As høy-boks ny mot 70 % i B. Equalized odds (og dermed equal opportunity) vunnet, calibration tapt.
- `verifiser.py` søker gjennom *alle* forvirringsmatriser med grunnratene 50/50 og 40/60. Calibration + lik TPR + lik FPR går bare med en perfekt (eller perfekt omvendt) modell. Calibration + demographic parity har ingen løsning.

**Differential privacy og spørringer**

- Lønnseksempelet (boka): 13 · 81 199 − 12 · 81 234 = 1 055 587 − 974 808 = **80 779 dollar**.
- DP-illustrasjonen bruker P(y) ∝ exp(−ε · |y − c|) med ε = 0,5, c = 12 for D og c = 13 for D + r. Største forskjell i log-sannsynlighet for noe svar er 0,5 = ε.

**Federated learning med secure aggregation (ILLUSTRASJON)**

| Telefon | lokal w | maske | sendt |
|---|---|---|---|
| 1 | 4 | +5 | 9 |
| 2 | 7 | −2 | 5 |
| 3 | 1 | −3 | −2 |
| Sum | 12 | 0 | 12 |

Snitt = 12/3 = 4, det samme som snittet av de ekte verdiene. Serveren ser aldri 4, 7 eller 1.

### Eksamensfeller

- **Bare navnet på argumentet.** 2025 13b gir poeng for påstand *og* én konkret grunn til at den ikke avgjør, for hvert argument. Uten motargument får du ikke full score.
- **Weak og strong blandes.** Turing-testen og de tre innvendingene i 28.1 handler om weak AI (oppførsel). Chinese room og qualia handler om strong AI (tenker den faktisk?).
- **Feil person.** Physical symbol system hypothesis er Newell og Simon, ikke Searle. Searle mener det motsatte (2017, sant/usant).
- **Bestått Turing-test = intelligent.** Nei. Å lure folk er ikke bevis, og testen krever heller ikke sound logical reasoning (2019, sant).
- **k er den typiske eller største gruppen.** Nei, k er den *minste*. Og det sensitive feltet teller ikke med i gruppene.
- **Generaliser feil felt.** I tabellen over gir postnummer alene ingen gevinst: år + kjønn skiller fortsatt 1986 · M ut.
- **De-identifisert = anonymt.** Nei, kvasi-identifikatorene står igjen.
- **Kalibrert = rettferdig.** Nei. Med ulike grunnrater kan en kalibrert modell som ikke er perfekt, ikke ha både lik TPR og lik FPR.
- **Slett den sensitive variabelen.** Fairness through unawareness virker ikke, fordi andre variabler avslører den.
- **Debiasing øker accuracy.** Nei, det var det gale alternativet i 2024 Q20. Fairness og accuracy kan trekke mot hverandre (fasit 2021).
- **Equal opportunity: TPR eller FPR?** Boka definerer det med TPR, men COMPAS-tallet er FPR. Si hvilken rate du bruker.
- **Verification og validation byttes om.** Verification: riktig bygd etter spesifikasjonen. Validation: riktig spesifikasjon.

### Koblinger til andre kapitler

- → kap. 1–2 / E01: standardmodellen (gi et mål, la agenten maksimere) er det AI safety angriper. En utility-basert agent er bare så trygg som nyttefunksjonen sin. Beneficial machines (1.1.5) er bokas alternativ.
- → kap. 2 / E01: P i PEAS er performance measure, og det er der etikken kommer inn. Fasiten i 2021 (6.3) foreslo fairness som del av målfunksjonen. Consequentialism (2.2.1) er spørsmålet i 2020.
- → kap. 24–25 / E20: debiasing i NLP kom på eksamen 2024 (Q20). Koblingen står i eksamenen, ikke i kap. 28.
- → kap. 18 / E10: spillteori og utility med flere agenter. Fasiten i 2020 roste koblingen mellom etikk, spillteori og utilities. L12 nevner assistance games, der agenten er usikker på menneskets preferanser.
- → kap. 7.7: qualification problem, umuligheten av å liste alle unntak, er samme idé som informality. 7.7 er UT.

### Ikke pensum her

- 28.3.5 The future of work og 28.3.6 Robot rights: **UT** (Canvas). L12 s. 37 sier bare «§28.3 (the whole chapter)», og de ble ikke forelest. Videoen nevner dem kort som bakgrunn.
- Systems reply, inverted spectrum og the hard problem: står ikke i 4e-teksten. De er tatt med som bakgrunn, fordi de er de vanlige motargumentene.
- 7.7 (qualification problem i agentene): UT (Canvas).
- 1.1.5 Beneficial machines og 1.5 Risks and benefits: i pensum, men bare i boka, ikke forelest (PENSUMOVERSIKT).
- 28.1.4 Measuring AI: bare Turing-test og ELIZA er forelest (L1 del 1), ikke resten av delkapitlet (PENSUMOVERSIKT).

### Øv selv

1. **Eksamen 2025, oppgave 13b (3 p).** Explain the argument from informality of behavior and the mathematical objection as proposed limits of artificial intelligence. For each argument, state its central claim and describe one specific reason why the claim may not be decisive.
2. **Lukkede spørsmål.**
   - a) Eksamen 2024 Q20 (flervalg, velg det *gale* utsagnet om debiasing i NLP). Alternativene:
     - «Fairness constraints can be applied during model training to encourage equitable predictions across different demographic groups.»
     - «Debiasing in NLP ensures that the model increases its accuracy.»
     - «Data augmentation is a technique used in debiasing to increase the diversity of training data and reduce bias.»
     - «Adversarial training involves training a model to detect and remove bias by learning from adversarial examples.»
     - «Word embedding debiasing can reduce bias by altering word representations to minimize associations with sensitive attributes.»
   - b) Eksamen 2019, oppgave 1 (sant/usant, 2 p per riktig, −1 per feil):
     - «A sound logical reasoning process is not necessary in order to pass the Turing test.»
     - «Explainability is an ethical problem in AI which domain knowledge may help to solve.»
   - c) Eksamen 2017, Problem 6 (sant/usant, 2 p, −1 per feil): «Philosopher John Searle suggests that any physical symbol system has necessary and sufficient means for general intelligent action.»
3. **Eksamen 2021, oppgave 6.3 (del av oppgave 6, 20 p totalt).** What kind of connection can you make between P of PEAS (in Chapter 2) and ethical issues in AI? Support your answer with arguments, concisely.
4. **Eksamen 2023, oppgave 1 (kortsvar).** Describe what individual fairness means with respect to ethics in AI, and explain what kind of methods can be used to implement/realize it in an AI system.
5. **Eksamen 2020, Ethical Issues.** One of the approaches to ethics we have seen is the consequentialist approach. How can you connect this approach to the rest of the syllabus in this course? Explain your reasoning.
6. **Regning (eget).**
   - a) Gruppe C har 100 personer, og 30 begår ny kriminalitet. Modellen gir tp 14, fp 6, fn 16, tn 64. Er modellen kalibrert sammen med gruppe B fra tabellen over? Regn TPR og FPR for C. Hvilke fairness-kriterier holder mellom B og C?
   - b) I k-tabellen: hva blir k hvis du bare fjerner hele postnummeret og beholder år og kjønn?

### Fasit

**Quizene i videoen**

- q1: «En maskin kan aldri ha humor» er **disability**, en liste over X maskinen aldri skal klare.
- q3: etter steg 1 er **k = 1** (1986 · M · 704* er alene, og k er den minste gruppen). Med året som intervall 1985–87 blir det to grupper på tre, og **k = 3**.
- q4: andel falske alarmer (FPR) er **A: 18/50 = 36 %** og **B: 12/60 = 20 %**. Modellen er kalibrert, men har nesten dobbelt så mange falske alarmer i A. Og 60 mot 40 i høy-boksen bryter demographic parity.
- s62 (eksamen 2025 13b): se tabellen under «Drøftingsmal».

**Øv selv**

1. Se drøftingstabellen. Fasiten godtar for mathematical objection hvilken som helst av de tre grunnene: «no shame in limits», «applies to mathematics, not to minds» eller «computers are finite, not infinite Turing machines». For informality godtas at kritikken treffer regelbasert GOFAI, ikke datamaskiner, og at probabilistic reasoning og læring takler det uformelle.
2. Fasit:
   - a) «Debiasing in NLP ensures that the model increases its accuracy» er feil. Debiasing kan til og med koste accuracy.
   - b) Begge er **sanne**. Mennesker bruker ikke alltid sound logical reasoning.
   - c) **Usant.** Det er Newell og Simons hypotese, og Searle mener det motsatte.
3. Performance measure bestemmer hva agenten optimerer. Etiske hensyn (fairness, personvern, sikkerhet) må derfor inn i P, for eksempel fairness som del av målfunksjonen. Ellers optimerer agenten bort det vi ikke målte. Et godt svar nevner at fairness og accuracy kan trekke mot hverandre, så det trengs en avveining. Fasiten sier at de fleste fikk full score med gode argumenter.
4. Like kandidater behandles likt, uansett gruppe. Det krever et mål for likhet mellom kandidater og en sjekk av at like kandidater får samme avgjørelse. Hvis ikke, er systemet skjevt eller inkonsistent. Fasiten foreslår gjennomsiktige metoder som case-based reasoning eller nearest neighbour.
5. Åpent spørsmål der alle begrunnede svar godtas. Fasiten nevner disse koblingene: consequentialism vurderer handlinger etter utfall, akkurat som agentbegrepet, performance measure og rasjonalitet; søkestrategier; adversarial search; og særlig spillteori og utilities.
6. Regning:
   - a) Calibration: C har PPV 14/20 = 70 % og lav-boks 16/80 = 20 %, samme som B, så modellen er **kalibrert**. TPR = 14/30 ≈ 47 % og FPR = 6/70 ≈ 9 %, mot 70 % og 20 % i B. Equal opportunity holder ikke, og demographic parity heller ikke (20 mot 40 flagget). Lavere grunnrate gir færre falske alarmer.
   - b) Gruppene etter år + kjønn er 1985 · K (3), 1987 · M (2) og 1986 · M (1), så **k = 1**. Postnummeret var ikke det som skilte ut rad 4, det var året.

**Faglige usikkerheter**

- Systems reply, inverted spectrum og the hard problem står ikke i 4e-teksten. Videoen merker dem, og eksamen vil neppe kreve dem.
- Boka definerer equal opportunity med TPR, men tallet den bruker for COMPAS (45 % mot 23 %), er FPR. Videoen og notatet sjekker begge ratene.
- Poengverdien for 2024 Q20 står ikke i oppgavefilen.
- Eksemplene merket ILLUSTRASJON (k-tabellen, gruppene A, B og C, maskene og DP-kurvene) er laget for videoen. COMPAS-tallene, Sweeneys 87 % og lønnstallene er bokas eller forelesningens.

---

<a id="feller"></a>

## Alle eksamensfeller samlet

### [E01](#e01) Hva er AI, og hva er en rasjonell agent?

- **«Rasjonell = perfekt» er feil.** Rasjonell maksimerer forventet ytelse, gitt percept sequence og forkunnskap. Perfekt krever omniscience.
- **Agent function avbilder hele percept sequence**, ikke bare siste percept. 2024-fasiten måtte presisere dette, fordi et alternativ sa «map the percepts».
- **Agent function er ikke agent program.** Funksjonen er den abstrakte avbildningen. Programmet er koden som kjører på arkitekturen.
- **Transition model er ikke mengden handlinger.** Den sier hva som blir resultatet av en handling i en tilstand (2024 Q1).
- **«Bare» og «alltid» i påstander.** Støvsugeren uten lokasjonssensor *kan* bruke randomisering, men randomisering er ikke den eneste måten (2024 Q1, der to alternativer ble godtatt).
- **Model-based reflex velger fortsatt med regler.** Modellen gir bare bedre input til reglene. Goal-based krever søk og planlegging (2025 Q1: Rule matching; Rule matching; Search and Plan).
- **Performance measure skal handle om miljøet, ikke om oppførselen.** Ellers får du støvsugeren som tømmer ut skitt.
- **Known er ikke fully observable.** Kabal er known, men partially observable.
- **Backgammon er stochastic** (terninger), ikke deterministic (2017). Sjakk med klokke er *semi*(dynamic). Medical diagnosis er *single* agent. Image analysis er *episodic*.
- **Stochastic eller nondeterministic?** Med sannsynligheter er det stochastic. Er utfallene bare listet, er det nondeterministic.
- **«Strategic» står ikke i kap. 2 i 4e.** Begrepet dukket opp i fasiten for 2021, som også godtok deterministic, stochastic og strategic. Med 4e bør du si multiagent og så stochastic eller deterministic, med begrunnelse.
- **Turing-testen måler oppførsel** (acting humanly). Agenten trenger ikke tenke som et menneske (2015) og trenger ikke sound logical reasoning (2019, sant).
- **PSSH er Newell og Simon**, ikke Searle. Searle mente det motsatte (2017).
- **Begrunn og skriv antakelser.** Når oppgaven ber om «environment properties», vil sensor ha egenskapene (fully/partially osv.) med begrunnelse, ikke bare en liste over ting i miljøet. Løsningsforslaget for 2022 listet bare tingene, så gjør begge deler.

### [E02](#e02) Søk uten kart: BFS, UCS, DFS og IDS

- **Stoppe UCS (eller A\*) når målet dukker opp i frontier.** Målet er først funnet når det tas ut. Med L2-grafen gir feil test 25 i stedet for 23.
- **«BFS finner billigste vei».** Det gjelder bare når alle steg koster likt (2025: riktig svar bare ved flaks).
- **Glemme at en billigere vei erstatter en node i frontier og reached.** Lærestoffet viser G 25 → 23. Ikke behold begge, og ikke ignorer den nye.
- **Tie-break.** Kurset bruker alfabetisk rekkefølge. Ved DFS betyr det at B tas før C blant like dype noder, så B må ligge øverst i stabelen.
- **Tree-like eller graph search?** Les oppgaven. I eksamen 2023 (2.1, tree-like) går DFS i løkka A → A og finner ingen løsning («Found path ∅»), mens BFS gir S, A, B, (G) og UCS gir S, A, B, C, (G).
- **Svarformat.** Skriv ekspansjonsrekkefølgen med målet i parentes, stien og kostnaden. Si om startnoden er med: fasiten for 2025 c) teller ikke s, mens fasiten for 2023 tar med S.
- **«Kompleksiteten til BFS er bm» er usant** (2019, oppgave 1). BFS er O(b^d). O(bm) er plassen til DFS.
- **«IDS er optimal når stegkostnadene er like, b er endelig og en løsning finnes» er sant** (2015). Uten like kostnader er IDS ikke optimal.
- **UCS er bare complete når alle kostnader er ≥ ε > 0.** En sløyfe med kostnad 0 kan holde UCS i gang for alltid.
- **DLS skiller cutoff fra failure.** Cutoff betyr «ingen løsning innenfor grensen». Noder på dybde ℓ testes, men ekspanderes ikke (se merknaden om Fig. 3.12).
- **Tabellen gjelder tree-like.** Graph-search DFS er complete i endelige rom.
- **Toveis med kostnader:** første møte er ikke bevis for optimal løsning.

### [E03](#e03) A* og kunsten å gjette godt

- **Stopper når målet genereres.** I A* og UCS testes målet når noden tas ut av frontier. På løkkegrafen gir tidlig test S B G = 17 i stedet for 12. Bare BFS tester ved generering.
- **Glemmer alfabetisk tie-break.** Fasitene bruker alfabetisk rekkefølge, eller venstre til høyre, både ved generering og ved like f-verdier. Skriv f-verdiene i frontier for hvert steg.
- **Blander tree-like og graph search.** Eksamen 2023 oppg. 2.1 ba om tree-like search. Da står løkke-A med f = 20 i frontier, og greedy går i evig løkke. Med graph search (Fig. 3.7, som Ø1 bruker) forkastes løkka.
- **Tror admissible ⇒ consistent.** Det er omvendt. Sjekk consistency kant for kant med h(n) ≤ c + h(n′).
- **Tror inadmissible h alltid gir suboptimal sti.** Admissible h *garanterer* optimalitet, men en inadmissible h kan godt treffe optimalt. Eksempler: h(B) = 9 i 2023 2.2 og h(R) = 227 i 2021. Fasiten for 2021 kaller admissibility «necessary» for optimalitet. Det som menes, er at den er nødvendig for *garantien*.
- **Glemmer gjenåpning.** Med inkonsistent h kan en tilstand få en billigere vei etter at den er ekspandert. Fig. 3.7 legger den inn igjen. Si hvilken variant du bruker.
- **Glemmer h(mål) = 0.** Optimalitetsbeviset trenger det, se L3s negative eksempel.
- **Intervallgrenser.** «Uten tie-break» betyr strenge ulikheter (7 < h(B) < 11). Likhet betyr at tie-break avgjør.

### [E04](#e04) Lokalt søk: å klatre uten kart

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

### [E05](#e05) Når verden ikke adlyder: AND-OR, belief states og online søk

- **«Adversive plans».** Eksamen 2024 Q2: AND-OR-søk gir *contingency plans* (conditional plans), ikke «adversive plans». Det var det gale utsagnet.
- **OR og AND forveksles.** OR = agentens valg (én handling holder). AND = miljøets utfall eller percepter (alle må løses). L3 s. 102 omtaler handlingene som OR-nodene. I boka er tilstandene OR-noder og utfallene AND-noder. Bruk bokas variant og si hva du mener.
- **Failure ved løkke = uløselig.** Feil. Failure på en sykel betyr bare at denne grenen ikke trengs.
- **Sensorless-svaret skrevet som betinget plan.** Uten percepter kan du ikke velge. Svaret er en sekvens.
- **Update gjør mengden større.** Nei, update fjerner bare. Prediction kan vokse med ikke-deterministiske handlinger.
- **Glemmer predict i 2023 7.2.** Flytt alle kandidatene først, og fjern så dem som ikke passer P2. Bare update på hele labyrinten gir for mange svar.
- **Uklar oppgave uten antakelse.** I 2023 7.3 godtok fasiten begge tolkningene. Skriv hvilken du bruker, og hva som skjer når roboten går i en vegg.
- **LRTA\*: oppdaterer feil tilstand.** H oppdateres for staten agenten *forlater*, med minimum over alle handlinger, før den går. Den går dit c + H er minst.
- **Online-agenten kjenner RESULT.** Nei, den lærer `result[s, a]` først etter å ha prøvd.
- **Bytter rad og kolonne.** Eksamensfiguren har r0 nederst. Bokas Fig. 4.18 nummereres ofte ovenfra. Les aksene.

### [E06](#e06) CSP 1: modellering og constraint propagation

- **Feil retning i REVISE.** Buen (X, Y) stryker bare i D(X). Ikke rydd begge sider i samme rad.
- **Glemt å legge tilbake buer som alt er brukt.**
  - I A < B < C forsvinner rad 5 da, og A står igjen med {1, 2}. Det er feil svar: A = 2 har ingen B > 2.
  - Fasitene vil se buen bakerst i køen.
- **Lagt tilbake Y→X i tillegg.** Det gir samme domener, men flere rader. Bokas regel er «unntatt Y→X», og 2021-kontfasiten bruker den andre varianten. Skriv hvilken regel du følger.
- **Samme bue to ganger i køen.** Står buen alt i køen, legges den ikke inn igjen.
- **Uryddig tabell.** Bruk kolonnene kø før pop, bue, domener før og etter, og hva som legges til. Behold køen i FIFO-rekkefølge, slik oppgaven sier (ofte sortert ved start).
- **Fortsatt etter tomt domene.** Blir et domene tomt, svarer AC-3 false med en gang.
- **«AC-3 ga true, altså finnes en løsning».** Nei. Arc consistency alene garanterer ingen løsning: Australia med to farger er arc-consistent, men WA, NT og SA er naboer parvis. Og selv om AC-3 svarer true, kan det finnes flere løsninger (kryssordet).
- **Node consistency glemt.** Gjør unary constraints (ordlengder, «oddetall») før AC-3. Oppgavene spør ofte eksplisitt om det.
- **Telle constraints og buer.**
  - Antall buer er 2 × antall binære constraints.
  - Kryssordfasiten teller også de unary constraints (8 i alt).
  - Alldiff over k variabler tilsvarer k(k−1)/2 ulikheter.
- **Kompleksitet.** O(cd³), ikke O(cd²). Den ekstra d-en kommer av at hver bue kan komme tilbake d ganger.
- **3-consistent er ikke strongly 3-consistent.** Bare strongly k gir alle lavere nivåer.
- **Modellering.** Velg variabler slik at hver løsning gir ett svar. I husgåter er husnummeret verdien, ikke variabelen.

### [E07](#e07) CSP 2: backtracking, heuristikker og min-conflicts

- **Degree teller bare utilordnede naboer.** I steg 2 har WA grad 1, ikke 2, fordi SA allerede er tilordnet. Bruker du den statiske graden, får du feil kandidater.
- **Uten forward checking krymper ikke domenene av seg selv.** Står det «backtracking uten FC» (som i 2018 og 2023), må du selv sjekke hvilke verdier som fortsatt er lovlige mot det som er tilordnet, før du teller MRV og LCV.
- **LCV teller verdier som forsvinner hos de utilordnede naboene**, og du velger den med *lavest* tall. Den med flest fjernede verdier prøves sist.
- **Følg tie-break-regelen i oppgaven.** Alfabetisk (AL2), tallrekkefølge for variabler og alfanumerisk for verdier (2018/2023), eller høyeste verdi og høyeste indeks (2022). Skriv regelen du bruker i svaret.
- **Min-conflicts velger variabelen tilfeldig blant de konfliktfylte.** Fella i 2024 Q9 er å velge den med flest konflikter. Det er verdien som velges grådig, ikke variabelen.
- **Raden der dronningen står, teller også.** Er den nåværende raden like god som de beste, er trekket sidelengs. Er den eneste beste, blir dronningen stående.
- **FC er ikke arc consistency.** FC reviderer bare buene inn mot variabelen du nettopp satte. MAC fortsetter med nye buer.
- **Fail-first gjelder variabler, fail-last gjelder verdier.** Ikke bland dem.
- **n!·dⁿ mot dⁿ.** Faktoren n! forsvinner fordi tilordningene er kommutative, ikke fordi treet beskjæres.

**Bok mot kurs.** Fasiten for 2022 (oppgave 4.2) kaller MRV «Max-conflicts» og LCV «Min-conflicts». Fasiten for 2023 (oppgave 4) skriver «min_values (MRV) and min_conflicts» og merker hvert verdivalg med «min_conflicts». I boka er *min-conflicts* navnet på den lokale søkealgoritmen i 5.4, ikke en verdiheuristikk. Regnestykket i fasitene er vanlig LCV, så svaret blir det samme. Bruk bokas navn (MRV, LCV) i svaret ditt, men kjenn igjen fasitens ord om de dukker opp i en oppgavetekst. Forelesning 4 bruker «most constrained variable» om MRV og viser MAC uten å bruke navnet. Degree heuristic, tabu search og constraint weighting står bare i boka.

### [E08](#e08) Spill 1: minimax og alpha-beta

- **α og β byttet om.** MAX sammenligner v med β, og MIN sammenligner v med α. I håndsporing 3 har F sett 1 mens α = 5, og mange kutter da. F er MAX, og det neste bladet kunne vært 1000.
- **Kutt på feil nivå.** Et kutt fjerner bare resten av barna til noden som kutter. Det er C som kutter i håndsporing 3, så bare G forsvinner, ikke F.
- **Likhet.** Boka kutter ved likhet (v ≥ β, v ≤ α). Eksamen 2018 godtok E som kuttet og som ikke kuttet ved V = 6 ≥ β = 6. Fasiten for 2019 godtok svar både med og uten K eller L, siden de er like. Skriv derfor ≥ og ≤.
- **Eksakt verdi i kuttede noder.** Skriv grensen, for eksempel «i ≤ 6» og «e ≥ 11» som i fasiten for 2020 kontinuasjon, eller C ≤ 2.
- **α eller β som kommer langt ovenfra.** I 2025-oppgaven kom α = 10 fra roten, tre nivåer over G.
- **Begrunn hvert kutt med tall.** Fasitene vil ha formen «Prune I because v = 5 ≤ α = 10» (2025) eller «Prune H and I because V = 9 > Beta = 6» (2018).
- **Ta med hele undertreet.** Når N kuttes, besøkes heller ikke O og P.
- **Rekkefølgen.** Barn tas fra venstre mot høyre (alfabetisk) hvis oppgaven ikke sier noe annet. En annen rekkefølge gir andre kutt, men samme rotverdi.
- **Minimax er en garanti, ikke et best mulig svar mot alle.** Mot en svak eller tilfeldig motstander kan andre valg gi mer (expectimax, E09).

### [E09](#e09) Spill 2: evalueringsfunksjoner, MCTS, sjanse og skjult info

- **Hopper over MIN-laget.** Tar du snittet av bladene direkte i 2023/6, blir B = 0,5·3,5 + 0,5·5,5 = 4,5 og C = 0,25·3 + 0,75·9 = 7,5. Valget blir riktig, men verdiene er feil og gir trekk. Regn nedenfra: MIN før sjanse før MAX, og skriv alle mellomverdiene slik fasiten gjør.
- **Tror forward pruning er trygt.** Bare alpha-beta garanterer samme svar som minimax. Beam og ProbCut kan kaste det beste trekket.
- **MCTS returnerer høyest vinnerandel.** Nei, flest playouts (65/100 slår 2/3).
- **Tror eval bare må rangere riktig.** I deterministiske spill holder rekkefølgen (monoton transformasjon gir samme minimax-valg). Med chance nodes må eval være positiv lineær, ellers kan valget snu (Fig. 6.14).
- **Blander expectimax og expectiminimax.** Expectimax: MAX og chance (motstanderen modelleres som tilfeldig). Expectiminimax: MAX, MIN og chance. 2018 T/F påstår at expectimax passer bedre enn minimax i deterministiske miljøer. Det er usant.
- **Feil symbol.** △ = MAX, ▽ = MIN, ○ = chance node (2015 flervalg).
- **Lover for mye om regret.** L8 sier bare at *gjennomsnittet* av sannsynlighetene går mot Nash når antall iterasjoner går mot uendelig. Siste strategi kan svinge.
- **Kurs mot bok.** L8 bruker andre sjakkvekter (16/8/5/1) enn boka (9/5/3/3/1), og skriver figurene med US-nummer (Fig. 5.10 = Global 6.10).

### [E10](#e10) Spillteori: Nash, dominans og gjentatte spill

- **π₁ med feil spillers tall.** π₁ skal gjøre P2 likegyldig, så du bruker P2s tall. Med egne tall blir BoS-svaret 1/3 i stedet for 2/3.
- **Weak behandlet som strict.** Én likhet (5 = 5) er nok til at det ikke er strict. Med weak kan rekkefølgen endre svaret, og du kan stryke en Nash-likevekt (eksamen 2025, oppgave 4).
- **Stoppe etter første runde i IESDS.** Noe som ikke er dominert i starten, kan bli dominert senere.
- **Nash-likevekt er ikke det samme som et godt utfall.** Spør oppgaven om Pareto eller social welfare, er svaret ofte et annet utfall enn likevekten (PD, 2019, 2023).
- **Glemme like tall når du ringer inn.** Like beste svar ringes inn begge to. Ellers mister du likevekter.
- **Blandet likevekt som ikke finnes.** Gir likningen π utenfor [0, 1], har spillet ingen helt blandet likevekt (PD: π₂ = −1/4).
- **Gjentakelse er ikke nok.** Med fast, endelig og kjent antall runder gir backward induction svik i alle runder (eksamen 2024, Q13). Samarbeid krever uendelig eller ukjent antall runder og stor nok δ.
- **Grim-utledningen.** Svik gir 0 i runde 0, ikke −1, og straffen starter i runde 1. Derfor står δ i telleren: −5δ/(1 − δ).

### [E11](#e11) Logikk 1: modeller, entailment og sannhetstabeller

1. **⊨ er ikke ⇒.** ⇒ er en konnektiv inne i en setning og er sann eller usann i én modell. ⊨ er en påstand om alle modeller. Spør oppgaven om entailment, er det ikke nok å regne ut α ⇒ β i én rad. Kolonnen må være T i *hver* rad. 2016 oppgave 2 ba om nettopp denne forskjellen.
2. **Retningen.** KB ⊨ α betyr M(KB) ⊆ M(α). Den lille mengden står til venstre. Har α flere modeller enn KB og de dekker KB-modellene, gjelder KB ⊨ α, ikke α ⊨ KB.
3. **«Usant premiss gir usann implikasjon».** Feil: F ⇒ hva som helst er T. P ⇒ Q er usann bare i raden P = T, Q = F. ⇒ krever heller ingen årsakssammenheng.
4. **Ekvivalenstabell vs. entailmenttabell.** For α ⊨ β sjekker du bare radene der α er T, og der må β også være T. For α ≡ β må kolonnene være like i *alle* rader. Ikke krev like kolonner når oppgaven spør om ⊨.
5. **Presedens.** ¬A ∧ B er (¬A) ∧ B. Sett parenteser når du er i tvil.
6. **«Vet ikke» er ikke «nei».** KB ⊭ P₂,₂ betyr ikke at KB ⊨ ¬P₂,₂. I fig. 7.5 holder ingen av dem.
7. **Feil antall rader.** Tell symbolene, ikke setningene. Wumpus-KB-en har 5 setninger, men 7 symboler og 128 rader.
8. **2022-fasitens 5.3 tar feil om beskjedene.** Den sier at M₁ er den eneste sanne beskjeden. I KB-modellen (B₁ = T, B₂ = B₃ = F) er M₁ = ¬B₁ = F og M₂ = ¬B₂ = T. Den sanne beskjeden er M₂. Ikke kopier den setningen.
9. **Halv tabell.** Fasitene viser hele tabellen med kolonner for delsetningene og peker eksplisitt på KB-radene. Gjør det samme, ikke skriv bare konklusjonen.

### [E12](#e12) Logikk 2: inferensregler, CNF og resolution

- **XOR oversatt som ∨.** 2018 P6-fasiten trekker poeng hvis «one is brown and one is white» blir B2 ∨ B3. Setningen sier at nøyaktig én er brun.
- **⇒ og ⊨ blandes.** ⇒ står inne i en setning (én modell). ⊨ er en påstand om alle modeller.
- **To komplementære par kuttes samtidig.** P ∨ Q ∨ R mot ¬P ∨ ¬Q gir *ikke* R. Kutt ett par om gangen. Da får du Q ∨ ¬Q ∨ R eller P ∨ ¬P ∨ R, som er tautologier og ikke hjelper.
- **De Morgan uten å bytte konnektiv.** ¬(α ∨ β) blir ¬α ∧ ¬β, ikke ¬α ∨ ¬β.
- **Distribusjon før negasjonen er flyttet inn.** Følg rekkefølgen ⇔, ⇒, ¬, distribusjon.
- **Glemt å negere målet** i resolution refutation, eller å legge til målet selv i stedet for negasjonen.
- **Bevis uten regelnavn og linjenumre.** 2023 3.1 krever begge i hvert steg, og at Modus tollens brukes.
- **Feil om metning.** Metning uten □ betyr KB ⊭ α. Det betyr ikke KB ⊨ ¬α.
- **Horn-telling.** En klausul med to positive literaler (som ¬A ∨ B ∨ C) er ikke Horn. En goal clause (¬A ∨ ¬B) er Horn, men ikke definite.

### [E13](#e13) SAT: DPLL og WalkSAT

- **Unit før pure:** fig. 7.17 sjekker pure før unit. Begge rekkefølgene kan gi samme modell, men forløpet blir feil, og det er forløpet som etterspørres. Skriv rekkefølgen sann → usann → pure → unit → gjett.
- **Telle fortegn i sanne klausuler:** pure avgjøres bare over klausuler som ikke allerede er sanne. I gjennomgangseksempelet er C pure etter A = false bare fordi C4 er sann.
- **Kalle et symbol pure fordi det ikke står noe sted:** et symbol som bare står i sanne klausuler, er ikke pure etter konvensjonen her. Det trengs heller ikke.
- **Glemme early termination:** en klausul er usann så snart *alle* literalene er usanne. Du trenger ikke vente til alle symbolene er satt.
- **Tro at WalkSAT failure betyr unsatisfiable:** det betyr bare at modellen ikke ble funnet innen max_flips. Til å bevise entailment trengs en complete metode som DPLL eller resolution.
- **Tro at flere klausuler gjør problemet vanskeligere:** de vanskeligste setningene ligger ved terskelen. Overconstrained setninger avvises fort.
- **Si 4,26 eller 4,3 uten kilde:** bokteksten og fig. 7.19 sier ≈ 4,3, mens litteraturnotene sier 4,26. Oppgi begge eller «rundt 4,3».
- **Uten navn på stegene:** skriv for hvert steg om det er pure, unit (med klausul), gjett eller konflikt. Uten navn kan sensor ikke se at du følger algoritmen.

### [E14](#e14) Førsteordens logikk: å si «alle» og «noen»

- **∧ under ∀.** `∀x King(x) ∧ Person(x)` gjør alt til konger. 2017 problem 5: «Men and women are welcome to apply» som `∀x [(M(x) ∧ W(x)) ⇒ Apply(x)]` er *False*. Den sier noe om alt som er både mann og kvinne. Fasiten peker på ∨.
- **⇒ under ∃.** `∃x Professor(x) ⇒ Teaches(x, EiT) ∧ Teaches(x, AI)` er sann bare fordi noe ikke er en professor. 2017 problem 5, alternativ 1 (`∃x∀y[Person(x) ∧ Game(y) → Plays(x, y)]`), er feil av samme grunn. Riktig er alternativ 4: `∃x∀y[Person(x) ∧ [Game(y) → Plays(x, y)]]`.
- **x og y kan være samme objekt.** «Minst to» uten `¬(x = y)` gir poengtrekk (2021 1.3, 2019 oppgave 7). I 2025 Q9 gir regelen `∀x,y,z Loves(x, z) ∧ Loves(y, z) ⇒ Jealous(x, y)` også `Jealous(Alice, Alice)`. Fasiten ber bare om `Jealous(Alice, Carrie)` med θ = {x/Alice, y/Carrie, z/Bob}, men ved forward chaining til fixpunkt følger begge.
- **Kvantorrekkefølge.** `∀x ∃y` ≠ `∃y ∀x`. 2016: «Every Russian school boy knows a game» har to tolkninger. A er `∃y [G(y) ∧ (∀x R(x) ⇒ K(x, y))]`, B er `∀x [R(x) ⇒ ∃y (G(y) ∧ K(x, y))]`.
- **To fakta er ikke «nøyaktig to».** I standard semantikk er minimum én bror. Vil du ha nøyaktig to, må ulikheten og «bare disse» skrives ut.
- **Variabler og konstanter.** Hold én konvensjon. 2023-fasiten bruker store bokstaver for variabler (X, Y) og små for konstanter (fido). Boka gjør det omvendt.
- **Bakgrunnskunnskap.** 2019 oppgave 2 krevde at du selv la til `∀x Cat(x) ⇒ Animal(x)` før resolution kunne bruke at Kismet er en katt.
- **Les baklengs.** 2022 oppgave 6: `∀x ¬R(x) ⇒ ¬Q(x)` er kontraposisjonen av `∀x Q(x) ⇒ R(x)`, altså «alle Q er R». Da følger `∀x ¬R(x) ⇒ ¬P(x)` når også `∀x P(x) ⇒ Q(x)` gjelder.
- **Funksjonsterm er ikke en setning.** `LeftLeg(John)` er et objekt. Det kan ikke stå alene som en påstand, og det kan ikke stå under ∧.

### [E15](#e15) FOL-inferens 1: unification, GMP og chaining

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

### [E16](#e16) FOL-inferens 2: CNF og resolution steg for steg

1. **∀ med ∧, ∃ med ⇒.** ∀x Cat(x) ∧ Animal(x) sier at alt er katter. Skriv ∀x Cat(x) ⇒ Animal(x) og ∃x Cat(x) ∧ … .
2. **Skolem-konstant der det skal være funksjon.** ∃ inne i ∀x gir F(x). Flower(C2) i 2025 Q10 er feil, Flower(F(x)) er riktig. Har ∃ flere omsluttende ∀, får funksjonen alle som argumenter: ∀x ∃y ∀z ∃w … gir F(x) og G(x,z).
3. **Skolemisering før ¬ er flyttet inn.** En ∃ foran en pil eller under en negasjon kan bli en ∀.
4. **Glemt standardisering.** Uten nye navn kan UNIFY feile (Loves(x,F(x)) mot Loves(Jack,x)) eller binde for mye.
5. **Glemt å negere målet, eller negert for sent.** Negér hele målet med kvantorene, flytt ¬ inn, og skolemiser til slutt. 2022-fasiten dropper ∀ før den negerer. Det gir riktig svar der, men metoden kan gi falske bevis (se fellen over).
6. **Steg uten θ.** Fasiten vil ha de to setningene, θ og resultatet for hvert steg (2025 Q10, 2019 «Show each and every unification»).
7. **Ufullstendig CNF.** Distribusjonen (steg 7) må med. 2021-fasiten stopper før steg 7, men oppgaven ber om CNF.
8. **Feil skolemisering ved gjenbruk av samme navn.** Samme ∃y får samme funksjon overalt. To ulike ∃ får ulike funksjoner (2024 Q16).

### [E17](#e17) Kunnskapsrepresentasjon: ontologier, hendelser og semantiske nett

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

### [E18](#e18) Planlegging 1: PDDL, forward og backward search

- **Negasjon i tilstanden.** «P1 er i JFK og ikke i SFO» skrives `At(P1, JFK)`. Closed world gjør resten.
- **Glemt delete list.** Uten `¬At(p, from)` står flyet to steder etter Fly.
- **Effektvariabel som ikke står i PRECOND.** Hver variabel i EFFECT må stå i PRECOND og i parameterlista. Fasiten til 2023 oppg. 8 bryter regelen selv: `TakeBus(from, to)` bruker `user`, som ikke er parameter, og `to` står bare i EFFECT. Bruk konstanten `User` og legg til `Place(to)` i PRECOND. Det samme gjelder `Go(from, to)` i fasiten til 2022 oppg. 7.
- **∀ og ∨.** PDDL har bare konjunksjoner av literaler.
- **Mål og tilstand blandes.** I et mål er variabler og negasjon lov; i en tilstand er de forbudt.
- **Regresjon:** glem ikke å trekke fra ADD, behold resten av målet, og legg til PRECOND, ikke EFFECT.
- **Relevant, men sletter et mållitteral** (`Poor ∧ Famous` for målet ¬Poor ∧ Famous): ikke relevant.
- **Last i fly står ikke på flyplassen.** In(c, p) erstatter At(c, a).
- **«Ignore delete lists er admissible»** gjelder bare den *optimale* relakserte planen. Hill climbing gir en tilnærming som kan bli for lang.
- **Å telle manglende mål** kan bli for høyt når én handling gir flere mål. Set cover over mållitteralene retter det, men ser bort fra at handlinger kan oppheve hverandre. Greedy set cover er ikke admissible.
- **Fasiten vil ha tilstanden før og etter hvert steg** når oppgaven ber om det (2022 oppg. 7.2, 2023 oppg. 8). Skriv kjeden g₀, g₁, … som tabellen over.
- 2024 Q18 (flervalg om planlegging): bare fasiten finnes i kildene, ikke spørsmålsteksten. Den nevner `Move(Disk1, TowerA, TowerC)` og setningen «We cannot have negated literals nor instantiations in PDDL». Uten spørsmålet er det uklart hva fasiten mener, så ikke lær setningen som regel: negative literaler er lov i mål, PRECOND og EFFECT, bare ikke i en tilstand, og en ground action er nettopp et instansiert skjema.

### [E19](#e19) Planlegging 2: hierarkier og en usikker verden

- **«Minst én» mot «alle».** En høynivåplan når målet hvis minst én implementasjon gjør det, fordi agenten velger. En plan i en ikke-deterministisk verden må virke for alle utfall, fordi naturen velger.
- **Refinement er ikke det samme som implementation.** En refinement kan inneholde HLA-er. En implementation inneholder bare primitive handlinger. Fasiten til 2025 oppg. 11a vil ha akkurat det skillet.
- **HIERARCHICAL-SEARCH finner ikke korteste plan.** Den er breddeførst over refinements, så planen med færrest nedbrytninger kommer først, ikke planen med færrest steg.
- **Sensorless er open world.** «Ikke nevnt» betyr ukjent. Svarer du «usann», bruker du closed world, som er klassisk planlegging.
- **Forskjellene i 2025 oppg. 11b** er tre: observerbarhet (full mot ingen), verdensmodell (closed mot open world) og søkerom (tilstander mot belief states).
- **Precondition og conditional effect blandes.** En usann precondition gjør handlingen ubrukelig. En betingelse som ikke slår til, gir bare ingen endring.
- **1-CNF holder ikke alltid.** Den er lukket under vanlige PDDL-skjemaer, men conditional effects og percepts med flere percept schemas gir disjunksjoner.
- **«Adversarial plans»** er feil navn. AND–OR-søk i ikke-deterministiske miljøer gir *contingency plans* (2024 Q2).
- **Action monitoring er ikke det samme som plan monitoring.** Action monitoring sjekker bare neste steg. Plan monitoring sjekker hele resten og stopper en dømt plan tidligst mulig.
- **Løkken i reparasjonen** står ikke i planen. Den kommer fra plan–execute–replan.
- **Replanning garanterer ikke målet.** Det krever at det ikke finnes blindveier og at miljøet virkelig er tilfeldig, med en viss sjanse til å lykkes hver gang. Ved en skjult precondition hjelper det ikke å prøve igjen.
- **«kth root».** Boka sier at hierarkiet tar «kth root» av kostnaden. Eksponenten er (d − 1)/(k − 1), altså nærmere roten av grad k − 1. Skriv formelen, ikke slagordet.

### [E20](#e20) Språk: språkmodeller, tagging og parsing

- **Add-one: +V under brøkstreken, ikke +1.** P(dead | is) = (1 + 1)/(2 + 7) = 2/9. Med +1 under streken får du 2/3, og fordelingen summerer ikke lenger til 1.
- **«Hvorfor smoothing?»** Fasiten (2025 Q12a) vil ha to ting. For det første gir usette n-gram P = 0, og da blir hele setningen 0 fordi det er et produkt. For det andre flytter smoothing masse fra vanlige til sjeldne/usette n-gram. Beskriv én metode, for eksempel Laplace: legg 1 til alle tellinger.
- **Ukjent ord og usett par er forskjellige problemer.** `<UNK>` løser ukjente ord. Smoothing, backoff og interpolation løser usette n-gram av kjente ord.
- **Bag-of-words ser ikke rekkefølge.** Naive Bayes trenger prioren og må normaliseres før du sier «82 %».
- **Grådig tagging er ikke Viterbi.** Den beste taggen ved hvert ord gir ikke nødvendigvis beste sekvens.
- **Parsetre:** ta med ordreglene. «every wumpus smells» har seks faktorer, ikke tre.
- **Top-down mot bottom-up (2025 Q12b).** Fasiten vil ha både hvordan hver strategi bygger og én ulempe for hver:
  - Top-down starter i S og utvider mot ordene. Ulempe: den utforsker utvidelser som aldri passer ordene.
  - Bottom-up starter i ordene og kombinerer oppover. Ulempe: den bygger delstrukturer som aldri blir del av en hel parse.
  - Begge kan gjenta arbeid i blindveier.
- **CYK er bottom-up**, krever CNF og bygger også blindveier (S over «wumpus smells»). Tiden er O(n³m), ikke O(n²).
- **Information retrieval returnerer dokumenter, ikke svaret.** Det er question answering (2016 Task 6, usann påstand).
- **Over- og undergenerering** er to forskjellige feil: «Me go I» er tillatt (over), og «I think the wumpus is smelly» er ikke tillatt (under).

### [E21](#e21) Kan maskiner tenke, og hva bør de gjøre?

- **Bare navnet på argumentet.** 2025 13b gir poeng for påstand *og* én konkret grunn til at den ikke avgjør, for hvert argument. Uten motargument får du ikke full score.
- **Weak og strong blandes.** Turing-testen og de tre innvendingene i 28.1 handler om weak AI (oppførsel). Chinese room og qualia handler om strong AI (tenker den faktisk?).
- **Feil person.** Physical symbol system hypothesis er Newell og Simon, ikke Searle. Searle mener det motsatte (2017, sant/usant).
- **Bestått Turing-test = intelligent.** Nei. Å lure folk er ikke bevis, og testen krever heller ikke sound logical reasoning (2019, sant).
- **k er den typiske eller største gruppen.** Nei, k er den *minste*. Og det sensitive feltet teller ikke med i gruppene.
- **Generaliser feil felt.** I tabellen over gir postnummer alene ingen gevinst: år + kjønn skiller fortsatt 1986 · M ut.
- **De-identifisert = anonymt.** Nei, kvasi-identifikatorene står igjen.
- **Kalibrert = rettferdig.** Nei. Med ulike grunnrater kan en kalibrert modell som ikke er perfekt, ikke ha både lik TPR og lik FPR.
- **Slett den sensitive variabelen.** Fairness through unawareness virker ikke, fordi andre variabler avslører den.
- **Debiasing øker accuracy.** Nei, det var det gale alternativet i 2024 Q20. Fairness og accuracy kan trekke mot hverandre (fasit 2021).
- **Equal opportunity: TPR eller FPR?** Boka definerer det med TPR, men COMPAS-tallet er FPR. Si hvilken rate du bruker.
- **Verification og validation byttes om.** Verification: riktig bygd etter spesifikasjonen. Validation: riktig spesifikasjon.
