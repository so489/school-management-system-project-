import React, { useState, useEffect } from "react";
import auditorium from "../assets/images/auditorium.jpg";
import schoolkid from "../assets/images/schoolkid.jpg";
import lab from "../assets/images/lab.jpg";
import sport from "../assets/images/sport.jfif";
import smartclass from "../assets/images/smartclass.jpg";
import "./Slider.css";

const slides = [
  {
    image: schoolkid,
    title: "Welcome to Bright Future Public School",
    subtitle: "Inspiring Young Minds for a Brighter Tomorrow 🌟",
  },
  {
    image: lab,
    title: "Explore Science & Innovation",
    subtitle: "Hands-on Learning for Future Scientists 🔬",
  },
  {
    image: sport,
    title: "Sports & Fitness Excellence",
    subtitle: "Building Team Spirit and Strength 💪",
  },
  {
    image: smartclass,
    title: "Smart Classrooms",
    subtitle: "Interactive Digital Learning Experience 📚",
  },
  {
    image: auditorium,
    title: "Beyond Books",
    subtitle: "A Platform for Creativity, Culture & Confidence 🎭",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 4 seconds
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="overlay">
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active-dot" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
