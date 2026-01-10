import React from "react";
import "../App.css";

const ComplianceSection = () => {
  return (
    <div className="compliance-container1">
      <div className="compliance-header">
        <h2>Stay compliant, without thinking about compliance</h2>
        <p>
          We handle regionally intricate and distinct compliance regulations all across India, so you don’t have to.
        </p>
      </div>
      
      <div className="compliance-grid">
        <div className="compliance-item">
          <div className="compliance-icon">
            <i className="fas fa-cogs"></i> {/* Example icon, you can use any icon library like FontAwesome */}
          </div>
          <h3>Automated adjustments</h3>
          <p>Adapt easily to the ever-changing tax laws.</p>
        </div>

        <div className="compliance-item">
          <div className="compliance-icon">
            <i className="fas fa-file-alt"></i>
          </div>
          <h3>Tax forms</h3>
          <p>Download tax forms like 12BB, 24Q, TDS, and Form 16 instantly with e-signature capability built-in.</p>
        </div>

        <div className="compliance-item">
          <div className="compliance-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3>PF, ESI, LWF, PT, and IT</h3>
          <p>Keep your business on legal footing across 28 states.</p>
        </div>
        <div className="compliance-item">
          <div className="compliance-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3>PF, ESI, LWF, PT, and IT</h3>
          <p>Keep your business on legal footing across 28 states.</p>
        </div>
        <div className="compliance-item">
          <div className="compliance-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3>PF, ESI, LWF, PT, and IT</h3>
          <p>Keep your business on legal footing across 28 states.</p>
        </div>

        <div className="compliance-item">
          <div className="compliance-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3>Ready-to-file reports</h3>
          <p>Auto-generate pre-formatted statutory and tax reports for faster filing.</p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;
