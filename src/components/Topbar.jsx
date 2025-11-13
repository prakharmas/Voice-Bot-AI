import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, FileDown, Plus } from "lucide-react";

export default function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => navigate("/conversations");

  // Page title and description mapping
  const pageInfo = {
    "/dashboard": {
      title: "Dashboard",
      desc: "Monitor your voice bot performance and conversations",
    },
    "/conversations": {
      title: "Conversations",
      desc: "View and manage all customer conversations",
    },
    "/agents": {
      title: "AI Agents",
      desc: "Manage and monitor your AI voice agents",
    },
    "/settings": {
      title: "Settings",
      desc: "Manage your account and organization preferences",
    },
  };

  // If viewing a specific conversation detail
  if (location.pathname.startsWith("/conversations/")) {
    return (
      <header className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            data-slot="button"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50
                      [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring 
                      focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
                      aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground 
                      dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[>svg]:px-2.5 gap-2"
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
              className="lucide lucide-arrow-left w-4 h-4"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back
          </button>


          <div>
            <h2 className="text-gray-800 font-semibold">
              Conversation with Sarah Johnson
            </h2>
            <span className="text-xs text-gray-500 ml-1">
              2025-11-13 14:32
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md transition">
            <FileDown size={16} /> Export PDF
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm rounded-md transition">
            <Plus size={16} /> Add Note
          </button>
        </div>
      </header>
    );
  }

  // Otherwise show normal topbar
  const { title, desc } = pageInfo[location.pathname] || pageInfo["/dashboard"];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
      </div>

      {/* Show Create Agent button only on /agents */}
      {location.pathname === "/agents" && (
        <button
          data-slot="button"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white gap-2"
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
            className="lucide lucide-bot w-4 h-4"
            aria-hidden="true"
          >
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
          Create New Agent
        </button>
      )}
    </header>
  );
}


