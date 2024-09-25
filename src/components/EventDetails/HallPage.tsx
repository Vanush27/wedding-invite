import MapDetalis from "@ui-kit/MapDetalis/MapDetalis";
import styles from "./styles.module.css";
import dvin_restoran from "../../assets/dvin_restoran.png";

const HallPage = () => {
  return (
    <div className={styles.ccc}>
      <MapDetalis
        url={"https://yandex.ru/map-widget/v1/-/CDDD688h"}
        name={"ԴՎԻՆ Ռեստորան"}
        address={"ք.Երևան, Ջրվեժ, Քոչինյան փողոց"}
        time={"17:30 - 23:30"}
        img={dvin_restoran}
      />
    </div>
  );
};

export default HallPage;
