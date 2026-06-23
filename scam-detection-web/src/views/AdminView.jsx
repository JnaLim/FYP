import React, { useState } from "react";
import { useNavigate } from "react-router";
import Icon from "../components/Icon.jsx";

const SUPPORT_MESSAGES_KEY = "vetoSupportMessages";

const overviewCards = [
  ["Total scans", "12,840", "bar-chart"],
  ["Flagged scams", "3,218", "shield-alert"],
  ["Safe results", "8,974", "shield"],
  ["Error count", "42", "alert-triangle"],
];

const metrics = [
  ["Accuracy", "94.2%"],
  ["Precision", "92.8%"],
  ["Recall", "91.5%"],
  ["F1-score", "92.1%"],
];

const logs = [
  ["09:42", "Classifier", "Healthy", "Mock scan batch completed successfully."],
  ["10:05", "URL Check", "Warning", "Suspicious short-link pattern detected."],
  ["10:18", "OCR", "Healthy", "Image text extraction queue is stable."],
  ["10:31", "System", "Info", "Prototype dashboard refreshed with mock data."],
];

function getSupportMessages() {
  try {
    return JSON.parse(localStorage.getItem(SUPPORT_MESSAGES_KEY) || "[]");
  } catch {
    return [];
  }
}

export function AdminView() {
  const navigate = useNavigate();
  const [supportMessages, setSupportMessages] = useState(getSupportMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const newSupportCount = supportMessages.filter((message) => message.status === "New").length;

  const logout = () => {
    localStorage.removeItem("vetoAdminLoggedIn");
    navigate("/admin-login");
  };

  const storeSupportMessages = (messages) => {
    setSupportMessages(messages);
    localStorage.setItem(SUPPORT_MESSAGES_KEY, JSON.stringify(messages));
  };

  const markAsRead = (id) => {
    const updatedMessages = supportMessages.map((message) => (
      message.id === id ? { ...message, status: "Read" } : message
    ));
    storeSupportMessages(updatedMessages);
    if (selectedMessage?.id === id) {
      setSelectedMessage({ ...selectedMessage, status: "Read" });
    }
  };

  const deleteMessage = (id) => {
    storeSupportMessages(supportMessages.filter((message) => message.id !== id));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  return (
    <section id="admin-view" className="view active account-view admin-dashboard-view">
      <div className="dashboard-shell">
        <div className="dashboard-heading admin-heading dashboard-heading-with-action">
          <div>
            <p className="eyebrow">Admin Only</p>
            <h1>System Monitoring Dashboard</h1>
            <p>Mock administrator view for model performance, system health, and evaluation status. No sensitive user content is stored here.</p>
          </div>
          <button type="button" className="dashboard-logout-button admin" onClick={logout}>Logout</button>
        </div>

        <div className="admin-overview-grid">
          {overviewCards.map(([label, value, icon]) => (
            <article key={label} className="dashboard-card admin-stat-card">
              <span className="dashboard-icon"><Icon name={icon} /></span>
              <p>{label}</p>
              <strong>{value}</strong>
            </article>
          ))}
          <article className="dashboard-card admin-stat-card">
            <span className="dashboard-icon"><Icon name="mail" /></span>
            <p>New Support Messages</p>
            <strong>{newSupportCount}</strong>
          </article>
        </div>

        <div className="dashboard-two-column admin-main-grid">
          <article id="model-evaluation" className="dashboard-card">
            <p className="card-label">Model performance</p>
            <h2>Evaluation metrics</h2>
            <div className="performance-grid">
              {metrics.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card model-version-card">
            <p className="card-label">Model version</p>
            <h2>Current model version</h2>
            <dl>
              <div><dt>Version</dt><dd>VETO-LR-0.8.4</dd></div>
              <div><dt>Last updated</dt><dd>20 June 2026</dd></div>
            </dl>
            <button type="button" onClick={() => window.alert("Prototype only: model replacement is not connected.")}>
              Replace Model
            </button>
          </article>
        </div>

        <article id="system-logs" className="dashboard-card admin-table-card">
          <div className="section-card-heading">
            <div>
              <p className="card-label">System logs</p>
              <h2>Recent activity</h2>
            </div>
            <span>Mock monitoring data</span>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-log-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Module</th>
                  <th>Status</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {logs.map(([time, module, status, message]) => (
                  <tr key={`${time}-${module}`}>
                    <td>{time}</td>
                    <td>{module}</td>
                    <td><span className={`log-status ${status.toLowerCase()}`}>{status}</span></td>
                    <td>{message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="dashboard-card admin-table-card support-inbox-card">
          <div className="section-card-heading">
            <div>
              <p className="card-label">Support Messages</p>
              <h2>Admin Inbox</h2>
            </div>
            <span>Stored in localStorage</span>
          </div>
          {supportMessages.length === 0 ? (
            <p className="admin-empty-state">No support messages yet.</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-log-table support-message-table">
                <thead>
                  <tr>
                    <th>Message ID</th>
                    <th>Date/Time</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message preview</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {supportMessages.map((message) => (
                    <tr key={message.id}>
                      <td>{message.id}</td>
                      <td>{message.createdAt}</td>
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.subject}</td>
                      <td>{message.message.slice(0, 64)}{message.message.length > 64 ? "..." : ""}</td>
                      <td><span className={`log-status ${message.status.toLowerCase()}`}>{message.status}</span></td>
                      <td>
                        <div className="support-message-actions">
                          <button type="button" onClick={() => setSelectedMessage(message)}>View</button>
                          <button type="button" onClick={() => markAsRead(message.id)}>Mark as Read</button>
                          <button type="button" className="danger" onClick={() => deleteMessage(message.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </article>

        <article className="dashboard-card dataset-card">
          <p className="card-label">Dataset and evaluation</p>
          <h2>Prototype evaluation set</h2>
          <div className="dataset-grid">
            <div><span>Evaluation samples</span><strong>2,400</strong></div>
            <div><span>Scam categories</span><strong>8</strong></div>
            <div><span>Review mode</span><strong>Manual QA</strong></div>
          </div>
          <p>This section uses mock information only and does not expose submitted user content.</p>
        </article>
      </div>
      {selectedMessage && (
        <div className="support-detail-modal" role="dialog" aria-modal="true">
          <div className="support-detail-backdrop" onClick={() => setSelectedMessage(null)} />
          <div className="support-detail-card">
            <p className="card-label">{selectedMessage.id}</p>
            <h2>{selectedMessage.subject}</h2>
            <dl>
              <div><dt>Name</dt><dd>{selectedMessage.name}</dd></div>
              <div><dt>Email</dt><dd>{selectedMessage.email}</dd></div>
              <div><dt>Date/Time</dt><dd>{selectedMessage.createdAt}</dd></div>
              <div><dt>Status</dt><dd>{selectedMessage.status}</dd></div>
            </dl>
            <p>{selectedMessage.message}</p>
            <div className="support-detail-actions">
              <button type="button" className="modal-close-button" onClick={() => setSelectedMessage(null)}>Close</button>
              <button type="button" className="modal-start-button" onClick={() => markAsRead(selectedMessage.id)}>Mark as Read</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminView;
