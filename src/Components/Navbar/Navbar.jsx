import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg sticky-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <i>Aayushi</i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active ms-5"
                  aria-current="page"
                  to="/"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active ms-5"
                  aria-current="page"
                  to="/experience"
                >
                 Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active ms-5"
                  aria-current="page"
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active ms-5" to="/resume">
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  ms-5" to="/contact">
                <button className="btn btn-primary rounded-pill">Contact</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
