# Bare i boka
<!-- Format: én «## <Global-seksjon> <tittel>»-blokk per seksjon. Rett under overskriften:
en HTML-kommentar med «prio: A|B|C | ep: E02 | forelest: nei|delvis | eksamen: 2017, 2022 | merk: …». Så forklaringen (markdown),
«**Husk:** …» og pugge-kortene som «- spørsmål :: svar», én linje per kort. Endrer du et spørsmål, starter kortet på nytt.
Lista over seksjoner kommer fra PENSUMOVERSIKT.md, avsnitt 5. Skrevet med egne ord fra AIMA 4e Global. -->

Her står alt som er pensum i TDT4136 H26, men som ikke ble forelest. Det er 46 seksjoner som aldri ble gjennomgått, og de delene av 25 andre seksjoner som bare står i boka. I tillegg kommer tre seksjoner der Canvas og slidene er uenige (merket «forsikring»), og kapittel 25 på oversiktsnivå. Lista kommer fra `PENSUMOVERSIKT.md`, avsnitt 5.

Prioritetene betyr:
- <span class="prio pA">A</span> kan bli regne- eller håndsporingsoppgave, eller er spurt om på eksamen før. Kunn disse.
- <span class="prio pB">B</span> er sannsynlig som kort teori- eller flervalgsspørsmål.
- <span class="prio pC">C</span> er lesestoff. Les det én gang og pugg kortene.

**Slik pugger du:**
1. Les seksjonen først: klikk den i lista. Kortene står til venstre og forklaringen til høyre.
2. Trykk «Pugg disse» (kortene i seksjonen) eller «Pugg nå» (dagens runde). Tenk ut svaret før du trykker «Vis svar» (mellomrom). Det er det å hente svaret fram som får det til å sitte.
3. Vær streng med deg selv: trykk «Ja, jeg kunne det» (2) bare hvis svaret kom uten å nøle, ellers «Nei, ta det igjen» (1).
4. Kort du ikke kunne, kommer igjen i samme runde. Kort du kunne, kommer igjen etter 1, 2, 4 og 7 dager.
5. Ta én «Pugg nå»-runde om dagen fram til eksamen. Står noe uklart, trykk «Spør» på kortet.

Tallet til høyre på hver seksjon, for eksempel 2/6, viser hvor mange av kortene som sitter, det vil si har kommet til boks 3 eller høyere.

## 1.1.5 Beneficial machines
<!-- prio: B | ep: E01 | forelest: nei | eksamen: 2021 -->

Hvordan forteller du en maskin hva du vil? Det høres enkelt ut, men det er et av de vanskeligste problemene i AI.

**Standard model**

AI-forskningen har lenge bygd på en enkel oppskrift: vi gir agenten et fullt spesifisert mål, og agenten optimerer det. Dette heter standard model.

I sjakk og korteste vei fungerer det godt. Der følger målet med oppgaven: vinn partiet, eller finn den korteste ruta.

**Når målet er feil**

Tenk deg en selvkjørende bil med «trygghet» som eneste mål. Hver kjøretur har en liten risiko, så det tryggeste er å bli stående i garasjen. Det ekte målet er en avveining mellom framdrift og risiko, og den er vanskelig å skrive ned på forhånd.

Sjakk kan også gå galt. Anta at maskinen bare skal vinne og kan handle utenfor brettet. Da kan den utpresse motstanderen, bestikke publikum til å bråke eller skaffe seg mer regnekraft.

**Value alignment problem**

Å få maskinens mål til å stemme med det vi egentlig vil, heter value alignment problem. Navnet kommer igjen i L12 og i 28.3.7.

I laben er et feil mål lett å rette: reset, rett målet og prøv igjen. Ute i verden gjør systemet skade før du rekker det. Jo smartere systemet er, desto større blir skaden.

**Bokas løsning**

Maskinen skal følge *våre* mål, men vite at den ikke kjenner dem helt. Da har den grunn til å

1. handle forsiktig,
2. be om lov,
3. lære preferansene våre ved å se på det vi gjør,
4. la mennesket bestemme.

Målet er maskiner som er provably beneficial, altså beviselig til nytte for mennesker.

Fella: maskinen som utpresser sjakkmotstanderen, er verken dum eller gal. Den gjør nøyaktig det målet sier. Feilen ligger i målet.

Koblingen til E01: dette er P i PEAS sett fra en ny side. Agenten optimerer bare det som står i performance measure.

**Husk:** En maskin som er usikker på hva vi vil, har grunn til å være forsiktig og spørre. En maskin med et fast mål har ikke det.

**På eksamen:** 2021 oppgave 6.3 spurte hvilken kobling det er mellom P i PEAS og etikk i AI. Bruk dette: agenten optimerer nøyaktig det performance measure sier, så et ufullstendig mål gir uønsket oppførsel.

- Hva er standard model i AI? :: Vi gir agenten et fullt spesifisert mål, og agenten optimerer det.
- Hvorfor er «trygghet» et dårlig enkeltmål for en selvkjørende bil? :: Tryggest er å bli stående i garasjen. Det ekte målet er en avveining mellom framdrift og risiko.
- Hvorfor kan en sjakkmaskin med «vinn» som eneste mål oppføre seg ille? :: Kan den handle utenfor brettet, kan den jukse, utpresse eller ta mer regnekraft. Det følger logisk av det faste målet.
- Hva gjør en maskin som vet at den ikke kjenner hele målet vårt? :: Den handler forsiktig, ber om lov, lærer preferansene våre ved å observere oss og lar mennesket bestemme.

## 1.4 The State of the Art
<!-- prio: C | ep: E01 | forelest: nei -->

Hva kan AI faktisk gjøre i dag? Seksjonen er en rask rundtur. Det du bør kunne, er noen få milepæler.

**Spill**

| År | Program | Hva skjedde |
|---|---|---|
| 1997 | Deep Blue | slo verdensmester Garry Kasparov i sjakk |
| rundt 20 år senere | AlphaGo | slo de beste i Go, etter å ha lært av menneskelige partier og eksperter |
| etter AlphaGo | AlphaZero | fikk bare reglene og lærte Go, sjakk og shogi ved å spille mot seg selv |

**Planlegging**

NASAs Remote Agent var den første planleggeren om bord som styrte driften av et romfartøy.

DART planla militær logistikk i Gulfkrisen 1991. Den håndterte opptil 50 000 kjøretøy, last og personer samtidig. Ifølge DARPA betalte dette ene systemet mer enn tilbake 30 år med AI-investering.

**Ellers**

Selvkjørende biler, maskinoversettelse for over 100 språk, talegjenkjenning på menneskenivå, anbefalingssystemer og bildediagnose i medisin.

**Måling og spådommer**

Stanford-prosjektet AI100 skriver rapporter om tilstanden i AI. AI Index måler framgangen: flere artikler, studenter og konferansedeltakere, og mennesker slått på stadig flere smale oppgaver.

Ekspertene er uenige om når AI når menneskenivå på bred front. Svarene spriker fra 2029 til 2200, og boka sier du ikke bør ta slike spådommer for alvorlig.

**Husk:** Deep Blue (sjakk, 1997), AlphaGo (Go) og AlphaZero (bare selvspill) er milepælene i spill.

- Hvilket program slo verdensmester Garry Kasparov i sjakk, og når? :: Deep Blue, i 1997.
- Hva var nytt med AlphaZero sammenlignet med AlphaGo? :: AlphaZero fikk bare reglene og lærte ved selvspill. AlphaGo lærte også av menneskelige partier og eksperter.
- Hva var DART? :: Et system som planla militær logistikk i Gulfkrisen 1991. Ifølge DARPA betalte det alene mer enn tilbake 30 år med AI-investering.

## 1.5 Risks and Benefits of AI
<!-- prio: B | ep: E01 | forelest: nei -->

AI kan brukes både til gode og til skade. Boka går gjennom gevinsten, seks risikoer vi ser allerede, og én stor risiko på lang sikt.

**Gevinsten**

Hele sivilisasjonen er et produkt av menneskelig intelligens. Får vi mye mer maskinintelligens, heves taket for hva vi kan få til. AI kan fjerne monotont arbeid, øke produksjonen og gjøre forskning raskere.

**Seks risikoer nå**

Disse utdypes i 28.3:

| Risiko | Kort sagt |
|---|---|
| Lethal autonomous weapons | våpen som finner, velger og dreper mål uten et menneske |
| Surveillance and persuasion | masseovervåking og målrettet påvirkning, for eksempel i valg |
| Biased decision making | skjeve vedtak om lån eller prøveløslatelse, ofte fordi dataene er skjeve |
| Impact on employment | maskiner tar oppgaver, men gjør også folk mer produktive |
| Safety-critical applications | feil i selvkjørende biler eller vannforsyning kan drepe |
| Cybersecurity | AI hjelper forsvaret, men gjør også angrep sterkere |

**Arbeid og velstand**

Den samlede velstanden øker. Men den flyttes gjerne fra arbeid til kapital, altså fra dem som jobber til dem som eier maskinene. Da vokser ulikheten.

**Lang sikt: smartere enn oss**

Human-level AI (HLAI) og artificial general intelligence (AGI) er maskiner som kan lære alt et menneske kan. Artificial superintelligence (ASI) går langt forbi mennesket.

**Gorilla problem**

For rundt sju millioner år siden delte en primatgren seg: én gren førte til gorillaene, en annen til oss. I dag har gorillaene ingen kontroll over sin egen framtid. Lager vi noe smartere enn oss, kan vi havne i samme situasjon.

**King Midas problem**

Midas ønsket at alt han rørte ble til gull. Så rørte han maten. Du får nøyaktig det du ba om, og angrer.

**Hva gjør vi?**

AI kommer ikke ferdig fra verdensrommet. Vi designer det selv, så tap av kontroll er en designfeil. Løsningen er den samme som i 1.1.5: ikke legg inn et fast mål, men la maskinen søke våre mål og vite at den er usikker på dem.

Fella: gorilla og Midas er to ulike problemer. Gorilla handler om makt: noe smartere tar kontrollen. Midas handler om målet: vi får det vi ba om, ikke det vi mente.

**Husk:** Gorilla = vi mister kontrollen til noe smartere. Midas = vi får nøyaktig det vi ba om.

- Hva er gorilla problem? :: Faren for at vi, som gorillaene etter at mennesket kom, mister kontrollen over egen framtid hvis vi lager maskiner smartere enn oss.
- Hva er King Midas problem? :: Du får bokstavelig det du ba om, og angrer. Et feil formulert mål blir oppfylt med dårlig resultat.
- Hva er forskjellen på AGI og ASI? :: AGI (som HLAI) kan lære alt et menneske kan. ASI er intelligens som langt overgår menneskets.
- Hvordan påvirker AI fordelingen av velstand, ifølge 1.5? :: Den samlede velstanden øker, men flyttes fra arbeid til kapital, så ulikheten øker.

## 2.4.7 How the components of agent programs work
<!-- prio: A | ep: E01 | forelest: nei | eksamen: 2021, 2022 -->

En agent må lagre hvordan verden ser ut akkurat nå. Spørsmålet er hvor mye den skal kunne se *inni* en tilstand. Tenk deg en agent som kjører bil i Romania. Samme situasjon kan beskrives på tre måter.

**Atomic: et navn**

> `Arad`

Tilstanden er én udelelig ting, som en svart boks. Agenten kan bare spørre: «Er dette det samme stedet som Bucharest?» Svaret er ja eller nei, og mer finnes ikke. Søk (kap. 3) og spill (kap. 6) bruker dette.

**Factored: en rad med variabler**

> `by = Arad, bensin = 40 L, penger = 200 kr`

Nå har tilstanden innhold: et fast sett variabler, hver med en verdi. To tilstander kan ha samme by, men ulik bensin. Agenten kan regne med verdiene: «bensin under 10 L, da må jeg fylle».

Derfor kan CSP og planlegging bruke domain-independent heuristikker, som virker uten at du kjenner domenet. Eksempler er MRV i CSP og ignore preconditions i planlegging. CSP (kap. 5), proposisjonslogikk (kap. 7) og planlegging (kap. 11) bruker factored.

**Structured: ting og forhold mellom dem**

> `Ku(K1) ∧ Lastebil(L1) ∧ Sperrer(K1, L1)`

Her finnes objekter (en ku, en lastebil) og relasjoner (kua sperrer lastebilen). En factored tilstand måtte hatt en egen variabel for akkurat dette, som `LastebilRyggerInnPåGårdenMenKuSperrer = sann`. Førsteordens logikk (kap. 8–9) bruker structured.

| | Atomic | Factored | Structured |
|---|---|---|---|
| Tilstanden er | ett navn | en rad med verdier | objekter og relasjoner |
| Ligner på | et ord | en rad i et regneark | en database |
| Brukes i | søk, spill | CSP, proposisjonslogikk, planlegging, Bayesian networks | førsteordens logikk, relasjonsdatabaser, NLP |

**Hva en handling gjør**

Figuren i boka viser også overgangene mellom tilstander. Egen illustrasjon:

1. Atomic: handlingen er en pil fra én boks til en annen, `Arad → Sibiu`.
2. Factored: handlingen endrer noen verdier, `by: Arad → Sibiu` og `bensin: 40 → 30 L`. Pengene er uendret.
3. Structured: handlingen endrer relasjoner. Kua går sin vei, og `Sperrer(K1, L1)` blir usann.

**Prisen**

Jo lenger mot høyre, desto mer kan du si kort. Sjakkreglene tar én–to sider i førsteordens logikk, tusenvis av sider i proposisjonslogikk og rundt 10³⁸ sider som atomic automat. Til gjengjeld blir det tyngre å resonnere og lære. Systemer i den virkelige verden må kanskje bruke alle tre samtidig.

**Localist og distributed: en annen akse**

Localist representation lagrer hvert begrep på sitt eget sted i minnet. Noen feil bits kan da gjøre Truck til det urelaterte Truce.

Distributed representation sprer begrepet over mange minnesteder. Tenk på begrepet som et punkt i et rom med mange dimensjoner. Støy flytter deg bare til et nabopunkt med lignende betydning, så representasjonen er mer robust.

Fella: localist og distributed er ikke en fjerde type ved siden av de tre. Det er et eget spørsmål om hvordan begreper ligger i minnet.

Fella 2: spill er atomic i boka, selv om spill har flere agenter. Og planlegging er factored, selv om PDDL skriver `At(C1, SFO)`. Hver slik fluent er bare en variabel som er sann eller usann.

**Husk:** Atomic er et navn, factored er en rad i et regneark, og structured er en database med relasjoner. Mer uttrykkskraft gir kortere beskrivelser, men tyngre resonnering og læring.

**På eksamen:** 2021 ba deg beskrive de tre representasjonene og si hvor kurset brukte dem (søk, CSP og planlegging, logikk). 2022 spurte hvorfor factored er bedre enn atomic: agenten kan bruke verdiene, for eksempel i en heuristikk, i stedet for bare å spørre «er dette målet?».

- Hva er en atomic representation? :: Tilstanden er en udelelig svart boks uten indre struktur, som bynavnet Arad. Agenten ser bare om to tilstander er like.
- Hva er en factored representation? :: Tilstanden er et fast sett variabler (attributter) med verdier. To tilstander kan dele noen av verdiene.
- Hva er en structured representation? :: Tilstanden består av objekter med egne egenskaper og relasjoner til hverandre, som Ku(K1) ∧ Sperrer(K1, L1).
- Hvilken representasjon bruker CSP, proposisjonslogikk og klassisk planlegging? :: Factored.
- Hvorfor kan factored være bedre enn atomic for en søkeagent? :: Agenten kan regne med variabelverdiene, for eksempel i heuristikker, i stedet for bare å teste «mål eller ikke».
- Hva koster mer uttrykkskraft fra atomic til structured? :: Resonnering og læring blir mer kompliserte, selv om beskrivelsene blir kortere.
- Hva gjør en handling med en factored tilstand? :: Den endrer verdien til noen av variablene, for eksempel by og bensin. I atomic er en handling bare en pil fra én boks til en annen.
- Hvorfor er distributed representation mer robust enn localist? :: Støy flytter begrepet til et nabopunkt med lignende betydning. I localist kan noen feil bits gjøre Truck til urelaterte Truce.

## 3.1.2 Formulating problems
<!-- prio: B | ep: E02 | forelest: nei -->

Den ekte verden har altfor mange detaljer til at en agent kan søke i dem. Før søket starter, må du bestemme hva en tilstand og en handling skal være.

Sammenlign den ekte bilturen med modellen i Romania-problemet:

> Ekte: bilen står i Arad, radioen spiller, det regner, passasjeren sover, det er kø, høyre fot er 3 cm over gasspedalen …
> Modell: `Arad`

Vær, radio, trafikk og passasjerer er borte, fordi de ikke endrer hvilken rute som er best. Å fjerne slike detaljer fra representasjonen heter *abstraction*.

**Hvor mye skal bort?**

| Nivå | Handling | Hva skjer |
|---|---|---|
| For detaljert | «flytt høyre fot én centimeter» | agenten kommer aldri ut av parkeringsplassen |
| Passe | «kjør fra Arad til Sibiu» | en vanlig sjåfør klarer det uten mer søk |
| For grovt (egen illustrasjon) | «kjør fra Arad til Bucharest» | ett steg, men steget er like vanskelig som hele problemet |

**Én abstrakt løsning, mange ekte turer**

Den abstrakte løsningen Arad–Sibiu–Rimnicu Vilcea–Pitesti–Bucharest dekker mange detaljerte turer. Du kan ha radioen på mellom Sibiu og Rimnicu Vilcea og av resten av veien. Begge turene er samme abstrakte løsning.

**Valid: planen kan alltid gjennomføres**

En abstraksjon er *valid* hvis hver abstrakt løsning kan utdypes til en løsning i den detaljerte verden. Det holder at det fra hver detaljert tilstand «i Arad» finnes en vei til en tilstand «i Sibiu», og så videre.

Egen illustrasjon: kan bilen stå i Arad med tom tank og uten bensinstasjon i nærheten, finnes ingen vei til Sibiu fra den tilstanden. Da holder ikke kravet.

**Useful: hvert steg er lett**

En abstraksjon er *useful* hvis hver handling i den abstrakte løsningen er lettere å utføre enn det opprinnelige problemet. «Kjør fra Arad til Sibiu» er lett. «Kjør til Bucharest» er ikke det.

En god abstraksjon fjerner så mye detalj som mulig og er fortsatt valid og useful.

**Husk:** valid betyr at enhver abstrakt løsning kan gjøres om til en ekte, og useful betyr at hvert abstrakt steg er lett å utføre.

- Hva er abstraction i problemformulering? :: Å fjerne detaljer fra representasjonen som ikke betyr noe for problemet, for eksempel vær og radio i Romania-problemet.
- Når er en abstraksjon valid? :: Når enhver abstrakt løsning kan utdypes til en løsning i den mer detaljerte verden.
- Når er en abstraksjon useful? :: Når hver handling i den abstrakte løsningen er lettere å utføre enn det opprinnelige problemet.

## 3.4.5 Bidirectional search
<!-- prio: A | ep: E02 | forelest: nei -->

Tenk deg to lag som graver en tunnel fra hver sin side av et fjell. Hvert lag graver bare halve veien, og de møtes på midten. Toveis søk gjør det samme med søketreet.

**Hvorfor det lønner seg**

Ta b = 10 og en løsning på dybde d = 10:

| Søk | Noder |
|---|---|
| Ett søk fra start til dybde 10 | 10¹⁰ |
| Ett søk fra hver ende til dybde 5 | 10⁵ + 10⁵ = 2 · 10⁵ |

Det er 50 000 ganger færre noder. Dette heter *bidirectional search*: ett søk går forover fra start, ett bakover fra målet, og løsningen er funnet når de møtes. Generelt får du b^(d/2) + b^(d/2) i stedet for b^d.

**Hva det koster**

Du trenger to frontiers og to `reached`-tabeller. Du må også kunne gå baklengs: er s′ en etterfølger av s forover, må s være en etterfølger av s′ bakover. Har problemet flere mål, legger du alle inn i bakover-frontier.

**Bidirectional best-first (Fig. 3.14)**

1. Se på toppen av begge frontiers. Ta noden med lavest f, uansett side.
2. Ved likt f velges bakover-siden, fordi testen i pseudokoden er streng <.
3. Ekspander noden. Har et nytt barn en tilstand som alt står i den andre sidens `reached`, har søkene møttes. JOIN-NODES skjøter de to stiene til én løsning.
4. Er løsningen billigere enn den beste så langt, husk den. Fortsett til TERMINATED sier stopp.

Med f = path cost g blir dette toveis UCS. Den ekspanderer aldri en node med kostnad over C\*/2, altså halve kostnaden til beste løsning.

**Sporing på grafen fra forelesning 2**

Kantene er A→B 5, A→C 7, B→D 8, B→E 3, D→F 4, E→G 17 og F→G 6. Start er A, målet er G, og f = g. Bakover følger du kantene baklengs.

| Steg | Side | Tar ut | Nye i frontier | Møte | Beste |
|---|---|---|---|---|---|
| 1 | bakover (likt 0) | G (0) | F 6, E 17 | – | – |
| 2 | forover | A (0) | B 5, C 7 | – | – |
| 3 | forover | B (5) | E 8, D 13 | E: 8 + 17 = 25 | 25 |
| 4 | bakover | F (6) | D 10 | D: 13 + 10 = 23 | 23 |
| 5 | forover | C (7) | – | – | 23 |
| 6 | forover | E (8) | G 25 | G: 25 + 0, ikke bedre | 23 |

Etter steg 6 er minste g forover 13 og minste g bakover 10. Ingen ny løsning kan da koste under 13 + 10 = 23, så søket stopper med A–B–D–F–G = 23. Ingen ekspandert node har g over C\*/2 = 11,5.

Boka viser ikke hvordan TERMINATED virker. Regelen over, minste g forover pluss minste g bakover ≥ beste løsning, er en vanlig stoppregel for toveis UCS.

**Fella: første møte er ikke garantert billigst**

Første møte i steg 3 ga 25, men beste vei koster 23. Boka motsier seg selv her. Brødteksten i 3.4.5 sier at første løsning er optimal når f er path cost. Figurteksten til Fig. 3.14 sier at første løsning ikke er garantert best.

Figurteksten har rett, og sporingen viser det. Derfor husker algoritmen beste løsning så langt og leter videre til TERMINATED sier at ingen bedre er mulig.

**Egenskaper (Fig. 3.15)**

Tid og plass er O(b^(d/2)). Søket er complete hvis begge retninger er BFS eller UCS. Det er cost-optimal hvis i tillegg alle handlingskostnader er like, for da er første møte billigst. Med ulike kostnader, som i grafen over, holder ikke første møte. Søket må huske beste løsning og fortsette til TERMINATED, og slik fant det 23.

**Husk:** to halve søk møtes på midten og gir b^(d/2) + b^(d/2) i stedet for b^d, men du må kunne gå baklengs, og første møte er ikke garantert billigst.

**På eksamen:** ingen av eksamenene du har på siden har spurt om toveis søk. Kommer det, er det trolig sant/usant eller en kort sporing. Svar «ikke garantert» om første møte, og si at søket husker beste løsning til TERMINATED stopper det.

- Hvorfor er toveis søk raskere enn ett søk fra start? :: To søk til halv dybde gir b^(d/2) + b^(d/2) noder, langt færre enn b^d.
- Hvor mange ganger færre noder gir toveis BFS ved b = d = 10? :: Omtrent 50 000 ganger færre: 2 · 10^5 mot 10^10.
- Hva må du kunne for å søke bakover fra målet? :: Kjenne måltilstanden og regne ut forgjengere: er s′ etterfølger av s forover, er s etterfølger av s′ bakover.
- Hva er tid og plass for toveis BFS? :: O(b^(d/2)) for begge.
- Hvilke noder ekspanderer toveis UCS aldri? :: Noder med path cost større enn C*/2.
- Er første møte i toveis søk garantert den billigste løsningen? :: Nei. Algoritmen husker beste løsning så langt og stopper når TERMINATED viser at ingen bedre finnes.
- Toveis UCS på L2-grafen: hva koster første møte, og hva koster beste vei? :: Første møte (via E) koster 25. Beste vei A–B–D–F–G koster 23.

<!-- avvik: Brødteksten i 3.4.5 sier at første løsning er optimal når f er path cost. Figurteksten til Fig. 3.14 sier at første løsning ikke er garantert best, og kompendiet (E02) viser et moteksempel (første møte 25, beste vei 23). Forklaringen og kortene følger figurteksten og kompendiet. Sporingen er regnet med Fig. 3.14 og f = g. Stoppregelen (minste g forover + minste g bakover ≥ beste løsning) står ikke i boka, som ikke definerer TERMINATED. -->

## 3.5.3 Search contours: contours og surely expanded nodes
<!-- prio: B | ep: E03 | forelest: delvis -->

L3 viste at consistent h gir f-verdier som aldri synker langs en sti, og at A\* da er optimally efficient. Her får du et bilde av hvilke noder A\* faktisk rører.

**Høydekurver**

Tenk på et turkart med høydekurver. Boka tegner søket på samme måte (Fig. 3.20). Innenfor kurven merket 400 har alle noder f = g + h ≤ 400. Kurvene heter *contours*.

| Søk | Kurvene måler | Form |
|---|---|---|
| UCS | g | sirkler rundt start, uten retning mot målet |
| A\* med god h | f = g + h | bånd som strekkes mot målet og snevres inn rundt den optimale stien |

**Romania med A\***

Beste vei til Bucharest koster C\* = 418.

| Node | f = g + h | Mot C\* | Hva A\* gjør |
|---|---|---|---|
| Arad | 0 + 366 = 366 | < 418 | ekspanderer |
| Sibiu | 140 + 253 = 393 | < 418 | ekspanderer |
| Rimnicu Vilcea | 220 + 193 = 413 | < 418 | ekspanderer |
| Fagaras | 239 + 176 = 415 | < 418 | ekspanderer |
| Pitesti | 317 + 100 = 417 | < 418 | ekspanderer |
| Bucharest | 418 + 0 = 418 | = 418 | tar ut som mål |
| Timisoara | 118 + 329 = 447 | > 418 | aldri |
| Zerind | 75 + 374 = 449 | > 418 | aldri |

**Regelen tabellen viser**

1. A\* ekspanderer alle noder som nås fra start langs en sti der hver node har f(n) < C\*. Disse heter *surely expanded nodes*.
2. Noder med f(n) = C\* kan bli ekspandert før et mål velges.
3. Ingen node med f(n) > C\* blir ekspandert.

Timisoara og Zerind er barn av Arad og ville blitt ekspandert tidlig i UCS eller BFS. A\* ekspanderer dem aldri, fordi løsningen på 418 blir funnet først. Deltrærne under dem blir aldri undersøkt. Å fjerne deltrær uten å se på dem heter *pruning*.

**Haken**

Antallet noder med f < C\* kan vokse eksponentielt med løsningslengden. Boka bruker en superstøvsuger som kan rengjøre hvilken som helst rute for kostnad 1, uten å gå dit. Med N skitne ruter finnes 2^N delvis rene tilstander, og alle ligger på en optimal sti. Med N = 10 er det 1024 tilstander, og A\* besøker alle.

**Husk:** A\* ekspanderer alt med f < C\*, kanskje noe med f = C\* og aldri noe med f > C\*.

- Hvordan ser søkekonturene ut for UCS sammenlignet med A* med god heuristikk? :: UCS gir sirkler av g rundt start; A* gir bånd av f = g + h som strekkes mot målet.
- Hvilke noder er surely expanded i A*? :: Alle som nås fra start langs en sti der hver node har f(n) < C*.
- Ekspanderer A* noen node med f(n) > C*? :: Nei. Noder med f(n) = C* kan bli ekspandert før et mål velges.
- Hvorfor kan A* bruke eksponentielt mange noder selv om den er optimally efficient? :: Antallet noder med f < C* kan vokse eksponentielt med løsningslengden, som 2^N tilstander i superstøvsuger-verdenen.

## 3.5.5 Memory-bounded search: SMA*
<!-- prio: B | ep: E03 | forelest: delvis -->

L3 dekket reference count, beam search, IDA\* og RBFS. Problemet med de to siste er at de bruker for lite av minnet du har.

| Algoritme | Husker | Ulempe |
|---|---|---|
| IDA\* | bare f-grensen, ett tall mellom rundene | lager de samme nodene om igjen |
| RBFS | én sti, lineært minne i dybden | kan ikke bruke ledig minne |
| SMA\* | så mye som får plass | thrashing når for lite får plass |

**Idéen: fyll minnet, glem det dårligste**

*SMA\** (simplified memory-bounded A\*) går som vanlig A\* og ekspanderer beste blad til minnet er fullt. Først da begynner den å glemme.

Egen illustrasjon. Minnet har plass til 4 noder:

> `S` har barna `A (f = 7)` og `B (f = 9)`, og `A` har barnet `C (f = 8)`.

1. SMA\* vil ekspandere C, men minnet er fullt.
2. Dårligste blad er B, med høyest f = 9. B kastes.
3. Forelderen S skriver seg opp: «det beste under B koster 9». Dette heter *backed-up value*, akkurat som i RBFS.
4. Søket fortsetter under A.
5. Blir alle stiene under A dyrere enn 9, er B igjen best. Da lager SMA\* B på nytt.

**To spesialtilfeller**

Ved likt f ekspanderer SMA\* det nyeste beste bladet og kaster det eldste dårligste. Slik unngår den å velge samme node til begge deler.

Er det bare ett blad igjen, er det både det nyeste beste og det eldste dårligste bladet. Da fyller én sti hele minnet. Er bladet ikke et mål, kastes det som om det ikke hadde barn.

**Egenskaper**

| Egenskap | Gjelder når |
|---|---|
| Complete | dybden d til grunneste mål er mindre enn minnet, målt i noder |
| Optimal | en optimal løsning får plass; ellers gir den beste løsning som får plass |

**Fella: thrashing**

På vanskelige problemer hopper SMA\* fram og tilbake mellom mange kandidatstier. Bare noen få får plass, så de samme nodene lages igjen og igjen. Dette heter *thrashing*. Et problem A\* kunne løst med ubegrenset minne, kan da bli uløselig på grunn av tiden.

**Husk:** SMA\* fyller minnet, kaster bladet med høyest f og husker verdien i forelderen.

- Hva gjør SMA* når minnet er fullt? :: Kaster det dårligste bladet (høyest f) og lagrer f-verdien i forelderen.
- Når er SMA* complete? :: Når dybden til grunneste mål er mindre enn minnestørrelsen målt i noder.
- Når er SMA* optimal? :: Når en optimal løsning får plass i minnet; ellers gir den beste løsning som får plass.
- Hva er thrashing i SMA*? :: Søket bytter hele tiden mellom kandidatstier og lager de samme nodene på nytt, så tidsbruken eksploderer.

## 3.5.6 Bidirectional heuristic search
<!-- prio: B | ep: E03 | forelest: nei -->

Toveis søk sparte mye i E02. Kan du kjøre A\* fra begge ender på samme måte? Ja, men ikke med vanlig f = g + h.

**Første forsøk: f = g + h på begge sider**

Forover bruker f_F = g_F + h_F, der h_F anslår avstanden til målet. Bakover bruker f_B = g_B + h_B, der h_B anslår avstanden til start. Selv med admissible h gir dette ingen garanti for optimal løsning.

**Hvorfor par av noder er vanskelige**

Ta en forover-node m og en bakover-node n. En løsning gjennom begge koster minst lb(m, n) = max(g_F(m) + g_B(n), f_F(m), f_B(n)). Er lb < C\*, kan stien gjennom m og n være optimal, så m eller n må ekspanderes.

Algoritmen vet ikke hvem av de to. Velger den feil, kan den ekspandere opptil dobbelt så mange noder som nødvendig. Derfor kan ingen toveis algoritme garanteres optimally efficient.

**Løsningen: f₂**

Bruk bidirectional best-first (Fig. 3.14) med

> f₂(n) = max(2g(n), g(n) + h(n))

og ta noden med lavest f₂ fra hvilken som helst side. Har en node g > C\*/2, blir 2g > C\* og dermed f₂ > C\*. Slike noder blir aldri ekspandert, og søkene møtes på midten.

**Fig. 3.24**

Optimal sti er Start–A–F–Goal = 4 + 2 + 4 = 10, så C\* = 10 og C\*/2 = 5. A og B er barn av Start, og F ligger ett steg bakover fra Goal.

| Node | g | h | f = g + h | f₂ | g > 5? |
|---|---|---|---|---|---|
| A | 4 | 5 | 9 | max(8, 9) = 9 | nei |
| F | 4 | 6 | 10 | max(8, 10) = 10 | nei |
| B | 6 | 2 | 8 | max(12, 8) = 12 | ja |
| C | 7 | 1 | 8 | max(14, 8) = 14 | ja |

D og E har g = 7 og 8, så også de har g > 5.

