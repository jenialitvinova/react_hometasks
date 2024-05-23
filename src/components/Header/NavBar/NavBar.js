import React from "react";
import "./NavBar.scss";
import { navList } from "../../../__mocks__/testData";

const NavBar = () => {
    const navContent = (
        <ul className="header__nav-list flex-elem">
            {navList.map((elem) => (
                <li
                    key={elem.id}
                    className={
                        elem.text === "Menu"
                            ? "header__li blue flex-elem"
                            : "header__li flex-elem"
                    }
                >
                    {elem.text}
                </li>
            ))}
        </ul>
    );

    return <nav className="header__nav flex-elem">{navContent}</nav>;
};

export default NavBar;
