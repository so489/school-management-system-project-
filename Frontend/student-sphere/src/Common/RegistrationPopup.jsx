import React, { useState, useEffect } from "react";
import "./RegistrationPopup.css";

export default function RegistrationPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Automatically show popup when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // popup appears after 1 second
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      alert(`🎉 Welcome ${formData.name}! Registration Successful.`);
      setFormData({ name: "", email: "", mobile: "" });
      setShowPopup(false);
    } else {
      alert("❌ " + result.message);
    }
  } catch (error) {
    alert("⚠️ Server Error: " + error.message);
  }
};

  return (
    <div>
      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <span className="close-btn" onClick={() => setShowPopup(false)}>
              ✖
            </span>
            <h2>Register Now</h2>
            <form onSubmit={handleSubmit} className="popup-form">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="10-digit number"
                required
              />

              <button type="submit" className="register-btn">
                Click Here
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
