import { Trans } from "react-i18next";
import styles from "./CardV1.module.css";

export const CardV1 = ({ title, subtitle, subtitle2, description, image }) => {
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
          <Trans i18nKey={description} />
        </p>
      )}
    </div>
  );
};
