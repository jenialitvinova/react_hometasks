import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isLogged: (state, { payload }: PayloadAction<boolean>) => {
            return payload;
        }
    }
});

export const actions = authSlice.actions; // Дополнительный экспорт для удобства использования
export default authSlice.reducer;
