import { ReactNode } from "react";

export interface CartItem {
  title: string;
  price: string;
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  cartQuantity: number;
}

export interface CartProviderProps {
  children: ReactNode;
}
