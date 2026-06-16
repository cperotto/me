# me

portfólio camilla perotto — design suíço / bauhaus  
react + vite + tailwind, hospedado no github pages

---

## desenvolvimento

```bash
npm install
npm run dev        # http://localhost:5173
```

## builds

```bash
npm run build        # app → dist/  (para github pages, base: /me/)
npm run build:lib    # biblioteca → dist-lib/  (para o design-sync)
npm run typecheck    # checagem de tipos sem emitir
```

## estrutura

```
src/
  components/       # design system
    ColorBar.tsx        faixa cromática suíço-bauhaus
    Footer.tsx          rodapé fixo
    GridBackground.tsx  fundo de página com malha em bege
    Header.tsx          cabeçalho fixo (título + nav + colorbar)
    Layout.tsx          wrapper completo (header + main + footer)
    Nav.tsx             navegação com links ativos (react-router-dom)
    NutshellCard.tsx    card de nutshell (plataforma, data, título, resumo, tags)
    SectionHeader.tsx   cabeçalho de seção (título + legenda mono)
    icons.tsx           GithubIcon, LinkedinIcon, ArrowUpRightIcon
  data/
    nutshells.ts        conteúdo das nutshells
  index.ts            barrel da biblioteca (entrada do build:lib)
  index.css           tokens tailwind + classes semânticas globais
```

## biblioteca de componentes

o repo exporta um design system consumível:

```ts
import { Layout, Header, Footer, Nav,
         GridBackground, ColorBar,
         SectionHeader, NutshellCard,
         GithubIcon, LinkedinIcon, ArrowUpRightIcon,
         MemoryRouter } from 'me'
import 'me/styles.css'
```

> `Nav`, `Header` e `Layout` usam react-router-dom internamente.  
> importe `MemoryRouter` de `'me'` (não de `'react-router-dom'`) para que o contexto do router resolva corretamente no bundle.

### tokens principais

| token | valor |
|---|---|
| `--color-ink` | `#023047` |
| `--color-ink-mid` | `#0d6e8a` |
| `--color-bg-surface` | `#ede5d8` |
| `--color-bg-card` | `#e1d6c6` |
| `--color-accent` | `#219ebc` |
| `--color-warm-light` | `#ffb703` |

classes utilitárias semânticas: `text-ink`, `text-ink-mid`, `bg-surface`, `bg-card`, `bg-ink`, `bg-accent`, `border-ink`, `square-btn`.

todo o texto é convertido para lowercase via css global (`text-transform: lowercase !important`). border-radius é sempre `0`.

## design system no claude.ai/design

o design system está sincronizado com o projeto **me — design system** em `claude.ai/design`.  
para re-sincronizar após alterações nos componentes, ver `.design-sync/NOTES.md`.

## deploy

push para `main` → github actions → github pages (`/me/`)
