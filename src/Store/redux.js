import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./FeathData/data.slice"

const rootReducer = combineReducers({
    coffee: dataSlice
})

export const store =  configureStore({
    reducer: rootReducer
})