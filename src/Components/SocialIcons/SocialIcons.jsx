import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons ">
      <a href="https://github.com/Aayushi-jain22" className="icon git">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/aayushi-jain-118583242/"
        className="icon linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      {/* <a href="https://www.instagram.com/__aayushi22/" className="icon instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a> */}
      <a
        href="https://www.youtube.com/channel/UCMT5K3QBgxOtObZDUhcNasQ"
        className="icon youtube"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
};

export default SocialIcons;
