import {
  ArrowUpRight,
  Code2,
  MapPin,
  ShieldCheck,
  Bell,
  Car,
} from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            FEATURED PROJECT
          </p>

          <h2>
            Building something
            <span> real.</span>
          </h2>

          <p className="section-subtitle">
            A production-style application where I put my backend,
            database, authentication and frontend skills into practice.
          </p>

        </div>

        <article className="featured-project">

          {/* Project Preview */}
          <div className="project-visual">

            <div className="project-browser">

              <div className="project-browser-header">

                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-address">
                  alridez.app
                </div>

              </div>

              <div className="project-dashboard">

                <div className="dashboard-top">

                  <div>

                    <span className="dashboard-label">
                      MOBILITY PLATFORM
                    </span>

                    <h3>
                      Alridez
                    </h3>

                  </div>

                  <div className="dashboard-status">
                    <span></span>
                    Live
                  </div>

                </div>

                <div className="dashboard-route">

                  <div className="route-point">

                    <span className="route-dot"></span>

                    <div>
                      <small>
                        FROM
                      </small>

                      <strong>
                        Bengaluru
                      </strong>
                    </div>

                  </div>

                  <div className="route-line"></div>

                  <div className="route-point">

                    <span className="route-dot destination"></span>

                    <div>
                      <small>
                        TO
                      </small>

                      <strong>
                        Chittoor
                      </strong>
                    </div>

                  </div>

                </div>

                <div className="dashboard-cards">

                  <div>
                    <Car size={18} />
                    <span>
                      Ride Sharing
                    </span>
                  </div>

                  <div>
                    <MapPin size={18} />
                    <span>
                      Rentals
                    </span>
                  </div>

                  <div>
                    <Bell size={18} />
                    <span>
                      Requests
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Project Information */}
          <div className="project-content">

            <div className="project-number">
              01
            </div>

            <h3>
              Alridez
            </h3>

            <p className="project-tagline">
              All Rides. A to Z. One Platform.
            </p>

            <p className="project-description">
              Alridez is an all-in-one mobility platform designed to
              bring ride sharing, vehicle rentals and provider services
              together on a single platform.
            </p>

            <p className="project-description">
              I built the application as a full-stack project, working
              across backend architecture, REST APIs, database design,
              authentication, booking workflows, notifications,
              provider matching and frontend integration.
            </p>

            <div className="project-features">

              <div>
                <ShieldCheck size={17} />
                <span>
                  OTP + JWT Authentication
                </span>
              </div>

              <div>
                <Car size={17} />
                <span>
                  Ride Sharing & Rentals
                </span>
              </div>

              <div>
                <Bell size={17} />
                <span>
                  Real-time Notifications
                </span>
              </div>

              <div>
                <MapPin size={17} />
                <span>
                  Provider Location Matching
                </span>
              </div>

            </div>

            <div className="project-tech">

              <span>Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>JPA</span>
              <span>React</span>
              <span>JWT</span>

            </div>

            <div className="project-actions">

              {/* GitHub */}
              <a
                href="https://github.com/reddeppad18-oss/oneride"
                target="_blank"
                rel="noreferrer"
                className="project-github"
              >
                <Code2 size={17} />
                GitHub
              </a>

              {/* Live Application */}
              <a
                href="https://oneride.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-live"
              >
                View Live
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </article>

      </div>
    </section>
  );
}

export default Projects;