import AreaDePractica1 from "../../assets/area_de_practica_1.png";
import AreaDePractica2 from "../../assets/area_de_practica_2.png";
import AreaDePractica3 from "../../assets/area_de_practica_3.png";
import AreaDePractica4 from "../../assets/area_de_practica_4.png";
import AreaDePractica5 from "../../assets/area_de_practica_5.png";
import AreaDePractica6 from "../../assets/area_de_practica_6.png";
import NuestrosValores from "../../assets/equipo_hands_work.png";
import { Card } from "../../components/Card";
import styles from "./About.module.css";

export function About() {
  const areas = [
    {
      title: "Corporativo y Societario",
      description:
        "Constitución de sociedades, reformas estatutarias, conflictos entre socios y compraventa de acciones.",
      image: {
        alt: "Derecho Corporativo",
        src: AreaDePractica1,
      },
    },
    {
      title: "Contratos y Negociación",
      description:
        "Redacción, revisión y estructuración de contratos comerciales, con foco en prevenir conflictos.",
      image: {
        alt: "Contratos y Negociación",
        src: AreaDePractica2,
      },
    },
    {
      title: "Conflictos Legales y Arbitraje",
      description:
        "Intervención estratégica en disputas comerciales y societarias, judiciales o arbitrales.",
      image: {
        alt: "Conflictos Legales y Arbitraje",
        src: AreaDePractica3,
      },
    },
    {
      title: "Inversiones y Startups",
      description:
        "Asesoramiento a emprendedores e inversores en etapas iniciales, rondas de inversión y acuerdos SAFE.",
      image: {
        alt: "Inversiones y Startups",
        src: AreaDePractica4,
      },
    },
    {
      title: "Propiedad Intelectual y Nuevas Tecnologías",
      description:
        "Registro de marcas, licencias, compliance digital y contratos tecnológicos.",
      image: {
        alt: "Propiedad Intelectual y Nuevas Tecnologías",
        src: AreaDePractica5,
      },
    },
    {
      title: "Planificación  patrimonial y familiar",
      description:
        "Asesoramos en la planificación patrimonial y en la creación de acuerdos familiares para preservar empresas y activos, optimizando su sucesión y carga impositiva.",
      image: {
        alt: "Planificación  patrimonial y familiar",
        src: AreaDePractica6,
      },
    },
  ];

  return (
    <div>
      <div className={styles.section1Container}>
        {/* Sobre el estudio */}

        <div className={styles.section1}>
          <h1>Sobre el estudio</h1>
          <h3>
            BF LAW es un estudio jurídico con un alcance internacional,
            especializado en decisiones legales claves, tenemos amplio conocimi
            <span className="highlight">
              ento en derecho corporativo y societario.
            </span>
          </h3>
          <p>
            Asesoramos a empresas, startups, instituciones y personas
            particulares que enfrentan desafíos en sus operaciones, estructuras
            legales o procesos de expansión. Nuestra práctica combina excelencia
            técnica, comprensión del negocio y compromiso con cada cliente.
            Ofrecemos soluciones legales diseñadas a medida, con una mirada
            práctica del derecho.
            <br />
            <br /> Contamos con amplia experiencia en constitución de
            sociedades, transacciones complejas, resolución de conflictos y
            asesoramiento integral.
          </p>
        </div>
      </div>

      {/* Nuestros Valores */}
      <div className={styles.section2}>
        <div>
          <p className={styles.subtitle}>NUESTROS VALORES</p>
          <h3>
            Nos guía la{" "}
            <span className="highlight">cercanía con nuestros clientes,</span>{" "}
            la agilidad para actuar en entornos cambiantes y la capacidad de
            anticipar riesgos y detectar oportunidades.
          </h3>
          <br />
          <br />
          <p>
            Brindamos asesoramiento legal confiable y enfocado en resultados,
            acompañando a nuestros clientes en decisiones clave con comprensión
            del negocio y una mirada cercana. Nos impulsa la excelencia
            profesional, la confianza construida y la capacidad de ofrecer
            soluciones adaptadas a contextos cambiantes y complejos.
          </p>
        </div>
        <div className={styles.section2Image}>
          <img src={NuestrosValores} alt="Nuestros Valores" />
        </div>
      </div>

      {/* Area de práctica */}
      <div className={styles.section3}>
        <h2 className={styles.subtitle}>Area de práctica</h2>
        <h3>
          Asistimos en distintos frentes legales para{" "}
          <span className="highlight">resolver desafíos con precisión</span> y
          cercanía.
        </h3>
        <br />
        <br />
        <p>Nos especializamos en la siguientes áreas:</p>
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
