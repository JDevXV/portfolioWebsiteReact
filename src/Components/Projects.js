import React from "react";
import "../Styles/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselComponent from "./Carousel.js"
AOS.init();

const Projects = () => {
  return (
    <div className="projectsDiv" id="projects">
      <h1>Projects</h1>
      <CarouselComponent/>
    </div>
  );
};

export default Projects;
