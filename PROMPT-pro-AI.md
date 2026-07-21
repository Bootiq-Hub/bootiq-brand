# BOOTIQ prezentace — prompt pro AI

Zkopíruj VŠE pod čarou a vlož do ChatGPT/Claude jako první zprávu. Pak napiš
vlastní zadání (pro koho, o čem, kolik slidů). Vygenerovaný soubor ulož
s příponou `.html` kamkoliv (třeba na plochu) a otevři poklikáním — styly se
načtou z firemní adresy automaticky.

---

Vytvoř HTML prezentaci podle následujících závazných pravidel firmy BOOTIQ. Pravidla mají přednost před čímkoliv, co bys udělal jinak.

**Hlavička dokumentu** — vždy přesně tyto dva řádky, nic nepřidávej (žádné Google Fonts, žádný Tailwind, žádný vlastní `<style>` blok):

```html
<link rel="stylesheet" href="https://bootiq-hub.github.io/bootiq-brand/bootiq-brand.css" />
<script src="https://bootiq-hub.github.io/bootiq-brand/bootiq-slides.js" defer></script>
```

**Obsahové šablony** — pokud ti uživatel přiložil soubor šablony (nabídka, case study, report…), vyjdi z něj: nahraď placeholdery v [hranatých závorkách] skutečným obsahem a slidy bez obsahu vypusť. Bez přiložené šablony vycházej z univerzální kostry https://bootiq-hub.github.io/bootiq-brand/template.html

**Struktura** — každý slide je `<section class="slide">…</section>` přímo v `<body>`. Dostupné varianty slidů:

- `slide slide--title` — titulní: volitelný `<span class="chip">Smart Digital Solutions</span>`, `<h1>` (druhý řádek šedě přes `<br><span class="muted">…</span>`), `<p class="subtitle">`, patička autora `<p class="author"><strong>Jméno</strong> — pozice · e-mail</p>`; volitelný obrázkový slot `<div class="slide__media">popis</div>`
- `slide slide--section` — kapitola / oddělovač, centrovaný: `<span class="overline">`, `<h2>`, `<p class="subtitle">`; pozadí volitelně přidáním `slide--photo`, `slide--cursors` nebo `slide--squares`
- `slide slide--toc` — obsah prezentace: `<div class="toc-grid"><div class="toc-media">náhled</div><ol class="toc"><li>Kapitola</li>…</ol></div>` — čísla kapitol se doplní automaticky
- `slide slide--text` — text: overline + `<h2>` + `<div class="prose"><p>…</p></div>`; varianty `slide--right` (text v pravé polovině) a `slide--cols` (dva sloupce v `<div class="columns"><div>…</div><div>…</div></div>`)
- `slide slide--bullets` — odrážkový seznam: overline + `<h2>` + `<ul><li>…</li></ul>` (velké žluté odrážky)
- `slide` — obsahový: overline + `<h2>` + text/odrážky/`<div class="panel">`
- `slide slide--split` — dva sloupce: `<div class="columns"><div>…</div><div>…</div></div>`
- `slide slide--stats` — čísla: `<div class="stats">` s `<div class="stat"><div class="value">250+</div><div class="label">popisek</div></div>`
- `slide` s `<blockquote>` — citace klienta, autor do `<footer>`
- `slide slide--end` — závěr s kontaktem, zarovnaný na střed

**Další layouty (rodiny 6–20 z katalogu)** — použij, když se hodí obsah:

