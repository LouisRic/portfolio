import React from "react";
import "./Skills.css";

const Skills = () => {
  const usingNowSkills = [
    {
      name: "MONGODB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      bgColor: "#47A248",
    },
    {
      name: "EXPRESS JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      bgColor: "#000000",
    },
    {
      name: "REACT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      bgColor: "#61DAFB",
    },
    {
      name: "NODE JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      bgColor: "#339933",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      bgColor: "#E34F26",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      bgColor: "#1572B6",
    },
    {
      name: "JAVASCRIPT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      bgColor: "#F7DF1E",
    },
  ];

  const learningSkills = [
    {
      name: "NEXT JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      bgColor: "#000000",
    },
    {
      name: "PYTHON",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      bgColor: "#3776AB",
    },
    {
      name: "LARAVEL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      bgColor: "#FF2D20",
    },
    {
      name: "TYPESCRIPT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      bgColor: "#3178C6",
    },
    {
      name: "GIT",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      bgColor: "#F05032",
    },
  ];

  const otherSkills = [
    { name: "ENGLISH", icon: "🇬🇧", bgColor: "#012169" },
    { name: "BAHASA INDONESIA", icon: "🇮🇩", bgColor: "#FF0000" },
    {
      name: "JAVA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      bgColor: "#ED8B00",
    },
    {
      name: "FIGMA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      bgColor: "#F24E1E",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      bgColor: "#00599C",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      bgColor: "#A8B9CC",
    },
  ];

  const skillsData = [
    { category: "USING NOW:", skills: usingNowSkills },
    { category: "LEARNING:", skills: learningSkills },
    { category: "OTHER SKILLS:", skills: otherSkills },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <div className="skills-title-box">
            <h2 className="skills-title">SKILLS</h2>
          </div>
        </div>
        <div className="skills-content">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon-container">
                      {skill.icon.startsWith("http") ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="skill-icon-img"
                        />
                      ) : (
                        <span className="skill-icon-emoji">{skill.icon}</span>
                      )}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
