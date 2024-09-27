import WelcomePage from "@components/WelcomePage/WelcomePage";
import { ChurchPage, HallPage, Programmer } from "@components";

import StaticCalendar from "@ui-kit/Calendar/StaticCalendar";
import Footer from "@components/Footer/Footer";

import locationfor from "../../assets/locationfor.svg";
import location from "../../assets/location.svg";

import styles from "./WeddingInvitation.module.css";

const WeddingInvitation = () => {
  return (
    <>
      <WelcomePage />
      <StaticCalendar />

      <div className={styles.location}>
        <img src={locationfor} alt="My SVG" className={styles.image} />
        <img
          src={location}
          alt="location"
          width={50}
          height={70}
          className={styles.location_icon}
        />

        <ChurchPage />
        <HallPage />
      </div>

      <Programmer />
      <Footer />
    </>
  );
};

export default WeddingInvitation;
