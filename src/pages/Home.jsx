import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [coins, setCoins] = useState(0);
  const [collector, setCollector] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [itemType, setItemType] = useState("");
  const [otherItemName, setOtherItemName] = useState("");
  const [reason, setReason] = useState("");
  const [image, setImage] = useState(null);

  const COIN_REWARD = 25;

  const collectors = ["Ravi Kumar", "Priya Sharma", "David Lee", "Aisha Khan", "John Parker"];

  const assignCollector = () => {
    const randomCollector = collectors[Math.floor(Math.random() * collectors.length)];
    const arrival = Math.floor(Math.random() * 3) + 1;
    const assigned = { name: randomCollector, arrival };
    setCollector(assigned);
    return assigned;
  };

  const handleUpload = () => {
    if (!image) {
      alert("Please upload an image of the e-waste item!");
      return;
    }
    if (!itemType) {
      alert("Please select the item type!");
      return;
    }
    if (!reason) {
      alert("Please select the reason for disposal!");
      return;
    }

    let itemName = itemType === "Other" ? otherItemName : itemType;
    const newCollector = assignCollector();

    // Add coins only after successful upload
    setCoins(coins + COIN_REWARD);
    setUploadSuccess(true);

    // Save to localStorage
    const existingItems = JSON.parse(localStorage.getItem("uploadedItems")) || [];
    localStorage.setItem("uploadedItems", JSON.stringify([...existingItems, {
      name: itemName,
      coins: COIN_REWARD,
      collector: newCollector,
      reason,
      predictedLabel: "Demo Item" // placeholder for AI prediction
    }]));

    // Reset form
    setItemType("");
    setOtherItemName("");
    setReason("");
    setImage(null);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>E-Waste Collection & Management Portal</h1>
        <p>Simplifying e-waste disposal with rewards.</p>
      </header>

      <section className="upload-section">
        <h2>Upload Your E-Waste</h2>

        <label>
          Select Item:
          <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Laptop">Laptop</option>
            <option value="Mobile">Mobile</option>
            <option value="Charger">Charger</option>
            <option value="Battery">Battery</option>
            <option value="Monitor">Monitor</option>
            <option value="TV Remote">TV Remote</option>
            <option value="Printer">Printer</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {itemType === "Other" && (
          <input
            type="text"
            placeholder="Enter item name"
            value={otherItemName}
            onChange={(e) => setOtherItemName(e.target.value)}
          />
        )}

        <label>
          Reason for disposal:
          <select value={reason} onChange={(e) => setReason(e.target.value)}>
            <option value="">--Select--</option>
            <option value="Not using much">Not using much</option>
            <option value="Device not working">Device not working</option>
            <option value="Replacing with new device">Replacing with new device</option>
            <option value="Disposing it anyway">Disposing it anyway</option>
          </select>
        </label>

        <label>
          Upload Image (required):
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </label>

        {image && <img src={image} alt="upload-preview" width="200" />}

        <button className="btn" onClick={handleUpload}>Submit Item</button>

        {uploadSuccess && (
          <p className="success">✔ Item uploaded successfully! Coins awarded: {COIN_REWARD}</p>
        )}
      </section>

      <section className="rewards">
        <h2>Your Coins</h2>
        <div className="coin-box">💰 {coins} Coins</div>
        <p>Earn coins for every e-waste item uploaded. 500 coins = £5 voucher!</p>
      </section>

      {collector && (
        <section className="assign">
          <h2>Collector Assigned</h2>
          <div className="collector-box">
            <p><strong>Collector:</strong> {collector.name}</p>
            <p>⏳ Estimated Arrival: {collector.arrival} hour(s)</p>
          </div>
        </section>
      )}
    </div>
  );
}

