// cabeçalho de secção: título prefixado com "/" + legenda mono opcional
export default function SectionHeader({ title, caption }) {
  return (
    <div className="flex justify-between items-baseline border-b pb-3 border-ink mt-0">
      <h2 className="text-2xl font-black tracking-tight text-ink">{title}</h2>
      {caption && (
        <span className="text-xs font-mono text-ink-mid">{caption}</span>
      )}
    </div>
  )
}
