import React from "react";
import popular from "../../../images/popular.png";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="container">
      <div className="d-lg-flex align-items-center">
        <div className="popular-content me-3">
          <h1>Popular Services</h1>
          <h5 className="mt-1">ENJOY THE VIEWS OF A LIFETIME</h5>
          <p>
            A number of my services are highly appreciated by the travellers.
            Those services delighted them in a whole. My first and foremost duty
            is to ensure the best quality services for you. So, travelers are
            getting a great opportunity to enjoy their holidays with amazing
            packages. After all, I hope you will enjoy a great journey.
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
          <img className="img-fluid" width={1200} src={popular} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Popular;
