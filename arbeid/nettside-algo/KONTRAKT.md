# Kontrakt for algoritmeanimasjonene og tegneverktøyet

Alt under `arbeid/nettside-algo/` lastes som vanlige `<script>`-filer i `nettside.html` (først `motor.js`, så familiefilene). Ingen bygging, ingen avhengigheter, ingen moduler. Siden åpnes via `python3 arbeid/server.py` (http://localhost:8765/) og må også virke fra file://.

## Filer og eiere

| Fil | Innhold |
|---|---|
| `motor.js` (+ `motor.css`) | `window.ALGO`: registeret, scene-tegneren, avspilleren, siden `#algoritmer`, tegneverktøyet (`verksted`), sjekken, tre-oppsettet. |
| `sok.js` | E02/E03: BFS, DFS, UCS, DLS, IDS, greedy best-first, A\*, weighted A\*. |
| `lokalt.js` | E04/E05: hill climbing (+ sideways, random restart), simulated annealing, local beam, genetisk algoritme, AND-OR-søk, belief states. |
| `spill.js` | E08–E10: minimax, alpha-beta, expectiminimax, MCTS, dominans/Nash. |
| `csp.js` | E06/E07: AC-3, backtracking (MRV, degree, LCV), forward checking, MAC, min-conflicts. |
| `logikk.js` | E11–E16: sannhetstabell/model checking, PL-resolusjon, forward chaining, backward chaining, DPLL, WalkSAT, unifikasjon, FOL forward chaining, FOL-resolusjon. |
| `plan.js` | E18/E19: forward (progression) og backward (regression) state-space search, HTN. |
| `sprak.js` | E20: n-gram med add-one, Viterbi, CYK. |

Hver fil eies av én. Endre aldri en annens fil. Trenger du noe nytt i motoren, skriv det i rapporten din.

## Registrering

```js
ALGO.legg({
  id: "bfs",                         // unik, a–z0–9-
  navn: "Breadth-first search (BFS)",// engelsk fagnavn, ev. med kort norsk
  familie: "Søk",                    // "Søk" | "Lokalt søk" | "Spill" | "CSP" | "Logikk" | "Planlegging" | "Språk"
  ep: "E02",                         // episoden algoritmen hører til
  kort: "…",                         // 2–4 setninger på norsk under animasjonen: hva den gjør og hvorfor
  punkter: ["Komplett: …", "Optimal: …", "Felle: …"], // 2–5 korte punkter: egenskaper og eksamensfeller
  data: "graf" | "tre" | null,       // hvilket tegneverktøy som kan lage input; null = bare faste eksempler
  valg: [{id: "graf", navn: "Graph search (reached)", type: "bool", std: true}], // valgfritt; type "bool" | "tall" | "tekst" | ["a","b"]
  eksempler: [{navn: "Eksamen 2018, oppgave 2", data: {…}, valg: {…}}],          // minst ett; første vises først
  kjor(data, valg) { return [scene, …]; },   // ren og deterministisk; første scene = utgangspunktet
  svar(data, valg) { return [{id: "rekke", navn: "Utvidelsesrekkefølge", verdi: "S A B G"}, …]; } // valgfritt: det som kan sjekkes
});
```

Tekstfeltene (`kort`, `punkter`, `scene.tekst`) settes som HTML; bruk bare `<b>`, `<i>`, `<code>`, `<sub>`, `<sup>`. Alt faglig må stemme med episodenotatene i `arbeid/videoer/notater/eNN-*.md` (kursets konvensjoner går foran bokas der de skiller seg). Finn ikke på krav eller konvensjoner.

Tillegg (motoren):

- Pakk hele fila inn i `(() => { … })();`. Siden har globale `const` som `$`, `svar`, `esc`, `graf`, `GR`, `D`, `S`, og et navnesammenfall på toppnivå gir SyntaxError og stopper alle skriptene.
- Tekstfeltene renses: bare taggene over og HTML-entiteter beholdes, resten vises som tekst. Tabellceller og nodetekster (`tekst`, `over`, `under`) er alltid ren tekst.
- Unntak i `kjor`/`svar` fanges og vises som feilmelding på siden. `kjor` bør likevel aldri kaste på data fra tegneverktøyet.
- Tall i `valg` vises avrundet (`Math.SQRT2` → `1.414`).

## Scene (ett steg i animasjonen)

```js
{
  tekst: "Utvider A (f = 4 + 3 = 7). Legger C i frontier.",  // 1–2 setninger: hva skjer akkurat nå
  graf: {                                    // valgfri
    retning: true,                           // piler på kantene
    noder: [{id, x, y, tekst, over, under, tilstand, form}],
    kanter: [{fra, til, tekst, tilstand}]
  },
  tabeller: [{tittel, kol: ["Node", "f"], rader: [["A", "7"]], marker: [0]}],  // valgfri; marker = radindekser som uthves
  kurve: {tittel, x: [0, 1, …], y: [3, 5, …], marker: 4}                      // valgfri; enkel linjekurve
}
```

- Koordinatene `x`, `y` er frie enheter; motoren tilpasser visningen. Bruk omtrent 80–120 enheter mellom naboer.
- `tekst` står inni noden (kort, 1–4 tegn), `over` over (f.eks. `h=3`, `α=3 β=∞`), `under` under (f.eks. `f=7`, en verdi).
- `form`: `"sirkel"` (standard), `"max"` (trekant opp), `"min"` (trekant ned), `"sjanse"` (sirkel, stiplet), `"blad"` (kvadrat), `"boks"` (avrundet rektangel med lengre tekst, f.eks. klausuler eller belief states).
- `tilstand` for noder og kanter: `"ny"` (standard), `"grense"` (i frontier), `"utvidet"` (ekspandert/ferdig), `"aktiv"` (det som skjer nå), `"sti"` (løsningsstien), `"mal"` (måltilstand), `"beskaret"` (pruned/fjernet), `"feil"` (konflikt/fail). Fargene settes av motoren og betyr det samme overalt.
- Valgfritt på noder: `mal: true` (dobbel ring) og `start: true` (innkommende pil). Påvirker ikke `tilstand`.
- Scener uten `graf` er lov (bare tabeller/kurve). En scene med en tabell på mer enn 6 kolonner legger tabellene under grafen i stedet for ved siden av.
- Samme graf i flere scener: gjenbruk koordinatene, endre bare tekst og tilstand. Motoren tegner hver scene på nytt.

## Hjelpere fra motoren

- `ALGO.tre(rot)` → `{retning: false, noder, kanter}` med koordinater. `rot = {id, type: "max"|"min"|"sjanse"|"blad", verdi?, p?, tekst?, barn: […]}`; `p` er sannsynligheten på kanten fra forelderen. Bladene får `under` = verdien, nodene `form` etter type. Bruk den til spilltrær og andre trær; endre `tilstand`/`under`/`over` på kopien per scene.
- `ALGO.kopi(x)` → dyp kopi (JSON).

## Data fra tegneverktøyet

- `"graf"`: `{retning: bool, noder: [{id, x, y, h?, domene?}], kanter: [{fra, til, kost?}], start: id, mal: [id…]}`. `h` brukes av heuristiske søk, `domene` (liste med verdier) av CSP (kantene er da ≠-begrensninger).
- `"tre"`: samme form som `rot` over.

Algoritmer med `data: "graf"` eller `"tre"` må tåle all slik input (tom graf, ingen sti, mål = start, løkker, like kostnader). Node-id er fri tekst på opptil 30 tegn og kan ha mellomrom («New York»); noder med mer enn tre tegn tegnes avlange så navnet får plass. Likhet brytes alfabetisk etter node-id med mindre kursets notat sier noe annet.

## Sjekk

`svar(data, valg)` gir fasiten for det som kan sjekkes. Tegneverktøyet viser ett felt per `id`, og motoren sammenligner normalisert (store/små bokstaver, mellomrom, komma, piler) og viser første avvik. Hold verdiene på formen studenten ville skrevet på eksamen: `S A B G`, `S → A → G`, `7`, `{A, C}`.

Tillegg (motoren, `ALGO.sammenlign(fasit, svar, godta)`):

- Valgfritt per svar: `godta: ["…", …]`, andre former som også regnes som riktige (f.eks. rekkefølgen med og uten målet).
- Normaliseringen fjerner også parenteser, semikolon, `|`, `:` og punktum, og gjør `none`/`ingen`/`failure`/`∅` like (og `ja`/`yes`/`sant` osv.). Tall sammenlignes som tall. Etter et innledende `∅`-ord er bare `sti`, `path`, `løsning` og `solution` lov (`ingen sti` = `∅`, men `ingen S A G` er ikke det).
- Har fasiten et kall (`P(A, B)`, `Fly(P1, SFO, JFK)`), beholdes parentesen rett etter et navn som struktur: argumentenes rekkefølge og antall teller, og `P A B` eller `PAB` godtas ikke. Andre parenteser er gruppering og faller bort (`S A (G)` = `S A G`).
- `{…}` sammenlignes som mengde av hele elementer (rekkefølgen er likegyldig, et kall med argumentene er ett element, `02` = `2`). En fasit som slutter med `…` (søket stopper aldri eller er avbrutt ved grensen) godtar svar som starter likt og selv slutter med `…`, `...` eller `osv`. Et avbrutt søk gir ingen fasit for stien eller sluttsvaret, bare starten av rekkefølgen.
- `→` og `->` regnes som mellomrom, men `←` og `<-` står igjen, så en snudd sti er feil. `>=`, `<=` og `=` normaliseres (`C=-2` = `C = -2`).
- Noder skrevet sammen godtas bare når hvert ord er hele nabonoder fra fasiten (`SADBCE G2`, ikke `SA B CG` for `S A BC G`).
- Desimalkomma (`6,5`) godtas bare når fasiten er ett enkelt tall.
- Feil svar gir første avvik uten å vise fasiten; «Vis fasit» viser den.

## Test

Hver familiefil skal ha en `if (typeof module !== "undefined")`-blokk eller en egen `node`-test i scratch som kjører `kjor`/`svar` på alle eksemplene og sjekker minst ett kjent svar fra notatet eller eksamensfasiten. Visuell sjekk i nettleseren på http://localhost:8765/arbeid/nettside.html#algoritmer når motoren finnes.

## Sidene (motoren)

- `ALGO.side(el, id)`: fyller `el` (`#main`, klassen `wide`) med algoritmesiden. `id` er algoritmen som vises (fra `#algoritmer/<id>`), ellers en oversikt. Naviger ved å sette `location.hash = "algoritmer/" + id`; siden tegnes da på nytt av ruteren.
- `ALGO.verksted(el)`: hele tegneverktøyet som egen side (`#verksted`). Tegneflaten kan dras høyere i hjørnet nede til høyre; tegningen får da mer plass. Høyreklikk og dra (eller Ctrl og dra) flytter utsnittet uten å endre grafen.
- `ALGO.verksted(el, {type, data, endret})`: kompakt utgave inni et oppgavekort (ned til 300 px bredt). `type` er `"graf"`, `"tre"` eller `undefined` (velg selv). `data` er startdata eller `undefined`. Kall `endret({type, data})` ved hver endring. Tillegg: valgfritt `algo` (id som velges først, ellers første registrerte for datatypen) og `valg` (startverdier for den). Inline lagres ingenting annet enn via `endret`; helsiden lagrer i `localStorage` (`tdt4136-verksted`).
- «Sammenlign algoritmer» i tegneverktøyet kjører tegningen gjennom flere algoritmer fra samme `familie` med `kjor` og `svar`, og viser svarene i én tabell (kolonner etter `navn`) og avspillerne side om side. Valg med samme `id` følger med fra den valgte algoritmen. Algoritmesidene har en knapp som tar eksempelet med dit.
- Fargene og typografien kommer fra sidens CSS-variabler: `--bg --surface --fg --muted --border --accent --accent-bg --ok --ok-bg --today --code` (lys og mørk modus). Knapper arver sidens `button`-stil.
