import React from "react";
import "./Navbar.css"; 
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <nav className="about-navbar"> */}
        <div className="logo">🌱 VegiMart</div>
        <div className="nav_link">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            About us
          </NavLink>
        </li>
        <li className="Partner-with-us">
          <NavLink to="/Partner-with-us" className="nav-link">
            Partner with us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Blog" className="nav-link">
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact with us" className="nav-link">
            Contact with us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
        </div>
      {/* </nav> */}
    </div>
  );
};

export default Navbar;

