import { useTranslation } from 'react-i18next'

export default function ProjectCard({ project, onSelect }) {
  const { i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'zh' ? 'zh' : 'en'
  const title = project.title[lang]

  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex flex-col rounded-3xl bg-cream-dim p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={project.coverImage}
        alt={title}
        className="mb-6 h-36 w-full rounded-2xl object-cover"
      />

      <h3 className="text-xl font-extrabold">{title}</h3>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60"
          >
            {tag}
          </li>
        ))}
      </ul>
    </button>
  )
}
