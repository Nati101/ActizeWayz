import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";
function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/img/Logo.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/career"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CAREERS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
