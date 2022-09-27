import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNewsTopHeadlines } from './HomeAPI';
import data from '../data-news/general.json'



const initialState = {
  data: data,
  status: 'idle',
};
export const newsTopHeadlines = createAsyncThunk(
  'home/getNewsTopHeadlines',
  async (pageNumber) => {
    const response = await getNewsTopHeadlines(pageNumber)
    const jsonData =  response.json();
   // console.log(jsonData);
    return jsonData;
  }
);

export const homeSlice = createSlice({
    name: 'TopHeadlines',
    initialState,
  extraReducers: (builder) => {
    builder
      .addCase(newsTopHeadlines.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(newsTopHeadlines.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export const selectdata = (state) => state.homeSlice.data;

export default homeSlice.reducer;
