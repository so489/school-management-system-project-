import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./Admission.css";

export default function Admission() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    fatherName: "",
    motherName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    stream: "",
    nationality: "",
    aadhar: "",
    previousSchool: "",
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
      const response = await fetch("http://localhost:3000/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert(`🎉 ${result.message}!`);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          dob: "",
          gender: "",
          fatherName: "",
          motherName: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          stream: "",
          nationality: "",
          aadhar: "",
          previousSchool: "",
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
      <div className="admission-container">

        <h1>Admission Form</h1>
        <p>Fill out the details below to apply for admission.</p>
        <form className="admission-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Mobile</label>
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} pattern="[0-9]{10}" placeholder="10-digit number" required />

        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Father's Name</label>
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />

        <label>Mother's Name</label>
        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />

        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />

        <label>State</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />

        <label>Pincode</label>
        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />

        <label>Stream</label>
        <input type="text" name="stream" value={formData.stream} onChange={handleChange} placeholder="Science/Commerce/Arts" required />

        <label>Nationality</label>
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />

        <label>Aadhar Number</label>
        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} pattern="[0-9]{12}" placeholder="12-digit number" required />

        <label>Previous School</label>
        <input type="text" name="previousSchool" value={formData.previousSchool} onChange={handleChange} required />

        <button type="submit" className="admission-btn">Submit</button>
      </form>

      </div>
      <Footer />
    </div>

  );
}
