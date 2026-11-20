# E21 – Kan maskiner tenke, og hva bør de gjøre?

> Pensum: Global 28.1–28.3 (US 27.1–27.3) uten 28.3.5–28.3.6 (Canvas) + 1.5/1.1.5 · Forelesning: L12 del 2, L1 del 1 · Øving: – · Eksamensvekt: ~2–5 %
> Video: `videoer/e21-filosofi-etikk/out/tdt4136-e21-filosofi-etikk.mp4` (13:53)

## Kapitler i videoen

- 0:00 – Intro
- 0:39 – Grensene for AI
- 3:07 – Kan maskiner tenke?
- 4:52 – Våpen og personvern
- 7:10 – Fairness og COMPAS
- 9:45 – Tillit og AI safety
- 11:18 – Eksamen 2025, oppgave 13b
- 12:45 – Koblinger og oppsummering

## Kjerneideer

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

## Algoritmer og håndsporing

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

## Eksamensfeller

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

## Koblinger til andre kapitler

- → kap. 1–2 / E01: standardmodellen (gi et mål, la agenten maksimere) er det AI safety angriper. En utility-basert agent er bare så trygg som nyttefunksjonen sin. Beneficial machines (1.1.5) er bokas alternativ.
- → kap. 2 / E01: P i PEAS er performance measure, og det er der etikken kommer inn. Fasiten i 2021 (6.3) foreslo fairness som del av målfunksjonen. Consequentialism (2.2.1) er spørsmålet i 2020.
- → kap. 24–25 / E20: debiasing i NLP kom på eksamen 2024 (Q20). Koblingen står i eksamenen, ikke i kap. 28.
- → kap. 18 / E10: spillteori og utility med flere agenter. Fasiten i 2020 roste koblingen mellom etikk, spillteori og utilities. L12 nevner assistance games, der agenten er usikker på menneskets preferanser.
- → kap. 7.7: qualification problem, umuligheten av å liste alle unntak, er samme idé som informality. 7.7 er UT.

## Ikke pensum her

- 28.3.5 The future of work og 28.3.6 Robot rights: **UT** (Canvas). L12 s. 37 sier bare «§28.3 (the whole chapter)», og de ble ikke forelest. Videoen nevner dem kort som bakgrunn.
- Systems reply, inverted spectrum og the hard problem: står ikke i 4e-teksten. De er tatt med som bakgrunn, fordi de er de vanlige motargumentene.
- 7.7 (qualification problem i agentene): UT (Canvas).
- 1.1.5 Beneficial machines og 1.5 Risks and benefits: i pensum, men bare i boka, ikke forelest (PENSUMOVERSIKT).
- 28.1.4 Measuring AI: bare Turing-test og ELIZA er forelest (L1 del 1), ikke resten av delkapitlet (PENSUMOVERSIKT).

## Øv selv

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

## Fasit

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
