# Pensumoversikt TDT4136 H26: forelesninger ↔ AIMA

Kontrollert 16.11.2026. Kildene ble lest side for side:

- Alle 13 forelesninger: 17 PDF-er og 985 sider. Sider med bilder, formler eller skadet tekstlag ble sett på som bilde.
- De tre assignment-forelesningene.
- Assignment 1–4.
- Canvas: Syllabus 2026, Lecture Schedule, Exam info, FAQ og kunngjøringer.
- NTNUs emneside for TDT4136.

Den detaljerte slide-for-slide-gjennomgangen står i [PENSUMOVERSIKT-forelesninger.md](PENSUMOVERSIKT-forelesninger.md).

**Alle seksjonsnumre er fra Global-utgaven**, som er pensumboka. PDF-en din er US-utgaven:

| Global | 5 | 6 | 17.2 | 24 | 25 | 28 | alle andre |
|---|---|---|---|---|---|---|---|
| US | 6 | 5 | 18.2 | 23 | 24 | 27 | samme nummer |

Underseksjonene har samme nummer inni kapitlet. Sidetall i slidene og øvingene, for eksempel «p. 91», gjelder Global-utgaven.

Forkortelser: L1–L13 er forelesningene. AL1–AL3 er assignment-forelesningene. Ø1–Ø4 er Assignment 1–4.

---

## 1. Kort fortalt

Canvas «Syllabus 2026 (subject to change)», sist endret 27.08.2026, sier at pensum har tre deler:

1. **«Lectures, lecture slides, assignment lectures material»**. Alt som er forelest er pensum, også det som ikke står i boka. Unntaket er det slidene selv merker «not curriculum».
2. **Boka:** «Chapters 1- 11, Sections from Chapter 24-25\*, and Chapter 28», minus 27 navngitte seksjoner.
3. **«Support material – for game theory and multiagent systems: from chapter 17: Sections 17.2.1, 17.2.2 and 17.2.3.»**

Alle 294 seksjonene i kap. 1–11, 17.2, 24, 25 og 28 er gått gjennom:

| Status | Antall |
|---|---|
| I pensum og forelest | 189 (24 av dem bare delvis forelest, se avsnitt 5) |
| **I pensum, men aldri forelest. Må leses i boka** | **46** |
| Ute (Canvas-listen, utvidet til underseksjoner) | 41 (3 av dem er omstridt, se avsnitt 8) |
| Uavklart (kap. 25) | 16 |
| Ikke listet (17.2.4–17.2.5) | 2 |

**Funnene som betyr mest:**

- Forelesningenes egne «Reading and exam scope»-slides stemmer med Canvas for kap. 11 (L11) og kap. 24 (L9).
- For kap. 10 og 28 er L12 og Canvas uenige: L12 sier «§10.2» og «§28.3 (the whole chapter)», mens Canvas tar ut **10.2.3, 28.3.5 og 28.3.6**. Ingen av de tre ble forelest.
- L11 sier «Backup slides at the end: self-study, also in scope», men PDF-en har ingen backup-slides. Det er samme fil som på Canvas.
- **Kap. 25:** Stjernen i «24-25\*» har ingen fotnote noe sted på Canvas. Ingen forelesning sier hvilke seksjoner i kap. 25 som er pensum. L9 peker bare til 25.1 og til transformers.
- **Spillteori:** Lecture Schedule sier for L10 «Not in book, a chapter from another book- see syllabus». Slidene viser bare til «the book», altså AIMA, og Syllabus nevner bare AIMA 17.2.1–17.2.3. Pensum er derfor L10-slidene pluss 17.2.1–17.2.3.
- Noe ble forelest selv om det ikke står i boka: regret minimization, IESDS, expectimax, indifference-metoden for Battle of the Sexes, diskontering δ og grim trigger-utledningen. Alt dette er pensum etter punkt 1. Hele listen står i avsnitt 6.
- Noe er merket «not curriculum» i slidene: z3, Lean, Prolog, NL-demoene, «by hand»-beviset i L6 og Z3-anvendelsene i L6. Hele listen står i avsnitt 7.
- Sammendragsforelesningen L13 sier: «Not in this course: continuous state and action spaces».

---

## 2. Forelesning for forelesning

Dato og foreleser er hentet fra Canvas Lecture Schedule. Avsnitt 3 viser hvilke seksjoner hver forelesning dekket.

| Økt | Dato | Foreleser | Tema | Global-seksjoner forelest | Pensumutsagn i decket (ordrett) | Merket ute i decket |
|---|---|---|---|---|---|---|
| L1 del 1 | 20.08 | Pinar Øztürk | Hva er AI, grunnlag, historie | 1.1–1.3. Også Turing test og ELIZA (28.1.4) og Searle / PSSH (28.2.1) | Ingen | Ingen |
| L1 del 2 | 20.08 | Espen Høgstedt | Praktisk info | – | «See Syllabus 2026 in Canvas for more information.» | – |
| L1 del 3 | 20.08 | Massimiliano Ruocco | Intelligent agents | 2.1–2.4.6 | «This course (and your textbook) follows the acting-rationally / rational-agent approach»; «Next lecture: Chapter 3» | Ingen |
| L2 | 27.08 | Ruocco | Uninformed og informed search | 3.1–3.1.1, 3.2–3.5.2 | s. 42 «p. 85 in the textbook»; s. 115 og 201 «Read the book!»; s. 129 «check your book for the step by step strategies» | Ingen |
| AL1 | 28.08 | Aleksandra Jekic | Assignment 1: Search | 3.3.1, 3.4.1–3.4.3, 3.5.1–3.5.2 | «Chapter 3 in the Russell and Norvig book (4th edition, Global)»; «older versions of the book have different algorithms»; «If you look at the old exams, there is usually a lot on this topic.»; «In the exam, you may have to do these algorithms by hand.» | Bonusoppgaven er «not something you have to do» (gjelder øvingen) |
| L3 | 03.09 | Jekic | A\* og search in complex environments | 3.4.6, 3.5.2–3.6.3, 4.1–4.5 | s. 2 «Today we are covering the remaining part of Chapter 3 and all of Chapter 4.»; s. 6 «Read the book!»; s. 68 «please check the full details in the book!»; s. 101 «See the slippery vacuum world in the book!» | Ingen |
| L4 | 10.09 | Ole C. Eidheim | Constraint satisfaction | 5.1–5.4, uten 5.3.3–5.3.4 | s. 29–30 «see the algorithm in Figure 5.3 in the book» | s. 45 «Example software that can be used to solve CSPs (not curriculum)» |
| AL2 | 11.09 | Jekic | Assignment 2: CSP | 5.1–5.3 | «Chapter 5 in the Russell and Norvig book (4th edition, Global).»; «Historically, there has usually been a problem covering this in exams.»; «Watch out, read the book! Last year there was a problem on topological sort.» | – |
| L5 | 17.09 | Eidheim | Propositional logic | 7.1, 7.3–7.5.4 og unit preference fra 9.5.6 | s. 42 «Shown in Figure 7.15 in the book»; s. 68 «(p. 326)» | s. 6, 17, 20, 21, 41 og 72 (se avsnitt 7) |
| L6 | 24.09 | Eidheim | First-order logic | 8.1, 8.2.1–8.2.8, 8.3.1. Peano-aksiomene fra 8.3.3 | Ingen bokhenvisninger | s. 5, 7, 41–45, 49–50 og 52–59 (se avsnitt 7) |
| L7 | 01.10 | Eidheim | Inference in FOL | 9.1–9.2.1, 9.3.1, 9.5.1–9.5.3, 9.5.5–9.5.6 | s. 26 «Figure 9.1 in the book shows a unification algorithm» | Ingen |
| L8 | 08.10 | Eidheim | Adversarial search | 6.1–6.2.1, 6.2.3, 6.3–6.3.2, 6.3.4, 6.4, 6.5, 6.6 (kort) | Ingen synlige. s. 41 «Nash equilibrium (next lecture)» | Ingen |
| AL3 | 09.10 | Jekic | Assignment 3: Adversarial search | 6.2.1, 6.2.3 | «Chapter 6 in the Russell and Norvig book (4th edition, Global).»; «Historically, you usually have to do this with pen and paper on the exam.»; «This is from the 2020 exam.» | Bonusdel 4.1 i øvingen er «non-mandatory» |
| L9 | 15.10 | Ruocco | Natural language processing | 24.1–24.1.7, 24.2, 24.3, 24.6. Pekere til 25.1 og transformers | s. 2 «The sections in scope for the exam are listed on the last slide.»; s. 58 (se avsnitt 4) | 24.2.1, 24.3.1, 24.3.2, 24.4, 24.5 |
| L10 | 22.10 | Eidheim | Game theory | 17.2.1, 17.2.2 (maximin), 17.2.3 | s. 25 «For zero-sum games, this is the same as the maximin equilibrium in the book» | s. 25 «Proof at live.lean-lang.org (not curriculum)» |
| L11 | 29.10 | Ruocco | Automated planning | 11.1, 11.1.1, 11.2.1–11.2.2, 11.3, 11.4.1–11.4.2, 11.5–11.5.3 | s. 2 og 45 (se avsnitt 4) | 11.1.2, 11.1.3, 11.2.3, 11.2.4, 11.3.1, 11.3.2, 11.4.3, 11.6 |
| L12 | 05.11 | Ruocco | Knowledge representation; filosofi, etikk, safety | 10.1–10.2.2, 10.3–10.3.1, 10.5–10.5.2; 28.1–28.1.3, 28.2–28.3.4, 28.3.7 | s. 1 «Readings: … Chapters 10 and 28 (exam scope on the last slide)»; s. 37 (se avsnitt 4) | 10.4, 10.6 |
| L13 | 12.11 | Eidheim (Canvas: «Ole and Massimiliano») | Sammendrag av CSP, adversarial games, game theory og logic | Repetisjon av 5.2.2–5.4, 6.1–6.6, 17.2.1–17.2.3, 7.3–7.5.4, 9.1–9.2.1 og 9.5.1–9.5.3 | Bare i skjult tekst: «Figure 5.3 in the book» | s. 4 «Not in this course: continuous state and action spaces» |

