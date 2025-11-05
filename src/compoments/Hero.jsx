import React from "react";
import problematic from "../assets/problematic.png";
import narrow from "../assets/narrow.png";
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between  md:px-20 py-16 hover:scale-105 group transition-transform duration-300">
      
      {/* Left Side - Text */}
      <div className="flex-1 text-gray-800 max-w-xl space-y-6 group-hover:translate-x-4 ">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Problematic 🌍
        </h1>
        <ul className="mt-6 text-lg md:text-xl opacity-90 list-disc list-inside space-y-2">
          <li>Limited access to quality healthcare in rural and underserved areas.</li>
          <li>Shortage of medical professionals and resources.</li>
          <li>Lack of health education and awareness among communities.</li>
          <li>High prevalence of preventable diseases due to inadequate healthcare infrastructure.</li>
        </ul>
        <button className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all">
          Learn More
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={problematic}
          alt="Healthcare Problematic"
          className="w-96 md:w-[500px] lg:w-[550px] rounded-2xl  object-cover  transition-transform duration-300"
        />
      </div>
    </section>
  );
}
