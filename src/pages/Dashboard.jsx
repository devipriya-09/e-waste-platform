import React, { useState, useEffect } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [totalCoins, setTotalCoins] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("uploadedItems")) || [];
    setItems(storedItems);

    // calculate total coins
    const coins = storedItems.reduce((sum, item) => sum + item.coins, 0);
    setTotalCoins(coins);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <h2>Total Coins: 💰 {totalCoins}</h2>
      <p>Redeem 500 coins = £5 voucher!</p>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>AI Prediction</th>
            <th>Reason</th>
            <th>Coins</th>
            <th>Collector</th>
            <th>Arrival (hrs)</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr><td colSpan="6">No items uploaded yet.</td></tr>
          ) : (
            items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.predictedLabel || "-"}</td>
                <td>{item.reason}</td>
                <td>{item.coins}</td>
                <td>{item.collector?.name || "-"}</td>
                <td>{item.collector?.arrival || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

