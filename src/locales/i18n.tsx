import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./lang/EN";
import { th } from "./lang/TH";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      th: { translation: th },
      en: { translation: en },
    },
    // resources,
    lng: localStorage.getItem("lng") || "th",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
