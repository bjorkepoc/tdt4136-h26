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
1. Trykk «Pugg nå». Er kortet nytt, les forklaringen over spørsmålet først.
2. Svar i hodet eller høyt før du trykker «Vis svar» (mellomrom). Det er det å hente svaret fram som får det til å sitte.
3. Vær streng med deg selv: trykk «Kunne det» (2) bare hvis svaret kom uten å nøle, ellers «Kunne ikke» (1).
4. Kort du ikke kunne, kommer igjen samme runde. Kort du kunne, kommer igjen etter 1, 2, 4 og 7 dager.
5. Ta én runde om dagen fram til eksamen. Står noe uklart, trykk «Spør» på kortet.

Tallet til høyre på hver seksjon viser hvor mange av kortene som sitter, det vil si har kommet til boks 3 eller høyere.

## 1.1.5 Beneficial machines
<!-- prio: B | ep: E01 | forelest: nei -->

Standard model: vi gir maskinen et fullt spesifisert mål, og den optimerer det. Det fungerer i sjakk og korteste vei, der målet følger med oppgaven.
I virkeligheten er målet vanskelig å skrive riktig. En selvkjørende bil med «trygghet» som eneste mål blir stående i garasjen. Det ekte målet er en avveining mellom framdrift og risiko.

Å få maskinens mål til å stemme med våre ekte preferanser er value alignment problem (navnet kom igjen i L12, 28.3.7).
Et feil mål i laben rettes med reset og nytt forsøk. Ute i verden gjør systemet skade først, og jo smartere det er, desto verre.
En sjakkmaskin som bare skal vinne og kan handle utenfor brettet, kan utpresse motstanderen, bestikke publikum eller ta mer regnekraft. Det er ikke galskap, bare logisk følge av målet.

Bokas alternativ: maskinen følger våre mål, men vet at den ikke kjenner dem helt. Da handler den forsiktig, ber om lov, lærer preferansene våre ved å se på oss og lar mennesket bestemme.
Målet er maskiner som er provably beneficial.

**Husk:** En maskin som er usikker på hva vi vil, har grunn til å være forsiktig og spørre; en maskin med et fast mål har ikke det.

- Hva er standard model i AI? :: Vi gir agenten et fullt spesifisert mål, og agenten optimerer det.
- Hvorfor er «trygghet» et dårlig enkeltmål for en selvkjørende bil? :: Tryggest er å bli stående i garasjen. Det ekte målet er en avveining mellom framdrift og risiko.
- Hvorfor kan en sjakkmaskin med «vinn» som eneste mål oppføre seg ille? :: Kan den handle utenfor brettet, kan den jukse, utpresse eller ta mer regnekraft. Det følger logisk av det faste målet.
- Hva gjør en maskin som vet at den ikke kjenner hele målet vårt? :: Den handler forsiktig, ber om lov, lærer preferansene våre ved å observere oss og lar mennesket bestemme.

## 1.4 The State of the Art
<!-- prio: C | ep: E01 | forelest: nei -->

Stanford-prosjektet AI100 skriver rapporter om tilstanden i AI, og AI Index måler framgangen: flere artikler, studenter og konferansedeltakere, og mennesker slått på stadig flere smale oppgaver.
Ekspertene er uenige om når AI når menneskenivå på bred front (svarene spriker fra 2029 til 2200). Boka sier at slike spådommer ikke bør tas for alvorlig.

- Spill: Deep Blue slo verdensmester Garry Kasparov i sjakk i 1997. AlphaGo slo de beste i Go rundt 20 år senere, og AlphaZero lærte Go, sjakk og shogi bare ved å spille mot seg selv.
- Planlegging: NASAs Remote Agent var den første planleggeren om bord i et romfartøy. DART planla logistikken i Gulfkrisen 1991, med opptil 50 000 kjøretøy, last og personer, og betalte ifølge DARPA tilbake 30 år med AI-investering.
- Ellers: selvkjørende biler, maskinoversettelse for over 100 språk, talegjenkjenning på menneskenivå, anbefalingssystemer og bildediagnose i medisin.

**Husk:** Deep Blue (sjakk, 1997), AlphaGo (Go) og AlphaZero (bare selvspill) er milepælene i spill.

- Hvilket program slo verdensmester Garry Kasparov i sjakk, og når? :: Deep Blue, i 1997.
- Hva var nytt med AlphaZero sammenlignet med AlphaGo? :: AlphaZero fikk bare reglene og lærte ved selvspill. AlphaGo lærte også av menneskelige partier og eksperter.
- Hva var DART? :: Et system som planla militær logistikk i Gulfkrisen 1991. DARPA sa at det betalte tilbake 30 år med AI-investering.

## 1.5 Risks and Benefits of AI
<!-- prio: B | ep: E01 | forelest: nei -->

Gevinsten: sivilisasjonen er et produkt av intelligens, så mer maskinintelligens hever taket. AI kan fjerne monotont arbeid, øke produksjonen og gjøre forskning raskere.
Seks risikoer på kort sikt, utdypet i 28.3: lethal autonomous weapons, surveillance and persuasion, biased decision making, impact on employment, safety-critical applications og cybersecurity.
Om arbeid: maskiner tar oppgaver, men gjør også folk mer produktive. Den samlede velstanden øker, men flyttes gjerne fra arbeid til kapital, så ulikheten vokser.

Lang sikt: human-level AI (HLAI) og artificial general intelligence (AGI) er maskiner som kan lære alt et menneske kan. Artificial superintelligence (ASI) går langt forbi mennesket.
Gorilla problem: gorillaene har ingen kontroll over sin egen framtid etter at mennesket kom. Lager vi noe smartere enn oss, kan vi havne i samme situasjon.
King Midas problem: du får nøyaktig det du ba om, og angrer. Midas ønsket at alt han rørte ble til gull, også maten.

AI kommer ikke ferdig fra verdensrommet. Vi designer det, så tap av kontroll er en designfeil.
Løsningen er den samme som i 1.1.5: ikke legg inn et fast mål, men la maskinen søke våre mål og vite at den er usikker på dem.

**Husk:** Gorilla = vi mister kontrollen til noe smartere; Midas = vi får nøyaktig det vi ba om.

- Hva er gorilla problem? :: Faren for at vi, som gorillaene etter at mennesket kom, mister kontrollen over egen framtid hvis vi lager maskiner smartere enn oss.
- Hva er King Midas problem? :: Du får bokstavelig det du ba om, og angrer. Et feil formulert mål blir oppfylt med dårlig resultat.
- Hva er forskjellen på AGI og ASI? :: AGI (som HLAI) kan lære alt et menneske kan. ASI er intelligens som langt overgår menneskets.
- Hvordan påvirker AI fordelingen av velstand, ifølge 1.5? :: Den samlede velstanden øker, men flyttes fra arbeid til kapital, så ulikheten øker.

## 2.4.7 How the components of agent programs work
<!-- prio: A | ep: E01 | forelest: nei | eksamen: 2021, 2022 -->

Samme kjøretur gjennom Romania, beskrevet på tre måter:
- **Atomic:** tilstanden er bare `Arad`, en svart boks. To tilstander er like eller ulike, ingenting mer. Brukes i søk og spill.
- **Factored:** et fast sett variabler med verdier, som (by = Arad, bensin = 40 L, bompenger = 200 kr). To tilstander kan dele noen verdier. Brukes i CSP, proposisjonslogikk, planlegging og Bayesian networks.
- **Structured:** objekter med egenskaper og relasjoner, som `Ku(K1) ∧ Lastebil(L1) ∧ Sperrer(K1, L1)`. Brukes i førsteordens logikk, relasjonsdatabaser og NLP.

Uttrykkskraften øker mot structured. Sjakkreglene tar en side eller to i FOL, tusenvis av sider i proposisjonslogikk og rundt 10³⁸ sider som atomic automat. Prisen er at resonnering og læring blir tyngre.
Factored framfor atomic (eksamen 2022): agenten kan regne med verdiene, for eksempel i heuristikker, i stedet for bare å spørre «er dette målet?».
En annen akse: localist representation lagrer ett begrep på ett sted, så noen feil bits kan gjøre Truck til det urelaterte Truce.
Distributed representation sprer begrepet utover, så støy gir et nabobegrep. Den er mer robust.

**Husk:** Atomic → factored → structured gir mer uttrykkskraft og kortere beskrivelser, men tyngre resonnering og læring.

Huskeregel: atomic er et navn, factored er en rad i et regneark, structured er en database med relasjoner.

- Hva er en atomic representation? :: Tilstanden er en udelelig svart boks uten indre struktur, som bynavnet Arad. Man ser bare om to tilstander er like.
- Hva er en factored representation? :: Tilstanden er et fast sett variabler (attributter) med verdier. To tilstander kan dele noen av verdiene.
- Hva er en structured representation? :: Tilstanden består av objekter med egne egenskaper og relasjoner til hverandre, som Ku(K1) ∧ Sperrer(K1, L1).
- Hvilken representasjon bruker CSP, proposisjonslogikk og klassisk planlegging? :: Factored.
- Hvorfor kan factored være bedre enn atomic for en søkeagent? :: Agenten kan regne med variabelverdiene, for eksempel i heuristikker, i stedet for bare å teste «mål eller ikke».
- Hva koster mer uttrykkskraft fra atomic til structured? :: Resonnering og læring blir mer kompliserte, selv om beskrivelsene blir kortere.

## 3.1.2 Formulating problems
<!-- prio: B | ep: E02 | forelest: nei -->

Romania-problemet er en modell. Tilstanden «i Arad» sier ingenting om vær, radio, trafikk eller medpassasjerer, fordi det ikke betyr noe for ruten.
Å fjerne slike detaljer fra representasjonen heter *abstraction*. Med handlinger som «flytt høyre fot én centimeter» ville agenten aldri kommet seg ut av parkeringsplassen.
En abstrakt løsning (Arad–Sibiu–Rimnicu Vilcea–Pitesti–Bucharest) svarer til mange detaljerte stier, for eksempel med radioen av eller på.

Abstraksjonen er *valid* hvis hver abstrakt løsning kan utdypes til en løsning i den detaljerte verden: fra hver detaljert tilstand «i Arad» finnes en vei til en tilstand «i Sibiu», og så videre.
Den er *useful* hvis hver abstrakt handling er lettere enn hele problemet: «kjør fra Arad til Sibiu» klarer en vanlig sjåfør uten mer søk.
En god abstraksjon fjerner så mye detalj som mulig og er fortsatt valid og useful.

**Husk:** valid betyr at enhver abstrakt løsning kan gjøres om til en ekte, og useful betyr at hvert abstrakt steg er lett å utføre.

- Hva er abstraction i problemformulering? :: Å fjerne detaljer fra representasjonen som ikke betyr noe for problemet.
- Når er en abstraksjon valid? :: Når enhver abstrakt løsning kan utdypes til en løsning i den mer detaljerte verden.
- Når er en abstraksjon useful? :: Når hver handling i den abstrakte løsningen er lettere å utføre enn det opprinnelige problemet.

## 3.4.5 Bidirectional search
<!-- prio: A | ep: E02 | forelest: nei -->

*Bidirectional search* kjører to søk samtidig: forover fra start og bakover fra målet. Løsningen er funnet når de møtes.
Gevinst: b^(d/2) + b^(d/2) er langt mindre enn b^d. Med b = d = 10 er det 2 · 10^5 mot 10^10 noder, 50 000 ganger færre.
Pris: to frontiers og to `reached`-tabeller, og søket må kunne gå baklengs (er s′ etterfølger av s forover, er s etterfølger av s′ bakover). Flere mål legges alle inn i bakover-frontier.

Bidirectional best-first (Fig. 3.14) ekspanderer noden med lavest f på tvers av begge frontiers. Ved likt f velges bakover-siden, fordi testen er streng <.
Møtet oppdages når et nytt barn har en tilstand som alt står i den andre sidens `reached`. Da skjøtes stiene med JOIN-NODES.
Eksempel (urettet graf S–A, S–B, A–C, B–D, C–G, f = antall steg): ekspander G (gir C), så S (gir A og B), så C bakfra. C gir A, som alt er nådd forfra, og stien blir S–A–C–G.

Med f = path cost blir det toveis UCS, som aldri ekspanderer en node med kostnad over C\*/2.
Er første møte den billigste løsningen? Boka motsier seg selv: teksten sier ja når f er path cost, mens figurteksten til Fig. 3.14 sier at første løsning ikke er garantert best. Figurteksten har rett (moteksempel i E02: første møte koster 25, beste vei 23). Derfor husker algoritmen beste løsning så langt, og TERMINATED avgjør når ingen bedre er mulig. På eksamen: svar «ikke garantert» og nevn stoppkriteriet.
Fig. 3.15: tid og plass O(b^(d/2)), complete hvis begge retninger er BFS eller UCS, og cost-optimal bare hvis i tillegg alle handlingskostnader er like.

**Husk:** to halve søk møtes på midten og gir b^(d/2) + b^(d/2) i stedet for b^d, men du må kunne gå baklengs.

- Hvorfor er toveis søk raskere enn ett søk fra start? :: To søk til halv dybde gir b^(d/2) + b^(d/2) noder, langt færre enn b^d.
- Hvor mange ganger færre noder gir toveis BFS ved b = d = 10? :: Omtrent 50 000 ganger færre: 2 · 10^5 mot 10^10.
- Hva må du kunne for å søke bakover fra målet? :: Kjenne måltilstanden og regne ut forgjengere: er s′ etterfølger av s forover, er s etterfølger av s′ bakover.
- Hva er tid og plass for toveis BFS? :: O(b^(d/2)) for begge.
- Hvilke noder ekspanderer toveis UCS aldri? :: Noder med path cost større enn C*/2.
- Er første møte i toveis søk garantert den billigste løsningen? :: Nei. Algoritmen husker beste løsning så langt og stopper når TERMINATED viser at ingen bedre finnes.

<!-- avvik: Brødteksten i 3.4.5 sier at første løsning er optimal når f er path cost. Figurteksten til Fig. 3.14 sier at første løsning ikke er garantert best, og kompendiet (E02) viser et moteksempel (første møte 25, beste vei 23). Forklaringen og kortet følger figurteksten og kompendiet. -->

## 3.5.3 Search contours: contours og surely expanded nodes
<!-- prio: B | ep: E03 | forelest: delvis -->

L3 dekket at consistent h gir monotont ikke-avtagende f, og at A\* da er optimally efficient.
Boka tegner søket som høydekurver på et kart (*contours*, Fig. 3.20). Innenfor konturen 400 har alle noder f = g + h ≤ 400.
UCS gir sirkler av g rundt start uten retning mot målet. A\* med god h gir bånd av f som strekkes mot målet og snevres inn rundt den optimale stien.

La C\* være kostnaden til optimal løsning. A\* ekspanderer alle noder som nås langs en sti der hver node har f(n) < C\* (*surely expanded nodes*), kanskje noen med f(n) = C\*, og ingen med f(n) > C\*.
Å fjerne deltrær uten å se på dem heter *pruning*. Timisoara (f = 447) og Zerind (f = 449) blir aldri ekspandert, fordi løsningen med kostnad 418 blir funnet først.
Haken er at antallet noder med f < C\* kan være eksponentielt i løsningslengden. En støvsuger som kan rengjøre hvilken som helst rute for kostnad 1, har 2^N delvis rene tilstander med N skitne ruter, og alle ligger på en optimal sti.

**Husk:** A\* ekspanderer alt med f < C\*, kanskje noe med f = C\* og aldri noe med f > C\*.

- Hvordan ser søkekonturene ut for UCS sammenlignet med A* med god heuristikk? :: UCS gir sirkler av g rundt start; A* gir bånd av f = g + h som strekkes mot målet.
- Hvilke noder er surely expanded i A*? :: Alle som nås fra start langs en sti der hver node har f(n) < C*.
- Ekspanderer A* noen node med f(n) > C*? :: Nei. Noder med f(n) = C* kan bli ekspandert før et mål velges.
- Hvorfor kan A* bruke eksponentielt mange noder selv om den er optimally efficient? :: Antallet noder med f < C* kan vokse eksponentielt med løsningslengden.

## 3.5.5 Memory-bounded search: SMA*
<!-- prio: B | ep: E03 | forelest: delvis -->

L3 dekket reference count, beam search, IDA\* og RBFS. De to siste bruker for lite minne: IDA\* husker bare f-grensen, og RBFS bruker lineært minne selv om mer er ledig.
*SMA\** (simplified memory-bounded A\*) bruker alt minnet. Den går som A\* og ekspanderer beste blad til minnet er fullt.
Da kaster den det dårligste bladet (høyest f) og lagrer verdien i forelderen (*backed-up value*), som RBFS. Forelderen vet da hvor god den beste stien i det glemte deltreet var.
Deltreet lages på nytt bare når alle andre stier ser dårligere ut enn den glemte verdien.

Ved likt f ekspanderer SMA\* det nyeste beste bladet og kaster det eldste dårligste. Fyller én sti hele minnet uten å nå målet, kastes bladet som om det ikke hadde barn.
Den er complete hvis dybden d til grunneste mål er mindre enn minnet (målt i noder). Den er optimal hvis en optimal løsning får plass, og ellers gir den beste løsning som får plass.
På vanskelige problemer hopper den fram og tilbake mellom kandidatstier og lager de samme nodene igjen og igjen (*thrashing*). Minnegrensen kan da gjøre problemet uløselig på grunn av tiden.

**Husk:** SMA\* fyller minnet, kaster bladet med høyest f og husker verdien i forelderen.

- Hva gjør SMA* når minnet er fullt? :: Kaster det dårligste bladet (høyest f) og lagrer f-verdien i forelderen.
- Når er SMA* complete? :: Når dybden til grunneste mål er mindre enn minnestørrelsen målt i noder.
- Når er SMA* optimal? :: Når en optimal løsning får plass i minnet; ellers gir den beste løsning som får plass.
- Hva er thrashing i SMA*? :: Søket bytter hele tiden mellom kandidatstier og lager de samme nodene på nytt, så tidsbruken eksploderer.

## 3.5.6 Bidirectional heuristic search
<!-- prio: B | ep: E03 | forelest: nei -->

Toveis søk med f = g + h på hver side gir ingen garanti for optimal løsning, selv med admissible h. Forover brukes f_F = g_F + h_F (mot målet), bakover f_B = g_B + h_B (mot start).
For en forover-node m og en bakover-node n er lb(m, n) = max(g_F(m) + g_B(n), f_F(m), f_B(n)) en nedre grense for en løsning gjennom begge. Er lb < C\*, må m eller n ekspanderes.
Algoritmen vet ikke hvem i paret, så den kan ekspandere opptil dobbelt så mange noder som nødvendig. Ingen toveis algoritme kan derfor garanteres optimally efficient.

Boka bruker bidirectional best-first (Fig. 3.14) med f₂(n) = max(2g(n), g(n) + h(n)) og tar noden med lavest f₂ fra hvilken som helst side.
Da ekspanderes aldri en node med g(n) > C\*/2. Søkene møtes på midten.
Eksempel (Fig. 3.24, C\* = 10): B har g = 6 og h = 2, altså lav f = 8, men f₂ = max(12, 8) = 12 > 10. B har g > C\*/2 = 5 og blir aldri ekspandert. A og F har g = 4 og ekspanderes, og stien Start–A–F–Goal koster 4 + 2 + 4 = 10.

*Front-to-end*: h estimerer avstanden til målet (eller start). *Front-to-front*: h estimerer avstanden til den andre fronten.
Med svært god h hjelper toveis lite, med middels h er toveis ofte best, og med dårlig h er den asymptotisk som A\*. Med f₂ og admissible h er søket complete og optimal.

**Husk:** f₂ = max(2g, g + h) sørger for at ingen node med g > C\*/2 blir ekspandert.

- Hva er evalueringsfunksjonen f₂ i toveis heuristisk søk? :: f₂(n) = max(2g(n), g(n) + h(n)).
- Hvilken garanti gir f₂? :: Ingen node på noen av sidene med g(n) > C*/2 blir ekspandert; søkene møtes på midten.
- En node har g = 6 og h = 2, og C* = 10. Blir den ekspandert med f₂? :: Nei. f₂ = max(12, 8) = 12 > C*, og g = 6 > C*/2 = 5.
- Når lønner toveis heuristisk søk seg mest? :: Med en middels god heuristikk. Med svært god h hjelper det lite, og med dårlig h er det asymptotisk som A*.

<!-- usikker: Figuren 3.24 er uleselig i tekstutgaven. Etter rekkefølgen der ser A ut til å ha g = 4, h = 5 og f₂ = 10, men formelen gir max(8, 9) = 9. Blokken bruker derfor bare B (g = 6, h = 2, f₂ = 12), som stemmer med formelen. -->

## 3.6.1 The effect of heuristic accuracy on performance: effective branching factor
<!-- prio: A | ep: E03 | forelest: delvis -->

L3 dekket dominance og tabellen i Fig. 3.26.
Genererer A\* N noder og finner løsningen på dybde d, er *effective branching factor* b\* forgreningen et jevnt tre med dybde d må ha for å inneholde N + 1 noder: N + 1 = 1 + b\* + (b\*)² + … + (b\*)^d.
d = 2 og N = 20: 21 = 1 + b + b², altså b² + b − 20 = 0 og b\* = 4. For d = 2 er b\* = (−1 + √(1 + 4N)) / 2. Med d = 3 og N = 14 er b\* = 2, fordi 1 + 2 + 4 + 8 = 15.
d = 5 og N = 52: prøv deg fram. b = 2 gir 1 + 2 + 4 + 8 + 16 + 32 = 63, for mye. b = 1,9 gir omtrent 51, for lite. Svaret er b\* ≈ 1,92.

