import React from "react";
import moment from "moment";
import { PlayCircleOutline } from "@material-ui/icons";

export default function Play(props) {
  const { handleClick } = props;
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <h2 className="song__artist_first">Clase 1</h2>
      <h2 className="song__artist_second">
        Medidas de dispersión,posición y de forma 
      </h2>
      <h2 className="song__artist">Conceptos Básicos iniciales 1</h2>
      <h2 className="song__artist">03m 21s</h2>
      {/* <h2>{formatDuration(duration)}</h2> */}
      <div className="song___audio">
        <PlayCircleOutline />
        <h2>Reproducir Audio</h2>
      </div>
    </button>
  );
}
