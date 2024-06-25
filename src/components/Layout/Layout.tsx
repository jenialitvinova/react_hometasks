import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
    return (
        <div className="wrapper flex-elem">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
