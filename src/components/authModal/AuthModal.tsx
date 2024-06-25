import React, { useEffect } from "react";
import "./AuthModal.css";
import Button from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  show: boolean;
  handleClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ show, handleClose }) => {
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
    <section className="modal-overlay">
      <div className="modal-content flex-elem">
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
