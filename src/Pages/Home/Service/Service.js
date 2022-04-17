import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, description, price } = service;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card mt-5" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>${price}</p>
          <Link to="/checkout">
            <button className="checkout">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
