import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, ChangeEvent, FormEvent } from "react";
import auth from "../../firebase-config";
import "./LoginPage.css";
import Button from "../../components/Buttons/Buttons";
import {useAppDispatch, useAppSelector} from "../../hooks/globalhooks";
import {actions} from "../../store/slices/auth.slice";
import {useNavigate} from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [activeButton, setActiveButton] = useState<"submit" | "cancel">(
    "submit",
  );

  const isLogged = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const signIn = (e: FormEvent) => {
    e.preventDefault();
    setActiveButton("submit");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch(actions.isLogged(true));
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        dispatch(actions.isLogged(false));
      });
  };

  const handleClear = (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    setPassword("");
    setEmail("");
    setActiveButton("cancel");
    console.log(isLogged)
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="background flex-elem">
      <main className="login-main flex-elem">
        <h1 className="login-main__title blue">Log in</h1>
        <form className="main__form flex-elem">
          <label className="form__label flex-elem">
            User email
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              id="email"
            />
          </label>
          <label className="form__label flex-elem">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              id="password"
            />
          </label>
          <div className="form__buttons flex-elem">
            <Button
              buttonInfo="Submit"
              className="form__submit"
              onClick={signIn}
              type={activeButton === "submit" ? "primary" : "transparent"}
            />
            <Button
              buttonInfo="Cancel"
              onClick={handleClear}
              className="form__cancel"
              type={activeButton === "cancel" ? "primary" : "transparent"}
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
