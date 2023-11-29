import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStation = createAsyncThunk(
  "GET/STATION",
  async (sidoName, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?`,
        {
          params: {
            serviceKey:
              "MC+2+5MdW+Bsybf6/Gq+uvRPph6nN+BjHzyBH4zTP555b5P6zdHc2nBidBWmb9FS4hipOh1ejgnkIlvYHk1dgA==",
            returnType: "json",
            numOfRows: "100",
            pageNo: "1",
            ver: "1.0",
            sidoName: sidoName,
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const stationSlice = createSlice({
  name: "station",
  initialState: { data: [], isLoading: false, error: null },
  reducers: {
    setStation: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStation.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getStation.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getStation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setStation, searchSidoName } = stationSlice.actions;
export default stationSlice.reducer;
