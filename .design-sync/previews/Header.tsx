import { Header, MemoryRouter } from 'me'

export function Default() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ position: 'relative', height: 140, background: '#f5f0e8' }}>
        <Header />
      </div>
    </MemoryRouter>
  )
}
