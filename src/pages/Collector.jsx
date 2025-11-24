import React, { useState, useEffect } from "react";
import "./Collector.css";

export default function Collector() {
  const [uploadedItems, setUploadedItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("uploadedItems")) || [];
    setUploadedItems(items);
  }, []);

  return (
    <div className="collector-container">
      <h1>Collector Dashboard</h1>
      {uploadedItems.length === 0 ? (
        <p>No items uploaded yet.</p>
      ) : (
        <div className="collector-list">
          {uploadedItems.map((item, index) => (
            <div key={index} className="collector-card">
              <h3>Item: {item.name}</h3>
              <p>Reason: {item.reason}</p>
              <p>Predicted Label: {item.predictedLabel}</p>
              <p>Coins Awarded: {item.coins}</p>
              <p>Collector: {item.collector.name}</p>
              <p>⏳ Arrival: {item.collector.arrival} hour(s)</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
