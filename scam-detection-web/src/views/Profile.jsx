import React, { useState } from "react";

const mockProfile = {
  fullName: "Jane Lim",
  email: "jane@example.com",
  phone: "+60 12-345 6789",
  userType: "Student",
};

export function Profile() {
  const [profile, setProfile] = useState(mockProfile);
  const [message, setMessage] = useState("");

  const updateField = (field, value) => {
    setProfile((current) => ({ ...current, [field]: value }));
    setMessage("");
  };

  const saveProfile = (event) => {
    event.preventDefault();
    setMessage("Profile updated for prototype preview.");
  };

  return (
    <section id="profile-view" className="view active account-view">
      <div className="settings-shell">
        <div className="dashboard-heading">
          <p className="eyebrow">User Profile</p>
          <h1>User Profile</h1>
          <p>Manage your personal details.</p>
        </div>

        <form className="settings-form" onSubmit={saveProfile}>
          <article className="settings-card">
            <h2>Personal details</h2>
            <div className="settings-grid">
              <label>
                Full Name
                <input type="text" value={profile.fullName} onChange={(event) => updateField("fullName", event.target.value)} />
              </label>
              <label>
                Email
                <input type="email" value={profile.email} onChange={(event) => updateField("email", event.target.value)} />
              </label>
              <label>
                Phone Number
                <input type="tel" value={profile.phone} onChange={(event) => updateField("phone", event.target.value)} />
              </label>
              <label>
                User Type
                <input type="text" value={profile.userType} onChange={(event) => updateField("userType", event.target.value)} />
              </label>
            </div>
          </article>

          {message && <p className="settings-success" role="status">{message}</p>}

          <div className="settings-actions">
            <button className="settings-save" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
