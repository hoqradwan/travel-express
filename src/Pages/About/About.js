import React from "react";
import "./About.css";
import about from "../../images/about.jpg"

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about text-center">About Me</h2>
      <div className="about-img">
      <img src={about} alt="" />

      </div>
      <h5 className="fs-3 text-center mt-5">Md. Radwanul Hoque</h5>
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
