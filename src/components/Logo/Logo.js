import React, { Component } from 'react';
import "./Logo.scss";
import LogoImg from "../../assets/Logo.svg";

class Logo extends Component {
    render() {
        return (
            <div className="logo flex-elem">
                <img src={LogoImg} alt="Logo-img" className="logo-img" />
            </div>
        );
    }
}

export default Logo;
