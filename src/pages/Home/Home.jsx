import { Trans, useTranslation } from "react-i18next";
import { FaMedal } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { TbTargetArrow } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerImage from "../../assets/main_banner.png";
import { Card } from "../../components/Card";
import { services, servicesImages } from "./constants";
import styles from "./Home.module.css";
import { Banner } from "./sections";

// Import logos
import AngelEstrada from "../../assets/logos/angel_estrada.png";
import Cabelma from "../../assets/logos/cabelma.png";
import Caf from "../../assets/logos/caf.png";
import Ccu from "../../assets/logos/ccu.png";
import ChrHansen from "../../assets/logos/chr_hansen.png";
import Directv from "../../assets/logos/directv.png";
import Fonterra from "../../assets/logos/fonterra.png";
import Hsbc from "../../assets/logos/hsbc.png";
import Iapg from "../../assets/logos/iapg.png";
import LaCelia from "../../assets/logos/la_celia.png";
import Quinenco from "../../assets/logos/quinenco.png";
import Taranto from "../../assets/logos/taranto.png";
import Unipar from "../../assets/logos/unipar.png";
import Vital from "../../assets/logos/vital.png";
import Walmart from "../../assets/logos/walmart.png";

// Logos array
const logos = [
  { src: AngelEstrada, alt: "Angel Estrada" },
  { src: Cabelma, alt: "Cabelma" },
  { src: Caf, alt: "CAF" },
  { src: Ccu, alt: "CCU" },
  { src: ChrHansen, alt: "Chr Hansen" },
  { src: Directv, alt: "DirecTV" },
  { src: Fonterra, alt: "Fonterra" },
  { src: Hsbc, alt: "HSBC" },
  { src: Iapg, alt: "IAPG" },
  { src: LaCelia, alt: "La Celia" },
  { src: Quinenco, alt: "Quinenco" },
  { src: Taranto, alt: "Taranto" },
  { src: Unipar, alt: "Unipar" },
  { src: Vital, alt: "Vital" },
  { src: Walmart, alt: "Walmart" },
];

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
                <h2 className={styles.subtitle} id="quienes-somos">
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

      <section className={styles.section3} id="nuestro-enfoque">
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
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              className={styles.logosCarousel}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={styles.logoImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
