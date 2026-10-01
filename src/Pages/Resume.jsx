import React, { useState } from "react";
import { FaDownload, FaEye, FaEyeSlash } from "react-icons/fa";

const Resume = () => {
  const [showResume, setShowResume] = useState(true);
  const pdf = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <section id="resume" className="resume-section page">
      <div className="wrap">
        <div className="page-head">
          <span className="eyebrow">Curriculum vitae</span>
          <h1>Resume</h1>
          <p>Preview or download my latest resume.</p>
        </div>
        <div className="resume-container glass">
          <div className="resume-buttons">
            <button onClick={() => setShowResume(!showResume)} className="btn-x btn-ghost">
              {showResume ? <FaEyeSlash /> : <FaEye />} {showResume ? "Hide Resume" : "Preview Resume"}
            </button>
            <a href={pdf} download="Aayushi_Jain_Resume.pdf" className="btn-x btn-solid">
              <FaDownload /> Download Resume
            </a>
          </div>

          {showResume && (
            <div className="resume-preview-container">
              <iframe title="Resume Preview" src={pdf} className="resume-iframe"></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
