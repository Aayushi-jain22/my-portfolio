import React, { useEffect, useState } from "react";
import "./Banner.css";
import bannerimg from "../../assets/images/poster2.png";
import { FaEnvelope } from "react-icons/fa";

const Banner = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "A Full stack developer";

  useEffect(() => {
    const interval = setInterval(() => {
      const currentLength = typedText.length;
      if (currentLength < fullText.length) {
        setTypedText(fullText.slice(0, currentLength + 1));
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [typedText, fullText]);

  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        {/* <div className="background-overlay"></div> */}
        <div className="container-fluid banner">
          {/* <div className="row "> */}
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  <strong>
                    Hi There! <br /> I am Aayushi Jain, <br />
                    <span className="imp">{typedText}</span>
                  </strong>
                </h1>
                <p className="my-4 banner-content">
                  <strong>
                    With 1 year of experience. I specialize in backend
                    development using Laravel, and familiar with frontend
                    technologies like React.js and Angular. Skilled in API
                    development, secure authentication, and cross-functional
                    collaboration.
                  </strong>
                </p>
                <div>
                  <a
                    href="mailto:jain.aayushi276@gmail.com"
                    className="btn btn-danger btn-lg me-3 rounded-pill special-btn"
                  >
                    <FaEnvelope className="me-1" />
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="col-lg-6 order-lg-2 order-1 banner-img d-flex justify-content-center ">
                <img
                  src={bannerimg}
                  alt=""
                  className="img-fluid animated"
                  style={{ maxWidth: "80%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Banner;
