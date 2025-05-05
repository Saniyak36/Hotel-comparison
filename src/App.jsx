import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PriceTrends from "./pages/PriceTrends";
import AISuggestions from "./pages/AISuggestions";
import Alerts from "./pages/Alerts";
import Reviews from "./pages/Reviews";
import Filters from "./pages/Filters";
import ChatbotComponent from './components/ChatbotComponent'; // Correct path to the chatbot component


function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans">
        <Navbar />
        <div className="p-4 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trends" element={<PriceTrends />} />
            <Route path="/ai-suggestions" element={<AISuggestions />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/filters" element={<Filters />} />
          </Routes>
        </div>

        {/* Add Chatbot here to make it show on all pages */}
        <ChatbotComponent />
      </div>
    </Router>
  );
}

export default App;

