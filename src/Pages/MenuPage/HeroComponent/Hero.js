import React, { useEffect, useState } from "react";
import useFetch from "../../../CustomHook/useFetch";
import FoodCard from "../../../components/FoodCard/FoodCard";
import Button from "../../../components/Buttons/Buttons";
import { buttonsList } from "../../../__mocks__/testData";
import "./Hero.scss";

const Hero = () => {
    const [activeCategory, setActiveCategory] = useState("Dessert");
    const [itemsToShow, setItemsToShow] = useState(6);
    const { response, error, isLoading, fetchData } = useFetch(
        `https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals?category=${activeCategory}`,
        { method: "GET" },
    );

    useEffect(() => {
        fetchData();
    }, [activeCategory]);

    const handleSeeMore = () => {
        const newItemsToShow = itemsToShow + 6;
        setItemsToShow(newItemsToShow);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setItemsToShow(6);
    };

    if (error) return <div>Error: {error.message}</div>;
    if (isLoading) return <div className="hero flex-elem">Loading...</div>;

    return (
        <section className="hero flex-elem">
            <div className="hero__buttons flex-elem">
                {buttonsList.map((button) => (
                    <Button
                        key={button.id}
                        buttonInfo={button.text}
                        onClick={() => handleCategoryChange(button.text)}
                        type={activeCategory === button.text ? "primary" : "transparent"}
                    />
                ))}
            </div>

            <div className={`hero__food-list ${isLoading ? "loading" : ""}`}>
                {response &&
                    response
                        .slice(0, itemsToShow)
                        .map((meal) => (
                            <FoodCard
                                key={meal.id}
                                title={meal.meal}
                                subTitle={meal.instructions}
                                price={`$${meal.price} USD`}
                                imgUrl={meal.img}
                            />
                        ))}
            </div>
            {!isLoading && response && response.length > itemsToShow && (
                <Button buttonInfo="See more" onClick={handleSeeMore} />
            )}
        </section>
    );
};

export default Hero;