import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => (
    <nav className="header__nav flex-elem">
        <ul className="header__nav-list flex-elem">
            <li className="flex-elem">
                <NavLink to="/" activeclassname="active" exact="true">
                    Home
                </NavLink>
            </li>
            <li className="flex-elem">
                <NavLink to="/menu" activeclassname="active">
                    Menu
                </NavLink>
            </li>
            <li className="flex-elem">Company</li>
            <li className="flex-elem">Login</li>
        </ul>
    </nav>
);

export default NavBar;