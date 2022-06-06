import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./../../assets/menu";
import Logo from "./../../assets/Logo.js";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="navigation">
      <div className="brand">
        <div className="brand-name">
          <Logo />
        </div>
        <h3 style={{ color: "#303C6C" }}>Dynasty</h3>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <MenuIcon />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu-expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li className="li-log-btns">
            {/* <Link to="login"> */}
            <button className="li-log-out">Logout</button>
            {/* </Link> */}

            {/* <Link to="regester"> */}
            <button className="li-sign-up">Signup</button>
            {/* </Link> */}
          </li>
        </ul>
      </div>
      <div className="log-btns">
        <Link to="login">
          <button className="log-out">Logout</button>
        </Link>
        <Link to="regester">
          <button className="sign-up">Signup</button>
        </Link>
      </div>
    </div>
  );
}
