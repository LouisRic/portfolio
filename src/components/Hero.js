import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Louis Ricardo";
  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;
    
    const typeEffect = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex));
          setIsTyping(true);
          currentIndex++;
          
          if (currentIndex > fullText.length) {
            // Finished typing, pause then start deleting
            setIsTyping(false);
            timeoutId = setTimeout(() => {
              isDeleting = true;
              setIsTyping(true);
              typeEffect(); // Continue to deleting phase
            }, 2000);
            return;
          }
          
          timeoutId = setTimeout(typeEffect, 120); // Typing speed
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayText(fullText.substring(0, currentIndex));
          setIsTyping(true);
          timeoutId = setTimeout(typeEffect, 80); // Deleting speed (faster)
        } else {
          // Finished deleting, start typing again
          isDeleting = false;
          setIsTyping(true);
          timeoutId = setTimeout(typeEffect, 500); // Short pause before retyping
        }
      }
    };

    // Start the animation
    typeEffect();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullText]);
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-text">Hi, I am</span>
          </div>
          <h1 className="hero-name">
            {displayText}
            <span className={`typing-cursor ${!isTyping ? 'cursor-blink' : ''}`}>|</span>
          </h1>
          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/louis-ricardo-683bb62b8/"
              className="social-icon"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/louisric"
              className="social-icon"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://instagram.com/louisricardo6720"
              className="social-icon"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <div className="profile-image">
              <img src="/assets/Louis.png" alt="Louis Ricardo" />
            </div>
            <div className="image-bg-circle"></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="scroll-text">Scroll down</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;
