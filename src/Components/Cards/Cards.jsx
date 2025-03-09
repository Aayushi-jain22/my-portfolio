import React from "react";
import "./Card.css";

const projects = [
  {
    title: "GyataGPT AI",
    duration: "May 2024 - Present",
    techStack: ["Laravel", "MySQL", "Angular", "Python"],
    description:
      "A cloud-native platform enabling enterprises to create intelligent chatbots and virtual assistants. It integrates with over 10+ data sources like Shopify, Wordpress providing real-time, context-aware interactions.",
    responsibilities: [
      "Maintained the backend infrastructure using Laravel ensuring robust and scalable server-side operations.",
      "Developed and integrated Laravel APIs to connect with various data sources for seamless data retrieval.",
      "Utilized MySQL for efficient database management, ensuring high performance and reliability.",
      "Implemented JWT and Passport authentication for secure and efficient user authorization.",
    ],
    // github: "#",
    blog: "https://gyatagpt.ai/",
  },
  {
    title: "Blood Care",
    duration: "Sept 2021 – Nov 2021",
    techStack: ["React.js", "Node.js", "MySQL"],
    description:
      "A web-based blood donation management system that connects patients, donors, and blood banks to streamline blood donation and requests.",
    responsibilities: [
      "Developed a secure and responsive application using React.js and Node.js.",
      "Integrated MySQL database to manage donor details, blood groups, blood banks, and stock levels.",
      "Implemented an emergency donor matching system that instantly connects patients with suitable donors.",
      "Designed a secure admin panel for authorized management and monitoring.",
    ],
    github: "https://github.com/Aayushi-jain22/BloodCare",
    // liveDemo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="duration">{project.duration}</p>
            <p>{project.description}</p>
            <ul className="responsibilities">
              {project.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
            <div className="tech-stack">
              <strong>Technologies Used: </strong>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="buttons">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github"
                >
                  GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn demo"
                >
                  Live Demo
                </a>
              )}
              {project.blog && (
                <a
                  href={project.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn blog"
                >
                  Read More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
