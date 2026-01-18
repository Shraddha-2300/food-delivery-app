import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const apiMap = {
  pizza: "pizzas",
  burger: "burgers",
  biryani: "biryanis",
  sandwich: "sandwiches",
  desserts: "desserts",
  beverages: "beverages"
};

function CategoryPage() {
  const { category } = useParams();
  const [foods, setFoods] = useState([]);
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const endpoint = apiMap[category];
    if (!endpoint) return;

    axios.get(`${url}/${endpoint}`)
      .then(res => setFoods(res.data));
  }, [category, url]);

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>

      <div className="foods-grid">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
