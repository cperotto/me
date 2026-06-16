import type { ReactNode } from 'react'

export interface GridBackgroundProps {
  children?: ReactNode
}

// fundo de página com malha suíça em bege — apenas para bg de página, nunca dentro de cards
export default function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div
      className="bg-surface"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23e0d5be' stroke-width='0.5'/%3E%3C%2Fsvg%3E")`,
      }}
    >
      {children}
    </div>
  )
}
