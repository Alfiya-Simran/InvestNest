import React, { useState } from "react";
import ecoByteImg from "../assets/s1.jpg";
import healthEaseImg from "../assets/s3.jpg";
import finGrowImg from "../assets/s2.jpg";

const portfolio = [
  {
    name: "EcoByte",
    industry: "Sustainable Tech",
    description: "An IoT-based solution reducing energy waste in smart homes. EcoByte integrates with existing smart home ecosystems to optimize energy consumption patterns, making homes smarter and more sustainable.",
    image: ecoByteImg,
  },
  {
    name: "HealthEase",
    industry: "HealthTech",
    description: "AI-powered telemedicine platform serving rural India. HealthEase bridges the healthcare access gap by connecting patients with certified doctors in under 2 minutes using local language support and low bandwidth tech.",
    image: healthEaseImg,
  },
  {
    name: "FinGrow",
    industry: "FinTech",
    description: "Financial literacy & investing app for Indian youth. With gamified learning modules, goal-based saving tools, and curated micro-investment plans, FinGrow empowers a financially literate generation.",
    image: finGrowImg,
  },
];

function Portfolio() {
  const [selectedStartup, setSelectedStartup] = useState(null);

  const closeModal = () => {
    setSelectedStartup(null);
    document.body.style.overflow = "auto"; // unlock scroll
  };

  const openModal = (startup) => {
    setSelectedStartup(startup);
    document.body.style.overflow = "hidden"; // lock scroll
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-6">Our Portfolio</h2>
      <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto text-lg">
        Discover the innovative startups we’ve backed — from clean tech to cutting-edge healthcare and fintech solutions.
      </p>
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {portfolio.map((startup, index) => (
          <div
            key={index}
            onClick={() => openModal(startup)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={startup.image} alt={startup.name} className="h-56 w-full object-cover transition duration-300 hover:opacity-90" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{startup.name}</h3>
              <span className="inline-block mt-2 mb-3 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                {startup.industry}
              </span>
              <p className="text-gray-600 text-sm truncate">{startup.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStartup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-lg animate-fade-in">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedStartup.image}
              alt={selectedStartup.name}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{selectedStartup.name}</h3>
            <span className="inline-block mb-3 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              {selectedStartup.industry}
            </span>
            <p className="text-gray-700 text-sm">{selectedStartup.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
