import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Category() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
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
            onClick={() => navigate(`/${item.name.toLowerCase()}`)}
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
