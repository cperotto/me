import { useTranslation } from 'react-i18next'

const LANGS = ['pt', 'en'] as const
const STORAGE_KEY = 'lang'

const btn =
  'square-btn px-3 py-2 text-xs font-bold tracking-wider border-ink text-ink'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const set = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }

  return (
    <div className="flex border-2 border-ink">
      {LANGS.map((lang, idx) => (
        <button
          key={lang}
          onClick={() => set(lang)}
          aria-label={`switch to ${lang}`}
          className={
            current === lang
              ? `${btn} active ${idx > 0 ? 'border-l-2' : ''}`
              : `${btn} ${idx > 0 ? 'border-l-2' : ''}`
          }
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
