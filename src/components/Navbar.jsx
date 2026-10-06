import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  FileText,
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-mark">D</span>

          <span className="logo-name">
            Diviti Reddeppa<span className="logo-dot">.</span>
          </span>
        </a>

        {/* Navigation */}
        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">

          {/* Theme Toggle */}
          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            type="button"
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Resume */}
          <a
            href="/resume/Diviti-Reddeppa-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="navbar-resume"
            onClick={closeMenu}
          >
            <FileText size={16} />
            Resume
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="navbar-contact"
            onClick={closeMenu}
          >
            Let's Talk
          </a>

          {/* Mobile Menu */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            type="button"
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;