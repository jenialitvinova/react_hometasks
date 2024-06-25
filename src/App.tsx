import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MenuPage from "./Pages/MenuPage/MenuPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Layout from "./components/Layout/Layout";
import "./App.css";

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage />} />
                <Route path="menu" element={<PrivateRoute />}>
                    <Route index element={<MenuPage />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
            </Route>
        </Routes>
    </Router>
);

export default App;
