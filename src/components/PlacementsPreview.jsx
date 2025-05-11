import React from 'react';
import { Link } from 'react-router-dom';

function PlacementsPreview() {
  // Sample data for placed students (showing only 3 for preview)
  const placedStudents = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      package: "₹32 LPA",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      course: "Full Stack Development",
      batch: "2023",
      testimonial: "The comprehensive curriculum and hands-on projects helped me land my dream job at Google!"
    },
    {
      id: 2,
      name: "Rahul Singh",
      role: "Data Scientist",
      company: "Amazon",
      package: "₹28 LPA",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      course: "Data Science",
      batch: "2023",
      testimonial: "The industry-relevant projects and expert mentorship were key to my success."
    },
    {
      id: 3,
      name: "Neha Patel",
      role: "Full Stack Developer",
      company: "Microsoft",
      package: "₹30 LPA",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      course: "MERN Stack",
      batch: "2023",
      testimonial: "The placement support team helped me prepare thoroughly for interviews."
    }
  ];

  return (
    <div className=" bg-gray-50">
      <div className="mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">Our </span>
            <span className="text-[#FF6B00]">Success Stories</span>
          </h2>
        </div>

        {/* Placed Students Grid (Preview) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placedStudents.map((student) => (
            <div key={student.id} className="bg-white rounded-2xl border-2 border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[300px] flex flex-col justify-between relative pt-20 items-center text-center">
              {/* Avatar Overlap, centered on card */}
              <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="relative">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover object-center bg-gray-100"
                  />
                  {/* Badge on Avatar, bottom center */}
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full text-white bg-[#FF6B00] shadow-lg whitespace-nowrap">
                    {student.company}
                  </span>
                </div>
              </div>
              {/* Card Content */}
              <div className="flex-1 flex flex-col px-3 pb-3 pt-2 items-center text-center w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center justify-center">
                  {student.name}
                  <img
                    src={student.companyLogo}
                    alt={student.company}
                    className="h-6 w-6 object-contain rounded bg-white border border-gray-100 shadow ml-2"
                  />
                </h3>
                <p className="text-[#FF6B00] font-semibold mb-2">{student.role}</p>
                <div className="flex items-center gap-2 mb-3 justify-center">
                  <span className="px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full text-sm font-medium">
                    {student.package}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {student.course}
                  </span>
                </div>
                <p className="text-gray-600 text-sm italic mb-4">"{student.testimonial}"</p>
                <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4 mt-auto w-full">
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    Batch {student.batch}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* You can add a rating or other info here if desired */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="py-12 text-center">
          <Link 
            to="/placements"
            className="inline-flex items-center gap-2 bg-[#FF6B00] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#FF6B00]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            See More Success Stories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlacementsPreview; 