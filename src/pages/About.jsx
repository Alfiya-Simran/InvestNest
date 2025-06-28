import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="px-6 py-24 bg-white text-center">
      <motion.h2
        className="text-5xl font-extrabold text-blue-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About InvestNest
      </motion.h2>
      <motion.p
        className="text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        InvestNest bridges the gap between visionary investors and breakthrough startups.
        Our platform offers the tools, insights, and networks to empower early-stage companies and
        smart investments.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "🔍 Discover Startups",
            description: "Browse vetted, high-potential startups from diverse industries.",
          },
          {
            title: "🤝 Connect with Founders",
            description: "Engage directly with passionate founders and startup teams.",
          },
          {
            title: "💰 Secure Investments",
            description: "Invest with confidence and track your growth in real-time.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