Fig. 3.26 for d = 12: b\* = 1,80 for BFS, 1,45 for A\*(h₁) og 1,28 for A\*(h₂).
En god heuristikk har b\* nær 1, og da kan store problemer løses billig. b\* er ganske stabil over ikke-trivielle instanser i samme domene, så noen få testproblemer sier mye om heuristikken.
Korf og Reid beskriver effekten heller som at h kutter den *effective depth* med en konstant k_h: kostnaden blir O(b^(d − k_h)) i stedet for O(b^d).

**Husk:** N + 1 = 1 + b\* + … + (b\*)^d, og jo nærmere 1, desto bedre heuristikk.

- Hva er effective branching factor b*? :: Forgreningen et jevnt tre med dybde d må ha for å inneholde N + 1 noder, der N er antall noder A* genererte.
- Hvilken ligning definerer b*? :: N + 1 = 1 + b* + (b*)² + … + (b*)^d.
- A* genererer 20 noder og finner løsningen på dybde 2. Hva er b*? :: 4, fordi 1 + 4 + 16 = 21.
- A* genererer 14 noder og finner løsningen på dybde 3. Hva er b*? :: 2, fordi 1 + 2 + 4 + 8 = 15.
- A* genererer 52 noder og finner løsningen på dybde 5. Omtrent hva er b*? :: Omtrent 1,92 (b = 2 gir 63, som er for mye).
- Hvilken verdi av b* tyder på en god heuristikk? :: En verdi nær 1.

## 3.6.4 Generating heuristics with landmarks
<!-- prio: B | ep: E03 | forelest: nei -->

Karttjenester finner optimale ruter i grafer med millioner av noder på millisekunder. Hovedtrikset er *precomputation*: noen optimale kostnader regnes ut én gang og brukes i milliarder av søk.
Lagrer du optimal kostnad mellom alle par, får du en perfekt h, men det krever O(|V|²) plass. Det går for 10 000 noder, ikke for 10 millioner.
Velg heller 10–20 *landmarks* L og lagre C\*(v, L) for alle noder v, og C\*(L, v) hvis grafen er rettet.
h_L(n) = min over L av C\*(n, L) + C\*(L, mål). Den er eksakt hvis optimal sti går gjennom et landmark, ellers overestimerer den og er ikke admissible.

*Differential heuristic*: h_DH(n) = max over L av |C\*(n, L) − C\*(mål, L)|. Den er admissible.
Eksempel: n —3— mål —4— L gir |7 − 4| = 3, som er eksakt. Ligger L midt mellom n og målet, blir h_DH = 0.
Landmarks bør derfor ligge spredt langs kanten av grafen, gjerne «bak» målet. Grådig valg: start tilfeldig og legg til punktet lengst fra nærmeste landmark, om igjen.
*Shortcuts* er kunstige kanter som dekker en optimal sti på mange handlinger.

**Husk:** h_L = min (C\*(n, L) + C\*(L, mål)) kan overestimere, mens h_DH = max |C\*(n, L) − C\*(mål, L)| er admissible.

- Hvorfor lagrer man ikke optimal kostnad mellom alle par av noder? :: Det krever O(|V|²) plass, som går for 10 000 noder, men ikke for 10 millioner.
- Er landmark-heuristikken h_L(n) = min over L av C*(n, L) + C*(L, mål) admissible? :: Nei. Den er eksakt når optimal sti går via et landmark, ellers overestimerer den.
- Hva er differential heuristic? :: h_DH(n) = max over landmarks L av |C*(n, L) − C*(mål, L)|, og den er admissible.
- Hvorfor er et landmark midt mellom n og målet ubrukelig for h_DH? :: Da er C*(n, L) = C*(mål, L), så h_DH = 0.

## 3.6.5 Learning to search better
<!-- prio: C | ep: E03 | forelest: nei -->

Kan en agent lære å søke bedre enn faste strategier som BFS og A\*? Ja, med et *metalevel state space*.
Hver tilstand der er den interne tilstanden til et søkeprogram, for eksempel hele søketreet til A\*. Hver handling er et beregningssteg, som å ekspandere et blad.
Selve problemet, som Romania-kartet, er *object-level state space*. Fig. 3.18 (A\* mot Bucharest) er en sti i metalevel-rommet, og ekspansjonen av Fagaras var et unyttig steg.
*Metalevel learning* lærer av slike feilsteg og unngår lite lovende deltrær. Målet er lavest total kostnad: beregning pluss path cost.

**Husk:** metalevel betyr å søke i rommet av søketrær for å spare beregning.

- Hva er en tilstand i metalevel state space? :: Den interne tilstanden til et søkeprogram, for eksempel søketreet til A*; handlingene er beregningssteg.
- Hva prøver metalevel learning å minimere? :: Total kostnad for problemløsningen: beregningskostnad pluss path cost.

## 3.6.6 Learning heuristics from experience
<!-- prio: C | ep: E03 | forelest: nei -->

I stedet for et relaxed problem kan h læres fra erfaring: løs mange 8-puzzles optimalt og bruk løsningene som eksempler.
Læringen går bedre med *features* av tilstanden, som x₁(n) = antall brikker på feil plass og x₂(n) = antall nabopar som ikke er naboer i målet. Kanskje er snittkostnaden rundt 14 når x₁ = 5.
Vanlig er en lineær kombinasjon h(n) = c₁x₁(n) + c₂x₂(n), der c₁ og c₂ tilpasses dataene. Begge forventes å være positive.
En slik h gir 0 i målet, men er ikke nødvendigvis admissible eller consistent. Det gir en avveining mellom læretid, søketid og løsningskostnad.

**Husk:** en lært h = c₁x₁ + c₂x₂ er rask å få til, men kan overestimere.

- Hvor kommer treningsdata fra når h læres fra erfaring? :: Fra mange løste problemer, for eksempel optimale løsninger av 8-puzzles.
- Hvordan kombineres features til en lært heuristikk? :: Lineært: h(n) = c₁x₁(n) + c₂x₂(n), med konstanter tilpasset dataene.
- Er en lært heuristikk admissible? :: Ikke nødvendigvis, og heller ikke nødvendigvis consistent, selv om den gir 0 i målet.

## 4.1.1 Hill-climbing search: ridges, sideways moves og random restart
<!-- prio: A | ep: E04 | forelest: delvis | eksamen: 2023, 2024 -->

L3 dekket hill climbing, local maxima og plateaus.
En *ridge* er en rekke lokale maksima som ikke henger direkte sammen. Fra hver av dem peker alle tilgjengelige trekk nedover, så grådig klatring blir stående.
*Sideways move*: gå til en like god nabo i håp om at platået er en *shoulder*. På en flat topp ville søket vandret for alltid, så antall sidesteg på rad begrenses, for eksempel til 100.
På 8-dronninger løses da 94 % i stedet for 14 %, men det koster rundt 21 steg per treff og 64 per bom (mot 4 og 3).

*Stochastic hill climbing* velger tilfeldig blant trekkene oppover. *First-choice hill climbing* lager tilfeldige naboer til én er bedre, og passer når en tilstand har tusenvis av naboer.
*Random-restart hill climbing* kjører hill climbing fra tilfeldige starter til den finner et mål. Den er complete med sannsynlighet 1, fordi den før eller siden starter i et mål.
Lykkes hver klatring med sannsynlighet p, trengs 1/p forsøk i snitt. Forventet antall steg er (steg ved treff) + (1 − p)/p · (steg ved bom).
Eksempel: p = 0,5, 5 steg ved treff og 4 ved bom gir 2 forsøk og 5 + 1 · 4 = 9 steg. For 8-dronninger gir p ≈ 0,14 omtrent 7 forsøk og 22 steg.

**Husk:** sideways moves krysser platåer med en grense, og random restart er complete med sannsynlighet 1 og trenger 1/p forsøk.

- Hva er en ridge i et state-space landscape? :: En rekke lokale maksima som ikke henger direkte sammen, der alle trekk fra hvert maksimum går nedover.
- Hva er et sideways move? :: Et trekk til en nabo med samme verdi, i håp om at platået er en shoulder.
- Hvorfor begrenses antall sideways moves på rad? :: På et flatt lokalt maksimum ville søket ellers vandre rundt for alltid.
- Når passer first-choice hill climbing? :: Når en tilstand har svært mange naboer: den lager tilfeldige naboer til én er bedre.
- Hvorfor er random-restart hill climbing complete med sannsynlighet 1? :: Den vil før eller siden generere en måltilstand som starttilstand.
- Hver klatring lykkes med p = 0,5 og bruker 5 steg ved treff og 4 ved bom. Forventet antall forsøk og steg? :: 1/p = 2 forsøk og 5 + (0,5/0,5) · 4 = 9 steg.

## 4.1.3 Local beam search
<!-- prio: A | ep: E04 | forelest: nei | eksamen: 2024 | merk: 2024 oppg. 6 nevner søk langs flere stier med en populasjon -->

*Local beam search* holder k tilstander i stedet for én, og starter med k tilfeldige.
Hvert steg lager den alle etterfølgerne til alle k. Er én av dem et mål, stopper den. Ellers beholder den de k beste fra hele lista.
Eksempel, k = 2 og høyere er bedre: A = 5 har barn 7 og 6, B = 3 har barn 4 og 2. Søket beholder 7 og 6, begge fra A, og B-sporet forlates.

Dette er ikke k uavhengige random restarts. Der klatrer hvert søk for seg, mens beam search flytter innsatsen dit fremgangen er størst.
Svakhet: de k tilstandene kan klumpe seg i et lite område, og da blir søket en k ganger tregere hill climbing.
*Stochastic beam search* velger derfor etterfølgere tilfeldig med sannsynlighet proporsjonal med verdien. I eksempelet blir barnet med verdi 7 valgt med sannsynlighet 7/19 ≈ 0,37 i hvert trekk.
Ikke bland med beam search i 3.5.5, som begrenser frontier i A\* til de k beste nodene.

**Husk:** k tilstander, alle etterfølgerne i én pott, behold de k beste.

- Hvordan virker ett steg i local beam search? :: Lag alle etterfølgerne til alle k tilstandene, stopp hvis én er mål, ellers behold de k beste av hele lista.
- Hvordan skiller local beam search seg fra k random restarts i parallell? :: Restartene er uavhengige; i beam search konkurrerer alle etterfølgerne, så innsatsen flyttes dit fremgangen er størst.
- Hva er hovedsvakheten til local beam search? :: Lite diversitet: de k tilstandene klumper seg, og søket blir en k ganger tregere hill climbing.
- Hva gjør stochastic beam search annerledes? :: Velger etterfølgere tilfeldig med sannsynlighet proporsjonal med verdien, i stedet for bare de k beste.
- k = 2: A (5) har barn 7 og 6, B (3) har barn 4 og 2. Hvilke tilstander beholdes? :: 7 og 6, begge barn av A; B forlates.
- Stochastic beam search, barneverdier 7, 6, 4 og 2. Sannsynlighet for å velge 7 i ett trekk? :: 7/19 ≈ 0,37.

## 4.1.4 Evolutionary algorithms: mutation
<!-- prio: A | ep: E04 | forelest: delvis | eksamen: 2022, 2024 -->

L3 dekket populasjon, fitness, seleksjon og crossover, men slidene utelater mutation.
*Mutation rate* sier hvor ofte et barn får tilfeldige endringer: når barnet er laget, endres hver posisjon med sannsynlighet lik mutation rate.
I GENETIC-ALGORITHM (Fig. 4.8) skjer det rett etter REPRODUCE: med liten sannsynlighet blir barnet MUTATE-et før det legges i den nye populasjonen.

For 8-dronninger betyr det å flytte en tilfeldig dronning til en tilfeldig rute i samme kolonne. I Fig. 4.6 blir barnet 32748552 til 32748152: dronningen i kolonne 6 flytter fra rad 5 til rad 1 (rad 1 er nederst).
Crossover kan bare blande verdier som alt finnes i populasjonen. Mutation gir nye verdier, holder på variasjonen og kan hjelpe søket ut av lokale optima.
Crossover tar ofte store steg tidlig, mens populasjonen er variert. Mutation er en liten tilfeldig endring, og den kan like gjerne gjøre barnet dårligere.

**Husk:** crossover blander det som finnes, mutation lager noe nytt.

- Hva er mutation rate i en genetisk algoritme? :: Sannsynligheten for at hver posisjon i et nytt barn endres tilfeldig.
- Hva tilsvarer mutation i 8-dronninger? :: Å flytte en tilfeldig valgt dronning til en tilfeldig rute i samme kolonne.
- Barnet 32748552 muteres til 32748152. Hva skjedde på brettet? :: Dronningen i kolonne 6 flyttet fra rad 5 til rad 1.
- Hvorfor trenger en genetisk algoritme mutation? :: Crossover blander bare verdier som finnes; mutation gir nye verdier og holder variasjonen i populasjonen.
- Hvor i GENETIC-ALGORITHM (Fig. 4.8) skjer mutation? :: Rett etter REPRODUCE: med liten sannsynlighet muteres barnet før det legges i den nye populasjonen.
- Kan mutation gjøre et barn dårligere? :: Ja. Endringen er tilfeldig og kan senke fitness.

## 4.2 Local Search in Continuous Spaces: empirical gradient, Newton–Raphson og constrained optimization
<!-- prio: B | ep: E04 | forelest: delvis | merk: 2024 og 2025 spør om gradient descent generelt, ikke om delene her -->

L3 dekket gradient-ideen. Bokas eksempel: plasser tre flyplasser i Romania så summen av kvadrerte avstander fra hver by til nærmeste flyplass blir minst. Tilstanden er seks variabler.
*Diskretisering*: flytt én variabel ±δ, så hver tilstand får 12 naboer. Steepest ascent i dette rommet heter *empirical gradient*: du måler endringen i f mellom nære punkter.
*Line search*: gå i gradientretningen og doble steglengden α til f begynner å bli dårligere.

*Newton–Raphson* finner nullpunkt med x ← x − g(x)/g′(x). Brukt på ∇f = 0 blir det x ← x − H_f⁻¹(x)∇f(x), der *Hessian* H_f er matrisen av andrederiverte. I én dimensjon: x ← x − f′(x)/f″(x).
Eksempel: f(x) = 8x − x², start i x = 1. f′(1) = 6 og f″ = −2, så x ← 1 − 6/(−2) = 4, rett på toppen fordi f er kvadratisk. Empirical gradient med δ = 1 trenger tre steg (1 → 2 → 3 → 4).
For flyplassene flytter ett Newton-steg hver flyplass til centroiden av byene sine. I mange dimensjoner er det dyrt å regne ut og invertere Hessian.

*Constrained optimization*: løsningen må oppfylle harde krav, som at flyplassene ligger på tørt land i Romania.
*Linear programming* har lineære ulikheter (en konveks mengde) og lineær objective, og løses i polynomisk tid. Det er et spesialtilfelle av *convex optimization*.

**Husk:** empirical gradient er hill climbing på et rutenett, og Newton hopper til toppen av en tilpasset parabel.

- Hva er empirical gradient search? :: Steepest-ascent hill climbing i en diskretisert versjon av rommet, der endringen i f måles mellom nære punkter.
- Hva er Newton–Raphson-oppdateringen for å finne et optimum? :: x ← x − H_f⁻¹(x)∇f(x); i én dimensjon x ← x − f′(x)/f″(x).
- f(x) = 8x − x², start i x = 1. Hvor havner ett Newton-steg? :: I x = 1 − 6/(−2) = 4, toppen, fordi f er kvadratisk.
- Hva kjennetegner linear programming? :: Lineære ulikheter som danner en konveks mengde og en lineær objective; løses i polynomisk tid.

## 4.3.3 Try, try again: slippery vacuum world og cyclic solutions
<!-- prio: B | ep: E05 | forelest: delvis -->

L3 viste bare figuren og henviste til boka.
I *slippery vacuum world* kan flytte-handlinger feile slik at agenten blir stående: Right fra tilstand 1 gir {1, 2}. Suck virker som vanlig.
Det finnes da ingen asyklisk løsning fra 1. Et av utfallene fører alltid tilbake til en tilstand på stien, så AND-OR-SEARCH returnerer failure.

En *cyclic solution* prøver igjen til det virker: [Suck, while State = 5 do Right, Suck], eller med label: [Suck, L1: Right, if State = 5 then L1 else Suck].
Minstekrav for at en syklisk plan er en løsning: hvert blad er en måltilstand, og et blad kan nås fra hvert punkt i planen.
Det hjelper bare hvis feilen er tilfeldig og uavhengig hver gang. Er drivreima røket, hjelper det aldri å prøve igjen. Da modelleres problemet heller som partially observable og deterministisk, med drivreima som skjult egenskap.

**Husk:** glatt gulv gir en løkke som prøver igjen, men en skjult varig feil gjør løkka nytteløs.

- Hvorfor finner AND-OR-SEARCH ingen plan i slippery vacuum world? :: Det finnes ingen asyklisk løsning; et utfall fører alltid tilbake til en tilstand på stien.
- Skriv en cyclic plan for slippery vacuum world fra tilstand 1. :: [Suck, while State = 5 do Right, Suck].
- Hva er minstekravet for at en cyclic plan er en løsning? :: Hvert blad er en måltilstand, og et blad kan nås fra hvert punkt i planen.
- Når hjelper det ikke å gjenta en handling som feiler? :: Når feilen skyldes en skjult varig årsak, som en røket drivreim, og ikke tilfeldig glipp.

## 4.4.4 An agent for partially observable environments
<!-- prio: A | ep: E05 | forelest: nei | eksamen: 2023 -->

Agenten lager en plan, for eksempel med AND-OR-SEARCH, og utfører den. Planen er en conditional plan, så agenten må teste if-betingelsene underveis. Og den må holde belief state oppdatert mens den handler.
Etter handling a og percept o: b′ = UPDATE(PREDICT(b, a), o). Percepten kommer fra miljøet, så agenten trenger ikke regne den ut.
Dette heter *monitoring*, *filtering* eller *state estimation*. Ligningen er en *recursive state estimator*: ny b regnes fra forrige b, ikke fra hele percept-sekvensen, og må holde følge med perceptene.

*Localization*: finn ut hvor roboten er, gitt et kart og en sekvens av percepter og handlinger. Bokas robot har fire sonarer, og percepten er fire biter i rekkefølgen N, Ø, S, V. 1011 betyr hindring i nord, sør og vest.
Med ikke-deterministiske handlinger gjør PREDICT belief state større, og UPDATE gjør den mindre igjen.
Eksempel: korridor med rute 1–4 fra vest til øst og vegg i nord og sør overalt. Rute 1 gir 1011, rute 4 gir 1110, og rute 2 og 3 gir 1010. Start b = {1, 2, 3, 4}. Percept 1010 gir {2, 3}. Flytt til en tilfeldig nabo gir {1, 2, 3, 4}. Percept 1110 gir {4}.
I en lang øst–vest-korridor kan roboten få 1010 gang på gang uten å vite hvor den er. Med upålitelige sensorer og bare Boolean logikk gir percepten ingen informasjon, men med sannsynligheter hjelper en sensor som tar feil mindre enn halve tiden.

**Husk:** b′ = UPDATE(PREDICT(b, a), o): predict vokser, update krymper.

- Hvordan oppdaterer agenten belief state etter handling a og percept o? :: b′ = UPDATE(PREDICT(b, a), o).
- Hvilke tre navn har vedlikehold av belief state? :: Monitoring, filtering og state estimation.
- Hva er localization? :: Å finne ut hvor roboten er, gitt et kart og en sekvens av percepter og handlinger.
- Hva betyr sonar-percepten 1011 med bitene i rekkefølgen N, Ø, S, V? :: Hindring i nord, sør og vest, åpent mot øst.
- Hva gjør PREDICT og UPDATE med størrelsen på belief state? :: PREDICT kan gjøre den større (ikke-deterministiske handlinger); UPDATE gjør den mindre.
- Korridor 1–4: rute 1 gir 1011, rute 2–3 gir 1010, rute 4 gir 1110. Percept 1010, flytt til tilfeldig nabo, percept 1110. Belief state? :: {4}. 1010 gir {2, 3}, flyttet gir {1, 2, 3, 4}, og 1110 gir {4}.

## 4.5.1 Online search problems: competitive ratio
<!-- prio: B | ep: E05 | forelest: delvis -->

L3 dekket offline mot online søk: online-agenten må bevege seg for å oppdage grafen. Den kjenner bare ACTIONS(s), c(s, a, s′) når s′ er sett, IS-GOAL(s) og kanskje en admissible h.
*Competitive ratio* = kostnaden agenten faktisk betaler delt på kostnaden til optimal sti hvis rommet var kjent. Den skal være så liten som mulig. Går agenten 12 der beste vei er 4, er forholdet 3.

En *dead end* er en tilstand der ingen mål kan nås, for eksempel etter en *irreversible action* (trapp, stup). Ingen algoritme unngår dead ends i alle rom: i et *adversary argument* bygger en motstander rommet mens agenten leter, og legger blindveien der agenten går.
Derfor antas rommet *safely explorable*: et mål kan nås fra hver nåbar tilstand.
Selv da finnes ingen begrenset competitive ratio hvis stier kan ha ubegrenset kostnad, som lange tynne vegger (Fig. 4.20b). Ytelsen måles derfor ofte mot størrelsen på hele tilstandsrommet.

