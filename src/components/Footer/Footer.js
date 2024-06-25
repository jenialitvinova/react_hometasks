import Copyright from "./Copyright/Copyright";
import Navigation from "./Navigation/Navigation";
import FooterAttribution from "./FooterAttribution/FooterAttribution";
import Links from "./FooterAttribution/Links";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import "./Footer.scss";

const Footer = () => (
    <footer className="footer flex-elem">
        <div className="footer__info flex-elem">
            <Copyright />
            <Navigation />
        </div>
        <div className="footer__media flex-elem">
            <FooterAttribution />
            <nav className="footer__nav flex-elem">
                <Links img={instagram} />
                <Links img={twitter} />
                <Links img={youtube} />
            </nav>
        </div>
    </footer>
);

export default Footer;