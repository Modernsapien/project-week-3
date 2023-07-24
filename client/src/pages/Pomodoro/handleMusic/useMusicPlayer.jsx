// useMusicPlayer.js
import { useState, useRef } from "react";

const useMusicPlayer = (musicSrc) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return { audioRef, isPlaying, handlePlayPause };
};

export default useMusicPlayer;
