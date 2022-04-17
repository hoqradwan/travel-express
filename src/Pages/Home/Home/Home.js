import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Banner from "../Banner/Banner";
import FoodHeader from "../FoodHeader/FoodHeader";
import Breakfast from "../Breakfast/Breakfast";
import Lunch from "../Lunch/Lunch";
import Dinner from "../Dinner/Dinner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
       
    </div>
  );
};

export default Home;
