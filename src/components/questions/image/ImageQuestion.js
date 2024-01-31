import TextTags from "../../../pages/dataSet/TextTags";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { client, getHeaders } from "../../../api/client";
import { useNavigate } from "react-router";
import "./ImageQuestion.css";
import Spinner from "../../Spinner";

export const ImageQuestion = (props) => {
  const [question, setQuestion] = useState(undefined);
  const [questionLoading, setQuestionLoading] = useState(false);
  const tags = useSelector((state) => state.tags.tags);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestion() {
      setQuestion(undefined);
      setQuestionLoading(true);
      try {
        const response = await client.get(`/gallery/${props.question.id}`, {
          headers: getHeaders(),
        });
        setQuestion(response.data.data.gallery);
      } catch (error) {
        console.error("fetchQuestion error", error);
      }
      setQuestionLoading(false);
    }

    fetchQuestion();
  }, [props.question.id]);

  const handleOnTagClick = (tag) => {
    if (selectedTags.includes(tag.id)) {
      setSelectedTags(selectedTags.filter((id) => id != tag.id));
    } else {
      setSelectedTags([...selectedTags, tag.id]);
    }
  };

  const tagQuestion = async () => {
    setLoading(true);
    await client.post(
      `/gallery/${props.question.id}/data-set`,
      {
        tagIds: selectedTags,
      },
      {
        headers: getHeaders(),
      }
    );
    setSelectedTags([]);
    setLoading(false);
  };

  const handleOnConfirmClick = async () => {
    try {
      await tagQuestion();
      props.onNextQuestion();
    } catch (error) {
      alert("error");
    }
  };

  const handleOnFinishClick = async () => {
    if (selectedTags) {
      try {
        await tagQuestion();
      } catch (error) {
        alert("error");
      }
    }
    navigate("/");
  };

  // if (questionLoading) {
  //   return <Spinner loading={loading} />;
  // }

  return (
    <>
      <div className="set-image-wrapper">
        <div className="image-container">
          <img src={question?.image} alt={question?.title} />
        </div>
      </div>
      <div className="tags-container">
        {tags.map((tag) => {
          return (
            <TextTags
              key={tag.id}
              tag={tag}
              isSelected={selectedTags.includes(tag.id)}
              onClick={handleOnTagClick}
            />
          );
        })}
      </div>
      <div className="buttons-container">
        <button
          className="submit-button button"
          onClick={handleOnConfirmClick}
          disabled={selectedTags.length === 0 || loading}
        >
          تایید
        </button>
        <button
          className="submit-button button"
          onClick={handleOnFinishClick}
          disabled={loading}
        >
          اتمام
        </button>
      </div>
    </>
  );
};
