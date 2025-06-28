import React, { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add real authentication logic here
    setLoggedIn(true);
    setForm({ email: "", password: "" });
  };

  return (
    <section className="px-6 py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-3">
          🔐 Welcome Back to InvestNest
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Log in to access your dashboard and explore new opportunities.
        </p>
        {loggedIn ? (
          <div className="text-green-600 text-center font-medium">
            ✅ Login successful! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@investnest.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
              <div className="text-right text-sm mt-2">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default LoginForm;
