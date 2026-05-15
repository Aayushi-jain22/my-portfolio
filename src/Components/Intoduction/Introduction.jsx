import React from "react";
import "./Introduction.css";
import aayushi from "../../assets/images/aayushi.jpeg";

const Introduction = () => {
  return (
    <div className="container-fluid intro-container">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row ">
            <div className="col-lg-6  order-lg-1 order-1 intro-img d-flex justify-content-center">
              <img src={aayushi} alt="admin" className="img-fluid animated" />
            </div>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column intro-text">
              <p className="myself-content">
            I fell in love with programming because it feels like solving puzzles that bring ideas to life. I enjoy building sleek and scalable web applications that solve real-world problems.
                <br />
                <br />
             I’m passionate about using technology to create meaningful products and continuously challenge myself with new ideas and solutions.
                <br />
                <br />
                With hands-on experience in backend development using{" "}
                <span className="imp"> python , Django , DRF , FastAPI</span> I specialize in building robust, secure, and high-performance applications. I focus on writing clean, efficient code and delivering reliable solutions.
                <br />
                <br />
            If you're looking to collaborate on exciting projects or discuss innovative ideas, let’s connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
