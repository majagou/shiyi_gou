import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { contact } from '../data/contact'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const ICONS = {
  email: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
}

export default function ContactLinks() {
  const { t } = useTranslation()

  return (
    <div className="flex items-center gap-3">
      {contact.map(({ id, href }) => {
        const Icon = ICONS[id]
        const label = t(`hero.contact.${id}`)
        const isExternal = href.startsWith('http')

        return (
          <a
            key={id}
            href={href}
            aria-label={label}
            title={label}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-dim text-ink shadow-sm transition hover:scale-105 hover:shadow-md"
          >
            <Icon className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
}
