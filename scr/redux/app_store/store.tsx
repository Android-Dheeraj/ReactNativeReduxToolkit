import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from '../slices';

const store = configureStore({
  reducer: {
    postSlice: postSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
