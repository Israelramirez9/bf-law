import { Trans, useTranslation } from "react-i18next";
import ProfessionalsBanner from "../../assets/professionals_background.png";
import { CardV1 } from "../../components/CardV1";
import { Banner } from "../Home/sections";
import styles from "./Professionals.module.css";
import { professionals } from "./constants";

export function Professionals() {
  const { ready } = useTranslation(["professionals"]);

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
        <div className={styles.professionalsContainer}>
          {professionals.map((professional) => (
            <CardV1 key={professional.title} {...professional} />
          ))}
        </div>
      </div>
    </>
  );
}
