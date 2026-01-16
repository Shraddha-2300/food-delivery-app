import Category from "../components/Category";
import Foods from "../components/Foods";
import Offers from "../components/Offers";
import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

function Home() {
  const { selectedCategory } = useContext(CategoryContext);

  return (
    <>
      <Category />
      {selectedCategory && <Foods selectedCategory={selectedCategory} />}
      <Offers />
    </>
  );
}

export default Home;
