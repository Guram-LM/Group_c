import { createAsyncThunk } from "@reduxjs/toolkit";

    const BASE_URL = "http://localhost:5000/api/v1"
    const API_KEY = "YXBpS2V5U2VjcmV0"

export const featchCoffee = createAsyncThunk(
    "/coffee/GET",
    async (resource, ThunkAPI) => {
        try {
            const rouData = await fetch(`${BASE_URL}/resource/${resource}`, {
            method: "GET",
            headers: {
                "x-bypass-token": API_KEY,
            }  
        })
            if(!rouData.ok) throw new Error("Something went wrong");
            const result = await rouData.json()
            result.map((item) => ({id: item.id, ...item.data}))
            return ThunkAPI.fulfillWithValue(result)
            
        } catch (error) {

            return ThunkAPI.rejectWithValue("Something went wrong")
        }

         
    }
)

export const featchIngredient = createAsyncThunk(
    "/ingredient/GET",
    async (resource, ThunkAPI) => {
        try {
            const rouData = await fetch(`${BASE_URL}/resource/${resource}`, {
            method: "GET",
            headers: {
                "x-bypass-token": API_KEY,
            }  
        })
            if(!rouData.ok) throw new Error("Something went wrong");
            const result = await rouData.json()
            result.map((item) => ({id: item.id, ...item.data}))
            return ThunkAPI.fulfillWithValue(result)
            
        } catch (error) {

            return ThunkAPI.rejectWithValue("Something went wrong")
        }

         
    }
)