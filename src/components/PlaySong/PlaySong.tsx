import React, { useState, useEffect, useRef } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import audioSrc from "../../../src/assets/siro-hasak.mp3";

import { Howl } from "howler";

import styles from "./PlaySong.module.css";

const PlaySong = ({ isInvitationOpen }: any) => {
  const [isPlaying, setIsPlaying] = useState(true);

  // const audio = new Audio(audioSrc);

  // const audioRef = useRef(audio);
  //

  const sound = new Howl({
    src: [audioSrc], // Specify the path to your audio file
    html5: true, // Ensures the audio plays in modern browsers
  });

  const audioRef = useRef(sound);

  const buttonRef = useRef<any>(null);

  useEffect(() => {
    setIsPlaying(true);
  }, [isInvitationOpen]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

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
