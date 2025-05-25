import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000/api/v1";
const API_KEY = "YXBpS2V5U2VjcmV0";

export const deleteThunk = createAsyncThunk(
    "/delete/item",
    async({ resource, id }, ThunkAPI) => {

        try {
            const res = await fetch(`${BASE_URL}/resource/${resource}/${id}`, {
                method: "DELETE",
                headers: {
                    "x-bypass-token": API_KEY,
                }
            })
            
            if(!res.ok) throw new Error("Delete failed");
            
            return ({id, resource})
            
        } catch (error) {
            return ThunkAPI.rejectWithValue("An error occurred while deleting")            
        }

    }

)