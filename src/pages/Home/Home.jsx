import { Trans, useTranslation } from "react-i18next";
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
  const { ready } = useTranslation(["home", "common"]);

  if (!ready) return <div>Loading...</div>;

  return (
    <>
      <Banner
        image={{
          src: BannerImage,
          alt: "BF Law",
          style: { objectPosition: "top" },
        }}
        content={{
          style: {
            bottom: "10%",
            right: "5%",
            top: "auto",
            left: "auto",
            transform: "none",
          },
        }}
      >
        <h2>
          <Trans
            i18nKey="home:banner.title"
            components={{
              span: <span className="highlight" />,
            }}
          />
        </h2>
        <p>
          <Trans
            i18nKey="home:banner.description"
            components={{ br: <br /> }}
          />
        </p>
      </Banner>

      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            {/* Contenido Principal */}
            <div className={styles.content}>
              <div className={styles.textSection}>
                <h2 className={styles.subtitle}>
                  <Trans i18nKey="home:team.title" />
                </h2>

                <h1 className={styles.title}>
                  <Trans
                    i18nKey="home:team.subtitle"
                    components={{
                      span: <span className="highlight" />,
                    }}
                  />
                </h1>

                <p className={styles.description}>
                  <Trans
                    i18nKey="home:team.description"
                    components={{ br: <br /> }}
                  />
                </p>
              </div>

              <button
                className="primaryButton"
                onClick={() => navigate("/contacto")}
              >
                <span>
                  <Trans i18nKey="common:buttons.contact" />
                </span>
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
                    <Trans i18nKey="home:team.feature1" />
                  </h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <TfiWorld size={35} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>
                    <Trans i18nKey="home:team.feature2" />
                  </h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <TbTargetArrow size={35} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>
                    <Trans i18nKey="home:team.feature3" />
                  </h3>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <FaMedal size={30} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>
                    <Trans i18nKey="home:team.feature4" />
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
                <p className={styles.subtitle}>
                  <Trans i18nKey="home:section2.subtitle" />
                </p>

                <h2 className={styles.title2}>
                  <Trans
                    i18nKey="home:section2.title"
                    components={{
                      span: <span className="highlight" />,
                    }}
                  />
                </h2>

                <p className={styles.description2}>
                  <Trans
                    i18nKey="home:section2.description"
                    components={{ br: <br /> }}
                  />
                </p>
              </div>
            </div>

            <div className={styles.videoSection}>
              <div className={styles.playButton}>
                <FaVideo className={styles.playIcon} />
                <span className={styles.videoText}>
                  <Trans i18nKey="home:section2.videoText" />
                </span>
              </div>
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
                    <p className={styles.serviceTitle}>
                      <Trans i18nKey={service.title} />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section3}>
        <p className={styles.subtitle}>
          <Trans i18nKey="home:section3.subtitle" />
        </p>
        <h2 className={styles.title2}>
          <Trans
            i18nKey="home:section3.title"
            components={{
              span: <span className="highlight" />,
            }}
          />
        </h2>

        <p className={styles.description3}>
          <Trans
            i18nKey="home:section3.description"
            components={{ br: <br /> }}
          />
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
          <p className={styles.subtitle}>
            <Trans i18nKey="home:section4.subtitle" />
          </p>
          <h2 className={styles.title2}>
            <Trans
              i18nKey="home:section4.title"
              components={{
                span: <span className="highlight" />,
              }}
            />
          </h2>
          <p className={styles.description3}>
            <Trans
              i18nKey="home:section4.description"
              components={{ br: <br /> }}
            />
          </p>

          <div className={styles.logosWrapper}>
            <img src={LaHolando} alt="logo1" />
            <img src={Walmart} alt="logo2" />
            <img src={Hsbc} alt="logo3" />
            <img src={Baggio} alt="logo4" />
            <img src={Directv} alt="logo5" />
          </div>
        </div>
      </section>
    </>
  );
}
