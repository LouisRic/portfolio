import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to discuss a project or just
              say hello!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>louis.ricardo001@binus.ac.id</span>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>+62 812 6756 7308</span>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
