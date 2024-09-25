import React, { useState, useEffect, useRef } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import audioSrc from "../../../src/assets/siro-hasak.mp3";
import styles from "./PlaySong.module.css";

const PlaySong = ({ isInvitationOpen }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = new Audio(audioSrc);
  // const buttonRef = React.useRef<any>(null);

  useEffect(() => {
    setIsPlaying(true);
  }, [isInvitationOpen]);

  useEffect(() => {
    if (isPlaying) {
      // audio?.volume = 0.5;
      audio?.play();
    } else {
      audio?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {}, []);

  return (
    <button
      // ref={buttonRef}
      className={styles.playSongButton}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? (
        <VolumeUpIcon style={{ fontSize: 30 }} />
      ) : (
        <VolumeOffIcon style={{ fontSize: 30 }} />
      )}
    </button>
  );
};

export default PlaySong;
