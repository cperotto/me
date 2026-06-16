# Design System — *estilo suíço / bauhaus*

The visual language of the **camilla perotto** portfolio. It is a strict
International Typographic Style (Swiss) / Bauhaus interpretation: orthogonal
geometry, a tight functional palette, hard borders, mono labels, and an
all-lowercase voice.

> Stack: **React + Vite**, with **Tailwind** bundled via `@tailwindcss/vite`
> (`npm run build`). The tokens, global rules, and semantic utility classes live in
> [`src/index.css`](src/index.css); the UI is composed from real components in
> [`src/components/`](src/components/) and pages in [`src/pages/`](src/pages/).
> Brand colors are applied through the project's own `bg-*` / `text-*` / `border-*`
> helpers, **not** Tailwind's default palette.

---

## 1. Foundational rules

These two rules are applied **globally with `!important`** to every element
(`*` selector in [`src/index.css`](src/index.css)) and are the heart of the system.
Honor them everywhere — they are non-negotiable, not per-component choices.

| Rule | Implementation | Intent |
|------|----------------|--------|
| **All text is lowercase** | `text-transform: lowercase !important` | Uniform typographic rhythm; no visual hierarchy from capitalization |
| **No rounded corners** | `border-radius: 0 !important` | Strictly orthogonal geometry — squares and rectangles only, never circles |

Corollaries seen throughout the work:
- **Squares, not circles.** Even data-viz nodes are `<rect>`, never `<circle>` (see [`Academico.jsx`](src/pages/Academico.jsx)).
- **Hard 2px borders** (`border-2 border-ink`) define structure; thin 1px borders (`border`) act as passive dividers.
- **Mono labels** carry metadata, using `//`, `/`, and `[ / … ]` as structural markers.

---

## 2. Color tokens

Defined as CSS custom properties on `:root` in [`src/index.css`](src/index.css). Hex
values are the source of truth. (Note: the in-file comments label these as a "navy" ramp,
but the actual values are a **teal → cyan** cool ramp plus a **warm amber** ramp on
a **cream paper** base — a Swiss palette of cool structure + warm accent.)

### Structure & text

| Token | Hex | Swatch role | Semantic use |
|-------|-----|------|--------------|
| `--color-ink` | `#023047` | deepest cool | body text, base geometry, primary borders, footer bg |
| `--color-ink-mid` | `#0d6e8a` | mid cool | secondary headings, mono metadata, muted text |
| `--color-bg-surface` | `#ede5d8` | cream paper | unified page background, reversed text on dark |
| `--color-bg-card` | `#e1d6c6` | warm paper | support / card backgrounds |
| `--color-border` | `#b8d8e8` | pale cyan | passive dividers, grid lines |

### Accent & interaction

| Token | Hex | Semantic use |
|-------|-----|--------------|
| `--color-accent` | `#219ebc` | links, hover, active focus |
| `--color-accent-light` | `#8ecae6` | graphic fills, visual support |

### Warm accents

| Token | Hex | Semantic use |
|-------|-----|--------------|
| `--color-warm` | `#fb8500` | attention tags, active badges, highlights |
| `--color-warm-light` | `#ffb703` | state icons, detail elements, footer title |
| `--color-warm-text` | `#c06400` | warm text/icons that stay legible on light bg |

### Semantic utility classes

`src/index.css` exposes each token as a class (all `!important`):
- Text: `.text-ink` · `.text-ink-mid` · `.text-warm-text` · `.text-warm-light` · `.text-accent-light` · `.text-bg-surface`
- Background: `.bg-surface` · `.bg-card` · `.bg-ink` · `.bg-ink-mid` · `.bg-accent` · `.bg-warm` · `.bg-warm-light`
- Border: `.border-ink` · `.border-border`

### Background texture

The page body carries a faint **engineering grid** — an inline SVG `20×20`
pattern, `#e0d5be` lines at `0.5px` — reinforcing the "graph paper" Swiss feel.

---

## 3. Typography

Two Google Fonts, both loaded all-lowercase per the global rule.

| Family | Token / class | Weights | Role |
|--------|---------------|---------|------|
| **Archivo** | body default · `.font-univers` | 400 / 700 / 900 | A Univers-style grotesque — headings, structure, UI |
| **Plus Jakarta Sans** | `.font-geom-body` | 300 / 400 / 600 / 700 | Geometric humanist — running body prose |
| *(mono)* | Tailwind `font-mono` | — | metadata, dates, tags, legends, captions |

Global type settings on `body`: Archivo, `letter-spacing: -0.03em` (tight).
`.font-geom-body` relaxes tracking to `-0.02em`.

### Type scale (as used)

| Element | Classes | Notes |
|---------|---------|-------|
| Page title (h1) | `text-3xl md:text-4xl font-black tracking-tighter leading-none` | name in header |
| Section title (h2) | `text-2xl font-black tracking-tight` | prefixed with `/` |
| Section label (h3) | `text-base font-bold uppercase tracking-widest font-univers text-ink-mid` | prefixed with `//` — *note: rendered lowercase by the global rule despite `uppercase`* |
| Card title (h3) | `text-lg md:text-xl font-bold font-univers tracking-tight leading-snug` | — |
| Entry title (h4) | `text-base font-bold font-univers` | CV roles, degrees |
| Body | `text-sm leading-relaxed` (+ `font-geom-body` for prose) | — |
| Metadata / mono | `text-xs` · `text-[10px]` · `text-[9px]` `font-mono` | dates, tags, captions |

