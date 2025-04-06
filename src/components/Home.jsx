

import React from "react";
import "./Home.css";

import teatimeImage from '../assets/images/teatime.png';
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="homeclass">
          <h1>Tea Heaven</h1>
          <img src={teatimeImage} alt="Tea time" />
        </div>
      </div>
    </>
  );
}



