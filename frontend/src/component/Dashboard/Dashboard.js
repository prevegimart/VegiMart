import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
const leftStats = [
  { label: "Total Sales", value: "₹4,85,200" },
  { label: "Total Orders", value: "1,248" },
  { label: "Monthly Revenue", value: "₹1,32,000" },
  { label: "Growth Rate", value: "18.6%" },
  { label: "Avg Order Value", value: "₹389" },
];

const weekStats = [
  { day: "Mon", sales: "₹12,500", orders: 42 },
  { day: "Tue", sales: "₹15,200", orders: 51 },
  { day: "Wed", sales: "₹13,800", orders: 47 },
  { day: "Thu", sales: "₹17,400", orders: 58 },
  { day: "Fri", sales: "₹18,900", orders: 63 },
  { day: "Sat", sales: "₹21,600", orders: 71 },
  { day: "Sun", sales: "₹16,200", orders: 55 },
];

const rightStats = [
  { label: "Monthly Expense", value: "₹82,500" },
  { label: "Net Profit", value: "₹49,500" },
  { label: "Inventory Cost", value: "₹1,05,000" },
  { label: "Delivery Cost", value: "₹18,200" },
  { label: "Pending Payments", value: "₹14,600" },
];

const Dashboard = () => {
   const navigate = useNavigate();
  const open_page=()=>{
      navigate("/sell-items");
  }
  return (
    <section className="seller_dashboard">
   <div className="dashboard_header_main">
  <div className="dashboard_header header_left">
    <h2>Seller Expense & Growth Dashboard</h2>
    <p>Track overall business health and weekly selling performance</p>
  </div>

  <div className="dashboard_header header_right">
    <button className="sell_btn" onClick={open_page}>Sell Items</button>
  </div>
</div>


      <div className="dashboard_grid">
        {/* LEFT */}
        <div className="left_panel">
          <h3>Business Overview</h3>
          {leftStats.map((item, i) => (
            <div className="stat_row" key={i}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="center_panel">
          <h3>Current Week Selling</h3>

          <div className="week_summary">
            <div>
              <span>Total Week Sales</span>
              <strong>₹1,15,600</strong>
            </div>
            <div>
              <span>Total Orders</span>
              <strong>387</strong>
            </div>
            <div>
              <span>Best Day</span>
              <strong>Saturday</strong>
            </div>
          </div>

          <table className="week_table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Sales</th>
                <th>Orders</th>
              </tr>
            </thead>
            <tbody>
              {weekStats.map((d, i) => (
                <tr key={i}>
                  <td>{d.day}</td>
                  <td>{d.sales}</td>
                  <td>{d.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT */}
        <div className="right_panel">
          <h3>Expenses & Operations</h3>
          {rightStats.map((item, i) => (
            <div className="stat_row" key={i}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
