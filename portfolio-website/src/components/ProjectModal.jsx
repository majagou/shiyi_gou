import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './BrandIcons'

export default function ProjectModal({ project, onClose }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'zh' ? 'zh' : 'en'
  const modalRef = useRef(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const [position, setPosition] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      })
    }
    const handleMouseUp = () => setIsDragging(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  const handleHeaderMouseDown = (e) => {
    const rect = modalRef.current.getBoundingClientRect()
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    setPosition({ x: rect.left, y: rect.top })
    setIsDragging(true)
  }

  const title = project.title[lang]
  const windowStyle = position
    ? { left: position.x, top: position.y }
    : { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }

  return (
    <div className="fixed inset-0 z-[55] bg-ink/10 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={windowStyle}
        className="fixed z-[60] flex max-h-[85vh] w-[min(640px,90vw)] flex-col overflow-hidden rounded-3xl bg-cream shadow-xl"
      >
        <div
          onMouseDown={handleHeaderMouseDown}
          className="flex cursor-grab items-center justify-between border-b border-ink/10 px-6 py-4 select-none active:cursor-grabbing"
        >
          <h3 className="text-lg font-extrabold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('portfolio.close')}
            title={t('portfolio.close')}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:scale-105 hover:bg-ink/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6">
          {(project.githubUrl || project.githubUrls?.length > 0) && (
            <div className="mb-6 flex flex-wrap gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cream-dim px-3 py-1.5 text-xs font-medium text-ink shadow-sm transition hover:scale-105 hover:shadow-md"
                >
                  <GithubIcon className="h-4 w-4" />
                  {t('portfolio.viewOnGithub')}
                </a>
              )}
              {project.githubUrls?.map(({ label, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cream-dim px-3 py-1.5 text-xs font-medium text-ink shadow-sm transition hover:scale-105 hover:shadow-md"
                >
                  <GithubIcon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          )}

          <div className="space-y-6">
            {project.content.map((block, index) => {
              if (block.type === 'text') {
                return (
                  <p key={index} className="text-sm leading-relaxed text-ink/70">
                    {block[lang]}
                  </p>
                )
              }

              if (block.type === 'image') {
                return (
                  <figure key={index}>
                    <img
                      src={block.src}
                      alt={block.caption?.[lang] ?? title}
                      className="w-full max-w-full rounded-2xl object-cover"
                    />
                    {block.caption && (
                      <figcaption className="mt-2 text-center text-xs text-ink/50">
                        {block.caption[lang]}
                      </figcaption>
                    )}
                  </figure>
                )
              }

              if (block.type === 'video') {
                return (
                  <figure key={index}>
                    <video
                      src={block.src}
                      controls
                      className="aspect-video w-full max-w-full rounded-2xl bg-ink/5"
                    />
                    {block.caption && (
                      <figcaption className="mt-2 text-center text-xs text-ink/50">
                        {block.caption[lang]}
                      </figcaption>
                    )}
                  </figure>
                )
              }

              if (block.type === 'embed') {
                return (
                  <figure key={index}>
                    <iframe
                      src={block.src}
                      title={block.caption?.[lang] ?? `${title} embed ${index + 1}`}
                      allowFullScreen
                      className="aspect-video w-full max-w-full rounded-2xl bg-ink/5"
                    />
                    {block.caption && (
                      <figcaption className="mt-2 text-center text-xs text-ink/50">
                        {block.caption[lang]}
                      </figcaption>
                    )}
                  </figure>
                )
              }

              return null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
