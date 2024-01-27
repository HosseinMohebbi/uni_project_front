import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client, getHeaders } from "../api/client";

const fetchTextToVoiceQuestions = createAsyncThunk(
  "VoiceToText/TextToVoiceInitialState",
  async (page) => {
    const response = await client.get(
      `/questions/speaking-questions?page=${page}`,
      {
        headers: getHeaders(),
      }
    );
    return response.data;
  }
);

const TextToVoiceInitialState = {
  loading: false,
  questions: undefined,
  currentQuestion: 0,
  isFinished: false,
};

const textToVoicetSlice = createSlice({
  name: "textToVoice",
  initialState: TextToVoiceInitialState,
  reducers: {
    nextQuestion: (state, action) => {
      state.currentQuestion += 1;
    },
    clearState: (state, action) => {
      return TextToVoiceInitialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTextToVoiceQuestions.pending, (state, action) => {
      state.loading = true;
      state.currentQuestion = 0;
      state.isFinished = false;
    });
    builder.addCase(fetchTextToVoiceQuestions.fulfilled, (state, action) => {
      let questions = state.questions ?? [];
      state.questions = action.payload.speakingQuestions;
      state.loading = false;
      state.currentQuestion = 0;
      state.isFinished =
        action.payload.speakingQuestions.length < action.payload.meta.pageSize;
    });
    builder.addCase(fetchTextToVoiceQuestions.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const TextToVoiceActions = {
  ...textToVoicetSlice.actions,
  fetchTextToVoiceQuestions,
};
export const textToVoiceReducer = textToVoicetSlice.reducer;
