import SectionHeader from '../components/SectionHeader'

const gridLines = [100, 200, 300, 400, 500]
const legend = [
  { color: 'bg-warm', label: 'pico de retenção' },
  { color: 'bg-ink-mid', label: 'leitura ideal' },
  { color: 'bg-warm-light', label: 'margem flutuante' },
]

export default function Academico() {
  return (
    <div className="space-y-6 mt-0">
      <SectionHeader title="/ acadêmico" caption="mestrado" />

      <p className="font-geom-body text-sm leading-relaxed text-ink">
        investigação dedicada à modelação e optimização geométrica do espaço em
        ecrãs de densidade modular. a tese propõe novos rácios de grelha que
        evitam a fadiga de leitura científica através de margens dinâmicas.
      </p>

      {/* visualizador de dados geométrico */}
      <div className="border-2 p-6 flex flex-col justify-between border-ink bg-card">
        <div className="flex justify-between items-center text-xs font-mono border-b pb-3 mb-4 border-ink opacity-30">
          <span className="text-ink">
            figura 02.1 // correlação de densidade tipográfica
          </span>
          <span className="text-warm-text">rácio 1.618 unificado</span>
        </div>

        <div className="w-full h-48 border relative overflow-hidden flex items-center justify-center bg-white border-ink">
          <svg className="w-full h-full" viewBox="0 0 600 200">
            {/* linhas de grelha suíça */}
            {gridLines.map((x) => (
              <line
                key={x}
                x1={x}
                y1="0"
                x2={x}
                y2="200"
                stroke="var(--color-border)"
                strokeWidth="1"
                strokeDasharray="4"
              />
            ))}
            <line
              x1="0"
              y1="100"
              x2="600"
              y2="100"
              stroke="var(--color-border)"
              strokeWidth="1"
              strokeDasharray="4"
            />

            {/* conectores ortogonais do gráfico */}
            <polyline
              points="100,60 200,140 300,100 400,150 500,40"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="2"
            />

            {/* nós estruturais em quadrados retos */}
            <rect x="95" y="55" width="10" height="10" fill="var(--color-warm)" />
            <rect x="195" y="135" width="10" height="10" fill="var(--color-ink-mid)" />
            <rect x="295" y="95" width="10" height="10" fill="var(--color-warm-light)" />
            <rect x="395" y="145" width="10" height="10" fill="var(--color-ink)" />
            <rect x="495" y="35" width="10" height="10" fill="var(--color-warm)" />
          </svg>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-ink">
          {legend.map(({ color, label }) => (
            <div key={label}>
              <span className={`inline-block w-2.5 h-2.5 mr-1 ${color}`}></span>{' '}
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
