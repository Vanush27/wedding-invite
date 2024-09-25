import React from "react";

import MapDetalis from "@ui-kit/MapDetalis/MapDetalis";
import hovannavanq from "../../assets/hovannavanq.jpeg";

const ChurchPage: React.FC = () => {
  return (
    <div>
      <MapDetalis
        url={"https://yandex.ru/map-widget/v1/-/CDHrrDzl"}
        name={"Հովհաննավանք Վանական Համալիր"}
        address={"Արագածոտնի մարզ, գ. Օհանավան"}
        time={"14:00"}
        img={hovannavanq}
      />
    </div>
  );
};

export default ChurchPage;
