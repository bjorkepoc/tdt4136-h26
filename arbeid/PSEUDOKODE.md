# Pseudokode

Her står pseudokoden for algoritmene i forelesningene og i pensumkapitlene i AIMA 4e. Den følger forelesningsslidene og figurnumrene i Global-utgaven (kap. 5 = CSP, kap. 6 = spill), og «ikke i forelesningene» betyr at pseudokoden bare står i boka.

## Agenter (kap. 2)

### TABLE-DRIVEN-AGENT
*Figur 2.7 (ikke i forelesningene)*

```text
function TABLE-DRIVEN-AGENT(percept) returns an action
  persistent: percepts, a sequence, initially empty
              table, a table of actions, indexed by percept sequences, initially fully specified

  append percept to the end of percepts
  action ← LOOKUP(percepts, table)
  return action
```

Forelesning 1 del 3, s. 30 forklarer hvorfor tabellen blir umulig stor, men viser ikke pseudokoden.

### REFLEX-VACUUM-AGENT
*Figur 2.8 · Forelesning 1 del 3, s. 31*

```text
function REFLEX-VACUUM-AGENT([location, status]) returns an action
  if status = Dirty then return Suck
  else if location = A then return Right
  else if location = B then return Left
```

### SIMPLE-REFLEX-AGENT
*Figur 2.10 (ikke i forelesningene)*

```text
function SIMPLE-REFLEX-AGENT(percept) returns an action
  persistent: rules, a set of condition–action rules

  state ← INTERPRET-INPUT(percept)
  rule ← RULE-MATCH(state, rules)
  action ← rule.ACTION
  return action
```

### MODEL-BASED-REFLEX-AGENT
*Figur 2.12 (ikke i forelesningene)*

```text
function MODEL-BASED-REFLEX-AGENT(percept) returns an action
  persistent: state, the agent's current conception of the world state
              transition_model, a description of how the next state depends on
                  the current state and action
              sensor_model, a description of how the current world state is reflected
                  in the agent's percepts
              rules, a set of condition–action rules
              action, the most recent action, initially none

  state ← UPDATE-STATE(state, action, percept, transition_model, sensor_model)
  rule ← RULE-MATCH(state, rules)
  action ← rule.ACTION
  return action
```

Forelesning 1 del 3, s. 33 beskriver agenten med ord (transition model og sensor model).

## Søk (kap. 3)

### BEST-FIRST-SEARCH
<!-- algo: dfs, ucs, greedy, astar, wastar -->
*Figur 3.7 · Forelesning 3, s. 9; Oppgaveforelesning 1, lysbilde 6*

```text
function BEST-FIRST-SEARCH(problem, f) returns a solution node or failure
  node ← NODE(STATE=problem.INITIAL)
  frontier ← a priority queue ordered by f, with node as an element
  reached ← a lookup table, with one entry with key problem.INITIAL and value node
  while not IS-EMPTY(frontier) do
    node ← POP(frontier)
    if problem.IS-GOAL(node.STATE) then return node
    for each child in EXPAND(problem, node) do
      s ← child.STATE
      if s is not in reached or child.PATH-COST < reached[s].PATH-COST then
        reached[s] ← child
        add child to frontier
  return failure

function EXPAND(problem, node) yields nodes
  s ← node.STATE
  for each action in problem.ACTIONS(s) do
    s′ ← problem.RESULT(s, action)
    cost ← node.PATH-COST + problem.ACTION-COST(s, action, s′)
    yield NODE(STATE=s′, PARENT=node, ACTION=action, PATH-COST=cost)

// The course's choice of f for each strategy:
//   Depth-First Search                f(n) = −depth(n)
//   Uniform-Cost Search (Dijkstra)    f(n) = g(n)
//   Greedy Best-First Search          f(n) = h(n)
//   A* Search                         f(n) = g(n) + h(n)
//   weighted A* search                f(n) = g(n) + w · h(n),  w > 1
```

Målet testes når noden tas ut av frontier (late goal test). Tabellen over f står i Forelesning 2, s. 202 og Forelesning 3, s. 7 (weighted A* på s. 46), og Forelesning 2, s. 71–77 beskriver den samme løkken i fem steg.

### BREADTH-FIRST-SEARCH
<!-- algo: bfs -->
*Figur 3.9 · Forelesning 3, s. 8; Oppgaveforelesning 1, lysbilde 5*

```text
function BREADTH-FIRST-SEARCH(problem) returns a solution node or failure
  node ← NODE(problem.INITIAL)
  if problem.IS-GOAL(node.STATE) then return node
  frontier ← a FIFO queue, with node as an element
  reached ← {problem.INITIAL}
  while not IS-EMPTY(frontier) do
    node ← POP(frontier)
    for each child in EXPAND(problem, node) do
      s ← child.STATE
      if problem.IS-GOAL(s) then return child
      if s is not in reached then
        add s to reached
        add child to frontier
  return failure

// EXPAND, from Figure 3.7
function EXPAND(problem, node) yields nodes
  s ← node.STATE
  for each action in problem.ACTIONS(s) do
    s′ ← problem.RESULT(s, action)
    cost ← node.PATH-COST + problem.ACTION-COST(s, action, s′)
    yield NODE(STATE=s′, PARENT=node, ACTION=action, PATH-COST=cost)
```

