import { createSlice } from "@reduxjs/toolkit";

const savedMemos = JSON.parse(localStorage.getItem("savedMemos")) || [];

const memoSlice = createSlice({
  name: "memosSlice",
  initialState: savedMemos,
  reducers: {
    addMemo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, important: false });
      localStorage.setItem("savedMemos", JSON.stringify(state));
    },
    toggleImportantMemo: (state, action) => {
      const memo = state.find((m) => m.id === action.payload);
      if (memo) memo.important = !memo.important;
      localStorage.setItem("savedMemos", JSON.stringify(state));
    },
    deleteMemo: (state, action) => {
      const newState = state.filter((m) => m.id !== action.payload);
      localStorage.setItem("savedMemos", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addMemo, toggleImportantMemo, deleteMemo } = memoSlice.actions;
export default memoSlice.reducer;
