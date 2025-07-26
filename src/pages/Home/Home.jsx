import { ImCalendar } from 'react-icons/im'
import Banner from '../../assets/main_banner.png'
import styles from './Home.module.css'
import { TbTargetArrow, TbWorld } from 'react-icons/tb'
import { TfiWorld } from 'react-icons/tfi'
import { FaMedal } from 'react-icons/fa'


export function Home() {
  return (
    <div>
      <div className={styles.bannerContainer}>
        <img src={Banner} alt="BF Law" />
        <div className={styles.bannerContent}>
          <h2>Impulsamos negocios, Protegemos <span>&nbsp;decisiones</span>.</h2>
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
                  BF  LAW es un e<span>studio jurídico co</span>
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
    </div>
  )
}