import MapDetalis from "@ui-kit/MapDetalis/MapDetalis";
import dvin_restoran from "../../assets/dvin_restoran.png";

const HallPage = () => {
  return (
    <div>
      <MapDetalis
        url={"https://yandex.ru/map-widget/v1/-/CDDD688h"}
        name={"ԴՎԻՆ Ռեստորան"}
        address={"ք.Երևան, Ջրվեժ, Քոչինյան փողոց"}
        time={"17:30 - 23:00"}
        img={dvin_restoran}
      />
    </div>
  );
};

export default HallPage;