Early goal test: målet sjekkes når barnet genereres, ikke når det tas ut. Oppgaveforelesning 1 kaller dette den største fellen, og Forelesning 2, s. 116 sier det samme.

### UNIFORM-COST-SEARCH
<!-- algo: ucs -->
*Figur 3.9 · Forelesning 2, s. 202; Forelesning 3, s. 7 (som best-first med f(n) = g(n))*

```text
function UNIFORM-COST-SEARCH(problem) returns a solution node, or failure
  return BEST-FIRST-SEARCH(problem, PATH-COST)
```

Late goal test: målet sjekkes først når noden tas ut (Forelesning 2, s. 146).

### ITERATIVE-DEEPENING-SEARCH
<!-- algo: ids, dls -->
*Figur 3.12 (ikke i forelesningene)*

```text
function ITERATIVE-DEEPENING-SEARCH(problem) returns a solution node or failure
  for depth = 0 to ∞ do
    result ← DEPTH-LIMITED-SEARCH(problem, depth)
    if result ≠ cutoff then return result

function DEPTH-LIMITED-SEARCH(problem, ℓ) returns a node or failure or cutoff
  frontier ← a LIFO queue (stack) with NODE(problem.INITIAL) as an element
  result ← failure
  while not IS-EMPTY(frontier) do
    node ← POP(frontier)
    if problem.IS-GOAL(node.STATE) then return node
    if DEPTH(node) > ℓ then
      result ← cutoff
    else if not IS-CYCLE(node) do
      for each child in EXPAND(problem, node) do
        add child to frontier
  return result
```

Figuren skriver DEPTH(node) > ℓ, men teksten i 3.4.4 og Forelesning 2, s. 143 behandler noder på dybde ℓ som om de ikke har barn, altså ≥ ℓ. Kursnotatet følger teksten.

### BIBF-SEARCH
*Figur 3.14 (ikke i forelesningene)*

```text
function BIBF-SEARCH(problemF, fF, problemB, fB) returns a solution node, or failure
  nodeF ← NODE(problemF.INITIAL)                      // Node for a start state
  nodeB ← NODE(problemB.INITIAL)                      // Node for a goal state
  frontierF ← a priority queue ordered by fF, with nodeF as an element
  frontierB ← a priority queue ordered by fB, with nodeB as an element
  reachedF ← a lookup table, with one key nodeF.STATE and value nodeF
  reachedB ← a lookup table, with one key nodeB.STATE and value nodeB
  solution ← failure
  while not TERMINATED(solution, frontierF, frontierB) do
    if fF(TOP(frontierF)) < fB(TOP(frontierB)) then
      solution ← PROCEED(F, problemF, frontierF, reachedF, reachedB, solution)
    else solution ← PROCEED(B, problemB, frontierB, reachedB, reachedF, solution)
  return solution

function PROCEED(dir, problem, frontier, reached, reached₂, solution) returns a solution
      // Expand node on frontier; check against the other frontier in reached₂.
      // The variable "dir" is the direction: either F for forward or B for backward.
  node ← POP(frontier)
  for each child in EXPAND(problem, node) do
    s ← child.STATE
    if s not in reached or PATH-COST(child) < PATH-COST(reached[s]) then
      reached[s] ← child
      add child to frontier
      if s is in reached₂ then
        solution₂ ← JOIN-NODES(dir, child, reached₂[s])
        if PATH-COST(solution₂) < PATH-COST(solution) then
          solution ← solution₂
  return solution
```

### RECURSIVE-BEST-FIRST-SEARCH
*Figur 3.22 (ikke i forelesningene)*

```text
function RECURSIVE-BEST-FIRST-SEARCH(problem) returns a solution or failure
  solution, fvalue ← RBFS(problem, NODE(problem.INITIAL), ∞)
  return solution

function RBFS(problem, node, f_limit) returns a solution or failure, and a new f-cost limit
  if problem.IS-GOAL(node.STATE) then return node
  successors ← LIST(EXPAND(node))
  if successors is empty then return failure, ∞
  for each s in successors do          // update f with value from previous search
    s.f ← max(s.PATH-COST + h(s), node.f)
  while true do
    best ← the node in successors with lowest f-value
    if best.f > f_limit then return failure, best.f
    alternative ← the second-lowest f-value among successors
    result, best.f ← RBFS(problem, best, min(f_limit, alternative))
    if result ≠ failure then return result, best.f
```

Forelesning 3, s. 34 nevner RBFS som en måte å spare minne i A* på, uten pseudokode.

## Søk i komplekse miljøer (kap. 4)

### HILL-CLIMBING
<!-- algo: hill-climbing -->
*Figur 4.2 (ikke i forelesningene)*

```text
function HILL-CLIMBING(problem) returns a state that is a local maximum
  current ← problem.INITIAL
  while true do
    neighbor ← a highest-valued successor state of current
    if VALUE(neighbor) ≤ VALUE(current) then return current
    current ← neighbor
```

Søket stopper når ingen nabo er strengt bedre. Forelesning 3, s. 68 viser til boka for detaljene i kap. 4.

