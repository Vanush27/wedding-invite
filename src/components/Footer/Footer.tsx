import styles from "./Foter.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h3 className={styles.sirov}>
        Սիրով կսպասենք Ձեզ <span className={styles.iconSmile}>&#128522;</span>
      </h3>
    </div>
  );
};

export default Footer;
