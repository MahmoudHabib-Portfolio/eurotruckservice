import i18n, { init, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/locales/en/translation.json';
import russ from '../assets/locales/russ/translation.json';

import LanguageDetector from 'i18next-browser-languagedetector';

const resources: Resource = {
    russ: {
      translation: russ,
    },
    en: {
      translation: en,
    },
};

i18n
.use(LanguageDetector)
.use(initReactI18next)
init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'russ'],
    keySeparator: '.',
    lng: 'en',
    resources,
    react: {
      useSuspense: false,
    },
});

export default i18n;