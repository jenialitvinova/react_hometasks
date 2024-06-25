import React, { useState, useEffect, useRef } from "react";
import Logo from "../Logo/Logo";
import Cart from "./Cart/Cart";
import NavBar from "./NavBar/NavBar";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import "./Header.css";
import { useTheme } from "../../context/ThemeContext";
import LightMode from "../../assets/LightModeIcon.svg";
import DarkMode from "../../assets/DarkModeIcon.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="header flex-elem">
      <Logo />
      <div className="header__wrapper flex-elem" ref={menuRef}>
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Cart />
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <button className="header__theme-icon flex-elem" onClick={toggleTheme}>
          <img
            className="header__theme-img"
            src={theme === "light" ? DarkMode : LightMode}
            alt="theme-icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
