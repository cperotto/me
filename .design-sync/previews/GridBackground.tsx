import { GridBackground, SectionHeader, NutshellCard } from 'me'

export function Vazia() {
  return (
    <GridBackground>
      <div style={{ width: 480, height: 200 }} />
    </GridBackground>
  )
}

export function ComConteudo() {
  return (
    <GridBackground>
      <div style={{ padding: 32, maxWidth: 480 }}>
        <SectionHeader title="/ projetos" caption="2024–2026" />
        <div style={{ marginTop: 24 }}>
          <NutshellCard
            platform="pesquisa"
            date="jun 2026"
            title="tipografia e visualização científica"
            summary="como famílias tipográficas melhoram a legibilidade técnica."
            tags={['tipografia', 'design suíço']}
          />
        </div>
      </div>
    </GridBackground>
  )
}
