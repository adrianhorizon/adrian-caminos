import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from '../i18n/es';
import en from '../i18n/en';
import pt from '../i18n/pt';

const resources = { es, en, pt };

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es",
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;