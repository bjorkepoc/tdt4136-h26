# E01 – Hva er AI, og hva er en rasjonell agent?

> Pensum: Global 1.1–1.5, 2.1–2.4.7 (US samme nummer) · Forelesning: L1 del 1 og 3 · Øving: – · Eksamensvekt: ~6 %
> Video: `videoer/e01-agenter/out/tdt4136-e01-agenter.mp4` (13:59)

## Kapitler i videoen

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

## Kjerneideer

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

## Algoritmer og håndsporing

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

## Eksamensfeller

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

## Koblinger til andre kapitler

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

## Ikke pensum her

- Ingen seksjoner i 1.1–1.5 eller 2.1–2.4.7 er UT (PENSUMOVERSIKT, kap. 1 og 2).
- 1.1.5 Beneficial machines er pensum, men står bare i boka. Det ble ikke forelest (PENSUMOVERSIKT).
- 1.4 The State of the Art er pensum, men står bare i boka (PENSUMOVERSIKT).
- 1.5 Risks and Benefits of AI er pensum, men står bare i boka (PENSUMOVERSIKT).
- 2.4.7 How the components of agent programs work (representasjonene) er pensum, men står bare i boka (PENSUMOVERSIKT).
- Forelest, men ikke i boka, og dermed pensum etter punkt 1 i Syllabus: kursmålet («not to learn Machine Learning, LLM, ANN»), definisjonene til McCarthy, Minsky og Charniak, epoker som ikke står i boka (for eksempel AI-vinteren 1988–93), og roboten Sofia (L1 del 1; PENSUMOVERSIKT avsnitt 6).
- ELIZA-dialogen ble forelest i L1. Boka nevner ELIZA bare i 28.1.4. Searle og PSSH ble også forelest i L1 (boka: 28.2.1).

## Øv selv

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

## Fasit

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
