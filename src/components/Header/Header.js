import NavBar from "./NavBar/NavBar";
import Logo from "../Logo/Logo";
import Cart from "./Cart/Cart";
import "./Header.scss";
import { useCart } from "../../Context/CartContext";

const Header = () => {
    const { cartQuantity } = useCart();

    return (
        <header className="header flex-elem">
            <Logo />
            <div className="header__wrapper flex-elem">
                <NavBar />
                <Cart cartQuantity={cartQuantity} />
            </div>
        </header>
    );
};

export default Header;