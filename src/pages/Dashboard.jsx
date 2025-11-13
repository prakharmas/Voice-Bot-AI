import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { MessageSquare, Users, Clock, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Today's Conversations",
      value: "284",
      change: "+12.3%",
      color: "from-teal-500 to-teal-600",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
    },
    {
      title: "Total Agents",
      value: "1,429",
      change: "+8.2%",
      color: "from-blue-500 to-blue-600",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: "Avg. Response Time",
      value: "1.2s",
      change: "-4.1%",
      color: "from-purple-500 to-purple-600",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      title: "Overall Sentiment",
      value: "78%",
      change: "+5.1%",
      color: "from-emerald-500 to-emerald-600",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
    },
  ];

  const lineData = [
    { name: "Mon", value: 45 },
    { name: "Tue", value: 50 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 58 },
    { name: "Fri", value: 70 },
    { name: "Sat", value: 55 },
    { name: "Sun", value: 50 },
  ];

  const pieData = [
    { name: "Positive", value: 65, color: "#10B981" },
    { name: "Neutral", value: 25, color: "#9CA3AF" },
    { name: "Negative", value: 10, color: "#EF4444" },
  ];

  const conversations = [
    { name: "Sarah Johnson", role: "AI Assistant Pro", sentiment: "positive", time: "2 min ago" },
    { name: "Michael Chen", role: "AI Assistant Pro", sentiment: "neutral", time: "5 min ago" },
    { name: "Emma Davis", role: "AI Support Bot", sentiment: "positive", time: "12 min ago" },
    { name: "James Wilson", role: "AI Assistant Pro", sentiment: "negative", time: "18 min ago" },
    { name: "Olivia Brown", role: "AI Support Bot", sentiment: "positive", time: "25 min ago" },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Top Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white flex flex-col gap-6 rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              {/* Gradient Icon Box */}
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-md`}
              >
                {stat.icon}
              </div>

              {/* Change Badge */}
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                  stat.change.startsWith("+")
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                {stat.change.startsWith("+") ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up w-3 h-3"
                  >
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-down w-3 h-3"
                  >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                )}
                {stat.change}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-3xl text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white col-span-2 rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-4">
            Conversation Volume Over Time
          </h3>
          <p class="text-sm text-gray-600 mb-6">Last 7 days</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#10B981" fill="#D1FAE5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-4">
            Sentiment Distribution
          </h3>
          <p className="text-sm text-gray-600 mb-6">Current week</p>

          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              {/* Tooltip shows sentiment and percentage */}
              <Tooltip
                formatter={(value, name) => [`${value}%`, name]}
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend below the chart */}
          <div className="mt-2 space-y-1 text-sm text-gray-600">
            {pieData.map((d, i) => (
              <div key={i} className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: d.color }}
                  ></span>
                  {d.name}
                </span>
                <span>{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
        </div>

      {/* Recent Conversations Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-sm font-medium text-gray-600">Recent Conversations</h3>
            <p className="text-xs text-gray-400">Latest customer interactions</p>
          </div>
          <button className="text-sm text-teal-600 hover:text-teal-700">View All</button>
        </div>

        <div className="space-y-3">
          {conversations.map((c, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    c.sentiment === "positive"
                      ? "bg-emerald-50 text-emerald-700"
                      : c.sentiment === "neutral"
                      ? "bg-gray-100 text-gray-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {c.sentiment}
                </span>
                <span className="text-sm text-gray-500 w-20 text-right">{c.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
