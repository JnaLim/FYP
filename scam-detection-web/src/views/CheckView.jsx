import React from "react";
import { useOutletContext } from "react-router";
import CheckPanel from "../components/CheckPanel.jsx";
import Icon from "../components/Icon.jsx";

export function CheckView() {
  const {
    activeTab,
    setActiveTab,
    fullForm,
    setFullForm,
    fullError,
    submitCheck,
    loadingForm,
  } = useOutletContext();

  return (
    <section id="check-view" className="view active">
      <div className="check-page">
        <div className="check-page-heading">
          <h1>Check for Scams</h1>
          <p>Choose your input method and submit content for analysis.</p>
        </div>
        <CheckPanel
          id="full-check-panel"
          formId="full-check-form"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          form={fullForm}
          setForm={setFullForm}
          error={fullError}
          submit={() => submitCheck("full")}
          loading={loadingForm === "full"}
        />
        <div className="check-benefit-grid">
          <article>
            <span className="check-benefit-icon"><Icon name="shield" /></span>
            <h2>Privacy First</h2>
            <p>Your submitted content is kept secure and confidential.</p>
          </article>
          <article>
            <span className="check-benefit-icon"><Icon name="zap" /></span>
            <h2>Fast Analysis</h2>
            <p>Get quick scam detection results within seconds.</p>
          </article>
          <article>
            <span className="check-benefit-icon"><Icon name="bar-chart" /></span>
            <h2>Actionable Results</h2>
            <p>Receive clear and detailed insights.</p>
          </article>
        </div>
        <p className="check-page-note">Stay safe online. Always verify suspicious content before taking action.</p>
      </div>
    </section>
  );
}
export default CheckView;
