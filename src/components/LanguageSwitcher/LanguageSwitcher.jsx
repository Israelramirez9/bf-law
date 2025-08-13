import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation("common");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className={styles.languageSwitcher}>
      <button
        onClick={() => changeLanguage("es")}
        className={`${styles.languageButton} ${
          currentLanguage === "es" ? styles.active : ""
        }`}
        aria-label="Cambiar a español"
      >
        {t("languages.spanish")}
      </button>
      <span className={styles.separator}>|</span>
      <button
        onClick={() => changeLanguage("en")}
        className={`${styles.languageButton} ${
          currentLanguage === "en" ? styles.active : ""
        }`}
        aria-label="Switch to English"
      >
        {t("languages.english")}
      </button>
    </div>
  );
};
