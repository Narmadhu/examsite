import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Exam Site</h1>
        </Link>
        <ul>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <li>Pricing</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="nav-btn">
          <Link to="/login">
            <button className="btn "> Log in</button>
          </Link>
          <Link to="/signup">
            <button className="btn gray ">Sign up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
