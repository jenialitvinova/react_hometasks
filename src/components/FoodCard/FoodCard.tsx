import React, { ChangeEvent, useState } from "react";
import "./FoodCard.css";
import Button from "../Buttons/Buttons";
import { FoodCardProps, FoodCardWithQuantity } from "./FoodCard.types";
import { actions } from "../../store/slices/cart.slice";
import {useAppDispatch} from "../../hooks/globalhooks";

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  title,
  subTitle,
  price,
  imgUrl,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const newQuantity = Math.max(1, parseInt(input, 10));
    setQuantity(newQuantity);
  };

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const item: FoodCardWithQuantity = { id, title, price, quantity };
    dispatch(actions.addToCart(item));
  };

  return (
      <div className="card flex-elem">
        <div className="card__wrapper flex-elem">
          <div className="card__div-img flex-elem">
            <img className="card__img" src={imgUrl} alt="Food item" />
          </div>
          <div className="card__descr flex-elem">
            <h2 className="card__h2 flex-elem">
              {title}
              <span className="card__span blue">{price}</span>
            </h2>
            <h3>{subTitle}</h3>
            <div className="card__add-to flex-elem">
              <div className="card__input flex-elem">
                <input
                    type="number"
                    id="quantityInput"
                    value={quantity}
                    min="1"
                    onChange={handleChange}
                />
              </div>
              <Button buttonInfo="Add to cart" onClick={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default FoodCard;
