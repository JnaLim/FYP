import React from "react";
import { useOutletContext, useNavigate } from "react-router";
import Icon from "../components/Icon.jsx";
import { normalizeText, detectKeywords } from "../utils/detection.js";
import { saveLatestResult } from "../utils/history.js";

export function HistoryView() {
  const { historyItems, setHistoryAndStore } = useOutletContext();
  const navigate = useNavigate();

  const typeMeta = {
    Text: { key: "text", icon: "file-text" },
    Image: { key: "image", icon: "image" },
    Voice: { key: "voice", icon: "mic" },
    URL: { key: "url", icon: "link" },
  };

  const viewResult = (item) => {
    const formattedItem = {
      ...item,
      normalized: item.normalized || normalizeText(item.preview || ""),
      keywords: item.keywords || detectKeywords(item.preview || ""),
      urlFactors: item.urlFactors || [],
      action: item.action || "Review",
    };
    saveLatestResult(formattedItem);
    navigate("/result", { state: { result: formattedItem } });
  };

  const deleteItem = (id) => {
    setHistoryAndStore(historyItems.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all history?")) {
      setHistoryAndStore([]);
    }
  };

  return (
    <section id="history-view" className="view active">
      <div className="history-page">
        <div className="history-heading-row">
          <div>
            <h1>Check History</h1>
            <p>Review your past scam detection checks</p>
          </div>
          {historyItems.length > 0 && (
            <button className="clear-history" type="button" onClick={clearAll}>
              Clear All
            </button>
          )}
        </div>
        <div id="history-list" className={`history-list ${historyItems.length ? "" : "history-empty"}`}>
          {historyItems.length === 0 ? (
            <div className="history-empty-card">
              <span className="empty-document-icon"><Icon name="file-text" /></span>
              <h2>No History Yet</h2>
              <p>Your scam detection checks will appear here</p>
              <button type="button" onClick={() => navigate("/check")}>Start Checking</button>
            </div>
          ) : (
            historyItems.map((item) => {
              const meta = typeMeta[item.type] || typeMeta.Text;
              const label = item.status === "safe" ? "Safe" : item.label;
              return (
                <article key={item.id} className={`history-item ${meta.key}`}>
                  <span className="type-icon"><Icon name={meta.icon} /></span>
                  <div className="history-main">
                    <div className="history-meta">
                      <span className={`history-type-pill ${meta.key}`}>
                        <Icon name={meta.icon} /> {item.type}
                      </span>
                      <span>{item.timestamp || "Just now"}</span>
                    </div>
                    <strong>{item.preview || "Submitted content"}</strong>
                    <div className="history-risk-row">
                      <span className={`risk-badge ${item.status}`}>{label}</span>
                      <span>Risk: {item.score}%</span>
                    </div>
                  </div>
                  <div className="history-actions">
                    <button className="view-history" type="button" onClick={() => viewResult(item)}>
                      <Icon name="eye" /> View
                    </button>
                    <button className="delete-history" type="button" onClick={() => deleteItem(item.id)}>
                      <Icon name="trash" /> Delete
                    </button>
                  </div>
                </article>
              );
            })
          )}
        </div>
        {historyItems.length > 0 && (
          <p className="history-note">
            <strong>Note:</strong> History is stored locally in your browser. Clearing browser data will remove all history records.
          </p>
        )}
      </div>
    </section>
  );
}
export default HistoryView;
