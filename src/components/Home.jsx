

import React from "react";
import "./Home.css";
import teaImage from "../assets/images/teatime.png"; // adjust if path is different

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="homeclass">
          <h1>Tea Heaven</h1>
          <img src={teaImage} alt="Tea" />
        </div>
      </div>
    </>
  );
}
