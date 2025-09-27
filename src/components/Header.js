import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <div className="logo">
            <span className="logo-text">LR</span>
          </div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "nav-menu--open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? "hamburger--open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
