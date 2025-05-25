import React from "react";
import { useState } from "react";
import CHECKED from "/assets/icons/checked.png";

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleSummaryClick = (index, event) => {
    event.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 sm:mt-16 mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <span className="text-gray-900">Our </span>
          <span className="text-[#FF6B00]">Frequently Asked Questions</span>
        </h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
        {[
          {
            question: "What are the prerequisites for joining the courses?",
            answer: [
              "Basic computer knowledge and a strong willingness to learn are essential",
              "Web Development: Basic HTML/CSS knowledge required",
              "Data Science: Basic mathematics and statistics understanding needed",
              "Other courses: No specific prerequisites, just enthusiasm to learn",
            ],
          },
          {
            question: "How is the placement assistance provided?",
            answer: [
              "Comprehensive placement support including:",
              "Resume building and optimization",
              "Mock interviews and feedback sessions",
              "Soft skills training workshops",
              "Direct connections with 100+ hiring partners",
              "Lifetime placement assistance for alumni",
            ],
          },
          {
            question: "What is the course duration and schedule?",
            answer: [
              "16-20 weeks depending on the program",
              "Flexible scheduling options available",
              "Schedule Options:",
              "batches (Monday-Saturday)",
              "Live classes: 1-2 hours duration",
              "additional doubt sessions, monitoring classes",
            ],
          },
          {
            question: "Is there an EMI or scholarship option available?",
            answer: [
              "Payment Options are flexible",
              "Flexible EMI options, pay in installements (two installements)",
              "Discount through referals",
            ],
          },
          {
            question: "What kind of projects will I work on during the course?",
            answer: [
              "Real-world projects from industry partners including:",
              "E-commerce platforms",
              "Social media applications",
              "Data analytics dashboards",
              "Machine learning models",
              "all projects designed for practical experience",
              "Portfolio building opportunities",
            ],
          },
          {
            question: "Do you provide internship opportunities?",
            answer: [
              "2-3 month paid internships",
              "Available for top-performing students",
              "High conversion rate to full-time roles",
              "Personalized internship matching",
              "Based on student interests and skills",
              "Industry partner connections",
            ],
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-[#FF6B00]/30"
          >
            <details className="group" open={openIndex === index}>
              <summary
                className="flex items-center justify-between gap-3 sm:gap-4 w-full px-4 sm:px-6 py-4 sm:py-5 text-left cursor-pointer focus:outline-none"
                onClick={(event) => handleSummaryClick(index, event)}
              >
                <span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors duration-300">
                  {faq.question}
                </span>
                <span className="relative flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 transition-opacity duration-300 text-orange-500 ${openIndex === index ? 'opacity-0' : 'opacity-100'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 transition-opacity duration-300 text-orange-500 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4"
                    />
                  </svg>
                </span>
              </summary>
              {/* Animated Content Area */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen opacity-100 delay-100' : 'max-h-0 opacity-0'}`}
              >
                {/* Actual Content Wrapper */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 border-t border-gray-100 mt-1">
                  <ul className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-1.5 sm:space-y-2">
                    {faq.answer.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <img
                          src={CHECKED}
                          alt="Checked"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 flex-shrink-0 mr-2 text-[#FF6B00]"
                        />
                        <span>{point.replace('•', '').trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};
