// src/redux/modules/todosSlice.js //액션 벨류 , 크리애이터 부분이 없어졌다
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  board: [],
  isLoading: false,
  error: null,
};

export const __getCounter = createAsyncThunk(
  "board/postOne",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/matzip");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const __postOne = createAsyncThunk(
  //프로미스를 다룰때 아싱크 어웨이 알아보기..
  "board/postOne",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhose:3001/matjip");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

//리듀서
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = boardSlice.actions;

export default boardSlice.reducer;
