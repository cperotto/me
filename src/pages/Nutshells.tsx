import SectionHeader from '../components/SectionHeader'
import NutshellCard from '../components/NutshellCard'
import { nutshells } from '../data/nutshells'

// o layout original mostra o trio de cartões repetido 4× (12 cartões).
const cards = Array.from({ length: 4 }).flatMap(() => nutshells)

export default function Nutshells() {
  return (
    <div className="space-y-6 mt-0">
      <SectionHeader
        title="/ nutshells — notas, ensaios e artigos"
        caption="plataformas de divulgação científica"
      />

      <p className="font-geom-body text-sm leading-relaxed text-ink">
        peças curtas de divulgação técnica e teórica sobre ciência de dados,
        tipografia e a relação geométrica das interfaces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {cards.map((card, i) => (
          <NutshellCard key={i} {...card} />
        ))}
      </div>
    </div>
  )
}
