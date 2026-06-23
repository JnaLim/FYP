import React, { useState } from "react";
import { useOutletContext } from "react-router";
import { guideCards } from "../data/scamData.js";
import Icon from "../components/Icon.jsx";

// Map card id to the CSS tone class used by the original stylesheet
const toneClassMap = {
  // Platform
  whatsapp: "guide-whatsapp",
  sms: "guide-sms",
  social: "guide-social",
  email: "guide-email",
  // Banking
  "banking-login": "guide-bank",
  "card-protection": "guide-card-protection",
  "loan-investment": "guide-loan",
  "bank-call": "guide-call",
};

export function GuideView() {
  const [guideTab, setGuideTab] = useState("platform");
  const { openModal } = useOutletContext();

  return (
    <section id="guide-view" className="view active">
      <div className="guide-page">
        <h1>Security Guides &amp; Anti-Fraud Center</h1>
        <div className="guide-tabs" role="tablist" aria-label="Security guide categories">
          <button
            className={`guide-tab ${guideTab === "platform" ? "active" : ""}`}
            type="button"
            onClick={() => setGuideTab("platform")}
          >
            <Icon name="shield" /> Platform Guides
          </button>
          <button
            className={`guide-tab ${guideTab === "banking" ? "active" : ""}`}
            type="button"
            onClick={() => setGuideTab("banking")}
          >
            <Icon name="landmark" /> Banking Guides
          </button>
        </div>

        <div className="guide-card-grid">
          {guideCards[guideTab].map((card) => (
            <article
              key={card.id}
              className={`security-guide-card ${toneClassMap[card.id] || ""}`}
            >
              <div className="guide-card-heading">
                <span className="guide-icon-circle">
                  <Icon name={card.icon} />
                </span>
                <h2>{card.title}</h2>
              </div>
              <ul>
                {card.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                type="button"
                className="learn-button"
                onClick={() => openModal(card.id, "guide")}
              >
                LEARN
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default GuideView;
