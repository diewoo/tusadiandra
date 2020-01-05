import React from "react";

import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";

import useAudioPlayer from "./useAudioPlayer";

function Audio() {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  } = useAudioPlayer();

  return (
    <div className="player">
        <audio id="audio">
          <source src="https://docs.google.com/uc?export=download&id=1YfyZlDmbrnNvYL62eEs4pGHX2rsLBVW1" />
          {/* <source src="./tusa.mp3" /> */}
          Your browser does not support the <code>audio</code> element.
        </audio>
        <Song songName="UGO 2.0" songArtist="TUSA Karol G" />
        <div className="controls">
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
            <Play  handleClick={() => setPlaying(true)} />
          )}
          <Bar
            curTime={curTime}
            duration={duration}
            onTimeUpdate={time => setClickedTime(time)}
          />
        </div>
      </div>
  );
}

export default Audio;
