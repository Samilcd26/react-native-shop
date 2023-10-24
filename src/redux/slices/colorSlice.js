import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

//A function to generate random RGB values
const randomRgb = () => {
  return `rgb(256,255,9)`;
};

//State slice
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state) => {
      state.value = [...state.value, randomRgb()];
    },
  },
});

// Action creators are automatically generated for each case reducer function 
export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;