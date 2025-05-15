import React from "react";

export const FAQs = () => {
  return (
    <div className="mt-16 mb-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">Our </span>
          <span className="text-[#FF6B00]">Frequently Asked Questions</span>
        </h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {[
          {
            question: "What are the prerequisites for joining the courses?",
            answer:
              "Our courses are designed for students with varying skill levels. Basic computer knowledge and a strong willingness to learn are essential. Specific prerequisites vary by course - Web Development requires basic HTML/CSS knowledge, while Data Science needs basic mathematics and statistics understanding.",
          },
          {
            question: "How is the placement assistance provided?",
            answer:
              "We offer comprehensive placement support including resume building, mock interviews, soft skills training, and direct connections with hiring partners. Our dedicated placement cell works with 100+ companies to ensure maximum placement opportunities. We also provide lifetime placement assistance for alumni.",
          },
          {
            question: "What is the course duration and schedule?",
            answer:
              "Course durations range from 16-24 weeks depending on the program. We offer flexible scheduling options including weekday batches (Monday-Friday) and weekend batches (Saturday-Sunday). Live classes are typically 2-3 hours long with additional hands-on practice sessions.",
          },
          {
            question: "Is there an EMI or scholarship option available?",
            answer:
              "Yes, we offer flexible EMI options starting from ₹5,999/month through our banking partners. Merit-based scholarships up to 50% are available for deserving candidates. We also provide special discounts for women candidates and early birds.",
          },
          {
            question: "What kind of projects will I work on during the course?",
            answer:
              "You'll work on real-world projects provided by our industry partners. These include e-commerce platforms, social media apps, data analytics dashboards, and machine learning models. All projects are designed to give you practical experience and build a strong portfolio.",
          },
          {
            question: "Do you provide internship opportunities?",
            answer:
              "Yes, we facilitate internship opportunities with our partner companies for top-performing students. These are typically 2-3 month paid internships that often convert into full-time roles. We also help students find relevant internships based on their interests and skills.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:border-[#FF6B00]/30"
          >
            <details className="group">
              <summary className="flex items-center justify-between gap-6 w-full px-6 py-4 text-left cursor-pointer focus:outline-none">
                <span className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B00]">
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
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};
