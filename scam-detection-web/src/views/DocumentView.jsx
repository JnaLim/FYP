import React from "react";

export function DocumentView({ title, subtitle, sections }) {
  return (
    <section className="view active">
      <div className="document-page legal-page">
        <div className="document-hero">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="document-content">
          {sections.map(([heading, text]) => (
            <section key={heading} className="document-section">
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
export default DocumentView;
