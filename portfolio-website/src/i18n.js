import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import zh from './locales/zh.json'

const storedLang = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null
const defaultLang = import.meta.env.VITE_DEPLOY_TARGET === 'github' ? 'en' : 'zh'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: storedLang || defaultLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
