import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#1e90ff", color: "white" }}>
      <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
      <Link to="/dashboard" style={{ marginRight: "20px", color: "white" }}>Dashboard</Link>
      <Link to="/collector" style={{ color: "white" }}>Collector</Link>
    </nav>
  );
}

