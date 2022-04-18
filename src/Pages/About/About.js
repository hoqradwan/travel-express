import React from "react";
import "./About.css";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <div className="about-container d-flex flex-column justify-content-center align-items-center">
      <h2 className="about text-center">About Me</h2>
      <div className="mt-2">
        <img src={about} alt="" />
      </div>
      <h5 className="fs-3 text-center mt-3">Md. Radwanul Hoque</h5>
      <p>
        I am Md. Radwanul Hoque. My goal is to be a professional full stack web
        developer. I want to serve my clients with efficient and quality
        services. My mission is to be a devops engineer one day. I also want to
        help the poor students who stopped studying for the lack of money.
      </p>
    </div>
  );
};

export default About;
