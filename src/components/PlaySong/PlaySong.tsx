import React, { useState, useEffect, useRef } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import audioSrc from "../../../src/assets/siro-hasak.mp3";
import styles from "./PlaySong.module.css";

const PlaySong = ({ isInvitationOpen }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<any>(null);

  useEffect(() => {
    setIsPlaying(true);

    audioRef.current = new Audio(audioSrc);
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [isInvitationOpen]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    setIsPlaying(true);
  }, [isInvitationOpen]);

  return (
    <button
      ref={buttonRef}
      className={styles.playSongButton}
      onClick={() => setIsPlaying((prev) => !prev)}
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
