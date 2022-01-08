import React from "react";
import "../Styles/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LineIcon from "react-lineicons";
AOS.init();

const Contact = () => {
    return (
        <div className="contactDiv" id="contact">
            <h1>Stay Connected</h1>
            <h3>Please feel free to reach out!</h3>
            <div className="buttonDiv">
            <a
              className="connectButton"
              href="mailto:jailenedevinejones@gmail.com"
              target="_blank"
              rel="noreferrer" 
            >
              <LineIcon name="envelope"/>
            </a>
            <a
              className="connectButton"
              href="https://www.linkedin.com/in/jailene-devine-jones/"
              target="_blank"
              rel="noreferrer" 
            >
              <LineIcon name="linkedin"/>
            </a>
            <a
              className="connectButton"
              href="https://github.com/JDevXV"
              target="_blank"
              rel="noreferrer" 
            >
              <LineIcon name="github"/>
            </a>
            </div>
        </div>

    )
}

export default Contact