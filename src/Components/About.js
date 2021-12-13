import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="aboutBigDiv">
      <h1 className="aboutTitle">About Me</h1>
      <div className="about">
        <img className="jailene" src="https://i.imgur.com/abzixqA.png" alt="Jailene DeVine-Jones"/>
        <p className="aboutText">
          This is my about me. I have no idea what to put here at the moment but
          it is something. Talk about JS, React, all that good stuff. Maybe even
          talk about how I like to game and play sudoku and tetris on my
          freetime. And add an image of myself.
        </p>
      </div>
    </div>
  );
};
export default About;
