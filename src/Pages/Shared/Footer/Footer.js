import React from "react";
import footer from "../../../images/footer.jpg"
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5">
        <img height={300} className="footer w-100" src={footer} alt="" />
      <div className="footer-content">
        <h2 className="contact">Contact Us</h2>
      </div>
    </div>
  );
};

export default Footer;
