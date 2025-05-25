import { combineReducers, configureStore } from "@reduxjs/toolkit";
import geteSlice from "./FeathData/get.slice"
import postSlice from "./postData/post.slice"

const rootReducer = combineReducers({
    get: geteSlice,
    post: postSlice
})

export const store =  configureStore({
    reducer: rootReducer
})