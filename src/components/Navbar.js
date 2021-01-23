import React from "react";
import "./Navbar.css";

import logo from "./img/logo.png";

function Navbar() {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} className="logo" />
      </div>
      <div className="right">
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
