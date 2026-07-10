import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <footer className="px-6 pb-10 text-center text-xs text-ink/40">
        <p>
          &copy; {new Date().getFullYear()} {t('hero.name')}. {t('footer.rights')}
        </p>
        <p className="mt-1">
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink/60"
          >
            蜀ICP备2026038583号-1
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
