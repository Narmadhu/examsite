import React from "react";
import "../pageStyle/Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <form className="signup-form">
        <h1>Sign Up </h1>
        <input className="signup-name" type="text" placeholder="Name" />
        <input
          className="signup-email"
          type="text"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          className="signup-password"
          type="password"
          placeholder="Password"
        />
        <button className="signup-btn black" type="submit">
          Sign Up
        </button>
        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
export default Signup;