Med vanlig f ville B og C (f = 8) kommet først, og begge er bortkastet. Med f₂ kommer A og F først. A gir F forfra med g = 4 + 2 = 6. F står alt i bakover-`reached`, så stiene skjøtes til 6 + 4 = 10.

**Front-to-end eller front-to-front**

I *front-to-end* anslår h avstanden til målet (eller til start, bakover). I *front-to-front* anslår h avstanden til den andre fronten.

**Når lønner det seg?**

| Heuristikk | Toveis søk |
|---|---|
| Svært god | hjelper lite |
| Middels | ofte best |
| Dårlig | asymptotisk som A\* |

Med f₂ og admissible h er søket complete og optimal.

**Husk:** f₂ = max(2g, g + h) sørger for at ingen node med g > C\*/2 blir ekspandert.

- Hva er evalueringsfunksjonen f₂ i toveis heuristisk søk? :: f₂(n) = max(2g(n), g(n) + h(n)).
- Hvilken garanti gir f₂? :: Ingen node på noen av sidene med g(n) > C*/2 blir ekspandert; søkene møtes på midten.
- En node har g = 6 og h = 2, og C* = 10. Blir den ekspandert med f₂? :: Nei. f₂ = max(12, 8) = 12 > C*, og g = 6 > C*/2 = 5.
- Når lønner toveis heuristisk søk seg mest? :: Med en middels god heuristikk. Med svært god h hjelper det lite, og med dårlig h er det asymptotisk som A*.

<!-- usikker: Figur 3.24 er uleselig i tekstutgaven. Etiketten ved A ser ut til å vise f = 9 = 4 + 5 og f₂ = 10, men formelen gir max(8, 9) = 9. Tabellen bruker formelen. C = 7 + 1 følger av figurteksten (B og C har lavest f). Hvilken av D og E som har g = 7 og g = 8, går ikke fram av teksten, så tabellen tar dem ikke med. -->

## 3.6.1 The effect of heuristic accuracy on performance: effective branching factor
<!-- prio: A | ep: E03 | forelest: delvis -->

Du har to heuristikker. Hvilken styrer søket best? Du trenger ett tall som kan sammenlignes på tvers av problemer. L3 dekket dominance og tabellen i Fig. 3.26, og her er tallet i høyre del av tabellen.

**Eksempel først**

A\* finner en løsning på dybde d = 2 og genererer N = 20 noder. Hvilket jevnt tre med dybde 2 har 20 noder pluss roten?

> 1 + b + b² = 21

b = 4 passer, fordi 1 + 4 + 16 = 21. Søket oppførte seg som om hver node hadde 4 barn. Dette tallet heter *effective branching factor*, b\*.

**Definisjonen**

> N + 1 = 1 + b\* + (b\*)² + … + (b\*)^d

N er antall noder A\* genererte, og d er dybden til løsningen. 1-tallet på høyre side er roten.

**Slik regner du**

For d = 2 er det en andregradsligning: b² + b − N = 0 gir b\* = (−1 + √(1 + 4N)) / 2. Med N = 20 blir det (−1 + 9) / 2 = 4.

For d = 3 og N = 14 er b\* = 2, fordi 1 + 2 + 4 + 8 = 15.

For større d prøver du deg fram. Bokas eksempel er d = 5 og N = 52:

1. Venstre side er N + 1 = 53.
2. b = 2 gir 1 + 2 + 4 + 8 + 16 + 32 = 63. For mye.
3. b = 1,9 gir omtrent 51. For lite.
4. b = 1,92 gir omtrent 53,4. Nesten treff.
5. Svaret er b\* ≈ 1,92.

**Fig. 3.26 for d = 12**

| Søk | Noder generert | b\* |
|---|---|---|
| BFS | 2672 | 1,80 |
| A\*(h₁), brikker på feil plass | 279 | 1,45 |
| A\*(h₂), Manhattan distance | 84 | 1,28 |

Lavere b\* betyr færre noder, så h₂ er best.

**Hvorfor tallet er nyttig**

En god heuristikk har b\* nær 1. Da vokser treet nesten ikke, og store problemer kan løses billig.

b\* er ganske stabil over ikke-trivielle instanser i samme domene, for eksempel 8-puzzle. Derfor sier noen få testproblemer mye om heuristikken.

Korf og Reid beskriver effekten på en annen måte: h kutter den *effective depth* med en konstant k_h. Kostnaden blir O(b^(d − k_h)) i stedet for O(b^d).

**Vanlig feil:** å glemme +1 på venstre side. Med N = 20 og d = 2 gir 1 + b + b² = 20 omtrent 3,89 i stedet for 4. Bruk også antall *genererte* noder og dybden i antall steg, ikke kostnaden.

**Husk:** N + 1 = 1 + b\* + … + (b\*)^d, og jo nærmere 1, desto bedre heuristikk.

**På eksamen:** ingen av eksamenene du har på siden har spurt om b\*. Kommer det, er det trolig en liten regneoppgave: gitt N og d, finn b\*. Vis summen for tallene du prøver.

- Hva er effective branching factor b*? :: Forgreningen et jevnt tre med dybde d må ha for å inneholde N + 1 noder, der N er antall noder A* genererte.
- Hvilken ligning definerer b*? :: N + 1 = 1 + b* + (b*)² + … + (b*)^d.
- A* genererer 20 noder og finner løsningen på dybde 2. Hva er b*? :: 4, fordi 1 + 4 + 16 = 21.
- A* genererer 14 noder og finner løsningen på dybde 3. Hva er b*? :: 2, fordi 1 + 2 + 4 + 8 = 15.
- A* genererer 52 noder og finner løsningen på dybde 5. Omtrent hva er b*? :: Omtrent 1,92 (b = 2 gir 63, som er for mye).
- Hvilken verdi av b* tyder på en god heuristikk? :: En verdi nær 1.

## 3.6.4 Generating heuristics with landmarks
<!-- prio: B | ep: E03 | forelest: nei -->

En karttjeneste finner beste rute blant millioner av kryss på millisekunder. Vanlig A\* er altfor treg til det. Hovedtrikset er *precomputation*: noen optimale kostnader regnes ut én gang og brukes i milliarder av søk.

**Den perfekte, men umulige løsningen**

Lagrer du optimal kostnad mellom alle par av noder, har du en perfekt h. Men det krever O(|V|²) plass. Det går for 10 000 noder, ikke for 10 millioner.

**Landmarks**

Velg heller 10–20 *landmarks* L. For hver node v lagrer du C\*(v, L), eksakt kostnad fra v til L. Er grafen rettet, for eksempel med enveiskjøring, trengs også C\*(L, v).

Fra tabellene kan du lage to heuristikker:

> h_L(n) = min over L av C\*(n, L) + C\*(L, mål)
> h_DH(n) = max over L av |C\*(n, L) − C\*(mål, L)|

Den andre heter *differential heuristic*, fordi den trekker fra.

**Samme landmark, to heuristikker**

Egen illustrasjon på en rett vei. Tallene er kostnader mellom nabopunktene.

| Plassering | Sann kostnad | h_L(n) | h_DH(n) |
|---|---|---|---|
| n —3— mål —4— L | 3 | 7 + 4 = 11, for høy | 7 − 4 = 3, eksakt |
| n —2— L —2— mål | 4 | 2 + 2 = 4, eksakt | 2 − 2 = 0, ubrukelig |

**h_L kan overestimere**

h_L regner en ekte vei via et landmark. Ligger et av dem på den optimale stien, er den eksakt. Ellers er alle veiene omveier, og h_L overestimerer. Den er altså ikke admissible.

**h_DH er admissible**

Ligger målet på beste vei fra n til L, er hele veien n → L minus siste bit mål → L akkurat veien n → mål. Ligger målet litt på siden, blir anslaget for lavt, men aldri for høyt. Et landmark midt mellom n og målet gir h_DH = 0.

**Hvor landmarks bør ligge**

Spredt langs kanten av grafen, gjerne bak målet. Et grådig valg: start med et tilfeldig punkt, legg til punktet lengst fra nærmeste landmark, og gjenta.

Noen rutetjenester legger også inn *shortcuts*: kunstige kanter som dekker en optimal sti på mange handlinger.

**Husk:** h_L = min (C\*(n, L) + C\*(L, mål)) kan overestimere, mens h_DH = max |C\*(n, L) − C\*(mål, L)| er admissible.

- Hvorfor lagrer man ikke optimal kostnad mellom alle par av noder? :: Det krever O(|V|²) plass, som går for 10 000 noder, men ikke for 10 millioner.
- Er landmark-heuristikken h_L(n) = min over L av C*(n, L) + C*(L, mål) admissible? :: Nei. Den er eksakt når optimal sti går via et landmark, ellers overestimerer den.
- Hva er differential heuristic? :: h_DH(n) = max over landmarks L av |C*(n, L) − C*(mål, L)|, og den er admissible.
- Hvorfor er et landmark midt mellom n og målet ubrukelig for h_DH? :: Da er C*(n, L) = C*(mål, L), så h_DH = 0.

## 3.6.5 Learning to search better
<!-- prio: C | ep: E03 | forelest: nei -->

BFS og A\* er faste oppskrifter. Kan en agent lære å søke smartere enn oppskriften?

Tenk på A\* mot Bucharest (Fig. 3.18). Søket ekspanderte Fagaras (f = 415), men løsningen gikk via Pitesti. Det steget var bortkastet arbeid.

For å lære av slike feil ser du på søket fra et nivå over:

| | Object-level state space | Metalevel state space |
|---|---|---|
| Tilstand | en by, for eksempel `Arad` | hele søketreet til A\* akkurat nå |
| Handling | kjør en vei | et beregningssteg, for eksempel ekspander et blad |

Fig. 3.18 viser altså en sti i metalevel-rommet. Hvert steg der gjør søketreet større.

*Metalevel learning* lærer av feilsteg som Fagaras og unngår lite lovende deltrær. Målet er lavest total kostnad: beregning pluss path cost.

**Husk:** metalevel betyr å søke i rommet av søketrær for å spare beregning.

- Hva er en tilstand i metalevel state space? :: Den interne tilstanden til et søkeprogram, for eksempel søketreet til A*; handlingene er beregningssteg.
- Hva prøver metalevel learning å minimere? :: Total kostnad for problemløsningen: beregningskostnad pluss path cost.

## 3.6.6 Learning heuristics from experience
<!-- prio: C | ep: E03 | forelest: nei -->

Relaxed problems er én måte å lage h på. En annen er å lære h fra erfaring: løs mange 8-puzzles optimalt og bruk løsningene som eksempler.

Læringen går bedre med *features*, tall som beskriver tilstanden:

- x₁(n) = antall brikker på feil plass
- x₂(n) = antall nabopar som ikke er naboer i målet

Statistikken kan for eksempel vise at snittkostnaden er rundt 14 når x₁ = 5. Vanlig er en lineær kombinasjon h(n) = c₁x₁(n) + c₂x₂(n). Konstantene tilpasses dataene, og begge forventes å være positive.

**Fella: lært h kan overestimere**

Egen illustrasjon. Tilstanden er ett trekk fra målet:

> `1 _ 2 / 3 4 5 / 6 7 8` (mål: `_ 1 2 / 3 4 5 / 6 7 8`)

Her er x₁ = 1 (brikke 1) og x₂ = 1 (1 og 3 er naboer nå, men ikke i målet). Med tenkte konstanter c₁ = 2 og c₂ = 1 blir h = 3, men sann kostnad er 1.

I målet er x₁ = x₂ = 0, så h = 0. Likevel er h ikke nødvendigvis admissible eller consistent. Uten garantien får du en avveining mellom læretid, søketid og løsningskostnad. En lært h kan gi raskere søk, men dårligere løsninger.

**Husk:** en lært h = c₁x₁ + c₂x₂ er rask å få til, men kan overestimere.

- Hvor kommer treningsdata fra når h læres fra erfaring? :: Fra mange løste problemer, for eksempel optimale løsninger av 8-puzzles.
- Hvordan kombineres features til en lært heuristikk? :: Lineært: h(n) = c₁x₁(n) + c₂x₂(n), med konstanter tilpasset dataene.
- Er en lært heuristikk admissible? :: Ikke nødvendigvis, og heller ikke nødvendigvis consistent, selv om den gir 0 i målet.

## 4.1.1 Hill-climbing search: ridges, sideways moves og random restart
<!-- prio: A | ep: E04 | forelest: delvis | eksamen: 2023, 2024 -->

Hill climbing går alltid til den beste naboen og stopper når ingen nabo er strengt bedre. L3 viste at den da kan bli stående på en local maximum eller et platå. Boka har mer: ridges, sideways moves, to tilfeldige varianter og random restart.

**Ridge: en rygg du ikke kan gå langs**

Egen illustrasjon. Tallene er høyder, og du kan bare gå nord, sør, øst eller vest.

| | x = 1 | x = 2 | x = 3 |
|---|---|---|---|
| y = 3 | 1 | 2 | **6** |
| y = 2 | 2 | **5** | 2 |
| y = 1 | **4** | 2 | 1 |

Ryggen stiger på skrå: 4 → 5 → 6. Men fra 4 er begge naboene 2, så hill climbing stopper der. Fra 5 er alle fire naboene 2.

Dette heter en *ridge*: en rekke lokale maksima som ikke henger direkte sammen. Fra hver topp går alle trekk nedover, selv om ryggen som helhet stiger.

**Sideways moves: gå videre på flatmark**

Et platå kan være en *shoulder*, der det går oppover igjen lenger borte. Et *sideways move* er et trekk til en nabo med samme verdi, i håp om at platået er en shoulder.

På en flat topp ville søket da vandret rundt for alltid. Derfor begrenses antall sidesteg på rad, for eksempel til 100.

**To varianter som velger tilfeldig**

*Stochastic hill climbing* velger tilfeldig blant trekkene som går oppover. *First-choice hill climbing* lager tilfeldige naboer én etter én og tar den første som er bedre. Den passer når en tilstand har tusenvis av naboer.

**Random restart: prøv igjen fra et nytt sted**

*Random-restart hill climbing* kjører hill climbing fra tilfeldige startpunkter til én klatring finner et mål. Den er complete med sannsynlighet 1: før eller siden er startpunktet selv et mål.

Lykkes hver klatring med sannsynlighet p, trenger du i snitt 1/p forsøk. Av dem er (1 − p)/p bom. Forventet antall steg blir derfor:

> steg ved treff + (1 − p)/p · steg ved bom

Egen illustrasjon: p = 0,5, 5 steg ved treff og 4 ved bom.

1. Forsøk: 1/0,5 = 2.
2. Bom i snitt: (1 − 0,5)/0,5 = 1.
3. Steg: 5 + 1 · 4 = 9.

**Bokas tall for 8-dronninger**

| | Vanlig hill climbing | Med sideways moves (maks 100 på rad) |
|---|---|---|
| Løser, p | 14 % | 94 % |
| Steg ved treff / bom | 4 / 3 | 21 / 64 |
| Random restart, forsøk | 1/0,14 ≈ 7 | 1/0,94 ≈ 1,06 |
| Random restart, steg | 4 + (0,86/0,14) · 3 ≈ 22 | 21 + (0,06/0,94) · 64 ≈ 25 |

Sideways moves løser langt flere brett, men hver klatring tar flere steg.

**Fella:** forventet antall forsøk er 1/p, ikke p eller 1 − p. Og stochastic hill climbing hjelper ikke på en topp: den velger bare blant trekk oppover, så den stopper også når ingen nabo er bedre.

**Husk:** sideways moves krysser platåer med en grense, og random restart er complete med sannsynlighet 1 og trenger 1/p forsøk.

**På eksamen:** 2023 spurte hva en tilstand uten bedre naboer kan være, og hvilket triks som hjelper. Svaret er local maximum eller platå (også shoulder), og random restart. 2024 spurte hva som *ikke* hjelper ut av lokale optima: en admissible og consistent heuristikk.

- Hva er en ridge i et state-space landscape? :: En rekke lokale maksima som ikke henger direkte sammen, der alle trekk fra hvert maksimum går nedover.
- Hva er et sideways move? :: Et trekk til en nabo med samme verdi, i håp om at platået er en shoulder.
- Hvorfor begrenses antall sideways moves på rad? :: På et flatt lokalt maksimum ville søket ellers vandre rundt for alltid.
- Når passer first-choice hill climbing? :: Når en tilstand har svært mange naboer: den lager tilfeldige naboer til én er bedre.
- Hvorfor er random-restart hill climbing complete med sannsynlighet 1? :: Den vil før eller siden generere en måltilstand som starttilstand.
- Hver klatring lykkes med p = 0,5 og bruker 5 steg ved treff og 4 ved bom. Forventet antall forsøk og steg? :: 1/p = 2 forsøk og 5 + (0,5/0,5) · 4 = 9 steg.

## 4.1.3 Local beam search
<!-- prio: A | ep: E04 | forelest: nei | eksamen: 2024 | merk: 2024 oppg. 6 nevner søk langs flere stier med en populasjon -->

Hill climbing følger bare én tilstand. Setter den seg fast, har du ingenting annet. Local beam search sprer risikoen ved å følge flere tilstander samtidig.

**Et eksempel først**

Egen illustrasjon, med k = 2 og høyere verdi er bedre. Du står i to tilstander:

| Tilstand | Verdi | Barn |
|---|---|---|
| A | 5 | 7 og 6 |
| B | 3 | 4 og 2 |

Legg alle fire barna i én pott: 7, 6, 4 og 2. Behold de to beste: 7 og 6. Begge er barn av A, så sporet fra B forsvinner.

Dette heter *local beam search*: du holder k tilstander i stedet for én.

**Algoritmen**

1. Start med k tilfeldige tilstander.
2. Lag alle etterfølgerne til alle k.
3. Er én av dem et mål, stopp.
4. Ellers: behold de k beste av hele lista, og gå til punkt 2.

**Ikke det samme som k random restarts**

Ved k random restarts klatrer hvert søk for seg og vet ikke om de andre. I beam search konkurrerer alle etterfølgerne i samme pott. Innsatsen flyttes dit fremgangen er størst, slik B ble forlatt i eksempelet.

**Svakheten: alle klumper seg**

Etter noen steg kan alle k tilstandene ligge i samme lille område. Da har søket lite diversitet, og det blir bare en k ganger tregere hill climbing.

**Stochastic beam search: trekk i stedet for å ta de beste**

*Stochastic beam search* trekker etterfølgerne tilfeldig, med sannsynlighet proporsjonal med verdien. Gode barn trekkes oftest, men svake har også en sjanse.

I eksempelet er summen 7 + 6 + 4 + 2 = 19:

| Barn | 7 | 6 | 4 | 2 |
|---|---|---|---|---|
| Sannsynlighet per trekk | 7/19 ≈ 0,37 | 6/19 ≈ 0,32 | 4/19 ≈ 0,21 | 2/19 ≈ 0,11 |

Nå kan også barnet til B bli med videre, og variasjonen holdes oppe.

**Fella:** beam search i 3.5.5 er noe annet. Der begrenses frontier i A\* til de k beste nodene. Local beam search er lokalt søk og husker bare de k tilstandene.

**Husk:** k tilstander, alle etterfølgerne i én pott, behold de k beste.

**På eksamen:** 2024 oppgave 6 hadde «Search on multiple paths by using a population of solutions» som en riktig måte å komme ut av lokale optima. Det er local beam search og genetiske algoritmer.

- Hvordan virker ett steg i local beam search? :: Lag alle etterfølgerne til alle k tilstandene, stopp hvis én er mål, ellers behold de k beste av hele lista.
- Hvordan skiller local beam search seg fra k random restarts i parallell? :: Restartene er uavhengige; i beam search konkurrerer alle etterfølgerne, så innsatsen flyttes dit fremgangen er størst.
- Hva er hovedsvakheten til local beam search? :: Lite diversitet: de k tilstandene klumper seg, og søket blir en k ganger tregere hill climbing.
- Hva gjør stochastic beam search annerledes? :: Velger etterfølgere tilfeldig med sannsynlighet proporsjonal med verdien, i stedet for bare de k beste.
- k = 2: A (5) har barn 7 og 6, B (3) har barn 4 og 2. Hvilke tilstander beholdes? :: 7 og 6, begge barn av A; B forlates.
- Stochastic beam search, barneverdier 7, 6, 4 og 2. Sannsynlighet for å velge 7 i ett trekk? :: 7/19 ≈ 0,37.

## 4.1.4 Evolutionary algorithms: mutation
<!-- prio: A | ep: E04 | forelest: delvis | eksamen: 2022, 2024 -->

L3 dekket populasjon, fitness, seleksjon og crossover. Slidene hoppet over det siste steget: mutation.

**Eksempel fra boka (Fig. 4.6)**

Hvert individ er åtte sifre. Siffer nummer c er raden til dronningen i kolonne c, og rad 1 er nederst. Crossover har laget barnet `32748552`. Så skjer dette:

> `32748552` → `32748152`

Siffer 6 endret seg fra 5 til 1. På brettet flyttet dronningen i kolonne 6 seg fra rad 5 til rad 1.

Dette heter *mutation*: en liten tilfeldig endring i et nytt barn. For 8-dronninger betyr det å flytte en tilfeldig dronning til en tilfeldig rute i samme kolonne.

**Mutation rate**

*Mutation rate* sier hvor ofte barn får slike endringer. Når et barn er laget, endres hver posisjon med sannsynlighet lik mutation rate.

**Hvor i algoritmen?**

GENETIC-ALGORITHM (Fig. 4.8) gjør dette for hvert nye barn:

1. Velg to foreldre, vektet etter fitness.
2. REPRODUCE: kutt foreldrene på et tilfeldig sted og skjøt første del av den ene med resten av den andre.
3. Med liten sannsynlighet: MUTATE barnet.
4. Legg barnet i den nye populasjonen.

**Hvorfor trengs mutation?**

Crossover kan bare blande verdier som alt finnes i populasjonen. Har ingen individer sifferet 8 på plass 6, kan crossover aldri lage det, uansett hvor mange generasjoner som går. I Fig. 4.6 står det 5, 4, 1 og 2 på plass 6, aldri 8.

Mutation gir nye verdier og holder på variasjonen. Det kan hjelpe søket ut av lokale optima.

**Mutation kan gjøre det verre**

Endringen er tilfeldig. Fitness er her antall par som ikke angriper hverandre, og 28 er en løsning. I Fig. 4.6 går det begge veier:

| Barn før | Etter mutation | Fitness |
|---|---|---|
| `32748552` | `32748152` | 23 → 24 |
| `32752124` | `32252124` | 21 → 18 |
| `24415411` | `24415417` | 20 → 22 |

**Store og små steg**

Tidlig er populasjonen variert, og da tar crossover ofte store steg. Mutation er alltid et lite steg.

**Fella:** boka beskriver mutation på to måter. Teksten sier at hver posisjon endres med sannsynlighet lik mutation rate. Fig. 4.8 sier at hele barnet muteres med liten sannsynlighet. Begge betyr små, sjeldne endringer.

**Husk:** crossover blander det som finnes, mutation lager noe nytt.

**På eksamen:** 2022 spurte «Why we have mutations in genetic algorithms?». Svaret er små tilfeldige endringer som utforsker nær gode løsninger og holder variasjonen i populasjonen. I 2024 oppg. 6 nevner løsningsforslaget mutation som en måte å hoppe ut av lokale optima.

- Hva er mutation rate i en genetisk algoritme? :: Sannsynligheten for at hver posisjon i et nytt barn endres tilfeldig.
- Hva tilsvarer mutation i 8-dronninger? :: Å flytte en tilfeldig valgt dronning til en tilfeldig rute i samme kolonne.
- Barnet 32748552 muteres til 32748152. Hva skjedde på brettet? :: Dronningen i kolonne 6 flyttet fra rad 5 til rad 1.
- Hvorfor trenger en genetisk algoritme mutation? :: Crossover blander bare verdier som finnes; mutation gir nye verdier og holder variasjonen i populasjonen.
- Hvor i GENETIC-ALGORITHM (Fig. 4.8) skjer mutation? :: Rett etter REPRODUCE: med liten sannsynlighet muteres barnet før det legges i den nye populasjonen.
- Kan mutation gjøre et barn dårligere? :: Ja. Endringen er tilfeldig og kan senke fitness, som 21 → 18 i Fig. 4.6.

## 4.2 Local Search in Continuous Spaces: empirical gradient, Newton–Raphson og constrained optimization
<!-- prio: B | ep: E04 | forelest: delvis | merk: 2024 og 2025 spør om gradient descent generelt, ikke om delene her -->

I et kontinuerlig rom kan du flytte deg et vilkårlig lite stykke. Da har hver tilstand uendelig mange naboer, og vanlig hill climbing virker ikke direkte. L3 dekket gradient-ideen; her er resten.

**Bokas eksempel: tre flyplasser**

Plasser tre flyplasser i Romania så summen av kvadrerte avstander fra hver by til nærmeste flyplass blir minst. Tilstanden er seks tall:

> `(x₁, y₁, x₂, y₂, x₃, y₃)`

**Empirical gradient: gjør rommet til et rutenett**

*Diskretisering*: flytt én av de seks variablene ±δ. Da får hver tilstand 6 · 2 = 12 naboer, og vanlig hill climbing virker.

Steepest ascent i dette rommet heter *empirical gradient*. Du måler hvor mye f endrer seg mellom nære punkter, uten noen formel for den deriverte.

**Line search: hvor langt skal du gå?**

Med en gradient går du x ← x + α∇f(x). *Line search* går i gradientretningen og dobler steglengden α til f begynner å bli dårligere.

**Newton–Raphson: hopp rett til toppen**

Newton–Raphson finner nullpunkt med x ← x − g(x)/g′(x). På toppen er den deriverte null, så du bruker g = f′. I én dimensjon blir det x ← x − f′(x)/f″(x).

Egen illustrasjon: f(x) = 8x − x², start i x = 1.

1. f′(x) = 8 − 2x, så f′(1) = 6.
2. f″(x) = −2.
3. x ← 1 − 6/(−2) = 4.

x = 4 er toppen, med f = 16. Ett steg holder fordi f er kvadratisk: Newton tilpasser en parabel og hopper til toppen av den. Empirical gradient med δ = 1 trenger tre steg: 1 → 2 → 3 → 4.

I flere dimensjoner blir formelen x ← x − H_f⁻¹(x)∇f(x). *Hessian* H_f er matrisen av andrederiverte. For flyplassene flytter ett Newton-steg hver flyplass til centroiden (midtpunktet) av byene sine. Med mange dimensjoner er det dyrt å regne ut og invertere Hessian.

**Constrained optimization: harde krav**

Noen ganger må løsningen oppfylle harde krav, for eksempel at flyplassene ligger på tørt land i Romania. Det heter *constrained optimization*.

*Linear programming* er den mest kjente typen. Både kravene og funksjonen du optimerer (objective function) er lineære. Kravene er ulikheter som 2x + y ≤ 10. Sammen danner de en konveks mengde: den rette linjen mellom to lovlige punkter er også lovlig.

Linear programming løses i polynomisk tid. Det er et spesialtilfelle av *convex optimization*, der kravene kan danne en hvilken som helst konveks mengde.

**Fella:** lokale maksima, ridges og platåer finnes i kontinuerlige rom også. Gradient-metoder kan sette seg fast akkurat som hill climbing, og random restart og simulated annealing hjelper der også.

**Husk:** empirical gradient er hill climbing på et rutenett, og Newton hopper til toppen av en tilpasset parabel.

- Hva er empirical gradient search? :: Steepest-ascent hill climbing i en diskretisert versjon av rommet, der endringen i f måles mellom nære punkter.
- Hva er Newton–Raphson-oppdateringen for å finne et optimum? :: x ← x − H_f⁻¹(x)∇f(x); i én dimensjon x ← x − f′(x)/f″(x).
- f(x) = 8x − x², start i x = 1. Hvor havner ett Newton-steg? :: I x = 1 − 6/(−2) = 4, toppen, fordi f er kvadratisk.
- Hva kjennetegner linear programming? :: Lineære ulikheter som danner en konveks mengde og en lineær objective; løses i polynomisk tid.

## 4.3.3 Try, try again: slippery vacuum world og cyclic solutions
<!-- prio: B | ep: E05 | forelest: delvis -->

Noen handlinger feiler bare av og til. Da er løsningen å prøve igjen til det virker. L3 viste bare figuren og henviste til boka.

**Glatt gulv**

I *slippery vacuum world* kan flytte-handlingene gli, så roboten blir stående. Suck virker som vanlig. Disse tilstandene trengs her (L og R er venstre og høyre rute):

| Tilstand | Robot i | Skitt |
|---|---|---|
| 1 | L | begge ruter |
| 2 | R | begge ruter |
| 5 | L | bare R |
| 6 | R | bare R |
| 8 | R | ingen (mål) |

Right fra 1 gir {1, 2}: enten flytter roboten seg, eller den blir stående.

**Hvorfor AND-OR-SEARCH gir opp**

Fra 5 gir Right {5, 6}. Utfallet 5 står allerede på stien, så den grenen gir failure. Slik går det med alle grenene: det finnes ingen asyklisk løsning fra 1, og AND-OR-SEARCH returnerer failure.

**Cyclic solution: en løkke i planen**

Planen kan i stedet inneholde en løkke:

> `[Suck, while State = 5 do Right, Suck]`

Den samme planen med en label:

> `[Suck, L1: Right, if State = 5 then L1 else Suck]`

Et mulig forløp: Suck (1 → 5), Right glipper (5 → 5), Right virker (5 → 6), Suck (6 → 8). Dette heter en *cyclic solution*.

**Når er en løkke en løsning?**

Minstekravet er at hvert blad er en måltilstand, og at et blad kan nås fra hvert punkt i planen. I tillegg må feilen være tilfeldig og uavhengig hver gang. Da virker Right før eller siden.

**Fella:** er drivreima røket, hjelper det aldri å prøve igjen. Da skyldes feilen en skjult, varig egenskap. Problemet modelleres da heller som partially observable og deterministisk, med drivreima som det skjulte.

**Husk:** glatt gulv gir en løkke som prøver igjen, men en skjult varig feil gjør løkka nytteløs.

- Hvorfor finner AND-OR-SEARCH ingen plan i slippery vacuum world? :: Det finnes ingen asyklisk løsning; et utfall fører alltid tilbake til en tilstand på stien.
- Skriv en cyclic plan for slippery vacuum world fra tilstand 1. :: [Suck, while State = 5 do Right, Suck].
- Hva er minstekravet for at en cyclic plan er en løsning? :: Hvert blad er en måltilstand, og et blad kan nås fra hvert punkt i planen.
- Når hjelper det ikke å gjenta en handling som feiler? :: Når feilen skyldes en skjult varig årsak, som en røket drivreim, og ikke tilfeldig glipp.

## 4.4.4 An agent for partially observable environments
<!-- prio: A | ep: E05 | forelest: nei | eksamen: 2023 -->

En agent som ikke ser hele verden, vet ikke nøyaktig hvor den er. Den må holde styr på alle stedene den *kan* være, og oppdatere den mengden hver gang den handler og sanser.

**Eksempel: en robot i en korridor**

Egen illustrasjon. En korridor har rute 1–4 fra vest til øst, med vegg i nord og sør overalt. Roboten har fire sonarer. Percepten er fire biter i rekkefølgen N, Ø, S, V, der 1 betyr hindring.

| Rute | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Percept (N Ø S V) | 1011 | 1010 | 1010 | 1110 |

Roboten vet ikke hvor den starter, så b = {1, 2, 3, 4}. Flytte-handlingen sender den til en tilfeldig nabo.

1. Percept 1010: bare rute 2 og 3 passer. b = {2, 3}.
2. Flytt: fra 2 til 1 eller 3, fra 3 til 2 eller 4. b = {1, 2, 3, 4}.
3. Percept 1110: bare rute 4 passer. b = {4}.

Nå vet roboten hvor den er. Dette heter *localization*: å finne ut hvor roboten er, gitt et kart og en sekvens av percepter og handlinger.

**Formelen: først predict, så update**

Etter handling a og percept o regner agenten ut ny belief state:

> b′ = UPDATE(PREDICT(b, a), o)

PREDICT flytter hver mulig tilstand etter handlingen. Med ikke-deterministiske handlinger blir mengden større, som i steg 2. UPDATE kaster tilstandene som ikke passer percepten, og gjør mengden mindre, som i steg 1 og 3.

Percepten kommer fra miljøet, så agenten trenger ikke regne den ut. I planleggingen (4.4.2) måtte den ta med alle mulige percepter; her bruker den bare den ene den fikk.

**Navnene**

Å holde belief state oppdatert heter *monitoring*, *filtering* eller *state estimation*. Formelen er en *recursive state estimator*: ny b regnes fra forrige b, ikke fra hele percept-historien. Den må regnes like fort som perceptene kommer, ellers henger agenten etter.

**Hele agenten**

