import { createSlice } from "@reduxjs/toolkit";
import { setRecipes } from "../../thunk";

const initialState = {
  recipes: {},
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: {
    [setRecipes.fulfilled]: (state, action) => {
      state.recipes = { ...action.payload };
    },
  },
});

export const {} = recipesSlice.actions;

export default recipesSlice.reducer;
