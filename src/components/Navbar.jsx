import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/startups", label: "Startups" },
    { to: "/investors", label: "Investors" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl md:text-4xl font-extrabold text-indigo-700 tracking-tight">
          InvestNest
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                } transition`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Auth Buttons */}
          <NavLink
            to="/signup"
            className="ml-4 px-4 py-2 rounded-xl bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition"
          >
            Signup
          </NavLink>
          <NavLink
            to="/login"
            className="ml-2 px-4 py-2 rounded-xl border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
          <div className="flex flex-col space-y-2">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-medium ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-indigo-50"
                  } transition`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/signup"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition"
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