Agenten lager en plan, for eksempel med AND-OR-SEARCH, og utfører den. Planen er en conditional plan, så agenten tester if-betingelsene underveis. Samtidig holder den belief state oppdatert med formelen over.

**Bokas robot og grensene**

I bokas labyrint (Fig. 4.18) passer percepten 1011 i fire ruter. Etter én Right og percepten 1010 er bare én rute igjen.

I en lang øst–vest-korridor kan roboten derimot få 1010 gang på gang uten å vite hvor den er. Med upålitelige sensorer og bare Boolean logikk gir percepten ingen informasjon. Med sannsynligheter hjelper en sensor som tar feil mindre enn halve tiden.

**Fella:** ikke glem PREDICT. Flytt alle kandidatene først, og fjern så dem som ikke passer den nye percepten. Sjekk også rekkefølgen på veggene: boka bruker N, Ø, S, V, mens eksamen 2023 listet dem som nord, sør, vest, øst.

**Husk:** b′ = UPDATE(PREDICT(b, a), o): predict vokser, update krymper.

**På eksamen:** 2023 oppgave 7 var localization i en labyrint: først update med P1 (tre mulige ruter), så Right og P2 (én rute igjen). 2023 spurte også hva en agent i et partially observable miljø trenger utover en simple reflex agent: hukommelse og en belief state.

- Hvordan oppdaterer agenten belief state etter handling a og percept o? :: b′ = UPDATE(PREDICT(b, a), o).
- Hvilke tre navn har vedlikehold av belief state? :: Monitoring, filtering og state estimation.
- Hva er localization? :: Å finne ut hvor roboten er, gitt et kart og en sekvens av percepter og handlinger.
- Hva betyr sonar-percepten 1011 med bitene i rekkefølgen N, Ø, S, V? :: Hindring i nord, sør og vest, åpent mot øst.
- Hva gjør PREDICT og UPDATE med størrelsen på belief state? :: PREDICT kan gjøre den større (ikke-deterministiske handlinger); UPDATE gjør den mindre.
- Korridor 1–4: rute 1 gir 1011, rute 2–3 gir 1010, rute 4 gir 1110. Percept 1010, flytt til tilfeldig nabo, percept 1110. Belief state? :: {4}. 1010 gir {2, 3}, flyttet gir {1, 2, 3, 4}, og 1110 gir {4}.

## 4.5.1 Online search problems: competitive ratio
<!-- prio: B | ep: E05 | forelest: delvis -->

L3 dekket forskjellen på offline og online søk. En online-agent har ikke kartet, så den må gå rundt for å oppdage det.

**Hva agenten vet**

Den kjenner ACTIONS(s), IS-GOAL(s) og kanskje en admissible heuristikk h. Kostnaden c(s, a, s′) kan den først bruke når den har sett s′. Hva en handling fører til, lærer den bare ved å gjøre den.

**Competitive ratio: hvor mye dyrere enn med kart?**

Egen illustrasjon: agenten går en sti som koster 12. Med kjent kart ville beste sti kostet 4. Forholdet er 12 / 4 = 3.

Dette heter *competitive ratio*: kostnaden agenten faktisk betaler delt på kostnaden til optimal sti hvis rommet var kjent. Den skal være så liten som mulig, og 1 er perfekt.

**Dead ends**

En *dead end* er en tilstand der ingen mål kan nås. Den oppstår gjerne etter en *irreversible action*, for eksempel en trapp ned, et stup eller en enveiskjørt gate.

Ingen algoritme unngår dead ends i alle rom. To rom ser helt like ut når agenten har vært i S og A (Fig. 4.20a). Men handlingen som fører mot målet i det ene rommet, fører til en blindvei i det andre. Agenten vet ikke hvilket rom den er i, så uansett valg finnes et rom der den går feil.

Tenk deg en motstander som bygger rommet mens agenten leter, og legger blindveien der agenten går. Dette heter et *adversary argument*.

**Safely explorable**

Derfor antar vi at rommet er *safely explorable*: et mål kan nås fra hver nåbar tilstand. Labyrinter og 8-puzzle har bare reversible handlinger og er slike, hvis de har en løsning i det hele tatt.

Selv da finnes ingen begrenset competitive ratio hvis stier kan ha ubegrenset kostnad. I Fig. 4.20b setter motstanderen opp en ny lang, tynn vegg uansett hvilken vei agenten velger. Derfor måles ytelsen ofte mot størrelsen på hele tilstandsrommet.

**Fella:** competitive ratio er faktisk kostnad delt på optimal, ikke omvendt. Den er derfor alltid minst 1.

**Husk:** competitive ratio = faktisk kostnad / optimal kostnad med kjent kart.

- Hva er competitive ratio for en online-søkeagent? :: Kostnaden agenten faktisk betaler delt på kostnaden til optimal sti hvis rommet var kjent på forhånd.
- Agenten går en sti som koster 12, og beste sti med kjent kart koster 4. Competitive ratio? :: 12 / 4 = 3.
- Hva betyr safely explorable? :: At et mål kan nås fra hver nåbar tilstand.
- Hvorfor kan ingen online-algoritme unngå dead ends i alle tilstandsrom? :: En motstander kan bygge rommet mens agenten leter og legge blindveien der agenten går (adversary argument).

## 4.5.2 Online search agents
<!-- prio: B | ep: E05 | forelest: nei -->

A\* kan ekspandere en node her og så en node i den andre enden av kartet, fordi den bare regner. En online-agent må gå dit fysisk. Den ser bare etterfølgerne til ruta den står i.

**Derfor dybde først**

I dybde-først-søk er neste node, utenom backtracking, et barn av den forrige. Agenten slipper da å reise langt mellom hver ekspansjon.

**Tre tabeller**

ONLINE-DFS-AGENT (Fig. 4.21) husker tre ting:

| Tabell | Hva den lagrer |
|---|---|
| `result[s, a]` | kartet: hvor handling a fra s førte |
| `untried[s]` | handlinger i s som ikke er prøvd |
| `unbacktracked[s]` | tilstander agenten kom til s fra, og ikke har gått tilbake til |

Har tilstanden uprøvde handlinger, prøver agenten én. Er alle prøvd, går den fysisk tilbake til tilstanden den sist kom fra. Er det heller ingen slike, er søket ferdig.

**Egen illustrasjon: en korridor**

Rutene ligger på rad: `G – S – A – B`. Agenten starter i S, målet er G, B er en blindvei, og agenten prøver Right før Left.

1. S: prøver Right og havner i A.
2. A: prøver Right og havner i B.
3. B: bare Left er uprøvd. Agenten vet ikke hvor den fører, prøver den og havner i A.
4. A: Left er uprøvd og fører til S.
5. S: Left er uprøvd og fører til G. Mål.

Agenten gikk 5 steg, mens beste sti var 1. Her kom den tilbake ved å prøve uprøvde handlinger. `unbacktracked` brukes først når alle handlingene i en tilstand er prøvd.

**Reversible handlinger**

Backtracking krever at agenten kan gå tilbake. Derfor virker ONLINE-DFS-AGENT bare når handlingene kan reverseres.

**Bra for utforsking, dårlig for å finne mål**

I verste fall går agenten hver kant nøyaktig to ganger, som kantene i blindveien over. Det er optimalt for å utforske alt.

For å finne et mål kan competitive ratio derimot bli vilkårlig dårlig. Blir blindveien i korridoren lengre, vokser forholdet uten grense. En online variant av iterative deepening løser dette: på et jevnt tre blir forholdet en liten konstant.

**Husk:** online DFS går fysisk tilbake, så handlingene må kunne reverseres.

- Hvorfor passer dybde-først-søk for online-agenter? :: Agenten kan bare ekspandere tilstanden den står i, og DFS ekspanderer et barn av forrige node, så den slipper å reise langt.
- Hvilke tre tabeller bruker ONLINE-DFS-AGENT? :: result[s, a], untried[s] og unbacktracked[s].
- Hvorfor virker ONLINE-DFS-AGENT bare med reversible handlinger? :: Når alle handlinger i en tilstand er prøvd, må den fysisk gå tilbake til tilstanden den kom fra.
- Hvor mange ganger går ONLINE-DFS-AGENT hver kant i verste fall? :: To ganger. Det er optimalt for utforsking, men competitive ratio for å finne et mål kan bli vilkårlig dårlig.

## 4.5.3 Online local search
<!-- prio: A | ep: E05 | forelest: nei | merk: LRTA* står i 4.5.3 i boka; L3 viste bare Fig. 4.23, som PENSUMOVERSIKT fører under 4.5.4 -->

Hill climbing husker bare tilstanden den står i, så den er allerede et online søk. Problemet er at den blir stående på en topp. Random restart går ikke: agenten kan ikke teleportere seg til et nytt startpunkt.

**Første idé: random walk**

En *random walk* velger en tilfeldig handling hver gang, helst en som ikke er prøvd. I et endelig, safely explorable rom finner den målet til slutt.

Men den kan bruke eksponentielt mange steg når det er mer sannsynlig å gå bakover enn fremover (Fig. 4.22). Egen illustrasjon: agenten går bakover med sannsynlighet 2/3, men fra start kan den bare gå fram. Da tar det i snitt 109 skritt å komme 5 ruter fram, og 4062 skritt å komme 10 ruter fram.

**Bedre idé: gi hill climbing hukommelse**

Agenten lagrer et estimat H(s) for hver tilstand den har besøkt: hva koster det å nå målet herfra? H(s) starter lik heuristikken h(s) og blir bedre underveis.

Dette heter *LRTA\** (learning real-time A\*). Den lagrer også kartet i result[s, a], som ONLINE-DFS-AGENT.

**Regelen**

Når agenten står i s:

1. Regn c(s, a, s′) + H(s′) for hver handling: steget pluss estimatet derfra.
2. Sett H(s) til den minste summen.
3. Gå dit summen er minst.

**Spor: Fig. 4.23**

Figuren viser seks tilstander på rad. Alle kanter koster 1, og H = 8 9 2 2 4 3. Agenten står i den tredje, i en dal der vanlig hill climbing ville stått fast. Fet skrift viser hvor agenten står.

1. 8 9 **2** 2 4 3: venstre 1 + 9 = 10, høyre 1 + 2 = 3. H ← 3, går høyre.
2. 8 9 3 **2** 4 3: venstre 1 + 3 = 4, høyre 1 + 4 = 5. H ← 4, går tilbake til venstre.
3. 8 9 **3** 4 4 3: venstre 1 + 9 = 10, høyre 1 + 4 = 5. H ← 5, går høyre.
4. 8 9 5 **4** 4 3: venstre 1 + 5 = 6, høyre 1 + 4 = 5. H ← 5, går høyre.
5. 8 9 5 5 **4** 3: venstre 1 + 5 = 6, høyre 1 + 3 = 4. H blir 4 som før, går høyre.

Dalen var 2 og 2, men begge ble løftet til 5. Da er den ikke billigst lenger, og agenten slipper ut mot høyre.

**Optimism under uncertainty**

I sporet kjente agenten H for naboene. Er en handling ikke prøvd, vet agenten ikke hvor den fører. Da antar LRTA\* at den fører rett til mål med kostnad h(s). Dette heter *optimism under uncertainty*, og det lokker agenten til å prøve nye veier.

**Garantier**

LRTA\* finner alltid målet i et endelig, safely explorable miljø, men ikke nødvendigvis i et uendelig. I verste fall bruker den O(n²) steg på et rom med n tilstander.

**Fella:** H oppdateres for tilstanden du *forlater*, ikke den du går til. Bruk også de nyeste H-verdiene: i steg 3 er H for den fjerde allerede 4, ikke 2.

**Husk:** H(s) ← min (c + H(nabo)) for tilstanden du forlater, gå dit c + H er minst, og en uprøvd handling koster h(s).

**På eksamen:** ingen av de tidligere eksamenene på siden spør om LRTA\*. Kommer den, er det trolig en håndsporing som den over.

- Hva er svakheten til random walk som online-utforsking? :: Den kan bruke eksponentielt mange steg når det er mer sannsynlig å gå bakover enn fremover.
- Hva lagrer LRTA* for hver besøkt tilstand? :: Et kostnadsestimat H(s), som starter lik heuristikken h(s).
- Hvordan oppdaterer LRTA* H for tilstanden s den forlater? :: H(s) ← min over handlinger a av c(s, a, s′) + H(s′).
- LRTA*: H = 8 9 2 2 4 3, alle kanter koster 1, agenten står i den tredje. Ny H og retning? :: Venstre 1 + 9 = 10, høyre 1 + 2 = 3, så H ← 3 og agenten går høyre.
- Hva er optimism under uncertainty i LRTA*? :: En uprøvd handling antas å føre rett til mål med kostnad h(s), så agenten prøver den.
- Når er LRTA* garantert å finne målet? :: I ethvert endelig, safely explorable miljø.
- LRTA*: H = 8 9 3 2 4 3, alle kanter koster 1, agenten står i den fjerde. Ny H og retning? :: Venstre 1 + 3 = 4, høyre 1 + 4 = 5, så H ← 4 og agenten går tilbake til venstre.

## 4.5.4 Learning in online search
<!-- prio: C | ep: E05 | forelest: nei | merk: PENSUMOVERSIKT sier «L3 (figur)», men figuren (LRTA*) står i 4.5.3 -->

En online-agent vet lite i starten, men lærer mens den går. Den lærer to ting:

1. Et kart: utfallet av hver handling i hver tilstand.
2. Bedre kostnadsestimater H(s), gjennom lokale oppdateringer som i LRTA\*.

Utforsker agenten riktig, går H mot de eksakte verdiene. Da er ren hill climbing optimal: gå alltid til etterfølgeren med lavest kostnad.

**Det agenten ikke lærer**

ONLINE-DFS-AGENT ser at Up fører fra (1,1) til (1,2). Den skjønner likevel ikke at Up fra (2,1) fører til (2,2). En generell regel som «Up øker y hvis det ikke står en vegg i veien» krever en formell representasjon. Agenten trenger også algoritmer som lærer slike regler.

**Incremental search**

Skal agenten løse mange like problemer, kan den gjenbruke søketreet, h-verdiene eller g-verdiene, og oppdatere dem når verden endrer seg. Det heter *incremental search*.

**Fella:** «incremental search» i eksamen 2022 (1.4) betyr søk som bygger løsningen ett steg om gangen (kap. 3), ikke gjenbruk mellom søk som her.

**Husk:** online-agenten lærer kartet og H, og når H er eksakt, er hill climbing optimal.

- Hvilke to ting lærer en online-søkeagent av erfaring? :: Kartet (utfallet av hver handling i hver tilstand) og bedre kostnadsestimater H(s).
- Hva er optimal strategi når H(s) er eksakt for alle tilstander? :: Ren hill climbing: gå til etterfølgeren med lavest kostnad.
- Hva er incremental search? :: Å gjenbruke søketre, h-verdier eller g-verdier fra tidligere søk når nye, like problemer skal løses.

<!-- usikker: I US-teksten står LRTA* (Fig. 4.23–4.24) i 4.5.3, mens PENSUMOVERSIKT plasserer LRTA* i 4.5.4. Global-lista (pensumseksjoner-global.tsv) har de samme titlene for 4.5.1–4.5.4 som US, men innholdet i Global er ikke sjekket side for side. Blokkene følger US-teksten. -->

## 5.1.2 Example problem: Job-shop scheduling
<!-- prio: B | ep: E06 | forelest: nei -->

En fabrikk må bestemme når hver oppgave skal starte. Noen må vente på andre, og noen kan ikke skje samtidig. Det kan du løse som en CSP.

> `AxleF = 0, WheelRF = 10, NutsRF = 11, CapRF = 13`

Hver oppgave er en variabel, og verdien er starttiden i hele minutter. Dette heter job-shop scheduling. Bokas eksempel er en del av en bilmontering med 15 oppgaver: to aksler, fire hjul, fire sett muttere, fire navkapsler og til slutt Inspect.

**«Før»: precedence constraint**

Akselen tar 10 minutter og må være på før hjulet: AxleF + 10 ≤ WheelRF. Generelt: skal T₁ med varighet d₁ være ferdig før T₂ starter, krever du T₁ + d₁ ≤ T₂. Dette heter en precedence constraint.

For hjulet høyre foran gjelder WheelRF + 1 ≤ NutsRF (hjulet tar 1 minutt) og NutsRF + 2 ≤ CapRF (mutterne tar 2). Det samme gjelder de tre andre hjulene.

**«Ikke samtidig»: disjunctive constraint**

De to akslene deler ett verktøy, så den ene må være ferdig før den andre starter: (AxleF + 10 ≤ AxleB) or (AxleB + 10 ≤ AxleF). Dette heter en disjunctive constraint. Den ser sammensatt ut, men er bare en mengde lovlige verdipar.

**Inspeksjon og frist**

Inspect tar 3 minutter og kommer sist: X + dₓ ≤ Inspect for alle andre oppgaver X. Kravet om at alt skal være ferdig på 30 minutter legger boka i domenene: Dᵢ = {0, 1, …, 30}.

**Egen illustrasjon: tidligste starttider**

1. AxleF = 0. Verktøyet er opptatt til 10, så AxleB = 10.
2. Foran: WheelRF = 10, NutsRF = 11 og CapRF = 13.
3. Bak: WheelRB = 20, NutsRB = 21 og CapRB = 23. Navkapselen tar 1 minutt, så den er ferdig ved 24.
4. Inspect = 24, ferdig ved 27. Det er innenfor 30.

**Fella:** domenet sier bare når en oppgave kan *starte*. Med {0, …, 30} kan Inspect starte på 30 og slutte på 33. E06-notatet bruker derfor {0, …, 30 − dᵢ}, men kortet følger boka.

**Husk:** Starttidene er variablene, «før» blir T₁ + d₁ ≤ T₂, og «ikke samtidig» blir en disjunctive constraint.

- I job-shop scheduling som CSP, hva er variablene og verdiene? :: Hver oppgave er en variabel, og verdien er starttiden i hele minutter.
- Hvordan skrives at T1 (varighet d1) må være ferdig før T2 starter? :: Som en precedence constraint: T1 + d1 ≤ T2.
- Hvordan uttrykkes at to aksler som deler ett verktøy, ikke kan monteres samtidig? :: Med en disjunctive constraint: (AxleF + 10 ≤ AxleB) or (AxleB + 10 ≤ AxleF).
- Hvordan legger bokas eksempel inn kravet om at alt skal være ferdig på 30 minutter? :: Ved å begrense domenene: Di = {0, 1, …, 30} for alle variablene.

<!-- avvik: E06-notatene og kompendiet bruker Dᵢ = {0, …, 30 − dᵢ}. Boka skriver Dᵢ = {0, 1, 2, 3, …, 30}. Blokken følger boka. -->

## 5.1.3 Variations on the CSP formalism: hypergraph, auxiliary variables og preference constraints
<!-- prio: B | ep: E06 | forelest: delvis -->

L4 tok Alldiff og TWO + TWO = FOUR. Resten her står bare i boka.

Mange constraints gjelder flere enn to variabler, men AC-3 ser bare på par. Boka viser hvordan du tegner slike constraints, og to måter å gjøre dem binære på.

> `O + O = R + 10 · C1`

Dette er kolonnen lengst til høyre i TWO + TWO = FOUR. Constrainten gjelder tre variabler: O, R og C1.

**Tegn den: constraint hypergraph**

Variablene er sirkler. Hver constraint er en firkant med en strek til hver variabel den gjelder. Firkanten heter en hypernode, og tegningen en constraint hypergraph. TWO + TWO = FOUR får én firkant for Alldiff og fire for kolonnene.

**Hjelpevariabler: auxiliary variables**

C1, C2 og C3 er mentene. De står ikke i gåten, men uten dem kan du ikke skrive kolonnene. Slike hjelpevariabler heter auxiliary variables.

Mentene gjør ikke kolonnene binære: O + O = R + 10 · C1 gjelder fortsatt tre variabler. Boka viser likevel (som øvingsoppgave) at med nok hjelpevariabler kan enhver constraint med endelige domener skrives om til binære.

**Bytt roller: dual graph**

Gjør hver constraint til en variabel med de lovlige tuplene som domene. To slike variabler får en binær constraint når de deler en opprinnelig variabel: tuplene må være enige om den. Bokas eksempel har X, Y, Z ∈ {1, …, 5}, C1: X + Y = Z og C2: X + 1 = Y. Her er C1 og C2 constraints, ikke menter.

1. C1 får de 10 tuplene med x + y = z. C2 får (1, 2), (2, 3), (3, 4) og (4, 5).
2. De deler X og Y. Parene som er enige om dem, er ((1, 2, 3), (1, 2)) og ((2, 3, 5), (2, 3)).

Alldiff er likevel ofte bedre enn mange ≠. Den er lettere å skrive riktig, og den har egne, raskere inferensmetoder (5.2.5).

**Ønsker: preference constraints**

Alt over er absolute constraints: brytes én, er løsningen ugyldig. En preference constraint sier bare hva som er best. Prof. R vil helst undervise om morgenen, men ettermiddag er lov.

Gjør ønsket om til en kostnad: morgen koster 1, ettermiddag 2. Nå leter du etter den billigste løsningen, ikke bare en lovlig. Det heter et constrained optimization problem (COP), og linear programming er én type COP.

**Husk:** n-ære constraints kan tegnes som hypergraph eller gjøres binære (auxiliary variables, dual graph), og myke ønsker gjør en CSP til en COP.

- Hva er en hypernode i en constraint hypergraph? :: En node (firkant) for en n-ær constraint, koblet til alle variablene den gjelder.
- Hvilken rolle har C1, C2 og C3 i TWO + TWO = FOUR? :: De er auxiliary variables for mentene. Med nok hjelpevariabler kan enhver endelig constraint gjøres binær.
- Hvordan lages en dual graph? :: Hver constraint blir en variabel med de lovlige tuplene som domene, og constraints som deler variabler, kobles med en binær constraint.
- Hva er en preference constraint, og hva blir problemet når du legger dem inn? :: Den sier hva som er best, ikke hva som er lov. Gjort om til kostnader blir problemet en COP.

## 5.2.1 Node consistency
<!-- prio: A | ep: E06 | forelest: nei | eksamen: 2020k | merk: 2020k er kontinuasjonen aug. 2021 (kryssordet) -->

Noen regler gjelder bare én variabel. Dem kan du ta unna før søket starter, ved å stryke verdier fra domenet.

> `D(SA) = {red, green, blue}` og regelen `SA ≠ green`

South Australia tåler ikke grønt. En regel med bare én variabel heter en unary constraint. Boka skriver den som ⟨(SA), SA ≠ green⟩.

Stryk green, så står D(SA) = {red, blue} igjen. Nå oppfyller hver verdi i domenet regelen, og da er SA node-consistent. Grafen er node-consistent når alle variablene er det.

**Node mot arc**

| | Node consistency | Arc consistency |
|---|---|---|
| Ser på | én variabel | to variabler (en bue) |
| Bruker | unary constraints | binary constraints |
| Stryker x når | x bryter regelen | x mangler partner hos naboen |
| Eksempel | SA ≠ green | SA ≠ WA |

**Eksamenseksempel: kryssordet**

Kontinuasjonen 2020k (august 2021) hadde et kryssord med fire plasser, V1–V4, og en ordliste med 19 ord. V1 har fem ruter, så «V1 har fem bokstaver» er en unary constraint.

1. Start: D(V1) er alle 19 ordene.
2. Stryk hvert ord som ikke har fem bokstaver.
3. Igjen står D(V1) = {astar, happy, hello, hoses}.

V2 og V4 har fire ruter og får de ti ordene på fire bokstaver. V3 har tre ruter og får de fem ordene på tre.

**Hvorfor én gang, før søket**

En unary constraint trenger du bare å sjekke én gang. Etterpå er den bygd inn i domenet og kan glemmes. n-ære constraints kan skrives om til binære (5.1.3). Derfor jobber en del løsere bare med binære constraints, og resten av kapitlet antar det samme.

**Fella:** AC-3 ser bare på buer, altså binære constraints. Den sjekker aldri ordlengden. Gjør node consistency først og skriv opp domenene, for oppgaven spør ofte om dem for seg.

**Husk:** Node consistency stryker verdier som bryter en unary constraint, og gjøres én gang før AC-3.

**På eksamen:** 2020k spurte i c) om domenene etter node consistency og i d) om AC-3 etterpå. V1 ble {astar, happy, hello, hoses}.

- Når er en variabel node-consistent? :: Når hver verdi i domenet oppfyller alle unary constraints på variabelen.
- SA har domenet {red, green, blue} og constrainten SA ≠ green. Hva gir node consistency? :: D(SA) = {red, blue}.
- Hvilken type constraint bruker node consistency, og hvilken bruker arc consistency? :: Node consistency bruker unary constraints (én variabel). Arc consistency bruker binary constraints (to variabler).
- Kryssord: V1 skal ha 5 bokstaver, og ordlista er astar, happy, ant, live, hello. Hva er D(V1) etter node consistency? :: {astar, happy, hello}.
- Hvorfor kan mange CSP-løsere anta at alle constraints er binære? :: Unary constraints fjernes ved å krympe domenene før søket, og n-ære kan skrives om til binære.

## 5.2.3 Path consistency
<!-- prio: A | ep: E06 | forelest: nei -->

AC-3 kan svare «alt i orden» på et problem som ikke har noen løsning. Path consistency ser på tre variabler om gangen og finner flere slike feil.

> `WA, NT, SA ∈ {red, blue}`, og alle tre grenser til hverandre

Dette er Australia med bare to farger. Kjør AC-3: WA = red har partneren SA = blue, og WA = blue har SA = red. Slik er det på hver bue, så AC-3 stryker ingenting.

Men tre naboer trenger tre farger, og du har to. Problemet har ingen løsning. AC-3 ser det ikke, fordi den bare ser på én bue om gangen.

**Ideen: sjekk trekanter**

Ta to variabler og list opp parene av verdier som er lovlige for dem. Spør for hvert par: finnes det en verdi for en tredje variabel som passer med begge? Hvis ikke, stryk paret. Dette heter path consistency.

Presist: {Xᵢ, Xⱼ} er path-consistent mot Xₘ hvis hvert lovlig par (Xᵢ = a, Xⱼ = b) kan utvides med en verdi for Xₘ som passer med begge. Navnet kommer av stien Xᵢ → Xₘ → Xⱼ.

**Håndsporing: {WA, SA} mot NT**

1. Lovlige par for {WA, SA}: (red, blue) og (blue, red).
2. (red, blue): NT må være ulik red og ulik blue. Ingen farge passer. Stryk paret.
3. (blue, red): samme problem. Stryk.
4. Ingen par er igjen. WA og SA kan ikke fargelegges, så problemet har ingen løsning.

**Hva blir strammet inn?**

En binær constraint er egentlig en liste med lovlige par. Arc consistency stryker verdier fra domenene. Path consistency stryker par fra lista, altså strammer den inn selve constrainten.

**Egen illustrasjon: en ny constraint dukker opp**

X, Y, Z ∈ {1, 2} med X ≠ Y og Y ≠ Z. Mellom X og Z er det ingen constraint, så alle fire par er lovlige. Gjør {X, Z} path-consistent mot Y:

1. (1, 1): Y = 2 passer med begge. Behold.
2. (1, 2): Y må være ulik 1 og ulik 2. Stryk.
3. (2, 1): samme. Stryk.
4. (2, 2): Y = 1 passer. Behold.

Igjen står (1, 1) og (2, 2). Det er en ny, utledet constraint: X = Z. AC-3 kan ikke finne den.

| | Arc consistency | Path consistency |
|---|---|---|
| Ser på | 2 variabler | 3 variabler |
| Stryker | verdier fra domener | par fra binære constraints |
| Er det samme som | 2-consistency | 3-consistency (binære grafer) |
| Australia, to farger | stryker ingenting | viser at løsning mangler |

**Fella:** «AC-3 svarte true, altså finnes en løsning.» Nei. To-farge-Australia er arc-consistent, men uløselig.

**Husk:** Path consistency sjekker trekanter: hvert lovlig par for to variabler må ha en partner i den tredje, ellers strykes paret.

**På eksamen:** trolig et kort spørsmål om hvorfor AC-3 ikke ser at Australia med to farger er uløselig. Svaret er at feilen bare synes i trekanten WA–NT–SA, og den ser path consistency.

- Hva strammer path consistency inn, sammenlignet med arc consistency? :: Path consistency strammer inn binære constraints (lovlige par). Arc consistency strammer bare inn domenene.
- Når er {Xi, Xj} path-consistent mot Xm? :: Når hvert lovlig par (Xi = a, Xj = b) kan utvides med en verdi for Xm som passer med begge.
- Australia med to farger: hva gjør AC-3, og hva gjør path consistency for {WA, SA} mot NT? :: AC-3 stryker ingenting. Path consistency stryker både (red, blue) og (blue, red), så det finnes ingen løsning.
- X, Y, Z ∈ {1, 2}, X ≠ Y og Y ≠ Z. Hvilke par (X, Z) overlever path consistency mot Y? :: (1, 1) og (2, 2). Det gir den utledede constrainten X = Z.
- Hvor mange variabler ser path consistency på om gangen? :: Tre: to variabler i et par og en tredje i midten.
- Hvilken k-consistency er path consistency i en binær constraint-graf? :: 3-consistency.

## 5.2.4 K-consistency
<!-- prio: B | ep: E06 | forelest: nei -->

Node, arc og path consistency er tre trinn på samme stige. K-consistency er hele stigen: jo høyere k, desto mer ser du, og desto dyrere blir det.

En CSP er k-consistent hvis enhver consistent tilordning til k − 1 variabler kan utvides med en consistent verdi for en hvilken som helst k-te variabel.

| k | Sjekker | Navn |
|---|---|---|
| 1 | hver verdi er lovlig alene | node consistency |
| 2 | hver verdi har en partner hos en annen variabel | arc consistency |
| 3 | hvert lovlig par har en partner hos en tredje | path consistency (binære grafer) |

**Strongly k-consistent**

En CSP er strongly k-consistent hvis den er k-consistent og i tillegg (k − 1)-, (k − 2)- og så videre ned til 1-consistent.

**Fella: 3-consistent er ikke nok** (egen illustrasjon)

> X ∈ {1, 2}, Y ∈ {1}, Z ∈ {1}, med X ≠ Y og X ≠ Z

X = 1 har ingen partner i Y, så CSP-en er ikke arc-consistent.

Men X = 1 er ikke med i noe lovlig par. 3-consistency sjekker bare de lovlige parene: (X, Y) = (2, 1), (X, Z) = (2, 1) og (Y, Z) = (1, 1). Mellom Y og Z er det ingen constraint, så (1, 1) er lovlig. Alle parene kan utvides til den tredje variabelen. CSP-en er altså 3-consistent, men ikke 2-consistent.

**Gevinsten: ingen backtracking**

Er en CSP med n variabler strongly n-consistent, går du rett fram:

1. Velg en lovlig verdi for X₁.
2. 2-consistency garanterer en verdi for X₂ som passer med X₁.
3. 3-consistency garanterer en verdi for X₃ som passer med X₁ og X₂. Og så videre.

For hver variabel prøver du høyst d verdier mot opptil n tidligere. Det gir O(n²d) til sammen.

**Prisen**

CSP er NP-complete generelt. Å etablere n-consistency tar derfor eksponentiell tid og plass i n i verste fall. I praksis er 2-consistency vanlig og 3-consistency sjeldnere.

**Husk:** Strongly n-consistency gir løsning uten backtracking i O(n²d), men det koster eksponentielt å komme dit.

- Hva betyr det at en CSP er k-consistent? :: Enhver consistent tilordning til k − 1 variabler kan utvides med en consistent verdi for en vilkårlig k-te variabel.
- Hva heter 1-, 2- og 3-consistency? :: Node consistency, arc consistency og (i binære grafer) path consistency.
- Hva er forskjellen på k-consistent og strongly k-consistent? :: Strongly krever i tillegg (k − 1)-, (k − 2)- og så videre ned til 1-consistency.
- Hva vinner du, og hva koster det, med strongly n-consistency? :: Løsning uten backtracking i O(n²d), men å etablere den tar eksponentiell tid og plass i verste fall.
- Er en CSP som er 3-consistent, alltid arc-consistent? :: Nei. 3-consistency sjekker bare lovlige par. Bare strongly 3-consistent garanterer også 2- og 1-consistency.

## 5.2.5 Global constraints: bounds propagation
<!-- prio: A | ep: E06 | forelest: delvis -->

L4 tok Alldiff. Boka har i tillegg resource constraints og bounds propagation.

Noen regler gjelder mange tallvariabler på en gang, som «til sammen høyst 10 personer». Da trenger du ikke prøve hver verdi. Det holder å regne med de minste og største verdiene.

**Atmost: et tak på summen**

> `Atmost(10, P1, P2, P3, P4)` betyr P1 + P2 + P3 + P4 ≤ 10

P1–P4 er antall personer på fire oppgaver. Dette heter en resource constraint, eller Atmost. Du kan bruke den på to måter:

