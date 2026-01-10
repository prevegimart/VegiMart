import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AppNavigator.css';
import { FaBars } from 'react-icons/fa';
// import logo from '../image/logo.png';
import Account from './Account/Account';
const Navigator = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
  
      {/* <div className="nav-logo-container"> */}
        <NavLink to="/" end>
          <div className="logo">🌱 VegiMart</div>
        </NavLink>
      {/* </div> */}

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="menu-icon" />
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <NavLink to="/home" className="nav-link" end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Services" className="nav-link">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Career" className="nav-link">
            Career
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/support" className="nav-link">
            Support
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <Account />
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;