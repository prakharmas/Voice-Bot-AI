import React from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function ConversationDetail() {
  const navigate = useNavigate();
  const { id } = useParams(); // example: conversation ID from URL

  const handleBack = () => navigate("/conversations");

  return (
    <div className="flex flex-1 min-h-0 bg-gray-50">
      {/* Chat Section */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Chat Body */}
        <div className="flex-1 overflow-auto p-6 space-y-5">
          {/* Assistant Message */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">
                Hello! I'm your AI assistant. How can I help you today?
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1 ml-2">14:32</span>
          </div>

          {/* User Message */}
          <div className="flex flex-col items-end">
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-sm">
                Hi! I'm having trouble accessing my account dashboard.
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1 mr-2">14:33</span>
          </div>

          {/* Assistant */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">
                I understand you're having trouble accessing your dashboard. Let
                me help you with that. Can you tell me what error message you're
                seeing?
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1 ml-2">14:33</span>
          </div>

          {/* User */}
          <div className="flex flex-col items-end">
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-sm">
                It says “Access Denied” when I try to login.
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1 mr-2">14:34</span>
          </div>

          {/* Assistant */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">
                Thank you for that information. This is usually a permissions
                issue. Let me check your account settings. One moment please.
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1 ml-2">14:34</span>
          </div>

          {/* User */}
          <div className="flex flex-col items-end">
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-sm">Sure, take your time.</p>
            </div>
            <span className="text-xs text-gray-400 mt-1 mr-2">14:35</span>
          </div>

          {/* Assistant */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">
                I've identified the issue. Your account permissions were
                accidentally reset during our system update last night. I've now
                restored them. Could you try logging in again?
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1 ml-2">14:36</span>
          </div>

          {/* User */}
          <div className="flex flex-col items-end">
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-sm">
                Perfect! I can access it now. Thank you so much!
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1 mr-2">14:37</span>
          </div>

          {/* Assistant */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-gray-800 text-sm">
                Wonderful! I'm glad I could help resolve this for you. Is there
                anything else you need assistance with today?
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-1 ml-2">14:37</span>
          </div>

          {/* User */}
          <div className="flex flex-col items-end">
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-3 rounded-xl shadow-sm max-w-md">
              <p className="text-sm">No, that’s all. Thanks again!</p>
            </div>
            <span className="text-xs text-gray-400 mt-1 mr-2">14:38</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-80 flex-shrink-0 border-l bg-white p-5 flex flex-col overflow-auto">
        {/* Customer Info */}
        <h3 className="text-gray-800 font-semibold mb-4">Customer Information</h3>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-medium">
            S
          </div>
          <div>
            <h4 className="text-gray-800 font-medium">Sarah Johnson</h4>
            <p className="text-xs text-gray-500">CUST-10234</p>
          </div>
        </div>

        <div className="text-sm space-y-2 text-gray-600 mb-6">
          <p>
            <span className="font-medium">Region:</span> North America
          </p>
          <p>
            <span className="font-medium">Agent:</span> AI Assistant Pro
          </p>
          <p>
            <span className="font-medium">Duration:</span> 3m 45s
          </p>
        </div>

        {/* Sentiment */}
        <h3 className="text-gray-800 font-semibold mb-2">Sentiment Analysis</h3>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-500 font-medium">😊 Positive</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-green-400 h-2 w-[85%]"></div>
          </div>
          <span className="text-m text-gray-900">85%</span>
        </div>
        </div>

        {/* Tags */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-800 font-semibold">Tags</h3>
            <button className="text-sm text-teal-600 hover:text-teal-700">
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-md">
              Account Access
            </span>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md">
              Technical Support
            </span>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-md">
              Resolved
            </span>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6">
          <h3 className="text-gray-800 font-semibold mb-2">
            Conversation Summary
          </h3>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 leading-relaxed">
            Customer reported an "Access Denied" error when trying to login to
            their dashboard. The AI assistant identified that account
            permissions were reset during a system update. The issue was
            resolved by restoring the permissions, and the customer confirmed
            successful access. The interaction was handled efficiently with a
            positive outcome.
          </p>
          </div>      
        </div>
      </div>
    </div>
  );
}
