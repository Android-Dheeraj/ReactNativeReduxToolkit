import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './axios.api';
import { UserPost } from '../types';

export const fetchUserPostThunk = createAsyncThunk<UserPost[]>(
  'fetch_UserPost',
  async () => {
    try {
      const response = await instance.get('/posts');
      console.log('response', JSON.stringify(response, null, 4));

      const postList: UserPost[] = response.data;
      return postList;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return error.request;
      } else {
        return error.message;
      }
    }
  },
);
