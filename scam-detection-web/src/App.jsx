import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header, { AdminHeader, MinimalHeader } from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import InfoModal from "./components/InfoModal.jsx";
import SupportModal from "./components/SupportModal.jsx";
import { classifyContent } from "./utils/detection.js";
import { getHistory, saveHistory, saveLatestResult } from "./utils/history.js";
import { scamTypeDetails, guideDetails } from "./data/scamData.js";

const defaultForms = {
  text: "",
  imageFile: "",
  imageText: "",
  voiceFile: "",
  voiceText: "",
  url: "",
};

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("text");
  const [homeForm, setHomeForm] = useState(defaultForms);
  const [fullForm, setFullForm] = useState(defaultForms);
  const [homeError, setHomeError] = useState("");
  const [fullError, setFullError] = useState("");
  const [loadingForm, setLoadingForm] = useState("");
  const [historyItems, setHistoryItems] = useState(getHistory);
  const [detailModal, setDetailModal] = useState(null);
  const [supportOpen, setSupportOpen] = useState(false);
  const isUserLoginPage = location.pathname === "/user-login";
  const isAdminLoginPage = location.pathname === "/admin-login";
  const isAdminArea = location.pathname === "/admin";
  const isUserLoggedIn = localStorage.getItem("vetoUserLoggedIn") === "true";
  const shouldShowUserHeader = isUserLoggedIn && !isUserLoginPage && !isAdminLoginPage && !isAdminArea;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return;
      }
    }
    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(detailModal || supportOpen));
    return () => document.body.classList.remove("modal-open");
  }, [detailModal, supportOpen]);

  const setHistoryAndStore = (items) => {
    setHistoryItems(items);
    saveHistory(items);
  };

  const validatePayload = (form) => {
    if (activeTab === "text") {
      const text = form.text.trim();
      if (!text) return { error: "Please enter some text before checking." };
      if (text.length < 10) return { error: "Please enter at least 10 characters of text to analyze." };
      return { payload: { type: "text", text } };
    }
    if (activeTab === "image") {
      if (!form.imageFile) return { error: "Please upload an image before checking." };
      if (!form.imageText.trim()) return { error: "OCR text is empty. Review the extracted text first." };
      return { payload: { type: "image", text: form.imageText.trim() } };
    }
    if (activeTab === "voice") {
      if (!form.voiceFile) return { error: "Please upload a voice file before checking." };
      if (!form.voiceText.trim()) return { error: "STT transcript is empty. Review the transcript first." };
      return { payload: { type: "voice", text: form.voiceText.trim() } };
    }
    const url = form.url.trim();
    if (!url) return { error: "Please enter a URL before checking." };
    return { payload: { type: "url", url } };
  };

  const submitCheck = (kind) => {
    const form = kind === "home" ? homeForm : fullForm;
    const setError = kind === "home" ? setHomeError : setFullError;
    const { error, payload } = validatePayload(form);
    if (error) {
      setError(error);
      return;
    }

    setError("");
    setLoadingForm(kind);
    window.setTimeout(() => {
      const result = classifyContent(payload);
      const nextHistory = [result, ...historyItems].slice(0, 20);
      setHistoryAndStore(nextHistory);
      saveLatestResult(result);
      setLoadingForm("");
      navigate("/result", { state: { result } });
    }, 1200);
  };

  const openModal = (id, kind) => {
    if (kind === "scam") {
      setDetailModal({ ...scamTypeDetails[id], kind });
    } else if (kind === "guide") {
      setDetailModal({ ...guideDetails[id], kind });
    }
  };

  return (
    <>
      {isUserLoginPage && <MinimalHeader linkTo="/admin-login" linkLabel="Admin Login" />}
      {isAdminLoginPage && <MinimalHeader linkTo="/user-login" linkLabel="User Login" />}
      {isAdminArea && <AdminHeader />}
      {!isUserLoginPage && !isAdminLoginPage && !isAdminArea && (
        shouldShowUserHeader ? <Header /> : <MinimalHeader linkTo="/admin-login" linkLabel="Admin Login" />
      )}
      <main>
        <Outlet
          context={{
            activeTab,
            setActiveTab,
            homeForm,
            setHomeForm,
            fullForm,
            setFullForm,
            homeError,
            setHomeError,
            fullError,
            setFullError,
            loadingForm,
            submitCheck,
            historyItems,
            setHistoryAndStore,
            openModal,
            openSupport: () => setSupportOpen(true),
          }}
        />
      </main>
      {shouldShowUserHeader && <Footer openSupport={() => setSupportOpen(true)} />}
      <InfoModal detail={detailModal} close={() => setDetailModal(null)} />
      <SupportModal open={supportOpen} close={() => setSupportOpen(false)} />
    </>
  );
}

export default App;
