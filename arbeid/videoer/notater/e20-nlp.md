# E20 – Språk: språkmodeller, tagging og parsing

> Pensum: Global 24.1–24.3 og 24.6 (US 23.1–23.3 og 23.6); kap. 25 (US 24) som oversikt, status uavklart · Forelesning: L9 · Øving: – · Eksamensvekt: ~2–5 % (NLP), men oppgavene kan være regning
> Video: `videoer/e20-nlp/out/tdt4136-e20-nlp.mp4` (14:03)

## Kapitler i videoen

- 0:00 – Intro
- 0:44 – Hva er en språkmodell?
- 2:08 – N-gram og nullene
- 4:14 – Bedre smoothing og andre modeller
- 5:27 – Ord og ordklasser
- 7:25 – Grammatikk og PCFG
- 8:51 – Parsing og CYK
- 10:39 – Oppgaver og dyp læring
- 11:54 – Eksamensoppgave
- 13:02 – Koblinger og oppsummering

## Kjerneideer

**Hvorfor sannsynligheter.** I logikk er en setning enten lovlig eller ulovlig. Naturlig språk er tvetydig («He saw her duck»: and eller dukker?), vagt og i stadig endring. Derfor gir vi strenger en sannsynlighet.

**Language model.** En sannsynlighetsfordeling over strenger: P(«Do I dare disturb the universe?») ≫ P(«Universe dare the I disturb do?»). Den brukes til å foreslå neste ord, rette stavefeil, velge beste oversettelse og som del av talegjenkjenning.

**Bag-of-words og naive Bayes (24.1.1).** Teksten behandles som ord trukket uavhengig fra en pose per klasse:

  P(Class | w₁:N) = α · P(Class) · ∏ⱼ P(wⱼ | Class).

- P(Class) er prioren.
- P(wⱼ | Class) telles i et merket korpus.
- α normaliserer.

Rekkefølgen forsvinner helt, så «the dog bites the man» og «the man bites the dog» har samme ord og får samme sannsynlighet. Boka (24.1.2) og L9 slide 12 motiverer n-gram med «quarter», som er vanlig i både business og sport: frasene «first quarter earnings report» og «fourth quarter touchdown passes» hører hver til sin kategori, men bag-of-words teller hvert ord for seg og ser ikke frasen.

**N-gram og Markov-antagelsen (24.1.2).**

- Uten forenkling avhenger hvert ord av alle ordene før. Med 100 000 ord og setninger på 40 ord blir det rundt 10²⁰⁰ parametere.
- Markov-antagelsen: bare de n − 1 siste ordene teller, P(wⱼ | w₁:ⱼ₋₁) ≈ P(wⱼ | wⱼ₋ₙ₊₁:ⱼ₋₁). n = 1 er unigram, 2 bigram, 3 trigram.
- Maximum likelihood-estimatet er en brøk av tellinger: P(w | forrige) = c(forrige w) / c(forrige).

**Sparse data.** Et korpus får aldri med alt som er sjeldent. Ett usett n-gram gir P = 0, og siden setningssannsynligheten er et produkt, blir hele setningen 0. Dette gjelder også når hvert ord er kjent. Det er paret som mangler.

**Smoothing (24.1.4).** Flytt litt sannsynlighetsmasse fra vanlige n-gram til sjeldne og usette.

- **Add-one (Laplace):** (c + 1) / (c(forrige) + V), der V er antall ulike ord. +V sørger for at fordelingen fortsatt summerer til 1. Nullene forsvinner, men den tar mye fra det du har sett.
- **Ukjente ord:** bytt sjeldne ord med `<UNK>` allerede i treningen. Beslektede symboler er `<NUM>`, `<EMAIL>`, `<URL>` og `<S>` for setningsstart.
- **Backoff:** for få tellinger på trigram? Gå ned til bigram, så unigram.
- **Linear interpolation:** P̂ = λ₃P(trigram) + λ₂P(bigram) + λ₁P(unigram) med Σλ = 1. λ kan være faste eller læres, for eksempel med EM.

**Andre n-gram (24.1.3).**

