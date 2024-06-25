import React, { ChangeEvent, useState } from "react";
import "./FoodCard.css";
import Button from "../Buttons/Buttons";
import { FoodCardProps, FoodCardWithQuantity } from "./FoodCard.types";
import { useAppDispatch } from "../../hooks/globalhooks";
import { auth } from "../../firebase-config";
import { addToCartAsync } from "../../store/slices/cart.slice";
import AuthModal from "../authModal/AuthModal";

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  title,
  subTitle,
  price,
  imgUrl,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const userId = auth.currentUser?.uid;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const newQuantity = Math.max(1, parseInt(input, 10));
    setQuantity(newQuantity);
  };

  const handleAddToCart = async () => {
    if (!userId) {
      setShowModal(true);
      return;
    }
    const totalPrice = price * quantity;
    const item: FoodCardWithQuantity = {
      id,
      title,
      totalPrice,
      imgUrl,
      quantity,
    };
    dispatch(addToCartAsync(item));
  };

  const handleCardClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <>
      <div className="card flex-elem">
        <div className="card__wrapper flex-elem">
          <div className="card__div-img flex-elem">
            <img className="card__img" src={imgUrl} alt="Food item" />
          </div>
          <div className="card__descr flex-elem">
            <h2 className="card__h2 flex-elem">
              {title}
              <span className="card__span blue">{`\u0024 ${price} USD`}</span>
            </h2>
            <h3
              onClick={handleCardClick}
              style={{
                display: isDescriptionVisible ? "block" : "-webkit-box",
              }}
            >
              {subTitle}
            </h3>
            <div className="card__add-to flex-elem">
              <div className="card__input flex-elem">
                <input
                  type="number"
                  id="quantityInput"
                  value={quantity}
                  min="1"
                  onChange={handleChange}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <Button
                buttonInfo="Add to cart"
                onClick={handleAddToCart}
                disabled={!quantity}
              />
            </div>
          </div>
        </div>
      </div>
      <AuthModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default FoodCard;
