import { createSlice } from "@reduxjs/toolkit";

export const searchSidoSlice = createSlice({
  name: "search",
  initialState: { data: [] },
  reducers: {
    setSearchSidoName: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSearchSidoName } = searchSidoSlice.actions;
export default searchSidoSlice.reducer;
