import React, { Component } from "react";
import "./Cart.scss";
import CartImg from "../../../assets/Cart.svg";

class Cart extends Component {
    render() {
        const { cartQuantity } = this.props;
        return (
            <button className="header__button">
                <div className="header__cart flex-elem">
                    <img className="header__cart-img" src={CartImg} alt="Cart-img" />
                    <div className="header__cart-circle flex-elem blue">
                        {cartQuantity}
                    </div>
                </div>
            </button>
        );
    }
}

export default Cart;