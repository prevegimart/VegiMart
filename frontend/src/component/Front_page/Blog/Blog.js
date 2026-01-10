import React from "react";
import "./Blog.css";
import Navbar from "../Navbar/Navbar";

const Blog = () => {
  return (
    <div className="partner-page">
      <Navbar />

      <section className="partner-container">
        {/* LEFT */}
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
          <div className="arrow-btn">→</div>
        </div>

        {/* CENTER */}
        <div className="partner-card">
          
          <p>
            Partner with us to provide reliable cold storage solutions that
            preserve freshness and reduce food waste. Play a vital role in
            maintaining quality from farm to customer while supporting a
            sustainable and farmer-first ecosystem.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="Cold Storage"
          />
          <div className="arrow-btn">→</div>
        </div>

        {/* RIGHT */}
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
          <div className="arrow-btn">→</div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
