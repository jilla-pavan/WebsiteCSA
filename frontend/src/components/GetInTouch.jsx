import React, { useState } from "react";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF6B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600">
                    123 Education Street,<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF6B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Email Us</h4>
                  <a href="mailto:info@careersureacademy.com" className="text-gray-600 hover:text-[#FF6B00] block">
                    info@careersureacademy.com
                  </a>
                  <a href="mailto:admissions@careersureacademy.com" className="text-gray-600 hover:text-[#FF6B00] block mt-1">
                    admissions@careersureacademy.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF6B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Call Us</h4>
                  <a href="tel:+911234567890" className="text-gray-600 hover:text-[#FF6B00] block">
                    +91 (123) 456-7890
                  </a>
                  <a href="tel:+911234567891" className="text-gray-600 hover:text-[#FF6B00] block mt-1">
                    +91 (123) 456-7891
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Send us a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#FF6B00]/90 transition-colors flex items-center justify-center"
              >
                Send Message
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
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
