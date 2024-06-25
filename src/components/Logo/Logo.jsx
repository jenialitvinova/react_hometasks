import "./Logo.css";
import LogoImg from "../../assets/Logo.svg";

const Logo = () => (
  <div className="logo flex-elem">
    <img src={LogoImg} alt="Logo-img" className="logo-img" />
  </div>
);

export default Logo;
