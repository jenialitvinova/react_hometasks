import React from "react";
import CartImg from "../../../assets/Cart.svg";
import "./Cart.css";
import {useAppSelector} from "../../../hooks/globalhooks";


const Cart: React.FC = () => {
    const state = useAppSelector(state => state);
    const CartQuality = state.cart.reduce((acc, curr) => acc + curr.quantity, 0)
    return (
  <button className="header__button">
    <div className="header__cart flex-elem">
      <img className="header__cart-img" src={CartImg} alt="Cart-img" />
      <div className="header__cart-circle flex-elem blue">{CartQuality}</div>
    </div>
  </button>
)};

export default Cart;
