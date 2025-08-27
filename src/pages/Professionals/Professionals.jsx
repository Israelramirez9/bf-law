import { Trans, useTranslation } from "react-i18next";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProfessionalsBanner from "../../assets/professionals_background.png";
import { CardV1 } from "../../components/CardV1";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { Banner } from "../Home/sections";
import styles from "./Professionals.module.css";
import { professionals } from "./constants";

export function Professionals() {
  const { ready } = useTranslation(["professionals"]);

  const { isMobile } = useWindowDimension();

  if (!ready) return <div>Loading...</div>;

  return (
    <>
      <Banner
        image={{ src: ProfessionalsBanner, alt: "BF Law" }}
        banner={{ style: { objectPosition: "top" } }}
        content={{
          style: {
            top: "60%",
            transform: "translate(-50%, -10%)",
            maxWidth: "700px",
            width: "100%",
          },
        }}
      >
        <h2>
          <Trans
            i18nKey="professionals:title"
            components={{
              span: <span className="highlight" />,
            }}
          />
        </h2>
      </Banner>
      <div className={styles.section}>
        <h1>
          <Trans i18nKey="professionals:subtitle" />
        </h1>

        {!isMobile && (
          <div className={styles.professionalsContainer}>
            {professionals.map((professional) => (
              <CardV1 key={professional.title} {...professional} />
            ))}
          </div>
        )}

        {isMobile && (
          <div className={styles.professionalsContainerMobile}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              loop={true}
            >
              {professionals.map((professional) => (
                <SwiperSlide key={professional.title}>
                  <CardV1 {...professional} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
}
