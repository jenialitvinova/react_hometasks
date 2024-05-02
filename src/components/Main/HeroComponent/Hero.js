import React, { Component } from "react";
import FoodCard from "../../FoodCard/FoodCard";
import Button from "../../Buttons/Buttons";
import { buttonsList } from "../../../__mocks__/testData";
import "./Hero.scss";

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: [],
            displayedMeals: [],
            activeButton: 1,
            isLoading: true,
            itemsToShow: 6,
        };
    }

    componentDidMount() {
        fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    meals: data,
                    isLoading: false,
                    displayedMeals: data.slice(0, this.state.itemsToShow),
                });
            })
            .catch((error) => console.error("Error fetching meals:", error));
    }

    setActiveButton = (id) => {
        this.setState({ activeButton: id });
    };

    handleSeeMore = () => {
        const newItemsToShow = this.state.itemsToShow + 6;
        const newDisplayedMeals = this.state.meals.slice(0, newItemsToShow);

        this.setState({
            itemsToShow: newItemsToShow,
            displayedMeals: newDisplayedMeals,
        });
    };

    render() {
        const { displayedMeals, activeButton, isLoading } = this.state;

        return (
            <section className="hero flex-elem">
                <div className="hero__buttons flex-elem">
                    {buttonsList.map((button) => (
                        <Button
                            key={button.id}
                            buttonInfo={button.text}
                            onClick={() => this.setActiveButton(button.id)}
                            type={activeButton === button.id ? "primary" : "transparent"}
                        />
                    ))}
                </div>

                {isLoading ? <div className="loading">Loading...</div> : null}

                <div className="hero__food-list">
                    {displayedMeals.map((meal) => (
                        <FoodCard
                            key={meal.id}
                            title={meal.meal}
                            subTitle={meal.instructions}
                            price={`$${meal.price} USD`}
                            imgUrl={meal.img}
                            increaseCartQuantity={this.props.increaseCartQuantity}
                        />
                    ))}
                </div>
                {displayedMeals.length < this.state.meals.length && (
                    <Button buttonInfo="See more" onClick={this.handleSeeMore} />
                )}
            </section>
        );
    }
}

export default Hero;