import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">About </span>
            <span className="text-[#FF6B00]">Career Sure Academy</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We are dedicated to transforming passionate individuals into industry-ready professionals through cutting-edge education, hands-on training, and personalized career support.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <div className="bg-[#1B2537] px-6 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B00] font-bold text-2xl">4.9/5</span>
              <span className="text-white text-sm">Average Student Rating</span>
            </div>
          </div>
          <div className="bg-[#1B2537] px-6 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B00] font-bold text-2xl">15,000+</span>
              <span className="text-white text-sm">Enrolled Students</span>
            </div>
          </div>
          <div className="bg-[#1B2537] px-6 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B00] font-bold text-2xl">92%</span>
              <span className="text-white text-sm">Job Placement Rate</span>
            </div>
          </div>
          <div className="bg-[#1B2537] px-6 py-3 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B00] font-bold text-2xl">250+</span>
              <span className="text-white text-sm">Video Tutorials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs; 