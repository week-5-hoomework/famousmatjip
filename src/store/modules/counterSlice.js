import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// 완성된 Thunk 함수
export const __getCounter = createAsyncThunk(
  "counter/getCounter",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/matjip"); //countslice다시해보기
      return thunkAPI.fulfillWithValue(data.data); //성공했으면
    } catch (error) {
      //실패하면
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __postCounter = createAsyncThunk(
  "postCounter/getPostCounter",
  async (todo, thunkAPI) => {
    // console.log(payload);
    // todo가 payload이다...그래서 밑에 ,todo적는것임
    try {
      const data = await axios.post("http://localhost:3001/matjip", todo);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//이거만들기
const initialState = {
  number: [],
  isLoading: false,
  error: "",
};

//createsSlice API의 뼈대 필수로 name, initialState, reducers를 적어줘야한다
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [__getCounter.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getCounter.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.number = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getCounter.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.error; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__postCounter.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.//post는 리턴값이 없다.
    },
    [__postCounter.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.number.push(action.payload); // state.number에 action.payload를 넣어준다 push로 arry.push()
      console.log(action.payload);
    },
    [__postCounter.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.error; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

//post는 좀 다르다
//팬딩,풀필드,리잭트
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
