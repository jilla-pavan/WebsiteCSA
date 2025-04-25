import React from "react";

function GetInTouch() {
  return (
    <section id="contact" className="pt-24 pb-16 bg-white w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 rounded-full text-[#FF6B00] text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-gray-900">Get in </span>
            <span className="text-[#FF6B00]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you on your journey to a successful tech career.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#FF6B00]/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF6B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h4>
                  <p className="text-gray-600">
                    123 Education Street,<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#FF6B00]/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF6B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Email Us</h4>
                  <a href="mailto:info@careersureacademy.com" className="text-gray-600 hover:text-[#FF6B00] transition-colors block">
                    info@careersureacademy.com
                  </a>
                  <a href="mailto:admissions@careersureacademy.com" className="text-gray-600 hover:text-[#FF6B00] transition-colors block mt-1">
                    admissions@careersureacademy.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#FF6B00]/20 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF6B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Call Us</h4>
                  <a href="tel:+911234567890" className="text-gray-600 hover:text-[#FF6B00] transition-colors block">
                    +91 (123) 456-7890
                  </a>
                  <a href="tel:+911234567891" className="text-gray-600 hover:text-[#FF6B00] transition-colors block mt-1">
                    +91 (123) 456-7891
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#FF6B00]/90 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2"
              >
                Send Message
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 inline-block" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
