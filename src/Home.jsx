import React, { useState, useEffect } from "react";
import "./App.css";

const Home = () => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(0);
  const [filterType, setFilterType] = useState("");
  const [filterTime, setFilterTime] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const savedFoods = localStorage.getItem("foods");
    if (savedFoods) {
      setFoods(JSON.parse(savedFoods));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleFilterTimeChange = (e) => {
    setFilterTime(e.target.value);
  };

  const handleSort = (e) => {
    const sortedFoods = [...foods].sort(
      (a, b) => a.maxDeliveryTime - b.maxDeliveryTime
    );
    setFoods(sortedFoods);
  };

  const filteredFoods = foods.filter(
    (food) =>
      (!filterType || food.foodType === filterType) &&
      (!filterTime || food.maxDeliveryTime <= filterTime)
  );

  return (
    <>
      <div className="filters">
        <h2>Filter By:</h2>
        <label htmlFor="filterType">
          Food Type:
          <select
            id="filterType"
            value={filterType}
            onChange={handleFilterTypeChange}
          >
            <option value="">Select Food Type</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <label htmlFor="filterTime">
          Max Delivery Time (in mins):
          <input
            type="number"
            id="filterTime"
            value={filterTime}
            onChange={handleFilterTimeChange}
          />
        </label>
        <button onClick={handleSort}>Sort by Max Delivery Time</button>
      </div>
      <div className="foodList">
        <h2>Food List:</h2>
        <ul>
          {filteredFoods.map((food, index) => (
            <li key={index}>
              {food.foodName} - {food.foodType} - {food.maxDeliveryTime} mins
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
