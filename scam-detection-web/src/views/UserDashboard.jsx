import React from "react";
import { useNavigate, useOutletContext } from "react-router";
import Icon from "../components/Icon.jsx";

const mockUser = {
  name: "Jane",
  plan: "Free Plan",
  checksToday: 7,
  dailyLimit: 10,
};

const safetyTips = [
  "Never share OTP, TAC, passwords, or banking details through chat.",
  "Check sender names and links carefully before opening any message.",
  "Use VETO before responding to urgent payment or account warnings.",
];

export function UserDashboard() {
  const navigate = useNavigate();
  const { historyItems, setActiveTab } = useOutletContext();
  const recentItems = historyItems.slice(0, 3);

  const openCheck = (type) => {
    setActiveTab(type);
    navigate("/check");
  };

  const logout = () => {
    localStorage.removeItem("vetoUserLoggedIn");
    navigate("/user-login");
  };

  return (
    <section id="user-dashboard-view" className="view active account-view">
      <div className="dashboard-shell">
        <div className="dashboard-heading dashboard-heading-with-action">
          <div>
            <p className="eyebrow">User Dashboard</p>
            <h1>Welcome back, {mockUser.name}</h1>
            <p>Track your scam checks, review recent results, and start a new scan quickly.</p>
          </div>
          <button type="button" className="dashboard-logout-button" onClick={logout}>Logout</button>
        </div>

        <div className="user-dashboard-grid">
          <article className="dashboard-card welcome-card">
            <span className="dashboard-icon"><Icon name="shield" /></span>
            <div>
              <p className="card-label">Account status</p>
              <h2>{mockUser.plan}</h2>
              <p>Mock account dashboard for prototype demonstration. No real authentication is used.</p>
            </div>
          </article>

          <article className="dashboard-card stat-card">
            <p className="card-label">Checks used today</p>
            <strong>{mockUser.checksToday}/{mockUser.dailyLimit}</strong>
            <span>Daily prototype usage</span>
          </article>

          <article className="dashboard-card quick-actions-card">
            <p className="card-label">Quick actions</p>
            <div className="quick-action-grid">
              <button type="button" onClick={() => openCheck("text")}><Icon name="file-text" /> Check Text</button>
              <button type="button" onClick={() => openCheck("image")}><Icon name="image" /> Check Image</button>
              <button type="button" onClick={() => openCheck("voice")}><Icon name="mic" /> Check Voice</button>
              <button type="button" onClick={() => openCheck("url")}><Icon name="link" /> Check URL</button>
            </div>
          </article>
        </div>

        <div className="dashboard-two-column">
          <article className="dashboard-card">
            <div className="section-card-heading">
              <div>
                <p className="card-label">Recent scan history</p>
                <h2>Latest checks</h2>
              </div>
              <button type="button" className="text-link-button" onClick={() => navigate("/history")}>View all</button>
            </div>
            {recentItems.length ? (
              <div className="mini-history-list">
                {recentItems.map((item) => (
                  <div key={item.id} className="mini-history-item">
                    <span className={`risk-dot ${item.status}`} />
                    <div>
                      <strong>{item.type} scan</strong>
                      <p>{item.label || "Review result"} · Risk {item.score}%</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-summary">
                <Icon name="file-text" />
                <p>No recent scans yet. Start a check to build your local history.</p>
              </div>
            )}
          </article>

          <article className="dashboard-card safety-card">
            <p className="card-label">Safety tips</p>
            <h2>Before you respond</h2>
            <ul>
              {safetyTips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default UserDashboard;
