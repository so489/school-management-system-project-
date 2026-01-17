import React from 'react'
import Header from '../Common/Header.jsx';
import Footer from '../Common/Footer.jsx';
import Slider from '../Common/Slider.jsx';
// import RegistrationForm from '../Common/RegistrationForm.jsx';
import DiwaliOfferPopup from '../Common/DiwaliOfferPopup.jsx';
import RegistrationPopup from '../Common/RegistrationPopup.jsx';
import schoolkid from '../assets/images/schoolkid.jpg';
import library from '../assets/images/library.jpg';
import lab from '../assets/images/lab.jpg';
import park from '../assets/images/park.jpg';
import sport from '../assets/images/sport.jfif';
import smartclass from '../assets/images/smartclass.jpg';
import auditorium from '../assets/images/auditorium.jpg';
import AboutUs from './AboutUs';
import Admission from './Admission';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Header /> 
      <DiwaliOfferPopup />
      <RegistrationPopup />
      {/* <RegistrationForm /> */}

<div className="home">
      {/* Slider Section */}
      <section className="home-slider">
        <Slider />
      </section>

      {/* Welcome Section */}
      <section className="home-welcome">
        <div className="welcome-content">
          <h1>Welcome to Bright Future Public School</h1>
          <p>
            Dedicated to nurturing young minds with knowledge, creativity, and moral values.  
            Our mission is to inspire lifelong learning and shape future leaders.
          </p>
          <a href="/admission" className="btn-apply">Apply Now</a>
        </div>
        <div className="welcome-image">
          <img src={schoolkid} alt="Happy students" />
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={library} alt="Library" />
            <h3>Modern Library</h3>
            <p>Access to thousands of books and digital resources for a complete learning experience.</p>
          </div>
          <div className="feature-card">
            <img src={lab} alt="Lab" />
            <h3>Science Labs</h3>
            <p>Well-equipped labs to encourage hands-on experiments and practical learning.</p>
          </div>
          <div className="feature-card">
            <img src={sport} alt="Sports" />
            <h3>Sports Facilities</h3>
            <p>Promoting physical fitness and teamwork through multiple sports activities.</p>
          </div>
          <div className="feature-card">
            <img src={auditorium} alt="Auditorium" />
            <h3>Auditorium</h3>
            <p>Interactive and technology-driven classrooms to make learning engaging.</p>
          </div>
           <div className="feature-card">
            <img src={park} alt="Park" />
            <h3>Park</h3>
            <p>Interactive and technology-driven classrooms to make learning engaging.</p>
          </div>
           <div className="feature-card">
            <img src={smartclass} alt="Smart Class" />
            <h3>Smart Class</h3>
            <p>Interactive and technology-driven classrooms to make learning engaging.</p>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </div>
  )
}
