import React, { useEffect, useState } from "react";
import "./MetricsSection.css";

const METRICS = [
  {
    label: "Vegetables Delivered",
    value: 4200000,
    unit: " kg+",
    description: "Fresh produce delivered directly from village farms",
    icon: "🥬",
  },
  {
    label: "Happy Households",
    value: 210000,
    unit: "+",
    description: "Families relying on us for daily vegetables",
    icon: "🏠",
  },
  {
    label: "Partner Farmers",
    value: 2600,
    unit: "+",
    description: "Village farmers earning fair, transparent prices",
    icon: "👨‍🌾",
  },
  {
    label: "Orders Every Day",
    value: 11500,
    unit: "+",
    description: "Fresh orders packed and delivered every morning",
    icon: "📦",
  },
];

const VegetableMetrics = () => {
  return (
    <section className="metrics-section">
      {/* Header */}
      <header className="metrics-header">
        <span className="metrics-eyebrow">Our Impact</span>
        <h2>
          Building India’s Most Trusted <br />
          Fresh Vegetable Marketplace
        </h2>
        <p>
          We connect West Bengal village farmers directly with urban homes —
          ensuring freshness, fairness, and reliability every single day.
        </p>
      </header>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {METRICS.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Trust Line */}
      <footer className="metrics-footer">
        🌱 No middlemen • 🚜 Farm-direct sourcing • 🥕 Fresh every morning
      </footer>
    </section>
  );
};

const MetricCard = ({ label, value, unit, description, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.max(1, Math.floor(value / 90));

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <article className="metric-card">
      <div className="metric-icon">{icon}</div>

      <div className="metric-value">
        {count.toLocaleString()}
        {unit}
      </div>

      <div className="metric-label">{label}</div>
      <div className="metric-description">{description}</div>
    </article>
  );
};

export default VegetableMetrics;
