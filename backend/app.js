const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios"); // Import axios for making HTTP requests

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // 🔁 change if your MySQL username is different
  password: "",       // 🔁 add password if required
  database: "hotel_data"  // 🔁 make sure this DB exists
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database.");
  }
});

// ✅ Route: GET all hotels
app.get("/hotels", (req, res) => {
  const query = "SELECT * FROM hotels";
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error fetching hotels:", err);
      res.status(500).json({ error: "Failed to fetch hotels" });
    } else {
      res.json(results);
    }
  });
});

// ✅ Route: Hotel Price Trends (mock data for now)
app.get("/PriceTrends", (req, res) => {
  res.json({
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: {
      Mumbai:   [2800, 3000, 3500, 3300, 3600, 4000],
      Delhi:    [2600, 2900, 3200, 3100, 3300, 3700],
      Chennai:  [2400, 2700, 3100, 2900, 3100, 3500],
      Bangalore:[2700, 2800, 2900, 3000, 3100, 3300],
      Goa:      [2900, 3100, 3400, 3500, 3700, 3900]
    },
    avgPriceCities: [
      { city: "Mumbai", avgPrice: 3500 },
      { city: "Delhi", avgPrice: 3200 },
      { city: "Chennai", avgPrice: 2900 },
      { city: "Goa", avgPrice: 3600 },
      { city: "Bangalore", avgPrice: 3050 }
    ],
    ratingDistribution: [
      { range: "5 Stars", count: 10 },
      { range: "4 Stars", count: 14 },
      { range: "3 Stars", count: 5 },
      { range: "Below 3", count: 3 }
    ]
  });
});

// ✅ Route: Get Reviews
app.get("/reviews", (req, res) => {
  const query = "SELECT * FROM reviews ORDER BY date DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error fetching reviews:", err);
      res.status(500).json({ error: "Failed to fetch reviews" });
    } else {
      res.json(results);
    }
  });
});

// ✅ Route: Get Itineraries
app.get('/itineraries', (req, res) => {
  const destination = req.query.destination;  // Getting destination from query params

  let query = 'SELECT * FROM itineraries';  // Default query to fetch all itineraries
  if (destination) {
    query += ` WHERE destination LIKE '%${destination}%'`;  // Filter by destination
  }

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching itineraries:', err);
      res.status(500).send('Error fetching itineraries.');
    } else {
      res.json(result);
    }
  });
});

// ✅ Route: Chatbot Interaction
app.post('/chatbot', async (req, res) => {
  const userMessage = req.body.message;  // User's message from the frontend

  // You can simulate a simple response or integrate a chatbot model
  const botResponse = await getBotResponse(userMessage);

  res.json({ message: botResponse });  // Return the bot's response to the frontend
});

// Simulate chatbot model response (could be replaced with a more sophisticated model)
const getBotResponse = (input) => {
  // Simple mock response for chatbot
  const responses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a bot, but I'm doing great! How can I help you?",
    "what's your name": "I'm your travel assistant bot. How can I assist you?",
    "default": "Sorry, I didn't quite understand that. Could you ask something else?"
  };
  return responses[input.toLowerCase()] || responses["default"];
};

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

