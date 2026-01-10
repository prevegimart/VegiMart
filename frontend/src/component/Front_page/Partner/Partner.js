import React from "react";
import "./Partner.css";

const Partner = () => {
  return (
    <div className="partner-page">
      {/* Navbar */}
      <nav className="partner-navbar">
        <div className="logo">🌿</div>
        <ul>
          <li>Partner with us</li>
          <li>Blog</li>
          <li>Contact with us</li>
          <li>About Us</li>
        </ul>
      </nav>

      {/* Content */}
      <div className="partner-container">
        {/* Card 1 */}
        <div className="partner-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
            alt="Delivery Partner"
          />
          <p>
            Join us as a delivery partner and help bring fresh vegetables from
            farms to customers efficiently. Be a key part of our supply chain
            while growing your business with a purpose-driven platform that
            supports farmers and fair trade.
          </p>
          <button className="arrow-btn">→</button>
        </div>

        {/* Card 2 */}
        <div className="partner-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="Cold Storage"
          />
          <p>
            Partner with us to provide reliable cold storage solutions that
            preserve freshness and reduce food waste. Play a vital role in
            maintaining quality from farm to customer while supporting a
            sustainable and farmer-first ecosystem.
          </p>
          <button className="arrow-btn">→</button>
        </div>

        {/* Card 3 */}
        <div className="partner-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Business Partner"
          />
          <p>
            We are open to collaborate with brands and businesses that share our
            vision and are ready to grow together. Partner with us to build
            innovative solutions, expand market reach, and create meaningful
            impact across the fresh produce ecosystem.
          </p>
          <button className="arrow-btn">→</button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
