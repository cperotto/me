import { ArrowUpRightIcon } from 'me'

export function Tamanhos() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 32, color: '#1a1a1a' }}>
      <ArrowUpRightIcon size={14} />
      <ArrowUpRightIcon size={20} />
      <ArrowUpRightIcon size={28} />
      <ArrowUpRightIcon size={40} />
    </div>
  )
}

export function EmContexto() {
  return (
    <div style={{ padding: 32, color: '#1a1a1a' }}>
      <a style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontFamily: 'monospace', fontWeight: 'bold', textDecoration: 'none', color: '#1a1a1a' }}>
        ver projeto <ArrowUpRightIcon size={14} />
      </a>
    </div>
  )
}
