import React, { useState } from "react";
import Draggable from "react-draggable";
import chevron_right from "../../assets/chevronR.svg";

import styles from "./DraggableButton.module.css";

const DraggableButton = ({ setInvitationOpen }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const initialPosition = { x: 0, y: 0 };

  const calculateCircleCenter = () => {
    const windowWidth = window.innerWidth;
    return windowWidth * 0.6;
  };

  const handleDrag = (e: any, data: any) => {
    const circleCenter = calculateCircleCenter();
    console.log(data.x, circleCenter);
    if (data.x >= position.x) {
      setPosition({ x: data.x, y: position.y });
    }
  };

  const handleStop = (e: any, data: any) => {
    const circleCenter = calculateCircleCenter();
    if (data.x >= circleCenter) {
      setInvitationOpen(true);
    } else {
      setPosition(initialPosition);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Draggable
          axis="x"
          bounds="parent"
          position={position}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <button className={styles.draggable_btn}>
            <img src={chevron_right} alt="chevron_right" />
          </button>
        </Draggable>

        <p className={styles.open_text}>Open innovation</p>
        <Draggable
          axis="x"
          bounds="parent"
          //   position={position2}
          //   onStop={handleStop}
          disabled
        >
          <div className={styles.open_inv}></div>
        </Draggable>
      </div>
    </div>
  );
};

export default DraggableButton;
