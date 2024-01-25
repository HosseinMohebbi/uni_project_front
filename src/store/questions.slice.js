import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export const fetchQuestion = createAsyncThunk(
  "question/fetchQuestion",
  async (pageNumber) => {
    return 10;
  }
);

const initialState = {
  currentQuestion: undefined,
  isLoading: false,
};

export const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestion.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const {} = questionsSlice.actions;

export const questionsReducer = questionsSlice.reducer;
