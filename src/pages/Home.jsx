import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  const handleNavigateSignup = () => navigate("/signup");
  const handleNavigateAbout = () => navigate("/about");

  return (
    <section
      role="region"
      aria-label="Homepage Hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-r from-blue-50 to-white gap-10"
    >
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-6 leading-tight tracking-tight">
          Invest in the Future of Innovation 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover, fund, and partner with the most promising startups — all from one platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={handleNavigateSignup}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Get Started
          </button>
          <button
            onClick={handleNavigateAbout}
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-all shadow hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={heroImage}
          alt="Illustration of startup investment and innovation"
          className="w-full h-auto rounded-2xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}

export default Home;
