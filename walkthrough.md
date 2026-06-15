# Walkthrough: Refatoração, Abstração e Modularização de Componentes

Este documento resume as melhorias estruturais implementadas no projeto para isolar e modularizar os componentes do portfólio na pasta `components/`.

---

## 1. Arquitetura da Pasta de Componentes

Criamos a pasta `components/` na raiz do projeto e extraímos as partes estruturais e de interface:

- **[components/header.html](components/header.html)**: Contém a marcação da seção do cabeçalho fixo, incluindo o título do portfólio, o contêiner do menu dinâmico e as faixas decorativas coloridas.
- **[components/footer.html](components/footer.html)**: Contém o markup interno do rodapé fixo.
- **[components/menu.html](components/menu.html)**: Contém os botões de controle de abas do menu de grelha.
- **[components/card.html](components/card.html)**: Modelo abstrato com placeholders (`{{platform}}`, `{{date}}`, etc.) para o cartão de nutshells.

---

## 2. Lógica de Carregamento Assíncrono (Web Components)

Atualizamos o arquivo **[script.js](script.js)** com os seguintes aprimoramentos:

- **Novos Componentes**: Criação das classes customizadas `SwissHeader` (`<swiss-header>`) e `SwissFooter` (`<swiss-footer>`).
- **Otimização de Carregamento**: Implementação de cache de Promises para que templates (especialmente o cartão de nutshells, instanciado 12 vezes) sejam requisitados via rede apenas uma única vez, otimizando o tempo de carregamento e eliminando requisições redundantes.
- **Hierarquia de Componentes**: Resolução automática e recursiva pelo navegador (o cabeçalho renderiza a tag `<swiss-menu>`, que por sua vez busca e instancia o menu).

---

## 3. Simplificação do Documento Principal

O arquivo **[index.html](index.html)** foi drasticamente simplificado:

- Substituição de mais de 40 linhas de marcação repetitiva de cabeçalho e rodapé por `<swiss-header></swiss-header>` e `<swiss-footer></swiss-footer>`.
- Limpeza de arquivos obsoletos (`menu.html` e `card.html` removidos da raiz do projeto).

---

## 4. Nova Estrutura de Diretórios

Com a refatoração concluída, a estrutura final de arquivos é:

```text
├── index.html            # página principal
├── style.css             # folha de estilo unificada
├── script.js             # comportamento e Web Components dinâmicos
├── walkthrough.md        # walkthrough no projeto
└── components/           # componentes abstratos do site
    ├── header.html
    ├── footer.html
    ├── menu.html
    └── card.html
```
