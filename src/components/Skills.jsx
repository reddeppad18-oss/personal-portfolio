import {
  Code2,
  Database,
  Globe,
  GitBranch,
  Layers,
  Terminal,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      icon: <Code2 size={22} />,
      title: "Java",
      description: "Core Java, OOP, collections and exception handling.",
      tags: ["Java", "OOP", "Collections"],
    },
    {
      icon: <Layers size={22} />,
      title: "Spring Boot",
      description: "Building REST APIs and backend business logic.",
      tags: ["Spring Boot", "REST API", "JPA"],
    },
    {
      icon: <Database size={22} />,
      title: "Database",
      description: "Designing and working with relational databases.",
      tags: ["PostgreSQL", "SQL", "Hibernate"],
    },
    {
      icon: <Globe size={22} />,
      title: "Frontend",
      description: "Building responsive interfaces for web applications.",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      icon: <GitBranch size={22} />,
      title: "Version Control",
      description: "Managing projects and collaborating with Git.",
      tags: ["Git", "GitHub", "Branches"],
    },
    {
      icon: <Terminal size={22} />,
      title: "Tools & Deployment",
      description: "Working with development and deployment platforms.",
      tags: ["Maven", "Render", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">SKILLS</p>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

          <p className="section-subtitle">
            A practical technology stack focused on backend development,
            databases, APIs and modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;  