**Øvingene:**

| Øving | Ut → frist | Innhold | Global-seksjoner | Ordrett bokhenvisning |
|---|---|---|---|---|
| Ø1 Search | 26.08 → 11.09 | BFS, DFS, UCS, GBFS og A\* for hånd; bevis for admissibility og consistency | 3.3.1–3.5.2 | «For BFS, use Breadth-First-Search from Figure 3.9 (p. 95)». For DFS, UCS og resten: «use Best-First-Search from Figure 3.7 (p. 91)» |
| Ø2 CSP | 09.09 → 25.09 | Backtracking og AC-3 i Python, Sudoku | 5.1, 5.1.1, 5.2.2, 5.2.6, 5.3 | «Chapter 5.3 … Figure 5.5 (p. 176)»; «AC-3 algorithm (described Figure 5.3, (p. 171))»; «Chapter 5.1.1, p. 165» |
| Ø3 Adversarial search | 07.10 → 23.10 | Minimax og alpha-beta i Python: halving, bucket, tic-tac-toe | 6.2.1, 6.2.3 | «Figure 6.3 (p. 196)»; «Figure 6.7 (p. 200)» |
| Ø4 Logikk | 21.10 → 06.11 | Sannhetstabeller, CNF, PL-resolution, oversetting til FOL, FOL-resolution | 7.3–7.5.2, 8.2–8.3, 9.5.1–9.5.3 | «Refer to the textbook … specially Chapters 7, 8 and 9». Canvas nevner bare tre obligatoriske øvinger, og Ø4 står ikke i Canvas-timeplanen |

---

## 3. Boka → forelesning, seksjon for seksjon

**Pensum:**
- **IN:** pensum etter Canvas.
- **IN (støtte):** støttemateriale 17.2.1–17.2.3.
- **UT:** står i Canvas-listen over unntak.
- **UT ⚠:** Canvas tar den ut, men slidene sier at den er med (se avsnitt 8).
- **uavklart:** kap. 25, på grunn av stjernen.
- **ikke listet:** 17.2.4–17.2.5, som støttelista ikke nevner.

**Forelest i:**
- **— kun bok:** pensum, men ikke forelest. Må leses selv.
- **(delvis):** deler av seksjonen ble forelest. Merknaden sier hva som bare står i boka.

### Kapittel 1 – Introduction

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 1.1 | What Is AI? | IN | L1 (del 1) | Fire tilnærminger, 2×2-tabell |
| 1.1.1 | Acting humanly: The Turing test approach | IN | L1 (del 1) | Turing test + total Turing test |
| 1.1.2 | Thinking humanly: The cognitive modeling approach | IN | L1 (del 1) |  |
| 1.1.3 | Thinking rationally: The “laws of thought” approach | IN | L1 (del 1) | Syllogismer |
| 1.1.4 | Acting rationally: The rational agent approach | IN | L1 (del 1) | Rational agent |
| 1.1.5 | Beneficial machines | IN | — **kun bok** | Beneficial machines / value alignment |
| 1.2 | The Foundations of Artificial Intelligence | IN | L1 (del 1) |  |
| 1.2.1 | Philosophy | IN | L1 (del 1) |  |
| 1.2.2 | Mathematics | IN | L1 (del 1) |  |
| 1.2.3 | Economics | IN | L1 (del 1) |  |
| 1.2.4 | Neuroscience | IN | L1 (del 1) |  |
| 1.2.5 | Psychology | IN | L1 (del 1) |  |
| 1.2.6 | Computer engineering | IN | L1 (del 1) |  |
| 1.2.7 | Control theory and cybernetics | IN | L1 (del 1) |  |
| 1.2.8 | Linguistics | IN | L1 (del 1) |  |
| 1.3 | The History of Artificial Intelligence | IN | L1 (del 1) | Historie 1943–2012; noen epoker i slidene finnes ikke i boka |
| 1.3.1 | The inception of artificial intelligence (1943–1956) | IN | L1 (del 1) |  |
| 1.3.2 | Early enthusiasm, great expectations (1952–1969) | IN | L1 (del 1) |  |
| 1.3.3 | A dose of reality (1966–1973) | IN | L1 (del 1) |  |
| 1.3.4 | Expert systems (1969–1986) | IN | L1 (del 1) |  |
| 1.3.5 | The return of neural networks (1986–present) | IN | L1 (del 1) |  |
| 1.3.6 | Probabilistic reasoning and machine learning (1987–present) | IN | L1 (del 1) |  |
| 1.3.7 | Big data (2001–present) | IN | L1 (del 1) |  |
| 1.3.8 | Deep learning (2011–present) | IN | L1 (del 1) |  |
| 1.4 | The State of the Art | IN | — **kun bok** |  |
| 1.5 | Risks and Benefits of AI | IN | — **kun bok** | Risks and benefits (etikken kommer i kap. 28 / L12) |

### Kapittel 2 – Intelligent Agents

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 2.1 | Agents and Environments | IN | L1 (del 3) | Agent, percept, agent function vs program, vacuum world |
| 2.2 | Good Behavior: The Concept of Rationality | IN | L1 (del 3) |  |
| 2.2.1 | Performance measures | IN | L1 (del 3) |  |
| 2.2.2 | Rationality | IN | L1 (del 3) |  |
| 2.2.3 | Omniscience, learning, and autonomy | IN | L1 (del 3) | Omniscience, learning, autonomy |
| 2.3 | The Nature of Environments | IN | L1 (del 3) |  |
| 2.3.1 | Specifying the task environment | IN | L1 (del 3) | PEAS |
| 2.3.2 | Properties of task environments | IN | L1 (del 3) | Sju miljøegenskaper |
| 2.4 | The Structure of Agents | IN | L1 (del 3) |  |
| 2.4.1 | Agent programs | IN | L1 (del 3) | Table-driven agent |
| 2.4.2 | Simple reflex agents | IN | L1 (del 3) |  |
| 2.4.3 | Model-based reflex agents | IN | L1 (del 3) |  |
| 2.4.4 | Goal-based agents | IN | L1 (del 3) |  |
| 2.4.5 | Utility-based agents | IN | L1 (del 3) |  |
| 2.4.6 | Learning agents | IN | L1 (del 3) |  |
| 2.4.7 | How the components of agent programs work | IN | — **kun bok** | Atomic / factored / structured representations (brukes senere i kurset) |

