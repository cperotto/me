import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon } from '../components/icons.jsx'

const labelClass =
  'text-base font-bold uppercase tracking-widest font-univers text-ink-mid'

export default function Sobre() {
  return (
    <div className="space-y-6 mt-0">
      <SectionHeader title="/ sobre" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
        {/* coluna de perfil */}
        <div className="md:col-span-4 space-y-4 font-geom-body">
          <h3 className={labelClass}>// resumo profissional</h3>
          <p className="text-sm leading-relaxed text-ink">
            engenheira civil especialista em transportes, atuando no planejamento
            e avaliação de políticas públicas.
            <br />
            construindo pontes entre a visão analítica com estratégia para
            desenvolvimento de investimentos no setor de transportes.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://github.com/cperotto"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-ink-mid hover:text-accent transition-colors duration-200"
            >
              <GithubIcon />
              github
            </a>
            <a
              href="https://www.linkedin.com/in/cperotto/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-ink-mid hover:text-accent transition-colors duration-200"
            >
              <LinkedinIcon />
              linkedin
            </a>
          </div>
        </div>

        {/* coluna de experiência e formação */}
        <div className="md:col-span-8 border-l pl-6 space-y-8 border-ink">
          {/* formação acadêmica */}
          <div className="space-y-6">
            <h3 className={labelClass}>// formação acadêmica</h3>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-base font-bold font-univers text-ink">
                    bacharelado em engenharia civil // universidade de são paulo
                  </h4>
                  <span className="text-xs font-mono font-bold whitespace-nowrap text-ink-mid">
                    2016 — 2021
                  </span>
                </div>
                <p className="font-mono text-xs mt-1 text-ink-mid uppercase tracking-wider">
                  ênfase em engenharia de transportes
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <Link
                    to="/academico"
                    className="group flex items-center gap-1 hover:text-accent transition-colors duration-200"
                  >
                    <h4 className="text-base font-bold font-univers text-ink group-hover:text-accent transition-colors duration-200">
                      mestrado em políticas públicas // insper
                    </h4>
                    <ArrowUpRightIcon className="text-ink group-hover:text-accent transition-colors duration-200" />
                  </Link>
                  <span className="text-xs font-mono font-bold whitespace-nowrap text-ink-mid">
                    2023 — 2025
                  </span>
                </div>
                <p className="font-mono text-xs mt-1 text-ink-mid uppercase tracking-wider">
                  os movimentos da acessibilidade: interações entre regulação,
                  <br />
                  uso do solo e mobilidade em são paulo entre 2013 e 2022
                </p>
              </div>
            </div>
          </div>

          {/* trajetória profissional */}
          <div className="space-y-6 mt-8">
            <h3 className={labelClass}>// trajetória profissional</h3>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-base font-bold font-univers text-ink">
                    coordenadora geral de instrumentos de planejamento //
                    ministério dos transportes
                  </h4>
                  <span className="text-xs font-mono font-bold whitespace-nowrap text-ink-mid">
                    jul/2025 - presente
                  </span>
                </div>
                <p className="font-mono text-xs mt-1 text-ink-mid uppercase tracking-wider">
                  infraestrutura de transporte • políticas públicas
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-base font-bold font-univers text-ink">
                    consultora (short-term) // banco mundial
                  </h4>
                  <span className="text-xs font-mono font-bold whitespace-nowrap text-ink-mid">
                    mai/2025 — jul/2025
                  </span>
                </div>
                <p className="font-mono text-xs mt-1 text-ink-mid uppercase tracking-wider">
                  transporte público • governança de dados • transição energética
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-base font-bold font-univers text-ink">
                    lead data scientist // scipopulis
                  </h4>
                  <span className="text-xs font-mono font-bold whitespace-nowrap text-ink-mid">
                    dez/2019 — jun/2025
                  </span>
                </div>
                <p className="font-mono text-xs mt-1 text-ink-mid uppercase tracking-wider">
                  mobilidade urbana • geoprocessamento em tempo real • otimização
                  operacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
