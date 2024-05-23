import "./Buttons.scss";

const Button = ({ buttonInfo, onClick, type = "primary" }) => (
    <button onClick={onClick} className={`button button--${type}`}>
        {buttonInfo}
    </button>
);

export default Button;