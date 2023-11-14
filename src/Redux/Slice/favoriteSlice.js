import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: `favoriteReducer`,
  initialState: [],
  reducers: {
    add: (state, action) => {
      state;
    },
    remove: (state, action) => {
      state;
    },
  },
});

export const {} = favoriteSlice.actions;

export default favoriteSlice.reducer;
