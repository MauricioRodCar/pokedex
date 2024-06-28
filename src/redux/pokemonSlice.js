import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    name: "",
    showStats: false,
  },
  reducers: {
    setName: (state, name) => {
      state.name = name.payload;
    },
    setShowStats: (state, value) => {
      state.showStats = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, setShowStats } = pokemonSlice.actions;

export default pokemonSlice.reducer;
