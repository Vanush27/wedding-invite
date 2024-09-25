import { ChurchPage, HallPage, InviteForm, Programmer } from "@components";
import Footer from "@components/Footer/Footer";

import WelcomePage from "@components/WelcomePage/WelcomePage";

import StaticCalendar from "@ui-kit/Calendar/StaticCalendar";

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

      {/* <h1 className={styles.text}>Այստեղ կարող եք գրել Ձեր նախընտրած երգը</h1> */}
      {/* <InviteForm /> */}

      <Footer />
    </>
  );
};

export default WeddingInvitation;
