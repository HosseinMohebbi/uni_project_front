import { useState } from "react";
import { client, getHeaders } from "../../../api/client";
import "./VociceToTextQuestion.css";

export const VoiceToTextQuestion = (props) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleOnConfirmClick = async (e) => {
    if (value.trim().length === 0) return;
    try {
      await client.post(
        `/questions/${props.question.id}/listening-answer`,
        {
          answer: value,
        },
        {
          headers: getHeaders(),
        }
      );
      setValue("");
      props.onNextQuestion();
    } catch (error) {
      alert("error");
    }
  };

  return (
    <>
      <div className="voice-container">
        <audio
          id="audio"
          src={props.question?.audio}
          controls
          muted={true}
          download=""
        >
          <source src={props.question?.audio} type="audio/mp3" />
        </audio>
      </div>
      <div className="voice-to-text-answer-container">
        <textarea
          name=""
          id=""
          cols="160"
          rows="16"
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="buttons-container">
        <button
          className="submit-button button"
          onClick={handleOnConfirmClick}
          disabled={value.length === 0 || loading}
        >
          ارسال
        </button>
      </div>
    </>
  );
};
