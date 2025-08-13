import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Importar traducciones en español
import aboutEs from "../locales/es/about.json";
import commonEs from "../locales/es/common.json";
import contactEs from "../locales/es/contact.json";
import footerEs from "../locales/es/footer.json";
import homeEs from "../locales/es/home.json";
import professionalsEs from "../locales/es/professionals.json";

// Importar traducciones en inglés
import aboutEn from "../locales/en/about.json";
import commonEn from "../locales/en/common.json";
import contactEn from "../locales/en/contact.json";
import footerEn from "../locales/en/footer.json";
import homeEn from "../locales/en/home.json";
import professionalsEn from "../locales/en/professionals.json";

// Configuración de recursos
const resources = {
  es: {
    common: commonEs,
    home: homeEs,
    about: aboutEs,
    professionals: professionalsEs,
    contact: contactEs,
    footer: footerEs,
  },
  en: {
    common: commonEn,
    home: homeEn,
    about: aboutEn,
    professionals: professionalsEn,
    contact: contactEn,
    footer: footerEn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es", // Idioma por defecto
    lng: "es", // Idioma inicial
    debug: true, // Cambiar a true para debugging

    // Configuración de detección de idioma
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    // Configuración de interpolación
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },

    // Configuración de namespaces
    defaultNS: "common",
    ns: ["common", "home", "about", "professionals", "contact", "footer"],

    // Configuración para mejor reactividad
    react: {
      useSuspense: false, // Evitar problemas con Suspense
      bindI18n: "languageChanged loaded", // Re-renderizar cuando cambie el idioma
      bindI18nStore: "added removed", // Re-renderizar cuando se agreguen/quiten traducciones
    },
  });

export default i18n;
