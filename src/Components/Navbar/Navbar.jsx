import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
            <i>Aayushi</i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-link ms-5${isActive ? " active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                    `nav-link ms-5${isActive ? " active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav-link ms-5${isActive ? " active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `nav-link ms-5${isActive ? " active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Resume
                </NavLink> */}
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ms-5"
                  to="/contact"
                  onClick={closeMenu}
                >
                  <button className="btn btn-primary rounded-pill">
                    Contact
                  </button>
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
