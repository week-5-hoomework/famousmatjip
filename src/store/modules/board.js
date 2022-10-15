// src/redux/modules/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [],
};

//리듀서
const boardSlice = createSlice({
  //기본 내장 함수다 변경 x
  // 키 밸류가 함쳐져서 액션 함수가 된다

  name: "board",
  initialState,
  reducers: {},
});

export const {} = boardSlice.actions;
// 내보낼 친구를 익스포트 해줘야하기때문에 {안에 쓴다}
export default boardSlice.reducer;
