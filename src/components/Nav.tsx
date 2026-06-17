import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const btn =
  'square-btn px-4 py-2 border-2 text-xs font-bold tracking-wider border-ink text-ink'

export default function Nav() {
  const { t } = useTranslation('common')

  const items = [
    { to: '/', label: t('nav.sobre'), end: true },
    { to: '/academico', label: t('nav.academico') },
    { to: '/nutshells', label: t('nav.nutshells') },
  ]

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
