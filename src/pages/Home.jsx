import React, { useEffect, useState } from "react";
import "./Home.css"; // Make sure this is imported

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching hotels:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">🏨 Hotel Price Visualizer & Comparison Hub</h2>
      <p className="home-subtitle">
        Explore and compare prices, ratings, and amenities across platforms.
        Make informed decisions with our price insights and visual trends.
      </p>

      {loading ? (
        <p className="loading">Loading hotels...</p>
      ) : hotels && hotels.length > 0 ? (
        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <h3>{hotel.hotel_name}</h3>
              <p><strong>Price:</strong> ₹{hotel.price}</p>
              <p><strong>Rating:</strong> {hotel.rating}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">No hotels found.</p>
      )}
    </div>
    
  );
};


export default Home;