### SIMULATED-ANNEALING
<!-- algo: simulated-annealing -->
*Figur 4.5 (ikke i forelesningene)*

```text
function SIMULATED-ANNEALING(problem, schedule) returns a solution state
  current ← problem.INITIAL
  for t = 1 to ∞ do
    T ← schedule(t)
    if T = 0 then return current
    next ← a randomly selected successor of current
    ΔE ← VALUE(current) − VALUE(next)
    if ΔE > 0 then current ← next
    else current ← next only with probability e^(ΔE/T)
```

Global-utgaven skriver e^(ΔE/T) og US-utgaven e^(−ΔE/T); figuren stemmer når VALUE er en kostnad. Forelesning 3, s. 73 skriver P(accept) = e^(−ΔE/T) med ΔE som forverringen, så eksponenten er alltid ≤ 0.

### GENETIC-ALGORITHM
<!-- algo: genetisk -->
*Figur 4.8 (ikke i forelesningene)*

```text
function GENETIC-ALGORITHM(population, fitness) returns an individual
  repeat
    weights ← WEIGHTED-BY(population, fitness)
    population2 ← empty list
    for i = 1 to SIZE(population) do
      parent1, parent2 ← WEIGHTED-RANDOM-CHOICES(population, weights, 2)
      child ← REPRODUCE(parent1, parent2)
      if (small random probability) then child ← MUTATE(child)
      add child to population2
    population ← population2
  until some individual is fit enough, or enough time has elapsed
  return the best individual in population, according to fitness

function REPRODUCE(parent1, parent2) returns an individual
  n ← LENGTH(parent1)
  c ← random number from 1 to n
  return APPEND(SUBSTRING(parent1, 1, c), SUBSTRING(parent2, c + 1, n))
```

Forelesning 3, s. 86 gir de samme stegene i punktform, men uten mutasjon.

### AND-OR-SEARCH
<!-- algo: and-or -->
*Figur 4.11 (ikke i forelesningene)*

```text
function AND-OR-SEARCH(problem) returns a conditional plan, or failure
  return OR-SEARCH(problem, problem.INITIAL, [ ])

function OR-SEARCH(problem, state, path) returns a conditional plan, or failure
  if problem.IS-GOAL(state) then return the empty plan
  if IS-CYCLE(state, path) then return failure
  for each action in problem.ACTIONS(state) do
    plan ← AND-SEARCH(problem, RESULTS(state, action), [state] + [path])
    if plan ≠ failure then return [action] + [plan]
  return failure

function AND-SEARCH(problem, states, path) returns a conditional plan, or failure
  for each sᵢ in states do
    planᵢ ← OR-SEARCH(problem, sᵢ, path)
    if planᵢ = failure then return failure
  return [if s₁ then plan₁ else if s₂ then plan₂ else … if sₙ₋₁ then planₙ₋₁ else planₙ]
```

IS-CYCLE(state, path) betyr at state allerede står på path (US-utgaven skriver IS-CYCLE(path)). Forelesning 3, s. 102 beskriver søket med ord, og s. 114–116 bruker det over belief states.

### ONLINE-DFS-AGENT
*Figur 4.21 (ikke i forelesningene)*

```text
function ONLINE-DFS-AGENT(problem, s′) returns an action
  persistent: s, a, the previous state and action, initially null
              result, a table mapping (s, a) to s′, initially empty
              untried, a table mapping s to a list of untried actions
              unbacktracked, a table mapping s to a list of states never backtracked to

  if problem.IS-GOAL(s′) then return stop
  if s′ is a new state (not in untried) then untried[s′] ← problem.ACTIONS(s′)
  if s is not null then
    result[s, a] ← s′
    add s to the front of unbacktracked[s′]
  if untried[s′] is empty then
    if unbacktracked[s′] is empty then return stop
    a ← an action b such that result[s′, b] = POP(unbacktracked[s′])
    s′ ← null
  else a ← POP(untried[s′])
  s ← s′
  return a
```

Linjen s′ ← null etter et tilbakesteg står i Global-utgaven, men ikke i US-utgaven. Den gjør at tilbakesteget ikke lagres i result og unbacktracked.

### LRTA*-AGENT
*Figur 4.24 (ikke i forelesningene)*

```text
function LRTA*-AGENT(problem, s′, h) returns an action
  persistent: s, a, the previous state and action, initially null
              result, a table mapping (s, a) to s′, initially empty
              H, a table mapping s to a cost estimate, initially empty

  if IS-GOAL(s′) then return stop
  if s′ is a new state (not in H) then H[s′] ← h(s′)
  if s is not null then
    result[s, a] ← s′
    H[s] ← min_{b ∈ ACTIONS(s)} LRTA*-COST(problem, s, b, result[s, b], H)
  a ← argmin_{b ∈ ACTIONS(s)} LRTA*-COST(problem, s′, b, result[s′, b], H)
  s ← s′
  return a

function LRTA*-COST(problem, s, a, s′, H) returns a cost estimate
  if s′ is undefined then return h(s)
  else return problem.ACTION-COST(s, a, s′) + H[s′]
```

Boka skriver ACTIONS(s) under argmin, men handlingene det velges mellom, er de i s′. Forelesning 3, s. 117 viser bare eksempelfiguren (Figur 4.23).

