import React, { useState, useEffect, useRef } from "react";
import ReactHowler from "react-howler";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import audioSrc from "../../../src/assets/siro-hasak.mp3"; // Import audio source
import styles from "./PlaySong.module.css";

const PlaySong = ({ isInvitationOpen }: any) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const buttonRef = useRef<any>(null);

  useEffect(() => {
    setIsPlaying(true);
  }, [isInvitationOpen]);

  return (
    <>
      <ReactHowler
        src={audioSrc}
        playing={isPlaying}
        html5={true} // Enables HTML5 audio
        loop={true} // Optional: Loop the audio
      />
      <button
        ref={buttonRef}
        className={styles.playSongButton}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? (
          <VolumeUpIcon style={{ fontSize: 30 }} />
        ) : (
          <VolumeOffIcon style={{ fontSize: 30 }} />
        )}
      </button>
    </>
  );
};

export default PlaySong;
