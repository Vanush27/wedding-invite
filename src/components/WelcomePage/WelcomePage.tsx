import foregraound_image from "../../assets/foreground.jpg";

import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={foregraound_image}
          alt="My SVG"
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className={styles.symbol}></div>
    </div>
  );
};

export default WelcomePage;
