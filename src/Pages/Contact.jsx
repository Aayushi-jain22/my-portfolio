import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="page">
      <div className="wrap">
        <div className="page-head">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact Me</h1>
          <p>Have a project, role or idea in mind? Send a message and I'll get back to you.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info glass">
            <h3>Let's build something great</h3>
            <p>I'm open to Gen AI, backend and full-stack opportunities.</p>
            <a className="contact-link" href="mailto:jain.aayushi276@gmail.com">
              <FaEnvelope /> jain.aayushi276@gmail.com
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/aayushi-jain-118583242/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a className="contact-link" href="https://github.com/Aayushi-jain22" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <div className="contact-link">
              <FaMapMarkerAlt /> Indore, Madhya Pradesh, India
            </div>
          </div>

          <div className="contact-form-container glass">
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/myzegaav" method="POST">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-x btn-solid">Send Message</button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
