import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import url from "../URL_Routes";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(url.login, data);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "account",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.fetching = true;
        state.userId = "";
        state.token = "";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.fetching = false;
        console.log(action.payload);
        state.userId = action.payload.userId;
        state.token = action.payload.token;
        state.error = "";
        state.message = action.payload.message;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload.message;
      });
  },
});

export default authSlice.reducer;

export const {} = authSlice.actions;
