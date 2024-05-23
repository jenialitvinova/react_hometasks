import React, { Component } from 'react';
import "./Buttons.scss";

class Button extends Component {
    render() {
        const { buttonInfo, onClick, type = 'primary' } = this.props;
        return (
            <button onClick={onClick} className={`button button--${type}`}>
                {buttonInfo}
            </button>
        );
    }
}

export default Button;