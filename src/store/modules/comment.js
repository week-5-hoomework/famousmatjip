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

//상현 delete 만들기
export const __deleteComment = createAsyncThunk('deleteComment', async (payload, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/comment/${payload}`);
    console.log(payload);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

export const __postComment = createAsyncThunk('comment/post', async (payload, thunkAPI) => {
  //thunkAPI 찾아보기
  try {
    const data = await axios.post(`http://localhost:3001/comment`, payload); //리듀서가 Thunk를 불러낸다. 5번
    return thunkAPI.fulfillWithValue(data.data); //데이터는 변수고 뒤에 있는 data는 담겨서 오는 key값이다.
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
//
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
    //상현 만듬 리듀서
    [__deleteComment.pending]: () => {},

    [__deleteComment.fulfilled]: (state, action) => {
      console.log('deleteOne fullfilled 상태', action, action.payload);
      state.comment = state.comment.filter(a => {
        return a.id !== action.payload;
      });
    },
    [__deleteComment.rejected]: () => {},
    // [__deleteComment.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    [__postComment.pending]: state => {
      state.isLoading = true; //기다리는거 4번
    },

    [__postComment.fulfilled]: (state, action) => {
      //state 는 store에 값 //action에는 성공한 payload로 보내준다. data.data.의 값이 들어있다.
      state.isLoading = false;
      state.comment.push(action.payload);
      console.log(state.comment, action.payload);
    }, // state.comment에는 data.data의 값이 들어온다.

    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
