import React from "react";
import "./Logo.css";
import LogoImg from "../../assets/Logo.svg";

const Logo: React.FC = () => (
  <div className="logo flex-elem">
    <img src={LogoImg} alt="Logo-img" className="logo-img" />
  </div>
);

export default Logo;
