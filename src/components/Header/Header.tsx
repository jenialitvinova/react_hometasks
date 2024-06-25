import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import Cart from "./Cart/Cart";
import NavBar from "./NavBar/NavBar";
import "./Header.css";
import { CartContext } from "../../Context/CartContext";

const Header: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cartQuantity } = cartContext;

  return (
    <header className="header flex-elem">
      <Logo />
      <div className="header__wrapper flex-elem">
        <NavBar />
        <Cart cartQuantity={cartQuantity} />
      </div>
    </header>
  );
};

export default Header;
