import React, { useState, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "FlavorHaven",
      description:
        "A full-stack Restaurant Web Application built with MERN Architecture",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/assets/FlavorHaven.png",
      githubLink: "https://github.com/LouisRic/Flavorhaven",
      liveLink: "",
    },
    {
      id: 2,
      title: "Eat-and-split",
      description: "A simple split bill application built with React",
      technologies: ["React", "CSS3", "JavaScript"],
      image: "/assets/eat-and-split.png",
      githubLink: "https://github.com/LouisRic/eat-and-split",
      liveLink: "",
    },
    {
      id: 3,
      title:
        "AI-Based Simplification of Translated Medical Texts Using mBART and mT5 on Indonesian Biomedical Abstracts",
      description:
        "An AI research paper on comparing model for simplifying translated medical texts",
      technologies: ["Python", "PyTorch", "Transformers", "mBART", "mT5"],
      image: "/assets/ResearchPaper.png",
      githubLink:
        "https://binusianorg-my.sharepoint.com/personal/louis_ricardo001_binus_ac_id/_layouts/15/guestaccess.aspx?share=EcfKak3n8n5AnfPFeRgjSj8BuEmDMNfTHE_gImsCicHkJA&e=arpr1G",
      liveLink: "",
    },
    {
      id: 4,
      title: "KosGuard",
      description: "An AI for detecting unknown persons at resiedential areas",
      technologies: ["Python"],
      image: "/assets/KosGuard.png",
      githubLink: "https://github.com/LouisRic/KosGuard",
      liveLink: "",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern design",
      technologies: ["React", "CSS3", "JavaScript"],
      image: "/assets/Portfolio.png",
      githubLink: "https://github.com/LouisRic/Portfolio",
      liveLink: "",
    },
    {
      id: 6,
      title: "CYID",
      description:
        "A government web application for managing cyber threat reports",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/assets/CyID.png",
      githubLink: "https://github.com/LouisRic/CYID",
      liveLink: "",
    },
    {
      id: 7,
      title: "Showroom",
      description: "A car showroom website with vehicle listings and details",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/assets/Car Showroom.png",
      githubLink: "",
      liveLink: "",
    },
  ];

  // Responsive items per view
  const getItemsPerView = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-slider-container">
          <button
            className="slider-btn prev-btn"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ‹
          </button>

          <div className="projects-slider" ref={sliderRef}>
            <div
              className="projects-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      onLoad={() =>
                        console.log(`Image loaded: ${project.image}`)
                      }
                      onError={(e) => {
                        console.log(`Image failed to load: ${project.image}`);
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="image-placeholder"
                      style={{ display: "none" }}
                    >
                      <p>Image not found: {project.title}</p>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider-btn next-btn"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            ›
          </button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