## CSP (kap. 5)

### AC-3
<!-- algo: ac-3 -->
*Figur 5.3 · Oppgaveforelesning 2, s. 21; Forelesning 4, s. 29–30 viser til figuren*

```text
function AC-3(csp) returns false if an inconsistency is found and true otherwise
  queue ← a queue of arcs, initially all the arcs in csp

  while queue is not empty do
    (Xᵢ, Xⱼ) ← POP(queue)
    if REVISE(csp, Xᵢ, Xⱼ) then
      if size of Dᵢ = 0 then return false
      for each Xₖ in Xᵢ.NEIGHBORS - {Xⱼ} do
        add (Xₖ, Xᵢ) to queue
  return true

function REVISE(csp, Xᵢ, Xⱼ) returns true iff we revise the domain of Xᵢ
  revised ← false
  for each x in Dᵢ do
    if no value y in Dⱼ allows (x,y) to satisfy the constraint between Xᵢ and Xⱼ then
      delete x from Dᵢ
      revised ← true
  return revised
```

Buen (Xᵢ, Xⱼ) gjør Xᵢ konsistent med Xⱼ; bare Dᵢ kan krympe. Forelesning 4, s. 26–28 kjører AC-3 etter en tilordning med bare buene inn mot variabelen, s. 29–30 én gang før søket med alle buene.

### BACKTRACKING-SEARCH
<!-- algo: backtracking -->
*Figur 5.5 · Forelesning 4, s. 12 og 33*

```text
function BACKTRACKING-SEARCH(csp) returns a solution or failure
  return BACKTRACK(csp, { })

function BACKTRACK(csp, assignment) returns a solution or failure
  if assignment is complete then return assignment
  var ← SELECT-UNASSIGNED-VARIABLE(csp, assignment)
  for each value in ORDER-DOMAIN-VALUES(csp, var, assignment) do
    if value is consistent with assignment then
      add {var = value} to assignment
      inferences ← INFERENCE(csp, var, assignment)
      if inferences ≠ failure then
        add inferences to csp
        result ← BACKTRACK(csp, assignment)
        if result ≠ failure then return result
        remove inferences from csp
      remove {var = value} from assignment
  return failure
```

Slidene viser bare BACKTRACK. INFERENCE kan være forward checking (Forelesning 4, s. 16) eller AC-3 etter hver tilordning (s. 26–28); i Assignment 2 kan den hoppes over (Oppgaveforelesning 2, s. 13).

### MIN-CONFLICTS
<!-- algo: min-conflicts -->
*Figur 5.9 · Forelesning 4, s. 42–43*

```text
function MIN-CONFLICTS(csp, max_steps) returns a solution or failure
  inputs: csp, a constraint satisfaction problem
          max_steps, the number of steps allowed before giving up

  current ← an initial complete assignment for csp
  for i = 1 to max_steps do
    if current is a solution for csp then return current
    var ← a randomly chosen conflicted variable from csp.VARIABLES
    value ← the value v for var that minimizes CONFLICTS(csp, var, v, current)
    set var = value in current
  return failure
```

## Spill (kap. 6)

### MINIMAX-SEARCH
<!-- algo: minimax -->
*Figur 6.3 · Oppgaveforelesning 3, s. 13*

```text
function MINIMAX-SEARCH(game, state) returns an action
  player ← game.TO-MOVE(state)
  value, move ← MAX-VALUE(game, state)
  return move

function MAX-VALUE(game, state) returns a (utility, move) pair
  if game.IS-TERMINAL(state) then return game.UTILITY(state, player), null
  v, move ← −∞
  for each a in game.ACTIONS(state) do
    v2, a2 ← MIN-VALUE(game, game.RESULT(state, a))
    if v2 > v then
      v, move ← v2, a
  return v, move

function MIN-VALUE(game, state) returns a (utility, move) pair
  if game.IS-TERMINAL(state) then return game.UTILITY(state, player), null
  v, move ← +∞
  for each a in game.ACTIONS(state) do
    v2, a2 ← MAX-VALUE(game, game.RESULT(state, a))
    if v2 < v then
      v, move ← v2, a
  return v, move
```

UTILITY regnes alltid for player, altså spilleren som står ved roten.

### MINIMAX (rekursiv definisjon)
<!-- algo: minimax -->
*Ingen figur (formelen står i 6.2.1) · Forelesning 8, s. 11*

```text
minimax(s) =
  utility(s, MAX)                                if isTerminal(s)
  max_{a ∈ actions(s)} minimax(result(s, a))     if toMove(s) is MAX
  min_{a ∈ actions(s)} minimax(result(s, a))     if toMove(s) is MIN

Initially, argmax_{a ∈ actions(s)} minimax(result(s, a)) is called
```

### ALPHA-BETA-SEARCH
<!-- algo: alfa-beta -->
*Figur 6.7 · Oppgaveforelesning 3, s. 19*

