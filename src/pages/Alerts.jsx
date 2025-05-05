import React, { useState, useEffect } from "react";
import "./Alerts.css";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // 🔁 Simulated alert data
    const demoAlerts = [
      {
        id: 1,
        hotel: "Taj Palace",
        city: "Mumbai",
        oldPrice: 4800,
        newPrice: 3900,
        type: "Price Drop",
        message: "Price dropped ₹900 at Taj Palace in Mumbai!",
        link: "https://www.booking.com/hotel/in/the-taj-mahal-palace-mumbai.en-gb.html"
      },
      {
        id: 2,
        hotel: "Hyatt Regency",
        city: "Delhi",
        oldPrice: 5000,
        newPrice: 4500,
        type: "Limited Deal",
        message: "Only 2 rooms left at Hyatt Regency Delhi!",
        link: "https://www.booking.com/hotel/in/hyatt-regency-delhi.en-gb.html"
      },
      {
        id: 3,
        hotel: "The Westin chennai Velachery",
        city: "Chennai",
        oldPrice: 2200,
        newPrice: 1900,
        type: "Offer",
        message: "10% off on Chennai Budget Inn till tonight!",
        link: "https://www.goibibo.com/hotels/the-westin-chennai-velachery-hotel-in-chennai-2148000985900838090/"
      },
      {
        id: 4,
        hotel: "ITC Windsor",
        city: "Bangalore",
        oldPrice: 28000,
        newPrice: 24000,
        type: "Price Drop",
        message: "While Royal Afghan serves cuisine from the Northwest frontier, Dublin is the Irish Pub on site",
        link: "https://www.booking.com/hotel/in/itc-windsor-bengaluru.en-gb.html?"
      },
      {
        id: 5,
        hotel: "Ocean View Goan Beach House",
        city: "Goa",
        oldPrice: 4200,
        newPrice: 3999,
        type: "Limited Deal",
        message: "Goa's Ocean View Hotel: 24-hour flash sale!",
        link: "https://www.agoda.com/ocean-view-goan-beach-house/hotel/goa-in.html"
      },
      {
        id: 6,
        hotel: "The Ramayana Hotel",
        city: "Ayodhya",
        oldPrice: 8000,
        newPrice: 7095,
        type: "Limited Deal",
        message: "Only 7.3 km drive to Shree Ramjanmbhumi Temple Ayodhya",
        link: "https://www.goibibo.com/hotels/the-ramayana-ayodhya-hotel-in-ayodhya-5423144992196519831/"
      },
      {
        id: 7,
        hotel: "Radisson Hotel",
        city: "Shimla",
        oldPrice: 19000,
        newPrice: 17700,
        type: "Price Drop",
        message: "Cafe Valley Vue serves international cuisine",
        link: "https://www.booking.com/hotel/in/radisson-shimla.en-gb.html"
      },
      {
        id: 8,
        hotel: "Courtyard by Marriott Kochi Airport",
        city: "kerala",
        oldPrice: 6800,
        newPrice: 6716,
        type: "5% Off",
        message: "9 minutes walk to Cochin International Airport",
        link: "https://www.goibibo.com/hotels/courtyard-by-marriott-kochi-airport-hotel-in-cochin-2089337431795510986/"
      }
    ];
       

    setAlerts(demoAlerts);
  }, []);

  return (
    <div className="alerts-container">
      <h2>🔔 Hotel Alerts & Deals</h2>
      <div className="alert-list">
        {alerts.map(alert => (
          <div key={alert.id} className="alert-card">
            <h4>
  <a href={alert.link} target="_blank" rel="noopener noreferrer">
    {alert.hotel} ({alert.city})
  </a>
</h4>

            <p>{alert.message}</p>
            <div className="price-info">
              <span className="old">₹{alert.oldPrice}</span>
              <span className="new">₹{alert.newPrice}</span>
            </div>
            <span className={`tag ${alert.type.toLowerCase().replace(" ", "-")}`}>
              {alert.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
