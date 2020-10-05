import React from "react";
import "../pageStyle/Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <form className="signup-form">
        <h1>Sign Up </h1>
        <input
          className="signup-name"
          type="text"
          placeholder="Name"
          required
        />

        <input
          className="signup-email"
          type="text"
          placeholder="Email"
          required
        />

        <input
          className="signup-password"
          type="password"
          placeholder="Password"
          required
        />

        <button className="signup-btn black">Sign Up</button>

        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
