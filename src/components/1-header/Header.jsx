import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      
      {/* 🔥 Mobile Menu Button */}
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>

      {/* 💎 Logo (NEW) */}
      <div className="logo-container">
  <img src="/logo1.png" alt="Hanna Logo" className="logo-img" />

  <h2 className="logo">
    Hanna<span>.</span>
  </h2>
</div>

      {/* 🧭 Navigation */}
      <nav>
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
        </ul>
      </nav>

      {/* 🌙 Theme Toggle */}
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {/* 📱 Modal Menu */}
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>

            <li>
              <a href="#about" onClick={() => setshowModal(false)}>About</a>
            </li>

            <li>
              <a href="#projects" onClick={() => setshowModal(false)}>Projects</a>
            </li>

            <li>
              <a href="#contact" onClick={() => setshowModal(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;