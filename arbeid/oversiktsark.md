# Oversiktsark TDT4136: oppskrifter for håndsporing

Øve- og pugge-ark til eksamen 07.12.2026 (4 timer, hjelpemiddelkode D: ingen hjelpemidler). Arket kan ikke tas med inn. Det skal leses så ofte at oppskriftene sitter.

Én rad per ting. «Hva» bruker navnet eksamensoppgavene selv bruker (engelsk fagbegrep), med norsk forklaring i parentes. «Oppskrift på arket» er det som skrives ut: stegene i rekkefølge, tie-break og hva du skriver ned. ↪ markerer et mini-eksempel med egne tall. Ingen tall eller grafer er hentet fra eksamenene 2015–2025. Status: K = kandidat (ikke øvd ennå), Ø = øvd og sitter, — = skrives ikke ut. Den første raden i hvert tema er kjenneord fra oppgaveteksten → metode.

Bare «Hva» og «Oppskrift på arket» skrives ut. Knytning, Kilde og Øving står bare her. Kilde: L = forelesning med PDF-side (s.), A = øving (A1–A3 obligatoriske, A4 frivillig), AIMA = boka med Global-nummerering (Global 5 = US 6, 6 = 5, 17.2 = 18.2, 24 = 23, 25 = 24, 28 = 27). Øving viser eksamensoppgaver å øve på. Svarene står ikke her. 2019 og 2020 ordinær er spart til fullprøver.

PDF: `python3 arbeid/lag-oversiktsark-pdf.py` lager `arbeid/oversiktsark.pdf`. Sidedeling og skriftstørrelse per side står i `LAYOUT` i skriptet. HTML-mellomfila `oversiktsark-utskrift.html` lages ved siden av.

## Samme ting, ulikt tegn: forelesning og AIMA · skrives ikke ut

| Forelesning eller fasit | AIMA 4e | Merknad |
|---|---|---|
| L3: P = e^(−ΔE/T), ΔE = hvor mye verre | Fig. 4.5 (US-utgaven): ΔE = VALUE(current) − VALUE(next), P = e^(−ΔE/T); fortegnet skrives ulikt i utgaver og fasiter | Fasit 2020 bruker e^(ΔE/T) med ΔE = Eval(next) − Eval(now), negativ for et dårlig trekk. Huskeregel: eksponenten er ≤ 0, så P ≤ 1 |
| L2: sg (goal test), «explored» | IS-GOAL, reached | Eldre fasiter skriver Frontier og Explored list |
| L10: π_p = sannsynlighet for første handling | [p: one; (1 − p): two] | Samme mixed strategy |
| L10: diskontering δ, grim trigger | limit of means | L10 regner δ ≥ 1/5 med fangens dilemma-tallene |
| L10: IESDS | iterated elimination of strictly dominated strategies | Navnet IESDS står ikke i boka |
| L8: expectimax (MAX og chance) | bare expectiminimax (6.5) | Expectimax er forelesningsstoff |
| L8: vekter 16/8/5/1 | vekter 9/5/3/3/1 | Sjakk-eksempel for weighted linear eval |
| L8: US-figurnummer 5.x | Global 6.x | Kapittel 5 og 6 er byttet om |
| L4: most constrained variable, fail-first | Minimum Remaining Values (MRV) | Noen fasiter kaller MRV «Max-conflicts» og LCV «Min-conflicts»; min-conflicts er egentlig local search |
| L4: (AC-3 etter hver tilordning, uten navn) | MAC, maintaining arc consistency | |
| L7: FOL→CNF i sju steg | 9.5.1: seks steg (⇔ og ⇒ i ett) | Bruk sju steg og navngi steget |
| Fasit 2023: variabler med stor bokstav (X) | variabler med liten bokstav (x), konstanter stor | Les oppgaven nøye |
| Fasitene: θ skrives uten å utvide sammensetningen | SUBST(θ, …) | |
| E12 og 3e: agenda | 4e Fig. 7.15: queue | Samme kø; L5 viser ikke count/agenda-pseudokoden |
| L11: relevant action | eldre utgaver: consistent | |
| L12: T(f, t1, t2) | 10.3: T(f, t1, t2), Happens, Initiates, Terminates | Clipped/Restored brukes ikke |
| L12: equal opportunity = lik true positive rate | 28.3.3 | COMPAS-debatten handlet om false positive rate |

## Sideoppsett · skrives ikke ut

| Side | Første seksjon | Høyre kolonne starter med | Skrift |
|---|---|---|---|
| 1 | Agenter | Informert søk | 9pt |
| 2 | Lokalt søk | Constraint satisfaction | 10pt |
| 3 | Adversarial search | Spillteori | 9pt |
| 4 | Proposisjonslogikk | Førsteordens logikk | 9pt |
| 5 | Planlegging | Kunnskapsrepresentasjon | 9pt |

## Agenter · AIMA 2.1–2.4; L1

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Give a PEAS description | Performance measure; Environment; Actuators; Sensors; 2–4 konkrete punkter hver ↪ robotgressklipper: P klippet plen, sikkerhet, batteri; E hage, hindringer, vær; A hjul, kniv; S kamera, støtsensor, GPS | | L1 s. 19–20; AIMA 2.3.1 | 2021; 2022 2; 2025 Q1 |
| K | Characterize it in terms of the properties of task environments | begrunn hver kort; fully observable: sensorene gir hele tilstanden; multi-agent: competitive (sjakk) eller cooperative, og i competitive kan randomisering være rasjonelt (unngår forutsigbarhet); deterministic: tilstand og handling gir neste tilstand; nondeterministic: utfall uten sannsynligheter, stochastic: med; episodic: hver episode er uavhengig av tidligere handlinger; sequential: valget påvirker senere valg; dynamic: endres mens agenten tenker, semi-dynamic: bare scoren; discrete / continuous: tilstand, tid, percepts, handlinger; known: utfallene av handlinger er gitt (≠ fully observable) ↪ gressklipper: partially; single; stochastic; sequential; dynamic; continuous; known | backgammon stochastic; sjakk med klokke semi-dynamic; bildeanalyse episodic | L1 s. 21–28; AIMA 2.3.2 | 2016; 2017; 2022 2; 2025 Q1 |
| K | What agent type will work best? | simple reflex: condition-action rules (rule matching); model-based reflex: intern tilstand (transition model og sensor model) og condition-action rules (rule matching), for delvis observerbart; goal-based: search and plan; utility-based: forventet utility når mål konflikter eller er usikre; learning: performance element, critic, learning element, problem generator | | L1 s. 31–36; AIMA 2.4 | 2015; 2022; 2023; 2025 |
| K | Rational agent | maksimerer forventet performance measure gitt persept-sekvensen og innebygd kunnskap; rasjonell ≠ allvitende | | L1; AIMA 2.2 | 2017; 2018Q |
| K | Atomic, factored and structured representations | atomic: svart boks (søk); factored: variabler med verdier (CSP, PL, planlegging); structured: objekter og relasjoner (FOL) | | AIMA 2.4.7 | 2016; 2017; 2022 |
| K | History of AI (who designed …?) | 1943 McCulloch og Pitts: kunstige nevroner; 1950 Turing: Turing test; 1956 Dartmouth (McCarthy, Minsky): navnet AI; Newell og Simon: Logic Theorist og General Problem Solver (GPS), Aristoteles' means-ends-algoritme | | AIMA 1.2.1; 1.3; L1 del 1 | 2023 1.6 |

## Uinformert søk · AIMA 3.1–3.4; L2 s. 19–159; A1

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Kjenneord i oppgaveteksten | «cheapest path» → garantert billigst: UCS/A\*; spør oppgaven hvilken som finner billigste vei i en gitt graf, kjør alle og sammenlign kostnaden; «goal-test function will be called» → BFS tester ved generering, UCS og A\* ved uttak; «limited memory» → IDS; «expand the fewest nodes» → kjør alle og tell ↪ egen graf for hele søket: S→A 1; S→B 4; A→B 2; A→G 6; B→G 1; h(S) = 4; h(A) = 3; h(B) = 1; h(G) = 0 | E02; E03 | L2 s. 202 (cheatsheet); EKSAMENSPLAN feller | 2025 Q5–Q6; 2023 2.1–2.2; 2021 2; 2022 3; 2018Q P4–P5; fewest: 2016, 2025; A1 |
| K | Write down the expanded nodes in the order they are expanded (svarformat) | tabell per steg: ekspandert node; frontier med g eller f; reached; likhet brytes alfabetisk hvis ikke annet står; til slutt rekkefølge, sti og kostnad, og si om start og mål er tatt med | samme format for UCS, greedy og A\* | E02 svarformat; L2 s. 116–200 | 2021 2; 2020ResitQ |
| K | Problem formulation (søkeproblem) | initial state; ACTIONS(s); transition model RESULT(s, a); goal test; action cost c(s, a, s′) | PDDL har samme deler | L2 s. 19–30; AIMA 3.1 | 2022 3 |
| K | Breadth-first search, BFS (like kostnader) | FIFO-kø; barn i alfabetisk rekkefølge; målet testes når barnet genereres; hopp over reached ↪ ekspanderer S, A; G oppdages fra A: S–A–G, kostnad 7, ikke billigst | UCS med like kostnader | L2 s. 116–128; AIMA 3.4.1 | goal test: 2015, 2018Q |
| K | Depth-first search, DFS (lite minne) | LIFO-stabel; dypeste node først; ved lik dybde alfabetisk, så B ligger over C i stabelen; tree-like search kan gå i løkke | | L2 s. 130–142; AIMA 3.4.3 | 2023 2.1 |
| K | Depth-limited search og iterative deepening search, IDS | DLS: noder på dybde ℓ testes, men ekspanderes ikke; cutoff hvis noe ble kuttet, ellers failure; IDS: DLS med ℓ = 0, 1, 2, … fra roten hver gang ↪ ℓ = 0: S; ℓ = 1: S, A, B; ℓ = 2: S, A, B, G; sti S–A–G | Fig. 3.12 skriver DEPTH > ℓ, men L2 og teksten stopper på dybde ℓ | L2 s. 143–145; AIMA 3.4.4; E02 merknad | 2015; 2022 3 |
| K | Uniform-cost search, UCS (billigste vei) | prioritetskø på g; målet testes ved uttak; billigere vei til en tilstand i frontier erstatter den gamle; likhet alfabetisk ↪ ta ut S 0; A 1; B 3 (via A, erstatter 4); G 4: S–A–B–G, kostnad 4 | A\* med h = 0 | L2 s. 146–159; AIMA 3.4.2 | 2023 2.1; 2021 2; 2018Q P4; 2024 |
| K | Graph search vs tree-like search | graph search husker reached og utvider hver tilstand høyst én gang (best-first: en billigere vei til en tilstand i frontier erstatter den gamle, Fig. 3.7); tree-like search kan gjenta tilstander og gå i løkke; i urettet graf: si om forelderen genereres på nytt (vanlig: nei) | | L2; AIMA 3.3.3 | 2023 2.1 |

