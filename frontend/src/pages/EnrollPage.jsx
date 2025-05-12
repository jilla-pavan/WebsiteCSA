import React from 'react';
import QuoteForm from '../components/QuoteForm';

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex flex-col justify-center py-12 pt-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 relative">
        {/* Vertical Divider for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-orange-100 via-orange-200 to-pink-100 opacity-60 z-0" style={{transform: 'translateX(-50%)'}} />
        {/* Left Side: Heading, Description, Bullets */}
        <div className="flex flex-col justify-center items-start z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 leading-tight">
            Talk to Our Advisor & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Unlock Your Career Potential!</span>
          </h1>
          <p className="text-gray-500 mb-4 text-base font-medium">Get a personalized roadmap, free counseling, and dedicated placement support to launch your tech career.</p>
          <ul className="mb-8 text-gray-700 space-y-2 text-base">
            <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">•</span> Personalized Career Roadmap tailored to your skills & goals</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">•</span> Free Career Counseling to help you make informed decisions</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">•</span> Dedicated Placement Support to ensure you land the right opportunity</li>
          </ul>
        </div>
        {/* Right Side: Form Card with Glassmorphism and Accent Bar */}
        <div className="flex flex-col justify-center items-center h-full z-10">
          <div className="relative w-full max-w-md">
            {/* Accent Bar */}
            <div className="absolute -left-4 top-6 h-24 w-1.5 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full shadow-lg hidden md:block" />
            <div className="w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-orange-100 self-center transition-all duration-300">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 