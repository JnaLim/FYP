import React from "react";
import { useOutletContext } from "react-router";
import { scamTypes } from "../data/scamData.js";
import Icon from "../components/Icon.jsx";

export function ScamTypesView() {
  const { openModal } = useOutletContext();

  return (
    <section id="scam-types-view" className="view active">
      <div className="mechanics-page">
        <h1>The Mechanics Of Scams</h1>
        <div className="scam-type-grid">
          {scamTypes.map((item) => (
            <article key={item.id} className="scam-type-card">
              <span className="scam-type-icon"><Icon name={item.icon} /></span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <button type="button" className="learn-button" onClick={() => openModal(item.id, "scam")}>LEARN</button>
            </article>
          ))}
        </div>
        <p className="mechanics-note">Stay vigilant. Take control. Verified authorities are here to support you.</p>
      </div>
    </section>
  );
}
export default ScamTypesView;
