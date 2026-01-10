import React from "react";
import "./CommunitySection.css"; // Import CSS file
import logo1 from "./image/logo1.png"
import logo2 from "./image/logo2.png"
import logo3 from "./image/logo3.png"
import logo4 from "./image/logo4.png"

const CommunitySection = () => {
  return (
    <section className="community-container">
      <div className="community-header">
        <h2>
          Get full access to the vaurasHR Ecosystem
        </h2>
        <p>
          Vauras users are backed by our strong community, led by industry thought leaders and practitioners.
        </p>
      </div>

      <div className="community-cards">
        {/* greytHR Academy */}
        <div className="card green-bg">
          <div className="card-image">
            <img src={logo1} alt="greytHR Academy" />
          </div>
          <h3>vaurasHR Academy</h3>
          <p>Only academy offering courses for HR & Payroll in India</p>
          <a href="#" className="know-more">Know More</a>
        </div>

        {/* greytHR Community */}
        <div className="card green-bg">
          <div className="card-image">
            <img src={logo2} alt="greytribe Community" />
          </div>
          <h3>vauras Community</h3>
          <p>Membership to nationwide online HR community</p>
          <a href="#" className="know-more">Know More</a>
        </div>
        

        <div className="card green-bg">
          <div className="card-image">
            <img src={logo3} alt="greytribe Community" />
          </div>
          <h3>vauras Community</h3>
          <p>Membership to nationwide online HR community</p>
          <a href="#" className="know-more">Know More</a>
        </div>



        <div className="card green-bg">
          <div className="card-image">
            <img src={logo3} alt="greytribe Community" />
          </div>
          <h3>vauras Community</h3>
          <p>Membership to nationwide online HR community</p>
          <a href="#" className="know-more">Know More</a>
        </div>


        

        <div className="card green-bg">
          <div className="card-image">
            <img src={logo3} alt="greytribe Community" />
          </div>
          <h3>Vauras Community</h3>
          <p>Membership to nationwide online HR community</p>
          <a href="#" className="know-more">Know More</a>
        </div>


        <div className="card green-bg">
          <div className="card-image">
            <img src={logo4} alt="greytribe Community" />
          </div>
          <h3>vauras Community</h3>
          <p>Membership to nationwide online HR community</p>
          <a href="#" className="know-more">Know More</a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
