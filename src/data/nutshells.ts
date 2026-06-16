import type { NutshellCardProps } from '../components/NutshellCard'

export type Nutshell = NutshellCardProps

// conteúdo dos cartões de nutshells. o html original repetia o mesmo trio
// de cartões 4× (12 no total); aqui o trio fica como fonte única e é
// replicado na página para preservar a paridade visual.
export const nutshells: Nutshell[] = [
  {
    platform: 'plataforma',
    date: 'jun 2026',
    title:
      'modelagem de redes complexas com foco em densidade de dados estruturados',
    summary:
      'um guia prático sobre análise de grafos e formas eficientes de visualizar conectividade em grandes volumes de informação.',
    tags: ['data science', 'grafos'],
  },
  {
    platform: 'plataforma',
    date: 'maio 2026',
    title: 'o papel da tipografia na visualização científica',
    summary:
      'como famílias tipográficas herdeiras da univers melhoram a precisão na legibilidade técnica de gráficos e dashboards analíticos.',
    tags: ['tipografia', 'design suíço'],
  },
  {
    platform: 'plataforma',
    date: 'mar 2026',
    title: 'geometria e espaço negativo: lições para dashboards digitais',
    summary:
      'aplicando regras de espaço livre e contrastes absolutos herdados da escola de emil ruder no desenvolvimento front-end moderno.',
    tags: ['dashboard', 'front-end'],
  },
]
