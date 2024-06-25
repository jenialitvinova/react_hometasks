import React from "react";
import "./Logo.css";
import LogoImg from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="logo flex-elem" onClick={() => navigate("/")}>
      <img src={LogoImg} alt="Logo-img" className="logo-img" />
    </div>
  );
};

export default Logo;
