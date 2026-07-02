import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
]

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const setLanguage = (code) => {
    i18n.changeLanguage(code)
    window.localStorage.setItem('lang', code)
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full bg-cream-dim p-1 shadow-sm">
      {LANGUAGES.map(({ code, label }) => {
        const active = i18n.resolvedLanguage === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-150 ${
              active
                ? 'bg-ink text-cream shadow-sm'
                : 'text-ink/60 hover:text-ink hover:scale-105'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
