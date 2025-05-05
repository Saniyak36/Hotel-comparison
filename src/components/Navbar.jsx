import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="site-title">Pricenerds</h1>
        <h1 className="logo"> </h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/trends">Price Trends</Link>
          <Link to="/ai">AI Suggestions</Link>
          <Link to="/alerts">Alerts</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/filters">Filters</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

