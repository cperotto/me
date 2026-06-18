import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/SectionHeader'

interface WhitePaper {
  author: string
  title: string
  summary: string
  url: string
}

interface Article {
  platform: string
  date: string
  title: string
  summary: string
  tags: string[]
  url: string
}

export default function Publicacoes() {
  const { t } = useTranslation('nutshells')

  const whitePapers = t('white_papers', { returnObjects: true }) as WhitePaper[]
  const articles = t('articles', { returnObjects: true }) as Article[]

  return (
    <div className="space-y-16 mt-0">
      {/* White Papers Section */}
      <div className="space-y-8">
        <SectionHeader
          title={t('white_papers_title')}
          caption={t('white_papers_caption')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {whitePapers.map((paper, i) => (
            <a
              key={i}
              href={paper.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col space-y-3 p-4 -m-4 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:bg-ink/5"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent">
                {paper.author}
              </span>
              <h3 className="text-base font-bold font-univers leading-snug text-ink group-hover:text-accent transition-colors duration-200">
                {paper.title}
              </h3>
              <p className="font-geom-body text-sm leading-relaxed text-ink-mid">
                {paper.summary}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="space-y-8">
        <SectionHeader
          title={t('articles_title')}
          caption={t('articles_caption')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col space-y-3 p-4 -m-4 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:bg-ink/5"
            >
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] font-mono font-bold tracking-widest text-warm-text">
                  {article.platform}
                </span>
                <span className="text-[10px] font-mono font-bold text-ink-mid opacity-80">
                  {article.date}
                </span>
              </div>
              <h3 className="text-base font-bold font-univers leading-snug text-ink group-hover:text-accent transition-colors duration-200">
                {article.title}
              </h3>
              <p className="font-geom-body text-sm leading-relaxed text-ink-mid">
                {article.summary}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono px-2 py-0.5 border border-ink/20 text-ink-mid"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
