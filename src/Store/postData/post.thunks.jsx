import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000/api/v1"
const API_KEY = "YXBpS2V5U2VjcmV0"

export const postThunk = createAsyncThunk(
    "/coffee/POST",
    async ({formData, resource},ThunkAPI) => {
        try {
            const res = await fetch(`${BASE_URL}/resource/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-bypass-token": API_KEY,
                },
                body: JSON.stringify({data:[formData]})
            })
            if(!res.ok) throw new Error("Data was not sent");
            const result = await res.json()

            return ThunkAPI.fulfillWithValue(result)
            
        } catch (error) {
            return ThunkAPI.rejectWithValue(error.message)
        }
    }
)