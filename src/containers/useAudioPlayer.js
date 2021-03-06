import { useState, useEffect } from "react";

export default function useAudioPlayer() {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.getElementById("audio");
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };
    const setAudioTime = () => setCurTime(audio.currentTime);
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);
    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  });
  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  };
}