## Informert søk og heuristikker · AIMA 3.5–3.6; L2 s. 166–200; L3 s. 11–53

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Kjenneord i oppgaveteksten | «Is the heuristic admissible?» → sammenlign med h\* per node; «consistent» eller «every pair of adjacent nodes should be checked» → sjekk hver kant; «content of the priority queue at each step» → A\*-tabell med f = g + h; «expand … in this order» → én f-ulikhet per uttak mot resten av frontier, strenge ulikheter når tie-break ikke skal brukes; «return a sub-optimal path» → inadmissible h er nødvendig, men ikke nok: kjør A\* med h(x) som parameter | | L3 s. 11–29 | 2025 Q6; 2023 2.2; priority queue: 2017 |
| K | Greedy best-first search | prioritetskø på h alene; målet testes ved uttak; ikke optimal ↪ ekspanderer S, B: S–B–G, kostnad 5 | A\* uten g | L2 s. 166–181; AIMA 3.5.1 | 2016; 2018Q; 2023; 2024 |
| K | A\* search | prioritetskø på f = g + h; målet testes ved uttak; billigere vei gir ny post i køen (gjenåpning trengs bare når h ikke er konsistent); h(mål) = 0; likhet alfabetisk ↪ f: S 4; A 4 og B 5; B via A 3 + 1 = 4; G 4 + 0 = 4: S–A–B–G, kostnad 4 | UCS når h = 0 | L2 s. 182–200; L3 s. 11–12; AIMA 3.5.2 | 2025 Q6; 2023 2.2; 2017 |
| K | Is the heuristic admissible? (tillatt heuristikk) | regn h\*(n) = billigste kostnad fra n til mål; admissible når h(n) ≤ h\*(n) for alle n; én node med h > h\* gir nei ↪ h\*(S) = 4; h\*(A) = 3; h\*(B) = 1: admissible | | L3 s. 13–20 | 2023; 2024; 2025; 2017 |
| K | Is the heuristic consistent? (konsistent; monotonic) | for hver kant n → n′: h(n) ≤ c(n, n′) + h(n′), i urettet graf begge veier; konsistent ⇒ admissible, ikke omvendt ↪ h(A) = 3 og h(B) = 0 er admissible, men A→B gir 3 > 2 + 0: ikke konsistent | trekantulikhet | L3 s. 21–29; AIMA 3.5.2 | 2016; 2017; 2022; 2024; 2025 |
| K | Which set of heuristic values provides a consistent heuristic? (ukjent h(x)) | skriv ulikheten for hver kant inn og ut av x og h ≤ h\*; løs for h(x); likhet i f avgjøres av tie-break ↪ x→G 3 med h(G) = 0 gir h(x) ≤ 3; S→x 2 med h(S) = 4 gir h(x) ≥ 2 | | E03 intervaller; L3 s. 16–18 | 2017 |
| K | Relationship between admissibility and cost-optimality | admissible h ⇒ A\* er cost-optimal; konsistent h ⇒ f synker aldri langs en sti, så første uttak er optimalt; inadmissible h kan gi suboptimal sti | | L3 s. 13–30; AIMA 3.5.2 | 2021 |
| K | Which heuristic is better? (dominance; relaxed problem) | h2 dominerer h1 når h2(n) ≥ h1(n) overalt og begge er admissible (consistent), og da ekspanderer A\* ikke flere noder, bortsett fra noder med f = C\* (tie-break); relaxed problem gir admissible h; max av admissible er admissible | | L3 s. 47–53; AIMA 3.6 | |

## Søkealgoritmer sammenlignet · AIMA Fig. 3.15; 3.5; L3 s. 6, 10

| Algoritme | Frontier; måltest | Complete; optimal | Tid; minne | Kilde |
|---|---|---|---|---|
| BFS | FIFO; tidlig | ja¹; ja³ | $b^d$; $b^d$ | L3 s. 6, 10; AIMA Fig. 3.15 |
| UCS | g; sent | ja¹ ²; ja | $b^{1+\lfloor C^*/\epsilon \rfloor}$; som tid | L3 s. 10; AIMA Fig. 3.15 |
| DFS | LIFO; sent | nei; nei | $b^m$; $bm$ | L3 s. 10; AIMA Fig. 3.11–3.12, 3.15 |
| Depth-limited | LIFO til ℓ; sent | nei; nei | $b^\ell$; $b\ell$ | L3 s. 10; AIMA Fig. 3.12, 3.15 |
| IDS | ℓ = 0, 1, …; sent | ja¹; ja³ | $b^d$; $bd$ | L3 s. 10; AIMA Fig. 3.15 |
| Bidirectional | to frontiers; møtes | ja¹ ⁴; ja³ ⁴ | $b^{d/2}$; $b^{d/2}$ | AIMA 3.4.5; Fig. 3.15 |
| Greedy best-first | h; sent | ja⁶; nei | $\lvert V\rvert$; $\lvert V\rvert$ | L2 s. 166–181; AIMA 3.5.1 |
| A\* | g + h; sent | ja²; ja⁵ | eksponentiell; alle noder | L3 s. 11–30; AIMA 3.5.2 |
| Weighted A\* | g + W × h; sent | ja²; ≤ W × C\* når W ≥ 1 og h admissible | færre noder; som A\* | L3 s. 35–46; AIMA 3.5.4 |
| IDA\* | f-grense; sent | ja²; ja⁵ | gjentar noder; lineært | L3 s. 31–34; AIMA 3.5.5 |
| RBFS | beste alternativ f; sent | ja²; ja⁵ | vanskelig å anslå; lineært | L3 s. 31–34; AIMA 3.5.5 |
| SMA\* | A\* som kaster verste blad; sent | ja⁷; ja⁷ | kan veksle mellom stier; alt minnet | AIMA 3.5.5 |
| Beam search | k beste f; sent | nei; nei | rask; k noder | L3 s. 31–34; AIMA 3.5.5 |
| ↪ | tid og minne er O(…); b = branching factor; d = dybden til grunneste mål; m = største dybde; ℓ = dybdegrense; måltest tidlig = når noden genereres, sent = når den tas ut av frontier; ¹ b endelig og rommet har løsning eller er endelig; ² alle kostnader ≥ ε > 0; ³ alle kostnader like; ⁴ begge retninger BFS eller UCS; ⁵ h admissible (graph search uten gjenåpning: konsistent); ⁶ graph search i endelig rom; O(bm) med god h; ⁷ hvis grunneste mål (optimal løsning) får plass i minnet | | | | L3 s. 6, 10–29; AIMA Fig. 3.15; 3.5.1; fotnote 11 i 3.5.2; 3.5.5 |

## Lokalt søk og usikre miljøer · AIMA 4.1; 4.3–4.5; L3 s. 68–117

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Kjenneord i oppgaveteksten | «probability of accepting» → simulated annealing; «crossover» → genetic algorithm; «nondeterministic actions» → AND-OR search; «no sensors» → belief state | | L3 s. 68–117 | 2023 7; 2024 Q2, Q6 |
| K | 8-queens (number of attacking pairs) | h = antall par som angriper hverandre i rad, kolonne eller diagonal, også gjennom en annen dronning; mål h = 0 | | L3 s. 68–70; AIMA 4.1.1; 4.1.3 | 2015; 2018Q; 2023; 2024; 2025 |
| K | Simulated annealing (probability of accepting a move) | tilfeldig nabo; bedre eller lik tas alltid; verre tas med $P = e^{-\Delta E/T}$, ΔE > 0 = hvor mye verre, så P ≤ 1; T synker ↪ ΔE = 6, T = 3: e^(−2) ≈ 0.14; T = 10: ≈ 0.55 | se notasjonstabellen for fortegn | L3 s. 71–74; AIMA 4.1.2 | 2015; 2017 |
| K | Genetic algorithm (selection; crossover; mutation) | P(velg i) = fitness(i) / sum fitness; crossover ved kutt c: forelder1[1..c] + forelder2[c+1..n] og omvendt; mutasjon: tilfeldig posisjon med liten sannsynlighet ↪ fitness 6, 3, 1 gir 0.6, 0.3, 0.1; 41352 og 23514 med c = 2 gir 41514 og 23352 | | L3 s. 79–86; AIMA 4.1.4 | 2016; 2022; 2025 |
| K | AND-OR search (conditional plan; contingency plan) | OR-node = agentens valg (én handling holder); AND-node = miljøets utfall (alle må løses); løsning = betinget plan [a, if s = x then … else …]; en sykel gir failure på grenen, men en cyclic plan (while) kan løse den | HLA: minst én; AND-OR: alle | L3 s. 96–102; AIMA 4.3 | 2024 Q2 |
| K | Sensorless problem (conformant) | belief state b = mengden mulige tilstander; PREDICT(b, a) = union av RESULT(s, a) for s i b; mål når alle s i b er mål; løsningen er en sekvens ↪ b = {1, 2, 3}; Right: 1→2, 2→3, 3→3 gir {2, 3}, så {3} | sensorless planning | L3 s. 104–112; AIMA 4.4.1 | 2023 7 |
| K | Partially observable with local sensing (predict; percept; update) | b̂ = PREDICT(b, a); mulige percepts i b̂; update beholder tilstandene som passer observasjonen | contingent planning | L3 s. 113–116; AIMA 4.4.2 | 2023 7 |
| K | Online search (LRTA\*) | når agenten forlater s: H(s) ← min over b av [c(s, b, s′) + H(s′)]; ukjent s′ har H = h | | L3 s. 117; AIMA 4.5.3 | |


| Algoritme | Husker | Ut av lokalt maksimum | Complete? | Kilde |
|---|---|---|---|---|
| Hill climbing | én tilstand | nei: stopper på topp, platå eller rygg | nei | L3 s. 68–70; AIMA 4.1.1 |
| Sideways moves | én tilstand | langs platå, med grense | nei | AIMA 4.1.1 |
| Stochastic, first-choice | én tilstand | nei: tilfeldig eller første bedre nabo | nei | AIMA 4.1.1 |
| Random restart | én tilstand | ny start, i snitt 1/p ganger | ja (sannsynlighet 1) | AIMA 4.1.1 |
| Simulated annealing | tilstand og T | verre trekk med $e^{-\Delta E/T}$ | ja, når T synker sakte nok | L3 s. 71–74; AIMA 4.1.2 |
| Local beam search | k tilstander | k beste av alle etterfølgere | nei | L3 s. 59–63; AIMA 4.1.3 |
| Stochastic beam search | k tilstander | k tilfeldige, vektet etter verdi | nei | AIMA 4.1.3 |
| Genetic algorithm | populasjon | crossover og mutasjon | nei | L3 s. 79–86; AIMA 4.1.4 |
| Gradient descent | punkt x | nei: x ← x − α∇f(x) | nei | AIMA 4.2 |
| ↪ | gradient ascent x ← x + α∇f(x) er steepest-ascent hill climbing i kontinuerlig rom; α = step size: for liten gir mange steg, for stor hopper forbi | | | | AIMA 4.1; 4.2 |