- **Character-level:** n-gram over bokstaver. Den gjenkjenner språket på et par ord med over 99 % treff, men svensk mot norsk bare rundt 95 % (L9 s. 16). Den håndterer også ukjente ord.
- **Skip-gram:** par med ord imellom («ne … pas» i «je ne comprends pas»).

**Sammenligning (24.1.7).** Boka trakk tilfeldige setninger fra n-gram-modeller av sin egen tekst. n = 1 gir ordsalat, n = 2 lokale par og n = 4 nesten setninger. Større n er mer flytende, men kopierer treningsteksten.

**Ordrepresentasjoner (24.1.5).**

- I en n-gram-modell er hvert ord et atom: «cat» og «kitten» har ingenting felles.
- **WordNet** er en håndlaget ordbok med relasjoner: kitten is-a young mammal is-a mammal is-a animal.
- **One-hot**-vektorer gjør alle ordpar like ulike.
- **Word embeddings** er korte, lærte vektorer der like ord havner nær hverandre. De hører til 25.1.

**Part-of-speech tagging (24.1.6).** Gi hvert ord en ordklasse. Penn Treebank har 45 tagger, for eksempel NN, VB, PRP, PRP$ og VBD.

- **HMM:** taggene er skjulte tilstander og ordene er observasjoner.
  - Transition model P(Cₜ | Cₜ₋₁).
  - Sensor model P(Wₜ | Cₜ).
  - Begge telles i et tagget korpus, for eksempel P(VB | MD) = 10 471 / 13 124 ≈ 0,8.
- **Viterbi** finner den mest sannsynlige taggsekvensen, med omtrent 97 % treff. For hver tagg i hvert ord lagres bare den beste stien inn, og så følger du pilene bakover fra beste sluttilstand.
- **Logistic regression:** én klassifikator per tagg, σ(w · x), med features som endelse (-ous), forrige ord og stor bokstav. Den er diskriminativ (lærer P(C | W)), mens HMM og naive Bayes er generative (P(W, C), kan lage setninger). Hele setningen tagges grådig eller med beam search.

**Grammatikk og PCFG (24.2).**

- En grammar er regler som bygger frasetrær.
- En probabilistic context-free grammar har én sannsynlighet per regel, og reglene for samme venstreside summerer til 1.
- E₀ (fig. 24.2) er et lite språk for wumpus-verdenen. Den **overgenererer** («Me go I.» er lov) og **undergenererer** («I think the wumpus is smelly.» er ikke lov).
- Sannsynligheten for et tre er produktet av alle regler i treet, **også ordreglene** (Article → every …).

**Parsing (24.3).** Parsing er søk etter et tre der bladene er ordene.

- **Top-down** starter i S og bruker regler nedover mot ordene.
- **Bottom-up** starter i ordene og slår dem sammen opp til S.
- Begge kan gjenta arbeid i blindveier. I bokas «Have the students in section 2 of Computer Science 101 take/taken the exam» avgjør først ord 11 om setningen er en ordre eller et spørsmål. Gjetter du feil, må NP-en parses på nytt.
- Løsningen er et **chart** (dynamic programming): lagre hver frase over hvert spenn én gang.
- **CYK** er en bottom-up chart parser for grammatikker på **Chomsky Normal Form**: X → ord [p] eller X → Y Z [p]. Den bruker O(n³m) tid og O(n²m) plass (n ord, m ikke-terminaler).
- Raskere parsere:
  - A*, med kostnad = 1 / sannsynlighet: første fullstendige parse er den beste.
  - Beam search, som beholder de b beste: nesten lineær tid og nesten alltid riktig.
  - Shift-reduce, som er beam search med b = 1.

**Oppgaver (24.6), kort.**

| Oppgave | Hva den gjør |
|---|---|
| Speech recognition | lyd → tekst, 3–5 % ordfeil |
| Text-to-speech | tekst → lyd; må vite om «record» er substantiv eller verb |
| Machine translation | lærer av parallelle tekster; n-gram → seq2seq → transformer |
| Information extraction | henter fakta, for eksempel adresser |
| Information retrieval | finner relevante dokumenter |
| Question answering | gir et svar, ikke en liste |

