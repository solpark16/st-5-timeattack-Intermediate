// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.count += +action.payload;
    },
    removeCount: (state, action) => {
      state.count -= +action.payload;
    },
  },
});

export const { addCount, removeCount } = calculatorSlice.actions;
export default calculatorSlice.reducer;
