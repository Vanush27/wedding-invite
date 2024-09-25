import React, { useState, useEffect, useRef } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import audioSrc from "../../../src/assets/siro-hasak.mp3";
import styles from "./PlaySong.module.css";

const PlaySong = ({ isInvitationOpen, setInvitationOpen }: any) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize the audio element only once
    audioRef.current = new Audio(audioSrc);
    audioRef.current.volume = 0.5;

    // Clean up on component unmount
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (isInvitationOpen) {
      audioRef.current?.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isInvitationOpen]);

  const togglePlay = () => {
    setInvitationOpen((prev: boolean) => !prev);
  };

  return (
    <button className={styles.playSongButton} onClick={togglePlay}>
      {isInvitationOpen ? (
        <VolumeUpIcon style={{ fontSize: 30 }} />
      ) : (
        <VolumeOffIcon style={{ fontSize: 30 }} />
      )}
    </button>
  );
};

export default PlaySong;
