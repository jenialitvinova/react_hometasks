import React, { useState } from "react";
import "./FoodCard.scss";
import Button from "../Buttons/Buttons";

function FoodCard({ title, subTitle, price, imgUrl }) {
    const [quantity, setQuantity] = useState("1");

    const handleChange = (event) => {
        const newQuantity = event.target.value;
        setQuantity(newQuantity);
    };

    return (
        <div className="card flex-elem">
            <div className="card__wrapper flex-elem">
                <div className="card__div-img flex-elem">
                    <img className="card__img" src={imgUrl} alt="Pam" />
                </div>
                <div className="card__descr flex-elem">
                    <h2 className="card__h2 flex-elem">
                        {title}<span className="card__span blue">{price}</span>
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
                        <Button
                            buttonInfo="Add to card"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;