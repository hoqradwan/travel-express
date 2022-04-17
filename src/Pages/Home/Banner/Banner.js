import React from "react";
import banner from "../../../images/banner.jpg";
import './Banner.css';
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img height={600} src={banner} alt="" />;
      </div>
      <div className="banner-content">
        <h1 className="heading">Best experiences waiting for your next tour</h1>
      <div className="d-flex justify-content-center mt-4">
        <input placeholder="Search food items" className="w-50 src-input ps-3" type="text" />
        <button className="src-btn">Search</button>
      </div>
      </div>
    
    </div>
  );
};

export default Banner;
