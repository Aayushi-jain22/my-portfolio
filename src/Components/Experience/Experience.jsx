// import React, { useState, useEffect } from "react";
// import {
//   FaBriefcase,
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaDatabase,
// } from "react-icons/fa";
// import { FaAngular, FaJava } from "react-icons/fa";
// import { SiPhp, SiLaravel } from "react-icons/si";
// // import { FaPython } from "react-icons/fa";

// import "./Experience.css";

// const Experience = () => {
//   const [scrollTop, setScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollTop(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <section id="experience">
//         <div className="experience-container">
//           <h1 className="experience-heading text-center">
//             Experience <FaBriefcase className="experience-icon" />
//           </h1>

//           {/* Experience Card - Zehntech Technologies Pvt. Ltd. */}
//           <div className="experience-card">
//             <h3>
//               <a
//                 href="https://www.zehntech.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="imp"
//               >
//                 Zehntech Technologies Pvt. Ltd, Indore
//               </a>
//             </h3>
//             <p>Software Engineer (May 2024 - Present)</p>

//             <ul className="experience-details">
//               <li>
//                 Developed and maintained RESTful APIs using Laravel, ensuring
//                 high performance and scalability.
//               </li>
//               <li>
//                 Contributed to the GyataGPT AI project, implementing APIs for
//                 seamless data integration.
//               </li>
//               <li>
//                 Migrated the project to Django, redesigning APIs using Django
//                 rest framework and database architecture for better performance
//               </li>
//               <li>
//                 Manage database using MySQL ensuring high performance and
//                 reliability
//               </li>
//               <li>
//                 Collaborated with frontend developers and AI/ML teams to
//                 integrate features into the platform.
//               </li>
//             </ul>
//           </div>

//           {/* Experience Card - Ninebit Computing Pvt. Ltd. */}
//           <div className="experience-card">
//             <h3>
//               <a
//                 href="https://www.ninebit.in/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="imp"
//               >
//                 Ninebit Computing Pvt. Ltd, Indore
//               </a>
//             </h3>
//             <p>Associate Software Engineer (Jan 2024 - March 2024)</p>

//             <ul className="experience-details">
//               <li>
//                 Utilized Reactjs to develop interactive and dynamic front-end
//                 components.
//               </li>
//               <li>
//                 Collaborated with team members using Git for version control and
//                 organized modifications efficiently.
//               </li>
//               <li>
//                 Demonstrated strong problem-solving skills by troubleshooting
//                 and resolving technical issues.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div
//           className="experience-background"
//           style={{ transform: `translateY(-${scrollTop * 0.5}px)` }}
//         ></div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills">
//         <div className="container-fluid nav_bg">
//           <div className="row">
//             <div className="col-6 mx-auto text-center">
//               <h2 className="skills-heading">
//                 {" "}
//                 <strong> My Skills</strong>
//               </h2>
//               <div className="skills-icons">
//                 <div className="skill">
//                   <FaHtml5 className="skill-icon html-icon" title="HTML5" />
//                   <div className="icon-name">HTML</div>
//                 </div>
//                 <div className="skill">
//                   <FaCss3Alt className="skill-icon css-icon" title="CSS3" />
//                   <div className="icon-name">CSS</div>
//                 </div>
//                 <div className="skill">
//                   <FaJsSquare
//                     className="skill-icon js-icon"
//                     title="JavaScript"
//                   />
//                   <div className="icon-name">JavaScript</div>
//                 </div>
//                 <div className="skill">
//                   <FaReact className="skill-icon react-icon" title="React.js" />
//                   <div className="icon-name">React.js</div>
//                 </div>
//                 <div className="skill">
//                   <FaJava
//                     className="skill-icon java-icon"
//                     title="Angular"
//                     style={{ color: "#DD0031" }}
//                   />
//                   <div className="icon-name">Core Java</div>
//                 </div>
//                 <div className="skill">
//                   <SiPhp
//                     className="skill-icon php-icon"
//                     title="PHP"
//                     style={{ color: "#777BB4" }}
//                   />
//                   <div className="icon-name">PHP</div>
//                 </div>
//                 <div className="skill">
//                   <SiLaravel
//                     className="skill-icon laravel-icon"
//                     title="Laravel"
//                     style={{ color: "#FF2D20" }}
//                   />
//                   <div className="icon-name">Laravel</div>
//                 </div>
//                 <div className="skill">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
//                     alt="Python"
//                     className="skill-icon"
//                     style={{ width: "70px", height: "77px" }}
//                   />
//                   <div className="icon-name">Python</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Experience;

