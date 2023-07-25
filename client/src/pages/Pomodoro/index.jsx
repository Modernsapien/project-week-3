// login.jsx
import MusicPlayer from "./handleMusic/musicPlayer";
import useMusicPlayer from "./handleMusic/useMusicPlayer";
import WaveBackground from "./background";
import "./background/pomodoro.css";

const Pomodoro = () => {
  const musicSrc = "../../../public/music1.mp3";
  const { isPlaying, handlePlayPause, audioRef } = useMusicPlayer(musicSrc);

  return (
    <>
      <div className="pomodoro-background">
        <WaveBackground />

        <div>
          <MusicPlayer musicSrc={musicSrc} audioRef={audioRef} />
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Pomodoro;
