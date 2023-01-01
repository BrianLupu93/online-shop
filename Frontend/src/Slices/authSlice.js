import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userID: "",
    token: "",
  },
  reducers: {},
});

export default authSlice.reducer;
