import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/locales/en.json'
import mr from '@/locales/mr.json'

const savedLang = localStorage.getItem('lng') || 'en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mr: { translation: mr },
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng)
  localStorage.setItem('lng', lng)
}

export default i18n
