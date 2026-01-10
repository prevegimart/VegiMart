import React, { useState } from "react";
import "./TimeTrackingSection.css";
import { FaClock, FaClipboardList, FaUsers, FaDollarSign, FaFileInvoice } from "react-icons/fa";
import timeTrackingImg from "../image/time-tracking.png"; 
import timesheetsImg from "../image/timesheets.png"; 
// import attendanceImg from "../image/attendance.png"; 
import payRatesImg from "../image/pay-rates.png"; 
// import expensesImg from "../image/expenses.png"; 
import employee from "../image/employee.jpg"; 
import attendence from "../image/attendence.jpg"; 
import salary from "../image/salary.jpg"; 
import incentive1 from "../image/incentive1.jpg"; 
import incentive2 from "../image/incentive2.jpg"; 

const TimeTrackingSection = () => {
  const [selectedMenu, setSelectedMenu] = useState("Employees");

  const images = {
    "Employees": employee,
    "Salary": salary,
    "Attendance management": attendence,
    "Incentive Management": incentive1,
    "Incentive Report": incentive2,
  };

  return (
    <div className="body1">
      <div className="heading">
      <h2>Seamless <span className="heading-part">payroll solutions</span> for global teams.</h2>
      <p className="heading-part2">Manage the payroll process with time tracking, timesheets, leave management, reporting, and more.</p>
    </div>
    <div className="time-scope">
      
      <div className="time-tracking-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <h3>Salary Books</h3>
          </div>
          <ul className="sidebar-menu">
            <li 
              onClick={() => setSelectedMenu("Employees")} 
              className={selectedMenu === "Employees" ? "active" : ""}
            >
              <FaClock className="menu-icon" /> Employees
            </li>
            <li 
              onClick={() => setSelectedMenu("Salary")} 
              className={selectedMenu === "Salary" ? "active" : ""}
            >
              <FaClipboardList className="menu-icon" /> Salary
            </li>
            <li 
              onClick={() => setSelectedMenu("Attendance management")} 
              className={selectedMenu === "Attendance management" ? "active" : ""}
            >
              <FaUsers className="menu-icon" /> Attendance Management
            </li>
            <li 
              onClick={() => setSelectedMenu("Incentive Management")} 
              className={selectedMenu === "Incentive Management" ? "active" : ""}
            >
              <FaDollarSign className="menu-icon" /> Incentive Management
            </li>
            <li 
              onClick={() => setSelectedMenu("Incentive Report")} 
              className={selectedMenu === "Incentive Report" ? "active" : ""}
            >
              <FaFileInvoice className="menu-icon" /> Incentive Report
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          <div className="content-box">
            <h2>{selectedMenu}</h2>
            <p>
              Manage your {selectedMenu.toLowerCase()} efficiently and boost productivity with Hubstaff.
            </p>
            <div className="dashboard-preview">
              <img src={images[selectedMenu]} alt={selectedMenu} />
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default TimeTrackingSection;