import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import {
  FoodCardWithQuantity,
  ICartCard,
} from "../../components/FoodCard/FoodCard.types";
import { db } from "../../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../../firebase-config";

const initialState: FoodCardWithQuantity[] = [];

const saveCartToFirestore = async (
  userId: string,
  cart: FoodCardWithQuantity[],
) => {
  await setDoc(doc(db, "carts", userId), { items: cart });
};

export const getCartFromFirestore = async (
  userId: string,
): Promise<FoodCardWithQuantity[]> => {
  const cartDoc = await getDoc(doc(db, "carts", userId));
  if (cartDoc.exists()) {
    const data = cartDoc.data().items;
    if (Array.isArray(data)) {
      return data as FoodCardWithQuantity[];
    } else {
      return [];
    }
  } else {
    console.log("No such document!");
    return [];
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<FoodCardWithQuantity[]>) => {
      return payload;
    },
    addToCart: (state, { payload }: PayloadAction<FoodCardWithQuantity>) => {
      const itemIndex = state.findIndex((item) => item.id === payload.id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity += payload.quantity;
        state[itemIndex].totalPrice += payload.totalPrice;
      } else {
        state.push(payload);
      }
    },
    clearCart: () => {
      return [];
    },
    removeFromCart: (state, { payload }: PayloadAction<ICartCard>) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const addToCartAsync =
  (item: FoodCardWithQuantity): AppThunk =>
  async (dispatch, getState) => {
    try {
      const userId = auth.currentUser!.uid;
      const cart = [...getState().cart];
      const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex !== -1) {
        cart[itemIndex] = {
          ...cart[itemIndex],
          quantity: cart[itemIndex].quantity + item.quantity,
          totalPrice: cart[itemIndex].totalPrice + item.totalPrice,
        };
      } else {
        cart.push(item);
      }
      await saveCartToFirestore(userId, cart);
      dispatch(addToCart(item));
    } catch (error) {
      console.error("Failed to save cart to Firestore:", error);
    }
  };

export const removeFromCartAsync =
  (item: ICartCard): AppThunk =>
  async (dispatch, getState) => {
    try {
      const userId = auth.currentUser!.uid; // non-null assertion operator
      const cart = getState().cart.filter(
        (cartItem) => cartItem.id !== item.id,
      );
      await saveCartToFirestore(userId, cart);
      dispatch(removeFromCart(item));
    } catch (error) {
      console.error("Failed to remove item from cart in Firestore:", error);
    }
  };

export const clearCartAsync = (): AppThunk => async (dispatch) => {
  try {
    const userId = auth.currentUser!.uid;
    await saveCartToFirestore(userId, []);
    dispatch(clearCart());
  } catch (error) {
    console.error("Failed to clear cart in Firestore:", error);
  }
};

export default cartSlice.reducer;
export const { setCart, addToCart, clearCart, removeFromCart } =
  cartSlice.actions;
