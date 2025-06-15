import { AuthResponse, ILoginEmail } from "@/types/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "./authApi";

const LOG_IN = "LOG_IN";

export const loginApiThunk = createAsyncThunk<
    ResponseFromServer<AuthResponse>,
    ILoginEmail
>(LOG_IN, async (payload, { rejectWithValue }) => {
    try {
        const response = await loginApi(payload);
        return response;
    } catch (err: any) {
        return rejectWithValue({
            errorMessage: err.message,
            data: err.response.data,
        });
    }
});
