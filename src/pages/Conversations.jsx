import React, { useState } from "react";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Conversations() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  
  const conversations = [
    {
      name: "Sarah Johnson",
      datetime: "2025-11-13 14:32",
      sentiment: "positive",
      agent: "AI Assistant Pro",
      duration: "3m 45s",
      status: "completed",
    },
    {
      name: "Michael Chen",
      datetime: "2025-11-13 14:28",
      sentiment: "neutral",
      agent: "AI Assistant Pro",
      duration: "5m 12s",
      status: "completed",
    },
    {
      name: "Emma Davis",
      datetime: "2025-11-13 14:15",
      sentiment: "positive",
      agent: "AI Support Bot",
      duration: "2m 30s",
      status: "completed",
    },
    {
      name: "James Wilson",
      datetime: "2025-11-13 13:58",
      sentiment: "negative",
      agent: "AI Assistant Pro",
      duration: "8m 20s",
      status: "escalated",
    },
    {
      name: "Olivia Brown",
      datetime: "2025-11-13 13:42",
      sentiment: "positive",
      agent: "AI Support Bot",
      duration: "4m 05s",
      status: "completed",
    },
    {
      name: "Noah Martinez",
      datetime: "2025-11-13 13:30",
      sentiment: "neutral",
      agent: "AI Assistant Pro",
      duration: "6m 15s",
      status: "completed",
    },
    {
      name: "Ava Garcia",
      datetime: "2025-11-13 13:15",
      sentiment: "positive",
      agent: "AI Support Bot",
      duration: "3m 50s",
      status: "completed",
    },
    {
      name: "Liam Rodriguez",
      datetime: "2025-11-13 12:58",
      sentiment: "negative",
      agent: "AI Assistant Pro",
      duration: "7m 42s",
      status: "escalated",
    },
    {
      name: "Sophia Lee",
      datetime: "2025-11-13 12:45",
      sentiment: "positive",
      agent: "AI Support Bot",
      duration: "2m 55s",
      status: "completed",
    },
    {
      name: "Mason Kim",
      datetime: "2025-11-13 12:30",
      sentiment: "neutral",
      agent: "AI Assistant Pro",
      duration: "5m 30s",
      status: "completed",
    },
  ];



  // Replace the previous filteredData definition with this
  const filteredData = conversations
    .filter((c) =>
      filter === "All" ? true : c.sentiment === filter.toLowerCase()
    )
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6">
      
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search by customer name..."
            className="w-full border border-gray-200 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter("All")}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 has-[>svg]:px-3 
              ${
                filter === "All"
                  ? "bg-teal-500 hover:bg-teal-600 text-white"
                  : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Positive")}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 has-[>svg]:px-3 
              ${
                filter === "Positive"
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
          >
            Positive
          </button>

          <button
            onClick={() => setFilter("Neutral")}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 has-[>svg]:px-3 
              ${
                filter === "Neutral"
                  ? "bg-gray-200 text-gray-900"
                  : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
          >
            Neutral
          </button>

          <button
            onClick={() => setFilter("Negative")}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 has-[>svg]:px-3 
              ${
                filter === "Negative"
                  ? "bg-rose-500 hover:bg-rose-600 text-white"
                  : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
          >
            Negative
          </button>

          <button className="flex items-center gap-2 h-9 px-4 py-2 text-sm border rounded-md bg-white hover:bg-gray-100 transition-all">
            <Download size={16} /> Export
          </button>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 text-left">
            <tr>
              <th className="py-3 px-4 font-medium">Customer Name</th>
              <th className="py-3 px-4 font-medium">Date/Time</th>
              <th className="py-3 px-4 font-medium">Sentiment</th>
              <th className="py-3 px-4 font-medium">Agent Name</th>
              <th className="py-3 px-4 font-medium">Duration</th>
              <th className="py-3 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {filteredData.map((c, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 transition cursor-pointer"
                onClick={() => (window.location.href = `/conversations/${i}`)}
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                    {c.name.charAt(0)}
                  </div>
                  {c.name}
                </td>
                <td className="py-3 px-4">{c.datetime}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      c.sentiment === "positive"
                        ? "bg-green-50 text-green-600"
                        : c.sentiment === "neutral"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {c.sentiment}
                  </span>
                </td>
                <td className="py-3 px-4">{c.agent}</td>
                <td className="py-3 px-4">{c.duration}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      c.status === "completed"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-500 bg-gray-50">
          <span>
            Showing {filteredData.length} of {conversations.length} conversations
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
