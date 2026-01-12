import React from "react";

const DashboardContent = ({ activeTab }) => {
  return (
    <div className="content">
      <h1>{activeTab}</h1>

      {activeTab === "Employee Operations" && (
        <p>Manage staff, roles, attendance, and performance metrics.</p>
      )}

      {activeTab === "Product & Inventory Management" && (
        <p>Add vegetables, update stock, manage pricing & categories.</p>
      )}

      {activeTab === "Logistics & Transport Management" && (
        <p>Track transport vehicles, routes, and supplier shipments.</p>
      )}

      {activeTab === "Delivery & Last-Mile Management" && (
        <p>Assign delivery agents, track orders & delivery status.</p>
      )}

      {activeTab === "Manage Finance & Settlement" && (
        <p>View payments, commissions, settlements, and revenue reports.</p>
      )}

      {activeTab === "User & Access Management" && (
        <p>Manage customers, vendors, admins, and permissions.</p>
      )}

      {activeTab === "Notifications & Alerts" && (
        <p>Send alerts for low stock, delayed deliveries, and offers.</p>
      )}
    </div>
  );
};

export default DashboardContent;
