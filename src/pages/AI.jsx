import React, { useState } from "react";
import axios from "axios";
import "./AI.css"; // Make sure this is imported

const AI = () => {
  const [destination, setDestination] = useState("");  // For storing user input
  const [itineraries, setItineraries] = useState([]);   // For storing fetched itineraries
  const [loading, setLoading] = useState(false);       // For showing loading indicator
  const [error, setError] = useState("");              // For handling errors

  // Function to handle search
  const handleSearch = () => {
    if (destination.trim() === "") {
      setError("Please enter a destination.");
      return;
    }

    setLoading(true);
    setError("");
    axios
      .get("http://localhost:5000/itineraries", { params: { destination } })
      .then((res) => {
        setItineraries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching itineraries:", err);
        setError("Failed to fetch itineraries.");
        setLoading(false);
      });
  };

  return (
    <div className="ai-container">
      <h2>AI Travel Suggestions</h2>

      <div className="search-container">
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination"
        />
        <button onClick={handleSearch}>Search Itineraries</button>
      </div>

      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-message">Loading itineraries...</p>}

      {itineraries.length > 0 && (
        <div className="itineraries-list">
          {itineraries.map((itinerary, index) => (
            <div key={index} className="itinerary-card">
              <h3>{itinerary.destination}</h3>
              <p><strong>Nights:</strong> {itinerary.nights}</p>
              <p><strong>Days:</strong> {itinerary.days}</p>
              <p><strong>Day-wise Plan:</strong></p>
              <pre>{itinerary.day_wise_plan}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AI;

