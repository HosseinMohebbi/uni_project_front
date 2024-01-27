import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TextActions} from "../../../store/text.slice";
import {TextQuestion} from "./TextQuestion";
import {TagsActions} from "../../../store/tags.slice";
import {useNavigate} from "react-router";
import "./TextWrapper.css";

export function TextWrapper() {
    const questions = useSelector((state) => state.text.questions)
    const textLoading = useSelector((state) => state.text.loading)
    const dispatch = useDispatch()
    const tagsLoading = useSelector((state) => state.tags.loading)
    const tags = useSelector((state) => state.tags.loading)
    const currentIndex = useSelector((state) => state.text.currentQuestion)
    const isFinished = useSelector((state) => state.text.isFinished)
    const currentQuestion = questions?.[currentIndex]
    const navigate = useNavigate();

    const handleOnNextQuestion = () => {
        if(currentIndex < questions?.length - 1) {
            dispatch(TextActions.nextQuestion())
        }else {
            if(isFinished) {
                dispatch(TextActions.clearState())
                navigate('/')
            }else {
                dispatch(TextActions.fetchTextQuestions(1))
            }
        }
    }


    useEffect(() => {
        if(!tagsLoading && !tags) {
            dispatch(TagsActions.fetchTags())
        }
        if(!textLoading && !questions) {
            dispatch(TextActions.fetchTextQuestions(1))
        }
    }, [])

    useEffect(() => {
        if(!textLoading && questions?.length === 0) {
            dispatch(TextActions.clearState())
            navigate("/")
        }
    }, [textLoading])

    const loading = tagsLoading || textLoading

    return (
        <div className="text-page">
            {loading && <div>loading</div>}
            {!loading && currentQuestion && <TextQuestion question={currentQuestion} onNextQuestion={handleOnNextQuestion} />}
        </div>
    );
}

