# E16 – FOL-inferens 2: CNF og resolution steg for steg

> Pensum: Global 9.5 uten 9.5.4 (US 9.5, samme nummer) · Forelesning: L7, L13 · Øving: Ø4 (A4 oppgave 3–4) · Eksamensvekt: ~23 % (logikk samlet, kap. 7–9; 2025 ga 25 p til Q9–Q10 alene)
> Video: `videoer/e16-fol-resolusjon/out/tdt4136-e16-fol-resolusjon.mp4` (15:11)

## Kapitler i videoen

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

## Kjerneideer

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

## Algoritmer og håndsporing

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

### CNF av setning A (bok 9.5.1, L7)

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

### Klausulsettet for katten

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

### Resolusjonsbeviset (AIMA Fig. 9.11, L7)

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

### Hestehodet (L13)

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

### Fellen «negér før du dropper ∀» (illustrasjon, ikke fra kurset)

KB = {P(A)}, mål ∀x P(x). Målet følger ikke. Dropper du ∀ først og negerer etterpå, får du ¬P(x), og P(A) + ¬P(x) med θ = {x/A} gir □: et falskt bevis. Riktig: ¬∀x P(x) → ∃x ¬P(x) → ¬P(C1). UNIFY(P(A), P(C1)) = failure, og det finnes ingen motsigelse.

### Eksamen 2025 Q9 (5 p): GMP

∀x,y,z Loves(x,z) ∧ Loves(y,z) ⇒ Jealous(x,y), Loves(Alice,Bob), Loves(Carrie,Bob). UNIFY gir θ = {x/Alice, z/Bob, y/Carrie}, og SUBST(θ, Jealous(x,y)) = Jealous(Alice,Carrie). Vis både unification og substitusjon.

### Eksamen 2025 Q10 (20 p): fullt bevis i fasitformat

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

### Unification-eksempler

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

### Likhet

- Demodulation: Father(Father(x)) = PaternalGrandfather(x) og Birthdate(Father(Father(Bella)),1926). θ = {x/Bella} gir Birthdate(PaternalGrandfather(Bella),1926).
- Paramodulation: P(F(x,B),x) ∨ Q(x) og F(A,y) = y ∨ R(y). θ = {x/A, y/B} gir P(B,A) ∨ Q(A) ∨ R(B).

## Eksamensfeller

1. **∀ med ∧, ∃ med ⇒.** ∀x Cat(x) ∧ Animal(x) sier at alt er katter. Skriv ∀x Cat(x) ⇒ Animal(x) og ∃x Cat(x) ∧ … .
2. **Skolem-konstant der det skal være funksjon.** ∃ inne i ∀x gir F(x). Flower(C2) i 2025 Q10 er feil, Flower(F(x)) er riktig. Har ∃ flere omsluttende ∀, får funksjonen alle som argumenter: ∀x ∃y ∀z ∃w … gir F(x) og G(x,z).
3. **Skolemisering før ¬ er flyttet inn.** En ∃ foran en pil eller under en negasjon kan bli en ∀.
4. **Glemt standardisering.** Uten nye navn kan UNIFY feile (Loves(x,F(x)) mot Loves(Jack,x)) eller binde for mye.
5. **Glemt å negere målet, eller negert for sent.** Negér hele målet med kvantorene, flytt ¬ inn, og skolemiser til slutt. 2022-fasiten dropper ∀ før den negerer. Det gir riktig svar der, men metoden kan gi falske bevis (se fellen over).
6. **Steg uten θ.** Fasiten vil ha de to setningene, θ og resultatet for hvert steg (2025 Q10, 2019 «Show each and every unification»).
7. **Ufullstendig CNF.** Distribusjonen (steg 7) må med. 2021-fasiten stopper før steg 7, men oppgaven ber om CNF.
8. **Feil skolemisering ved gjenbruk av samme navn.** Samme ∃y får samme funksjon overalt. To ulike ∃ får ulike funksjoner (2024 Q16).

## Koblinger til andre kapitler

- → kap. 7 / E12: PL-resolution og CNF i fire steg. FOL legger til steg 4–6 og θ.
- → kap. 9.1–9.4 / E15: UI, EI (Skolem-konstant), unification og MGU, GMP (2025 Q9), semidecidability. Backward chaining er et spesialtilfelle av resolution med en bestemt kontrollstrategi (AIMA 9.5.3).
- → kap. 8 / E14: oversettelse fra norsk/engelsk til FOL, ∀ med ⇒ og ∃ med ∧. Uten riktig oversettelse hjelper ikke resolution.
- → kap. 5 og 7.5 (L5): CSP løst som satisfiability viser samme refutation-idé i PL.

## Ikke pensum her

- 9.5.4 Completeness of resolution (Herbrand-teoremet, completeness-beviset): på Canvas-listen over unntak (PENSUMOVERSIKT).
- 9.4.2–9.4.5 (logic programming og Prolog, redundant inference, constraint logic programming): unntatt i Canvas, hører til nabokapitlet.
- Bare i boka, ikke i forelesning (pensum gjennom boka, men lav prioritet): occur check (9.2.1), answer extraction (9.5.3), linear resolution (9.5.6) (PENSUMOVERSIKT-forelesninger, L7).

## Øv selv

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

## Fasit

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
