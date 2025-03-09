// import React, { useState } from "react";

// const Resume = () => {
//   const [showResume, setShowResume] = useState(false);

//   const toggleResume = () => {
//     setShowResume(!showResume);
//   };

//   return (
//     <section id="resume" className="resume-section">
//       <div className="resume-container">
//         <h2 className="resume-title">📄 Resume</h2>
//         <p className="resume-text">Click below to view or download my resume:</p>

//         <div className="resume-buttons">
//           <button onClick={toggleResume} className="btn btn-toggle">
//             {showResume ? "Hide Resume" : "Preview Resume"}
//           </button>
//           <a
//             href="/resume.pdf"
//             download="Aayushi_Jain_Resume.pdf"
//             className="btn btn-download"
//           >
//             Download Resume
//           </a>
//         </div>

//         {showResume && (
//           <div className="resume-preview-container">
//             <iframe
//               title="Resume Preview"
//               src="/resume.pdf"
//               className="resume-iframe"
//             ></iframe>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Resume;


import React, { useState } from "react";


const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">📄 Resume</h2>
        <p className="resume-text">Click below to view or download my resume:</p>

        <div className="resume-buttons">
          <button onClick={toggleResume} className="btn btn-toggle">
            {showResume ? "Hide Resume" : "Preview Resume"}
          </button>
          <a
            href="/resume.pdf"
            download="Aayushi_Jain_Resume.pdf"
            className="btn btn-download"
          >
            Download Resume
          </a>
        </div>

        {showResume && (
          <div className="resume-preview-container">
            <iframe
              title="Resume Preview"
              src="/resume.pdf"
              className="resume-iframe"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
