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
    <div className="p-6 bg-gray-50 min-h-screen">

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
            className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border p-6 border-gray-200 hover:shadow-lg transition-shadow"
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
      <div className="space-y-6">
        {agents.map((a, i) => (
          <div
            key={i}
            data-slot="card"
            className="bg-white text-gray-900 flex flex-col gap-3 rounded-xl border p-5 border-gray-100 hover:shadow-lg transition-shadow"
          >
            {/* TOP HEADER */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Gradient Icon */}
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
                  >
                    <path d="M12 8V4H8"></path>
                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                </div>

                {/* Name + Badge */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-gray-900 font-semibold">{a.name}</h3>
                    <span
                      data-slot="badge"
                      className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium ${
                        a.status === "active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {a.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">{a.category}</p>
                </div>
              </div>

              {/* Ellipsis button */}
              <button
                data-slot="button"
                className="inline-flex items-center justify-center h-8 rounded-md px-3 hover:bg-gray-100 hover:text-accent-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="lucide lucide-ellipsis-vertical w-5 h-5"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-gray-600 mb-2">Total Conversations</p>
                <p className="text-2xl text-gray-900">{a.totalConversations}</p>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-2">Avg Sentiment Score</p>

                <p className="text-2xl text-gray-900">{a.sentiment}%</p>

                <div className="bg-primary/20 rounded-full h-1.5 mt-2 w-full">
                  <div
                    className="bg-secondary h-1.5 rounded-full"
                    style={{ width: `${a.sentiment}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-2">Avg Response Time</p>
                <p className="text-2xl text-gray-900">{a.responseTime}</p>
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-2">Accuracy Rate</p>
                <p className="text-2xl text-gray-900">{a.accuracy}%</p>

                <div className="bg-primary/20 rounded-full h-1.5 mt-2 w-full">
                  <div
                    className="bg-secondary h-1.5 rounded-full"
                    style={{ width: `${a.accuracy}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* FOOTER BUTTONS */}
            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100">
              <button
                data-slot="button"
                className="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-100"
              >
                View Details
              </button>
              <button
                data-slot="button"
                className="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-100"
              >
                Edit Configuration
              </button>
              <button
                data-slot="button"
                className="px-3 py-1.5 text-sm border rounded-md hover:bg-gray-100"
              >
                View Conversations
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
