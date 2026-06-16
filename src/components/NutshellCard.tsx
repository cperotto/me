export interface NutshellCardProps {
  /** etiqueta de origem (ex.: "plataforma") */
  platform: string
  /** data de publicação, formato livre (ex.: "jun 2026") */
  date: string
  /** título principal, em univers */
  title: string
  /** resumo de apoio, em plus jakarta sans */
  summary: string
  /** etiquetas temáticas */
  tags: string[]
}

// cartão de nutshell: meta (plataforma + data), título, resumo e etiquetas
export default function NutshellCard({
  platform,
  date,
  title,
  summary,
  tags,
}: NutshellCardProps) {
  return (
    <div className="border-2 p-6 flex flex-col justify-between space-y-4 border-ink bg-card">
      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <span className="text-[10px] font-mono font-bold tracking-widest text-warm-text">
            {platform}
          </span>
          <span className="text-[10px] font-mono font-bold text-ink-mid opacity-80">
            {date}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold font-univers tracking-tight leading-snug text-ink">
          {title}
        </h3>
        <p className="font-geom-body text-sm leading-relaxed text-ink">
          {summary}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 text-[9px] font-mono">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 border border-ink bg-surface text-ink-mid"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
