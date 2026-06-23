import React, { useState } from "react";

const mockPreferences = {
  emailNotifications: true,
  scamAlertTips: true,
  weeklySummary: false,
  saveScanHistory: true,
  detailedExplanation: true,
  defaultScanType: "Text",
};

export function Preferences() {
  const [preferences, setPreferences] = useState(mockPreferences);
  const [message, setMessage] = useState("");

  const updatePreference = (field, value) => {
    setPreferences((current) => ({ ...current, [field]: value }));
    setMessage("");
  };

  const savePreferences = (event) => {
    event.preventDefault();
    setMessage("Preferences saved for prototype preview.");
  };

  return (
    <section id="preferences-view" className="view active account-view">
      <div className="settings-shell">
        <div className="dashboard-heading">
          <p className="eyebrow">Preferences</p>
          <h1>Preferences</h1>
          <p>Manage notification and scan preferences.</p>
        </div>

        <form className="settings-form" onSubmit={savePreferences}>
          <article className="settings-card">
            <h2>Notification and scan preferences</h2>
            <div className="preferences-list">
              <label>
                <input type="checkbox" checked={preferences.emailNotifications} onChange={(event) => updatePreference("emailNotifications", event.target.checked)} />
                Email notifications
              </label>
              <label>
                <input type="checkbox" checked={preferences.scamAlertTips} onChange={(event) => updatePreference("scamAlertTips", event.target.checked)} />
                Scam alert tips
              </label>
              <label>
                <input type="checkbox" checked={preferences.weeklySummary} onChange={(event) => updatePreference("weeklySummary", event.target.checked)} />
                Weekly safety summary
              </label>
              <label>
                <input type="checkbox" checked={preferences.saveScanHistory} onChange={(event) => updatePreference("saveScanHistory", event.target.checked)} />
                Save scan history
              </label>
              <label>
                <input type="checkbox" checked={preferences.detailedExplanation} onChange={(event) => updatePreference("detailedExplanation", event.target.checked)} />
                Show detailed explanation by default
              </label>
            </div>
            <div className="settings-grid preferences-scan-type">
              <label>
                Default scan type
                <select value={preferences.defaultScanType} onChange={(event) => updatePreference("defaultScanType", event.target.value)}>
                  <option>Text</option>
                  <option>Image</option>
                  <option>Voice</option>
                  <option>URL</option>
                </select>
              </label>
            </div>
          </article>

          {message && <p className="settings-success" role="status">{message}</p>}

          <div className="settings-actions">
            <button className="settings-save" type="submit">Save Preferences</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Preferences;
