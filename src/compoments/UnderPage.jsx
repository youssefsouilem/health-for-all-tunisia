import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import teamLogo from '../assets/team_logo.png'

export default function UnderPage() {
  return (
    <footer className="bg-[#073B4C] text-white py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            Life Happens Here.
          </h1>
          <div className="flex flex-row items-center justify-center md:items-start items-center mb-6">
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Perfect Circle */}
            <div className="bg-white rounded-full w-60 h-60 flex items-center justify-center shadow-xl">
              <img
                src={teamLogo}
                alt="Team Logo"
                className="w-40 h-40 object-contain"
              />
            </div>

            <h2 className="text-2xl font-semibold text-white text-center md:text-left">
              Health for All Tunisia
            </h2>
        </div>
            <p className="text-xl text-gray-300 text-left md:text-center max-w-xs mt-16 ml-8">
              Committed to improving healthcare access in Tunisia.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-4">
          <button className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-[#073B4C] transition-all duration-300 w-fit">
            Contact Us
          </button>
          <div className="flex space-x-6 mt-4">
            <a
              href="#"
              className="border border-white p-3 rounded-full hover:bg-white hover:text-[#073B4C] transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="border border-white p-3 rounded-full hover:bg-white hover:text-[#073B4C] transition-all duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="border border-white p-3 rounded-full hover:bg-white hover:text-[#073B4C] transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-6 text-gray-200 text-sm">
          <div className="space-y-2">
            <a href="#" className="block hover:text-white">About Us</a>
            <a href="#" className="block hover:text-white">Our Projects</a>
            <a href="#" className="block hover:text-white">Get Involved</a>
            <a href="#" className="block hover:text-white">Contact</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:text-white">Partners</a>
            <a href="#" className="block hover:text-white">Privacy Policy</a>
            <a href="#" className="block hover:text-white">Terms of Use</a>
            <a href="#" className="block hover:text-white">Sustainability</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
        © 2025 Health for All Tunisia. All Rights Reserved.
      </div>
    </footer>
  );
}
