import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import url from "../URL_Routes";

export const getAccountDetails = createAsyncThunk(
  "account/getAccountDetails",

  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url.getAccountDetails}/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountDetails.pending, (state) => {
        state.fetching = true;
      })
      .addCase(getAccountDetails.fulfilled, (state, action) => {
        state.fetching = false;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.adress = action.payload.adress;
      })
      .addCase(getAccountDetails.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload.message;
      });
  },
});

export default accountSlice.reducer;
