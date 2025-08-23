import { Trans, useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import { Form } from "./Form";

export function Contact() {
  const { ready } = useTranslation(["contact"]);

  if (!ready) return null;

  return (
    <div className={styles.container}>
      <h1>
        <Trans i18nKey="contact:title" />
      </h1>
      <p>
        <Trans i18nKey="contact:subtitle" />
      </p>

      <div>
        <div className={styles.contactInfo}>
          {/* Formulario */}
          <div className={styles.contactInfo2}>
            <h2>
              <Trans i18nKey="contact:form.title" />
            </h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
