import React from "react";
import vision from "../assets/vision.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between  md:px-20 py-16   hover:scale-105 group transition-transform duration-300">
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={vision}
          alt="Healthcare Problematic"
          className="w-96 md:w-[500px] lg:w-[550px] rounded-2xl  object-cover "
        />
      </div>
      <div className="flex-1 text-gray-800 max-w-xl space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          our Vision 🌍
        </h1>
          <h3 className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
            A Tunisia where every person regardless of income or location has access to essential healthcare, preventive education, and the chance to live a healthy life.
        </h3>
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">  our Values💡</h1>
        <ul className="mt-6 text-lg md:text-xl opacity-90 list-disc list-inside space-y-2">
          <li className="flex items-start gap-3 p-3   transition-all">
            <span><strong>Equity:</strong> Health access for everyone, not just urban areas.</span>
          </li>

          <li className="flex items-start gap-3 p-3   transition-all">
            <span><strong>Accessibility:</strong> Services and information that reach underserved areas.</span>
          </li>

          <li className="flex items-start gap-3 p-3  transition-all">
            <span><strong>Community-Centered Action:</strong> Working with people, not just for them.</span>
          </li>

          <li className="flex items-start gap-3 p-3   transition-all">
            <span><strong>Collaboration:</strong> Teamwork and partnerships to create impact.</span>
          </li>

          <li className="flex items-start gap-3 p-3  transition-all">
            <span><strong>Prevention First:</strong> Focus on awareness and early intervention.</span>
          </li>

          <li className="flex items-start gap-3 p-3  transition-all">
            <span><strong>Sustainability:</strong> Long-term solutions, not temporary fixes.</span>
          </li>
        </ul>

      </div>

      
    </section>
  );
}
