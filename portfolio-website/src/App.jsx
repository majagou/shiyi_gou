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
        &copy; {new Date().getFullYear()} {t('hero.name')}. {t('footer.rights')}
      </footer>
    </>
  )
}

export default App
