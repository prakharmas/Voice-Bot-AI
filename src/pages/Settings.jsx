import React, { useState } from "react";
import { Upload, Key, Link, Settings, Copy } from "lucide-react";


export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "organization", label: "Organization" },
    { id: "api", label: "API & Integrations" },
  ];

  const handleCopy = (key) => {
    navigator.clipboard.writeText(key);
    alert("API key copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Tabs */}
      <div className="flex items-center gap-6 border-b pb-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 font-medium pb-2 border-b-2 transition-all ${
              activeTab === tab.id
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Profile Settings */}
      {activeTab === "profile" && (
        <div className="bg-white rounded-xl shadow-sm p-8 w-full border border-gray-100">
          <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>

          {/* Profile Picture */}
          <div className="flex items-center gap-6 mb-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
              JD
            </div>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">
              <Upload size={16} />
              Upload New Photo
            </button>
          </div>

          {/* User Info */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full mt-1 p-2 border rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john.doe@company.com"
                className="w-full mt-1 p-2 border rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Role</label>
              <input
                type="text"
                defaultValue="Administrator"
                className="w-full text-gray-400 mt-1 p-2 border rounded-md bg-gray-50"
                disabled
              />
            </div>
          </div>

          {/* Change Password */}
          <hr className="my-6" />
          <h3 className="font-medium mb-4 text-gray-800">Change Password</h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Current Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                New Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-start gap-3 mt-6">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all 
              disabled:pointer-events-none disabled:opacity-50 
              [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 
              shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring 
              focus-visible:ring-ring/50 focus-visible:ring-[3px] 
              aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
              aria-invalid:border-destructive hover:bg-primary/90 
              h-9 px-4 py-2 has-[>svg]:px-3 
              bg-gradient-to-r from-teal-500 to-blue-600 
              hover:from-teal-600 hover:to-blue-700 text-white"
            >
              Save Changes
            </button>

            <button className="px-4 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab === "organization" && (
      <div className="bg-white rounded-xl shadow-sm p-8 w-full border border-gray-100">
        <h2 className="text-lg font-semibold mb-8 text-gray-900">
          Organization Settings
        </h2>

        {/* Company Logo */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
            VA
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M12 5v14m-7-7h14" />
            </svg>
            Upload Logo
          </button>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            defaultValue="VoiceBot AI Inc."
            className="w-full rounded-md border border-gray-200 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Industry */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Industry
          </label>
          <input
            type="text"
            defaultValue="Technology"
            className="w-full rounded-md border border-gray-200 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Website */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <input
            type="url"
            defaultValue="https://voicebotai.com"
            className="w-full rounded-md border border-gray-200 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Brand Color */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brand Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              defaultValue="#14b8a6"
              className="w-10 h-10 rounded-md border border-gray-200 cursor-pointer"
            />
            <span className="text-sm text-gray-600">
              Choose your brand accent color
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
          >
            Save Changes
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition">
            Cancel
          </button>
        </div>
      </div>
    )}


      {/* API & Integrations */}
      {activeTab === "api" && (
        <div className="bg-white rounded-xl shadow-sm p-8 w-full border border-gray-100 space-y-8">
          <h2 className="text-lg font-semibold mb-4">API & Integrations</h2>

          {/* API Keys */}
          <div>
            <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
              Use these API keys to integrate VoiceBot AI with your applications and services.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <label className="text-sm font-medium text-gray-600">
                  Production API Key
                </label>
                <input
                  type="text"
                  defaultValue="pk_prod_4f2b2e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e"
                  className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                  disabled
                />
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <label className="text-sm font-medium text-gray-600">
                  Development API Key
                </label>
                <input
                  type="text"
                  defaultValue="pk_dev_4f2b2e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e"
                  className="w-full mt-1 p-2 border rounded-md bg-gray-100"
                  disabled
                />
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-md hover:from-teal-600 hover:to-blue-700 transition">
                Generate New API Key
              </button>
            </div>
          </div>

          {/* Webhook Configuration */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4 flex items-center gap-2">
              <Link size={18} /> Webhook Configuration
            </h3>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Webhook URL
              </label>
              <input
                type="url"
                placeholder="https://webhook.example.com/webhook"
                className="w-full mt-1 p-2 border rounded-md bg-gray-50"
              />
            </div>
          </div>

          {/* Connected Integrations */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4 flex items-center gap-2">
              <Settings size={18} /> Connected Integrations
            </h3>
            <div className="space-y-3">
              {["Slack", "Zapier", "Salesforce"].map((service) => (
                <div
                  key={service}
                  className="flex items-center justify-between border p-3 rounded-md bg-white hover:shadow-sm transition"
                >
                  <div className="flex items-center gap-2">
                    {/* Key Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-key w-5 h-5 text-gray-600"
                      aria-hidden="true"
                    >
                      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                      <path d="m21 2-9.6 9.6"></path>
                      <circle cx="7.5" cy="15.5" r="5.5"></circle>
                    </svg>

                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>

                  <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
                    Configure
                  </button>
                </div>
              ))}
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-start gap-3 mt-6">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
            >
              Save Changes
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
