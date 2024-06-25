import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FoodCardWithQuantity} from "../../components/FoodCard/FoodCard.types";

const initialState: FoodCardWithQuantity[] = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {payload}:PayloadAction<FoodCardWithQuantity>) => {
         // const itemToChange = state.find(item => item.id === payload.id);
         // itemToChange ? itemToChange.quantity += payload.quantity : state.push(payload)

            const itemIndex = state.findIndex(item => item.id === payload.id);
            if (itemIndex !== -1) {
                state[itemIndex].quantity += payload.quantity;
            } else {
                state.push(payload)
            }
        }
    }
})

export const {actions, reducer} = cartSlice