```text
function ALPHA-BETA-SEARCH(game, state) returns an action
  player ← game.TO-MOVE(state)
  value, move ← MAX-VALUE(game, state, −∞, +∞)
  return move

function MAX-VALUE(game, state, α, β) returns a (utility, move) pair
  if game.IS-TERMINAL(state) then return game.UTILITY(state, player), null
  v ← −∞
  for each a in game.ACTIONS(state) do
    v2, a2 ← MIN-VALUE(game, game.RESULT(state, a), α, β)
    if v2 > v then
      v, move ← v2, a
      α ← MAX(α, v)
    if v ≥ β then return v, move
  return v, move

function MIN-VALUE(game, state, α, β) returns a (utility, move) pair
  if game.IS-TERMINAL(state) then return game.UTILITY(state, player), null
  v ← +∞
  for each a in game.ACTIONS(state) do
    v2, a2 ← MAX-VALUE(game, game.RESULT(state, a), α, β)
    if v2 < v then
      v, move ← v2, a
      β ← MIN(β, v)
    if v ≤ α then return v, move
  return v, move
```

I Global-utgaven og på sliden står α ← MAX(α, v) og β ← MIN(β, v) inni if-blokken; US-utgaven har dem rett under. Resultatet blir det samme.

### ALPHA-BETA (forelesningens versjon)
<!-- algo: alfa-beta -->
*Ingen figur (egen versjon) · Forelesning 8, s. 13*

```text
alphaBeta(s, α, β) =
  utility(s, MAX)       if isTerminal(s)
  maxValue(s, α, β)     if toMove(s) is MAX
  minValue(s, α, β)     if toMove(s) is MIN

α: the current best value of a max-node
β: the current best value of a min-node

function MAXVALUE(s, α, β)
  v ← −∞
  for each a in actions(s) do
    v ← max(v, alphaBeta(result(s, a), α, β))
    α ← max(α, v)
    if v ≥ β then return v
  end for
  return v
end function

function MINVALUE(s, α, β)
  v ← ∞
  for each a in actions(s) do
    v ← min(v, alphaBeta(result(s, a), α, β))
    β ← min(β, v)
    if v ≤ α then return v
  end for
  return v
end function

Initially, maxValue(s, −∞, ∞) is called, and although not shown,
the action that yields the highest value v is returned
```

### H-MINIMAX
*Ingen figur (formelen står i 6.3) · Forelesning 8, s. 19*

```text
hMinimax(s, d) =
  utility(s, MAX)                                       if isTerminal(s)
  eval(s, MAX)                                          if isCutoff(s, d)
  max_{a ∈ actions(s)} hMinimax(result(s, a), d + 1)    if toMove(s) is MAX
  min_{a ∈ actions(s)} hMinimax(result(s, a), d + 1)    if toMove(s) is MIN

Initially, argmax_{a ∈ actions(s)} hMinimax(result(s, a), 1) is called
```

eval(s, MAX) er et anslag på den sanne verdien minimax(s), for eksempel en vektet sum av egenskaper ved stillingen.

### MONTE-CARLO-TREE-SEARCH
<!-- algo: mcts -->
*Figur 6.11 · Forelesning 8, s. 24–26*

```text
function MONTE-CARLO-TREE-SEARCH(state) returns an action
  tree ← NODE(state)
  while IS-TIME-REMAINING() do
    leaf ← SELECT(tree)
    child ← EXPAND(leaf)
    result ← SIMULATE(child)
    BACK-PROPAGATE(result, child)
  return the move in ACTIONS(state) whose node has highest number of playouts
```

SELECT går ned i treet etter UCB1(n) = U(n)/N(n) + C·√(ln N(parent(n)) / N(n)), vanligvis med C = √2 (Forelesning 8, s. 28). Svaret er trekket med flest playouts, ikke høyest andel seire.

### EXPECTIMAX
<!-- algo: expectiminimax -->
*Ingen figur i kap. 6 · Forelesning 8, s. 7*

```text
expectimax(s) =
  utility(s, MAX)                                  if isTerminal(s)
  max_{a ∈ actions(s)} expectimax(result(s, a))    if toMove(s) is MAX
  Σ_a P(a) expectimax(result(s, a))                if toMove(s) is CHANCE

Initially, argmax_{a ∈ actions(s)} expectimax(result(s, a)) is called
```

### EXPECTIMINIMAX
<!-- algo: expectiminimax -->
*Ingen figur (formelen står i 6.5) · Forelesning 8, s. 36*

```text
expectiminimax(s) =
  utility(s, MAX)                                          if isTerminal(s)
  max_{a ∈ actions(s)} expectiminimax(result(s, a))        if toMove(s) is MAX
  min_{a ∈ actions(s)} expectiminimax(result(s, a))        if toMove(s) is MIN
  Σ_{a ∈ actions(s)} P(a) expectiminimax(result(s, a))     if toMove(s) is CHANCE

Initially, argmax_{a ∈ actions(s)} expectiminimax(result(s, a)) is called
```

Boka skriver sjanseutfallene som r: Σ_r P(r) EXPECTIMINIMAX(RESULT(s, r)).

### REGRET MINIMIZATION
*Ingen figur (står ikke i boka) · Forelesning 8, s. 44–46*

