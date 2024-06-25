import React from "react";
import { useAppSelector } from "../../hooks/globalhooks";
import { FoodCardWithQuantity } from "../../components/FoodCard/FoodCard.types";
import "./OrderPage.css";
import CartCard from "./CartCard/CartCard";
import Button from "../../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const OrderPage: React.FC = () => {
  const cartItems: FoodCardWithQuantity[] = useAppSelector(
    (state) => state.cart,
  );
  const navigate = useNavigate();
  return (
    <div className="background flex-elem blue">
      <main className="order-wrapper">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h1 className="order-wrapper__title">Your Cart is empty</h1>
            <Button
              buttonInfo="Go to menu"
              onClick={() => navigate("/menu")}
            ></Button>
          </div>
        ) : (
          <>
            <h1 className="order-wrapper__title">Finish your order</h1>
            <section className="order-wrapper__list flex-elem">
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  imgUrl={item.imgUrl}
                  price={item.totalPrice}
                />
              ))}
              <div className="form-container flex-elem">
                <div className="form-group flex-elem">
                  <label htmlFor="street">Street</label>
                  <input type="text" id="street" className="form-input" />
                </div>
                <div className="form-group flex-elem">
                  <label htmlFor="house">House</label>
                  <input type="text" id="house" className="form-input" />
                </div>
                <Button buttonInfo="Order" onClick={() => {}}></Button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default OrderPage;
