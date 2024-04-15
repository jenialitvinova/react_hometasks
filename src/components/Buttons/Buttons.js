import React from 'react';
import "./Buttons.scss";

function Button({ buttonInfo, onClick, type = 'primary'}) {
    return (
        <button onClick={onClick} className={`button button--${type}`}>
            {buttonInfo}
        </button>
    );
}

export default Button;