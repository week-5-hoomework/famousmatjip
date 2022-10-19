import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  matjip: [
    {
      id: 0,
      user: "진영",
      location: "부산",
      title: "수영 할매 국밥",
      content: "여기는 진짜 로컬 맛집..!",
    },
  ],
  isLoading: false,
  error: null,
};

//Thunk함수
export const __getOne = createAsyncThunk(
  "getOne", //이부분 matjip/getOne 해야하는지 ?
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/matjip");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteOne = createAsyncThunk(
  "deleteOne",
  async (payload, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/matjip/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code); //error라고 해야하나?
    }
  }
);

/* export const __filterOne = createAsyncThunk(
  "filterOne",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/matjip");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
 */
//리듀서
const homeSlice = createSlice({
  name: "matjip",
  initialState,
  reducers: {
    //리듀서에 뭐라고 적는지 모르곘다
    // getOne: (state, action) => {
    //   console.log(state.matjip, action.payload);
    // },
  },
  extraReducers: {
    //리스트 가져오기
    [__getOne.pending]: (state) => {
      state.isLoading = true;
    },

    //원본 __getOne.fulfilled 원본
    [__getOne.fulfilled]: (state, action) => {
      console.log("fulfilled 상태 action.payload", action.payload);
      state.isLoading = false;
      state.matjip = [...action.payload];
      console.log("fulfilled state.matjip", state.matjip);
    },

    /*     //수정본 __getOne.fulfilled 수정본
    [__getOne.fulfilled]: (state, action) => {
      console.log("fulfilled 상태", action.payload, state.matjip);
      state.isLoading = false;
      state.matjip = state.matjip.filter((a) => {
        a.location == action.payload.location;
      });
    }, */

    [__getOne.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //리스트에서 하나 삭제하기
    [__deleteOne.pending]: () => {},

    [__deleteOne.fulfilled]: (state, action) => {
      console.log("deleteOne fullfilled 상태", action, action.payload);
      state.matjip = state.matjip.filter((a) => {
        return a.id !== action.payload;
      });
    },

    [__deleteOne.rejected]: () => {},

    //필터 건져 리스트 가져오기
    /*     [__filterOne.pending]: (state) => {
      state.isLoading = true;
    },

    [__filterOne.fulfilled]: (state, action) => {
      console.log("fulfilled 상태", action.payload, state.matjip);
      state.isLoading = false;
      state.matjip = [...action.payload];
    },

    [__filterOne.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    }, */
  },
});

export const { getOne } = homeSlice.actions;
export default homeSlice.reducer;
