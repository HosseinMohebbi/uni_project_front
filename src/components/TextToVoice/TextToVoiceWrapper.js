import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextToVoiceActions } from "../../store/TextToVoice.slice";
import { TextToVoiceQuestion } from "./TextToVoiceQuestion";
import { useNavigate } from "react-router";
import "../questions/text/TextWrapper.css";

export function TextToVoiceWrapper() {
  const questions = useSelector((state) => state.textToVoice.questions);
  const textToVoiceLoading = useSelector((state) => state.textToVoice.loading);
  const dispatch = useDispatch();
  const currentIndex = useSelector(
    (state) => state.textToVoice.currentQuestion
  );
  const isFinished = useSelector((state) => state.textToVoice.isFinished);
  const currentQuestion = questions?.[currentIndex];
  const navigate = useNavigate();

  const handleOnNextQuestion = () => {
    if (currentIndex < questions?.length - 1) {
      dispatch(TextToVoiceActions.nextQuestion());
    } else {
      if (isFinished) {
        dispatch(TextToVoiceActions.clearState());
        navigate("/");
      } else {
        dispatch(TextToVoiceActions.fetchTextToVoiceQuestions(1));
      }
    }
  };

  useEffect(() => {
    if (!textToVoiceLoading && !questions) {
      dispatch(TextToVoiceActions.fetchTextToVoiceQuestions(1));
    }
  }, []);

  useEffect(() => {
    if (!textToVoiceLoading && questions?.length === 0) {
      dispatch(TextToVoiceActions.clearState());
      navigate("/");
    }
  }, [textToVoiceLoading]);

  return (
    <div className="text-page">
      {textToVoiceLoading && <div>loading</div>}
      {!textToVoiceLoading && currentQuestion && (
        <TextToVoiceQuestion
          question={currentQuestion}
          onNextQuestion={handleOnNextQuestion}
        />
      )}
    </div>
  );
}
