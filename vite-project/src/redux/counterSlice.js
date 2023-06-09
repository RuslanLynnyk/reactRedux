import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const {payload} = action;
      console.log("action",action)
      state.value = state.value + + payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions


export default counterSlice.reducer

