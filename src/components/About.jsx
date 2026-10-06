import {
  Code2,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Building software with
            <span> purpose.</span>
          </h2>

          <p className="section-subtitle">
            I'm a BCA graduate and aspiring Java Backend Developer
            who enjoys turning ideas into practical, real-world
            applications.
          </p>

        </div>

        <div className="about-grid">

          <div className="about-content">

            <p>
              I am a fresher developer focused on backend development
              with Java and Spring Boot. I enjoy designing REST APIs,
              working with databases, implementing authentication and
              building business logic that solves real problems.
            </p>

            <p>
              My flagship project, <strong>Alridez</strong>, is an
              all-in-one mobility platform designed to bring different
              ride and vehicle services together on a single platform.
              Through this project, I have worked across backend
              development, database design, authentication,
              notifications, frontend integration and deployment.
            </p>

            <p>
              I completed my Bachelor of Computer Applications from
              <strong>
                {" "}Vignanasudha Degree and PG College, Chittoor
              </strong>,
              affiliated to Sri Venkateswara University, Tirupati.
            </p>

            <p>
              I am currently looking for my first professional
              software development opportunity where I can continue
              learning, contribute to a team and grow as a backend
              developer.
            </p>

          </div>

          <div className="about-cards">

            <div className="about-card">

              <div className="about-card-icon">
                <Code2 size={22} />
              </div>

              <div>
                <h3>
                  Backend Development
                </h3>

                <p>
                  Java, Spring Boot, REST APIs and business logic.
                </p>
              </div>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <Database size={22} />
              </div>

              <div>
                <h3>
                  Database
                </h3>

                <p>
                  PostgreSQL, SQL, JPA and Hibernate.
                </p>
              </div>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h3>
                  Security
                </h3>

                <p>
                  JWT authentication and phone OTP based login.
                </p>
              </div>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <Server size={22} />
              </div>

              <div>
                <h3>
                  Deployment
                </h3>

                <p>
                  GitHub, Render, Vercel and production deployment.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;