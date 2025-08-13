import { Trans } from "react-i18next";
import styles from "./Card.module.css";

export const Card = ({ title, description, image }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image?.src} alt={image?.alt} {...image} />
      {title && (
        <h4>
          <Trans i18nKey={title} />
        </h4>
      )}
      {description && (
        <p>
          <Trans i18nKey={description} />
        </p>
      )}
    </div>
  );
};