### Kapittel 3 – Solving Problems by Searching

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 3.1 | Problem-Solving Agents | IN | L2 |  |
| 3.1.1 | Search problems and solutions | IN | L2 |  |
| 3.1.2 | Formulating problems | IN | — **kun bok** | Abstraction |
| 3.2 | Example Problems | IN | L2 |  |
| 3.2.1 | Standardized problems | IN | L2 |  |
| 3.2.2 | Real-world problems | IN | L2 |  |
| 3.3 | Search Algorithms | IN | L2, L3 |  |
| 3.3.1 | Best-first search | IN | L2, AL1, L3, Ø1 | Fig. 3.7 BEST-FIRST-SEARCH s. 91 = referansealgoritmen (AL1, L3) |
| 3.3.2 | Search data structures | IN | L2, L3 | Graph vs tree-like search |
| 3.3.3 | Redundant paths | IN | L2, L3 |  |
| 3.3.4 | Measuring problem-solving performance | IN | L2 | Completeness, cost optimality, time, space |
| 3.4 | Uninformed Search Strategies | IN | L2, L3 |  |
| 3.4.1 | Breadth-first search | IN | L2, AL1, L3, Ø1 | Fig. 3.9 BFS s. 95; early goal test |
| 3.4.2 | Dijkstra’s algorithm or uniform-cost search | IN | L2, AL1, L3, Ø1 | Late goal test |
| 3.4.3 | Depth-first search and the problem of memory | IN | L2, L3, Ø1 |  |
| 3.4.4 | Depth-limited and iterative deepening search | IN | L2, L3 | DLS, IDS |
| 3.4.5 | Bidirectional search | IN | — **kun bok** | Bidirectional search |
| 3.4.6 | Comparing uninformed search algorithms | IN | L3 | Sammenligningstabellen (Fig. 3.15), uten bidirectional-kolonnen |
| 3.5 | Informed (Heuristic) Search Strategies | IN | L2, L3 |  |
| 3.5.1 | Greedy best-first search | IN | L2, AL1, L3, Ø1 | Greedy best-first |
| 3.5.2 | A∗ search | IN | L2, AL1, L3, Ø1 | Admissible, consistent, optimalitetsbevis (essensen) |
| 3.5.3 | Search contours | IN | L3 (delvis) | Monotone f og optimally efficient i L3; selve contours kun bok |
| 3.5.4 | Satisficing search: Inadmissible heuristics and weighted A∗ | IN | L3 | f = g + w·h, weighted A* |
| 3.5.5 | Memory-bounded search | IN | L3 (delvis) | Beam, IDA*, RBFS, reference count i L3; SMA* kun bok |
| 3.5.6 | Bidirectional heuristic search | IN | — **kun bok** | Bidirectional heuristic search |
| 3.6 | Heuristic Functions | IN | L3 | 8-puzzle, h1/h2 |
| 3.6.1 | The effect of heuristic accuracy on performance | IN | L3 (delvis) | Dominance + tabell s. 117 i L3; effective branching factor kun bok |
| 3.6.2 | Generating heuristics from relaxed problems | IN | L3 | Relaxed problems, h = max(h_a, h_b, …) |
| 3.6.3 | Generating heuristics from subproblems: Pattern databases | IN | L3 | Pattern databases (ikke navngitt som det) |
| 3.6.4 | Generating heuristics with landmarks | IN | — **kun bok** | Landmarks |
| 3.6.5 | Learning to search better | IN | — **kun bok** | Metalevel learning |
| 3.6.6 | Learning heuristics from experience | IN | — **kun bok** |  |

### Kapittel 4 – Search in Complex Environments

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 4.1 | Local Search and Optimization Problems | IN | L3 | Landscape, objective vs cost |
| 4.1.1 | Hill-climbing search | IN | L3 (delvis) | Hill climbing; ridges, sideways moves, random restart kun bok |
| 4.1.2 | Simulated annealing | IN | L3 | Simulated annealing, e^(−ΔE/T) |
| 4.1.3 | Local beam search | IN | — **kun bok** | Local beam search (L3 nevner beam bare for A*) |
| 4.1.4 | Evolutionary algorithms | IN | L3 | GA; mutation kun bok (slidene utelater den, se Fig. 4.8) |
| 4.2 | Local Search in Continuous Spaces | IN | L3 (delvis) | Gradient-ideen; empirical gradient, Newton–Raphson, constrained kun bok |
| 4.3 | Search with Nondeterministic Actions | IN | L3 |  |
| 4.3.1 | The erratic vacuum world | IN | L3 | Erratic vacuum world |
| 4.3.2 | AND – OR search trees | IN | L3 | AND-OR search trees, conditional plan |
| 4.3.3 | Try, try again | IN | L3 (henvisning) | «See the slippery vacuum world in the book!» — les selv |
| 4.4 | Search in Partially Observable Environments | IN | L3 | Belief states |
| 4.4.1 | Searching with no observation | IN | L3 | Sensorless, prediction |
| 4.4.2 | Searching in partially observable environments | IN | L3 | Local sensing |
| 4.4.3 | Solving partially observable problems | IN | L3 | AND-OR over belief states |
| 4.4.4 | An agent for partially observable environments | IN | — **kun bok** | State estimation, localization |
| 4.5 | Online Search Agents and Unknown Environments | IN | L3 | Offline vs online |
| 4.5.1 | Online search problems | IN | L3 (delvis) | Competitive ratio kun bok |
| 4.5.2 | Online search agents | IN | — **kun bok** | ONLINE-DFS-AGENT |
| 4.5.3 | Online local search | IN | — **kun bok** | Random walk, online local search |
| 4.5.4 | Learning in online search | IN | L3 (figur) | LRTA* bare som figur (Fig. 4.23) |

### Kapittel 5 – Constraint Satisfaction Problems (US kap. 6)

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 5.1 | Defining Constraint Satisfaction Problems | IN | L4, AL2, Ø2 | X, D, C; bokas notasjon ⟨(X1,X2), X1≠X2⟩ |
| 5.1.1 | Example problem: Map coloring | IN | L4, Ø2 | Australia map coloring |
| 5.1.2 | Example problem: Job-shop scheduling | IN | — **kun bok** | Job-shop scheduling |
| 5.1.3 | Variations on the CSP formalism | IN | L4 (delvis) | Alldiff, TWO+TWO=FOUR i L4; hypergraph, auxiliary variables, preference constraints kun bok |
| 5.2 | Constraint Propagation: Inference in CSPs | IN | L4 |  |
| 5.2.1 | Node consistency | IN | — **kun bok** | Node consistency |
| 5.2.2 | Arc consistency | IN | L4, AL2, Ø2, L13 | Arc consistency, AC-3 (Fig. 5.3 s. 171) |
| 5.2.3 | Path consistency | IN | — **kun bok** | Path consistency |
| 5.2.4 | K-consistency | IN | — **kun bok** | k-consistency |
| 5.2.5 | Global constraints | IN | L4 (delvis) | Alldiff i L4; bounds propagation kun bok |
| 5.2.6 | Sudoku | IN | L4, AL2, Ø2, L13 | Sudoku (4×4 løst av AC-3 i L4) |
| 5.3 | Backtracking Search for CSPs | IN | L4, AL2, Ø2, L13 | BACKTRACKING-SEARCH, Fig. 5.5 s. 176 |
| 5.3.1 | Variable and value ordering | IN | L4, AL2, L13 | MRV og LCV (ikke navngitt i L4); degree heuristic kun bok |
| 5.3.2 | Interleaving search and inference | IN | L4, AL2, L13 | Forward checking, MAC (ikke navngitt) |
| 5.3.3 | Intelligent backtracking: Looking backward | **UT** | — |  |
| 5.3.4 | Constraint learning | **UT** | — |  |
| 5.4 | Local Search for CSPs | IN | L4, L13 | Min-conflicts; constraint weighting, tabu kun bok |
| 5.5 | The Structure of Problems | **UT** | — | Topological sort ligger her (AL2-advarselen om fjorårets eksamen) |
| 5.5.1 | Cutset conditioning | **UT** | — |  |
| 5.5.2 | Tree decomposition | **UT** | — |  |
| 5.5.3 | Value symmetry | **UT** | — |  |

### Kapittel 6 – Adversarial Search and Games (US kap. 5)

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 6.1 | Game Theory | IN | L8 | Klassifisering av spill |
| 6.1.1 | Two-player zero-sum games | IN | L8 | Formell spilldefinisjon |
| 6.2 | Optimal Decisions in Games | IN | L8 |  |
| 6.2.1 | The minimax search algorithm | IN | L8, AL3, Ø3, L13 | Minimax, Fig. 6.3 s. 196 |
| 6.2.2 | Optimal decisions in multiplayer games | IN | — **kun bok** | Multiplayer |
| 6.2.3 | Alpha–Beta Pruning | IN | L8, AL3, Ø3, L13 | Alpha-beta, Fig. 6.7 s. 200 |
| 6.2.4 | Move ordering | IN | — **kun bok** | Move ordering, killer moves, transposition |
| 6.3 | Heuristic Alpha–Beta Tree Search | IN | L8, L13 |  |
| 6.3.1 | Evaluation functions | IN | L8 | Eval-funksjon (sjakkvekter avviker litt fra boka) |
| 6.3.2 | Cutting off search | IN | L8 (delvis) | Cutoff; quiescence og horizon effect kun bok |
| 6.3.3 | Forward pruning | IN | — **kun bok** | Forward pruning, beam, ProbCut |
| 6.3.4 | Search versus lookup | IN | L8 |  |
| 6.4 | Monte Carlo Tree Search | IN | L8, L13 | MCTS, UCB1 med C = √2 |
| 6.5 | Stochastic Games | IN | L8, L13 | Expectiminimax (+ «expectimax», navnet finnes ikke i kap. 6) |
| 6.5.1 | Evaluation functions for games of chance | IN | — **kun bok** |  |
| 6.6 | Partially Observable Games | IN | L8 (kort), L13 | Bare nevnt kort i L8 og L13; detaljene kun bok |
| 6.6.1 | Kriegspiel: Partially observable chess | IN | — **kun bok** | Kriegspiel |
| 6.6.2 | Card games | IN | — **kun bok** | Card games |
| 6.7 | Limitations of Game Search Algorithms | IN | — **kun bok** |  |

