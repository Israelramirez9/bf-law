import styles from "./Card.module.css";

/*    
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    }
*/

export const Card = ({ title, description, image }) => {
    return (
        <div className={styles.wrapper}>
            <img src={image?.src} alt={image?.alt} {...image} />
            {title && <h4>{title}</h4>}
            {description && <p>{description}</p>}
        </div>
    )
}