1. **Går det i det hele tatt?** Legg sammen minsteverdiene. Med domenet {3, 4, 5, 6} for alle blir det 4 · 3 = 12 > 10. Inkonsistent.
2. **Hva kan strykes?** Med domenet {2, 3, 4, 5, 6} for alle er de tre andre til sammen minst 2 + 2 + 2 = 6. Hver kan da være høyst 10 − 6 = 4. Stryk 5 og 6, så hvert domene blir {2, 3, 4}.

**Bounds propagation: bare grensene**

Tenk deg tusenvis av passasjerer. Å lagre hvert domene som en mengde med hundrevis av tall er tungt. Du lagrer heller bare [min, max] og strammer inn grensene. Dette heter bounds propagation.

For X + Y = S er regelen: ny min for X er S − max(Y), og ny max er S − min(Y). Ta snittet med det gamle intervallet.

**Håndsporing: bokas fly**

> F1 ∈ [0, 165], F2 ∈ [0, 385], F1 + F2 = 420

1. F1 ≥ 420 − max(F2) = 420 − 385 = 35.
2. F1 ≤ 420 − min(F2) = 420. Det gamle taket 165 er lavere og står.
3. F2 ≥ 420 − max(F1) = 420 − 165 = 255.
4. F2 ≤ 420 − min(F1) = 420 − 35 = 385. Uendret.
5. En ny runde endrer ingenting. Svar: F1 ∈ [35, 165] og F2 ∈ [255, 385].

**Bounds-consistent: sjekk endepunktene**

En CSP er bounds-consistent når både nedre og øvre grense for hver variabel X har en verdi i hver annen variabel Y som oppfyller constrainten. Flyene etter propageringen:

| Grense | Partner | Sum |
|---|---|---|
| F1 = 35 | F2 = 385 | 420 |
| F1 = 165 | F2 = 255 | 420 |
| F2 = 255 | F1 = 165 | 420 |
| F2 = 385 | F1 = 35 | 420 |

Alle fire endepunktene har en partner, så domenene er bounds-consistent.

**Egen illustrasjon:** X + Y = 12, X ∈ [0, 5] og Y ∈ [0, 10]. Nedre: X ≥ 12 − 10 = 2 og Y ≥ 12 − 5 = 7. Øvre: X ≤ 12 − 7 = 5 og Y ≤ 12 − 2 = 10, uendret. Svar: X ∈ [2, 5] og Y ∈ [7, 10].

**Fella:** den nye nedre grensen for F1 kommer fra den *øvre* grensen til F2. 420 − 165 = 255 er nedre grense for F2, ikke for F1.

**Husk:** For X + Y = S: ny min for X er S − max(Y), ny max er S − min(Y), snittet med det gamle intervallet.

**På eksamen:** trolig et regnestykke som flyene: to intervaller og en sum, og du skal finne de nye grensene.

- Hva er bounds propagation? :: Domener lagres bare som [min, max], og grensene strammes inn med constraintene i stedet for å stryke enkeltverdier.
- F1 ∈ [0, 165], F2 ∈ [0, 385] og F1 + F2 = 420. Hva gir bounds propagation? :: F1 ∈ [35, 165] og F2 ∈ [255, 385].
- X + Y = 12, X ∈ [0, 5], Y ∈ [0, 10]. Hva gir bounds propagation? :: X ∈ [2, 5] og Y ∈ [7, 10].
- Når er en CSP bounds-consistent? :: Når både nedre og øvre grense for hver variabel X har en verdi i hver annen variabel Y som oppfyller constrainten.
- Atmost(10, P1, …, P4) der alle domener er {3, 4, 5, 6}. Er det konsistent? :: Nei. Minstesummen er 4 · 3 = 12 > 10.
- Atmost(10, P1, …, P4) der alle domener er {2, …, 6}. Hva kan strykes? :: 5 og 6 fra hvert domene, fordi de tre andre til sammen er minst 6.

## 5.3.1 Variable and value ordering: degree heuristic
<!-- prio: A | ep: E07 | forelest: delvis | eksamen: 2016, 2017 -->

L4, AL2 og L13 tok MRV og LCV. Degree heuristic står bare i boka.

MRV velger variabelen med færrest lovlige verdier igjen. I starten har ofte alle like mange, og da sier MRV ingenting. Du trenger en regel som bryter likheten.

> Australia ved start: alle sju regioner har `{red, green, blue}`

**Tell constraints mot utilordnede variabler**

Velg variabelen som er med i flest constraints mot andre *utilordnede* variabler. Dette heter degree heuristic. Ved start er ingen tilordnet, så graden er bare antall naboer:

| | SA | NT | Q | NSW | WA | V | T |
|---|---|---|---|---|---|---|---|
| Grad | 5 | 3 | 3 | 3 | 2 | 2 | 0 |

Degree velger SA.

**Hvorfor det hjelper**

SA grenser til fem regioner. Når SA får en farge, mister alle fem den fargen. Senere valg får færre grener, altså lavere branching factor.

**Håndsporing: neste valg** (egen illustrasjon)

1. SA = red. Forward checking stryker red hos WA, NT, Q, NSW og V. Alle fem har nå {green, blue}.
2. MRV: de fem har 2 verdier hver, og T har 3. Likt igjen.
3. Degree, uten SA, fordi SA er tilordnet: WA 1 (NT), NT 2 (WA, Q), Q 2 (NT, NSW), NSW 2 (Q, V) og V 1 (NSW).
4. Degree kan velge NT, Q eller NSW.

**Tre heuristikker, tre jobber**

| Heuristikk | Velger | Brukes |
|---|---|---|
| MRV | variabelen med færrest verdier igjen | først |
| Degree | variabelen med flest constraints mot utilordnede | ved likhet i MRV |
| LCV | verdien som fjerner færrest verdier hos naboene | når variabelen er valgt |

MRV er vanligvis den sterkeste. Degree brukes som tie-breaker mellom MRV-kandidatene.

**Fella 1:** tell bare utilordnede naboer. WA har to naboer på kartet, men etter SA = red teller bare NT.

**Fella 2:** boka sier at resten går uten tilbakesteg når SA er valgt, uansett hvilken lovlig farge du tar. Det holder når du også bruker MRV og forward checking. Med degree alene kan det gå galt (egen sjekk): SA = red, NT = green, og degree velger NSW, som nå har flest utilordnede naboer (Q og V). NSW = blue er lovlig, men da har Q naboene NT, SA og NSW i tre ulike farger og ingen farge igjen. Med MRV og forward checking har Q bare blue igjen og blir valgt før NSW.

**Husk:** Degree velger flest constraints mot utilordnede variabler, brukes ved likhet i MRV, og velger SA først i Australia.

**På eksamen:** 2017 spurte hvilke variabler degree kan velge etter B = Green (svar: E, med tre utilordnede naboer), og 2016 hvilken heuristikk som velger neste region (MRV, med degree ved likhet).

- Hvilken variabel velger degree heuristic? :: Variabelen som er med i flest constraints mot andre utilordnede variabler.
- Hvorfor brukes degree heuristic? :: Den senker branching factor i senere valg, og den bryter likhet når MRV står likt.
- Hvilken variabel velger degree først i Australia, og hvorfor? :: SA, med grad 5. De andre har 2 eller 3, og T har 0.
- Australia etter SA = red og forward checking: hvem kan degree velge blant WA, NT, Q, NSW og V? :: NT, Q eller NSW. De har 2 utilordnede naboer hver, mens WA og V har 1.
- Hvilken er vanligvis sterkest, MRV eller degree, og hvordan kombineres de? :: MRV. Degree brukes som tie-breaker mellom MRV-kandidatene.

<!-- usikker: boka (US 6.3.1) sier at degree etter SA løser kartet uten tilbakesteg med en hvilken som helst lovlig farge. Egen uttømmende sjekk av alle likhetsbrudd: med degree alene gir for eksempel SA = red, NT = green, NSW = blue en blindvei i Q. Med MRV + forward checking og degree som tie-breaker går alle valg gjennom uten tilbakesteg. Teksten gjengir boka og sier hva som skal til. -->

## 5.4 Local Search for CSPs: constraint weighting og tabu search
<!-- prio: B | ep: E07 | forelest: delvis -->

L4 og L13 tok min-conflicts. Boka legger til to triks mot platåer.

Min-conflicts blir ofte stående på et platå, der alle naboene er like gode. Boka sier at millioner av tilordninger kan være én konflikt fra en løsning. Sideways moves (plateau search) lar søket gå til en like god nabo, men da kan det gå i ring.

**Tabu search: ikke gå tilbake**

Hold en kort liste over tilstandene du nylig har besøkt, og forby søket å gå tilbake dit. Da vandrer det videre over platået i stedet for å gå i ring. Dette heter tabu search.

> Egen illustrasjon: søket gikk fra A til B. Fra B er A og C like gode. A står på tabu-lista, så søket går til C.

**Constraint weighting: vanskelige regler blir tyngre**

Hver constraint får en vekt, først 1. I hvert steg velger du variabel og verdi som gir lavest sum av vekter på brutte constraints. Etterpå øker du vekten med 1 på hver constraint som er brutt i nåværende tilordning. Dette heter constraint weighting.

Egen illustrasjon:

1. C1 og C2 starter med vekt 1.
2. C1 er brutt etter steg 1, 2 og 3. Vekten blir 2, 3 og så 4.
3. Nå finnes to trekk: a bryter bare C1, og b bryter bare C2.

| Trekk | Bryter | Uten vekter | Med vekter |
|---|---|---|---|
| a | C1 | 1 | 4 |
| b | C2 | 1 | 1 |

Uten vekter er trekkene like gode, et platå. Med vekter vinner b.

Det gir to fordeler. Platåer får helning, så et forbedrende steg finnes. Og søket lærer: constraints som ofte brytes, blir tunge.

**Når planen endres**

En flyplan for en uke kan ha tusenvis av fly. Dårlig vær på én flyplass kan gjøre planen ugyldig. Lokalt søk starter fra den gamle planen og reparerer den med få endringer. Backtracking med de nye constraintene tar vanligvis lengre tid og kan endre mye.

**Husk:** Tabu forbyr nylige tilstander; constraint weighting gjør brutte constraints tyngre, så platåer får helning.

- Hva gjør tabu search? :: Holder en kort liste over nylig besøkte tilstander og forbyr søket å gå tilbake til dem.
- Hvordan oppdateres vektene i constraint weighting? :: Alle starter på 1. Etter hvert steg økes vekten på hver constraint som er brutt i nåværende tilordning.
- Hvilke to fordeler gir constraint weighting? :: Platåer får helning, så et forbedrende steg finnes, og vanskelige constraints får høyere vekt (læring).
- Hvorfor er lokalt søk godt egnet når en flyplan må endres på grunn av dårlig vær? :: Det starter fra den gamle planen og finner raskt en ny med få endringer. Backtracking tar lengre tid og kan endre mye.

## 6.2.2 Optimal decisions in multiplayer games
<!-- prio: A | ep: E08 | forelest: nei | eksamen: 2022 -->

Minimax fra E08 har ett tall per node. MAX vil ha det høyt, og MIN vil ha det lavt. Med tre spillere går ikke det, for hver spiller har sin egen poengsum.

**Én vektor per node**

> `⟨vA, vB, vC⟩ = ⟨1, 2, 6⟩`

Hver node får ett tall per spiller. Her får A 1, B får 2 og C får 6. Dette heter en utility-vektor. I sluttstillingene returnerer UTILITY hele vektoren.

**Regelen:** spilleren i trekket ser bare på *sin egen* plass i vektoren. Spilleren velger barnet med størst tall der. Hele den vektoren blir nodens backed-up value.

Bokas eksempel: i node X er C i trekket. Barna er ⟨1, 2, 6⟩ og ⟨4, 2, 3⟩. C ser på tredje tall, og 6 > 3. X får verdien ⟨1, 2, 6⟩.

**Et helt tre (egen illustrasjon)**

- A i roten velger L eller R
  - L: B velger mellom ⟨5, 1, 2⟩ og ⟨2, 3, 4⟩
  - R: C velger mellom ⟨1, 2, 6⟩ og ⟨4, 5, 3⟩

Regn nedenfra:

1. B ser på andre tall: 1 mot 3. B tar ⟨2, 3, 4⟩.
2. C ser på tredje tall: 6 mot 3. C tar ⟨1, 2, 6⟩.
3. A ser på første tall: 2 via L mot 1 via R. A velger L.
4. Rotverdien blir ⟨2, 3, 4⟩.

**Fella:** A får aldri 5, selv om 5 står under L. Det er B som velger der, og B ser bare på sitt eget tall.

**Hvorfor holder ett tall med to spillere?** I tospillers zero-sum er verdiene alltid motsatte. Vet du hva MAX får, vet du hva MIN får. Vektoren krymper da til ett tall, og du er tilbake i vanlig minimax.

**Allianser**

Si at A og B står svakt og C står sterkt. Da lønner det seg for både A og B å angripe C. Ellers knuser C dem én etter én. Samarbeidet kommer av ren egeninteresse.

Når C er svekket, har alliansen ingen verdi lenger. Da kan A eller B bryte den.

Også to spillere kan samarbeide når spillet ikke er zero-sum. Gir ett utfall begge 1000, og 1000 er det høyeste noen kan få, jobber begge mot det av seg selv.

**Husk:** med n spillere har hver node en vektor, og hver spiller maksimerer sin egen plass i den.

**På eksamen:** 2022 (1.6) spurte hvordan minimax brukes i et spill med tre spillere. Svaret er utility-vektorer, der hver spiller velger vektoren med størst verdi på sin egen plass.

- Hvordan utvides minimax til tre spillere? :: Hver node får en utility-vektor ⟨vA, vB, vC⟩, og spilleren i trekket velger barnet med størst verdi på sin egen plass.
- C er i trekket og kan velge ⟨1, 2, 6⟩ eller ⟨4, 2, 3⟩. Hva blir nodens verdi? :: ⟨1, 2, 6⟩, fordi C ser på tredje tall og 6 > 3.
- Hvorfor holder ett tall per node i tospillers zero-sum? :: Verdiene til de to spillerne er alltid motsatte, så vektoren kan reduseres til ett tall.
- Rot A. Under L velger B mellom ⟨5,1,2⟩ og ⟨2,3,4⟩. Under R velger C mellom ⟨1,2,6⟩ og ⟨4,5,3⟩. Hva blir rotverdien? :: ⟨2, 3, 4⟩ via L. B gir ⟨2,3,4⟩, C gir ⟨1,2,6⟩, og A tar 2 > 1.
- Hvordan kan allianser oppstå i flerspillerspill? :: Svake spillere tjener hver for seg på å angripe en sterk felles motstander. Alliansen ryker når den sterke er svekket.
- Når vil to spillere samarbeide av seg selv? :: Når spillet ikke er zero-sum og ett utfall gir begge høyest mulig utility, for eksempel (1000, 1000).

## 6.2.4 Move ordering
<!-- prio: A | ep: E08 | forelest: nei -->

Alpha-beta gir alltid samme svar som minimax. Men hvor mye den sparer, avhenger av én ting: rekkefølgen barna undersøkes i.

**Samme tre, to rekkefølger**

Ta Fig. 6.2 fra E08. MAX i roten har tre MIN-barn:

- B: 3, 12, 8
- C: 2, 4, 6
- D: 14, 5, 2

Alpha-beta fra venstre:

1. B ser alle tre blader. B = 3, og roten får α = 3.
2. C ser 2. Siden 2 ≤ α = 3, blir C aldri bedre enn 3 for MAX. Bladene 4 og 6 kuttes.
3. D ser 14 og 5. Begge er over 3, så ingen kutt. Så kommer 2, men det er siste blad.
4. Totalt ser alpha-beta 7 av 9 blader.

D fikk ikke kuttet noe, fordi svarene som er dårligst for MIN (14 og 5), kom først. Ordne D som 2, 5, 14. Da ser D 2 først, og 5 og 14 kuttes. Nå ser alpha-beta bare 5 blader, og roten er fortsatt 3.

**Move ordering**

Å velge rekkefølgen trekkene prøves i heter move ordering. Beste trekk først gir flest kutt.

| Rekkefølge | Noder alpha-beta ser | Effektiv branching factor i sjakk |
|---|---|---|
| Perfekt (beste først) | O(b^(m/2)) | √35 ≈ 6 |
| Tilfeldig | ca. O(b^(3m/4)) | 35^(3/4) ≈ 14 |
| Verst (dårligste først) | O(bᵐ), som minimax | 35 |

Med perfekt rekkefølge rekker alpha-beta omtrent dobbelt så dypt som minimax på samme tid. Rekker minimax 6 ply, rekker perfekt alpha-beta 12 og tilfeldig rekkefølge ca. 8. (Boka gir √35 ≈ 6 og «dobbelt så dypt»; 14, 12 og 8 er egen utregning.)

**Hvorfor b^(m/2)?**

For å vise hvilket trekk som er best, må MAX se på alle b trekkene sine. Men for å forkaste et dårlig trekk holder det med ett godt motsvar fra MIN. Med perfekt rekkefølge er det motsvaret det første MIN prøver.

Unntaket er den beste grenen. Der må MIN se alle barna, fordi MAX trenger den nøyaktige verdien.

I Fig. 6.2 med god rekkefølge blir det 3 blader under B (beste gren), 1 under C og 1 under D. Det er 2b − 1 = 5 blader mot 9 for minimax. Lagene veksler mellom «alle b barn» og «ett barn», så antallet vokser som b^(m/2).

**Slik kommer du nær det perfekte**

Du vet ikke hvilket trekk som er best. Da hadde du ikke trengt å søke. Men du kan gjette godt:

- Fast rekkefølge i sjakk: slag, så trusler, så trekk framover, så bakover. Det kommer innen en faktor 2 av beste tilfelle.
- Prøv først trekkene som var best før. Med iterative deepening søker du dybde 1, rangerer trekkene og bruker rangeringen på dybde 2. De beste trekkene heter killer moves, og å prøve dem først er killer move heuristic.

**Transposition table**

> `[w1, b1, w2, b2]` og `[w2, b2, w1, b1]` gir samme stilling.

Samme stilling kan nås med ulike trekkfølger. Det heter en transposition. Lagre verdien i en tabell første gang, og slå den opp neste gang. Det er samme idé som reached-tabellen fra kapittel 3, men her lagres verdien til stillingen. I sjakk kan den doble søkedybden.

**Husk:** beste trekk først gir O(b^(m/2)), altså dobbel dybde. Killer moves og transposition tables bringer deg nær det.

**På eksamen:** ingen av eksamenene du har på siden har spurt direkte om move ordering. Men flere alpha-beta-oppgaver oppgir rekkefølgen barna skal tas i (2015, 2017, 2024 og 2025), fordi kuttene avhenger av den. I 2024 (Q11) skulle bøttene tas alfabetisk og minste verdi først. Det ga perfekt rekkefølge: beste bøtte (A) først, og MINs beste svar først i hver bøtte.

- Hvor mange noder undersøker alpha-beta med perfekt, tilfeldig og verst mulig move ordering? :: Perfekt: O(b^(m/2)). Tilfeldig: ca. O(b^(3m/4)). Verst: O(b^m), som minimax.
- Hva blir effektiv branching factor med perfekt ordering, og hva betyr det for dybden? :: √b (sjakk: ca. 6 i stedet for 35). Alpha-beta rekker omtrent dobbelt så dypt som minimax på samme tid.
- Hvorfor gir perfekt ordering omtrent b^(m/2) blader? :: MAX må se alle b trekk, men hvert dårlig trekk forkastes av MINs første motsvar. Annethvert lag har altså bare ett barn, unntatt langs den beste grenen.
- Hva er killer move heuristic? :: Prøv først trekkene som var best tidligere, for eksempel i forrige runde av iterative deepening.
- Hva er en transposition table? :: En tabell over verdiene til stillinger som er søkt, så samme stilling nådd med en annen trekkfølge kan slås opp.
- Fig. 6.2 med D = (14, 5, 2): hvor mange blader ser alpha-beta, og hvor mange hvis D ordnes (2, 5, 14)? :: 7 blader. Med 2 først i D kuttes 5 og 14, så bare 5 blader.

<!-- usikker: Boka oppgir bare resultatet O(b^(m/2)). Forklaringen av hvorfor (annethvert lag har ett barn) er en standard intuisjon, ikke bokas tekst. 35 → ca. 6 står i boka. 35^(3/4) ≈ 14 og dybdene 12 og 8 er egen utregning (som i E08-notatene): b^(3m/4) = b^6 gir m = 8. -->

## 6.3.2 Cutting off search: quiescence search og horizon effect
<!-- prio: B | ep: E09 | forelest: delvis -->

L8 tok selve kuttet: søket stopper ved en fast dybde, og EVAL gjetter verdien der. IS-CUTOFF og EVAL erstatter IS-TERMINAL og UTILITY. Boka viser to feller ved et slikt kutt.

**Felle 1: du kutter midt i et slag**

Bokas Fig. 6.8 (b): søket stopper der svart har en springer og to bønder mer. Med bokas materialverdier (springer 3, bonde 1, dronning 9) gir eval −5 for hvit (egen utregning). Søket tror svart står best.

Men hvit slår svarts dronning i neste trekk. Da står hvit +4 (−5 + 9). Eval tok feil fordi stillingen var urolig.

En rolig stilling heter quiescent. Der venter ingen trekk som kan svinge verdien kraftig, så eval er til å stole på.

Quiescence search betyr at IS-CUTOFF svarer false i urolige stillinger. Søket går videre, gjerne bare med slagtrekk, til stillingen er rolig.

**Felle 2: tapet skyves bak horisonten**

Bokas Fig. 6.9 (tapene og ply 10 nedenfor er egen utregning): svarts løper er dømt. Hvitt tårn tar den med tre trekk (h1, a1, slag på a2), altså på ply 6. Svart søker 8 ply.

1. Uten triks ser svart slaget på ply 6. Søket ser at løperen går tapt, et tap på 3.
2. Svart gir sjakk med en bonde, og hvit konge slår den. Det koster 2 ply.
3. Svart gjør det to ganger. Slaget av løperen flyttes til ply 10, bak grensen på 8.
4. Søket ser nå bare tapet av to bønder (2) og tror løperen er reddet.
5. Egentlig taper svart både bøndene og løperen, til sammen 5.

Dette heter horizon effect: et uunngåelig tap skyves bak søkedybden med forsinkende trekk.

**Singular extension:** et trekk som er klart bedre enn alle andre, får søke videre selv om grensen er nådd. Tårntrekkene h1, a1 og a2 er slike trekk, så søket følger dem forbi ply 8. Det koster få ekstra noder, fordi slike trekk er sjeldne.

**Husk:** kutt bare i rolige stillinger (quiescence), og vit at forsinkende trekk kan lure søket til å tro at et tap er unngått (horizon effect).

- Hva er en quiescent stilling? :: En stilling uten ventende trekk, som et slag, som kan svinge evalueringen kraftig.
- Hva gjør quiescence search? :: Søker videre forbi grensen i urolige stillinger, gjerne bare med slagtrekk, til stillingen er rolig.
- Hva er horizon effect? :: Et uunngåelig tap skyves bak søkedybden med forsinkende trekk, så søket tror tapet er unngått.
- Hva er singular extensions? :: Trekk som er klart bedre enn alle andre, får søke videre forbi dybdegrensen. Det hjelper mot horizon effect.

<!-- usikker: Boka sier bare «en springer og to bønder» (Fig. 6.8 b), «ply 6» og «to bondeofre» (Fig. 6.9). Tallene −5, +4, tapene 3, 2 og 5 og ply 10 er egen utregning med materialverdiene, som i E09-notatene. -->

## 6.3.3 Forward pruning
<!-- prio: B | ep: E09 | forelest: nei -->

Alpha-beta kutter bare grener som beviselig ikke endrer svaret. Forward pruning kutter også trekk som bare *ser* dårlige ut. Det sparer tid, men kan gi feil trekk.

Mennesker spiller slik: du vurderer bare noen få trekk i hver stilling. Shannon (1950) kalte det en Type B-strategi: smal og dyp.

Type A er det motsatte: alle trekk til en fast dybde, så eval (bred og grunn). De fleste sjakkprogrammer har vært Type A, mens Go-programmer oftere er Type B.

**Beam search (egen illustrasjon)**

Eval gir fire trekk: a = 5, b = 4, c = 3 og d = 1. Beam search med n = 2 beholder bare a og b. Viser et dypere søk at c egentlig vinner, er c allerede kastet. Ingenting garanterer at det beste trekket overlever.

**ProbCut**

Alpha-beta kutter noder som *beviselig* ligger utenfor (α, β). ProbCut (probabilistic cut) kutter også noder som *sannsynligvis* gjør det:

1. Gjør et grunt søk fra noden. Det gir en verdi v.
2. Bruk statistikk fra tidligere partier: hvor ofte havner en slik v utenfor (α, β) i et dypt søk?
3. Er det sannsynlig, kuttes noden.

Othello-programmet Logistello med ProbCut slo den vanlige versjonen 64 % av gangene, selv når den vanlige fikk dobbelt så mye tid.

**Late move reduction**

Med god move ordering (6.2.4) er trekkene sent i lista trolig dårlige. Late move reduction søker dem grunnere i stedet for å kutte dem. Gir det grunne søket en verdi over α, søkes trekket på nytt med full dybde.

| Teknikk | Hva kuttes | Kan gi feil trekk? |
|---|---|---|
| Alpha-beta | bare det som beviselig ikke endrer svaret | nei |
| Beam search | alt utenom de n beste etter eval | ja |
| ProbCut | noder som trolig ligger utenfor (α, β) | ja, men sjeldnere |
| Late move reduction | ingenting, sene trekk søkes grunnere | ja, men verdier over α sjekkes på nytt |

**Bokas regnestykke:** sjakk har b ≈ 35. Med en million noder i sekundet tar 35⁵ ≈ 50 millioner noder omtrent ett minutt. Minimax rekker altså ca. 5 ply. Alpha-beta med stor transposition table rekker ca. 14 ply.

**Husk:** alpha-beta er trygg (samme svar som minimax); forward pruning er rask, men kan kaste det beste trekket.

- Hva er forskjellen på alpha-beta pruning og forward pruning? :: Alpha-beta kutter bare det som beviselig ikke endrer svaret. Forward pruning kutter trekk som ser dårlige ut og kan gi feil trekk.
- Hvorfor er beam search som forward pruning risikabelt? :: Den beholder bare de n beste trekkene etter eval, og ingenting garanterer at det beste trekket overlever.
- Hvordan virker ProbCut? :: Et grunt søk gir en verdi, og statistikk fra tidligere spill anslår om den dype verdien trolig havner utenfor (α, β). Da kuttes noden.
- Hva er late move reduction? :: Sene trekk i en god ordning søkes grunnere. Gir de en verdi over α, søkes de på nytt med full dybde.

## 6.5.1 Evaluation functions for games of chance
<!-- prio: A | ep: E09 | forelest: nei -->

I sjakk holder det at eval rangerer stillinger riktig. Om en god stilling får 3 eller 300, spiller ingen rolle. Med terninger er dette ikke lenger sant.

**Bokas Fig. 6.14**

MAX velger a1 eller a2. Etter valget kommer en chance node med to utfall, med sannsynlighet 0,9 og 0,1. Så kommer en MIN-node med to like blader, så MIN-verdien er bladverdien.

- MAX
  - a1: chance node
    - 0,9: MIN = 2
    - 0,1: MIN = 3
  - a2: chance node
    - 0,9: MIN = 1
    - 0,1: MIN = 4

Med bladverdiene 1, 2, 3, 4:

1. a1 = 0,9 · 2 + 0,1 · 3 = 2,1
2. a2 = 0,9 · 1 + 0,1 · 4 = 1,3
3. MAX velger a1.

Bytt 1, 2, 3, 4 med 1, 20, 30, 400. Rekkefølgen er den samme.

1. a1 = 0,9 · 20 + 0,1 · 30 = 21
2. a2 = 0,9 · 1 + 0,1 · 400 = 40,9
3. MAX velger a2.

Samme rangering av stillingene, men motsatt valg. En chance node tar et vektet snitt, og et snitt bryr seg om hvor store tallene er. Max og min bryr seg bare om rekkefølgen. Derfor går det bra i sjakk.

**Regelen**

Eval må være en positiv lineær transformasjon av sannsynligheten for å vinne: k · P(vinn) + c, med k > 0. Har spillet flere utfall enn vinn og tap, gjelder det samme for forventet utility.

Test med 2x + 10 på verdiene 1–4: a1 = 2 · 2,1 + 10 = 14,2 og a2 = 2 · 1,3 + 10 = 12,6. MAX velger fortsatt a1. En lineær endring endrer alle snitt på samme måte, så rekkefølgen mellom dem består.

**Kostnaden**

Expectiminimax må regne på alle kast. Tiden blir O(bᵐ · nᵐ), der n er antall ulike utfall per chance node.

Backgammon har n = 21 ulike kast og b ≈ 20, opptil 4000 ved like terninger. Egen utregning: 3 ply gir omtrent (20 · 21)³ ≈ 74 millioner noder, mot 20³ = 8000 uten terninger. Ca. 3 ply er derfor realistisk.

**Pruning av chance nodes (egen illustrasjon)**

Et snitt er ikke kjent før alle barna er sett. Men kjenner du grensene for utility, kan du avgrense det. Si at all utility ligger mellom −2 og +2, og at MAX over har α = 1.

1. Chance node med to utfall, 0,5 hver. Første barn gir −1.
2. Det andre barnet kan høyst gi +2.
3. Snittet blir høyst 0,5 · (−1) + 0,5 · 2 = 0,5.
4. 0,5 < α = 1, så det andre barnet kuttes.

Uten grenser kunne det andre barnet gitt 1000, og da kan du ikke kutte.

Med svært mange utfall, som i Yahtzee med fem terninger, kan du sample noen få kast (forward pruning). Du kan også bruke MCTS, der hver playout kaster terningene tilfeldig.

**Husk:** med chance nodes må eval være positiv lineær i vinnersjansen; riktig rekkefølge alene er ikke nok.

**På eksamen:** ingen av eksamenene du har på siden har spurt om dette direkte. Regning med chance nodes kom i 2023 (oppgave 6, expectiminimax) og 2024 (Q10, forventet verdi). Fig. 6.14 er samme regning med en vri.

- Hvorfor holder det ikke at eval rangerer stillinger riktig i spill med chance nodes? :: Chance nodes tar vektet snitt, så størrelsen på verdiene teller. En rekkefølgebevarende endring kan snu det beste trekket.
- Hva må eval være i spill med sjanse? :: En positiv lineær transformasjon av sannsynligheten for å vinne (eller av forventet utility).
- Fig. 6.14: MIN-verdiene er 2 og 3 under a1, 1 og 4 under a2, med sannsynlighet 0,9 og 0,1. Hva velger MAX? :: a1: 0,9·2 + 0,1·3 = 2,1 mot a2: 0,9·1 + 0,1·4 = 1,3.
- Samme tre, men 1, 2, 3, 4 byttes med 1, 20, 30, 400. Hva velger MAX nå? :: a2: 0,9·1 + 0,1·400 = 40,9 mot a1: 0,9·20 + 0,1·30 = 21.
- Hva er tidskompleksiteten til expectiminimax? :: O(b^m · n^m), der n er antall ulike utfall per chance node.
- Når kan chance nodes prunes? :: Når utility har kjente grenser, slik at snittet kan avgrenses før alle barna er sett.
- Utility ligger mellom −2 og +2, og α = 1. En chance node (0,5 og 0,5) har første barn −1. Kan det andre barnet kuttes? :: Ja. Snittet blir høyst 0,5·(−1) + 0,5·2 = 0,5, som er under α = 1.

<!-- usikker: Tekstfila har bare figurteksten til Fig. 6.14. Treets form (MIN-noder med to like blader: 2 2 | 3 3 og 1 1 | 4 4) er hentet fra E09-notatene, som har regnet tallene i verifiser.py. Tallene 2,1 / 1,3 / 21 / 40,9 / 14,2 / 12,6 er regnet ut på nytt her. -->

## 6.6 Partially Observable Games: deterministic partially observable games
<!-- prio: C | ep: E09 | forelest: delvis -->

I sjakk ser du hele brettet. I ekte krig ser du ikke fienden før du støter på den («fog of war»). Da trenger du speidere, skjul og bløff. L8 og L13 sa bare at minimax ikke kan brukes direkte når noe er skjult.

Spill med skjult informasjon skiller seg på hvor det skjulte kommer fra:

| Spill | Hva er skjult | Kilden til usikkerheten |
|---|---|---|
| Battleship | hvor skipene står | motstanderens valg |
| Stratego | hvilken type brikkene er (plasseringen ser du) | motstanderens valg |
| Kriegspiel, Phantom Go | motstanderens brikker | motstanderens valg |
| Kortspill (6.6.2) | de andres kort | den tilfeldige utdelingen |

