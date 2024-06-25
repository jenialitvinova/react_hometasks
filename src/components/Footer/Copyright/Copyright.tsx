import React from "react";
import Logo from "../../Logo/Logo";
import "./Copyright.css";

const Copyright: React.FC = () => (
  <div className="footer_copy flex-elem">
    <Logo />
    <h2>
      <span>Takeaway & Delivery template</span>
      <span>for small - medium businesses.</span>
    </h2>
  </div>
);

export default Copyright;
