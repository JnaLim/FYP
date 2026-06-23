import React from "react";
import { useNavigate } from "react-router";

export function InfoModal({ detail, close }) {
  const navigate = useNavigate();
  if (!detail) return null;

  return (
    <div id="scam-modal" className="scam-modal" role="dialog" aria-modal="true">
      <div className="scam-modal-backdrop" onClick={close} />
      <div className="scam-modal-card">
        <div className="scam-modal-header">
          <h2>{detail.title}</h2>
          <p>Detailed explanation of how this scam usually works.</p>
        </div>
        <div className="scam-modal-body">
          <p className="modal-summary">{detail.summary}</p>
          <div className="modal-detail-box">
            <h3>Scam Details</h3>
            <ul>{detail.details.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="modal-actions">
            <button type="button" className="modal-close-button" onClick={close}>Close</button>
            <button type="button" className="modal-start-button" onClick={() => { close(); navigate("/check"); }}>Start Analysis</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoModal;
