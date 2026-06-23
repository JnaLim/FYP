import React from "react";
import { useNavigate } from "react-router";
import Icon from "../components/Icon.jsx";

const plans = [
  {
    name: "Free",
    price: "RM0",
    note: "For basic scam checks",
    features: ["Basic scam checking", "Text and URL checking", "Limited daily checks"],
  },
  {
    name: "Student",
    price: "RM9/month",
    note: "For regular learning and safety use",
    features: ["Text, image, voice and URL checking", "Scan history", "Explainable results"],
    featured: true,
  },
  {
    name: "Pro",
    price: "RM19/month",
    note: "For heavier personal review workflows",
    features: ["Higher usage limit", "Priority checking", "Advanced history", "Report template"],
  },
];

const currentPlanFeatures = [
  "Basic scam checking",
  "Text and URL checking",
  "Limited daily checks",
  "Local scan history",
];

export function Pricing() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("vetoUserLoggedIn") === "true";

  const selectPlan = () => {
    if (isLoggedIn) {
      window.alert("Plan selection preview only.");
      return;
    }
    navigate("/user-login");
  };

  return (
    <section id="pricing-view" className="view active account-view">
      <div className="dashboard-shell pricing-shell">
        <div className="dashboard-heading">
          <p className="eyebrow">Upgrade Plan</p>
          <h1>Upgrade Plan</h1>
          <p>View your current plan and compare available VETO plans.</p>
        </div>

        <article className="settings-card pricing-current-plan">
          <div className="section-card-heading">
            <div>
              <p className="card-label">Your Current Plan</p>
              <h2>Current Plan: Free Plan</h2>
            </div>
          </div>
          <div className="dataset-grid plan-usage-grid">
            <div><span>Daily checks used</span><strong>7 / 10</strong></div>
            <div><span>Monthly checks used</span><strong>84 / 300</strong></div>
          </div>
          <div className="plan-features-card">
            <h3>Current features</h3>
            <ul>
              {currentPlanFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
          <p className="settings-note">Plan changes are shown for prototype demonstration only.</p>
        </article>

        <div className="pricing-section-heading">
          <p className="card-label">Available Plans</p>
          <h2>Compare VETO plans</h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
              {plan.featured && <span className="plan-badge">Popular</span>}
              <h2>{plan.name}</h2>
              <strong>{plan.price}</strong>
              <p>{plan.note}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><Icon name="shield" /> {feature}</li>
                ))}
              </ul>
              <button type="button" onClick={selectPlan}>Select Plan</button>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Pricing is shown for prototype demonstration only. No real payment is processed.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
