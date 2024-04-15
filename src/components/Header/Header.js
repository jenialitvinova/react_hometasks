import NavBar from "./NavBar/NavBar";
import Logo from "../Logo/Logo";
import "./Header.scss";

function Header() {
    return (
        <header className="header flex-elem">
            <Logo/>
            <NavBar/>
        </header>
    );
}

export default Header;