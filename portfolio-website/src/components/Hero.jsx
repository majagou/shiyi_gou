import { useTranslation } from 'react-i18next'
import ContactLinks from './ContactLinks'
import heroBg from '../assets/hero-bg.webp'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[10px]"
        />
        <div className="absolute inset-0 bg-cream/5" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-0 z-[5] h-[250px] w-full bg-[linear-gradient(to_bottom,transparent_0px,var(--color-cream)_170px,var(--color-cream)_250px)]"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="mb-6 rounded-full bg-cream-dim px-4 py-1.5 text-sm font-medium text-ink/70 shadow-sm">
          {t('hero.role')}
        </span>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          {t('hero.greeting')}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/70">{t('hero.tagline')}</p>
        <a
          href="#portfolio"
          className="mt-10 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-cream shadow-md transition hover:scale-105 hover:shadow-lg"
        >
          {t('hero.cta')}
        </a>
        <div className="mt-8">
          <ContactLinks />
        </div>
      </div>
    </section>
  )
}
