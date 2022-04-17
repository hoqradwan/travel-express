import React from "react";
import popular from "../../../images/popular.png";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="container">
      <div className="d-lg-flex align-items-center">
        <div className="popular-content me-3 pe-3">
          <h1>Popular Services</h1>
          <h5 className="mt-1">ENJOY THE VIEWS OF A LIFETIME</h5>
          <p>
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs.
          </p>
          <div className="popular-list d-flex">
            <ul className="me-5">
              <li>First Class Flights</li>
              <li>City Tours</li>
              <li>Holiday & seasonal tours</li>
            </ul>
            <ul>
              <li>City Tours</li>
              <li>Specisl Packege Tours</li>
              <li>Wild & Adventure Tours</li>
            </ul>
          </div>
        </div>
        <div>
          <img height={400} width={500} src={popular} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Popular;
