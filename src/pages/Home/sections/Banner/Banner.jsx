import styles from "./Banner.module.css";
import Banner from "../../../../assets/main_banner.png";

export const BannerSection = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={Banner} alt="BF Law" />
      <div className={styles.bannerContent}>
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
      </div>
    </div>
  );
};
