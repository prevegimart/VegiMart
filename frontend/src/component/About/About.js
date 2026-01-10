import React, { useState } from "react";
import "./RightSideAnimation.css";
import sampleImage1 from "./extra2.jpg";
import sampleImage2 from "./turf-grass-lawn-grass-for-ground.jpg";
import sampleImage3 from "./image1.jpg";
import sampleImage4 from "./attendence.jpg";
import sampleImage5 from "./salary.jpg";

const cardsData = [
  {
    img: sampleImage1,
    title: "AI-Assisted Recruiting",
    desc: "Transform the way you recruit with cutting-edge tools.",
  },
  {
    img: sampleImage2,
    title: "Employee Engagement",
    desc: "Drive team alignment and motivation.",
  },
  {
    img: sampleImage3,
    title: "HR Analytics & Insights",
    desc: "Get the insights you need to strategize.",
  },
  {
    img: sampleImage4,
    title: "Attendance Management",
    desc: "Track time and attendance effectively.",
  },
  {
    img: sampleImage5,
    title: "Salary & Payroll",
    desc: "Simplify and automate payroll processing.",
  },
];

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 3 < cardsData.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const getDisplayedCards = () => {
    return cardsData.slice(currentIndex, currentIndex + 3);
  };

  return (
    <div className="carousel-container">
      <div className="content-wrapper">
        <div className="left-panel">
          <h2>
            Explore the Latest<br />Tools to Support<br />Your Team
          </h2>
          <p>
            Powerful solutions to help reduce the average $4,683 and 44 days it takes to hire.*
          </p>
          <div className="arrow-buttons">
            <button className="arrow" onClick={prevSlide}>←</button>
            <button className="arrow" onClick={nextSlide}>→</button>
          </div>
        </div>

        <div className="carousel">
          {getDisplayedCards().map((card, idx) => (
            <div
              className={`card ${idx === 0 ? "first-card" : ""}`}
              key={idx}
            >
              <img src={card.img} alt={card.title} />
              <div className="card-body">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;