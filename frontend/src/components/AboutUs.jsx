import React from "react";
import CERTIFICATE from "/assets/related_Pics/sample-certificate.png";

function AboutUs() {
  return (
    <section id="about" className="w-full bg-gray-50 mb-18">
      <div className="mx-auto">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            <span className="text-gray-900">About </span>
            <span className="text-primary">Career Sure Academy</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            We are dedicated to transforming passionate individuals into
            industry-ready professionals through cutting-edge education,
            hands-on training, and personalized career support.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-extrabold text-primary mb-2 tracking-tight">
              4.9/5
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Average Student Rating
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-extrabold text-primary mb-2 tracking-tight">
              15,000+
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Enrolled Students
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-extrabold text-primary mb-2 tracking-tight">
              95%
            </div>
            <p className="text-gray-400 text-sm font-medium">Placement Rate</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-extrabold text-primary mb-2 tracking-tight">
              50+
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Industry Partners
            </p>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="mt-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gray-900">Our </span>
              <span className="text-primary">Certification</span>
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img
                    src={CERTIFICATE}
                    alt="Career Sure Academy Certificate"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Industry-Recognized Certification
                  </h3>
                  <p className="text-gray-600 text-base mb-6">
                    Our certification program is designed to validate your
                    skills and knowledge in your chosen field. Each certificate
                    is a testament to your dedication and expertise.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-base">
                        Industry-recognized credentials
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-base">
                        Digital verification system
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-base">
                        Lifetime validity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
