import React, { useState } from 'react';
import FoodCard from "../../FoodCard/FoodCard";
import { foodList, buttonsList } from "../../../__mocks__/testData";
import Button from "../../Buttons/Buttons";
import "./Hero.scss";

function Hero() {
    const [activeButton, setActiveButton] = useState(1);

    return (
        <section className="hero flex-elem">
            <div className="hero__buttons flex-elem">
                {buttonsList.map((button) => (
                    <Button
                        key={button.id}
                        buttonInfo={button.text}
                        isActive={activeButton === button.id}
                        onClick={() => setActiveButton(activeButton === button.id ? null : button.id)}
                        type={activeButton === button.id ? "primary" : "transparent"}
                    />
                ))}
            </div>
            <div className="hero__food-list">
                {foodList.map((burger) => (
                    <FoodCard
                        key={burger.id}
                        title={burger.title}
                        subTitle={burger.subTitle}
                        price={burger.price}
                        imgUrl={burger.imgUrl}
                    />
                ))}
            </div>
            <Button buttonInfo= "See more" />
        </section>
    );
}

export default Hero;