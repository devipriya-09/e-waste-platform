import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">♻️ E-Waste Portal</Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">Collector</Link>
        </li>
        <li className={location.pathname === "/faqs" ? "active" : ""}>
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
    </nav>
  );
}

