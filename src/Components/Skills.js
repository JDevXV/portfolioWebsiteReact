import React from "react";
import "../Styles/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skills = () => {
  return (
    <div className="skillsDiv" id="skills">
      <h1 className="skillTitle" data-aos="fade-down">Skills</h1>
      <ul className="skillsContainer">
        <li data-aos="flip-left">
          <img
            className="skills"
            alt="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          JavaScript
        </li>
        <li data-aos="flip-left" data-aos-delay="100">
          <img
            className="skills"
            alt="HTML5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          HTML5
        </li>
        <li data-aos="flip-left" data-aos-delay="200">
          <img
            className="skills"
            alt="CSS3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          CSS3
        </li>
        <li data-aos="flip-left" data-aos-delay="300">
          <img
            className="skills"
            alt="React"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          React
        </li>
        <li data-aos="flip-left" data-aos-delay="400">
          <img
            className="skills"
            alt="PostgreSQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
          PostgreSQL
        </li>
        <li data-aos="flip-left" data-aos-delay="500">
          <img
            className="skills"
            alt="Redux"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
          Redux
        </li>
        <li data-aos="flip-left" data-aos-delay="600">
          <img
            className="skills"
            alt="Python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          Python
        </li>
        <li data-aos="flip-left" data-aos-delay="700">
          <img
            className="skills"
            alt="nodeJS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          NodeJS
        </li>
      </ul>
    </div>
  );
};

export default Skills;
