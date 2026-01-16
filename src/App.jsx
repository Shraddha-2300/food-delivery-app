import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Foods from "./components/Foods";
import Offers from "./components/Offers";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import { CategoryContext } from "./context/CategoryContext";

function App() {
  const { selectedCategory } = useContext(CategoryContext);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Category />
              {selectedCategory && (
                <Foods selectedCategory={selectedCategory} />
              )}
            </>
          }
        />

        <Route path="/offers" element={<Offers />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
