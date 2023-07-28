// MusicPlayer.js
import React from "react";

const MusicPlayer = ({ musicSrc, audioRef }) => {
  return (
    <div>
      <audio ref={audioRef} src={musicSrc} />
    </div>
  );
};

export default MusicPlayer;
