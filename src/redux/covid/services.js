import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGlobalData = createAsyncThunk(
  "covid/getGlobalData",
  async () => {
    const res = await axios("https://covid19.mathdro.id/api/daily");
    return res.data;
  }
);

export const getCountries = createAsyncThunk("covid/getCountries", async () => {
  const res = await axios("https://covid19.mathdro.id/api/countries");
  return res.data.countries;
});

export const getCountryDetail = createAsyncThunk(
  "covid/getCountryDetail",
  async (countryCode) => {
    const res = await axios(
      `https://covid19.mathdro.id/api/countries/${countryCode}`
    );
    return res.data;
  }
);

export const getGlobalTotal = createAsyncThunk(
  "covid/getGlobalTotal",
  async () => {
    const res = await axios("https://covid19.mathdro.id/api");
    return res.data;
  }
);
