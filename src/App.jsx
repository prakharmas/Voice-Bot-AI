import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Conversations from "./pages/Conversations";
import Agents from "./pages/Agents";
import Settings from "./pages/Settings";
import Login from "./components/Login";
import ConversationDetail from "./pages/ConversationDetail";

export default function App() {
  const location = useLocation();
  const isConversationDetail = /^\/conversations\/[^/]+$/.test(location.pathname);

  // Hide sidebar/topbar on login page
  const isLoginPage = location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (hidden on login) */}
      {!isLoginPage && (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 h-full">
          <Sidebar />
        </aside>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col bg-gray-50 min-h-0 ${
          location.pathname.startsWith("/conversations/") 
            ? "" 
            : "overflow-y-auto"
        } ${!isLoginPage ? "ml-64" : ""}`}
      >

        {!isLoginPage && <Topbar />}
        <main
          className={`flex-1 flex flex-col ${
            isConversationDetail ? "min-h-0" : ""
          } ${!isLoginPage ? "p-4" : "p-6"}`}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/conversations" element={<Conversations />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/conversations/:id" element={<ConversationDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
