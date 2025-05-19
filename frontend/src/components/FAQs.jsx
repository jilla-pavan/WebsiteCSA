import React from "react";

export const FAQs = () => {
  return (
    <div className="mt-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="text-gray-900">Our </span>
          <span className="text-[#FF6B00]">Frequently Asked Questions</span>
        </h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {[
          {
            question: "What are the prerequisites for joining the courses?",
            answer: [
              "Basic computer knowledge and a strong willingness to learn are essential",
              "Web Development: Basic HTML/CSS knowledge required",
              "Data Science: Basic mathematics and statistics understanding needed",
              "Other courses: No specific prerequisites, just enthusiasm to learn"
            ],
          },
          {
            question: "How is the placement assistance provided?",
            answer: [
              "Comprehensive placement support including:",
              "• Resume building and optimization",
              "• Mock interviews and feedback sessions",
              "• Soft skills training workshops",
              "• Direct connections with 100+ hiring partners",
              "• Lifetime placement assistance for alumni"
            ],
          },
          {
            question: "What is the course duration and schedule?",
            answer: [
              "Course Duration:",
              "• 16-24 weeks depending on the program",
              "• Flexible scheduling options available",
              "Schedule Options:",
              "• Weekday batches (Monday-Friday)",
              "• Weekend batches (Saturday-Sunday)",
              "• Live classes: 2-3 hours duration",
              "• Additional hands-on practice sessions"
            ],
          },
          {
            question: "Is there an EMI or scholarship option available?",
            answer: [
              "Payment Options:",
              "• Flexible EMI options starting from ₹5,999/month",
              "• Available through our banking partners",
              "Scholarship Opportunities:",
              "• Merit-based scholarships up to 50%",
              "• Special discounts for women candidates",
              "• Early bird discounts available"
            ],
          },
          {
            question: "What kind of projects will I work on during the course?",
            answer: [
              "Real-world projects from industry partners including:",
              "• E-commerce platforms",
              "• Social media applications",
              "• Data analytics dashboards",
              "• Machine learning models",
              "• All projects designed for practical experience",
              "• Portfolio building opportunities"
            ],
          },
          {
            question: "Do you provide internship opportunities?",
            answer: [
              "Internship Program Details:",
              "• 2-3 month paid internships",
              "• Available for top-performing students",
              "• High conversion rate to full-time roles",
              "Additional Support:",
              "• Personalized internship matching",
              "• Based on student interests and skills",
              "• Industry partner connections"
            ],
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:border-[#FF6B00]/30"
          >
            <details className="group">
              <summary className="flex items-center justify-between gap-6 w-full px-6 py-4 text-left cursor-pointer focus:outline-none">
                <span className="text-lg font-bold text-gray-900 group-hover:text-[#FF6B00] tracking-wide">
                  {faq.question}
                </span>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-orange-400"
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
                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-orange-400"
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
              <div className="px-6 pb-4">
                <ul className="text-gray-600 leading-relaxed font-medium space-y-1.5">
                  {faq.answer.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      {point.startsWith('•') ? (
                        <span className="mr-2 text-[#FF6B00]">•</span>
                      ) : null}
                      <span>{point.replace('•', '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};
