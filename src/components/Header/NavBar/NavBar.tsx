import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/globalhooks";
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";
import { actions as authActions } from "../../../store/slices/auth.slice";
import { clearCart } from "../../../store/slices/cart.slice";

const NavBar: React.FC = () => {
  const isLogged = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const confirm = window.confirm("Are you sure you want to Logout?");
    if (confirm) {
      signOut(auth)
        .then(() => {
          dispatch(clearCart());
          dispatch(authActions.isLogged(false));
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          dispatch(authActions.isLogged(false));
        });
    }
  };

  return (
    <nav className="header__nav flex-elem">
      <ul className="header__nav-list flex-elem">
        <li className="flex-elem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="flex-elem">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="flex-elem">Company</li>
        <li className="flex-elem">
          {!isLogged ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <button className="logout-link" onClick={handleSignOut}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
