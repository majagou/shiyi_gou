import { useTranslation } from 'react-i18next'
import { skills } from '../data/skills'
import headshot from '../assets/headshot.webp'

export default function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'zh' ? 'zh' : 'en'

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28">
      <h2 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
        {t('about.heading')}
      </h2>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_2fr] md:items-start md:gap-16">
        <img
          src={headshot}
          alt={t('hero.name')}
          className="mx-auto h-48 w-48 rounded-full object-cover shadow-md"
        />

        <div className="text-center md:text-left">
          <p className="text-lg leading-relaxed text-ink/70">{t('about.intro')}</p>
        </div>
      </div>

      <div className="mt-12 space-y-8 text-center md:text-left">
        {skills.map((group) => (
          <div key={group.category.en}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              {group.category[lang]}
            </h3>
            <ul className="mt-3 flex flex-wrap justify-center gap-3 md:justify-start">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-cream-dim px-4 py-2 text-sm font-medium shadow-sm transition hover:scale-105"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
