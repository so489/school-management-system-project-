import React from 'react'
import Header from '../Common/Header.jsx';
import Navbar from '../Common/Navbar.jsx';
import Footer from '../Common/Footer.jsx';

export default function Facility() {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}

      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">🌟 Our Facilities 🌟</h2>
        <div className="row g-4">
          
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 bg-light">
              <h5>🎨 Creative Learning Spaces</h5>
              <p>Classrooms designed to inspire creativity and curiosity.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 bg-warning-subtle">
              <h5>📚 Smart Classrooms</h5>
              <p>Equipped with interactive boards and multimedia tools for fun learning.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 bg-info-subtle">
              <h5>🧩 Activity Zone</h5>
              <p>Play-based learning through games, crafts, and teamwork.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 bg-success-subtle">
              <h5>🏃 Sports & Fitness</h5>
              <p>Indoor and outdoor activities to promote physical development.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 bg-danger-subtle">
              <h5>🍎 Healthy Meals</h5>
              <p>Nutritious snacks and meals to keep kids energetic and happy.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 bg-primary-subtle">
              <h5>🧑‍🏫 Qualified Teachers</h5>
              <p>Friendly and trained educators who make learning fun and engaging.</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}