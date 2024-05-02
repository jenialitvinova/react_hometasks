import React, { Component } from "react";
import "./FoodCard.scss";
import Button from "../Buttons/Buttons";

class FoodCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    handleChange = (event) => {
        const newQuantity = +event.target.value;
        this.setState({ quantity: newQuantity >= 1 ? newQuantity : "" });
    };

    handleAddToCart = () => {
        if (this.state.quantity) {
            this.props.increaseCartQuantity(this.state.quantity);
            this.setState({ quantity: 1 });
        } else {
            alert("Please enter valid data");
        }
    };

    render() {
        const { title, subTitle, price, imgUrl } = this.props;
        const { quantity } = this.state;

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
                                    onChange={this.handleChange}
                                />
                            </div>
                            <Button buttonInfo="Add to cart" onClick={this.handleAddToCart} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodCard;