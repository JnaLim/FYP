import React from "react";
import { useNavigate } from "react-router";
import Icon from "../components/Icon.jsx";

export function AdminLogin() {
  const navigate = useNavigate();

  const submitLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("vetoAdminLoggedIn", "true");
    navigate("/admin");
  };

  return (
    <section id="admin-login-view" className="view active account-view login-view admin-login-view">
      <div className="login-shell">
        <div className="login-card admin-login-card">
          <span className="login-icon admin"><Icon name="lock" /></span>
          <p className="eyebrow">Restricted Access</p>
          <h1>Admin Login</h1>
          <p className="login-description">Restricted access for system monitoring and model evaluation.</p>

          <form className="login-form" onSubmit={submitLogin}>
            <label>
              Admin email
              <input type="email" name="adminEmail" placeholder="admin@veto.local" autoComplete="email" />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="Enter password" autoComplete="current-password" />
            </label>
            <label>
              Admin access code
              <input type="text" name="accessCode" placeholder="Prototype code" autoComplete="off" />
            </label>
            <button className="login-submit" type="submit">Login</button>
          </form>

          <p className="login-note warning">Admin login is for prototype demonstration only. No real administrator authentication is performed.</p>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
