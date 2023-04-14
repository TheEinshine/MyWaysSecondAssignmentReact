import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import FoodForm from "./FoodForm";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food" element={<FoodForm />} />
      </Routes>
    </>
  );
};

export default App;
