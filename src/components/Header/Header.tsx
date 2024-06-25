import React from "react";
import Logo from "../Logo/Logo";
import Cart from "./Cart/Cart";
import NavBar from "./NavBar/NavBar";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header flex-elem">
      <Logo />
      <div className="header__wrapper flex-elem">
        <NavBar />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
