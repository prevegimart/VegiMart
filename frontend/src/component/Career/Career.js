import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <div className="career-container">
      <header className="career-hero">
        <h1 className="heading-career">Join Vauras Advisory Services</h1>
        <p>Empowering India's workforce through PF, ESIC & P-TAX solutions</p>
      </header>

      <section className="career-intro">
        <h2>Why Work With Us?</h2>
        <p>
          At Vauras, we’re on a mission to modernize and simplify statutory compliance for businesses and employees.
          Be a part of a team that values innovation, integrity, and impact.
        </p>
      </section>

      <section className="career-benefits">
        <h2>Perks & Benefits</h2>
        <ul>
          <li>🌱 Learning & Development</li>
          <li>🧘‍♀️ Work-Life Balance</li>
          <li>💼 Growth Opportunities</li>
          <li>🏥 Health & Wellness</li>
        </ul>
      </section>

      <section className="career-openings">
        <h2>Current Openings</h2>
        <div className="job-card">
          <h3>PF & Compliance Executive</h3>
          <p>Location: Mumbai | Experience: 1-3 years</p>
          <button>Apply Now</button>
        </div>
        <div className="job-card">
          <h3>ESIC Specialist</h3>
          <p>Location: Pune | Experience: 2+ years</p>
          <button>Apply Now</button>
        </div>
        <div className="job-card">
          <h3>P-TAX Consultant</h3>
          <p>Location: Remote | Experience: 1-2 years</p>
          <button>Apply Now</button>
        </div>
      </section>

      <section className="career-cta">
        <h2>Didn't find the right role?</h2>
        <p>We’re always looking for passionate professionals. Drop us your CV!</p>
        <button className="submit-btn">Send Resume</button>
      </section>
    </div>
  );
};

export default Career;
