import {
  Code2,
  BriefcaseBusiness,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              <span className="logo-mark">
                D
              </span>

              <span>
                Diviti Reddeppa
                <span className="logo-dot">.</span>
              </span>
            </a>

            <p>
              Java Backend Developer focused on building practical,
              secure and real-world applications.
            </p>

          </div>

          <nav className="footer-links">

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#experience">
              Experience
            </a>

            <a href="#education">
              Education
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>

          <div className="footer-socials">

            {/* GitHub */}
            <a
              href="https://github.com/reddeppad18-oss"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>

            {/* LinkedIn - add your profile later */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              type="button"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Diviti Reddeppa.
            All rights reserved.
          </p>

          <p>
            Built with React &amp; JavaScript
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;