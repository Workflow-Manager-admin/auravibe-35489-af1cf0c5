/**
 * AppShell: Main scaffolding for My AuraGram.
 * - Handles authentication (guards as needed)
 * - Responds to theme toggle (dark/light)
 * - Provides global layout: top bar, navigation, main content, and modals.
 * - Loads routes (feed, explore, messages, profile, admin, etc.)
 * - Responsive and applies global font/colors.
 * 
 * TODO:
 * - Wire up Auth, DB, Storage (see firebase.js/supabaseClient.js)
 * - Add animation transitions
 * - Integrate notifications and real-time messaging
 * - Add Admin route guard
 */

import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth"; // TODO: Optional, not yet installed.

import TopBar from "./components/TopBar";
import SideNav from "./components/SideNav";
import StoriesSidebar from "./components/StoriesSidebar";
import NotificationsSidebar from "./components/NotificationsSidebar";

const Feed = lazy(() => import("./pages/Feed"));
const Explore = lazy(() => import("./pages/Explore"));
const Profile = lazy(() => import("./pages/Profile"));
const Messages = lazy(() => import("./pages/Messages"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AuthPage = lazy(() => import("./pages/AuthPage"));

function RequireAuth({ children }) {
  // TODO: Integrate proper Auth check
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(setUser);
    return unsub;
  }, []);
  if (user === null) {
    // Could show loading spinner here
    return <Navigate to="/auth" />;
  }
  return children;
}

// PUBLIC_INTERFACE
export default function AppShell() {
  const [theme, setTheme] = useState("dark"); // or use system/default

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-serif bg-black text-white transition-all">
        <TopBar theme={theme} setTheme={setTheme} />
        <div className="flex flex-1 w-full max-w-screen-2xl mx-auto">
          {/* Side Navigation */}
          <SideNav />
          {/* Route Content */}
          <main className="flex-1 min-h-[70vh] py-2 px-1 md:px-7 max-w-2xl mx-auto">
            <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<RequireAuth><Feed /></RequireAuth>} />
                <Route path="/explore" element={<RequireAuth><Explore /></RequireAuth>} />
                <Route path="/profile/:uid" element={<RequireAuth><Profile /></RequireAuth>} />
                <Route path="/messages/*" element={<RequireAuth><Messages /></RequireAuth>} />
                <Route path="/admin" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
                <Route path="/auth" element={<AuthPage />} />
                {/* TODO: Add fallback 404 page */}
              </Routes>
            </Suspense>
          </main>
          {/* Right Sidebars */}
          <div className="hidden lg:flex flex-col gap-6 w-56 pl-2 border-l border-auraAccent">
            <StoriesSidebar />
            <NotificationsSidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}
