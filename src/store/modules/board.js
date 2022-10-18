// src/redux/modules/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';
//미들웨어 청크 써서 디스패치한 함수 만들고 여기서 리듀서로 보낼거 리턴해주기 (이번에는 엑슽트라 리듀서))
const initialState = {
  board: [],
};

//리듀서
const boardSlice = createSlice({
  //기본 내장 함수다 변경 x
  // 키 밸류가 함쳐져서 액션 함수가 된다

  name: 'board',
  initialState,
  reducers: {
    addText: (state, action) => {
      state.text = state.text + action.payload;
    },
  },
  //엑스트라 리듀서 설정해줘야한다.
});

export const { addText } = boardSlice.actions;
// 내보낼 친구를 익스포트 해줘야하기때문에 {안에 쓴다}
export default boardSlice.reducer;
