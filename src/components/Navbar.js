import React from "react";
import "../css/Navbar.css";
import logo from '../icons/logo.png'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
     <Link to='/' className="navbar-logo">
        <img src={logo} alt='logo'/>
        <p>CesarAI</p>
     </Link>
    </div>
  );
}