**Kapittel 25 som oversikt (status uavklart).** Canvas sier «Sections from Chapter 24-25*», og stjernen har ingen fotnote. L9 peker bare til 25.1 og transformers. Ta det på idénivå:

- **Embeddings gjør analogier til vektorregning:** Athens : Greece = Oslo : Norway, D = C + (B − A).
- **RNN** leser ett ord om gangen og bærer en skjult tilstand.
- **Seq2seq** koder en setning og dekoder en ny.
- **Attention** lar hvert nytt ord se på alle ordene i kilden.
- **Transformeren** bruker self-attention mellom ordene i samme setning.
- **Pretraining + transfer learning:** tren på mye tekst, finjuster etterpå.

## Algoritmer og håndsporing

Alle tallene under er regnet med brøker i `videoer/e20-nlp/verifiser.py`, som også sjekker at tallene i videoen er de samme.

**Naive Bayes (ILLUSTRASJON).** Tallene er valgt for videoen. Teksten er «stocks, rain».

| | prior | P(stocks \| c) | P(rain \| c) | produkt | normalisert |
|---|---|---|---|---|---|
| business | 3/10 | 5/100 | 1/100 | 15 · 10⁻⁵ | 3/17 ≈ 18 % |
| weather | 7/10 | 1/100 | 10/100 | 70 · 10⁻⁵ | 14/17 ≈ 82 % |

«rain, stocks» gir nøyaktig det samme.

**Bigram med og uten add-one (ILLUSTRASJON).**

- Korpus:
  - `<S> the wumpus smells`
  - `<S> the wumpus is dead`
  - `<S> the pit is breezy`
- V = 7: the, wumpus, smells, is, dead, pit, breezy. `<S>` står bare foran og telles ikke som neste ord.
- Ingen sluttsymbol.
- Tellinger: c(`<S>`) = 3, c(the) = 3, c(wumpus) = 2, c(is) = 2, c(pit) = 1.

| bigram | MLE | add-one (c + 1)/(c(forrige) + 7) |
|---|---|---|
| P(the \| `<S>`) | 3/3 = 1 | 4/10 |
| P(wumpus \| the) | 2/3 | 3/10 |
| P(pit \| the) | 1/3 | 2/10 |
| P(is \| pit) | 1/1 = 1 | 2/8 = 1/4 |
| P(smells \| pit) | 0/1 = **0** | 1/8 |
| P(dead \| is) | 1/2 | 2/9 |

P(`<S>` the pit smells):

- Uten smoothing: 1 · 1/3 · 0 = **0**.
- Med add-one: 4/10 · 2/10 · 1/8 = **1/100**.

Prisen for add-one: P(is | pit), som faktisk er sett, faller fra 1 til 1/4.

L9 s. 20 regner samme metode med V = 100 000 og «black» sett 50 ganger:

- «black cat» går fra 0 til 1/100 050 ≈ 0,00001.
- «black dog» går fra 10/50 = 0,2 til 11/100 050 ≈ 0,0001.

**Linear interpolation (L9 s. 21).** «a black cat» er aldri sett. 0,6 · 0 + 0,3 · 0,02 + 0,1 · 0,001 = **0,0061**.

**Viterbi på «he saw her duck» (ILLUSTRASJON).**

- Modellen er laget for videoen: «he/PRP saw/VBD» er entydig, og δ(saw/VBD) settes til 1, siden bare forholdstall teller.
- δ(ord, tagg) = max over forrige tagg av [δ(forrige) · P(tagg | forrige tagg)] · P(ord | tagg).

| steg | kandidater inn | δ | bakpeker |
|---|---|---|---|
| her/PRP$ | 1 · P(PRP$ \| VBD) 0,3 · P(her \| PRP$) 0,2 | 0,06 | VBD |
| her/PRP | 1 · P(PRP \| VBD) 0,4 · P(her \| PRP) 0,2 | 0,08 | VBD |
| duck/NN | max(0,06 · 0,9 = **0,054**; 0,08 · 0,05 = 0,004) · P(duck \| NN) 0,02 | **0,00108** | PRP$ |
| duck/VB | max(0,06 · 0,01 = 0,0006; 0,08 · 0,3 = **0,024**) · P(duck \| VB) 0,01 | 0,00024 | PRP |

