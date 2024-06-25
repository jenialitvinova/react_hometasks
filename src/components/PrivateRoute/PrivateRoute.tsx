import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from "../../hooks/globalhooks";
import LoginPage from "../../Pages/LoginPage/LoginPage";

const PrivateRoute: React.FC = () => {
    const isAuthenticated = useAppSelector((state) => state.auth);

    return isAuthenticated ? <Outlet /> : <LoginPage/>;
};

export default PrivateRoute;
