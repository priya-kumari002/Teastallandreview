import React from "react";
import "./About.css";
export default function About() {
  return (
<div className="about-container">
      <div className="about-content">
        <h1>About Our Tea Heaven</h1>
        <p>
          Welcome to <strong>Chai Haven</strong> – your cozy corner for the finest blends of tea.
          We’re passionate about bringing you a relaxing tea experience with handpicked leaves
          from the best gardens across India.
        </p>
        <p>
          Whether you love the bold flavor of masala chai or the soothing calm of green tea,
          we’ve got something to warm your heart.
        </p>
        <p>
          At Chai Haven, every cup is a story brewed with tradition, care, and love.
          Drop by, take a sip, and let your worries steep away.
        </p>
      </div>

      <div className="about-image">
        <img src="src/assets/images/teatime.png" alt="Tea shop" />
      </div>
      </div>
  );
}
