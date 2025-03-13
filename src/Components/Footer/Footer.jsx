import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-black">
      <div className="container">
        <div className="pt-3 my-2">
          <div className="footer-content">
            <hr />
            <p className="text-left text-center">
              Designed and developed by Aayushi
            </p>
            <p className="text-right text-center">© Aayushi {currentYear}</p>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/Aayushi-jain22"
            className=" icon-footer git"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://twitter.com/aayushijain_24"
            className=" icon-footer twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMT5K3QBgxOtObZDUhcNasQ"
            className="  icon-footer youtube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