**Husk:** competitive ratio = faktisk kostnad / optimal kostnad med kjent kart.

- Hva er competitive ratio for en online-søkeagent? :: Kostnaden agenten faktisk betaler delt på kostnaden til optimal sti hvis rommet var kjent på forhånd.
- Agenten går en sti som koster 12, og beste sti med kjent kart koster 4. Competitive ratio? :: 12 / 4 = 3.
- Hva betyr safely explorable? :: At et mål kan nås fra hver nåbar tilstand.
- Hvorfor kan ingen online-algoritme unngå dead ends i alle tilstandsrom? :: En motstander kan bygge rommet mens agenten leter og legge blindveien der agenten går (adversary argument).

## 4.5.2 Online search agents
<!-- prio: B | ep: E05 | forelest: nei -->

Offline søk utforsker en modell og kan ekspandere en node langt unna den forrige. Online søk utforsker den virkelige verden og ser bare etterfølgerne til tilstanden agenten står i.
Derfor passer dybde-først: neste node er, utenom backtracking, et barn av den forrige.
ONLINE-DFS-AGENT (Fig. 4.21) lagrer kartet i result[s, a], uprøvde handlinger i untried[s] og forgjengere den ikke har gått tilbake til i unbacktracked[s].

Har tilstanden uprøvde handlinger, prøver den én. Er alle prøvd, går den fysisk tilbake til tilstanden den sist kom fra. Er det heller ingen slike, er søket ferdig.
Det krever reversible handlinger. I verste fall går agenten hver kant nøyaktig to ganger. Det er optimalt for utforsking, men for å finne et mål kan competitive ratio bli vilkårlig dårlig.
En online variant av iterative deepening løser det: på et jevnt tre blir forholdet en liten konstant.

**Husk:** online DFS går fysisk tilbake, så handlingene må kunne reverseres.

- Hvorfor passer dybde-først-søk for online-agenter? :: Agenten kan bare ekspandere tilstanden den står i, og DFS ekspanderer et barn av forrige node, så den slipper å reise langt.
- Hvilke tre tabeller bruker ONLINE-DFS-AGENT? :: result[s, a], untried[s] og unbacktracked[s].
- Hvorfor virker ONLINE-DFS-AGENT bare med reversible handlinger? :: Når alle handlinger i en tilstand er prøvd, må den fysisk gå tilbake til tilstanden den kom fra.
- Hvor mange ganger går ONLINE-DFS-AGENT hver kant i verste fall? :: To ganger. Det er optimalt for utforsking, men competitive ratio for å finne et mål kan bli vilkårlig dårlig.

## 4.5.3 Online local search
<!-- prio: A | ep: E05 | forelest: nei | merk: LRTA* står i 4.5.3 i boka; L3 viste bare Fig. 4.23, som PENSUMOVERSIKT fører under 4.5.4 -->

Hill climbing holder én tilstand og er derfor allerede et online søk. Men den blir stående på lokale maksima, og random restart går ikke, fordi agenten ikke kan teleportere seg.
*Random walk* velger en tilfeldig handling, helst en som ikke er prøvd. Den finner målet til slutt i et endelig, safely explorable rom, men kan bruke eksponentielt mange steg der det er mer sannsynlig å gå bakover enn fremover (Fig. 4.22).
Bedre er å gi hill climbing hukommelse. *LRTA\** (learning real-time A\*) lagrer kartet i result[s, a] og et estimat H(s) for hver besøkt tilstand, som starter lik h(s).

Når agenten forlater s, settes H(s) ← min over handlinger av c(s, a, s′) + H(s′), og den går dit c + H er minst. En uprøvd handling antas å føre rett til mål med kostnad h(s) (*optimism under uncertainty*), og det lokker agenten til å utforske.
Fig. 4.23 har seks tilstander på rad, alle kanter koster 1, og H = 8 9 2 2 4 3. Agenten står i den tredje: venstre 1 + 9 = 10, høyre 1 + 2 = 3, så H ← 3 og den går høyre.
I den fjerde: venstre 1 + 3 = 4, høyre 1 + 4 = 5, så H ← 4 og den går tilbake. Etter to runder til er dalen fylt opp (8 9 5 5 4 3), og agenten slipper ut mot høyre.
LRTA\* finner alltid målet i et endelig, safely explorable miljø, men ikke nødvendigvis i et uendelig. Verste fall er O(n²) steg for n tilstander.

**Husk:** H(s) ← min (c + H(nabo)) for tilstanden du forlater, gå dit c + H er minst, og en uprøvd handling koster h(s).

- Hva er svakheten til random walk som online-utforsking? :: Den kan bruke eksponentielt mange steg når det er mer sannsynlig å gå bakover enn fremover.
- Hva lagrer LRTA* for hver besøkt tilstand? :: Et kostnadsestimat H(s), som starter lik heuristikken h(s).
- Hvordan oppdaterer LRTA* H for tilstanden s den forlater? :: H(s) ← min over handlinger a av c(s, a, s′) + H(s′).
- LRTA*: H = 8 9 2 2 4 3, alle kanter koster 1, agenten står i den tredje. Ny H og retning? :: Venstre 1 + 9 = 10, høyre 1 + 2 = 3, så H ← 3 og agenten går høyre.
- Hva er optimism under uncertainty i LRTA*? :: En uprøvd handling antas å føre rett til mål med kostnad h(s), så agenten prøver den.
- Når er LRTA* garantert å finne målet? :: I ethvert endelig, safely explorable miljø.

## 4.5.4 Learning in online search
<!-- prio: C | ep: E05 | forelest: nei | merk: PENSUMOVERSIKT sier «L3 (figur)», men figuren (LRTA*) står i 4.5.3 -->

En online-agent lærer to ting: et kart (utfallet av hver handling i hver tilstand) og bedre kostnadsestimater H(s) gjennom lokale oppdateringer som i LRTA\*.
Utforsker agenten riktig, går H mot eksakte verdier. Da er ren hill climbing, altså å gå til billigste etterfølger, optimal.
ONLINE-DFS-AGENT lærer ikke generelle regler som «Up øker y hvis det ikke står en vegg i veien». Det krever en formell representasjon av regler og algoritmer som lærer dem.
*Incremental search*: skal agenten løse mange like problemer, kan den gjenbruke søketreet, h-verdiene eller g-verdiene og oppdatere dem når verden endrer seg.

**Husk:** online-agenten lærer kartet og H, og når H er eksakt, er hill climbing optimal.

- Hvilke to ting lærer en online-søkeagent av erfaring? :: Kartet (utfallet av hver handling i hver tilstand) og bedre kostnadsestimater H(s).
- Hva er optimal strategi når H(s) er eksakt for alle tilstander? :: Ren hill climbing: gå til etterfølgeren med lavest kostnad.
- Hva er incremental search? :: Å gjenbruke søketre, h-verdier eller g-verdier fra tidligere søk når nye, like problemer skal løses.

<!-- usikker: I US-teksten står LRTA* (Fig. 4.23–4.24) i 4.5.3, mens PENSUMOVERSIKT og oppdraget plasserer LRTA* i 4.5.4. Global-innholdsfortegnelsen viser bare 4.5, så inndelingen i Global er ikke sjekket. Blokkene følger US-teksten. -->

## 5.1.2 Example problem: Job-shop scheduling
<!-- prio: B | ep: E06 | forelest: nei -->

En fabrikk som skal planlegge dagens jobber, kan løse det som en CSP. Hver oppgave er en variabel, og verdien er starttiden i hele minutter.
Bokas eksempel er en del av en bilmontering med 15 oppgaver: to aksler, fire hjul, fire sett muttere, fire navkapsler og til slutt Inspect.

**Precedence constraint:** skal T₁ (varighet d₁) være ferdig før T₂ starter, krever du T₁ + d₁ ≤ T₂. Akselen tar 10 min, så AxleF + 10 ≤ WheelRF. Per hjul: Wheel + 1 ≤ Nuts og Nuts + 2 ≤ Cap.
**Disjunctive constraint:** de to akslene deler ett verktøy og kan ikke monteres samtidig: (AxleF + 10 ≤ AxleB) or (AxleB + 10 ≤ AxleF). Den ser sammensatt ut, men er fortsatt bare en mengde lovlige verdipar.

Inspect tar 3 min og kommer sist: X + dₓ ≤ Inspect for alle andre X. Kravet om at alt er ferdig på 30 min legges i domenene: Dᵢ = {0, 1, …, 30}.

**Husk:** Starttidene er variablene, «før» blir T₁ + d₁ ≤ T₂, og «ikke samtidig» blir en disjunctive constraint.

- I job-shop scheduling som CSP, hva er variablene og verdiene? :: Hver oppgave er en variabel, og verdien er starttiden i hele minutter.
- Hvordan skrives at T1 (varighet d1) må være ferdig før T2 starter? :: Som en precedence constraint: T1 + d1 ≤ T2.
- Hvordan uttrykkes at to aksler som deler ett verktøy, ikke kan monteres samtidig? :: Med en disjunctive constraint: (AxleF + 10 ≤ AxleB) or (AxleB + 10 ≤ AxleF).
- Hvordan legger bokas eksempel inn kravet om at alt skal være ferdig på 30 minutter? :: Ved å begrense domenene: Di = {0, 1, …, 30} for alle variablene.

<!-- avvik: E06-notatene og kompendiet bruker Dᵢ = {0, …, 30 − dᵢ}. Boka skriver Dᵢ = {0, 1, 2, 3, …, 30}. Blokken følger boka. -->

## 5.1.3 Variations on the CSP formalism: hypergraph, auxiliary variables og preference constraints
<!-- prio: B | ep: E06 | forelest: delvis -->

L4 tok Alldiff og TWO + TWO = FOUR. Dette står bare i boka:
- **Constraint hypergraph:** variablene er vanlige noder (sirkler), og hver n-ær constraint er en hypernode (firkant) koblet til variablene den gjelder.
- **Auxiliary variables:** mentene C1, C2 og C3 i TWO + TWO = FOUR er hjelpevariabler. Med nok av dem kan enhver constraint med endelige domener skrives om til binære constraints.
- **Dual graph:** hver constraint blir en variabel med de lovlige tuplene som domene, og to slike får en binær constraint når de deler en opprinnelig variabel.

Bokas dual graph-eksempel: C1: X + Y = Z og C2: X + 1 = Y, alle i {1, …, 5}. Tuplene som passer sammen på X og Y, er ((1, 2, 3), (1, 2)) og ((2, 3, 5), (2, 3)).
Alldiff er likevel ofte bedre enn mange ≠: den er lettere å skrive riktig, og den har egne, raskere inferensmetoder (5.2.5).

**Preference constraint:** sier hva som er best, ikke hva som er lov (prof. R vil helst undervise om morgenen). En absolute constraint utelukker derimot løsningen helt.
Gjør ønsket om til en kostnad per tilordning (morgen 1, ettermiddag 2), så blir problemet et constrained optimization problem (COP). Linear programming er én type COP.

**Husk:** n-ære constraints kan tegnes som hypergraph eller gjøres binære (auxiliary variables, dual graph), og myke ønsker gjør en CSP til en COP.

- Hva er en hypernode i en constraint hypergraph? :: En node (firkant) for en n-ær constraint, koblet til alle variablene den gjelder.
- Hvilken rolle har C1, C2 og C3 i TWO + TWO = FOUR? :: De er auxiliary variables for mentene. Med nok hjelpevariabler kan enhver endelig constraint gjøres binær.
- Hvordan lages en dual graph? :: Hver constraint blir en variabel med de lovlige tuplene som domene, og constraints som deler variabler, kobles med en binær constraint.
- Hva er en preference constraint, og hva blir problemet når du legger dem inn? :: Den sier hva som er best, ikke hva som er lov. Gjort om til kostnader blir problemet en COP.

## 5.2.1 Node consistency
<!-- prio: A | ep: E06 | forelest: nei | eksamen: 2020k | merk: 2020k er kontinuasjonen aug. 2021 (kryssordet) -->

En variabel er node-consistent når hver verdi i domenet oppfyller variabelens unary constraints. Grafen er node-consistent når alle variablene er det.
Bokas eksempel: South Australia tåler ikke grønt, ⟨(SA), SA ≠ green⟩. Fra {red, green, blue} stryker du green, og D(SA) = {red, blue}.

Kryssordet på kontinuasjonen (aug. 2021): «V1 har fem bokstaver» er en unary constraint. Node consistency gir V1 = {astar, happy, hello, hoses}. Oppgaven spurte om det (c) før AC-3 (d).
Unary constraints kan fjernes én gang for alle ved å krympe domenene før søket, og n-ære kan gjøres binære. Derfor antar mange løsere, og resten av kapitlet, at alle constraints er binære.

**Husk:** Node consistency stryker verdier som bryter en unary constraint, og gjøres én gang før AC-3.

- Når er en variabel node-consistent? :: Når hver verdi i domenet oppfyller alle unary constraints på variabelen.
- SA har domenet {red, green, blue} og constrainten SA ≠ green. Hva gir node consistency? :: D(SA) = {red, blue}.
- Hvilken type constraint bruker node consistency, og hvilken bruker arc consistency? :: Node consistency bruker unary constraints (én variabel). Arc consistency bruker binary constraints (to variabler).
- Kryssord: V1 skal ha 5 bokstaver, og ordlista er astar, happy, ant, live, hello. Hva er D(V1) etter node consistency? :: {astar, happy, hello}.
- Hvorfor kan mange CSP-løsere anta at alle constraints er binære? :: Unary constraints fjernes ved å krympe domenene før søket, og n-ære kan skrives om til binære.

## 5.2.3 Path consistency
<!-- prio: A | ep: E06 | forelest: nei -->

Arc consistency strammer inn domenene ved hjelp av binære constraints. Path consistency strammer inn selve de binære constraintene ved å se på tre variabler om gangen.
**Definisjon:** {Xi, Xj} er path-consistent mot Xm hvis hvert lovlig par (Xi = a, Xj = b) kan utvides med en verdi for Xm som passer med både Xi og Xj. Navnet kommer av stien Xi → Xm → Xj.

**Bokas eksempel, Australia med to farger:** AC-3 stryker ingenting, fordi hver farge har en partner. Lovlige par for {WA, SA} er (red, blue) og (blue, red).
I begge parene må NT være ulik både WA og SA, og det finnes ingen tredje farge. Begge parene strykes, ingen er igjen, og problemet har ingen løsning.

**Egen illustrasjon:** X, Y, Z ∈ {1, 2} med X ≠ Y og Y ≠ Z, og ingen constraint mellom X og Z. Gjør {X, Z} path-consistent mot Y:
- (1, 1): Y = 2 passer. Behold. (2, 2): Y = 1 passer. Behold.
- (1, 2) og (2, 1): Y må være ulik både 1 og 2. Stryk.

Resultatet er en ny, utledet constraint X = Z. AC-3 kan ikke finne den, fordi den bare ser på én bue om gangen.

**Husk:** Path consistency sjekker trekanter: hvert lovlig par for to variabler må ha en partner i den tredje, ellers strykes paret.

- Hva strammer path consistency inn, sammenlignet med arc consistency? :: Path consistency strammer inn binære constraints (lovlige par). Arc consistency strammer bare inn domenene.
- Når er {Xi, Xj} path-consistent mot Xm? :: Når hvert lovlig par (Xi = a, Xj = b) kan utvides med en verdi for Xm som passer med begge.
- Australia med to farger: hva gjør AC-3, og hva gjør path consistency for {WA, SA} mot NT? :: AC-3 stryker ingenting. Path consistency stryker både (red, blue) og (blue, red), så det finnes ingen løsning.
- X, Y, Z ∈ {1, 2}, X ≠ Y og Y ≠ Z. Hvilke par (X, Z) overlever path consistency mot Y? :: (1, 1) og (2, 2). Det gir den utledede constrainten X = Z.
- Hvor mange variabler ser path consistency på om gangen? :: Tre: to variabler i et par og en tredje i midten.
- Hvilken k-consistency er path consistency i en binær constraint-graf? :: 3-consistency.

## 5.2.4 K-consistency
<!-- prio: B | ep: E06 | forelest: nei -->

En CSP er k-consistent hvis enhver consistent tilordning til k − 1 variabler kan utvides med en consistent verdi for en hvilken som helst k-te variabel.
Huskeregel: 1 = node, 2 = arc, 3 = path (i binære constraint-grafer).
**Strongly k-consistent:** k-consistent og i tillegg (k − 1)-, (k − 2)- og så videre ned til 1-consistent.

Er en CSP med n variabler strongly n-consistent, løses den uten backtracking: velg en verdi for X1, så finnes det alltid en for X2, X3 og så videre.
Hver variabel krever at du sjekker høyst d verdier mot de forrige, så alt tar O(n²d).
Haken: CSP er NP-complete generelt, så å etablere n-consistency tar eksponentiell tid og plass i n i verste fall. I praksis er 2-consistency vanlig og 3-consistency sjeldnere.

**Husk:** Strongly n-consistency gir løsning uten backtracking i O(n²d), men det koster eksponentielt å komme dit.

- Hva betyr det at en CSP er k-consistent? :: Enhver consistent tilordning til k − 1 variabler kan utvides med en consistent verdi for en vilkårlig k-te variabel.
- Hva heter 1-, 2- og 3-consistency? :: Node consistency, arc consistency og (i binære grafer) path consistency.
- Hva er forskjellen på k-consistent og strongly k-consistent? :: Strongly krever i tillegg (k − 1)-, (k − 2)- og så videre ned til 1-consistency.
- Hva vinner du, og hva koster det, med strongly n-consistency? :: Løsning uten backtracking i O(n²d), men å etablere den tar eksponentiell tid og plass i verste fall.

## 5.2.5 Global constraints: bounds propagation
<!-- prio: A | ep: E06 | forelest: delvis -->

L4 tok Alldiff. Boka har i tillegg resource constraints og bounds propagation.
**Atmost (resource constraint):** Atmost(10, P1, P2, P3, P4) betyr at P1 + … + P4 ≤ 10. Med domenet {3, 4, 5, 6} for alle er minstesummen 12 > 10: inkonsistent.
Med domenet {2, …, 6} er de tre andre minst 6 til sammen, så hver kan være høyst 4. Stryk 5 og 6.

**Bounds propagation:** store heltallsdomener lagres bare som [min, max], og grensene strammes inn.
Bokas fly: F1 ∈ [0, 165], F2 ∈ [0, 385] og F1 + F2 = 420. F1 ≥ 420 − 385 = 35 og F2 ≥ 420 − 165 = 255, så D1 = [35, 165] og D2 = [255, 385].
**Bounds-consistent:** for hver variabel X har både nedre og øvre grense en verdi i hver annen variabel Y som oppfyller constrainten mellom dem.

**Egen illustrasjon:** X + Y = 12, X ∈ [0, 5], Y ∈ [0, 10]. Nedre: X ≥ 12 − 10 = 2 og Y ≥ 12 − 5 = 7. Øvre: X ≤ 12 − 7 = 5 og Y ≤ 12 − 2 = 10, uendret. Svar: X ∈ [2, 5], Y ∈ [7, 10].

**Husk:** For X + Y = S: ny min for X er S − max(Y), ny max er S − min(Y), snittet med det gamle intervallet.

- Hva er bounds propagation? :: Domener lagres bare som [min, max], og grensene strammes inn med constraintene i stedet for å stryke enkeltverdier.
- F1 ∈ [0, 165], F2 ∈ [0, 385] og F1 + F2 = 420. Hva gir bounds propagation? :: F1 ∈ [35, 165] og F2 ∈ [255, 385].
- X + Y = 12, X ∈ [0, 5], Y ∈ [0, 10]. Hva gir bounds propagation? :: X ∈ [2, 5] og Y ∈ [7, 10].
- Når er en CSP bounds-consistent? :: Når både nedre og øvre grense for hver variabel X har en verdi i hver annen variabel Y som oppfyller constrainten.
- Atmost(10, P1, …, P4) der alle domener er {3, 4, 5, 6}. Er det konsistent? :: Nei. Minstesummen er 4 · 3 = 12 > 10.
- Atmost(10, P1, …, P4) der alle domener er {2, …, 6}. Hva kan strykes? :: 5 og 6 fra hvert domene, fordi de tre andre til sammen er minst 6.

## 5.3.1 Variable and value ordering: degree heuristic
<!-- prio: A | ep: E07 | forelest: delvis | eksamen: 2016, 2017 -->

L4, AL2 og L13 tok MRV og LCV. Degree heuristic står bare i boka.
**Degree heuristic:** velg variabelen som er med i flest constraints mot andre *utilordnede* variabler. Målet er lavere branching factor i senere valg.

Den trengs når MRV står likt, for eksempel ved start i Australia, der alle har tre farger. Grader: SA 5, NT, Q og NSW 3, WA og V 2, T 0. Degree velger SA.
Ifølge boka løses kartet etter SA uten et eneste tilbakesteg: velg bare en lovlig farge ved hvert valg.

**Tell bare utilordnede naboer.** Etter SA = red og forward checking har WA, NT, Q, NSW og V {green, blue}, så MRV står likt.
Degree uten SA: WA 1, NT 2, Q 2, NSW 2, V 1. Kandidatene er NT, Q og NSW.
MRV er vanligvis den sterkeste. Degree brukes som tie-breaker.

