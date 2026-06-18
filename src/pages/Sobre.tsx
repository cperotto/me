import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/SectionHeader'
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon } from '../components/icons'

const labelClass =
  'text-base font-bold uppercase tracking-widest font-univers text-ink-mid'

export default function Sobre() {
  const { t } = useTranslation('sobre')

  return (
    <div className="space-y-6 mt-0">
      <SectionHeader title={t('section_title')} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
        {/* coluna de perfil */}
        <div className="md:col-span-4 space-y-6 font-geom-body">
          <div className="space-y-2">
            <h3 className={labelClass}>{t('resumo_label')}</h3>
            <p className="text-sm leading-relaxed text-ink">{t('bio')}</p>
          </div>

          <div className="space-y-2">
            <h3 className={labelClass}>{t('certificacoes_label')}</h3>
            <div className="flex flex-wrap items-baseline gap-2">
              <p className="font-geom-body text-sm text-ink">
                cp3p
              </p>
              <p className="font-geom-body text-sm text-ink uppercase tracking-wider">
                ({t('cert_levels')})
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className={labelClass}>{t('redes_label')}</h3>
            <div className="flex flex-col gap-3">
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
        </div>

        {/* coluna de experiência e formação */}
        <div className="md:col-span-8 border-l pl-6 space-y-8 border-ink">
          {/* formação acadêmica */}
          <div className="space-y-6">
            <h3 className={labelClass}>{t('formacao_label')}</h3>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-base font-bold font-univers text-ink">
                    {t('bach_degree')}
                  </h4>
                  <span className="text-sm font-geom-body whitespace-nowrap text-ink-mid">
                    2016 — 2021
                  </span>
                </div>
                <p className="font-geom-body text-sm mt-1 text-ink-mid uppercase tracking-wider">
                  {t('bach_detail')}
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <Link
                    to="/academico"
                    className="group flex items-center gap-1 hover:text-accent transition-colors duration-200"
                  >
                    <h4 className="text-base font-bold font-univers text-ink group-hover:text-accent transition-colors duration-200">
                      {t('master_degree')}
                    </h4>
                    <ArrowUpRightIcon className="text-ink group-hover:text-accent transition-colors duration-200" />
                  </Link>
                  <span className="text-sm font-geom-body whitespace-nowrap text-ink-mid">
                    2023 — 2025
                  </span>
                </div>
                <p className="font-geom-body text-sm mt-1 text-ink-mid uppercase tracking-wider whitespace-pre-line">
                  {t('master_detail')}
                </p>
              </div>
            </div>
          </div>

          {/* trajetória profissional */}
          <div className="space-y-6 mt-8">
            <h3 className={labelClass}>{t('trajetoria_label')}</h3>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-base font-bold font-univers text-ink">
                    {t('job1_title')}
                  </h4>
                  <span className="text-sm font-geom-body whitespace-nowrap text-ink-mid">
                    {t('job1_period')}
                  </span>
                </div>
                <p className="font-geom-body text-sm mt-1 text-ink-mid uppercase tracking-wider">
                  {t('job1_tags')}
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-base font-bold font-univers text-ink">
                    {t('job2_title')}
                  </h4>
                  <span className="text-sm font-geom-body whitespace-nowrap text-ink-mid">
                    {t('job2_period')}
                  </span>
                </div>
                <p className="font-geom-body text-sm mt-1 text-ink-mid uppercase tracking-wider">
                  {t('job2_tags')}
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h4 className="text-base font-bold font-univers text-ink">
                    {t('job3_title')}
                  </h4>
                  <span className="text-sm font-geom-body whitespace-nowrap text-ink-mid">
                    {t('job3_period')}
                  </span>
                </div>
                <p className="font-geom-body text-sm mt-1 text-ink-mid uppercase tracking-wider">
                  {t('job3_tags')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
