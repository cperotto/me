import { useEffect, useRef } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// controle do header/footer fixos baseado na rolagem (porte de script.js):
// - no fim da página: ambos visíveis
// - rolando para baixo: footer some, header recolhe até sobrar a faixa de cores
// - rolando para cima / no topo: ambos reaparecem
function useScrollReveal(headerRef, footerRef) {
  useEffect(() => {
    let lastScrollY = window.scrollY
    const onScroll = () => {
      const header = headerRef.current
      const footer = footerRef.current
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (currentScrollY + windowHeight >= documentHeight - 20) {
        if (footer) footer.style.transform = 'translateY(0)'
        if (header) header.style.transform = 'translateY(0)'
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        if (footer) footer.style.transform = 'translateY(100%)'
        if (header) header.style.transform = 'translateY(calc(-100% + 0.75rem))'
      } else {
        if (footer) footer.style.transform = 'translateY(0)'
        if (header) header.style.transform = 'translateY(0)'
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [headerRef, footerRef])
}

export default function Layout({ children }) {
  const headerRef = useRef(null)
  const footerRef = useRef(null)
  useScrollReveal(headerRef, footerRef)

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden font-univers">
      <Header ref={headerRef} />

      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 pt-44 md:pt-32 pb-32">
        <div className="relative min-h-[500px] flex flex-col">{children}</div>
      </main>

      <Footer ref={footerRef} />
    </div>
  )
}
