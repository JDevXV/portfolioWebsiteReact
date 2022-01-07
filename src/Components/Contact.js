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
            <button
              className="connectButton"
              href="mailto:jailenedevinejones@gmail.com"
            >
              <LineIcon name="envelope"/>
            </button>
            <button
              className="connectButton"
              href="mailto:jailenedevinejones@gmail.com"
            >
              <LineIcon name="linkedin"/>
            </button>
            <button
              className="connectButton"
              href="mailto:jailenedevinejones@gmail.com"
            >
              <LineIcon name="github"/>
            </button>
            </div>
        </div>

    )
}

export default Contact