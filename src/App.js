import React from "react";
import Header from "./components/Header/Header";
import MenuPage from "./Pages/MenuPage/MenuPage";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./Context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => (
    <Router>
        <div className="wrapper flex-elem">
            <CartProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                </Routes>
                <Footer />
            </CartProvider>
        </div>
    </Router>
);

export default App;