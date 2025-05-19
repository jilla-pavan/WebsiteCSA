import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="w-full bg-gray-50 py-20">
      <div className="mx-auto">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
            <span className="text-gray-900">About </span>
            <span className="text-primary">Career Sure Academy</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            We are dedicated to transforming passionate individuals into industry-ready professionals through cutting-edge education, hands-on training, and personalized career support.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-extrabold text-primary mb-2 tracking-tight">
              4.9/5
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Average Student Rating
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-extrabold text-primary mb-2 tracking-tight">
              15,000+
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Enrolled Students
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-extrabold text-primary mb-2 tracking-tight">
              95%
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Placement Rate
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-extrabold text-primary mb-2 tracking-tight">
              50+
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Industry Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs; 