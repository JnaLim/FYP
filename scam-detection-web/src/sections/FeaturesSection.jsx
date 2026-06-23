import React from "react";
import { featureCards } from "../data/scamData.js";
import Icon from "../components/Icon.jsx";

export function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="section-heading">
        <h2>Our Features</h2>
        <p>Explore the core features that help users detect and review scam content more effectively.</p>
      </div>
      <div className="feature-grid">
        {featureCards.map((card) => (
          <article key={card.title} className="feature-card">
            <span className={`feature-icon ${card.tone}`}><Icon name={card.icon} /></span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export default FeaturesSection;
