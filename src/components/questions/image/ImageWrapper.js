import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ImageActions} from "../../../store/image.slice";
import { ImageQuestion } from "./ImageQuestion";
import {TagsActions} from "../../../store/tags.slice";
import {useNavigate} from "react-router";
import "./ImageWrapper.css";
import Spinner from "../../Spinner";

export function ImageWrapper() {
    const questions = useSelector((state) => state.image.questions)
    const imageLoading = useSelector((state) => state.image.loading)
    const dispatch = useDispatch()
    const tagsLoading = useSelector((state) => state.tags.loading)
    const tags = useSelector((state) => state.tags.loading)
    const currentIndex = useSelector((state) => state.image.currentQuestion)
    const isFinished = useSelector((state) => state.image.isFinished)
    const currentQuestion = questions?.[currentIndex]
    const navigate = useNavigate();

    const handleOnNextQuestion = () => {
        if(currentIndex < questions?.length - 1) {
            dispatch(ImageActions.nextQuestion())
        }else {
            if(isFinished) {
                dispatch(ImageActions.clearState())
                navigate('/')
            }else {
                dispatch(ImageActions.fetchImageQuestions(1))
            }
        }
    }


    useEffect(() => {
        if(!tagsLoading && !tags) {
            dispatch(TagsActions.fetchTags())
        }
        if(!imageLoading && !questions) {
            dispatch(ImageActions.fetchImageQuestions(1))
        }
    }, [])

    useEffect(() => {
        if(!imageLoading && questions?.length === 0) {
            dispatch(ImageActions.clearState())
            navigate("/")
        }
    }, [imageLoading])

    const loading = tagsLoading || imageLoading

    return (
        <div className="text-page">
            {/* {loading && <Spinner loading={loading}/>} */}
            {!loading && currentQuestion && <ImageQuestion question={currentQuestion} onNextQuestion={handleOnNextQuestion} />}
        </div>
    );
}

