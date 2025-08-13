import { Trans, useTranslation } from "react-i18next";
import NuestrosValores from "../../assets/equipo_hands_work.png";
import { Card } from "../../components/Card";
import styles from "./About.module.css";
import { areas } from "./constants";

export function About() {
  const { ready } = useTranslation(["about"]);

  if (!ready) return <div>Loading...</div>;

  return (
    <div>
      <div className={styles.section1Container}>
        {/* Sobre el estudio */}

        <div className={styles.section1}>
          <h1>
            <Trans i18nKey="about:title" />
          </h1>
          <h3>
            <Trans
              i18nKey="about:description"
              components={{
                span: <span className="highlight" />,
              }}
            />
          </h3>
          <p>
            <Trans i18nKey="about:description.p1" />
            <br />
            <br />
            <Trans i18nKey="about:description.p2" />
          </p>
        </div>
      </div>

      {/* Nuestros Valores */}
      <div className={styles.section2}>
        <div>
          <p className={styles.subtitle}>
            <Trans i18nKey="about:values.title" />
          </p>
          <h3>
            <Trans
              i18nKey="about:values.description"
              components={{
                span: <span className="highlight" />,
              }}
            />
          </h3>
          <p>
            <Trans i18nKey="about:values.p1" />
          </p>
        </div>
        <div className={styles.section2Image}>
          <img src={NuestrosValores} alt="Nuestros Valores" />
        </div>
      </div>

      {/* Area de práctica */}
      <div className={styles.section3}>
        <h2 className={styles.subtitle}>
          <Trans i18nKey="about:practice.title" />
        </h2>
        <h3>
          <Trans i18nKey="about:practice.description" />
        </h3>
        <br />
        <br />
        <p>
          <Trans i18nKey="about:practice.p1" />
        </p>
        <div className={styles.areasContainer}>
          {areas.map(({ description, image, title }) => (
            <Card
              key={title}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
