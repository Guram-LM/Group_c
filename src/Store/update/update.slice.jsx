import { createSlice } from "@reduxjs/toolkit";
import { updateDataThunk } from "./updataThunks";


const initialState = {
  loading: false,
  error: null,
  updatedItem: null,
};

const updateSlice = createSlice({
  name: "updateData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.updatedItem = null;
      })
      .addCase(updateDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.updatedItem = action.payload;
      })
      .addCase(updateDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUpdateState } = updateSlice.actions;

export default updateSlice.reducer;