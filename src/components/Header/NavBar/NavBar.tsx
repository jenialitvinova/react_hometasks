import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/globalhooks";
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";
import { actions as authActions } from "../../../store/slices/auth.slice";
import { clearCart } from "../../../store/slices/cart.slice";

interface NavBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMenuOpen, toggleMenu }) => {
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
    <nav className={`header__nav ${isMenuOpen ? "open" : "close"}`}>
      <ul className="header__nav-list">
        <li onClick={toggleMenu}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li onClick={toggleMenu}>Company</li>
        <li onClick={toggleMenu}>
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
