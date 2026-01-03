import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";

function Category() {
  const [categories, setCategories] = useState([]);
  const url = `${import.meta.env.VITE_BASE_URL}`;
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${url}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-section">
      <h2>Food Items...</h2>

      <div className="category-container">
        {categories.map((item) => (
          <div className="category" key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
