import React, { useState } from "react";
import google_icon from "./assest/google-icon.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logo from "./assest/Logo.png";
import Buttons from "./buttons";
import "./css/LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign in");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["jwt"]);

  const loginRequest = async (email, password) => {
    const url = "http://localhost:5000/api/login";

    const requestBody = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Response:", data);
      const cookieOptions = {
        expires: new Date().getTime + data.maxAge,
      };
      setCookie("jwt", data.message, { path: "/" }, cookieOptions);
      navigate("/dashBoard");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const logOnce = (email, password) => {
    loginRequest(email, password);
    loginRequest(email, password);
  };

  const signUpRequest = async (
    firstName,
    lastName,
    email,
    password,
    userName
  ) => {
    const url = "http://localhost:5000/api/create-account";

    const requestBody = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      username: userName,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Response:", data);
      setAction("Sign in");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const redirectToGoogleLogin = () => {
    const googleChooserURL = "https://accounts.google.com/AccountChooser";
    window.location.href = googleChooserURL;
  };

  let inputField;
  let additionalButton;

  if (action === "Sign in") {
    inputField = (
      <>
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </>
    );
  } else if (action === "Sign up") {
    inputField = (
      <>
        <div className="input">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </>
    );
  } else if (action === "Forget-Password") {
    inputField = (
      <div className="input">
        <input type="email" placeholder="Enter your email" />
      </div>
    );

    additionalButton = (
      <Buttons content="Send Code" onClick={() => console.log("Code sent")} />
    );
  }

  return (
    <div className="container">
      {action === "Forget-Password" ? <div className="space"></div> : null}
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="blur-component">
        <div className="header">
          <div className="text">TBN</div>
        </div>

        <div className="inputs">{inputField}</div>

        {action === "Sign in" ? (
          <Buttons
            content="LOG IN"
            onClick={() => {
              logOnce(email, password);
            }}
          />
        ) : action === "Forget-Password" ? (
          additionalButton
        ) : (
          <Buttons
            content="SIGN UP"
            onClick={() => {
              signUpRequest(firstName, lastName, email, password, userName);
            }}
          />
        )}

        {action === "Forget-Password" ? (
          <div></div>
        ) : action === "Sign up" ? (
          <div></div>
        ) : (
          <div
            className="recover"
            onClick={() => {
              setAction("Forget-Password");
            }}
          >
            Forgot password
          </div>
        )}

        {action !== "Sign up" && (
          <div className="create-account-container">
            <div className="question-to-create">Don't have an account?</div>

            <div
              className="create-text"
              onClick={() => {
                setAction("Sign up");
              }}
            >
              Create One
            </div>
          </div>
        )}

        {action === "Sign in" ? (
          <div></div>
        ) : (
          <div
            className="return-to-login"
            onClick={() => {
              setAction("Sign in");
            }}
          >
            Already have account
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
