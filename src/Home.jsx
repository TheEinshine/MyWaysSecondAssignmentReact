import React, { useState, useEffect } from "react";
import "../src/assets/css/Home.css"


const Home = () => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(0);
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

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleFoodTypeChange = (e) => {
    setFoodType(e.target.value);
  };

  const handleMaxDeliveryTimeChange = (e) => {
    setMaxDeliveryTime(parseInt(e.target.value));
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    const newFood = {
      foodName,
      foodType,
      maxDeliveryTime
    };
    setFoods([...foods, newFood]);
    setFoodName("");
    setFoodType("");
    setMaxDeliveryTime(0);
  };


  return (
  <>
    <div className="addFoodForm">
      <h2>Add Food:</h2>
      <form onSubmit={handleAddFood}>
        <label htmlFor="foodName">
          Food Name:
          <input
            type="text"
            id="foodName"
            value={foodName}
            onChange={handleFoodNameChange}
          />
        </label>
        <label htmlFor="foodType">
          Food Type:
          <select
            id="foodType"
            value={foodType}
            onChange={handleFoodTypeChange}
          >
            <option value="">Select Food Type</option>
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>
        <label htmlFor="maxDeliveryTime">
          Max Delivery Time (in mins):
          <input
            type="number"
            id="maxDeliveryTime"
            value={maxDeliveryTime}
            onChange={handleMaxDeliveryTimeChange}
          />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </div>
  </>
);
};

export default Home;