import React, { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiPhp, SiLaravel, SiDjango } from "react-icons/si";
import "./Experience.css";

const Experience = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="experience">
        <div className="experience-container">
          <h1 className="experience-heading text-center">
            Experience <FaBriefcase className="experience-icon" />
          </h1>

          {/* Experience Card - Zehntech Technologies Pvt. Ltd. */}
          <div className="experience-card">
            <h3>
              <a
                href="https://www.zehntech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="imp"
              >
                Zehntech Technologies Pvt. Ltd, Indore
              </a>
            </h3>
            <p>Software Engineer (May 2024 - Present)</p>

            <ul className="experience-details">
              <li>
                Developed and maintained RESTful APIs using Laravel, ensuring
                high performance and scalability.
              </li>
              {/* <li>
                Contributed to the GyataGPT AI project, implementing APIs for
                seamless data integration.
              </li> */}
              <li>
                Migrated the project GyataGPT AI to Django, redesigning APIs using Django
                Rest Framework and database architecture for better performance.
              </li>
              <li>
                Managed databases using MySQL, ensuring high performance and
                reliability.
              </li>
              <li>
                Collaborated with frontend developers and AI/ML teams to
                integrate features into the platform.
              </li>
            </ul>
          </div>

          {/* Experience Card - Ninebit Computing Pvt. Ltd. */}
          <div className="experience-card">
            <h3>
              <a
                href="https://www.ninebit.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="imp"
              >
                Ninebit Computing Pvt. Ltd, Indore
              </a>
            </h3>
            <p>Associate Software Engineer (Jan 2024 - March 2024)</p>

            <ul className="experience-details">
              <li>
                Utilized Reactjs to develop interactive and dynamic front-end
                components.
              </li>
              <li>
                Collaborated with team members using Git for version control and
                organized modifications efficiently.
              </li>
              <li>
                Demonstrated strong problem-solving skills by troubleshooting
                and resolving technical issues.
              </li>
            </ul>
          </div>
        </div>

        <div
          className="experience-background"
          style={{ transform: `translateY(-${scrollTop * 0.5}px)` }}
        ></div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-6 mx-auto text-center">
              <h2 className="skills-heading">
                <strong>My Skills</strong>
              </h2>
              <div className="skills-icons">
                <div className="skill">
                  <FaHtml5 className="skill-icon html-icon" title="HTML5" />
                  <div className="icon-name">HTML</div>
                </div>
                <div className="skill">
                  <FaCss3Alt className="skill-icon css-icon" title="CSS3" />
                  <div className="icon-name">CSS</div>
                </div>
                <div className="skill">
                  <FaJsSquare
                    className="skill-icon js-icon"
                    title="JavaScript"
                  />
                  <div className="icon-name">JavaScript</div>
                </div>
                <div className="skill">
                  <FaReact className="skill-icon react-icon" title="React.js" />
                  <div className="icon-name">React.js</div>
                </div>

                <div className="skill">
                  <FaJava
                    className="skill-icon java-icon"
                    title="Core Java"
                    style={{ color: "#007396" }}
                  />
                  <div className="icon-name">Core Java</div>
                </div>
                {/* <div className="skill">
                  <FaAngular
                    className="skill-icon angular-icon"
                    title="Angular"
                    style={{ color: "#DD0031" }}
                  />
                  <div className="icon-name">Angular</div>
                </div> */}
                <div className="skill">
                  <SiPhp
                    className="skill-icon php-icon"
                    title="PHP"
                    style={{ color: "#777BB4" }}
                  />
                  <div className="icon-name">PHP</div>
                </div>
                <div className="skill">
                  <SiLaravel
                    className="skill-icon laravel-icon"
                    title="Laravel"
                    style={{ color: "#FF2D20" }}
                  />
                  <div className="icon-name">Laravel</div>
                </div>

                <div className="skill">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python"
                    className="skill-icon"
                    style={{ width: "70px", height: "77px" }}
                  />
                  <div className="icon-name">Python</div>
                </div>
                <div className="skill">
                  <SiDjango
                    className="skill-icon django-icon"
                    title="Django"
                    style={{ color: "#092E20" }}
                  />
                  <div className="icon-name">Django</div>
                </div>
                <div className="skill">
                  <FaDatabase
                    className="skill-icon mysql-icon"
                    title="MySQL"
                    style={{ color: "#4479A1" }}
                  />
                  <div className="icon-name">MySQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
