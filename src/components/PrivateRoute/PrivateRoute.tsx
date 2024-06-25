import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/globalhooks";
import LoginPage from "../../Pages/LoginPage/LoginPage";

const PrivateRoute: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : <LoginPage />;
};

export default PrivateRoute;
