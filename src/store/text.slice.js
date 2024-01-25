import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";


const textInitialState = {
    loading: false,
    questions: undefined,
    currentPage: undefined,
    currentQuestion: 1,
}

const textSlice = createSlice({
    name: "Text",
    initialState: textInitialState,
    reducers: {
        fetchQuestions: (state, action) => {
            state.loading = true
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setQuestions: (state, action) => {
            state.questions = action.payload.questions;
            state.currentPage = action.payload.page;
        }
    }

})


export const TextActions = textSlice.actions;
export const textReducer = textSlice.reducer;