import { useTranslation } from 'react-i18next'

const LANGS = ['pt', 'en'] as const
const STORAGE_KEY = 'lang'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const set = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }

  return (
    <span className="flex flex-col items-start text-xs tracking-wider leading-tight">
      {LANGS.map((lang) => (
        <button
          key={lang}
          onClick={() => set(lang)}
          aria-label={`switch to ${lang}`}
          className={
            current === lang
              ? 'font-bold text-ink'
              : 'font-normal text-ink/30 hover:text-ink/60 transition-colors'
          }
        >
          {lang}
        </button>
      ))}
    </span>
  )
}