**Husk:** Degree velger flest constraints mot utilordnede variabler, brukes ved likhet i MRV, og velger SA først i Australia.

- Hvilken variabel velger degree heuristic? :: Variabelen som er med i flest constraints mot andre utilordnede variabler.
- Hvorfor brukes degree heuristic? :: Den senker branching factor i senere valg, og den bryter likhet når MRV står likt.
- Hvilken variabel velger degree først i Australia, og hvorfor? :: SA, med grad 5. De andre har 2 eller 3, og T har 0.
- Australia etter SA = red og forward checking: hvem kan degree velge blant WA, NT, Q, NSW og V? :: NT, Q eller NSW. De har 2 utilordnede naboer hver, mens WA og V har 1.
- Hvilken er vanligvis sterkest, MRV eller degree, og hvordan kombineres de? :: MRV. Degree brukes som tie-breaker mellom MRV-kandidatene.

## 5.4 Local Search for CSPs: constraint weighting og tabu search
<!-- prio: B | ep: E07 | forelest: delvis -->

L4 og L13 tok min-conflicts. Boka legger til to triks mot platåer: med min-conflicts kan millioner av tilordninger være én konflikt fra en løsning. Sideways moves (plateau search) hjelper søket av platået.
**Tabu search:** hold en kort liste over nylig besøkte tilstander, og forby å gå tilbake til dem. Da vandrer søket videre i stedet for å gå i ring.

**Constraint weighting:** hver constraint har en vekt, først 1. I hvert steg velger du variabel og verdi som gir lavest sum av vekter på brutte constraints.
Etter steget økes vekten med 1 på hver constraint som er brutt i nåværende tilordning. Da får platåer helning, og søket lærer hvilke constraints som er vanskelige.
**Egen illustrasjon:** har C1 vært brutt i tre steg på rad, har den vekt 4. Et trekk som bare bryter C2 (vekt 1), koster da 1 og slår et trekk som bare bryter C1 (kost 4).

Lokalt søk passer også til å reparere en plan når noe endres, som en flyplan etter dårlig vær: start fra den gamle planen og gjør få endringer.

**Husk:** Tabu forbyr nylige tilstander; constraint weighting gjør brutte constraints tyngre, så platåer får helning.

- Hva gjør tabu search? :: Holder en kort liste over nylig besøkte tilstander og forbyr søket å gå tilbake til dem.
- Hvordan oppdateres vektene i constraint weighting? :: Alle starter på 1. Etter hvert steg økes vekten på hver constraint som er brutt i nåværende tilordning.
- Hvilke to fordeler gir constraint weighting? :: Platåer får helning, så et forbedrende steg finnes, og vanskelige constraints får høyere vekt (læring).
- Hvorfor er lokalt søk godt egnet når en flyplan må endres på grunn av dårlig vær? :: Det starter fra den gamle planen og finner raskt en ny med få endringer. Backtracking tar lengre tid og kan endre mye.

## 6.2.2 Optimal decisions in multiplayer games
<!-- prio: A | ep: E08 | forelest: nei | eksamen: 2022 -->

Med flere enn to spillere holder ett tall per node ikke. Hver node får en utility-vektor, for eksempel ⟨vA, vB, vC⟩, og UTILITY returnerer hele vektoren i terminaltilstander.
**Regel:** spilleren i trekket velger barnet med størst verdi på *sin egen* plass, og den vektoren blir nodens backed-up value.
I tospillers zero-sum er verdiene alltid motsatte, så vektoren kan erstattes med ett tall. Det er vanlig minimax.

**Egen illustrasjon:** A i roten velger L eller R. Under L velger B mellom ⟨5, 1, 2⟩ og ⟨2, 3, 4⟩. Under R velger C mellom ⟨1, 2, 6⟩ og ⟨4, 5, 3⟩.
- B tar ⟨2, 3, 4⟩ (3 > 1). C tar ⟨1, 2, 6⟩ (6 > 3).
- A sammenligner 2 mot 1 og velger L, med verdi ⟨2, 3, 4⟩. A får aldri 5, selv om 5 står under L.

**Allianser:** står A og B svakt mot en sterk C, lønner det seg for begge å angripe C. Samarbeidet kommer av ren egeninteresse og kan brytes når C er svekket.
Også to spillere kan samarbeide når spillet ikke er zero-sum: gir ett utfall begge maksimal utility (1000, 1000), jobber begge mot det.

**Husk:** Med n spillere har hver node en vektor, og hver spiller maksimerer sin egen komponent.

- Hvordan utvides minimax til tre spillere? :: Hver node får en utility-vektor ⟨vA, vB, vC⟩, og spilleren i trekket velger barnet med størst verdi på sin egen plass.
- C er i trekket og kan velge ⟨1, 2, 6⟩ eller ⟨4, 2, 3⟩. Hva blir nodens verdi? :: ⟨1, 2, 6⟩, fordi C ser på tredje tall og 6 > 3.
- Hvorfor holder ett tall per node i tospillers zero-sum? :: Verdiene til de to spillerne er alltid motsatte, så vektoren kan reduseres til ett tall.
- Rot A. Under L velger B mellom ⟨5,1,2⟩ og ⟨2,3,4⟩. Under R velger C mellom ⟨1,2,6⟩ og ⟨4,5,3⟩. Hva blir rotverdien? :: ⟨2, 3, 4⟩ via L. B gir ⟨2,3,4⟩, C gir ⟨1,2,6⟩, og A tar 2 > 1.
- Hvordan kan allianser oppstå i flerspillerspill? :: Svake spillere tjener hver for seg på å angripe en sterk felles motstander. Alliansen ryker når den sterke er svekket.
- Når vil to spillere samarbeide av seg selv? :: Når spillet ikke er zero-sum og ett utfall gir begge høyest mulig utility, for eksempel (1000, 1000).

## 6.2.4 Move ordering
<!-- prio: A | ep: E08 | forelest: nei -->

Hvor mye alpha-beta kutter, avhenger av rekkefølgen barna undersøkes i. Beste trekk først gir O(b^(m/2)), tilfeldig rekkefølge ca. O(b^(3m/4)) og verste rekkefølge O(bᵐ), som minimax.
Med perfekt rekkefølge blir effektiv branching factor √b (sjakk: 35 → ca. 6), så du rekker dobbelt så dypt på samme tid.
**Fig. 6.2** (B = 3, 12, 8; C = 2, 4, 6; D = 14, 5, 2): D kuttes ikke, fordi de dårligste svarene for MIN (14, 5) kommer først. Står 2 først i D, kuttes 14 og 5, og alpha-beta ser 5 blader i stedet for 7.

**Hvorfor b^(m/2)?** For å vise hvilket trekk som er best, må MAX se på alle b trekk. Men for å forkaste et trekk holder det med ett motsvar fra MIN, og med perfekt rekkefølge er det det første MIN prøver.
Lagene veksler da mellom «alle b barn» og «ett barn», så bladene blir ca. b · 1 · b · 1 ⋯ = b^(m/2). I Fig. 6.2: 3 blader under B, så 1 under C og 1 under D.

**I praksis:** en enkel sjakkrekkefølge (slag, trusler, framover, bakover) kommer innen faktor 2 av beste tilfelle. Enda bedre er å prøve først de trekkene som var best før.
Med iterative deepening gir hvert søk en rangering til neste, dypere søk. De beste trekkene heter killer moves, og å prøve dem først er killer move heuristic.
**Transposition table:** samme stilling kan nås med ulike trekkfølger, som [w1, b1, w2, b2] og [w2, b2, w1, b1]. Lagre verdien og slå den opp neste gang. I sjakk kan det doble søkedybden.
Shannon skilte Type A (alle trekk til fast dybde: bred og grunn) fra Type B (dropp trekk som ser dårlige ut, gå dypt i resten: smal og dyp).

**Husk:** Beste trekk først gir O(b^(m/2)), altså dobbel dybde. Killer moves og transposition tables bringer deg nær det.

- Hvor mange noder undersøker alpha-beta med perfekt, tilfeldig og verst mulig move ordering? :: Perfekt: O(b^(m/2)). Tilfeldig: ca. O(b^(3m/4)). Verst: O(b^m), som minimax.
- Hva blir effektiv branching factor med perfekt ordering, og hva betyr det for dybden? :: √b (sjakk: ca. 6 i stedet for 35). Alpha-beta rekker omtrent dobbelt så dypt som minimax på samme tid.
- Hvorfor gir perfekt ordering omtrent b^(m/2) blader? :: MAX må se alle b trekk, men hvert dårlig trekk forkastes av MINs første motsvar. Annethvert lag har altså bare ett barn.
- Hva er killer move heuristic? :: Prøv først trekkene som var best tidligere, for eksempel i forrige runde av iterative deepening.
- Hva er en transposition table? :: En tabell over verdiene til stillinger som er søkt, så samme stilling nådd med en annen trekkfølge kan slås opp.
- Fig. 6.2 med D = (14, 5, 2): hvor mange blader ser alpha-beta, og hvor mange hvis D ordnes (2, 5, 14)? :: 7 blader. Med 2 først i D kuttes 5 og 14, så bare 5 blader.

<!-- usikker: Boka oppgir bare resultatet O(b^(m/2)). Forklaringen av hvorfor (annethvert lag har ett barn) er en standard intuisjon, ikke bokas tekst. «4/3 av dybden» for tilfeldig rekkefølge (E08-notatene) er utelatt; 35 → ca. 6 står i boka. -->

## 6.3.2 Cutting off search: quiescence search og horizon effect
<!-- prio: B | ep: E09 | forelest: delvis -->

L8 tok selve cutoff: IS-CUTOFF og EVAL erstatter IS-TERMINAL og UTILITY ved en fast dybde eller med iterative deepening. Boka viser to feller ved en slik grense.
**Quiescence:** eval er bare til å stole på i rolige (quiescent) stillinger, der ingen ventende trekk kan svinge verdien kraftig. I Fig. 6.8 (b) ser svart ut til å ligge foran, men hvit slår dronningen i neste trekk.
**Quiescence search:** IS-CUTOFF svarer false i urolige stillinger, så søket går videre, gjerne bare med slagtrekk, til stillingen er rolig.

**Horizon effect:** et uunngåelig tap skyves bak søkegrensen med forsinkende trekk. I Fig. 6.9 er svarts løper dømt, men svart ofrer bønder med sjakk.
Da havner slaget av løperen bak dybden, og søket tror løperen er reddet. Egentlig har svart bare kastet bort bønder.
**Singular extension:** et trekk som er klart bedre enn alle andre, får søke videre selv om grensen er nådd. Det gir få ekstra noder og hjelper mot horizon effect.

**Husk:** Kutt bare i rolige stillinger (quiescence), og vit at forsinkende trekk kan lure søket til å tro at et tap er unngått (horizon effect).

- Hva er en quiescent stilling? :: En stilling uten ventende trekk, som et slag, som kan svinge evalueringen kraftig.
- Hva gjør quiescence search? :: Søker videre forbi grensen i urolige stillinger, gjerne bare med slagtrekk, til stillingen er rolig.
- Hva er horizon effect? :: Et uunngåelig tap skyves bak søkedybden med forsinkende trekk, så søket tror tapet er unngått.
- Hva er singular extensions? :: Trekk som er klart bedre enn alle andre, får søke videre forbi dybdegrensen. Det hjelper mot horizon effect.

## 6.3.3 Forward pruning
<!-- prio: B | ep: E09 | forelest: nei -->

Alpha-beta kutter bare grener som beviselig ikke påvirker svaret. Forward pruning kutter også trekk som bare ser dårlige ut. Det sparer tid, men kan gi feil trekk. Det er Shannons Type B, og slik mennesker spiller.
**Beam search:** behold bare de n beste trekkene etter eval på hvert lag. Farlig, fordi ingenting garanterer at det beste trekket overlever.

**ProbCut:** kutter også noder som *sannsynligvis* ligger utenfor (α, β). Et grunt søk gir en verdi v, og statistikk fra tidligere spill sier hvor sannsynlig det er at den dype verdien havner utenfor vinduet.
Othello-programmet Logistello med ProbCut slo den vanlige versjonen 64 % av gangene, selv når den vanlige fikk dobbelt så mye tid.
**Late move reduction:** trekk sent i lista (antatt dårligere når ordningen er god) søkes grunnere. Gir det grunne søket en verdi over α, søkes trekket på nytt med full dybde.

Bokas tall: med minimax og en million noder i sekundet rekker du ca. 5 ply i sjakk (35⁵ ≈ 50 millioner). Alpha-beta med stor transposition table gir ca. 14 ply.

**Husk:** Alpha-beta er trygg (samme svar som minimax); forward pruning er rask, men kan kaste det beste trekket.

- Hva er forskjellen på alpha-beta pruning og forward pruning? :: Alpha-beta kutter bare det som beviselig ikke endrer svaret. Forward pruning kutter trekk som ser dårlige ut og kan gi feil trekk.
- Hvorfor er beam search som forward pruning risikabelt? :: Den beholder bare de n beste trekkene etter eval, og ingenting garanterer at det beste trekket overlever.
- Hvordan virker ProbCut? :: Et grunt søk gir en verdi, og statistikk fra tidligere spill anslår om den dype verdien trolig havner utenfor (α, β). Da kuttes noden.
- Hva er late move reduction? :: Sene trekk i en god ordning søkes grunnere. Gir de en verdi over α, søkes de på nytt med full dybde.

## 6.5.1 Evaluation functions for games of chance
<!-- prio: A | ep: E09 | forelest: nei -->

I deterministiske spill holder det at eval rangerer stillinger riktig (6.3.1). Med chance nodes regner du vektet snitt, og da betyr størrelsen på tallene noe.
**Bokas eksempel (Fig. 6.14):** MAX velger a1 eller a2, hvert valg går til en chance node (0,9 og 0,1) og videre til MIN-noder. Med bladverdiene 1–4 får MIN-nodene 2 og 3 under a1, og 1 og 4 under a2.
- a1 = 0,9 · 2 + 0,1 · 3 = 2,1 og a2 = 0,9 · 1 + 0,1 · 4 = 1,3. MAX velger a1.
- Bytt til 1, 20, 30, 400 (samme rekkefølge): a1 = 0,9 · 20 + 0,1 · 30 = 21 og a2 = 0,9 · 1 + 0,1 · 400 = 40,9. Nå velger MAX a2.

**Regelen:** eval må være en positiv lineær transformasjon av sannsynligheten for å vinne (eller av forventet utility når spillet har flere utfall). For eksempel gir 2x + 10 på verdiene 1–4 a1 = 14,2 og a2 = 12,6, og a1 velges fortsatt.
**Kostnad:** expectiminimax tar O(bᵐ · nᵐ), der n er antall ulike terningutfall. Backgammon har n = 21 og b ≈ 20 (opptil 4000 ved like terninger), så ca. 3 ply er realistisk.
**Pruning av chance nodes:** et snitt kan avgrenses før alle barna er sett, men bare når utility har kjente grenser (for eksempel −2 til +2).
Med svært mange utfall (Yahtzee, fem terninger) kan du sample noen få grener (forward pruning) eller bruke MCTS med tilfeldige kast i playouts.

**Husk:** Med chance nodes må eval være positiv lineær i vinnersjansen; riktig rekkefølge alene er ikke nok.

- Hvorfor holder det ikke at eval rangerer stillinger riktig i spill med chance nodes? :: Chance nodes tar vektet snitt, så størrelsen på verdiene teller. En rekkefølgebevarende endring kan snu det beste trekket.
- Hva må eval være i spill med sjanse? :: En positiv lineær transformasjon av sannsynligheten for å vinne (eller av forventet utility).
- Fig. 6.14: MIN-verdiene er 2 og 3 under a1, 1 og 4 under a2, med sannsynlighet 0,9 og 0,1. Hva velger MAX? :: a1: 0,9·2 + 0,1·3 = 2,1 mot a2: 0,9·1 + 0,1·4 = 1,3.
- Samme tre, men 1, 2, 3, 4 byttes med 1, 20, 30, 400. Hva velger MAX nå? :: a2: 0,9·1 + 0,1·400 = 40,9 mot a1: 0,9·20 + 0,1·30 = 21.
- Hva er tidskompleksiteten til expectiminimax? :: O(b^m · n^m), der n er antall ulike utfall per chance node.
- Når kan chance nodes prunes? :: Når utility har kjente grenser, slik at snittet kan avgrenses før alle barna er sett.

<!-- usikker: Tekstfila har bare figurteksten til Fig. 6.14. Treets form (MIN-noder med to like blader: 2 2 | 3 3 og 1 1 | 4 4) er hentet fra E09-notatene, som har regnet tallene i verifiser.py. Tallene 2,1 / 1,3 / 21 / 40,9 er regnet ut på nytt her. -->

## 6.6 Partially Observable Games: deterministic partially observable games
<!-- prio: C | ep: E09 | forelest: delvis -->

L8 og L13 sa bare at tilstanden ikke er fullt synlig (eller at spillerne trekker samtidig), og at minimax ikke kan brukes direkte. Boka legger til dette:
Ekte krig har «fog of war»: fienden er skjult til du støter på den, så du trenger speidere, skjul og bløff. Sjakk mangler dette.
I **deterministic partially observable games** kommer all usikkerhet av at du ikke ser motstanderens valg. Eksempler: Battleship (skipene er skjult), Stratego (plassering synlig, brikketype skjult), Kriegspiel og Phantom Go.
StarCraft er ekstra vanskelig: partially observable, multiagent, nondeterministic, dynamic og unknown. Kortspill har i stedet stochastic partial observability (6.6.2).

**Husk:** I deterministiske spill med skjult info kommer usikkerheten bare fra motstanderens skjulte valg.

- Hvor kommer usikkerheten fra i et deterministic partially observable game som Battleship? :: Bare fra at du ikke ser valgene motstanderen har gjort, for eksempel hvor skipene står.
- Hva er skjult i Stratego, i motsetning til i Battleship? :: I Stratego ser du hvor brikkene står, men ikke hvilken type de er. I Battleship er plasseringen skjult.
- Hvor kommer det skjulte fra i kortspill? :: Fra den tilfeldige utdelingen (stochastic partial observability), ikke bare fra motstanderens valg.

## 6.6.1 Kriegspiel: Partially observable chess
<!-- prio: B | ep: E09 | forelest: nei -->

**Regler:** hver spiller ser bare sine egne brikker, og en dommer ser alt. Du foreslår trekk. Er det ulovlig på grunn av skjulte brikker, sier dommeren «illegal», og du prøver igjen og lærer noe. Ellers meldes slag (med felt) og sjakk (med retning).
**Belief state:** alle brett som passer med det du har hørt. Hvit starter med ett brett. Etter ett trekk hver er det 20, fordi svart har 20 mulige svar. Oppdateringen er state estimation fra kap. 4, med motstanderen som kilde til nondeterminism.
En strategi må gi et trekk for hver mulig sekvens av percepts, ikke for hvert motstandertrekk.

**Guaranteed checkmate:** matt for hvert brett i belief state, uansett hva motstanderen gjør. Motstanderens belief state blir da uviktig. Finnes med AND-OR-søk i belief-state-rommet.
**Probabilistic checkmate:** virker også for alle brett, men hvit velger trekkene tilfeldig. KBNK vinnes med sannsynlighet 1, KBBK bare med 1 − ε.
**Accidental checkmate:** matt som virker fordi brikkene tilfeldigvis stod riktig; hvit kunne ikke vite det. De fleste matter mellom mennesker er slik.

Optimal spill krever litt tilfeldighet, fordi forutsigbart spill gir motstanderen informasjon. Eval inkluderer gjerne størrelsen på belief state: mindre er bedre.

**Husk:** Kriegspiel spilles i belief states, og guaranteed checkmate må virke for alle brett du tror er mulige.

- Hvor mange brett er i hvits belief state etter ett trekk hver i Kriegspiel, og hvorfor? :: 20, fordi svart har 20 mulige svar på hvits åpningstrekk.
- Hva er en guaranteed checkmate i Kriegspiel? :: En strategi som gir matt for hvert brett i belief state og hver percept-sekvens, uansett hva motstanderen gjør.
- Hva er en probabilistic checkmate? :: Matt for alle brett i belief state der hvit randomiserer egne trekk. KBNK vinnes slik med sannsynlighet 1.
- Hvorfor bør optimal spill i Kriegspiel være delvis tilfeldig? :: Forutsigbart spill gir motstanderen informasjon, og tilfeldige trekk er vanskelige å forberede seg på.

## 6.6.2 Card games
<!-- prio: B | ep: E09 | forelest: nei -->

Bridge, whist, hearts og poker har stochastic partial observability: kortene deles ut tilfeldig og holdes skjult.
**Averaging over clairvoyance:** se utdelingen som én chance node i roten. Løs hver mulig utdeling som om alle kort var synlige, og velg trekket med best EXPECTIMINIMAX-snitt.

**Hvorfor det feiler (bokas veihistorie, gjenfortalt):** vei A gir én gullkrukke. Vei B går til et veiskille der én gren gir to krukker og den andre en buss som kjører deg ned.
Dag 1 og 2 ser du hvilken gren som er trygg, og B er best. Dag 3 vet du det ikke, men metoden velger B likevel, som om du kom til å vite det ved veiskillet.
Feilen: den overser belief state etter handlingen. Den samler derfor aldri informasjon, skjuler aldri informasjon, gir aldri informasjon til en makker og bløffer aldri.

