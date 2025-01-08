import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountPage.css";

const AccountPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null); 
  const navigate = useNavigate();

  const handleEditSubmit = (event) => {
    event.preventDefault();
    console.log("Account details updated");
    setIsEditing(false);
  };

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/");
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="account-page">
      <h1>Account Page</h1>
      <p>Manage your account details here.</p>
      <div className="account-details">
        <div className="profile-photo">
          <img
            src={profilePhoto || "https://via.placeholder.com/100"}
            alt="Profile"
          />
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Address:</strong> 123 Main St</p>
        <p><strong>Phone Number:</strong> +123456789</p>
        <p><strong>Date of Birth:</strong> 2000-01-01</p>
        <div className="account-actions">
          <button onClick={() => setIsEditing(true)}>Edit Account</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {isEditing && (
        <div className="popup">
          <div className="popup-content">
            <h2>Edit Account</h2>
            <form onSubmit={handleEditSubmit}>
              <label>
                Name:
                <input type="text" defaultValue="John Doe" />
              </label>
              <label>
                Email:
                <input type="email" defaultValue="john.doe@example.com" />
              </label>
              <label>
                Address:
                <input type="text" defaultValue="123 Main St" />
              </label>
              <label>
                Phone Number:
                <input type="tel" defaultValue="+123456789" />
              </label>
              <label>
                Date of Birth:
                <input type="date" defaultValue="2000-01-01" />
              </label>
              <div className="form-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
