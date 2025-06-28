import React, { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "startup-owner", // default role
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send this data to your backend
    console.log("User signed up:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", role: "startup-owner" });
  };

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
          🚀 Join InvestNest Today
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Start your journey as an investor or startup founder.
        </p>
        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            🎉 Thank you for signing up!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Alfiya Simran"
              />
            </div>
            <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Sign Up As
              </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select your role</option>
              <option value="Startup Founder">Startup Founder</option>
              <option value="Investor">Investor</option>
              
            </select>
          </div>
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="alfiya@example.com"
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
                placeholder="set a password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default SignupForm;
