import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import enquiry from "../GeneralZone/Enquiry";
export default function SchoolFooter() {
  return (
    <footer className="school-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>🏫 Bright Future Public School</h2>
          <p>
            Dedicated to nurturing young minds with knowledge, creativity, and moral values.
            We believe in learning beyond books and shaping future leaders. ✨
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/enquiry">Enquiry</a></li>
            <li><a href="/facility">Our Facility</a></li>
            {/* <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li> */}
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>📍 123 Learning Lane, Knowledge City</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@brightfuture.edu.in</p>

          <div className="social-links">
            <a href="https://facebook.com" className="facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" className="instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" className="twitter" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" className="youtube" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Bright Future Public School |  Designed with <Link to="/our-team" className=" text-danger font-bold font-size ">Syntax-Squad-team</Link>
      </div>
    </footer>
  );
}
