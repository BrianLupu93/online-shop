import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import url from "../URL_Routes";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(url.login, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchLogout = createAsyncThunk("auth/fetchLogout", async () => {
  const response = await axios.post(url.logout);

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.fetching = true;
        state.userId = "";
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.fetching = false;
        state.userId = action.payload.userId;
        state.token = action.payload.token;
        state.error = "";
        state.message = action.payload.message;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload.message;
        state.isLoggedIn = false;
      })
      .addCase(fetchLogout.pending, (state) => {
        state.fetching = true;
        state.userId = "";
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.fetching = false;
        state.userId = "";
        state.token = "";
        state.error = "";
        state.message = action.payload.message;
        state.isLoggedIn = false;
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.payload.message;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
