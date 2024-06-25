import { configureStore } from '@reduxjs/toolkit';
import {mealsApi} from "./api/mealsApi";
import {reducer as cartReducer} from "./slices/cart.slice";
import {reducer as authReducer} from "./slices/auth.slice";

export const store = configureStore({
    reducer: {
        [mealsApi.reducerPath]: mealsApi.reducer,
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mealsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