### Kapittel 7 – Logical Agents

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 7.1 | Knowledge-Based Agents | IN | L5 | KB, TELL/ASK |
| 7.2 | The Wumpus World | IN | — **kun bok** | Wumpus world (brukes i mange bokeksempler) |
| 7.3 | Logic | IN | L5, L13 | Model, satisfaction, entailment, soundness, completeness |
| 7.4 | Propositional Logic: A Very Simple Logic | IN | L5 |  |
| 7.4.1 | Syntax | IN | L5, Ø4 | Syntax |
| 7.4.2 | Semantics | IN | L5, Ø4 | Semantics, sannhetstabeller |
| 7.4.3 | A simple knowledge base | IN | — **kun bok** | Wumpus-KB |
| 7.4.4 | A simple inference procedure | IN | — **kun bok** | TT-ENTAILS (model checking-ideen er i L5) |
| 7.5 | Propositional Theorem Proving | IN | L5, L13 | Deduction theorem, validity, satisfiability |
| 7.5.1 | Inference and proofs | IN | L5, L13 | Fig. 7.11 ekvivalenser, MP, and-elimination; monotonicity kun bok |
| 7.5.2 | Proof by resolution | IN | L5, Ø4, L13 | CNF, PL-RESOLUTION; factoring kun bok |
| 7.5.3 | Horn clauses and definite clauses | IN | L5 | Horn og definite clauses |
| 7.5.4 | Forward and backward chaining | IN | L5, L13 | Forward og backward chaining |
| 7.6 | Effective Propositional Model Checking | IN | — **kun bok** |  |
| 7.6.1 | A complete backtracking algorithm | IN | — **kun bok** | DPLL |
| 7.6.2 | Local search algorithms | IN | — **kun bok** | WalkSAT |
| 7.6.3 | The landscape of random SAT problems | IN | — **kun bok** | Random SAT |
| 7.7 | Agents Based on Propositional Logic | **UT** | — |  |
| 7.7.1 | The current state of the world | **UT** | — |  |
| 7.7.2 | A hybrid agent | **UT** | — |  |
| 7.7.3 | Logical state estimation | **UT** | — |  |
| 7.7.4 | Making plans by propositional inference | **UT** | — |  |

### Kapittel 8 – First-Order Logic

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 8.1 | Representation Revisited | IN | L6 | Begrensninger ved PL |
| 8.1.1 | The language of thought | IN | — **kun bok** | Language of thought |
| 8.1.2 | Combining the best of formal and natural languages | IN | — **kun bok** | Ontological / epistemological commitment |
| 8.2 | Syntax and Semantics of First-Order Logic | IN | L6, Ø4 |  |
| 8.2.1 | Models for first-order logic | IN | L6 |  |
| 8.2.2 | Symbols and interpretations | IN | L6 | Standard semantics |
| 8.2.3 | Terms | IN | L6 |  |
| 8.2.4 | Atomic sentences | IN | L6 |  |
| 8.2.5 | Complex sentences | IN | L6 |  |
| 8.2.6 | Quantifiers | IN | L6, Ø4 | ∀ med ⇒, ∃ med ∧; nested; De Morgan for kvantorer |
| 8.2.7 | Equality | IN | L6 | «At least two brothers» |
| 8.2.8 | Database semantics | IN | L6 | Database semantics |
| 8.3 | Using First-Order Logic | IN | L6 |  |
| 8.3.1 | Assertions and queries in first-order logic | IN | L6 | ASK/ASKVARS |
| 8.3.2 | The kinship domain | IN | — **kun bok** | Kinship-aksiomene |
| 8.3.3 | Numbers, sets, and lists | IN | L6 (delvis) | Peano i L6 (og L7); sets og lists kun bok |
| 8.3.4 | The wumpus world | IN | — **kun bok** | Wumpus i FOL |
| 8.4 | Knowledge Engineering in First-Order Logic | IN | — **kun bok** |  |
| 8.4.1 | The knowledge engineering process | IN | — **kun bok** | Knowledge engineering-prosessen |
| 8.4.2 | The electronic circuits domain | IN | — **kun bok** | Electronic circuits |

### Kapittel 9 – Inference in First-Order Logic

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 9.1 | Propositional vs. First-Order Inference | IN | L7, L13 | Propositionalization, UI, EI, Skolem constant |
| 9.1.1 | Reduction to propositional inference | IN | L7 | Semidecidability (Peano-eksempel) |
| 9.2 | Unification and First-Order Inference | IN | L7, L13 | Lifting, GMP |
| 9.2.1 | Unification | IN | L7, L13 | Unification, MGU (Fig. 9.1); occur check kun bok |
| 9.2.2 | Storage and retrieval | IN | — **kun bok** | Storage and retrieval, indeksering |
| 9.3 | Forward Chaining | IN | L7 (delvis) | Bare 9.3.1 forelest; selve forward chaining-algoritmen kun bok |
| 9.3.1 | First-order definite clauses | IN | L7 | Definite clauses, GMP sound + complete |
| 9.3.2 | A simple forward-chaining algorithm | IN | — **kun bok** | FOL-FC-ASK, crime-eksemplet (L7 nevner bare at definite uten funksjoner er decidable) |
| 9.3.3 | Efficient forward chaining | IN | — **kun bok** | Rete, irrelevant facts |
| 9.4 | Backward Chaining | IN | — **kun bok** |  |
| 9.4.1 | A backward-chaining algorithm | IN | — **kun bok** | FOL-BC-ASK |
| 9.4.2 | Logic programming | **UT** | — | Prolog (også «not curriculum» i L5/L6) |
| 9.4.3 | Redundant inference and infinite loops | **UT** | — |  |
| 9.4.4 | Database semantics of Prolog | **UT** | — |  |
| 9.4.5 | Constraint logic programming | **UT** | — |  |
| 9.5 | Resolution | IN | L7, Ø4 |  |
| 9.5.1 | Conjunctive normal form for first-order logic | IN | L7, Ø4, L13 | FOL-CNF i 7 steg, Skolem functions |
| 9.5.2 | The resolution inference rule | IN | L7, Ø4, L13 |  |
| 9.5.3 | Example proofs | IN | L7, L13 | Curiosity killed the cat |
| 9.5.4 | Completeness of resolution | **UT** | — | Herbrand, completeness-beviset |
| 9.5.5 | Equality | IN | L7 | Demodulation, paramodulation |
| 9.5.6 | Resolution strategies | IN | L7, L5 | Unit preference, set of support, input/linear, subsumption |

### Kapittel 10 – Knowledge Representation

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 10.1 | Ontological Engineering | IN | L12 | Upper ontology (Fig. 10.1), CYC, Knowledge Graph |
| 10.2 | Categories and Objects | IN | L12 | Kategorier, reifikasjon, taksonomi, Disjoint / ExhaustiveDecomposition / Partition |
| 10.2.1 | Physical composition | IN | L12 | PartOf, Biped-aksiomet |
| 10.2.2 | Measurements | IN | L12 | Measures; natural kinds / Typical(Tomatoes) (på slide merket 10.5.2) |
| 10.2.3 | Objects: Things and stuff | **UT** ⚠ | — | UT etter Canvas; L12 sier «§10.2» uten unntak. Ikke forelest |
| 10.3 | Events | IN | L12 | Event calculus, persistensaksiom |
| 10.3.1 | Time | IN | L12 | Allens intervallrelasjoner (Fig. 10.2) |
| 10.3.2 | Fluents and objects | IN | — **kun bok** | Fluents and objects |
| 10.4 | Mental Objects and Modal Logic | **UT** | — | Også «Not in the exam» i L12 |
| 10.4.1 | Other modal logics | **UT** | — |  |
| 10.5 | Reasoning Systems for Categories | IN | L12 |  |
| 10.5.1 | Semantic networks | IN | L12 | Semantic networks (Fig. 10.4, 10.5), default/John med ett bein |
| 10.5.2 | Description logics | IN | L12 | Description logics, CLASSIC, subsumption |
| 10.6 | Reasoning with Default Information | **UT** | — | Også «Not in the exam» i L12 |
| 10.6.1 | Circumscription and default logic | **UT** | — |  |
| 10.6.2 | Truth maintenance systems | **UT** | — |  |

