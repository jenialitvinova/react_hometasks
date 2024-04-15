import "./Cart.scss";
import CartImg from "../../../assets/Cart.svg";
import { cartQuantity } from "../../../__mocks__/testData";

function Cart() {
    return (
        <button className="header__button">
            <div className="header__cart flex-elem">
                <img className="header__cart-img" src={CartImg} alt="Cart-img" />
                <div className="header__cart-circle flex-elem blue">
                    {cartQuantity}
                </div>
            </div>
        </button>
    );
}

export default Cart;