De tre første er deterministic partially observable games. Det finnes ingen terning, så alt du ikke vet, er valg motstanderen har gjort. Kortspill har i stedet stochastic partial observability.

StarCraft er ekstra vanskelig: partially observable, multiagent, nondeterministic, dynamic og unknown.

**Husk:** i deterministiske spill med skjult info kommer usikkerheten bare fra motstanderens skjulte valg.

- Hvor kommer usikkerheten fra i et deterministic partially observable game som Battleship? :: Bare fra at du ikke ser valgene motstanderen har gjort, for eksempel hvor skipene står.
- Hva er skjult i Stratego, i motsetning til i Battleship? :: I Stratego ser du hvor brikkene står, men ikke hvilken type de er. I Battleship er plasseringen skjult.
- Hvor kommer det skjulte fra i kortspill? :: Fra den tilfeldige utdelingen (stochastic partial observability), ikke bare fra motstanderens valg.

## 6.6.1 Kriegspiel: Partially observable chess
<!-- prio: B | ep: E09 | forelest: nei -->

Kriegspiel er sjakk der du bare ser dine egne brikker. Du må vinne uten å vite hvor motstanderen står.

**Reglene**

En dommer ser hele brettet. Du foreslår et trekk. Hindrer en skjult brikke trekket, sier dommeren «illegal», og du prøver igjen. Da har du lært noe om hvor brikkene står. Er trekket lovlig, melder dommeren slag (med felt) og sjakk (med retning).

**Belief state**

Du vet ikke hvilket brett som er det ekte. Derfor holder du rede på alle brett som passer med det du har hørt. Det er din belief state, som i kapittel 4 (E05).

1. Før første trekk har svart ikke flyttet. Hvits belief state er 1 brett.
2. Hvit trekker, og svart svarer med ett av 20 mulige åpningstrekk.
3. Hvits belief state har nå 20 brett.

En strategi må derfor gi et trekk for hver mulig sekvens av meldinger (percepts), ikke for hvert motstandertrekk.

**Tre slags matt**

| Type | Virker for | Hvordan |
|---|---|---|
| Guaranteed checkmate | alle brett i belief state | uansett hva motstanderen gjør; finnes med AND-OR-søk |
| Probabilistic checkmate | alle brett i belief state | hvit velger egne trekk tilfeldig, så svart før eller siden gjetter feil |
| Accidental checkmate | bare noen brett | brikkene sto tilfeldigvis riktig, og hvit kunne ikke vite det |

Guaranteed checkmate må virke selv om motstanderen ser alle brikkene. Motstanderens belief state blir da uviktig.

KBNK (konge, løper og springer mot konge) vinnes med sannsynlighet 1. KBBK vinnes bare med 1 − ε. Hvit må la en løper stå ubeskyttet ett trekk. Står svarts konge tilfeldigvis riktig, slår den løperen, og partiet blir remis. Hvit kan gjøre ε svært liten, men aldri 0. De fleste matter mellom mennesker er accidental.

**Spill litt tilfeldig:** forutsigbare trekk forteller motstanderen hvor brikkene dine står. Optimal spill krever derfor litt tilfeldighet. Eval tar gjerne med størrelsen på belief state: færre mulige brett er bedre.

**Husk:** Kriegspiel spilles i belief states, og guaranteed checkmate må virke for alle brett du tror er mulige.

- Hvor mange brett er i hvits belief state etter ett trekk hver i Kriegspiel, og hvorfor? :: 20, fordi svart har 20 mulige svar på hvits åpningstrekk.
- Hva er en guaranteed checkmate i Kriegspiel? :: En strategi som gir matt for hvert brett i belief state og hver percept-sekvens, uansett hva motstanderen gjør.
- Hva er en probabilistic checkmate? :: Matt for alle brett i belief state der hvit randomiserer egne trekk. KBNK vinnes slik med sannsynlighet 1.
- Hvorfor bør optimal spill i Kriegspiel være delvis tilfeldig? :: Forutsigbart spill gir motstanderen informasjon, og tilfeldige trekk er vanskelige å forberede seg på.

## 6.6.2 Card games
<!-- prio: B | ep: E09 | forelest: nei -->

I bridge, whist, hearts og poker deles kortene ut tilfeldig og holdes skjult. Det heter stochastic partial observability.

**En fristende metode**

Se på utdelingen som én chance node i roten. Etter den er spillet fullt synlig. Da kan du løse spillet for hver mulig utdeling som om du så alle kort. Så velger du trekket med best EXPECTIMINIMAX-snitt over utdelingene. Dette heter averaging over clairvoyance (clairvoyance betyr synskhet).

**Hvorfor det feiler: veiskillet**

Vei A gir én gullkrukke. Vei B går til et veiskille: den ene grenen gir to krukker, den andre en buss som kjører deg ned.

| Dag | Hva du vet ved veiskillet | Riktig valg |
|---|---|---|
| 1 | venstre er trygg | B, så venstre |
| 2 | høyre er trygg | B, så høyre |
| 3 | ingenting | A |

Metoden sier B også dag 3, fordi dag 3 «er enten dag 1 eller dag 2». Den regner som om du vet svaret når du står ved veiskillet.

Egen illustrasjon: sett bussen til −100. Metoden tror B gir 2. Men du må gjette gren: 0,5 · 2 + 0,5 · (−100) = −49, mot sikre 1 på vei A.

**Feilen:** metoden overser belief state etter handlingen. Den tror du får vite alt senere. Derfor samler den aldri informasjon, skjuler aldri informasjon og gir aldri informasjon til en makker. Den bløffer heller aldri i poker, fordi den antar at motstanderen ser kortene dine.

**Gjøre det praktisk**

Bridge har C(26, 13) = 10 400 600 måter å fordele de to skjulte hendene på. Du har to triks:

- Abstraction: like hender regnes som én. Ess og konger betyr mye, om du har en 4 eller en 5 betyr lite.
- Forward pruning: sample N = 100–1000 utdelinger og ta snittet.

Budrunden i bridge sier noe om hvilke utdelinger som er sannsynlige, men spillerne kan by slik at de skjuler informasjon. Pokerprogrammet Libratus slo toppspillere ved hjelp av abstraction.

**Husk:** averaging over clairvoyance tror du vil se alle kort senere, så den samler aldri info og bløffer aldri.

- Hva er averaging over clairvoyance? :: Løs spillet for hver mulig utdeling som om alle kort var synlige, og velg trekket med best snitt over utdelingene.
- Hvorfor velger averaging over clairvoyance feil vei på dag 3 i veiskille-historien? :: Den antar at du vil vite hvilken gren som er trygg, og overser at du ved veiskillet ikke vet noe.
- Hvorfor bløffer averaging over clairvoyance aldri i poker? :: Den antar at motstanderen ser kortene dine, så en bløff har ingen verdi.
- Hvordan håndteres de 10 400 600 mulige fordelingene i bridge? :: Med abstraction (like hender regnes som én) eller ved å sample 100–1000 utdelinger (forward pruning).

## 6.7 Limitations of Game Search Algorithms
<!-- prio: A | ep: E09 | forelest: nei | eksamen: 2022 | merk: 2022 1.7 (MCTS mot alpha-beta ved eval-feil) gjelder også 6.4 -->

Alpha-beta og MCTS må begge forenkle, fordi optimale valg er umulige å regne ut i store spill. MCTS foretrekkes når branching factor er stor, eller når en god eval er vanskelig å lage. Boka nevner fire grenser som gjelder begge.

**1. Alpha-beta stoler blindt på eval**

Bokas Fig. 6.16 er et tre med to ply:

- MAX
  - venstre MIN-node: 99, 1000, 1000, 1000
  - høyre MIN-node: 100, 101, 102, 100

Minimax regner slik:

1. Venstre MIN = min(99, 1000, 1000, 1000) = 99.
2. Høyre MIN = min(100, 101, 102, 100) = 100.
3. MAX velger høyre, fordi 100 > 99.

Det er riktig hvis eval er helt nøyaktig. Men eval er et anslag. Gi hvert blad en uavhengig tilfeldig feil med standardavvik σ. Da er venstre egentlig best i 71 % av tilfellene med σ = 5, og i 58 % med σ = 2.

**Hvorfor?** Venstre har bare ett lavt blad, og resten er langt unna. Høyre har fire blader nær 100, og MIN tar det minste. Med fire sjanser faller ett av dem lett under 99. Egen simulering: med σ = 5 blir minimumet til høyre i snitt ca. 95,5.

Er feilene avhengige av hverandre, blir det verre. Den avhengigheten mellom søskennoder er vanskelig å modellere.

**2. Regner der valget er opplagt**

Har du bare ett lovlig trekk, er det bortkastet å regne ut verdien. Det samme gjelder symmetriske trekk, der intet søk viser at det ene er bedre. Bedre er å utvide bare noder der forventet forbedring av valget er verdt tiden.

Å resonnere om hvilke beregninger som lønner seg, heter metareasoning. MCTS gjør litt av dette, men ikke optimalt.

**3. Bare enkelttrekk:** mennesker tenker i mål, som «fang dronningen», og lager planer ut fra målet. Alpha-beta og MCTS resonnerer bare trekk for trekk. Planlegging kommer i kapittel 11.

**4. Læring:** tidlige programmer hadde håndlaget eval, åpningsbøker og triks. AlphaZero lærte i stedet ved self-play.

**Husk:** alpha-beta stoler blindt på eval (Fig. 6.16), regner også på opplagte valg, tenker bare i enkelttrekk og lærer ikke av seg selv.

**På eksamen:** 2022 (1.7) spurte hvorfor MCTS er mindre følsom for feil i eval enn alpha-beta. Svaret er at alpha-beta lar ett blad med feil verdi styre valget gjennom max og min, mens MCTS tar snittet av mange playouts.

- Fig. 6.16: venstre MIN-node har 99, 1000, 1000, 1000, høyre har 100, 101, 102, 100. Hva velger minimax? :: Høyre, fordi MIN-verdiene er 99 mot 100.
- Hvor ofte er venstre gren i Fig. 6.16 egentlig bedre når eval har uavhengige feil? :: Ca. 71 % med σ = 5 og 58 % med σ = 2.
- Hvorfor er høyre gren i Fig. 6.16 sårbar for feil i eval? :: MIN tar minimum av fire verdier nær 100, så ett av dem faller lett under 99.
- Hva er metareasoning? :: Resonnering om hvilke beregninger som lønner seg: utvid bare noder der forventet forbedring av valget er verdt tidskostnaden.
- Når er MCTS å foretrekke framfor alpha-beta ifølge boka? :: Når branching factor er stor eller det er vanskelig å lage en god evalueringsfunksjon.
- Hvilken begrensning deler alpha-beta og MCTS når det gjelder abstraksjonsnivå? :: Begge resonnerer bare om enkelttrekk, ikke om overordnede mål og planer slik mennesker gjør.

<!-- usikker: Tekstfila har bare figurteksten til Fig. 6.16. Bladverdiene 99, 1000, 1000, 1000 og 100, 101, 102, 100 er hentet fra E09-videoens data (scenes.js). En ny simulering her (400 000 trekk, normalfordelt feil på hvert blad) ga 0,713 og 0,580, i tråd med bokas 71 % og 58 %, og snittminimum 95,5 til høyre med σ = 5. -->

## 7.2 The Wumpus World
<!-- prio: A | ep: E11 | forelest: nei | eksamen: 2015 | merk: 2015 oppg. 4 bruker en endret wumpus-verden (bare wumpuser, tall i rutene som i minesveiper) -->

Kapittel 7 trenger en verden der agenten må tenke seg fram, ikke bare se seg rundt. Wumpus-verdenen er en liten hule der ett feil skritt dreper deg, og der du bare får hint fra rutene rundt deg.

**Hula**

Hula er 4 × 4 ruter. Ruta [x,y] er kolonne x og rad y, så [2,1] ligger rett til høyre for start. Et sted bor wumpusen, et monster som spiser deg. Noen ruter er bunnløse groper, og én rute har en haug gull.

Agenten starter alltid i [1,1] med retning øst. Gull og wumpus plasseres tilfeldig utenom start. Hver rute utenom start har grop med sannsynlighet 0,2.

**PEAS**

| | Wumpus-verdenen |
|---|---|
| Performance | +1000 for å klatre ut med gullet, −1000 for å dø, −1 per handling, −10 for å bruke pila |
| Environment | 4 × 4 ruter, start i [1,1] mot øst, tilfeldig gull, wumpus og groper |
| Actuators | Forward, TurnLeft, TurnRight, Grab, Shoot (én pil), Climb (bare fra [1,1]) |
| Sensors | fem bit: Stench, Breeze, Glitter, Bump, Scream |

Pila flyr rett fram til den treffer wumpusen eller en vegg. Agenten får de fem bitene som en liste, for eksempel `[Stench, Breeze, None, None, None]`.

**Percepts**

- Stench: i rutene *direkte* ved siden av wumpusen, ikke diagonalt.
- Breeze: i rutene direkte ved siden av en grop.
- Glitter: i gullruta.
- Bump: når agenten går i veggen.
- Scream: høres overalt når wumpusen dør.

**Hvorfor agenten må tenke**

Reglene er kjente, og verden er deterministic, discrete, static, single-agent og sequential. Men den er partially observable: agenten sanser ikke hvor den står, om wumpusen lever eller om pila er brukt.

Hvor gropene og wumpusen er, kan du se som en skjult del av tilstanden. Den eneste veien dit går gjennom percepts.

**Slik tenker agenten (fig. 7.3–7.4)**

1. I [1,1] kjenner den ingenting. Da er naborutene [1,2] og [2,1] trygge (OK).
2. Den går til [2,1] og kjenner Breeze. Gropa er i [2,2] eller [3,1], eller i begge. Start har aldri grop.
3. Den går tilbake via [1,1] til [1,2]. Der kjenner den Stench, men ingen Breeze.
4. Stench betyr wumpus i en naborute til [1,2]. Ikke [1,1], og ikke [2,2], for da hadde det luktet i [2,1]. Altså [1,3].
5. Ingen Breeze i [1,2] betyr ingen grop i [2,2]. Fra steg 2 må gropa da være i [3,1].

| | x = 1 | x = 2 | x = 3 |
|---|---|---|---|
| y = 3 | W! | ? | ? |
| y = 2 | Stench, besøkt | OK | ? |
| y = 1 | start, besøkt | Breeze, besøkt | P! |

Steg 5 er den vanskelige. Den kombinerer percepts fra to steder og to tidspunkter, og den bygger på et percept som *mangler*.

Så lenge percepts og regler er riktige, er en logisk konklusjon garantert riktig. Det er grunnen til at kapittelet bruker logikk.

**Fella:** «ingen breeze» er også informasjon. Glemmer du det, kommer du aldri til P! i [3,1].

Ikke alle huler kan vinnes. Omtrent 21 % er urettferdige: gullet ligger i en grop eller er omringet av groper.

**Husk:** Reglene er kjente og verden er deterministic, men den er partially observable, så agenten må slutte seg fram fra percepts, også fra dem som mangler.

**På eksamen:** 2015 oppg. 4 brukte en endret wumpus-verden med bare wumpuser og tall i rutene, som i minesveiper. Den ba om en KB og et resolusjonsbevis, ikke om PEAS.

- Hva er performance measure i wumpus-verdenen? :: +1000 for å klatre ut med gullet, −1000 for å dø (grop eller wumpus), −1 per handling og −10 for å bruke pila.
- Hvilke fem percepts kan wumpus-agenten få? :: Stench (direkte nabo til wumpus), Breeze (direkte nabo til grop), Glitter (gullruta), Bump (gikk i veggen) og Scream (wumpusen er drept).
- Hvilke handlinger har wumpus-agenten? :: Forward, TurnLeft, TurnRight, Grab, Shoot (bare én pil) og Climb (bare fra [1,1]).
- Hvilke miljøegenskaper har wumpus-verdenen? :: Deterministic, discrete, static, single-agent og sequential, men partially observable.
- Hvorfor er wumpus-verdenen partially observable? :: Agenten sanser ikke posisjonen sin, om wumpusen lever eller om pila er brukt. Gropene og wumpusen ser den bare gjennom percepts.
- Ingen breeze i [1,1], breeze i [2,1], og stench uten breeze i [1,2]. Hvor er wumpusen og gropa? :: Wumpus i [1,3]: ikke [1,1], og ikke [2,2] fordi [2,1] ikke luktet. Ingen breeze i [1,2] gir ¬P₂,₂, så gropa er i [3,1].
<!-- usikker: 2015 oppg. 4 er en endret wumpus-verden (minesveiper-variant). Den står i eksamen fordi oppgaven heter «Wumpus world», men PEAS og miljøegenskapene er ikke spurt om. -->

## 7.4.3 A simple knowledge base
<!-- prio: A | ep: E11 | forelest: nei | eksamen: 2015 | merk: 2015 oppg. 4 a–b ber om en slik KB i proposisjonslogikk for en endret wumpus-verden -->

I 7.2 tenkte agenten med piler og spørsmålstegn på et rutenett. Nå skal den samme tenkningen skrives som setninger en datamaskin kan regne med.

**Symbolene**

Ett symbol er ett ja/nei-spørsmål om én rute. P₁,₂ betyr «det er grop i [1,2]». Ruta står som indeks. For hver rute finnes fem symbolfamilier:

| Familie | Sann når | Eksempel |
|---|---|---|
| P | det er grop i ruta | P₃,₁ |
| W | wumpusen er i ruta, død eller levende | W₁,₃ |
| B | det er breeze i ruta | B₂,₁ |
| S | det er stench i ruta | S₁,₂ |
| L | agenten står i ruta | L₁,₁ |

**KB-en for fig. 7.3(b)**

Agenten har vært i [1,1] (ingenting) og [2,1] (breeze). Boka tar først det som aldri endrer seg, og skriver fem setninger:

| | Setning | På norsk | Type |
|---|---|---|---|
| R₁ | ¬P₁,₁ | ingen grop i start | regel |
| R₂ | B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁) | breeze i [1,1] hvis og bare hvis grop i en nabo | regel |
| R₃ | B₂,₁ ⇔ (P₁,₁ ∨ P₂,₂ ∨ P₃,₁) | samme regel for [2,1], som har tre naboer | regel |
| R₄ | ¬B₁,₁ | ingen breeze i [1,1] | percept |
| R₅ | B₂,₁ | breeze i [2,1] | percept |

R₁–R₃ gjelder i alle wumpus-verdener. R₄ og R₅ er det agenten har sanset i akkurat denne hula. Målet er at KB-en skal gi ¬P₁,₂: ingen grop i [1,2].

**Hvorfor ⇔ og ikke ⇒**

Breeze-regelen har to retninger. Grop i en nabo gir breeze. Og breeze finnes *bare* hvis en nabo har grop.

Egen illustrasjon: skriv R₂ som bare B₁,₁ ⇒ (P₁,₂ ∨ P₂,₁). Agenten vet ¬B₁,₁, så premisset er usant, og da sier ⇒ ingenting. KB-en er nå sann i 12 av 128 modeller, og 6 av dem har grop i [1,2]. Det er retningen (P₁,₂ ∨ P₂,₁) ⇒ B₁,₁ som gir ¬P₁,₂.

**Én regel per rute**

Proposisjonslogikk har ingen variabler, så du kan ikke si «for alle ruter». Hver rute trenger egne symboler og sin egen setning. En 4 × 4-hule trenger 16 breeze-regler. Boka tar bare med de to som trengs her. Førsteordens logikk (kap. 8) klarer det med én setning.

**Husk:** R₁–R₃ er regler for alle wumpus-verdener, R₄–R₅ er det agenten har sanset, og breeze-reglene er ⇔.

**På eksamen:** 2015 oppg. 4 a–b ba om en slik KB for en minesveiper-variant. «Nøyaktig én wumpus i a eller b» krever både W(a) ∨ W(b) og ¬W(a) ∨ ¬W(b). Å skrive bare den første er den vanlige feilen, samme feil som ⇒ i stedet for ⇔.

- Hvilke symbolfamilier bruker bokas wumpus-KB for hver rute [x,y]? :: P (grop), W (wumpus, død eller levende), B (breeze), S (stench) og L (agenten står i ruta).
- Hva sier R₂: B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)? :: Det er breeze i [1,1] hvis og bare hvis det er grop i [1,2] eller [2,1].
- Skriv R₃, breeze-regelen for [2,1]. :: B₂,₁ ⇔ (P₁,₁ ∨ P₂,₂ ∨ P₃,₁).
- Hvilke av R₁–R₅ er generelle regler, og hvilke er percepts? :: R₁ (¬P₁,₁), R₂ og R₃ gjelder i alle wumpus-verdener. R₄ (¬B₁,₁) og R₅ (B₂,₁) er percepts fra denne verdenen.
- Hvorfor er breeze-regelen en ⇔ og ikke en ⇒? :: Ruta har breeze hvis en nabo har grop, og bare hvis en nabo har grop. Uten den andre retningen gir ¬B₁,₁ ingenting.
- Hvorfor må breeze-regelen skrives én gang per rute i proposisjonslogikk? :: Proposisjonslogikk har ingen variabler, så hver rute trenger egne symboler og sin egen setning.

## 7.4.4 A simple inference procedure
<!-- prio: A | ep: E11 | forelest: nei | eksamen: 2020k, 2022 | merk: model checking-ideen er forelest i L5; selve TT-ENTAILS og analysen står bare i boka -->

Agenten har en KB og et spørsmål: er det trygt i [1,2]? Den enkleste måten å svare på er å prøve alle mulige verdener.

**Ideen**

KB ⊨ α betyr at α er sann i hver modell der KB er sann. TT-ENTAILS sjekker dette rett fra definisjonen. Den ramser opp alle modellene, ser bort fra dem der KB er usann, og krever at α er sann i resten. TT står for truth table.

**Wumpus-KB-en**

KB-en R₁–R₅ fra 7.4.3 har 7 symboler: B₁,₁, B₂,₁, P₁,₁, P₁,₂, P₂,₁, P₂,₂ og P₃,₁. Det gir 2⁷ = 128 modeller. KB er sann i bare 3 av dem:

| | P₁,₁ | P₁,₂ | P₂,₁ | P₂,₂ | P₃,₁ |
|---|---|---|---|---|---|
| modell 1 | F | **F** | F | F | T |
| modell 2 | F | **F** | F | T | F |
| modell 3 | F | **F** | F | T | T |

I alle tre er B₁,₁ = F og B₂,₁ = T. P₁,₂ er usann i alle tre, så KB ⊨ ¬P₁,₂. P₂,₂ er sann i to av tre, så agenten vet ikke om det er grop i [2,2].

**Algoritmen**

TT-CHECK-ALL tar ett symbol om gangen, prøver true og så false, og går dybde først som BACKTRACKING-SEARCH. Når alle symbolene har fått verdi, er du i et blad:

- KB er sann: returner verdien av α.
- KB er usann: returner true. En slik rad kan ikke motbevise noe.

Svaret er «og» av alle bladene. Ett eneste false gjør hele svaret false.

**Håndsporing** (egen illustrasjon)

KB = (P₂,₂ ∨ P₃,₁) ∧ ¬P₂,₂ og α = P₃,₁. Symbolene er [P₂,₂, P₃,₁].

1. P₂,₂ = T, P₃,₁ = T: ¬P₂,₂ er usann, så KB er usann → true.
2. P₂,₂ = T, P₃,₁ = F: KB er usann → true.
3. P₂,₂ = F, P₃,₁ = T: KB er sann → returner α = P₃,₁ = true.
4. P₂,₂ = F, P₃,₁ = F: P₂,₂ ∨ P₃,₁ er usann, så KB er usann → true.
5. Alle fire er true, så KB ⊨ P₃,₁.

Spurte du om α = ¬P₃,₁, ville blad 3 gitt false, og svaret ville blitt false.

**Egenskaper**

| Egenskap | TT-ENTAILS | Hvorfor |
|---|---|---|
| Sound | ja | den er definisjonen av entailment |
| Complete | ja | virker for alle KB og α, og stopper fordi modellene er endelig mange |
| Tid | O(2ⁿ) | 2ⁿ modeller for n symboler |
| Minne | O(n) | dybde først, så bare én gren om gangen |

Endelig er ikke det samme som få. Propositional entailment er co-NP-complete, så alle kjente inferensalgoritmer for proposisjonslogikk er eksponentielle i verste fall.

**Fella:** tell symbolene, ikke setningene. Wumpus-KB-en har 5 setninger, men 7 symboler og dermed 128 rader.

**Husk:** TT-ENTAILS er sound og complete, men bruker O(2ⁿ) tid og O(n) minne.

**På eksamen:** 2020k oppg. 1b ba deg vise ¬S med sannhetstabell, og 2022 oppg. 5.2 ba om sannhetstabellen i gulloppgaven. Vis hele tabellen, pek ut radene der KB er sann, og sjekk α i hver av dem.

- Hva gjør TT-ENTAILS? :: Ramser opp alle modellene og sjekker at α er sann i hver modell der KB er sann.
- Hva returnerer TT-CHECK-ALL for en fullstendig modell der KB er usann? :: true. En rad der KB er usann, kan ikke motbevise KB ⊨ α.
- Wumpus-KB-en R₁–R₅ har 128 modeller. Hvor mange gjør KB sann, og hva følger om [1,2] og [2,2]? :: 3. ¬P₁,₂ er sann i alle tre, så KB ⊨ ¬P₁,₂. P₂,₂ er sann i to av tre, så det er ukjent.
- Hvorfor er TT-ENTAILS sound og complete? :: Sound fordi den følger definisjonen av entailment direkte. Complete fordi modellene er endelig mange, så den alltid blir ferdig.
- Hva er tid og minne for TT-ENTAILS med n symboler? :: Tid O(2ⁿ) og minne O(n), fordi oppramsingen går dybde først.
- Hvor vanskelig er propositional entailment i verste fall? :: co-NP-complete. Alle kjente inferensalgoritmer for proposisjonslogikk er eksponentielle i verste fall.

## 7.5.1 Inference and proofs: Monotonicity
<!-- prio: B | ep: E12 | forelest: delvis | merk: 2017 6g spør om circumscription, en nonmonotonic logikk (10.6 er ikke pensum) -->

L5 dekket inferensreglene: Modus Ponens, and-elimination og ekvivalensene i fig. 7.11. Monotonicity står bare i boka.

Kan en ny opplysning gjøre en gammel konklusjon feil? I logikken i kapittel 7 er svaret nei.

**Eksempel med modeller** (egen illustrasjon med bokas KB)

Fra fig. 7.5 er KB sann i tre modeller for (P₁,₂, P₂,₂, P₃,₁): (F, F, T), (F, T, F) og (F, T, T). Alle har P₁,₂ = F, så KB ⊨ ¬P₁,₂.

Legg til β = ¬P₃,₁. Da står bare (F, T, F) igjen.

- Ny konklusjon: KB ∧ β ⊨ P₂,₂.
- Gammel konklusjon: ¬P₁,₂ holder fortsatt.

Dette heter monotonicity: hvis KB ⊨ α, så er KB ∧ β ⊨ α, for alle α og β.

**Hvorfor det alltid holder**

β kan bare fjerne modeller, aldri legge til nye. Så M(KB ∧ β) ⊆ M(KB) ⊆ M(α). Var α sann i alle de gamle modellene, er den sann i dem som er igjen.

Bokas eksempel: agenten får vite at det er nøyaktig åtte groper i hula. Det kan gi nye konklusjoner, men ¬P₁,₂ står.

**Hva det betyr i praksis**

En inferensregel kan brukes så snart premissene står i KB. Du trenger ikke se på resten av KB først, for konklusjonen holder uansett hva annet som står der.

**Nonmonotonic logikk**

Mennesker ombestemmer seg. «Tweety er en fugl, så den flyr» faller når du får vite at Tweety er en pingvin. Logikker som tillater dette, heter nonmonotonic (10.6, ikke pensum). Eksamen 2017 (6g) spurte om circumscription er nonmonotonic. Svaret er ja.

**Husk:** Ny kunnskap kan gi nye konklusjoner, men aldri ta bort gamle.

- Hva sier monotonicity? :: Hvis KB ⊨ α, så er KB ∧ β ⊨ α for alle β. Mer kunnskap kan aldri fjerne en konklusjon.
- Agenten får vite at hula har nøyaktig åtte groper. Hva skjer med konklusjonen ¬P₁,₂? :: Den står fast. Ny kunnskap kan gi nye konklusjoner, men ikke ugyldiggjøre gamle.
- Hva betyr monotonicity for bruken av inferensregler? :: En regel kan brukes så snart premissene står i KB. Konklusjonen følger uansett hva annet KB inneholder.
- Hva kalles en logikk der en konklusjon kan trekkes tilbake når ny kunnskap kommer? :: Nonmonotonic logic. Den bryter monotonicity og fanger at vi ombestemmer oss.
<!-- usikker: prio B. Monotonicity er ikke spurt om direkte i eksamenene på siden; 2017 6g spør om circumscription, som bryter den, og 10.6 er ikke pensum i år. -->

## 7.5.2 Proof by resolution: Factoring
<!-- prio: A | ep: E12 | forelest: delvis | merk: trengs i alle resolusjonsbevis for hånd -->

L5, Ø4 og L13 dekket CNF, resolution-regelen og PL-RESOLUTION. Factoring og hvorfor det trengs, står bare i boka.

Når du resolverer for hånd, kan samme literal havne to ganger i resultatet. Factoring er oppryddingen.

**Bokas eksempel**

> (A ∨ B) og (A ∨ ¬B)

1. B og ¬B er komplementære. Kutt dem.
2. Ta med resten fra begge klausulene: A og A. Resolventen er A ∨ A.
3. A ∨ A betyr det samme som A. Fjern kopien, og resolventen er **A**.

Steg 3 heter factoring: resolventen skal bare ha én kopi av hver literal.

Det gir mening. Er B sann, krever den andre klausulen A. Er B usann, krever den første klausulen A. A holder uansett.

**Factoring slår bare sammen like literaler**

> (P ∨ ¬Q ∨ R) og (¬P ∨ Q)

Her er det to komplementære par, P/¬P og Q/¬Q. Du kan bare kutte ett par om gangen. Kutter du P, får du ¬Q ∨ Q ∨ R. Q og ¬Q er ikke like, så factoring fjerner ingen av dem. Svaret er ikke R.

¬Q ∨ Q ∨ R er valid (alltid sann), så den hjelper ikke beviset og kan kastes. Det samme skjer i wumpus-beviset i fig. 7.14: ¬B₁,₁ ∨ P₁,₂ ∨ P₂,₁ mot ¬P₁,₂ ∨ B₁,₁ gir bare slike klausuler.

**Factoring gjør at PL-RESOLUTION stopper**

Med symbolene A og B finnes fire literaler, så det finnes bare 2⁴ = 16 klausuler når hver literal står høyst én gang. Uten factoring kunne du fått A ∨ A, A ∨ A ∨ A og så videre uten ende.

Med factoring er mengden av alt resolution kan utlede, resolution closure RC(S), endelig. Derfor stopper PL-RESOLUTION alltid.

**Uten factoring kan beviset låse seg** (egen illustrasjon)

> (A ∨ B), (A ∨ ¬B), (¬A ∨ B), (¬A ∨ ¬B)

Ingen modell gjør alle fire sanne. Men uten factoring gir to klausuler med to literaler en resolvent med 2 + 2 − 2 = 2 literaler. Den tomme klausulen har 0 literaler og kommer aldri. Med factoring går det:

1. (A ∨ B) og (A ∨ ¬B) gir A ∨ A, altså A.
2. (¬A ∨ B) og (¬A ∨ ¬B) gir ¬A ∨ ¬A, altså ¬A.
3. A og ¬A gir den tomme klausulen □.

**Mengder gjør det av seg selv**

Skriver du klausuler som mengder, som {A, B}, skjer factoring automatisk. En mengde kan ikke ha samme element to ganger.

**Husk:** Factoring fjerner doble literaler (A ∨ A blir A) og gjør at resolution closure er endelig.

**På eksamen:** Resolusjonsbevis for hånd er gitt flere år, blant annet 2018 P6 og 2020k oppg. 1c. I 2015 oppg. 3f (FOL) gir ett steg ¬R(x) ∨ ¬M(x) ∨ ¬M(x), som factoring gjør til ¬R(x) ∨ ¬M(x).

- Hva er factoring i resolution? :: Å fjerne ekstra kopier av samme literal, så hver literal står bare én gang i resolventen.
- Resolver (A ∨ B) med (A ∨ ¬B). Hva blir resultatet? :: A ∨ A, som factoring gjør til A.
- Hvorfor sørger factoring for at PL-RESOLUTION stopper? :: Med én kopi per literal finnes bare endelig mange klausuler over symbolene, så resolution closure RC(S) er endelig.
- Resolver (P ∨ ¬Q ∨ R) med (¬P ∨ Q). Kan factoring gi R? :: Nei. Du får ¬Q ∨ Q ∨ R. Factoring fjerner bare like literaler, og du kan bare kutte ett komplementært par om gangen.
- Når skjer factoring automatisk? :: Når klausuler skrives som mengder av literaler, siden en mengde ikke kan ha samme element to ganger.

