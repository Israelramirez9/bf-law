import styles from "./Banner.module.css";

export const BannerSection = ({ children, image, banner, content }) => {
  return (
    <div className={styles.bannerContainer} {...banner}>
      <img alt="BF Law" {...image} />
      <div className={styles.bannerContent} {...content}>
        {children}
      </div>
    </div>
  );
};