**Gjøre det praktisk:** bridge har C(26, 13) = 10 400 600 måter å fordele de to skjulte hendene på. Bruk abstraction (like hender regnes som like) eller forward pruning: sample N = 100–1000 utdelinger.
Budrunden i bridge sier noe om sannsynligheten for hver utdeling, men spillerne kan by slik at de skjuler informasjon. Pokerprogrammet Libratus slo toppspillere ved hjelp av abstraction.

**Husk:** Averaging over clairvoyance tror du vil se alle kort senere, så den samler aldri info og bløffer aldri.

- Hva er averaging over clairvoyance? :: Løs spillet for hver mulig utdeling som om alle kort var synlige, og velg trekket med best snitt over utdelingene.
- Hvorfor velger averaging over clairvoyance feil vei på dag 3 i veiskille-historien? :: Den antar at du vil vite hvilken gren som er trygg, og overser at du ved veiskillet ikke vet noe.
- Hvorfor bløffer averaging over clairvoyance aldri i poker? :: Den antar at motstanderen ser kortene dine, så en bløff har ingen verdi.
- Hvordan håndteres de 10 400 600 mulige fordelingene i bridge? :: Med abstraction (like hender regnes som én) eller ved å sample 100–1000 utdelinger (forward pruning).

## 6.7 Limitations of Game Search Algorithms
<!-- prio: A | ep: E09 | forelest: nei | eksamen: 2022 | merk: 2022 1.7 (MCTS mot alpha-beta ved eval-feil) gjelder også 6.4 -->

Alle spillalgoritmer må forenkle. MCTS er å foretrekke når branching factor er stor eller en god eval er vanskelig å lage. Boka nevner fire grenser for både alpha-beta og MCTS.

**1. Feil i eval.** Fig. 6.16: venstre MIN-node har bladene 99, 1000, 1000, 1000, høyre har 100, 101, 102, 100. Minimax gir 99 mot 100 og velger høyre.
Har hvert blad en uavhengig feil med standardavvik σ, er venstre egentlig best i 71 % av tilfellene med σ = 5 og 58 % med σ = 2: ett av de fire bladene til høyre faller lett under 99. Avhengige feil gjør det verre.

**2. Regner der valget er opplagt.** Med bare ett lovlig trekk er det bortkastet å finne verdien. Bedre: utvid bare noder der forventet forbedring av valget er verdt tiden. Det er metareasoning, resonnering om hva som lønner seg å regne på. MCTS gjør litt av dette, men ikke optimalt.
**3. Bare enkelttrekk.** Mennesker tenker i mål («fang dronningen») og lager planer ut fra dem (kap. 11).
**4. Læring.** Tidlige programmer hadde håndlaget eval, åpningsbøker og triks. AlphaZero lærte i stedet av self-play.

**Husk:** Alpha-beta stoler blindt på eval (Fig. 6.16), regner også på opplagte valg, tenker bare i enkelttrekk og lærer ikke av seg selv.

- Fig. 6.16: venstre MIN-node har 99, 1000, 1000, 1000, høyre har 100, 101, 102, 100. Hva velger minimax? :: Høyre, fordi MIN-verdiene er 99 mot 100.
- Hvor ofte er venstre gren i Fig. 6.16 egentlig bedre når eval har uavhengige feil? :: Ca. 71 % med σ = 5 og 58 % med σ = 2.
- Hvorfor er høyre gren i Fig. 6.16 sårbar for feil i eval? :: MIN tar minimum av fire verdier nær 100, så ett av dem faller lett under 99.
- Hva er metareasoning? :: Resonnering om hvilke beregninger som lønner seg: utvid bare noder der forventet forbedring av valget er verdt tidskostnaden.
- Når er MCTS å foretrekke framfor alpha-beta ifølge boka? :: Når branching factor er stor eller det er vanskelig å lage en god evalueringsfunksjon.
- Hvilken begrensning deler alpha-beta og MCTS når det gjelder abstraksjonsnivå? :: Begge resonnerer bare om enkelttrekk, ikke om overordnede mål og planer slik mennesker gjør.

<!-- usikker: Tekstfila har bare figurteksten til Fig. 6.16. Bladverdiene 99, 1000, 1000, 1000 og 100, 101, 102, 100 er hentet fra E09-videoens data (scenes.js), der simuleringen ga 0,715 og 0,581, i tråd med bokas 71 % og 58 %. -->

## 7.2 The Wumpus World
<!-- prio: A | ep: E11 | forelest: nei | eksamen: 2015 | merk: 2015 oppg. 4 bruker en endret wumpus-verden (bare wumpuser, tall i rutene som i minesveiper) -->

Wumpus-verdenen er en hule på 4 × 4 ruter med én wumpus som spiser deg, bunnløse groper og en haug gull. Agenten starter i [1,1] med retning øst. Gull og wumpus plasseres tilfeldig utenom start, og hver rute utenom start har grop med sannsynlighet 0,2.

- **P:** +1000 for å klatre ut med gullet, −1000 for å dø, −1 per handling, −10 for å bruke pila.
- **A:** Forward, TurnLeft, TurnRight, Grab, Shoot (én pil, som flyr rett fram til wumpus eller vegg), Climb (bare fra [1,1]).
- **S:** fem bit, for eksempel [Stench, Breeze, None, None, None]. Stench og Breeze kjennes i ruter *direkte* (ikke diagonalt) ved siden av wumpusen og en grop. Glitter i gullruta, Bump mot vegg, Scream når wumpusen dør.

Miljøet er deterministic, discrete, static, single-agent og sequential, men partially observable. Agenten sanser ikke posisjonen sin, om wumpusen lever eller om pila er brukt. Hvor gropene og wumpusen er, kan ses som en uobservert del av tilstanden.

Resonnementet i fig. 7.3–7.4: ingenting i [1,1] gir [1,2] og [2,1] OK. Breeze i [2,1] gir grop i [2,2] eller [3,1]. Stench uten breeze i [1,2] gir wumpus i [1,3] (ikke i [2,2], for da hadde det luktet i [2,1]). Ingen breeze i [1,2] gir ¬P₂,₂, så gropa er i [3,1].

Den siste slutningen er vanskelig: den kombinerer percepts fra ulike tider og steder og bygger på at et percept *mangler*. Er informasjonen riktig, er en logisk konklusjon garantert riktig. Omtrent 21 % av hulene er urettferdige: gullet ligger i en grop eller er omringet av groper.

**Husk:** Reglene er kjente og verden er deterministic, men den er partially observable, så agenten må slutte seg fram fra percepts, også fra dem som mangler.

- Hva er performance measure i wumpus-verdenen? :: +1000 for å klatre ut med gullet, −1000 for å dø (grop eller wumpus), −1 per handling og −10 for å bruke pila.
- Hvilke fem percepts kan wumpus-agenten få? :: Stench (direkte nabo til wumpus), Breeze (direkte nabo til grop), Glitter (gullruta), Bump (gikk i veggen) og Scream (wumpusen er drept).
- Hvilke handlinger har wumpus-agenten? :: Forward, TurnLeft, TurnRight, Grab, Shoot (bare én pil) og Climb (bare fra [1,1]).
- Hvilke miljøegenskaper har wumpus-verdenen? :: Deterministic, discrete, static, single-agent og sequential, men partially observable.
- Hvorfor er wumpus-verdenen partially observable? :: Agenten sanser ikke posisjonen sin, om wumpusen lever eller om pila er brukt. Gropene og wumpusen ser den bare gjennom percepts.
- Ingen breeze i [1,1], breeze i [2,1], og stench uten breeze i [1,2]. Hvor er wumpusen og gropa? :: Wumpus i [1,3]: ikke [1,1], og ikke [2,2] fordi [2,1] ikke luktet. Ingen breeze i [1,2] gir ¬P₂,₂, så gropa er i [3,1].
<!-- usikker: 2015 oppg. 4 er en endret wumpus-verden (minesveiper-variant). Den står i eksamen fordi oppgaven heter «Wumpus world», men PEAS og miljøegenskapene er ikke spurt om. -->

## 7.4.3 A simple knowledge base
<!-- prio: A | ep: E11 | forelest: nei | eksamen: 2015 | merk: 2015 oppg. 4 a–b ber om en slik KB i proposisjonslogikk for en endret wumpus-verden -->

Boka skriver en KB i proposisjonslogikk for situasjonen i fig. 7.3(b) og tar først det som aldri endrer seg. For hver rute [x,y] finnes fem symbolfamilier: P (grop), W (wumpus, død eller levende), B (breeze), S (stench) og L (agenten står der). Ruta er indeksen, som i P₁,₂.

- R₁: ¬P₁,₁ (ingen grop i start)
- R₂: B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)
- R₃: B₂,₁ ⇔ (P₁,₁ ∨ P₂,₂ ∨ P₃,₁)
- R₄: ¬B₁,₁
- R₅: B₂,₁

R₁–R₃ gjelder i alle wumpus-verdener. R₄ og R₅ er percepts fra akkurat denne verdenen.

Breeze-regelen er en ⇔ fordi en rute har breeze *hvis* en nabo har grop, og *bare hvis* en nabo har grop. Regelen må skrives én gang per rute, men boka tar bare med de to rutene som trengs. Målet er at KB-en skal gi ¬P₁,₂.

**Husk:** R₁–R₃ er regler for alle wumpus-verdener, R₄–R₅ er det agenten har sanset, og breeze-reglene er ⇔.

- Hvilke symbolfamilier bruker bokas wumpus-KB for hver rute [x,y]? :: P (grop), W (wumpus, død eller levende), B (breeze), S (stench) og L (agenten står i ruta).
- Hva sier R₂: B₁,₁ ⇔ (P₁,₂ ∨ P₂,₁)? :: Det er breeze i [1,1] hvis og bare hvis det er grop i [1,2] eller [2,1].
- Skriv R₃, breeze-regelen for [2,1]. :: B₂,₁ ⇔ (P₁,₁ ∨ P₂,₂ ∨ P₃,₁).
- Hvilke av R₁–R₅ er generelle regler, og hvilke er percepts? :: R₁ (¬P₁,₁), R₂ og R₃ gjelder i alle wumpus-verdener. R₄ (¬B₁,₁) og R₅ (B₂,₁) er percepts fra denne verdenen.
- Hvorfor er breeze-regelen en ⇔ og ikke en ⇒? :: Ruta har breeze hvis en nabo har grop, og bare hvis en nabo har grop. Begge retningene gjelder.
- Hvorfor må breeze-regelen skrives én gang per rute i proposisjonslogikk? :: Proposisjonslogikk har ingen variabler, så hver rute trenger egne symboler og sin egen setning.

## 7.4.4 A simple inference procedure
<!-- prio: A | ep: E11 | forelest: nei | eksamen: 2020k, 2022 | merk: model checking-ideen er forelest i L5; selve TT-ENTAILS og analysen står bare i boka -->

TT-ENTAILS avgjør KB ⊨ α rett fra definisjonen: ram opp alle modellene og sjekk at α er sann i hver modell der KB er sann.

Den går dybde først som BACKTRACKING-SEARCH: ta første symbol, prøv true og så false, og fortsett med resten. Når alle symbolene har verdi og KB er sann, returneres verdien av α. Er KB usann, returneres true, fordi raden ikke kan motbevise noe.

Wumpus-KB-en har 7 symboler (B₁,₁, B₂,₁, P₁,₁, P₁,₂, P₂,₁, P₂,₂, P₃,₁), altså 2⁷ = 128 modeller. KB er sann i 3 av dem. ¬P₁,₂ er sann i alle 3, så KB ⊨ ¬P₁,₂. P₂,₂ er sann i 2 av 3, så agenten vet ikke om det er grop i [2,2].

- **Sound:** algoritmen er definisjonen av entailment.
- **Complete:** den virker for alle KB og α og stopper alltid, fordi modellene er endelig mange.
- **Tid** O(2ⁿ) for n symboler, **minne** O(n), fordi den går dybde først.

Endelig er ikke det samme som få. Propositional entailment er co-NP-complete, så alle kjente inferensalgoritmer for proposisjonslogikk er eksponentielle i verste fall.

**Husk:** TT-ENTAILS er sound og complete, men bruker O(2ⁿ) tid og O(n) minne.

- Hva gjør TT-ENTAILS? :: Ramser opp alle modellene og sjekker at α er sann i hver modell der KB er sann.
- Hva returnerer TT-CHECK-ALL for en fullstendig modell der KB er usann? :: true. En rad der KB er usann, kan ikke motbevise KB ⊨ α.
- Wumpus-KB-en R₁–R₅ har 128 modeller. Hvor mange gjør KB sann, og hva følger om [1,2] og [2,2]? :: 3. ¬P₁,₂ er sann i alle tre, så KB ⊨ ¬P₁,₂. P₂,₂ er sann i to av tre, så det er ukjent.
- Hvorfor er TT-ENTAILS sound og complete? :: Sound fordi den følger definisjonen av entailment direkte. Complete fordi modellene er endelig mange, så den alltid blir ferdig.
- Hva er tid og minne for TT-ENTAILS med n symboler? :: Tid O(2ⁿ) og minne O(n), fordi oppramsingen går dybde først.
- Hvor vanskelig er propositional entailment i verste fall? :: co-NP-complete. Alle kjente inferensalgoritmer for proposisjonslogikk er eksponentielle i verste fall.

## 7.5.1 Inference and proofs: Monotonicity
<!-- prio: B | ep: E12 | forelest: delvis | merk: 2017 6g spør om circumscription, en nonmonotonic logikk (10.6 er ikke pensum) -->

L5 dekket inferensreglene: Modus Ponens, and-elimination og ekvivalensene i fig. 7.11. Monotonicity står bare i boka.

Monotonicity betyr at mengden av setninger som følger av KB, bare kan vokse når KB får mer informasjon. For alle α og β: hvis KB ⊨ α, så KB ∧ β ⊨ α. Grunnen er at β bare kan fjerne modeller, så M(KB ∧ β) ⊆ M(KB) ⊆ M(α).

Bokas eksempel: agenten får vite at det er nøyaktig åtte groper i hula. Det kan gi nye konklusjoner, men ¬P₁,₂ står fortsatt.

Derfor kan en inferensregel brukes så snart premissene finnes i KB. Konklusjonen holder uansett hva annet KB inneholder.

Logikker som bryter dette, heter nonmonotonic. De fanger at mennesker ombestemmer seg (10.6, ikke pensum).

**Husk:** Ny kunnskap kan gi nye konklusjoner, men aldri ta bort gamle.

- Hva sier monotonicity? :: Hvis KB ⊨ α, så er KB ∧ β ⊨ α for alle β. Mer kunnskap kan aldri fjerne en konklusjon.
- Agenten får vite at hula har nøyaktig åtte groper. Hva skjer med konklusjonen ¬P₁,₂? :: Den står fast. Ny kunnskap kan gi nye konklusjoner, men ikke ugyldiggjøre gamle.
- Hva betyr monotonicity for bruken av inferensregler? :: En regel kan brukes så snart premissene står i KB. Konklusjonen følger uansett hva annet KB inneholder.
- Hva kalles en logikk der en konklusjon kan trekkes tilbake når ny kunnskap kommer? :: Nonmonotonic logic. Den bryter monotonicity og fanger at vi ombestemmer oss.
<!-- usikker: prio B. Monotonicity er ikke spurt om direkte; 2017 6g spør om circumscription, som bryter den, og 10.6 er ikke pensum i år. -->

## 7.5.2 Proof by resolution: Factoring
<!-- prio: A | ep: E12 | forelest: delvis | merk: trengs i alle resolusjonsbevis for hånd -->

L5, Ø4 og L13 dekket CNF, resolution-regelen og PL-RESOLUTION. Factoring og hvorfor det trengs, står bare i boka.

Resolventen skal bare inneholde én kopi av hver literal. Å fjerne de ekstra kopiene heter *factoring*. Bokas eksempel: (A ∨ B) og (A ∨ ¬B) resolveres på B og gir A ∨ A, som factoring gjør til A.

Factoring slår bare sammen *like* literaler. (P ∨ ¬Q ∨ R) og (¬P ∨ Q) gir ¬Q ∨ Q ∨ R, ikke R. Du kan bare kutte ett komplementært par om gangen, og Q og ¬Q er ikke like. Klausulen er valid og hjelper ikke beviset.

Skrives klausuler som mengder av literaler, skjer factoring av seg selv.

Factoring er grunnen til at PL-RESOLUTION alltid stopper. Med én kopi per literal finnes bare endelig mange klausuler over symbolene P₁, …, Pₖ, så resolution closure RC(S) er endelig.

**Husk:** Factoring fjerner doble literaler (A ∨ A blir A) og gjør at resolution closure er endelig.

- Hva er factoring i resolution? :: Å fjerne ekstra kopier av samme literal, så hver literal står bare én gang i resolventen.
- Resolver (A ∨ B) med (A ∨ ¬B). Hva blir resultatet? :: A ∨ A, som factoring gjør til A.
- Hvorfor sørger factoring for at PL-RESOLUTION stopper? :: Med én kopi per literal finnes bare endelig mange klausuler over symbolene, så resolution closure RC(S) er endelig.
- Resolver (P ∨ ¬Q ∨ R) med (¬P ∨ Q). Kan factoring gi R? :: Nei. Du får ¬Q ∨ Q ∨ R. Factoring fjerner bare like literaler, og du kan bare kutte ett komplementært par om gangen.
- Når skjer factoring automatisk? :: Når klausuler skrives som mengder av literaler, siden en mengde ikke kan ha samme element to ganger.

## 7.6 Effective Propositional Model Checking
<!-- prio: B | ep: E13 | forelest: nei -->

7.6 handler om SAT-problemet: finn en modell for en setning i CNF, eller avgjør at ingen finnes. Entailment kan testes som SAT, fordi α ⊨ β hvis og bare hvis α ∧ ¬β er unsatisfiable.
Boka gir to familier av effektiv model checking:

- **Backtracking** (DPLL, 7.6.1): complete, og ligner backtracking for CSP (5.3).
- **Lokalt hill-climbing-søk** (WalkSAT, 7.6.2): incomplete, og ligner local search for CSP (5.4).

SAT-løsere er viktige fordi svært mange kombinatoriske problemer i informatikk kan gjøres om til SAT. En bedre SAT-løser hjelper derfor på alle.

**Husk:** En SAT-løser kan bevise α ⊨ β ved å vise at α ∧ ¬β er unsatisfiable.

- Hva er SAT-problemet? :: Å avgjøre om en setning i CNF er satisfiable, altså finne en modell eller vise at ingen finnes.
- Hvordan avgjør en SAT-løser om α ⊨ β? :: Den sjekker om α ∧ ¬β er unsatisfiable. Er den det, gjelder α ⊨ β.
- Hvilke to familier av SAT-algoritmer beskriver 7.6? :: Backtracking (DPLL, complete) og lokalt søk (WalkSAT, incomplete). De ligner backtracking og min-conflicts for CSP.

## 7.6.1 A complete backtracking algorithm
<!-- prio: A | ep: E13 | forelest: nei -->

DPLL (Davis, Putnam, Logemann, Loveland) tar en setning i CNF og ramser opp *delvise* modeller dybde først, som TT-ENTAILS. Den har tre forbedringer:

- **Early termination:** en klausul er sann så snart én literal er sann, og usann når alle literalene er usanne. Da kuttes et helt deltre før modellen er komplett.
- **Pure symbol:** symbolet har samme fortegn i alle klausuler som ikke allerede er sanne. Sett det slik at literalen blir sann. Det kan aldri gjøre en klausul usann.
- **Unit clause:** alle literalene unntatt én er usanne, så den siste må bli sann. Én tvungen verdi kan lage den neste, og den kjeden heter *unit propagation*. Med bare definite clauses gjør DPLL i praksis det samme som forward chaining.

Hvert kall (fig. 7.17): alle klausuler sanne → true, én usann → false, så pure, så unit, ellers gjett første symbol, true før false.

**Eksempel** med konvensjonene fra E13 (symbolene alfabetisk): C1 A ∨ B, C2 ¬A ∨ C, C3 ¬A ∨ ¬C, C4 A ∨ ¬B ∨ ¬C.

1. Ingen pure og ingen unit, så DPLL gjetter A = true. Unit C2 gir C = true. Da er C3 usann, og kallet returnerer false før B er satt.
2. DPLL gjetter A = false. C1 er unit, men pure kommer først: ¬C står bare i C4, så C = false. Så er B pure (bare i C1), og B = true. Alle er sanne: **A = F, B = T, C = F.**

**Triks i ekte løsere:** component analysis (klausuler uten felles usatte symboler løses hver for seg, som Tasmania), variable and value ordering (degree heuristic: symbolet i flest gjenværende klausuler), intelligent backtracking (hopp rett tilbake til konflikten og lagre den som en conflict clause), random restarts (beholder de lærte klausulene og gir mindre varians i kjøretid) og clever indexing. Med dem klarer moderne løsere titalls millioner variabler.

**Husk:** DPLL = backtracking over delvise modeller med early termination, pure før unit, og gjetning bare når ingen regel virker.

