import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
import fr from './fr.json';
import es from './es.json';
import hi from './hi.json';
import bn from './bn.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en: en,
    ar: ar,
    fr: fr,
    es: es,
    hi: hi,
    bn: bn,
  },
});

export default i18next;