## Constraint satisfaction problems · AIMA 5.1–5.4; L4; L13 s. 2; A2

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Kjenneord i oppgaveteksten | «Apply arc consistency algorithm AC-3» → AC-3-tabell; «backtracking search with forward checking» → domener etter hver tilordning; «tie breaking in numerical order» → bruk den; «Least Constraining Value» → tell fjernede naboverdier | | L4; L13 s. 2 | 2023 4; 2020ResitQ P3; 2018Q P1; 2021 3; 2022 4; 2024 Q7–Q9 |
| K | CSP definition (write the constraints; number of arcs) | X variabler; D domener; C constraints; constraint = ⟨scope, rel⟩, rel som uttrykk (X1 ≠ X2) eller tillatte tupler {(r, g), (r, b), …}; zebra: én variabel per egenskap (Red, English, Dog …) med husnummer {1, …, 5} som domene, «lives in» → likhet, «right of» → +1, «next to» → avstand 1, Alldiff per egenskapstype; flervalg: test hvert alternativ mot alle utsagnene; én binær constraint = to arcs; Alldiff over k variabler = k(k − 1)/2 ≠-constraints ↪ Alldiff(A, B, C, D): 6 constraints, 12 arcs | | L4 s. 5–11; AIMA 5.1 | 2022 4 |
| K | Apply arc consistency algorithm AC-3 | alle arcs i køen; REVISE(Xi, Xj) fjerner verdier i Di uten støtte i Dj (bare Di endres); krymper Di: legg til (Xk, Xi) for naboer Xk ≠ Xj som ikke alt står i køen; tomt domene → inkonsistent; arc consistent betyr ikke at det finnes en løsning; O(cd³) | MAC kjører AC-3 under søk | L4 s. 17–24; AIMA 5.2.2 | 2015–2018; 2020ResitQ P3; 2024 |
| K | AC-3 table (svarformat) | kolonner: kø før uttak; arc; fjernet; domene etter; lagt til ↪ X < Y < Z, D = {1, 2, 3}: (X,Y) fjerner 3; (Y,X) fjerner 1; (Y,Z) fjerner 3 og legger til (X,Y); (Z,Y) fjerner 1 og 2; (X,Y) fjerner 2; X = 1; Y = 2; Z = 3 | fasit 2021 utsatt legger også til Y→X; følg boka | E06; L4 s. 24 | 2020ResitQ P3; 2024 |
| K | Use backtracking search (with or without forward checking) | velg variabel (MRV; ved likhet det oppgaven sier, ellers degree) og verdi (LCV eller oppgitt rekkefølge); forward checking fjerner verdien hos ikke-tilordnede naboer; tomt domene → backtrack; uten forward checking endres ikke domenene, sjekk bare mot tilordnede ↪ A–B; A–C; B–C; C–D, farger {r, g, b}: degree gir C = r; FC: A, B, D = {g, b}; A = g (alfabetisk ved likhet); FC: B = {b}; B = b; D = g | | L4 s. 12–16, 25–28, 33; AIMA 5.3 | 2016; 2018Q; 2021 |
| — | Show the result of the topological sort (tree-structured CSP; AIMA 5.5 er ute i 2026) | (1) velg rot, list nodene med forelder før barn; (2) baklengs til node 2: gjør (forelder, barn) arc consistent, altså fjern i forelderen; (3) forlengs: gi hver node en verdi som passer forelderen; O(nd²) ↪ B > A og C > B, D = {1, 2, 3}, rot A: A, B, C; (B,C) fjerner B = 3; (A,B) fjerner A = 2, 3; A = 1; B = 2; C = 3 | | AL2 s. 3; AIMA 5.5 (ute) | 2025 Q7 (utenfor pensum 2026) |


| Inference | Sjekker | Når | Kilde |
|---|---|---|---|
| Node consistency | unære constraints | før søk | AIMA 5.2.1 (bare bok) |
| Arc consistency (AC-3) | hver verdi i Xi har støtte i Xj | før søk | L4 s. 17–24, 29–30; AIMA 5.2.2 |
| Path consistency | lovlig par {Xi, Xj} kan utvides til Xm | før søk | AIMA 5.2.3 (bare bok) |
| k-consistency | lovlige k − 1 variabler kan utvides til k | før søk | AIMA 5.2.4 (bare bok) |
| Forward checking | naboene til variabelen som fikk verdi | etter tilordning | L4 s. 16; AIMA 5.3.2 |
| MAC | AC-3 fra buene inn mot variabelen, og videre | etter tilordning | L4 s. 25–28; AIMA 5.3.2 |
| ↪ | node consistency: {1, 2, 3, 4, 5} med X > 2 og X oddetall gir {3, 5} | | | |

| Heuristikk | Velger | Regel | Kilde |
|---|---|---|---|
| MRV (most constrained variable) | variabel | færrest lovlige verdier igjen (fail-first) | L4 s. 34–35; AIMA 5.3.1 |
| Degree heuristic | variabel | flest constraints til ikke-tilordnede; tie-break for MRV når oppgaven ikke gir en | AIMA 5.3.1 (bare bok) |
| LCV (least constraining value) | verdi | fjerner færrest verdier hos naboene (fail-last) | L4 s. 36–37; AIMA 5.3.1 |
| Min-conflicts | verdi (local search) | tilfeldig variabel i konflikt får verdien med færrest konflikter | L4 s. 42–43; AIMA 5.4 |
| ↪ | LCV: X ∈ {1, 2}, Y ∈ {1, 2, 3}, X < Y: X = 1 fjerner én verdi hos Y, X = 2 fjerner to, så X = 1 først | | | |

## Adversarial search · AIMA 6.1–6.5; L8; L13 s. 3; A3

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Kjenneord i oppgaveteksten | «Which nodes, if any, are pruned?» eller «leaf nodes that the alpha-beta algorithm would prune» → alpha-beta med α og β for hvert kutt; «move ordering» → beste barn først; terning → expectiminimax; «less sensitive to evaluation function errors» → MCTS | | L8; L13 s. 3 | 2025 Q8; 2021 5; 2020ResitQ P4; 2018Q P2; 2023 6; 2024 Q10–Q11 |
| K | Minimax value | regn nedenfra: MAX-node (△) tar største barneverdi, MIN-node (▽) minste; beste trekk = barnet med rotverdien | | L8 s. 11–12; AIMA 6.2.1 | 2023 6 |
| K | Which nodes will not be expanded / never be visited (alpha-beta pruning)? | venstre til høyre; α = beste for MAX på stien, β = beste for MIN; α og β arves nedover, verdier går opp; MAX: kutt når v ≥ β, ellers α = max(α, v); MIN: kutt når v ≤ α, ellers β = min(β, v); kuttet fjerner resten av barna med subtrær; skriv «prune X fordi v = 2 ≤ α = 3»; kuttet node får bare en grense (≤ eller ≥) ↪ MAX-rot, MIN-barn [3, 7], [2, 9], [5, 4]: MIN1 = 3, α = 3; MIN2 ser 2 ≤ α = 3, kutt 9; MIN3 = 4; rot = 4 | likhet kutter i boka | L8 s. 13–17; AIMA 6.2.3 | 2017; 2021 5; 2025 Q8 |
| K | Multiplayer games (utility vector) | hver løvnode har en vektor (uA, uB, uC); spilleren i tur velger barnet med størst egen komponent | | AIMA 6.2.2 | 2015; 2022 |
| K | Use ExpectiMiniMax (chance nodes) | chance-node = Σ P × verdi(barn); regn nedenfra; expectimax = bare MAX og chance ↪ 0.3 → 10 og 0.7 → 2: 0.3 × 10 + 0.7 × 2 = 4.4 | | L8 s. 7–8, 35–37; AIMA 6.5 | 2018Q; 2023 |
| K | Heuristic alpha-beta (cutoff; evaluation function) | EVAL(s) ved cutoff (dybde eller tid); weighted linear: EVAL = w1 f1 + … + wn fn; quiescence search i urolige stillinger; horizon effect: trussel skyves bak grensen; forward pruning kan miste beste trekk ↪ w = (3, 1), f = (2, −1): EVAL = 3 × 2 + 1 × (−1) = 5 | | L8 s. 19; AIMA 6.3 | 2015; 2016; 2022 |
| K | Monte Carlo tree search, MCTS | (1) selection med UCB1 ned til løvnode; (2) expansion: ett nytt barn; (3) simulation: playout til slutt; (4) back-propagation av gevinster U og besøk N; velg til slutt barnet med flest playouts | | L8 s. 23–26; AIMA 6.4 | 2022 |
| K | UCB1 (selection policy) | $\frac{U(n)}{N(n)} + C\sqrt{\frac{\ln N(\text{Parent}(n))}{N(n)}}$, C ≈ √2; første ledd = exploitation, andre = exploration ↪ U = 3; N = 5; N(parent) = 20: 0.6 + 1.41 × √(3.00/5) ≈ 1.69 | | L8 s. 27–28; AIMA 6.4 | |
| K | Why is Monte Carlo tree search less sensitive to evaluation function errors than alpha-beta search? | MCTS tar gjennomsnittet av mange playouts, så én feilvurdering flytter lite; alpha-beta tar max og min, så én feil verdi kan gå helt til roten | | AIMA 6.4 | 2022 |
| K | Regret matching | regret for a = det a ville gitt minus det du fikk, summert; negative til 0, normaliser til sannsynligheter; snittstrategien går mot Nash-likevekt ↪ (2, −1, 3) → (2, 0, 3)/5 = (0.4, 0, 0.6) | spillteori | L8 s. 44–48 | |


| Algoritme | Spilltype | Tid | EVAL? | Optimal? | Kilde |
|---|---|---|---|---|---|
| Minimax | to spillere, nullsum, deterministisk | $b^m$ | ved cutoff | ja, mot optimal MIN | L8 s. 11–12, 19; AIMA 6.2.1 |
| Alpha-beta | som minimax | $b^{m/2}$ beste, $b^{3m/4}$ tilfeldig rekkefølge | ved cutoff | samme verdi som minimax | L8 s. 13–17; AIMA 6.2.3–6.2.4 |
| Expectiminimax | med sjanse | $b^m n^m$ | ved cutoff; positiv lineær | i forventning | L8 s. 35–37; AIMA 6.5 |
| MCTS | stor b eller dårlig EVAL | antall playouts | nei | nei: snitt av playouts | L8 s. 23–28; AIMA 6.4 |
| ↪ | tid er O(…); EVAL = evaluation function; n = antall sjanseutfall; minimax bruker minne O(bm); beste rekkefølge = beste trekk først: med MIN3 først i treet over blir α = 4, og 7 og 9 kuttes | | | | | AIMA 6.2.1; 6.2.4; 6.5 |

