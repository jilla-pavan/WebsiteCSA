import React from "react";
import QuoteForm from "../components/QuoteForm";

export default function EnrollPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-12 pt-18 overflow-hidden">
      {/* Content Grid adjusted for wider form */}
      <div className="relative mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Left Column - Advisor Info */}
        <div className="flex flex-col justify-center items-start py-8 pr-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight">
            Talk to Our Advisor & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Unlock Your Career Potential!
            </span>
          </h1>
          <p className="text-gray-700 mb-4 text-base font-medium max-w-md">
            Get a personalized roadmap, free counseling, and dedicated placement
            support to launch your tech career.
          </p>
          <ul className="mb-8 text-gray-700 space-y-2 text-base max-w-md">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-0.5">•</span> Personalized
              Career Roadmap tailored to your skills & goals
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-0.5">•</span> Free Career
              Counseling to help you make informed decisions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 mt-0.5">•</span> Dedicated
              Placement Support to ensure you land the right opportunity
            </li>
          </ul>
        </div>

        {/* Right Column - Form Container - Wider */}
        <div className="flex flex-col justify-center items-center py-8 pl-4 w-full">
          <div className="relative w-full">
            <div className="w-full bg-white backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-orange-100 self-center transition-all duration-300">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