## 7.6 Effective Propositional Model Checking
<!-- prio: B | ep: E13 | forelest: nei -->

TT-ENTAILS prøver alle 2ⁿ modeller. Med 50 symboler er det over 10¹⁵ rader, omtrent 13 døgn med en milliard rader i sekundet (egen utregning). 7.6 handler om smartere måter å lete på.

**SAT-problemet**

Du får en setning i CNF. Finn en modell, eller avgjør at ingen finnes. Dette er SAT-problemet, og et program som løser det, heter en SAT-løser.

**Entailment som SAT**

α ⊨ β hvis og bare hvis α ∧ ¬β er unsatisfiable. Vil du vise KB ⊨ ¬P₁,₂, gir du løseren KB ∧ P₁,₂. Finnes ingen modell, er [1,2] trygg.

Eksamen 2018 (Problem 8) hadde dette som utfyllingsoppgave: «A entails B if and only if (…) is unsatisfiable». Svaret er A ∧ ¬B.

**To familier**

| | Backtracking | Lokalt søk |
|---|---|---|
| Algoritme | DPLL (7.6.1) | WalkSAT (7.6.2) |
| Søker i | delvise modeller | komplette modeller |
| Complete? | ja | nei |
| Ligner i CSP | backtracking (5.3) | min-conflicts (5.4) |

Kort sagt: DPLL kan si nei, WalkSAT kan bare si ja.

**Hvorfor SAT er viktig**

Svært mange kombinatoriske problemer i informatikk kan gjøres om til SAT. En bedre SAT-løser hjelper derfor på alle.

**Husk:** En SAT-løser kan bevise α ⊨ β ved å vise at α ∧ ¬β er unsatisfiable.

- Hva er SAT-problemet? :: Å avgjøre om en setning i CNF er satisfiable, altså finne en modell eller vise at ingen finnes.
- Hvordan avgjør en SAT-løser om α ⊨ β? :: Den sjekker om α ∧ ¬β er unsatisfiable. Er den det, gjelder α ⊨ β.
- Hvilke to familier av SAT-algoritmer beskriver 7.6? :: Backtracking (DPLL, complete) og lokalt søk (WalkSAT, incomplete). De ligner backtracking og min-conflicts for CSP.

## 7.6.1 A complete backtracking algorithm
<!-- prio: A | ep: E13 | forelest: nei -->

TT-ENTAILS fyller ut hele modellen før den sjekker noe. DPLL sjekker underveis og lar de tvungne valgene ta seg av seg selv.

DPLL (Davis, Putnam, Logemann, Loveland) tar en setning i CNF og ramser opp *delvise* modeller dybde først, som TT-ENTAILS. Den har tre forbedringer.

**Early termination**

> (A ∨ B) ∧ (A ∨ C) med A = true

Setningen er sann allerede, uansett B og C. En klausul er sann så snart én literal er sann, og usann når alle er usanne. Da kuttes et helt deltre før modellen er komplett.

**Pure symbol**

> (A ∨ ¬B), (¬B ∨ ¬C), (C ∨ A)

A står bare positivt og B bare negativt, så begge er pure. Sett dem slik at literalen blir sann: A = true, B = false. Det kan aldri gjøre en klausul usann.

Klausuler som allerede er sanne, teller ikke. Med B = false er (¬B ∨ ¬C) sann, og da står C bare positivt. Nå er C også pure.

**Unit clause**

Med B = true blir (¬B ∨ ¬C) til bare ¬C. Alle literalene unntatt én er usanne, så den siste må bli sann: C = false. Dette er en unit clause.

Nå blir (C ∨ A) en unit clause, og A = true. Kjeden av tvungne verdier heter unit propagation. Med bare definite clauses gjør DPLL i praksis det samme som forward chaining.

**Rekkefølgen i hvert kall (fig. 7.17)**

1. Alle klausulene er sanne → true.
2. En klausul er usann → false.
3. Finnes et pure symbol, sett det.
4. Finnes en unit clause, sett den.
5. Ellers gjett første symbol, true før false.

**Håndsporing** (egen illustrasjon; symbolene alfabetisk, første unit clause i lista, som i E13)

Klausulene er C1 A ∨ B, C2 ¬A ∨ C, C3 ¬A ∨ ¬C og C4 A ∨ ¬B ∨ ¬C. I parentes står status for C1–C4: T sann, F usann, ? uavgjort.

1. Start (? ? ? ?). Ingen pure, ingen unit. Gjett A = true.
2. A = true (T ? ? T). B står bare i C1 og C4, som er sanne, og et symbol uten åpne klausuler regnes ikke som pure (som i E13). C står med begge fortegn. Ingen er pure. C2 og C3 er unit, og første unit er C2: C = true.
3. A = true, C = true (T T F T). C3 er usann, så kallet returnerer false. B ble aldri satt.
4. Gjett A = false (? T T ?). B står i C1 og ¬B i C4, så B er ikke pure. ¬C står bare i C4, så C er pure: C = false.
5. A = false, C = false (? T T T). Nå står B bare i C1, så B er pure: B = true.
6. Alle sanne (T T T T): **A = F, B = T, C = F.** Det er den eneste modellen.

**Fella:** å ta unit før pure. I steg 4 er C1 unit, men fig. 7.17 sjekker pure først. Modellen blir lik, men forløpet blir feil.

**Triks i ekte løsere**

| Triks | Idé |
|---|---|
| Component analysis | klausuler uten felles usatte symboler løses hver for seg (som Tasmania) |
| Variable and value ordering | degree heuristic: velg symbolet som står i flest gjenværende klausuler |
| Intelligent backtracking | hopp rett tilbake til konflikten og lagre den som en conflict clause |
| Random restarts | start på nytt, men behold lærte klausuler; gir mindre varians i kjøretid |
| Clever indexing | finn raskt klausulene der et symbol står med et gitt fortegn |

Med disse triksene klarer moderne løsere titalls millioner variabler.

**Husk:** DPLL = backtracking over delvise modeller med early termination, pure før unit, og gjetning bare når ingen regel virker.

**På eksamen:** DPLL er ikke spurt om på eksamenene du har på siden. Kommer den, er det trolig en håndsporing der hvert steg har navn: pure, unit (med klausul), gjett eller konflikt.

- Hvilke tre forbedringer har DPLL over TT-ENTAILS? :: Early termination, pure symbol heuristic og unit clause heuristic.
- Når er et symbol pure i DPLL? :: Når det har samme fortegn i alle klausuler som ikke allerede er sanne. Det settes slik at literalen blir sann.
- Hva er unit propagation? :: En unit clause (alle literaler unntatt én er usanne) tvinger en verdi, som kan gjøre neste klausul unit. Ligner forward chaining.
- I hvilken rekkefølge sjekker DPLL reglene i hvert kall (fig. 7.17)? :: Alle klausuler sanne → true, én usann → false, så pure symbol, så unit clause, ellers gjett første symbol (true før false).
- C1 A ∨ B, C2 ¬A ∨ C, C3 ¬A ∨ ¬C, C4 A ∨ ¬B ∨ ¬C. Hva skjer etter gjettet A = true? :: Unit C2 gir C = true. Da er C3 usann, og DPLL går tilbake før B er satt (early termination).
- Hvilke fem triks nevner boka for store SAT-problemer? :: Component analysis, variable and value ordering, intelligent backtracking (conflict clause learning), random restarts og clever indexing.
<!-- usikker: at et symbol uten åpne klausuler ikke regnes som pure, er konvensjonen fra E13 (som aima-python), ikke bokas ordlyd. Med den settes B aldri før konflikten i steg 3. Svaret (A må være false) blir det samme uansett. -->

## 7.6.2 Local search algorithms
<!-- prio: A | ep: E13 | forelest: nei -->

DPLL bygger en modell bit for bit. Lokalt søk gjør det motsatte: det starter med en hel modell som er feil, og reparerer den ett symbol om gangen.

**Ideen**

Tilstanden er en komplett modell, og et steg er å flippe ett symbol mellom true og false. Evalueringsfunksjonen er antall usanne klausuler, og målet er null. Det er samme mål som min-conflicts for CSP (5.4).

Landskapet har mange lokale minima. Søket trenger derfor tilfeldighet for å komme løs.

**WalkSAT (fig. 7.18)**

1. Start med en tilfeldig modell.
2. Er alle klausulene sanne, returner modellen.
3. Velg en tilfeldig usann klausul.
4. Med sannsynlighet p (typisk rundt 0,5): flip et tilfeldig symbol i klausulen. Dette er random walk.
5. Ellers: flip symbolet i klausulen som gir flest sanne klausuler. Dette er min-conflicts-steget.
6. Gjenta fra steg 2. Etter `max_flips` gir WalkSAT opp og returnerer failure.

**Håndsporing** (egen illustrasjon, klausulene fra 7.6.1)

C1 A ∨ B, C2 ¬A ∨ C, C3 ¬A ∨ ¬C, C4 A ∨ ¬B ∨ ¬C. Start med A = B = C = false.

1. Bare C1 (A ∨ B) er usann, så WalkSAT velger C1.
2. Kandidatene er symbolene i C1:

| Flip | C1–C4 | Sanne klausuler |
|---|---|---|
| A | T F T T | 3 |
| B | T T T T | 4 |

3. Det grådige steget velger B. Random walk velger A eller B med ½ hver.
4. Med p = 0,5 flippes B med sannsynlighet (1 − p) + p · ½ = 0,5 + 0,25 = 0,75.
5. Flippes B, er alle klausulene sanne: A = F, B = T, C = F, samme modell som DPLL fant. Flippes A (sannsynlighet 0,25), blir C2 usann, og søket fortsetter.

**Hva svaret betyr**

Returnerer WalkSAT en modell, er setningen satisfiable. Failure kan bety at den er unsatisfiable, *eller* at søket trengte flere flips. Du vet ikke hvilken.

Med `max_flips` = ∞ og p > 0 finner WalkSAT en modell til slutt hvis en finnes. På en unsatisfiable setning stopper den da aldri.

WalkSAT passer derfor når du venter at en løsning finnes. Den kan ikke avgjøre entailment, for det krever å vise at KB ∧ ¬α er unsatisfiable.

**Fella:** wumpus-agenten kan ikke bevise at en rute er trygg med WalkSAT. «Jeg fant ingen verden der ruta er farlig på en time» er en god indikasjon, men ikke et bevis.

**Husk:** WalkSAT kan si «satisfiable», men aldri «unsatisfiable».

**På eksamen:** WalkSAT er ikke spurt om på eksamenene du har på siden. Et naturlig spørsmål er hvorfor failure ikke beviser at setningen er unsatisfiable.

- Hvordan velger WalkSAT hva som flippes? :: Den tar en tilfeldig usann klausul. Med sannsynlighet p flippes et tilfeldig symbol i den, ellers symbolet som gir flest sanne klausuler.
- Hvilken evalueringsfunksjon bruker lokalt søk for SAT? :: Antall usanne klausuler, samme mål som min-conflicts for CSP.
- Hva betyr det når WalkSAT returnerer failure? :: Enten er setningen unsatisfiable, eller søket trengte flere flips. Det beviser ingenting.
- Hva skjer med max_flips = ∞ og p > 0? :: Finnes en modell, finner WalkSAT den til slutt. Er setningen unsatisfiable, stopper den aldri.
- Hvorfor kan ikke wumpus-agenten bruke WalkSAT til å bevise at en rute er trygg? :: Beviset krever at KB ∧ «ruta er farlig» er unsatisfiable, og det kan ikke WalkSAT vise. Den gir bare en indikasjon.
- Bare C1 (A ∨ B) er usann. Flip A gir 3 sanne klausuler, flip B gir 4. Hvor sannsynlig flipper WalkSAT B med p = 0,5? :: (1 − p) + p · ½ = 0,5 + 0,25 = 0,75.

## 7.6.3 The landscape of random SAT problems
<!-- prio: B | ep: E13 | forelest: nei -->

Noen SAT-problemer er lette, andre er svært tunge. Overraskelsen er at de tunge ligger på et bestemt sted, og det er ikke der det er flest klausuler.

**Underconstrained: få klausuler**

Bokas tilfeldige 3-CNF med 5 symboler og 5 klausuler:

> (¬D ∨ ¬B ∨ C) ∧ (B ∨ ¬A ∨ ¬C) ∧ (¬C ∨ ¬B ∨ E) ∧ (E ∨ ¬D ∨ B) ∧ (B ∨ E ∨ ¬C)

16 av de 32 modellene gjør den sann, så to tilfeldige gjett holder i snitt.

Egen illustrasjon av hvorfor: en klausul med 3 literaler er usann i bare 1/8 av modellene, og (7/8)⁵ ≈ 0,51, altså omtrent halvparten, som passer med 16 av 32.

n-queens er lett for min-conflicts av samme grunn: løsningene ligger tett.

**Overconstrained: mange klausuler**

Mange klausuler per symbol gir trolig ingen modell. Også det er ofte lett, fordi constraints fort fører til en løsning eller en blindvei.

**Terskelen**

CNFₖ(m, n) er en tilfeldig setning med m klausuler over n symboler, k ulike literaler per klausul, tilfeldig fortegn og ingen klausul to ganger.

| m/n for 3-SAT | P(satisfiable) | Hvor vanskelig |
|---|---|---|
| lav | nær 1 | lettest: en modell er lett å gjette |
| rundt 4,3 | stuper fra 1 mot 0 | vanskeligst: ca. 20 ganger tyngre enn ved 3,3 |
| høy | nær 0 | litt tyngre enn lav, men mye lettere enn ved terskelen |

Tallet 4,3 gjelder n = 50 (bokteksten og fig. 7.19). Litteraturnotene oppgir 4,26. Stupet blir brattere når n vokser, men blir omtrent på samme sted. Ved terskelen er setningene nesten løsbare, så søket må gå dypt før svaret er klart.

**Satisfiability threshold conjecture**

For hver k ≥ 3 finnes et forhold rₖ der P(satisfiable) går mot 1 under rₖ og mot 0 over, når n → ∞. Boka sier at formodningen ikke er bevist, heller ikke for k = 3.

**Fella:** flere klausuler gjør ikke problemet vanskeligere. De vanskeligste ligger ved terskelen.

**Husk:** Tilfeldig 3-SAT går fra nesten alltid til nesten aldri satisfiable rundt m/n ≈ 4,3, og der er problemene vanskeligst.

- Hva er forskjellen på en underconstrained og en overconstrained SAT-setning? :: Under: få klausuler per symbol, mange modeller, lett. Over: mange klausuler per symbol, trolig ingen modell, men også ofte lett.
- Ved hvilket forhold m/n stuper P(satisfiable) for tilfeldig 3-SAT? :: Rundt m/n ≈ 4,3 (bokteksten og fig. 7.19). Litteraturnotene oppgir 4,26.
- Hvor ligger de vanskeligste tilfeldige SAT-problemene, og hvorfor? :: Ved terskelen (≈ 4,3), ca. 20 ganger vanskeligere enn ved 3,3. Under er en modell lett å gjette, over kommer blindveien fort.
- Hva sier satisfiability threshold conjecture? :: Når n → ∞ går P(satisfiable) mot 1 under en fast terskel rₖ og mot 0 over (k ≥ 3). Ikke bevist, heller ikke for k = 3.

## 8.1.1 The language of thought
<!-- prio: C | ep: E14 | forelest: nei -->

Vi har milliarder av sider på vanlig språk. Hvorfor ikke lagre tekst rett i KB-en? Boka gir to grunner til at det ikke går.

**Meningen ligger i situasjonen**

> «Look!»

Noen peker og roper. Du skjønner hva som skjer, men ordet alene sier ingenting. Skal du lagre det i en KB, må du også lagre hele situasjonen det ble sagt i.

**Ord er tvetydige**

Det engelske ordet «spring» kan være årstiden eller en fjær. Når ett ord kan svare til to tanker, kan ikke tankene selv være ord.

**Tenker vi i ord?**

Sapir–Whorf-hypotesen sier at språket du snakker, sterkt former hvordan du forstår verden. Forsøk finner forskjeller, men de er små. Guugu Yimithirr-talere bruker nord og sør i stedet for venstre og høyre, og finner bedre fram i terrenget.

Folk husker ordlyden i en tekst omtrent på gjettenivå (50 %), men innholdet over 90 % riktig. Vi lagrer altså noe annet enn ord.

**Betyr formen noe?**

I formell logikk følger de samme konklusjonene uansett hvordan du skriver kunnskapen. Formen kan likevel endre hvor mange steg utledningen tar. For læring betyr formen mye, fordi den enkleste teorien avhenger av språket den skrives i.

**Husk:** naturlig språk er kontekstavhengig og tvetydig, så FOL låner bare ideene om objekter og relasjoner fra det.

- Hvorfor er naturlig språk dårlig som representasjonsspråk i en KB? :: Meningen avhenger av konteksten («Look!»), og ord er tvetydige («spring»).
- Hva sier Sapir–Whorf-hypotesen? :: At språket vi snakker, sterkt påvirker hvordan vi forstår verden. Boka: forskjellene er målbare, men små.
- Betyr det noe i formell logikk hvordan samme kunnskap representeres? :: Ikke for hva som kan utledes, men for hvor mange steg utledningen tar.

## 8.1.2 Combining the best of formal and natural languages
<!-- prio: B | ep: E14 | forelest: nei | eksamen: 2022 -->

PL er presis, men kjenner bare fakta. Vanlig språk sier mye mer, men er tvetydig. FOL tar det beste fra begge.

**Hva FOL låner fra vanlig språk**

| Setning | Objekter | Relasjoner | Funksjon |
|---|---|---|---|
| «One plus two equals three» | one, two, three, one plus two | equals | plus |
| «Squares neighboring the wumpus are smelly» | wumpus, squares | neighboring, smelly | ingen |

Substantivene blir objekter. Verb og adjektiv blir relasjoner. Smelly er en relasjon med bare ett objekt, en egenskap.

En funksjon er en relasjon med nøyaktig én verdi per input. «One plus two» er et navn på ett bestemt objekt, og «three» er et annet navn på det samme objektet.

Fra PL beholder FOL grunnmuren: semantikken er deklarativ, kompositorisk, uavhengig av kontekst og entydig.

**Hva språket antar om verden**

For PL består verden bare av fakta, som «det er en grop i [1, 2]». FOL ser i tillegg objekter og relasjoner mellom dem. Dette heter språkets ontological commitment.

Hva en agent kan tro om et faktum, heter epistemological commitment. Fig. 8.1 samler fem språk:

| Språk | Verden består av | Agenten kan tro |
|---|---|---|
| Propositional logic | fakta | sann / usann / ukjent |
| First-order logic | fakta, objekter, relasjoner | sann / usann / ukjent |
| Temporal logic | fakta, objekter, relasjoner, tidspunkter | sann / usann / ukjent |
| Probability theory | fakta | degree of belief ∈ [0, 1] |
| Fuzzy logic | fakta med degree of truth ∈ [0, 1] | known interval value |

**Fella: to slags grader**

Degree of truth (fuzzy logic) sier hvor sann en vag påstand er. «Vienna is a large city» kan være sann med grad 0.8.

Degree of belief (sannsynlighet) sier hvor sikker agenten er på et skarpt faktum. Wumpusen er i [1, 3] med sannsynlighet 0.75, selv om den enten er der eller ikke.

**Mer enn FOL**

Higher-order logic lar relasjoner og funksjoner selv være objekter. Da kan du for eksempel definere hva transitiv betyr for alle relasjoner. Den er strengt mer uttrykksfull enn FOL.

**Husk:** PL antar fakta, FOL antar fakta, objekter og relasjoner, og begge gir tre kunnskapstilstander: sann, usann, ukjent.

**På eksamen:** 2022 spurte hva som er PLs største svakhet, og hva FOL innfører. Svaret: PL kjenner bare fakta og har for lite uttrykkskraft. FOL innfører objekter, relasjoner, funksjoner og kvantorene ∀ og ∃.

- Hva er ontological commitment, og hva er den for PL og FOL? :: Hva språket antar at verden består av. PL: fakta. FOL: fakta, objekter og relasjoner.
- Hva er epistemological commitment i PL og FOL? :: Hva agenten kan tro om hvert faktum. I PL og FOL: tror sant, tror usant eller ingen mening (unknown).
- Hva er forskjellen på degree of truth og degree of belief? :: Degree of truth (fuzzy logic): hvor sann en vag påstand er. Degree of belief (sannsynlighet): hvor sikker agenten er på et skarpt faktum.
- Hva er objekter, relasjon og funksjon i «One plus two equals three»? :: Objekter: one, two, three og one plus two. Relasjon: equals. Funksjon: plus.

## 8.3.2 The kinship domain
<!-- prio: A | ep: E14 | forelest: nei | eksamen: 2021 -->

Du vil at KB-en selv skal finne besteforeldre, søsken og tanter. Da holder det å lagre hvem som er forelder til hvem, og noen få regler.

**En liten familie (egen illustrasjon)**

> `Parent(Elizabeth, Charles)`, `Parent(Elizabeth, Anne)`
> `Parent(Charles, William)`, `Parent(Charles, Harry)`
> `Female(Elizabeth)`, `Female(Anne)`

Objektene er personer. Male og Female er unære predikater. Parent, Sibling, Spouse, Husband, Grandparent og Aunt er binære.

Mother og Father er funksjoner, ikke predikater. Grunnen er at hver person har nøyaktig én biologisk mor og én biologisk far.

**Bokas aksiomer**

- `∀m,c Mother(c) = m ⇔ Female(m) ∧ Parent(m, c)`: mora di er forelderen din som er kvinne.
- `∀w,h Husband(h, w) ⇔ Male(h) ∧ Spouse(h, w)`: mannen din er ektefellen din som er mann.
- `∀p,c Parent(p, c) ⇔ Child(c, p)`: forelder og barn er samme forhold sett fra hver sin side.
- `∀g,c Grandparent(g, c) ⇔ ∃p Parent(g, p) ∧ Parent(p, c)`: en besteforelder er forelder til en av foreldrene dine.
- `∀x,y Sibling(x, y) ⇔ x ≠ y ∧ ∃p Parent(p, x) ∧ Parent(p, y)`: et søsken er en annen person med samme forelder.

**Spor reglene på familien**

1. Grandparent(Elizabeth, William): velg p = Charles. Både Parent(Elizabeth, Charles) og Parent(Charles, William) står i KB-en.
2. Sibling(William, Harry): William ≠ Harry, og p = Charles er forelder til begge.
3. Mother(Charles) = Elizabeth: hun er Female og forelder til Charles.
4. Sibling(William, William)? Nei, fordi William ≠ William er usann.

**Fella:** uten x ≠ y i Sibling ville p = Charles gjort William til sitt eget søsken. Alle som har en forelder, blir da sitt eget søsken.

**Fire slags setninger**

| Slags | Hva det er | Eksempel |
|---|---|---|
| Definition | aksiom på formen `∀x,y P(x, y) ⇔ …` | Sibling-regelen |
| Delvis aksiom | sier noe sant uten å definere helt | `∀x Person(x) ⇒ …` og `∀x … ⇒ Person(x)` |
| Fakta | også aksiomer, beskriver én instans | `Male(Jim)`, `Spouse(Jim, Laura)` |
| Theorem | følger av aksiomene | `∀x,y Sibling(x, y) ⇔ Sibling(y, x)` |

Definitions ender til slutt i noen grunnpredikater, som Child og Female. Det settet er ikke unikt: du kunne brukt Parent i stedet for Child.

Person har ingen full definisjon. Ingen vet hvordan `∀x Person(x) ⇔ …` skal fullføres, så du nøyer deg med de delvise aksiomene.

Sibling er symmetrisk fordi begge delene av definisjonen er det. Både x ≠ y og «har samme forelder» betyr det samme om du bytter x og y. Et theorem gir ingen nye konklusjoner. Det sparer bare regnetid, så systemet slipper å utlede det på nytt hver gang.

**Svaret som ikke kommer**

Fra Spouse(Jim, Laura) venter du ¬Spouse(George, Laura). Det følger ikke, selv med Jim ≠ George. Når et ventet svar uteblir, mangler KB-en et aksiom. Boka lar det være en øvelse. Et forslag (eget) er at en person har høyst én ektefelle.

**Lag dine egne**

Samme mønster gir nye definisjoner (egne, ikke fra boka):

- `∀x,y Brother(x, y) ⇔ Male(x) ∧ Sibling(x, y)`
- `∀a,c Aunt(a, c) ⇔ Female(a) ∧ ∃p Sibling(a, p) ∧ Parent(p, c)`

I familien over gir Aunt-regelen Aunt(Anne, William) med p = Charles.

**Husk:** definitions bygger et predikat av andre predikater med ∀ … ⇔; theorems følger av aksiomene og sparer bare regnetid.

**På eksamen:** 2021 ba deg oversette «A niece is a sibling's daughter». Løsningsforslaget: `∀x,y [Niece(x, y) ⇔ ∃z (Sibling(y, z) ∧ Daughter(x, z))]`.

- Skriv «a grandparent is a parent of one's parent» i FOL. :: ∀g,c Grandparent(g, c) ⇔ ∃p Parent(g, p) ∧ Parent(p, c)
- Skriv Sibling-definisjonen i FOL. :: ∀x,y Sibling(x, y) ⇔ x ≠ y ∧ ∃p Parent(p, x) ∧ Parent(p, y)
- Hva går galt hvis x ≠ y mangler i Sibling-definisjonen? :: Alle som har en forelder, blir sitt eget søsken: Sibling(x, x) følger.
- Hvorfor er Mother en funksjon og ikke et predikat i kinship-domenet? :: Hver person har nøyaktig én biologisk mor: ∀m,c Mother(c) = m ⇔ Female(m) ∧ Parent(m, c).
- Er ∀x,y Sibling(x, y) ⇔ Sibling(y, x) et aksiom eller et teorem? :: Et teorem: det følger av Sibling-definisjonen, fordi både x ≠ y og «samme forelder» er symmetriske.
- Skriv «aunt» (søster av en forelder) i FOL. :: ∀a,c Aunt(a, c) ⇔ Female(a) ∧ ∃p Sibling(a, p) ∧ Parent(p, c)

## 8.3.3 Numbers, sets, and lists: addisjon, sets og lists
<!-- prio: C | ep: E14 | forelest: delvis -->

FOL har ingen innebygde tall. Du bygger dem av 0 og successor-funksjonen S: 1 er S(0), 2 er S(S(0)). L6 og L7 dekket NatNum og successor-aksiomene: 0 ≠ S(n), og ulike tall har ulike etterfølgere.

**Addisjon med to regler**

- `∀m NatNum(m) ⇒ +(0, m) = m`: 0 pluss et tall gir tallet.
- `∀m,n NatNum(m) ∧ NatNum(n) ⇒ +(S(m), n) = S(+(m, n))`: flytt én S ut om gangen.

Spor 2 + 1:

1. `+(S(S(0)), S(0))`
2. `S(+(S(0), S(0)))`
3. `S(S(+(0, S(0))))`
4. `S(S(S(0)))`, altså 3.

Induksjonsprinsippet hører også til Peano, men det er second-order og ikke med.

**Syntactic sugar** er en forkortelse som ikke endrer semantikken. Du skriver m + n for +(m, n) og ∀x,y for ∀x ∀y.

**Mengder** bygges som tallene: start med {} og legg til ett element om gangen med Add(x, s). Egen illustrasjon: {A, B} er Add(A, Add(B, {})). Symbolene er {}, Set, ∈, ⊆, ∩, ∪ og Add.

Boka har åtte aksiomer. Fire av dem:

1. En mengde er enten {} eller Add(x, s2) for en mengde s2.
2. Add(x, s) blir aldri {}.
3. `∀x,s x ∈ s ⇔ s = Add(x, s)`: å legge til noe som alt er med, endrer ingenting.
4. To mengder er like når hver er delmengde av den andre.

**Lister** er ordnet og kan ha samme element flere ganger. Vokabularet er fra Lisp: Nil, Cons, Append, First, Rest, List og Find (som ∈ for mengder). [x] er Cons(x, Nil).

**Husk:** [A, B, C] er bare sukker for Cons(A, Cons(B, Cons(C, Nil))).

- Hva er forskjellen på lister og mengder i FOL? :: Lister er ordnet og kan ha samme element flere ganger; mengder har ingen rekkefølge og ingen duplikater.
- Skriv [A, B, C] uten syntactic sugar. :: Cons(A, Cons(B, Cons(C, Nil)))
- Hva er syntactic sugar? :: En forkortelse av standardsyntaksen som ikke endrer semantikken, f.eks. infix m + n for +(m, n).

<!-- usikker: E14 sier «Peano i L6», men L6- og L7-slidene har bare NatNum og de to ≠-aksiomene. Addisjonen står derfor her som kun bok. -->

## 8.3.4 The wumpus world
<!-- prio: B | ep: E14 | forelest: nei -->

I PL trengte wumpus-agenten én brise-regel per rute, og én kopi av hver regel per tidssteg. I FOL blir rutene og tiden argumenter, så én setning dekker alt.

**Fra persept til handling**

Persepter lagres med tidspunkt, ellers vet ikke agenten når den så hva. Tidsstegene er heltall:

> `Percept([Stench, Breeze, Glitter, None, None], 5)`

Handlinger er termer: Turn(Right), Turn(Left), Forward, Shoot, Grab, Climb. Slik finner agenten beste handling:

1. Regelen `∀t,s,b,w,c Percept([s, b, Glitter, w, c], t) ⇒ Glitter(t)` passer med t = 5. Det gir Glitter(5).
2. Refleksregelen `∀t Glitter(t) ⇒ BestAction(Grab, t)` gir BestAction(Grab, 5).
3. ASKVARS(KB, BestAction(a, 5)) svarer {a/Grab}.

**Ruter som lister**

Med navn som Square1,2 måtte du skrive ett ekstra faktum per nabopar, 24 par bare på et 4 × 4-brett (egen utregning). Skriver du rutene som lister [x, y], holder én regel: `Adjacent([x, y], [a, b])` er sann når x = a og y = b ± 1, eller når y = b og x = a ± 1.

Pit er et predikat på ruter, fordi det ikke er noen grunn til å skille gropene fra hverandre. Wumpus er en konstant, fordi det bare finnes én.

**Brisen**

> `∀s,t At(Agent, s, t) ∧ Breeze(t) ⇒ Breezy(s)`

Står agenten i en rute og kjenner brise, er ruten breezy. Breezy har ikke tidsargument, fordi gropene ikke flytter seg. Da holder én setning for hele brettet:

> `∀s Breezy(s) ⇔ ∃r Adjacent(r, s) ∧ Pit(r)`

**Tid**

FOL kan kvantifisere over t. Da trengs ett successor-state axiom per predikat, ikke én kopi per tidssteg:

> `∀t HaveArrow(t + 1) ⇔ (HaveArrow(t) ∧ ¬Action(Shoot, t))`

Skyter agenten ved t = 3, blir HaveArrow(4) usann, og den forblir usann (egen illustrasjon).

| Regler | PL | FOL |
|---|---|---|
| Brise på 4 × 4 | 16, én per rute | 1 |
| HaveArrow | én per tidssteg | 1 |

**Husk:** tid og ruter blir argumenter (t og [x, y]), så én FOL-setning erstatter én PL-setning per rute og tidssteg.

- Hvorfor har Percept-setningen i FOL-wumpus et tidsargument? :: Ellers vet ikke agenten når den så hva. Tidsstegene er heltall: Percept([…], 5).
- KB har Percept([Stench, Breeze, Glitter, None, None], 5) og ∀t Glitter(t) ⇒ BestAction(Grab, t). Hva gir ASKVARS(KB, BestAction(a, 5))? :: {a/Grab}, fordi Glitter(5) følger av persepten.
- Hvorfor skrives rutene som lister [x, y] i stedet for navn som Square1,2? :: Da kan Adjacent defineres med én setning; med navn trengs ett ekstra faktum per nabopar.
- Hvorfor har Breezy(s) ikke noe tidsargument? :: Gropene flytter seg ikke, så en rute som er breezy, er det alltid.
- Skriv brise-regelen for hele wumpus-brettet i FOL. :: ∀s Breezy(s) ⇔ ∃r Adjacent(r, s) ∧ Pit(r). Én setning, mot én per rute i PL.

## 8.4 Knowledge Engineering in First-Order Logic
<!-- prio: C | ep: E14 | forelest: nei -->

Kinship- og wumpus-eksemplene viste ferdige KB-er. Men hvordan lager du en KB fra bunnen av for et nytt domene?

Prosessen heter knowledge engineering. En knowledge engineer setter seg inn i et domene, finner ut hvilke begreper som er viktige, og lager en formell representasjon av objektene og relasjonene der.

Boka skiller mellom to slags KB-er:

| | Special-purpose KB | General-purpose KB |
|---|---|---|
| Domene | tydelig avgrenset | bred menneskelig kunnskap |
| Spørsmål | kjent på forhånd | mange slags, for eksempel til språkforståelse |
| I boka | kap. 8 (kretsen i 8.4.2) | kap. 10 |

**Husk:** knowledge engineering er å bygge en KB; kap. 8 gjør det for et avgrenset domene med kjente spørsmål.

- Hva gjør en knowledge engineer? :: Setter seg inn i et domene, finner de viktige begrepene og lager en formell representasjon av objektene og relasjonene.
- Hva skiller special-purpose og general-purpose KB-er? :: Special-purpose: avgrenset domene og kjente spørsmål (kap. 8). General-purpose: bred menneskelig kunnskap (kap. 10).

## 8.4.1 The knowledge engineering process
<!-- prio: B | ep: E14 | forelest: nei -->

Å bygge en KB ligner på å programmere. Forskjellen er at du skriver hva som er sant, ikke hvordan svaret skal regnes ut. Boka deler arbeidet i sju steg. Eksemplene i parentes er fra wumpus-verdenen.

1. **Identify the questions.** Hva skal KB-en svare på, og hvilke fakta får den for hver probleminstans? (Skal den velge handlinger, eller bare svare på hva som er i hulen?) Steget ligner PEAS.
2. **Assemble the relevant knowledge.** Lær hvordan domenet virker, ofte sammen med eksperter. Det heter knowledge acquisition. Ingenting er formelt ennå.
3. **Decide on a vocabulary** av predikater, funksjoner og konstanter. (Er en grop et objekt eller et predikat på ruter?) Resultatet er domenets ontology.
4. **Encode general knowledge about the domain**, altså aksiomene. Ofte avslører det hull i vokabularet, og da går du tilbake til steg 3.
5. **Encode a description of the problem instance** med enkle atomære setninger, som `Pit([3, 1])`.
6. **Pose queries and get answers.** Inferensen gjør jobben, så du slipper å skrive en egen løsningsalgoritme.
7. **Debug and evaluate the knowledge base.**

Huskeregel, sju S-er: Spørsmål, Samle, Symboler, Skriv generelt, Skriv instansen, Spør, Sjekk.

**Manglende aksiom: kjeden stopper**

Si at KB-en bare har `∀s Smelly(s) ⇒ Adjacent(Home(Wumpus), s)`, ikke ⇔. En rute uten stank gir da ingen slutning. Agenten kan derfor aldri bevise at wumpusen ikke er et sted. Du ser feilen der slutningskjeden stopper uventet.

**Feil aksiom: usant om verden**

`∀x NumOfLegs(x, 4) ⇒ Mammal(x)` er usant for krypdyr og bord. Det ser du uten å lese resten av KB-en. En programfeil som `offset = position + 1` kan du ikke avgjøre uten å kjenne koden rundt.

Når du ikke finner flere feil, bør du måle KB-en med et testsett av spørsmål. Uten måling er det lett å tro at jobben er ferdig.

**Husk:** vokabularet fra steg 3 er domenets ontology, og den sier hva som finnes, ikke hvordan tingene henger sammen.

- Hva er steg 1 i knowledge engineering, og hva ligner det på? :: Identify the questions: hvilke spørsmål KB-en skal svare på og hvilke fakta som gis. Ligner PEAS.
- Hva kalles vokabularet av predikater, funksjoner og konstanter fra steg 3? :: Domenets ontology. Den sier hva som finnes, ikke hvilke egenskaper og relasjoner tingene har.
- Hvordan oppdager du et manglende aksiom når du debugger en KB? :: Slutningskjeden stopper uventet: et spørsmål du venter svar på, kan ikke besvares.
- Hvorfor er et feil aksiom lettere å finne enn en programfeil? :: Det er usant om verden (f.eks. ∀x NumOfLegs(x, 4) ⇒ Mammal(x)) og kan sjekkes uten resten av KB-en.

## 8.4.2 The electronic circuits domain
<!-- prio: B | ep: E14 | forelest: nei -->

Boka følger de sju stegene for en ekte krets: en one-bit full adder C1. Den legger sammen to bit og en mente (carry inn), og gir sum og carry ut.

**Kretsen**

| Port | Type | Innganger | Utgangen går til |
|---|---|---|---|
| X1 | XOR | i1, i2 | X2 og A2 |
| X2 | XOR | X1, i3 | sum |
| A1 | AND | i1, i2 | O1 |
| A2 | AND | i3, X1 | O1 |
| O1 | OR | A2, A1 | carry |

**Vokabularet**

- `Gate(X1)` og `Type(X1) = XOR`. Type er en funksjon, fordi en port har nøyaktig én type.
- Terminalene er `In(n, g)` og `Out(n, g)`, koblet med for eksempel `Connected(Out(1, X1), In(1, X2))`. Ledningene selv er ikke med. Skal du feilsøke defekte kretser, må de med.
- Signalverdiene 1 og 0 er objekter, og `Signal(t)` er en funksjon. Da kan du spørre hvilken verdi en terminal har. Med et predikat On(t) går ikke det like lett.

**Aksiomene**

Det holder med ett aksiom per porttype. For XOR: `∀g Gate(g) ∧ Type(g) = XOR ⇒ (Signal(Out(1, g)) = 1 ⇔ Signal(In(1, g)) ≠ Signal(In(2, g)))`. Få og korte regler er et tegn på en god ontologi.

**Spørsmålet**

«Hvilke innganger gir sum 0 og carry 1?» stilles med ∃i1, i2, i3. ASKVARS gir tre bindinger: (1, 1, 0), (1, 0, 1) og (0, 1, 1). Sjekk (1, 1, 0) for hånd:

1. X1 = 1 XOR 1 = 0.
2. X2 = X1 XOR i3 = 0 XOR 0 = 0. Det er sum.
3. A1 = 1 AND 1 = 1.
4. A2 = i3 AND X1 = 0 AND 0 = 0.
5. O1 = A2 OR A1 = 0 OR 1 = 1. Det er carry.

Spør du etter alle terminalverdiene, får du hele input–output-tabellen. Det heter circuit verification.

**Fella: glemt 1 ≠ 0**

Uten aksiomet 1 ≠ 0 kan systemet bare bevise utgangene for 000 og 110. For X1 med innganger 1 og 0 blir XOR-aksiomet `Signal(Out(1, X1)) = 1 ⇔ 1 ≠ 0`, og det kan ikke avgjøres. 000 og 110 er nettopp de to inngangene der begge XOR-portene får like signaler.

**Husk:** Signal er en funksjon til objektene 1 og 0, og KB-en må vite at 1 ≠ 0.

- Hvorfor er Type en funksjon i kretsdomenet? :: Hver port har nøyaktig én type, f.eks. Type(X1) = XOR.
- Hvorfor brukes objektene 1 og 0 med funksjonen Signal(t) i stedet for et predikat On(t)? :: Da kan du spørre etter verdiene, f.eks. alle mulige signaler på utgangene til C1.
- Hvilke innganger gir sum 0 og carry 1 i full-adderen? :: (1, 1, 0), (1, 0, 1) og (0, 1, 1).
- Hva skjer hvis KB-en for kretsen mangler aksiomet 1 ≠ 0? :: Den kan bare bevise utgangene for 000 og 110, fordi XOR-aksiomet stopper på «1 ≠ 0».

## 9.2.1 Unification: occur check
<!-- prio: A | ep: E15 | forelest: delvis | eksamen: 2016, 2024 -->

UNIFY gjør to uttrykk like ved å binde variabler. Av og til ser en binding ut til å virke, men er umulig. Denne seksjonen handler om sjekken som stopper den.

L7 gikk gjennom UNIFY (Fig. 9.1), MGU og standardizing apart. Occur check står bare i boka.

**Et par som ikke går**

> `S(x)` og `S(S(x))`

S passer med S. Da gjenstår x mot S(x). Bindingen x/S(x) ville sagt at x er lik S(x), og da også lik S(S(x)), S(S(S(x))) og så videre. Ingen endelig term er lik seg selv med én S til rundt.

Dette heter **occur check**. Før UNIFY binder en variabel til en term, sjekker den om variabelen finnes inni termen. Gjør den det, er svaret failure.

**Hvor sjekken står i UNIFY-VAR**

UNIFY-VAR(var, x, θ) har fire linjer, i denne rekkefølgen:

1. Er var allerede bundet, {var/val} i θ? Fortsett med UNIFY(val, x, θ).
2. Er x en bundet variabel, {x/val} i θ? Fortsett med UNIFY(var, val, θ).
3. OCCUR-CHECK(var, x): finnes var inni x? Da failure.
4. Ellers legg {var/x} til θ.

Sjekken kommer altså etter de to oppslagene i θ. Det betyr noe, fordi en variabel kan gjemme seg bak en binding som allerede står i θ.

**Håndsporing: UNIFY(Knows(x, x), Knows(y, Mother(y)))** (egen illustrasjon)

1. Knows ~ Knows: like. Argumentene tas parvis.
2. x ~ y: x er ubundet, og y inneholder ikke x. θ = {x/y}.
3. x ~ Mother(y): x er bundet til y (test 1), så UNIFY(y, Mother(y), θ).
4. y ~ Mother(y): y er ubundet, men y finnes i Mother(y). Occur check gir failure.

Uten sjekken hadde θ blitt {x/y, y/Mother(y)}. Da måtte y vært Mother(Mother(Mother(…))), og en slik term finnes ikke. En motor som godtar det, kan utlede ting som ikke følger av KB. Det kalles unsound inferences.

Sammenlign med bokas eksempel Knows(John, x) og Knows(y, Mother(y)). Der gir første par y/John. Så er x/Mother(y) lov, fordi x ikke finnes i Mother(y). Svaret er {y/John, x/Mother(John)}.

**Prisen**

Occur check må lete gjennom termen hver gang en variabel bindes. Det gjør hele UNIFY kvadratisk i størrelsen på uttrykkene.

Mange logic programming-systemer dropper derfor sjekken og overlater til brukeren å unngå unsound inferences. Andre systemer bruker mer kompliserte algoritmer som klarer det i lineær tid.

**Fella:** I steg 3 står x mot Mother(y), og x synes ikke inni Mother(y). Men x er bundet til y, og y er der. Følg alltid bindingene i θ før du sier at sjekken går gjennom.

**Husk:** En variabel kan aldri bindes til en term som inneholder den selv.

**På eksamen:** 2024 oppgave 17 hadde et alternativ med x/F(x, A), som er feil fordi x står inni sin egen binding. 2016 oppgave 2c spurte når ∀x∃y P(x, y) → ∃q P(q, q) blir behandlet som valid. Svaret var 3: en motor som bruker Skolem-konstant i stedet for Skolem-funksjon. Med riktig Skolem-funksjon må x = F(x), og occurs check stopper det.

- Hva er occur check i UNIFY? :: Før en variabel bindes til en sammensatt term, sjekkes om variabelen finnes inni termen. Gjør den det, gir UNIFY failure.
- UNIFY(S(x), S(S(x)))? :: failure: x måtte bindes til S(x), og x finnes i S(x).
- UNIFY(Knows(x, x), Knows(y, Mother(y)))? :: failure: først x/y. Så blir x ~ Mother(y) til y ~ Mother(y), og y finnes i Mother(y).
- Hvilken kompleksitet gir occur check UNIFY? :: Kvadratisk i størrelsen på uttrykkene som unifiseres.
- Hva gjør mange logic programming-systemer med occur check? :: Dropper den og overlater til brukeren å unngå unsound inferences.
- Hvor i UNIFY-VAR (Fig. 9.1) står OCCUR-CHECK? :: Som tredje test: etter oppslagene av {var/val} og {x/val} i θ, og før {var/x} legges til.
- UNIFY(Knows(John, x), Knows(y, Mother(y)))? :: {y/John, x/Mother(John)}. x finnes ikke i Mother(y), så occur check stopper ingenting.

## 9.2.2 Storage and retrieval
<!-- prio: C | ep: E15 | forelest: nei -->

En KB med millioner av fakta må finne de riktige raskt. TELL, ASK og ASKVARS bygger på to enkle funksjoner: STORE(s) lagrer setningen s, og FETCH(q) gir alle unifiers der spørsmålet q unifiserer med en setning i KB.

Enklest er én lang liste der q unifiseres med alt. Det virker, men er tregt.

**Predicate indexing** legger alle Knows-fakta i én bøtte og alle Brother-fakta i en annen, i en hashtabell. Det hjelper lite når ett predikat har millioner av fakta. Da må Employs(x, Richard) skanne hele Employs-bøtta. Løsningen er å indeksere på predikat + argument i tillegg.

**Subsumption lattice:** en fakta kan lagres under alle spørsmål den svarer på. Employs(IBM, Richard) svarer på Employs(x, y), Employs(x, Richard), Employs(IBM, y) og seg selv. Gitteret ordner spørsmålene fra det mest generelle, Employs(x, y), øverst til faktaen selv nederst. Hvert barn får du fra forelderen med én substitusjon.

Den høyeste noden som ligger under to noder (høyeste felles etterkommer), får du med MGU-en deres. Employs(x, Richard) og Employs(IBM, y) gir {x/IBM, y/Richard}, altså Employs(IBM, Richard). Employs(John, John) gir fem noder, fordi Employs(x, x) også kommer med.

For n argumenter har gitteret O(2ⁿ) noder. Derfor lager systemer ofte bare noen indekser, for eksempel predikat + ett argument, eller lærer hvilke som lønner seg.

**Husk:** FETCH blir rask med indekser, men et fullt subsumption lattice har O(2ⁿ) noder.

- Hva returnerer FETCH(q)? :: Alle unifiers der spørsmålet q unifiserer med en setning i KB.
- Når holder ikke predicate indexing? :: Når ett predikat har svært mange fakta, f.eks. Employs(x, Richard) blant millioner av Employs-fakta.
- Hvor mange noder har subsumption lattice for en fakta med n argumenter? :: O(2ⁿ). Derfor indekseres ofte bare predikat + ett argument.

## 9.3 Forward Chaining: fra PL til FOL
<!-- prio: C | ep: E15 | forelest: delvis -->

I kap. 7 brukte du forward chaining på proposisjonelle definite clauses: start i faktaene og fyr av hver regel der alle premissene er kjent. Kap. 9 gjør det samme i FOL. Det nye er at premissene matches med unification, ikke med likhet.

L7 dekket 9.3.1: first-order definite clauses, crime-KB-en og at GMP er sound og complete for slike KB-er.

> `American(x) ∧ Weapon(y) ∧ Sells(x, y, z) ∧ Hostile(z) ⇒ Criminal(x)`

Prisen er at bare definite clauses er lov: et atom alene, eller en konjunksjon av positive atomer ⇒ ett positivt atom. En setning som `Rich(x) ∨ Lucky(x)` har to positive atomer og faller utenfor (egen illustrasjon). Regler på formen Antecedent ⇒ Consequent dekker likevel mange virkelige systemer.

**Husk:** FOL forward chaining er PL forward chaining med unification, og den virker bare på definite clauses.

- Hva er FOL forward chaining en utvidelse av? :: Forward chaining for proposisjonelle definite clauses fra kap. 7.5, løftet til first-order definite clauses.
- Hvilke setninger kan FOL forward chaining ikke bruke? :: Setninger som ikke kan skrives som definite clauses, f.eks. en disjunksjon av to positive atomer.

## 9.3.2 A simple forward-chaining algorithm
<!-- prio: A | ep: E15 | forelest: nei | eksamen: 2023, 2024 -->

Forward chaining starter i det du vet og utleder alt som følger, runde for runde. Den stopper når svaret dukker opp eller ingenting nytt kommer. Algoritmen heter FOL-FC-ASK (Fig. 9.3).

**Eksempelet** (egen illustrasjon)

| | Setning |
|---|---|
| Fakta | `Parent(Elizabeth, Charles)`, `Parent(Charles, William)`, `Female(Elizabeth)` |
| R1 | `Parent(x, y) ∧ Parent(y, z) ⇒ Grandparent(x, z)` |
| R2 | `Grandparent(g, c) ∧ Female(g) ⇒ Grandmother(g, c)` |
| Spørsmål | `Grandmother(Elizabeth, w)`: hvem er Elizabeth bestemor til? |

**Én runde**

1. Gi hver regel nye variabelnavn (standardizing apart).
2. Finn hver θ som gjør alle premissene like med fakta som allerede står i KB.
3. Lag konklusjonen q′ = SUBST(θ, q).
4. Er q′ ny, legg den i lista new. Unifiserer q′ med spørsmålet α, returner φ = UNIFY(q′, α).
5. Når alle regler er prøvd, legg new inn i KB. Var new tom, svar false.

**Håndsporing**

1. Runde 1, R1: {x/Elizabeth, y/Charles, z/William} passer begge Parent-faktaene. Ny: Grandparent(Elizabeth, William).
2. Runde 1, R2: ingen Grandparent-fakta står i KB ennå. Den nye ligger bare i new. Ingenting.
3. Slutt på runde 1: Grandparent(Elizabeth, William) legges i KB.
4. Runde 2, R2: {g/Elizabeth, c/William} gir Grandmother(Elizabeth, William).
5. Den unifiserer med spørsmålet: φ = {w/William}. Svaret er William.

Uten spørsmål fortsetter algoritmen. Runde 3 gir ingenting nytt.

**Fixed point og renaming**

En runde uten en eneste ny fakta betyr at KB er et **fixed point**. Alt som følger, er allerede utledet, og svaret er false.

En fakta teller ikke som ny hvis den bare er en **renaming** av en kjent fakta, altså lik bortsett fra variabelnavnene. Likes(x, IceCream) og Likes(y, IceCream) sier begge «alle liker is».

**Sound, complete og stopper den?**

FOL-FC-ASK er sound, fordi hvert steg er Generalized Modus Ponens. Den er complete for KB-er med definite clauses: hvert svar som følger, blir funnet.

For **Datalog**, definite clauses uten funksjonssymboler, stopper den alltid. Med p predikater, n konstanter og største aritet k finnes høyst p · nᵏ ulike ground facts. I eksempelet er det 4 predikater, 3 konstanter og aritet 2, så høyst 4 · 3² = 36.

Med funksjonssymboler kan den lage uendelig mange fakta. Peano-regelen NatNum(n) ⇒ NatNum(S(n)) gir NatNum(S(0)), NatNum(S(S(0))) og så videre. Følger svaret, finner FC det (Herbrand). Følger det ikke, kan den gå for alltid. Entailment er semidecidable.

**Fella:** En fakta fra runde t kan brukes først i runde t + 1. R2 kunne ikke bruke Grandparent(Elizabeth, William) i samme runde som den ble utledet.

**Husk:** Nye fakta kan brukes først i neste runde, og en runde uten nye fakta er et fixed point.

**På eksamen:** 2023 oppgave 1.9 spurte hvilken representasjon og slutningsregel FC og BC bruker: Horn clauses og Modus Ponens, i FOL definite clauses og Generalized Modus Ponens. I 2024 oppgave 2 var «Generalized Modus Ponens is complete for definite clauses» en sann påstand.

- Når regnes en utledet fakta ikke som ny i forward chaining? :: Når den bare er en renaming av en kjent fakta, som Likes(x, IceCream) og Likes(y, IceCream).
- Hva er et fixed point i forward chaining? :: En KB der en hel runde ikke gir noen nye fakta. Da er alt som følger, utledet.
- Er FOL-FC-ASK sound og complete? :: Sound, fordi hvert steg er GMP. Complete for KB-er med definite clauses.
- Hvorfor stopper forward chaining alltid på en Datalog-KB? :: Uten funksjonssymboler finnes høyst p · nᵏ ground facts (p predikater, n konstanter, største aritet k).
- Når kan FOL-FC-ASK gå for alltid? :: Når KB har funksjonssymboler og svaret ikke følger, f.eks. Peano-regelen som gir NatNum(S(0)), NatNum(S(S(0))), …
- Fakta Parent(E, C), Parent(C, W), Female(E); R1 Parent(x, y) ∧ Parent(y, z) ⇒ Grandparent(x, z); R2 Grandparent(g, c) ∧ Female(g) ⇒ Grandmother(g, c). I hvilken runde utleder FC Grandmother(E, W)? :: Runde 2. Runde 1 gir Grandparent(E, W), og R2 kan bruke den først runden etter.

<!-- usikker: Fig. 9.3 sier at q′ ikke skal unifisere med en setning i KB eller new, mens teksten sier at bare en renaming ikke er ny. Blokken og kortene følger teksten, slik E15 gjør. -->

## 9.3.3 Efficient forward chaining
<!-- prio: B | ep: E15 | forelest: nei -->

FOL-FC-ASK fra 9.3.2 er lett å forstå, men treg. Den har tre problemer, og hvert har sin løsning.

| Problem | Løsning |
|---|---|
| hver regel matches mot hver fakta | god conjunct ordering |
| hver regel sjekkes på nytt hver runde | incremental FC og Rete |
| den utleder fakta målet ikke trenger | backward chaining eller magic sets |

**1. Matching: rekkefølgen teller**

Ta regelen Missile(x) ∧ Owns(Nono, x) ⇒ Sells(West, x, Nono). Eier Nono mange ting og har få missiler, lønner det seg å finne missilene først. Det er MRV fra CSP (kap. 5): ta konjunktet med færrest kandidater først.

Å finne den beste rekkefølgen kalles **conjunct ordering**. Optimal rekkefølge er NP-hard, men MRV virker godt i praksis.

Matching er faktisk et CSP: hvert konjunkt er en constraint på variablene sine. Kartfargingen av Australia kan skrives som én definite clause, `Diff(wa, nt) ∧ Diff(wa, sa) ∧ … ⇒ Colorable()`, med fakta som Diff(Red, Blue). Colorable() følger bare hvis kartet kan farges, så matching er NP-hard.

Det går likevel bra, fordi ekte regler er små. **Data complexity**, kostnaden målt i antall fakta, er polynomisk. Danner variablene i regelen et tre, matches den i lineær tid, som tre-strukturerte CSP-er.

**2. Incremental forward chaining**

En fakta som er ny i runde t, må bygge på minst én fakta som var ny i runde t − 1. Ellers kunne den vært utledet en runde tidligere. Sjekk derfor bare regler med et premiss som unifiserer med en fakta fra forrige runde.

I Grandmother-eksempelet fra 9.3.2 var Grandparent(Elizabeth, William) den eneste nye faktaen etter runde 1. Bare R2 har et Grandparent-premiss, så bare R2 sjekkes i runde 2.

**Rete-algoritmen** bygger et dataflytnettverk med én node per premisslitteral. Den husker delvise matcher mellom rundene, så de ikke bygges på nytt. Rete er en nøkkeldel i production systems, noen av de første forward chaining-systemene i utstrakt bruk.

**3. Irrelevante fakta**

FC utleder alt som følger, også det målet ikke trenger. Du kan bruke backward chaining (9.4), begrense FC til noen utvalgte regler, eller bruke **magic sets**. Da skrives regelen om med et ekstra konjunkt ut fra målet:

> `Magic(x) ∧ American(x) ∧ Weapon(y) ∧ Sells(x, y, z) ∧ Hostile(z) ⇒ Criminal(x)`

Legg så til faktaen Magic(West). Selv med millioner av amerikanere i KB vurderes da bare West.

**Husk:** Matching er et CSP og NP-hard; incremental FC og Rete sparer gjentatt arbeid, og magic sets kutter irrelevante fakta.

- Hvilken heuristikk foreslår boka for conjunct ordering i forward chaining? :: MRV fra CSP: match først konjunktet med færrest kandidater, f.eks. Missile(x) før Owns(Nono, x).
- Hva er incremental forward chaining? :: I runde t sjekkes bare regler med et premiss som unifiserer med en fakta utledet i runde t − 1.
- Hva gjør Rete-algoritmen? :: Bygger et dataflytnettverk av premisslitteralene og tar vare på delvise matcher, så de ikke bygges på nytt hver runde.
- Hvordan gjør magic sets forward chaining målrettet? :: Reglene skrives om med et ekstra konjunkt Magic(x) ut fra målet, og Magic(West) legges til, så bare relevante bindinger vurderes.
- Hvorfor er matching av en regel mot faktaene NP-hard? :: Matching er et CSP. Kartfarging kan skrives som én definite clause Diff(wa, nt) ∧ … ⇒ Colorable().

## 9.4 Backward Chaining
<!-- prio: C | ep: E15 | forelest: nei -->

Forward chaining utleder alt den kan og håper svaret kommer. Backward chaining gjør det motsatte. Den starter i spørsmålet og spør: hva må være sant for at dette skal holde?

Ta målet Criminal(West) i crime-KB-en. BC finner regelen med Criminal(x) som konklusjon og får fire delmål: American(West), Weapon(y), Sells(West, y, z) og Hostile(z). Slik fortsetter den bakover gjennom reglene til hvert delmål er en kjent fakta.

Backward chaining er den andre store familien av inferensalgoritmer for definite clauses. Den bruker altså de samme setningene som forward chaining.

| | Forward chaining | Backward chaining |
|---|---|---|
| Starter i | faktaene | målet |
| Retning | fra fakta mot mål | fra mål mot fakta |
| Kalles | datadrevet | måldrevet |

**Husk:** BC er måldrevet (fra mål til fakta), FC er datadrevet (fra fakta til mål).

- I hvilken retning jobber backward chaining? :: Fra målet bakover gjennom reglene til kjente fakta som støtter beviset.
- Hvilke setninger bruker backward chaining i kap. 9? :: Definite clauses, som forward chaining.

## 9.4.1 A backward-chaining algorithm
<!-- prio: A | ep: E15 | forelest: nei | eksamen: 2016, 2023 -->

Backward chaining beviser et mål slik: finn en regel som konkluderer med målet, og bevis premissene i regelen, ett om gangen. Algoritmen heter FOL-BC-ASK (Fig. 9.6).

**AND/OR-søk**

**OR:** målet kan bevises av hvilken som helst regel der konklusjonen (rhs, høyresiden) unifiserer med målet. Én regel som virker, holder.

**AND:** alle konjunktene i den regelens premiss (lhs, venstresiden) må bevises.

En fakta som American(West) er en regel med tom lhs. Den beviser et mål den unifiserer med direkte, uten nye delmål.

**θ føres videre**

FOL-BC-AND beviser konjunktene fra venstre mot høyre. Før hvert nytt konjunkt setter den inn bindingene den har fått så langt: SUBST(θ, first). Delmålene blir derfor mer konkrete underveis.

**Håndsporing** (KB-en fra 9.3.2, egen illustrasjon)

Mål: Grandmother(Elizabeth, w).

1. R2 har konklusjonen Grandmother(g, c). UNIFY gir {g/Elizabeth, c/w}. Delmål: Grandparent(Elizabeth, w) og Female(Elizabeth).
2. Grandparent(Elizabeth, w): R1 har konklusjonen Grandparent(x, z). UNIFY gir {x/Elizabeth, z/w}. Delmål: Parent(Elizabeth, y) og Parent(y, w).
3. Parent(Elizabeth, y) unifiserer med faktaen Parent(Elizabeth, Charles): {y/Charles}.
4. Neste delmål er SUBST(θ, Parent(y, w)) = Parent(Charles, w). Det unifiserer med Parent(Charles, William): {w/William}.
5. Female(Elizabeth) er en fakta. Alle delmål er bevist, og svaret er {w/William}.

**Generator**

Et mål med variabler kan bevises på flere måter. Derfor er FOL-BC-ASK en generator: den gir én θ om gangen. Person(x) kan gi {x/John} og så {x/Richard}.

**Dybde først, med løkker**

Søket er dybde først fra venstre, så minnet er lineært i bevisets størrelse. Til gjengjeld arver BC problemene til dybde-først-søk: gjentatte tilstander og ufullstendighet.

Eksempel (egen illustrasjon). Legg til to regler:

- R3: `Parent(x, y) ⇒ Ancestor(x, y)`
- R4: `Ancestor(x, y) ∧ Ancestor(y, z) ⇒ Ancestor(x, z)`

Målet Ancestor(William, Elizabeth) følger ikke. BC prøver:

1. R3: delmålet Parent(William, Elizabeth) finnes ikke. Feiler.
2. R4: første delmål er Ancestor(William, y).
3. Ancestor(William, y): R3 feiler igjen, så R4 gir delmålet Ancestor(William, y′).
4. Samme mønster gjentas uten ende. BC svarer aldri.

FC på samme KB gir Ancestor(Elizabeth, Charles) og Ancestor(Charles, William) i runde 1, Ancestor(Elizabeth, William) i runde 2 og ingenting i runde 3. Den stopper og svarer false.

**Fella:** Generalized Modus Ponens er complete for definite clauses, og det er FC også. BC bruker samme regel, men er ikke complete, fordi dybde-først-søket kan gå i løkke.

**Husk:** BC er dybde-først AND/OR-søk som fører θ videre til neste delmål; lite minne, men løkker gjør den ufullstendig.

**På eksamen:** 2016 oppgave 2d ga en beskrivelse av BC som sant/usant: still spørsmålet som mål, finn klausulene der høyresiden unifiserer med målet, og bevis hvert konjunkt på venstresiden mens substitusjonene samles opp. Den var sann. 2023 oppgave 1.9 spurte hvilken representasjon og slutningsregel FC og BC bruker (definite clauses og GMP).

- Hva er OR- og AND-delen i FOL-BC-ASK? :: OR: hvilken som helst regel der konklusjonen unifiserer med målet. AND: alle konjunktene i den regelens premiss må bevises.
- Hvorfor er FOL-BC-ASK en generator? :: Et mål med variabler kan bevises på flere måter; den gir én θ om gangen, f.eks. {x/John} og så {x/Richard}.
- Hvordan behandler FOL-BC-ASK en fakta som American(West)? :: Som en regel med tom venstreside (lhs), som beviser et mål den unifiserer med direkte.
- Backward chaining: delmålene er Parent(Elizabeth, y) og Parent(y, w), og det første gir {y/Charles}. Hva blir det andre delmålet? :: Parent(Charles, w): θ fra delmålene før brukes på neste konjunkt (SUBST(θ, first)).
- Hvilken søkestrategi er backward chaining, og hvor mye minne bruker den? :: Dybde først fra venstre; minnet er lineært i bevisets størrelse.
- Hvorfor er backward chaining ikke complete? :: Dybde-først-søket kan gå i løkke, f.eks. gir Ancestor(x, y) ∧ Ancestor(y, z) ⇒ Ancestor(x, z) nye Ancestor-delmål uten ende.

## 10.2.3 Objects: Things and stuff
<!-- prio: C | ep: E17 | forelest: nei | merk: forsikring: Canvas tar den ut, L12 sier «§10.2» uten unntak -->

Noe i verden kan telles, og noe kan ikke det. Du kan si «ett jordsvin», men ikke «ett smør». Logikken må få med seg den forskjellen.

**Kutt-testen**

Del et jordsvin (aardvark) i to, og du har ikke to jordsvin. Del en klump smør i to, og du har to klumper smør. Smør er stuff, jordsvinet er en thing.

Språket skiller det samme: count nouns (aardvark, hole, theorem) og mass nouns (butter, water, energy).

**Smør i logikk**

En konkret klump, Butter₃, er et objekt. Butter er kategorien. Hver del av smør er smør:

> `b ∈ Butter ∧ PartOf(p, b) ⇒ p ∈ Butter`

**Intrinsic og extrinsic**

Intrinsic egenskaper hører til selve stoffet og overlever deling: tetthet, kokepunkt, smak, farge og eierskap. Extrinsic egenskaper gjør det ikke: vekt, lengde og form.

Regelen: en kategori som bare er definert med intrinsic egenskaper, er en substance (mass noun). Har definisjonen minst én extrinsic egenskap, er den en count noun.

| Kategori | Definert med | Stuff? |
|---|---|---|
| UnsaltedButter | smør uten salt (intrinsic) | ja |
| PoundOfButter | smør som veier ett pund (extrinsic) | nei, et halvt pund er ikke et pund |

Stuff og Thing er de mest generelle kategoriene for henholdsvis stoff og objekter.

**Husk:** Stuff tåler deling fordi definisjonen bare bruker intrinsic egenskaper. Én extrinsic egenskap (vekt, form) gjør kategorien til en count noun. Kutt-testen: gir halvdelen mer av det samme? Da er det stuff.

- Hva skiller stuff fra things? :: Deler du stuff (smør), får du mer av samme stuff. Deler du en thing (et jordsvin), får du ikke to av den.
- Hva er forskjellen på intrinsic og extrinsic egenskaper? :: Intrinsic (tetthet, smak, farge) overlever deling av stoffet. Extrinsic (vekt, lengde, form) gjør det ikke.
- Er PoundOfButter en kategori av stuff? :: Nei. Definisjonen bruker vekt, som er extrinsic. Et halvt pund smør er ikke et pund smør.

## 10.3.2 Fluents and objects
<!-- prio: C | ep: E17 | forelest: nei -->

