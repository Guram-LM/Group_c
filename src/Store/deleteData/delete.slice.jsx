import { createSlice } from "@reduxjs/toolkit"
import { deleteThunk } from "./delete.thunks"

const initialState = {
  loading: false,
  error: null,
}

const deleteSlice = createSlice({
    name: "delete",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(deleteThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(deleteThunk.fulfilled, (state) => {
            state.loading = false
            state.error = null
        })
        .addCase(deleteThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default deleteSlice.reducer