import React, { useState } from "react";
import "./AdminPortal.css";
import ManageEnquiry from "./ManageEnquiry";
import ManageStudent from "./ManageStudent";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("enquiry");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <>
      
        <div className="admin-portal">
          <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-btn">Login</button>
            </form>
          </div>
        </div>
       
      </>
    );
  }

  return (
    <>
      
      <div className="admin-portal">
        <h1 className="admin-title">Admin Portal</h1>

        <div className="admin-tabs">
          <button
            className={activeTab === "enquiry" ? "active" : ""}
            onClick={() => setActiveTab("enquiry")}
          >
            Manage Enquiries
          </button>
          <button
            className={activeTab === "student" ? "active" : ""}
            onClick={() => setActiveTab("student")}
          >
            Manage Students
          </button>
        </div>

        <div className="admin-content">
          {activeTab === "enquiry" && <ManageEnquiry />}
          {activeTab === "student" && <ManageStudent />}
        </div>
      </div>
      
    </>
  );
};

export default AdminPortal;
