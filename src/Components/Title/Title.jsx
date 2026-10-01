import React from "react";
import "./Title.css";

const Title = ({ subtitle, title }) => {
  return (
    <div className="wrap">
      <div className="section-head">
        <h5>{subtitle}</h5>
        <h2>
          <span className="underline">{title}</span>
        </h2>
      </div>
    </div>
  );
};

export default Title;
