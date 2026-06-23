import React from "react";
import { useNavigate } from "react-router";
import Icon from "../components/Icon.jsx";

const planFeatures = [
  "Basic scam checking",
  "Text and URL checking",
  "Limited daily checks",
  "Local scan history",
];

export function Plan() {
  const navigate = useNavigate();

  return (
    <section id="plan-view" className="view active account-view">
      <div className="settings-shell">
        <div className="dashboard-heading">
          <p className="eyebrow">My Plan</p>
          <h1>My Plan</h1>
          <p>View your current plan and usage.</p>
        </div>

        <div className="plan-page-grid">
          <article className="settings-card plan-summary-card">
            <p className="card-label">Current Plan</p>
            <h2>Free Plan</h2>
            <p>Prototype account plan for basic scam checking access.</p>
            <button className="settings-save" type="button" onClick={() => navigate("/pricing")}>Upgrade Plan</button>
          </article>

          <article className="settings-card">
            <h2>Usage</h2>
            <div className="dataset-grid plan-usage-grid">
              <div><span>Daily checks used</span><strong>7 / 10</strong></div>
              <div><span>Monthly checks used</span><strong>84 / 300</strong></div>
            </div>
          </article>

          <article className="settings-card plan-features-card">
            <h2>Plan features</h2>
            <ul>
              {planFeatures.map((feature) => (
                <li key={feature}><Icon name="shield" /> {feature}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Plan;
