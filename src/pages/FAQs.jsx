import React, { useState, useEffect } from "react";
import "./FAQs.css";

export default function FAQs() {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("uploadedItems")) || [];
    const totalCoins = items.reduce((sum, item) => sum + item.coins, 0);
    setCoins(totalCoins);
  }, []);

  return (
    <div className="faq-container">
      <h1>FAQs</h1>

      <div className="faq-section">
        <h2>Rewards & Coins</h2>
        <p>
          Every time you upload an e-waste item, you earn coins. Coins can be redeemed for vouchers:
        </p>
        <ul>
          <li>50 coins → £0.50</li>
          <li>500 coins → £5</li>
          <li>1000 coins → £10</li>
        </ul>
        <p>Total coins earned so far: 💰 {coins} Coins</p>
      </div>

      <div className="faq-section">
        <h2>How it works?</h2>
        <p>
          1. Upload your e-waste item image.<br />
          2. Select the type and reason for disposal.<br />
          3. A collector will be assigned to pick up the item.<br />
          4. Coins are awarded after successful upload.<br />
          5. Redeem coins for vouchers in the rewards section.
        </p>
      </div>

      <div className="faq-section">
        <h2>Item Types</h2>
        <p>
          We accept Laptops, Mobiles, Chargers, Batteries, Monitors, TV Remotes, Printers, Keyboards, and other electronic items.
        </p>
      </div>
    </div>
  );
}
