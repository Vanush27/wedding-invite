import { useEffect, useRef, useState } from "react";

import video from "../../assets/van.mp4";

import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import vl from "../../assets/VLL.svg";

import "./styles.css";

export const WelcomeVideo = () => {
  const videoRef = useRef<any>(null);
  const [playing, setPlaying] = useState(true);

  const videoHandler = (control: string) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="videoWrapper">
        <div className="videoLogo">
          <img src={vl} alt="vl" width={"60%"} height={"100%"} />
        </div>

        <video
          style={{ width: "100%", height: "100%" }}
          id="video1"
          ref={videoRef}
          className="video"
          src={video}
          autoPlay
        ></video>

        <div className="videoControls">
          <div className="controls">
            {playing ? (
              <button onClick={() => videoHandler("pause")}>
                <img className="controlsIcon--small" alt="" src={pause} />
              </button>
            ) : (
              <button onClick={() => videoHandler("play")}>
                <img className="controlsIcon--small" alt="" src={play} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