### Kapittel 11 – Automated Planning

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 11.1 | Definition of Classical Planning | IN | L11 | PDDL, action schemas, RESULT (Eq. 11.1) |
| 11.1.1 | Example domain: Air cargo transport | IN | L11 | Air cargo (Fig. 11.1), 6-stegs plan |
| 11.1.2 | Example domain: The spare tire problem | **UT** | — | Også ekskludert på L11 s. 45 |
| 11.1.3 | Example domain: The blocks world | **UT** | — | Også ekskludert på L11 s. 45 |
| 11.2 | Algorithms for Classical Planning | IN | L11 |  |
| 11.2.1 | Forward state-space search for planning | IN | L11 | Forward search (Fig. 11.5a) |
| 11.2.2 | Backward search for planning | IN | L11 | Regresjon, relevante handlinger (Fig. 11.5b) |
| 11.2.3 | Planning as Boolean satisfiability | **UT** | — | L11 s. 14: «§11.2.3 — not in the exam» |
| 11.2.4 | Other classical planning approaches | **UT** | — | GraphPlan og partial-order planning ligger her (FAQ: GraphPlan er ute) |
| 11.3 | Heuristics for Planning | IN | L11 (delvis) | Ignore preconditions, ignore delete lists (Fig. 11.6); set-cover-relaksasjonen kun bok |
| 11.3.1 | Domain-independent pruning | **UT** | — |  |
| 11.3.2 | State abstraction in planning | **UT** | — | L11 s. 21: «(§11.3.2, not in the exam)» |
| 11.4 | Hierarchical Planning | IN | L11 |  |
| 11.4.1 | High-level actions | IN | L11 | HLA, refinements (Fig. 11.7) |
| 11.4.2 | Searching for primitive solutions | IN | L11 | Hierarkisk BFS (Fig. 11.8) |
| 11.4.3 | Searching for abstract solutions | **UT** | — |  |
| 11.5 | Planning and Acting in Nondeterministic Domains | IN | L11 | Belief states, percept schemas |
| 11.5.1 | Sensorless planning | IN | L11 | Sensorless planning, malingsproblemet |
| 11.5.2 | Contingent planning | IN | L11 | Contingent planning |
| 11.5.3 | Online planning | IN | L11 | Online planning, replanning, monitoring, plan repair (Fig. 11.12) |
| 11.6 | Time, Schedules, and Resources | **UT** | — |  |
| 11.6.1 | Representing temporal and resource constraints | **UT** | — |  |
| 11.6.2 | Solving scheduling problems | **UT** | — |  |
| 11.7 | Analysis of Planning Approaches | IN | — **kun bok** | Analysis of planning approaches |

### Kapittel 17 – Multiagent Decision Making – bare 17.2 (US 18.2)

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 17.2 | Non-Cooperative Game Theory | IN (støtte) | L10 | Canvas: «Support material – for game theory and multiagent systems» |
| 17.2.1 | Games with a single move: Normal form games | IN (støtte) | L10, L13 | Dominance, Nash equilibrium, pure/mixed, PD, BoS; focal points kun bok |
| 17.2.2 | Social welfare | IN (støtte) | L10 (delvis) | Maximin for zero-sum (Morra) i L10; Pareto optimality, social welfare kun bok |
| 17.2.3 | Repeated games | IN (støtte) | L10, L13 | Repeated games, backward induction, grim trigger, TFT; limit of means kun bok |
| 17.2.4 | Sequential games: The extensive form | ikke listet | — | Ikke i støttelista (Pluribus nevnes i L8) |
| 17.2.5 | Uncertain payoffs and assistance games | ikke listet | — | Ikke i støttelista |

### Kapittel 24 – Natural Language Processing (US kap. 23)

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 24.1 | Language Models | IN | L9 | Language models, hvorfor NLP er vanskelig |
| 24.1.1 | The bag-of-words model | IN | L9 | Bag-of-words / naive Bayes |
| 24.1.2 | N-gram word models | IN | L9 | N-gram, Markov-antakelse |
| 24.1.3 | Other n-gram models | IN | L9 | Tegn-n-gram, skip-gram |
| 24.1.4 | Smoothing n-gram models | IN | L9 | <UNK>, Laplace, backoff, lineær interpolasjon |
| 24.1.5 | Word representations | IN | L9 | WordNet; peker til 25.1 |
| 24.1.6 | Part-of-speech (POS) tagging | IN | L9 | Penn Treebank, HMM-tagger + Viterbi (14.2.3), logistisk regresjon |
| 24.1.7 | Comparing language models | IN | L9 |  |
| 24.2 | Grammar | IN | L9 | PCFG, E0 (Fig. 24.2), over-/undergenerering |
| 24.2.1 | The lexicon of E0 | **UT** | — | Leksikonet (Fig. 24.3) brukes likevel i eksemplene |
| 24.3 | Parsing | IN | L9 | Top-down/bottom-up, CYK (Fig. 24.5–24.6), beam, shift-reduce |
| 24.3.1 | Dependency parsing | **UT** | — |  |
| 24.3.2 | Learning a parser from examples | **UT** | — |  |
| 24.4 | Augmented Grammars | **UT** | — |  |
| 24.4.1 | Semantic interpretation | **UT** | — |  |
| 24.4.2 | Learning semantic grammars | **UT** | — |  |
| 24.5 | Complications of Real Natural Language | **UT** | — |  |
| 24.6 | Natural Language Tasks | IN | L9 | Talegjenkjenning, TTS, MT, IE, IR, QA |

### Kapittel 25 – Deep Learning for NLP (US kap. 24)

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 25.1 | Word Embeddings | **uavklart** | L9 (peker) | «Learned word embeddings (Section 25.1)» |
| 25.2 | Recurrent Neural Networks for NLP | **uavklart** | — |  |
| 25.2.1 | Language models with recurrent neural networks | **uavklart** | — |  |
| 25.2.2 | Classification with recurrent neural networks | **uavklart** | — |  |
| 25.2.3 | LSTMs for NLP tasks | **uavklart** | — |  |
| 25.3 | Sequence-to-Sequence Models | **uavklart** | — | Seq2seq nevnes i L9 (maskinoversettelse, 24.6) |
| 25.3.1 | Attention | **uavklart** | — | Attention nevnes i L9 (24.6) |
| 25.3.2 | Decoding | **uavklart** | — |  |
| 25.4 | The Transformer Architecture | **uavklart** | L9 (peker) | «Looking ahead: transformers GPT-2 (Chapter 25)» |
| 25.4.1 | Self-attention | **uavklart** | — |  |
| 25.4.2 | From self-attention to transformer | **uavklart** | — |  |
| 25.5 | Pretraining and Transfer Learning | **uavklart** | — |  |
| 25.5.1 | Pretrained word embeddings | **uavklart** | — |  |
| 25.5.2 | Pretrained contextual representations | **uavklart** | — |  |
| 25.5.3 | Masked language models | **uavklart** | — |  |
| 25.6 | State of the art | **uavklart** | — |  |

### Kapittel 28 – Philosophy, Ethics, and Safety of AI (US kap. 27)

| Seksjon | Tittel | Pensum | Forelest i | Merknad |
|---|---|---|---|---|
| 28.1 | The Limits of AI | IN | L12 | Weak vs strong AI |
| 28.1.1 | The argument from informality | IN | L12 | Dreyfus |
| 28.1.2 | The argument from disability | IN | L12 | Turings liste |
| 28.1.3 | The mathematical objection | IN | L12 | Gödel, Lucas, Penrose |
| 28.1.4 | Measuring AI | IN | L1 (del 1, delvis) | Turing test og ELIZA i L1; ikke i L12 |
| 28.2 | Can Machines Really Think? | IN | L12 |  |
| 28.2.1 | The Chinese room | IN | L12, L1 (del 1) | Chinese room / Searle |
| 28.2.2 | Consciousness and qualia | IN | L12 | Qualia |
| 28.3 | The Ethics of AI | IN | L12 | EPSRC-prinsippene |
| 28.3.1 | Lethal autonomous weapons | IN | L12 | Lethal autonomous weapons |
| 28.3.2 | Surveillance, security, and privacy | IN | L12 | k-anonymity, differential privacy, federated learning |
| 28.3.3 | Fairness and bias | IN | L12 | Fairness-kriterier, COMPAS |
| 28.3.4 | Trust and transparency | IN | L12 | Verification vs validation, XAI |
| 28.3.5 | The future of work | **UT** ⚠ | — | UT etter Canvas; L12 sier «§28.3 (the whole chapter)». Ikke forelest |
| 28.3.6 | Robot rights | **UT** ⚠ | — | UT etter Canvas; L12 sier «§28.3 (the whole chapter)». Ikke forelest |
| 28.3.7 | AI Safety | IN | L12 | AI safety, value alignment, inverse RL, assistance games |

