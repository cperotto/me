# me — Design System conventions

Swiss/Bauhaus portfolio DS. One global wrapper rule. Tailwind utility classes with a small set of custom semantic names.

## Router context

`Nav`, `Header`, and `Layout` use `react-router-dom` (NavLink/Link). Wrap them in `MemoryRouter` from the same bundle — **import `MemoryRouter` from `'me'`**, not from `'react-router-dom'` directly (the bundle has react-router-dom inlined; importing from node_modules creates a separate instance and the context won't cross):

```jsx
import { Nav, MemoryRouter } from 'me'

<MemoryRouter initialEntries={['/sobre']}>
  <Nav />
</MemoryRouter>
```

No other provider or theme context is needed.

## Page background

`GridBackground` provides the page-level beige surface with the Swiss grid texture. Use it as the outermost wrapper for any page layout — **never inside cards** (`bg-card` is for card surfaces, `GridBackground` is for the page itself):

```jsx
import { GridBackground, SectionHeader } from 'me'

<GridBackground>
  <div style={{ padding: 32 }}>
    <SectionHeader title="/ projetos" />
  </div>
</GridBackground>
```

## Styling idiom

Tailwind utilities + a small set of custom semantic classes. Always use the semantic names for colors, backgrounds, and borders — never raw hex:

| Purpose | Class |
|---|---|
| Primary text | `text-ink` |
| Secondary/accent text | `text-ink-mid` |
| Warm label text | `text-warm-text` |
| Warm highlight | `text-warm-light` |
| Page background | `bg-surface` |
| Card background | `bg-card` |
| Dark fill | `bg-ink` |
| Accent fill | `bg-accent` |
| Warm fill | `bg-warm-light` |
| Primary border | `border-ink` |
| Subtle border | `border-border` |
| Nav button base | `square-btn` |
| Nav button active | `square-btn active` |

Typography: `font-univers` (Archivo / system fallback), `font-geom-body` (Plus Jakarta Sans / sans fallback), `font-mono`.

All text transforms to `lowercase` globally via CSS (`*{text-transform:lowercase!important}`). All border-radii are forced to `0` (`border-radius:0!important`). Do not add rounded corners or uppercase text.

## Where the truth lives

- `styles.css` and its `@import` of `_ds_bundle.css` — every token and utility is in that closure
- `components/general/<Name>/<Name>.d.ts` — props contract
- `components/general/<Name>/<Name>.prompt.md` — usage notes per component

## Idiomatic build snippet

```jsx
import { Layout, SectionHeader, NutshellCard, MemoryRouter } from 'me'

<MemoryRouter initialEntries={['/']}>
  <Layout>
    <SectionHeader title="/ projetos" caption="2024–2026" />
    <NutshellCard
      platform="pesquisa"
      date="jun 2026"
      title="tipografia e visualização científica"
      summary="como famílias tipográficas melhoram a legibilidade técnica."
      tags={['tipografia', 'design suíço']}
    />
  </Layout>
</MemoryRouter>
```
