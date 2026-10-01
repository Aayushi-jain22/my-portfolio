import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import bannerimg from "../../assets/images/poster2.png";
import { FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";

const roles = [
  "Software Engineer",
  "Gen AI & Agentic AI Developer",
  "Python Backend Engineer",
  "Full Stack Developer",
];

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "50+", label: "Production APIs" },
  { value: "3x", label: "User scalability" },
  { value: "120+", label: "DSA problems solved" },
];

const stack = ["Python", "Django", "FastAPI", "LangGraph", "RAG", "React"];

const Banner = () => {
  const [typedText, setTypedText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx];
    let delay = deleting ? 45 : 90;
    if (!deleting && typedText === full) delay = 1600;
    const t = setTimeout(() => {
      if (!deleting && typedText === full) {
        setDeleting(true);
      } else if (deleting && typedText === "") {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      } else {
        setTypedText(
          deleting ? full.slice(0, typedText.length - 1) : full.slice(0, typedText.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [typedText, deleting, roleIdx]);

  return (
    <section id="header" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="dot" /> Open to new opportunities
          </span>
          <h1>
            Hi, I'm <span className="grad-text">Aayushi Jain</span>
          </h1>
          <div className="hero-role">
            <span className="prompt">&gt;</span> <span className="imp">{typedText}</span>
            <span className="caret" />
          </div>
          <p className="banner-content">
            Software Engineer with 2+ years of experience building scalable web applications and
            AI-driven platforms using Python, Django, DRF, FastAPI, Node.js and React.js. I design
            clean REST APIs, asynchronous backend services and LLM-powered products — from RAG
            pipelines to agentic workflows.
          </p>
          <div className="hero-chips">
            {stack.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link to="/projects" className="btn-x btn-solid">
              View Projects <FaArrowRight />
            </Link>
            <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="Aayushi_Jain_Resume.pdf" className="btn-x btn-ghost">
              <FaDownload /> Resume
            </a>
            <a href="mailto:jain.aayushi276@gmail.com" className="btn-x btn-ghost">
              <FaEnvelope /> Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <img src={bannerimg} alt="Aayushi Jain at her workstation" />
          </div>
          <div className="float-card fc-1">⚡ Gen AI · RAG · LLMs</div>
          <div className="float-card fc-2">🐍 Django · FastAPI</div>
        </div>
      </div>

      <div className="wrap stats">
        {stats.map((s) => (
          <div className="stat glass" key={s.label}>
            <div className="stat-value grad-text">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
