import React from "react";
import './Title.css'

const Title = ({subtitle,title}) => {
  return (
    <>
 
      <div className="container">
      
          <div className="col-10 mx-auto ">
            <div className="title ">
              <h5>{subtitle}</h5>
              <h2><span className="underline"> {title}</span></h2>
            </div>
          </div>
       
      </div>
   
    </>
  );
};

export default Title;
