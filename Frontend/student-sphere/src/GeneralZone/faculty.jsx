import React from "react";
import Header from '../Common/Header.jsx';
import Footer from '../Common/Footer.jsx';
import "./Faculty.css";
import fac1 from "../assets/fac/1.jpg";
import fac2 from "../assets/fac/2.jpg";
import fac3 from "../assets/fac/3.jpg";
import fac4 from "../assets/fac/4.jpg";
import fac5 from "../assets/fac/5.jpg";
import fac6 from "../assets/fac/6.jpg";
import fac7 from "../assets/fac/7.jpg";
import fac8 from "../assets/fac/8.jpg";
import fac9 from "../assets/fac/9.jpg";
import fac10 from "../assets/fac/10.jpg";
import fac11 from "../assets/fac/11.jpg";
import fac12 from "../assets/fac/12.jpg";

const facultyMembers = [
  { name: "Dr. A. Sharma", designation: "Professor", email: "asharma@example.com", photo: fac12 },
  { name: "Ms. R. Verma", designation: "Assistant Professor", email: "rverma@example.com", photo: fac12 },
  { name: "Mr. S. Kumar", designation: "Lecturer", email: "skumar@example.com", photo: fac12 },
  { name: "Dr. P. Singh", designation: "Professor", email: "psingh@example.com", photo: fac12 },
  { name: "Ms. N. Joshi", designation: "Assistant Professor", email: "njoshi@example.com", photo: fac12 },
  { name: "Mr. V. Gupta", designation: "Lecturer", email: "vgupta@example.com", photo: fac12 },
  { name: "Dr. R. Mehta", designation: "Professor", email: "rmehta@example.com", photo: fac12 },
  { name: "Ms. S. Iyer", designation: "Assistant Professor", email: "siyer@example.com", photo: fac12},
  { name: "Mr. K. Reddy", designation: "Lecturer", email: "kreddy@example.com", photo: fac12},
  { name: "Dr. M. Nair", designation: "Professor", email: "mnair@example.com", photo: fac12 },
  { name: "Ms. A. Desai", designation: "Assistant Professor", email: "adesai@example.com", photo: fac12 },
  { name: "Mr. T. Kapoor", designation: "Lecturer", email: "tkapoor@example.com", photo: fac12 },
];

export default function Faculty() {
  return (
    <div>
      <Header />
      <div className="faculty-container">
        <h1>Our Faculty</h1>
        <p>Meet our experienced and dedicated faculty members.</p>
        <div className="faculty-grid">
          {facultyMembers.map((faculty, index) => (
            <div className="faculty-card" key={index}>
              <img src={faculty.photo} alt={faculty.name} />
              <h3>{faculty.name}</h3>
              <p>{faculty.designation}</p>
              <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
