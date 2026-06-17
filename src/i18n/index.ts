import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import './types'

import ptCommon from './locales/pt/common.json'
import ptSobre from './locales/pt/sobre.json'
import ptAcademico from './locales/pt/academico.json'
import ptNutshells from './locales/pt/nutshells.json'

import enCommon from './locales/en/common.json'
import enSobre from './locales/en/sobre.json'
import enAcademico from './locales/en/academico.json'
import enNutshells from './locales/en/nutshells.json'

const saved = localStorage.getItem('lang')
const lng = saved === 'en' || saved === 'pt' ? saved : 'pt'

i18next.use(initReactI18next).init({
  lng,
  fallbackLng: 'pt',
  defaultNS: 'common',
  ns: ['common', 'sobre', 'academico', 'nutshells'],
  resources: {
    pt: {
      common: ptCommon,
      sobre: ptSobre,
      academico: ptAcademico,
      nutshells: ptNutshells,
    },
    en: {
      common: enCommon,
      sobre: enSobre,
      academico: enAcademico,
      nutshells: enNutshells,
    },
  },
  interpolation: { escapeValue: false },
})

export default i18next
