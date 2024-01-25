import React from "react";
import "./VoiceToText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function VoiceToText() {
  // const play = () => {
  //   return new Audio(arcade).play;
  //   console.log("play");
  // };

  return (
    <div>
      <div className="voice-to-text-button-container">
        <button><FontAwesomeIcon icon={faPlay} /></button>
      </div>
      <div className="voice-to-text-input-container">
        <textarea name="" id="" cols="160" rows="16"></textarea>
      </div>
    </div>
  );
}

export default VoiceToText;
