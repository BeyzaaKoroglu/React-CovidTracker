import { createSlice } from "@reduxjs/toolkit";
import {
  getCountries,
  getCountryDetail,
  getGlobalData,
  getGlobalTotal,
} from "./services";

const setDetail = (data) => {
  return [
    {
      id: "Infected",
      value: data.confirmed.value,
      lastUpdate: data.lastUpdate,
      color: "#b0d7fd",
      "color-2": "#576bfe",
    },
    {
      id: "Deaths",
      value: data.deaths.value,
      lastUpdate: data.lastUpdate,
      color: "#f4d6d6",
      "color-2": "#f96a6a",
    },
    {
      id: "Recovered",
      value: data.confirmed.value - data.deaths.value,
      lastUpdate: data.lastUpdate,
      color: "#ddf6e2",
      "color-2": "#6efa70",
    },
  ];
};
export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    dates: [],
    globalDailyInfecteds: [],
    globalDailyDeaths: [],
    countries: [],
    selectedCountry: "",
    CasesDetail: [],
  },
  reducers: {
    setSelectedCountry: {
      reducer: (state, action) => {
        state.selectedCountry = action.payload;
      },
    },
  },
  extraReducers: {
    [getGlobalData.fulfilled]: (state, action) => {
      state.dates = action.payload.map((day) => day.reportDate);
      state.globalDailyInfecteds = action.payload.map(
        (day) => day.confirmed.total
      );
      state.globalDailyDeaths = action.payload.map((day) => day.deaths.total);
    },

    [getCountries.fulfilled]: (state, action) => {
      state.countries = action.payload.map((country) => country.iso2);
    },

    [getCountryDetail.fulfilled]: (state, action) => {
      state.CasesDetail = setDetail(action.payload);
    },

    [getGlobalTotal.fulfilled]: (state, action) => {
      state.CasesDetail = setDetail(action.payload);
    },
  },
});

export const selectedCountry = (state) => state.covid.selectedCountry;
export const CasesDetail = (state) => state.covid.CasesDetail;
export const { setSelectedCountry } = covidSlice.actions;
export default covidSlice.reducer;
