import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import trTranslations from './locales/tr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      tr: { translation: trTranslations },
    },
    lng: 'en', // Varsayılan dil
    fallbackLng: 'en', // Varsayılan dil mevcut değilse kullanılacak dil
    interpolation: {
      escapeValue: false, // React zaten XSS korumasını sağlar
    },
  });

export default i18n;
