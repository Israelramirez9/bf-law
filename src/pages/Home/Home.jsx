import { FaMedal, FaVideo } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { TbTargetArrow } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Baggio from "../../assets/baggio.png";
import Directv from "../../assets/directv.png";
import Hsbc from "../../assets/hsbc.png";
import LaHolando from "../../assets/la_holando.png";
import BannerImage from "../../assets/main_banner.png";
import Walmart from "../../assets/walmart.png";
import { Card } from "../../components/Card";
import { services, servicesImages } from "./constants";
import styles from "./Home.module.css";
import { Banner } from "./sections";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Banner
        image={{
          src: BannerImage,
          alt: "BF Law",
          style: { objectPosition: "inherit" },
        }}
      >
        <h2>
          Impulsamos negocios, Protegemos{" "}
          <span className="highlight">&nbsp;decisiones</span>.
        </h2>
        <p>
          Ofrecemos asesoría legal estratégica con foco en resultados
          comerciales.
          <br />
          <br />
          Asistimos a empresas, startups, inversores y familias en cada paso
          clave de su camino.
        </p>
      </Banner>

      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            {/* Contenido Principal */}
            <div className={styles.content}>
              <div className={styles.textSection}>
                <h2 className={styles.subtitle}>QUIENES SOMOS</h2>

                <h1 className={styles.title}>
                  BF LAW es un e
                  <span className="highlight">studio jurídico co</span>n una
                  visión global y enfoque estratégico.
                </h1>

                <p className={styles.description}>
                  Representamos a empresas, instituciones y startups en
                  decisiones legales clave, con excelencia técnica y comprensión
                  del negocio.
                </p>
              </div>

              <button
                className="primaryButton"
                onClick={() => navigate("/contacto")}
              >
                <span>Contáctenos</span>
                <span className="arrow">›</span>
              </button>
            </div>

            {/* Características */}
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <ImCalendar size={30} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>
                    +30 años de experiencia
                  </h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <TfiWorld size={35} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>
                    Operaciones nacionales e internacionales
                  </h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <TbTargetArrow size={35} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>
                    Enfoque personalizado y ágil
                  </h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <FaMedal size={30} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>
                    Respaldados por la confianza de quienes nos eligen
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.wrapperSection2}>
          <div className={styles.section2Top}>
            <div className={styles.container2}>
              <div className={styles.header2}>
                <p className={styles.subtitle}>COMO LO HACEMOS</p>

                <h2 className={styles.title2}>
                  Brindamos{" "}
                  <span className="highlight">soluciones legales</span>,
                  diseñadas a medida para cada desafío empresarial.
                </h2>

                <p className={styles.description2}>
                  En BF Law, siempre hay una manera. Nuestro equipo se involucra
                  desde el inicio, comprendiendo la industria, la cultura y los
                  objetivos de cada cliente. Combinamos análisis jurídico
                  riguroso con una mirada práctica del negocio. Esto nos permite
                  anticipar riesgos, identificar oportunidades y acompañar
                  procesos clave con precisión.
                </p>
              </div>
            </div>

            <div className={styles.videoSection}>
              <div className={styles.playButton}>
                <FaVideo className={styles.playIcon} />
                <span className={styles.videoText}>Conoce nuestro estudio</span>
              </div>
              <span className={styles.videoMeta}>2:34Min, 14.7MB </span>
            </div>
          </div>
          <div className={styles.section2Bottom}>
            <div className={styles.servicesFlex}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className={styles.serviceCard}>
                    <div className={styles.iconContainer}>
                      <IconComponent className={styles.icon} />
                    </div>
                    <p className={styles.serviceTitle}>{service.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section3}>
        <p className={styles.subtitle}>NUESTRO ENFOQUE</p>
        <h2 className={styles.title2}>
          Transformamos necesidades en soluciones <br />
          <span className="highlight">legales efectivas</span>.
        </h2>

        <p className={styles.description3}>
          Cada etapa del proceso legal está pensada para maximizar resultados y
          anticipar riesgos, con una mirada práctica del negocio.
        </p>

        <div className={styles.cardsWrapper}>
          {servicesImages.map(({ description, image, title }, index) => {
            return (
              <Card
                key={index}
                title={title}
                description={description}
                image={image}
              />
            );
          })}
        </div>
      </section>

      <section className={styles.section4}>
        <div className={styles.wrapperSection4}>
          <p className={styles.subtitle}>CONFÍA EN NOSOTROS</p>
          <h2 className={styles.title2}>
            Nos eligen <span className="highlight">clientes</span> que reconocen{" "}
            <br />
            nuestro esfuerzo y dedicación en cada caso
          </h2>
          <p className={styles.description3}>
            Algunos de ellos con los que hemos trabajado:
            <br />
          </p>

          <div className={styles.logosWrapper}>
            <img src={LaHolando} alt="logo1" />
            <img src={Walmart} alt="logo2" />
            <img src={Hsbc} alt="logo3" />
            <img src={Baggio} alt="logo4" />
            <img src={Directv} alt="logo5" />
          </div>

          <div className={styles.clientsButtonWrapper}>
            <button
              className="primaryButton"
              onClick={() => navigate("/clientes")}
            >
              <span>Ver más </span>
              <span className="arrow">›</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
