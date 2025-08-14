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
          {/* Información de contacto */}
          <div className={styles.contactInfo1}>
            <h2>
              <Trans i18nKey="contact:info.title" />
            </h2>
            <div style={{ marginTop: "1rem" }}>
              <p>
                <strong>
                  <Trans i18nKey="contact:info.address" />
                </strong>
              </p>
              <p>
                <Trans i18nKey="contact:info.addressValue" />
                <br />
                <Trans i18nKey="contact:info.addressValue2" />
              </p>

              <p style={{ marginTop: "1rem" }}>
                <strong>
                  <Trans i18nKey="contact:info.phone" />
                </strong>
              </p>
              <p>
                <Trans i18nKey="contact:info.phoneValue" />
              </p>

              <p style={{ marginTop: "1rem" }}>
                <strong>
                  <Trans i18nKey="contact:info.email" />
                </strong>
              </p>
              <p>
                <Trans i18nKey="contact:info.emailValue" />
              </p>

              <p style={{ marginTop: "1rem" }}>
                <strong>
                  <Trans i18nKey="contact:info.hours" />
                </strong>
              </p>
              <p>
                <Trans i18nKey="contact:info.hoursValue" />
                <br />
                <Trans i18nKey="contact:info.hoursValue2" />
              </p>
            </div>
          </div>

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