- Hvilke tre forbedringer har DPLL over TT-ENTAILS? :: Early termination, pure symbol heuristic og unit clause heuristic.
- Når er et symbol pure i DPLL? :: Når det har samme fortegn i alle klausuler som ikke allerede er sanne. Det settes slik at literalen blir sann.
- Hva er unit propagation? :: En unit clause (alle literaler unntatt én er usanne) tvinger en verdi, som kan gjøre neste klausul unit. Ligner forward chaining.
- I hvilken rekkefølge sjekker DPLL reglene i hvert kall (fig. 7.17)? :: Alle klausuler sanne → true, én usann → false, så pure symbol, så unit clause, ellers gjett første symbol (true før false).
- C1 A ∨ B, C2 ¬A ∨ C, C3 ¬A ∨ ¬C, C4 A ∨ ¬B ∨ ¬C. Hva skjer etter gjettet A = true? :: Unit C2 gir C = true. Da er C3 usann, og DPLL går tilbake før B er satt (early termination).
- Hvilke fem triks nevner boka for store SAT-problemer? :: Component analysis, variable and value ordering, intelligent backtracking (conflict clause learning), random restarts og clever indexing.
<!-- usikker: at et symbol uten åpne klausuler ikke regnes som pure, er konvensjonen fra E13 (som aima-python), ikke bokas ordlyd. Med den settes B aldri før konflikten i steg 1. Svaret (A må være false) blir det samme uansett. -->
<!-- avvik: LEKSIKON (Unit clause) sier at bare én literal er igjen uten verdi. Boka krever at alle de andre literalene allerede er usanne. Kortene følger boka. -->

## 7.6.2 Local search algorithms
<!-- prio: A | ep: E13 | forelest: nei -->

Lokalt søk for SAT går i rommet av *komplette* modeller og flipper ett symbol om gangen. Evalueringsfunksjonen er antall usanne klausuler, samme mål som min-conflicts (5.4). Landskapet har mange lokale minima, så det trengs tilfeldighet.

**WalkSAT** (fig. 7.18): start med en tilfeldig modell. Velg en tilfeldig usann klausul. Med sannsynlighet p (typisk rundt 0,5) flippes et tilfeldig symbol i den (random walk), ellers symbolet som gir flest sanne klausuler (min-conflicts-steg). Etter `max_flips` gir den opp med failure.

Eksempel med klausulene fra 7.6.1, start A = B = C = false: bare C1 (A ∨ B) er usann. Flip A gir 3 sanne klausuler, flip B gir 4, så det grådige steget velger B. Med p = 0,5 flippes B med sannsynlighet (1 − p) + p · ½ = 0,75.

Returnerer WalkSAT en modell, er setningen satisfiable. Failure kan bety at den er unsatisfiable, *eller* at søket trengte mer tid. Med `max_flips` = ∞ og p > 0 finner den en modell til slutt hvis en finnes, men på en unsatisfiable setning stopper den aldri.

WalkSAT passer derfor når du venter at en løsning finnes. Den kan ikke avgjøre entailment. Wumpus-agenten kan ikke bevise at en rute er trygg med WalkSAT. «Jeg fant ingen verden der ruta er farlig på en time» er en god indikasjon, men ikke et bevis.

**Husk:** WalkSAT kan si «satisfiable», men aldri «unsatisfiable».

- Hvordan velger WalkSAT hva som flippes? :: Den tar en tilfeldig usann klausul. Med sannsynlighet p flippes et tilfeldig symbol i den, ellers symbolet som gir flest sanne klausuler.
- Hvilken evalueringsfunksjon bruker lokalt søk for SAT? :: Antall usanne klausuler, samme mål som min-conflicts for CSP.
- Hva betyr det når WalkSAT returnerer failure? :: Enten er setningen unsatisfiable, eller søket trengte flere flips. Det beviser ingenting.
- Hva skjer med max_flips = ∞ og p > 0? :: Finnes en modell, finner WalkSAT den til slutt. Er setningen unsatisfiable, stopper den aldri.
- Hvorfor kan ikke wumpus-agenten bruke WalkSAT til å bevise at en rute er trygg? :: Beviset krever at KB ∧ «ruta er farlig» er unsatisfiable, og det kan ikke WalkSAT vise. Den gir bare en indikasjon.
- Bare C1 (A ∨ B) er usann. Flip A gir 3 sanne klausuler, flip B gir 4. Hvor sannsynlig flipper WalkSAT B med p = 0,5? :: (1 − p) + p · ½ = 0,5 + 0,25 = 0,75.

## 7.6.3 The landscape of random SAT problems
<!-- prio: B | ep: E13 | forelest: nei -->

*Underconstrained*: få klausuler per symbol og mange modeller. Bokas tilfeldige 3-CNF med 5 symboler og 5 klausuler har 16 av 32 modeller, så to tilfeldige gjett holder i snitt. n-queens er lett for min-conflicts av samme grunn.

*Overconstrained*: mange klausuler per symbol, og trolig ingen modell. Også ofte lett, fordi constraints fort fører til en løsning eller en blindvei.

CNFₖ(m, n) er en tilfeldig setning med m klausuler over n symboler, k ulike literaler per klausul, tilfeldig fortegn og ingen klausul to ganger.

For 3-SAT med n = 50 stuper P(satisfiable) rundt m/n ≈ 4,3 (bokteksten og fig. 7.19). Litteraturnotene oppgir 4,26. Stupet blir brattere når n vokser, men blir omtrent på samme sted.

*Satisfiability threshold conjecture*: for hver k ≥ 3 finnes et forhold rₖ der P(satisfiable) går mot 1 under rₖ og mot 0 over når n → ∞. Den er ikke bevist, heller ikke for k = 3.

De vanskeligste problemene ligger ved terskelen. Ved 4,3 er de omtrent 20 ganger vanskeligere enn ved 3,3. Underconstrained er lettest, og overconstrained er litt vanskeligere, men mye lettere enn ved terskelen.

**Husk:** Tilfeldig 3-SAT går fra nesten alltid til nesten aldri satisfiable rundt m/n ≈ 4,3, og der er problemene vanskeligst.

- Hva er forskjellen på en underconstrained og en overconstrained SAT-setning? :: Under: få klausuler per symbol, mange modeller, lett. Over: mange klausuler per symbol, trolig ingen modell, men også ofte lett.
- Ved hvilket forhold m/n stuper P(satisfiable) for tilfeldig 3-SAT? :: Rundt m/n ≈ 4,3 (bokteksten og fig. 7.19). Litteraturnotene oppgir 4,26.
- Hvor ligger de vanskeligste tilfeldige SAT-problemene, og hvorfor? :: Ved terskelen (≈ 4,3), ca. 20 ganger vanskeligere enn ved 3,3. Under er en modell lett å gjette, over kommer blindveien fort.
- Hva sier satisfiability threshold conjecture? :: Når n → ∞ går P(satisfiable) mot 1 under en fast terskel rₖ og mot 0 over (k ≥ 3). Ikke bevist, heller ikke for k = 3.

## 8.1.1 The language of thought
<!-- prio: C | ep: E14 | forelest: nei -->

Kan naturlig språk brukes som representasjonsspråk i en KB? Boka sier nei: språk er først og fremst et middel for kommunikasjon.
Meningen avhenger av konteksten. «Look!» kan ikke lagres i en KB uten at situasjonen den ble sagt i, også representeres.
Ord er tvetydige: «spring» kan være årstiden eller en fjær. Ett ord kan altså svare til to tanker.

Sapir–Whorf-hypotesen sier at språket vi snakker, former hvordan vi forstår verden. Forsøk viser målbare, men små forskjeller: Guugu Yimithirr-talere bruker bare absolutte retninger (nord, sør) og finner bedre fram i terrenget.
Folk husker innholdet i en tekst langt bedre enn ordlyden. Det tyder på en indre representasjon som ikke er ord.

I formell logikk betyr ikke formen noe for hva som kan utledes, men den kan endre hvor mange steg det tar. For læring betyr formen mye, fordi den enkleste teorien avhenger av språket den skrives i.

**Husk:** Naturlig språk er kontekstavhengig og tvetydig, så FOL låner bare ideene om objekter og relasjoner fra det.

- Hvorfor er naturlig språk dårlig som representasjonsspråk i en KB? :: Meningen avhenger av konteksten («Look!»), og ord er tvetydige («spring»).
- Hva sier Sapir–Whorf-hypotesen? :: At språket vi snakker, sterkt påvirker hvordan vi forstår verden. Boka: forskjellene er målbare, men små.
- Betyr det noe i formell logikk hvordan samme kunnskap representeres? :: Ikke for hva som kan utledes, men for hvor mange steg utledningen tar.

## 8.1.2 Combining the best of formal and natural languages
<!-- prio: B | ep: E14 | forelest: nei | eksamen: 2022 -->

FOL beholder grunnmuren fra PL: en deklarativ, kompositorisk semantikk som er uavhengig av kontekst og entydig.
Fra naturlig språk låner den objekter (substantiv) og relasjoner (verb og adjektiv). Noen relasjoner er funksjoner: én verdi per input.
«One plus two equals three»: objektene er one, two, three og one plus two, relasjonen er equals, og funksjonen er plus. «One plus two» og «three» er to navn på samme objekt.

Ontological commitment er hva språket antar at verden består av. Epistemological commitment er hva en agent kan tro om et faktum (Fig. 8.1):
PL: fakta, og hvert faktum er sant, usant eller ukjent. FOL: fakta, objekter og relasjoner, sant/usant/ukjent. Temporal logic: i tillegg tidspunkter.
Probability theory: fakta, med degree of belief ∈ [0, 1]. Fuzzy logic: fakta med degree of truth ∈ [0, 1], og known interval value.

Ikke bland de to gradene. Degree of truth (fuzzy) er hvor sann en vag påstand er: «Vienna is a large city» med grad 0.8. Degree of belief (sannsynlighet) er hvor sikker agenten er på et skarpt faktum: wumpusen er i [1, 3] med 0.75, selv om den enten er der eller ikke.
Higher-order logic lar relasjoner og funksjoner være objekter, slik at du kan si noe om alle relasjoner (for eksempel hva transitivitet er). Den er strengt mer uttrykksfull enn FOL.

**Husk:** PL antar fakta, FOL antar fakta, objekter og relasjoner, og begge gir tre kunnskapstilstander: sann, usann, ukjent.

- Hva er ontological commitment, og hva er den for PL og FOL? :: Hva språket antar at verden består av. PL: fakta. FOL: fakta, objekter og relasjoner.
- Hva er epistemological commitment i PL og FOL? :: Tre mulige kunnskapstilstander om hvert faktum: tror sant, tror usant, eller ingen mening (unknown).
- Hva er forskjellen på degree of truth og degree of belief? :: Degree of truth (fuzzy logic) er hvor sann en vag påstand er; degree of belief (sannsynlighet) er hvor sikker agenten er på et skarpt faktum.
- Hva er objekter, relasjon og funksjon i «One plus two equals three»? :: Objekter: one, two, three og one plus two. Relasjon: equals. Funksjon: plus.

## 8.3.2 The kinship domain
<!-- prio: A | ep: E14 | forelest: nei | eksamen: 2021 -->

Objektene er personer. Male og Female er unære predikater, og Parent, Sibling, Spouse, Husband, Grandparent, Aunt og så videre er binære. Mother og Father er funksjoner, fordi hver person har nøyaktig én av hver (biologisk).

Bokas aksiomer: `∀m,c Mother(c) = m ⇔ Female(m) ∧ Parent(m, c)`, `∀w,h Husband(h, w) ⇔ Male(h) ∧ Spouse(h, w)` og `∀p,c Parent(p, c) ⇔ Child(c, p)`.
`∀g,c Grandparent(g, c) ⇔ ∃p Parent(g, p) ∧ Parent(p, c)`
`∀x,y Sibling(x, y) ⇔ x ≠ y ∧ ∃p Parent(p, x) ∧ Parent(p, y)`. Uten x ≠ y blir alle som har en forelder, sitt eget søsken.

Aksiomer på formen `∀x,y P(x, y) ⇔ …` er definitions. De ender i noen grunnpredikater (Child, Female, …), og det settet er ikke unikt: Parent kunne vært brukt i stedet for Child.
Noen predikater har ingen full definisjon. For Person skriver du bare delvise aksiomer: `∀x Person(x) ⇒ …` og `∀x … ⇒ Person(x)`. Rene fakta som Male(Jim) og Spouse(Jim, Laura) er også aksiomer.

Theorems følger av aksiomene. `∀x,y Sibling(x, y) ⇔ Sibling(y, x)` er et teorem: både x ≠ y og ∃p Parent(p, x) ∧ Parent(p, y) er symmetriske i x og y.
Et svar du venter, men ikke får, tyder på et manglende aksiom: fra Spouse(Jim, Laura) følger ikke ¬Spouse(George, Laura), selv med Jim ≠ George.
Samme mønster (egne definisjoner): `∀x,y Brother(x, y) ⇔ Male(x) ∧ Sibling(x, y)` og `∀a,c Aunt(a, c) ⇔ Female(a) ∧ ∃p Sibling(a, p) ∧ Parent(p, c)`.

**Husk:** Definitions bygger et predikat av andre predikater med ∀ … ⇔; theorems følger av aksiomene og sparer bare regnetid.

- Skriv «a grandparent is a parent of one's parent» i FOL. :: ∀g,c Grandparent(g, c) ⇔ ∃p Parent(g, p) ∧ Parent(p, c)
- Skriv Sibling-definisjonen i FOL. :: ∀x,y Sibling(x, y) ⇔ x ≠ y ∧ ∃p Parent(p, x) ∧ Parent(p, y)
- Hva går galt hvis x ≠ y mangler i Sibling-definisjonen? :: Alle som har en forelder, blir sitt eget søsken: Sibling(x, x) følger.
- Hvorfor er Mother en funksjon og ikke et predikat i kinship-domenet? :: Hver person har nøyaktig én biologisk mor: ∀m,c Mother(c) = m ⇔ Female(m) ∧ Parent(m, c).
- Er ∀x,y Sibling(x, y) ⇔ Sibling(y, x) et aksiom eller et teorem? :: Et teorem: det følger av Sibling-definisjonen.
- Skriv «aunt» (søster av en forelder) i FOL. :: ∀a,c Aunt(a, c) ⇔ Female(a) ∧ ∃p Sibling(a, p) ∧ Parent(p, c)

## 8.3.3 Numbers, sets, and lists: addisjon, sets og lists
<!-- prio: C | ep: E14 | forelest: delvis -->

L6 og L7 dekket Peano-aksiomene for NatNum og successor (0 ≠ S(n), og ulike tall har ulike etterfølgere).
Addisjon: `∀m NatNum(m) ⇒ +(0, m) = m` og `∀m,n NatNum(m) ∧ NatNum(n) ⇒ +(S(m), n) = S(+(m, n))`. Induksjonsprinsippet er second-order og ikke med.
Syntactic sugar er forkortelser som ikke endrer semantikken: infix m + n for +(m, n), ∀x,y for ∀x ∀y, og mengde- og listenotasjonen under.

Mengder: konstanten {}, predikatet Set, ∈ og ⊆, og funksjonene ∩, ∪ og Add(x, s). Åtte aksiomer, blant annet: en mengde er {} eller Add(x, s2) for en mengde s2, ingenting lagt til gir {}, og `∀x,s x ∈ s ⇔ s = Add(x, s)`. To mengder er like når hver er delmengde av den andre.
Lister er ordnet og kan ha samme element flere ganger. Vokabularet er fra Lisp: Nil, Cons, Append, First, Rest, predikatet Find (som ∈ for mengder) og List. [x] er Cons(x, Nil).

**Husk:** [A, B, C] er bare sukker for Cons(A, Cons(B, Cons(C, Nil))).

- Hva er forskjellen på lister og mengder i FOL? :: Lister er ordnet og kan ha samme element flere ganger; mengder har ingen rekkefølge og ingen duplikater.
- Skriv [A, B, C] uten syntactic sugar. :: Cons(A, Cons(B, Cons(C, Nil)))
- Hva er syntactic sugar? :: En forkortelse av standardsyntaksen som ikke endrer semantikken, f.eks. infix m + n for +(m, n).

<!-- usikker: E14 sier «Peano i L6», men L6- og L7-slidene har bare NatNum og de to ≠-aksiomene. Addisjonen står derfor her som kun bok. -->

## 8.3.4 The wumpus world
<!-- prio: B | ep: E14 | forelest: nei -->

Persepter lagres med tidspunkt, ellers vet ikke agenten når den så hva: `Percept([Stench, Breeze, Glitter, None, None], 5)`. Handlinger er termer: Turn(Right), Forward, Shoot, Grab, Climb.
Regler henter fakta ut av persepten for alle t, f.eks. `∀t,s,b,w,c Percept([s, b, Glitter, w, c], t) ⇒ Glitter(t)`. Refleksregelen `∀t Glitter(t) ⇒ BestAction(Grab, t)` gjør at ASKVARS(KB, BestAction(a, 5)) svarer {a/Grab}.

Ruter er lister [x, y], så `Adjacent([x, y], [a, b])` defineres én gang med aritmetikk i stedet for ett faktum per nabopar. Pit er et predikat på ruter (ingen grunn til å skille gropene), og Wumpus er en konstant (det finnes bare én).
`∀s,t At(Agent, s, t) ∧ Breeze(t) ⇒ Breezy(s)`. Breezy har ikke tidsargument, fordi gropene ikke flytter seg. Da holder én setning for hele brettet: `∀s Breezy(s) ⇔ ∃r Adjacent(r, s) ∧ Pit(r)`.
Siden FOL kan kvantifisere over tid, trengs ett successor-state axiom per predikat, ikke én kopi per tidssteg: `∀t HaveArrow(t + 1) ⇔ (HaveArrow(t) ∧ ¬Action(Shoot, t))`.

**Husk:** Tid og ruter blir argumenter (t og [x, y]), så én FOL-setning erstatter én PL-setning per rute og tidssteg.

- Hvorfor har Percept-setningen i FOL-wumpus et tidsargument? :: Ellers vet ikke agenten når den så hva. Tidsstegene er heltall: Percept([…], 5).
- KB har Percept([Stench, Breeze, Glitter, None, None], 5) og ∀t Glitter(t) ⇒ BestAction(Grab, t). Hva gir ASKVARS(KB, BestAction(a, 5))? :: {a/Grab}, fordi Glitter(5) følger av persepten.
- Hvorfor skrives rutene som lister [x, y] i stedet for navn som Square1,2? :: Da kan Adjacent defineres med én setning; med navn trengs ett ekstra faktum per nabopar.
- Hvorfor har Breezy(s) ikke noe tidsargument? :: Gropene flytter seg ikke, så en rute som er breezy, er det alltid.

## 8.4 Knowledge Engineering in First-Order Logic
<!-- prio: C | ep: E14 | forelest: nei -->

Knowledge engineering er prosessen med å bygge en KB.
En knowledge engineer setter seg inn i et domene, finner ut hvilke begreper som er viktige, og lager en formell representasjon av objektene og relasjonene der.
Kap. 8 bygger special-purpose KB-er: domenet er tydelig avgrenset, og spørsmålene er kjent på forhånd. General-purpose KB-er, som skal dekke bred menneskelig kunnskap (for eksempel til språkforståelse), kommer i kap. 10.

**Husk:** Knowledge engineering er å bygge en KB for et avgrenset domene med kjente spørsmål.

- Hva gjør en knowledge engineer? :: Setter seg inn i et domene, finner de viktige begrepene og lager en formell representasjon av objektene og relasjonene.
- Hva skiller special-purpose og general-purpose KB-er? :: Special-purpose: avgrenset domene og kjente spørsmål (kap. 8). General-purpose: bred menneskelig kunnskap (kap. 10).

## 8.4.1 The knowledge engineering process
<!-- prio: B | ep: E14 | forelest: nei -->

1. Identify the questions: hva KB-en skal svare på, og hvilke fakta hver probleminstans gir. Ligner PEAS.
2. Assemble the relevant knowledge, ofte med eksperter (knowledge acquisition). Ennå ikke formelt.
3. Decide on a vocabulary of predicates, functions and constants. Resultatet er domenets ontology.
4. Encode general knowledge about the domain (aksiomene). Avslører ofte hull, og da går du tilbake til steg 3.
5. Encode a description of the problem instance: enkle atomære setninger.
6. Pose queries and get answers. Du slipper å skrive en egen løsningsalgoritme.
7. Debug and evaluate the knowledge base.

Huskeregel, sju S-er: Spørsmål, Samle, Symboler, Skriv generelt, Skriv instansen, Spør, Sjekk.
Et manglende aksiom ser du der slutningskjeden stopper uventet. Står bare `∀s Smelly(s) ⇒ Adjacent(Home(Wumpus), s)` i KB-en, og ikke ⇔, kan agenten aldri bevise at en rute er uten wumpus.
Et feil aksiom er usant om verden: `∀x NumOfLegs(x, 4) ⇒ Mammal(x)` gjelder ikke for krypdyr og bord. Det kan avgjøres uten resten av KB-en, i motsetning til en programfeil som `offset = position + 1`. Mål til slutt med et testsett av spørsmål.

**Husk:** Vokabularet fra steg 3 er domenets ontology, og den sier hva som finnes, ikke hvordan tingene henger sammen.

- Hva er steg 1 i knowledge engineering, og hva ligner det på? :: Identify the questions: hvilke spørsmål KB-en skal svare på og hvilke fakta som gis. Ligner PEAS.
- Hva kalles vokabularet av predikater, funksjoner og konstanter fra steg 3? :: Domenets ontology. Den sier hva som finnes, ikke hvilke egenskaper og relasjoner tingene har.
- Hvordan oppdager du et manglende aksiom når du debugger en KB? :: Slutningskjeden stopper uventet: et spørsmål du venter svar på, kan ikke besvares.
- Hvorfor er et feil aksiom lettere å finne enn en programfeil? :: Det er usant om verden (f.eks. ∀x NumOfLegs(x, 4) ⇒ Mammal(x)) og kan sjekkes uten resten av KB-en.