## Spillteori · AIMA 17.2.1–17.2.3; L10; L13 s. 5

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Kjenneord i oppgaveteksten | «why does this require strategic reasoning» → beste valg avhenger av de andres valg; «How many Nash equilibria» → ring beste svar, vurder mixed ↪ spill A: rad U: (3, 1) (0, 2); rad D: (1, 0) (2, 3); kolonner L, R | | L10; L13 s. 5 | 2023 5; 2020ResitQ P5; 2024 Q12–Q13; 2025 Q4 |
| K | What are the action profiles that survive Iterated Elimination of Strictly Dominated Actions? (IESDS) | fjern én strengt dominert strategi om gangen og sjekk på nytt; rekkefølgen betyr noe bare ved svak dominans ↪ spill A: fjern L; da taper U mot D (0 < 2), fjern U: (D, R) | | L10 s. 5 | 2020ResitQ; 2023 |
| K | Mixed strategy Nash equilibrium | P1s p gjør P2 indifferent: P2s forventning for L = for R, med P2s tall; P2s q gjør P1 indifferent, med P1s tall; svar utenfor [0, 1] → ingen slik NE ↪ spill B: U: (4, 2) (1, 5); D: (2, 3) (5, 1); ingen ren NE; 2p + 3(1 − p) = 5p + (1 − p) gir p(U) = 2/5; 4q + (1 − q) = 2q + 5(1 − q) gir q(L) = 2/3 | | L10 s. 14–36; AIMA 17.2.1 | 2024 Q12 |
| K | Iterated game with a known, finite number of rounds | backward induction: siste runde er et engangsspill, så NE der, og bakover; fangens dilemma: defect i alle runder | | L10 s. 43–48; AIMA 17.2.3 | 2024 Q13; 2025 |
| K | Infinitely repeated game: discount δ, grim trigger, tit-for-tat | u hver runde er verdt u/(1 − δ); grim trigger: samarbeid til motparten avviker, så defect for alltid; samarbeid holder når $\frac{u_s}{1-\delta} \ge u_a + \frac{\delta u_d}{1-\delta}$ (s samarbeid, a avvik én gang, d straff); tit-for-tat: cooperate først, så kopier motpartens forrige trekk ↪ 3 per runde mot 5 én gang og så 1: 3/(1 − δ) ≥ 5 + δ/(1 − δ) gir δ ≥ 1/2 | | L10 s. 52–57 | 2024 Q13; 2025 |


| Begrep | Slik finner du det | Alltid? | Kilde |
|---|---|---|---|
| Dominant strategy | strengt bedre mot alle motstrategier (svakt: ≥ overalt, > minst én gang) | nei | L10 s. 5; AIMA 17.2.1 |
| Ren Nash-likevekt | ring beste svar for hver spiller; to ringer i samme celle | nei | L10 s. 11–12; AIMA 17.2.1 |
| Blandet Nash-likevekt | din p gjør motspilleren indifferent | ja (Nash) | L10 s. 25–36; AIMA 17.2.1 |
| Pareto optimal | ingen celle er ≥ for alle og > for én | ja | AIMA 17.2.2 |
| Maximin (nullsum) | P1: høyest minimum; P2: lavest maksimum | ja, med mixed | L10 s. 10; AIMA 17.2.1 |
| Social welfare | størst sum (utilitarian); best for den dårligst stilte (egalitarian) | ja | AIMA 17.2.2 |
| ↪ | «alltid» gjelder endelige spill; spill A: R dominerer L for P2 (2 > 1; 3 > 0); ren NE (D, R); Pareto optimal (3, 1) og (2, 3); størst sum (D, R) med 5 | | | AIMA 17.2.1–17.2.2 |

## NLP · AIMA 24.1–24.3; L9

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | What is NLP? | AI som forstår, genererer og samhandler med menneskespråk | | L9 s. 3–4 | 2024 Q19 |
| K | Language model; bag of words; naive Bayes | bag of words ignorerer rekkefølgen; naive Bayes: P(c ∣ tekst) ∝ P(c) ∏ P(w ∣ c) ↪ like priorer; ord 0.2, 0.1 gitt c1 og 0.05, 0.1 gitt c2: 0.01 mot 0.0025 gir 0.8 | | L9 s. 7–11; AIMA 24.1.1 | 2016; 2017 |
| K | n-gram model (maximum likelihood) | Markov: et ord avhenger bare av de n − 1 forrige; bigram P(w ∣ v) = c(v w) / c(v) ↪ a b a c a b: c(a b) = 2; a står foran et ord 3 ganger; P(b ∣ a) = 2/3 | | L9 s. 12–15; AIMA 24.1.2 | 2016; 2017; 2025 |
| K | Explain why smoothing is necessary in n-gram language models | usett n-gram gir P = 0 for hele setningen; add-one (Laplace): $\frac{c+1}{c(\text{forrige}) + V}$, V = antall ordtyper; backoff: kortere n-gram når c = 0; linear interpolation λ3 P3 + λ2 P2 + λ1 P1 med Σλ = 1; sjeldne ord blir <UNK> ↪ V = 3: P(b ∣ a) = 3/6 = 1/2; usett P(a ∣ a) = 1/6 | | L9 s. 18–21; AIMA 24.1.3 | 2016; 2025 Q12a |
| K | Part-of-speech tagging (HMM; Viterbi) | skjult tilstand = tag, observasjon = ord; P = ∏ P(tag ∣ forrige tag) × P(ord ∣ tag); Viterbi: beste tag-sekvens med dynamisk programmering | | L9 s. 32–33; AIMA 24.1.5 | |
| K | Probability of a parse tree (PCFG) | produktet av alle regler i treet, også de leksikalske; regler med lik venstreside summerer til 1 ↪ S → NP VP 1; NP → Name 0.4; Name → Kari 0.5; VP → V 0.3; V → sleeps 0.2: 0.012 | | L9 s. 40–41; AIMA 24.2 | 2024 Q19 |
| K | Difference between top-down and bottom-up parsing (one drawback of each) | top-down: fra S ned mot ordene, ulempe: prøver utvidelser som ikke passer ordene; bottom-up: fra ordene opp mot S, ulempe: bygger deler som aldri blir en hel parse | CYK unngår gjentatt arbeid | L9 s. 43–45; AIMA 24.3 | 2025 Q12b |
| K | CYK algorithm | Chomsky normal form (A → B C eller A → ord); lengde 1 med leksikalske regler, så lengre spenn fra to kortere; PCFG: behold beste sannsynlighet per kategori og spenn; O(n³ m) | | L9 s. 46–47; AIMA 24.3 | |
| K | Overgeneration and undergeneration | overgeneration: godtar ugrammatiske setninger; undergeneration: avviser gyldige | | L9 s. 42; AIMA 24.2 | |

## Proposisjonslogikk · AIMA 7.3–7.6; L5; L13 s. 6; A4 del 1–2

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Translate into propositional logic | ett symbol per atomær påstand (skriv hva det betyr); «if … then» → ⇒; «if and only if» → ⇔; «and», «or», «not» → ∧, ∨, ¬ | | L5; AIMA 7.4.1 | 2023 3.1 |
| K | Is the sentence valid, unsatisfiable or satisfiable? | valid = sann i alle modeller; satisfiable = sann i minst én; unsatisfiable = sann i ingen; α valid ⇔ ¬α unsatisfiable ↪ P ∨ ¬P valid; P ∧ ¬P unsatisfiable; P ⇒ Q satisfiable | | L5 s. 18–20; AIMA 7.5 | 2017; 2018Q; 2021; 2022 |
| K | Show using a truth table (entailment; logically equivalent) | $2^n$ rader for n symboler; KB ⊨ α: α sann i alle rader der KB er sann; α ≡ β: lik verdi i alle rader; P ⇒ Q er usann bare når P er sann og Q usann; presedens ¬, ∧, ∨, ⇒, ⇔ | | L5 s. 10–16; AIMA 7.4.4 | 2020ResitQ; 2021; 2022 |
| K | What is the difference between implication and entailment? | implication P ⇒ Q er en setning i språket; entailment KB ⊨ α er en relasjon mellom setninger: M(KB) ⊆ M(α); deduction theorem: KB ⊨ α ⇔ (KB ⇒ α) er valid | | L5 s. 13; AIMA 7.3; 7.5 | 2016 |
| K | Inference rules (Modus Ponens; Modus tollens; And-elimination) | Modus Ponens: α ⇒ β og α gir β; Modus tollens: α ⇒ β og ¬β gir ¬α; And-elimination: α ∧ β gir α; disjunctive syllogism: α ∨ β og ¬α gir β; sound = bare det som følger; complete = alt som følger | | L5 s. 27–32; AIMA 7.5.1 | 2015; 2022; 2023; 2025 |
| K | Logical equivalences | contraposition α ⇒ β ≡ ¬β ⇒ ¬α; implication elimination α ⇒ β ≡ ¬α ∨ β; biconditional elimination α ⇔ β ≡ (α ⇒ β) ∧ (β ⇒ α); De Morgan ¬(α ∧ β) ≡ ¬α ∨ ¬β og ¬(α ∨ β) ≡ ¬α ∧ ¬β; distributivity α ∨ (β ∧ γ) ≡ (α ∨ β) ∧ (α ∨ γ) | 2025 hadde formelark med de 12; ikke bekreftet for 2026 | L5 s. 24–25; AIMA Fig. 7.11 | 2025 (formelark) |
| K | Convert into conjunctive normal form, CNF (propositional logic) | (1) fjern ⇔; (2) fjern ⇒ med ¬α ∨ β; (3) flytt ¬ inn (De Morgan, dobbel negasjon); (4) distribuer ∨ over ∧ ↪ (P ∨ Q) ⇒ R; ¬(P ∨ Q) ∨ R; (¬P ∧ ¬Q) ∨ R; (¬P ∨ R) ∧ (¬Q ∨ R) | FOL legger til steg 4–6 | L5 s. 49–51; AIMA 7.5.2 | A4 2; 2022; 2023 |
| K | Use resolution refutation to prove α (propositional logic) | KB og ¬α som klausuler; resolver to klausuler på ett komplementært par om gangen; fjern like literaler; □ ⇒ KB ⊨ α; ingen nye klausuler uten □ ⇒ ikke entailed; nummerer linjene og skriv hvilke to hver kommer fra ↪ KB: P ∨ Q; ¬P ∨ R; ¬Q ∨ R; mål R: ¬R og ¬P ∨ R gir ¬P; med P ∨ Q: Q; med ¬Q ∨ R: R; med ¬R: □ | | L5 s. 44–63; AIMA 7.5.2 | 2023 3.1; A4 2 |
| K | Horn clause and definite clause | Horn = høyst én positiv literal; definite = nøyaktig én (A ∧ B ⇒ C); goal clause = ingen positive | | L5 s. 34–40; AIMA 7.5.3 | 2015; 2023 |
| K | Forward chaining (data-driven) | count per regel = antall premisser; agenda med kjente fakta; ta ut et faktum, trekk 1 fra count der det er premiss; count = 0 → konklusjonen blir nytt faktum ↪ A ∧ B ⇒ C; C ⇒ D; B ⇒ E; fakta A, B: B gir C og E; C gir D | | L5 s. 42; AIMA 7.5.4 | 2023 |
| K | Backward chaining (goal-directed) | start i spørsmålet; finn regler med det som konklusjon og bevis premissene rekursivt; et mål som alt står på stakken avvises (løkkesjekk) ↪ D ← C ← A og B: D bevist | | L5 s. 42; AIMA 7.5.4 | 2016 |
| K | DPLL | (1) alle klausuler sanne → modell; (2) en klausul usann → backtrack; (3) pure symbol (ett fortegn i klausuler som ikke alt er sanne) settes sant; (4) unit clause settes sann; (5) ellers velg symbol, true før false ↪ (A ∨ B); (¬A ∨ C); (¬C): B pure → true; A pure → false; C pure → false; alt sant | | E13; AIMA 7.6.1 | |
| K | WalkSAT | tilfeldig modell; velg tilfeldig usann klausul; med sannsynlighet p flipp et tilfeldig symbol i den, ellers det som gir flest sanne klausuler; vanskeligst ved m/n ≈ 4.3 (3-SAT) | | E13; AIMA 7.6.2–7.6.3 | |


