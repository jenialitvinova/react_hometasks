import "./NavBar.scss";
import { navList } from "../../../__mocks__/testData";
import Cart from "../Cart/Cart";

function NavBar() {
    const navContent = (
        <ul className="header__nav-list flex-elem">
            {navList.map((elem, i) => (
                <li key={elem.id} className={elem.text === "Menu" ? 'header__li blue flex-elem' : "header__li flex-elem"}>
                    {elem.text}
                </li>
            ))}
        </ul>
    );

    return (
        <nav className = "header__nav flex-elem">
            {navContent}
            <Cart/>
        </nav>
    );
}

export default NavBar;