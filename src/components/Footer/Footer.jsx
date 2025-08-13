import { Trans, useTranslation } from "react-i18next";
import { GiPositionMarker } from "react-icons/gi";
import { IoMailOpen } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { useLanguageChange } from "../../hooks/useLanguageChange";
import styles from "./Footer.module.css";

const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

export const Footer = () => {
  // Asegurar que el namespace footer esté cargado
  const { ready, t } = useTranslation(["footer", "common"]);
  // Forzar re-renderización cuando cambie el idioma
  const currentLanguage = useLanguageChange();

  // Debug: verificar si las traducciones están cargadas
  console.log("Footer ready:", ready);
  console.log("Current language:", currentLanguage);
  console.log("Footer contact title:", t("contact.title"));

  if (!ready) return <div>Loading...</div>;

  const navigationLinks = [
    { to: "/", labelKey: "footer:navigation.links.about" },
    { to: "/areas-practica", labelKey: "footer:navigation.links.practice" },
    { to: "/nuestro-enfoque", labelKey: "footer:navigation.links.approach" },
    { to: "/clientes", labelKey: "footer:navigation.links.clients" },
    {
      to: "/profesionales",
      labelKey: "footer:navigation.links.professionals",
    },
  ];

  return (
    <footer key={currentLanguage} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Contáctanos Section */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>
              <Trans i18nKey="footer:contact.title" />
            </h3>

            <div className={styles.contactItem}>
              <div className={styles.iconContainer}>
                <MdPhone className={styles.icon} />
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.contactLabel}>
                  <Trans i18nKey="footer:contact.phone" />
                </p>
                <p className={styles.contactValue}>
                  <Trans i18nKey="footer:contact.phoneValue" />
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconContainer}>
                <GiPositionMarker className={styles.icon} />
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.contactLabel}>
                  <Trans i18nKey="footer:contact.address" />
                </p>
                <p className={styles.contactValue}>
                  <Trans i18nKey="footer:contact.addressValue" />
                </p>
                <a
                  href="https://maps.app.goo.gl/cNAhhxNVULXcjEEh8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsLink}
                >
                  <Trans i18nKey="footer:contact.addressLink" />
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconContainer}>
                <IoMailOpen className={styles.icon} />
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.contactLabel}>
                  <Trans i18nKey="footer:contact.email" />
                </p>
                <p className={styles.contactValue}>
                  <Trans i18nKey="footer:contact.emailValue" />
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className={styles.navigationSection}>
            <h3 className={styles.sectionTitle}>
              <Trans i18nKey="footer:navigation.title" />
            </h3>
            <nav className={styles.navigationList}>
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  className={styles.navigationLink}
                  to={link.to}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Trans i18nKey={link.labelKey} />
                </Link>
              ))}
            </nav>
          </div>

          {/* Opportunities Section */}
          <div className={styles.opportunitiesSection}>
            <h3 className={styles.sectionTitle}>
              <Trans i18nKey="footer:opportunities.title" />
            </h3>
            <p className={styles.opportunitiesText}>
              <Trans i18nKey="footer:opportunities.description" />
            </p>
            <button className={"primaryButton"}>
              <span>
                <Trans i18nKey="footer:opportunities.button" />
              </span>
              <span className="arrow">›</span>
            </button>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        <Trans
          i18nKey="footer:copyright"
          values={{ year: new Date().getFullYear() }}
        />
      </p>
    </footer>
  );
};
