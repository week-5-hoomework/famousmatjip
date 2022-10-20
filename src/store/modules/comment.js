import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

export const __getComment = createAsyncThunk('getComment', async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`http://localhost:3001/comment`);

    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __editComment = createAsyncThunk('__editComment', async (payload, thunkAPI) => {
  try {
    await axios.patch(`http://localhost:3001/comment/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: state => {
      state.isLoading = true;
    },

    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },

    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__editComment.pending]: state => {
      state.isLoading = true;
    },

    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.comment.findIndex(a => a.matjipId === action.payload.matjipId);
      state.comment[idx] = action.payload;
    },

    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
