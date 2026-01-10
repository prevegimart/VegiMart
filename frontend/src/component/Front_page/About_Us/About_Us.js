import React from "react";
import "./About_Us.css";
import logo from '../Asset/logo.jpg'
import Navbar from "../Navbar/Navbar";
const About_Us = () => {
  return (
    <div className="about-container">

      <Navbar />

      <div className="about-content">

        <div className="story">
          <img
            src={logo}
            alt="Farmer Ravi"
          />
          <p>
            <strong>Ravi</strong>, a small farmer in a rural village, used to
            sell his crops at a fraction of their worth due to middlemen.
            After joining our fresh vegetable delivery app, he connected
            directly with customers and got the right price for his produce.
            His income doubled, and he could now invest in better farming tools!
          </p>
        </div>


        <div className="story reverse">
          <p>
            <strong>Meera</strong> had been struggling to sell her fresh tomatoes
            at fair prices in her village. After she listed them on our
            vegetable delivery app, she was able to reach a wider market and
            sell them at a much higher rate. She now earns enough to improve
            her family’s lifestyle and expand her farm.
          </p>
          <img
            src={logo}
            alt="Farmer Meera"
          />
        </div>


        <div className="story">
          <img
            src={logo}
            alt="Farmer Suresh"
          />
          <p>
            <strong>Suresh</strong>, a farmer from a remote village, faced
            constant exploitation by local traders. But with the help of our
            vegetable delivery app, he was able to bypass the middlemen and
            sell his crops directly to consumers. This not only gave him a
            fair price but also built a loyal customer base for his fresh
            vegetables.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
