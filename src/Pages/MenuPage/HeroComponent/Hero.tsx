import React, { useState } from "react";
import useFetch from "../../../CustomHook/useFetch";
import FoodCard from "../../../components/FoodCard/FoodCard";
import Button from "../../../components/Buttons/Buttons";
import { buttonsList } from "../../../__mocks__/testData";
import { Meal } from "./Hero.types";
import "./Hero.css";

const Hero: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Dessert");
  const [itemsToShow, setItemsToShow] = useState(6);
  const { response, error, isLoading } = useFetch<Meal[]>(
    `https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals`,
    { method: "GET" },
    [],
  );

  const handleSeeMore = () => {
    const newItemsToShow = itemsToShow + 6;
    setItemsToShow(newItemsToShow);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setItemsToShow(6);
  };

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div className="hero flex-elem">Loading...</div>;

  const filteredMeals =
    response?.filter((meal) => meal.category === activeCategory) || [];

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
        {filteredMeals.slice(0, itemsToShow).map((meal) => (
          <FoodCard
            key={meal.id}
            title={meal.meal}
            subTitle={meal.instructions}
            price={`$${meal.price} USD`}
            imgUrl={meal.img}
          />
        ))}
      </div>
      {!isLoading && filteredMeals.length > itemsToShow && (
        <Button buttonInfo="See more" onClick={handleSeeMore} />
      )}
    </section>
  );
};

export default Hero;
