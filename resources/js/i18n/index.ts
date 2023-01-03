import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from "i18next-browser-languagedetector";

import inputsEn from './locales/en/inputs.json';
import inputsPt from './locales/pt-BR/inputs.json';

import titlesEn from './locales/en/titles.json';
import titlesPt from './locales/pt-BR/titles.json';


i18n
.use(LanguageDetector)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources: {
    en: {
      inputs: inputsEn,
      titles: titlesEn,

    },
    'pt-BR': {
      inputs: inputsPt,
      titles: titlesPt,
    }
  },
  ns: ['inputs', 'titles'],
  // lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
});

export default i18n;