import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase-config";
import "./LoginPage.css";
import Button from "../../components/Buttons/Buttons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(null);
  const [activeButton, setActiveButton] = useState("submit");

  const signIn = (e) => {
    e.preventDefault();
    setActiveButton("submit");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLogged(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLogged(false);
      });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
    setIsLogged(null);
    setActiveButton("cancel");
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
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            ></input>
          </label>
          <label className="form__label flex-elem">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            ></input>
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
          {isLogged === null ? null : isLogged ? (
            <div className="successful">Successful login</div>
          ) : (
            <div className="error">Login error</div>
          )}
        </form>
      </main>
    </div>
  );
};

export default SignIn;
