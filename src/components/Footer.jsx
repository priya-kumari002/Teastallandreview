
    
import React from "react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>Chai Haven</h2>
        <p>Brewing warmth, one cup at a time ☕</p>
      </div>

    
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
      </div>
    </footer>
  );
}