```text
Regret: the utilities the actions would have received minus the utility actually received

regrets ← (0, 0, …, 0)                  // one entry per action
for each game played do
  choose an action
  utility ← the utility actually received
  regret ← (the utilities the actions would have received) − utility
  regrets ← regrets + regret             // summed over all games played

// Example, P1 in rock paper scissors, actions (rock, paper, scissors):
//   P1 chooses rock, P2 chooses paper: utility ← −1, regret ← (−1, 0, 1) − utility
//   after the first round: regrets = (0, 1, 2)

Possible algorithm: choose the action with the highest summed regret
Regrets converted to probabilities, with the negative regrets first set to zero,
  for example (−1, 1, 2) ↦ (0, 1, 2) ↦ (0, 1/3, 2/3)
```

Slidene gir stegene og eksempelet, ikke en samlet funksjon; løkken over er stegene satt sammen.

## Proposisjonslogikk (kap. 7)

### KB-AGENT
*Figur 7.1 (ikke i forelesningene)*

```text
function KB-AGENT(percept) returns an action
  persistent: KB, a knowledge base
              t, a counter, initially 0, indicating time

  TELL(KB, MAKE-PERCEPT-SENTENCE(percept, t))
  action ← ASK(KB, MAKE-ACTION-QUERY(t))
  TELL(KB, MAKE-ACTION-SENTENCE(action, t))
  t ← t + 1
  return action
```

Forelesning 5, s. 22 definerer ask og tell, men viser ikke agenten.

### TT-ENTAILS?
<!-- algo: tt-entails -->
*Figur 7.10 (ikke i forelesningene)*

```text
function TT-ENTAILS?(KB, α) returns true or false
  inputs: KB, the knowledge base, a sentence in propositional logic
          α, the query, a sentence in propositional logic

  symbols ← a list of the proposition symbols in KB and α
  return TT-CHECK-ALL(KB, α, symbols, { })

function TT-CHECK-ALL(KB, α, symbols, model) returns true or false
  if EMPTY?(symbols) then
    if PL-TRUE?(KB, model) then return PL-TRUE?(α, model)
    else return true          // when KB is false, always return true
  else
    P ← FIRST(symbols)
    rest ← REST(symbols)
    return (TT-CHECK-ALL(KB, α, rest, model ∪ {P = true})
            and
            TT-CHECK-ALL(KB, α, rest, model ∪ {P = false}))
```

Forelesning 5, s. 16 beskriver model checking med ord: sjekk alle modeller.

### Conversion to CNF (propositional logic)
<!-- algo: cnf -->
*Ingen figur (stegene står i 7.5.2) · Forelesning 5, s. 51*

```text
Conversion to conjunctive normal form, algorithm:
  1. Eliminate ⇔:  α ⇔ β  ↦  (α ⇒ β) ∧ (β ⇒ α)
  2. Eliminate ⇒:  α ⇒ β  ↦  ¬α ∨ β
  3. Repeatedly move ¬ inwards and eliminate double negation:
       ¬(α ∧ β)  ↦  ¬α ∨ ¬β
       ¬(α ∨ β)  ↦  ¬α ∧ ¬β
       ¬(¬α)     ↦  α
  4. Distribute ∨ over ∧:
       α ∨ (β ∧ γ)  ↦  (α ∨ β) ∧ (α ∨ γ)
       (α ∧ β) ∨ γ  ↦  (α ∨ γ) ∧ (β ∨ γ)
```

### PL-RESOLUTION
<!-- algo: pl-resolusjon -->
*Figur 7.13 · Forelesning 5, s. 52 (som tre steg)*

```text
function PL-RESOLUTION(KB, α) returns true or false
  inputs: KB, the knowledge base, a sentence in propositional logic
          α, the query, a sentence in propositional logic

  clauses ← the set of clauses in the CNF representation of KB ∧ ¬α
  new ← { }
  while true do
    for each pair of clauses Cᵢ, Cⱼ in clauses do
      resolvents ← PL-RESOLVE(Cᵢ, Cⱼ)
      if resolvents contains the empty clause then return true
      new ← new ∪ resolvents
    if new ⊆ clauses then return false
    clauses ← clauses ∪ new
```

Forelesning 5, s. 52: legg ¬α til KB og gjør alt om til CNF, del opp i klausuler, og resolver til den tomme klausulen kommer (KB ⊨ α) eller ingenting nytt kommer (KB ⊭ α).

### PL-FC-ENTAILS?
<!-- algo: forward-chaining -->
*Figur 7.15 · Forelesning 5, s. 42 viser til figuren*

```text
function PL-FC-ENTAILS?(KB, q) returns true or false
  inputs: KB, the knowledge base, a set of propositional definite clauses
          q, the query, a proposition symbol
  count ← a table, where count[c] is initially the number of symbols in clause c's premise
  inferred ← a table, where inferred[s] is initially false for all symbols
  queue ← a queue of symbols, initially symbols known to be true in KB

  while queue is not empty do
    p ← POP(queue)
    if p = q then return true
    if inferred[p] = false then
      inferred[p] ← true
      for each clause c in KB where p is in c.PREMISE do
        decrement count[c]
        if count[c] = 0 then add c.CONCLUSION to queue
  return false
```

Virker bare når KB består av definite clauses. Backward chaining (Forelesning 5, s. 42) har ingen egen figur i boka.

### DPLL-SATISFIABLE?
<!-- algo: dpll -->
*Figur 7.17 (ikke i forelesningene)*

