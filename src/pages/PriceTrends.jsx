import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Line,
  Bar,
  Pie
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import "./PriceTrends.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Trends = () => {
  const [trends, setTrends] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/Pricetrends")
      .then(res => {
        setTrends(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching trends:", err);
        setLoading(false);
      });
  }, []);

  const lineData = {
    labels: trends.months || [],
    datasets: trends.data ? Object.keys(trends.data).map(city => ({
      label: city,
      data: trends.data[city],
      fill: false,
      borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      tension: 0.3
    })) : []
  };

  const barData = {
    labels: trends.avgPriceCities?.map(c => c.city) || [],
    datasets: [{
      label: "Avg Price",
      data: trends.avgPriceCities?.map(c => c.avgPrice) || [],
      backgroundColor: "#0ea5e9"
    }]
  };

  const pieData = {
    labels: trends.ratingDistribution?.map(r => r.range) || [],
    datasets: [{
      label: "Ratings",
      data: trends.ratingDistribution?.map(r => r.count) || [],
      backgroundColor: ["#22c55e", "#facc15", "#f97316", "#ef4444"]
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  return (
    <div className="trends-container">
       <div className="trends-content">
      <h2>📈 Hotel Pricing & Ratings Trends</h2>

      {loading ? (
        <p>Loading charts...</p>
      ) : (
        <>
          <div className="chart-box">
            <h4>💹 Monthly Price Trends by City</h4>
            <Line data={lineData} options={chartOptions} />
          </div>

          <div className="chart-box">
            <h4>🏙️ Average Hotel Prices by City</h4>
            <Bar data={barData} options={chartOptions} />
          </div>

          <div className="chart-box">
            <h4>⭐ Hotel Ratings Distribution</h4>
            <Pie data={pieData} options={chartOptions} />
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Trends;
