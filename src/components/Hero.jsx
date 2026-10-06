import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="status-dot"></span>
            Open to opportunities
          </div>

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Diviti <span>Reddeppa</span>
          </h1>

          <h2>
            Java Backend Developer
          </h2>

          <p className="hero-description">
            BCA graduate and fresher developer focused on building
            secure, scalable and real-world applications using Java,
            Spring Boot, PostgreSQL and React.
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Get In Touch
            </a>

          </div>

          <div className="hero-socials">

            {/* GitHub */}
            <a
              href="https://github.com/reddeppad18-oss"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={19} />
            </a>

            {/* LinkedIn - add your profile later */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={19} />
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="code-card">

            <div className="code-header">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>
                developer.java
              </span>

            </div>

            <div className="code-body">

              <p>
                <span className="code-purple">
                  public class
                </span>{" "}
                <span className="code-green">
                  Developer
                </span>
              </p>

              <p className="indent">
                <span className="code-purple">
                  private
                </span>{" "}
                <span className="code-blue">
                  String
                </span>{" "}
                name ={" "}
                <span className="code-yellow">
                  "Diviti Reddeppa"
                </span>;
              </p>

              <p className="indent">
                <span className="code-purple">
                  private
                </span>{" "}
                <span className="code-blue">
                  String
                </span>{" "}
                role ={" "}
                <span className="code-yellow">
                  "Java Backend Developer"
                </span>;
              </p>

              <p className="indent">
                <span className="code-purple">
                  private
                </span>{" "}
                <span className="code-blue">
                  boolean
                </span>{" "}
                learning ={" "}
                <span className="code-orange">
                  true
                </span>;
              </p>

              <br />

              <p className="indent">
                <span className="code-purple">
                  public void
                </span>{" "}
                <span className="code-green">
                  build
                </span>() {"{"}
              </p>

              <p className="indent-2">
                <span className="code-comment">
                  // Turning ideas into real applications
                </span>
              </p>

              <p className="indent">
                {"}"}
              </p>

              <p>
                {"}"}
              </p>

            </div>

          </div>

          <div className="hero-scroll">
            <ArrowDown size={16} />
            <span>
              Scroll to explore
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;