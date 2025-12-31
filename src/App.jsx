import { useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Offers from "./components/Offers";

function App() {
  const [showOffers, setShowOffers] = useState(false);

  return (
    <>
      <Navbar setShowOffers={setShowOffers} />
      <Category />

      {showOffers && (
        <>
          <hr style={{ margin: "40px 0" }} />
          <Offers />
        </>
      )}
    </>
  );
}

export default App;
