import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com/Aayushi-jain22" className="icon git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/aayushi-jain-118583242/" className="icon linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.youtube.com/channel/UCMT5K3QBgxOtObZDUhcNasQ" className="icon youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
};

export default SocialIcons;
