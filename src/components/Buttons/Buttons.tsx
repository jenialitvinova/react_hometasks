import React from "react";
import "./Buttons.css";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  buttonInfo,
  onClick,
  type = "primary",
  className,
}) => (
  <button onClick={onClick} className={`button button--${type} ${className}`}>
    {buttonInfo}
  </button>
);

export default Button;
