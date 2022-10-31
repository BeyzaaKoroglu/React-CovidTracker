import { createSlice } from "@reduxjs/toolkit";
import { getGlobalData } from "./services";

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    dates: [],
    globalDailyInfecteds: [],
    globalDailyDeaths: [],
  },
  reducers: {},
  extraReducers: {
    [getGlobalData.fulfilled]: (state, action) => {
      state.dates = action.payload.map((day) => day.reportDate);
      state.globalDailyInfecteds = action.payload.map(
        (day) => day.confirmed.total
      );
      state.globalDailyDeaths = action.payload.map((day) => day.deaths.total);
    },
  },
});

export default covidSlice.reducer;