| Metode | KB-form | Complete? | Retning | Avgjør | Kilde |
|---|---|---|---|---|---|
| TT-ENTAILS (model checking) | alle | ja | alle modeller | KB ⊨ α | L5 s. 13–16; AIMA 7.4.4 |
| Resolution | CNF | ja¹ | refutation | KB ⊨ α | L5 s. 44–52; AIMA 7.5.2 |
| Forward chaining | definite clauses | ja | datadrevet | KB ⊨ q | L5 s. 42; E12; AIMA 7.5.4 |
| Backward chaining | definite clauses | ja² | måldrevet | KB ⊨ q | L5 s. 42; E12; AIMA 7.5.4 |
| DPLL | CNF | ja | modellsøk | satisfiable? | E13; AIMA 7.6.1 |
| WalkSAT | CNF | nei | local search | finner modell | E13; AIMA 7.6.2 |
| ↪ | alle er sound; ¹ refutation-complete; ² med løkkesjekk; TT-ENTAILS tar $O(2^n)$, forward og backward chaining lineær tid; begge chaining-retningene bruker Modus Ponens; WalkSAT-failure beviser ikke unsatisfiable | | | | | AIMA 7.4.4; 7.5.2; 7.5.4; 7.6.2; E12 |

## Førsteordens logikk · AIMA 8.2–8.3; 9.1–9.5; L6; L7; L13 s. 8–11; A4 del 3–4

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Translate into first-order logic | kvantorord (alle, noen, ingen, minst to); ∀x (Betingelse(x) ⇒ Påstand(x)); ∃x (Egenskap(x) ∧ Påstand(x)); test med et objekt som ikke oppfyller betingelsen: ∀ med ∧ er for sterkt, ∃ med ⇒ for svakt ↪ «every student who studies passes»: ∀x (Student(x) ∧ Studies(x) ⇒ Passes(x)); «some course is hard»: ∃x (Course(x) ∧ Hard(x)) | | L6 s. 15–26; AIMA 8.2.6; 8.3 | A4 3; 2024 Q16 |
| K | Negation and nested quantifiers («no …»; «not all …») | ¬∀x P ≡ ∃x ¬P; ¬∃x P ≡ ∀x ¬P; rekkefølgen av ulike kvantorer betyr noe: ∀x ∃y Knows(x, y) («alle kjenner noen») ≠ ∃y ∀x Knows(x, y) («noen som alle kjenner») ↪ «no student fails»: ¬∃x (Student(x) ∧ Fails(x)) ≡ ∀x (Student(x) ⇒ ¬Fails(x)) | | L6 s. 12–14; AIMA 8.2.6 | |
| K | Equality («at least two»; «exactly one») | minst to: ∃x ∃y (P(x) ∧ P(y) ∧ ¬(x = y)); nøyaktig én: ∃x (P(x) ∧ ∀y (P(y) ⇒ y = x)); database semantics: unique names, closed world, domain closure | | L6 s. 27–32; AIMA 8.2.7–8.2.8 | 2015; 2021 |
| K | Universal and Existential Instantiation (propositionalization) | UI: ∀x α gir α med x byttet med hvilken som helst ground term; EI: ∃x α gir α med en ny Skolem-konstant, én gang; propositionalization gir PL, men funksjoner gir uendelig mange termer; FOL-entailment er semidecidable | | L7 s. 3–19; AIMA 9.1 | 2018Q (semidecidable) |
| K | UNIFY(…) (most general unifier, MGU) | argument for argument; variabel mot term gir x/term (bruk bindinger som alt finnes); ulike konstanter, funksjoner eller predikater → failure; occur check: x kan ikke bindes til en term med x i; standardizing apart: ulike variabelnavn i de to klausulene; fasitene skriver ofte θ uten å sette bindingene inn i hverandre (y/F(x)), SUBST gjør resten ↪ UNIFY(Owns(x, F(x)), Owns(Ola, y)) = {x/Ola, y/F(Ola)}; UNIFY(Knows(x, x), Knows(Ola, Kari)) = failure | | L7 s. 26–28; AIMA 9.2.2 | 2015; 2017; 2021; 2024 Q17; 2025 |
| K | Show that … using Generalized Modus Ponens | definite clause p1 ∧ … ∧ pn ⇒ q og fakta p1′, …, pn′; finn θ med SUBST(θ, pi′) = SUBST(θ, pi) for alle i; konklusjon SUBST(θ, q); skriv θ i hvert steg ↪ Student(Kari); Studies(Kari); Student(x) ∧ Studies(x) ⇒ Passes(x); θ = {x/Kari} gir Passes(Kari) | | L7 s. 30–35; L13 s. 9–10; AIMA 9.2.1 | 2015; 2025 Q9; L13 s. 9–11 |
| K | Forward and backward chaining (first-order logic) | forward: i hver runde prøv alle regler mot fakta fra forrige runde, nye fakta brukes først neste runde, stopp ved svar eller fixed point; backward: dybde-først fra målet, unifiser med en regelkonklusjon og gjør premissene (med θ) til delmål; kan gå i uendelig løkke | | L7 s. 36–38; AIMA 9.3; 9.4.1 | 2016; 2023 |
| K | Convert into CNF (first-order logic; «Clearly show Skolemizations») | negér målet først om det skal bevises; (1) eliminate ⇔; (2) eliminate ⇒; (3) move ¬ inwards, også gjennom kvantorer; (4) standardize variables; (5) Skolemize: hver ∃-variabel får sitt eget nye symbol: inne i ∀x en funksjon F(x) av alle omsluttende ∀-variabler, ellers en konstant; (6) drop universal quantifiers; (7) distribute ∨ over ∧ ↪ ∀x [Student(x) ⇒ ∃y (Course(y) ∧ Takes(x, y))]; ¬Student(x) ∨ ∃y (…); y blir F(x); ¬Student(x) ∨ Course(F(x)) og ¬Student(x) ∨ Takes(x, F(x)) | PL-CNF er steg 1, 2, 3 og 7 | L7 s. 43–56; AIMA 9.5.1 | 2025 Q10; 2023 3.2; 2022 6; 2024 |
| K | Resolution refutation (first-order logic; «Show each and every unification») | tabell: nr; klausul; begrunnelse (Assumption, Negated goal, CNF av n, Resolve i, j med θ); resolver komplementære literaler som unifiserer og bruk θ på resten; □ beviser målet ↪ 1 ¬Student(x) ∨ ¬Studies(x) ∨ Passes(x); 2 Student(Kari); 3 Studies(Kari); 4 ¬Passes(Kari); 1 og 4 med {x/Kari}: ¬Student(Kari) ∨ ¬Studies(Kari); med 2: ¬Studies(Kari); med 3: □ | | L7 s. 57–70; AIMA 9.5.2–9.5.3 | 2025 Q10; 2021 1.3–1.5; 2017; A4 4 |
| K | Resolution strategies | unit preference: klausuler med én literal først; set of support: hvert steg bruker det negerte målet eller noe utledet fra det; input resolution: hvert steg bruker en opprinnelig klausul; subsumption: slett mer spesifikke klausuler | | L7 s. 71–75; AIMA 9.5.6 | |
| — | Equality in resolution (demodulation; paramodulation) | demodulation: bruk x = y til å skrive om termer i en annen klausul; paramodulation: generell variant der likheten står i en klausul med flere literaler | ikke i eksamenene 2015–2025 | L7 s. 76–78; AIMA 9.5.5 | |


| Metode | KB-form | Complete? | Retning | Avgjør | Kilde |
|---|---|---|---|---|---|
| Forward chaining | first-order definite clauses | ja¹ | datadrevet | KB ⊨ q | L7 s. 30–38; AIMA 9.3 |
| Backward chaining | first-order definite clauses | nei² | måldrevet | KB ⊨ q | L7 s. 39–42; AIMA 9.4 |
| Resolution | CNF med Skolem | ja³ | refutation | KB ⊨ α | L7 s. 57–70; AIMA 9.5 |
| ↪ | alle er sound; forward og backward chaining bruker Generalized Modus Ponens; ¹ semidecidable: stopper ikke alltid når svaret er nei; ² uendelige løkker; ³ refutation-complete og semidecidable | | | | | AIMA 9.2–9.5; E16 |

