import React, { useState } from "react";
import google_icon from './assest/google-icon.png'
import Logo from './assest/Logo.png'
import Buttons from "./buttons";
import "./css/LoginSignup.css"

const LoginSignup = () => {
    const [action, setAction] = useState("Sign in");

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
                    <input type="email" placeholder="Username or Email" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
            </>
        );
    } else if (action === "Sign up") {
        inputField = (
            <>
                <div className="input">
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="input">
                    <input type="email" placeholder="Email or phone number" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" />
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
            {action==="Forget-Password"? <div className="space"></div>: null}
            <div className="logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="blur-component">
            <div className="header">
                <div className="text">TBN</div>
            </div>

            <div className="inputs">
                {inputField}
            </div>

            {action === "Sign in" ? <Buttons content="LOG IN" /> : action === "Forget-Password" ? additionalButton : <Buttons content="SIGN UP" />}

            {action === "Forget-Password"? <div></div>: action==="Sign up"?<div></div>:
                <div className="recover" onClick={() => { setAction("Forget-Password") }}>
                    Forgot password
                </div>
            }
            
            {action==="Forget-Password"? <div></div>:
                action==="Sign up"?
                <div className="signup-text-cotainer">
                    <div className="underline"></div>
                    
                    <div className="signUp-text">
                        <p> Sign Up with</p>
                    </div>
                    <div className="underline"></div>
                </div>:

                <div className="signup-text-cotainer">
                <div className="underline"></div>

                <div className="signUp-text">
                    <p> Sign In with</p>
                </div>
                <div className="underline"></div>
                </div>
                }
            
                
                {action!=="Forget-Password" && (
                    <div className="google-signup" onClick={redirectToGoogleLogin}>
                        <div className="google-logo-container">
                            <img src={google_icon} alt="" />
                        </div>

                        <div>
                            <p className="google-text">Google Account</p>
                        </div>
                    </div>
                )}
            
            {action!=="Sign up" && (
                    <div className="create-account-container">
                    <div className="question-to-create">
                        Don't have an account?
                    </div>
    
                    <div className="create-text" onClick={() => { setAction("Sign up") }}>
                        Create One
                    </div>
                </div>
                )}
            

            {action === "Sign in" ? <div></div> :
                <div className="return-to-login" onClick={() => { setAction("Sign in") }}>
                    Already have account
                </div>}
        </div>
        </div>
    );
}

export default LoginSignup;