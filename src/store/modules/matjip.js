// src/redux/modules/todosSlice.js
import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//미들웨어 청크 써서 디스패치한 함수 만들고 여기서 리듀서로 보낼거 리턴해주기 (이번에는 엑슽트라 리듀서))

const initialState = {
  matjip: [
    {
      id: 1,
      user: '개똥이',
      location: '부산',
      title: '수영 할매 국밥',
      content: '여기는 진짜 로컬 맛집..!',
    },
  ],
  isLoading: false,
  error: null,
};
//isLoading은 matjip에서 상태를 나타내는 값이고 초기값은 false입니다. 서버와 통신이 시작되면 true였다가
//통신이 끝나면(성공 또는 실패) 다시 fase로 변경됩니다.
//error는 서버와 통신이 실패한 경우 에러메세지를 보여주는데 초기에는 에러가 없어서 null입니다.

export const __getmatjip = createAsyncThunk('getmatjips', async (payload, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:3001/matjip');
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
// 비동기 처리를 위해서 async, await을 구현해야합니다.

export const __patchMatjips = createAsyncThunk('patchMatjips', async (payload, thunkAPI) => {
  console.log(payload);
  try {
    const data = await axios.patch(`http://localhost:3001/matjip/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

//진영 Thunk
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

//진영 Thunk
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



//리듀서
const matjipSlice = createSlice({
  //기본 내장 함수다 변경 x

  // 키 밸류가 함쳐져서 액션 함수가 된다
  name: 'matjip', // 이 모듈의 이름
  initialState, //초기 상태값
  reducers: {}, //이 모듈의 Reducer 로직
  extraReducers: {
    [__getmatjip.pending]: state => {
      state.isLoading = true; //네트워크 요청이 끝났으니, false로 변경
    },
    [__getmatjip.fulfilled]: (state, action) => {
      state.isLoading = false; //네트워크 요청이 끝나서 false로 변경
      state.matjip = action.payload;
    },
    [__getmatjip.rejected]: (state, action) => {
      state.isLoading = false; //에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; //catch된 error 객체를 state.error에 넣습니다.
    },
    [__patchMatjips.pending]: state => {
      state.isLoading = true;
    },
    [__patchMatjips.fulfilled]: (state, action) => {
      state.isLoading = false;
      const idx = state.matjip.findIndex(v => v.id === action.payload.id);
      state.matjip[idx] = action.payload;
      // findIndex 해당 조건문이 true일때 그것의 index를 반환시켜 주는것
      //v에는 순서대로 들어가는데 v의 id랑 우리가 가져온 id를 비교한다.
      //form에서 stat값을 항상 바라보고 있어서 state 값이 변하면 form에 있는 값도 변하다.
      //그래서 우리는 state.matjip 값만 변화시키면 되서 action.payload의 변화된 값을 state.matjip에 대체시켜준다.
    },
    [__patchMatjips.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //여기서부터 made by 진영
    [__getOne.pending]: (state) => {
      state.isLoading = true;
    },

    [__getOne.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.matjip = [...action.payload];
      console.log("fulfilled state.matjip", state.matjip);
    },

    [__getOne.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteOne.pending]: () => {},

    [__deleteOne.fulfilled]: (state, action) => {
      console.log("deleteOne fullfilled 상태", action, action.payload);
      state.matjip = state.matjip.filter((a) => {
        return a.id !== action.payload;
      });
    },

    [__deleteOne.rejected]: () => {},
  },
  //엑스트라 리듀서 설정해줘야한다.
});

export const {} = matjipSlice.actions;
// 내보낼 친구를 익스포트 해줘야하기때문에 {안에 쓴다}
// 일반 리덕스는 export를 통해서 각각의 액션 크리에이터를 내보내줬었다 이제 그 코드를
// {} 객체 안에 넣어주면 끝이다
export default matjipSlice.reducer;
//reducer는 configStore에 등록하기 위해 export default하는 것이다.
