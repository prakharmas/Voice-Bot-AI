import React from "react";
import { Plus } from "lucide-react";

const agents = [
  {
    name: "AI Assistant Pro",
    category: "General Support",
    status: "active",
    totalConversations: 1247,
    sentiment: 82,
    responseTime: "1.2s",
    accuracy: 94,
  },
  {
    name: "AI Support Bot",
    category: "Technical Issues",
    status: "active",
    totalConversations: 892,
    sentiment: 78,
    responseTime: "1.5s",
    accuracy: 91,
  },
  {
    name: "Sales Assistant AI",
    category: "Sales & Product Info",
    status: "active",
    totalConversations: 634,
    sentiment: 85,
    responseTime: "1.0s",
    accuracy: 96,
  },
  {
    name: "Billing Bot",
    category: "Billing & Payments",
    status: "inactive",
    totalConversations: 423,
    sentiment: 75,
    responseTime: "1.8s",
    accuracy: 88,
  },
];

export default function AgentsDashboard() {
  return (
    <div className="p-6 bg-white min-h-screen">

      {/* Stats Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Total Agents",
            value: "4",
            iconBg: "bg-teal-100",
            icon: (
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
                className="lucide lucide-bot w-5 h-5 text-teal-600"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            ),
          },
          {
            label: "Total Conversations",
            value: "3,196",
            iconBg: "bg-emerald-100",
            icon: (
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
                className="lucide lucide-message-square w-5 h-5 text-emerald-600"
              >
                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
              </svg>
            ),
          },
          {
            label: "Avg Accuracy",
            value: "92%",
            iconBg: "bg-blue-100",
            icon: (
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
                className="lucide lucide-trending-up w-5 h-5 text-blue-600"
              >
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg>
            ),
          },
          {
            label: "Avg Response",
            value: "1.4s",
            iconBg: "bg-purple-100",
            icon: (
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
                className="lucide lucide-clock w-5 h-5 text-purple-600"
              >
                <path d="M12 6v6l4 2"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            ),
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl border p-5 border-gray-100 hover:shadow transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 ${stat.iconBg} rounded-lg flex items-center justify-center`}
              >
                {stat.icon}
              </div>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </div>
            <p className="text-3xl text-gray-900 font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>


      {/* Agents List */}
      <div className="space-y-5">
        {agents.map((a, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 flex justify-between items-center hover:shadow-md transition-shadow"
          >
            {/* Left Section */}
            <div className="flex items-start gap-4">
            {/* Gradient bot icon */}
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
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
                className="lucide lucide-bot w-7 h-7 text-white"
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

            {/* Agent info */}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900">{a.name}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    a.status === "active"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {a.status}
                </span>
              </div>
              <p className="text-sm text-gray-500">{a.category}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Total Conversations</p>
                <p className="text-lg font-semibold text-gray-900">
                  {a.totalConversations}
                </p>
              </div>
            </div>
          </div>

            {/* Center Section */}
            <div className="flex flex-col items-start w-1/3">
              <p className="text-sm text-gray-500">Avg Sentiment Score</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {a.sentiment}%
              </p>
              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div
                  className="h-1.5 bg-emerald-500 rounded-full"
                  style={{ width: `${a.sentiment}%` }}
                ></div>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-sm text-gray-700 space-y-2 text-right">
              <p>
                <span className="text-gray-500">Avg Response Time:</span>{" "}
                <span className="font-medium text-gray-900">
                  {a.responseTime}
                </span>
              </p>
              <p>
                <span className="text-gray-500">Accuracy Rate:</span>{" "}
                <span className="font-medium text-gray-900">
                  {a.accuracy}%
                </span>
              </p>
              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1 text-xs border rounded-lg hover:bg-gray-50">
                  View Details
                </button>
                <button className="px-3 py-1 text-xs border rounded-lg hover:bg-gray-50">
                  Edit Configuration
                </button>
                <button className="px-3 py-1 text-xs border rounded-lg hover:bg-gray-50">
                  View Conversations
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
