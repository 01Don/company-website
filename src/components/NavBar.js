import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/TRUST LOGO 2024.png";
import "./NavBar.css";
import { IoClose, IoMenu } from "react-icons/io5";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="Nav">
      <div className="Nav-container">
        <Link to="/" className="Nav-logo">
          <img src={Logo} alt="logo" className="logo" />
         
        </Link>
        <div className="Nav-toggle" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </div>
        <nav className={`Nav-menu ${isOpen ? "Nav-menu-open" : ""}`}>
          <ul className="Nav-list">
            <li>
              <Link to="/" className="Nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="Nav-link" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="Nav-link" onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="Nav-link" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/SignUp">
              <button className="Nav-btn" onClick={toggleMenu}>
                Sign In
              </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
