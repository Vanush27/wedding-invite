import React, { useState, useEffect, useRef } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

// import audioSrc from "../../../src/assets/backsound-invitation.mp3";
import audioSrc from "../../../src/assets/siro-hasak.mp3";
import styles from "./PlaySong.module.css";

const PlaySong = ({ isInvitationOpen }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioSrc));

  useEffect(() => {
    setIsPlaying(true);
  }, [isInvitationOpen]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.volume = 0.5;
      // TODO
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <button
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
