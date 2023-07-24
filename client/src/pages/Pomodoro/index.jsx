// login.jsx
import React from "react";
import MusicPlayer from "../../contexts/handleMusic/musicPlayer";
import useMusicPlayer from "../../contexts/handleMusic/useMusicPlayer";
import WaveBackground from "../../contexts/waveBackground";


const Pomodoro = () => {
  const musicSrc = "../../../public/music1.mp3";
  const { isPlaying, handlePlayPause, audioRef } = useMusicPlayer(musicSrc);

  return (
    <>
      <WaveBackground />

      <div>
        <MusicPlayer musicSrc={musicSrc} audioRef={audioRef} />
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>
    </>
  );
};

export default Pomodoro;
