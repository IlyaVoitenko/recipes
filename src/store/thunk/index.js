import { getListRecipes } from "../../components/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setRecipes = createAsyncThunk(
  "recipes/setRecipes",
  async (_, apiThunk) => {
    try {
      const response = await getListRecipes();
      console.log(response);
      return response;
    } catch (error) {
      apiThunk.rejectWithValue(error.message);
    }
  }
);
