import React, { useState, ChangeEvent, FormEvent } from "react";
import { auth } from "../../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "./LoginPage.css";
import Button from "../../components/Buttons/Buttons";
import { useAppDispatch } from "../../hooks/globalhooks";
import { actions } from "../../store/slices/auth.slice";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch(actions.isLogged(true));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        const extractedMessage = extractErrorMessage(error.message);
        console.log(extractedMessage);
        setIsError(true);
        setErrorMessage(extractedMessage);
        dispatch(actions.isLogged(false));
      });
  };

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(actions.isLogged(true));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        const extractedMessage = extractErrorMessage(error.message);
        console.log(extractedMessage);
        setIsError(true);
        setErrorMessage(extractedMessage);
        dispatch(actions.isLogged(false));
      });
  };

  const handleClear = (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    setPassword("");
    setEmail("");
    setIsError(false);
    setErrorMessage("");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const extractErrorMessage = (message: string) => {
    const regex = /auth\/([^)]+)\)/;
    const match = message.match(regex);
    return match ? match[1] : message;
  };

  return (
    <div className="background flex-elem">
      <main className="login-main flex-elem">
        <h1 className="login-main__title blue">Authentication</h1>
        <form className="main__form flex-elem">
          <div className="form-group flex-elem">
            <label className="form__label flex-elem" htmlFor="email">
              User email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              id="email"
              className="form-input"
            />
          </div>
          <div className="form-group flex-elem">
            <label className="form__label flex-elem" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              id="password"
              className="form-input"
            />
          </div>
          <div className="form__buttons flex-elem">
            <Button
              buttonInfo="Login"
              className="form__submit"
              onClick={handleSignIn}
              type="primary"
            />
            <Button
              buttonInfo="Sign Up"
              className="form__submit"
              onClick={handleSignUp}
              type="primary"
            />
            <Button
              buttonInfo="Cancel"
              onClick={handleClear}
              className="form__cancel"
              type="transparent"
            />
          </div>
          {isError && (
            <div className="error-message">{`Error: ${errorMessage}`}</div>
          )}
        </form>
      </main>
    </div>
  );
};

export default SignIn;
