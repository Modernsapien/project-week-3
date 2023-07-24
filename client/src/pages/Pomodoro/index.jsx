// login.jsx
import React from "react";
import MusicPlayer from "../../contexts/handleMusic/musicPlayer";
import useMusicPlayer from "../../contexts/handleMusic/useMusicPlayer";

const Pomodoro = () => {
  const musicSrc = "../../../public/music1.mp3"; 
  const { isPlaying, handlePlayPause, audioRef } = useMusicPlayer(musicSrc);

  return (
    <div>
    
      <MusicPlayer musicSrc={musicSrc} audioRef={audioRef} />
      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
};

export default Pomodoro;
