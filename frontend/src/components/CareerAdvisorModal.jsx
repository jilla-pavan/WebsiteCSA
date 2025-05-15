import React from "react";

const CareerAdvisorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-poppins">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl m-2 z-10">
        <div className="card flex flex-col sm:flex-row overflow-hidden p-0">
          {/* Content */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center relative min-h-[220px]">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-primary transition-colors"
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
            <h2 className="section-title gradient-text mb-3 text-xl sm:text-2xl md:text-3xl text-left leading-tight">
              Talk to Our Advisor & Unlock Your Career Potential!
            </h2>
            <ul className="text-gray-700 space-y-2 mb-5 mt-2 list-disc list-inside text-sm sm:text-base text-left">
              <li>
                Personalized Career Roadmap tailored to your skills & goals
              </li>
              <li>
                Free Career Counseling to help you make informed decisions
              </li>
              <li>
                Dedicated Placement Support to ensure you land the right
                opportunity
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full">
              <a
                href="https://wa.me/916301046346"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.32 4.84a1 1 0 0 0 1.22 1.22l4.84-1.32A12 12 0 1 0 20.52 3.48ZM12 22a10 10 0 1 1 10-10A10 10 0 0 1 12 22Zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9s-.44-.14-.62.14-.72.9-.88 1.08-.32.21-.6.07a8.18 8.18 0 0 1-2.4-1.48 9.06 9.06 0 0 1-1.68-2.08c-.18-.31 0-.48.13-.62.13-.13.28-.34.42-.51a.56.56 0 0 0 .08-.56c-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.47h-.53a1 1 0 0 0-.72.34A2.94 2.94 0 0 0 7 10.5a5.09 5.09 0 0 0 1.1 2.7c1.5 2 3.6 3.3 5.6 3.6a4.13 4.13 0 0 0 2.7-.7 2.2 2.2 0 0 0 .7-1.6c0-.23-.09-.33-.18-.37Z" />
                </svg>
                WhatsApp Us
              </a>
              <button
                className="btn btn-primary flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
                onClick={() => (window.location.href = '/enroll')}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1Z" />
                </svg>
                Request a Call Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisorModal;