- Beste slutt er NN (0,00108). Følger du pilene bakover, får du **PRP VBD PRP$ NN** («her» er eiendomsord, «duck» er en and).
- Grådig tagging tar PRP ved «her» (0,08 > 0,06) og ender på PRP VBD PRP VB med 0,00024. Det er 2/9 av Viterbis sannsynlighet, altså under en fjerdedel.

**Viterbi i kortform.**
```
for hvert ord t, for hver tagg c:
    δ[t][c] = max_{c'} δ[t−1][c'] · P(c | c') · P(w_t | c)
    bp[t][c] = argmax_{c'} (samme)
slutt: c* = argmax_c δ[N][c]; følg bp bakover
```

**Sannsynlighet for parsetre (fig. 24.6, L9 s. 65).** «every wumpus smells»:

- Regler i treet: S → NP VP (0,90), NP → Article Noun (0,25), VP → Verb (0,40).
- Ordregler: Article → every (0,05), Noun → wumpus (0,15), Verb → smells (0,10).
- P = 0,90 × 0,25 × 0,05 × 0,15 × 0,40 × 0,10 = **0,0000675**.

«the wumpus is dead» (fig. 24.4) har åtte faktorer:

- Fire regler: S → NP VP 0,9, NP → Article Noun 0,25, VP → VP Adjective 0,05, VP → Verb 0,40.
- Fire ordregler: the 0,40, wumpus 0,15, is 0,10, dead 0,05.
- Produktet er 0,00000135.

**CYK på «every wumpus smells».** E₀ har enhetsregler (VP → Verb, NP → Noun), som CNF ikke tillater. De er derfor slått sammen med ordreglene:

- VP → smells = 0,40 · 0,10 = 0,04.
- NP → wumpus = 0,10 · 0,15 = 0,015.

| spenn [i,k] | innhold |
|---|---|
| [1,1] every | Article 0,05 |
| [2,2] wumpus | Noun 0,15 · NP 0,015 |
| [3,3] smells | Verb 0,1 · VP 0,04 |
| [1,2] every wumpus | NP = 0,25 · 0,05 · 0,15 = 0,001875 |
| [2,3] wumpus smells | S = 0,9 · 0,015 · 0,04 = 0,00054 (blindvei, brukes aldri) |
| [1,3] hele | S = 0,9 · 0,001875 · 0,04 = **0,0000675** (samme som treet) |

**CYK i kortform (fig. 24.5).**
```
for hvert ord i, for hver regel X → ord_i [p]:  P[X,i,i] = p
for length = 2..N, for i = 1..N+1−length, k = i+length−1, for j = i..k−1:
    for hver regel X → Y Z [p]:
        P[X,i,k] = max(P[X,i,k], P[Y,i,j] · P[Z,j+1,k] · p)
```
De tre løkkene over spenn gir n³, og regelløkka gir m. Dobbel setningslengde gir 2³ = 8 ganger så lang tid.

## Eksamensfeller

- **Add-one: +V under brøkstreken, ikke +1.** P(dead | is) = (1 + 1)/(2 + 7) = 2/9. Med +1 under streken får du 2/3, og fordelingen summerer ikke lenger til 1.
- **«Hvorfor smoothing?»** Fasiten (2025 Q12a) vil ha to ting. For det første gir usette n-gram P = 0, og da blir hele setningen 0 fordi det er et produkt. For det andre flytter smoothing masse fra vanlige til sjeldne/usette n-gram. Beskriv én metode, for eksempel Laplace: legg 1 til alle tellinger.
- **Ukjent ord og usett par er forskjellige problemer.** `<UNK>` løser ukjente ord. Smoothing, backoff og interpolation løser usette n-gram av kjente ord.
- **Bag-of-words ser ikke rekkefølge.** Naive Bayes trenger prioren og må normaliseres før du sier «82 %».
- **Grådig tagging er ikke Viterbi.** Den beste taggen ved hvert ord gir ikke nødvendigvis beste sekvens.
- **Parsetre:** ta med ordreglene. «every wumpus smells» har seks faktorer, ikke tre.
- **Top-down mot bottom-up (2025 Q12b).** Fasiten vil ha både hvordan hver strategi bygger og én ulempe for hver:
  - Top-down starter i S og utvider mot ordene. Ulempe: den utforsker utvidelser som aldri passer ordene.
  - Bottom-up starter i ordene og kombinerer oppover. Ulempe: den bygger delstrukturer som aldri blir del av en hel parse.
  - Begge kan gjenta arbeid i blindveier.
