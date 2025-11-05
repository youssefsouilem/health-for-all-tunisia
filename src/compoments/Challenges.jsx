import React from "react";
import problematic from "../assets/problematic.png";
import mession from "../assets/mession.png";
import ChallengEes from "../assets/Challenges.png";

export default function Challenges() {
  return (
    <>
    <div className="  hover:scale-105 group transition-transform duration-300">
    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-center">
          Challenges & risks
        </h1>
    <section className="flex flex-col md:flex-row items-center justify-between transition-transform duration-300">
        <div className=" flex-1 mt-10 md:mt-0 flex rounded-3xl  justify-center ">
    <img src={ChallengEes} className=" flex rounded-3xl"   />
    </div>
    </section>
    </div>
   <section className="min-h-screen flex flex-col items-center justify-center px-10 py-16   hover:scale-105 group transition-transform duration-300">
  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-12 text-center">
    Challenges & Mitigation Strategies
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
    {/* Left Column */}
    <div className="space-y-8 backdrop-blur-md p-8 rounded-2xl ">
      <div>
        <h4 className="text-2xl font-semibold text-blue-700 mb-2">
          🏘️ Low Community Participation
        </h4>
        <p className="text-gray-700 text-lg leading-relaxed">
          Involve local leaders, use schools, municipalities, and mosques to
          boost engagement.
        </p>
      </div>

      <div>
        <h4 className="text-2xl font-semibold text-blue-700 mb-2">
          🏥 Weak Infrastructure
        </h4>
        <p className="text-gray-700 text-lg leading-relaxed">
          Deploy mobile clinics, upgrade rural facilities, and integrate
          renewable energy to strengthen infrastructure.
        </p>
      </div>

      <div>
        <h4 className="text-2xl font-semibold text-blue-700 mb-2">
          🚚 Logistical Issues
        </h4>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ensure early planning, identify backup venues, and maintain strong
          local coordination.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-8  backdrop-blur-md p-8 rounded-2xl ">
      <div>
        <h4 className="text-2xl font-semibold text-blue-700 mb-2">
          💸 Lack of Funding
        </h4>
        <p className="text-gray-700 text-lg leading-relaxed">
          Seek donations, sponsorships, and partnerships with clinics and
          businesses to ensure sustainability.
        </p>
      </div>

      <div>
        <h4 className="text-2xl font-semibold text-blue-700 mb-2">
          🤝 Resistance or Mistrust
        </h4>
        <p className="text-gray-700 text-lg leading-relaxed">
          Use trusted local influencers and culturally adapted communication to
          build community trust.
        </p>
      </div>

      <div>
        <h4 className="text-2xl font-semibold text-blue-700 mb-2">
          👩‍⚕️ Shortage of Professionals
        </h4>
        <p className="text-gray-700 text-lg leading-relaxed">
          Train and empower community health workers, medical students, and
          volunteers to fill workforce gaps.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
