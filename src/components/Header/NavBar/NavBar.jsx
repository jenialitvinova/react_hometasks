import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav className="header__nav flex-elem">
    <ul className="header__nav-list flex-elem">
      <li className="flex-elem">
        <NavLink to="/" exact="true">
          Home
        </NavLink>
      </li>
      <li className="flex-elem">
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li className="flex-elem">Company</li>
      <li className="flex-elem">
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
