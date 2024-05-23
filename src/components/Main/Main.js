import React, { Component } from "react";
import MainMenu from "./MenuServices/MenuServices";
import Hero from "./HeroComponent/Hero";
import "./Main.scss";

class Main extends Component {
    render() {
        return (
            <main className="main flex-elem">
                <MainMenu />
                <Hero increaseCartQuantity={this.props.increaseCartQuantity} />
            </main>
        );
    }
}

export default Main;