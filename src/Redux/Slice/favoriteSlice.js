import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: `favoriteReducer`,
  initialState: [],
  reducers: {
    addfavorite: (state, action) => {
      return [...state, action.payload];
    },
    removeFavorite: (state, action) => {
      return state.filter(
        (loaction) => loaction.stationName !== action.payload.stationName
      );
    },
  },
});

export const { addfavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
