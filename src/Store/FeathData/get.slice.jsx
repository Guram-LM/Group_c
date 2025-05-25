import { createSlice } from "@reduxjs/toolkit"
import { featchCoffee, featchIngredient } from "./feath.thunks"


const initialState = {
    coffee: [],
    ingredient: [],
    loading: false,
    error: null
}


const geteSlice = createSlice({
    name: "get",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(featchCoffee.pending, (state) => {
            state.loading = true
        })
        .addCase(featchCoffee.fulfilled, (state, action) => {
            state.loading = false,
            state.error = null,
            state.coffee = action.payload
        })
        .addCase(featchCoffee.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })






         .addCase(featchIngredient.pending, (state) => {
            state.loading = true
        })
        .addCase(featchIngredient.fulfilled, (state, action) => {
            state.loading = false,
            state.error = null,
            state.ingredient = action.payload
        })
        .addCase(featchIngredient.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    }
    
})

export default geteSlice.reducer
