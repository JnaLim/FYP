import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Icon from "./Icon.jsx";
import logo from "../../assets/logo.png";

export function Header() {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("vetoUserLoggedIn");
    setProfileOpen(false);
    navigate("/user-login");
  };

  const closeProfileMenu = () => {
    setProfileOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="VETO home">
          <img src={logo} alt="VETO Scam Detection System" />
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/check">Check Now</Link>
          <Link to="/#features">Features</Link>
          <Link to="/scam-types">Scam Types</Link>
          <Link to="/guides">Guide</Link>
        </nav>
        <div className="header-actions">
          <div className="profile-menu">
            <button
              className="profile-icon-button"
              type="button"
              aria-label="Open user profile menu"
              aria-expanded={profileOpen}
              onClick={() => setProfileOpen((open) => !open)}
            >
              <Icon name="users" size={20} />
            </button>
            {profileOpen && (
              <div className="profile-dropdown">
                <div className="profile-summary">
                  <span className="profile-summary-avatar">JL</span>
                  <div>
                    <strong>Jeana Lim</strong>
                    <p>Free Plan</p>
                  </div>
                </div>
                <div className="profile-menu-group">
                  <Link to="/pricing" onClick={closeProfileMenu}><Icon name="zap" /> Upgrade plan</Link>
                </div>
                <div className="profile-menu-group">
                  <Link to="/settings" onClick={closeProfileMenu}><Icon name="wrench" /> Settings</Link>
                  <Link to="/history" onClick={closeProfileMenu}><Icon name="clock" /> View History</Link>
                </div>
                <div className="profile-menu-group">
                  <button type="button" className="profile-logout-item" onClick={logout}><Icon name="lock" /> Log out</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export function MinimalHeader({ linkTo, linkLabel }) {
  return (
    <header className="app-header minimal-header">
      <div className="header-inner minimal-header-inner">
        <Link className="brand" to="/user-login" aria-label="VETO login">
          <img src={logo} alt="VETO Scam Detection System" />
        </Link>
        <Link className="minimal-header-link" to={linkTo}>{linkLabel}</Link>
      </div>
    </header>
  );
}

export function AdminHeader() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("vetoAdminLoggedIn");
    navigate("/admin-login");
  };

  return (
    <header className="app-header admin-only-header">
      <div className="header-inner admin-header-inner">
        <span className="admin-header-title">Admin Dashboard</span>
        <nav className="main-nav admin-nav" aria-label="Admin navigation">
          <a href="#admin-view">Admin Dashboard</a>
          <a href="#model-evaluation">Model Evaluation</a>
          <a href="#system-logs">System Logs</a>
        </nav>
        <button className="header-logout admin" type="button" onClick={logout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
