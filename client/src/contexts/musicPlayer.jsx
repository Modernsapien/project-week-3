// MusicPlayer.js
import React from "react";

const MusicPlayer = ({ musicSrc, audioRef }) => {
  return (
    <div>
      <audio ref={audioRef} src={musicSrc} />
      {/* You can add any additional UI for the music player here */}
    </div>
  );
};

export default MusicPlayer;
