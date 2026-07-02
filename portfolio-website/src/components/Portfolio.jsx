import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Portfolio() {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="portfolio" className="mx-auto max-w-5xl px-6 py-28">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t('portfolio.heading')}
        </h2>
        <p className="mt-4 text-lg text-ink/70">{t('portfolio.subheading')}</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
