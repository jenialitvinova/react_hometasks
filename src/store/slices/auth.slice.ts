import {createSlice, PayloadAction,} from "@reduxjs/toolkit";

const initialState: boolean = false;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isLogged: (state, {payload}:PayloadAction<boolean>) => {
            return payload;
        }
    }
})

export const {actions, reducer} = authSlice
