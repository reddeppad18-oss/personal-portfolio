import {
  BriefcaseBusiness,
  Code2,
  Rocket,
  Target,
} from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>
            My development
            <span> journey.</span>
          </h2>

          <p className="section-subtitle">
            I'm currently building my professional experience through
            hands-on projects, continuous learning and real-world
            application development.
          </p>
        </div>

        <div className="experience-timeline">

          <article className="experience-item">

            <div className="experience-marker">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="experience-card">

              <div className="experience-header">

                <div>
                  <span className="experience-status">
                    CURRENT
                  </span>

                  <h3>
                    Java Backend Developer
                  </h3>

                  <p className="experience-company">
                    Fresher / Entry-Level
                  </p>
                </div>

                <span className="experience-date">
                  2026 — Present
                </span>

              </div>

              <p className="experience-description">
                Actively developing my backend engineering skills by
                building real-world applications using Java, Spring
                Boot, PostgreSQL and REST APIs.
              </p>

              <div className="experience-highlights">

                <div>
                  <Code2 size={17} />
                  <span>
                    Building REST APIs and backend business logic
                  </span>
                </div>

                <div>
                  <Rocket size={17} />
                  <span>
                    Developing and deploying full-stack applications
                  </span>
                </div>

                <div>
                  <Target size={17} />
                  <span>
                    Applying software engineering concepts through
                    hands-on projects
                  </span>
                </div>

              </div>

              <div className="experience-tech">

                <span>Java</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>REST API</span>
                <span>React</span>
                <span>Git</span>

              </div>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Experience;