- **CYK er bottom-up**, krever CNF og bygger også blindveier (S over «wumpus smells»). Tiden er O(n³m), ikke O(n²).
- **Information retrieval returnerer dokumenter, ikke svaret.** Det er question answering (2016 Task 6, usann påstand).
- **Over- og undergenerering** er to forskjellige feil: «Me go I» er tillatt (over), og «I think the wumpus is smelly» er ikke tillatt (under).

## Koblinger til andre kapitler

- → kap. 4.4.4 og 14.2 / E05: HMM-taggeren holder en fordeling over skjulte tilstander gitt observasjonene, akkurat som belief state-oppdatering (filtering). Viterbi er «most likely explanation» (14.2.3).
- → kap. 8 / E14: E₀ er skrevet på samme måte som BNF-grammatikken for førsteordens logikk (fig. 8.3), bare med sannsynligheter.
- → kap. 10 / E17: WordNet sin is-a-kjede er en taksonomi av kategorier.
- → kap. 3.5 / E03: A*-parsing er A* med kostnad 1/sannsynlighet. Beam search kjenner du fra lokal søk.
- → kap. 28.3.3 / E21: en språkmodell er tellinger fra et korpus, så skjevheter i korpuset blir med i modellen (fairness and bias). Se også 2024 Q20 om debiasing.
- → kap. 7.4 / E11: logikk har harde grenser for hva som er en lovlig setning. Språkmodeller erstatter det med sannsynligheter.

## Ikke pensum her

- 24.2.1 Lexicon (leksikonet til E₀ som eget tema): ute (Canvas, L9 slide 76, PDF-s. 58, PENSUMOVERSIKT). Ordreglene brukes likevel i regneeksemplene, siden de trengs for treets sannsynlighet.
- 24.3.1 Dependency parsing: ute (Canvas, L9 slide 76, PDF-s. 58).
- 24.3.2 Learning a parser from examples: ute (Canvas, L9 slide 76, PDF-s. 58).
- 24.4 Augmented grammars: ute (Canvas, L9 slide 76, PDF-s. 58).
- 24.5 Complications of real natural language: ute (Canvas, L9 slide 76, PDF-s. 58).
- 14.2.3 Viterbi-algoritmen som eget kapittel: ikke på kapittellista. Den er tatt med fordi 24.1.6 bruker den til tagging.
- Kap. 25: uavklart (stjerne uten fotnote i Canvas). Behandlet bare som oversikt.

## Øv selv

1. **Eksamen 2025, oppgave 12 (5 p).** a) Explain why smoothing is necessary in n-gram language models. Briefly describe a possible type of smoothing. (2 p) b) Explain the difference between top-down and bottom-up parsing strategies. Describe how each constructs a parse and one drawback of each. (3 p)
2. **Eksamen 2016, Task 6a (sant/usant, utvalg).** «The purpose of smoothing is to avoid dramatic effects of low-frequency counts.» «The bag of words model can be seen as a simple language model.» «The task of Information Retrieval is to return the answer to a user query.» «Information Extraction systems are often based on templates.» (Eldre eksamen etter 3. utgave.)
3. **Eksamen 2017, flervalg.** Hvilken påstand er *ikke* riktig? (1) The distributional hypothesis assumes that words with similar usage have similar meanings. (2) The bag of words model ignores the grammatical structure of the language. (3) An n-gram model is an example of a language model. (4) Grounding means that a speaker defines the basis for a dialogue.
4. **Regning.** Med korpuset fra videoen: finn P(wumpus | the) og P(breezy | is) med add-one, og sannsynligheten for `<S> the wumpus is breezy` med og uten add-one.
5. **Viterbi.** Endre gitteret fra videoen slik at P(duck | VB) = 0,1 (resten likt). Hvilken taggsekvens vinner nå, og med hvilken δ?
6. **CYK.** Fyll chartet for «the wumpus smells» med E₀ (the = 0,40). Hvilken verdi får S over hele setningen, og hvilke celler er blindveier?

