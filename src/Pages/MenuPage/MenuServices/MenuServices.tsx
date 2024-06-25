import React from "react";
import "./MenuServices.css";
import { phone } from "../../../__mocks__/testData";

const MainMenu: React.FC = () => {
  return (
    <section className="menu-services flex-elem">
      <h1 className="menu-services__title blue">Browse our menu</h1>
      <h2 className="services__sub-title">
        Use our menu to place an order online, or{" "}
        <span className="menu-services__b blue">
          phone<div className="phone-container">{phone}</div>
        </span>{" "}
        our store to place a pickup order. Fast and fresh food.
      </h2>
    </section>
  );
};

export default MainMenu;
