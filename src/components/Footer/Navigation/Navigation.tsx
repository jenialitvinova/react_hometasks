import React from "react";
import { footerNavigation } from "../../../__mocks__/testData";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="footer__nav flex-elem">
        {footerNavigation.map((item) => (
          <li className="flex-elem" key={item.id}>
            {item.content.map((content, contentIndex) => {
              const contentElement =
                item.id === 2 ? (
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );

              return (
                <p
                  className={
                    contentIndex === 0 ? "footer_p black" : "footer__p"
                  }
                  key={contentIndex}
                >
                  {contentElement}
                </p>
              );
            })}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
