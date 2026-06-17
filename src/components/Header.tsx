import { forwardRef } from 'react'
import Nav from './Nav'
import ColorBar from './ColorBar'
import LanguageSwitcher from './LanguageSwitcher'

// cabeçalho fixo: título + menu de grelha + faixa cromática.
// recebe ref para que o Layout controle o reveal no scroll.
const Header = forwardRef<HTMLDivElement>(function Header(_props, ref) {
  return (
    <div
      ref={ref}
      id="header-fixo"
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-300 translate-y-0"
    >
      <header className="relative z-10 border-b-2 bg-surface border-ink">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-ink">
              camilla perotto
            </h1>
          </div>
          <div className="ml-auto pr-[calc(8vw/12-2.5rem)]">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-wrap items-end gap-2">
            <Nav />
          </div>
        </div>
      </header>
      <ColorBar />
    </div>
  )
})

export default Header
