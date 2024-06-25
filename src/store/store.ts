import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { mealsApi } from "./api/mealsApi";
import cartReducer from "./slices/cart.slice";
import authReducer from "./slices/auth.slice";

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
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
