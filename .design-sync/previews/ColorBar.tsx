import { ColorBar } from 'me'

export function Default() {
  return (
    <div style={{ width: 480, backgroundColor: '#f5f0e8', padding: '32px 0' }}>
      <ColorBar />
    </div>
  )
}

export function SobreEscuro() {
  return (
    <div style={{ width: 480, backgroundColor: '#1a1a1a', padding: '32px 0' }}>
      <ColorBar />
    </div>
  )
}