Eksamen 2024 Q19 var et kort NLP-spørsmål. Fasiten er bare én linje («NLP enables computers to … interpret, and generate human language»), så den egner seg ikke som regneoppgave.

## Fasit

**Quizene i videoen**

- s05: «rain, stocks» gir **samme** sannsynlighet. En pose har ingen rekkefølge.
- s10: P(dead | is) med add-one = (1 + 1)/(2 + 7) = **2/9**. Fellen er 2/3.
- s20: «the wumpus is dead» har **8** faktorer (fire regler og fire ordregler), og P = 0,00000135.
- s23b: dobbel lengde gir **8 ganger** så lang tid (n³).
- s26/s27: se oppgave 1 under.

**Øv selv**

1. a) Usette n-gram i treningskorpuset gir sannsynlighet 0, og siden setningssannsynligheten er et produkt, blir hele setningen 0 selv om den er grei. Smoothing flytter litt masse fra vanlige n-gram til sjeldne og usette. Eksempel: Laplace (add-one), (c + 1)/(c(forrige) + V). Backoff og linear interpolation er også godkjente svar. b) Top-down starter i S og bruker regler for å utvide mot ordene; ulempen er at den utforsker utvidelser som aldri passer ordene. Bottom-up starter i ordene og kombinerer dem til større fraser opp mot S; ulempen er at den bygger delstrukturer som aldri blir del av en fullstendig parse. Begge kan gjenta arbeid i blindveier, og det løses med en chart parser (CYK).
2. Sant, sant, **usant** (IR returnerer relevante dokumenter, ikke svaret), sant.
3. **4** er feil.
4. Svarene på 4–6 er egne løsninger, regnet med samme metode som i `verifiser.py`.
   - P(wumpus | the) = (2 + 1)/(3 + 7) = 3/10. P(breezy | is) = (1 + 1)/(2 + 7) = 2/9.
   - Uten smoothing: 1 · 2/3 · P(is | wumpus) 1/2 · P(breezy | is) 1/2 = **1/6**.
   - Med add-one: 4/10 · 3/10 · (1 + 1)/(2 + 7) · 2/9 = 4/10 · 3/10 · 2/9 · 2/9 = **4/675** ≈ 0,0059.
5. duck/VB = max(0,0006; 0,024) · 0,1 = 0,0024 > duck/NN = 0,00108. Da vinner **PRP VBD PRP VB** («duck» er et verb) med δ = 0,0024.
6. [1,1] Article 0,40 · [2,2] Noun 0,15, NP 0,015 · [3,3] Verb 0,1, VP 0,04 · [1,2] NP = 0,25 · 0,40 · 0,15 = 0,015 · [2,3] S = 0,9 · 0,015 · 0,04 = 0,00054 (blindvei) · [1,3] S = 0,9 · 0,015 · 0,04 = **0,00054**.

**Faglige usikkerheter**

- **L9 slide 63 (PDF-s. 46) og CYK-chartet for «the wumpus is dead».** Slidet viser «–» i cellen for «the wumpus is», men viser selv NP over «the wumpus» og «Verb, VP» over «is». S → NP VP gir da S i cellen: 0,9 · 0,015 · 0,04 = 0,00054. Cellen er altså bare utelatt i slidet; CYK lagrer beste tre for hver kategori over hvert spenn, også spenn fullsetningen ikke bruker. For «wumpus is» avhenger det av om NP → Noun slås sammen med ordregelen; gjør du det, som her, får også den cellen S. Fullsetningens 0,00000135 står seg. Videoen bruker «every wumpus smells», der tallet stemmer med bokas 0,0000675.
- **Kap. 25.** Videoen og notatet tar kapitlet bare på idénivå. Om det kan gis detaljspørsmål om RNN eller transformers, er ikke avklart i Canvas.
- **Eksempler merket ILLUSTRASJON** (naive Bayes-tallene, bigram-korpuset og Viterbi-gitteret) er laget for videoen. Metodene følger boka, men tallene er ikke bokas.
