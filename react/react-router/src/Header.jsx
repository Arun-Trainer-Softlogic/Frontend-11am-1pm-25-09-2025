import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>BB House</h2>

      <nav style={styles.nav}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            ...styles.link,
            borderBottom: isActive ? "2px solid #0f62fe" : "2px solid transparent",
            color: isActive ? "#0f62fe" : "#333",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...styles.link,
            borderBottom: isActive ? "2px solid #0f62fe" : "2px solid transparent",
            color: isActive ? "#0f62fe" : "#333",
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            ...styles.link,
            borderBottom: isActive ? "2px solid #0f62fe" : "2px solid transparent",
            color: isActive ? "#0f62fe" : "#333",
          })}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "15px 25px",
    background: "#f8f9fa",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },

  logo: {
    margin: 0,
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#0f62fe",
  },

  nav: {
    display: "flex",
    gap: "20px",
  },

  link: {
    textDecoration: "none",
    paddingBottom: "4px",
    fontSize: "1rem",
    transition: "0.2s",
  },
};

