// src/redux/modules/todosSlice.js //액션 벨류 , 크리애이터 부분이 없어졌다
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: [],
};

//리듀서
const boardSlice = createSlice({
  //기본 내장 함수다 변경 x
  // 키 밸류가 함쳐져서 액션 함수가 된다 // 액션벨류, 액션크리에이터, 리듀서가 하나로 합쳐졌습니다
  // 이제 우리는 Slice라는 api를 사용합니다
  name: "board", // 이 모듈의 이름
  initialState, // 이 모듈의 초기상태 값
  reducers: {}, // 이 모듈의 Reducer 로직
  // 리듀서이면서 액션 크리에이터가 된다는 점이 가장 중요한 부분이다!
  // 액션 밸류까지 함수의 이름을 따서 자동으로 만들어진다
  // 그래서 우리는 리듀서만 만들면 된다
});

export const {} = boardSlice.actions;
// 내보낼 친구를 익스포트 해줘야하기때문에 {안에 쓴다}
// 일반 리덕스는 export를 통해서 각각의 액션 크리에이터를 내보내줬었다 이제 그 코드를
// {} 객체 안에 넣어주면 끝이다
export default boardSlice.reducer;
