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
      className="relative w-full bg-[#FF6B00] pb-16 pt-8 md:pt-12"
    >
      {/* Heading */}
      <div className="relative flex justify-center">
        <h2
          className="inline-block bg-gray-900 rounded-xl px-12 py-6 text-2xl md:text-3xl font-bold text-center shadow-lg"
          style={{ marginBottom: "-2.5rem" }}
        >
          <span className="text-white">Contact</span>{" "}
          <span className="text-[#FF6B00]">Us</span>
        </h2>
      </div>
      {/* Card */}
      <div className="max-w-2xl mx-auto mt-0">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-12 pt-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-900">
            Contact Information
          </h3>
          <div className="space-y-4 md:space-y-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FF6B00]"
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
              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                  Visit Us
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  123 Education Street,
                  <br />
                  Tech City, TC 12345
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FF6B00]"
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
              <div className="min-w-0">
                <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                  Email Us
                </h4>
                <a
                  href="mailto:info@careersureacademy.com"
                  className="text-sm md:text-base text-gray-600 hover:text-[#FF6B00] block break-all"
                >
                  info@careersureacademy.com
                </a>
                <a
                  href="mailto:admissions@careersureacademy.com"
                  className="text-sm md:text-base text-gray-600 hover:text-[#FF6B00] block mt-1 break-all"
                >
                  admissions@careersureacademy.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FF6B00]"
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
              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                  Call Us
                </h4>
                <a
                  href="tel:+911234567890"
                  className="text-sm md:text-base text-gray-600 hover:text-[#FF6B00] block"
                >
                  +91 (123) 456-7890
                </a>
                <a
                  href="tel:+911234567891"
                  className="text-sm md:text-base text-gray-600 hover:text-[#FF6B00] block mt-1"
                >
                  +91 (123) 456-7891
                </a>
              </div>
            </div>
          </div>
          {/* Contact Us Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleContactClick}
              className="bg-[#FF6B00] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#e65c00] transition-colors duration-200"
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
