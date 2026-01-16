import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./Category.css";
import { CategoryContext } from "../context/CategoryContext";

function Category() {
  const [categories, setCategories] = useState([]);
  const { setSelectedCategory } = useContext(CategoryContext);

  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${url}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="category-section">
      <h2>Food Categories</h2>

      <div className="category-container">
        {categories.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => setSelectedCategory(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
