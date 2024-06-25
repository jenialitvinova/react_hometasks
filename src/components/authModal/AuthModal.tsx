import React, { useEffect, useRef } from "react";
import "./AuthModal.css";
import Button from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  show: boolean;
  handleClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ show, handleClose }) => {
  const modalContent = useRef<HTMLInputElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as Node;
    if (modalContent.current && !modalContent.current.contains(target)) {
      handleClose();
    }
  };
  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);
  const navigate = useNavigate();
  if (!show) {
    return null;
  }

  return (
    <section className="modal-overlay" onClick={handleClick}>
      <div className="modal-content flex-elem" ref={modalContent}>
        <h1 className="blue">Please Log In</h1>
        <h2>You need to sign in to add items to your cart.</h2>
        <div className="modal__btns flex-elem">
          <Button
            buttonInfo="Log In"
            onClick={() => navigate("/login")}
          ></Button>
          <Button
            buttonInfo="Close"
            onClick={handleClose}
            type="transparent"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default AuthModal;
