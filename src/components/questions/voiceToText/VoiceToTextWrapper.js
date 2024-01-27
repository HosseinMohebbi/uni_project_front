import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VoiceToTextActions } from "../../../store/voiceToText.slice";
import { VoiceToTextQuestion } from "./VoiceToTextQuestion";
import { useNavigate } from "react-router";
import "../text/TextWrapper.css";

export function VoiceToTextWrapper() {
  const questions = useSelector((state) => state.voiceToText.questions);
  const voiceToTextLoading = useSelector((state) => state.voiceToText.loading);
  const dispatch = useDispatch();
  const currentIndex = useSelector(
    (state) => state.voiceToText.currentQuestion
  );
  const isFinished = useSelector((state) => state.voiceToText.isFinished);
  const currentQuestion = questions?.[currentIndex];
  const navigate = useNavigate();

  const handleOnNextQuestion = () => {
    if (currentIndex < questions?.length - 1) {
      dispatch(VoiceToTextActions.nextQuestion());
    } else {
      if (isFinished) {
        dispatch(VoiceToTextActions.clearState());
        navigate("/");
      } else {
        dispatch(VoiceToTextActions.fetchTextQuestions(1));
      }
    }
  };

  useEffect(() => {
    if (!voiceToTextLoading && !questions) {
      dispatch(VoiceToTextActions.fetchVoiceToTextQuestions(1));
    }
  }, []);

  useEffect(() => {
    if (!voiceToTextLoading && questions?.length === 0) {
      dispatch(VoiceToTextActions.clearState());
      navigate("/");
    }
  }, [voiceToTextLoading]);

  return (
    <div className="text-page">
      {voiceToTextLoading && <div>loading</div>}
      {!voiceToTextLoading && currentQuestion && (
        <VoiceToTextQuestion
          question={currentQuestion}
          onNextQuestion={handleOnNextQuestion}
        />
      )}
    </div>
  );
}
