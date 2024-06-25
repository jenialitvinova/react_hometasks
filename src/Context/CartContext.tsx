import React, { createContext, useState } from "react";
import {
  CartItem,
  CartContextProps,
  CartProviderProps,
} from "./CartContext.types";

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  cartQuantity: 0,
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const itemIndex = cartItems.findIndex((x) => x.title === item.title);
    if (itemIndex > -1) {
      const newItems = [...cartItems];
      newItems[itemIndex].quantity += item.quantity;
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