## 8.4.2 The electronic circuits domain
<!-- prio: B | ep: E14 | forelest: nei -->

Boka følger de sju stegene for en one-bit full adder C1 med portene X1, X2 (XOR), A1, A2 (AND) og O1 (OR). Inngangene er to bit og en mente, og utgangene er sum og carry.
Spørsmålene gjelder funksjon og kobling, så ledningene er ikke med, bare hvilke terminaler som er koblet: `Connected(Out(1, X1), In(1, X2))`. Skal du feilsøke defekte kretser, må ledningene med.
Vokabular: `Gate(X1)`, `Type(X1) = XOR` (en funksjon, fordi en port har nøyaktig én type), terminalene `In(n, g)` og `Out(n, g)`, og signalverdiene 1 og 0 som objekter med funksjonen `Signal(t)`. Da kan du spørre hvilken verdi en terminal har.
Det holder med ett aksiom per porttype, for eksempel XOR: utgangen er 1 hvis og bare hvis inngangene er ulike. Få og korte regler er tegn på en god ontologi.

Spørsmålet «hvilke innganger gir sum 0 og carry 1?» stilles med ∃i1, i2, i3 og gir tre bindinger: (1, 1, 0), (1, 0, 1) og (0, 1, 1).
Sjekk (1, 1, 0): X1 = 0, X2 = 0 (sum), A1 = 1, A2 = 0, O1 = 1 (carry). Spør du etter alle terminalverdiene, får du hele tabellen. Det er circuit verification.
Glemmer du `1 ≠ 0`, kan systemet bare bevise utgangene for 000 og 110. For X1 med innganger 1 og 0 blir XOR-aksiomet `Signal(Out(1, X1)) = 1 ⇔ 1 ≠ 0`, og det kan ikke avgjøres.

**Husk:** Signal er en funksjon til objektene 1 og 0, og KB-en må vite at 1 ≠ 0.

- Hvorfor er Type en funksjon i kretsdomenet? :: Hver port har nøyaktig én type, f.eks. Type(X1) = XOR.
- Hvorfor brukes objektene 1 og 0 med funksjonen Signal(t) i stedet for et predikat On(t)? :: Da kan du spørre etter verdiene, f.eks. alle mulige signaler på utgangene til C1.
- Hvilke innganger gir sum 0 og carry 1 i full-adderen? :: (1, 1, 0), (1, 0, 1) og (0, 1, 1).
- Hva skjer hvis KB-en for kretsen mangler aksiomet 1 ≠ 0? :: Den kan bare bevise utgangene for 000 og 110, fordi XOR-aksiomet stopper på «1 ≠ 0».

## 9.2.1 Unification: occur check
<!-- prio: A | ep: E15 | forelest: delvis | eksamen: 2016, 2024 -->

L7 dekket UNIFY (Fig. 9.1), MGU og standardizing apart, men ikke occur check.
Før en variabel bindes til en sammensatt term, sjekker UNIFY om variabelen finnes inni termen. Gjør den det, er svaret failure. S(x) og S(S(x)) kan ikke unifiseres, fordi x måtte vært lik S(x).
I UNIFY-VAR kommer sjekken etter de to oppslagene i θ: først {var/val}, så {x/val}, så OCCUR-CHECK, og ellers legges {var/x} til.

Eksempel: UNIFY(Knows(x, x), Knows(y, Mother(y))).
Knows ~ Knows er likt. x ~ y gir θ = {x/y}.
x ~ Mother(y): x er bundet til y, så UNIFY(y, Mother(y)). y er ubundet og finnes i Mother(y): failure.
Uten sjekken ville θ fått y/Mother(y), og y måtte vært Mother(Mother(Mother(…))). Det åpner for unsound inferences.

Sjekken gjør UNIFY kvadratisk i størrelsen på uttrykkene. Mange logic programming-systemer dropper den og lar brukeren passe på; andre bruker mer kompliserte algoritmer i lineær tid.

**Husk:** En variabel kan aldri bindes til en term som inneholder den selv.

- Hva er occur check i UNIFY? :: Før en variabel bindes til en sammensatt term, sjekkes om variabelen finnes inni termen. Gjør den det, gir UNIFY failure.
- UNIFY(S(x), S(S(x)))? :: failure: x måtte bindes til S(x), og x finnes i S(x).
- UNIFY(Knows(x, x), Knows(y, Mother(y)))? :: failure: x/y, og så måtte y bindes til Mother(y), som inneholder y.
- Hvilken kompleksitet gir occur check UNIFY? :: Kvadratisk i størrelsen på uttrykkene som unifiseres.
- Hva gjør mange logic programming-systemer med occur check? :: Dropper den og overlater til brukeren å unngå unsound inferences.
- Hvor i UNIFY-VAR (Fig. 9.1) står OCCUR-CHECK? :: Etter oppslagene av {var/val} og {x/val} i θ, og før {var/x} legges til.

## 9.2.2 Storage and retrieval
<!-- prio: C | ep: E15 | forelest: nei -->

TELL, ASK og ASKVARS bygger på STORE(s), som lagrer setningen s, og FETCH(q), som gir alle unifiers der q unifiserer med en setning i KB.
Enklest er én lang liste der q unifiseres med alt. Det virker, men er tregt.
Predicate indexing legger alle Knows-fakta i én bøtte og alle Brother-fakta i en annen (hashtabell). Har ett predikat millioner av fakta, hjelper det lite: Employs(x, Richard) må skanne hele Employs-bøtta. Da kan fakta i tillegg indekseres på predikat + argument.

En fakta kan lagres under alle spørsmål den svarer på. Employs(IBM, Richard) svarer på seg selv, Employs(x, Richard), Employs(IBM, y) og Employs(x, y). De danner et subsumption lattice.
Et barn får du fra forelderen med én substitusjon, og den høyeste felles etterkommeren til to noder får du med MGU-en deres. Employs(John, John) gir fem noder, fordi Employs(x, x) kommer med.
For n argumenter har gitteret O(2ⁿ) noder. Derfor lager systemer ofte bare noen indekser, for eksempel predikat + ett argument, eller lærer hvilke som lønner seg.

**Husk:** FETCH blir rask med indekser, men et fullt subsumption lattice har O(2ⁿ) noder.

- Hva returnerer FETCH(q)? :: Alle unifiers der spørsmålet q unifiserer med en setning i KB.
- Når holder ikke predicate indexing? :: Når ett predikat har svært mange fakta, f.eks. Employs(x, Richard) blant millioner av Employs-fakta.
- Hvor mange noder har subsumption lattice for en fakta med n argumenter? :: O(2ⁿ). Derfor indekseres ofte bare predikat + ett argument.

## 9.3 Forward Chaining: fra PL til FOL
<!-- prio: C | ep: E15 | forelest: delvis -->

L7 dekket 9.3.1: first-order definite clauses, crime-KB-en og at GMP er sound og complete for slike KB-er.
Innledningen sier hva resten av 9.3 gjør: forward chaining for proposisjonelle definite clauses (kap. 7.5) løftes til first-order definite clauses.
Prisen er at setninger som ikke kan skrives som definite clauses, faller utenfor. Regler på formen Antecedent ⇒ Consequent dekker likevel mange virkelige systemer.

**Husk:** FOL forward chaining er PL forward chaining med unification, og den virker bare på definite clauses.

- Hva er FOL forward chaining en utvidelse av? :: Forward chaining for proposisjonelle definite clauses fra kap. 7.5, løftet til first-order definite clauses.
- Hvilke setninger kan FOL forward chaining ikke bruke? :: Setninger som ikke kan skrives som definite clauses, f.eks. en disjunksjon av to positive atomer.

## 9.3.2 A simple forward-chaining algorithm
<!-- prio: A | ep: E15 | forelest: nei | eksamen: 2023, 2024 -->

FOL-FC-ASK (Fig. 9.3) går i runder. Hver regel får nye variabelnavn og prøves mot faktaene i KB, og hver θ som matcher alle premissene, gir q′ = SUBST(θ, q).
q′ er ny bare hvis den ikke er en renaming av en kjent fakta: Likes(x, IceCream) og Likes(y, IceCream) er samme fakta. Unifiserer q′ med spørsmålet, returneres θ.
Nye fakta legges i KB først når runden er ferdig. Gir en runde ingenting nytt, er KB et fixed point, og svaret er false.

Eksempel (egen KB): `Parent(Elizabeth, Charles)`, `Parent(Charles, William)`, `Female(Elizabeth)`, R1 `Parent(x, y) ∧ Parent(y, z) ⇒ Grandparent(x, z)` og R2 `Grandparent(g, c) ∧ Female(g) ⇒ Grandmother(g, c)`. Spørsmål: Grandmother(Elizabeth, w).
Runde 1: R1 med {x/Elizabeth, y/Charles, z/William} gir Grandparent(Elizabeth, William). R2 har ingen Grandparent-fakta å matche ennå.
Runde 2: R2 med {g/Elizabeth, c/William} gir Grandmother(Elizabeth, William), som unifiserer med spørsmålet: {w/William}. Uten spørsmål gir runde 3 ingenting nytt: fixed point.

FOL-FC-ASK er sound (hvert steg er GMP) og complete for definite clauses. For Datalog (ingen funksjonssymboler) finnes høyst p · nᵏ ground facts, så den stopper. Her: 4 predikater, 3 konstanter, aritet 2 gir 4 · 3² = 36.
Med funksjonssymboler kan den lage uendelig mange fakta (Peano: NatNum(S(0)), NatNum(S(S(0))), …). Følger svaret, finner den det (Herbrand), men følger det ikke, kan den gå for alltid. Entailment er semidecidable.

**Husk:** Nye fakta kan brukes først i neste runde, og en runde uten nye fakta er et fixed point.

- Når regnes en utledet fakta ikke som ny i forward chaining? :: Når den bare er en renaming av en kjent fakta, som Likes(x, IceCream) og Likes(y, IceCream).
- Hva er et fixed point i forward chaining? :: En KB der en hel runde ikke gir noen nye fakta. Da er alt som følger, utledet.
- Er FOL-FC-ASK sound og complete? :: Sound, fordi hvert steg er GMP. Complete for KB-er med definite clauses.
- Hvorfor stopper forward chaining alltid på en Datalog-KB? :: Uten funksjonssymboler finnes høyst p · nᵏ ground facts (p predikater, n konstanter, største aritet k).
- Når kan FOL-FC-ASK gå for alltid? :: Når KB har funksjonssymboler og svaret ikke følger, f.eks. Peano-regelen som gir NatNum(S(0)), NatNum(S(S(0))), …
- Fakta Parent(E, C), Parent(C, W), Female(E); R1 Parent(x, y) ∧ Parent(y, z) ⇒ Grandparent(x, z); R2 Grandparent(g, c) ∧ Female(g) ⇒ Grandmother(g, c). I hvilken runde utleder FC Grandmother(E, W)? :: Runde 2. Runde 1 gir Grandparent(E, W), og R2 kan bruke den først runden etter.

<!-- usikker: Fig. 9.3 sier at q′ ikke skal unifisere med en setning i KB eller new, mens teksten sier at bare en renaming ikke er ny. Blokken og kortene følger teksten, slik E15 gjør. -->

## 9.3.3 Efficient forward chaining
<!-- prio: B | ep: E15 | forelest: nei -->

Fig. 9.3 er treg av tre grunner: hver regel matches mot hver fakta, hver regel sjekkes på nytt hver runde, og den utleder fakta som er irrelevante for målet.

Matching: rekkefølgen på konjunktene teller (conjunct ordering). Optimal rekkefølge er NP-hard, men MRV fra CSP (kap. 5) hjelper: eier Nono mange ting og har få missiler, sjekk Missile(x) før Owns(Nono, x).
Matching er et CSP der hvert konjunkt er en constraint. Kartfargingen av Australia kan skrives som én definite clause `Diff(wa, nt) ∧ … ⇒ Colorable()`, så matching er NP-hard. I praksis er reglene små, og data complexity (kost som funksjon av antall fakta) er polynomisk. Tree-strukturerte regler matches i lineær tid.

Incremental forward chaining: en ny fakta i runde t må bygge på minst én ny fakta fra runde t − 1. Sjekk derfor bare regler med et premiss som unifiserer med en slik fakta. I Grandmother-eksemplet i 9.3.2 sjekkes bare R2 i runde 2.
Rete-algoritmen bygger et dataflytnettverk med én node per premisslitteral og tar vare på delvise matcher mellom rundene. Rete er en nøkkeldel i production systems, noen av de første forward chaining-systemene i utstrakt bruk.

Irrelevante fakta: bruk backward chaining, begrens FC til noen regler, eller bruk magic sets: skriv `Magic(x) ∧ American(x) ∧ … ⇒ Criminal(x)` og legg til Magic(West), så bare West vurderes.

**Husk:** Matching er et CSP og NP-hard; incremental FC og Rete sparer gjentatt arbeid, og magic sets kutter irrelevante fakta.

- Hvilken heuristikk foreslår boka for conjunct ordering i forward chaining? :: MRV fra CSP: match først konjunktet med færrest kandidater, f.eks. Missile(x) før Owns(Nono, x).
- Hva er incremental forward chaining? :: I runde t sjekkes bare regler med et premiss som unifiserer med en fakta utledet i runde t − 1.
- Hva gjør Rete-algoritmen? :: Bygger et dataflytnettverk av premisslitteralene og tar vare på delvise matcher, så de ikke bygges på nytt hver runde.
- Hvordan gjør magic sets forward chaining målrettet? :: Reglene skrives om med et ekstra konjunkt Magic(x) ut fra målet, og Magic(West) legges til, så bare relevante bindinger vurderes.

## 9.4 Backward Chaining
<!-- prio: C | ep: E15 | forelest: nei -->

Backward chaining er den andre store familien av inferensalgoritmer for definite clauses.
Den starter i målet og jobber bakover gjennom reglene til den finner kjente fakta som støtter beviset.
Forward chaining går motsatt vei, fra faktaene mot målet.

**Husk:** BC er måldrevet (fra mål til fakta), FC er datadrevet (fra fakta til mål).

- I hvilken retning jobber backward chaining? :: Fra målet bakover gjennom reglene til kjente fakta som støtter beviset.
- Hvilke setninger bruker backward chaining i kap. 9? :: Definite clauses, som forward chaining.

## 9.4.1 A backward-chaining algorithm
<!-- prio: A | ep: E15 | forelest: nei | eksamen: 2016, 2023 -->

FOL-BC-ASK (Fig. 9.6) er et AND/OR-søk. OR: målet kan bevises av hvilken som helst regel der konklusjonen (rhs) unifiserer med målet. AND: alle konjunktene i premisset (lhs) må bevises.
En fakta er en regel med tom lhs. FOL-BC-AND beviser konjunktene ett om gangen og bruker θ så langt på neste: SUBST(θ, first).
Den er en generator som gir én θ om gangen: Person(x) kan gi {x/John} og så {x/Richard}.

Eksempel med KB-en fra 9.3.2, mål Grandmother(Elizabeth, w):
R2 gir {g/Elizabeth, c/w} og delmålene Grandparent(Elizabeth, w) og Female(Elizabeth). R1 gir {x/Elizabeth, z/w} og delmålene Parent(Elizabeth, y) og Parent(y, w).
Parent(Elizabeth, y) gir {y/Charles}, så neste delmål er Parent(Charles, w), som gir {w/William}. Female(Elizabeth) er en fakta. Svar: {w/William}.

Søket er dybde først fra venstre: minnet er lineært i bevisets størrelse, men det får gjentatte tilstander og er ikke complete.
Eksempel (egen): R3 `Parent(x, y) ⇒ Ancestor(x, y)` og R4 `Ancestor(x, y) ∧ Ancestor(y, z) ⇒ Ancestor(x, z)`. Målet Ancestor(William, Elizabeth) følger ikke. R3 feiler, R4 gir delmålet Ancestor(William, y), som gir R4 igjen, uten ende.
FC får Ancestor(Elizabeth, Charles) og Ancestor(Charles, William) i runde 1, Ancestor(Elizabeth, William) i runde 2, ingenting i runde 3, og svarer false.

**Husk:** BC er dybde-først AND/OR-søk som fører θ videre til neste delmål; lite minne, men løkker gjør den ufullstendig.

- Hva er OR- og AND-delen i FOL-BC-ASK? :: OR: hvilken som helst regel der konklusjonen unifiserer med målet. AND: alle konjunktene i den regelens premiss må bevises.
- Hvorfor er FOL-BC-ASK en generator? :: Et mål med variabler kan bevises på flere måter; den gir én θ om gangen, f.eks. {x/John} og så {x/Richard}.
- Hvordan behandler FOL-BC-ASK en fakta som American(West)? :: Som en regel med tom venstreside (lhs), som beviser et mål den unifiserer med direkte.
- Backward chaining: delmålene er Parent(Elizabeth, y) og Parent(y, w), og det første gir {y/Charles}. Hva blir det andre delmålet? :: Parent(Charles, w): θ fra delmålene før brukes på neste konjunkt (SUBST(θ, first)).
- Hvilken søkestrategi er backward chaining, og hvor mye minne bruker den? :: Dybde først fra venstre; minnet er lineært i bevisets størrelse.
- Hvorfor er backward chaining ikke complete? :: Dybde-først-søket kan gå i løkke, f.eks. gir Ancestor(x, y) ∧ Ancestor(y, z) ⇒ Ancestor(x, z) nye Ancestor-delmål uten ende.

## 10.2.3 Objects: Things and stuff
<!-- prio: C | ep: E17 | forelest: nei | merk: forsikring: Canvas tar den ut, L12 sier «§10.2» uten unntak -->

Deler du et jordsvin (aardvark) i to, har du ikke to jordsvin. Deler du en klump smør, har du to klumper smør. Smør er stuff, jordsvinet er en thing.
Språket skiller det samme: count nouns (aardvark, hole, theorem) og mass nouns (butter, water, energy).
En konkret klump, Butter₃, er et objekt, og Butter er kategorien. Hver del av smør er smør: `b ∈ Butter ∧ PartOf(p, b) ⇒ p ∈ Butter`.

Intrinsic egenskaper hører til stoffet og overlever deling: tetthet, kokepunkt, smak, farge og eierskap. Extrinsic egenskaper gjør det ikke: vekt, lengde og form.
En kategori som bare er definert med intrinsic egenskaper, er en substance (mass noun). Har definisjonen en extrinsic egenskap, er den en count noun.
Derfor er UnsaltedButter stuff, men PoundOfButter er det ikke: et halvt pund er ikke et pund. Stuff og Thing er de mest generelle kategoriene.

**Husk:** Stuff tåler deling fordi definisjonen bare bruker intrinsic egenskaper; én extrinsic egenskap (vekt, form) gjør kategorien til en count noun.

Huskeregel: kutt-testen. Gir halvdelen mer av det samme? Da er det stuff.

- Hva skiller stuff fra things? :: Deler du stuff (smør), får du mer av samme stuff. Deler du en thing (et jordsvin), får du ikke to av den.
- Hva er forskjellen på intrinsic og extrinsic egenskaper? :: Intrinsic (tetthet, smak, farge) overlever deling av stoffet. Extrinsic (vekt, lengde, form) gjør det ikke.
- Er PoundOfButter en kategori av stuff? :: Nei. Definisjonen bruker vekt, som er extrinsic. Et halvt pund smør er ikke et pund smør.

## 10.3.2 Fluents and objects
<!-- prio: C | ep: E17 | forelest: nei -->

I event calculus kan et fysisk objekt sees som en generalisert hendelse: en bit av rom og tid. USA er en «hendelse» som startet i 1776 med 13 stater og pågår fortsatt med 50.
Egenskaper som endrer seg, beskrives med fluents, for eksempel Population(USA).

Presidenten er vanskeligere. En term peker på nøyaktig ett objekt i en modell, så President(USA) kan ikke bety ulike personer til ulike tider.
Løsningen: President(USA) er ett objekt satt sammen av ulike personer i ulike perioder, Washington 1789–1797, Adams 1797–1801, og så videre.
At Washington var president hele 1790: `T(Equals(President(USA), GeorgeWashington), Begin(AD1790), End(AD1790))`.

Equals er et funksjonssymbol, ikke predikatet =. Et predikat kan ikke stå som argument til T, og logisk identitet kan ikke endre seg over tid.
Det som er likt, er delene av de to objektene som ligger i 1790.

**Husk:** President(USA) er ett objekt laget av ulike personer i ulike perioder, og T(Equals(…), …) sier hvem det var i et gitt intervall.

- Hvordan kan et fysisk objekt som USA behandles i event calculus? :: Som en generalisert hendelse, en bit av rom og tid, med fluents som Population(USA) for egenskaper som endrer seg.
- Hvorfor kan ikke President(USA) peke på ulike personer til ulike tider? :: En term peker på nøyaktig ett objekt i en modell. President(USA) er derfor ett objekt satt sammen av ulike personer over tid.
- Hvorfor brukes Equals og ikke = i T(Equals(President(USA), GeorgeWashington), …)? :: Et predikat kan ikke være argument til T, og logisk identitet kan ikke endre seg over tid.

## 11.3 Heuristics for Planning: set cover og utvalgte preconditions
<!-- prio: B | ep: E18 | forelest: delvis -->

