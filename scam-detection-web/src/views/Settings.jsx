import React, { useState } from "react";

const mockSettings = {
  fullName: "Jane Lim",
  email: "jane@example.com",
  phone: "+60 12-345 6789",
  userType: "Student",
};

export function Settings() {
  const [form, setForm] = useState(mockSettings);
  const [savedName, setSavedName] = useState(mockSettings.fullName);
  const [accountMessage, setAccountMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordFields, setPasswordFields] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setAccountMessage("");
  };

  const updatePasswordField = (field, value) => {
    setPasswordFields((current) => ({ ...current, [field]: value }));
    setPasswordMessage("");
  };

  const saveSettings = (event) => {
    event.preventDefault();
    setSavedName(form.fullName);
    setAccountMessage("Settings saved for prototype preview.");
  };

  const cancelChanges = () => {
    setForm((current) => ({ ...current, fullName: savedName }));
    setAccountMessage("");
  };

  const updatePassword = () => {
    setPasswordFields({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setPasswordMessage("Password update is for prototype demonstration only.");
  };

  return (
    <section id="settings-view" className="view active account-view">
      <div className="settings-shell">
        <div className="dashboard-heading">
          <p className="eyebrow">User Settings</p>
          <h1>Settings</h1>
          <p>Manage your personal details and account preferences.</p>
        </div>

        <form className="settings-form" onSubmit={saveSettings}>
          <article className="settings-card">
            <h2>Account Details</h2>
            <div className="settings-grid">
              <label>
                Full Name
                <input type="text" value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} />
              </label>
              <label>
                Email
                <input type="email" value={form.email} readOnly />
              </label>
              <label>
                Phone Number
                <input type="tel" value={form.phone} readOnly />
              </label>
              <label>
                User Type
                <input type="text" value={form.userType} readOnly />
              </label>
            </div>
          </article>

          <article className="settings-card">
            <h2>Password</h2>
            <div className="settings-grid">
              <label>
                Current Password
                <input
                  type="password"
                  value={passwordFields.currentPassword}
                  placeholder="Current password"
                  autoComplete="current-password"
                  onChange={(event) => updatePasswordField("currentPassword", event.target.value)}
                />
              </label>
              <label>
                New Password
                <input
                  type="password"
                  value={passwordFields.newPassword}
                  placeholder="New password"
                  autoComplete="new-password"
                  onChange={(event) => updatePasswordField("newPassword", event.target.value)}
                />
              </label>
              <label>
                Confirm New Password
                <input
                  type="password"
                  value={passwordFields.confirmPassword}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  onChange={(event) => updatePasswordField("confirmPassword", event.target.value)}
                />
              </label>
            </div>
            <button className="settings-save settings-password-button" type="button" onClick={updatePassword}>Update Password</button>
            <p className="settings-note">Password update is for prototype demonstration only. No real password is changed.</p>
            {passwordMessage && <p className="settings-success" role="status">{passwordMessage}</p>}
          </article>

          {accountMessage && <p className="settings-success" role="status">{accountMessage}</p>}

          <div className="settings-actions">
            <button className="settings-save" type="submit">Save Changes</button>
            <button className="settings-cancel" type="button" onClick={cancelChanges}>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Settings;
