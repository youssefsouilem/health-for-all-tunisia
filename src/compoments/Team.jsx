import React from "react";
import Person from "./person.jsx";
import ghassen from "../assets/ghassen.png";
import ahmed from "../assets/ahmed.png";
import dhia from "../assets/dhia.png";
import ena from "../assets/ena.png";
import ouday from "../assets/ouday.png";
import salah from "../assets/salah.png";

export default function Team() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-10 py-16 hover:scale-105 group transition-transform duration-300">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
          Leadership & Team 👥
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          National’s leadership is dedicated to transforming care for our
          nation’s vulnerable population. We embrace innovation to ensure our
          communities achieve their goals at every stage of their journey.
        </p>
      </div>

      {/* Leadership Subtitle */}
      <h4 className="text-3xl font-bold text-blue-700 mb-10 tracking-wide">
        Leadership
      </h4>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        <div className="flex justify-center hover:scale-105 group transition-transform duration-300">
          <Person
            name="Mohammed Ghassen Hmida"
            image={ghassen}
            role="Executive Director"
          />
        </div>
        <div className="flex justify-center hover:scale-105 group transition-transform duration-300">
          <Person
            name="Mohammed Dhia Aouina"
            image={dhia}
            role="Creative & Media Director"
          />
        </div>
        <div className="flex justify-center hover:scale-105 group transition-transform duration-300">
            <Person
            name="Youssef Souilem"
            image={ena}
            role="Head of Data Insight & Software Development"
          />
          
        </div>
        <div className="flex justify-center hover:scale-105 group transition-transform duration-300">
        
        <Person name="Ouday Chebbi"
         image={ouday}
          role="Head of Logistics" />
        </div>
        <div className="flex justify-center hover:scale-105 group transition-transform duration-300">
        <Person name="Ouday Chebbi"
         image={ouday}
        role="Head of Logistics" />
        
        </div>
        <div className="flex justify-center hover:scale-105 group transition-transform duration-300">
          <Person name="Salah Anez"
           image={salah} 
           role="Head of Finance" />
        </div>
      </div>
    </section>
  );
}
