import React from "react";
import banner from "../../../images/banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img height={550} src={banner} alt="" />;
      </div>
      <div className="banner-content text-center">
        <h1 className="heading">Best experiences waiting for your next tour</h1>
        <button className="explore-btn mt-2 p-3">Explore More</button>

      </div>
    </div>
  );
};

export default Banner;
