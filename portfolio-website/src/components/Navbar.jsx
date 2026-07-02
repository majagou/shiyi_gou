import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-xl items-center justify-between gap-4 rounded-full bg-cream/80 px-3 py-2 shadow-md backdrop-blur">
        <div className="flex items-center gap-1 pl-3">
          <a
            href="#about"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-ink/70 transition hover:text-ink hover:scale-105"
          >
            {t('nav.about')}
          </a>
          <a
            href="#portfolio"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-ink/70 transition hover:text-ink hover:scale-105"
          >
            {t('nav.portfolio')}
          </a>
        </div>
        <LanguageToggle />
      </nav>
    </header>
  )
}