- `slide slide--grid-cards` — mřížka karet: `<div class="grid-cards">` s `<div class="num-card"><span class="num">01</span><h3>…</h3><p>…</p></div>`; přidej `cols-2` pro 2 sloupce
- `slide slide--table` — orámovaná tabulka: obyčejný `<table>` (3–6 sloupců)
- `slide slide--pricing` / `slide slide--compare` — ceník / srovnání plánů: `<table>`; u compare zvýrazni sloupec třídou `featured`, buňky `<span class="check"></span>` / `<span class="cross"></span>`
- `slide slide--pipeline` — Gantt: `<div class="gantt" style="--cols:4">` s `<div class="gantt-head"><span>…</span>…</div>` a `<div class="gantt-row"><span class="cat">…</span><span class="bar" style="grid-column:2 / 4"></span></div>`
- `slide slide--kanban` — `<div class="kanban">` se sloupci `<div class="kanban-col"><h4>…</h4><div class="kanban-card">…</div></div>`
- `slide slide--timeline` — `<div class="timeline">` s `<div class="tl-item"><div class="tl-body"><div class="tl-date">2026</div><div class="tl-text">…</div></div></div>`
- `slide slide--quote` — velká citace `<blockquote>…<footer>…</footer></blockquote>` nebo karty `<div class="quotes"><div class="quote-card">…<footer>…</footer></div></div>`
- `slide slide--media` — text + obrázek na spad: `<div class="media-text">…</div><div class="media-figs"><div class="fig">…</div></div>`; `slide--mirror` prohodí strany, `media-figs cols-2` udělá mřížku
- `slide slide--gallery` — plochy obrázků: `<div class="gallery" style="--cols:3">` s `<div class="fig"></div>`
- `slide slide--diagram-flow` — proces: `<div class="flow">` s `<div class="flow-step"><span class="num">01</span><h3>…</h3><p>…</p></div>` a `<span class="flow-arrow">→</span>` mezi nimi; `flow--zigzag` pro cik-cak
- `slide slide--diagram-tree` — strom: `<div class="tree">` s `<div class="tree-level"><div class="tree-node">…</div></div>` a `<div class="tree-arrow">↓</div>`
- `slide slide--diagram-circle` — kruh: `<div class="orbit">` s `<div class="node center">…</div>` uprostřed a `<div class="node">…</div>` okolo
- `slide slide--swot` — `<div class="swot">` se 4× `<div class="swot-card"><h3>…</h3><p>…</p></div>` a `<div class="swot-center">SWOT</div>`
- `slide slide--mockup` — zařízení: `<div class="devices">` s `<div class="device device--phone"><div class="screen"></div></div>` nebo `device--laptop`
- `slide slide--stats-map` — o nás: `<div class="sm-grid">` se `<div class="stats">…</div>` a `<div class="fig">mapa</div>`
- `slide slide--logos` — `<div class="logo-group"><h4>…</h4><p><span class="tag">…</span></p></div>`
- `slide slide--ref-cards` — reference: `<div class="ref-cards">` s `<div class="ref-card"><div class="fig"></div><div class="ref-logo">Klient</div><p>…</p></div>`
- `slide slide--contacts` — tým: `<div class="contacts">` s `<div class="contact-card"><div class="photo"></div><div class="name">…</div><div class="role">…</div><div class="meta">…</div></div>`

**Povolené prvky navíc:** `<span class="chip">rámeček</span>` a `<span class="tag">štítek</span>`, `<div class="panel">` pro zvýrazněný obsah, `<div class="slide__media">` jako placeholder obrázku, `<em>` obarví text do firemní žluté, `.muted` pro potlačený text, `.accent` pro žlutý. Tabulky a `<pre><code>` jsou nastylované automaticky.

**Verze brandu:** načti https://bootiq-hub.github.io/bootiq-brand/version.json a hodnotu `version` zapiš do `<body data-brand-version="…">`. Pokud version.json nelze načíst, atribut vynech — nic si nevymýšlej.

**Zakázáno:** inline styly s barvami či fonty, vlastní hex barvy, `font-family`, externí fonty a CSS frameworky, JavaScript knihovny. Barvy a písma řeší výhradně bootiq-brand.css.

**Jazyk a tón:** česky (pokud zadání neříká jinak), stručné slidy — max 5 odrážek nebo 3 krátké odstavce na slide, čísla a fakta raději jako `slide--stats`.

Po vygenerování vypiš jen kompletní HTML soubor, žádný komentář okolo.
