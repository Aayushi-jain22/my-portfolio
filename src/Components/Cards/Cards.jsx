import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Card.css";

const projects = [
  {
    title: "GyataGPT AI",
    category: "Gen AI · SaaS",
    featured: true,
    techStack: ["Python", "Django", "DRF", "Pandas", "Celery", "Redis", "BGEM3", "Docker", "React.js", "MySQL"],
    description:
      "A cloud-based AI chatbot platform enabling businesses to create intelligent virtual assistants for websites, Shopify stores and external knowledge sources — delivering automated, context-aware customer interactions.",
    responsibilities: [
      "Maintained the backend infrastructure using Python Django, ensuring robust and scalable server-side operations.",
      "Integrated 8+ data sources, including Shopify, WordPress and website connectors, so businesses can train chatbots on diverse data through well-defined REST APIs.",
      "Developed and optimized 60+ RESTful APIs using Django REST Framework, improving response time by 25%.",
      "Designed chatbot query APIs that accept user input, call the AI model API and return relevant, context-aware responses.",
      "Implemented training features for processing scraped data, triggering embedding generation and persisting results to the database.",
      "Refined AI response workflows by evaluating outputs, improving contextual accuracy by 20% across chatbot interactions.",
    ],
    blog: "https://gyatagpt.ai/",
  },
  {
    title: "TripMate AI Travel Assistant",
    category: "Agentic AI · RAG",
    featured: true,
    techStack: ["Python", "LLM", "Agentic AI", "RAG", "LangChain", "LangGraph", "Tool Calling", "Ollama", "Llama 3.1"],
    description:
      "An agentic AI travel assistant that reasons across multiple tools — destination knowledge and live weather data — to deliver context-aware, real-time travel recommendations.",
    responsibilities: [
      "Engineered an agent with dynamic multi-tool reasoning over destination knowledge and live weather data.",
      "Integrated 2 LLM-callable tools — a destination-knowledge RAG search and a weather forecast lookup — resolving multi-source queries across a 4-city, 20-category knowledge base through dynamic tool orchestration.",
      "Validated agent reliability with 21 unit/integration tests covering tool selection, multi-tool execution and error handling.",
    ],
  },
  {
    title: "MyLiveCart",
    category: "E-commerce · Live Commerce",
    techStack: ["Node.js", "Express.js", "React", "Redux", "MongoDB" , "HTML", "CSS" , "JavaScript"],
    description:
      "A live commerce platform for multi-vendor stores that combines real-time shopping, live streaming and analytics into one scalable experience for customers, sellers and admins.",
    responsibilities: [
      "Developed a live e-commerce platform for multi-vendor stores and live streaming, supporting three roles — Customer, Seller and Admin.",
      "Built product and vendor management workflows so store owners can list items, manage inventory and publish live sale events.",
      "Engineered a SuperAdmin dashboard for user management, seller onboarding, store verification, payouts, feedback and engagement analytics.",
      "Designed and maintained 40+ API endpoints covering users, seller onboarding, product catalog, payments and analytics, plus automated email workflows using Celery background jobs.",
      "Integrated MongoDB data models to support vendor storefronts, orders and live streaming session history.",
    ],
  },
  {
    title: "Blood Care",
    category: "Healthcare · Web App",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MySQL"],
    description:
      "A web-based blood donation management system that connects patients, donors and blood banks to streamline blood donation and requests.",
    responsibilities: [
      "Developed a secure and responsive application using React.js and Node.js.",
      "Integrated MySQL database to manage donor details, blood groups, blood banks and stock levels.",
      "Implemented an emergency donor matching system that instantly connects patients with suitable donors.",
      "Designed a secure admin panel for authorized management and monitoring.",
    ],
    github: "https://github.com/Aayushi-jain22/BloodCare",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="page">
      <div className="wrap">
        <div className="page-head">
          <span className="eyebrow">Selected work</span>
          <h1>My Projects</h1>
          <p>AI-driven platforms, agentic workflows and full-stack products I've built end to end.</p>
        </div>
        <div className="projects-container">
          {projects.map((project, index) => (
            <article className="project-card glass" key={project.title} style={{ "--i": index }}>
              <div className="project-top">
                <span className="project-cat">{project.category}</span>
                {project.featured && <span className="featured">★ Featured</span>}
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="responsibilities">
                {project.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
              {(project.github || project.blog) && (
                <div className="buttons">
                  {project.blog && (
                    <a href={project.blog} target="_blank" rel="noopener noreferrer" className="btn-x btn-ghost">
                      <FaExternalLinkAlt /> Visit site
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-x btn-ghost">
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