Hvordan sier du i logikk at USA har hatt ulike presidenter? Det ser lett ut, men en term kan bare peke på én ting.

**Objekter som hendelser**

I event calculus kan et fysisk objekt sees som en generalisert hendelse: en bit av rom og tid. USA er en «hendelse» som startet i 1776 med 13 stater og fortsatt pågår med 50. Egenskaper som endrer seg, beskrives med fluents, for eksempel `Population(USA)`.

**Problemet med presidenten**

En term peker på nøyaktig ett objekt i en modell. Derfor kan ikke `President(USA)` bety Washington det ene året og Adams det neste.

**Løsningen: ett objekt satt sammen av biter**

`President(USA)` er ett objekt laget av ulike personer i ulike perioder:

| Periode | Denne biten av President(USA) er |
|---|---|
| 1789–1797 | George Washington |
| 1797–1801 | John Adams |
| … | og så videre |

At Washington var president hele 1790, skrives slik:

> `T(Equals(President(USA), GeorgeWashington), Begin(AD1790), End(AD1790))`

Les det som: fluenten «President(USA) er lik GeorgeWashington» er sann fra starten til slutten av 1790.

**Hvorfor Equals og ikke =**

1. `=` er et predikat, og et predikat kan ikke stå som argument til T. Equals er et funksjonssymbol.
2. Logisk identitet kan ikke endre seg over tid. Det som er likt, er delene av de to objektene som ligger i 1790.

Fella: ikke bland denne Equals med Allens `Equals(i, j)` i 10.3.1, som sier at to intervaller har samme start og slutt.

**Husk:** President(USA) er ett objekt laget av ulike personer i ulike perioder, og T(Equals(…), …) sier hvem det var i et gitt intervall.

- Hvordan kan et fysisk objekt som USA behandles i event calculus? :: Som en generalisert hendelse, en bit av rom og tid, med fluents som Population(USA) for egenskaper som endrer seg.
- Hvorfor kan ikke President(USA) peke på ulike personer til ulike tider? :: En term peker på nøyaktig ett objekt i en modell. President(USA) er derfor ett objekt satt sammen av ulike personer over tid.
- Hvorfor brukes Equals og ikke = i T(Equals(President(USA), GeorgeWashington), …)? :: Et predikat kan ikke være argument til T, og logisk identitet kan ikke endre seg over tid.

## 11.3 Heuristics for Planning: set cover og utvalgte preconditions
<!-- prio: B | ep: E18 | forelest: delvis -->

En planlegger trenger en heuristikk for å søke raskt. Fordi handlingene står som action schemas, kan den lage heuristikken selv ved å fjerne regler fra skjemaene. L11 dekket ignore preconditions og ignore delete lists. Her er resten.

**Ignore preconditions: tell mål, nesten**

Uten preconditions kan hver handling brukes i hver tilstand. Da er antall uoppfylte mål et godt anslag. Det er likevel ikke helt riktig, av to grunner:

1. Én handling kan oppnå flere mål. Da teller du for mye.
2. En handling kan oppheve effekten av en annen.

**Set cover**

Boka tar hensyn til (1) og ser bort fra (2). Fjern alle preconditions og alle effekter unntatt mållitteralene. Finn så færrest handlinger der unionen av effektene dekker målet. Dette er **set-cover-problemet**, og det er NP-hard.

Eksempel (egen illustrasjon). Målet er g1–g6.

| Handling | Gir |
|---|---|
| a1 | g1, g2, g3, g4 |
| a2 | g1, g2, g5 |
| a3 | g3, g4, g6 |

Å telle uoppfylte mål gir 6. Minste dekning er a2 + a3, altså 2.

**Greedy set cover** tar alltid handlingen som dekker flest manglende mål:

1. a1 dekker 4. Igjen: g5 og g6.
2. a2 dekker g5. Igjen: g6.
3. a3 dekker g6. Ferdig etter 3 handlinger.

Greedy svarer 3, men minimum er 2. Greedy kommer alltid innenfor en faktor log n av minimum, der n er antall mållitteraler. Den kan altså overvurdere, så den er ikke admissible.

**Fjern bare noen preconditions**

I 8-puzzle har Slide dette skjemaet:

> `Slide(t, s1, s2)`, PRECOND: `On(t, s1) ∧ Tile(t) ∧ Blank(s2) ∧ Adjacent(s1, s2)`

| Du fjerner | Brikken kan da | Heuristikk |
|---|---|---|
| Blank(s2) og Adjacent(s1, s2) | flytte rett til målruta | misplaced tiles |
| bare Blank(s2) | flytte til en nabo, også en opptatt rute | Manhattan distance |

Slike heuristikker kan lages automatisk fra action schemas. Det går fordi planlegging bruker factored representation. Et søkeproblem med atomic tilstander har ingen skjemaer å fjerne noe fra.

**Fella:** Begge fjernet gir misplaced tiles. Bare Blank(s2) fjernet gir Manhattan distance. De er lette å bytte om.

**Husk:** Ignore preconditions blir set cover over mållitteralene; eksakt er NP-hard, og greedy er rask, men ikke admissible.

- Hvorfor er «antall uoppfylte mål» ikke helt riktig under ignore preconditions? :: Én handling kan oppnå flere mål, og en handling kan oppheve effekten av en annen.
- Hvordan blir ignore preconditions et set-cover-problem? :: Fjern alle preconditions og alle effekter unntatt mållitteralene, og finn færrest handlinger som til sammen dekker målet.
- Er greedy set cover admissible? :: Nei. Den er innenfor en faktor log n av minimum (n = antall mållitteraler), men kan overvurdere.
- Hvilken heuristikk får du ved å fjerne bare Blank(s2) fra Slide-skjemaet i 8-puzzle? :: Manhattan distance. Fjerner du også Adjacent(s1, s2), får du misplaced tiles.

## 11.7 Analysis of Planning Approaches
<!-- prio: C | ep: E19 | forelest: nei -->

Seksjonen ser tilbake på kapittel 11: hva gjør planlegging vanskelig, og hva hjelper?

Planlegging kombinerer to store områder i AI, **søk og logikk**. En planlegger søker etter en plan, eller beviser konstruktivt at en plan finnes. Samspillet har tatt planleggere fra lekeproblemer med rundt et dusin tilstander til industrielle problemer med millioner av tilstander.

Hovedfienden er kombinatorisk eksplosjon. Med n proposisjoner finnes 2ⁿ tilstander, så bare 30 proposisjoner gir over en milliard.

Det sterkeste våpenet er uavhengige delproblemer. Kan problemet deles helt opp, gir det i beste fall eksponentiell speedup. **Negative interactions** mellom handlinger, der én handling ødelegger for en annen, ødelegger oppdelingen.

SATPlan kan kode logiske relasjoner mellom delproblemene. Forward search finner heuristisk mønstre, altså delmengder av proposisjoner, som dekker delproblemene. Derfor virker det også når de ikke er helt uavhengige.

Ingen vet ennå hvilke teknikker som er best på hvilke problemer. **Portfolio planning** holder derfor flere algoritmer klare. Systemet kan velge den beste per problem, kjøre alle parallelt på hver sin CPU, eller flette dem etter en tidsplan.

**Husk:** Planlegging er kamp mot 2ⁿ tilstander, og uavhengige delproblemer er det beste våpenet.

- Hvilke to hovedområder i AI kombinerer planlegging? :: Søk og logikk: planleggeren søker etter en plan eller beviser konstruktivt at en plan finnes.
- Hva ødelegger dekomponeringen av et planleggingsproblem i uavhengige delproblemer? :: Negative interactions mellom handlinger.
- Hva er portfolio planning? :: Flere algoritmer er klare: velg den beste per problem, kjør alle parallelt, eller flett dem etter en tidsplan.

## 17.2.1 Games with a single move: Normal form games: focal points
<!-- prio: B | ep: E10 | forelest: delvis -->

L10 tok dominans, Nash equilibrium, rene og blandede strategier, fangens dilemma og Battle of the Sexes. Her er biten som bare står i boka: hva gjør du når et spill har flere Nash-likevekter?

**Bokas eksempel**

Bo velger rad, og Ali velger kolonne. Begge får samme tall i hver celle.

| Bo \ Ali | l | r |
|---|---|---|
| t | 10, 10 | 0, 0 |
| b | 0, 0 | 1, 1 |

Sjekk spillet:

1. (t, l): bytter Bo til b, får Bo 0 < 10. Bytter Ali til r, får Ali 0 < 10. Ingen tjener på å bytte alene, så det er en Nash-likevekt.
2. (b, r): bytter Bo til t, får Bo 0 < 1. Bytter Ali til l, får Ali 0 < 1. Også en Nash-likevekt.
3. Ingen har en dominant strategi. For Bo er t best mot l (10 > 0), men b er best mot r (1 > 0).

**Coordination problem**

Begge vil havne i samme likevekt. Men i non-cooperative game theory velger de hver for seg, uten å kunne avtale noe. Det heter et coordination problem.

**Focal point**

Et focal point er et utfall som skiller seg ut som det «opplagte» å samle seg om. Her er det (t, l), fordi begge får 10 i stedet for 1. Begge utfallene er Nash-likevekter, men bare en rar spiller ville sikte på (b, r).

Begrepet er ikke presist. Hva som er focal, avhenger av spillet.

**Husk:** har spillet flere likevekter, løser et focal point koordineringen: utfallet alle regner med at de andre også velger.

- Hva er et coordination problem i spillteori? :: Spillerne vil havne i samme likevekt, men må velge hver for seg uten å kunne avtale noe.
- Hva er et focal point? :: Et utfall som peker seg ut som det opplagte å koordinere på, for eksempel fordi det gir alle mye mer.
- Et spill har Nash-likevektene (10, 10) og (1, 1), og (0, 0) ellers. Hva er focal point? :: (10, 10), fordi begge får mye mer der, selv om begge utfallene er Nash-likevekter.
- Er focal point et presist begrep? :: Nei. Hva som skiller seg ut, avhenger av spillet.

## 17.2.2 Social welfare: Pareto optimality, utilitarian og egalitarian social welfare
<!-- prio: A | ep: E10 | forelest: delvis | eksamen: 2023 -->

Vanligvis ser spillteori på spillet innenfra: hver spiller vil ha mest mulig selv. Her ser du det utenfra, som en snill dommer som kan velge utfallet. Hvilket utfall er best for alle samlet? L10 tok bare maximin for zero-sum (Morra), resten står i boka.

**Eksempel: fangens dilemma**

| P1 \ P2 | testify | refuse |
|---|---|---|
| testify | −5, −5 | 0, −10 |
| refuse | −10, 0 | −1, −1 |

Regn tre mål for hver celle:

| Utfall | Sum | Minimum | Pareto optimal? |
|---|---|---|---|
| (testify, testify) | −10 | −5 | nei, (−1, −1) er bedre for begge |
| (testify, refuse) | −10 | −10 | ja |
| (refuse, testify) | −10 | −10 | ja |
| (refuse, refuse) | −2 | −1 | ja |

**Pareto optimal**

Et utfall er Pareto optimal hvis ingen andre utfall gjør én spiller bedre uten å gjøre en annen dårligere. (−5, −5) er ikke det, for (−1, −1) er bedre for begge. Velger du et utfall som ikke er Pareto optimal, sløser du med utility.

(0, −10) er Pareto optimal selv om det er urettferdig. P1 får 0, det høyeste P1 kan få, så alle bytter gjør P1 dårligere.

**Utilitarian social welfare**

Dette er summen av alles utility. (refuse, refuse) vinner med −2. Svakheten er at summen overser fordelingen, så et svært skjevt utfall kan vinne.

Summen krever også at alles utility måles på samme skala. Bokas «utility monster» sier at det liker kaker tusen ganger mer enn alle andre. Da gir summen monsteret alle kakene.

**Egalitarian social welfare**

Dette ser på fordelingen. Én variant er maximin: velg utfallet som gir den dårligst stilte mest. (refuse, refuse) vinner igjen, med minimum −1.

**Fella:** ikke bland dette med maximin fra Morra. Der sikrer én spiller seg selv mest i verste fall. Her velger dommeren utfallet som gir den svakeste spilleren mest.

En annen variant er Gini-koeffisienten, som måler hvor jevnt utility er fordelt. Svakheten er at den kan ofre mye total velferd for litt jevnere fordeling.

**Dilemmaet:** (testify, testify) er dominant strategy equilibrium og eneste Nash-likevekt. Likevel er det eneste utfall som ikke er Pareto optimal, og det taper på både sum og minimum.

**Egen illustrasjon: tre mål, tre svar**

Ali velger rad, Bo kolonne: (t, l) = (4, 4), (t, r) = (0, 9), (b, l) = (6, 1) og (b, r) = (2, 2).

1. Pareto: (2, 2) er dominert av (4, 4). De tre andre er Pareto optimal, for ingen annen celle er minst like god for begge.
2. Summer: 8, 9, 7, 4. Utilitarian velger (t, r) = (0, 9).
3. Minimum: 4, 0, 1, 2. Egalitarian velger (t, l) = (4, 4).
4. Nash: b slår t for Ali (6 > 4 og 2 > 0), og r slår l for Bo (9 > 4 og 2 > 1). Likevekten (2, 2) er det eneste utfallet som ikke er Pareto optimal.

**Fella:** en Nash-likevekt er ikke det samme som et godt utfall. Spør oppgaven om social welfare eller Pareto, er svaret ofte et annet utfall enn likevekten.

**Husk:** Pareto = ingen sløsing, utilitarian = størst sum, egalitarian = best for den dårligst stilte, og Nash-likevekten kan tape på alle tre.

**På eksamen:** 2023 (oppgave 5) spurte hvilken strategi som maksimerer social welfare, regnet som summen. (Maintain, Maintain) ga 7 + 7 = 14. Nash-likevekten (Accelerate, Accelerate) ga 6 + 6 = 12 og er ikke Pareto optimal.

- Når er et utfall Pareto optimal? :: Når ingen andre utfall gjør én spiller bedre uten å gjøre en annen dårligere.
- Hva er utilitarian social welfare, og hva er svakheten? :: Summen av alles utility. Den overser hvordan utility er fordelt mellom spillerne.
- Hva er egalitarian social welfare i maximin-varianten? :: Velg utfallet som gir den dårligst stilte spilleren høyest utility.
- Hvilket utfall i fangens dilemma er ikke Pareto optimal? :: (testify, testify), som også er eneste Nash-likevekt. (refuse, refuse) maksimerer både sum og minimum.
- (t,l) = (4,4), (t,r) = (0,9), (b,l) = (6,1), (b,r) = (2,2). Hvilke utfall er Pareto optimal? :: (t, l), (t, r) og (b, l). (b, r) er dominert av (4, 4).
- Samme spill: hvilket utfall velger utilitarian, og hvilket velger egalitarian social welfare? :: Utilitarian velger (t, r) med sum 9. Egalitarian velger (t, l) med minimum 4.

## 17.2.3 Repeated games: limit of means
<!-- prio: B | ep: E10 | forelest: delvis -->

L10 tok backward induction, grim trigger og TFT. Der ble uendelig mange runder summert med diskontering δ. Boka måler i stedet med limit of means.

**Problemet:** et uendelig gjentatt spill gir en uendelig rekke payoffs U₀, U₁, U₂, … Summen går som regel mot minus uendelig, så den skiller ikke strategiene. Du trenger et annet mål.

**Limit of means**

Ta snittet per runde, og se hva det nærmer seg når antall runder går mot uendelig:

> `lim (1/T) · (U₀ + U₁ + … + U_T)` når T → ∞

Bokas strategier i gjentatt fangens dilemma: HAWK vitner alltid, og DOVE tier alltid. Utbetalingene per runde: DOVE–DOVE gir −1 hver, HAWK–DOVE gir 0 og −10, og HAWK–HAWK gir −5 hver.

**Eksempel: HAWK mot GRIM**

GRIM tier til motstanderen har vitnet én gang, og vitner så for alltid. Mot HAWK får GRIM −10 i runde 0 og −5 i alle runder etter.

| Runder | GRIMs snitt |
|---|---|
| 10 | (−10 − 9 · 5)/10 = −5,5 |
| 100 | (−10 − 99 · 5)/100 = −5,05 |
| 1000 | −5,005 |
| uendelig | −5 |

Den dårlige første runden forsvinner i snittet.

**Når finnes grensen?** Ikke for alle rekker. Men den finnes alltid når begge spiller finite state machine-strategier (FSM).

En FSM-strategi har endelig mange tilstander. Hver tilstand sier hva du gjør, og motstanderens trekk bestemmer neste tilstand. TFT har to: «tie» og «vitne».

Maskinene havner før eller siden i en tilstand de har vært i før. Da er rekka en endelig start fulgt av en syklus, og snittet er snittet over syklusen.

**Egen illustrasjon:** TFT mot en strategi som veksler testify, refuse, testify, … TFT får −10, 0, −10, 0, … og motstanderen 0, −10, 0, −10, … Syklusen har lengde 2, så begge får (−10 + 0)/2 = −5.

**GRIM mot GRIM:** begge tier for alltid og får −1. Det er en Nash-likevekt. Den som vitner, blir straffet med −5 for alltid, og −5 < −1.

| | L10 | Boka |
|---|---|---|
| Mål | diskontert sum Σ δᵗ · Uₜ | limit of means, snitt per runde |
| Tidlige runder | teller mest | teller ingenting i det lange løp |
| DOVE–DOVE (−1 hver runde) | −1/(1 − δ), for eksempel −2 med δ = ½ | −1 |

**Husk:** limit of means er snittet per runde i det lange løp; med FSM-strategier er det snittet over syklusen som gjentas.

- Hvordan måler limit of means nytten av en uendelig rekke payoffs? :: Som snittet per runde i det lange løp: grensen av (1/T) · (U0 + … + UT) når T → ∞.
- Hvorfor finnes limit of means alltid for FSM-strategier? :: Maskinene gjentar til slutt en tidligere tilstand, så payoffs blir en endelig start pluss en syklus. Snittet er snittet over syklusen.
- HAWK mot GRIM i uendelig gjentatt PD: hva får GRIM med limit of means? :: −5. Runde 0 gir −10, men deretter −5 for alltid, og én runde forsvinner i snittet.
- Hvordan skiller L10 og boka seg når de verdsetter uendelig mange runder? :: L10 diskonterer med δ (sum av δ^t · Ut). Boka bruker limit of means, snittet per runde.

## 25.1 Word Embeddings
<!-- prio: C | ep: E20 | forelest: nei | merk: uavklart pensum: Canvas «Chapter 24-25*» uten fotnote, L9 peker bare hit -->

Et nevralt nett trenger tall, ikke ord. Spørsmålet er hvordan du gjør et ord om til en vektor, slik at like ord får like vektorer.

**Første forsøk: one-hot**

Gi hvert ord sin egen plass i en lang vektor, med 1 der og 0 ellers. Egen illustrasjon:

> `cat = (1, 0, 0)`, `kitten = (0, 1, 0)`, `car = (0, 0, 1)`

Avstanden mellom hvert par er √2. Cat ligger like langt fra kitten som fra car, så representasjonen fanger ingen likhet.

Du kan i stedet telle alle n-gram ordet står i. Da blir vektorene enorme: 100 000 ord gir 100 000⁵ = 10²⁵ mulige 5-gram.

**Word embedding**

En word embedding er en kort, tett vektor på noen hundre tall som læres fra data. Hvert enkelt tall betyr ingenting du kan lese. Likevel havner like ord nær hverandre, i klynger for land, slektskap, kjøretøy og mat.

**Analogier med vektorregning**

Differansen mellom to ord koder ofte en relasjon. «A er til B som C er til D» løses med D = C + (B − A). Svaret er ordet nærmest D. Egen illustrasjon i 2D:

1. Athens = (1, 1), Greece = (1, 3), Oslo = (4, 1).
2. B − A = Greece − Athens = (0, 2). Det er pilen «hovedstad → land».
3. D = Oslo + (0, 2) = (4, 3).
4. Norway = (4, 4) ligger 1 unna D. Oslo ligger 2 unna og Greece 3. Svaret er Norway.

Fella: ingen garanti for at en gitt relasjon blir fanget. Embeddings er populære fordi de virker godt i oppgaver som oversettelse, ikke fordi de alltid løser analogier.

**Hvor kommer de fra?**

Du kan laste dem ferdig trent (word2vec, GloVe, fastText). Eller du kan lære dem sammen med oppgaven, for eksempel en POS-tagger som ser et vindu på 5 ord.

**Husk:** En word embedding er en lært, kort vektor der like ord ligger nær hverandre, og analogier løses med D = C + (B − A).

- Hva er svakheten med one-hot-koding av ord? :: Alle ordpar blir like ulike, så representasjonen fanger ingen likhet mellom ord.
- Hva er en word embedding? :: En kort, tett vektor på noen hundre tall, lært fra data, der like ord ligger nær hverandre.
- Hvordan løser embeddings «Athens er til Greece som Oslo er til ?»? :: Regn D = Oslo + (Greece − Athens) og velg ordet nærmest D, her Norway.

## 25.2–25.4 Recurrent Neural Networks, Sequence-to-Sequence Models and the Transformer
<!-- prio: C | ep: E20 | forelest: nei | merk: uavklart pensum: Canvas «Chapter 24-25*» uten fotnote; bare oversiktsnivå -->

I «Eduardo told me that Miguel was very sick so I took him to the hospital» må du lese hele setningen, fra første til siste ord, for å vite at «him» er Miguel. Disse seksjonene viser tre måter et nett kan få med seg slik kontekst. Ta dem på idénivå.

**RNN: ett ord om gangen**

En recurrent neural network (RNN) leser ett ord xₜ om gangen og bærer en skjult tilstand zₜ, laget av zₜ₋₁ og xₜ. Samme vekter brukes i hver posisjon, så antall parametere avhenger ikke av setningslengden.

Gammel informasjon blekner, som i hviskeleken. En LSTM har gates som velger hva som huskes og glemmes. En bidirectional RNN leser i tillegg fra høyre.

**Seq2seq: les én setning, skriv en annen**

Én RNN leser kildesetningen. Den siste skjulte tilstanden starter en ny RNN som skriver målsetningen. Det er sequence-to-sequence (seq2seq). Svakhetene:

1. Nære ord dominerer den skjulte tilstanden.
2. Hele setningen presses inn i én vektor. Med 1024 tall og 64 ord blir det bare 16 tall per ord.
3. Ord for ord går tregt, fordi det ikke kan regnes parallelt.

**Attention: se på hele kilden**

Med attention ser hvert målord på alle kildetilstandene sⱼ, altså de skjulte tilstandene fra lesingen av kilden.

hᵢ₋₁ er decoderens skjulte tilstand like før målord i. Scoren rᵢⱼ = hᵢ₋₁ · sⱼ måler hvor godt kildeord j passer.

Softmax gjør scorene om til vekter aᵢⱼ som summerer til 1. Kontekstvektoren cᵢ = Σⱼ aᵢⱼ sⱼ er et vektet snitt av kilden. Egen illustrasjon:

1. hᵢ₋₁ = (1, 0). Kilden er s₁ = (2, 0), s₂ = (0, 1) og s₃ = (1, 1).
2. Score: r = 2, 0 og 1. Softmax gir a = 0,665, 0,090 og 0,245.
3. Første tall i c: 0,665 · 2 + 0,245 · 1 = 1,575. Andre tall: 0,090 · 1 + 0,245 · 1 = 0,335.

Målordet ser mest på s₁, den kildetilstanden som ligner mest på hᵢ₋₁.

Når målsetningen skrives (decoding), velger greedy beste ord i hvert steg og kan ikke angre. Beam search holder de k beste hypotesene.

**Transformer: alt på en gang**

Transformeren bruker self-attention: hvert ord ser på alle ordene i samme setning. Hvert ord lager tre vektorer: query (hva leter jeg etter), key (hva har jeg å tilby) og value (hva sender jeg videre).

Scoren er rᵢⱼ = qᵢ · kⱼ / √d, der d er lengden på vektorene. Ingen ord venter på ordet før, så alle posisjoner regnes parallelt.

Self-attention ser ikke rekkefølgen, så en positional embedding legges til hvert ord. Decoderen ser bare på tidligere ord.

**Husk:** RNN leser ord for ord, seq2seq koder og dekoder, attention lar hvert målord se på hele kilden, og transformeren bytter RNN ut med self-attention som regnes parallelt.

- Hva er hovedideen i en RNN for språk? :: Den leser ett ord om gangen og bærer en skjult tilstand videre, med samme vekter i hver posisjon.
- Hvilket problem i seq2seq løser attention? :: Uten attention må hele kildesetningen presses inn i én vektor. Med attention ser hvert målord på alle kildetilstandene, vektet med softmax.
- Hva skiller transformeren fra en RNN? :: Den bruker self-attention mellom alle ordene i setningen i stedet for å lese ord for ord, så alt kan regnes parallelt.
<!-- usikker: oppdraget ba om én eller to blokker for kap. 25, så 25.2–25.4 er samlet i én blokk med et seksjonsintervall i overskriften i stedet for ett nummer. -->

## 28.1.4 Measuring AI: 30 %-grensen og Eugene Goostman
<!-- prio: B | ep: E21 | forelest: delvis | eksamen: 2015 -->

Hvordan vet du om en maskin er intelligent? Turing foreslo å slutte å krangle om ordet «tenke» og heller teste hva maskinen gjør.

L1 dekket Turing-testen (1.1.1) og ELIZA-dialogen. Resten står bare i boka.

**Oppsettet**

1. En utspørrer chatter skriftlig med noen i fem minutter.
2. Utspørreren gjetter: program eller menneske?
3. Programmet består hvis det lurer utspørreren 30 % av gangene.

Turing (1950) byttet ut «kan maskiner tenke?» med denne atferdstesten. Detaljene var ikke poenget hans. Poenget var å måle intelligens med prestasjon på en åpen atferdsoppgave, ikke med filosofisk spekulasjon.

**Har noen bestått?**

Turing spådde at det skulle skje innen år 2000. Ingen er enige om at noe program har bestått.

Chatboter som ELIZA lurer folk som ikke vet at de kan snakke med en maskin. I 2014 lurte Eugene Goostman 33 % av utrente amatørdommere. Den spilte en ukrainsk gutt med dårlig engelsk, og det forklarte grammatikkfeilene. Ingen godt trent dommer er blitt lurt.

Fella: 33 % er over 30 %-grensen, men dommerne var utrente amatører. Derfor er det ikke enighet om at Goostman besto. Testen målte kanskje heller hvor godtroende dommerne var.

**Hva forskerne gjør i stedet**

AI-forskere konkurrerer heller i sjakk, Go, StarCraft II og bildegjenkjenning. Der har programmer nådd menneskenivå, men det gjør dem ikke menneskelige utenfor oppgaven. Målet er bedre vitenskap og nyttige verktøy, ikke å lure dommere.

**Husk:** Fem minutter, lur utspørreren 30 % av gangene. Eugene Goostman (2014, 33 % av amatører) viser at testen like gjerne måler godtroenhet.

**På eksamen:** 2015 spurte (sant/usant) om en agent må tenke som et menneske for å bestå Turing-testen. Usant: testen måler bare oppførsel.

- Hva er oppsettet i Turing-testen slik 28.1.4 beskriver den? :: Fem minutters skriftlig samtale med en utspørrer. Programmet består hvis det lurer utspørreren 30 % av gangene.
- Hva var Turings egentlige poeng med testen? :: Å måle intelligens med prestasjon på en åpen atferdsoppgave i stedet for filosofisk spekulasjon. Detaljene var underordnet.
- Hva viste Eugene Goostman i 2014? :: Den lurte 33 % av utrente dommere som ukrainsk gutt med dårlig engelsk. Testen måler kanskje heller menneskelig godtroenhet.
- Hvorfor er Turing-testen ikke et hovedmål i AI-forskningen? :: Forskere foretrekker konkrete konkurranser som sjakk, Go og bildegjenkjenning. Målet er nyttig vitenskap, ikke å lure dommere.
<!-- usikker: eksamen 2015 (sant/usant i) spurte om Turing-testen generelt, som ble forelest i 1.1.1, ikke om detaljene som bare står i 28.1.4. -->

## 28.3.5 The future of work
<!-- prio: C | ep: E21 | forelest: nei | merk: forsikring: Canvas tar den ut, L12 sier «§28.3 (the whole chapter)» -->

Tar AI jobbene våre? Boka svarer at noen jobber forsvinner, men at nye historisk har kommet til. Faren er tempoet og ulikheten.

**Først tap, så kompensasjon**

Når en maskin overtar arbeid, faller sysselsettingen straks. Spørsmålet er om compensation effects tar det igjen: høyere produktivitet gir mer velstand, mer etterspørsel og nye jobber.

Historisk har det gått slik. Vevstoler erstattet vevere på 1810-tallet (luddittene). Keynes kalte jobbtapet på 1930-tallet technological unemployment. Begge ganger kom sysselsettingen tilbake.

**Minibanken**

Minibanker overtok å telle opp kontanter. Det gjorde hver bankfilial billigere å drive, så det ble flere filialer og flere bankansatte totalt. Automatisering fjerner oftere oppgaver enn hele yrker.

**Tempoet**

Landbruket gikk fra over 40 % til 2 % av den amerikanske arbeidsstyrken fra 1900 til 2000. Det tok 100 år, på tvers av generasjoner. Med AI kan én arbeider måtte omskolere seg flere ganger i ett arbeidsliv.

**Ulikhet: winner-take-all**

| 10 % bedre enn konkurrenten | Hvorfor | Gevinst |
|---|---|---|
| Bonden Ali mot Bo | jorda og transporten setter en grense | om lag 10 % mer inntekt |
| Apputvikleren Cary mot Dana | en app kopieres nesten gratis | kanskje 99 % av markedet |

**Jobben deles opp**

En jobb gir produksjon, inntekt og mening. Med automatisering kan de tre skilles. Inntekten kan da komme fra ordninger som universal basic income.

**Husk:** Automatisering fjerner oftest oppgaver, ikke hele yrker, og compensation effects har historisk gitt nye jobber. Faren med AI er tempoet og økt ulikhet.

- Hva er compensation effects? :: Det som øker sysselsettingen etter automatisering: høyere produktivitet gir mer velstand, mer etterspørsel og nye jobber.
- Hva viser minibank-eksempelet? :: Minibanker gjorde filialer billigere, så det ble flere filialer og flere bankansatte. Automatisering fjerner oftere oppgaver enn hele jobber.
- Hvorfor kan AI-omstillingen bli tyngre enn landbrukets? :: Landbruket krympet fra over 40 % til 2 % over 100 år, på tvers av generasjoner. AI kan endre yrker flere ganger i ett arbeidsliv.

## 28.3.6 Robot rights
<!-- prio: C | ep: E21 | forelest: nei | merk: forsikring: Canvas tar den ut, L12 sier «§28.3 (the whole chapter)» -->

Bør en robot ha rettigheter? Boka sier at svaret henger på ett spørsmål: kan roboten oppleve noe?

**Bevissthet avgjør**

Spørsmålet henger på bevissthet og qualia (28.2), altså om det føles som noe å være roboten. Uten det er det få som mener at roboter fortjener rettigheter.

Kan roboter føle smerte, frykte døden eller regnes som personer, kan du argumentere for rettigheter. Da ligner det kampen undertrykte grupper har ført for sine rettigheter.

I virkeligheten ga Saudi-Arabia æresborgerskap til Sophia, en menneskelignende dukke med forhåndsprogrammerte replikker.

**Nye problemer hvis de får rettigheter**

1. Slaveri: er det slaveri å omprogrammere en robot?
2. Stemmerett: en rik person kan kjøpe tusenvis av roboter og programmere dem til å stemme. Det bryter med «one person, one vote».

**Davis: unngå hele dilemmaet**

Ernie Davis vil aldri bygge roboter som kan regnes som bevisste. Roboter er verktøy. Får de personstatus, slipper eieren ansvar: «bilen krasjet av seg selv».

Hybrider av menneske og maskin kan likevel viske ut grensen.

**Husk:** Robotrettigheter står og faller på bevissthet og qualia. Davis vil derfor aldri bygge roboter som kan være bevisste.

- Hva avgjør om roboter bør ha rettigheter, ifølge boka? :: Om de har bevissthet og qualia, for eksempel kan føle smerte. Uten det mener få at de fortjener rettigheter.
- Hva foreslår Ernie Davis om robotbevissthet? :: Aldri bygge roboter som kan regnes som bevisste. Roboter er verktøy, og personstatus ville latt eierne slippe ansvar.
- Hvilket demokratisk problem gir stemmerett for roboter? :: En rik person kan kjøpe og programmere tusenvis av roboter som stemmer. Det bryter med «one person, one vote».
<!-- avvik: PENSUMOVERSIKT avsnitt 6 regner roboten Sofia (L1) som stoff boka ikke har, men 28.3.6 nevner Sophia og æresborgerskapet i Saudi-Arabia. -->
