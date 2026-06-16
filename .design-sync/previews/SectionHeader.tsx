import { SectionHeader } from 'me'

export function ComLegenda() {
  return (
    <div style={{ maxWidth: 560, padding: 24 }}>
      <SectionHeader title="/ sobre" caption="mestrado" />
    </div>
  )
}

export function SemLegenda() {
  return (
    <div style={{ maxWidth: 560, padding: 24 }}>
      <SectionHeader title="/ projetos" />
    </div>
  )
}

export function Academico() {
  return (
    <div style={{ maxWidth: 560, padding: 24 }}>
      <SectionHeader title="/ acadêmico" caption="produção científica" />
    </div>
  )
}
