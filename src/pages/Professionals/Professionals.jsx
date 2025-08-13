import { Trans, useTranslation } from "react-i18next";
import ProfessionalsBanner from "../../assets/professionals_background.png";
import { Banner } from "../Home/sections";
import styles from "./Proffesionals.module.css";

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
        <h1>Profesionales</h1>
      </div>
    </>
  );
}