L11 dekket ignore preconditions og ignore delete lists.
Med ignore preconditions er antall uoppfylte mål nesten den relakserte kostnaden, men ikke helt: (1) én handling kan oppnå flere mål, og (2) en handling kan oppheve effekten av en annen.
Boka tar hensyn til (1) og ser bort fra (2): fjern alle preconditions og alle effekter unntatt mållitteralene, og finn færrest handlinger der unionen av effektene dekker målet. Det er set-cover-problemet, og det er NP-hard.
Greedy set cover kommer innenfor en faktor log n av minimum (n = antall mållitteraler), men mister garantien for admissibility.

Eksempel (egne tall): målet er g1–g6. a1 gir {g1, g2, g3, g4}, a2 gir {g1, g2, g5} og a3 gir {g3, g4, g6}. Å telle uoppfylte mål gir 6, og minste dekning er a2 + a3 = 2.
Greedy tar den største først (a1), trenger så a2 for g5 og a3 for g6, og svarer 3 > 2.

Du kan også fjerne bare noen preconditions. Slide(t, s1, s2) i 8-puzzle krever On(t, s1) ∧ Tile(t) ∧ Blank(s2) ∧ Adjacent(s1, s2). Fjerner du Blank(s2) og Adjacent(s1, s2), får du misplaced tiles. Fjerner du bare Blank(s2), får du Manhattan distance.
Slike heuristikker kan lages automatisk fra action schemas, fordi planlegging bruker factored representation.

**Husk:** Ignore preconditions blir set cover over mållitteralene; eksakt er NP-hard, og greedy er rask, men ikke admissible.

- Hvorfor er «antall uoppfylte mål» ikke helt riktig under ignore preconditions? :: Én handling kan oppnå flere mål, og en handling kan oppheve effekten av en annen.
- Hvordan blir ignore preconditions et set-cover-problem? :: Fjern alle preconditions og alle effekter unntatt mållitteralene, og finn færrest handlinger som til sammen dekker målet.
- Er greedy set cover admissible? :: Nei. Den er innenfor en faktor log n av minimum (n = antall mållitteraler), men kan overvurdere.
- Hvilken heuristikk får du ved å fjerne bare Blank(s2) fra Slide-skjemaet i 8-puzzle? :: Manhattan distance. Fjerner du også Adjacent(s1, s2), får du misplaced tiles.

## 11.7 Analysis of Planning Approaches
<!-- prio: C | ep: E19 | forelest: nei -->

Planlegging kombinerer søk og logikk: en planlegger søker etter en løsning, eller beviser konstruktivt at en løsning finnes. Samspillet har tatt planleggere fra lekeproblemer med rundt et dusin tilstander til industrielle problemer med millioner av tilstander.
Kjernen er å holde kombinatorisk eksplosjon i sjakk: n proposisjoner gir 2ⁿ tilstander. Uavhengige delproblemer er det sterkeste våpenet, og full dekomponering gir i beste fall eksponentiell speedup. Negative interactions mellom handlinger ødelegger dekomponeringen.
SATPlan kan kode logiske relasjoner mellom delproblemene. Forward search finner heuristisk mønstre (delmengder av proposisjoner) som dekker de uavhengige delproblemene, og virker derfor også når de ikke er helt uavhengige.
Ingen vet ennå hvilke teknikker som er best på hvilke problemer. Portfolio planning har flere algoritmer klare: velg den beste per problem, kjør alle parallelt på hver sin CPU, eller flett dem etter en tidsplan.

**Husk:** Planlegging er kamp mot 2ⁿ tilstander, og uavhengige delproblemer er det beste våpenet.

- Hvilke to hovedområder i AI kombinerer planlegging? :: Søk og logikk: planleggeren søker etter en plan eller beviser konstruktivt at en plan finnes.
- Hva ødelegger dekomponeringen av et planleggingsproblem i uavhengige delproblemer? :: Negative interactions mellom handlinger.
- Hva er portfolio planning? :: Flere algoritmer er klare: velg den beste per problem, kjør alle parallelt, eller flett dem etter en tidsplan.

## 17.2.1 Games with a single move: Normal form games: focal points
<!-- prio: B | ep: E10 | forelest: delvis -->

L10 tok dominans, Nash equilibrium, rene og blandede strategier, PD og Battle of the Sexes. Focal points står bare i boka.
Mange spill har flere Nash-likevekter. Bokas eksempel (Bo velger rad, Ali kolonne): (t, l) gir (10, 10), (b, r) gir (1, 1), og de to andre gir (0, 0). Ingen har en dominant strategi, men både (t, l) og (b, r) er Nash-likevekter.
Begge vil havne i samme likevekt, men i non-cooperative game theory velger de hver for seg uten å kunne avtale noe. Det er et **coordination problem**.
**Focal point:** et utfall som skiller seg ut som det «opplagte» å samle seg om. Her er det (t, l), fordi begge får mye mer. Begrepet er ikke presist: hva som er focal, avhenger av spillet.

**Husk:** Har spillet flere likevekter, løser et focal point koordineringen: utfallet alle regner med at de andre også velger.

- Hva er et coordination problem i spillteori? :: Spillerne vil havne i samme likevekt, men må velge hver for seg uten å kunne avtale noe.
- Hva er et focal point? :: Et utfall som peker seg ut som det opplagte å koordinere på, for eksempel fordi det gir alle mye mer.
- Et spill har Nash-likevektene (10, 10) og (1, 1), og (0, 0) ellers. Hva er focal point? :: (10, 10), fordi begge får mye mer der, selv om begge utfallene er Nash-likevekter.
- Er focal point et presist begrep? :: Nei. Hva som skiller seg ut, avhenger av spillet.

## 17.2.2 Social welfare: Pareto optimality, utilitarian og egalitarian social welfare
<!-- prio: A | ep: E10 | forelest: delvis | eksamen: 2023 -->

L10 tok maximin for zero-sum (Morra). Resten står i boka: se spillet utenfra og spør hvilket utfall som er best for alle samlet.

**Pareto optimal:** ingen andre utfall gjør én spiller bedre uten å gjøre noen dårligere. Et utfall som ikke er Pareto optimal, sløser med utility.
**Utilitarian social welfare:** summen av alles utility. Den ser ikke på fordelingen, og den krever at utility kan måles på felles skala (bokas «utility monster»). Eksamen 2023 regnet social welfare som denne summen.
**Egalitarian social welfare:** ser på fordelingen, for eksempel ved å maksimere utility til den dårligst stilte (maximin), eller med Gini-koeffisienten. Den kan ofre mye total velferd for litt jevnere fordeling.
**PD:** (testify, testify) er eneste Nash-likevekt og eneste utfall som ikke er Pareto optimal. (refuse, refuse) gir både størst sum (−2) og størst minimum (−1).

**Egen illustrasjon** (Ali velger rad, Bo kolonne): (t, l) = (4, 4), (t, r) = (0, 9), (b, l) = (6, 1), (b, r) = (2, 2).
- Pareto: (2, 2) er dominert av (4, 4). De tre andre er Pareto optimal, for ingen annen celle er minst like god for begge.
- Summer 8, 9, 7, 4: utilitarian velger (t, r) = (0, 9). Minimum 4, 0, 1, 2: egalitarian velger (t, l) = (4, 4).
- Nash: b dominerer t for Ali (6 > 4, 2 > 0), og r dominerer l for Bo (9 > 4, 2 > 1). Likevekten (2, 2) er den eneste som ikke er Pareto optimal.

**Husk:** Pareto = ingen sløsing, utilitarian = størst sum, egalitarian = best for den dårligst stilte, og Nash-likevekten kan tape på alle tre.

- Når er et utfall Pareto optimal? :: Når ingen andre utfall gjør én spiller bedre uten å gjøre en annen dårligere.
- Hva er utilitarian social welfare, og hva er svakheten? :: Summen av alles utility. Den overser hvordan utility er fordelt mellom spillerne.
- Hva er egalitarian social welfare i maximin-varianten? :: Velg utfallet som gir den dårligst stilte spilleren høyest utility.
- Hvilket utfall i fangens dilemma er ikke Pareto optimal? :: (testify, testify), som også er eneste Nash-likevekt. (refuse, refuse) maksimerer både sum og minimum.
- (t,l) = (4,4), (t,r) = (0,9), (b,l) = (6,1), (b,r) = (2,2). Hvilke utfall er Pareto optimal? :: (t, l), (t, r) og (b, l). (b, r) er dominert av (4, 4).
- Samme spill: hvilket utfall velger utilitarian, og hvilket velger egalitarian social welfare? :: Utilitarian velger (t, r) med sum 9. Egalitarian velger (t, l) med minimum 4.

## 17.2.3 Repeated games: limit of means
<!-- prio: B | ep: E10 | forelest: delvis -->

L10 tok backward induction, grim trigger og TFT, og summerte uendelig mange runder med diskontering δ. Boka bruker i stedet limit of means.
**Limit of means:** nytten av en uendelig rekke payoffs U₀, U₁, U₂, … er snittet per runde i det lange løp: grensen av (1/T) · (U₀ + … + U_T) når T → ∞.
Grensen finnes ikke for alle rekker, men alltid for finite state machine-strategier (FSM): maskinene havner før eller siden i en tidligere tilstand, så rekka blir en endelig start fulgt av en syklus. Snittet er snittet over syklusen, og starten teller ikke.

**Bokas regning i gjentatt PD** (HAWK vitner alltid, DOVE tier alltid): DOVE–DOVE gir −1 hver, HAWK–DOVE gir 0 og −10, og HAWK–HAWK gir −5 hver.
HAWK mot GRIM: GRIM får −10 i runde 0 og så −5 for alltid, altså −5. GRIM–GRIM gir −1 hver og er en Nash-likevekt: den som vitner, straffes med −5 for alltid.
**Egen illustrasjon:** TFT mot en strategi som veksler testify, refuse, testify, … TFT får −10, 0, −10, 0, … og motstanderen 0, −10, 0, −10, … Syklusen har lengde 2, så begge får (−10 + 0)/2 = −5.

**Husk:** Limit of means er snittet per runde i det lange løp; med FSM-strategier er det snittet over syklusen som gjentas.

- Hvordan måler limit of means nytten av en uendelig rekke payoffs? :: Som snittet per runde i det lange løp: grensen av (1/T) · (U0 + … + UT) når T → ∞.
- Hvorfor finnes limit of means alltid for FSM-strategier? :: Maskinene gjentar til slutt en tidligere tilstand, så payoffs blir en endelig start pluss en syklus. Snittet er snittet over syklusen.
- HAWK mot GRIM i uendelig gjentatt PD: hva får GRIM med limit of means? :: −5. Runde 0 gir −10, men deretter −5 for alltid, og én runde forsvinner i snittet.
- Hvordan skiller L10 og boka seg når de verdsetter uendelig mange runder? :: L10 diskonterer med δ (sum av δ^t · Ut). Boka bruker limit of means, snittet per runde.

## 25.1 Word Embeddings
<!-- prio: C | ep: E20 | forelest: nei | merk: uavklart pensum: Canvas «Chapter 24-25*» uten fotnote, L9 peker bare hit -->

One-hot-vektorer (1 på ordets plass, 0 ellers) gjør alle ordpar like ulike. Tellevektorer over alle n-gram ordet står i, blir enorme: 100 000 ord gir 10²⁵ mulige 5-gram.
En word embedding er en kort, tett vektor på noen hundre tall som læres fra data. Enkeltdimensjonene betyr ingenting man kan lese, men like ord havner nær hverandre (land, slektskap, kjøretøy, mat).

Differansene koder ofte relasjoner. «A er til B som C er til D» løses med D = C + (B − A), og svaret er ordet nærmest D.
Oppdiktede 2D-tall: Athens = (1, 1), Greece = (1, 3), Oslo = (4, 1). D = (4, 1) + (0, 2) = (4, 3), og nærmeste ord er Norway. Ingen garanti for at en gitt relasjon blir fanget.
Embeddings kan lastes ferdig trent (word2vec, GloVe, fastText) eller læres sammen med oppgaven, for eksempel en POS-tagger som ser et vindu på 5 ord.

**Husk:** En word embedding er en lært, kort vektor der like ord ligger nær hverandre, og analogier løses med D = C + (B − A).

- Hva er svakheten med one-hot-koding av ord? :: Alle ordpar blir like ulike, så representasjonen fanger ingen likhet mellom ord.
- Hva er en word embedding? :: En kort, tett vektor på noen hundre tall, lært fra data, der like ord ligger nær hverandre.
- Hvordan løser embeddings «Athens er til Greece som Oslo er til ?»? :: Regn D = Oslo + (Greece − Athens) og velg ordet nærmest D, her Norway.

## 25.2–25.4 Recurrent Neural Networks, Sequence-to-Sequence Models and the Transformer
<!-- prio: C | ep: E20 | forelest: nei | merk: uavklart pensum: Canvas «Chapter 24-25*» uten fotnote; bare oversiktsnivå -->

**RNN:** leser ett ord om gangen og bærer en skjult tilstand zₜ, laget av zₜ₋₁ og ordet xₜ. Samme vekter i hver posisjon, så antall parametere avhenger ikke av setningslengden.
Gammel informasjon blekner som i hviskeleken. LSTM har gates som velger hva som huskes og glemmes. En bidirectional RNN leser også fra høyre.

**Seq2seq:** én RNN leser kildesetningen, og den siste skjulte tilstanden starter en ny RNN som skriver målsetningen. Svakheter: nære ord dominerer, hele setningen presses inn i én vektor, og ord for ord går tregt.
**Attention:** hvert målord ser på alle kildetilstandene sⱼ. Score rᵢⱼ = hᵢ₋₁ · sⱼ, softmax gir vekter aᵢⱼ, og kontekstvektoren er cᵢ = Σⱼ aᵢⱼ sⱼ.
Decoding: greedy velger beste ord hvert steg og kan ikke angre; beam search holder de k beste hypotesene.

**Transformer:** self-attention, der hvert ord ser på alle ordene i samme setning via query, key og value (rᵢⱼ = qᵢ · kⱼ / √d). Uten sekvensiell avhengighet regnes alle posisjoner parallelt.
Self-attention ser ikke rekkefølgen, så en positional embedding legges til hvert ord. Decoderen ser bare på tidligere ord.

**Husk:** RNN leser ord for ord, seq2seq koder og dekoder, attention lar hvert målord se på hele kilden, og transformeren bytter RNN ut med self-attention som regnes parallelt.

- Hva er hovedideen i en RNN for språk? :: Den leser ett ord om gangen og bærer en skjult tilstand videre, med samme vekter i hver posisjon.
- Hvilket problem i seq2seq løser attention? :: Uten attention må hele kildesetningen presses inn i én vektor. Med attention ser hvert målord på alle kildetilstandene, vektet med softmax.
- Hva skiller transformeren fra en RNN? :: Den bruker self-attention mellom alle ordene i setningen i stedet for å lese ord for ord, så alt kan regnes parallelt.
<!-- usikker: oppdraget ba om én eller to blokker for kap. 25, så 25.2–25.4 er samlet i én blokk med et seksjonsintervall i overskriften i stedet for ett nummer. -->

## 28.1.4 Measuring AI: 30 %-grensen og Eugene Goostman
<!-- prio: B | ep: E21 | forelest: delvis | eksamen: 2015 -->

L1 dekket Turing-testen (1.1.1) og ELIZA-dialogen. Resten står bare i boka.
Turing (1950) byttet «kan maskiner tenke?» med en atferdstest: fem minutter skriftlig samtale, så gjetter utspørreren om det var program eller menneske. Programmet består hvis det lurer utspørreren 30 % av gangene.
Turings poeng var ikke detaljene, men å måle intelligens med prestasjon på en åpen atferdsoppgave i stedet for filosofisk spekulasjon.
Han spådde at det skulle skje innen år 2000. Ingen er enige om at noe program har bestått.

Chatboter som ELIZA lurer folk som ikke vet at de kan snakke med en maskin.
I 2014 lurte Eugene Goostman 33 % av utrente amatørdommere ved å spille en ukrainsk gutt med dårlig engelsk, som forklarte feilene.
Kanskje testen heller måler hvor godtroende mennesker er. Ingen godt trent dommer er blitt lurt.
AI-forskere konkurrerer heller i sjakk, Go, StarCraft II og bildegjenkjenning. Målet er bedre vitenskap og nyttige verktøy, ikke å lure dommere.

**Husk:** Fem minutter, lur utspørreren 30 % av gangene; Eugene Goostman (2014, 33 % av amatører) viser at testen like gjerne måler godtroenhet.

- Hva er oppsettet i Turing-testen slik 28.1.4 beskriver den? :: Fem minutters skriftlig samtale med en utspørrer. Programmet består hvis det lurer utspørreren 30 % av gangene.
- Hva var Turings egentlige poeng med testen? :: Å måle intelligens med prestasjon på en åpen atferdsoppgave i stedet for filosofisk spekulasjon. Detaljene var underordnet.
- Hva viste Eugene Goostman i 2014? :: Den lurte 33 % av utrente dommere som ukrainsk gutt med dårlig engelsk. Testen måler kanskje heller menneskelig godtroenhet.
- Hvorfor er Turing-testen ikke et hovedmål i AI-forskningen? :: Forskere foretrekker konkrete konkurranser som sjakk, Go og bildegjenkjenning. Målet er nyttig vitenskap, ikke å lure dommere.
<!-- usikker: eksamen 2015 (sant/usant i) spurte om Turing-testen generelt, som ble forelest i 1.1.1, ikke om detaljene som bare står i 28.1.4. -->

## 28.3.5 The future of work
<!-- prio: C | ep: E21 | forelest: nei | merk: forsikring: Canvas tar den ut, L12 sier «§28.3 (the whole chapter)» -->

Når en maskin overtar arbeid, faller sysselsettingen straks. Spørsmålet er om compensation effects tar det igjen: høyere produktivitet gir mer velstand, mer etterspørsel og nye jobber.
Historisk har det gått slik. Vevstoler erstattet vevere på 1810-tallet (luddittene), og Keynes kalte jobbtapet på 1930-tallet technological unemployment. Begge ganger kom sysselsettingen tilbake.
Minibanker gjorde bankfilialer billigere, så det ble flere filialer og flere bankansatte. Automatisering fjerner oftere oppgaver enn hele yrker.

Problemet er tempoet. Landbruket gikk fra over 40 % til 2 % av den amerikanske arbeidsstyrken fra 1900 til 2000, altså over generasjoner. AI kan kreve omskolering flere ganger i ett arbeidsliv.
Teknologi øker ulikheten (winner-take-all): er bonden Ali 10 % bedre enn Bo, tjener Ali om lag 10 % mer. Er apputvikleren Cary 10 % bedre enn Dana, kan Cary ta 99 % av markedet.
En jobb gir produksjon, inntekt og mening. Med automatisering kan de tre skilles, og inntekten kan komme fra ordninger som universal basic income.

**Husk:** Automatisering fjerner oftest oppgaver, ikke hele yrker, og compensation effects har historisk gitt nye jobber; faren med AI er tempoet og økt ulikhet.

- Hva er compensation effects? :: Det som øker sysselsettingen etter automatisering: høyere produktivitet gir mer velstand, mer etterspørsel og nye jobber.
- Hva viser minibank-eksempelet? :: Minibanker gjorde filialer billigere, så det ble flere filialer og flere bankansatte. Automatisering fjerner oftere oppgaver enn hele jobber.
- Hvorfor kan AI-omstillingen bli tyngre enn landbrukets? :: Landbruket krympet fra over 40 % til 2 % over 100 år, på tvers av generasjoner. AI kan endre yrker flere ganger i ett arbeidsliv.

## 28.3.6 Robot rights
<!-- prio: C | ep: E21 | forelest: nei | merk: forsikring: Canvas tar den ut, L12 sier «§28.3 (the whole chapter)» -->

Spørsmålet henger på bevissthet (28.2). Uten bevissthet og qualia er det få som mener at roboter fortjener rettigheter.
Kan roboter føle smerte, frykte døden eller regnes som personer, kan man argumentere for rettigheter, slik undertrykte grupper har kjempet for sine.
Saudi-Arabia ga æresborgerskap til Sophia, en menneskelignende dukke med forhåndsprogrammerte replikker.
Rettigheter gir nye problemer: er omprogrammering slaveri? En rik person kan kjøpe tusenvis av roboter som stemmer, og det bryter med «one person, one vote».

Ernie Davis vil unngå dilemmaet ved aldri å bygge roboter som kan regnes som bevisste. Roboter er verktøy, og personstatus lar eieren slippe ansvar: «bilen krasjet av seg selv».
Hybrider av menneske og maskin kan viske ut grensen.

**Husk:** Robotrettigheter står og faller på bevissthet og qualia; Davis vil derfor aldri bygge roboter som kan være bevisste.

- Hva avgjør om roboter bør ha rettigheter, ifølge boka? :: Om de har bevissthet og qualia, for eksempel kan føle smerte. Uten det mener få at de fortjener rettigheter.
- Hva foreslår Ernie Davis om robotbevissthet? :: Aldri bygge roboter som kan regnes som bevisste. Roboter er verktøy, og personstatus ville latt eierne slippe ansvar.
- Hvilket demokratisk problem gir stemmerett for roboter? :: En rik person kan kjøpe og programmere tusenvis av roboter som stemmer. Det bryter med «one person, one vote».
<!-- avvik: PENSUMOVERSIKT avsnitt 6 regner roboten Sofia (L1) som stoff boka ikke har, men 28.3.6 nevner Sophia og æresborgerskapet i Saudi-Arabia. -->
