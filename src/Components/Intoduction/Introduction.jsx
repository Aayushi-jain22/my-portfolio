import React from "react";
import "./Introduction.css";
import aayushi from "../../assets/images/aayushi.jpeg";

const pillars = [
  { icon: "🧠", title: "Gen AI & Agents", text: "RAG, LLMs, embeddings, LangChain, LangGraph, tool-calling agents, Milvus." },
  { icon: "⚙️", title: "Backend & APIs", text: "Django, DRF, FastAPI, Express.js, microservices, multi-tenant systems, Celery & Redis." },
  { icon: "🎨", title: "Full-Stack Delivery", text: "React.js, TypeScript, Tailwind CSS with Docker and AWS (S3, EC2) deployments." },
];

const Introduction = () => {
  return (
    <div className="wrap intro-container">
      <div className="intro-grid">
        <div className="intro-img">
          <div className="intro-photo">
            <img src={aayushi} alt="Aayushi Jain" />
          </div>
        </div>
        <div className="intro-text">
          <p className="myself-content">
            I fell in love with programming because it feels like solving puzzles that bring ideas
            to life. I enjoy building sleek, scalable web applications and AI-powered products that
            solve real-world problems.
          </p>
          <p className="myself-content">
            With hands-on experience in backend development using{" "}
            <span className="imp">Python, Django, DRF and FastAPI</span>, I specialize in robust,
            secure and high-performance systems — and I'm now focused on{" "}
            <span className="imp">Gen AI and Agentic AI</span>, shipping chatbot platforms and
            LLM-powered workflows on top of clean API architecture.
          </p>
          <p className="myself-content">
            If you're looking to collaborate on exciting projects or discuss ideas, let's connect!
          </p>
          <div className="pillars">
            {pillars.map((p) => (
              <div className="pillar glass" key={p.title}>
                <div className="pillar-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
