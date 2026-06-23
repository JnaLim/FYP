import React, { useState } from "react";
import { useOutletContext } from "react-router";
import { faqItems } from "../data/scamData.js";
import Icon from "../components/Icon.jsx";

export function FaqView() {
  const [faqOpen, setFaqOpen] = useState(null);
  const { openSupport } = useOutletContext();

  return (
    <section id="faq-view" className="view active">
      <div className="faq-page">
        <div className="faq-heading">
          <h1>Frequently Asked Questions (FAQ)</h1>
          <p>Find answers to common questions about using Veto for scam detection.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const open = faqOpen === index;
            return (
              <article key={item.question} className={`faq-item ${open ? "open" : ""}`}>
                <button type="button" className="faq-question" onClick={() => setFaqOpen(open ? null : index)}>
                  <span className={`faq-icon ${item.tone}`}><Icon name={item.icon} /></span>
                  <span className="faq-question-copy">
                    <em>{item.tag}</em>
                    <strong>{item.question}</strong>
                  </span>
                  <span className="faq-chevron" />
                </button>
                {open && <div className="faq-answer"><p>{item.answer}</p></div>}
              </article>
            );
          })}
        </div>
        <p className="faq-support">
          Still have questions? <button className="faq-support-link" type="button" onClick={openSupport}>Contact Support</button>
        </p>
        <p className="faq-safe-note">Stay safe online. Always verify suspicious content before taking action.</p>
      </div>
    </section>
  );
}
export default FaqView;
