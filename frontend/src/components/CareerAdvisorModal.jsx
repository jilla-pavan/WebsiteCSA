import React from "react";
import whatsappIcon from "/assets/whatsApp-Icon.png";
import { useNavigate } from "react-router-dom";
import CHECKED from "/assets/icons/checked.png";

const CareerAdvisorModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-poppins">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl m-4 z-10">
        <div className="card flex flex-col sm:flex-row overflow-hidden p-0 bg-white rounded-2xl shadow-2xl">
          {/* Content */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center relative min-h-[280px]">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-primary transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
              Talk to Our Advisor &{" "}
              <span className="text-[#FF6B00]">
                Unlock Your Career Potential!
              </span>
            </h2>

            <ul className="text-gray-600 space-y-3 mb-8 mt-2">
              <li className="flex items-start gap-3">
                <img
                  src={CHECKED}
                  alt="Checked"
                  className="w-5 h-5 mt-1 flex-shrink-0 text-[#FF6B00]"
                />
                <span>
                  Personalized Career Roadmap tailored to your skills & goals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img
                  src={CHECKED}
                  alt="Checked"
                  className="w-5 h-5 mt-1 flex-shrink-0 text-green-300"
                />
                <span>
                  Free Career Counseling to help you make informed decisions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img
                  src={CHECKED}
                  alt="Checked"
                  className="w-5 h-5 mt-1 flex-shrink-0 text-[#FF6B00]"
                />
                <span>
                  Dedicated Placement Support to ensure you land the right
                  opportunity
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a
                href="https://api.whatsapp.com/send/?phone=916301046346&text=Hi%21+I%E2%80%99m+very+interested+%E2%80%94+can+you+send+me+more+info+as+soon+as+possible%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto px-6 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-5 h-5 rounded-full"
                />
                WhatsApp Us
              </a>
              <button
                className="btn bg-[#FF6B00] hover:bg-[#E65C00] text-white flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => navigate("/enroll")}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1Z" />
                </svg>
                Request a Call Back
              </button>
            </div>
          </div>

          {/* Cartoon Image Section */}
          <div className="hidden sm:block w-[320px] bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/career-counseling-concept-illustration_114360-1000.jpg')] bg-contain bg-center bg-no-repeat opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
              <p className="text-base text-gray-700 text-center font-medium">
                Let's shape your future together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisorModal;
