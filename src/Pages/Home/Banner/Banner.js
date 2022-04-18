import React from "react";
import banner from "../../../images/banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img height={500} src={banner} alt="" />;
      </div>
      <div className="banner-content">
        <h1 className="heading">Best experiences waiting for your next tour</h1>
        <button className="explore-btn p-3">Explore More</button>

      </div>
    </div>
  );
};

export default Banner;
