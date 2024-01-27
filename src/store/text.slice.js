import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client, getHeaders} from "../api/client";

const fetchTextQuestions = createAsyncThunk("Text/FetchTextQuestions", async (page) => {
    const response = await client.get(`/newsletters?page=${page}`, {
        headers: getHeaders(),
    })
    return response.data
})


const textInitialState = {
    loading: false,
    questions: undefined,
    currentQuestion: 0,
    tagLoading: false,
    isFinished: false,
}

const textSlice = createSlice({
    name: "Text",
    initialState: textInitialState,
    reducers: {
        nextQuestion: (state, action) => {
            state.currentQuestion += 1
        },
        clearState: (state, action) => {
            return  textInitialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTextQuestions.pending, (state, action) => {
            state.loading = true
            state.currentQuestion = 0
            state.isFinished = false
        })
        builder.addCase(fetchTextQuestions.fulfilled, (state, action) => {
            let questions = state.questions ?? [];
            state.questions = action.payload.newsletters
            state.loading = false
            state.currentQuestion = 0;
            state.isFinished = action.payload.newsletters.length < action.payload.meta.pageSize
        })
        builder.addCase(fetchTextQuestions.rejected, (state, action) => {
            state.loading = false
        })
    }

})


export const TextActions = {...textSlice.actions, fetchTextQuestions};
export const textReducer = textSlice.reducer;
