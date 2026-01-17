import React, { useEffect } from "react";
import "./Load.css";
import loadGif from "../assets/load.gif"; // 👈 Add your GIF or image in src/assets/

export default function Load() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home"; // redirect to Home page
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="load-container">
      <div className="loader">
        <img src={loadGif} alt="Loading..." className="load-gif" />
        <h2>Loading... Please wait</h2>
      </div>
    </div>
  );
}
