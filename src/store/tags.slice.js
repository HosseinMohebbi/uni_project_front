import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client, getHeaders} from "../api/client";

const fetchTags = createAsyncThunk("Tags/FetchTags", async () => {
  const response = await client.get(`/tags`, {
    headers: getHeaders(),
  })
  return response.data
})


const tagsInitialState = {
  loading: false,
  tags: undefined,
}

const tagsSlice = createSlice({
  name: "Text",
  initialState: tagsInitialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags = action.payload.tags
      state.loading = false
    })
    builder.addCase(fetchTags.rejected, (state, action) => {
      state.loading = false
    })
  }

})


export const TagsActions = {...tagsSlice.actions, fetchTags}
export const tagsReducer = tagsSlice.reducer;
