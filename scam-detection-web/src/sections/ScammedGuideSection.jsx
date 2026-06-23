import React from "react";

export function ScammedGuideSection() {
  const cards = [
    ["Secure Accounts", ["Contact your bank immediately", "Change passwords for all critical accounts (email, bank, social)", "Enable Two-Factor Authentication (2FA)"]],
    ["Report Incident", ["File police report at PDRM CCID: 03-2610-1559", "Report to Bank Negara: 1-300-88-5465", "Contact Cyber999: 1-300-88-2999"]],
    ["Gather Evidence", ["Save chat logs and transaction receipts", "Document all interactions with the suspected scammer", "Note payment and transfer details clearly"]],
  ];
  return (
    <section className="scammed-section">
      <div className="section-heading">
        <h2>What To Do If You've Been Scammed</h2>
        <p>Follow this structured guide to secure your accounts, report the incident, and prevent further loss. Stay calm and act quickly.</p>
      </div>
      <div className="scammed-grid">
        {cards.map(([title, bullets]) => (
          <article key={title} className="scammed-card">
            <h3>{title}</h3>
            <ul>{bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
export default ScammedGuideSection;
