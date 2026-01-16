import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Offers.css";

function Offers() {
  const [offers, setOffers] = useState([]);

  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${url}/offers`)
      .then((res) => setOffers(res.data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="offers-section">
      <h2>Today's Offers...</h2>

      <div className="offers-container">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
