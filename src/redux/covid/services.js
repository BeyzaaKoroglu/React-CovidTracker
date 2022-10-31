import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGlobalData = createAsyncThunk(
  "covid/getGlobalData",
  async () => {
    const res = await axios("https://covid19.mathdro.id/api/daily");
    return res.data;
  }
);
