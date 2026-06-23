import React from "react";
import { useLocation, useNavigate } from "react-router";
import Icon from "../components/Icon.jsx";
import { resultViewModel } from "../utils/detection.js";
import { getLatestResult } from "../utils/history.js";

export function ResultView() {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result || getLatestResult();

  if (!result) {
    return (
      <section id="result-view" className="view active">
        <div className="result-layout">
          <div className="check-page-heading result-page-heading">
            <h1>Check for Scams</h1>
            <p>Choose your input method and submit content for analysis.</p>
          </div>
          <div className="history-empty-card" style={{ marginTop: "2rem" }}>
            <span className="empty-document-icon"><Icon name="file-text" /></span>
            <h2>No Results Yet</h2>
            <p>Please submit some content on the Check page first.</p>
            <button type="button" onClick={() => navigate("/check")}>Go to Check</button>
          </div>
        </div>
      </section>
    );
  }

  const model = resultViewModel(result);

  return (
    <section id="result-view" className="view active">
      <div className="result-layout">
        <div className="check-page-heading result-page-heading">
          <h1>Check for Scams</h1>
          <p>Choose your input method and submit content for analysis.</p>
        </div>
        <div id="result-card" className="result-card">
          <section className={`result-summary-card ${model.status}`}>
            <div className="result-status-bar"><span>{model.statusLabel}</span></div>
            <div className="result-summary-body">
              <div className="result-verdict">
                <div className="result-shield"><Icon name="shield" /></div>
                <div className="result-copy">
                  <h2>{model.headline}</h2>
                  <p>{model.subtext}</p>
                  <span className="risk-pill">Risk Level: {model.riskLabel}</span>
                  <ul className="result-check-list">
                    <li><span className="result-check-mark">✓</span><span className="result-check-text"><strong>{model.scanLabel}:</strong> {model.scanMessage}</span></li>
                    <li><span className="result-check-mark">✓</span><span className="result-check-text"><strong>Content Analysis:</strong> {model.contentMessage}</span></li>
                    <li><span className="result-check-mark">✓</span><span className="result-check-text"><strong>Database Check:</strong> {model.databaseMessage}</span></li>
                  </ul>
                </div>
              </div>
              <div className="result-score-panel">
                <div className={`result-ring ${model.status}`} style={{ "--score": result.score }}><span>{result.score}%</span></div>
                <strong>{model.riskLabel}</strong>
                <div className="risk-scale"><span>0</span><i /><span>100</span></div>
              </div>
            </div>
          </section>
          <div className="result-detail-grid">
            <section className="result-info-card">
              <h3>Analysis Details</h3>
              <div className="result-detail-box"><span>Selected Type</span><p>{result.type}</p></div>
              <div className="result-detail-box"><span>Scanned Content</span><p>{result.preview || "Submitted content"}</p></div>
              <div className="result-detail-box highlighted-box">
                <span>Highlighted Terms</span>
                {model.highlightedTerms.length ? (
                  <div className={`result-term-list ${model.status}`}>
                    {model.highlightedTerms.map((term) => <em key={term}>{term}</em>)}
                  </div>
                ) : <p>No suspicious or dangerous phrases were strongly detected.</p>}
              </div>
            </section>
            <section className="result-info-card">
              <h3>Recommended Action</h3>
              <ul className="recommended-list">{model.actionItems.map((item) => <li key={item}>{item}</li>)}</ul>
              <button type="button" className="result-action-button" onClick={() => navigate("/check")}>{model.actionButton}</button>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ResultView;