```text
function DPLL-SATISFIABLE?(s) returns true or false
  inputs: s, a sentence in propositional logic

  clauses ← the set of clauses in the CNF representation of s
  symbols ← a list of the proposition symbols in s
  return DPLL(clauses, symbols, { })

function DPLL(clauses, symbols, model) returns true or false
  if every clause in clauses is true in model then return true
  if some clause in clauses is false in model then return false
  P, value ← FIND-PURE-SYMBOL(symbols, clauses, model)
  if P is non-null then return DPLL(clauses, symbols – P, model ∪ {P=value})
  P, value ← FIND-UNIT-CLAUSE(clauses, model)
  if P is non-null then return DPLL(clauses, symbols – P, model ∪ {P=value})
  P ← FIRST(symbols); rest ← REST(symbols)
  return DPLL(clauses, rest, model ∪ {P=true}) or
         DPLL(clauses, rest, model ∪ {P=false})
```

DPLL avgjør satisfiability. For å vise KB ⊨ α kjører du den på KB ∧ ¬α og venter false.

### WALKSAT
<!-- algo: walksat -->
*Figur 7.18 (ikke i forelesningene)*

```text
function WALKSAT(clauses, p, max_flips) returns a satisfying model or failure
  inputs: clauses, a set of clauses in propositional logic
          p, the probability of choosing to do a "random walk" move, typically around 0.5
          max_flips, number of value flips allowed before giving up

  model ← a random assignment of true/false to the symbols in clauses
  for each i = 1 to max_flips do
    if model satisfies clauses then return model
    clause ← a randomly selected clause from clauses that is false in model
    if RANDOM(0, 1) ≤ p then
      flip the value in model of a randomly selected symbol from clause
    else flip whichever symbol in clause maximizes the number of satisfied clauses
  return failure
```

failure betyr bare at ingen modell ble funnet innen max_flips, ikke at setningen er unsatisfiable.

## Førsteordens logikk (kap. 9)

### UNIFY
<!-- algo: unifikasjon -->
*Figur 9.1 · Forelesning 7, s. 26–28 viser til figuren*

```text
function UNIFY(x, y, θ=empty) returns a substitution to make x and y identical, or failure
  if θ = failure then return failure
  else if x = y then return θ
  else if VARIABLE?(x) then return UNIFY-VAR(x, y, θ)
  else if VARIABLE?(y) then return UNIFY-VAR(y, x, θ)
  else if COMPOUND?(x) and COMPOUND?(y) then
    return UNIFY(ARGS(x), ARGS(y), UNIFY(OP(x), OP(y), θ))
  else if LIST?(x) and LIST?(y) then
    return UNIFY(REST(x), REST(y), UNIFY(FIRST(x), FIRST(y), θ))
  else return failure

function UNIFY-VAR(var, x, θ) returns a substitution
  if {var/val} ∈ θ for some val then return UNIFY(val, x, θ)
  else if {x/val} ∈ θ for some val then return UNIFY(var, val, θ)
  else if OCCUR-CHECK?(var, x) then return failure
  else return add {var/x} to θ
```

Forelesning 7, s. 28 gir fire eksempler; occur check nevnes bare i boka.

### FOL-FC-ASK
<!-- algo: fol-forward-chaining -->
*Figur 9.3 (ikke i forelesningene)*

```text
function FOL-FC-ASK(KB, α) returns a substitution or false
  inputs: KB, the knowledge base, a set of first-order definite clauses
          α, the query, an atomic sentence

  while true do
    new ← { }        // The set of new sentences inferred on each iteration
    for each rule in KB do
      (p₁ ∧ … ∧ pₙ ⇒ q) ← STANDARDIZE-VARIABLES(rule)
      for each θ such that SUBST(θ, p₁ ∧ … ∧ pₙ) = SUBST(θ, p₁′ ∧ … ∧ pₙ′)
                for some p₁′, …, pₙ′ in KB
        q′ ← SUBST(θ, q)
        if q′ does not unify with some sentence already in KB or new then
          add q′ to new
          φ ← UNIFY(q′, α)
          if φ is not failure then return φ
    if new = { } then return false
    add new to KB
```

Forelesning 7, s. 38 gir bare resultatet: med bare definite clauses er gjentatt Generalized Modus Ponens sound og complete.

### FOL-BC-ASK
*Figur 9.6 (ikke i forelesningene)*

```text
function FOL-BC-ASK(KB, query) returns a generator of substitutions
  return FOL-BC-OR(KB, query, { })

function FOL-BC-OR(KB, goal, θ) returns a substitution
  for each rule in FETCH-RULES-FOR-GOAL(KB, goal) do
    (lhs ⇒ rhs) ← STANDARDIZE-VARIABLES(rule)
    for each θ′ in FOL-BC-AND(KB, lhs, UNIFY(rhs, goal, θ)) do
      yield θ′

function FOL-BC-AND(KB, goals, θ) returns a substitution
  if θ = failure then return
  else if LENGTH(goals) = 0 then yield θ
  else
    first, rest ← FIRST(goals), REST(goals)
    for each θ′ in FOL-BC-OR(KB, SUBST(θ, first), θ) do
      for each θ″ in FOL-BC-AND(KB, rest, θ′) do
        yield θ″
```

