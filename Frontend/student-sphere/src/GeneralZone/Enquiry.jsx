import React, { useState } from "react";
import "./Enquiry.css";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Generate unique ID for enquiry
      const enquiryId = `ENQ${Date.now()}`;

      const enquiryData = {
        id: enquiryId,
        name: formData.name,
        email: formData.email,
        mobile: formData.phone, // Note: backend expects 'mobile', form has 'phone'
        message: formData.message,
        status: 'Pending'
      };

      const response = await fetch('http://localhost:3000/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000); // Hide success message after 4s
      } else {
        alert('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Error submitting enquiry. Please check your connection.');
    }
  };

  return (
    <div>
      <Header />
      <div className="enquiry-page">
        <header className="enquiry-header">
          <h1>📞 Enquiry Form</h1>
          <p>Have a question about Bright Future Public School? We’re here to help!</p>
        </header>

        <div className="enquiry-container">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="10-digit mobile number"
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              Send Enquiry
            </button>
          </form>

          {submitted && (
            <div className="success-popup">
              🎉 Thank you for reaching out! We’ll get back to you soon.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
