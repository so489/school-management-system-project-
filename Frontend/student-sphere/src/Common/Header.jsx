import React from "react";
import logo from "../assets/w-logo.png";

import "./Header.css";

export default function SchoolHeader() {
  return (
    <header className="school-header">
      <div className="header-container">
        {/* Left: Logo and School Name */}
        <div className="logo-section">
          <img
            src={logo}
            alt="School Logo"
            className="school-logo"
          />
          <h1 className="school-name">Bright Future Public School</h1>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/enquiry">Enquiry</a>
          <a href="/faculty">Faculty</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Right: Action Button */}
        <div className="header-btn">
          <a href='/admission' className="join-btn">Admission open</a>
        </div>
      </div>
    </header>
  );
}
