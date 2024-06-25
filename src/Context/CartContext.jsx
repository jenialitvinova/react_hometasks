import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
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
