import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./Context/CartContext";
import "./App.css";

const App = () => (
    <div className="wrapper flex-elem">
        <CartProvider>
            <Header />
            <div className="background flex-elem">
                <Main />
                <Footer />
            </div>
        </CartProvider>
    </div>
);

export default App;