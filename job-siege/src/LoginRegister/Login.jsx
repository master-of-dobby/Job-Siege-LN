import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {};

  const handleForgotPassword = () => {};

  const handleSignUp = () => {};

  return (
    <>
      <div className="login">
        <div className="login-left"></div>
        <div className="login-right">
          <div className="app-name">
            <p>
              <span style={{ color: "#975842" }}>J</span>ob{" "}
              <span style={{ color: "#975842" }}>S</span>iege
            </p>
            <p
              style={{
                fontSize: "2vh",
                fontWeight: "500",
                fontFamily: "Preahvihear",
                marginLeft: "18vw",
              }}
            >
              - track your job
            </p>
          </div>
          {/* <div className="app-name-subtitle"></div> */}
          <div className="welcome-message">
            <div className="welcome-back">
              <p>Welcome back</p>
            </div>
            <div className="welcome-back-subtitles">
              <p>Enter your Credentials to access your account</p>
            </div>
          </div>
          <div className="login-form">
            <form>
              <label>Email address</label>
              <input
                type="email"
                value={emailId}
                name="emailId"
                onChange={(e) => setEmailId(emailId)}
                placeholder="Enter your email"
              ></input>

              <div className="password-spacing">
                <label>Password</label>
                <p onClick={handleForgotPassword} className="forgot-password">
                  forgot password ?
                </p>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(password)}
                name="password"
                placeholder="Enter your password"
              ></input>
              <button onClick={handleSubmit}>Sign In</button>
            </form>
          </div>
          <div className="or-line">
            <hr></hr>
            <p>or</p>
            <hr></hr>
          </div>
          <div className="dont-have-account">
            <p>
              Don't have an account?{" "}
              <span
                onClick={handleSignUp}
                style={{ color: "brown", cursor: "pointer" }}
              >
                Sign up
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
