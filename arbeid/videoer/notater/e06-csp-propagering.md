# E06 – CSP 1: modellering og constraint propagation

> Pensum: Global 5.1–5.2 (US 6.1–6.2) · Forelesning: L4, AL2, L13 · Øving: Ø2 · Eksamensvekt: ~16 % (CSP samlet, delt med E07)
> Video: `videoer/e06-csp-propagering/out/tdt4136-e06-csp-propagering.mp4` (16:00)

## Kapitler i videoen

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

## Kjerneideer

### Hvorfor CSP?

- I kapittel 3 er tilstanden en **atomic representation**, en svart boks. Søket kan bare spørre om tilstanden er målet.
- En CSP bruker en **factored representation**: tilstanden er variabler med verdier. Da ser algoritmen hvilken constraint som brytes. Den kan forkaste alle utvidelser av en ulovlig delløsning på én gang.
- Tallene fra kroken: Australia har 7 regioner og 3 farger, altså 3⁷ = 2187 fargelegginger.
  - Settes SA = blue, kan ingen av de fem naboene være blå.
  - For dem faller 3⁵ = 243 muligheter til 2⁵ = 32. Det er 87 % færre.

### Definisjonen: X, D, C

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

### Job-shop scheduling (5.1.2, kun bok)

Foreleser tok det ikke, men det er pensum.

- Hver oppgave er en variabel. Verdien er starttiden.
- **Precedence constraint:** T₁ + d₁ ≤ T₂. Eksempel: akselen tar 10 minutter og må på før hjulet, altså AxleF + 10 ≤ WheelRF.
- **Disjunctive constraint:** to aksler deler ett verktøy, så de kan ikke overlappe: (AxleF + 10 ≤ AxleB) or (AxleB + 10 ≤ AxleF).
- **Frist:** hver oppgave må være ferdig innen 30 minutter: Tᵢ + dᵢ ≤ 30, altså Dᵢ = {0, 1, …, 30 − dᵢ}. Boka skriver bare Dᵢ = {0, 1, …, 30}, men da kan bokas sluttinspeksjon på 3 minutter starte på 30 og slutte på 33.

### Typer constraints

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

### Consistency

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

### Global constraints

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

### Modellering

Still fire spørsmål:

1. Hva skal bestemmes? Det gir variablene.
2. Hvilke verdier kan de ta? Det gir domenene, med unary constraints lagt rett inn.
3. Hvilke regler gjelder? Det gir constraints, gjerne Alldiff.
4. Gir hver løsning ett svar på spørsmålet?

Ofte er det lurt å bytte variabel og verdi. I zebra-gåten i L4 er personer, farger og dyr variabler, og husnummeret er verdien. Eksamen 2025 oppgave 3 er bygd på samme måte (se Fasit).

## Algoritmer og håndsporing

### AC-3 (Global fig. 5.3, US fig. 6.3), kortform

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

### Håndsporing 1: A < B < C (eget illustrasjonseksempel)

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

### Håndsporing 2: «Din tur», D(C) = {1, 2}

| # | Kø før pop | Bue | Stryk | D etter |
|---|---|---|---|---|
| 1 | A→B · B→A · B→C · C→B | A→B | 3 | D(A) = {1, 2} |
| 2 | B→A · B→C · C→B | B→A | 1 | D(B) = {2, 3} |
| 3 | B→C · C→B | B→C | 2, 3 | D(B) = { } → **false** |

### Håndsporing 3: eksamensoppgave, kryssord

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

## Eksamensfeller

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

## Koblinger til andre kapitler

- → kap. 2.4.7 / E01: atomic, factored og structured representation. CSP er første factored-metode.
- → kap. 3 / E02: backtracking er dybde-først-søk over delvise tilordninger.
- → kap. 5.3 / E07: BACKTRACKING-SEARCH, MRV, degree, LCV og forward checking. MAC er AC-3 kjørt inne i søket etter hver tilordning.
- → kap. 4 / E04 og 5.4 / E07: min-conflicts er lokalt søk på komplette tilordninger.
- → kap. 7 / E12: L5 (s. 72–76) løser en graffargelegging med fire noder og tre farger med resolution. Det er SAT og CSP i samme problem.
- → kap. 11 / E18–E19: en plan med fast lengde k kan kodes som en CSP med én variabel Actionₜ per tidssteg. Detaljene står i 11.2.4, som ikke er pensum. Ideen nevnes i kapittelsammendraget.

## Ikke pensum her

- 5.5 The Structure of Problems: tree-structured CSP, topological sort, cutset conditioning, tree decomposition og value symmetry. Kilde: PENSUMOVERSIKT (UT) og EKSAMENSPLAN. 2025 Q7 er derfor utenfor pensum. AL2 nevner at forrige eksamen hadde topological sort, men seksjonen er ikke på pensumlista.
- 5.3.3–5.3.4 (backjumping og constraint learning). Kilde: L4 dekker 5.1–5.4 uten disse (PENSUMOVERSIKT).
- z3 og annen CSP-programvare. Kilde: L4 s. 45 «not curriculum», og z3-løsningen i L5 s. 72–76.
- 11.2.4 (planning som CSP i detalj) og 11.6 (scheduling). Kilde: PENSUMOVERSIKT (UT).
- Backtracking, MRV, degree, LCV, forward checking, MAC og min-conflicts *er* pensum, men står i E07.

## Øv selv

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

## Fasit

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