## Planlegging · AIMA 11.1–11.5; L11

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Kjenneord i oppgaveteksten | «Write the required action schemas in the PDDL language» → Action(…, PRECOND, EFFECT); «Specify the problem using PDDL» → Init og Goal; «backwards search (regression)» → relevant handling og g′; «ignore-delete-list heuristic» → relaxed problem; «High-Level Action» → refinement og implementation | | L11 | 2022 7; 2023 8; 2021 4b-i; 2024 Q18; 2025 Q11 |
| K | Write the required action schemas in the PDDL language | Action(Name(p1, …), PRECOND: konjunksjon av literaler, EFFECT: konjunksjon der ¬ betyr slett); variabler i EFFECT må stå i parametrene og i PRECOND; typer som predikater i PRECOND ↪ Action(Go(r, x, y), PRECOND: At(r, x) ∧ Path(x, y), EFFECT: ¬At(r, x) ∧ At(r, y)) | | L11 s. 8–12; AIMA 11.1 | 2015; 2021; 2022 7; 2023 8 |
| K | Specify the problem using PDDL | Init: ground atomic fluents (ingen variabler eller ¬; closed world: det som ikke står er usant); Goal: konjunksjon av literaler, variabler og ¬ er lov | | L11 s. 7; AIMA 11.1 | 2022 7; 2023 8 |
| K | Applicable action and RESULT | applicable: positive PRECOND-literaler står i s, negerte gjør ikke; RESULT(s, a) = (s − DEL(a)) ∪ ADD(a) ↪ {At(R, A), Path(A, B)} med Go(R, A, B): {At(R, B), Path(A, B)} | | L11 s. 9, 15–16; AIMA 11.1; 11.2.1 | 2017 |
| K | Solve the problem using backwards search (regression) | start i målet g; a er relevant når den legger til en literal i g og ikke sletter noen; POS(g′) = (POS(g) − ADD(a)) ∪ POS(PRECOND(a)); NEG(g′) = (NEG(g) − DEL(a)) ∪ NEG(PRECOND(a)); stopp når Init oppfyller g′; planen er handlingene baklengs ↪ g = {At(R, B)}; Go(R, x, B) er relevant: g′ = {At(R, x), Path(x, B)}; Init {At(R, A), Path(A, B)} gir x = A | backward chaining | L11 s. 17–19; AIMA 11.2.2 | 2017; 2022; 2023 8 |
| K | Why is the ignore-delete-list heuristic in planning admissible? | fjern alle negative effekter; da ødelegger ingen handling fremgang, så den optimale relaxed planen er aldri lengre enn den virkelige; bare den optimale relaxed planen er admissible | | L11 s. 21–24; AIMA 11.3 | 2022 |
| K | What is a High-Level Action (HLA)? (HLA refinement; implementation) | HLA = abstrakt handling med én eller flere refinements; refinement = sekvens som kan inneholde nye HLA-er; implementation = refinement med bare primitive handlinger; høynivåplanen når målet når minst én implementation gjør det ↪ Deliver(p): [Drive(Depot, House), Hand(p)] eller [Post(p)] | AND-OR: alle utfall | L11 s. 26–31; AIMA 11.4.1–11.4.2 | 2025 Q11a |
| K | Describe classical planning and sensorless planning | classical: fullt observerbart, deterministisk, closed world, tilstander; sensorless: ingen observasjoner, open world (ukjent fluent er verken sann eller usann), belief states som 1-CNF, b′ = (b − DEL(a)) ∪ ADD(a), løsningen er en sekvens | sensorless search i kap. 4 | L11 s. 33–38; AIMA 11.5.1 | 2025 Q11b |


| Metode | Hva den gjør | Merknad | Kilde |
|---|---|---|---|
| Forward (progression) | fra Init, applicable handlinger | stor branching factor | L11 s. 15–16, 19; AIMA 11.2.1 |
| Backward (regression) | fra målet, relevante handlinger | lavere branching factor; variabler gjør heuristikk vanskeligere | L11 s. 17–19; AIMA 11.2.2 |
| Ignore preconditions | tell manglende mål (kan bli for høyt når én handling gir flere mål); set cover hvis også delete effects ignoreres | NP-hard; grådig tilnærming er ikke admissible | L11 s. 21–23; AIMA 11.3 |
| Ignore delete lists | bare positive effekter | optimal er admissible, men NP-hard | L11 s. 21–24; AIMA 11.3 |
| Hierarchical (HLA) | bytt HLA med refinements | når målet hvis én implementation gjør det | L11 s. 26–31; AIMA 11.4 |
| Sensorless | belief states uten percepts | plan = sekvens | L11 s. 33–38; AIMA 11.5.1 |
| Contingent | AND-OR over belief states | plan = betinget plan | L11 s. 39–41; AIMA 11.5.2 |
| Online og replanning | overvåk handling, plan og mål | replan når verden avviker fra modellen | L11 s. 42–44; AIMA 11.5.3 |

## Kunnskapsrepresentasjon · AIMA 10.1–10.3; 10.5; L12 del 1

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Ontology; categories and inheritance (Member; Subset; Disjoint; ExhaustiveDecomposition; Partition) | ontology = kategoriene og relasjonene i domenet; upper ontology = de generelle øverst (Events, Time, PhysicalObjects); Member(Kari, Students); Subset(Students, Persons); arv: et medlem arver egenskapene til alle overkategorier, så Kari arver det som gjelder Persons; Disjoint: ingen felles medlemmer; ExhaustiveDecomposition: hvert medlem er i minst én; Partition = disjoint og exhaustive ↪ Partition({BachelorStudents, MasterStudents}, Students) | | L12 s. 7–8; AIMA 10.2 | 2022; 2025 Q13a |
| K | PartOf and measurements | PartOf er transitiv og refleksiv: PartOf(Trondheim, Norway) og PartOf(Norway, Europe) gir PartOf(Trondheim, Europe); Length(x) = Meters(2) | | L12 s. 9–11; AIMA 10.2.1–10.2.2 | 2015; 2018Q; 2022 |
| K | Event calculus and time intervals | T(f, t1, t2): fluent f sann fra t1 til t2; Happens(e, t1, t2); Initiates(e, f, t); Terminates(e, f, t); en fluent holder til en hendelse avslutter den; Allen: Meet, Before, After, During, Overlap, Starts, Finishes, Equals | | L12 s. 12–16; AIMA 10.3 | 2015; 2016; 2018Q; 2022; 2023 |
| K | Semantic networks | arv nedover Subset- og Member-kanter; mest spesifikke verdi vinner; dobbel boks = gjelder hvert medlem, enkel boks = gjelder selve objektet | | L12 s. 17–18; AIMA 10.5.1 | 2015; 2017; 2018Q; 2021 6.2 |
| K | Description logics | And, All, AtLeast, AtMost, Fills, OneOf; subsumption, classification, consistency; uten ¬ og ∨ er inferens tractable ↪ And(Person, AtLeast(2, Child)) = personer med minst to barn | | L12 s. 19–20; AIMA 10.5.2 | |

## Filosofi og etikk · AIMA 28.1–28.3; L12 del 2

| Status | Hva | Oppskrift på arket | Knytning | Kilde | Øving |
|---|---|---|---|---|---|
| K | Svarmal for drøftingsoppgaver | begrep; eksempel; motargument; konklusjon | | E21 | 2021 6.3; 2024 Q20; 2025 Q13b |
| K | Weak AI vs strong AI (argument from informality; mathematical objection) | weak: oppfører seg som intelligent; strong: tenker faktisk; informality (Dreyfus): atferd er for kompleks for formelle regler; svar: treffer bare logiske regler (GOFAI), probabilistic reasoning og deep learning klarer «uformelle» oppgaver; disability: «en maskin kan aldri X»; svar: flere X er gjort; mathematical (Gödel; Lucas, Penrose): en maskin kan ikke vise sin egen Gödel-setning, mennesker kan; svar: ingen kan bevise det ubevisbare, og mennesker er ikke konsistente | | L12 s. 23–25; AIMA 28.1 | |
| K | Turing test; Chinese room; qualia | Turing test: kan ikke skilles fra et menneske i skriftlig samtale; Chinese room (Searle): symbolregler gir ikke forståelse; systems reply: hele systemet forstår; qualia = hvordan en opplevelse føles | | L12 s. 26; AIMA 28.1.4; 28.2 | 2015; 2025 |
| K | Lethal autonomous weapons systems, LAWS | velger og angriper mål uten menneske; distinction, necessity, proportionality; for: presisjon, færre egne tap; mot: ansvar, skalering, feil mål | | L12 s. 28; AIMA 28.3.1 | |
| K | Privacy (k-anonymity; differential privacy; federated learning) | de-identification ≠ anonymisering; k-anonymity: hver kombinasjon av kvasi-identifikatorer deles av minst k (k = minste gruppe); differential privacy: støy, så svaret nesten ikke endres med eller uten én person; federated learning: lokal trening, bare oppdateringer sendes (secure aggregation) ↪ grupper på 4, 2 og 7 gir 2-anonymity | | L12 s. 29; AIMA 28.3.2 | |
| K | Fairness measures (individual fairness) | individual fairness: like individer behandles likt uansett klasse (sjekk: like søkere med ulikt kjønn får samme svar); group fairness: klassene likt etter en summary statistic; demographic parity (lik andel positive); equal opportunity (lik true positive rate); equal impact; calibration; med ulike base rates kan ikke alle holde (COMPAS); fairness through unawareness feiler på proxy-variabler | | L12 s. 30–32; AIMA 28.3.3 | 2021; 2023 |
| K | Where bias comes from, and what to do | kilder: biased ground truth (dømt ≠ begått), sample size disparity (færre eksempler, dårligere treff), utviklere ser feil som rammer dem selv; tiltak: data sheets, over-sample minoriteter, mangfoldige team, mål per undergruppe, feedback loop; avveininger: equal outcome går foran treffsikkerhet, og å kaste data kritiseres | | L12 s. 32; AIMA 28.3.3 | 2024 Q20 |
| K | Trust and transparency | verification: oppfyller spesifikasjonen; validation: spesifikasjonen dekker behovet; certification; explainable AI (XAI) | | L12 s. 33–34; AIMA 28.3.4 | 2023 |
| K | AI safety (value alignment) | negative side effects; low impact; value alignment (King Midas: gitt mål ≠ ment mål); inverse reinforcement learning; assistance games: maskinen er usikker på preferansene | | L12 s. 35–36; AIMA 28.3.7 | |

## Kontroll mot eksamenene · skrives ikke ut

Kontrollen gjelder oversiktsark.pdf; rettelsene er lagt inn i denne versjonen (forrige versjon: oversiktsark-forrige-2026-11-20.md).

Grunnlag: `arbeid/oversiktsark.pdf` (5 sider, slik den er skrevet ut 19.11.2026). Posisjon: s. = side, V/H = venstre/høyre kolonne, deretter seksjon og radnavn.
Sideoversikt: s. 1 V Agenter + Uinformert søk; s. 1 H Informert søk + Lokalt søk; s. 2 V CSP; s. 2 H Adversarial search; s. 3 V Spillteori; s. 3 H Proposisjonslogikk; s. 4 V Førsteordens logikk; s. 4 H Planlegging; s. 5 V NLP; s. 5 H Kunnskapsrepresentasjon + Filosofi og etikk.
Fasitsvarene står ikke her. Hver deloppgave er løst med bare arket og sammenlignet med løsningsforslaget.

