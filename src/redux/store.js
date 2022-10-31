import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covid/covidSlice";

export const store = configureStore({
  reducer: {
    covid: covidSlice,
  },
});
