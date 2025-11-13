import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, MessageSquare, Users, Settings } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Conversations", icon: MessageSquare, path: "/conversations" },
    { name: "Agents", icon: Users, path: "/agents" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  // ✅ Proper Logout Handler
  const handleLogout = () => {
    // Clear auth data (tokens, user info, etc.)
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Sidebar Header */}
      <div className="px-6 py-5 flex items-center gap-3 border-b border-gray-100">
        {/* Gradient Bot Icon */}
        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bot w-6 h-6 text-white"
            aria-hidden="true"
          >
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
        </div>

        {/* App Name */}
        <div>
          <h1 className="text-gray-900 font-semibold text-base">VoiceBot AI</h1>
          <p className="text-xs text-gray-500">Voice Platform</p>
        </div>
      </div>


      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={
                isActive
                  ? "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all bg-teal-50 text-teal-400"
                  : "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition"
              }
            >
              <Icon size={20} />
              <span className="text-m text-gray-500 font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>


    {/* Logout Button (Bottom Section) */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-log-out w-5 h-5"
            aria-hidden="true"
          >
            <path d="m16 17 5-5-5-5"></path>
            <path d="M21 12H9"></path>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
