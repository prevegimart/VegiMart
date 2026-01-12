import React, { useState } from "react";
import Sidebar from "./pages/Sidebar";
import DashboardContent from "./pages/DashboardContent";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Employee Operations");

  return (
    <div className="dashboard-container">
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <DashboardContent activeTab={activeTab} />
      <div className="create_emp">
        <button className="emp_text">+ Create Employee</button>
      </div>
    </div>
  );
};

export default Dashboard;
