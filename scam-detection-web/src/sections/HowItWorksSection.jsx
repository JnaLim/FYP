import React from "react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="section-heading"><h2>How It Works</h2></div>
      <div className="flow-grid">
        <article><span>1</span><h3>Enter Suspicious Content</h3><p>Submit any text, image, voice message or URL you find suspicious.</p></article>
        <article><span>2</span><h3>Get Instant Analysis</h3><p>Our system quickly analyzes and checks the input for signs of a scam.</p></article>
        <article><span>3</span><h3>Review the Results</h3><p>Receive a detailed scam report with the level of risk and recommendations.</p></article>
      </div>
    </section>
  );
}
export default HowItWorksSection;
