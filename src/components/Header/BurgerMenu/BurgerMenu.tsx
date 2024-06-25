import React from "react";
import "./BurgerMenu.css";

interface BurgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
    </div>
  );
};

export default BurgerMenu;
