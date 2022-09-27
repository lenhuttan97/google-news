import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeSlice from '../features/home/HomeSlice';
import kindSlice from '../features/home/kindSlice';
import kindItemSlice from '../features/home/kindItemSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    homeSlice:homeSlice,
    kindSlice:kindSlice,
    kindItemSlice:kindItemSlice,
  },
});
