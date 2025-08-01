import ProfessionalsBanner from "../../assets/professionals_background.png";
import { Banner } from "../Home/sections";
import styles from "./Proffesionals.module.css";

export function Professionals() {
  return (
    <>
      <Banner
        image={{ src: ProfessionalsBanner, alt: "BF Law" }}
        banner={{ style: { height: "700px", objectPosition: "top" } }}
        content={{
          style: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -0%)",
          },
        }}
      >
        <h2>
          Contamos con un equipo de profesionales comprometidos con brindar
          <span className="highlight">asesoramiento legal de excelencia,</span>
          enfocado en acompañar a nuestros clientes en cada decisión clave.
        </h2>
      </Banner>
      <div className={styles.section}>
        <h1>Profesionales</h1>
      </div>
    </>
  );
}
