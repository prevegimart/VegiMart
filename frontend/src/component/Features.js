import React from "react";
import "../component/Features.css";
import { FaCog, FaCreditCard, FaClock } from "react-icons/fa"; // Icons used in the layout

function Features() {
  return (
    <div className="features-container">
      <div className="feature-item">
        <FaCog className="feature-icon" />
        <h3>Automated Compliance</h3>
        <p>
          We’re India’s only payroll software that fully automates payment of
          TDS, PF, PT & ESIC, along with tax filing.
        </p>
      </div>

      <div className="feature-item">
        <FaCreditCard className="feature-icon" />
        <h3>Direct Salary Deposits</h3>
        <p>
          Deposit salaries directly into employees’, freelancers’ or
          contractors’ bank accounts, instantly and accurately.
        </p>
      </div>

      <div className="feature-item">
        <FaClock className="feature-icon" />
        <h3>1-Hour Onboarding</h3>
        <p>
          Getting started with RazorpayX Payroll is incredibly quick and easy
          thanks to a seamless plug and play design.
        </p>
      </div>
    </div>
  );
}

export default Features;
