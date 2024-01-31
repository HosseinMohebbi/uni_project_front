import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client, getHeaders } from "../api/client";

const fetchVoiceToTextQuestions = createAsyncThunk(
  "VoiceToText/FetchVoiceToTextQuestions",
  async (page) => {
    const response = await client.get(
      `/questions/listening-questions?page=${page}`,
      {
        headers: getHeaders(),
      }
    );
    return response.data;
  }
);

const voiceToTextInitialState = {
  loading: false,
  questions: undefined,
  currentQuestion: 0,
  isFinished: false,
};

const voiceToTextSlice = createSlice({
  name: "voiceToText",
  initialState: voiceToTextInitialState,
  reducers: {
    nextQuestion: (state, action) => {
      state.currentQuestion += 1;
    },
    clearState: (state, action) => {
      return voiceToTextInitialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVoiceToTextQuestions.pending, (state, action) => {
      state.loading = true;
      state.currentQuestion = 0;
      state.isFinished = false;
    });
    builder.addCase(fetchVoiceToTextQuestions.fulfilled, (state, action) => {
      state.questions = action.payload.listeningQuestions;
      state.loading = false;
      state.currentQuestion = 0;
      state.isFinished =
        action.payload.listeningQuestions.length < action.payload.meta.pageSize;
    });
    builder.addCase(fetchVoiceToTextQuestions.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const VoiceToTextActions = {
  ...voiceToTextSlice.actions,
  fetchVoiceToTextQuestions,
};
export const voiceToTextReducer = voiceToTextSlice.reducer;
