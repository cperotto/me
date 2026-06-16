import { Footer } from 'me'

export function Default() {
  return (
    <div style={{ position: 'relative', height: 120, background: '#f5f0e8' }}>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Footer />
      </div>
    </div>
  )
}
