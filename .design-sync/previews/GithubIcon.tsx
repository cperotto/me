import { GithubIcon } from 'me'

export function Tamanhos() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 32, color: '#1a1a1a' }}>
      <GithubIcon size={16} />
      <GithubIcon size={24} />
      <GithubIcon size={32} />
      <GithubIcon size={48} />
    </div>
  )
}

export function EmLink() {
  return (
    <div style={{ padding: 32, color: '#1a1a1a' }}>
      <a style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontFamily: 'monospace', fontWeight: 'bold', textDecoration: 'none', color: '#1a1a1a' }}>
        <GithubIcon size={18} />
        github.com/camillaperotto
      </a>
    </div>
  )
}
