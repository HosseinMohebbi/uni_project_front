import TextTags from "../../../pages/dataSet/TextTags";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { client, getHeaders } from "../../../api/client";
import { useNavigate } from "react-router";
import "./VociceToTextQuestion.css"

export const VoiceToTextQuestion = (props) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    console.log("value:", value);

  };

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
    if(value.trim().length === 0)
      return
    try {
      await client.post(`/questions/${props.question.id}/listening-answer`, {
        answer: value
      }, {
        headers: getHeaders()
      })
      setValue("")
      props.onNextQuestion();
    } catch (error) {
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

  return (
    <>
      <div className="voice-container">
        <h2 className="voice-title-container">{props.question?.title}</h2>
        <div className="question-description-container">
          {props.question?.description}
        </div>
      </div>

      <div className="tags-container">
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
