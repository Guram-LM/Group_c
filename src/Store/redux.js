import { combineReducers, configureStore } from "@reduxjs/toolkit";
import geteSlice from "./FeathData/get.slice"
import postSlice from "./postData/post.slice"
import deleteSlice from "./deleteData/delete.slice"
import updateSlice from "./update/update.slice"

const rootReducer = combineReducers({
    get: geteSlice,
    post: postSlice,
    delete: deleteSlice,
    update: updateSlice
})

export const store =  configureStore({
    reducer: rootReducer
})