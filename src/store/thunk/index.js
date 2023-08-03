export const _ = createAsyncThunk("reducer/action", async (data, apiThunk) => {
  try {
  } catch (error) {
    apiThunk.rejectWithValue(error.message);
  }
});
