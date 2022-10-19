import { configureStore } from "@reduxjs/toolkit";
import board from "../modules/board";
import counter from "../modules/counterSlice";

const store = configureStore({
  reducer: { board, counter },
});

export default store;
