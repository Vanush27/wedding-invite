import React, { useState, useEffect, useRef } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import audioSrc from "../../../src/assets/siro-hasak.mp3";
import styles from "./PlaySong.module.css";

const PlaySong = ({ isInvitationOpen }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioSrc));
  const buttonRef = React.useRef<any>(null);

  useEffect(() => {
    setIsPlaying(true);

    console.log(audioRef?.current, "audioRef?.current");
  }, [isInvitationOpen, audioRef?.current]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.volume = 0.5;
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef?.current]);

  return (
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
  );
};

export default PlaySong;
