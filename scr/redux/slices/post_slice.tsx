import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserPost } from '../../types';
import { fetchUserPostThunk } from '../../api/post.api';
export interface PostSliceInit {
  postList: UserPost[];
  status: ApiStatus;
  error: any;
}
type ApiStatus = 'Loading' | 'Success' | 'Fail';

const initialState: PostSliceInit = {
  postList: [],
  status: 'Loading',
  error: null,
};

const postSlice = createSlice({
  name: 'UserPost',
  initialState,
  reducers: {
    addNewPost: (state, action: PayloadAction<UserPost>) => {
      state.postList.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserPostThunk.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchUserPostThunk.fulfilled, (state, action) => {
        state.status = 'Success';
        if (action.payload) {
          state.postList = state.postList.concat(action.payload);
        }
      })
      .addCase(fetchUserPostThunk.rejected, (state, action) => {
        state.status = 'Fail';
        state.error = action.error.message;
      });
  },
});

export const { addNewPost } = postSlice.actions;
export default postSlice.reducer;
