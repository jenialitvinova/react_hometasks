import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartQuantity: 0,
        };
    }
    componentDidMount() {
        fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    cartQuantity: data[0].meals[0].amount,
                });
            })
            .catch((error) => console.error("Error fetching meals:", error));
    }

    increaseCartQuantity = (amount) => {
        this.setState((prevState) => ({
            cartQuantity: prevState.cartQuantity + amount,
        }));
    };

    render() {
        return (
            <div className="wrapper flex-elem">
                <Header cartQuantity={this.state.cartQuantity} />
                <div className="background flex-elem">
                    <Main increaseCartQuantity={this.increaseCartQuantity} />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;