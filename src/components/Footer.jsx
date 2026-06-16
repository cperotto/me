import { forwardRef } from 'react'

const Footer = forwardRef(function Footer(_props, ref) {
  return (
    <footer
      ref={ref}
      id="footer-fixo"
      className="fixed bottom-0 left-0 w-full border-t-4 text-white z-50 font-univers bg-ink border-ink transition-transform duration-300 translate-y-0"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-black text-warm-light">camilla perotto</h4>
        </div>
      </div>
    </footer>
  )
})

export default Footer
