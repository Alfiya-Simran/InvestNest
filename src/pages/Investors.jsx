import React from "react";

const investors = [
  {
    name: "Aria Ventures",
    type: "Venture Capital Firm",
    bio: "Focused on early-stage tech and green startups with high growth potential.",
    photo: "/src/assets/aria.jpg",
  },
  {
    name: "Nayna Hayath",
    type: "Angel Investor",
    bio: "Former startup founder turned investor, passionate about FinTech innovation.",
    photo: "src/assets/dia.jpg",
  },
  {
    name: "TechSpring Capital",
    type: "Private Equity",
    bio: "Empowering startups with capital and strategic mentorship since 2015.",
    photo: "src/assets/ts.png",
  },
];

function Investors() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
        Meet Our Investors
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {investors.map((investor, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300 ease-in-out text-center animate-fade-in"
          >
            <img
              src={investor.photo}
              alt={investor.name}
              className="w-24 h-24 mx-auto mb-5 rounded-full object-cover border-2 border-blue-200 shadow"
            />
            <h3 className="text-2xl font-semibold text-blue-800 mb-1">
              {investor.name}
            </h3>
            <p className="text-sm text-gray-500 italic mb-3">{investor.type}</p>
            <p className="text-gray-700 text-base">{investor.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Investors;
