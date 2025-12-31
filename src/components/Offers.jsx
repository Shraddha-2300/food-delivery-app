import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Offers.css";

function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/offers")
      .then((res) => setOffers(res.data));
  }, []);

  return (
    <div className="offers-section" id="offers">
      <h2>Today's Offers..</h2>

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
