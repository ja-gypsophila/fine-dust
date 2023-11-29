import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: `favorites`,
  initialState: { myFavorite: [] },
  reducers: {
    addFavorite: (state, action) => {
      state.myFavorite = [...state.myFavorite, action.payload];
    },
    removeFavorite: (state, action) => {
      state.myFavorite = state.myFavorite.filter(
        (item) => item.stationName !== action.payload.stationName
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
