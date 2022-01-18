import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../Assets/x.svg";
import { ReactComponent as MenuIcon } from "../Assets/menu.svg";
import "../Styles/Header.css";
import Logo from "../Assets/JDevLogo.png"

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#top"><img id="logo"src={Logo} alt="JDevLogo" /></a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#about" id="aboutLink">ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#skills" id="skillsLink">SKILLS</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#projects" id="projectsLink">PROJECTS</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#contact" id="contactLink">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;