import React from 'react';
import Header from '../Common/Header.jsx';
import Footer from '../Common/Footer.jsx';
import team from '../assets/images/team.jfif';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about who we are and what we do 🚀</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We started our journey with a vision to make technology accessible and meaningful for everyone. 
            Our team believes in innovation, teamwork, and delivering exceptional results. 
            Whether it’s building web solutions, creating digital experiences, or supporting communities, 
            we put our heart into every project.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals and businesses through modern digital platforms. 
            We continuously innovate to provide reliable, user-friendly, and high-quality services 
            that make a positive impact in people’s lives.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>💡 Innovation & Creativity</li>
            <li>🤝 Teamwork & Collaboration</li>
            <li>🌱 Growth & Learning</li>
            <li>❤️ Integrity & Passion</li>
          </ul>
        </div>

        <div className="about-image">
          <img src={team} alt="Our Team" />
        </div>
      </section>

      <footer className="about-footer">
        <p>© 2025 Your Company Name | Designed with ❤️ by the Team</p>
      </footer>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
