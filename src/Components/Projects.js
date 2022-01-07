import React from "react";
import "../Styles/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import calcDemo from "../Assets/Calculator.png";
import givnDemo from "../Assets/Givn.png"
AOS.init();

const Projects = () => {
  return (
    <div className="projectsDiv" id="projects">
      <h1>Projects</h1>
      <div className="givnDemo">
        <div className="givnDemoDesc">
          <h2>GIVN</h2>
          <h4>JavaScript, HTML, CSS, React, Redux, PostgreSQL</h4>
          <p>
            Givn is an educational app that encourages and incentivizes users
            <br /> to give away their unwanted goods instead of throwing them
            away.
          </p>
          <div className="givnDemoLinks">
            <button
              className="buttonLink"
              href="https://givn-application.web.app"
            >
              Live
            </button>
            <button
              className="buttonLink"
              href="https://github.com/JDevXV/Capstone-Givn"
            >
              Github
            </button>
          </div>
        </div>
        <div className="givnDemoGif">
          <img src={givnDemo} alt="GIVN Demo" />
        </div>
      </div>
      <div className="calcDemo">
        <div className="calcDemoDesc">
          <h2>Neon Calculator</h2>
          <h4>JavaScript, HTML, CSS, React</h4>
          <p>A simple calculator app with an awesome neon glowing affect.</p>
          <div className="calcDemoLinks">
            <button
              className="buttonLink"
              href="https://jdevxv-calculator.netlify.app"
            >
              Live
            </button>
            <button
              className="buttonLink"
              href="https://github.com/JDevXV/FSW-React-Calculator"
            >
              Github
            </button>
          </div>
        </div>
        <div className="calcDemoGif">
          <img src={calcDemo} alt="Calculator Demo" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
