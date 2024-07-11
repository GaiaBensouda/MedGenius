// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/MedGenius.png" alt="MedGenius" className="logo" />
        <h1>MedGenius</h1>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/auth" className="login-button">Login</Link></li>
          <li><Link to="/contact" className="talk-button">Talk to Expert</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