---

## 4. Alle eksplisitte pensumutsagn (ordrett)

### Canvas og NTNU

| Kilde | Ordrett | Betydning |
|---|---|---|
| Syllabus 2026 (subject to change), endret 27.08.2026 | «1. Lectures, lecture slides, assignment lectures material» / «2. Textbook. Russel and Norvig. Artificial Intelligence - A modern approach. 4th ed. Chapters 1- 11, Sections from Chapter 24-25\*, and Chapter 28» | Grunnregelen. Stjernen har ingen fotnote |
| Syllabus, unntakene | «The following sections are NOT included in the syllabus:» 5.3.3, 5.3.4, 5.5, 7.7, 9.4.2, 9.4.3, 9.4.4, 9.4.5, 9.5.4, 10.2.3, 10.4, 10.6, 11.1.2, 11.1.3, 11.2.3, 11.2.4, 11.3.1, 11.3.2, 11.4.3, 11.6, 24.2.1, 24.3.1, 24.3.2, 24.4, 24.5, 28.3.5, 28.3.6 | 27 unntak. Med underseksjoner blir det 41 seksjoner |
| Syllabus, støttemateriale | «Support material - for game theory and multiagent systems: from chapter 17: Sections 17.2.1, 17.2.2 and 17.2.3.» | Spillteori. Den lokale Canvas-kopien har «og» der den levende siden har «and» |
| Lecture Schedule, L10 | «Not in book, a chapter from another book- see syllabus» | Står i strid med slidene, som bare viser til AIMA (se avsnitt 8) |
| Lecture Schedule, kapittelkolonnen | L1 «Chapter 2», L2 «Chapter 3», L3 «Chapter 4», L4 «Chapter 5», L5 «Chapter 7», L6 «Chapter 8», L7 «Chapter 9», L8 «Chapter 6», L9 «Chapter 24», L11 «Chapter 11», L12 «Chapter 10 and 28», L13 «-----» | Global-nummerering |
| Welcome | «Artificial Intelligence, A modern approach … 4th edition, Global Edition» | Bekrefter at pensum følger Global-utgaven |
| FAQ | «Are previous exams representative…? Mostly, but some topics such as the GraphPlan algorithm are no longer in the current syllabus. The exam will only cover topics within the current syllabus.» | GraphPlan (11.2.4) er ute |
| Exam info | Skoleeksamen, 4 timer, 07.12.2026. Hjelpemiddel «D. None.» Oppgavene er bare på engelsk, og du kan svare på engelsk eller norsk | – |
| NTNU emneside 2026/2027 | Pensum: «Lenke til pensumliste i Leganto». Kursmateriell: «Oppgis ved semesterstart» | Leganto-lista krever innlogging, så den er ikke sjekket |
| NTNU emneside, læringsutbytte | Historisk perspektiv; problemløsning, inferens og kunnskapsrepresentasjon; PL og predikatlogikk; uinformerte og heuristiske søk; adversarialsøk; CSP; planlegging; multiagent miljø og spillteoriprinsipper; etikk | Dekker de samme temaene som Syllabus. NLP er ikke nevnt |
| NTNU emneside, faglig innhold | Nevner «regler, rammer og semantiske nett» | Gammel tekst. «Rammer» (frames) er ikke forelest |

### Forelesningene

| Kilde | Side | Ordrett | Betydning |
|---|---|---|---|
| L2 | 42 | «p. 85 in the textbook.» | Fig. 3.2, vacuum world-tilstandsrommet |
| L2 | 115, 201 | «Read the book! To become familiar with the algorithms and their implementations details, you should read the book. These slides are not a replacement for the book; they are a summary of the most important points.» | Boka er hovedkilden for kap. 3 |
| L2 | 129 | «check your book for the step by step strategies.» | DFS, DLS/IDS, UCS, Greedy og A\* |
| AL1 | 5–7 | «the one found on page 95» / «Best-First-Search on page 91» | Fig. 3.9 (BFS) og Fig. 3.7 (best-first) er referansealgoritmene til eksamen |
| AL1 | 3 | «In the exam, you may have to do these algorithms by hand.» | Øv på håndsporing |
| L3 | 2 | «Today we are covering the remaining part of Chapter 3 and all of Chapter 4.» | Hele kap. 4 er pensum, ingenting unntatt |
| L3 | 7 | «For Breadth-First Search, our main reference is the pseudocode found on page 95 … For all the other algorithms, we use Best-First Search on Page 91 with the appropriate function f» | Samme konvensjon som AL1 |
| L3 | 27 | «A popular version of A\* requires consistency. In the bonus task in Assignment 1 you are asked to find it…» | 3.5.2–3.5.3 |
| L3 | 53 | «On page 117 of the book, you can see a nice table showing how h2 (n) consistently outperforms h1 (n).» | Fig. 3.26 (3.6.1) |
| L3 | 68 | «As the last time with algorithms, please check the full details in the book!» | Pseudokoden i kap. 4 |
| L3 | 101 | «See the slippery vacuum world in the book!» | 4.3.3 |
| L3 | 118 | «Next week … (Chapter 5)» | – |
| L4 | 29–30 | «…(see the algorithm in Figure 5.3 in the book)» | AC-3 |
| AL2 | 2 | «Chapter 5 in the Russell and Norvig book (4th edition, Global).» | Hele kap. 5 minus unntakene |
| AL2 | 3 | «Historically, there has usually been a problem covering this in exams. … Watch out, read the book! Last year there was a problem on topological sort. I believe this was only in the book and a lot of people were confused.» | Topological sort ligger i 5.5, som er UT i 2026 (se avsnitt 8) |
| AL2 | 7 | «p. 171» (AC-3) / «p. 176» (backtracking) | Fig. 5.3 og Fig. 5.5 |
| L5 | 42 | «Forward chaining … Shown in Figure 7.15 in the book» | 7.5.4 |
| L5 | 68 | «unit preference heuristic (p. 326)» | 9.5.6 |
| L7 | 26 | «Figure 9.1 in the book shows a unification algorithm» | 9.2.1 |
| AL3 | 2 | «Chapter 6 in the Russell and Norvig book (4th edition, Global).» | Hele kap. 6 |
| AL3 | 3 | «Historically, you usually have to do this with pen and paper on the exam.» | Minimax og alpha-beta for hånd |
| AL3 | 4 | «The goofy little pseudocode in the book is smarter than you.» | Bruk Fig. 6.3 og 6.7 |
| AL3 | 8 | «Pseudocode for minimax-search is found on p. 196 …» / «…alpha-beta search is found on p. 200 …» | – |
| L9 | 2 | «The sections in scope for the exam are listed on the last slide.» | – |
| L9 | 58 | «All sections are in scope, except those listed on the right.» Excluded: «24.2.1 The lexicon of E₀ • 24.3.1 Dependency parsing • 24.3.2 Learning a parser from examples • 24.4 Augmented grammars • 24.5 Complications of real natural language» | Stemmer nøyaktig med Canvas |
| L9 | 23 / 27 | «Looking ahead: transformers / GPT-2 (Chapter 25)» / «Learned word embeddings (Section 25.1)» | Bare pekere. Ingen sier at kap. 25 er pensum |
| L9 | 32 | «Viterbi (Section 14.2.3) finds the most probable tag sequence» | Kap. 14 er ikke i pensumlista. Lær Viterbi slik den brukes i 24.1.6 |
| L10 | 25 | «For zero-sum games, this is the same as the maximin equilibrium in the book» | Den eneste bokhenvisningen i L10 (17.2.2) |
| L11 | 2 | «The sections excluded from the exam are listed on the "Reading and exam scope" slide at the end.» | – |
| L11 | 14 | «§11.2.3 — not in the exam» | – |
| L11 | 21 | «(§11.3.2, not in the exam)» / «Today: relaxations that add edges.» | – |
| L11 | 45 | «All sections are in scope, except those listed on the right. Backup slides at the end: self-study, also in scope.» Excluded: «11.1.2 The spare tire problem • 11.1.3 The blocks world • 11.2.3 Planning as Boolean satisfiability • 11.2.4 Other classical planning approaches • 11.3.1 Domain-independent pruning • 11.3.2 State abstraction in planning • 11.4.3 Searching for abstract solutions • 11.6 Time, schedules, and resources» | Stemmer nøyaktig med Canvas. Backup-slidene finnes ikke |
| L12 | 1–2 | «Readings: Russell & Norvig, AIMA 4th ed., Chapters 10 and 28 (exam scope on the last slide)» / «The sections excluded from the exam are listed on the reading slide at the end.» | – |
| L12 | 37 | «§10.1 · §10.2 · §10.3 · §10.5» / «§28.1 · §28.2 · §28.3 (the whole chapter)» / «Not in the exam • 10.4 Mental objects and modal logic • 10.6 Reasoning with default information» | Avviker fra Canvas på 10.2.3, 28.3.5 og 28.3.6 (se avsnitt 8) |
| L13 | 4 | «Not in this course: continuous state and action spaces» | AlphaStar-typen spill |

