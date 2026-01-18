import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Foodies...</h2>

      <ul style={styles.menu}>
        <li>
          <NavLink to="/" style={styles.link}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/offers" style={styles.link}>
            Today's Offer
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" style={styles.link}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={styles.link}>Login</NavLink>
        </li>
      </ul>

    </nav>
  );
}
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 30px",
    backgroundColor: "#e14040",
    color: "white",
    alignItems: "center",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Navbar;
