import React from "react";
import "../Styles/Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <h1 className="name"> Jailene DeVine-Jones</h1>
      <div className="iAmADesc">
        <h2 className="iAmADescItems">
          I am a
          <div className="words">
            <span>software engineer.</span>
            <span>techie.</span>
            <span>gamer.</span>
            <span>latina.</span>
          </div>
        </h2>
      </div>
      <div className="buttonDiv">
        <a href="#about"><button className="learnMore" type="button">
          Learn More
        </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
