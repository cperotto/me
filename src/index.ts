// barrel da biblioteca de componentes — design suíço / bauhaus.
// importa o css (tokens + regras globais + tailwind) para que o build de lib
// emita um stylesheet compilado (dist-lib/style.css). é a entrada que o
// /design-sync consome — ver .design-sync/NOTES.md.
import './index.css'

export { default as Layout } from './components/Layout'
export type { LayoutProps } from './components/Layout'

export { default as Header } from './components/Header'
export { default as Footer } from './components/Footer'
export { default as Nav } from './components/Nav'
export { default as ColorBar } from './components/ColorBar'
export { default as GridBackground } from './components/GridBackground'
export type { GridBackgroundProps } from './components/GridBackground'

export { default as SectionHeader } from './components/SectionHeader'
export type { SectionHeaderProps } from './components/SectionHeader'

export { default as NutshellCard } from './components/NutshellCard'
export type { NutshellCardProps } from './components/NutshellCard'

export { GithubIcon, LinkedinIcon, ArrowUpRightIcon } from './components/icons'
export type { IconProps } from './components/icons'

export type { Nutshell } from './data/nutshells'
