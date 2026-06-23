import React from "react";
import { useOutletContext } from "react-router";
import CheckPanel from "../components/CheckPanel.jsx";
import FeaturesSection from "../sections/FeaturesSection.jsx";
import ScammedGuideSection from "../sections/ScammedGuideSection.jsx";
import HowItWorksSection from "../sections/HowItWorksSection.jsx";
import hero from "../../assets/hero.png";

export function HomeView() {
  const {
    activeTab,
    setActiveTab,
    homeForm,
    setHomeForm,
    homeError,
    submitCheck,
    loadingForm,
  } = useOutletContext();

  return (
    <section id="home-view" className="view active">
      <div className="home-shell">
        <section className="home-hero">
          <div className="home-copy-block">
            <h1>Scam or Real?<br />Run it by <span>VETO</span></h1>
            <p>Unsure? Confused? Let VETO clear the noise.</p>
            <CheckPanel
              id="home-check-panel"
              formId="check-form"
              compact
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              form={homeForm}
              setForm={setHomeForm}
              error={homeError}
              submit={() => submitCheck("home")}
              loading={loadingForm === "home"}
            />
          </div>
          <div className="home-illustration" aria-hidden="true">
            <img src={hero} alt="" />
          </div>
        </section>
      </div>
      <FeaturesSection />
      <ScammedGuideSection />
      <HowItWorksSection />
    </section>
  );
}
export default HomeView;
