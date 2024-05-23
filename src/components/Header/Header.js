import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "../Logo/Logo";
import "./Header.scss";
import Cart from "./Cart/Cart";

class Header extends Component {
    render() {
        return (
            <header className="header flex-elem">
                <Logo />
                <div className="header__wrapper flex-elem">
                    <NavBar />
                    <Cart cartQuantity={this.props.cartQuantity} />
                </div>
            </header>
        );
    }
}

export default Header;