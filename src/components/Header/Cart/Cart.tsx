import React from "react";
import CartImg from "../../../assets/Cart.svg";
import "./Cart.css";
import { useAppSelector } from "../../../hooks/globalhooks";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const state = useAppSelector((state) => state);
  const CartQuality = state.cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/order");
  };
  return (
    <button className="header__button" onClick={handleCart}>
      <div className="header__cart flex-elem">
        <img
          className="header__cart-img"
          src={String(CartImg)}
          alt="Cart-img"
        />
        <div className="header__cart-circle flex-elem blue">{CartQuality}</div>
      </div>
    </button>
  );
};

export default Cart;
