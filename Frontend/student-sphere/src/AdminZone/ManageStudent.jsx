import React, { useState, useEffect } from "react";
import "./ManageStudent.css";

const ManageStudent = () => {
  const [admissions, setAdmissions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    try {
      const response = await fetch('http://localhost:3000/admissions');
      const data = await response.json();
      setAdmissions(data);
    } catch (error) {
      console.error('Error fetching admissions:', error);
    }
  };

  const handleViewDetails = (admission) => {
    setSelectedAdmission(admission);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAdmission(null);
    setIsEditing(false);
    setEditForm({});
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm({ ...selectedAdmission });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/admissions/${selectedAdmission.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      });
      if (response.ok) {
        await fetchAdmissions();
        setIsEditing(false);
        setEditForm({});
        // Update selectedAdmission to reflect changes
        setSelectedAdmission(editForm);
      } else {
        console.error('Error updating admission');
      }
    } catch (error) {
      console.error('Error saving admission:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm({});
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this admission?')) {
      try {
        const response = await fetch(`http://localhost:3000/admissions/${selectedAdmission.id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          await fetchAdmissions();
          closeModal();
        } else {
          console.error('Error deleting admission');
        }
      } catch (error) {
        console.error('Error deleting admission:', error);
      }
    }
  };



  return (
    <>
      <div className="manage-section">
        <h2>Manage Admissions</h2>
        <table>
          <thead>
            <tr>
              <th>Admission ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((admission) => (
              <tr key={admission.id}>
                <td>{admission.id}</td>
                <td>{admission.name}</td>
                <td>{admission.email}</td>
                <td>{admission.mobile}</td>
                <td>{admission.status}</td>
                <td>
                  <button className="view-btn" onClick={() => handleViewDetails(admission)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {modalOpen && selectedAdmission && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Admission Details</h3>
              <div className="details-grid">
                <div><strong>ID:</strong> {selectedAdmission.id}</div>
                <div>
                  <strong>Name:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name || ''}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.name
                  )}
                </div>
                <div>
                  <strong>Email:</strong>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editForm.email || ''}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.email
                  )}
                </div>
                <div>
                  <strong>Mobile:</strong>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editForm.mobile || ''}
                      onChange={(e) => setEditForm({ ...editForm, mobile: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.mobile
                  )}
                </div>
                <div>
                  <strong>DOB:</strong>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editForm.dob ? new Date(editForm.dob).toISOString().split('T')[0] : ''}
                      onChange={(e) => setEditForm({ ...editForm, dob: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.dob ? new Date(selectedAdmission.dob).toLocaleDateString() : ''
                  )}
                </div>
                <div>
                  <strong>Gender:</strong>
                  {isEditing ? (
                    <select
                      value={editForm.gender || ''}
                      onChange={(e) => setEditForm({ ...editForm, gender: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    selectedAdmission.gender
                  )}
                </div>
                <div>
                  <strong>Father Name:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.fatherName || ''}
                      onChange={(e) => setEditForm({ ...editForm, fatherName: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.fatherName
                  )}
                </div>
                <div>
                  <strong>Mother Name:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.motherName || ''}
                      onChange={(e) => setEditForm({ ...editForm, motherName: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.motherName
                  )}
                </div>
                <div>
                  <strong>Address:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.address || ''}
                      onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.address
                  )}
                </div>
                <div>
                  <strong>City:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.city || ''}
                      onChange={(e) => setEditForm({ ...editForm, city: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.city
                  )}
                </div>
                <div>
                  <strong>State:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.state || ''}
                      onChange={(e) => setEditForm({ ...editForm, state: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.state
                  )}
                </div>
                <div>
                  <strong>Pincode:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.pincode || ''}
                      onChange={(e) => setEditForm({ ...editForm, pincode: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.pincode
                  )}
                </div>
                <div>
                  <strong>Stream:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.stream || ''}
                      onChange={(e) => setEditForm({ ...editForm, stream: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.stream
                  )}
                </div>
                <div>
                  <strong>Nationality:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.nationality || ''}
                      onChange={(e) => setEditForm({ ...editForm, nationality: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.nationality
                  )}
                </div>
                <div>
                  <strong>Aadhar:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.aadhar || ''}
                      onChange={(e) => setEditForm({ ...editForm, aadhar: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.aadhar
                  )}
                </div>
                <div>
                  <strong>Previous School:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.previousSchool || ''}
                      onChange={(e) => setEditForm({ ...editForm, previousSchool: e.target.value })}
                    />
                  ) : (
                    selectedAdmission.previousSchool
                  )}
                </div>
                <div>
                  <strong>Status:</strong>
                  {isEditing ? (
                    <select
                      value={editForm.status || ''}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  ) : (
                    selectedAdmission.status
                  )}
                </div>
              </div>
              <div className="modal-buttons">
                {isEditing ? (
                  <>
                    <button className="save-btn" onClick={handleSave}>Update</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                    <button className="delete-btn" onClick={handleDelete}>Delete</button>
                  </>
                )}
                <button className="close-btn" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageStudent;
