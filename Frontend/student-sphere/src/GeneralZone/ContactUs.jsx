import React, { useState } from "react";
import Header from '../Common/Header.jsx';
import Footer from '../Common/Footer.jsx';
import "./ContactUs.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert(`📩 ${result.message}!`);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        alert("❌ " + result.message);
      }
    } catch (error) {
      alert("⚠️ Server Error: " + error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form below to get in touch.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Mobile</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} pattern="[0-9]{10}" placeholder="10-digit number" required />

          <label>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
