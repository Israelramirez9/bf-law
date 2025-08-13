import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Hook para forzar re-renderización cuando cambia el idioma
 * Útil para componentes que no se actualizan automáticamente
 */
export const useLanguageChange = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return currentLang;
};
