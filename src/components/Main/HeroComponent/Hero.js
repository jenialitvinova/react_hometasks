import { useState, useEffect } from "react";
import FoodCard from "../../FoodCard/FoodCard";
import Button from "../../Buttons/Buttons";
import { buttonsList } from "../../../__mocks__/testData";
import "./Hero.scss";

const Hero = () => {
    const [meals, setMeals] = useState([]);
    const [displayedMeals, setDisplayedMeals] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Dessert");
    const [isLoading, setIsLoading] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(6);

    useEffect(() => {
        setIsLoading(true);
        setDisplayedMeals([]); // Очистка отображаемых блюд при начале загрузки
        fetch(
            `https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals?category=${activeCategory}`,
        )
            .then((response) => response.json())
            .then((data) => {
                setMeals(data);
                setTimeout(() => {
                    setDisplayedMeals(data.slice(0, itemsToShow));
                    setIsLoading(false);
                }, 300); // Минимальная задержка для демонстрации анимации
            })
            .catch((error) => {
                console.error("Error fetching meals:", error);
                setIsLoading(false);
            });
    }, [activeCategory]);

    const handleSeeMore = () => {
        const newItemsToShow = itemsToShow + 6;
        setItemsToShow(newItemsToShow);
        setDisplayedMeals(meals.slice(0, newItemsToShow));
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setItemsToShow(6);
    };

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
                {displayedMeals.map((meal) => (
                    <FoodCard
                        key={meal.id}
                        title={meal.meal}
                        subTitle={meal.instructions}
                        price={`$${meal.price} USD`}
                        imgUrl={meal.img}
                    />
                ))}
            </div>
            {!isLoading && displayedMeals.length < meals.length && (
                <Button buttonInfo="See more" onClick={handleSeeMore} />
            )}
        </section>
    );
};

export default Hero;