import React from "react";
import "./Buttons.css";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  buttonInfo,
  onClick,
  type = "primary",
  className,
  disabled = false,
}) => (
  <button
    onClick={onClick}
    className={`button button--${type} ${className}`}
    disabled={disabled}
  >
    {buttonInfo}
  </button>
);

export default Button;
