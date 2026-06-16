# design-sync — notas do repo `me`

Portfólio de página única (React + Vite), estilo suíço / bauhaus, hospedado no
GitHub Pages. Este arquivo é lido no início de cada sincronização — registra os
detalhes que a próxima execução precisa saber.

## Como re-sincronizar

```bash
npm ci
npm run build:lib

SKILL_BASE="<skill-base-dir>"
mkdir -p .ds-sync && cp -r "$SKILL_BASE"/package-build.mjs "$SKILL_BASE"/package-validate.mjs \
  "$SKILL_BASE"/package-capture.mjs "$SKILL_BASE"/resync.mjs "$SKILL_BASE"/lib "$SKILL_BASE"/storybook .ds-sync/
echo '{"name":"ds-sync-deps","private":true}' > .ds-sync/package.json
(cd .ds-sync && npm i esbuild ts-morph @types/react)

node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules \
  --entry ./dist-lib/index.es.js --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json
```

(buscar o `_ds_sync.json` do projeto antes: `DesignSync(get_file, path: "_ds_sync.json")` →
salvar em `.design-sync/.cache/remote-sync.json`)

## Fatos do repo

- **Dois builds distintos:**
  - `npm run build` → app para o **GitHub Pages** (`base: '/me/'`). NÃO mexer por causa do design-sync.
  - `npm run build:lib` → **biblioteca** de componentes (`vite.lib.config.ts`). É o que o design-sync usa.
- **Barrel:** `src/index.ts` exporta os componentes públicos e importa `./index.css`.
- **Tokens + regras globais + classes utilitárias** ficam em `src/index.css`
  (compilado para `dist-lib/style.css` → `cfg.cssEntry`).
- **Componentes (11):** Layout, Header, Footer, Nav, ColorBar, GridBackground, SectionHeader,
  NutshellCard, GithubIcon, LinkedinIcon, ArrowUpRightIcon.
- **`globalName`: `MeDS`** → `window.MeDS.*`.
- **Provider:** nenhum tema/context global. Mas `Nav`, `Header` e `Layout` usam
  `react-router-dom` (NavLink/Link) — **importar `MemoryRouter` de `'me'`, não de
  `'react-router-dom'`** diretamente. O bundle tem react-router-dom embutido (inlined
  external); importar da node_modules cria uma instância separada e o contexto não cruza.
- **`extraEntries: ["react-router-dom"]`** no config — faz MemoryRouter estar disponível
  como `window.MeDS.MemoryRouter`.
- **`.d.ts` aninhados:** vite-plugin-dts emite em `dist-lib/src/**`. Inofensivo para o
  conversor (lê a árvore inteira).

## Previews (11/11 autoradas, todas graded good)

- **NutshellCard** — 3 histórias, sem previewArgs legados (chave removida do schema).
- **ColorBar** — `cardMode: column` (card mais largo que a célula do grid).
- **GridBackground** — `cardMode: column`. Wrapper de página com a malha em bege.
- **Footer**, **Header**, **Layout** — `cardMode: single` (fixed/portal escapa célula).
- **Nav** — 2 histórias mostrando estado ativo diferente.
- **Header** — inclui Nav + ColorBar embutidos; MemoryRouter fix confirmado.
- **Layout** — composição completa (Header + content + Footer).
- **Ícones** — mostrados em 4 tamanhos + contexto de link.

## Fontes

Archivo + Plus Jakarta Sans vêm do Google Fonts via `<link>` no `index.html` do app —
**não** há `@font-face` no bundle. `cfg.runtimeFontPrefixes: ["Archivo", "Plus Jakarta Sans"]`
suprime o `[FONT_MISSING]`. Os previews usam fallback de sistema — esperado.

## Re-sync risks (o que pode envelhecer em silêncio)

- **Caminho do CSS:** `cfg.cssEntry = dist-lib/style.css` depende do `lib.cssFileName: 'style'`
  em `vite.lib.config.ts`. Se mudar de nome, atualizar `cssEntry`.
- **react-router-dom bundled:** se o DS deixar de usar react-router-dom internamente, remover
  `extraEntries: ["react-router-dom"]` do config.
- **GridBackground:** o SVG da grade está inline no componente. Se a cor ou o padrão mudar
  em `src/index.css` (body background-image), reconciliar com `GridBackground.tsx`.
- **Caminho dos `.d.ts`:** se um upgrade do vite-plugin-dts achatar para `dist-lib/index.d.ts`,
  atualizar `package.json#types`.
- **`react-router-dom` como peer:** componentes de navegação não renderizam fora de um
  Router — previews precisam do wrapper de `'me'`, não de `'react-router-dom'`.

## Known render warns

Nenhum — validate exited 0 sem warnings na sincronização final.
