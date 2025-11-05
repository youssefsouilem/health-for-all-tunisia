import React from "react";
import problematic from "../assets/problematic.png";
import mession from "../assets/mession.png";
import narrow from "../assets/narrow.png";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-sky-100 to-blue-200 px-10  min-h-screen  hover:scale-105 group transition-transform duration-300">
    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-center">
          Our Mission 🚀
        </h1>
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between md:px-20 py-16 transition-transform duration-300">
      
      {/* Left Side - Text */}
      
      <div className="flex-1 text-gray-800 max-w-2xl space-y-10">
        {/* Section Title */}
        

        {/* Mission List */}
        <ul className="mt-6 text-lg md:text-2xl opacity-90 space-y-4">
          {[
            "Reduce rural health inequalities",
            "Empower communities through awareness",
            "Provide preventive services and education",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <img src={narrow} alt="arrow icon" className="w-6 h-6 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* General Objective */}
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-12">
          General Objective 🎯
        </h2>
        <p className="mt-4 text-xl opacity-90 leading-relaxed">
          Improve access to and knowledge about preventive health services and awareness
          in underserved rural areas of Tunisia.
        </p>

        {/* Specific Objectives */}
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mt-12">
          Specific Objectives 📋 (How ?)
        </h3>

        <ul className="mt-6 text-lg md:text-2xl opacity-90 space-y-4">
          {[
            "Conduct health education workshops in rural communities.",
            "Organize free medical check-up days.",
            "Promote digital health awareness programs.",
            "Implement school health education sessions.",
            "Develop a local healthcare directory.",
            "Foster partnerships & sustainability.",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <img src={narrow} alt="arrow icon" className="w-6 h-6 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={mession}
          alt="Mission"
          className="w-[500px] md:w-[650px] lg:w-[800px] rounded-3xl object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
    </div>
  );
}