---

## 5. Det du må lese selv: i pensum, men ikke (helt) forelest

Gjentatte oppfordringer i slidene: «Read the book! … These slides are not a replacement for the book» (L2 og L3), «please check the full details in the book!» (L3) og «Watch out, read the book!» (AL2). Topological sort-advarselen i AL2 gjaldt nettopp noe som bare sto i boka.

**Ikke forelest i det hele tatt (46 seksjoner):**

| Kapittel | Les i boka |
|---|---|
| 1 | 1.1.5 Beneficial machines; 1.4 The State of the Art; 1.5 Risks and Benefits of AI |
| 2 | 2.4.7 How the components of agent programs work |
| 3 | 3.1.2 Formulating problems; 3.4.5 Bidirectional search; 3.5.6 Bidirectional heuristic search; 3.6.4 Generating heuristics with landmarks; 3.6.5 Learning to search better; 3.6.6 Learning heuristics from experience |
| 4 | 4.1.3 Local beam search; 4.4.4 An agent for partially observable environments; 4.5.2 Online search agents; 4.5.3 Online local search |
| 5 | 5.1.2 Example problem: Job-shop scheduling; 5.2.1 Node consistency; 5.2.3 Path consistency; 5.2.4 K-consistency |
| 6 | 6.2.2 Optimal decisions in multiplayer games; 6.2.4 Move ordering; 6.3.3 Forward pruning; 6.5.1 Evaluation functions for games of chance; 6.6.1 Kriegspiel: Partially observable chess; 6.6.2 Card games; 6.7 Limitations of Game Search Algorithms |
| 7 | 7.2 The Wumpus World; 7.4.3 A simple knowledge base; 7.4.4 A simple inference procedure; 7.6 Effective Propositional Model Checking; 7.6.1 A complete backtracking algorithm; 7.6.2 Local search algorithms; 7.6.3 The landscape of random SAT problems |
| 8 | 8.1.1 The language of thought; 8.1.2 Combining the best of formal and natural languages; 8.3.2 The kinship domain; 8.3.4 The wumpus world; 8.4 Knowledge Engineering in First-Order Logic; 8.4.1 The knowledge engineering process; 8.4.2 The electronic circuits domain |
| 9 | 9.2.2 Storage and retrieval; 9.3.2 A simple forward-chaining algorithm; 9.3.3 Efficient forward chaining; 9.4 Backward Chaining; 9.4.1 A backward-chaining algorithm |
| 10 | 10.3.2 Fluents and objects |
| 11 | 11.7 Analysis of Planning Approaches |

**Forelest, men bare delvis (25 seksjoner):**

| Seksjon | Forelest i | Dette står bare i boka |
|---|---|---|
| 3.5.3 Search contours | L3 (delvis) | Monotone f og optimally efficient i L3; selve contours kun bok |
| 3.5.5 Memory-bounded search | L3 (delvis) | Beam, IDA*, RBFS, reference count i L3; SMA* kun bok |
| 3.6.1 The effect of heuristic accuracy on performance | L3 (delvis) | Dominance + tabell s. 117 i L3; effective branching factor kun bok |
| 4.1.1 Hill-climbing search | L3 (delvis) | Hill climbing; ridges, sideways moves, random restart kun bok |
| 4.1.4 Evolutionary algorithms | L3 | GA; mutation kun bok (slidene utelater den, se Fig. 4.8) |
| 4.2 Local Search in Continuous Spaces | L3 (delvis) | Gradient-ideen; empirical gradient, Newton–Raphson, constrained kun bok |
| 4.3.3 Try, try again | L3 (henvisning) | «See the slippery vacuum world in the book!» — les selv |
| 4.5.1 Online search problems | L3 (delvis) | Competitive ratio kun bok |
| 4.5.4 Learning in online search | L3 (figur) | LRTA* bare som figur (Fig. 4.23) |
| 5.1.3 Variations on the CSP formalism | L4 (delvis) | Alldiff, TWO+TWO=FOUR i L4; hypergraph, auxiliary variables, preference constraints kun bok |
| 5.2.5 Global constraints | L4 (delvis) | Alldiff i L4; bounds propagation kun bok |
| 5.3.1 Variable and value ordering | L4, AL2, L13 | MRV og LCV (ikke navngitt i L4); degree heuristic kun bok |
| 5.4 Local Search for CSPs | L4, L13 | Min-conflicts; constraint weighting, tabu kun bok |
| 6.3.2 Cutting off search | L8 (delvis) | Cutoff; quiescence og horizon effect kun bok |
| 6.6 Partially Observable Games | L8 (kort), L13 | Bare nevnt kort i L8 og L13; detaljene kun bok |
| 7.5.1 Inference and proofs | L5, L13 | Fig. 7.11 ekvivalenser, MP, and-elimination; monotonicity kun bok |
| 7.5.2 Proof by resolution | L5, Ø4, L13 | CNF, PL-RESOLUTION; factoring kun bok |
| 8.3.3 Numbers, sets, and lists | L6 (delvis) | Peano i L6 (og L7); sets og lists kun bok |
| 9.2.1 Unification | L7, L13 | Unification, MGU (Fig. 9.1); occur check kun bok |
| 9.3 Forward Chaining | L7 (delvis) | Bare 9.3.1 forelest; selve forward chaining-algoritmen kun bok |
| 11.3 Heuristics for Planning | L11 (delvis) | Ignore preconditions, ignore delete lists (Fig. 11.6); set-cover-relaksasjonen kun bok |
| 17.2.1 Games with a single move: Normal form games | L10, L13 | Dominance, Nash equilibrium, pure/mixed, PD, BoS; focal points kun bok |
| 17.2.2 Social welfare | L10 (delvis) | Maximin for zero-sum (Morra) i L10; Pareto optimality, social welfare kun bok |
| 17.2.3 Repeated games | L10, L13 | Repeated games, backward induction, grim trigger, TFT; limit of means kun bok |
| 28.1.4 Measuring AI | L1 (del 1, delvis) | Turing test og ELIZA i L1; ikke i L12 |

---

## 6. Forelest, men ikke i boka

Alt dette er pensum etter punkt 1 i Syllabus. Kilden er slidene.

| Tema | Hvor | Hva boka har |
|---|---|---|
| Kursmålet («ikke ML/LLM/ANN»), definisjonene til McCarthy, Minsky og Charniak, epoker som ikke er i boka, roboten Sofia | L1 del 1 s. 1–5, 21, 23 | Ingenting, eller bare kort i 1.3 |
| ELIZA-dialogen | L1 del 1 s. 10–11 | ELIZA er bare nevnt i 28.1.4 |
| Negative heuristics: tre spørsmål med svar, h(g) = −999 | L3 s. 19–20 | – |
| Moteksemplet A–B–C–G med h(B) = 1000 | L3 s. 16–18 | Beviset i 3.5.2, men ikke dette eksemplet |
| Griewank-landskap, tapsfunksjon i ML, saboterte treningsdata, «wake up problem» med sin(x) og Weierstrass | L3 s. 64, 75–78, 89–90 | Landskap og gradient i 4.1–4.2 |
| Begrepene «metaheuristics» og «population-based optimisation» | L3 s. 72–74 | Boka bruker andre navn |
| Zebra puzzle | L4 s. 2 | – |
| Forventet antall feil med MRV+LCV på A–B–C (≈ 0,704) og bordplassering som CSP | AL2 s. 5, 14–15 | – |
| Graph colouring som CSP løst med PL-resolution | L5 s. 72–76. Bare Z3-løsningen er «not curriculum» | Kobling mellom kap. 5 og 7.5 |
| Dime > nickel > penny (naturlig språk er vanskelig å tolke); «LLMs can do some Modus Ponens» | L5 s. 7–8 og 29 | – |
| Merknad om EI: hvis KB allerede gjør ∃-setningen sann, trengs ingen Skolem constant | L7 s. 20 | – |
| Expectimax | L8, L13 | Bare i Global 16.2.4 (US 17.2.4, MDP), som er utenfor kapittellista |
| Bucket game og halving game | L8 s. 5–17, Ø3 | – |
| Utnytte en motstander som ikke spiller likevekt i stein-saks-papir | L8 s. 42–43 | Samme resonnement som matching pennies i 17.2.1 |
| **Regret minimization og regret matching**; Pluribus; detaljer om AlphaZero og AlphaStar | L8 s. 30–32 og 44–50; L13 s. 3 | Regret står bare i bibliografien. Pluribus nevnes i 17.2.4 (UT) |
| **IESDS** (iterated elimination of strictly dominated strategies) | L10 s. 5; L13 s. 5 | Dominans i 17.2.1. Gjentatt fjerning nevnes bare kort i 17.2.2 |
| Notasjonen π_p for forventet utility | L10 | Boka har annen notasjon |
| **Battle of the Sexes**: to rene NE og blandet NE (2/3, 1/3) med indifference-metoden for general-sum | L10 s. 26–36 | Boka regner bare blandet likevekt for zero-sum |
| **Diskontering δ** og **grim trigger som NE når δ ≥ 1/5** | L10 s. 52–54 | Boka bruker limit of means og har ingen δ-utledning |
| Strategikonkurranse, Axelrod's tournament, romlig konkurranse | L10 s. 56–58 | Axelrod står bare i de historiske notatene |
| Hestehodet: CNF-konvertering med Skolemisering og 9-linjers resolution-bevis | L13 s. 11–31 | Ikke regnet ut i boka |
| Eget talleksempel for Laplace og interpolasjon | L9 s. 20–21 | Metoden står i 24.1.4, med andre tall |

