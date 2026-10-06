import {
  BookOpen,
  GraduationCap,
  Award,
  Code2,
} from "lucide-react";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            EDUCATION
          </p>

          <h2>
            My academic
            <span> foundation.</span>
          </h2>

          <p className="section-subtitle">
            My academic background and the technical foundation that
            led me toward software development.
          </p>

        </div>

        <div className="education-grid">

          {/* Main Education */}
          <article className="education-card education-main">

            <div className="education-icon">
              <GraduationCap size={24} />
            </div>

            <div className="education-content">

              <span className="education-type">
                UNDERGRADUATE DEGREE
              </span>

              <h3>
                Bachelor of Computer Applications
              </h3>

              <p className="education-institution">
                Vignanasudha Degree and PG College, Chittoor
              </p>

              <p className="education-institution">
                Affiliated to Sri Venkateswara University, Tirupati
              </p>

              <div className="education-meta">

                <span>
                  2022 — 2025
                </span>

                <span>
                  BCA
                </span>

              </div>

              <p className="education-description">
                Completed my Bachelor of Computer Applications with
                a foundation in programming, databases, web
                development, software engineering and computer
                science fundamentals.
              </p>

              <div className="education-tags">

                <span>Java</span>
                <span>SQL</span>
                <span>Programming</span>
                <span>Web Development</span>

              </div>

            </div>

          </article>

          {/* Supporting Education Information */}
          <div className="education-side">

            <article className="education-small-card">

              <div className="education-small-icon">
                <Code2 size={20} />
              </div>

              <div>

                <h3>
                  Technical Foundation
                </h3>

                <p>
                  Programming fundamentals, object-oriented
                  programming, databases, web technologies and
                  software development concepts.
                </p>

              </div>

            </article>

            <article className="education-small-card">

              <div className="education-small-icon">
                <BookOpen size={20} />
              </div>

              <div>

                <h3>
                  Continuous Learning
                </h3>

                <p>
                  Continuously improving my skills through hands-on
                  projects, documentation, coding practice and
                  building real-world applications.
                </p>

              </div>

            </article>

            <article className="education-small-card">

              <div className="education-small-icon">
                <Award size={20} />
              </div>

              <div>

                <h3>
                  Project-Based Learning
                </h3>

                <p>
                  Applying academic concepts to practical software
                  projects such as my flagship Alridez application.
                </p>

              </div>

            </article>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;