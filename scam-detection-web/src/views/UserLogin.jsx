import React from "react";
import { useNavigate } from "react-router";
import Icon from "../components/Icon.jsx";

export function UserLogin() {
  const navigate = useNavigate();

  const submitLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("vetoUserLoggedIn", "true");
    navigate("/");
  };

  return (
    <section id="user-login-view" className="view active account-view login-view">
      <div className="login-shell">
        <div className="login-card">
          <span className="login-icon"><Icon name="users" /></span>
          <p className="eyebrow">User Access</p>
          <h1>User Login</h1>
          <p className="login-description">Log in to view your scan history and manage your scam checking activity.</p>

          <form className="login-form" onSubmit={submitLogin}>
            <label>
              Email
              <input type="email" name="email" placeholder="user@example.com" autoComplete="email" />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="Enter password" autoComplete="current-password" />
            </label>
            <div className="login-options">
              <label className="remember-check">
                <input type="checkbox" name="remember" />
                Remember me
              </label>
              <button type="button" className="forgot-link" onClick={() => window.alert("Prototype only: password recovery is not connected.")}>
                Forgot password?
              </button>
            </div>
            <button className="login-submit" type="submit">Login</button>
          </form>

          <p className="login-note">Prototype login only. No real account verification is performed.</p>
        </div>
      </div>
    </section>
  );
}

export default UserLogin;
