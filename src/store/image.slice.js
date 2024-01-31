import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client, getHeaders } from "../api/client";

const fetchImageQuestions = createAsyncThunk(
  "Image/FetchImageQuestions",
  async (page) => {
    const response = await client.get(`/gallery?page=${page}`, {
      headers: getHeaders(),
    });
    return response.data;
  }
);

const imageInitialState = {
  loading: false,
  questions: undefined,
  currentQuestion: 0,
  tagLoading: false,
  isFinished: false,
};

const imageSlice = createSlice({
  name: "image",
  initialState: imageInitialState,
  reducers: {
    nextQuestion: (state, action) => {
      state.currentQuestion += 1;
    },
    clearState: (state, action) => {
      return imageInitialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImageQuestions.pending, (state, action) => {
      state.loading = true;
      state.currentQuestion = 0;
      state.isFinished = false;
    });
    builder.addCase(fetchImageQuestions.fulfilled, (state, action) => {
      state.questions = action.payload.gallery;
      state.loading = false;
      state.currentQuestion = 0;
      state.isFinished =
        action.payload.gallery.length < action.payload.meta.pageSize;
    });
    builder.addCase(fetchImageQuestions.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const ImageActions = { ...imageSlice.actions, fetchImageQuestions };
export const imageReducer = imageSlice.reducer;
