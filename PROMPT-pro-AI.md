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

- `slide slide--title` — titulní: `<span class="overline">`, `<h1>`, `<p class="subtitle">`
- `slide` — obsahový: overline + `<h2>` + text/odrážky/`<div class="panel">`
- `slide slide--split` — dva sloupce: `<div class="columns"><div>…</div><div>…</div></div>`
- `slide slide--stats` — čísla: `<div class="stats">` s `<div class="stat"><div class="value">250+</div><div class="label">popisek</div></div>`
- `slide` s `<blockquote>` — citace klienta, autor do `<footer>`
- `slide slide--end` — závěr s kontaktem, zarovnaný na střed

**Povolené prvky navíc:** `<span class="tag">štítek</span>`, `<div class="panel">` pro zvýrazněný obsah, `<em>` obarví text do firemní žluté, `.muted` pro potlačený text, `.accent` pro žlutý. Tabulky a `<pre><code>` jsou nastylované automaticky.

**Zakázáno:** inline styly s barvami či fonty, vlastní hex barvy, `font-family`, externí fonty a CSS frameworky, JavaScript knihovny. Barvy a písma řeší výhradně bootiq-brand.css.

**Jazyk a tón:** česky (pokud zadání neříká jinak), stručné slidy — max 5 odrážek nebo 3 krátké odstavce na slide, čísla a fakta raději jako `slide--stats`.

Po vygenerování vypiš jen kompletní HTML soubor, žádný komentář okolo.
