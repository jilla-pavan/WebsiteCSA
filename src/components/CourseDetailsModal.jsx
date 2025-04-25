import React from 'react';

const CourseDetailsModal = ({ isOpen, onClose, course }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Course Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{course.title}</h2>
            <p className="text-gray-400">{course.description}</p>
          </div>

          {/* Course Content */}
          <div className="space-y-6">
            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Curriculum</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">{module.title}</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-white">{course.price}</div>
                  <div className="text-sm text-gray-400">EMI from {course.emi}/month</div>
                </div>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Enroll Now
                </button>
              </div>
              <div className="text-sm text-gray-400">
                <p>• Lifetime access to course materials</p>
                <p>• Certificate of completion</p>
                <p>• 1:1 mentorship support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal; 