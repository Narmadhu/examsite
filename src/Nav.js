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
          <Link to="/skilllibrary" style={{ textDecoration: "none" }}>
            <li>Skill Library</li>
          </Link>
          <Link to="/features" style={{ textDecoration: "none" }}>
            <li>Features</li>
          </Link>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <li>Pricing</li>
          </Link>
        </ul>
        <div className="nav-btn">
          <button className="btn "> Log in</button>
          <button className="btn gray">Schedule a demo</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
