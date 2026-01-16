import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./Foods.css";
import { CategoryContext } from "../context/CategoryContext";

function Foods() {
  const { selectedCategory } = useContext(CategoryContext);
  const [foods, setFoods] = useState([]);

  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (!selectedCategory) return;

    axios
      .get(`${url}/foods?category=${selectedCategory}`)
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, [selectedCategory, url]);

  if (!selectedCategory) return null;

  return (
    <div className="foods-section">
      <h2>{selectedCategory} Items</h2>

      <div className="foods-slider">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foods;
