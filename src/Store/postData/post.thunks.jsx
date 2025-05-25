import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

export const postThunk = createAsyncThunk(
    "/coffee/POST",
    async ({ormData, resource},ThunkAPI) => {
        try {
            const res = await fetch(`${BASE_URL}/resource/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-bypass-token": API_KEY,
                },
                body: JSON.stringify({data:[ormData]})
            })
            if(!res.ko) throw new Error("Data was not sent");
            const result = await res.json()

            return ThunkAPI.fulfillWithValue(result)
            
        } catch (error) {
            return ThunkAPI.rejectWithValue(error)
        }
    }
)