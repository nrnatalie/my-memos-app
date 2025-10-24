import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./memoSlice";

const store = configureStore({
  reducer: {
    memosState: memoReducer,
  },
});
export default store;
