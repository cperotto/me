import { Layout, SectionHeader, NutshellCard, MemoryRouter } from 'me'

export function ComConteudo() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ height: 600, overflow: 'hidden', position: 'relative' }}>
        <Layout>
          <SectionHeader title="/ projetos" caption="2024–2026" />
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <NutshellCard
              platform="pesquisa"
              date="jun 2026"
              title="tipografia e visualização científica"
              summary="como famílias tipográficas melhoram a precisão na legibilidade técnica."
              tags={['tipografia', 'design suíço']}
            />
          </div>
        </Layout>
      </div>
    </MemoryRouter>
  )
}
