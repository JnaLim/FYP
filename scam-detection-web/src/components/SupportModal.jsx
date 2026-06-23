import React, { useEffect, useRef, useState } from "react";

const SUPPORT_MESSAGES_KEY = "vetoSupportMessages";

const defaultForm = {
  name: "Jeana Lim",
  email: "0209032@student.uow.edu.my",
  subject: "",
  message: "",
};

function getStoredMessages() {
  try {
    return JSON.parse(localStorage.getItem(SUPPORT_MESSAGES_KEY) || "[]");
  } catch {
    return [];
  }
}

function formatTimestamp(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function SupportModal({ open, close }) {
  const [form, setForm] = useState(defaultForm);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const sendTimerRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      window.clearTimeout(sendTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const resetModal = () => {
    window.clearTimeout(sendTimerRef.current);
    window.clearTimeout(closeTimerRef.current);
    setForm(defaultForm);
    setSuccess("");
    setError("");
    setIsSending(false);
    setIsSent(false);
  };

  useEffect(() => {
    if (!open) {
      resetModal();
    }
  }, [open]);

  if (!open) return null;

  const closeModal = () => {
    resetModal();
    close();
  };

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSuccess("");
    setError("");
    setIsSent(false);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (isSending) return;

    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!subject || !message) {
      setSuccess("");
      setError("Please enter a subject and message.");
      return;
    }

    setError("");
    setSuccess("");
    setIsSending(true);

    sendTimerRef.current = window.setTimeout(() => {
      const storedMessages = getStoredMessages();
      const nextId = `SUP-${String(storedMessages.length + 1).padStart(3, "0")}`;
      const supportMessage = {
        id: nextId,
        name: form.name.trim() || "VETO User",
        email: form.email.trim() || "user@example.com",
        subject,
        message,
        status: "New",
        createdAt: formatTimestamp(new Date()),
      };

      localStorage.setItem(SUPPORT_MESSAGES_KEY, JSON.stringify([supportMessage, ...storedMessages]));
      setForm((current) => ({ ...current, subject: "", message: "" }));
      setSuccess("Your message has been sent.");
      setIsSending(false);
      setIsSent(true);

      closeTimerRef.current = window.setTimeout(() => {
        closeModal();
      }, 1000);
    }, 1200);
  };

  return (
    <div id="support-modal" className="support-modal" role="dialog" aria-modal="true">
      <div className="support-modal-backdrop" onClick={isSending || isSent ? undefined : closeModal} />
      <div className="support-modal-card">
        <div className="support-modal-header">
          <h2>Contact Support</h2>
          <p>Send a message to the admin team.</p>
        </div>
        <div className="support-modal-body">
          {isSending || isSent ? (
            <div className={`support-loading-state ${isSent ? "is-success" : ""}`} role="status">
              <span className="support-loading-spinner" aria-hidden="true" />
              <h3>{isSent ? "Message Sent" : "Sending Message"}</h3>
              <p>{isSent ? success : "Please wait while VETO sends your message to the admin team."}</p>
              {!isSent && <span className="support-loading-progress" aria-hidden="true" />}
            </div>
          ) : (
            <form className="support-message-form" onSubmit={sendMessage}>
              <label>
                Name
                <input type="text" value={form.name} readOnly />
              </label>
              <label>
                Email
                <input type="email" value={form.email} readOnly />
              </label>
              <label>
                Subject
                <input type="text" value={form.subject} onChange={(event) => updateField("subject", event.target.value)} />
              </label>
              <label>
                Message
                <textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} />
              </label>
              {error && <p className="support-error" role="alert">{error}</p>}
              <div className="support-actions">
                <button type="button" className="modal-close-button" onClick={closeModal}>Cancel</button>
                <button type="submit" className="modal-start-button support-send-button">Send Message</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
export default SupportModal;
