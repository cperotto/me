import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: '[ / sobre ]', end: true },
  { to: '/academico', label: '[ / acadêmico ]' },
  { to: '/nutshells', label: '[ / nutshells ]' },
]

const btn =
  'square-btn px-4 py-2 border-2 text-xs font-bold tracking-wider border-ink text-ink'

export default function Nav() {
  return (
    <nav id="menu-grelha" className="flex flex-wrap gap-2">
      {items.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => (isActive ? `${btn} active` : btn)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
