import React from "react";
import "./CartCard.css";
import { FoodCardProps } from "../../../components/FoodCard/FoodCard.types";
import { useAppDispatch, useAppSelector } from "../../../hooks/globalhooks";
import { removeFromCartAsync } from "../../../store/slices/cart.slice";

const CartCard: React.FC<FoodCardProps> = ({ title, imgUrl, id }) => {
  const cart = useAppSelector((state) => state.cart);
  const item = cart.find((cartItem) => cartItem.id === id);
  const dispatch = useAppDispatch();
  const totalPrice = item ? item.totalPrice : 0;

  const handleRemoveFromCart = async () => {
    if (item) {
      dispatch(
        removeFromCartAsync({ id, quantity: item.quantity, totalPrice }),
      );
    }
  };

  return (
    <div className="card flex-elem">
      <div className="card__wrapper flex-elem">
        <div className="card__div-img flex-elem">
          <img className="card__img" src={imgUrl} alt="Food item" />
        </div>
        <div className="card-cart__descr flex-elem">
          <h2 className="card__h2 flex-elem">{title}</h2>
          <div className="card-cart__info flex-elem">
            <span className="card__span blue">{`\u0024 ${totalPrice.toFixed(2)} USD`}</span>
            <div className="card__input flex-elem">
              <input
                type="number"
                id="quantityInput"
                value={item?.quantity || 1}
                min={1}
                readOnly
              />
            </div>
            <button
              className="flex-elem cart-delete-btn"
              onClick={handleRemoveFromCart}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
