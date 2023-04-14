import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import FoodForm from "./FoodForm";




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="food" element={<FoodForm />} />
      </Routes>
    </>
  );
};

export default App;
