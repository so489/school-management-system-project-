import React, { useEffect, useState } from "react";
import "./DiwaliOfferPopup.css";
import diwaliImg from "../assets/diwaliImg.jpg"; // 🪔 Add your image in assets folder

const DiwaliOfferPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup automatically after page load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="diwali-popup-overlay">
      <div className="diwali-popup">
        <button className="close-btn" onClick={closePopup}>✖</button>
        <img src={diwaliImg} alt="Diwali Offer" className="diwali-image" />
        <h2>🎉 Diwali Dhamaka Offer! 🎇</h2>
        <p>
          Celebrate this festive season with <b>flat 50% off</b> on all courses and admissions!  
          Hurry up — offer valid till <b>November 10</b> only! 🏮
        </p>
        <button className="offer-btn" onClick={closePopup}>
          Grab the Offer 🔥
        </button>
      </div>
    </div>
  );
};

export default DiwaliOfferPopup;
