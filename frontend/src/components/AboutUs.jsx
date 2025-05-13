import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="w-full bg-gray-50">
      <div className="p-2 mx-auto px-4 max-w-7xl">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">About </span>
            <span className="text-primary">Career Sure Academy</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are dedicated to transforming passionate individuals into industry-ready professionals through cutting-edge education, hands-on training, and personalized career support.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-secondary p-6 rounded-xl transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center text-center">
              <span className="text-primary font-bold text-4xl mb-2">4.9/5</span>
              <span className="text-white text-sm md:text-base">Average Student Rating</span>
            </div>
          </div>
          <div className="bg-secondary p-6 rounded-xl transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center text-center">
              <span className="text-primary font-bold text-4xl mb-2">15,000+</span>
              <span className="text-white text-sm md:text-base">Enrolled Students</span>
            </div>
          </div>
          <div className="bg-secondary p-6 rounded-xl transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center text-center">
              <span className="text-primary font-bold text-4xl mb-2">95%</span>
              <span className="text-white text-sm md:text-base">Placement Rate</span>
            </div>
          </div>
          <div className="bg-secondary p-6 rounded-xl transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center text-center">
              <span className="text-primary font-bold text-4xl mb-2">50+</span>
              <span className="text-white text-sm md:text-base">Industry Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs; 