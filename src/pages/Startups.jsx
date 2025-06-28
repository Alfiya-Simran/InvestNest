import React from "react";
import { FaLeaf, FaRobot, FaBrain } from "react-icons/fa";

const startups = [
  {
    name: "EcoWave",
    industry: "Clean Energy",
    icon: FaLeaf,
    color: "text-green-600",
    description: "Harnessing ocean waves to produce sustainable electricity.",
    location: "San Francisco, CA",
    funding: "$2.5M raised",
  },
  {
    name: "FarmBot AI",
    industry: "AgriTech",
    icon: FaRobot,
    color: "text-yellow-500",
    description: "AI-powered robotic systems for precision farming.",
    location: "Austin, TX",
    funding: "$1.8M raised",
  },
  {
    name: "NeuroNest",
    industry: "HealthTech",
    icon: FaBrain,
    color: "text-purple-600",
    description: "Wearable devices for real-time mental health monitoring.",
    location: "Boston, MA",
    funding: "$3.2M raised",
  },
];

function Startups() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-800">🌟 Featured Startups</h2>
        <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto">
          Discover promising startups transforming their industries with innovation.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {startups.map((startup, index) => {
          const Icon = startup.icon;
          return (
            <article
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300"
              aria-label={`Details about ${startup.name}`}
            >
              <div className="flex flex-col items-start space-y-2">
                <Icon className={`${startup.color} text-3xl mb-1 animate-pulse`} aria-hidden="true" />
                <h3 className="text-2xl font-semibold text-blue-700">{startup.name}</h3>
                <p className="text-sm text-gray-500 italic">
                  {startup.industry} · {startup.location}
                </p>
                <p className="text-gray-700 leading-relaxed">{startup.description}</p>
                <span className="mt-2 inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full font-medium">
                  {startup.funding}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Startups;
