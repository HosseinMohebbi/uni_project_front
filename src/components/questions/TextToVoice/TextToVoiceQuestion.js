import { useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import { client, getHeaders } from "../../../api/client";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faDownload } from "@fortawesome/free-solid-svg-icons";
import "./TextToVoiceQuestion.css";

export const TextToVoiceQuestion = (props) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();
  const mediaRecorderRef = useRef();

  //   useEffect(() => {
  //     async function fetchQuestion() {
  //       setQuestion(undefined);
  //       setQuestionLoading(true);
  //       try {
  //         const response = await client.get(`/newsletters/${props.question.id}`, {
  //           headers: getHeaders(),
  //         });
  //         setQuestion(response.data.data.newsletter);
  //       } catch (error) {
  //         console.error("fetchQuestion error", error);
  //       }
  //       setQuestionLoading(false);
  //     }

  //     fetchQuestion();
  //   }, [props.question.id]);

  //   const handleOnTagClick = (tag) => {
  //     if (selectedTags.includes(tag.id)) {
  //       setSelectedTags(selectedTags.filter((id) => id != tag.id));
  //     } else {
  //       setSelectedTags([...selectedTags, tag.id]);
  //     }
  //   };

  //   const tagQuestion = async () => {
  //     setLoading(true);
  //     await client.post(
  //       `/question/${props.question.id}/listening-answer`,
  //       {
  //         tagIds: selectedTags,
  //       },
  //       {
  //         headers: getHeaders(),
  //       }
  //     );
  //     setSelectedTags([]);
  //     setLoading(false);
  //   };

  const handleOnConfirmClick = async (e) => {
    try {
      const formData = new FormData();
      formData.append("answer", data.blob, data.fileName);
      console.log(formData);
      await client.post(
        `/questions/${props.question.id}/speaking-answer`,
        formData,
        {
          headers: getHeaders(),
        }
      );
      console.log("value:", value);
      setData(undefined);
      props.onNextQuestion();
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  //   const handleOnFinishClick = async () => {
  //     if (selectedTags) {
  //       try {
  //         await tagQuestion();
  //       } catch (error) {
  //         alert("error");
  //       }
  //     }
  //     navigate("/");
  //   };

  const handleOnStartClicked = () => {
    setIsRecording(true);
    setData(undefined);
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        function handleDataAvailable(event) {
          const audioBlob = new Blob([event.data], { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(audioBlob);
          const fileName = `${props.question.id}-${Date.now().toString()}.webm`;
          console.log("audio blobl", audioBlob);
          setData({
            fileName: fileName,
            blob: audioBlob,
            url: audioUrl,
          });
        }

        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
        mediaRecorderRef.current.start();
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
        setIsRecording(false);
      });
  };

  const handleOnStopClicked = () => {
    setIsRecording(false);
    mediaRecorderRef.current.stop();
  };

  const handleOnDownloadClicked = () => {
    if (!data.url) {
      return;
    }
    // Optionally, create a download link:
    const link = document.createElement("a");
    link.href = data.url;
    link.download = data.fileName;
    link.click();
  };

  return (
    <>
      <div className="text-to-voice-wrapper">
        <div className="text-to-voice-container">
          {/* <div className="question-description-container"> */}
            {props.question?.description}
          {/* </div> */}
        </div>
      </div>
      <div className="voice-buttons-container">
      <button
          onClick={handleOnDownloadClicked}
          disabled={!data?.url}
          className="voice-button"
        >
          <FontAwesomeIcon icon={faDownload} style={{ color: "#219ebc" }} />
        </button>
        <button
          onClick={handleOnStopClicked}
          disabled={!isRecording}
          className="voice-button"
        >
          <FontAwesomeIcon icon={faPause} style={{ color: "#219ebc" }} />
        </button>
       
        <button
          onClick={handleOnStartClicked}
          disabled={isRecording}
          className="voice-button"
        >
          <FontAwesomeIcon icon={faPlay} style={{ color: "#219ebc" }} />
        </button>
      </div>
      <div className="buttons-container">
        <button
          className="submit-button button"
          onClick={handleOnConfirmClick}
          disabled={data == null || loading}
        >
          ارسال
        </button>
        {/* <button
          className="submit-button button"
          onClick={handleOnFinishClick}
          disabled={loading}
        >
          اتمام
        </button> */}
      </div>
    </>
  );
};
