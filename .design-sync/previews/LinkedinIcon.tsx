import { LinkedinIcon } from 'me'

export function Tamanhos() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 32, color: '#1a1a1a' }}>
      <LinkedinIcon size={16} />
      <LinkedinIcon size={24} />
      <LinkedinIcon size={32} />
      <LinkedinIcon size={48} />
    </div>
  )
}

export function EmLink() {
  return (
    <div style={{ padding: 32, color: '#1a1a1a' }}>
      <a style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontFamily: 'monospace', fontWeight: 'bold', textDecoration: 'none', color: '#1a1a1a' }}>
        <LinkedinIcon size={18} />
        linkedin.com/in/camillaperotto
      </a>
    </div>
  )
}
