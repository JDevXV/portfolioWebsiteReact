import React from "react"
import "../Styles/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import calcDemo from "../Assets/Calculator Demo.gif"
AOS.init();

const Projects = () => {
    return (
        <div className="projectsDiv" id="projects">
            <h1>Projects</h1>
            <div className="calcDemo">
            <div className="calcDemoDesc">
            <h3>Neon Calculator</h3>
            <h4>JavaScript, HTML, CSS, React</h4>
            </div>
            <div className="calcDemoGif">
            <img src={calcDemo} alt="Calculator Demo" />     
            </div>
            </div>
        </div>
    )
}

export default Projects;