import { createContext, useState } from "react";

const CategoryContext = createContext(null);

function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export { CategoryContext };
export default CategoryProvider;
