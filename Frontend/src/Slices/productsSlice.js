import { createSlice } from "@reduxjs/toolkit";

const SUNGLASSES = {
  "Lens Type": ["Miorror", "Uniform Color", "Polarized"],
  Gender: ["Male", "Female", "Child"],
  "Frame Form": ["Pilot", "Cat-Eye", "Round", "Rectangular", "Sport"],
  Brand: ["Ray-Ban", "POLICE", "Vogue", "Polar", "Guess"],
};
const GLASSES = {
  "Frame Type": ["Without Frame", "Complete Frame", "Semi Frame"],
  Gender: ["Male", "Female", "Child"],
  "Frame Form": ["Pilot", "Cat-Eye", "Round", "Rectangular", "Sport"],
  Brand: ["Ray-Ban", "POLICE", "Vogue", "Polar", "Guess"],
};
const LENS = {
  "Lens Type": ["Indoor", "Progresive", "Monofocal"],
  Brand: ["Ray-Ban", "POLICE", "Vogue", "Polar", "Guess"],
};

const productsSlice = createSlice({
  name: "products",
  initialState: { sample: { SUNGLASSES, GLASSES, LENS } },
  reducers: {},
});

export default productsSlice.reducer;
