import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginApiThunk } from "./authThunk";
import { AuthResponse, AuthState, UserProfile } from "@/types/auth";
import { get } from "lodash";

const initialState: AuthState = {
    isAuthenticated: false,
    access_token: null,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.access_token = action.payload;
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        setUserLogin: (state, action: PayloadAction<UserProfile | null>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            loginApiThunk.fulfilled,
            (
                state,
                action: PayloadAction<ResponseFromServer<AuthResponse>>,
            ) => {
                let access_token = get(action, "payload.access_token", null);
                let user = get(action, "payload.user", null);

                state.access_token = access_token;
                state.isAuthenticated = true;
                state.user = user;
            },
        );
    },
});

export const { setToken, setUserLogin, setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
