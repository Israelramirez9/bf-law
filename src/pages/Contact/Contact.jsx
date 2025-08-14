import styles from "./Contact.module.css";
import { Form } from "./Form";

export function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <p>
        ¿Necesitas asesoría legal? No dudes en contactarnos. Estamos aquí para
        ayudarte con todas tus necesidades legales.
      </p>

      <div>
        <div className={styles.contactInfo}>
          {/* Información de contacto */}
          <div className={styles.contactInfo1}>
            <h2>Información de Contacto</h2>
            <div style={{ marginTop: "1rem" }}>
              <p>
                <strong>Dirección:</strong>
              </p>
              <p>
                Av. Principal #123
                <br />
                Ciudad, País
              </p>

              <p style={{ marginTop: "1rem" }}>
                <strong>Teléfono:</strong>
              </p>
              <p>+1 (555) 123-4567</p>

              <p style={{ marginTop: "1rem" }}>
                <strong>Email:</strong>
              </p>
              <p>info@bflaw.com</p>

              <p style={{ marginTop: "1rem" }}>
                <strong>Horarios:</strong>
              </p>
              <p>
                Lunes - Viernes: 9:00 AM - 6:00 PM
                <br />
                Sábados: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className={styles.contactInfo2}>
            <h2>Envíanos un Mensaje</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
