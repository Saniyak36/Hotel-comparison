import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PriceTrends from "./pages/PriceTrends";
import AI from "./pages/AI";
import Alerts from "./pages/Alerts";
import Filters from "./pages/Filters";
import Reviews from "./pages/Reviews";
import ChatbotComponent from './components/ChatbotComponent'; // Correct path to the chatbot component
function App() {
  return (
  
      <div className="bg-gray-50 min-h-screen font-sans">
        <Navbar />
        <div className="p-4 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trends" element={<PriceTrends />} />
            <Route path="/AI" element={<AI />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/filters" element={<Filters />} />
          </Routes>
        </div>
        {/* Add ChatbotComponent here */}
        <ChatbotComponent /> 
      </div>
    
  );
}

export default App;

