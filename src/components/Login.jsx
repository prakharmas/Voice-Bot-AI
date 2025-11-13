import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🧠 Replace this with your real authentication logic
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-teal-50">
      {/* Logo + Title */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl shadow-md">
          🤖
        </div>
        <h1 className="text-lg font-semibold text-gray-800 mt-4">
          Welcome to VoiceBot AI
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Sign in to manage your voice conversations
        </p>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md border border-gray-100 rounded-2xl p-8 w-full max-w-md"
      >
        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <div className="flex items-center border rounded-md bg-gray-50 px-3">
            <Mail className="text-gray-400 w-4 h-4 mr-2" />
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="flex items-center border rounded-md bg-gray-50 px-3">
            <Lock className="text-gray-400 w-4 h-4 mr-2" />
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2 accent-teal-500"
            />
            Remember me
          </label>
          <a
            href="#"
            className="text-sm text-teal-600 hover:text-teal-700 font-medium"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-md hover:from-teal-600 hover:to-blue-700 transition"
        >
          Login
        </button>

        {/* Create Account */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
            Create an Account
          </a>
        </p>
      </form>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-10">
        © 2025 VoiceBot AI. All rights reserved.
      </p>
    </div>
  );
}
