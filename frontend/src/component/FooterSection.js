import React from "react";
import "../App.css";
import applelogo from '../image/applelogo.svg';
import google from '../image/google.svg';
import './FooterSection.css'; // Create this new CSS file

const FooterSection = () => {
  return (
    <div className="footer-container">
      {/* Main content */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>HELP</h3>
          <ul>
            <li>About Vauras Payroll</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Customers</li>
            <li>Employee Onboarding</li>
            <li>Payroll Management</li>
            <li>Payroll Processing</li>
            <li>Employee Self-service Portal</li>
            <li>Income Tax Calculator</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul>
            <li>What is Payroll?</li>
            <li>Payroll Software</li>
            <li>HR Payroll Software</li>
            <li>Payslip Templates</li>
            <li>Payroll Software vs Spreadsheets</li>
            <li>Payroll Software For Small Business</li>
            <li>Free Payroll Software</li>
            <li>Become a Partner</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>LET US HELP YOU</h3>
          <ul>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>CONTACT US ON</h3>
          <ul>
            <li>Monday-Friday (9:00AM to 7:00PM)</li>
            <li>Toll-Free: 1800572667</li>
            <li>Email Us: hr@vauras.com</li>
          </ul>
        </div>

        

      </div>
      <hr className="footer-divider" />
      {/* Bottom black section */}
      <div className="footer-bottom">
        
        <div className="footer-bottom-links">
          <span>Vauras Home</span>
          <span>|</span>
          <span>Contact</span>
          <span>|</span>
          <span>Security</span>
          <span>|</span>
          <span>IPR Complaints</span>
          <span>|</span>
          <span>Anti-spam Policy</span>
          <span>|</span>
          <span>Terms of Service</span>
          <span>|</span>
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Cookie Policy</span>
        </div>
        <div className="footer-policy-links">
          <span>GDPR Compliance</span>
          <span>|</span>
          <span>Abuse Policy</span>
        </div>
        <div className="footer-copyright">
          © 2025, Vauras Advisory Services Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default FooterSection;