# design-sync — notas do repo `me`

Portfólio de página única (React + Vite), estilo suíço / bauhaus, hospedado no
GitHub Pages. Este arquivo é lido no início de cada sincronização — registra os
detalhes que a próxima execução precisa saber.

## Como concluir a sincronização (PRÉ-REQUISITO: login)

O upload ao claude.ai/design **exige um login claude.ai com escopos de _design_**.
Numa sessão onde o token veio via `CLAUDE_CODE_OAUTH_TOKEN`, a ferramenta
`DesignSync` falha com *"cannot be expanded with design scopes — run /login"*.

**Para concluir:** abrir o `claude` interativo, rodar **`/login`** e então
**`/design-sync`**. O fluxo então:

1. `npm install` (deps já no lockfile).
2. `npm run build:lib` → gera `dist-lib/index.es.js` + `dist-lib/style.css` +
   `dist-lib/src/**/*.d.ts` (o artefato que o conversor consome).
3. Encenar os scripts e rodar o conversor (shape **package**):
   ```bash
   mkdir -p .ds-sync && cp -r "<skill-base>"/package-build.mjs "<skill-base>"/package-validate.mjs \
     "<skill-base>"/package-capture.mjs "<skill-base>"/lib "<skill-base>"/storybook .ds-sync/
   echo '{"name":"ds-sync-deps","private":true}' > .ds-sync/package.json
   (cd .ds-sync && npm i esbuild ts-morph @types/react)
   node .ds-sync/package-build.mjs --config design-sync.config.json \
     --node-modules ./node_modules --entry ./dist-lib/index.es.js --out ./ds-bundle
   node .ds-sync/package-validate.mjs ./ds-bundle
   ```
   - `--node-modules ./node_modules` (o repo é o próprio "pacote"; é onde o
     `react` resolve).
   - `--entry ./dist-lib/index.es.js` (não há `dist/` de pacote publicado).
4. Autorar previews (`.design-sync/previews/<Name>.tsx`), gradear, e fazer o
   upload conforme §5 do sub-skill non-storybook.

## Fatos do repo

- **Dois builds distintos:**
  - `npm run build` → app para o **GitHub Pages** (`base: '/me/'`, `vite.config.js`). NÃO mexer por causa do design-sync.
  - `npm run build:lib` → **biblioteca** de componentes (`vite.lib.config.ts`). É o que o design-sync usa.
- **Barrel:** `src/index.ts` exporta os componentes públicos e importa `./index.css`
  (por isso o build de lib emite `dist-lib/style.css` com o Tailwind já compilado).
- **Tokens + regras globais + classes utilitárias** ficam em `src/index.css`
  (compilado para `dist-lib/style.css` → `cfg.cssEntry`).
- **Componentes (10):** Layout, Header, Footer, Nav, ColorBar, SectionHeader,
  NutshellCard, GithubIcon, LinkedinIcon, ArrowUpRightIcon. Mapeados em
  `cfg.componentSrcMap` (discovery não depende só do `.d.ts`).
- **`globalName`: `MeDS`** → `window.MeDS.*`.
- **Provider:** nenhum tema/context global. Mas `Nav` e `Layout` usam
  `react-router-dom` (`NavLink`/`Link`) — se a preview de `Nav`/`Header`/`Layout`
  renderizar em branco com erro de Router, envolver num `MemoryRouter` na preview
  autorada (não há provider de DS a configurar via `cfg.provider`).
- **`.d.ts` aninhados:** o vite-plugin-dts emite em `dist-lib/src/**` (o
  `entryRoot` não achatou nesta versão). `package.json#types` aponta para
  `./dist-lib/src/index.d.ts`. Inofensivo para o conversor (lê a árvore inteira).

## Escopo de previews sugerido (quando autorar)

Componentes "vitrine" para previews ricas: **NutshellCard** (texto-pesado, bom para
pegar problemas de fonte), **SectionHeader**, **ColorBar**. `Header`/`Footer`/`Nav`/
`Layout` dependem de Router → compor dentro de `MemoryRouter`. Ícones → floor card
ou uma preview simples lado a lado.

## Re-sync risks (o que pode envelhecer em silêncio)

- **Dados inline na config:** `cfg.previewArgs.NutshellCard` duplica conteúdo de
  `src/data/nutshells.ts`. Se o texto/props do componente mudar, reconciliar.
- **Caminho do CSS:** `cfg.cssEntry = dist-lib/style.css` depende do
  `lib.cssFileName: 'style'` em `vite.lib.config.ts`. Se esse build mudar de
  nome de arquivo, o `cssEntry` quebra (componentes renderizam sem estilo).
- **Caminho dos `.d.ts`:** se um upgrade do vite-plugin-dts passar a achatar para
  `dist-lib/index.d.ts`, atualizar `package.json#types` (e qualquer referência).
- **`react-router-dom` como peer:** componentes de navegação não renderizam fora
  de um Router — previews precisam do wrapper; não é um `cfg.provider`.
- **Fontes:** Archivo + Plus Jakarta Sans vêm do Google Fonts via `<link>` no
  `index.html` do app — **não** há `@font-face` no bundle. Esperar `[FONT_MISSING]`
  no validate; resolver com `cfg.extraFonts` (baixar os `.woff2`) ou
  `cfg.runtimeFontPrefixes` (["archivo", "plus jakarta"]) se aceitar carregamento
  em runtime. Decidir com o usuário e registrar aqui.
