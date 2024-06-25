import React from "react";
import Copyright from "./Copyright/Copyright";
import Navigation from "./Navigation/Navigation";
import FooterAttribution from "./FooterAttribution/FooterAttribution";
import Links from "./FooterAttribution/Links";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import darkInstagram from "../../assets/dark-instagram.svg";
import darkTwitter from "../../assets/dark-twitter.svg";
import darkYoutube from "../../assets/dark-youtube.svg";
import "./Footer.css";
import { useTheme } from "../../context/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer className="footer flex-elem">
      <div className="footer__info flex-elem">
        <Copyright />
        <Navigation />
      </div>
      <div className="footer__media flex-elem">
        <FooterAttribution />
        <nav className="footer__nav flex-elem">
          <Links img={theme === "light" ? instagram : darkInstagram} />
          <Links img={theme === "light" ? twitter : darkTwitter} />
          <Links img={theme === "light" ? youtube : darkYoutube} />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
