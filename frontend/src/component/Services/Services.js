import React from "react";
import "./Services.css";
import { FaPiggyBank, FaUserShield, FaMoneyCheckAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaPiggyBank />,
    title: "Provident Fund (PF)",
    description: "Secure your employees' future with efficient PF management and compliance.",
    color: "#4CAF50",
  },
  {
    icon: <FaUserShield />,
    title: "ESIC",
    description: "Ensure medical and social security through seamless ESIC processing.",
    color: "#2196F3",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "P-TAX",
    description: "Manage and automate your Professional Tax filings with ease and accuracy.",
    color: "#FF9800",
  },
];

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">Vauras offers powerful tools to manage compliance and employee benefits.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index} style={{ borderTopColor: service.color }}>
            <div className="service-icon" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
