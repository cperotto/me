import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/SectionHeader'
import NutshellCard from '../components/NutshellCard'
import type { Nutshell } from '../data/nutshells'

export default function Nutshells() {
  const { t } = useTranslation('nutshells')

  const sourceArticles = t('articles', { returnObjects: true }) as Nutshell[]
  // o layout original mostra o trio de cartões repetido 4× (12 cartões).
  const cards = Array.from({ length: 4 }).flatMap(() => sourceArticles)

  return (
    <div className="space-y-6 mt-0">
      <SectionHeader
        title={t('section_title')}
        caption={t('caption')}
      />

      <p className="font-geom-body text-sm leading-relaxed text-ink">
        {t('description')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {cards.map((card, i) => (
          <NutshellCard key={i} {...card} />
        ))}
      </div>
    </div>
  )
}
