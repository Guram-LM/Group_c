import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000/api/v1";
const API_KEY = "YXBpS2V5U2VjcmV0";

export const updateDataThunk = createAsyncThunk(
  "data/update",
  async ({ id, updatedData, resource }, ThunkAPI) => {
    try {
      const body = {
        data: updatedData,
      };

      const res = await fetch(`${BASE_URL}/resource/${resource}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-bypass-token": API_KEY,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("განახლება ვერ მოხერხდა");

      const result = await res.json();

      return { id, data: result, resource };
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message || "შეცდომა განახლებაში");
    }
  }
);