import React from 'react';

const CourseDetailsModal = ({ isOpen, onClose, course }) => {
  if (!isOpen) return null;

  const handleEnrollClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-TFPS1co0mS1lrmb-7-0Ffln-LLKDKN8UzXr6Y7XSG8l1vw/viewform?usp=header', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Container - Fixed size with scrollable content */}
      <div className="relative w-full max-w-2xl h-[90vh] m-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          {/* Header - Fixed */}
          <div className="p-6 border-b border-gray-700">
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
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{course.title}</h2>
              <p className="text-gray-400">{course.description}</p>
            </div>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            <div className="space-y-6">
              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Fixed */}
          <div className="p-6 border-t border-gray-700 bg-gray-800/50">
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-white">{course.price}</div>
                  <div className="text-sm text-gray-400">EMI from {course.emi}/month</div>
                </div>
                <button 
                  onClick={handleEnrollClick}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
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

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default CourseDetailsModal; 