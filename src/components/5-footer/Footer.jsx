import React from "react";
import "./footer.css";
const Footer = () => {
  return (
   <nav> <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="">Datenschutz</a>
        </li>
        <li>
          <a href="">Impressum</a>
        </li>
      </ul>

      <p>© 2026 Spencer Sharp. All rights reserved.</p>
    </footer>
    </nav>
  );
};

export default Footer;