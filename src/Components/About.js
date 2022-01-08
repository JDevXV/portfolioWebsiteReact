import React from "react";
import "../Styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Jailene from "../Assets/Jailene.png";
AOS.init();

const About = () => {
  return (
    <div className="aboutBigDiv" id="about">
      <h1 className="aboutTitle" data-aos="fade-down">
        About Me
      </h1>
      <div className="aboutContainer">
        <img
          className="jailene"
          src={Jailene}
          alt="Jailene DeVine-Jones"
          data-aos="fade-right"
        />
        <p className="aboutText" data-aos="fade-left">
          Programming has always been a passion of mine. Fascinated by the world
          of video games, my journey began at a young age when I would research
          game design and the different working aspects that come together for
          users to enjoy. <br/> <br/>
          
          This fascination led me to the wonderful world of
          programming. After successfully gaining my CompTIA A+, CompTIA
          Security+, and CompTIA Linux+ certifications from NPower, I became a
          Tech Professional. I was also selected as a Fellow at Pursuit, an
          intensive 12-month software engineering fellowship with a 9%
          acceptance rate, where I have built my repertoire in HTML,
          CSS, JavaScript, and many more. My end goal is to become a video game
          programmer! <br/> <br/>
          
          When I am not working or learning, I enjoy completing
          Sudoku puzzles to keep my mind active as well as, of course, video
          games such as Tetris and Rocket League! If you're
          interested in learning more about me, or joining my Rocket League
          team, feel free to send me an email!
        </p>
      </div>
    </div>
  );
};
export default About;
