import type ptCommon from './locales/pt/common.json'
import type ptSobre from './locales/pt/sobre.json'
import type ptAcademico from './locales/pt/academico.json'
import type ptNutshells from './locales/pt/nutshells.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof ptCommon
      sobre: typeof ptSobre
      academico: typeof ptAcademico
      nutshells: typeof ptNutshells
    }
  }
}
