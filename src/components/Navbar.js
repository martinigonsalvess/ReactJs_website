import React from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside"></div>
      <img src={Logo} alt="logo" />
      <div className="rightside">
        <Link to="/">Home</Link>
        <Link to="/">About us</Link>
        <Link to="/">Gallery</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
