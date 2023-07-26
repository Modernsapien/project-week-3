import React, { useState, useEffect } from "react";
import MusicPlayer from "./handleMusic/musicPlayer";
import useMusicPlayer from "./handleMusic/useMusicPlayer";
import WaveBackground from "./background";
import "./background/pomodoro.css";
import quotesData from "./quotes/quotes.json";
import "./styles.css"

const Pomodoro = () => {
  const musicSrc = "../../../public/music1.mp3";
  const { isPlaying, handlePlayPause, audioRef } = useMusicPlayer(musicSrc);
  const [isWaveAnimationPaused, setWaveAnimationPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState(1500);
  const [intervalId, setIntervalId] = useState(null);
  const [quotes, setQuotes] = useState(quotesData);
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const handleWaveAnimationPause = () => {
    setWaveAnimationPaused((prevIsPaused) => !prevIsPaused);
  };

  const updateTimeDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    document.getElementById("time").innerText = display;
  };

  const startStopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const id = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft((prevTime) => prevTime - 1);
        } else {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      }, 1000);
      setIntervalId(id);
    }
  };

  const setTime = (minutes) => {
    setTimeLeft(minutes * 60);
    startStopTimer();
  };

  const showNextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  useEffect(() => {
    updateTimeDisplay();

    const quoteIntervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);

    return () => {
      clearInterval(quoteIntervalId);
    };
  }, [timeLeft, quotes.length]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      <div className={`pomodoro-background ${isWaveAnimationPaused ? "paused" : ""}`}>
         <WaveBackground paused={isWaveAnimationPaused} />
        <div>
          <MusicPlayer musicSrc={musicSrc} audioRef={audioRef} />
          <button className="pomo-button" onClick={handlePlayPause}>
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
          <button className="pomo-button" onClick={handleWaveAnimationPause}>
            {isWaveAnimationPaused ? "Resume Waves" : "Pause Waves"}
          </button>
        </div>
        
        <div className="timer">
          <div className="buttons">
            <button className="pomo-button" onClick={() => setTime(25)}>Pomodoro</button>
            <button className="pomo-button" onClick={() => setTime(5)}>Short Break</button>
            <button className="pomo-button" onClick={() => setTime(15)}>Long Break</button>
          </div>
          <div className="display">
            <span id="time">25:00</span>
          </div>
          <div className="controls">
            <button className="pomo-button" id="startStop" onClick={startStopTimer}>
              {intervalId ? "Stop" : "Start"}
            </button>
          </div>
        </div>
        <div className="carousel">
          <div id="quoteCarousel" onClick={showNextQuote}>
            <div
              className="quote"
              dangerouslySetInnerHTML={{ __html: quotes[currentIndex].quote }}
            ></div>
            <div
              className="quote"
              dangerouslySetInnerHTML={{ __html: quotes[currentIndex].author }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pomodoro;
