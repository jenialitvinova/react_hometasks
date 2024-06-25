import React, { useState } from "react";
import { useGetMealsQuery } from "../../../store/api/mealsApi";
import FoodCard from "../../../components/FoodCard/FoodCard";
import Button from "../../../components/Buttons/Buttons";
import { buttonsList } from "../../../__mocks__/testData";
import "./Hero.css";

const Hero: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("Dessert");
    const [itemsToShow, setItemsToShow] = useState(6);
    const { data: meals, error } = useGetMealsQuery();

    const handleSeeMore = () => {
        const newItemsToShow = itemsToShow + 6;
        setItemsToShow(newItemsToShow);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setItemsToShow(6);
    };

    if (error) {
        return (
            <div>
                Error: {"status" in error ? error.status : error.message}
            </div>
        );
    }

    const filteredMeals = meals?.filter((meal) => meal.category === activeCategory) || [];

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

            <div className='hero__food-list'>
                {filteredMeals.slice(0, itemsToShow).map((meal) => (
                    <FoodCard
                        id={meal.id}
                        key={meal.id}
                        title={meal.meal}
                        subTitle={meal.instructions}
                        price={meal.price}
                        imgUrl={meal.img}
                    />
                ))}
            </div>
            {filteredMeals.length > itemsToShow && (
                <Button buttonInfo="See more" onClick={handleSeeMore} />
            )}
        </section>
    );
};

export default Hero;
