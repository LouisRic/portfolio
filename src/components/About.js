import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-main">
            <p className="about-intro">
              Hi, I'm Louis Ricardo, a Computer Science student at BINUS University with a focus on software engineering and streaming technologies. I specialize in building web applications with strong skills in front-end and back-end development, including API integration.
            </p>
            <p className="about-description">
              I'm particularly passionate about creating streaming solutions and ensuring seamless integration between different systems. Throughout my studies, I've worked on projects that involve building efficient web apps and optimizing streaming functionalities.
            </p>
            <p className="about-description">
              I enjoy solving technical challenges and creating robust applications. Thanks for visiting my portfolio, and feel free to reach out if you'd like to collaborate!
            </p>
            <div className="about-cta">
              <button className="btn btn-primary">Download CV</button>
            </div>
          </div>
          <div className="about-details">
            <div className="detail-group">
              <h4>Education</h4>
              <span>Computer Science at BINUS University</span>
            </div>
            <div className="detail-group">
              <h4>Specialization</h4>
              <span>Software Engineering & Streaming Tech</span>
            </div>
            <div className="detail-group">
              <h4>Focus</h4>
              <span>Full Stack Development & API Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
