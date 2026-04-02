import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="name">
          <img src="img/logo.webp" alt="Avatar" />
          <h2>ABRAHAM PECH</h2>
        </div>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <div className={`toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`menu-responsive ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about-me" onClick={closeMenu}>About me</a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
