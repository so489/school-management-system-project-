import React, { useState, useEffect } from "react";
import "./ManageEnquiry.css";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const ManageEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    status: ""
  });

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await fetch("http://localhost:3000/enquiries");
      const data = await response.json();
      setEnquiries(data);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };

  const handleEdit = (enquiry) => {
    setEditingId(enquiry.id);
    setEditForm({
      name: enquiry.name,
      email: enquiry.email,
      mobile: enquiry.mobile,
      message: enquiry.message,
      status: enquiry.status
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/enquiries/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editForm)
      });
      if (response.ok) {
        await fetchEnquiries();
        setEditingId(null);
        setEditForm({
          name: "",
          email: "",
          mobile: "",
          message: "",
          status: ""
        });
      } else {
        console.error("Error updating enquiry");
      }
    } catch (error) {
      console.error("Error saving enquiry:", error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({
      name: "",
      email: "",
      mobile: "",
      message: "",
      status: ""
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        const response = await fetch(`http://localhost:3000/enquiries/${id}`, {
          method: "DELETE"
        });
        if (response.ok) {
          await fetchEnquiries();
        } else {
          console.error("Error deleting enquiry");
        }
      } catch (error) {
        console.error("Error deleting enquiry:", error);
      }
    }
  };

  return (
    <>
      
      <div className="manage-section">
        <h2>Manage Enquiries</h2>
        <table>
          <thead>
            <tr>
              <th>Enquiry ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td>{enquiry.id}</td>
                <td>
                  {editingId === enquiry.id ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    />
                  ) : (
                    enquiry.name
                  )}
                </td>
                <td>
                  {editingId === enquiry.id ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    />
                  ) : (
                    enquiry.email
                  )}
                </td>
                <td>
                  {editingId === enquiry.id ? (
                    <input
                      type="tel"
                      value={editForm.mobile}
                      onChange={(e) => setEditForm({ ...editForm, mobile: e.target.value })}
                    />
                  ) : (
                    enquiry.mobile
                  )}
                </td>
                <td>
                  {editingId === enquiry.id ? (
                    <textarea
                      value={editForm.message}
                      onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                    />
                  ) : (
                    enquiry.message
                  )}
                </td>
                <td>
                  {editingId === enquiry.id ? (
                    <select
                      value={editForm.status}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  ) : (
                    enquiry.status
                  )}
                </td>
                <td>
                  {editingId === enquiry.id ? (
                    <>
                      <button className="save-btn" onClick={handleSave}>Save</button>
                      <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="edit-btn" onClick={() => handleEdit(enquiry)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDelete(enquiry.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
  );
};

export default ManageEnquiry;
