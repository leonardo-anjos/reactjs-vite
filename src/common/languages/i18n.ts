import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from 'common/languages/locales/en.json';
import PT from 'common/languages/locales/pt.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: { translation: EN },
    pt: { translation: PT },
  },
});

export default i18n;
