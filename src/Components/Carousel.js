import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import calcDemo from "../Assets/Calculator.png";
import givnDemo from "../Assets/Givn.png"

const CarouselComponent = () => {
  return (
    <div>
      <Carousel infiniteLoop="true">
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
              <a
                className="buttonLink"
                target="_blank"
                rel="noreferrer"
                href="https://givn-application.web.app"
              >
                Live
              </a>
              <a
                className="buttonLink"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JDevXV/Capstone-Givn"
              >
                Github
              </a>
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
              <a
                className="buttonLink"
                target="_blank"
                rel="noreferrer"
                href="https://jdevxv-calculator.netlify.app"
              >
                Live
              </a>
              <a
                className="buttonLink"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JDevXV/FSW-React-Calculator"
              >
                Github
              </a>
            </div>
          </div>
          <div className="calcDemoGif">
            <img src={calcDemo} alt="Calculator Demo" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
