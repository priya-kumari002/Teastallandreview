import React from "react";
import './contact.css';
export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Whether it's feedback, suggestions, or just a hello.
      </p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Your Email" required />
        </label>

        <label>
          Message:
          <textarea rows="5" placeholder="Your Message" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <p><strong>Email:</strong> priyakum2120@gmail.com</p>
        <p><strong>Phone:</strong> +91 9875989765</p>
        <p><strong>Address:</strong> 123 Chai Street,Patna, India</p>
      </div>
    </div>
  );
}
