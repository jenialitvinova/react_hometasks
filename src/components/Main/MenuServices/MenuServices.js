import React from 'react';
import "./MenuServices.scss";
import {phone} from "../../../__mocks__/testData"

function MainMenu() {
    return (
        <section className="menu-services flex-elem">
            <h1 className="menu-services__title blue">Browse our menu</h1>
            <h2 className="services__sub-title">Use our menu to place an order online, or <div className="menu-services__b blue">phone<div className="phone-container">{phone}</div></div> our store to place a pickup order. Fast and fresh food.</h2>
        </section>
    );
}

export default MainMenu;