import { combineReducers, configureStore } from "@reduxjs/toolkit";
import geteSlice from "./FeathData/get.slice"
import postSlice from "./postData/post.slice"
import deleteSlice from "./deleteData/delete.slice"

const rootReducer = combineReducers({
    get: geteSlice,
    post: postSlice,
    delete: deleteSlice
})

export const store =  configureStore({
    reducer: rootReducer
})