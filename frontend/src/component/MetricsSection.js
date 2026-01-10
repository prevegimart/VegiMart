import React, { useState, useEffect, useRef } from "react";
import "../App.css"; 

const MetricsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const metricsRef = useRef(null);

  const metricsData = [
    { label: "Happy customers served", value: 85000 },
    { label: "Kg of vegetables delivered", value: 1250000 },
    { label: "Village farmers connected", value: 1200 },
    { label: "Monthly repeat orders", value: 45000 },
  ];

  const handleCountUp = (target) => {
    const elements = target.querySelectorAll(".metric-item h2");
    elements.forEach((el, index) => {
      let start = 0;
      const end = metricsData[index].value;
      const duration = 2000;
      const increment = Math.ceil((end / duration) * 100);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          start = end;
        }
        el.textContent = start.toLocaleString();
      }, 100);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      handleCountUp(metricsRef.current);
    }
  }, [isInView]);

  return (
    <div className="metrics-container" ref={metricsRef}>
      <p className="metrics-header">
        Fresh village vegetables trusted by thousands of families across West
        Bengal
      </p>

      <div className="metrics-grid">
        {metricsData.map((metric, index) => (
          <div className="metric-item" key={index}>
            <h2>0</h2>
            <p>{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="logo-container">
        <img
          src="https://images.unsplash.com/photo-1524594227084-8fc6a5cc9c2b"
          alt="local farmers"
        />
        <img
          src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea"
          alt="fresh vegetables"
        />
        <img
          src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2"
          alt="organic farming"
        />
        <img
          src="https://images.unsplash.com/photo-1506807803488-8eafc15323c0"
          alt="village farming"
        />
        <img
          src="https://images.unsplash.com/photo-1518843875459-f738682238a6"
          alt="harvest produce"
        />
        <img
          src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b"
          alt="vegetable market"
        />
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          alt="fresh greens"
        />
      </div>
    </div>
  );
};

export default MetricsSection;
