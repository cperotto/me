# Deployment — GitHub Pages + React

## Resposta curta

**Sim, o GitHub Pages continua viável com React.** O Pages serve *arquivos
estáticos*; o Vite compila o app React para HTML/CSS/JS estáticos
(`npm run build` → `dist/`), com um `dist/index.html` na raiz. O Pages serve esse
`index.html` exatamente como servia o site em html puro — a diferença é que agora
há uma etapa de *build* entre o código-fonte e o que vai ao ar.

Verificado neste branch:

- `npm run build` → `✓ built in ~111ms`, gera `dist/index.html` + `dist/assets/*`.
- `dist/index.html` referencia os assets como `/me/assets/...` (base correto).
- `npm run preview` responde **HTTP 200** em `http://localhost:4173/me/`.
- Renderização visual idêntica ao original (header, nav, faixa cromática, grelha, rodapé).

## As duas decisões que tornam isso funcionar no Pages

### 1. `base` do Vite = `/me/`

Este repositório é `cperotto/me`, então o site é um **project page** em
`https://cperotto.github.io/me/` — servido a partir da subpasta `/me/`, não da
raiz do domínio. Sem ajustar o `base`, o `index.html` apontaria para
`/assets/...` (raiz do domínio) e **todos os assets dariam 404**.

Definido em [`vite.config.js`](vite.config.js):

```js
export default defineConfig({ base: '/me/', plugins: [react(), tailwindcss()] })
```

> Se um dia migrar para domínio próprio (ex.: `camillaperotto.com`) ou renomear o
> repositório para `cperotto.github.io`, troque `base` para `'/'`.

### 2. Roteamento à prova de Pages: `HashRouter`

O ponto delicado de qualquer SPA no GitHub Pages é o *deep link*: ao acessar
`/me/academico` diretamente (ou dar F5 nessa URL), o Pages procura um arquivo
`academico` que não existe e devolve 404 — porque só existe um `index.html`.

Este branch usa **`HashRouter`** ([`src/main.jsx`](src/main.jsx)), em que as rotas
vivem após o `#` (`/me/#/academico`). O servidor sempre recebe apenas `/me/` (que
existe), e o React resolve a rota no cliente. **Zero configuração de servidor,
zero 404 em refresh** — o caminho mais robusto no Pages.

**Alternativa (URLs limpas, sem `#`):** trocar para `BrowserRouter` e adicionar o
truque do `404.html` — copiar o `index.html` para `dist/404.html` no build, de modo
que o fallback de 404 do Pages reentregue o app. Funciona bem, mas tem uma peça a
mais para manter. Recomendo manter `HashRouter` salvo se URLs limpas forem
requisito.

## Como publicar

O deploy é automático via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): a cada push em
`main`, ele faz `npm ci`, `npm run build` e publica `dist/` no Pages.

**Configuração única no GitHub (uma vez):**

1. Repositório → **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Faça merge deste branch em `main` (ou ajuste o gatilho do workflow). O Action
   roda e publica em `https://cperotto.github.io/me/`.

> Não é mais preciso commitar arquivos compilados nem usar um branch `gh-pages`:
> o artefato é construído no CI e servido direto.

## Trade-offs honestos

| | html puro (antes) | react + vite (agora) |
|---|---|---|
| Deploy no Pages | commit → no ar | push → CI builda → no ar |
| Pré-requisito | nenhum | etapa de build (Node) |
| Tailwind | via CDN (aviso de produção) | bundlado, só o CSS usado |
| Reuso de UI | markup duplicado entre páginas | componentes compartilhados |
| URLs | `/acadêmico.html` | `/#/academico` (hash) |
| Dependências | zero | react, vite, etc. (`node_modules`) |

A troca principal: ganha-se componentização/manutenção e um bundle de produção
otimizado; paga-se com uma etapa de build e o prefixo `#` nas URLs (reversível).
