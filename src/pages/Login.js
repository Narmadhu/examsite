import React from "react";
import "../pageStyle/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <form className="login-form">
        <h1>Log in </h1>
        <input
          className="login-email"
          type="text"
          placeholder="Email"
          required
        />
        <input
          className="login-password"
          type="password"
          placeholder="Password"
          required
        />
        <button className="login-btn black" type="submit">
          Log in
        </button>
        <p>
          Not have an Account? <Link to="/signup">Create Account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
