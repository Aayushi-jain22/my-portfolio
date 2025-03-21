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
                I fell in love with programming because it's like solving
                puzzles that bring ideas to life! My specialty? Building sleek
                and powerful web applications.
                <br />
                <br />
                I'm passionate about using technology to build products that
                make a difference. Whether it's developing a new web app, I'm
                always up for a challenge.
                <br />
                <br />
                With my expertise in backend development using technology{" "}
                <span className="imp">Laravel</span> and the{" "}
                <span className="imp"> python (Django) </span> I bring ideas to
                life with creativity and precision.
                <br />
                <br />
                If you're looking for someone to collaborate on your exciting
                projects or just geek out about tech, I'm your person! Let's
                connect and make some magic happen! ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
