import React from "react";
import { tabs } from "../data/scamData.js";
import Icon from "./Icon.jsx";

export function CheckPanel({ id, formId, compact = false, activeTab, setActiveTab, form, setForm, error, submit, loading }) {
  const fileDefaults = {
    image: "Congratulations! You have won a special reward. Verify your account details now to claim it.",
    voice: "Hello, this is an urgent notice from your bank. Your account may be suspended unless you confirm your details immediately.",
  };
  const setValue = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const onFile = (kind, file) => {
    if (!file) return;
    if (kind === "image") setForm((current) => ({ ...current, imageFile: file.name, imageText: current.imageText || fileDefaults.image }));
    if (kind === "voice") setForm((current) => ({ ...current, voiceFile: file.name, voiceText: current.voiceText || fileDefaults.voice }));
  };

  return (
    <div id={id} className={`analysis-panel ${compact ? "compact-check" : "full-check"} ${loading ? "is-loading" : ""}`}>
      <form id={formId} className={`check-form ${loading ? "is-loading" : ""}`} data-check-form onSubmit={(event) => { event.preventDefault(); submit(); }}>
        <div className="tab-list" role="tablist" aria-label="Input type">
          {tabs.map((tab) => (
            <button key={tab.key} className={`tab ${activeTab === tab.key ? "active" : ""}`} type="button" data-tab={tab.key} onClick={() => setActiveTab(tab.key)}>
              <Icon name={tab.icon} /> {tab.label}
            </button>
          ))}
        </div>

        <div className={`tab-panel ${activeTab === "text" ? "active" : ""}`} data-panel="text">
          <label htmlFor={compact ? `${id}-text-input` : `${id}-full-text-input`}>Enter Suspicious Text</label>
          <textarea id={compact ? `${id}-text-input` : `${id}-full-text-input`} data-input="text" value={form.text} onChange={(event) => setValue("text", event.target.value)} placeholder="Enter at least 10 characters of text to analyze" />
        </div>

        <div className={`tab-panel ${activeTab === "image" ? "active" : ""}`} data-panel="image">
          <label htmlFor={compact ? `${id}-image-input` : `${id}-full-image-input`}>Upload Image</label>
          <label className={`upload-box upload-dropzone ${form.imageFile ? "has-file" : ""}`}>
            <span className="upload-icon"><Icon name="image" /></span>
            <strong>{form.imageFile || "Drag and drop an image here, or click to select"}</strong>
            {!form.imageFile && <small>Supports OCR text extraction from images</small>}
            <input id={compact ? `${id}-image-input` : `${id}-full-image-input`} data-input="image" type="file" accept="image/*" onChange={(event) => onFile("image", event.target.files?.[0])} />
          </label>
          <div className={`extracted-review ${form.imageFile ? "" : "hidden-analysis-text"}`} data-review="image">
            <h3>Review the extracted text before analysis</h3>
            <p>You can edit the extracted text if needed.</p>
            <textarea id={compact ? `${id}-image-text` : `${id}-full-image-text`} value={form.imageText} onChange={(event) => setValue("imageText", event.target.value)} />
          </div>
        </div>

        <div className={`tab-panel ${activeTab === "voice" ? "active" : ""}`} data-panel="voice">
          <label htmlFor={compact ? `${id}-voice-input` : `${id}-full-voice-input`}>Upload Voice Recording</label>
          <label className={`upload-box upload-dropzone ${form.voiceFile ? "has-file" : ""}`}>
            <span className="upload-icon"><Icon name="mic" /></span>
            <strong>{form.voiceFile || "Drag and drop an audio file here, or click to select"}</strong>
            {!form.voiceFile && <small>Supports speech-to-text conversion for voice messages</small>}
            <input id={compact ? `${id}-voice-input` : `${id}-full-voice-input`} data-input="voice" type="file" accept="audio/*" onChange={(event) => onFile("voice", event.target.files?.[0])} />
          </label>
          <div className={`extracted-review ${form.voiceFile ? "" : "hidden-analysis-text"}`} data-review="voice">
            <h3>Review the extracted text before analysis</h3>
            <p>You can edit the transcript if needed.</p>
            <textarea id={compact ? `${id}-voice-text` : `${id}-full-voice-text`} value={form.voiceText} onChange={(event) => setValue("voiceText", event.target.value)} />
          </div>
        </div>

        <div className={`tab-panel ${activeTab === "url" ? "active" : ""}`} data-panel="url">
          <label htmlFor={compact ? `${id}-url-input` : `${id}-full-url-input`}>Enter Suspicious URL</label>
          <input id={compact ? `${id}-url-input` : `${id}-full-url-input`} data-input="url" type="url" value={form.url} onChange={(event) => setValue("url", event.target.value)} placeholder="https://example.com" />
          <div className="extracted-review hidden-analysis-text" data-review="url">
            <h3>Optional URL context</h3>
            <p>Add any message that came with the link.</p>
            <textarea id={compact ? `${id}-url-context` : `${id}-full-url-context`} />
          </div>
        </div>

        <div className="form-error" role="alert">{error}</div>
        <button className="primary-action" type="submit" disabled={loading}>Check Now</button>
        <div className="analysis-loading" data-loading aria-hidden={!loading}>
          <span className="loading-spinner" />
          <h3>Analyzing Content</h3>
          <p>Please wait while VETO reviews your submitted content for scam indicators.</p>
          <span className="loading-progress" />
        </div>
      </form>
    </div>
  );
}
export default CheckPanel;
