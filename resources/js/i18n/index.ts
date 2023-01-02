import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translations.json';
import translationPT from './locales/pt-BR/translations.json';

i18n
.use(LanguageDetector)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      translation: translationEN
    },
    'pt-BR': {
      translation: translationPT
    }
  },
  // lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",

  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
});

export default i18n;