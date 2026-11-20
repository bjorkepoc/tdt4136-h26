# TDT4136 Introduction to Artificial Intelligence: studieside H26

En lokal nettside med alt du trenger for å lese og øve til eksamen i TDT4136 (NTNU, høsten 2026):

- **21 forklaringsvideoer** på norsk, med undertekster og notater. Det er én video per pensumtema, fra agenter og søk til logikk, planlegging, NLP og etikk.
- **Øv selv:** rundt 170 oppgaver, mange av dem ordrett fra tidligere eksamener med figurer. Korte svar som rekkefølger, stier og verdier sjekkes med en gang.
- **Øvingene** (Assignment 1–4 og oppgaveforelesningene) med løsninger.
- **Prøveeksamener i 2025-formatet**, vist som på eksamen: forside, én oppgave om gangen, nedtelling og «Lever». Etter levering får du sjekk og fasit.
- **40 algoritmer animert steg for steg:** søk, lokalt søk, CSP, spill, logikk, planlegging og NLP, med valg for fart og gjentakelse.
- **Leksikon** med rundt 300 begreper fra hele pensum, med søk. Knappen oppe til høyre åpner det over oppgaven du står i.
- **«Tegn og sjekk»:** tegn din egen graf eller ditt eget spilltre, og sjekk svaret ditt mot algoritmen.
- **Kursmaterialet** fra Canvas ligger i `materiale/` (slides, øvingstekster og tidligere eksamener).

Siden er laget av en student til eget bruk. Den kan inneholde feil. Ved uenighet gjelder slides og læreboka. Kursmaterialet tilhører NTNU og foreleserne.

## Kom i gang

Du trenger Python 3. Andre pakker trengs ikke.

```bash
git clone https://github.com/bjorkepoc/tdt4136-h26.git
cd tdt4136-h26
python3 arbeid/server.py
```

Åpne http://localhost:8765/. På Windows heter kommandoen ofte `python` i stedet for `python3`.

Logikkoppgavene kan du svare på papir, som på eksamen: ta bilde av arket og last det opp med «Svar på papir». Bildet lagres i `arbeid/svar/bilder/`.

Svarene dine lagres i nettleseren og i `arbeid/svar/svar.json` på din egen maskin. Mappa `arbeid/svar/` er holdt utenfor git.

Du kan også åpne `arbeid/nettside.html` direkte fra disken. Da lagres svarene bare i nettleseren, og retting og diktering er slått av. Kjører serveren, går siden over til den av seg selv og tar med svarene du har skrevet.

## Retting med din egen AI

«Rett denne» under en oppgave, og «Send alle besvarte til retting» nederst, legger oppgaven og svarene dine i `arbeid/svar/ko.jsonl`. En AI-assistent som kan lese og skrive filer og kjøre kommandoer i denne mappa kan rette svarene. Det kan være en assistent i terminalen eller editoren, eller en lokal modell. Tilbakemeldingen dukker opp under oppgaven etter noen sekunder. «Spør» ved et begrep i leksikonet sender et spørsmål om akkurat det begrepet samme vei, og svaret vises under begrepet.

Åpne mappa i assistenten og skriv:

> Les AGENTS.md og start rettingen.

Resten står i [AGENTS.md](AGENTS.md).

Har du bare en vanlig chat uten tilgang til filene, trykker du «Kopier svarene» nederst på siden og limer teksten inn i chatten.

## Endre innholdet

| Hva | Hvor |
|---|---|
| Oppgaver per tema | `arbeid/nettside-oppgaver/eNN.json` |
| Øvinger | `arbeid/nettside-ovinger/*.json` |
| Prøveeksamener (format og regler i `LES-MEG.md`) | `arbeid/nettside-prover/*.json` |
| Notater til videoene | `arbeid/videoer/notater/*.md` |
| Leksikonet | `arbeid/LEKSIKON.md` |
| Algoritmene og tegneverktøyet (regler i `KONTRAKT.md`) | `arbeid/nettside-algo/` |
| Malen for siden | `arbeid/nettside-mal.html` |

Etter en endring bygger du siden på nytt med `uv run arbeid/lag-nettside.py`. Det krever [uv](https://docs.astral.sh/uv/).
