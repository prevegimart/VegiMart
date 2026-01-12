import React from "react";

const menuItems = [
  "Employee Operations",
  "Product & Inventory Management",
  "Logistics & Transport Management",
  "Delivery & Last-Mile Management",
  "Manage Finance & Settlement",
  "User & Access Management",
  "Notifications & Alerts",
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="dashboard_container">
      
    <div className="sidebar">
      {menuItems.map((item) => (
        <button
          key={item}
          className={`menu-btn ${activeTab === item ? "active" : ""}`}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </button>
      ))}
    </div>
    </div>
  );
};

export default Sidebar;
