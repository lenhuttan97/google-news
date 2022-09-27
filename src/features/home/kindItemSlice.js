import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getKindItem } from './HomeAPI';
import business from '../data-news/business.json'



const initialState = {
  data: business,
  status: 'idle',
};
export const KindItem = createAsyncThunk(
  'kind/KindItem',
  async (pageNumber) => {
    const response = await getKindItem(pageNumber)
    const jsonData =  response.json();
    // console.log(jsonData);
    return jsonData;
  }
);

export const kindItemSlice = createSlice({
    name: 'kindItemSlice',
    initialState,
  extraReducers: (builder) => {
    builder
      .addCase(KindItem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(KindItem.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export const selectDataKindItem = (state) => state.kindItemSlice.data;

export default kindItemSlice.reducer;