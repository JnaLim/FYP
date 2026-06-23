import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

export function Footer({ openSupport }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="VETO Scam Detection System" />
          <p>Built for a safer internet.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/#how-it-works">How It Works</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/history">View History</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/ai-statement">AI Statement</Link>
        </div>
        <div className="footer-column">
          <h2>Support</h2>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/admin-login">Admin Login</Link>
          <button type="button" onClick={openSupport}>Contact Support</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Scam Detection System. All rights reserved.</span>
        <span>Built for a safer internet.</span>
      </div>
    </footer>
  );
}
export default Footer;
