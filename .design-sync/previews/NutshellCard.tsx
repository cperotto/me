import { NutshellCard } from 'me'

export function Tipografia() {
  return (
    <div style={{ maxWidth: 420, padding: 24 }}>
      <NutshellCard
        platform="pesquisa"
        date="jun 2026"
        title="o papel da tipografia na visualização científica"
        summary="como famílias tipográficas herdeiras da univers melhoram a precisão na legibilidade técnica em artigos de alta densidade informacional."
        tags={['tipografia', 'design suíço', 'legibilidade']}
      />
    </div>
  )
}

export function Design() {
  return (
    <div style={{ maxWidth: 420, padding: 24 }}>
      <NutshellCard
        platform="projeto"
        date="mar 2025"
        title="sistemas de grid para interfaces responsivas"
        summary="explorando malhas modulares como estrutura base para composições digitais e impressas, seguindo os princípios de müller-brockmann."
        tags={['grid', 'layout', 'modular']}
      />
    </div>
  )
}

export function Curto() {
  return (
    <div style={{ maxWidth: 420, padding: 24 }}>
      <NutshellCard
        platform="nota"
        date="jan 2025"
        title="bauhaus e a síntese arte-técnica"
        summary="brief sobre a influência da escola bauhaus no design contemporâneo."
        tags={['bauhaus', 'história']}
      />
    </div>
  )
}
