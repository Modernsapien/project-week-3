import React from "react";

export default function WaveBackground({ paused }) {
  return (
    <>
      <div className={`wave ${paused ? "paused" : ""}`}></div>
      <div className={`wave ${paused ? "paused" : ""}`}></div>
      <div className={`wave ${paused ? "paused" : ""}`}></div>
    </>
  );
}
