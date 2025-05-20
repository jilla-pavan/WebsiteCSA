import React from "react";
import { useNavigate } from "react-router-dom"; // Make sure you have react-router-dom installed

function GetInTouch() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/enroll");
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-[#FF6B00] to-[#e65c00] pb-16 pt-10 md:pt-12"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Heading */}
      <div className="relative flex justify-center mb-12">
        <h2
          className="inline-block bg-gray-900 rounded-xl px-10 py-4 text-xl md:text-2xl font-bold text-center shadow-lg transform hover:scale-105 transition-transform duration-300"
          style={{ marginBottom: "-2rem" }}
        >
          <span className="text-white">Contact</span>{" "}
          <span className="text-[#FF6B00]">Us</span>
        </h2>
      </div>

      {/* Card */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 pt-12 transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-gray-900">
            Get In Touch
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#FF6B00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Visit Us
              </h4>
              <p className="text-gray-600 leading-relaxed max-w-sm text-sm">
                LIG-B/F-67/4, 4th Phase, KPHB,
                <br />
                K P H B Phase 4, Kukatpally,
                <br />
                Hyderabad, Telangana 500072, India
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#FF6B00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Email Us
              </h4>
              <a
                href="mailto:contact@careersureacademy.com"
                className="text-gray-600 hover:text-[#FF6B00] transition-colors duration-300 text-sm"
              >
                contact@careersureacademy.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#FF6B00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Call Us
              </h4>
              <div className="space-y-1">
                <a
                  href="tel:+918919734391"
                  className="text-gray-600 hover:text-[#FF6B00] transition-colors duration-300 block text-sm"
                >
                  +91 8919734391
                </a>
                <a
                  href="tel:+916301046346"
                  className="text-gray-600 hover:text-[#FF6B00] transition-colors duration-300 block text-sm"
                >
                  +91 6301046346
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleContactClick}
              className="bg-[#FF6B00] text-white py-3 px-8 rounded-lg text-base font-semibold hover:bg-[#e65c00] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
