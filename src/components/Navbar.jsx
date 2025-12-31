import React from "react";

function Navbar({ setShowOffers }) {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.name}>Foodies</h2>

      <ul style={styles.menu}>
        <li style={styles.item}>Home</li>
        <li style={styles.item}>Menu</li>

        <li
          style={{ ...styles.item, cursor: "pointer" }}
          onClick={() => setShowOffers(true)}
        >
          Today's Offer
        </li>

        <li style={styles.item}>Cart</li>
        <li style={styles.item}>Order</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 30px",
    backgroundColor: "#e14040",
    color: "white"
  },

  name: {
    fontSize: "24px",
    fontWeight: "bold"
  },

  menu: {
    display: "flex",
    listStyle: "none",
    gap: "22px",
    margin: 0,
    padding: 0
  },

  item: {
    cursor: "pointer"
  }
};

export default Navbar;
