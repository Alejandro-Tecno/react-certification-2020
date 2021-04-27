import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "../src/lang/en/translation.json";
import translationEs from "../src/lang/es/translation.json";

const fallbackLng = ["en"];
const resources = {
  en: {
    translation: translationEn,
  },
  es: {
    translation: translationEs,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    debug: false,

    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