---

## 7. Merket «not curriculum» eller ute i slidene (ordrett)

| Kilde | Side | Ordrett |
|---|---|---|
| L4 | 45 | «Example software that can be used to solve CSPs (not curriculum)» (z3) |
| L5 | 6 | «Natural language demo (not curriculum)» |
| L5 | 17 | «Lean proof assistant (not curriculum)» |
| L5 | 20 | «Proof in Lean for (α ⇒ β) ≡ ¬(α ∧ ¬β) (not curriculum)» |
| L5 | 21 | «Check for unsatisfiability example using z3 (not curriculum)» |
| L5 | 41 | «Horn clauses: significance (not curriculum)» (Prolog) |
| L5 | 72 | «Python solution using the Z3 Theorem Prover is available here (not curriculum)» |
| L6 | 5 | «Propositional and first-order logic in Prolog (not curriculum)» |
| L6 | 7 | «Natural language demo (not curriculum)» |
| L6 | 41–45 | «Example "by hand" proof and counterexample (not curriculum)» (fordeling av ∀ over ∧ og ∨) |
| L6 | 49–50 | «Asking for variables, Prolog example (not curriculum)» / «…Z3 example (not curriculum)» |
| L6 | 52–59 | √2 er irrasjonal, x² partall, odde tall, SMT, Alive2, overflow, out-of-bounds, C++26 contracts. Alle er merket «(not curriculum)» |
| L10 | 25 | «Proof at live.lean-lang.org (not curriculum)» |
| L11 | 14, 21, 45 | «§11.2.3 — not in the exam», «(§11.3.2, not in the exam)» og ekskluderingslisten |
| L9 | 58 | Ekskluderingslisten for kap. 24 |
| L12 | 37 | «Not in the exam • 10.4 … • 10.6 …» |
| L13 | 4 | «Not in this course: continuous state and action spaces» |

Disse gjelder bare øvingene, ikke eksamen:
- Ø2: «no inference needs to be performed during the backtracking search» og «You will not need to use non-binary constraints».
- AL2: «Just skip» om forward checking i koden. Forward checking er likevel eksamenspensum.

---

## 8. Konflikter og uklarheter

| # | Hva | Kildene sier | Ble det forelest? | Hva du bør gjøre |
|---|---|---|---|---|
| 1 | **10.2.3 Objects: Things and stuff** | Canvas: UT. L12 s. 37: «§10.2» uten unntak | Nei | Les den raskt (kort seksjon). Billig forsikring |
| 2 | **28.3.5 The future of work, 28.3.6 Robot rights** | Canvas: UT. L12 s. 37: «§28.3 (the whole chapter)» | Nei | Les dem raskt, de er korte og lette. Avklar gjerne i Canvas-forumet |
| 3 | **Kap. 25** | Canvas: «Sections from Chapter 24-25\*», uten fotnote. L9: bare pekere til 25.1 og transformers | Nei, bare nevnt | Kunne 25.1 (word embeddings) og hovedideen bak RNN, seq2seq, attention og transformer på oversiktsnivå. Avklar gjerne |
| 4 | **L11 backup-slides** | L11 s. 45: «Backup slides at the end: self-study, also in scope.» PDF-en slutter på s. 46 med «Questions?». Slide 45 mangler også | – | Innholdet er ukjent. Les hele kap. 11 unntatt de ekskluderte seksjonene, så er du dekket |
| 5 | **Spillteori, «another book»** | Lecture Schedule: «Not in book, a chapter from another book- see syllabus». L10 viser bare til «the book» (AIMA), og Syllabus lister bare AIMA 17.2.1–17.2.3 | L10, L13 | Pensum er L10-slidene og 17.2.1–17.2.3. Ingen annen bok er oppgitt noe sted |
| 6 | **Topological sort** | AL2: «Last year there was a problem on topological sort.» Den står i 5.5, som Canvas tar ut i 2026 | Nei | Ute i 2026. Lav prioritet |
| 7 | **L6 «by hand»-bevis** | L6 s. 41–45 er «not curriculum». L7 bruker likevel resultatet når ∀ flyttes utover i CNF | L6, L7 | Selve bevisteknikken er ute. Regelen ∀x (P ∧ Q) ≡ ∀x P ∧ ∀x Q, og at ∨ ikke fordeler seg slik, bør du kunne |
| 8 | **L9 skjulte slides** | 18 slidenumre mangler i L9 (23, 24, 31, 36, 38, 39, 40, 43, 48, 50, 52, 53, 55, 57, 59, 61, 62, 64). PDF-side 23 har bunnteksten «25» | – | Innholdet er ukjent. Kap. 24 i boka dekker det uansett |
| 9 | **L12 og L13** | L12: slide 37 mangler. L13: Canvas sier «Summary (Ole and Massimiliano)», men bare Eidheims del (CSP, spill, spillteori, logikk) ligger på Canvas | – | Ruoccos temaer (agenter, søk, NLP, planlegging, KR, etikk) har ikke noe sammendragsdeck. Bruk denne oversikten |
| 10 | **US-nummerering i skjult tekst** | L4 og L8 har skjult tekst fra US-utgaven («Chapter 6 …», «Figure 5.10»). Synlig tekst er Global | – | Ingen betydning. Det viser bare at bildene er klippet fra US-PDF-en |
| 11 | **Feil i slidene** | L2: h_SLD-tabellen har Fagaras 178 og Pitesti 98, mens boka har 176 og 100. AL1 s. 18: begrunnelsen er feil (se vedlegget). L3: GA-stegene mangler mutation | – | Bruk bokas verdier og bokas pseudokode |
| 12 | **NTNU-emnesiden** | Faglig innhold nevner «regler, rammer og semantiske nett». Pensumlista ligger i Leganto, som krever innlogging | – | Gammel tekst. Canvas Syllabus er den gjeldende listen |
| 13 | **Pekere ut av pensum** | L9: Viterbi (14.2.3) og EM. L12 s. 4: «Other formalisms in the book»: kap. 11, 13, 16 og 22 | – | Bare orientering. Kunne Viterbi slik den brukes i POS-tagging |

---

## 9. Canvas og NTNU-fagsiden: sjekket 16.11.2026

- Syllabus 2026 (sist endret 27.08) er den eneste siden med pensumavgrensning. Den er gjengitt ordrett i avsnitt 4.
- Lecture Schedule, Exam Info og FAQ står i avsnitt 4. Sidene Assignment Schedule, Week schedule, Lab Hours, Assignment Lectures og Teaching staff sier ingenting om pensum.
- Ingen nye filer, sider eller kunngjøringer etter 09.11. L13 (12.11) var siste forelesning.
- NTNU-emnesiden for 2026/2027:
  - Eksamen: skriftlig skoleeksamen i Inspera Assessment, 100 % av karakteren, kode D, 07.12.2026 kl. 15:00, 4 timer.
  - Rom: Sluppenvegen 14 (SL111 og SL210) og Ankeret (C218, C225). Endelig rom står i Studentweb senest 3 dager før.
  - Utsatt eksamen er sommeren 2027. Der kan skriftlig eksamen bli gjort om til muntlig.
- Leganto-pensumlista er ikke sjekket, fordi den krever NTNU-innlogging. Det kan du gjøre selv: åpne «Lenke til pensumliste i Leganto» på emnesiden.
