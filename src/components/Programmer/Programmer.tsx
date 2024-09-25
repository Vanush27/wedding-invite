import time from "../../assets/timeforyou.svg";
import Timeline from "@ui-kit/Timeline/Timeline";

import styles from "./Programmer.module.css";

const Programmer = () => {
  return (
    <div className={styles.container}>
      <img src={time} alt="time for you" className={styles.programmerImg} />
      <Timeline />
    </div>
  );
};

export default Programmer;
