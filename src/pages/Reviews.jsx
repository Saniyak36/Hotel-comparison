import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Reviews.css"; 

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then(res => setReviews(res.data))
      .catch(err => console.error("Error fetching reviews:", err));
  }, []);

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star if rating is >= 0.5
    const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

    let stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push("⭐");
    }

    // Add half star
    if (halfStar) {
      stars.push("⭐");
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push("☆");
    }

    return stars.join(" ");
  };

  return (
    <div className="review-container">
      <div className="review-content">
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "36px", fontWeight: "bold", color:"#1e3a8a"}}>📝 Guests Hotel Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                width: "320px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{review.hotel_name}</h3>
              <p><strong>{review.reviewer_name}</strong> | {review.date}</p>
              <p style={{ fontSize: "15px", color: "#333" }}>"{review.review}"</p>
              <p style={{ color: "#f39c12" }}>{renderStars(review.rating)}</p>
              <a href={review.source_link} target="_blank" rel="noopener noreferrer">
                <button style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}>
                  Read More Reviews
                </button>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Reviews;



