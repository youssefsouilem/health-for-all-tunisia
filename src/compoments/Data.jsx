import React from "react";
import vision from "../assets/vision.png";
import medical_density from "../assets/Medical_practitioner_density.png";
import medical_infrastructure from "../assets/medical_infrastructure.png";

export default function Data() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center  px-6 md:px-20 py-20 space-y-24 hover:scale-105 group transition-transform duration-300">
      {/* ----------- TITLE ----------- */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 text-center leading-tight">
        Some Data Regarding the Problem 🌍
      </h1>

      {/* ----------- FIRST DATA BLOCK ----------- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-7xl">
        {/* Left - Image */}
        <img
          src={medical_density}
          alt="Medical practitioner density"
          className="w-[70%] md:w-[350px] lg:w-[400px] rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
        />

        {/* Right - Text */}
        <div className="flex-1 space-y-8 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700">
            Medical Practitioner Density
          </h2>
          <ul className="text-lg md:text-2xl list-disc list-inside space-y-4 leading-relaxed bg-white/80 backdrop-blur-md p-6 rounded-2xl ">
            <li>
              Tunisia has about <strong>1.3 doctors per 1,000 people</strong> (≈
              13 per 10,000).
            </li>
            <li>
              Rural Tunisia has only <strong>0.4 doctors per 1,000</strong>{" "}
              compared to <strong>2.0 in urban areas</strong> — both far below
              the WHO’s recommended <strong>4.0</strong>.
            </li>
          </ul>
        </div>
      </div>

      {/* ----------- SECOND DATA BLOCK ----------- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-7xl">
        

        

        {/* List below image */}
        {/* Title above the image */}
        <div className="flex-1 space-y-8 text-gray-800">

        <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 text-center">
          Weak Health Infrastructure Hampers Rural Care
        </h2>
        <ul className="text-lg md:text-2xl list-disc list-inside space-y-4 leading-relaxed bg-white/80 backdrop-blur-md p-6 rounded-2xl ">
          <li>
            Over <strong>40%</strong> of rural health centers lack diagnostic
            tools or constant electricity.
          </li>
          <li>
            More than <strong>60%</strong> of rural hospitals are in debt.
          </li>
          <li>
            Around <strong>47%</strong> are poorly connected by bad roads.
          </li>
          <li>
            <strong>53%</strong> are located in unsafe or polluted environments.
          </li>
        </ul>
        </div>
        {/* Image */}
        <img
          src={medical_infrastructure}
          alt="Health infrastructure"
          className="w-[70%] md:w-[350px] lg:w-[400px] rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
