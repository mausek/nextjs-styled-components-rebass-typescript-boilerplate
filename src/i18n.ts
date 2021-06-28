import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
//import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { translate as commonEN } from './locales/en/common'
import { translate as commonCN } from './locales/cn/common'

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources: {
      en: {
        common: commonEN, 
      },
      cn: {
        common: commonCN,    
      },
    },
    react: {
      useSuspense: true,
    },
    
    ns: ['common'],
    defaultNS: 'common',
    nonExplicitSupportedLngs: true,
    supportedLngs: ['en', 'cn'],
    fallbackLng: 'en',
    preload: ['en'],
    keySeparator: false,
    interpolation: { escapeValue: false },
    debug: false,
  })

export default i18n