OR-delen holder med én regel som passer, AND-delen må bevise alle premissene i regelen.

### First-order resolution
<!-- algo: fol-resolusjon -->
*Ingen figur i boka · Forelesning 7, s. 43 og 59*

```text
First-order resolution algorithm (basically the same as in propositional logic):
  1. Add ¬α to KB, and convert all KB sentences to conjunctive normal form
  2. Separate conjunctions into clauses,
     e.g. {(P(A) ∨ P(B)) ∧ P(C)} becomes {P(A) ∨ P(B), P(C)}
  3. Repeatedly apply the resolution inference rule, and return unsatisfiable (KB ⊨ α)
     if empty clause (contradiction) is derived, e.g. from P(A) and ¬P(A),
     otherwise return satisfiable (KB ⊭ α)

First-order conjunctive normal form algorithm (step 1):
  1. Eliminate ⇔:  α ⇔ β  ↦  (α ⇒ β) ∧ (β ⇒ α)
  2. Eliminate ⇒:  α ⇒ β  ↦  ¬α ∨ β
  3. Repeatedly move ¬ inwards and eliminate double negation:
       ¬(α ∧ β)  ↦  ¬α ∨ ¬β
       ¬(α ∨ β)  ↦  ¬α ∧ ¬β
       ¬(¬α)     ↦  α
  4. Standardize variables, e.g.
       ∀x (∃y Animal(y) ∧ ¬Loves(x, y)) ∨ (∃y Loves(y, x))
       ↦  ∀x (∃y Animal(y) ∧ ¬Loves(x, y)) ∨ (∃z Loves(z, x))
  5. Replace existentially quantified variables with Skolem constants or functions
  6. Drop universal quantifiers, all variables are now implicitly universally quantified
  7. Distribute ∨ over ∧:
       α ∨ (β ∧ γ)  ↦  (α ∨ β) ∧ (α ∨ γ)
       (α ∧ β) ∨ γ  ↦  (α ∨ γ) ∧ (β ∨ γ)
```

Når to literaler resolveres, må de unifiseres, og θ brukes på resten av begge klausulene. Steg 3 trenger også ¬∀x P(x) ≡ ∃x ¬P(x) og ¬∃x P(x) ≡ ∀x ¬P(x) (Forelesning 6, s. 14).

## Planlegging (kap. 11)

### HIERARCHICAL-SEARCH
<!-- algo: htn -->
*Figur 11.8 · Forelesning 11, s. 30–31 (som flytdiagram)*

```text
function HIERARCHICAL-SEARCH(problem, hierarchy) returns a solution or failure
  frontier ← a FIFO queue with [Act] as the only element
  while true do
    if IS-EMPTY(frontier) then return failure
    plan ← POP(frontier)                    // chooses the shallowest plan in frontier
    hla ← the first HLA in plan, or null if none
    prefix, suffix ← the action subsequences before and after hla in plan
    outcome ← RESULT(problem.INITIAL, prefix)
    if hla is null then                     // so plan is primitive and outcome is its result
      if problem.IS-GOAL(outcome) then return plan
    else for each sequence in REFINEMENTS(hla, outcome, hierarchy) do
      add APPEND(prefix, sequence, suffix) to frontier
```

«Shallowest» betyr færrest refinements, ikke færrest steg (Forelesning 11, s. 30). REFINEMENTS gir bare refinements der preconditions holder i outcome.

## Språk (kap. 24)

### CYK-PARSE
<!-- algo: cyk -->
*Figur 24.5 · Forelesning 9, s. 46 (idé og kompleksitet, uten pseudokoden)*

```text
function CYK-PARSE(words, grammar) returns a table of parse trees
  inputs: words, a list of words
          grammar, a structure with LEXICALRULES and GRAMMARRULES

  T ← a table              // T[X, i, k] is most probable X tree spanning wordsᵢ:ₖ
  P ← a table, initially all 0      // P[X, i, k] is probability of tree T[X, i, k]
  // Insert lexical categories for each word.
  for i = 1 to LEN(words) do
    for each (X, p) in grammar.LEXICALRULES(wordsᵢ) do
      P[X, i, i] ← p
      T[X, i, i] ← TREE(X, wordsᵢ)
  // Construct Xᵢ:ₖ from Yᵢ:ⱼ + Zⱼ₊₁:ₖ, shortest spans first.
  for each (i, j, k) in SUBSPANS(LEN(words)) do
    for each (X, Y, Z, p) in grammar.GRAMMARRULES do
      PYZ ← P[Y, i, j] × P[Z, j + 1, k] × p
      if PYZ > P[X, i, k] do
        P[X, i, k] ← PYZ
        T[X, i, k] ← TREE(X, T[Y, i, j], T[Z, j + 1, k])
  return T

function SUBSPANS(N) yields (i, j, k) tuples
  for length = 2 to N do
    for i = 1 to N + 1 − length do
      k ← i + length − 1
      for j = i to k − 1 do
        yield (i, j, k)
```

Grammatikken må stå på Chomsky Normal Form (X → word [p] og X → Y Z [p]). Tid O(n³m) og plass O(n²m), der n er antall ord og m antall nonterminaler.