**Weight discipline:** structure and titles are heavy (`font-black` / `font-bold`);
body is regular; metadata is mono. Hierarchy comes from **weight, size, and tracking** —
never from color alone and never from capitalization.

---

## 4. Layout

| Concern | Convention |
|---------|------------|
| Container | `max-w-7xl mx-auto` |
| Gutters | `px-6` |
| Main grid | 12-col (`md:grid-cols-12`); profile = `md:col-span-4`, detail = `md:col-span-8` |
| Card grid | `grid-cols-1 md:grid-cols-3 gap-6` |
| Vertical rhythm | `space-y-6` / `space-y-8` sections; `gap-6` / `gap-8` grids |
| Main offset | `pt-44 md:pt-32 pb-32` to clear fixed header + footer |
| Column divider | `border-l pl-6 border-ink` |

Both header and footer are **fixed** and reveal/hide on scroll (the `useScrollReveal`
hook in [`Layout.jsx`](src/components/Layout.jsx)): scrolling down slides the footer
out and collapses the header to just its color bars
(`translateY(calc(-100% + 0.75rem))`); scrolling up or reaching the bottom brings
both back. Transitions: `duration-300`.

---

## 5. Components

Each pattern is a real React component in [`src/components/`](src/components/),
composed by the pages in [`src/pages/`](src/pages/). File references below point to
the implementation.

### Header — [`Header.jsx`](src/components/Header.jsx)
`bg-surface border-b-2 border-ink`, fixed top. Holds the h1 name and the nav, then
the decorative color bar strip. Forwards a `ref` so `Layout` drives the scroll reveal.

### Color bar strip — [`ColorBar.jsx`](src/components/ColorBar.jsx)
A signature Bauhaus motif: a `h-3` flex row of unequal blocks —
`flex-1 bg-ink` · `w-1/4 bg-accent` · `w-1/12 bg-warm-light`.

### Nav tabs — [`Nav.jsx`](src/components/Nav.jsx) (`.square-btn`)
```
px-4 py-2 border-2 border-ink text-ink text-xs font-bold tracking-wider
```
Label format `[ / name ]`. Built on React Router `NavLink`; the **active route**
adds `.active`, inverting to `bg-ink` + `text-bg-surface`. Transition `all 150ms ease-in-out`.

### Section header — [`SectionHeader.jsx`](src/components/SectionHeader.jsx)
`flex justify-between items-baseline border-b pb-3 border-ink`, h2 prefixed with
`/`, optional right-aligned mono caption (`text-xs font-mono text-ink-mid`).

### Nutshell card — [`NutshellCard.jsx`](src/components/NutshellCard.jsx)
```
border-2 border-ink bg-card p-6 flex flex-col justify-between space-y-4
```
- Props: `platform`, `date`, `title`, `summary`, `tags[]` (content in [`src/data/nutshells.js`](src/data/nutshells.js)).
- Meta row: `plataforma` label (`text-[10px] font-mono font-bold tracking-widest text-warm-text`) + date (`text-ink-mid opacity-80`).
- Title h3 (`text-lg md:text-xl font-bold font-univers`).
- Body `font-geom-body text-sm leading-relaxed`.
- **Tag chips:** `px-2 py-0.5 border border-ink bg-surface text-ink-mid text-[9px] font-mono`.

### Data-viz panel — in [`Academico.jsx`](src/pages/Academico.jsx)
`border-2 border-ink bg-card` card with a caption row, an inner `bg-white` plot box,
and a **Swiss SVG chart**: dashed `--color-border` grid lines, an orthogonal
`polyline` connector in `--color-ink`, square `<rect>` nodes colored from the warm
ramp, and a mono legend with `2.5×2.5` square swatches.

### Footer — [`Footer.jsx`](src/components/Footer.jsx)
`fixed bottom-0 bg-ink border-t-4 border-ink text-white`, name in
`text-lg font-black text-warm-light`. Forwards a `ref` for the scroll reveal.

### Icons — [`icons.jsx`](src/components/icons.jsx)
Inline SVG, [Lucide](https://lucide.dev)-style: `stroke-width="2"`,
`stroke="currentColor"`, no fill — so they inherit the cool ramp and shift to
`--color-accent` on hover. Links use a `group` + arrow icon hover pattern
(`GithubIcon`, `LinkedinIcon`, `ArrowUpRightIcon`).

> **Removed in the React migration:** the original pages carried a `#toast-notif`
> element + `showtoast()` in `script.js`, but nothing ever triggered it (no
> copy-to-clipboard action existed). It was dropped as dead UI. Reintroduce a
> `Toast` component if/when an action needs confirmation feedback.

---

## 6. Motion

Restrained and functional:
- Buttons / colors: `transition-colors duration-200`, `square-btn` `150ms`.
- Header/footer scroll reveal: `transition-transform duration-300`.

No decorative animation — motion only confirms state or aids reading.

---

## 7. Quick reference

```
palette   ink #023047 · ink-mid #0d6e8a · accent #219ebc · accent-light #8ecae6
          warm #fb8500 · warm-light #ffb703 · warm-text #c06400
          surface #ede5d8 · card #e1d6c6 · border #b8d8e8
type      archivo (headings/ui) · plus jakarta sans (body) · mono (meta)
rules     everything lowercase · zero border-radius · 2px hard borders
          squares not circles · markers // / [ / ] · max-w-7xl 12-col grid
```

Machine-readable tokens: [`design-tokens.json`](design-tokens.json).
