import { Trans } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./CardV1.module.css";

export const CardV1 = ({
  title,
  subtitle,
  subtitle2,
  description,
  image,
  contact,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src={image?.src} alt={image?.alt} {...image} />
      </div>
      {title && (
        <h4 className={styles.title}>
          <Trans i18nKey={title} />
        </h4>
      )}
      {subtitle && (
        <p className={styles.subtitle}>
          <Trans i18nKey={subtitle} />
        </p>
      )}
      {subtitle2 && (
        <p className={styles.subtitle2}>
          <Trans i18nKey={subtitle2} />
        </p>
      )}
      {description && (
        <p className={styles.description}>
          <Trans
            i18nKey={description}
            components={{
              br: <br />,
              label: <span style={{ color: "black", fontWeight: 500 }} />,
            }}
          />
        </p>
      )}

      {contact && (
        <div className={styles.contact}>
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} color="#020e4a" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};
