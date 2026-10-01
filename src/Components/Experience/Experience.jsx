import React from "react";
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCode } from "react-icons/fa";
import "./Experience.css";

const jobs = [
  {
    company: "Zehntech Technologies Pvt. Ltd, Indore",
    url: "https://www.zehntech.com/",
    role: "Junior Software Engineer",
    date: "May 2024 – Mar 2026",
    points: [
      "Designed and delivered enterprise Python applications using Django, DRF and Express.js, integrating Shopify, WordPress APIs and AI/LLM workflows across SaaS platforms — reducing development time by 20% while owning back-end architecture and API contracts.",
      "Created and maintained 50+ production-grade APIs using FastAPI, Express.js and DRF, integrating microservice backends across multiple SaaS products and reducing integration time by 20%.",
      "Integrated LLM-powered features with Python backend services and REST APIs, enabling intelligent data processing and chatbot functionality.",
      "Optimized database queries and APIs in multi-tenant systems, improving response time by 30% and supporting 3x user scalability.",
      "Built asynchronous background jobs with Celery & Redis, reducing processing time by 40%, and used Docker for containerized development and deployment across teams.",
      "Managed MySQL databases for high performance and reliability, and collaborated with frontend developers and AI/ML teams to ship features end to end.",
    ],
    tags: ["Python", "Django", "DRF", "FastAPI", "Express.js", "Celery", "Redis", "Docker", "MySQL", "LLM"],
  },
  {
    company: "Ninebit Computing Pvt. Ltd, Indore",
    url: "https://www.ninebit.in/",
    role: "Associate Software Engineer",
    date: "Jan 2024 – Mar 2024",
    points: [
      "Utilized React.js to develop interactive and dynamic front-end components.",
      "Collaborated with team members using Git for version control and organized modifications efficiently.",
      "Demonstrated strong problem-solving skills by troubleshooting and resolving technical issues.",
      "Developed and enhanced user interfaces, implemented dashboards, and used libraries for efficient data fetching and state management.",
    ],
    tags: ["React.js", "Git", "Dashboards"],
  },
];

const skillGroups = [
  { title: "Languages", items: ["Python", "JavaScript", "C++", "SQL"] },
  { title: "Backend & Libraries", items: ["Django", "Django REST Framework", "FastAPI", "Node.js", "Express.js", "Celery", "Redis"] },
  { title: "AI / GenAI", items: ["Gen AI", "LLM", "RAG", "Embeddings", "AI Agents", "Llama 3.1", "Prompt Engineering", "Milvus", "LangChain", "LangGraph"] },
  { title: "Frontend", items: ["React.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "DevOps & Tools", items: ["Docker", "AWS (S3, EC2)", "Postman", "Swagger", "Git", "GitHub", "Claude", "Cursor"] },
  { title: "Architecture & Databases", items: ["Microservices", "REST", "Multi-tenant", "MySQL", "MongoDB"] },
  { title: "Also worked with", items: ["Core Java", "PHP", "Laravel"] },
];

const Experience = () => {
  return (
    <>
      <section id="experience" className="page">
        <div className="wrap">
          <div className="page-head">
            <span className="eyebrow">Career</span>
            <h1>
              Experience <FaBriefcase className="experience-icon" />
            </h1>
            <p>Building scalable backends and AI-driven products across SaaS platforms.</p>
          </div>

          <div className="timeline">
            {jobs.map((job, i) => (
              <article className="experience-card glass" key={job.company} style={{ "--i": i }}>
                <span className="tl-dot" />
                <div className="exp-top">
                  <div>
                    <h3>
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="imp">
                        {job.company}
                      </a>
                    </h3>
                    <p className="experience-role">{job.role}</p>
                  </div>
                  <span className="experience-date">{job.date}</span>
                </div>
                <ul className="experience-details">
                  {job.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {job.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="edu-grid">
            <div className="glass edu-card">
              <FaGraduationCap className="edu-icon" />
              <h3>Education</h3>
              <p className="edu-title">Bachelor of Technology – Computer Science &amp; Engineering</p>
              <p>Shivajirao Kadam Institute of Technology and Management, Indore</p>
              <p className="muted">Aug 2019 – May 2023 · CGPA: 8.26</p>
            </div>
            <div className="glass edu-card">
              <FaTrophy className="edu-icon" />
              <h3>Achievements</h3>
              <p className="edu-title">120+ DSA problems solved</p>
              <p>Data Structures &amp; Algorithms practice on LeetCode and GFG.</p>
              <p>
                <a className="imp" href="https://leetcode.com/u/__aayushi22/" target="_blank" rel="noopener noreferrer">
                  <FaCode /> View LeetCode profile →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="wrap">
          <div className="page-head">
            <span className="eyebrow">Toolbox</span>
            <h1>My Skills</h1>
          </div>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div className="skill-group glass" key={g.title}>
                <h4>{g.title}</h4>
                <div className="skill-chips">
                  {g.items.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
