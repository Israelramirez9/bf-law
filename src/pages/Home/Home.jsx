import { ImCalendar } from 'react-icons/im'
import Banner from '../../assets/main_banner.png'
import styles from './Home.module.css'
import { TbTargetArrow } from 'react-icons/tb'
import { TfiWorld } from 'react-icons/tfi'
import { FaMedal, FaHandshake, FaRegLightbulb, FaVideo } from 'react-icons/fa'
import { BiHeadphone } from 'react-icons/bi'
import { BiShield } from 'react-icons/bi'
import { LuZap } from 'react-icons/lu'

export function Home() {

  const services = [
    {
      icon: FaHandshake,
      title: "Asesoría",
      subtitle: "personalizada",
    },
    {
      icon: LuZap,
      title: "Agilidad y",
      subtitle: "Eficiencia",
    },
    {
      icon: BiShield,
      title: "Compromiso legal",
      subtitle: "integral",
    },
    {
      icon: BiHeadphone,
      title: "Confidencialidad",
      subtitle: "garantizada",
    },
    {
      icon: FaRegLightbulb,
      title: "Soluciones",
      subtitle: "a medida",
    }
  ];

  return (
    <div>
      <div className={styles.bannerContainer}>
        <img src={Banner} alt="BF Law" />
        <div className={styles.bannerContent}>
          <h2>Impulsamos negocios, Protegemos <span className={styles.highlight}>&nbsp;decisiones</span>.</h2>
          <p>
            Ofrecemos asesoría legal estratégica con foco en resultados comerciales.<br /><br />
            Asistimos a empresas, startups, inversores y familias en cada paso clave de su camino.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            {/* Contenido Principal */}
            <div className={styles.content}>
              <div className={styles.textSection}>
                <h2 className={styles.subtitle}>
                  QUIENES SOMOS
                </h2>

                <h1 className={styles.title}>
                  BF  LAW es un e<span className={styles.highlight}>studio jurídico co</span>
                  n una visión global y enfoque estratégico.
                </h1>

                <p className={styles.description}>
                  Representamos a empresas, instituciones y startups en decisiones legales clave,
                  con excelencia técnica y comprensión del negocio.
                </p>
              </div>

              <button className={styles.contactButton}>
                <span>Contáctenos</span>
                <span className={styles.arrow}>›</span>
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
      </div>

      <section className={styles.section2}>
        <div className={styles.wrapperSection2}>
          <div className={styles.section2Top}>
            <div className={styles.container2}>
              <div className={styles.header2}>
                <p className={styles.subtitle}>COMO LO HACEMOS</p>

                <h2 className={styles.title2}>
                  Brindamos <span className={styles.highlight}>soluciones legales</span>, diseñadas a
                  medida para cada desafío empresarial.
                </h2>

                <p className={styles.description2}>
                  En BF Law, siempre hay una manera. Nuestro equipo se involucra desde el inicio, comprendiendo la
                  industria, la cultura y los objetivos de cada cliente. Combinamos análisis jurídico riguroso con una
                  mirada práctica del negocio. Esto nos permite anticipar riesgos, identificar oportunidades y acompañar
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
    </div>
  )
}