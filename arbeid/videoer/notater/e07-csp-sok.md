# E07 – CSP 2: backtracking, heuristikker og min-conflicts

> Pensum: Global 5.3–5.4 (US 6.3–6.4), uten 5.3.3–5.3.4 · Forelesning: L4, AL2, L13 · Øving: Ø2 · Eksamensvekt: ~16 % (CSP samlet, deles med E06)
> Video: `videoer/e07-csp-sok/out/tdt4136-e07-csp-sok.mp4` (15:58)

## Kapitler i videoen

- 0:00 – Intro
- 0:51 – Hvorfor backtracking?
- 2:45 – Hvem først, og hvilken verdi?
- 5:06 – Håndsporing: Australia
- 7:17 – Forward checking mot MAC
- 9:28 – Lokalt søk: min-conflicts
- 12:51 – Eksamensoppgave
- 14:41 – Koblinger og oppsummering

## Kjerneideer

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

## Algoritmer og håndsporing

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

## Eksamensfeller

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

## Koblinger til andre kapitler

- → kap. 3 / E02: backtracking er dybde-først-søk med én variabel per nivå. Gå dypt, snu ved blindveier.
- → kap. 5.2 / E06: MAC er AC-3 etter hver tilordning, med startkø fra de utilordnede naboene. Modellering og AC-3 i detalj ligger i E06.
- → kap. 4 / E04: min-conflicts er hill climbing med antall konflikter som målfunksjon. Platåer og sideways moves er de samme begrepene.
- → kap. 7.6 / E13: DPLL er backtracking for SAT og bruker blant annet degree-heuristikken. WalkSAT tar min-conflicts-steg.
- → kap. 9.3 / E15: i efficient forward chaining foreslår boka MRV for å ordne konjunktene i en regel.

## Ikke pensum her

- 5.3.3 Intelligent backtracking: looking backward (backjumping, conflict-directed backjumping). Kilde: PENSUMOVERSIKT, L4 «5.1–5.4, uten 5.3.3–5.3.4».
- 5.3.4 Constraint learning (no-goods). Kilde: PENSUMOVERSIKT, L4.
- 5.5 The structure of problems, med topological sort, cutset conditioning, tree decomposition og value symmetry. Kilde: PENSUMOVERSIKT. Merk at AL2 advarte om at fjorårets eksamen hadde en oppgave om topological sort.
- MRV brukt som «minimum slack» i scheduling (11.6) og CSP-koding av planlegging (11.2.4). Begge er UT, så episoden kobler ikke MRV til planlegging (E18). Kilde: PENSUMOVERSIKT.

## Øv selv

1. Australia med tre farger og forward checking. Du har satt WA = rød og Q = grønn. Skriv domenene etter FC. Hvilken variabel velger MRV med degree som tie-breaker, og hva skjer når den får sin første verdi?
2. En CSP har n = 4 variabler med d = 3 verdier hver. Hvor mange blader har det vanlige søketreet, og hvor mange har backtracking-treet?
3. Bokas 8-dronningbrett (2, 5, 7, 4, 1, 3, 6, 8), rad 1 øverst. Anta at min-conflicts trekker Q4 i første runde i stedet for Q8. Hvor mange konflikter gir hver rad for Q4, og hva skjer?
4. Eksamen 2018, problem 1 del 5 (3 p), samme som 2023 oppgave 4: løs den på nytt, men nå *med* forward checking. Endrer svaret seg?
5. Eksamen 2022, oppgave 4.2: x1–x4 med domene 1–5, x2 > x1, x3 > x2, x4 > x3, og sammenstillingen x1x2x3x4 skal være et oddetall. Løs med MRV og LCV, og ved likhet høyeste verdi eller variabel med høyest indeks. Vis domenene etter hvert steg.
6. Eksamen 2019, oppgave 4 (12 p, 2-4-2-4), del 2 (4 p): ren backtracking på fargeleggingsgrafen i oppgaven, med variablene i tallrekkefølge og verdiene i rekkefølgen ved hver node.

## Fasit

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
