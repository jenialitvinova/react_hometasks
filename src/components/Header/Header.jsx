import React from "react";
import { useContext } from "react";
import Logo from "../Logo/Logo";
import Cart from "./Cart/Cart";
import NavBar from "./NavBar/NavBar";
import "./Header.css";
import { CartContext } from "../../Context/CartContext";
const Header = () => {
  const { cartQuantity } = useContext(CartContext);

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
