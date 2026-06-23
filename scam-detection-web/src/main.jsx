import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import App from "./App.jsx";
import HomeView from "./views/HomeView.jsx";
import CheckView from "./views/CheckView.jsx";
import ResultView from "./views/ResultView.jsx";
import HistoryView from "./views/HistoryView.jsx";
import ScamTypesView from "./views/ScamTypesView.jsx";
import GuideView from "./views/GuideView.jsx";
import FaqView from "./views/FaqView.jsx";
import DocumentView from "./views/DocumentView.jsx";
import AdminView from "./views/AdminView.jsx";
import Pricing from "./views/Pricing.jsx";
import Plan from "./views/Plan.jsx";
import Preferences from "./views/Preferences.jsx";
import Settings from "./views/Settings.jsx";
import UserLogin from "./views/UserLogin.jsx";
import AdminLogin from "./views/AdminLogin.jsx";
import { privacySections, termsSections, cookieSections, aiSections } from "./data/scamData.js";
import "../styles.css";

const isMockUserLoggedIn = () => localStorage.getItem("vetoUserLoggedIn") === "true";
const isMockAdminLoggedIn = () => localStorage.getItem("vetoAdminLoggedIn") === "true";

function ProtectedUserRoute({ children }) {
  return isMockUserLoggedIn() ? children : <Navigate to="/user-login" replace />;
}

function ProtectedAdminRoute({ children }) {
  return isMockAdminLoggedIn() ? children : <Navigate to="/admin-login" replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <ProtectedUserRoute><HomeView /></ProtectedUserRoute> },
      { path: "check", element: <ProtectedUserRoute><CheckView /></ProtectedUserRoute> },
      { path: "features", element: <ProtectedUserRoute><HomeView /></ProtectedUserRoute> },
      { path: "result", element: <ProtectedUserRoute><ResultView /></ProtectedUserRoute> },
      { path: "history", element: <ProtectedUserRoute><HistoryView /></ProtectedUserRoute> },
      { path: "profile", element: <ProtectedUserRoute><Navigate to="/settings" replace /></ProtectedUserRoute> },
      { path: "plan", element: <ProtectedUserRoute><Plan /></ProtectedUserRoute> },
      { path: "preferences", element: <ProtectedUserRoute><Preferences /></ProtectedUserRoute> },
      { path: "settings", element: <ProtectedUserRoute><Settings /></ProtectedUserRoute> },
      { path: "scam-types", element: <ProtectedUserRoute><ScamTypesView /></ProtectedUserRoute> },
      { path: "guides", element: <ProtectedUserRoute><GuideView /></ProtectedUserRoute> },
      { path: "guide", element: <ProtectedUserRoute><GuideView /></ProtectedUserRoute> },
      { path: "faq", element: <ProtectedUserRoute><FaqView /></ProtectedUserRoute> },
      {
        path: "privacy",
        element: (
          <ProtectedUserRoute>
          <DocumentView
            title="Privacy Policy"
            subtitle="How we collect, use and protect your information"
            sections={privacySections}
          />
          </ProtectedUserRoute>
        ),
      },
      {
        path: "terms",
        element: (
          <ProtectedUserRoute>
          <DocumentView
            title="Terms of Service"
            subtitle="Please read these terms carefully before using our service"
            sections={termsSections}
          />
          </ProtectedUserRoute>
        ),
      },
      {
        path: "cookies",
        element: (
          <ProtectedUserRoute>
          <DocumentView
            title="Cookie Settings"
            subtitle="How browser storage is used in this prototype"
            sections={cookieSections}
          />
          </ProtectedUserRoute>
        ),
      },
      {
        path: "ai-statement",
        element: (
          <ProtectedUserRoute>
          <DocumentView
            title="AI Statement"
            subtitle="How this prototype works"
            sections={aiSections}
          />
          </ProtectedUserRoute>
        ),
      },
      { path: "user-login", element: <UserLogin /> },
      { path: "admin-login", element: <AdminLogin /> },
      { path: "user", element: <ProtectedUserRoute><Navigate to="/" replace /></ProtectedUserRoute> },
      { path: "pricing", element: <ProtectedUserRoute><Pricing /></ProtectedUserRoute> },
      { path: "admin", element: <ProtectedAdminRoute><AdminView /></ProtectedAdminRoute> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
