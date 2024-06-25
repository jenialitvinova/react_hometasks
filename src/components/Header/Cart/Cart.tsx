import React from "react";
import CartImg from "../../../assets/Cart.svg";
import "./Cart.css";
import { CartProps } from "./Cart.types";

const Cart: React.FC<CartProps> = ({ cartQuantity }) => (
  <button className="header__button">
    <div className="header__cart flex-elem">
      <img className="header__cart-img" src={CartImg} alt="Cart-img" />
      <div className="header__cart-circle flex-elem blue">{cartQuantity}</div>
    </div>
  </button>
);

export default Cart;
