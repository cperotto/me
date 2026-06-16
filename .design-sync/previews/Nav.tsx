import { Nav, MemoryRouter } from 'me'

export function Default() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ padding: 24, background: '#f5f0e8' }}>
        <Nav />
      </div>
    </MemoryRouter>
  )
}

export function PaginaAtiva() {
  return (
    <MemoryRouter initialEntries={['/nutshells']}>
      <div style={{ padding: 24, background: '#f5f0e8' }}>
        <Nav />
      </div>
    </MemoryRouter>
  )
}