| Eksamen | Oppgave | Tema | Status | Rad på arket | Hva må inn eller rettes |
|---|---|---|---|---|---|
| 2023 | 1.1 | Hill climbing: tilstand uten bedre nabo, og triks for å komme videre | dekket | s. 1 H, Lokalt søk: «Hill climbing (steepest ascent; random restart; local beam)» | — |
| 2023 | 1.2 | Episodic eller sequential (HR-system) | mangler | s. 1 V, Agenter: «Characterize it in terms of the properties of task environments» har bare navnene på parene | Legg en kort definisjon bak hvert par, særlig episodic/sequential og static/dynamic (L1 del 3 s. 41–47, episodic s. 46; AIMA 2.3.2). Uten definisjonen kan studenten ikke begrunne valget. |
| 2023 | 1.3 | Hva en agent i et delvis observerbart miljø trenger utover simple reflex | dekket | s. 1 V, Agenter: «What agent type will work best?» (model-based reflex) | Radnavnet matcher dårlig; legg til «(simple reflex vs model-based)» i navnet. |
| 2023 | 1.4 | Er gjennomsnittet av to admissible heuristikker admissible? | dekket | s. 1 H, Informert søk: «Is the heuristic admissible?» (h ≤ h\*) | Kan følge av definisjonen. Legg gjerne «average» ved siden av «max av admissible er admissible» i «Which heuristic is better?». |
| 2023 | 1.5 | Tilstandsformulering og starttilstand (robot og esker) | dekket | s. 1 V, Uinformert søk: «Problem formulation (søkeproblem)»; s. 1 V, Agenter: «Atomic, factored and structured representations» | Legg gjerne til i Problem formulation: tilstand = tuppel av det som endres; det som er fast (kartet) hører ikke med. |
| 2023 | 1.6 | AI-historie: pionerer og program som bygde på Aristoteles | mangler | ingen rad | Ny rad «History of AI (who designed …?)» med 4–6 milepæler med navn og program fra AIMA 1.2.1 og 1.3 og L1 del 1. 1.3 er IN i PENSUMOVERSIKT. |
| 2023 | 1.7 | Stochastic vs nondeterministic etter boka | mangler | s. 1 V: «Characterize …» nevner bare deterministic / stochastic | Legg til bokas skille mellom nondeterministic og stochastic (L1 del 3 s. 45; AIMA 2.3.2). |
| 2023 | 1.8 | Hvorfor randomisert atferd kan være rasjonell i competitive multiagent-miljøer | mangler | ingen rad; «Mixed strategy Nash equilibrium» (s. 3 V) sier ikke hvorfor | Legg til ved single/multi-agent i «Characterize …»: competitive vs cooperative, og når og hvorfor randomisering er rasjonelt (AIMA 2.3.2; L1 del 3 s. 54). |
| 2023 | 1.9 | Hvilken setningsform og hvilken inferensregel forward/backward chaining bruker | mangler | s. 3 H: «Horn clause and definite clause», «Forward chaining», «Backward chaining» (formen står, regelen er ikke koblet til) | Skriv i Forward og Backward chaining hvilken inferensregel algoritmen bruker (AIMA 7.5.4; 9.3). |
| 2023 | 1.10 | Individual fairness og hvordan den kan realiseres | mangler | s. 5 H: «Fairness measures» nevner bare «individual vs group fairness» | Legg inn definisjonen av individual fairness og én metode for å oppnå eller sjekke den (L12 s. 30; AIMA 28.3.3). |
| 2023 | 2.1a | BFS, tree-like, rettet graf | dekket | s. 1 V: «Breadth-first search, BFS»; «Graph search vs tree-like search»; «Write down the expanded nodes …» | — (målet testes ved generering, slik fasit gjør) |
| 2023 | 2.1b | DFS, tree-like (løkke) | dekket | s. 1 V: «Depth-first search, DFS (lite minne)» («tree-like search kan gå i løkke») | — |
| 2023 | 2.1c | UCS, tree-like | dekket | s. 1 V: «Uniform-cost search, UCS» | — |
| 2023 | 2.1d | Greedy best-first, tree-like (løkke) | dekket | s. 1 H: «Greedy best-first search» + tie-break i «Write down the expanded nodes …» (s. 1 V) | Greedy-raden sier ikke noe om tie-break eller løkker. Legg til «likhet alfabetisk; tree-like kan gå i løkke». |
| 2023 | 2.1e | A\*, tree-like | dekket | s. 1 H: «A\* search» | — |
| 2023 | 2.2.1 | Hvilke h(B) gir konsistent («monotonic») heuristikk | dekket | s. 1 H: «Which set of heuristic values provides a consistent heuristic? (ukjent h(x))»; «Is the heuristic consistent?» | Legg «monotonic» inn som synonym i «Is the heuristic consistent?». |
| 2023 | 2.2.2 | Hvilke h(B) gir en bestemt ekspansjonsrekkefølge uten tie-break | dekket | s. 1 H: «A\* search» + «ukjent h(x)» («likhet i f avgjøres av tie-break») | Radnavnet matcher ikke. Legg i Kjenneord (Informert søk): «cause A\* to expand … in this order» → én f-ulikhet per uttak mot alle andre i frontier; «without relying on tiebreaking» → strenge ulikheter. |
| 2023 | 2.2.3 | Hvilke h(B) får A\* til å returnere en suboptimal sti | mangler | s. 1 H: «Relationship between admissibility and cost-optimality» sier bare «inadmissible h kan gi suboptimal sti» | Studenten kan stoppe ved h > h\*. Legg til: «return a sub-optimal path» → inadmissibel h er nødvendig, men ikke nok; kjør A\* med h(x) som parameter til målet tas ut, og finn grensen der målet tas ut via en dyrere sti; bruk oppgitt tie-break på grensen. |
| 2023 | 3.1a | Oversett hint til proposisjonslogikk | dekket | s. 4 V: «Translate into first-order logic» (samme metode); konnektiver i «Show using a truth table» (s. 3 H) | Proposisjonslogikk har ingen oversettelsesrad. Gi raden navnet «Translate into propositional / first-order logic», eller legg kjenneordet i PL-delen. |
| 2023 | 3.1b | Inferensregler med navn (Modus tollens krevd) | dekket | s. 3 H: «Inference rules (Modus Ponens; Modus tollens; And-elimination)»; nummerering fra «Use resolution refutation to prove α» | — |
| 2023 | 3.2a | Representer i FOL (inkl. «vice versa» og spørsmålet) | dekket | s. 4 V: «Translate into first-order logic» | — |
| 2023 | 3.2b | CNF og resolution refutation; «who is this?» | dekket | s. 4 V: «Convert into CNF (first-order logic …)»; «Resolution refutation (first-order logic …)» | Legg til: «Is there anybody …? Who?» → svaret er bindingen målvariabelen får i beviset (answer literal, AIMA 9.5). |
| 2023 | 4.1 | Skriv constraints (rekkefølge og alldiff) | dekket | s. 2 V: «CSP definition (number of arcs)» | Radnavnet peker på buer. Gi raden navnet «CSP definition (write the constraints; number of arcs)». |
| 2023 | 4.2 | Er starttilstanden arc consistent? AC-3 | dekket | s. 2 V: «Apply arc consistency algorithm AC-3»; «AC-3 table» | — |
| 2023 | 4.3 | Backtracking uten forward checking, MRV (numerisk tie-break) og LCV | dekket | s. 2 V: «Use backtracking search with forward checking»; «MRV»; «LCV» | Radnavnet sier «with forward checking». Legg til «uten FC: domenene endres ikke, sjekk bare mot tilordnede». Risiko: arket sier «ved likhet degree, så oppgitt tie-break». Når oppgaven oppgir tie-break, skal den brukes direkte. |
| 2023 | 5.1 | Hvorfor valget krever strategisk resonnering | mangler | ingen rad | Legg inn i Kjenneord (Spillteori): «Why does this require strategic reasoning?» → hva som gjør en situasjon til et spill (L10 s. 1–3; AIMA 17.2). |
| 2023 | 5.2 | Weakly eller strongly dominant strategy | dekket | s. 3 V: «Does this game have a weakly or strongly dominant strategy?» | — |
| 2023 | 5.3 | Iterated elimination of strictly dominated actions | dekket | s. 3 V: «What are the action profiles that survive Iterated Elimination …» | — |
| 2023 | 5.4 | Nash equilibrium | dekket | s. 3 V: «Pure strategy Nash equilibrium» | — |
| 2023 | 5.5 | Social welfare | dekket | s. 3 V: «Which strategy maximizes social welfare?» | — |
| 2023 | 6.1 | Fyll inn løvverdier i expectiminimax-treet | dekket | s. 2 H: «Use ExpectiMiniMax (chance nodes)» | — |
| 2023 | 6.2 | Regn ExpectiMiniMax for indre noder | dekket | s. 2 H: «Use ExpectiMiniMax (chance nodes)»; «Minimax value» | — |
| 2023 | 6.3 | Velg strategi | dekket | s. 2 H: «Minimax value» (beste trekk = barnet med rotverdien) | — |
| 2023 | 7.1 | Belief state fra første percept (labyrint) | dekket | s. 1 H: «Partially observable with local sensing (predict; percept; update)» | — |
| 2023 | 7.2 | Belief state etter handling og nytt percept | dekket | s. 1 H: samme rad (PREDICT, så update) | — |
| 2023 | 7.3 | Belief state når handlingen virker motsatt | dekket | s. 1 H: samme rad + «Sensorless problem» (PREDICT = union av RESULT) | Oppgaven sier ikke hva som skjer mot en vegg; skriv antakelsen. |
| 2023 | 8.1 | PDDL: action schemas, Init og Goal | dekket | s. 4 H: «Write the required action schemas in the PDDL language»; «Specify the problem using PDDL» | — |
| 2023 | 8.2 | Backwards search, tre steg | dekket | s. 4 H: «Solve the problem using backwards search (regression)» | — |
| 2024 | Q1 | Agents: hvilket utsagn er ikke sant | dekket | s. 1 V: «Problem formulation» (transition model = RESULT(s, a)); «What agent type will work best?» | Felle: arket sier ikke hvilken handlingsvalgmetode model-based reflex bruker, så et sant alternativ om model-based kan se usant ut. Samme rettelse som 2025 Q1. |
| 2024 | Q2 | Blandet: hvilket utsagn er usant | dekket | s. 1 H: «AND-OR search (conditional plan; contingency plan)» | Legg gjerne til «agent function: persept-sekvens → handling» i «Rational agent» (et annet alternativ spiller på dette). |
| 2024 | Q3 | Informed/uninformed: usant utsagn | dekket | s. 1 V: «Uniform-cost search, UCS»; s. 1 H: «Greedy», «Weighted A\*» | — |
| 2024 | Q4 | Søkealgoritmer i urettet graf: usant utsagn | dekket | s. 1 V/H: BFS, DFS, UCS, Greedy, A\*; «Graph search vs tree-like search» | Risiko: fasit lar tree-like search ikke gå rett tilbake til forelderen. Legg til: «tree-like i urettet graf: si om forelderen genereres på nytt; fasit 2024 gjør det ikke». |
| 2024 | Q5 | Tree-like A\*, gjentatte ekspansjoner, endret h(A) | dekket | s. 1 H: «A\* search»; «Is the heuristic consistent?» | Samme forelderkonvensjon som Q4. |
| 2024 | Q6 | Lokalt søk: hva som ikke hjelper mot lokale optima | dekket | s. 1 H: «Hill climbing», «Simulated annealing», «Genetic algorithm» | — |
| 2024 | Q7 | Skriv constraints som tupler | dekket | s. 2 V: «CSP definition (number of arcs)» | Radnavnet matcher ikke. Legg til «constraint = ⟨scope, rel⟩; rel kan listes som tillatte tupler» (AIMA 5.1). |
| 2024 | Q8 | AC-3 etter tilordning, gjenværende domener | dekket | s. 2 V: «Apply arc consistency algorithm AC-3» | — |
| 2024 | Q9a | Min-conflicts: hvilken variabel velges først | dekket | s. 2 V: «Min-conflicts (local search for CSP)» | — |
| 2024 | Q9b | Min-conflicts: iterasjoner i beste fall | dekket | s. 2 V: «Min-conflicts» | — |
| 2024 | Q10a | Bøtter: forventet verdi | dekket | s. 2 H: «Use ExpectiMiniMax (chance nodes)» | — |
| 2024 | Q10b | Bøtter: motstander gir laveste | dekket | s. 2 H: «Minimax value» | — |
| 2024 | Q11a | Alpha-beta: verdier som aldri besøkes | dekket | s. 2 H: «Which nodes will not be expanded (alpha-beta pruning)?» | Legg «never be visited» og «prune» inn i radnavnet ved siden av «not be expanded». |
| 2024 | Q11b | Alpha ved kall på første barn | dekket | s. 2 H: samme rad («α og β arves nedover») | — |
| 2024 | Q11c | Alpha ved kall på andre barn | dekket | s. 2 H: samme rad | — |
| 2024 | Q12 | Mixed strategy NE (stag hunt) | dekket | s. 3 V: «Mixed strategy Nash equilibrium» | Oppgaven bruker π1 og π2, arket p og q. Skriv «p = π1, q = π2» i raden. |
| 2024 | Q13 | Spill gjentatt to runder | dekket | s. 3 V: «Iterated game with a known, finite number of rounds» | — |
| 2024 | Q14 | Hvilken setning er sann gitt KB (entailment) | dekket | s. 3 H: «Show using a truth table (entailment …)»; presedens samme sted | — |
| 2024 | Q15 | CNF av tre setninger | dekket | s. 3 H: «Convert into conjunctive normal form, CNF (propositional logic)» | — |
| 2024 | Q16 | Skolemization med to ∃ inne i ∀ | mangler | s. 4 V: «Convert into CNF (first-order logic; «Clearly show Skolemizations»)», steg (5) | Alternativene skiller seg bare på om Skolem-symbolet gjenbrukes. Skriv i steg (5) at hver ∃-variabel får sitt eget nye Skolem-symbol (AIMA 9.5.1). |
| 2024 | Q17 | Unification av nestede termer | dekket | s. 4 V: «UNIFY(…) (most general unifier, MGU)» | Fasit skriver θ uten å sette inn senere bindinger. Merknaden står bare i notasjonstabellen, som ikke skrives ut; flytt den inn i UNIFY-raden. |
| 2024 | Q18 | Gyldig og velformet første plansteg (Towers of Hanoi) | dekket | s. 4 H: «Applicable action, RESULT and forward search» | Legg til: et plansteg er en ground action; PDDL har ingen funksjonstermer (AIMA 11.1). |
| 2024 | Q19 | NLP: riktig generelt utsagn | mangler | ingen rad (NLP-delen har bare metoder) | Lav prioritet. NER, stop words og tokenization står ikke i L9 2026. Legg eventuelt én linje om hva NLP er (L9 innledning). |
| 2024 | Q20 | AI-etikk: debiasing i NLP, usant utsagn | mangler | s. 5 H: «Fairness measures» (bare mål, ingen tiltak) | Legg inn «Where bias comes from, and what to do» (L12 s. 32): kilder til bias, tiltak og hvilke avveininger tiltakene har. |
| 2025 | Q1 | Agenttype → handlingsvalg (rule matching / search / search and plan) | mangler | s. 1 V: «What agent type will work best?» | Arket gir metoden for simple reflex og goal-based, men ikke for model-based reflex. Skriv metoden for model-based også (L1 del 3 s. 54–55; AIMA 2.4.3). |
| 2025 | Q2 | Lokalt søk: usant utsagn (gradient descent) | mangler | s. 1 H: «Hill climbing» nevner ikke gradient descent | Legg gradient descent/ascent (AIMA 4.2, IN; L3) inn i Hill climbing-raden: hva det er, og hvordan det forholder seg til lokale optima. |
| 2025 | Q3 | CSP-modellering: variabler og domener (hus, farger, personer) | mangler | s. 2 V: «CSP definition (number of arcs)» har bare X, D, C | Legg til en modelleringsregel for zebra-oppgaver (L4 s. 1; AIMA 5.1): velg variabler og domener slik at hvert utsagn («to the right of», «lives in») og alldiff kan skrives som constraint, og test hvert alternativ mot alle utsagnene. |
| 2025 | Q4 | Hvor mange Nash equilibria (likhet i utbetalinger) | dekket | s. 3 V: Kjenneord «How many Nash equilibria»; «Pure strategy Nash equilibrium» («også ved likhet»); «Mixed strategy Nash equilibrium» | — |
| 2025 | Q5a | Hvilke algoritmer finner billigste vei (BFS, DFS, UCS) | feil | s. 1 V, Uinformert søk: Kjenneord «cheapest path» med ulike kostnader → UCS eller A\*, ikke BFS» | Kjenneordet får studenten til å utelukke BFS. Rett til: «Which algorithm will find the cheapest path?» → kjør alle og sammenlign kostnadene; UCS/A\* er garantert billigst, BFS bare ved like kostnader, men kan treffe likevel (AIMA 3.4.1; L2 «Not cost optimal unless costs are the same»). |
| 2025 | Q5b | Hvilken algoritme ekspanderer færrest noder | dekket | s. 1 V: Kjenneord «expand the fewest nodes» → kjør alle og tell | DFS-raden sier ikke når målet testes. Legg det til. |
| 2025 | Q5c | Ekspanderte noder per algoritme | dekket | s. 1 V: «Write down the expanded nodes …» («si om start og mål er tatt med») | — |
| 2025 | Q6a | Er heuristikken admissible? | dekket | s. 1 H: «Is the heuristic admissible?» | — |
| 2025 | Q6b | Er heuristikken konsistent? | dekket | s. 1 H: «Is the heuristic consistent?» (urettet: begge veier) | — |
| 2025 | Q6c | A\* med alfabetisk tie-break | dekket | s. 1 H: «A\* search»; s. 1 V: «Write down the expanded nodes …» | — |
| 2025 | Q7a | Fordelen med tree-structured CSP | dekket | s. 2 V: «Show the result of the topological sort (tree-structured CSP …)» (O(nd²)) | Utenfor pensum 2026 (AIMA 5.5 UT). Vil raden beholdes, skriv «mot O(dⁿ) for generell CSP». |
| 2025 | Q7b | Tree-CSP-Solver: topologisk sortering, reduksjoner, tilordninger | dekket | s. 2 V: samme rad | Utenfor pensum 2026. Arket gir samme rekkefølge som fasit. |
| 2025 | Q8a | Minimax-verdi | dekket | s. 2 H: «Minimax value» | — |
| 2025 | Q8b | Ikke-besøkte noder med α/β-begrunnelse | dekket | s. 2 H: «Which nodes will not be expanded (alpha-beta pruning)?» | Kjenneordet «Which nodes … not be visited» bør stå i radnavnet. |
| 2025 | Q9 | Generalized Modus Ponens | dekket | s. 4 V: «Show that … using Generalized Modus Ponens» | — |
| 2025 | Q10 | Resolution med CNF og Skolem | dekket | s. 4 V: «Convert into CNF (first-order logic …)»; «Resolution refutation (first-order logic …)» | — |
| 2025 | Q11a | HLA og implementation | dekket | s. 4 H: «What is a High-Level Action (HLA)? (HLA refinement; implementation)» | — |
| 2025 | Q11b | Classical vs sensorless planning | dekket | s. 4 H: «Describe classical planning and sensorless planning» | Legg gjerne «static, discrete» til under classical. |
| 2025 | Q12a | Hvorfor smoothing, og én type | dekket | s. 5 V: «Explain why smoothing is necessary in n-gram language models» | — |
| 2025 | Q12b | Top-down vs bottom-up parsing, én ulempe hver | dekket | s. 5 V: «Difference between top-down and bottom-up parsing (one drawback of each)» | — |
| 2025 | Q13a | Ontology; kategorier og arv; eksempel | mangler | s. 5 H: «Categories (…)»; arv står bare under «Semantic networks» | «Ontology» finnes ikke på arket. Gi raden navnet «Ontology; categories and inheritance (Member; Subset; …)», legg inn definisjonen av ontology og upper ontology (AIMA 10.1; L12 s. 5–8), og flytt arveregelen hit med et eget eksempel. |
| 2025 | Q13b | Argument from informality og mathematical objection: påstand og motargument | mangler | s. 5 H: «Weak AI vs strong AI (objections)» har bare navnene | Legg inn sentral påstand og ett motargument for hver innvending (AIMA 28.1.1 og 28.1.3; L12 s. 23–25). Radnavnet bør inneholde «argument from informality» og «mathematical objection». |

**Opptelling**

| Eksamen | Deloppgaver | Dekket | Mangler | Feil |
|---|---|---|---|---|
| 2023 | 38 | 30 | 8 | 0 |
| 2024 | 24 | 21 | 3 | 0 |
| 2025 | 22 | 16 | 5 | 1 |
| Sum | 84 | 67 | 16 | 1 |

Deloppgaver er telt slik eksamen nummererer dem: 2023 1.1–1.10, 2.1a–e, 2.2.1–3, 3.1a–b, 3.2a–b, 4.1–3, 5.1–5, 6.1–3, 7.1–3, 8.1–2; 2024 Q1–Q20 med Q9a–b, Q10a–b og Q11a–c; 2025 Q1–Q13 med a/b/c.

